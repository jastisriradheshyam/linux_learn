# Metrics Server

- Earlier required Heapster

- Only meant for auto scaling purposes, Not meant for monitoring the resources, use Kubelet `/metrics/resource` endpoint directly.
- With the installation of metrics server we can do `kubectl top RESOURCE_TYPE` to check the resource utilization.
 
## References:

[1]: [kubernetes-sigs/metrics-server: Scalable and efficient source of container resource metrics for Kubernetes built-in autoscaling pipelines.](https://kubernetes-sigs.github.io/metrics-server/)
[2]: [Kubernetes Metrics Server | metrics-server](https://kubernetes-sigs.github.io/metrics-server/)