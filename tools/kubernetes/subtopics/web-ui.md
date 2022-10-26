# Web UI

- Enable: `kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.1/aio/deploy/recommended.yaml`
  - `kubernetes-dashboard` namespace will be created.
- If password required: `kubectl config view`
- `kubectl proxy`
  - `http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy`
  - If using EKS then get the token by
    - `kubectl -n kube-system get secret`
    - search for `aws-cloud-provider-token-<some_id>` and do (not a recommended way)
      - `kubectl -n kube-system describe secret aws-cloud-provider-token-<some_id>`
  - Generic way is to create `admin-user` and get the secret token from that user (TODO: update process) 

## Minikube

- `minikube dashboard`
- `minikube dashboard --url`

## References:

- https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/