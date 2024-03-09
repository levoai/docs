---
sidebar_position: 3
---

# Sensor on Kubernetes

## Install on Kubernetes as daemonset

### Prerequisites
-   Kubernetes version >= v1.18.0
-   [Helm v3](https://helm.sh/docs/intro/install/)  installed and working.
-   The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
-   `kubectl`  access to the cluster, with  `cluster-admin`  permissions.

### 1. Install levoai helm repo
```
helm repo add levoai https://charts.levo.ai && helm repo update
```

### 2. Create levoai namespace and install pcap-sensor

```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
# If Sensor is installed on same cluster as Satellite, use 'http://levoai-satellite:9999'
# Specify below the 'Application Name' chosen earlier.
#
helm upgrade levoai-pcap-common-tasks levoai/levoai-pcap-common-tasks \
  --install \
  --namespace levoai \
  --create-namespace \
  --set common-tasks.config.levoaiOrgId="your Levo Org ID" \
  --set common-tasks.config.satelliteUrl="http(s)://hostname|IP:port"
  --set common-tasks.confg.levoEnv="your application environment (staging, production etc.)"
```

Set additional configs
```bash
common-tasks.config.traceExportInterval="trace export interval in seconds (default 10)"
common-tasks.config.rateLimit="rate limit number in traces/min (default 1000)"
common-tasks.config.fitler="pcap filter string, eg. port 8080 and (not port 8081)"
common-tasks.config.hostAllow="host allow regex"
common-tasks.config.pathAllow="path allow regex"
common-tasks.config.hostExclusions="host exclusion regex"
common-tasks.config.pathExclusions="path exclusion regex"
```

## Sensor Lifecycle Management

### Uninstall Sensor
```bash
helm uninstall levoai-common-tasks -n levoai
```

### Get Sensor Logs
```bash
kubectl get pods -n levoai

kubectl logs -n levoai <pod name>
```

### Upgrade Sensor
- Uninstall Sensor
- Reinstall Sensor

### Manage Sensor Configuration
Please refer to [Sensor Configuration](./sensor-configuration.mdx), and [Applying Configuration Changes](./sensor-configuration.mdx#running-on-kubernetes).

