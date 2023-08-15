# Podman


## Userspace commands

- `touch /etc/subuid /etc/subgid`
- `chmod 644 /etc/subuid /etc/subgid`
- `usermod --add-subuids 10000-165535 --add-subgids 10000-165535 USERNAME`
  - Verify at : `/etc/subuid` and `/etc/subgid`

## History

- 2017 : Project Begins -> Forked from `CRI-O` was called `kpod`
- 2018 : Podman v0.2 released -> First public release; project renamed to Podman, and started weekly releases
- 2019 : Podman v1.0 released -> First stable release; Default in RHEL 8
- 2020 : Podman v2.0 released -> First release with REST API; Beginning of modern Podman
- 2021 : Podman v3.0 released -> First release with compose support
- 2022 : Podman v4.0 and v4.1 released -> New network stack


## Concepts

- Rootful : containers running as root user
- Rootless : containers has no additional privileges then the user who created it
- Podman is not a runtime, Podman is an Engine that uses runtimes.
  - OCI runtime is one of the runtime that creates a container based on a standardized spec.
  - Engines similar to Podman are Cryo, Docker, containerD
  - some of the OCI runtimes are RunC, CRun, Kata, Gvisor
  - Podman by default used CRun

## Components

- CLI
- Libpod
  - Manages container lifecycle and also manages volume mounting and networking as well.
- Networking
  - Connect containers to internet via iptables, slirp4netns, DNS. Handled by Netavark and Aardvark.
  - slirp4netns is used to do rootless networking.
- OCI (Open container initiative)
  - Standardized spec for containers and images that Podman uses. Allows Podman to interoperate with other tools.
- Container runtime
  - Creates the container from an OCI spec., managing kernel namespaces, capabilities, resource limits. 
- Conmon
  - lightweight container monitor. manages logging, attaching, records exit codes.
  - one conmon process per container.
- Containers storages
  - Low-level storage library, manages storage of images and containers.
- Containers image
  - Low-level image library, Manages pushing and pulling from registries. 
- Containers-Common
  - Common code for managing networking and images.
- Buildah
  - A tool that facilitates building OCI container images
- Rootless user namespace
  - Allows rootless Podman to work. Grants Podman the ability to use additional UIDs and GIDs and mount filesystems.
  - It maps users inside the container to users on the host.
  - Because of this we can pretend to be root inside the rootless user namespace and that gives us some additional capabilities
- Database
  - Maintain a list of current containers and pods and their current state.

## Container process with Podman

- If rootless, Podman creates the rootless user namespace.
  - To populate the rootless user namespace, Podman invokes `newuidmap` and `newgidmap` which add extra users and groups.
    - A pause process is created
- Podman CLI collects descriptive information about a container from the user and defaults otherwise.
- Inputs is validated and defaults are applied
- If the image is not already in local storage, the image is pulled.
- Once the image is been downloaded, An OCI spec. is created by combining the values from the user, the defaults, and values embedded in an image's metadata.
- The container is created in libpod. The OCI spec. and other information is stored in the database.
- Container startup begins. The container's root filesystem is mounted.
- The container's network namespace is configured to access the internet by Netavark.
- The OCI spec is finalized and saved to disk.
- The conmon container monitor is invoked by Podman and double-forks.
  - Conmon will create an attached socket, that is how attaching to container actually works, all the user input and other inputs are passed through this attached socket
  - After attaching, Conmon signals Podman that container is ready.
- Common invokes the OCI runtime to create the container.
  - Creates actual container in the kernel, it's going to setup namespace's according to the spec., seekers to limit resources, kernel capabilities, SE Linux / AppArmor policies to limit access to syscalls, other misc. stuff like bind maps
- The OCI runtime finishes container setup and executes the container entrypoint.
  - OCI runtime replaces itself with container command after it finished setting up the container.

### Shutdown process
- When container exits, Conmon records the exit code and invokes Podman to clean up the container resources.
- Podman calls Netavark to tear down the container's network
- Podman calls the OCI runtime to delete the container
- Podman unmounts the container's storage
- Podman reads the container's exit code and records it in the database.

## Network stack since v4.0

- Two components : Netavark and Aardvark-dns, both written in Rust language.
- Netavark:
  - For network setup
  - Configures all network interfaces and firewall rules necessary for the container to access the internet and other containers.
- Aardvark-dns:
  - A container DNS server
  - Handles all DNS queries by containers and allows them to resolve other containers in the same network by name.

## Podman machine

- Podman machine allows to deploy podman in a virtual machine
- Podman machine provides the capability to host containers where the host os is not capable of running Linux containers
- Uses Fedora CoreOS as it's OS
- Uses black box approach
- Start the machine: `podman machine init`
- Podman's API sockets are extended to the host OS for API use
- Does the volume mounting from host into machine
- Does the Port mapping


## Inspect

- Example of finding expose port: `podman inspect IMAGE | grep expose`
- Example of finding the usage: `podman inspect IMAGE | grep usage`

## Networking

### Publish all

- `podman run --name=CONTAINER_NAME -d --publish-all IMAGE_NAME:IMAGE_TAG`
  - To list what ports are exposed on host: `podman port -l`
  - Firewall: `sudo firewall-cmd --add-port PORT_MAPPED_ON_HOST/tcp`

## Volumes

- `podman rm -a`
- `chcon -Rvt container_file_t PATH_ON_FILE_SYSTEM`
- `podman run --name=CONTAINER_NAME -d --publish-all -v PATH_ON_HOST:PATH_IN_CONTAINER IMAGE_NAME:IMAGE_TAG`


## References:
- [Understanding the Podman Internals - YouTube](https://www.youtube.com/watch?v=kJnxeinEWyA)
- [GitHub - containers/netavark: Container network stack](https://github.com/containers/netavark)
- [GitHub - containers/aardvark-dns: Authoritative dns server for A/AAAA container records. Forwards other request to host's /etc/resolv.conf](https://github.com/containers/aardvark-dns)