---
sidebar_position: 2
title: Install PCAP Sensor on Kubernetes | Levo.ai Documentation
---

# Sensor on Kubernetes

## Install on Kubernetes as daemonset

### Prerequisites
-   Kubernetes version >= v1.18.0
-   [Helm v3](https://helm.sh/docs/intro/install/)  installed and working.
-   The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
-   `kubectl`  access to the cluster, with  `cluster-admin`  permissions.

### 1. Add levoai helm repo
```
helm repo add levoai https://charts.levo.ai && helm repo update levoai
```

### 2. Create levoai namespace and install pcap-sensor

```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
# If Sensor is installed on same cluster as Satellite, use 'http://levoai-haproxy:80' 
# Specify below the 'Application Name' chosen earlier.
#
helm upgrade levoai-pcap-sensor levoai/levoai-pcap-sensor \
  --install \
  --namespace levoai \
  --create-namespace \
  --set sensor.config.levoaiOrgId="your Levo Org ID" \
  --set sensor.config.satelliteUrl="http(s)://hostname|IP:port" \
  --set sensor.config.levoEnv="your application environment (staging, production etc.)"
```

Set additional configs
```bash
sensor.config.traceExportInterval="trace export interval in seconds (default 10)"
sensor.config.rateLimit="rate limit number in traces/min (default 1000)"
sensor.config.fitler="pcap filter string, eg. port 8080 and (not port 8081)"
sensor.config.hostAllow="host allow regex"
sensor.config.pathAllow="path allow regex"
sensor.config.hostExclusions="host exclusion regex"
sensor.config.pathExclusions="path exclusion regex"
```

### 3. Configuring sensor as per memory and CPU resource limits

- For normal/average case use the default config
- For strict resources, use the [Low resource helm values file](../../../static/artifacts/pcap-sensor/low_resource_values.yaml)


### Using a Private Docker Registry for Kubernetes Installations (Optional)
If you want to use a private docker registry for the sensor installation, refer to [Using a Private Docker Registry for Kubernetes Installations](/guides/general/private-registry.md).

### Optimizing Resource Usage for Levo PCAP Sensor

Resource requests and limits help ensure the PCAP Sensor runs efficiently and reliably in your Kubernetes cluster. You can tune these settings to match your environment’s needs and available resources.

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
      cpu: 1
      memory: 2Gi
```

#### 2. Set Resource Values via Helm

To customize resource allocation, use the following flags with your Helm command:

```shell
helm upgrade --install -n levoai levoai-pcap-sensor levoai/levoai-pcap-sensor \
  --set sensor.containerResources.requests.cpu=0.25 \
  --set sensor.containerResources.limits.cpu=0.5 \
  --set sensor.containerResources.requests.memory=512Mi \
  --set sensor.containerResources.limits.memory=1Gi
```

You can adjust the values (`cpu`, `memory`) to fit your cluster’s capacity and workload.

#### 3. Verify Resource Settings

After deployment, check the resource settings applied to the Sensor pod:

```shell
kubectl -n levoai get pod <levoai-pcap-sensor-pod-name> -o jsonpath='{.spec.containers[*].resources}'
```

#### 4. Tips for Tuning

- **Monitor Usage**: Use `kubectl top pod` or your cluster’s monitoring tools to observe actual resource consumption.
- **Adjust Gradually**: Start with conservative values and increase if you notice throttling or OOM (Out Of Memory) errors.
- **Cluster Constraints**: Ensure your node types and quotas can support the requested resources.

For further assistance with resource optimization, contact [Support](mailto:support@levo.ai).
