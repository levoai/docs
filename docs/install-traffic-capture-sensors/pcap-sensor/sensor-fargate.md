---
sidebar_position: 0
---

# Sensor on Fargate

## Prerequisites
- AWS profile access key and secret access key saved at path  ~/.aws/credentials file
- The profile should have all the required permissions as listed [here](#aws-permissions)

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
    "image": "levoai/pcap-sensor:0.0.20",
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


## Sensor Lifecycle Management

### Configure Satellite Address (`host:port` information)

The Satellite address is configured in `/etc/levo/sensor/config.yaml`. The default `host:port` for Satellite is `localhost:4317`.

Edit `/etc/levo/sensor/config.yaml`, and set `collector-endpoint` (under Satellite Settings) to the desired `host:port` value.

```bash
...
# --------------------------------------------------------------------------------------------
# Satellite Settings:
# --------------------------------------------------------------------------------------------
# host:port for the collector service receiving the sensor's API traces.
collector-endpoint: <set to desired host:port value>
# --------------------------------------------------------------------------------------------
...
```
**A Sensor *restart* is required for this to take effect.**


### Start Sensor
```bash
# Note: The default config file is located at: '/etc/levo/sensor/config.yaml'
sudo systemctl start levo-ebpf-sensor
```

### Get Sensor Status
```bash
sudo systemctl status levo-ebpf-sensor
```

### Stop Sensor
```bash
sudo systemctl stop levo-ebpf-sensor
```

### Check Sensor Logs
```bash
journalctl -u levo-ebpf-sensor.service -b -f --since "15min ago"

# If journalctl isn't providing logs, you can alternatively:
sudo cat syslog | grep 'levo-ebpf-sensor'
```

### Show Sensor Config
```bash
cat /etc/levo/sensor/config.yaml
```

### Uninstall Sensor
```bash
sudo apt remove --purge levo-ebpf-sensor
sudo apt clean
```

### Manage Sensor Configuration
Please refer to [Sensor Configuration](/install-traffic-capture-sensors/sensor/sensor-configuration.mdx), and [Applying Configuration Changes](/install-traffic-capture-sensors/common-tasks/sensor-configuration.mdx#running-on-linux-host).

