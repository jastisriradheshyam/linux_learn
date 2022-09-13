# Labels

## Node Labels

- view the node labels
  - `kubectl get node --show-labels`
- set the node labels
  - `kubectl label nodes node1 hardware=high-spec`
  - `kubectl label nodes node2 hardware=low-spec`

- Select the node for pod deployment

```yaml
spec:
...
  nodeSelector:
    hardware: high-spec
```