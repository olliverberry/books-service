#!/bin/bash
helm repo add datadog https://helm.datadoghq.com
helm repo update
helm upgrade datadog-agent \
-f $VALUES_FILE_PATH \
--set datadog.apiKey=$DATADOG_API_KEY \
--set datadog.appKey=$DATADOG_APP_KEY \
--set datadog.clusterName=$CLUSTER_NAME \
--install \
datadog/datadog