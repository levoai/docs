provider "aws" {
  region = "us-west-2"
}

variable "refresh_token" {
  description = "Enter your Refresh Token"
}

variable "org_id" {
  description = "Enter your Org ID"
}

resource "aws_ecs_task_definition" "levoai-satellite" {
  family                   = "levoai-satellite"
  network_mode             = "awsvpc"
  requires_compatibilities = ["EC2","FARGATE"]
  cpu                   = "4096"
  memory                = "8192"

  execution_role_arn    = aws_iam_role.terraform_ecs_execution_role.arn

  container_definitions  = jsonencode([
    {
      "name": "levoai-satellite",
      "image": "levoai/satellite",
      "cpu": 0,
      "portMappings": [
        {
          "name": "levoai-satellite-9999-tcp",
          "containerPort": 9999,
          "hostPort": 9999,
          "protocol": "tcp",
          "appProtocol": "http"
        }
      ],
      "essential": true,
      "command": [
        "-w",
        "1",
        "-b",
        "0.0.0.0:9999",
        "--worker-class",
        "gevent",
        "--worker-connections",
        "30",
        "levoai_e7s.satellite.satellite:create_server()"
      ],
      "environment": [
        {
          "name": "LEVOAI_DEBUG_SERVER_HOST",
          "value": "host.docker.internal"
        },
        {
          "name": "LEVOAI_ORG_ID",
          "value": var.org_id
        },
        {
          "name": "LEVOAI_MODE",
          "value": "docker-compose"
        },
        {
            "name": "LEVOAI_CONF_OVERRIDES",
            "value": "{\"onprem-api\": {\"url\": \"https://api.levo.ai\", \"refresh-token\": \"$${LEVOAI_AUTH_KEY}\", \"org-id\": \"$${LEVOAI_ORG_ID:-}\", \"org-prefix\": \"$${LEVOAI_ORG_PREFIX:-}\"},\"traces_queue\": {\"type\": \"sqs\"}}"
        },
        {
          "name": "LEVOAI_DEBUG_ENABLED",
          "value": "false"
        },
        {
          "name": "LEVOAI_AUTH_KEY",
          "value": var.refresh_token
        },
        {
          "name": "LEVOAI_LOG_LEVEL",
          "value": "INFO"
        },
        {
          "name": "LEVOAI_DEBUG_PORT",
          "value": "12345"
        }
      ],
      "mountPoints": [],
      "volumesFrom": [],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-create-group": "true",
          "awslogs-group": "/ecs/satellite",
          "awslogs-region": "us-west-2",
          "awslogs-stream-prefix": "ecs"
        }
      }
    },
    {
      "name": "levoai-tagger",
      "image": "levoai/satellite",
      "cpu": 0,
      "portMappings": [],
      "essential": true,
      "entryPoint": [
        "python",
        "-OO"
      ],
      "command": [
        "/opt/levoai/e7s/src/python/levoai_e7s/tag_server.py"
      ],
      "environment": [
        {
          "name": "LEVOAI_DEBUG_SERVER_HOST",
          "value": "host.docker.internal"
        },
        {
          "name": "LEVOAI_ORG_ID",
          "value": var.org_id
        },
        {
          "name": "LEVOAI_MODE",
          "value": "docker-compose"
        },
        {
        "name": "LEVOAI_CONF_OVERRIDES",
        "value": "{\"onprem-api\":{\"url\": \"https://api.levo.ai\",\"refresh-token\":\"$${LEVOAI_AUTH_KEY}\",\"org-id\": \"$${LEVOAI_ORG_ID}\",\"org-prefix\": \"$${LEVOAI_ORG_PREFIX}\"},\"url_clusterer_id_len\": 1,\"min_urls_required_per_pattern\": 10,\"dynamic_url_threshold_factor\": 0.5,\"cookie_auth_keys\": \"$${LEVOAI_COOKIE_AUTH_KEYS:-}\",\"disable_ml_detector\": true,\"service_naming\":{\"strategies\":\"KUBERNETES_METADATA,HOST_HEADER,DEFAULT\"},\"user_resolvers\": [],\"sample_collection\":{\"enabled\": true,\"max_samples_per_end_point\": 2,\"users\": []},\"tagger_batch_interval_minute\": 5,\"api_rule_evaluation\":{\"enabled\": true},\"ion\":{\"url\": \"http://levoai-ion:8000\"},\"enable_ssl_cert_checks\": true,\"sensitive_data_config\": [],\"traces_queue\":{\"type\":\"sqs\"}}"
        },
        {
          "name": "PI_DETECTOR_DATA_DIR",
          "value": "/opt/levoai/datasets/"
        },
        {
          "name": "LEVOAI_DEBUG_ENABLED",
          "value": "false"
        },
        {
          "name": "LEVOAI_AUTH_KEY",
          "value": var.refresh_token
        },
        {
          "name": "LEVOAI_LOG_LEVEL",
          "value": "INFO"
        },
        {
          "name": "LEVOAI_DEBUG_PORT",
          "value": "1234"
        }
      ],
      "mountPoints": [],
      "volumesFrom": [],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-create-group": "true",
          "awslogs-group": "/ecs/satellite",
          "awslogs-region": "us-west-2",
          "awslogs-stream-prefix": "ecs"
        }
      }
    },
    {
      "name": "levoai-collector",
      "image": "levoai/collector",
      "cpu": 0,
      "portMappings": [
        {
          "name": "levoai-collector-4317-tcp",
          "containerPort": 4317,
          "hostPort": 4317,
          "protocol": "tcp",
          "appProtocol": "http"
        }
      ],
      "essential": true,
      "environment": [],
      "mountPoints": [],
      "volumesFrom": [],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-create-group": "true",
          "awslogs-group": "/ecs/satellite",
          "awslogs-region": "us-west-2",
          "awslogs-stream-prefix": "ecs"
        }
      }
    },
    {
      "name": "levoai-ion",
      "image": "levoai/ion",
      "cpu": 0,
      "portMappings": [
        {
          "name": "levoai-ion-8000-tcp",
          "containerPort": 8000,
          "hostPort": 8000,
          "protocol": "tcp",
          "appProtocol": "http"
        }
      ],
      "essential": false,
      "environment": [],
      "mountPoints": [],
      "volumesFrom": [],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-create-group": "true",
          "awslogs-group": "/ecs/satellite",
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