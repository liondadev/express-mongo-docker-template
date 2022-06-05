# 📦 Express, MongoDB, & Docker Template
This repo is an example of how to setup ExpressJS, MongoDB (with mongoose), and Docker in a Production & development environment.
This utilizes docker-compose to quickly setup the project for development & production


## 📝 Requirements
- Docker
*That's It, docker handles installing Node, Express, and MongoDB in the containers by itself*

## ✅ Setting up environments

### 💻 Development Environment
1. Install Docker
2. Run the following command to install everything and run the container:
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```
3. Go to localhost:3000 and start developing (Volumes have been configured to allow the local machiene to make changes. The changes will appear and the docker app will reload. This only happens in development.)

**NOTE**
When you want to start the container later, as long as you havn't modified the docker files, you can simply do the same command, but without the `--build` flag.
You only need build when running for the first time, or you made a change in the Docker Related Files.

### 🔥 Production Environment
1. Install Docker
2. Run the following command to install everything and run the container: (This assumes you already pulled the repo to a folder on your server)
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```
3. Make sure the port `5000` is forwarded on your machiene. You can also configure NGINX to proxy this to the outside world.
4. Make sure to re-run the command whenever you update your application again.

**NOTE**
Unlike the dev environment, the only volume used in prod is the mongodb storage. You need to restart your app for changes to take effect.

<hr></hr>

Thanks for checking out the template, if you want to learn docker by itself, consider watching this video:
https://www.youtube.com/watch?v=9zUHg7xjIqQ&t=12131s (You also learn bits of MongoDB, Express, Redis, NGINX, and express-session)
