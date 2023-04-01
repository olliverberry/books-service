#!/bin/bash

# disable prompts
gcloud config set disable_prompts true

# create service account
gcloud iam service-accounts create $SA_NAME \
    --project $PROJECT_ID

# give service account iam role
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member "serviceAccount:$SA_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
    --role roles/container.nodeServiceAccount

# create the clusters
gcloud container clusters create-auto $CLUSTER_NAME \
    --service-account "$SA_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
    --region $REGION
    