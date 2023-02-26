# Taints & Toleration's

- Taint allow a node to repel a set of pods.
- Toleration's are applied to pods to influence the scheduling of the pods

## Tainting a node using kubectl

- `kubectl taint nodes NODE_NAME LABEL_KEY:LABEL_VALUE:NoExecute`
- remove taint: `kubectl taint nodes NODE_NAME LABEL_KEY-`
  - adding `-` after the key will remove the key value from the taints

## NoExecute
- the `tolerationSeconds` will define how long the pods can run on a tainted node before being evicted.

```yaml
tolerations:
  - key: "KEY"
    operator: "Equal"
    value: "VALUE"
    effect: "NoExecute"
    tolerationSeconds: 300
```

## Few node labels that are tainted:

- `node.kubernetes.io/not-ready`
- `node.kubernetes.io/unreachable`
- `node.kubernetes.io/out-of-disk`
- `node.kubernetes.io/memory-pressure`
- `node.kubernetes.io/disk-pressure`
- `node.kubernetes.io/network-unavailable`
- `node.kubernetes.io/unschedulable`


## Set Tolerance so that it schedules on every node [1]

```yaml
tolerations:
  - effect: NoSchedule
    operator: Exists
```

## References

[1]: [Helm: set tolerations for promtail in loki-stack chart · Issue #2298 · grafana/loki · GitHub](https://github.com/grafana/loki/issues/2298#issuecomment-739924467)

