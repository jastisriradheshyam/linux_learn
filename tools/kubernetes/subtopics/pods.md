# Pods

## Pod State > status

- When a Pod is being deleted, it is shown as `Terminating` by some kubectl commands. This `Terminating` status is not one of the Pod phases. A Pod is granted a term to terminate gracefully, which defaults to 30 seconds. You can use the flag --force to terminate a Pod by force.

### Running

- pod has been bound to a node
  - A pod is always assigned to a single node
- containers have been created
- At least one container is still running or starting/restarting

### Pending

- accepted but is not running
  - when downloading / resource constraints

### Unknown

- state couldn't be determined

### Failed

- Container in the pod terminated with error code

### Succeeded

- Containers got terminated successfully and will not be restarted

## Pod State > conditions

- Get the conditions by executing describe on a pod resource
- The conditions which the pod has passed

### Conditions
- PodScheduled
  - The pod has been scheduled
- Ready
  - pod is ready but still services are to be attached
- Initialized
  - Successfully initialized the pod
- Unschedulable
  - pod can't be scheduled due any reason like resource constraints
- ContainerReady
  - All the containers in the pod are ready

## Pod Lifecycle

- init container
- post start hook
- pre stop hook

- https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/