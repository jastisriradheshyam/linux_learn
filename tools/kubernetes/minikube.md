# Minikube

- Start: `minikube start --driver=kvm2 --memory 8192 --cpus 6`
- Dashboard: `minikube dashboard`
- Delete: `minikube delete`


## Local development
- Using Docker images for local development in minikube
    - `eval $(minikube docker-env)`

## References:
- https://stackoverflow.com/questions/42564058/how-to-use-local-docker-images-with-minikube