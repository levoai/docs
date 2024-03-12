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
sudo apt install levo-ebpf-sensor=0.29.6
```

### 4. Start the Sensor
Please take a look at the [Running the Sensor as a Systemd Service](/install-traffic-capture-sensors/ebpf-sensor/sensor-systemd-service) section for further instructions.

