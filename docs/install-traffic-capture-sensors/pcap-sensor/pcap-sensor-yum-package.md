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
  sudo yum install levo-pcap-sensor-0.1.3
  ```

Enter `y` when prompted.

### 3. Start the Sensor

Sensor is running as a Systemd Service

1. Configure Satellite Address, Organization-Id and Environment

The Satellite address is configured in `/etc/default/sensor-env`. The default Satellite URL is `https://collector.levo.ai`.

Edit `/etc/default/sensor-env`, set the `LEVO_SATELLITE_URL` variable to the desired `host:port` value,
and set the `LEVO_ORG_ID` to the Organization ID fetched from the Levo Dashboard.
Set `LEVO_ENV` to the desired environment name in which you wish to see you applications on the Levo Dashboard.

```bash
...
LEVO_ENV="your-env"
LEVO_SATELLITE_URL="your-satellite-url"
LEVO_ORG_ID="your-org-id"
...
```

**A Sensor *restart* is required for the config changes to take effect.**


2. Start/Stop the Sensor

To start the sensor
```bash
sudo systemctl start pcap-sensor.service
```

To stop the sensor
```bash
sudo systemctl stop pcap-sensor.service
```

To restart the sensor
```bash
sudo systemctl restart pcap-sensor.service
```
