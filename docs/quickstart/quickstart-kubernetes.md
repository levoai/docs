---
sidebar_position: 3
keywords: [API Security, ZAP, OWASP, Linux, macOS, Windows, API Observability, Kubernetes]
---

# Quickstart on Kubernetes

This quickstart guide will help you install the LevoAI eBPF Sensor on a Kubernetes cluster.

### Prerequisites
- Kubernetes version >= `v1.18.0`
- [Helm v3](https://helm.sh/docs/intro/install/) installed and working.
- The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
- `kubectl` access to the cluster, with `cluster-admin` permissions.
- At least 4 CPUs
- At least 8 GB RAM

## Copy `Authorization Key` from Levo.ai

The Satellite uses an authorization key to access Levo.ai.

- [Login](https://app.levo.ai/login) to Levo.ai.
- Click on your user profile.
- Click on `User Settings`
- Click on `Keys` on the left navigation panel
- Click on `Get Satellite Authorization Key`

Copy your authorization key. This key is required in subsequent steps below.

### Add Helm Charts Repository

```bash
helm repo add levoai https://charts.levo.ai && helm repo update
```

### Add LevoAI Auth Key

```bash
export LEVOAI_AUTH_KEY=<'Authorization Key' copied earlier>
```

### Install Satellite

```bash
helm upgrade --install -n levoai --create-namespace \
  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
  levoai-satellite levoai/levoai-satellite 
```

### Check satellite connectivity
Execute the following to check for connectivity health:

```bash
# Please specify the actual pod name for levoai-tagger below
kubectl -n levoai logs <levoai-tagger pod name> | grep "Ready to process; waiting for messages."
```
If connectivity is healthy, you will see output similar to below.

```bash
{"level": "info", "time": "2022-06-07 08:07:22,439", "line": "rabbitmq_client.py:155", "version": "fc628b50354bf94e544eef46751d44945a2c55bc", "module": "/opt/levoai/e7s/src/python/levoai_e7s/satellite/rabbitmq_client.py", "message": "Ready to process; waiting for messages."}
```

### Install eBPF Sensor

```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
# If Sensor is installed on same cluster as Satellite, use 'levoai-collector.levoai:4317'
# Specify below the 'Application Name' chosen earlier.
#
helm upgrade levoai-sensor levoai/levoai-ebpf-sensor \
  --install \
  --namespace levoai \
  --create-namespace \
  --set sensor.config.satellite-url=<hostname|IP:port>
  --set sensor.config.env=<'Application environment'>
```

### Check sensor health

```bash
# Please specify the actual pod name for levoai-sensor below
kubectl -n levoai logs <levoai-sensor pod name> | grep "Initial connection with Collector"
```
If connectivity is healthy, you should see output similar to below.

```
2022/06/13 21:15:40 729071	INFO [ebpf_sensor.cpp->main:120]	Initial connection with Collector was successful.
```

**Please contact `support@levo.ai` if you notice health/connectivity related errors.**
