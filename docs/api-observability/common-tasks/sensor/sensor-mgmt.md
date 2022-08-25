---
sidebar_position: 1
---

# Sensor Lifecycle Management

- [Installed on Kubernetes](#installed-on-kubernetes)
- [Installed via Docker](#installed-via-docker)
- [Installed on Linux Host](#installed-on-linux-host)

<br></br>

------------------------------------------------------------

## Installed on Kubernetes

### Uninstall Sensor
```bash
helm uninstall levoai-sensor -n levoai
```

### Get Sensor Logs
```bash
kubectl get pods -n levoai

kubectl logs -n levoai <pod name>
```

### Upgrade Sensor
- Uninstall Sensor
- Reinstall Sensor

### Manage Sensor Configuration
Please refer to [Sensor Configuration](./sensor-configuration.mdx), and [Applying Configuration Changes](./sensor-configuration.mdx#running-on-kubernetes).

<br></br>

------------------------------------------------------------


## Installed via Docker

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
Please refer to [Sensor Configuration](./sensor-configuration.mdx), and [Applying Configuration Changes](./sensor-configuration.mdx#running-via-docker).

<br></br>

------------------------------------------------------------


## Installed on Linux Host

### Configure Satellite Address (`host:port` information)

Satellite address is configured in `/etc/default/levo-ebpf-sensor`. Default port for Satellite is `4317`.

```bash
# The Satellite address is configured in '/etc/default/levo-ebpf-sensor'.
# Edit '/etc/default/levo-ebpf-sensor', and set 'OTEL_EXPORTER_OTLP_TRACES_ENDPOINT' to
# 'host:port' address of the Satellite, as shown below.

OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=<host|IP:port>
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
Please refer to [Sensor Configuration](./sensor-configuration.mdx), and [Applying Configuration Changes](./sensor-configuration.mdx#running-on-linux-host).
