---
sidebar_position: 4
keywords: [API Security, ZAP, OWASP, Linux, macOS, Windows, API Observability]
---

# Quickstart with Minikube

Run the following command to find out which driver your minikube installation is using:

```shell
minikube profile list
```

```
|----------|-----------|---------|--------------|------|---------|---------|-------|--------|
| Profile  | VM Driver | Runtime |      IP      | Port | Version | Status  | Nodes | Active |
|----------|-----------|---------|--------------|------|---------|---------|-------|--------|
| minikube | docker    | docker  | 192.168.49.2 | 8443 | v1.27.3 | Running |     1 | *      |
|----------|-----------|---------|--------------|------|---------|---------|-------|--------|
```

The second column in the output, `VM Driver`, should list the minikube driver of your existing minikube profile.

If you want to test the eBPF Sensor in minikube, we recommend using minikube with a VM driver (e.g. kvm2 or virtualbox). Or if you are already using a VM, you may run minikube on bare metal (with the "none" driver).

You can find the full list of minikube drivers [in the minikube docs](https://minikube.sigs.k8s.io/docs/drivers/).

Based on your minikube driver, follow the instructions below:


## Bare-metal or VM-based driver
Follow the [standard Kubernetes installation instructions](/api-observability/install-guide/install-sensor/ebpf-sensor#install-on-kubernetes).


## Docker driver
Since the eBPF Sensor needs access to the `/proc` folder on the host, there are additional steps to ensure that the directory is mounted correctly inside the Sensor container for running it in minikube with the Docker driver.

First, run:

```shell
minikube mount /proc:/ggproc
```

Then, in a new terminal window, run:

```shell
helm repo add levoai https://charts.levo.ai && helm repo update
helm pull levoai/levoai-ebpf-common-tasks --untar
cd levoai-ebpf-common-tasks/
sed -i "s/path: \/proc/path: \/ggproc/" templates/deployment.yaml
helm upgrade --install levoai-common-tasks . -n levoai
```
