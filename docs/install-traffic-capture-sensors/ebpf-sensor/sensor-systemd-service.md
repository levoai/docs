---
sidebar_position: 6
---

# Sensor as a Systemd Service

## Running the Sensor as a Systemd Service {#running-sensor-systemd}

### 1. Configure Satellite Address
The Satellite (collector) address is configured in `/etc/levo/sensor/config.yaml`.

#### NOTE:
The default address for the collector in Systemd installations is `https://collector.levo.ai`.
This address assumes that Levo is hosting the Satellite for you, and you must also specify an organization ID (`organization-id`) via the config file.
If you wish, you may also host the Satellite yourself and specify the address of the collector in the self-hosted Satellite to direct the Sensor's traffic to it.


Edit `/etc/levo/sensor/config.yaml`, set `satellite-url` (under Satellite Settings) to the desired `host:port` value,
and set `organization-id` to the Organization ID fetched from the Levo Dashboard

```yaml
...
organization-id: <Org ID>
# --------------------------------------------------------------------------------------------
# Satellite Settings:
# --------------------------------------------------------------------------------------------

# Levo Organization ID. This must be specified when the collector is hosted by Levo.
# organization-id: ""

# host:port for the collector service receiving the Sensor's API traces.
satellite-url: <Use the default (https://collector.levo.ai) or set to a custom address>
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

### Configure sensor environment
The eBPF sensor environment is configured in `/etc/default/levo-ebpf-sensor`. The default env value is `staging`

Edit `/etc/default/levo-ebpf-sensor`, and set `LEVO_ENV` to the desired env value (eg. `prod`, `qa`)

```bash
# Environment Variables for levo-ebpf-sensor.service
MALLOC_CONF="background_thread:true,narenas:1,tcache:false,dirty_decay_ms:0,muzzy_decay_ms:0,abort_conf:true"
LEVO_ENV="staging"
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

#### 1. Open the config file `/usr/lib/systemd/system/levo-ebpf-sensor.service` and modify `CPUQuota` and `MemoryMax`

```
sudo vi /usr/lib/systemd/system/levo-ebpf-sensor.service
```
For example,

If you want to limit sensor's CPU usage to 0.75 of a core, then set `CPUQuota=75%`. You can set `CPUQuota=200%` to go upto two full cores of CPU.

If you want to limit sensor's memory usage to 1GB, then set `MemoryMax=1G`

#### 2. Reload the config

```
systemctl daemon-reload
```

#### 3. Restart the sensor

```
sudo systemctl restart levo-ebpf-sensor
```
