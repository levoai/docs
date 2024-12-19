variable "aws_region" {
    description = "AWS region where resources will be deployed"
    type        = string
}

variable "aws_log_group" {
    description = "AWS log group name"
    type = string
}

variable "task_definition_name" {
    description = "Name of the ECS Task Definition to modify"
    type = string
}

variable "image_name" {
    description = "Levo.ai pcap sensor image name"
    type = string
    default = "levoai/pcap-sensor:0.1.9"
}

variable "satellite_url" {
    description = "Enter your Satellite's Address"
    type = string
}

variable "levo_env" {
    description = "Enter your Application environment"
    type = string
}

variable "org_id" {
    description = "Specify your Organization ID (from the Levo Dashboard)"
    type = string
}

variable "rate_limit" {
    description = "Specify the rate-limit"
    type = string
    default = "50.0"
}

variable "trace_export_interval" {
    description = "Specify the export interval for traces"
    type = string
    default = "1.0"
}

variable "stream_timeout_seconds" {
    description = "Specify the stream timeout seconds for rearranging out of order packets"
    type = string
    default = "1.0"
}

variable "cpu_percentage_limit" {
    description = "Percentage of CPU allocated to the sensor container out of total task cpu"
    type = string
    default = "5"
}

variable "memory_percentage_limit" {
    description = "Percentage of memory allocated to the sensor container out of total task memory"
    type = string
    default = "5"
}

provider "aws" {
    region = var.aws_region
}

resource "aws_ecs_task_definition" "modified_task_definition" {
    family                   = local.task_def_json.taskDefinition.family
    network_mode             = local.task_def_json.taskDefinition.networkMode
    requires_compatibilities = local.task_def_json.taskDefinition.requiresCompatibilities
    execution_role_arn       = local.task_def_json.taskDefinition.executionRoleArn
    cpu                      = local.task_def_json.taskDefinition.cpu
    memory                   = local.task_def_json.taskDefinition.memory
    container_definitions    = jsonencode(local.updated_container_definitions)

    # Add volumes if they exist in the old task definition
    dynamic "volume" {
        for_each = local.task_def_json.taskDefinition.volumes
        content {
            name      = volume.value.name
            host_path = volume.value.hostPath
        }
    }
}

resource "null_resource" "fetch_task_definition" {
    provisioner "local-exec" {
        command = <<EOT
        aws ecs describe-task-definition --task-definition ${var.task_definition_name} >  "${path.module}/task_definition.json"
        EOT
    }
}

data "local_file" "task_definition" {
    filename = "${path.module}/task_definition.json"
    depends_on = ["null_resource.fetch_task_definition"]
}

output "container_definitions" {
    value = local.updated_container_definitions
}


locals {
    # Decode the entire task definition JSON
    task_def_json = jsondecode(data.local_file.task_definition.content)

    # Extract the CPU and memory at the task level
    task_cpu    = tonumber(local.task_def_json.taskDefinition.cpu)
    task_memory = tonumber(local.task_def_json.taskDefinition.memory)

    existing_container_definitions = local.task_def_json.taskDefinition.containerDefinitions

    # Calculate 5% of the task CPU and memory
    new_container_cpu_limit         = floor(local.task_cpu * var.cpu_percentage_limit / 100)
    new_container_memory_limit      = floor(local.task_memory * var.memory_percentage_limit / 100)

    # Add the new container definition
    new_container_definitions = [{
        "name": "levo-pcap-sensor",
        "image": var.image_name,
        "cpu": local.new_container_cpu_limit,
        "memory": local.new_container_memory_limit,
        "portMappings": [],
        "essential": false,
        "entryPoint": [
            "./bin/init",
            "apidump",
            "--satellite-url",
            var.satellite_url,
            "--levo-env",
            var.levo_env,
            "--levoai-org-id",
            var.org_id,
            "--rate-limit",
            var.rate_limit,
            "--trace-export-interval",
            var.trace_export_interval,
            "--stream-timeout-seconds",
            var.stream_timeout_seconds
        ],
        "environment": [
            {
                "name": "LEVO_AWS_REGION",
                "value": var.aws_region
            }
        ],
        "mountPoints": [],
        "volumesFrom": [],
        "logConfiguration": {
            "logDriver": "awslogs",
            "options": {
                "awslogs-group": var.aws_log_group,
                "awslogs-create-group": "true",
                "awslogs-region": var.aws_region,
                "awslogs-stream-prefix": "ecs-pcap"
            }
        }
    }]

    updated_container_definitions = concat([
        for existing_container in local.existing_container_definitions :
        existing_container
        if length([for new_container in local.new_container_definitions : new_container if new_container.name == existing_container.name]) == 0
    ], local.new_container_definitions)
}
