variable "region_choices" {
  default     = ["us-west-1", "us-west-2", "us-east-1", "us-east-2", "ap-south-1", "ap-southeast-1", "eu-west-2"]
  description = "List of supported AWS regions"
}

variable "ami_ids" {
  type        = map(list(any))
  default     = {
    1 = ["us-west-2", "ami-0080f67c406a8e836"]
    2 = ["us-west-2", "ami-09cc59369bf39272b"]
    3 = ["us-east-1", "ami-03cf724298d12783b"]
    4 = ["us-east-2", "ami-04df19b9035976a79"]
    5 = ["ap-south-1", "ami-03effa71398878b37"]
    6 = ["ap-southeast-1", "ami-006844540d965f519"]
    7 = ["eu-west-2", "ami-0e0418c44c42c3b56"]
  }
  description = "Map of AMI IDs for each region"
}

variable "auth_key" {
  description = "Enter your Satellite Auth Key"
}

variable "key_pair" {
  description = "Enter your name of your Key-Pair"
}

variable "selected_region" {
  description = "Choose from on of the following regions \n Select the corresponding numbers \n 1. us-west-1 \n 2. us-west-2 \n 3. us-east-1 \n 4. us-east-2 \n 5. ap-south-1 \n 6. ap-southeast-1 \n 7. eu-west-2"
}

provider "aws" {
  profile = "default"
  region = var.ami_ids[var.selected_region][0]
}

resource "aws_vpc" "some_custom_vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "Levo Satellite VPC"
  }
}

resource "aws_subnet" "levo_public_subnet" {
  vpc_id            = aws_vpc.some_custom_vpc.id
  cidr_block        = "10.0.1.0/24"
#   availability_zone = "us-east-1a"

  tags = {
    Name = "Levo Satellite Public Subnet"
  }
}

resource "aws_subnet" "levo_private_subnet" {
  vpc_id            = aws_vpc.some_custom_vpc.id
  cidr_block        = "10.0.2.0/24"
#   availability_zone = "us-east-1a"

  tags = {
    Name = "Levo Satellite Private Subnet"
  }
}

resource "aws_internet_gateway" "levo_satellite_ig" {
  vpc_id = aws_vpc.some_custom_vpc.id

  tags = {
    Name = "Levo Satellite Internet Gateway"
  }
}

resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.some_custom_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.levo_satellite_ig.id
  }

  route {
    ipv6_cidr_block = "::/0"
    gateway_id      = aws_internet_gateway.levo_satellite_ig.id
  }

  tags = {
    Name = "Public Route Table"
  }
}

resource "aws_route_table_association" "public_1_rt_a" {
  subnet_id      = aws_subnet.levo_public_subnet.id
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_security_group" "web_sg" {
  name   = "HTTP and SSH"
  vpc_id = aws_vpc.some_custom_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 4317
    to_port     = 4317
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 9999
    to_port     = 9999
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = -1
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "levo_satellite_instance" {
  ami           = var.ami_ids[var.selected_region][1]
  instance_type = "c6a.xlarge"
  key_name      = var.key_pair

  subnet_id                   = aws_subnet.levo_public_subnet.id
  vpc_security_group_ids      = [aws_security_group.web_sg.id]
  associate_public_ip_address = true

  user_data = <<-EOF
  #!/bin/bash -ex

  amazon-linux-extras install nginx1 -y
  
  systemctl enable nginx
  systemctl start nginx

  echo "LEVOAI_AUTH_KEY=var.auth_key" > /opt/levoai/.levoenv
  sudo /opt/levoai/levo_satellite.sh start >> satellite-start.log 2>&1
  # Uncomment the following line to enable the traffic mirroring listener
  # sudo /opt/levoai/levo_traffic_listener.sh start >> traffic-listener-start.log 2>&1
  EOF

  tags = {
    Name = "Levo Satellite"
  }
}

data "aws_availability_zones" "available" {}
