#ecs cluster creation
module "ecs_cluster" {
  source  = "infrablocks/ecs-cluster/aws"
  version = "3.4.0"

  region     = "us-west-1"
  vpc_id     = aws_default_vpc.default.id
  subnet_ids = [aws_default_subnet.default_us-west-1a.id, aws_default_subnet.default_us-west-1c.id]

  component             = "Federation"
  deployment_identifier = "Staging"

  cluster_name                         = "cluster"
  //ssh-keygen -t rsa -b 4096 -C integration-test@example.com -N '' -f config/secrets/keys/bastion/ssh
  cluster_instance_ssh_public_key_path = "./key/fed.pub"
  cluster_instance_type                = "t2.micro"

  cluster_minimum_size     = 0
  cluster_maximum_size     = 2
  cluster_desired_capacity = 2
  security_groups          = [aws_security_group.sg.id]
}




# #TASK DEFINITION FOR server FOR DEFINING THE SPECS OF AN EC2 INSTANCE 
resource "aws_ecs_task_definition" "server-td" {
  family = "${var.my-project-name}-server-td"

  container_definitions = <<DEFINITION
[
  {
    "cpu": 0,
   


    "portMappings": [
        {
          "hostPort": 0,
          "protocol": "tcp",
          "containerPort": 5000
        }
      ],




    "essential": true,
    "image": "${var.ecr}/federationcore-server:staging",
    "memory": null,
    "memoryReservation": 128,
    "name": "server"
  }
]
DEFINITION
}



#TASK DEFINITION FOR CLIENT FOR DEFINING THE SPECS OF AN EC2 INSTANCE
resource "aws_ecs_task_definition" "client-td" {
  family = "${var.my-project-name}-client-td"

  container_definitions = <<DEFINITION
[
  {
    "cpu": 0,
    "environment": [{
      "name": "REACT_APP_SECRETME",
      "value": "EXAMPLE"
    }
    ],


    "portMappings": [
        {
          "hostPort": 0,
          "protocol": "tcp",
          "containerPort": 80
        }
      ],




    "essential": true,
    "image": "${var.ecr}/federationcore-client:staging",
    "memory": null,
    "memoryReservation": 128,
    "name": "client"
  }
]
DEFINITION
}



# FOR USERS SERVICE
resource "aws_ecs_service" "server-service" {
  name            = "${var.my-project-name}-server-service"
  cluster         = "Federation-Staging-cluster"
  task_definition = aws_ecs_task_definition.server-td.arn
  desired_count   = 1



  load_balancer {
    target_group_arn = aws_lb_target_group.server.arn
    container_name   = "server"
    container_port   = 5000
  }


}


# # FOR CLIENT SERVICE
 resource "aws_ecs_service" "client-service" {
   name            = "${var.my-project-name}-client-service"
   cluster         = "Federation-Staging-cluster"
   task_definition = aws_ecs_task_definition.client-td.arn
   desired_count   = 1


   load_balancer {
     target_group_arn = aws_lb_target_group.client.arn
     container_name   = "client"
     container_port   = 80
   }


 }