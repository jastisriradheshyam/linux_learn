# docker swarm

- `docker swarm init`
- `docker node ls`
- `docker service create alpine ping 8.8.8.8`
- `docker service ps SERVICE_NAME`
- `docker service update <ID> --replicas 3`
- `docker service rm SERVICE_NAME`



---

### node 1
- `docker swarm init`
### node 2 and 3
- `docker swarm join --token SWMTKN-1-25v0dnvieneukkkgl8wd39ohlrbbs6z7k20r1se77y5q2vbs2e-3yhoecp5c8m8z2m0z3uhus4ia 10.128.0.2:2377`
### making node 2 and 3 managers from node 1
- `docker node update --role manager node 2`
- `docker node update --role manager node 3`
### creating a service that is replicated in three nodes
- `docker service create --replicas 3 alpine ping 8.8.8.8`

---
# Overlay multi-host networking

- `--driver overlay`
- for container to container traffic inside a single Swarm
- Optional IPSec (AES) encryption on network creation
- each service can be connected to mutiple networks
  - (e.g front end, back end)

---
# Routing mesh
- Routes ingress (incoming) packets for a service to proper task
- spans all nodes in swarm
- uses IPVS from Linux Kernel
- load balances swarm services across their tasks
-Two ways this works:
- Container to container in a overlay network ( uses VIP )
- external traffic incoming to published ports (all nodes listen)
- This is stateless load balancing
- this load balancing is at OSI layer 3 (TCP), not layer 4 (DNS)

