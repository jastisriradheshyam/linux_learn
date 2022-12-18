# Cgroupv2

- Pod spec process
  - Pod -> CRI (containerd/cri-o) -> OCI spec -> OCI runtime (runc) -> systemd (driver) -> cgroupfs kernel
    - Both OCI runtime and diver connects and pass messages from and to cgroupfs