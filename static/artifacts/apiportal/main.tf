provider "aws" {
  region = var.region
}

resource "aws_vpc" "levo_docs_vpc" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "levo_docs_subnet" {
  vpc_id     = aws_vpc.levo_docs_vpc.id
  cidr_block = "10.0.1.0/24"
}

resource "aws_security_group" "levo_docs_sg" {
  vpc_id = aws_vpc.levo_docs_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_ecs_cluster" "levo_docs_cluster" {
  name = "Levoai-api-portal"
}

variable "refresh_token" {
  description = "Enter your Refresh Token"
}

variable "env_name" {
  description = "Enter your Env Name"
}

variable "app_name" {
  description = "Enter your App Name"
}

variable "base_url" {
  description = "Choose Levo Saas according to your satellite: \n 1. Levo US Saas\n 2. Levo India Saas\nEnter 1 or 2 accordingly as input"
}

locals {
  saas = var.base_url == "1" ? "https://api.levo.ai" : var.base_url == "2" ? "https://api.india-1.levo.ai" : "invalid-choice"
}

variable "region" {
  description = "Enter your AWS region"
}

resource "aws_ecs_task_definition" "levoai-docs" {
  family                   = "levoai-api-portal"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                   = "2048"
  memory                = "4096"

  execution_role_arn    = aws_iam_role.terraform_ecs_execution_role.arn

  container_definitions  = jsonencode([
        {
            "name": "docs-viewer",
            "image": "levoai/api-docs-viewer:latest",
            "cpu": 0,
            "portMappings": [
                {
                    "name": "docs-viewer-80-tcp",
                    "containerPort": 80,
                    "hostPort": 80,
                    "protocol": "tcp",
                    "appProtocol": "http"
                }
            ],
            "essential": true,
            "environment": [
                {
                    "name": "APP_NAME",
                    "value": var.app_name
                },
                {
                    "name": "ENV_NAME",
                    "value": var.env_name
                },
                {
                    "name": "REFRESH_TOKEN",
                    "value": var.refresh_token
                },
                {
                    "name": "LEVO_BASE_URL",
                    "value": local.saas
                }
            ],
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-create-group": "true",
                    "awslogs-group": "/ecs/api-docs-viewer",
                    "awslogs-region": var.region,
                    "awslogs-stream-prefix": "ecs"
                }
            }
        }
  ])

}

resource "aws_iam_role" "terraform_ecs_execution_role" {
  name_prefix = "ecs_execution_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action = "sts:AssumeRole",
      Effect = "Allow",
      Principal = {
        Service = "ecs-tasks.amazonaws.com",
      },
    }],
  })
}

resource "aws_ecs_service" "terraform_apidocs_service" {
  name            = "terraform_apidocs_services"
  cluster         = aws_ecs_cluster.levo_docs_cluster.id
  task_definition = aws_ecs_task_definition.levoai-docs.family
  network_configuration {
    subnets = [aws_subnet.levo_docs_subnet.id]
    security_groups = [aws_security_group.levo_docs_sg.id]
    assign_public_ip = true
  }
  desired_count   = 1
  launch_type     = "FARGATE"
}

output "aws_ecs_cluster_arn" {
  description = "This is the ARN of the Levo Api Portal cluster"
  value       = aws_ecs_cluster.levo_docs_cluster.arn
}