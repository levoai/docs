#!/bin/bash
# Comprehensive SSL detection at node level
# Usage: SSH into node and run this script directly

set -euo pipefail  # Add strict error handling

# Create output file with timestamp
OUTPUT_FILE="ssl-detection-report-$(date +%Y%m%d-%H%M%S).txt"
echo "SSL Detection Report will be saved to: $OUTPUT_FILE"
echo ""

# Function to write to both console and file
log_output() {
    if [ "$1" = "-e" ]; then
        shift
        echo -e "$*" | tee -a "$OUTPUT_FILE"
    else
        echo "$*" | tee -a "$OUTPUT_FILE"
    fi
}

log_output "===== COMPREHENSIVE SSL/TLS DETECTION REPORT ====="
log_output "Node: $(hostname)"
log_output "Date: $(date)"
log_output "Architecture: $(uname -m)"
log_output "OS: $(cat /etc/os-release 2>/dev/null | grep PRETTY_NAME | cut -d'"' -f2 || echo "Unknown")"
log_output "Platform: $(uname -s)"
log_output "====================================================="

# Enhanced container detection
CONTAINER_TYPE=""
CONTAINER_INFO=""

# Check for various container types
if [ -f /.dockerenv ]; then
    CONTAINER_TYPE="Docker"
    CONTAINER_INFO="Docker container detected"
elif [ -f /run/.containerenv ]; then
    CONTAINER_TYPE="Podman"
    CONTAINER_INFO="Podman container detected"
elif [ -f /proc/1/cgroup ] && grep -q 'docker\|lxc\|containerd' /proc/1/cgroup 2>/dev/null; then
    if grep -q 'docker' /proc/1/cgroup 2>/dev/null; then
        CONTAINER_TYPE="Docker"
        CONTAINER_INFO="Docker container detected via cgroup"
    elif grep -q 'lxc' /proc/1/cgroup 2>/dev/null; then
        CONTAINER_TYPE="LXC"
        CONTAINER_INFO="LXC container detected"
    elif grep -q 'containerd' /proc/1/cgroup 2>/dev/null; then
        CONTAINER_TYPE="Containerd"
        CONTAINER_INFO="Containerd container detected"
    fi
elif [ -n "${KUBERNETES_SERVICE_HOST:-}" ] || [ -f /var/run/secrets/kubernetes.io ]; then
    CONTAINER_TYPE="Kubernetes"
    CONTAINER_INFO="Kubernetes pod detected"
elif command -v systemd-detect-virt >/dev/null 2>&1 && systemd-detect-virt --container >/dev/null 2>&1; then
    CONTAINER_TYPE="Systemd"
    CONTAINER_INFO="Systemd container detected"
fi

if [ -n "$CONTAINER_TYPE" ]; then
    log_output "🐳 Container Environment: $CONTAINER_INFO"
    log_output "Container Type: $CONTAINER_TYPE"

    # Additional container info
    if [ -f /proc/1/cgroup ]; then
        log_output "Container ID: $(grep -o 'docker/[a-f0-9]*' /proc/1/cgroup 2>/dev/null | head -1 | cut -d'/' -f2 || echo "Unknown")"
    fi

    # Check for container-specific SSL paths
    log_output "Container-specific SSL paths will be checked"
fi

# macOS-specific paths
if [[ "$(uname -s)" == "Darwin" ]]; then
    log_output "🍎 macOS detected - using macOS-specific paths"
    BREW_PREFIX=$(brew --prefix 2>/dev/null || echo "/opt/homebrew")
    SSL_PATHS="$BREW_PREFIX/lib $BREW_PREFIX/opt /usr/lib /System/Library/Frameworks"
    SSL_BIN_PATHS="$BREW_PREFIX/bin $BREW_PREFIX/opt /usr/bin /usr/local/bin"
else
    # Enhanced paths for container environments
    if [ -n "$CONTAINER_TYPE" ]; then
        # Container-specific paths
        SSL_PATHS="/usr/lib* /lib* /opt /usr/local/lib* /opt/homebrew/lib /opt/conda/lib"
        SSL_BIN_PATHS="/usr/bin /usr/local/bin /opt /opt/homebrew/bin /opt/conda/bin"

        # Check for common container base images
        if [ -f /etc/alpine-release ]; then
            log_output "🐧 Alpine Linux container detected"
            SSL_PATHS="$SSL_PATHS /lib/apk/db"
        elif [ -f /etc/debian_version ]; then
            log_output "🐧 Debian/Ubuntu container detected"
        elif [ -f /etc/redhat-release ]; then
            log_output "🐧 RedHat/CentOS container detected"
        elif [ -f /etc/amazon-linux-release ]; then
            log_output "🐧 Amazon Linux container detected"
        fi
    else
        SSL_PATHS="/usr/lib* /lib* /opt"
        SSL_BIN_PATHS="/usr/bin /usr/local/bin /opt"
    fi
fi

# Check for common SSL implementations
log_output -e "\n1. CHECKING FOR SSL IMPLEMENTATIONS"

log_output -e "\n1.1 OpenSSL"
if command -v openssl >/dev/null 2>&1; then
    openssl version -a 2>/dev/null || log_output "OpenSSL command available but version info failed"
else
    log_output "OpenSSL command not available"
fi

# Check for OpenSSL libraries with macOS compatibility
if [[ "$(uname -s)" == "Darwin" ]]; then
    find $SSL_PATHS -name "libssl*.dylib" -o -name "libssl*.so*" 2>/dev/null | head -5 || log_output "No OpenSSL libraries found in standard locations"
else
    ls -la /usr/lib*/libssl.so* /lib*/libssl.so* 2>/dev/null || log_output "No OpenSSL libraries found in standard locations"
fi

log_output -e "\n1.2 BoringSSL"
find $SSL_PATHS -name "libboringssl.so*" -o -name "libboringssl*.dylib" 2>/dev/null || log_output "No explicit BoringSSL libraries found"
# Check for BoringSSL signature in OpenSSL
if strings $SSL_PATHS/libssl* 2>/dev/null | grep -q "boringssl"; then
    log_output "BoringSSL signature found in OpenSSL libraries"
fi

log_output -e "\n1.3 GnuTLS"
if command -v gnutls-cli >/dev/null 2>&1; then
    gnutls-cli --version 2>/dev/null || log_output "GnuTLS command available but version info failed"
else
    log_output "GnuTLS command not available"
fi
find $SSL_PATHS -name "libgnutls*.so*" -o -name "libgnutls*.dylib" 2>/dev/null || log_output "No GnuTLS libraries found in standard locations"

log_output -e "\n1.4 NSS (Network Security Services)"
if command -v certutil >/dev/null 2>&1; then
    certutil --version 2>/dev/null || log_output "NSS certutil available but version info failed"
else
    log_output "NSS certutil not available"
fi
find $SSL_PATHS -name "libnss*.so*" -o -name "libnss*.dylib" 2>/dev/null || log_output "No NSS libraries found in standard locations"

log_output -e "\n1.5 mbedTLS (formerly PolarSSL)"
find $SSL_PATHS \( -name "libmbedtls.so*" -o -name "libmbedcrypto.so*" -o -name "libmbedtls*.dylib" -o -name "libmbedcrypto*.dylib" \) 2>/dev/null || log_output "No mbedTLS libraries found"

log_output -e "\n1.6 WolfSSL (formerly CyaSSL)"
find $SSL_PATHS -name "libwolfssl.so*" -o -name "libwolfssl*.dylib" 2>/dev/null || log_output "No WolfSSL libraries found"

log_output -e "\n1.7 Java JSSE"
if command -v java >/dev/null 2>&1; then
    java -version 2>&1 || log_output "Java found but version info failed"
else
    log_output "Java not found"
fi
find /usr/lib/jvm /opt/java /Library/Java/JavaVirtualMachines -name "jsse.jar" 2>/dev/null || log_output "No JSSE JAR found in standard locations"

log_output -e "\n1.8 LibreSSL"
if strings $SSL_PATHS/libssl* 2>/dev/null | grep -q "LibreSSL"; then
    log_output "LibreSSL signature found in SSL libraries"
fi
find $SSL_PATHS -name "libtls.so*" -o -name "libtls*.dylib" 2>/dev/null || log_output "No LibreSSL tls libraries found in standard locations"

log_output -e "\n1.9 s2n (Amazon's SSL implementation)"
find $SSL_PATHS -name "libs2n.so*" -o -name "libs2n*.dylib" 2>/dev/null || log_output "No s2n libraries found"

log_output -e "\n1.10 Rustls (Rust SSL implementation)"
find $SSL_PATHS -name "librustls.so*" -o -name "librustls*.dylib" 2>/dev/null || log_output "No Rustls libraries found"

log_output -e "\n1.11 Botan (C++ crypto library)"
find $SSL_PATHS -name "libbotan*.so*" -o -name "libbotan*.dylib" 2>/dev/null || log_output "No Botan libraries found"

log_output -e "\n1.12 BearSSL (lightweight SSL)"
find $SSL_PATHS -name "libbearssl.so*" -o -name "libbearssl*.dylib" 2>/dev/null || log_output "No BearSSL libraries found"

# Check package managers for SSL implementations
log_output -e "\n1.13 PACKAGE MANAGER CHECKS"
if command -v dpkg >/dev/null 2>&1; then
    log_output "Debian/Ubuntu packages:"
    dpkg -l | grep -i ssl | head -5
fi
if command -v rpm >/dev/null 2>&1; then
    log_output "RPM packages:"
    rpm -qa | grep -i ssl | head -5
fi
if command -v brew >/dev/null 2>&1; then
    log_output "Homebrew packages:"
    brew list | grep -i ssl | head -5
fi
if command -v apk >/dev/null 2>&1; then
    log_output "Alpine packages:"
    apk list --installed | grep -i ssl | head -5
fi

# Container-specific SSL checks
if [ -n "$CONTAINER_TYPE" ]; then
    log_output -e "\n1.14 CONTAINER-SPECIFIC SSL CHECKS"

    # Check for SSL in common container base images
    if [ -f /etc/alpine-release ]; then
        log_output "Alpine SSL packages:"
        apk list --installed | grep -E 'ssl|tls|crypto' | head -5
    fi

    # Check for SSL in Python packages (common in containers)
    if command -v pip >/dev/null 2>&1; then
        log_output "Python SSL packages:"
        pip list | grep -i ssl | head -5
    fi

    # Check for SSL in Node.js packages
    if command -v npm >/dev/null 2>&1; then
        log_output "Node.js SSL packages:"
        npm list --depth=0 | grep -i ssl | head -5
    fi

    # Check for SSL in Go modules
    if [ -f go.mod ]; then
        log_output "Go SSL modules:"
        grep -i ssl go.mod | head -5
    fi
fi

# Comprehensive scan of all SSL/TLS related libraries
log_output -e "\n2. GENERAL SSL/TLS LIBRARY SCAN"
log_output "Top 15 SSL/TLS related libraries:"
if [[ "$(uname -s)" == "Darwin" ]]; then
    find $SSL_PATHS -path "*/python*" -prune -o -name "*ssl*.dylib" -o -name "*ssl*.so*" -o -name "*tls*.dylib" -o -name "*tls*.so*" -o -name "*crypto*.dylib" -o -name "*crypto*.so*" 2>/dev/null | grep -v "python\|perl" | head -15
else
    find $SSL_PATHS -path "*/python*" -prune -o -name "*ssl*.so*" -o -name "*tls*.so*" -o -name "*crypto*.so*" 2>/dev/null | grep -v "python\|perl" | head -15
fi

# Process inspection with improved efficiency
log_output -e "\n3. PROCESSES USING SSL"
if command -v lsof >/dev/null 2>&1; then
    log_output "Top 10 processes using SSL libraries:"
    lsof | grep -E 'libssl|libcrypto|libtls' | awk '{print $1}' | sort | uniq -c | sort -nr | head -10
else
    log_output "Alternative process SSL detection (lsof not available):"
    log_output "⚠️  This method requires read access to /proc filesystem"
    if [[ "$(uname -s)" == "Darwin" ]]; then
        log_output "macOS detected - using ps for process detection"
        ps aux | grep -E 'ssl|tls|crypto' | grep -v grep | head -10
    else
        find /proc -maxdepth 1 -name "[0-9]*" -type d 2>/dev/null | while read -r proc_dir; do
            pid=$(basename "$proc_dir")
            if [ -f "$proc_dir/maps" ] && grep -q "ssl\|tls\|crypto" "$proc_dir/maps" 2>/dev/null; then
                cmd=$(cat "$proc_dir/cmdline" 2>/dev/null | tr '\0' ' ')
                log_output "PID $pid: $cmd"
                grep -E 'ssl|tls|crypto' "$proc_dir/maps" 2>/dev/null | head -2
            fi
        done | head -15
    fi
fi

# Container-specific process analysis
if [ -n "$CONTAINER_TYPE" ]; then
    log_output -e "\n3.1 CONTAINER PROCESS ANALYSIS"
    log_output "Container processes using SSL:"

    # Check for common containerized applications
    for app in nginx apache2 httpd node python java go; do
        if pgrep -x "$app" >/dev/null 2>&1; then
            log_output "✓ $app process found (PID: $(pgrep -x "$app"))"
            # Check if it's using SSL libraries
            if lsof -p $(pgrep -x "$app") 2>/dev/null | grep -q "libssl\|libcrypto"; then
                log_output "  - Using SSL libraries"
            fi
        fi
    done
fi

# Improved SSL version detection
log_output -e "\n4. SSL/TLS VERSION DETECTION"

# Better OpenSSL version detection
for lib in $SSL_PATHS/libssl*; do
    if [ -f "$lib" ]; then
        version=$(strings "$lib" 2>/dev/null | grep -E "OpenSSL|BoringSSL|LibreSSL" | head -1)
        if [ -n "$version" ]; then
            log_output "✓ Found: $lib - $version"
        fi
    fi
done 2>/dev/null

if command -v gnutls-cli >/dev/null 2>&1; then
    GNUTLS_VER=$(gnutls-cli --version 2>/dev/null | head -1)
    log_output "✓ GnuTLS detected: $GNUTLS_VER"
fi

# Check for SSL configuration files
log_output -e "\n5. SSL CONFIGURATION FILES"
if [[ "$(uname -s)" == "Darwin" ]]; then
    find /etc /usr/local/etc $BREW_PREFIX/etc -name "*ssl*" -o -name "*tls*" 2>/dev/null | grep -v ".bak\|.old" | head -10
else
    find /etc /usr/local/etc -name "*ssl*" -o -name "*tls*" 2>/dev/null | grep -v ".bak\|.old" | head -10
fi

# Container-specific configuration
if [ -n "$CONTAINER_TYPE" ]; then
    log_output -e "\n5.1 CONTAINER SSL CONFIGURATION"
    log_output "Container-specific SSL configs:"
    find /etc/ssl /etc/openssl /usr/local/etc/ssl -name "*.conf" -o -name "*.cnf" 2>/dev/null | head -5
fi

# Summary with improved detection
log_output -e "\n6. SUMMARY"
SSL_IMPLS=""
if command -v openssl >/dev/null 2>&1; then SSL_IMPLS+="OpenSSL "; fi
if strings $SSL_PATHS/libssl* 2>/dev/null | grep -q "BoringSSL"; then SSL_IMPLS+="BoringSSL "; fi
if command -v gnutls-cli >/dev/null 2>&1; then SSL_IMPLS+="GnuTLS "; fi
if find $SSL_PATHS -name "libnss3.so*" -o -name "libnss3.dylib" >/dev/null 2>&1; then SSL_IMPLS+="NSS "; fi
if find $SSL_PATHS -name "libmbedtls.so*" -o -name "libmbedtls.dylib" >/dev/null 2>&1; then SSL_IMPLS+="mbedTLS "; fi
if find $SSL_PATHS -name "libwolfssl.so*" -o -name "libwolfssl.dylib" >/dev/null 2>&1; then SSL_IMPLS+="WolfSSL "; fi
if command -v java >/dev/null 2>&1; then SSL_IMPLS+="Java-JSSE "; fi
if strings $SSL_PATHS/libssl* 2>/dev/null | grep -q "LibreSSL"; then SSL_IMPLS+="LibreSSL "; fi
if find $SSL_PATHS -name "libs2n.so*" -o -name "libs2n.dylib" >/dev/null 2>&1; then SSL_IMPLS+="s2n "; fi
if find $SSL_PATHS -name "librustls.so*" -o -name "librustls.dylib" >/dev/null 2>&1; then SSL_IMPLS+="Rustls "; fi
if find $SSL_PATHS -name "libbotan*.so*" -o -name "libbotan*.dylib" >/dev/null 2>&1; then SSL_IMPLS+="Botan "; fi
if find $SSL_PATHS -name "libbearssl.so*" -o -name "libbearssl.dylib" >/dev/null 2>&1; then SSL_IMPLS+="BearSSL "; fi

if [ -z "$SSL_IMPLS" ]; then
    log_output "No standard SSL implementations positively identified."
else
    log_output "Detected SSL implementations: $SSL_IMPLS"
fi

# Container-specific recommendations
if [ -n "$CONTAINER_TYPE" ]; then
    log_output -e "\n7. CONTAINER-SPECIFIC RECOMMENDATIONS"
    log_output "For eBPF SSL hooking in containers:"
    log_output "• Use host-level eBPF programs to monitor container processes"
    log_output "• Consider using eBPF CO-RE (Compile Once, Run Everywhere) for portability"
    log_output "• Monitor container runtime events for SSL library loading"
    log_output "• Use cgroup-based filtering to target specific containers"
    log_output "• Consider using eBPF maps to correlate container IDs with SSL usage"
fi

log_output -e "\nThis report can help determine which SSL hooking strategies to employ for eBPF-based API observability."

# Final message about the output file
log_output -e "\n====================================================="
log_output "Report saved to: $OUTPUT_FILE"
log_output "You can share this file with Levo support for analysis."
log_output "=====================================================" 