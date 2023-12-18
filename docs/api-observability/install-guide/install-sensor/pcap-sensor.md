---
sidebar_position: 3
---

# Install pcap Sensor

## Prerequisites

 - Docker Engine version  `18.03.0`  and above
 - Admin (or  `sudo`) privileges on the Docker host
 - AWS profile access key and secret access key saved at path  ~/.aws/credentials file
 - The profile should have all the required permissions as listed [here](#aws-permissions)
 - Refer [pcap-filter-guide](https://www.tcpdump.org/manpages/pcap-filter.7.html) to apply filters.

> **_NOTE:_**  You need to have the satellite installed already to configure the sensor to point to it. If you haven't done it already, head over to [Install Satellite ](../install-satellite.mdx)

 ## Follow instructions for your platform

 - [Install on Fargate](#install-fargate)
 - [Install via Docker](#install-docker)
 - [Install on Kuberenetes](#install-kubernetes)

<a id="install-fargate"></a>

## Install Sensor on Fargate

The pcap Sensor can be installed as a sidecar on an existing AWS task by adding to its task definition via the AWS Console.

The steps to add the sensor to your task are as follows

 - Go to Task Definitions
 - Select the required task definition
 - Click on `Create revision with JSON`
 - Add the given JSON object under ContainerDefinitions
 - Replace the values for satellite-url, levo-env and levoai-org-id in entrypoint.
 - Replace the values for Environment and LogConfiguration as per your requirement.
 - Set the cpu limit as number of CPU Units (*Note: 1 core = 1024 CPU Units*)
 - Set the memory limit in `Mib` (*Note: memory should not exceed the Task memory limit*)

```json
{
    "name": "levo-pcap-sensor",
    "image": "levoai/pcap-sensor",
    "cpu": 512,
    "memory": 512,
    "portMappings": [],
    "essential": false,
    "entryPoint": [
        "./levo_pcap_sensor.sh",
        "apidump",
        "--satellite-url",
        "< INSERT SATELLITE URL (http(s)://hostname|IP:port) >",
        "--levo-env",
        "<INSERT APPLICATION ENVIRONMENT (staging, production etc.)>",
        "--levoai-org-id",
        "< INSERT LEVO ORG ID >",
        "--sample-rate",
        "<INSERT DECIMAL NUMBER FROM 0 TO 1"
    ],
    "environment": [
        {
            "name": "LEVO_AWS_REGION",
            "value": "< INSERT AWS REGION (us-west-2) >"
        }
    ],
    "mountPoints": [],
    "volumesFrom": [],
    "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
            "awslogs-group": "< INSERT LOGS IDENTIFIER (/ecs/your-application-pcap) >",
            "awslogs-create-group": "true",
            "awslogs-region": "< INSERT AWS REGION (us-west-2) >",
            "awslogs-stream-prefix": "ecs-pcap"
        }
    }
}
```

Specify additional flags in the entrypoint
```bash
--trace-export-interval     # default 10s
--sample-rate               # default 1
--filter                    # eg. port 8080 and (not port 8081)
--host-allow                # regex for allowed hosts
--path-allow                # regex for allowed paths
--host-exclusions           # regex for excluded hosts
--path-exclusions           # regex for excluded paths
```

## Install via Docker

### Prerequisites
-   Docker Engine version  `18.03.0`  and above
-   Admin (or  `sudo`) privileges on the Docker host

```bash
sudo docker run --net=host --rm -it levoai/pcap-sensor \
./levo_pcap_sensor.sh apidump \
--satellite-url "your satellite url (http(s)://hostname|IP:port)" \
--levo-env "your application environment (staging, production etc.)" \
--levoai-org-id "your levo org id"
```
Specify additional flags in the command
```bash
--trace-export-interval	"trace export interval in seconds (default 10)"
--sample-rate "sampling rate for traces (default 1)"
--filter "pcap filter string, eg. port 8080 and (not port 8081)"
--host-allow "host allow regex"
--path-allow "path allow regex"
--host-exclusions "host exclude regex"
--path-exclusions "path exclude regex"
```
<a id="install-kubernetes"></a>

## Install on Kubernetes as daemonset

### Prerequisites
-   Kubernetes version >= v1.18.0
-   [Helm v3](https://helm.sh/docs/intro/install/)  installed and working.
-   The Kubernetes cluster API endpoint should be reachable from the machine you are running Helm.
-   `kubectl`  access to the cluster, with  `cluster-admin`  permissions.

### 1. Install levoai helm repo
```
helm repo add levoai https://charts.levo.ai && helm repo update
```

### 2. Create levoai namespace and install pcap-sensor

```bash
# Replace 'hostname|IP' & 'port' with the values you noted down from the Satellite install
# If Sensor is installed on same cluster as Satellite, use 'http://levoai-satellite:9999'
# Specify below the 'Application Name' chosen earlier.
#
helm upgrade levoai-pcap-sensor levoai/levoai-pcap-sensor \
  --install \
  --namespace levoai \
  --create-namespace \
  --set sensor.config.levoaiOrgId="your Levo Org ID" \
  --set sensor.config.satelliteUrl="http(s)://hostname|IP:port"
  --set sensor.confg.levoEnv="your application environment (staging, production etc.)"
```

Set additional configs
```bash
sensor.config.traceExportInterval="trace export interval in seconds (default 10)"
sensor.config.rateLimit="rate limit number in traces/min (default 1000)"
sensor.config.fitler="pcap filter string, eg. port 8080 and (not port 8081)"
sensor.config.hostAllow="host allow regex"
sensor.config.pathAllow="path allow regex"
sensor.config.hostExclusions="host exclusion regex"
sensor.config.pathExclusions="path exclusion regex"
```
<a id="aws-permissions"></a>

## AWS Permissions needed

Add the **AmazonECS_FullAccess** policy to get access to all the necessary permissions.

| Action                      | Resource                                               | Purpose                                                                                      |
|-----------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------------|
| ec2:DescribeRegions         | *                                                      | Find the list of AWS regions you have enabled. (If not present, defaults to a precompiled list.) |
| ecs:ListClusters            | *                                                      | Find the available ECS clusters.                                                             |
| ecs:DescribeClusters        | , or restricted to account like `arn:aws:ecs:::cluster/*` | Look up the names of the available ECS clusters.                                              |
| ecs:ListTaskDefinitionFamilies | *                                                  | Find the available task definitions.                                                         |
| ecs:DescribeTaskDefinition  | *                                                      | Read the existing task definition in order to copy it.                                        |
| ecs:RegisterTaskDefinition  | *                                                      | Write a new version of the task definition.                                                  |
| ecs:ListServices            | *                                                      | Find the available services.                                                                 |
| ecs:DescribeServices        | *, or restricted to your account, or restricted to the cluster you selected | Identify which services are using the task definition you selected.                 |
| ecs:UpdateService           | *, or restricted to your account, or restricted to the cluster you selected | Update and restart the service using the new task definition.                             |
| ecs:TagResource             | *, or restricted to your account, or restricted to the cluster you selected | Mark the service as having been updated by Levoai.
