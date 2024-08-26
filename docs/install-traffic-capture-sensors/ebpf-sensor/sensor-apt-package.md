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
sudo apt install levo-ebpf-sensor=0.43.6
```

### 4. Start the Sensor
Please take a look at the [Running the Sensor as a Systemd Service](/install-traffic-capture-sensors/ebpf-sensor/sensor-systemd-service) section for further instructions.

------------------------------------------------------------------

## Sensor Lifecycle Management

### Configure Satellite Address and Sensor Environment
The eBPF sensor environment and the satellite address is configured in `/etc/default/levo-ebpf-sensor`.
The default env value is `staging`, and default satellite-address is `https://collector.levo.ai`.

Edit `/etc/default/levo-ebpf-sensor`
- set `LEVO_ENV` to the desired env value (eg. `prod`, `qa`)
- set `LEVO_SATELLITE_URL` to desired value `host:port` value

```bash
# Environment Variables for levo-ebpf-sensor.service
MALLOC_CONF="background_thread:true,narenas:1,tcache:false,dirty_decay_ms:0,muzzy_decay_ms:0,abort_conf:true"
LEVO_ENV="staging"
LEVO_SATELLITE_URL="https://collector.levo.ai"
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

