# Daemon Set

- A DaemonSet ensures that all or some nodes run a copy of a pod.

- Got Stabe in K8 version 1.7


```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  ...
spec:
  ...
  # Configuration similar to pod
```
