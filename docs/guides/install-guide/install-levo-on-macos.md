---
sidebar_position: 5
---

# Install Levo on MacOS

This guide provides comprehensive instructions for installing the Levo Satellite, Sensor and Log Parser components together as a single container on a MacOS host.

Follow instructions for your specific platform/method below:
- [Install on Linux host via Docker](#install-on-linux-host-via-docker)

<br></br>

-----------------------------------------------------------------------

## Install on Linux host via Docker

### Prerequisites
- Docker Engine version `18.03.0` and above

### 1. Install Levo-all (Sensor, Satellite and Log Parser)


This section provides information on the
optional environment variables that can be set to customize the properties of the
sensor-satellite configuration.

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

## Optional Environment Variables

The following environment variables can be configured to modify the behavior of the Sensor-Satellite setup:

- **LEVO_FILTER**
    - *Description:* Set a filter for specific data.
    - *Default:* ""

- **LEVO_TRACE_EXPORT_INTERVAL**
    - *Description:* Interval for exporting traces.
    - *Default:* 0.0

- **LEVO_RATE_LIMIT_NUMBER**
    - *Description:* Set the rate limit number.
    - *Default:* 0.0

- **LEVO_HOST_ALLOW_RE**
    - *Description:* Regular expression for allowed hosts.
    - *Default:* ""

- **LEVO_PATH_ALLOW_RE**
    - *Description:* Regular expression for allowed paths.
    - *Default:* ""

- **LEVO_HOST_EXCLUSIONS_RE**
    - *Description:* Regular expression for excluded hosts.
    - *Default:* ""

- **LEVO_PATH_EXCLUSIONS_RE**
    - *Description:* Regular expression for excluded paths.
    - *Default:* ""

- **LEVO_ORG_ID**
    - *Description:* Set the organization ID.
    - *Default:* ""

- **LEVO_APP_ENVIRONMENT**
    - *Description:* Set the application environment.
    - *Default:* "staging"

- **LEVOAI_SATELLITE_PORT**
    - *Description:* Set the port for the LevoAI satellite.
    - *Default:* 9999

- **LEVOAI_MODE**
    - *Description:* Set the mode of the LevoAI system (e.g., "single-node").
    - *Default:* "single-node"

- **LEVOAI_DEBUG_ENABLED**
    - *Description:* Enable or disable debug mode.
    - *Default:* false

- **LEVOAI_DEBUG_PORT**
    - *Description:* Set the port for debugging.
    - *Default:* 12345

- **LEVOAI_DEBUG_SERVER_HOST**
    - *Description:* Set the host for the debug server.
    - *Default:* "host.docker.internal"

- **LEVOAI_LOG_LEVEL**
    - *Description:* Set the log level (e.g., "INFO").
    - *Default:* "INFO"

- **APP_NAME**
    - *Description:* Set the application name.
    - *Default:* "app-logs-DATE-TIME"

- **ENV_NAME**
    - *Description:* Set the environment name.
    - *Default:* "staging"

### Note

Setting these environment variables is optional and can be set according to your specific requirements
before deploying the Sensor-Satellite setup.


## Log Parser

### List of supported log parsers
- Nginx
- Apache
- Azure API Gateway

### Note
- Make sure logs directories are structured as per the supported log parsers.
- The logs directory should be mounted to the `/mnt/levo/logs` directory in the container.
  - Nginx logs should be mounted to `/mnt/levo/logs/nginx`.
  - Apache logs should be mounted to `/mnt/levo/logs/apache`.
  - Azure API Gateway logs should be mounted to `/mnt/levo/logs/azure`.
