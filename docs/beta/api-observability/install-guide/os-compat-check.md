---
sidebar_position: 2
---

# Compatibility Check
The Sensor is currently supported on Linux Hosts & Kubernetes running *directly* on Linux.

Levo provides a simple bash script that *checks* your Linux host for compatibility.

Execute the following on the Linux host you want instrument:

export const CurlScript = () => (
  <pre>
    <code>
        curl -s {window.location.protocol + '//' + window.location.host + '/scripts/sensor/check-compatibility.sh'} | bash
    </code>
  </pre>
);

<CurlScript/>

If you want to **audit** the script prior to running, you can download it <a href={window.location.protocol + '//' + window.location.host + '/scripts/sensor/check-compatibility.sh'}> here </a>.

## Host is compatible!

If your host is compatible with the Sensor (as reported by the script), you can proceed with the installation.

## Host is *NOT* compatible

**Levo can provide a custom build of the Sensor that is compatible with your system.**

If the host is not compatible, it is very likely due missing [BTF](https://www.kernel.org/doc/html/latest/bpf/btf.html) info. BTF provides the Sensor with essential type information required to instrument the host. Most modern Linux distributions come prepackaged with BTF.

please contact `support@levo.ai` with the diagnostic information provided by the script. We will provide a compatible Sensor promptly.

-------------------------------------------------------
## Supported Platforms

### What OS platforms are supported?

- Linux running on bare metal, virtual machine, and container formats.
- Linux Kernel versions 4.14 and above.
- Debian, Fedora, OpenSUSE, and Amazon Linux based distributions

### What Kubernetes platforms are supported?
- [minikube on Linux](https://minikube.sigs.k8s.io/docs/)
- [AKS](https://azure.microsoft.com/en-us/services/kubernetes-service/#overview)
- [GKE (Debian Nodes Only. No Container-Optimized OS)](https://cloud.google.com/kubernetes-engine)
- [EKS](https://aws.amazon.com/eks/)

Support for Docker Desktop, Docker Desktop based Kubernetes, and minikube on MacOS is on the roadmap.
