# Helm

- Install a specific helm chart:
  - `helm install RELEASE_NAME REPOSITORY_NAME --version VERSION -f values.yaml -n NAMESPACE --create-namespace`
- List all the versions from a repo: 
  - `helm search repo REPOSITORY_NAME --versions`
  - With exact match: `helm search repo --regexp '\vREPOSITORY_NAME\v' --versions`
    - `\v` is used because exact match is not working correctly in helm search: https://github.com/helm/helm/issues/3890
- Delete/Uninstall a helm chart in a cluster:
  - `helm uninstall RELEASE_NAME -n NAMESPACE`


## How helm knows the resources it created
- Helm adds the labels to the resources like:
  - `release`
  - `heritage`
    - value is `Helm`
  - `chart`
    - Chart name
  - `app`
- The labels can be fetched by
  - `kubectl -n NAMESPACE get RESOURCE_TYPE --show-labels`
  - e.g. : `kubectl -n default get pods --show-labels`