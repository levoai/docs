---
sidebar_position: 1
title: Install eBPF Sensor on Kubernetes | Levo.ai Documentation
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
helm repo add levoai https://charts.levo.ai && helm repo update levoai
```

### 2. Create `levoai` namespace & install Sensor
```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
# If Sensor is installed on same cluster as Satellite, use 'levoai-haproxy'
# If they are installed on different clusters, the haproxy service should be exposed so that it is
# reachable by the sensor. Use the exposed address as the value for satellite-url.
# Also specify the Organization ID (copy from levo platform).
#
helm upgrade levoai-sensor levoai/levoai-ebpf-sensor \
  --install \
  --namespace levoai \
  --create-namespace \
  --set sensor.orgId=<your-org-id>
  --set sensor.satelliteUrl=levoai-haproxy \
  --set sensor.levoEnv=<Application environment>
```

:::info

You need to expose the levoai-haproxy service so that sensor can reach satellite when it is installed 
in a different cluster; the installation command will be:

```bash
helm upgrade levoai-sensor levoai/levoai-ebpf-sensor \
  --install \
  --namespace levoai \
  --create-namespace \
  --set sensor.satelliteUrl=<hostname|IP:port> \
  --set sensor.levoEnv=<Application environment>
```

:::


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
If they are installed on different clusters, the haproxy service should be exposed so that it is
reachable by the sensor. Use the exposed address as the value for satellite-url.
If you wish to, you may also request Levo to host the Satellite for you. In this case, you will need to set the
`satellite-url` to `https://collector.levo.ai` and specify an organization ID (`organization-id`) via helm values.

```shell
helm upgrade --set sensor.levoEnv=<your-application-environment> --set sensor.satelliteUrl=https://collector.levo.ai --set sensor.orgId=<your-org-id> levoai-sensor levoai/levoai-ebpf-sensor -n levoai
```

Please proceed to the next step, if there are no errors.

<br></br>
