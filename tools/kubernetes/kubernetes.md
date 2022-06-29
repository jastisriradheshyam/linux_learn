# Kubernetes

- Get pods: `kubectl get pods -A`
- Get services: `kubectl get services -A`
- Delete the pod: `kubectl delete pods POD_NAME --grace-period=0 --force`
- Delete service: `kubectl delete services SERVICE_NAME --namespace NAMESPACE`
- Apply YAML file: `kubectl apply -f PATH_TO_CONFIG.yaml`


## Local development
- Development with local container image:
    - set `imagePullPolicy` as `Never`
    - in `deployment.yaml` : `imagePullPolicy: Never`


## References:
- https://stackoverflow.com/questions/42564058/how-to-use-local-docker-images-with-minikube