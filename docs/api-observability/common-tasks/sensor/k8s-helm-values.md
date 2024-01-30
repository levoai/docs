# Kubernetes Configuration

### Add Tolerations and Node Selectors

Tolerations and Node Selectors for the Sensor pods may be specified via helm values. For example:

```yaml
sensor:
  tolerations:
    - key: node-role.kubernetes.io/control-plane
      operator: Exists
      effect: NoSchedule
    - key: "devops"
      operator: "Equal"
      value: "dedicated"
      effect: "NoSchedule"
  nodeSelector:
    kubernetes.io/hostname: "mavros"
```
