# Build X

- `buildx` plugin uses Buildkit to build in concurrent manner (in multi stage builds)
  - If a stage is not used by other stages it will be skipped, and
  - **CAUTION**: also if any build argument is used in a stage and they are explicitly overridden by passing through docker build command, then the stage will be built even if it is not used by any other stage.
- Installation script in easy_compute repo -> `install/docker/buildx-install.sh`


## References:

[1]: [docker buildx ](https://docs.docker.com/engine/reference/commandline/buildx/)

[2]: [GitHub - docker/buildx: Docker CLI plugin for extended build capabilities with BuildKit](https://github.com/docker/buildx)

[3]: [GitHub - moby/buildkit: concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit](https://github.com/moby/buildkit)