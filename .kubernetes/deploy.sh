kubectl apply -f ./service.yaml
envsubst < ./deployment.yaml | kubectl apply -f -