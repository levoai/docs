provider "aws" {
  region = "us-west-2"
}

variable "collector_url" {
  description = "Enter your Collector Endpoint"
}

resource "aws_ecs_task_definition" "levoai-sensor" {
  family                   = "levoai-ebpf-sensor"
  network_mode             = "awsvpc"
  requires_compatibilities = ["EC2"]
  cpu                   = "1024"
  memory                = "1536"

  execution_role_arn    = aws_iam_role.terraform_ecs_execution_role.arn

  container_definitions  = jsonencode([
    {
      "name": "ebpf_sensor",
      "image": "levoai/ebpf_sensor",
      "cpu": 1024,
      "memory": 1536,
      "memoryReservation": 1024,
      "portMappings": [],
      "essential": true,
      "entryPoint": [
        "/sbin/init_lite"
      ],
      "command": [
        "--host-proc-path",
        "/host/proc",
        "--collector-endpoint",
        var.collector_url
      ],
      "environment": [
        {
          "name": "OUTSIDE_HOSTNAME",
          "value": "$(hostname)"
        }
      ],
      "mountPoints": [
        {
          "sourceVolume": "host-proc",
          "containerPath": "/host/proc",
          "readOnly": true
        },
        {
          "sourceVolume": "kernel-debug",
          "containerPath": "/sys/kernel/debug",
          "readOnly": false
        }
      ],
      "volumesFrom": [],
      "privileged": true,
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-create-group": "true",
          "awslogs-group": "/ecs/ebpf_sensor",
          "awslogs-region": "us-west-2",
          "awslogs-stream-prefix": "ecs"
        },
        "secretOptions": []
      }
    }
  ])


  volume {
    name = "host-proc"
    host_path = "/proc"
  }
  volume {
    name = "kernel-debug"
    host_path = "/sys/kernel/debug"
  }
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