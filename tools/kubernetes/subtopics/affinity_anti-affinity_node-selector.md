# Affinity , Anti Affinity, & Node Selector

- Node Selector will cause scheduling to be done on the node where the specified label is present on the node.
  - The condition is strict, so if no node with specific condition, the resource will not be applied in the cluster.

- Affinity and Anti Affinity are not hard requirements, the conditions / rules are preferred rules.
- Affinity / Anti Affinity is only relevant during scheduling.


## Node Affinity

- Two types
  - `requiredDuringSchedulingIgnoredDuringExecution`: The scheduler can't schedule the Pod unless the rule is met. This functions like `nodeSelector`.
  - `preferredDuringSchedulingIgnoredDuringExecution`: The scheduler tries to find a node that meets the rule. If a matching node is not available, the scheduler still schedules the Pod.

Example: 
```yaml
spec:
  ...
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: topology.kubernetes.io/zone
            operator: In
            values:
            - antarctica-east1
            - antarctica-west1
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 1
        preference:
          matchExpressions:
          - key: another-node-label-key
            operator: In
            values:
            - another-node-label-value
  ...
```

## nodeName

- selection of node based on node name

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx
  nodeName: kube-01
```

## inter-pod affinity and anti-affinity

- Two types
  - `requiredDuringSchedulingIgnoredDuringExecution`
  - `preferredDuringSchedulingIgnoredDuringExecution`

- Required field: `topologyKey`

  - This field will help selecting the node when a condition is matched for pod, it is used to select the node on basis of a label key that is assigned on the node.
  - The pod will be scheduled only on the node with same topologyKey value of the matched running pod.

- Example:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: with-pod-affinity
spec:
  affinity:
    podAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchExpressions:
          - key: security
            operator: In
            values:
            - S1
        topologyKey: topology.kubernetes.io/zone
    podAntiAffinity:
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 100
        podAffinityTerm:
          labelSelector:
            matchExpressions:
            - key: security
              operator: In
              values:
              - S2
          topologyKey: topology.kubernetes.io/zone
  containers:
  - name: with-pod-affinity
    image: registry.k8s.io/pause:2.0
```

### Use case
- Co located pods
- Co locate pods in same availability zone

## Weights

- Higher the weight for a scheduling rule, by combining matching conditions weight on a resource (node, pod, etc.) the higher the preference.
- 2 conditions matches a node with each weighing 1 and 4 then the total would be 5 for a rule and other node had only one matching condition with weight 1 then earlier node will get preference for scheduling.

## Conditions
- You can use the operator field to specify a logical operator for Kubernetes to use when interpreting the rules. You can use `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt` and `Lt`.
- `NotIn` and `DoesNotExist` allow you to define node anti-affinity behavior

## References:

[1]: [Assigning Pods to Nodes | Kubernetes](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)