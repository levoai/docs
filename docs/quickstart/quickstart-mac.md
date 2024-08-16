---
sidebar_position: 2
keywords: [API Security, ZAP, OWASP, Linux, macOS, Windows, API Observability]
description: Get started with Levo.ai on macOS. Follow our quickstart guide for seamless installation and setup of the Levo.ai API Security Platform on your Mac.
---

# Quickstart on Mac / Laptop

### Prerequisites
- Docker Engine version `18.03.0` and above

### Copy `Authorization Key` from Levo.ai

The Levo-all uses an authorization key to access Levo.ai.

- [Login](https://app.levo.ai/login) to Levo.ai.
- Click on your user profile.
- Click on `User Settings`
- Click on `Keys` on the left navigation panel
- Click on `Get Satellite Authorization Key`

Copy your authorization key. This key is required in subsequent steps below.


### Install Levo-all (Sensor, Satellite and Log Parser)

The Sensor-Satellite setup can be run with the following docker command -

```bash
docker run -e LEVOAI_AUTH_KEY=<your-auth-key> \
  -e LEVOAI_ORG_ID=<your-org-id> \
  --net=host \
  -v ./logs:/mnt/levo/logs
  levoai/levo-all
```

## Required Environment Variables

- **LEVOAI_AUTH_KEY**
    - *Description:* The Satellite CLI authorization key from app.levo.ai
    - *Default:* ""

- **LEVOAI_ORG_ID**
    - *Description:* Organization ID for your specific organization in your app.
    - *Default:* ""

### Note
- For more information on the environment variables, refer to the [Environment Variables](/install-traffic-capture-sensors/sensor-on-macos#required-environment-variables) section.
- For more information on log parser, refer to the [Log Parser](/install-traffic-capture-sensors/sensor-on-macos#log-parser) section.


**Please contact `support@levo.ai` if you notice health/connectivity related errors.**
