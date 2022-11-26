# Config Map

- Config map kv can be used for
  - Env. variables
  - Container CLI args.
  - use as volumes

## Config from file

- `kubectl create configmap CONFIG_MAP_NAME --from-file=SOME_CONFIG_FILE`
Config map attaching to volume
```yaml
  containers:
    ...
    volumeMounts:
      - name: CONFIG_MAP_NAME
        mountPath: SOME_VOLUME_MOUNT_PATH
  volumes:
    - name: CONFIG_VOLUME_NAME
      configMap:
        name: CONFIG_MAP_NAME
```

### With the path being directory then 

```yaml
volumes:
  - name: CONFIG_VOLUME_NAME
    configMap:
      name: CONFIG_MAP_NAME
      items:
        - key: KEY_DEFINED_FOR_A_FILE
          path: FILE_PATH_OR_FILE_NAME_IN_THE_CONTAINER
```

### Defining through config map yaml file

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: CONFIGMAP_NAME
  namespace: NAMESPACE
data:
  FILE_NAME_ITS_A_KEY_BASICALLY: |
    FILE_CONTENTS
```

## ConfigMap kv as Env

```yaml
...
env:
  - name: ENV_NAME
    valueFrom:
      configMapKeyRef:
        name: CONFIG_MAP_NAME
        key: KEY_DEFINED_IN_CONFIG_MAP
  ...
```