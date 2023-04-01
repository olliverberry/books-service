#!/bin/bash

# create the cluster
aws ecs create-cluster \
--cluster-name $CLUSTER_NAME \
--region $REGION

# register the task definition
aws ecs register-task-definition \
--cli-input-json $INPUT_JSON_PATH
--region $REGION

aws ecs create-service \
--cluster $CLUSTER_NAME \
--service-name books-service-service \
--task-definition books-service-family \
--desired-count 1 \
--scheduling-strategy REPLICA \
--region $REGION