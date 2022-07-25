# Replicas

- `kubectl scale --replicas=3 -f KUBERNETES_CONF_FILE_PATH`
- `kubectl scale --replicas=3 rs/REPLICA_SET_NAME`
- Initially `ReplicationController` managed the replicas to maintain the specified replicas but now `ReplicaSet` is used instead of it.
  - `ReplicaSet` supports set-based selector requirements, it supports a new selector that can do selection based on filtering according a set of values.
    - e.g. "environment" either "dev" or "qa"
    - Not only based on equality, like the Replication Controller
      - e.g. "environment" == "dev"
- Using Deployments is recommend instead of directly using ReplicaSets, unless you require custom update orchestration or don't require updates at all.

## ReplicationController

- Kind: `ReplicationController`
- command to get the list of rc: `kubectl -n NAMESPACE get rc`

## ReplicaSet

- Kind: `ReplicaSet`
- command to get the list of rc: `kubectl -n NAMESPACE get rs`