provider "aws" {
  region = var.region
}

variable "refresh_token" {
  description = "Enter your Refresh Token"
}

variable "org_id" {
  description = "Enter your Org ID"
}

variable "base_url" {
  type        = string
  description = "Choose Levo Saas according to your satellite: \n 1. Levo US Saas\n 2. Levo India Saas\nEnter 1 or 2 accordingly as input"

  validation {
    condition     = contains(["1", "2"], var.base_url)
    error_message = "Valid values for the options are are (1, 2)."
  } 
}

locals {
  saas = var.base_url == "1" ? "https://api.levo.ai" : var.base_url == "2" ? "https://api.india-1.levo.ai" : "invalid-choice"
}

variable "compute_type" {
  type        = string
  description = "Choose your compute type: \n 1. EC2\n 2. FARGATE\nEnter 1 or 2 accordingly as input"
  
  validation {
    condition     = contains(["1", "2"], var.compute_type)
    error_message = "Valid values for the options are are (1, 2)."
  } 
}

locals {
  compute = var.compute_type == "1" ? "EC2" : var.compute_type == "2" ? "FARGATE" : "invalid-choice"
}

locals {
  networking_mode = var.compute_type == "1" ? "host" : var.compute_type == "2" ? "awsvpc" : "invalid-choice"
}

variable "region" {
  type        = string
  description = "Enter your AWS region"
  
  validation {
    condition     = contains(["us-east-2", "us-east-1", "us-west-1", "us-west-2", "af-south-1", "ap-east-1", "ap-south-2", "ap-southeast-3", "ap-southeast-4", "ap-south-1", "ap-northeast-3", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2", "ap-northeast-1", "ca-central-1", "ca-west-1", "eu-central-1", "eu-west-1", "eu-west-2", "eu-south-1", "eu-west-3", "eu-south-2", "eu-north-1", "eu-central-2", "il-central-1", "me-south-1", "me-central-1", "sa-east-1", "us-gov-east-1", "us-gov-west-1"], var.region)
    error_message = "Valid values for the options are are (us-east-2, us-east-1, us-west-1, us-west-2, af-south-1, ap-east-1, ap-south-2, ap-southeast-3, ap-southeast-4, ap-south-1, ap-northeast-3, ap-northeast-2, ap-southeast-1, ap-southeast-2, ap-northeast-1, ca-central-1, ca-west-1, eu-central-1, eu-west-1, eu-west-2, eu-south-1, eu-west-3, eu-south-2, eu-north-1, eu-central-2, il-central-1, me-south-1, me-central-1, sa-east-1, us-gov-east-1, us-gov-west-1)."
  } 
}

resource "aws_ecs_task_definition" "levoai-satellite" {
  family                   = "levoai-satellite"
  network_mode             = local.networking_mode
  requires_compatibilities = [local.compute]
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
        "uvicorn.workers.UvicornWorker",
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
          "name": "LEVOAI_BASE_URL",
          "value": local.saas
        },
        {
          "name": "LEVOAI_MODE",
          "value": "docker-compose"
        },
        {
            "name": "LEVOAI_CONF_OVERRIDES",
            "value": "{\"onprem-api\": {\"url\": \"$${LEVOAI_BASE_URL}\", \"refresh-token\": \"$${LEVOAI_AUTH_KEY}\", \"org-id\": \"$${LEVOAI_ORG_ID:-}\", \"org-prefix\": \"$${LEVOAI_ORG_PREFIX:-}\"},\"traces_queue\": {\"type\": \"sqs\"}}"
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
        },
        {
          "name": "AWS_DEFAULT_REGION",
          "value": var.region
        }
      ],
      "mountPoints": [],
      "volumesFrom": [],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-create-group": "true",
          "awslogs-group": "/ecs/satellite",
          "awslogs-region": var.region,
          "awslogs-stream-prefix": "ecs"
        }
      }
    },
    {
      "name": "levoai-haproxy",
      "image": "levoai/haproxy",
      "cpu": 0,
      "portMappings": [
        {
          "name": "levoai-haproxy-tcp",
          "containerPort": 8080,
          "hostPort": 8080,
          "protocol": "tcp",
          "appProtocol": "http"
        }
      ],
      "essential": true,
      "command": [],
      "environment": [],
      "environmentFiles": [],
      "mountPoints": [],
      "volumesFrom": [],
      "logConfiguration": {
          "logDriver": "awslogs",
          "options": {
              "awslogs-group": "/ecs/satellite",
              "awslogs-create-group": "true",
              "awslogs-region": var.region,
              "awslogs-stream-prefix": "ecs"
          },
          "secretOptions": []
      },
      "systemControls": []
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
          "name": "LEVOAI_BASE_URL",
          "value": local.saas
        },
        {
          "name": "LEVOAI_MODE",
          "value": "docker-compose"
        },
        {
        "name": "LEVOAI_CONF_OVERRIDES",
        "value": "{\"onprem-api\":{\"url\": \"$${LEVOAI_BASE_URL}\",\"refresh-token\":\"$${LEVOAI_AUTH_KEY}\",\"org-id\": \"$${LEVOAI_ORG_ID}\",\"org-prefix\": \"$${LEVOAI_ORG_PREFIX}\"},\"url_clusterer_id_len\": 1,\"min_urls_required_per_pattern\": 10,\"dynamic_url_threshold_factor\": 0.5,\"cookie_auth_keys\": \"$${LEVOAI_COOKIE_AUTH_KEYS:-}\",\"disable_ml_detector\": true,\"service_naming\":{\"strategies\":\"KUBERNETES_METADATA,HOST_HEADER,DEFAULT\"},\"user_resolvers\": [],\"sample_collection\":{\"enabled\": true,\"max_samples_per_end_point\": 2,\"users\": []},\"tagger_batch_interval_minute\": 5,\"api_rule_evaluation\":{\"enabled\": true},\"enable_ssl_cert_checks\": true,\"sensitive_data_config\": [],\"traces_queue\":{\"type\": \"sqs\"}}"
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
        },
        {
          "name": "AWS_DEFAULT_REGION",
          "value": var.region
        }
      ],
      "mountPoints": [],
      "volumesFrom": [],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-create-group": "true",
          "awslogs-group": "/ecs/satellite",
          "awslogs-region": var.region,
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
          "awslogs-region": var.region,
          "awslogs-stream-prefix": "ecs"
        }
      }
    },
    {
      "name": "levoai-ion",
      "image": "levoai/satellite",
      "cpu": 0,
      "portMappings": [],
      "essential": true,
      "entryPoint": [
        "python",
        "-OO"
      ],
      "command": [
        "/opt/levoai/e7s/src/python/levoai_ion/ion_server.py"
      ],
      "environment": [
        {
          "name": "LEVOAI_ORG_ID",
          "value": var.org_id
        },
        {
          "name": "LEVOAI_BASE_URL",
          "value": local.saas
        },
        {
          "name": "LEVOAI_MODE",
          "value": "docker-compose"
        },
        {
        "name": "LEVOAI_CONF_OVERRIDES",
        "value": "{\"onprem-api\":{\"url\": \"$${LEVOAI_BASE_URL}\",\"refresh-token\":\"$${LEVOAI_AUTH_KEY}\",\"org-id\": \"$${LEVOAI_ORG_ID}\",\"org-prefix\": \"$${LEVOAI_ORG_PREFIX}\"},\"traces_queue\": {\"type\": \"sqs\"}}"
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
          "name": "AWS_DEFAULT_REGION",
          "value": var.region
        }
      ],
      "mountPoints": [],
      "volumesFrom": [],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-create-group": "true",
          "awslogs-group": "/ecs/satellite",
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