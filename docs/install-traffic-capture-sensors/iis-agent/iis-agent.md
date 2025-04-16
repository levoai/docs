---
sidebar_position: 4
title: Install Levo.ai's IIS Module on Windows | Levo.ai Documentation
---

# Levoai IIS Module

This guide walks you through installing and configuring Levo.ai's IIS Module to capture HTTP/HTTPS traffic on Windows IIS servers.

## Overview

The Levoai IIS Module captures HTTP/HTTPS traffic from your IIS web servers and sends it to Levo's Satellite service for API discovery and analysis.

## Prerequisites

- Windows Server with IIS 8.0+
- Administrator privileges on the Windows server
- PowerShell 5.0+
- Windows Media Foundation (necessary for IIS components):

    If not installed, run the following command in PowerShell to install:
    ```powershell
    Install-WindowsFeature -Name "Server-Media-Foundation"
    ```

- C++ Redistributables (required for running native modules):

    [Visual C++ Redistributable (x64)](https://aka.ms/vs/17/release/vc_redist.x64.exe)

    [Visual C++ Redistributable (x86)](https://aka.ms/vs/17/release/vc_redist.x86.exe)

## Installation Steps

### 1. Download & Prepare

1. Download the `Levoai-IIS-Module.zip` file from our [downloads portal](https://github.com/levoai/downloads/tree/main/IIS)
2. Extract the contents to a directory (recommended: `C:\Program Files\Levo\IISModule\`)
3. **Important**: Schedule a maintenance window as installation requires an IIS restart

### 2. Configure the Module

Before installing the module, modify the `config.json` file to match your specific setup:

1. Open the `config.json` file in a text editor
2. Update the following fields:

```json
{
    "satellite-url": "https://collector.levo.ai",
    "levo-env": "production",
    "levoai-org-id": "your-org-id-here"
}
```

- `satellite-url`: Replace with your actual Levoai Satellite URL
- `levo-env`: Replace with your environment name
- `levoai-org-id`: Replace with your Levo organization ID

> **Note**: If you're running the Satellite service in your own premises, point the satellite URL to that service.

### 3. Deploy

1. Open PowerShell as Administrator
2. Navigate to the directory containing the extracted Levoai IIS Module files
3. Execute the installation script:

```powershell
.\DeployLevoaiIIS.ps1
```

> **Important**: This will cause temporary downtime for all IIS websites since IIS is being restarted. It is recommended to do this during a scheduled maintenance window.

### 4. Verify Installation

1. Open IIS Manager
2. Navigate to Modules
3. Confirm that "LevoaiIISModule" is listed among the modules
4. Log into the Levoai Portal, go to API Inventory, and verify that traffic appears

## Data Flow

1. The IIS Module captures HTTP/HTTPS traffic from your IIS web servers
2. Captured data is sent to the configured Levoai satellite service
3. Access the API documentation, sensitive data flows, and API catalog in the Levo.ai portal

## Troubleshooting

### Common Issues

- **Module Not Loading**: Check Event Viewer and IIS Manager for error messages
- **No Data in Portal**: Verify `config.json` settings and network connectivity
- **Performance Issues**: Contact Levoai support for assistance

### Logs Location

The module logs are stored in the installation directory under the `logs` folder by default.

## Uninstallation

To uninstall the module, run the following commands in PowerShell (as Administrator):

```powershell
Import-Module WebAdministration
Remove-WebGlobalModule -Name "LevoaiIISModule_x64.dll"
Remove-WebGlobalModule -Name "LevoaiIISModule_x86.dll"
Clear-WebConfiguration -PSPath "MACHINE/WEBROOT/APPHOST" -Filter "system.webServer/modules/add[@name='LevoaiIISModule_x64.dll']"
Clear-WebConfiguration -PSPath "MACHINE/WEBROOT/APPHOST" -Filter "system.webServer/modules/add[@name='LevoaiIISModule_x86.dll']"
iisreset
```

> **Note**: Uninstallation requires an IIS restart, which will cause temporary downtime for all IIS websites.

## Support

For additional support or assistance, please [contact](mailto:support@levo.ai) Levo.ai technical support.