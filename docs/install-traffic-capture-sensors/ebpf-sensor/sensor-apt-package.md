---
sidebar_position: 4
---

# Sensor via APT Package

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
sudo apt install levo-ebpf-sensor=0.36.0
```

### 4. Start the Sensor
Please take a look at the [Running the Sensor as a Systemd Service](/install-traffic-capture-sensors/ebpf-sensor/sensor-systemd-service) section for further instructions.

------------------------------------------------------------------

## Sensor Lifecycle Management

### Configure Satellite Address (`host:port` information)

The Satellite address is configured in `/etc/levo/sensor/config.yaml`. The default `host:port` for Satellite is `localhost:4317`.

Edit `/etc/levo/sensor/config.yaml`, and set `satellite-url` (under Satellite Settings) to the desired `host:port` value.

```bash
...
# --------------------------------------------------------------------------------------------
# Satellite Settings:
# --------------------------------------------------------------------------------------------
# host:port for the collector service receiving the sensor's API traces.
# mention the scheme http/https if you decide not to use gRPC for sensor satellite communication
satellite-url: <set to desired host:port value>
# --------------------------------------------------------------------------------------------
...
```

### Configure sensor environment
The eBPF sensor environment is configured in `/etc/default/levo-ebpf-sensor`. The default env value is `staging`

Edit `/etc/default/levo-ebpf-sensor`, and set `LEVO_ENV` to the desired env value (eg. `prod`, `qa`)

```bash
# Environment Variables for levo-ebpf-sensor.service
MALLOC_CONF="background_thread:true,narenas:1,tcache:false,dirty_decay_ms:0,muzzy_decay_ms:0,abort_conf:true"
LEVO_ENV="staging"
```

**A Sensor *restart* is required for this to take effect.**


### Start Sensor
```bash
# Note: The default config file is located at: '/etc/levo/sensor/config.yaml'
sudo systemctl start levo-ebpf-sensor
```

### Get Sensor Status
```bash
sudo systemctl status levo-ebpf-sensor
```

### Stop Sensor
```bash
sudo systemctl stop levo-ebpf-sensor
```

### Check Sensor Logs
```bash
journalctl -u levo-ebpf-sensor.service -b -f --since "15min ago"

# If journalctl isn't providing logs, you can alternatively:
sudo cat syslog | grep 'levo-ebpf-sensor'
```

### Show Sensor Config
```bash
cat /etc/levo/sensor/config.yaml
```

### Uninstall Sensor
```bash
sudo apt remove --purge levo-ebpf-sensor
sudo apt clean
```

### Manage Sensor Configuration
Please refer to [Sensor Configuration](/install-traffic-capture-sensors/common-tasks/sensor-configuration.mdx), and [Applying Configuration Changes](/install-traffic-capture-sensors/common-tasks/sensor-configuration.mdx#running-on-linux-host).

