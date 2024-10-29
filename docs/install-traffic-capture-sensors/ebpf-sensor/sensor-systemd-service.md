---
sidebar_position: 6
---

# Sensor as a Systemd Service

## Running the Sensor as a Systemd Service {#running-sensor-systemd}

### Configure Satellite Address, Organization-Id and Environment

The Satellite address is configured in `/etc/default/levo-ebpf-sensor`. The default Satellite URL is `https://collector.levo.ai`.

Edit `/etc/default/levo-ebpf-sensor`, set the `LEVO_SATELLITE_URL` variable to the desired `host:port` value,
and set the `LEVO_ORG_ID` to the Organization ID fetched from the Levo Dashboard.
Set `LEVO_ENV` to the desired environment name in which you wish to see you applications on the Levo Dashboard.

```bash
...
LEVO_ENV="your-env"
LEVO_SATELLITE_URL="your-satellite-url"
LEVO_ORG_ID="your-org-id"
...
```

Additional sensor configs are present in the file `/etc/levo/sensor/config.yaml`


**A Sensor *restart* is required for the config changes to take effect.**


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
