---
sidebar_position: 5
---

# Sensor via YUM Package

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
  sudo yum install levo-ebpf-sensor-0.35.2
  ```

Enter `y` when prompted.

### 3. Start the Sensor
Please take a look at the [Running the Sensor as a Systemd Service](/install-traffic-capture-sensors/ebpf-sensor/sensor-systemd-service) section for further instructions.


