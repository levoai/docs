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


-----------------------------------------------------------------------

## Install on Kubernetes

### Prerequisites
- Kubernetes version `TBD xx.xx.xx` and above.
- [Helm v3](https://helm.sh/docs/intro/install/) installed and working.
- The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
- `kubectl` access to the cluster, with `cluster-admin` permissions.

### 1. Install levoai Helm repo
```bash
helm repo add levoai https://charts.levo.ai
```

### 2. Create `levoai` namespace & install Sensor
```bash
helm upgrade --install -n levoai levoai-sensor levoai/levoai-ebpf-sensor --create-namespace
```

### 3. Verify connectivity with Satellite
TBD

Please proceed to the next step.

-----------------------------------------------------------------------

## Install on Linux host via Docker

### Prerequisites
- Docker version `18.03.0` and above
- Admin (or `sudo`) privileges on the Docker host

### 1. Install Sensor

```bash
# Replace `hostname|IP` with the values you noted down from the Satellite install`
sudo docker run --restart unless-stopped -e OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=<hostname|IP:port> -v /sys/kernel/debug:/sys/kernel/debug -v /proc:/host/proc  --privileged levoai/ebpf_sensor:0.6.6 -c python -d
```

### 2. Verify connectivity with Satellite
TBD

Please proceed to the next step.

-----------------------------------------------------------------------

## Install on Debian based Linux via `apt`

### 1. Configure Linux host to access Google Artifact Registry

```bash
echo 'deb http://packages.cloud.google.com/apt apt-transport-artifact-registry-stable main' | sudo tee -a /etc/apt/sources.list.d/artifact-registry.list

sudo apt update

sudo apt install apt-transport-artifact-registry
```

### 2. Configure levo apt repo to download/install sensor artifacts

```bash
echo "deb https://us-apt.pkg.dev/projects/levo-platform apt-levo main" | sudo tee -a /etc/apt/sources.list.d/artifact-registry.list

sudo apt update
```

### 3. Install Sensor

```bash
sudo apt-get install levo-ebpf-sensor
```

### 4. Configure Satellite Address
TBD

### 5. Start the Sensor
TBD

### 6. Verify connectivity with Satellite
TBD

Please proceed to the next step.
