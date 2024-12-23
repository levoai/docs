provider "aws" {
  region     = "us-west-2"
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

variable "levo_org_id" {
  description = "Enter your Levo ORG ID"
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
                    "name": "REFRESH_TOKEN",
                    "value": var.refresh_token
                },
                {
                    "name": "LEVO_ORG_ID",
                    "value": var.levo_org_id
                }
                {
                    "name": "LEVO_BASE_URL",
                    "value": "https://api.levo.ai"
                }
            ],
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-create-group": "true",
                    "awslogs-group": "/ecs/api-docs-viewer",
                    "awslogs-region": "us-west-2",
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