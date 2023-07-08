---
sidebar_position: 2
---

# Troubleshooting

[Running on Kubernetes](./troubleshoot.md#kubernetes-based)
[Running via Docker Compose](./troubleshoot.md#docker-compose-based)

<br></br>

--------------------------------------
# Kubernetes Based

## Tagger Errors

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

--------------------------------------

# Docker Compose Based

## Tagger Errors

The `Tagger` component sends API endpoint metadata information to Levo.ai. API Observability will not function if the Tagger is in an errored state.

Please see sample output below from `docker ps | grep -E "levoai/collector|levoai/satellite|bitnami/rabbitmq"`, that shows the Tagger (2nd line item) in an errored state.

```bash                              
65fe40867c70   levoai/collector:stable   "/usr/local/bin/levo…"   5 minutes ago   Up 5 minutes                    0.0.0.0:4317->4317/tcp, 9411/tcp                                                                                                         levoai-collector
45d6c4cccb28   levoai/satellite:stable   "python -OO /opt/lev…"   5 minutes ago   Restarting (1) 55 seconds ago                                                                                                                                            levoai-tagger
721b5431369a   levoai/satellite:stable   "gunicorn --capture-…"   5 minutes ago   Up 5 minutes                    0.0.0.0:9999->9999/tcp                                                                                                                   levoai-satellite
a00dc710d4af   bitnami/rabbitmq:3.10     "/opt/bitnami/script…"   5 minutes ago   Up 5 minutes                    5551-5552/tcp, 0.0.0.0:4369->4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 0.0.0.0:15672->15672/tcp, 0.0.0.0:25672->25672/tcp, 15671/tcp   levoai-rabbitmq
```

Below are common error scenarios:

### Authentication Errors

The `Tagger` component authenticates with Levo.ai using the `Authorization Key`. If Tagger is unable to authenticate, it will error out.

Check for authentication errors in the `Tagger` logs:
```bash
docker logs levoai-tagger | grep "Exception: Failed to refresh access token"
```

If there are exception messages, you have an incorrect or stale `Authorization Key`. Please contact support@levo.ai for further assistance.

### Connectivity Errors

Check for connectivity errors in the `Tagger` logs:
```bash

docker logs levoai-tagger | grep "ConnectionRefusedError: [Errno 111] Connection refused"
```

If there are exception messages, Tagger is unable to connect to dependent services. It generally establishes connection after 3/4 retries. Please contact support@levo.ai for further assistance.
