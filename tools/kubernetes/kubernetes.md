# Kubernetes

- Get pods: `kubectl get pods -A`
- Get services: `kubectl get services -A`
- Force delete the pod: `kubectl delete pods POD_NAME --grace-period=0 --wait=false --force=true`
- Delete service: `kubectl delete services SERVICE_NAME --namespace NAMESPACE`
- Apply YAML file: `kubectl apply -f PATH_TO_CONFIG.yaml`
- Delete using YAML file: `kubectl delete -f PATH_TO_CONFIG.yaml`
- Restart the pods: `kubectl rollout restart deployment -n NAMESPACE DEPLOYMENT_NAME`

## Local development
- Development with local container image:
    - set `imagePullPolicy` as `Never`
    - in `deployment.yaml` : `imagePullPolicy: Never`


## Non frequent commands

- Copy: `kubectl cp LOCAL_PATH NAMESPACE/POD_NAME:PATH_IN_POD`
    - use `-c` argument for specific container

## Exec into certain container

- `kubectl exec -it POD_NAME -C CONTAINER_NAME -- SHELL`


## Drain node

- `kubectl drain NODE_ID`
- will remove all the pod, and other resources from the node, add `--force` to force the removal

## References:
- https://stackoverflow.com/questions/42564058/how-to-use-local-docker-images-with-minikube
- https://medium.com/@nnilesh7756/copy-directories-and-files-to-and-from-kubernetes-container-pod-19612fa74660