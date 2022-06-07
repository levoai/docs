---
sidebar_position: 3
---

# Install Satellite

## 1. Prerequisites
- You have an account on [Levo.ai](https://app.levo.ai/login)
- Compatibility script (from step 1) indicates the Linux host (that you want to instrument) is compatible.

## 2. Planning

### a. Location of the Satellite
There are two options for the Satellite location. Chose what best works for you.

#### i. Same Host/Cluster as Sensor
The Satellite can be colocated on the same host/cluster (that you are trying to instrument) alongside the Sensor.

##### Pros
- Simpler installation.
- Easy to get started

##### Cons
- Satellite consumes resources on the host/cluster where your application workloads are located, which might lead to some resource contention based on traffic load.

#### ii. Dedicated Host/Cluster

##### Pros
- A dedicated host/cluster for the Satellite eliminates are resource contention issues for your application workloads.
- The Satellite can service traffic from multiple hosts/clusters that are instrumented

##### Cons
- Requires a dedicated host/cluster

### b. Copy `Authorization Key` from Levo.ai
The Satellite uses an authorization key to access Levo.ai. Follow instructions below to copy the key.
- [Login](https://app.levo.ai/login) to Levo.ai.
- Click on your user profile.
- Click on `User Settings`
- Click on `Keys` on the left navigation panel
TBD TBD
- Now copy your authorization key. This key is required in a subsequent step below.

### c. Pick an `Application Name`
Auto discovered API endpoints and their OpenAPI specifications are show in the [API Catalog](../../../concepts/api-catalog/api-catalog.md), grouped under an application name. The application name helps segregate and group API endpoints from different environments, similar to how file folders work in an operating system.

Pick a descriptive name which will be used in the subsequent step below. For example: `My Test App`.

## 3. Follow instructions for your platform
- [Install on Kubernetes](install-satellite.md#install-on-kubernetes)
- [Install on Linux host via Docker Compose](./install-satellite.md#install-on-linux-host-via-docker-compose)

<br></br>

-------------------------------------------------

## Install on Kubernetes

### Prerequisites
- Kubernetes version `TBD xx.xx.xx` and above.
- [Helm v3](https://helm.sh/docs/intro/install/) installed and working.
- The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
- `kubectl` access to the cluster, with `cluster-admin` permissions.

### 1. Setup environment variables

```bash
export LEVOAI_AUTH_KEY=<'Authorization Key' copied earlier> 
export APP_NAME=<'Application Name' chosen earlier>
```

### 2. Install levoai Helm repo
```bash
helm repo add levoai https://charts.levo.ai && helm repo update
```

### 3. Create `levoai` namespace & install Satellite

#### If locating Satellite on the same cluster alongside Sensor
```bash
helm install -n levoai levoai-satellite levoai/satellite --create-namespace --set global.levoai.app_name=$APP_NAME  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY
```

#### If locating Satellite on a dedicated cluster
You will need to expose the Satellite via either a `LoadBalancer` or `NodePort`, such that is is reachable by Sensors running in other clusters. Please modify the below command appropriately.

```bash
# Please modify this command template and choose either 'LoadBalancer' or 'NodePort', prior to execution
helm install -n levoai levoai-satellite levoai/satellite --create-namespace --set global.levoai.app_name=$APP_NAME  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY --set levoai-collector.service.type=<LoadBalancer | NodePort>
```

### 4. Verify connectivity with Levo.ai

#### a. Check Satellite health

The Satellite is comprised of four sub components 1) levoai-collector, 2) levoai-rabbitmq, 3)levoai-satellite, and 4) levoai-tagger.

Wait couple of minutes after the install, and check the health of the components by executing the following:

```bash
kubectl -n levoai get pods
```                              
If the Satellite is healthy, you should see output similar to below. Don't worry about the restarts of the levoai-tagger pod.

```bash
NAME                                READY   STATUS    RESTARTS      AGE
levoai-collector-848fb4fff9-gv8g9   1/1     Running   0             4m8s
levoai-rabbitmq-0                   1/1     Running   0             4m8s
levoai-satellite-54956ccb89-5s4h2   1/1     Running   0             4m8s
levoai-tagger-799db4d9cc-89jm8      1/1     Running   3 (4m8s ago)  4m8s
```

#### b. Check connectivity
Execute the following to check for connectivity health:

```bash
# Please specify the actual pod name for levoai-tagger below
kubectl -n levoai logs <levoai-tagger pod name> | grep "Ready to process; waiting for messages."
```
If connectivity is healthy, you will see output similar to below.

```bash
{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}
```

**Please contact `support@levo.ai` if you notice health/connectivity related errors.**

### 5. Note down `Host:Port` information

#### If locating Satellite on the same cluster alongside Sensor
The Collector can now be reached by the Sensors running in the same cluster at `levoai-collector.levoai:4317`. Please note this, as it will be required to configure the Sensor.

#### If locating Satellite on a dedicated cluster
Run the below command and note the `external` address/port of the the Collector service. This will be required to configure the Sensor.

```bash
kubectl get service levoai-collector -n levoai
```
Please proceed to install the Sensor.

<br></br>

-------------------------------------------------

## Install on Linux host via Docker Compose

### Prerequisites
- Docker version `18.03.0` and above
- Admin privileges on the Docker host

### 1. Download Docker Compose file
Levo provides pre-built Docker images for the Satellite that can be installed via Docker Compose.
[Download](../../../../static/scripts/satellite/docker-compose.yml) the Docker Compose file to your desktop.

### 2. Install Satellite
Execute the following from the directory where the Docker Compose file was downloaded.

```bash
sudo LEVOAI_AUTH_KEY=<'Authorization Key' copied earlier> LEVOAI_APP_NAME=<'Application Name' chosen earlier> docker compose pull && docker compose up -d
```

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
 
