# Kubernetes Configuration

### Add Tolerations, Affinity and Node Selectors

Tolerations, Affinity and Node Selectors for the Sensor pods may be specified via helm values. For example:

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
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: topology.kubernetes.io/zone
            operator: In
            values:
            - antarctica-east1
            - antarctica-west1
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 1
        preference:
          matchExpressions:
          - key: another-node-label-key
            operator: In
            values:
            - another-node-label-value

```
