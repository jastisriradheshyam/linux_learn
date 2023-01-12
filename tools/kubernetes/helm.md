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


## Environment specific values

- `helm COMMAND RELEASE_NAME CHART_NAME_OR_DIR -n NAMESPACE -f values.common.yaml -f values.ENVIRONMENT_SLUG.yaml`
- Helm will apply from left to right, during the application it will either do the addition or override the values to make the final values object to apply
- Other tools
  - [helmfile](https://github.com/helmfile/helmfile)
  - [ocra](https://github.com/nuvo/orca)

## Variable and templates

- https://stackoverflow.com/questions/69702163/helm-kube-prometheus-stack-can-i-create-rules-for-exporters-in-values-yaml
- https://stackoverflow.com/questions/59575498/what-is-the-usage-of-include-in-helm

## References:

- https://github.com/helm/helm/issues/5257
- https://github.com/helm/helm/blob/ecef026b68a23f0c1399d98425134ce837126831/docs/using_helm.md#customizing-the-chart-before-installing
- https://friedrichkurz.me/blog/2022/06/18/keeping-environment-specific-helm-configuration-dry/