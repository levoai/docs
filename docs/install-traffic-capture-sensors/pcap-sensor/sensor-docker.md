---
sidebar_position: 2
---

# Sensor via Docker

## Install via Docker

### Prerequisites
-   Docker Engine version  `18.03.0`  and above
-   Admin (or  `sudo`) privileges on the Docker host

```bash
sudo docker run --net=host --rm -it levoai/pcap-sensor:0.0.20 \
./bin/init apidump \
--satellite-url "your satellite url (http(s)://hostname|IP:port)" \
--levo-env "your application environment (staging, production etc.)" \
--levoai-org-id "your levo org id"
```
Specify additional flags in the command
```bash
--trace-export-interval	"trace export interval in seconds (default 10)"
--rate-limit "number of traces per minute"
--filter "pcap filter string, eg. port 8080 and (not port 8081)"
--host-allow "host allow regex"
--path-allow "path allow regex"
--host-exclusions "host exclude regex"
--path-exclusions "path exclude regex"
```

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

