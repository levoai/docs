# Install as a Sidecar on AWS Fargate!

## Prerequisites

 - Docker Engine version  `18.03.0`  and above
 - Admin (or  `sudo`) privileges on the Docker host
 - AWS profile access key and secret access key saved at path  ~/.aws/credentials file
 - The profile should have all the required permissions as listed [here](#aws-permissions)

## Install Sensor 

### Docker run command
```bash
sudo docker run --rm -it -v ~/.aws:/aws:ro \
-e LEVO_SATELLITE_URL="your-satelliteurl-here" \
-e LEVO_FILTER="" \
-e LEVO_TRACE_EXPORT_INTERVAL=<export interval> \
-e LEVO_RATE_LIMIT_NUMBER=<rate limit> \
-e LEVO_HOST_ALLOW_RE="regex to allow hosts" \
-e LEVO_PATH_ALLOW_RE="regext to allow paths" \
-e LEVO_HOST_EXCLUSIONS_RE="regex to exclude hosts" \
-e LEVO_PATH_EXCLUSIONS_RE="regex to exclude paths" \
-e LEVO_ORG_ID="Levo organization ID" \
levoai/fargate_sensor
```
The option `-v ~/.aws:/aws:ro` maps the directory containing your AWS credentials into the container so that the Agent can use them to perform actions on your behalf.

### CLI prompts

1.  Provide the AWS profile containing the credentials you wish to use. If you only have one profile in your .aws/credentials file, simply press Enter.
2.  Select the region in which your FARGATE application runs.
3.  Select the Task Definition on which you want to install the Levo Sensor as a sidecar
4.  From the list of services running the Task Definition, select the service you want to restart after the Levo Sensor has been added to the Task Definition.

Enter "Y" to proceed.

Once confirmed, the CLI will generate a new version of the task definition, incorporating the Levo Sensor as a sidecar while keeping other settings unchanged. After updating the task definition, Levo will also update the selected service to utilise the updated task definition. Finally, the CLI will monitor the service's status to ensure a successful deployment of the new version, which includes the Levo sensor sidecar.

## Install using JSON

### Copy this json to the Task Definition
Replace the values in Entrypoint, Environment and LogConfiguration as per your requirement.

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
                "your satellite url here",
                "--trace-export-interval",
                "export interval here",
                "--rate-limit",
                "rate limit number here",
                "--filter",
                "Add the port and host filter here",
                "--host-allow",
                "host allow regex here",
                "--path-allow",
                "path allow regex here",
                "--host-exclusions",
                "host exclusion regex here",
                "--path-exclusions",
                "path exclusion regex here",
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
| ecs:TagResource             | *, or restricted to your account, or restricted to the cluster you selected | Mark the service as having been updated by Akita.                                           |
