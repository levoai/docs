---
sidebar_position: 3
description: Install Levo.ai PCAP sensor on AWS Fargate. Follow our detailed guide for setup, configuration, and robust API traffic capture and analysis.
---

# Sensor on AWS Fargate

## Prerequisites
- AWS profile access key and secret access key saved at path  ~/.aws/credentials file
- The profile should have all the required permissions as listed [here](#aws-permissions)


## Install using Terraform

The pcap Sensor can be installed as a sidecar on an existing AWS task using a terraform script

- Download the [Terraform script](../../static/artifacts/pcap-sensor/main.tf)
- Run the following commands
    - `terraform init`
    - `terraform plan`
    - `terraform apply`
- Enter values for all the prompts, which include `aws-region`, `task-name`, `satellite-url`, `levo-env`, `org-id` etc.
- Or edit the variables in the terraform script and add the required values as default.
- The script will create a new revision of the task-definition with the pcap-sensor as side-car
- To configure CPU and memory given to the container, update `percentage_cpu_utilization` and `percentage_memory_utilization` variables in the terraform script.

*Note: The default values are set to 5% CPU and memory of the total given to the task.*
<br>

## Install using JSON

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
    "image": "levoai/pcap-sensor:0.1.9",
    "cpu": 512,
    "memory": 512,
    "portMappings": [],
    "essential": false,
    "entryPoint": [
        "./bin/init",
        "apidump",
        "--satellite-url",
        "< INSERT SATELLITE URL (http(s)://hostname|IP:port) >",
        "--levo-env",
        "<INSERT APPLICATION ENVIRONMENT (staging, production etc.)>",
        "--levoai-org-id",
        "< INSERT LEVO ORG ID >",
        "--rate-limit",
        "<INSERT NUMBER OF TRACES PER MINUTE>"
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
--rate-limit                # number of traces per minute
--filter                    # eg. port 8080 and (not port 8081)
--host-allow                # regex for allowed hosts
--path-allow                # regex for allowed paths
--host-exclusions           # regex for excluded hosts
--path-exclusions           # regex for excluded paths
```

### 3. Configuring sensor as per memory and CPU resource limits

- For normal/average case use the above JSON
- For strict resources, use the [Low resource JSON file](../../static/artifacts/pcap-sensor/low_resource.json)

### 4. Filtering out traffic
- If you need to ignore the traffic from other side-cars in the AWS task, you can use the `--filter` command to ignore the traffic on the non-essential container ports
eg. `--filter "not port 8888"

<a id="aws-permissions"></a>

### AWS Permissions needed

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

