provider "aws" {
  region = var.region
}

variable "satellite_url" {
  description = "Enter your Satellite's Address"
}

variable "levo_env" {
  description = "Enter your Application environment"
}

variable "org_id" {
  description = "Enter your Organization ID"
}

variable "region" {
  type        = string
  description = "Enter your AWS region"
  
  validation {
    condition     = contains(["us-east-2", "us-east-1", "us-west-1", "us-west-2", "af-south-1", "ap-east-1", "ap-south-2", "ap-southeast-3", "ap-southeast-4", "ap-south-1", "ap-northeast-3", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2", "ap-northeast-1", "ca-central-1", "ca-west-1", "eu-central-1", "eu-west-1", "eu-west-2", "eu-south-1", "eu-west-3", "eu-south-2", "eu-north-1", "eu-central-2", "il-central-1", "me-south-1", "me-central-1", "sa-east-1", "us-gov-east-1", "us-gov-west-1"], var.region)
    error_message = "Valid values for the options are are (us-east-2, us-east-1, us-west-1, us-west-2, af-south-1, ap-east-1, ap-south-2, ap-southeast-3, ap-southeast-4, ap-south-1, ap-northeast-3, ap-northeast-2, ap-southeast-1, ap-southeast-2, ap-northeast-1, ca-central-1, ca-west-1, eu-central-1, eu-west-1, eu-west-2, eu-south-1, eu-west-3, eu-south-2, eu-north-1, eu-central-2, il-central-1, me-south-1, me-central-1, sa-east-1, us-gov-east-1, us-gov-west-1)."
  } 
}

resource "aws_ecs_task_definition" "levoai-sensor" {
  family                   = "levoai-pcap-sensor"
  network_mode             = "host"
  requires_compatibilities = ["EC2"]
  cpu                   = "1024"
  memory                = "1536"

  container_definitions  = jsonencode([
        {
            "name": "levo-pcap-sensor",
            "image": "levoai/pcap-sensor:0.1.2",
            "cpu": 512,
            "memory": 512,
            "portMappings": [],
            "essential": true,
            "entryPoint": [
                "./bin/init",
                "apidump",
                "--satellite-url",
                var.satellite_url,
                var.levo_env,
                "pcap-sensor",
                "--levoai-org-id",
                var.org_id,
                "--rate-limit",
                "1000"
            ],
            "environment": [
                {
                    "name": "LEVO_AWS_REGION",
                    "value": var.region
                }
            ],
            "mountPoints": [],
            "volumesFrom": [],
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/pcap-sensor",
                    "awslogs-create-group": "true",
                    "awslogs-region": var.region,
                    "awslogs-stream-prefix": "ecs-pcap"
                }
            },
            "systemControls": []
        }
    ])
}