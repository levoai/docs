---
sidebar_position: 4
---

# Install Sensor

## Prerequisites
- Compatibility script (from step 1) indicates the Linux host (that you want to instrument) is compatible.
- Satellite has been successfully installed.
- You have noted down the Satellite's `hostname:port` or `ip-address:port` information.
- The Satellite is reachable (via HTTP/s) from the location where you are going to install the Sensor.

## Follow instructions for your platform
Follow instructions for your specific platform/method below:
- [Install on Kubernetes](./install-sensor.md#install-on-kubernetes)
- [Install on Linux host via Docker](./install-sensor.md#install-on-linux-host-via-docker)
- [Install on Debian based Linux via `apt`](./install-sensor.md#install-on-debian-based-linux-via-apt)

<br></br>

-----------------------------------------------------------------------

## Install on Kubernetes

### Prerequisites
- Kubernetes version >= v1.21.9
- [Helm v3](https://helm.sh/docs/intro/install/) installed and working.
- The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
- `kubectl` access to the cluster, with `cluster-admin` permissions.

### 1. Install levoai Helm repo
```bash
helm repo add levoai https://charts.levo.ai
```

### 2. Create `levoai` namespace & install Sensor
```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
# If Sensor is installed on same cluster as Satellite, use 'levoai-collector.levoai:4317'
helm upgrade --install -n levoai --create-namespace \
  --set sensor.otel.grpcEndpoint=<hostname|IP:port> \
  levoai-sensor levoai/levoai-ebpf-sensor
```


### 3. Verify connectivity with Satellite
TBD

Please proceed to the next step.

<br></br>

-----------------------------------------------------------------------

## Install on Linux host via Docker

### Prerequisites
- Docker version `18.03.0` and above
- Admin (or `sudo`) privileges on the Docker host

### 1. Install Sensor

```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
sudo docker run --restart unless-stopped -e OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=<hostname|IP:port> -v /sys/kernel/debug:/sys/kernel/debug -v /proc:/host/proc  --privileged levoai/ebpf_sensor:0.6.6 -c python -d
```

### 2. Verify connectivity with Satellite
TBD

Please proceed to the next step.

<br></br>

-----------------------------------------------------------------------

## Install on Debian based Linux via `apt`

### 1. Install `curl` and `gnupg`

```bash
sudo apt install gnupg

sudo apt install curl
```

### 2. Configure Linux host to access `Google Artifact Registry` and `Levo apt repo`

```bash
curl -fsSL https://us-apt.pkg.dev/doc/repo-signing-key.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/us-apt-repo-signing-key.gpg >/dev/null

curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/gcloud-packages-key.gpg >/dev/null

echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/gcloud-packages-key.gpg] \
 https://packages.cloud.google.com/apt apt-transport-artifact-registry-stable main" \
| sudo tee -a /etc/apt/sources.list.d/artifact-registry.list > /dev/null

echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/us-apt-repo-signing-key.gpg] \
 https://us-apt.pkg.dev/projects/levo-platform apt-levo main" \
| sudo tee -a /etc/apt/sources.list.d/artifact-registry.list > /dev/null

sudo apt update
```

### 3. Download/install sensor artifacts

```bash
sudo apt install apt-transport-artifact-registry

sudo apt-get install levo-ebpf-sensor
```

### 4. Configure Satellite Address
```bash
# The Satellite address is configured in '/etc/default/levo-ebpf-sensor'.
# Refer to the 'host:port' values you noted down from the Satellite install.
# Edit '/etc/default/levo-ebpf-sensor', and set 'OTEL_EXPORTER_OTLP_TRACES_ENDPOINT' to
# 'host:port' address, noted down from the Satellite install.
#
# Note: If you change the Satellite address, you have to restart the Sensor since
# it's not a hot property
sudo vi /etc/default/levo-ebpf-sensor
```

### 5. Start the Sensor
```bash
sudo systemctl start levo-ebpf-sensor
```

### 6. Verify connectivity with Satellite
```bash
TBD
journalctl -u levo-ebpf-sensor.service -b -f

# If journalctl isn't giving logs, check this
sudo cat syslog | grep 'levo-ebpf-sensor'
```

Please proceed to the next step.
