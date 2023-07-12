# Install pcap-sensor

## Prerequisites

 - Docker Engine version  `18.03.0`  and above
 - Admin (or  `sudo`) privileges on the Docker host
 - AWS profile access key and secret access key saved at path  ~/.aws/credentials file
 - The profile should have all the required permissions as listed [here](#aws-permissions)
 - Refer [pcap-filter-guide](https://www.tcpdump.org/manpages/pcap-filter.7.html) to apply filters.

 ## Follow instructions for your platform

 - [Install on Fargate](#install-fargate)
   - [Using Docker run command](#install-fargate-using-docker)
   - [Using JSON](#install-fargate-using-json)
 - [Install via Docker](#install-docker)
 - [Install on Kuberenetes](#install-kubernetes)

<a id="install-fargate"></a>

## Install Sensor on Fargate

<a id="install-fargate-using-docker"></a>

### Docker run command
```bash
sudo docker run --rm -it -v ~/.aws:/aws:ro \
-e LEVO_SATELLITE_URL="your-satelliteurl (http(s)://hostname|IP:port)" \
-e LEVO_ORG_ID="Levo organization ID" \
levoai/pcap-sensor
```
The option `-v ~/.aws:/aws:ro` maps the directory containing your AWS credentials into the container so that the Agent can use them to perform actions on your behalf.

### CLI prompts

1.  Provide the AWS profile containing the credentials you wish to use. If you only have one profile in your .aws/credentials file, simply press Enter.
2.  Select the region in which your FARGATE application runs.
3.  Select the Task Definition on which you want to install the Levo Sensor as a sidecar
4.  From the list of services running the Task Definition, select the service you want to restart after the Levo Sensor has been added to the Task Definition.

Enter "Y" to proceed.

Once confirmed, the CLI will generate a new version of the task definition, incorporating the Levo Sensor as a sidecar while keeping other settings unchanged. After updating the task definition, Levo will also update the selected service to utilise the updated task definition. Finally, the CLI will monitor the service's status to ensure a successful deployment of the new version, which includes the Levo sensor sidecar.


### Additional Environment Variables
```
LEVO_FILTER -> Set the PCAP filter. eg.  port 8080 and (not port 8081)
LEVO_TRACE_EXPORT_INTERVAL -> Set the trace export interval (default 10s)
LEVO_RATE_LIMIT_NUMBER -> Set rate limit for trace capturing (default 1000/min)
LEVO_HOST_ALLOW_RE -> Regex for allowed hosts
LEVO_PATH_ALLOW_RE -> Regex for allowed paths
LEVO_HOST_EXCLUSIONS_RE -> Regex for excluded hosts
LEVO_PATH_EXCLUSIONS_RE -> Regex for excluded paths
```

<a id="install-fargate-using-json"></a>

### Install using JSON

 - Go to Task Definitions
 - Select the required task definition
 - Click on `Create revision with JSON`
 - Add the given JSON object under ContainerDefinitions
 - Replace the values for satellite-url and levoai-org-id in entrypoint.
 - Replace the values for Environment and LogConfiguration as per your requirement.

```json
{
    "name": "levo-pcap-sensor",
    "image": "levoai/pcap-sensor",
    "cpu": 0,
    "portMappings": [],
    "essential": false,
    "entryPoint": [
        "./bin/levo-pcap-sensor",
        "apidump",
        "--satellite-url",
        "your satellite url (http(s)://hostname|IP:port)",
        "--levoai-org-id",
        "Your Levo org Id here"
    ],
    "environment": [
        {
            "name": "LEVO_AWS_REGION",
            "value": "Region of your cluster"
        },
        {
            "name": "LEVO_ECS_SERVICE",
            "value": "The serivce name"
        },
        {
            "name": "LEVO_ECS_TASK",
            "value": "Task name"
        }
    ],
    "mountPoints": [],
    "volumesFrom": [],
    "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
            "awslogs-group": "Log group here",
            "awslogs-create-group": "true",
            "awslogs-region": "Log region here",
            "awslogs-stream-prefix": "ecs"
        }
    }
}
```
Specify additional flags in the entrypoint
```bash
--trace-export-interval     # default 10s
--rate-limit                # default 1000/min
--filter                    # eg. port 8080 and (not port 8081)
--host-allow                # regex for allowed hosts
--path-allow                # regex for allowed paths
--host-exclusions           # regex for excluded hosts
--path-exclusions           # regex for excluded paths
```
<a id="install-docker"></a>

## Install via Docker

### Prerequisites
-   Docker Engine version  `18.03.0`  and above
-   Admin (or  `sudo`) privileges on the Docker host

If you are running the satellite as a docker container on the host machine, use the satellite-url `http://host.docker.internal:9999`
Do ***NOT *** use `localhost` as the hostname, since the sensor is running inside a container.
```bash
sudo docker run --net=host --rm -it levoai/pcap-sensor \
./bin/levo-pcap-sensor apidump \
--satellite-url "your satellite url (http(s)://hostname|IP:port)" \
--levoai-org-id "your levo org id"
```
Specify additional flags in the command
```bash
--trace-export-interval	"trace export interval in seconds (default 10)"
--rate-limit "rate limit in traces per min (default 1000)"
--filter "pcap filter string, eg. port 8080 and (not port 8081)"
--host-allow "host allow regex"
--path-allow "path allow regex"
--host-exclusions "host exclude regex"
--path-exclusions "path exclude regex"
```
<a id="install-kubernetes"></a>

## Install on Kubernetes

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
  --set sensor.config.satelliteUrl="htpp(s)://hostname|IP:port"
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