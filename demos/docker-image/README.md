# Docker image demo

Learn how to build a docker image.

## Build a docker image

To build the image, we will use a `Dockerfile` with a multi-stage build.
In the `app` directory, you will find a small web application written in Node.JS and using expressjs as a web server.

* First, let's start by navigating to the app directory.
* To build the image, use: 
  * docker: `docker build -t vvision/demo-app:v1 .`
  * podman: `podman build -t vvision/demo-app:v1 .`
* To further tag the image, use:
    * docker: `docker image tag vvision/demo-app:v1 <namespace>/another-name:v1`
    * podman: `podman image tag vvision/demo-app:v1 <namespace>/another-name:v1`
* Push an image to a registry: 
  * docker: `docker push vvision/demo-app:v1` (will use docker hub as default registry)
  * podman: `podman push vvision/demo-app:v1` (will use the default configured registry)
* Delete an image:
  * docker: `docker rmi <image_name>`
  * podman: `podman rmi <image_name>`
