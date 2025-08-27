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

### 1. Add levoai Helm repo
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

**Please contact [Support](mailto:support@levo.ai) if you notice health/connectivity related errors.**

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

---

### Using a Private Docker Registry for Kubernetes Installations (Optional)
If you want to use a private docker registry for the sensor installation, refer to [Using a Private Docker Registry for Kubernetes Installations](/guides/general/private-registry.md).


### Optimizing Resource Usage for Levo eBPF Sensor

Resource requests and limits help ensure the Sensor runs efficiently and reliably in your Kubernetes cluster. You can tune these settings to match your environment’s needs and available resources.

#### 1. Configure CPU and Memory Requests/Limits

The Sensor’s resource settings are defined in the Helm chart under `sensor.containerResources`. You can override these values during installation or upgrade:

- **Requests**: Minimum resources guaranteed for the container.
- **Limits**: Maximum resources the container can use.

Example values.yaml section:
```yaml
sensor:
  containerResources:
    requests:
      cpu: 0.5
      memory: 1Gi
    limits:
      cpu: 1.0
      memory: 2Gi
```

#### 2. Set Resource Values via Helm

To customize resource allocation, use the following flags with your Helm command:

```shell
helm upgrade --install -n levoai levoai-sensor levoai/levoai-ebpf-sensor \
  --set sensor.containerResources.requests.cpu=0.25 \
  --set sensor.containerResources.limits.cpu=0.5 \
  --set sensor.containerResources.requests.memory=512Mi \
  --set sensor.containerResources.limits.memory=1Gi
```

You can adjust the values (`cpu`, `memory`) to fit your cluster’s capacity and workload.

#### 3. Verify Resource Settings

After deployment, check the resource settings applied to the Sensor pod:

```shell
kubectl -n levoai get pod <levoai-sensor-pod-name> -o jsonpath='{.spec.containers[*].resources}'
```

#### 4. Tips for Tuning

- **Monitor Usage**: Use `kubectl top pod` or your cluster’s monitoring tools to observe actual resource consumption.
- **Adjust Gradually**: Start with conservative values and increase if you notice throttling or OOM (Out Of Memory) errors.
- **Cluster Constraints**: Ensure your node types and quotas can support the requested resources.

For further assistance with resource optimization, contact [Support](mailto:support@levo.ai).
