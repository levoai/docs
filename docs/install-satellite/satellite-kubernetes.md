---
sidebar_position: 1
---


# Satellite on Kubernetes

### Prerequisites
- Kubernetes version >= `v1.18.0`
- [Helm v3](https://helm.sh/docs/intro/install/) installed and working.
- The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
- `kubectl` access to the cluster, with `cluster-admin` permissions.
- At least 4 CPUs
- At least 8 GB RAM

### 1. Setup environment variables

```bash
export LEVOAI_AUTH_KEY=<'Authorization Key' copied earlier>
```

### 2. Install levoai Helm repo
```bash
helm repo add levoai https://charts.levo.ai && helm repo update
```

### 3. Create `levoai` namespace & install Satellite

#### If locating Satellite on the same cluster alongside Sensor
```bash
helm upgrade --install -n levoai --create-namespace \
  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
  levoai-satellite levoai/levoai-satellite
```

#### If locating Satellite on a dedicated cluster
You will need to expose the Satellite via either a `LoadBalancer` or `NodePort`, such that is is reachable by Sensors running in other clusters. Please modify the below command appropriately.

```bash
# Please modify this command template and choose either 'LoadBalancer' or 'NodePort', prior to execution
helm upgrade --install -n levoai --create-namespace \
    --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
    --set levoai-collector.service.type=<LoadBalancer | NodePort> \
    levoai-satellite levoai/levoai-satellite
```

### 4. Verify connectivity with Levo.ai

#### a. Check Satellite health

The Satellite is comprised of five sub components 1) levoai-collector, 2) levoai-ion, 3) levoai-rabbitmq, 4)levoai-satellite, and 5) levoai-tagger.

Wait couple of minutes after the install, and check the health of the components by executing the following:

```bash
kubectl -n levoai get pods
```
If the Satellite is healthy, you should see output similar to below.

```bash
NAME                                READY   STATUS    RESTARTS   AGE
levoai-collector-5b54df8dd6-55hq9   1/1     Running   0          5m0s
levoai-ion-669c9c4fbc-vsmmr         1/1     Running   0          5m0s
levoai-rabbitmq-0                   1/1     Running   0          5m0s
levoai-satellite-8688b67c65-xppbn   1/1     Running   0          5m0s
levoai-tagger-7bbf565b47-b572w      1/1     Running   0          5m0s
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