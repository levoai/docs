---
sidebar_position: 2
title: "Secure & Organize APIs: Leverage a Private Registry"
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
repositoryPrefix="your.repository-prefix"

helm repo add levoai https://charts.levo.ai || true
helm repo update
images=($(helm template levoai/levoai-satellite | yq -N '..|.image? | select(.)' | sort -u))
images+=($(helm template levoai/levoai-ebpf-sensor | yq -N '..|.image? | select(.)' | sort -u))

for image in "${images[@]}"; do
  src_image=${image#"docker.io/"}
  repo_name_with_tag=${src_image#*/}
  repo_name=${repo_name_with_tag#*/}
  dest_image="$registry/$repositoryPrefix/$repo_name"
  aws ecr describe-repositories --repository-names $repo_name --region $region || aws ecr create-repository --repository-name $repo_name --region $region
  echo "Copying $src_image to $dest_image"
  docker buildx imagetools create --tag $dest_image $src_image
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
```

### Satellite

```yaml
global:
  levoai_config_override:
    onprem-api:
      org-id: <id>
      refresh-token: <token>
  imageRegistry: <your.registry>
  imagePullSecrets:
    - name: ecr-auth

rabbitmq:
  image:
    repository: <your.registry-prefix>/rabbitmq
    tag: <version>
    
satellite:
  image:
    repository: <your.registry-prefix>/satellite
    tag: <version>

tagger:
  image:
    repository: <your.registry-prefix>/satellite
    tag: <version>

levoai-ion:
  image:
    repository: <your.registry-prefix>/satellite
    tag: <version>
    
levoai-collector:
  image:
    repository: <your.registry-prefix>/collector
    tag: <version>

haproxy:
  image:
    repository: <your.registry-prefix>/haproxy
    tag: <version>

```
