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
repositoryPrefix="${repositoryPrefix:-}" # Optional, replace with your repository prefix, in case you are using a different repository

helm repo add levoai https://charts.levo.ai || true
helm repo update levoai
images=($(helm template levoai/levoai-satellite | yq -N '..|.image? | select(.)' | sort -u))
images+=($(helm template levoai/levoai-ebpf-sensor | yq -N '..|.image? | select(.)' | sort -u))

for image in "${images[@]}"; do
  src_image=${image#"docker.io/"}
  if [ -n "$repositoryPrefix" ]; then
    repo_name=${src_image#*/}
    dest_image="$registry/$repositoryPrefix/$repo_name"
  else
    repo_name=${src_image%:*}
    dest_image="$registry/$src_image"
  fi
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
  imageRepo: <your.registry>/levoai/ebpf_sensor
```

> Note: In case you are using a different repository, please replace `levoai/ebpf_sensor` with the correct repository name.

```yaml
sensor:
  imageRepo: <your.registry>/<your-repository-prefix>/ebpf_sensor
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
```

> Note: In case you are using a different repository, please add the following lines to the `values.yaml`.

```yaml
global:
    busyboxImage: <your.repository-prefix>/busybox

rabbitmq:
  image:
    repository: <your.repository-prefix>/rabbitmq
    tag: <version>
    
satellite:
  image:
    repository: <your.repository-prefix>/satellite
    tag: <version>

tagger:
  image:
    repository: <your.repository-prefix>/satellite
    tag: <version>

levoai-ion:
  image:
    repository: <your.repository-prefix>/satellite
    tag: <version>
    
levoai-collector:
  image:
    repository: <your.repository-prefix>/collector
    tag: <version>

haproxy:
  image:
    repository: <your.repository-prefix>/haproxy
    tag: <version>
```
