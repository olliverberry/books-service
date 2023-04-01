#!/bin/bash

# disable prompts
gcloud config set disable_prompts true
gcloud config set core/verbosity error

EXISTING_SA="\"$SA_NAME@$PROJECT_ID.iam.gserviceaccount.com\""

# check to see if service account exists; if not create it
output=$(gcloud iam service-accounts list \
    --project $PROJECT_ID \
    --filter "email=$EXISTING_SA" \
    --format json | jq)
if [ "$output" = "[]" ]
then
    echo "creating service account $SA_NAME"
    gcloud iam service-accounts create $SA_NAME \
        --project $PROJECT_ID

    echo "attaching iam role to service account"
    # give service account iam role
    gcloud projects add-iam-policy-binding $PROJECT_ID \
        --member "serviceAccount:$EXISTING_SA" \
        --role roles/container.nodeServiceAccount
fi

# check to see if cluster exists; if not create it
output=$(gcloud container clusters list \
    --region $REGION \
    --format json \
    --filter "name=$CLUSTER_NAME" | jq)
if [ "$output" = "[]" ]
then
    echo "creating cluster $CLUSTER_NAME"
    gcloud container clusters create-auto $CLUSTER_NAME \
        --project $PROJECT_ID \
        --service-account "$EXISTING_SA"
fi
    