---
sidebar_position: 3
title: Install eBPF Sensor on Docker | Levo.ai Documentation
---

import version from '@site/src/version.json';
import CodeBlock from '@theme/CodeBlock';

# Sensor via Docker

## Install on Linux host via Docker

### Prerequisites
- Docker Engine version `18.03.0` and above
- Admin (or `sudo`) privileges on the Docker host

### 1. Install Sensor

> If you are installing the Satellite and Sensor on the ***same*** Linux host, please do ***NOT*** use `localhost` as the satellite-address below. Use `host.docker.internal`, or the Linux host's `IP address` or `domain name` instead. This is required as the Sensor runs inside a Docker container, and `localhost` resolves to the Sensor container's IP address, instead of the Linux host.

<CodeBlock language="bash">
{`
# Replace '<satellite-address>' with the values you noted down from the Satellite install
#
# Specify below the 'Application Name' chosen earlier. Do not quote the 'Application Name'
#
sudo docker run --restart unless-stopped \
  -v /sys/kernel/debug:/sys/kernel/debug -v /proc:/host/proc \
  --add-host host.docker.internal:host-gateway \
  --privileged --detach levoai/ebpf_sensor:${version.ebpf_sensor_version} \
  --host-proc-path /host/proc/ \
  --satellite-url <satellite-address> \
  --organization-id <Org ID> \
  --env <'application-environment'> \
  --default-service-name <'Application Name' chosen earlier>
`}
</CodeBlock>

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
--------------------------------------------------------------

## Sensor Lifecycle Management

### Uninstall Sensor
```bash
# Get the container id of the Sensor
docker ps | grep "levoai/ebpf_sensor"

# Remove the Sensor
docker rm -f <container id from docker ps step above>
```

### Get Sensor Logs
```bash
# Get the container id of the Sensor
docker ps | grep "levoai/ebpf_sensor"

sudo docker logs <container id from docker ps step above>
```

### Upgrade Sensor
- Uninstall Sensor
- Pull new Sensor image
```bash
docker pull levoai/ebpf_sensor:latest
```
- Reinstall Sensor

### Manage Sensor Configuration
Please refer to [Sensor Configuration](/install-traffic-capture-sensors/common-tasks/sensor-configuration.mdx), and [Applying Configuration Changes](/install-traffic-capture-sensors/common-tasks/sensor-configuration.mdx#running-via-docker).

