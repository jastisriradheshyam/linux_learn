# Dockerfile

- `ARG`
    - The ARG instruction defines a variable that users can pass at build-time to the builder with the docker build command using the `--build-arg <varname>=<value>` flag.

```
ARG user1
ARG buildno
```
    - With default : `ARG buildno=1`
    - usage of argument

```
ARG SETTINGS
RUN ./run/setup $SETTINGS
```

```
ARG ALPINE_VER
FROM alpine:${ALPINE_VER} as peer-base
```

- `FROM`
    - The FROM instruction initializes a new build stage and sets the Base Image for subsequent instructions. As such, a valid Dockerfile must start with a FROM instruction.
    - Optionally a name can be given to a new build stage by adding AS name to the FROM instruction. The name can be used in subsequent FROM and `COPY --from=<name|index>` instructions to refer to the image built in this stage.

- `RUN`
    - The RUN instruction will execute any commands in a new layer on top of the current image and commit the results. The resulting committed image will be used for the next step in the Dockerfile.
    - example
```
RUN <command>
or
RUN ["executable", "param1", "param2"]
```
- `WORKDIR`
    - The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile.
    - example
```
ENV DIRPATH /path
WORKDIR $DIRPATH/$DIRNAME
```

- `ADD`
    - The ADD instruction copies new files, directories or remote file URLs from `<src>` and adds them to the filesystem of the image at the path `<dest>`

```
ADD [--chown=<user>:<group>] <src>... <dest>
ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]
```
    - Example: `ADD file:0c4555f363c2672e350001f1293e689875a3760afe7b3f9146886afe67121cba in /`

- `COPY`
    - COPY instruction is similar to ADD but with limited capabilities, see this link for further info
    - [docker - What is the difference between the 'COPY' and 'ADD' commands in a Dockerfile? - Stack Overflow](https://stackoverflow.com/questions/24958140/what-is-the-difference-between-the-copy-and-add-commands-in-a-dockerfile)
```
COPY --from=peer /go/src/github.com/hyperledger/fabric/build/bin /usr/local/bin
```

- `CMD`
    - There can only be one CMD instruction in a Dockerfile. If you list more than one CMD then only the last CMD will take effect.
    - The main purpose of a CMD is to provide defaults for an executing container.
```
CMD ["peer","node","start"]
```

- `EXPOSE`    
    - The EXPOSE instruction informs Docker that the container listens on the specified network ports at runtime. 
    - example : `EXPOSE 80/udp`

## Comprehensive Example

```Dockerfile
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0

ARG GO_VER
ARG ALPINE_VER

FROM alpine:${ALPINE_VER} as peer-base
RUN apk add --no-cache tzdata

FROM golang:${GO_VER}-alpine${ALPINE_VER} as golang
RUN apk add --no-cache \
	bash \
	gcc \
	git \
	make \
	musl-dev
ADD . $GOPATH/src/github.com/hyperledger/fabric
WORKDIR $GOPATH/src/github.com/hyperledger/fabric

FROM golang as peer
ARG GO_TAGS
RUN make peer GO_TAGS=${GO_TAGS}

FROM peer-base
ENV FABRIC_CFG_PATH /etc/hyperledger/fabric
VOLUME /etc/hyperledger/fabric
VOLUME /var/hyperledger
COPY --from=peer /go/src/github.com/hyperledger/fabric/build/bin /usr/local/bin
COPY --from=peer /go/src/github.com/hyperledger/fabric/sampleconfig/msp ${FABRIC_CFG_PATH}/msp
COPY --from=peer /go/src/github.com/hyperledger/fabric/sampleconfig/core.yaml ${FABRIC_CFG_PATH}
EXPOSE 7051
CMD ["peer","node","start"]
```
