# Storage class
- Get the storage class list: `kubectl get storageclass`
- Describe storage class: `kubectl describe storageclass/STORAGE_CLASS_NAME`

## Example for Storage class definition

```yaml
kind: StorageClass
apiVersion: storage.k8s.io/v1
allowVolumeExpansion: true
metadata:
  annotations:
    storageclass.kubernetes.io/is-default-class: "false"
  name: gp2
parameters:
  fsType: ext4
  type: gp2
provisioner: kubernetes.io/aws-ebs
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
```

## EFS (AWS)

```yaml
allowVolumeExpansion: true
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: efs-user-sc
parameters:
  basePath: /BASE_PATH_IN_EFS
  directoryPerms: "777"
  fileSystemId: EFS_FILE_SYSTEM_ID
  gid: "1000"
  provisioningMode: efs-ap
  uid: "1000"
provisioner: efs.csi.aws.com
reclaimPolicy: Delete
volumeBindingMode: Immediate
```

change uid and gid for root permission based volumes:
```yaml
  ...
  gid: "0"
  provisioningMode: efs-ap
  uid: "0"
  ...
```