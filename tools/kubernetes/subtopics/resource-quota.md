# Resource Quota

- Kind : `ResourceQuota`

- the quotas applied here is the total combined value of the resource (CPU, memory, pv's, etc.) in a namespace not for each pod.

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: namespace-limits
  namespace: random-namespace
spec:
  hard:
    requests.cpu: "1"
    requests.memory: 1Gi
    limits.cpu: "2"
    limits.memory: 2Gi
```

there are other quotas that can be specified:

- `configmaps`, pv, replication controllers, etc.

## References:

- [Configure Memory and CPU Quotas for a Namespace | Kubernetes](https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/quota-memory-cpu-namespace/)