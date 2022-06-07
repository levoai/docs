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
TBD

### Uninstall Satellite
TBD

### Change the `Authorization Key` used to communicate with Levo.ai
TBD

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
Ensure you are in the same directory where you downloaded the [Docker Compose file](../../../../../static/scripts/satellite/docker-compose.yml).

Execute the below command:
```bash
docker compose down
```

### Upgrade the Satellite
1. Uninstall the Sensor
2. Re install the Sensor TBD TBD ???

### List Satellite's containers
TBD
```bash
docker ps | grep -E '^levoai/collector|^bitnami/rabbitmq|^levoai/satellite|^levoai/tagger'
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
