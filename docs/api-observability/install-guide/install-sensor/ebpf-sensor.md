---
sidebar_position: 2
---

# Install eBPF Sensor

## i. Prerequisites
- Compatibility script (from step 1) indicates the Linux host (that you want to instrument) is compatible.
- Satellite has been successfully installed.
- You have noted down the Satellite's `hostname:port` or `ip-address:port` information.
- The Satellite is reachable (via HTTP/s) from the location where you are going to install the Sensor.

## ii. Pick an `Application Name`
Auto discovered API endpoints and their OpenAPI specifications are show in the [API Catalog](/security-contract-testing/concepts/api-catalog/api-catalog.md), grouped under an application name. The application name helps segregate and group API endpoints from different environments, similar to how file folders work in an operating system.

Pick a descriptive name which will be used in the subsequent step below. For example: `my-test-app`.

## iii. Follow instructions for your platform
Follow instructions for your specific platform/method below:
- [Install on Kubernetes](#install-on-kubernetes)
- [Install on Linux host via Docker](#install-on-linux-host-via-docker)
- [Install on Debian based Linux Distributions via `apt`](#install-on-debian-based-linux-via-apt)
- [Install on RPM based Linux Distributions via `yum`](#sensor-yum-install)

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
# Specify below the 'Application Name' chosen earlier.
#
helm upgrade levoai-sensor levoai/levoai-ebpf-sensor \
  --install \
  --namespace levoai \
  --create-namespace \
  --set sensor.config.default-service-name=<'Application Name' chosen earlier> \
  --set sensor.config.collector-endpoint=<hostname|IP:port>
  --set sensor.config.env=<'Application environment'>
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

#### NOTE:
The default address for the collector in helm installations is `levoai-collector:4317`.
This address assumes that the Satellite is installed in the same cluster (and namespace) as the Sensor.
If you wish to, you may also request Levo to host the Satellite for you. In this case, you will need to set the `collector-endpoint` to `https://collector.levo.ai` and specify an organization ID (`organization-id`) via helm values.

```shell
helm upgrade --set sensor.config.env=<your-application-environment> --set sensor.config.collector-endpoint=https://collector.levo.ai --set sensor.config.organization-id=<your-org-id> levoai-sensor levoai/levoai-ebpf-sensor -n levoai
```

Please proceed to the next step, if there are no errors.

<br></br>

-----------------------------------------------------------------------

## Install on Linux host via Docker

### Prerequisites
- Docker Engine version `18.03.0` and above
- Admin (or `sudo`) privileges on the Docker host

### 1. Install Sensor

> If you are installing the Satellite and Sensor on the ***same*** Linux host, please do ***NOT*** use `localhost` as the hostname below. Use the Linux host's `IP address`, or `domain name` instead. This is required as the Sensor runs inside a Docker container, and `localhost` resolves to the Sensor container's IP address, instead of the Linux host.

```bash
# Replace '<collector-address>' with the values you noted down from the Satellite install
#
# Specify below the 'Application Name' chosen earlier. Do not quote the 'Application Name'
#
sudo docker run --restart unless-stopped \
  -v /sys/kernel/debug:/sys/kernel/debug -v /proc:/host/proc \
  --privileged --detach levoai/ebpf_sensor:0.29.6 \
  --host-proc-path /host/proc/ \
  --collector-endpoint <collector-address> \
  --env <'application-environment'> \
  --default-service-name <'Application Name' chosen earlier>
```

#### NOTE:
The default address for the collector in Docker-based Sensor installations is `https://collector.levo.ai`.
This address assumes that Levo is hosting the Satellite for you, and you must also specify an organization ID when starting the sensor (with the `--organization-id` flag).
If you wish, you may also host the Satellite yourself and specify the address of the collector in the self-hosted Satellite to direct the Sensor's traffic to it.

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

### 2. Configure Linux host to access `Levo apt repo`

```bash
curl -fsSL https://us-apt.pkg.dev/doc/repo-signing-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/us-apt-repo-signing-key.gpg
```

```bash
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/us-apt-repo-signing-key.gpg] \
 https://us-apt.pkg.dev/projects/levoai apt-levo main" \
| sudo tee -a /etc/apt/sources.list.d/artifact-registry.list > /dev/null
```

```bash
sudo apt update
```

### 3. Download/install Sensor artifacts

```bash
sudo apt install levo-ebpf-sensor=0.29.6
```

### 4. Start the Sensor
Please take a look at the [Running the Sensor as a Systemd Service](#running-sensor-systemd) section for further instructions.

---

## Install on RPM based Linux Distributions via `yum` {#sensor-yum-install}

### 1. Configure the package manager

Configure `yum` to access Levo's RPM packages using the following command:

```shell
sudo tee -a /etc/yum.repos.d/levo.repo << EOF
[levo]
name=Levo.ai
baseurl=https://us-yum.pkg.dev/projects/levoai/yum-levo
enabled=1
repo_gpgcheck=0
gpgcheck=0
EOF
```

### 2. Install the eBPF Sensor

Install the eBPF Sensor from Levo's RPM repository.

1. Update the list of available packages:
  ```shell
  sudo yum makecache
  ```

1. Install the package in your repository.
  ```shell
  sudo yum install levo-ebpf-sensor-0.29.6
  ```

Enter `y` when prompted.

### 3. Start the Sensor
Please take a look at the [Running the Sensor as a Systemd Service](#running-sensor-systemd) section for further instructions.

---

## Running the Sensor as a Systemd Service {#running-sensor-systemd}

### 1. Configure Satellite Address
The Satellite (collector) address is configured in `/etc/levo/sensor/config.yaml`.

#### NOTE:
The default address for the collector in Systemd installations is `https://collector.levo.ai`.
This address assumes that Levo is hosting the Satellite for you, and you must also specify an organization ID (`organization-id`) via the config file.
If you wish, you may also host the Satellite yourself and specify the address of the collector in the self-hosted Satellite to direct the Sensor's traffic to it.


Edit `/etc/levo/sensor/config.yaml`, and set `collector-endpoint` (under Satellite Settings) to the address noted from the Satellite install.

```yaml
...
# --------------------------------------------------------------------------------------------
# Satellite Settings:
# --------------------------------------------------------------------------------------------

# Levo Organization ID. This must be specified when the collector is hosted by Levo.
# organization-id: ""

# host:port for the collector service receiving the Sensor's API traces.
collector-endpoint: <Use the default (https://collector.levo.ai) or set to a custom address>
env: <Your application environment eg. dev, staging, prod etc.>
...
```
**Note**: If you change the Satellite address later, you have to restart the Sensor, since it's not a hot property.

### 2. Configure Application Name
The `Application Name` is configured in `/etc/levo/sensor/config.yaml`.

Edit `/etc/levo/sensor/config.yaml`, and set `default-service-name` to the `Application Name` chosen earlier.

```yaml
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
**Note**: If you change the `Application Name` later, you have to restart the Sensor, since it's not a hot property.


### 3. Start the Sensor
```bash
sudo systemctl start levo-ebpf-sensor
```

### 4. Verify connectivity with Satellite
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


### 5. Sensor's resource limits
By default, sensor is restricted to use up to 50% of CPU and 2GB memory.

If you ever need to change these limits, you need to modify `CPUQuota` and `MemoryMax` in the below systemd config file under `[Service]` section:

#### #1. Open the config file `/usr/lib/systemd/system/levo-ebpf-sensor.service` and modify `CPUQuota` and `MemoryMax`

```
sudo vi /usr/lib/systemd/system/levo-ebpf-sensor.service
```
For example,

If you want to limit sensor's CPU usage to 0.75 of a core, then set `CPUQuota=75%`. You can set `CPUQuota=200%` to go upto two full cores of CPU.

If you want to limit sensor's memory usage to 1GB, then set `MemoryMax=1G` 

#### #2. Reload the config

```
systemctl daemon-reload
```

#### #3. Restart the sensor

```
sudo systemctl restart levo-ebpf-sensor
```