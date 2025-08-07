#!/bin/bash
# Detects SSL/TLS implementations on the system and running processes

set -euo pipefail

# Check if we can use sudo for elevated access
SUDO_CMD=""
if command -v sudo >/dev/null 2>&1 && sudo -n true 2>/dev/null; then
    SUDO_CMD="sudo"
    echo "🔐 Sudo available - will use elevated privileges when needed"
elif [[ $EUID -eq 0 ]]; then
    echo "🔐 Running as root - full access available"
else
    echo "⚠️  Warning: Not running as root and sudo not available. Results may be incomplete."
fi

# Create output file with timestamp
OUTPUT_FILE="ssl-detection-report-$(date +%Y%m%d-%H%M%S).txt"
echo "SSL Detection Report will be saved to: $OUTPUT_FILE"
echo ""

# Function to write to both console and file
log_output() {
    echo "$*" | tee -a "$OUTPUT_FILE"
}

# Function to extract version from library
extract_version() {
    local lib="$1"
    if [ -f "$lib" ]; then
        # Look for SSL-related version strings in the binary
        strings "$lib" 2>/dev/null | grep -E "OpenSSL|GnuTLS|NSS|LibreSSL|BoringSSL|mbedTLS|WolfSSL|Rustls|Botan|BearSSL|s2n" | head -1 || echo "version unknown"
    else
        echo "version unknown"
    fi
}

# Function to safely read a file with sudo if needed
safe_read() {
    local file="$1"
    if [ -r "$file" ]; then
        cat "$file"
    elif [ -n "$SUDO_CMD" ]; then
        $SUDO_CMD cat "$file" 2>/dev/null || echo ""
    else
        echo ""
    fi
}

log_output "===== SSL/TLS DETECTION FOR EBPF HOOKING ====="
log_output "Node: $(hostname)"
log_output "Date: $(date)"
log_output "OS: $(cat /etc/os-release 2>/dev/null | grep PRETTY_NAME | cut -d'"' -f2 || uname -s)"
log_output "=============================================="

# Detect container environment
if [ -f /.dockerenv ] || [ -f /run/.containerenv ] || [ -n "${KUBERNETES_SERVICE_HOST:-}" ]; then
    log_output "Container environment detected"
fi

log_output ""
log_output "1. SSL/TLS IMPLEMENTATIONS (Installed)"

# Check common SSL implementations commands & versions
for cmd in openssl gnutls-cli certutil java; do
    if command -v "$cmd" >/dev/null 2>&1; then
        case $cmd in
            openssl) version=$($cmd version 2>/dev/null) ;;
            gnutls-cli) version=$($cmd --version 2>/dev/null | head -1) ;;
            certutil) version=$($cmd --version 2>/dev/null) ;;
            java) version=$($cmd -version 2>&1 | head -1) ;;
        esac
        log_output "$cmd version: $version"
    else
        log_output "$cmd not found"
    fi
done

log_output ""
log_output "2. SSL/TLS LIBRARIES IN RUNNING PROCESSES"
log_output "Scanning /proc/[pid]/maps for SSL library usage..."

SSL_PATTERNS=(
    "libssl"      # OpenSSL
    "libcrypto"   # OpenSSL crypto
    "libgnutls"   # GnuTLS
    "libnss"      # NSS
    "libtls"      # LibreSSL
    "libboringssl" # BoringSSL
    "libmbedtls"  # mbedTLS
    "libwolfssl"  # WolfSSL
    "librustls"   # Rustls
    "libbotan"    # Botan
    "libbearssl"  # BearSSL
    "libs2n"      # s2n
)

# Build anchored regex with word boundaries to avoid partial matches
SSL_REGEX=$(IFS="|"; echo "\\b($(printf '%s' "${SSL_PATTERNS[*]}" | sed 's/ /|/g'))")

declare -A found_libs_map  # map lib_path -> version + count

if [ -d /proc ]; then
    for proc_dir in /proc/[0-9]*/; do
        # Skip if proc_dir doesn't exist (process might have terminated)
        if [ ! -d "$proc_dir" ]; then
            continue
        fi
        
        maps_file="${proc_dir}maps"
        if [ -f "$maps_file" ]; then
            pid=$(basename "$proc_dir")
            proc_name="unknown"
            
            # Try to read comm file with sudo if needed
            comm_file="${proc_dir}comm"
            if [ -f "$comm_file" ]; then
                proc_name=$(safe_read "$comm_file" | tr -d '\0' || echo "unknown")
            fi
            
            # Extract libs matching regex (case insensitive) - use || true to prevent exit on no matches
            # Also wrap in error handling to prevent exit on permission issues
            libs_found=$(safe_read "$maps_file" | grep -E -i "$SSL_REGEX" 2>/dev/null | awk 'NF>=6{print $6}' | sort -u || true)
            
            if [ -n "$libs_found" ]; then
                for lib in $libs_found; do
                    if [ -f "$lib" ]; then
                        # Aggregate counts & versions
                        if [[ -z "${found_libs_map[$lib]+_}" ]]; then
                            version=$(extract_version "$lib")
                            found_libs_map["$lib"]="1|$version"
                        else
                            # increment count
                            count=${found_libs_map[$lib]%%|*}
                            version=${found_libs_map[$lib]#*|}
                            count=$((count+1))
                            found_libs_map["$lib"]="$count|$version"
                        fi
                    fi
                done
            fi
        fi
    done

    if [ ${#found_libs_map[@]} -eq 0 ]; then
        log_output "No processes currently using SSL libraries detected."
    else
        log_output "Aggregated SSL libraries usage across processes:"
        for lib in "${!found_libs_map[@]}"; do
            count=${found_libs_map[$lib]%%|*}
            version=${found_libs_map[$lib]#*|}
            log_output "  $lib (Version: $version) - Used by $count process(es)"
        done
    fi
else
    log_output "/proc filesystem not available - cannot check running processes."
fi

log_output ""
log_output "3. SUMMARY"
SSL_IMPLS=""
for sslcmd in openssl gnutls-cli certutil java; do
    if command -v "$sslcmd" >/dev/null 2>&1; then
        case $sslcmd in
            openssl) SSL_IMPLS+="OpenSSL " ;;
            gnutls-cli) SSL_IMPLS+="GnuTLS " ;;
            certutil) SSL_IMPLS+="NSS " ;;
            java) SSL_IMPLS+="Java-JSSE " ;;
        esac
    fi
done

if [ -z "$SSL_IMPLS" ]; then
    log_output "No standard SSL implementations found."
else
    log_output "Detected SSL implementations: $SSL_IMPLS"
fi

log_output ""
log_output "This report identifies SSL implementations for eBPF hooking."
log_output "=============================================="
log_output "Report saved to: $OUTPUT_FILE"
log_output "You can share this file with Levo support for analysis."
log_output "=============================================="
