#!/usr/bin/env bash
# Determines whether Levo.ai's eBPF Sensor can be run on the system this script is executed on.

helpful_exit() {
  printf "%s\n" "Please contact support@levo.ai for further assistance."
  exit 1
}

IFS=" " read kernel_name kernel_version kernel_architecture <<<"$(uname -srm)"

if [[ ! $kernel_name =~ Linux|GNU* ]]; then
  printf "%s\n" "The Sensor is only compatible with Linux kernels."
  helpful_exit
fi

if [[ ! $kernel_architecture =~ x86_64|aarch64 ]]; then
  printf "%s\n" "The Sensor is only compatible with 64-bit (x86_64 and aarch64) Linux kernels."
  helpful_exit
fi

if grep -q "Container-Optimized OS from Google" /etc/os-release; then
  printf "%s\n" "The Sensor is not compatible with Google's Container-Optimized OS yet."
  helpful_exit
fi

IFS=. read major minor residue <<<"${kernel_version%%*-}"

if [[ $major -lt 4 ]] || [[ $major -eq 4 && $minor -lt 14 ]]; then
  printf "%s\n" "The Sensor is only compatible with Linux Kernel versions 4.14 and above."
  helpful_exit
fi

if [[ -f "/sys/kernel/btf/vmlinux" ]]; then
  printf "%s\n" "Your system is compatible with Levo.ai's eBPF Sensor."
  exit
fi

available_btf_kernels=(
  "4.14.106-79.86.amzn1.x86_64"
  "4.14.165-mikep"
  "4.14.248-129.473.amzn1.x86_64"
  "4.14.256-197.484.amzn2.x86_64"
  "4.14.281-144.502.amzn1.x86_64"
  "4.14.314-237.533.amzn2.x86_64"
  "4.14.318-241.531.amzn2.x86_64"
  "4.14.336-256.559.amzn2.x86_64"
  "4.14.336-257.562.amzn2.x86_64"
  "4.14.336-257.566.amzn2.x86_64"
  "4.14.336-257.568.amzn2.x86_64"
  "4.15.0-1054-aws"
  "4.15.0-1084-fips"
  "4.18.0-477.27.1.el8_8.x86_64"
  "5.4.0-1029-aws"
  "5.4.0-1055-aws"
  "5.4.0-1059-aws"
  "5.4.0-1065-gke"
  "5.4.0-1066-gke"
  "5.4.0-1067-gke"
  "5.4.0-1103-aws"
)
for i in "${available_btf_kernels[@]}"; do
  if [[ "$kernel_version" == "$i" ]]; then
    printf "%s\n" "Your system is compatible with Levo.ai's eBPF Sensor."
    exit
  fi
done

printf "%s\n" "Please contact support@levo.ai with the information below, and we will provide a custom build of the Sensor for you."
printf "%s\n" "Diagnostic information:"
printf "%s\n" "Kernel: $kernel_version"
if type -p lsb_release >/dev/null; then
  printf "%s\n" "Distribution: $(lsb_release -d -s)"
elif [[ -r /etc/os-release ]]; then
  printf "%s\n" "Distribution Info:"
  printf "%s\n" "$(grep -E '(^NAME|VERSION=)' /etc/os-release |& sed 's/^/\t/')"
else
  printf "%s\n" "Distribution: Unknown"
fi
