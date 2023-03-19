envsubst < ./values.yaml
cat values.yaml

helm repo add datadog https://helm.datadoghq.com
helm repo update
helm upgrade datadog-agent \
-f values.yaml \
--install \
datadog/datadog