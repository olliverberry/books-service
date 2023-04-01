#!/bin/bash

# disable prompts
gcloud config set disable_prompts true
gcloud config set core/verbosity error

EXISTING_SA="$SA_NAME@$PROJECT_ID.iam.gserviceaccount.com"

# delete service account
SERVICE_ACCOUNTS=$(gcloud iam service-accounts list \
    --project $PROJECT_ID \
    --format json \
    --filter "email=$EXISTING_SA" \
    | jq '.[].email?')

echo "found service accounts $SERVICE_ACCOUNTS"
for SERVICE_ACCOUNT in $SERVICE_ACCOUNTS
do
    if [ $SERVICE_ACCOUNT = "\"$EXISTING_SA\"" ]
    then
        echo "deleting service account $SERVICE_ACCOUNT"
        gcloud iam service-accounts delete $EXISTING_SA --project $PROJECT_ID
    fi
done

# delete cluster
CLUSTERS=$(gcloud container clusters list \
    --region $REGION \
    --format json \
    --filter "name=$CLUSTER_NAME" \
    | jq '.[].name?')

echo "found clusters $CLUSTERS"
for CLUSTER in $CLUSTERS
do
    if [ $CLUSTER = "\"$CLUSTER_NAME\"" ]
    then
        echo "deleting cluster $CLUSTER"
        gcloud container clusters delete $CLUSTER_NAME --region $REGION
    fi
done