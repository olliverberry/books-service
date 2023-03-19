envsubst < ./deployment.yaml
cat deployment.yaml

kubectl apply -f ./service.yaml
kubectl apply -f ./deployment.yaml