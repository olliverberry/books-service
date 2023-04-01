#!/bin/bash

# disable prompts
gcloud config set disable_prompts true

# delete service account
gcloud iam service-accounts delete $SA_NAME \
    --project $PROJECT_ID

# delete the cluster
gcloud container clusters delete $CLUSTER_NAME \
    --region $REGION