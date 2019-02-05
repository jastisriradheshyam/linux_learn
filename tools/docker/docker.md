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
