# Helm

- Install a specific helm chart:
  - `helm install RELEASE_NAME REPOSITORY_NAME --version VERSION -f values.yaml -n NAMESPACE --create-namespace`
- List all the versions from a repo: 
  - `helm search repo REPOSITORY_NAME --versions`
  - With exact match: `helm search repo --regexp '\vREPOSITORY_NAME\v' --versions`
    - `\v` is used because exact match is not working correctly in helm search: https://github.com/helm/helm/issues/3890
- Delete/Uninstall a helm chart in a cluster:
  - `helm uninstall RELEASE_NAME -n NAMESPACE`