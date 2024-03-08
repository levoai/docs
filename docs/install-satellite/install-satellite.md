---
sidebar_position: 0
---

# Install Satellite

## 1. Prerequisites
- You have an account on [Levo.ai](https://app.levo.ai/login)
- [OS Compatibility script](./os-compat-check.mdx) indicates the Linux host (that you want to instrument with the Sensor) is compatible.
- At least 4 CPUs
- At least 8 GB RAM
- The Satellite URL should be reachable from the Sensor.
  - The Collector listens for spans from the eBPF Sensor on port 4317 using HTTP/2 (gRPC), and port 4318 using HTTP/1.1. 
  - The Satellite listens for spans from the PCAP Sensor on port 9999 using HTTP/1.1.

## 2. Copy `Authorization Key` from Levo.ai

The Satellite uses an authorization key to access Levo.ai.

- [Login](https://app.levo.ai/login) to Levo.ai.
- Click on your user profile.
- Click on `User Settings`
- Click on `Keys` on the left navigation panel
- Click on `Get Satellite Authorization Key`

Copy your authorization key. This key is required in subsequent steps below.


## 3. Follow instructions for your platform
- [Install on Kubernetes](satellite-kubernetes.md)
- [Install on Linux host via Docker Compose](satellite-docker-compose.md)
- [Install in AWS EC2 using Levo Satellite AMI](#install-in-aws-ec2-using-levo-satellite-ami)
- [Install in AWS EKS](#install-in-aws-eks)
  - [Install in AWS EKS using EC2](#install-in-aws-eks-using-ec2)
  - [Install in AWS EKS using Fargate](#install-in-aws-eks-using-fargate)
- [Install in AWS ECS](#install-in-aws-ecs)

<br></br>

-------------------------------------------------


-------------------------------------------------

-------------------------------------------------


---


-------------------------------------------------

-------------------------------------------------

-------------------------------------------------
