---
sidebar_position: 3
title: Install Levo.ai’s Sensor on Windows | Levo.ai Documentation
---

# Levoai Sensor for Windows

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

### 2. Download Levo’s Windows Sensor Zip File

1. Download the following zip file from our [downloads](https://github.com/levoai/downloads/tree/main/windows) portal:
    - Levoai-Sensor.zip
2. Extract the contents of Levoai-Sensor.zip
3. Ensure that all extracted files are placed in the same dedicated directory, e.g., `C:\Program Files\Levo\`.

### 3. Configure the Sensor

Before installing the sensor service, modify the `config.json` file to match your specific setup:

1. Open the `config.yaml` file in a text editor.
2. Update the following fields:

    - `satellite-url`: Replace with your actual Levoai Satellite URL.
    - `levo-env`: Replace with your environment name.
    - `levoai-org-id`: Replace with your Levo organization ID.

    Example `config.yaml`:

    ```yaml
        ##############################################################################################
        # PCAP Sensor Configuration Settings (YAML Format)
        # Copyright: Levo Inc., @COPYRIGHT_YEAR@
        ##############################################################################################

        name: "Levoai Sensor"
        display-name: "Levoai Sensor Service"
        description: "Service for running the Levoai Sensor"
        log-file-path: "levoai-service.log"
        exec: "levoai-sensor.exe"
        args: ["apidump"]


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
    ```

### [Optional] 4. Configure Additional Filters

1. Open the `config.yaml` file in a text editor.
2. Modify any of these optional flags:

   - **`trace-export-interval`**: Set the trace export interval in seconds (default is 10)
   - **`rate-limit`**: Specify the number of traces per minute
   - **`filter`**: Add a PCAP filter string, e.g., "port 8080 and (not port 8081)"
   - **`host-allow`**: Set a host allow regex
   - **`path-allow`**: Set a path allow regex
   - **`host-exclusions`**: Set a host exclude regex
   - **`path-exclusions`**: Set a path exclude regex

3. Configuring sensor as per memory and CPU resource limits
- For normal/average case use the default config
- For strict resources, download the [Low resource config file](../../../static/artifacts/pcap-sensor/config.yaml) and copy it in the windows sensor installation directory.

### 5. Install the Sensor Service

After configuring the `config.json` file, you need to install the sensor as a Windows service:

1. Open PowerShell as an administrator.
2. Navigate to the directory containing the extracted Levoai sensor files.
3. Run the following command to install the sensor as a service:
    ```bash 
    levoai-service.exe -service install 
4. Run the following command to check the status of the Levoai service:
    ```bash
    Get-Service | Where-Object { $_.Name -like "*Levo*" }
5. If the service is installed and running successfully, you will see output similar to the following:
    ```bash
    Status   Name               DisplayName
    Running  Levoai Sensor      Levoai Sensor Service
6. Run the following command to stop the sensor as a service:
    ```bash 
    levoai-service.exe -service stop
7. Run the following command to start the sensor as a service:
    ```bash 
    levoai-service.exe -service start
8. Run the following command to restart the sensor as a service:
    ```bash 
    levoai-service.exe -service restart
9. Run the following command to uninstall the sensor as a service:
    ```bash 
    levoai-service.exe -service uninstall

### 6. Troubleshooting

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
netsh advfirewall firewall add rule name="Levo.ai Sensor" dir=in action=allow program="C:\\Program Files\\Levo\\levoai-sensor.exe" enable=yes 
```
Replace `"C:\\Program Files\\Levo\\levoai-sensor.exe"` with the actual path to the Levo sensor executable.

### 7. Additional Support

For additional support, please [contact](mailto:support@levo.ai) Levo.ai technical support.