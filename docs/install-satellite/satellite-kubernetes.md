---
sidebar_position: 1
description: Install Levo.ai Satellite on Kubernetes. Follow our detailed guide for setup, deployment, and ensuring API security with Levo.ai's comprehensive tools.
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
export LEVOAI_AUTH_KEY=<'Authorization Key'>
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

:::info

Depending on the region you are installing in, you may need to set a different Levo base URL for the satellite.

For example, if the satellite will be used with `app.india-1.levo.ai`, the installation command will be:

```bash
helm upgrade --install -n levoai --create-namespace \
  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
  --set global.levoai_config_override.onprem-api.url="https://api.india-1.levo.ai" \
  levoai-satellite levoai/levoai-satellite
```

:::

#### If locating Satellite on a dedicated cluster
You will need to expose the Satellite via either a `LoadBalancer` or `NodePort`, such that is is reachable by Sensors running in other clusters. Please modify the below command appropriately.

```bash
# Please modify this command template and choose either 'LoadBalancer' or 'NodePort', prior to execution
helm upgrade --install -n levoai --create-namespace \
    --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
    --set levoai-collector.service.type=<LoadBalancer | NodePort> \
    # --set global.levoai_config_override.onprem-api.url="https://api.india-1.levo.ai" \
    levoai-satellite levoai/levoai-satellite
```
:::

#### If rabbitmq persistence needs to be disabled
You will need to set rabbitmq.persistence.enabled property to false.

```bash
helm upgrade --install -n levoai --create-namespace \
    --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
    --set rabbitmq.persistence.enabled=false \
    # --set global.levoai_config_override.onprem-api.url="https://api.india-1.levo.ai" \
    levoai-satellite levoai/levoai-satellite
```
### 4. Verify connectivity with Levo.ai

#### a. Check Satellite health

The Satellite is comprised of five sub components 1) levoai-collector, 2) levoai-ion, 3) levoai-rabbitmq, 4)levoai-satellite, and 5) levoai-tagger.

Wait a couple of minutes after the installation, and check the health of the components by executing the following:

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
Please proceed to [install Traffic Capture Sensors](/install-traffic-capture-sensors).

---------------------------------------------------------

## Satellite Lifecycle Management

### Upgrade Satellite
```bash
# Setup environment variables
export LEVOAI_AUTH_KEY=<'Authorization Key' from the original installation> 

# Update helm repo and upgrade installation
helm repo update

helm upgrade -n levoai \
  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
  levoai-satellite levoai/levoai-satellite
```


### Uninstall Satellite
```shell
helm uninstall levoai-satellite -n levoai
```

After running the above command, wait until all Satellite pods have been terminated, and then run the following command to delete the rabbitmq PersistentVolumeClaim. Deleting the PVC also deletes the corresponding PersistentVolume.

```shell
kubectl delete pvc data-levoai-rabbitmq-0 -n levoai
```

In case the `kubectl delete pvc` command gets stuck, run the following command before deleting the PVC again:

```shell
kubectl patch pvc data-levoai-rabbitmq-0 -p '{"metadata":{"finalizers":null}}' -n levoai
```

### Change the `Authorization Key` used to communicate with Levo.ai
- Uninstall the Satellite.
- Reinstall the Satellite with the new `Authorization Key`.


### Change the `minimum number of URLs` that the satellite needs to observe to detect an API endpoint.
To detect an API endpoint, Satellite waits for at least '10' URLs to match that endpoint URL pattern.
This number may cause delays in detecting API endpoints when there is not enough load.

If you want to change this number to suit your environment:
- Export an environment variable `LEVOAI_MIN_URLS_PER_PATTERN`, and
- Restart the Satellite with 'min_urls_required_per_pattern' helm config override option

For example, to set this to 3:
```bash
# Setup environment variables
export LEVOAI_AUTH_KEY=<'Authorization Key' from the original installation>
export LEVOAI_MIN_URLS_PER_PATTERN=3

# Update helm repo and upgrade installation
helm repo update

helm upgrade -n levoai \
  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
  --set global.levoai_config_override.min_urls_required_per_pattern=$LEVOAI_MIN_URLS_PER_PATTERN \
  levoai-satellite levoai/levoai-satellite
```

### List Satellite's pods
```bash
kubectl -n levoai get pods | grep -E '^levoai-collector|^levoai-rabbitmq|^levoai-satellite|^levoai-tagger'
```

### Tail logs of a specific pod
```bash
kubectl -n levoai logs -f <pod name>
```

------------------------------------------------------

### Troubleshooting

### Tagger Errors

The `Tagger` component sends API endpoint metadata information to Levo.ai. API Observability will not function if the Tagger is in an errored state.

Please see sample output below from `kubectl get pods`, that shows the Tagger in an errored state.

```bash                              
NAME                                READY   STATUS    RESTARTS      AGE
levoai-collector-848fb4fff9-gv8g9   1/1     Running   0             64s
levoai-rabbitmq-0                   0/1     Running   0             64s
levoai-satellite-54956ccb89-5s4h2   1/1     Running   0             64s
levoai-tagger-799db4d9cc-89jm8      0/1     Error     1 (14s ago)   64s
```

Below are common error scenarios:

### Authentication Errors
The `Tagger` component authenticates with Levo.ai using the `Authorization Key`. If Tagger is unable to authenticate, it will error out.

Check for authentication errors in the `Tagger` logs:
```bash

kubectl -n levoai logs <levoai-tagger-pod-id> | grep "Exception: Failed to refresh access token"
```

If there are exception messages, you have an incorrect or stale `Authorization Key`. Please contact support@levo.ai for further assistance.

### Connectivity Errors

Check for connectivity errors in the `Tagger` logs:
```bash

kubectl -n levoai logs <levoai-tagger-pod-id> | grep "ConnectionRefusedError: [Errno 111] Connection refused"
```

If there are exception messages, Tagger is unable to connect to dependent services. It generally establishes connection after 3/4 retries. Please contact support@levo.ai for further assistance.

<br></br>

