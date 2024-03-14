---
sidebar_position: 5
---

# Install Log Parsing Sensors

## Access Logs Based Instrumentation

### i. Pre-requisites
- Satellite has been successfully installed.
- You have noted down the Satellite's `hostname:port` or `ip-address:port` information.
- The Satellite is reachable (via HTTP/s) from the location where you are going to install the log-parser.

## ii. Pick an `Application Name`
Auto discovered API endpoints and their OpenAPI specifications are shown in the [API Catalog](/guides/security-testing/concepts/api-catalog), grouped under an application name. The application name helps segregate and group API endpoints from different environments, similar to how file folders work in an operating system.

Pick a descriptive name which will be used in the subsequent step below. For example: `my-test-app`.

## iii. Follow instructions for your platform
Follow instructions for your specific platform/method below:
- [Install on Linux host via Docker](#install-on-linux-host-via-docker)

-----------------------------------------------------------------------

## Install on Linux host via Docker

### Prerequisites
- Docker Engine version `18.03.0` and above

### 1. Install Log Parser

> If you are installing the Satellite and Log Parser on the ***same*** Linux host, please do ***NOT*** use `localhost` as the hostname below. Use the Linux host's `IP address`, or `domain name` instead. This is required as the Log Parser runs inside a Docker container, and `localhost` resolves to the Log Parser container's IP address, instead of the Linux host.

```bash
# Replace '<SATELLITE_URL>' with the values you noted down from the Satellite install
#
# Specify below the 'APP_NAME'. Do not quote the 'APP_NAME'.
# Environment Name is optional. If not specified, it defaults to 'staging'
# 
docker run --rm -d --name=log-parser \
  -v ./logs:/mnt/levo/logs \
  -e LEVO_SATELLITE_URL=<LEVO_SATELLITE_URL> \
  -e LEVOAI_ORG_ID=<LEVOAI_ORG_ID> \
  -e APP_NAME=<APP_NAME> \
  -e ENV_NAME=<ENV_NAME> \
  levoai/log-parser 
```

#### NOTE:
- The default address for the satellite in Docker-based Log Parser installations is `https://satellite.levo.ai`.
- In case of levo hosted satellite, it is necessary that you must also specify an organization ID (`LEVOAI_ORG_ID`).
- If you wish, you may also host the Satellite yourself and specify the address of the satellite to direct the Log Parser's data to it.

### 2. Verify connectivity with Satellite
Execute the following command to check for connectivity health:

```bash
# Please specify the actual container name for log-parser below
docker logs log-parser | grep "starting fluentd"
```
If connectivity is healthy, you should see output similar to below.

```bash
2024-02-22 01:27:06 +0000 [info]: starting fluentd-1.16.3 pid=7 ruby="3.2.2"
2024-02-22 01:27:06 +0000 [info]: #0 starting fluentd worker pid=16 ppid=7 worker=0
2024-02-22 01:27:06.831947051 +0000 fluent.info: {"pid":16,"ppid":7,"worker":0,"message":"starting fluentd worker pid=16 ppid=7 worker=0"}
```

Please proceed to the next step, if there are no errors.

