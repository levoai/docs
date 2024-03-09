---
sidebar_position: 2
---

# Use a Private Docker Registry for Kubernetes Installations

To use private images while installing Levo's services in your environment, you need to follow 3 steps:
1. Copy Levo's public Docker images into your registry.
1. Create a secret in your Kubernetes cluster with the credentials to access your private registry.
1. Specify a values file to the Levo Helm chart to use your private registry.

## Copy Levo's public Docker images into your registry

An example bash script to do this for AWS ECR has been provided below. Please modify this script to suit your needs.

```bash
#!/usr/bin/env bash

# Dependencies: yq, helm, awscli, docker

set -e
trap "exit" INT

region="us-west-2"
registry="your.registry"

helm repo add levoai https://charts.levo.ai || true
helm repo update
images=($(helm template levoai/levoai-satellite | yq -N '..|.image? | select(.)' | sort -u))
images+=($(helm template levoai/levoai-ebpf-common-tasks | yq -N '..|.image? | select(.)' | sort -u))

for image in "${images[@]}"; do
  echo "Pushing $image to $registry"
  docker pull "$image"
  image_name=levoai/${image##*/}
  repo_name=${image_name%:*}
  aws ecr describe-repositories --repository-names $repo_name --region $region || aws ecr create-repository --repository-name $repo_name --region $region
  docker tag "$image" "$registry/$image_name"
  docker push "$registry/$image_name"
done
```

## Create a secret in your Kubernetes cluster with the credentials to access your private registry

Adapt the following command for your private registry:

```shell
kubectl create secret docker-registry ecr-auth --docker-server=your.registry --docker-username=AWS --docker-password=$(aws ecr get-login-password --region us-west-2)
```

## Specify a values file to the Levo Helm chart to use your private registry

### eBPF Sensor

```yaml
sensor:
  imageRepo: your.registry/levoai/ebpf_sensor
  imageTag: 0.30.1
```

### Satellite

```yaml
global:
  levoai_config_override:
    onprem-api:
      org-id: <id>
      refresh-token: 
  busyboxImage: your.registry/levoai/busybox

levoai-collector:
  image: your.registry/levoai/collector
  imageTag: 0.17.2
  imagePullSecrets:
    - name: ecr-auth

levoai-ion:
  image:
    repository: your.registry/levoai/ion
    tag: 0.6.0
  imagePullSecrets: 
    - name: ecr-auth

rabbitmq:
  metrics:
    enabled: true
  image:
    registry: your.registry
    repository: levoai/rabbitmq
    tag: 3.12.8-debian-11-r1
    pullSecrets:
      - ecr-auth

satellite:
  image:
    repository: your.registry/levoai/satellite
    tag: 0.2.462
  imagePullSecrets: 
    - name: ecr-auth

tagger:
  image:
    repository: your.registry/levoai/satellite
    tag: 0.2.462
  imagePullSecrets: 
    - name: ecr-auth
```