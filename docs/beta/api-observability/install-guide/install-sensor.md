---
sidebar_position: 4
---

# Install Sensor

## i. Prerequisites
- Compatibility script (from step 1) indicates the Linux host (that you want to instrument) is compatible.
- Satellite has been successfully installed.
- You have noted down the Satellite's `hostname:port` or `ip-address:port` information.
- The Satellite is reachable (via HTTP/s) from the location where you are going to install the Sensor.

## ii. Pick an `Application Name`
Auto discovered API endpoints and their OpenAPI specifications are show in the [API Catalog](../../../concepts/api-catalog/api-catalog.md), grouped under an application name. The application name helps segregate and group API endpoints from different environments, similar to how file folders work in an operating system.

Pick a descriptive name which will be used in the subsequent step below. For example: `my-test-app`.

## iii. Follow instructions for your platform
Follow instructions for your specific platform/method below:
- [Install on Kubernetes](./install-sensor.md#install-on-kubernetes)
- [Install on Linux host via Docker](./install-sensor.md#install-on-linux-host-via-docker)
- [Install on Debian based Linux via `apt`](./install-sensor.md#install-on-debian-based-linux-via-apt)

<br></br>

-----------------------------------------------------------------------

## Install on Kubernetes

### Prerequisites
- Kubernetes version >= v1.18.0
- [Helm v3](https://helm.sh/docs/intro/install/) installed and working.
- The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
- `kubectl` access to the cluster, with `cluster-admin` permissions.

### 1. Install levoai Helm repo
```bash
helm repo add levoai https://charts.levo.ai && helm repo update
```

### 2. Create `levoai` namespace & install Sensor
```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
# If Sensor is installed on same cluster as Satellite, use 'levoai-collector.levoai:4317'
#
# Specify below the 'Application Name' chosen earlier. Do not quote the 'Application Name'
# Example: sensor.args={--default-service-name,my-test-app}
#
helm upgrade --install -n levoai --create-namespace \
  --set sensor.otel.grpcEndpoint=<hostname|IP:port> \
  --set "sensor.args={--default-service-name,<'Application Name' chosen earlier>}" \
  levoai-sensor levoai/levoai-ebpf-sensor 
```


### 3. Verify connectivity with Satellite

#### i. Check Sensor health

Check the health of the Sensor by executing the following:

```bash
kubectl -n levoai get pods | grep levoai-sensor
```                              
If the Sensor is healthy, you should see output similar to below. 

```bash
levoai-sensor-747fb4aaa9-gv8g9   1/1     Running   0             1m8s
```

#### ii. Check connectivity

Execute the following command to check for connectivity health:

```bash
# Please specify the actual pod name for levoai-sensor below
kubectl -n levoai logs <levoai-sensor pod name> | grep "Initial connection with Collector"
```
If connectivity is healthy, you should see output similar to below.

```
2022/06/13 21:15:40 729071	INFO [ebpf_sensor.cpp->main:120]	Initial connection with Collector was successful.
```

**Please contact `support@levo.ai` if you notice health/connectivity related errors.**

Please proceed to the next step, if there are no errors.

<br></br>

-----------------------------------------------------------------------

## Install on Linux host via Docker

### Prerequisites
- Docker version `18.03.0` and above
- Admin (or `sudo`) privileges on the Docker host

### 1. Install Sensor

> If you are installing the Satellite and Sensor on the ***same*** Linux host, please do ***NOT*** use `localhost` as the hostname below. Use the Linux host's `IP address`, or `domain name` instead. This is required as the Sensor runs inside a Docker container, and `localhost` resolves to the Sensor container's IP address, instead of the Linux host.

```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
#
# Specify below the 'Application Name' chosen earlier. Do not quote the 'Application Name'
#
sudo docker run --restart unless-stopped \
  -e OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=<hostname|IP:port> \
  -v /sys/kernel/debug:/sys/kernel/debug -v /proc:/host/proc \
  --privileged levoai/ebpf_sensor:stable \
  --default-service-name <'Application Name' chosen earlier> -d
```

### 2. Verify connectivity with Satellite
Execute the following command to check for connectivity health:

```bash
# Please specify the actual container name for levoai-sensor below
docker logs <levoai-sensor container name> | grep "Initial connection with Collector"
```
If connectivity is healthy, you should see output similar to below.

```bash
2022/06/13 21:15:40 729071	INFO [ebpf_sensor.cpp->main:120]	Initial connection with Collector was successful.
```

Please proceed to the next step, if there are no errors.

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
```

```bash
curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/gcloud-packages-key.gpg >/dev/null
```

```bash
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/gcloud-packages-key.gpg] \
 https://packages.cloud.google.com/apt apt-transport-artifact-registry-stable main" \
| sudo tee -a /etc/apt/sources.list.d/artifact-registry.list > /dev/null
```

```bash
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/us-apt-repo-signing-key.gpg] \
 https://us-apt.pkg.dev/projects/levo-platform apt-levo main" \
| sudo tee -a /etc/apt/sources.list.d/artifact-registry.list > /dev/null
```

```bash
sudo apt update
```

### 3. Download/install sensor artifacts

```bash
sudo apt install apt-transport-artifact-registry
```

```bash
sudo apt-get install levo-ebpf-sensor
```

### 4. Configure Satellite Address
The Satellite address is configured in `/etc/default/levo-ebpf-sensor`. 

Edit `/etc/default/levo-ebpf-sensor`, and set `OTEL_EXPORTER_OTLP_TRACES_ENDPOINT` to `host:port` address, noted down from the Satellite install.

```bash
# Environment Variables for levo-ebpf-sensor.service

# host:port_number of endpoint receiving data from the sensor
OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=<host:port>
```
Note: If you change the Satellite address, you have to restart the Sensor, since it's not a hot property.


### 5. Configure Application Name
The `Application Name` is configured in `/etc/levo/sensor/config.yaml`.

Edit `/etc/levo/sensor/config.yaml`, and set `default-service-name` to the `Application Name` chosen earlier.

```bash
# --------------------------------------------------------------------------------------------
# Default Application Name:
#
# Auto discovered API endpoints and their OpenAPI specifications are show in the API Catalog
# grouped under this application name. The application name helps segregate and group API
# endpoints from different environments.
# --------------------------------------------------------------------------------------------
#
default-service-name: <'Application Name' chosen earlier>
# --------------------------------------------------------------------------------------------

```


### 6. Start the Sensor
```bash
sudo systemctl start levo-ebpf-sensor
```

### 7. Verify connectivity with Satellite
```bash
sudo journalctl -u levo-ebpf-sensor.service -b -f

# If 'journalctl' isn't tailing logs, use syslog:
sudo cat /var/log/syslog | grep 'levo-ebpf-sensor'
```

#### Connection Success
If connectivity is healthy, you should see output similar to below.

```bash
2022/06/13 21:15:40 729071	INFO [ebpf_sensor.cpp->main:120]	Initial connection with Collector was successful.
```

#### Connection Failures
If the Sensor is unable to connect with the Satellite, you will notice log entries similar to the one below. Please contact `support@levo.ai` for assistance.

```
Initial connection with Collector failed. However, the sensor will keep attempting to send future traces.

[OTLP TRACE GRPC Exporter] Export() failed: failed to connect to all addresses
```

Please proceed to the next step, if there are no errors.
