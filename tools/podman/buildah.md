# Buildah

- Create container images
- Works well with `Dockerfile`
- Unlike Docker, Buildah don't create any layers, it just updates the current container.
  - Docker does does commit after every command, but in buildah we have to explicitly commit the image.
- Lis the containers: `buildah ps`
  - Buildah Containers are used to create new images, to create new image from container we have to commit the container. 
- List the images: `buildah images`

## Example:

- `buildah pull IMAGE:TAG`
- `buildah images`
- `buildah ps`
- `buildah run CONTAINER_ID mkdir -p /sample_app_dir`
- `buildah config --working-dir /sample_app_dir CONTAINER_ID`
- `buildah commit CONTAINER_ID NEW_IMAGE_NAME:TAG`