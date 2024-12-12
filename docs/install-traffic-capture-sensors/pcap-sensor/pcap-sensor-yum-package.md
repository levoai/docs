---
sidebar_position: 3
---

# PCAP Sensor via YUM Package

## Install on RPM based Linux Distributions via `yum`

### Prerequisites
- `libpcap` should be installed from the yum repository
- Admin (or `sudo`) privileges on the host

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

### 2. Install the pcap Sensor

Install the pcap Sensor from Levo's RPM repository.

1. Update the list of available packages:
  ```shell
  sudo yum makecache
  ```

1. Install the package in your repository.
  ```shell
  sudo yum install levo-pcap-sensor-0.1.9
  ```

Enter `y` when prompted.

### 3. Start the Sensor

Sensor runs as a Systemd Service

#### Configure Satellite Address, Organization-Id and Environment

The Satellite address is configured in `/etc/levo/config/pcap-sensor/config.yaml`. The default Satellite URL is `https://collector.levo.ai`.

Edit `/etc/levo/config/pcap-sensor/config.yaml` and
  - set the `satellite-url` variable to the desired `host:port` value
  - set the `levoai-org-id` to the Organization ID fetched from the Levo Dashboard.
  - set `levo-env` to the desired environment name in which you wish to see you applications on the Levo Dashboard.

```yaml
##############################################################################################
# PCAP Sensor Configuration Settings (YAML Format)
# Copyright: Levo Inc., @COPYRIGHT_YEAR@
##############################################################################################

satellite-url: http://collector.levo.ai
levo-env: staging
levoai-org-id: ""
rate-limit: 1000
trace-export-interval: 10
filter: ""
path-allow: []
host-allow: []
path-exclusions: []
host-exclusions: []
max-http-length: 10000000
stream-timeout-seconds: 10
```

*Sensor **restart** is required for the config changes to take effect.*

Additional options can be configured as follows:
  - **`trace-export-interval`**: Set the trace export interval in seconds (default is 10)
  - **`rate-limit`**: Specify the number of traces per minute
  - **`filter`**: Add a PCAP filter string, e.g., "port 8080 and (not port 8081)"
  - **`host-allow`**: Set a host allow regex
  - **`path-allow`**: Set a path allow regex
  - **`host-exclusions`**: Set a host exclude regex
  - **`path-exclusions`**: Set a path exclude regex
 

#### Start/Stop the Sensor

To start the sensor
```bash
sudo systemctl start levo-pcap-sensor.service
```

To stop the sensor
```bash
sudo systemctl stop levo-pcap-sensor.service
```

To restart the sensor
```bash
sudo systemctl restart levo-pcap-sensor.service
```

### 4. Configuring sensor as per memory and CPU resource limits

- For normal/average case use the default config
- For strict resources, modify the config with below options
```yaml
rate-limit: 100
trace-export-interval: 1
max-http-length: 1000000
stream-timeout-seconds: 2
```