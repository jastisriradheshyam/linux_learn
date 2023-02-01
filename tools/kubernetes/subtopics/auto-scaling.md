# Auto Scaling

- Horizontal pod autoscaling does not apply to objects that can't be scaled (for example: a DaemonSet.)
- default interval for checking the resources is 15 seconds

- API Version (2023 Jan): `autoscaling/v2`
- Sample command: `kubectl autoscale deployment example-app --cpu-percent=50 --min=1 --max=10`


```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: example-app
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: example-app
  minReplicas: 1
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
```

## References:

[1]: [Horizontal Pod Autoscaling | Kubernetes](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)
[2]: [Autoscaling in Kubernetes | Kubernetes](https://kubernetes.io/blog/2016/07/autoscaling-in-kubernetes/)