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

kubectl -n levoai logs -f levoai-tagger-799db4d9cc-89jm8 | grep "Exception: Failed to refresh access token"
```

If there are excepion messages, you have an incorrect or stale `Authorization Key`. Please contact support@levo.ai for further assistance.

### Connectivity Errors
TBD

<br></br>

--------------------------------------
# Docker Compose Based

TBD