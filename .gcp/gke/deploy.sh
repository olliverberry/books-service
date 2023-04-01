#!/bin/bash
envsubst < $SERVICE_FILE_PATH | kubectl apply -f -
envsubst < $DEPLOYMENT_FILE_PATH | kubectl apply -f -