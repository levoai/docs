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
helm upgrade levoai-pcap-sensor levoai/levoai-pcap-sensor \
  --install \
  --namespace levoai \
  --create-namespace \
  --set sensor.config.levoaiOrgId="your Levo Org ID" \
  --set sensor.config.satelliteUrl="http(s)://hostname|IP:port"
  --set sensor.confg.levoEnv="your application environment (staging, production etc.)"
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

