# Affinity , Anti Affinity, & Node Selector

- Node Selector will cause scheduling to be done on the node where the specified label is present on the node.
  - The condition is strict, so if no node with specific condition, the resource will not be applied in the cluster.

- Affinity and Anti Affinity are not hard requirements, the conditions / rules are preferred rules.
- Affinity / Anti Affinity is only relevant during scheduling.


## Node Affinity

- 