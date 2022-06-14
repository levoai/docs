---
sidebar_position: 1
---

# Satellite Lifecycle Management

## [1. Kubernetes based installation](./satellite-mgmt.md#kubernetes-based-installation)

## [2. Docker based installation](./satellite-mgmt.md#docker-based-installation)

<br></br>

---------------------------------------------------------

## Kubernetes based installation

### Upgrade Satellite
```bash
# Setup environment variables
export LEVOAI_AUTH_KEY=<'Authorization Key' from the original installation> 
export APP_NAME=<'Application Name' chosen during installation>

# Update helm repo and upgrade installation
helm repo update

helm upgrade -n levoai \
  --set global.levoai.app_name=$APP_NAME \
  --set global.levoai_config_override.onprem-api.refresh-token=$LEVOAI_AUTH_KEY \
  levoai-satellite levoai/levoai-satellite
```


### Uninstall Satellite
```bash
helm uninstall levoai-satellite -n levoai
```

### Change the `Authorization Key` used to communicate with Levo.ai
- Uninstall the Satellite.
- Reinstall the Satellite with the new `Authorization Key`.

### List Satellite's pods
```bash
kubectl -n levoai get pods | grep -E '^levoai-collector|^levoai-rabbitmq|^levoai-satellite|^levoai-tagger'
```

### Tail logs of a specific pod
```bash
kubectl -n levoai logs -f <pod name>
```

<br></br>

---------------------------------------------------------

## Docker based installation

### Uninstall the Satellite
Ensure you are in the same directory where you downloaded the [Docker Compose file](../../../../../static/artifacts/satellite/docker-compose.yml).

Execute the below command:
```bash
docker compose down --remove-orphans -v
```

### Upgrade the Satellite
1. Uninstall the Sensor
2. Reinstall the Sensor. The install always *pulls* the latest Docker images for the Satellite.

### List Satellite's containers
```bash
docker ps | grep -E 'levoai/collector|bitnami/rabbitmq|levoai/satellite|levoai/tagger'
```

### Get logs of a specific container
```bash
docker logs <container id>
```

### Tail logs of a specific container
```bash
docker logs -f <container id>
```

### Get logs for last 1 minute
```bash
docker logs <container id> --since 1m
```
