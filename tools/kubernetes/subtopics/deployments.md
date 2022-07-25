# Deployments

- create, update, rolling updates, roll back to previous version, pause and resume a deployment

- Kind: `Deployment`

## Commands
- `kubectl get deployments -A` or `kubectl -n NAMESPACE get deployments`
- `kubectl -n NAMESPACE get pods --show-labels`
- Rollout status : `kubectl -n NAMESPACE rollout status deployment/DEPLOYMENT_NAME`
- Change the image in runtime: `kubectl -n NAMESPACE set image deployment/DEPLOYMENT_NAME OLD_IMAGE:OLD_TAG=NEW_IMAGE_NAME:NEW_TAG`
- Rollout history: `kubectl -n NAMESPACE rollout history deployment/DEPLOYMENT_NAME`
- Rollout to specific version: `kubectl -n NAMESPACE rollout undo deployment/DEPLOYMENT_NAME --to-revision=n`