#!/usr/bin/env bash
# Determines whether Levo.ai's eBPF Sensor can be run on the system this script is executed on.

helpful_exit() {
    printf "%s\n" "Please contact support@levo.ai for further assistance."
    exit 1
}

IFS=" " read kernel_name kernel_version <<< "$(uname -sr)"

if [[ ! $kernel_name =~ Linux|GNU* ]]; then
    printf "%s\n" "The Sensor is only compatible with Linux kernels."
    helpful_exit
fi

if grep -q "Container-Optimized OS from Google" /etc/os-release; then
    printf "%s\n" "The Sensor is not compatible with Google's Container-Optimized OS yet."
    helpful_exit
fi

IFS=. read major minor residue <<< "${kernel_version%%*-}"

if [[ $major -lt 4 ]] || [[ $major -eq 4 && $minor -lt 14 ]]; then
    printf "%s\n" "The Sensor is only compatible with Linux Kernel versions 4.14 and above."
    helpful_exit
fi

if [[ -f "/sys/kernel/btf/vmlinux" ]]; then
    printf "%s\n" "Your system is compatible with Levo.ai's eBPF Sensor."
else
    printf "%s\n" "Please contact support@levo.ai with the information below, and we will provide a custom build of the Sensor for you."
    printf "%s\n" "Diagnostic information:"
    printf "%s\n" "Kernel: $kernel_version"
    if type -p lsb_release >/dev/null; then
        printf "%s\n" "Distribution: $(lsb_release -d -s)"
    elif [[ -r /etc/os-release ]]; then
        printf "%s\n" "Distribution Info:"
        printf "%s\n" "$(grep -E '(^NAME|VERSION=)' /etc/os-release |& sed 's/^/\t/';)"
    else
        printf "%s\n" "Distribution: Unknown"
    fi
fi
