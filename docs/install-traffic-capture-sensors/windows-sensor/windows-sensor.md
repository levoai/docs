---
sidebar_position: 3
title: Install Levo.ai’s Sensor on Windows | Levo.ai Documentation
---

# Levo Sensor for Windows

This guide walks you through installing and configuring Levo.ai’s sensor to capture HTTP traffic on Windows systems/servers.

## Prerequisites

- Windows 10 or Windows Server 2016 and above
- Administrator privileges on the Windows machine
- Npcap or WinPcap libraries installed. Please talk to us if you want to explore the commercial options for these libraries.

## Installation Steps

### 1.  Install [Npcap](https://npcap.com/) Library

1. Download the latest Npcap installer from the [Npcap website](https://npcap.com/#download).
2. Run the installer with administrator privileges.
3. During installation, select the following options:
   - Install Npcap in WinPcap API-compatible Mode
   - Install Npcap service
   - Do not install the Npcap SDK

### 2. Download Levo’s Windows Sensor

1. Download the latest Levo.ai Windows sensor executable from our [downloads](https://github.com/levoai/downloads/tree/main/windows) portal.
2. Place the executable in a directory of your choice, e.g., `C:\Program Files\Levo\levo-sensor.exe\`.

### 3. Configure the Sensor

1. Open a Command Prompt as Administrator.
2. Navigate to the directory containing the sensor executable.
3. Run the following command to initialize the sensor:
```bash
    levo-sensor.exe apidump ^
    --satellite-url "your satellite url (http(s)://hostname|IP:port)" ^
    --levo-env "your application environment (staging, production etc.)" ^
    --levoai-org-id "your levo org id"
```

Replace the placeholders with your specific configuration details.

### 4. Configure Additional Options

You can add the following optional flags to the command:

```bash
--trace-export-interval "trace export interval in seconds (default 10)"
--rate-limit "number of traces per minute"
--filter "pcap filter string, eg. port 8080 and (not port 8081)"
--host-allow "host allow regex"
--path-allow "path allow regex"
--host-exclusions "host exclude regex"
--path-exclusions "path exclude regex"
```
### 4. Troubleshooting

#### Ensure Npcap is properly installed and that WinPcap compatibility mode is enabled

##### Verify Npcap Installation

1. Open a Command Prompt as Administrator.
2. Run the following command to check if Npcap is installed and running:
```bash
sc query npcap
```
3. If Npcap is properly installed, you should see an output with `STATE: RUNNING`.

##### Verify WinPcap Compatibility Mode

1. Open a Command Prompt as Administrator.
2. Execute the following command:
```bash
reg query HKLM\SYSTEM\CurrentControlSet\Services\npcap\Parameters /v WinPcapCompatible
```
3. If WinPcap compatibility mode is enabled, you should see the output with `WinPcapCompatible    REG_DWORD      0x1`.

#### Check Windows Firewall settings

Ensure the Levo's sensor is allowed to capture traffic.

1. To check existing firewall rules, execute the below command:
```bash
netsh advfirewall firewall show rule name=all     
```
2. If you cannot find the firewall rule related to the Levo sensor, you can create one:

To create a new inbound rule for the Levo sensor:
```bash
netsh advfirewall firewall add rule name="Levo.ai Sensor" dir=in action=allow program="C:\Program Files\Levo\levo-sensor.exe" enable=yes 
```
Replace `"C:\Program Files\Levo\levo-sensor.exe"` with the actual path to the Levo sensor executable.

### 5. Additional Support

For additional support, please [contact](mailto:support@levo.ai) Levo.ai technical support.