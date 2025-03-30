# Docker
## Docker Image, Docker Container, Dockerfile, Docker-compose



## How to dockerize an app
1. Create a Dcokerfile
2. Create a .dockerignore file
3. Define services in docker-compose.yml
4. Build & Run the container


## Commands
Build Docker Image
```bash
docker build -t myapp .
```
Run the Container
```bash
docker run conatinerPort:localPort --name myserver myapp
```
**Note** 
Every time your run a docker container, new container is made.

Checking running conatiners
```bash
docker ps
```
```bash
docker ps -a
```
Removing a container
```bash
docker rm <container_id>
```


## Live Chnages(one of these)
1. Rebuild the image
2. Volume Mounting
3. Dcoker Compose



