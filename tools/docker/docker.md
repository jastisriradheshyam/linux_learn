# docker

- List all docker process/containers: `docker ps -a`
- List images: `docker images`
- List docker volumes: `docker volume ls`
- List docker networks: `docker network ls`
- Prune volumes: `docker volume prune`
- Prune networks: `docker network prune`
- Remove all containers: `docker rm -f $(docker ps -aq)`
- Remove all containers along with volumes: `docker rm -vf $(docker ps -aq)`
- Remove all images: `docker rmi $(docker images | awk 'NR>1 {print $3}')`
- Logs of the container: `docker logs continer_id`
- Logs of the container with follow: `docker logs -f container_id`
- Logs since N minutes (here 10 min.) with follow: `docker logs -f --since 10m container`
- Run bash in container: `docker exec -it container_id bash`

-----
## run a container
### new way
- `docker container run --publish 80:80 ngnix`
- `docker container run --publish 80:80 --detach ngnix`
- `docker container run --publish 80:80 --detach --name webhost ngnix`
### old way
- `docker run --publish 80:80 ngnix`
- `docker run --publish 80:80 --detach ngnix`
- `docker run --publish 80:80 --detach --name webhost ngnix`

## list containers
### new way
- `docker container ls`
### old way
- `docker ps`

## stop container
### new way`
- `docker container stop CONTAINER_ID`
## old way
- `docker stop CONTAINER_ID`

## container logs
### new way
- `docker container logs CONTAINER_ID`
### old way
- `docker logs CONTAINER_ID`

## container ps / top
### new way
- `docker contaniner top CONTAINER_ID`
## old way
- `docker top CONTAINER_ID`


## container start with bash
- `docker start -ai ubuntu`
  - `a` : attach
  - `i` : interactive

----

## Network
- `docker network ls`
- `docker network inspect`
- `docker network create --driver`
- `docker network connect`
- `docker network disconnect`


---

## Misc.
- docker layers image: `docker history IMAGE:TAG`

- Size reduction tool: https://github.com/wagoodman/dive#dive
- Distroless images: https://github.com/GoogleContainerTools/distroless
- Build without cache: `docker build --no-cache --pull ...`