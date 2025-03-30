# Docker

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


## Live Chnages(one of these)
1. Rebuild the image
2. Volume Mounting
3. Dcoker Compose

