---
sidebar_position: 1
---

# Sensor on Kubernetes

## Install on Kubernetes

### Prerequisites
- Kubernetes version >= v1.18.0
- [Helm v3](https://helm.sh/docs/intro/install/) installed and working.
- The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
- `kubectl` access to the cluster, with `cluster-admin` permissions.

### 1. Install levoai Helm repo
```bash
helm repo add levoai https://charts.levo.ai && helm repo update
```

### 2. Create `levoai` namespace & install Sensor
```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
# If Sensor is installed on same cluster as Satellite, use 'levoai-haproxy'
# Specify below the 'Application Name' chosen earlier and Organization ID (copy from levo platform).
#
helm upgrade levoai-sensor levoai/levoai-ebpf-sensor \
  --install \
  --namespace levoai \
  --create-namespace \
  --set sensor.config.default-service-name=<'Application Name' chosen earlier> \
  --set sensor.config.satellite-url=<hostname|IP:port> \
  --set sensor.levo_env=<'Application environment'>
```


### 3. Verify connectivity with Satellite

#### i. Check Sensor health

Check the health of the Sensor by executing the following:

```bash
kubectl -n levoai get pods | grep levoai-sensor
```                              
If the Sensor is healthy, you should see output similar to below.

```bash
levoai-sensor-747fb4aaa9-gv8g9   1/1     Running   0             1m8s
```

#### ii. Check connectivity

Execute the following command to check for connectivity health:

```bash
# Please specify the actual pod name for levoai-sensor below
kubectl -n levoai logs <levoai-sensor pod name> | grep "Initial connection with Collector"
```
If connectivity is healthy, you should see output similar to below.

```
2022/06/13 21:15:40 729071	INFO [ebpf_sensor.cpp->main:120]	Initial connection with Collector was successful.
```

**Please contact `support@levo.ai` if you notice health/connectivity related errors.**

#### NOTE:
The default address for the satellite url in helm installations is `levoai-haproxy`.
This address assumes that the Satellite is installed in the same cluster (and namespace) as the Sensor.
If you wish to, you may also request Levo to host the Satellite for you. In this case, you will need to set the `satellite-url` to `https://collector.levo.ai` and specify an organization ID (`organization-id`) via helm values.

```shell
helm upgrade --set sensor.levo_env=<your-application-environment> --set sensor.config.satellite-url=https://collector.levo.ai --set sensor.config.organization-id=<your-org-id> levoai-sensor levoai/levoai-ebpf-sensor -n levoai
```

Please proceed to the next step, if there are no errors.

<br></br>
