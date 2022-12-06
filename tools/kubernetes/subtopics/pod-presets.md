# Pod Presets

- Pod presets can inject information into pods at runtime
  - Secrets
  - ConfigMaps
  - Volumes
  - Environment Variables
- Caution: Will inject to all the containers within the pod with injection of Env. Vars and volume mounts
- If the pod preset is applied and new pod is started then if it matches the pod preset conditions then pod preset will be applied to new pod.

Example:
```yaml
apiVersion: settings.k8s.io/v1alpha1
kind: PodPreset
metadata:
  name: allow-database
spec:
  selector:
    matchLabels:
      role: frontend
  env:
    - name: DB_PORT
      value: "6379"
  volumeMounts:
    - mountPath: /cache
      name: cache-volume
  volumes:
    - name: cache-volume
      emptyDir: {}
```

## Enabling pod preset due to alpha feature

- We have to enable the pod preset in kubeAPIServer:

```yaml
kubeAPIServer:
  enableAdmissionPlugins:
  ...
  -PodPreset
  runtimeConfig:
    setting.k8s.io/v1alpha1: "true"
```

## References:
- https://kubernetes.netlify.app/docs/concepts/workloads/pods/podpreset/#understanding-pod-presets