# private registry

- `docker container run -d -p 5000:5000 --name registry -v $(pwd)/registry-data/:/var/lib/registry regsitry`
- `docker push 127.0.0.1:5000/hello-world`
