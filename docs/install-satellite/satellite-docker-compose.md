---
sidebar_position: 2
---

# Satellite via Docker Compose

import BrowserOnly from '@docusaurus/BrowserOnly';

export function DownloadDockerComposeLink() {
    return (
        <BrowserOnly fallback={<div>Loading...</div>}>
            {() => (
                <a href={window.location.protocol + '//' + window.location.host + '/artifacts/satellite/docker-compose.yml'} download> Download</a>
            )}
        </BrowserOnly>
    );
}

### Prerequisites
- Docker Engine version `18.03.0` and above
- Admin privileges on the Docker host
- 'docker-compose' installed, if 'docker compose' is not supported on your OS
- At least 4 CPUs
- At least 8 GB RAM

### 1. Download Docker Compose file
Levo provides pre-built Docker images for the Satellite that can be installed via Docker Compose.
<DownloadDockerComposeLink/> the Docker Compose file to your desktop.

### 2. Install Satellite
Execute the following from the directory where the Docker Compose file was downloaded.

```bash
(export LEVOAI_AUTH_KEY=<'Authorization Key' copied earlier>; docker compose pull && docker compose up -d)
```

> If `docker compose ...` complains with *"docker: 'compose' is not a docker command."*, you have can try **`docker-compose`** instead.

### 3. Verify connectivity with Levo.ai

#### a. Check Satellite health

The Satellite is comprised of four sub components 1) levoai-collector, 2) levoai-rabbitmq, 3)levoai-satellite, and 4) levoai-tagger.

Wait couple of minutes after the install, and check the health of the components by executing the following:

```bash
docker ps -f name=levoai
```

If the Satellite is healthy, you should see output similar to below.

```bash
CONTAINER ID   IMAGE                     COMMAND                  CREATED             STATUS                  PORTS                                                                                                                                    NAMES
2b32cd6b9ced   levoai/collector:stable   "/usr/local/bin/levo…"   10 seconds ago      Up 8 seconds            0.0.0.0:4317->4317/tcp, 9411/tcp                                                                                                         levoai-collector
06f3c597cad0   levoai/satellite:stable   "gunicorn --capture-…"   10 seconds ago      Up 9 seconds            0.0.0.0:9999->9999/tcp                                                                                                                   levoai-satellite
89026034c567   levoai/satellite:stable   "python -OO /opt/lev…"   10 seconds ago      Up Less than a second                                                                                                                                            levoai-tagger
f74524d02fbd   bitnami/rabbitmq:3.10     "/opt/bitnami/script…"   10 seconds ago      Up 9 seconds            5551-5552/tcp, 0.0.0.0:4369->4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 0.0.0.0:15672->15672/tcp, 0.0.0.0:25672->25672/tcp, 15671/tcp   levoai-rabbitmq
```

#### b. Check connectivity
Execute the following to check for connectivity health:

```bash
docker logs levoai-tagger | grep "Ready to process; waiting for messages."
```
If connectivity is healthy, you will see output similar to below.

```bash
{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}
```

### 4. Note down `Host:Port` information
The Collector now runs in a container, and is reachable on the host via port 4317 (on all the host's network interfaces).

Please note down the either the host's IP address or domain name. The Sensor will be configured to communicate with the Collector at <Host's IP|Domain-Name>:4317.

Please proceed to install the Sensor.

<br></br>

