# Docker image demo

Learn how to build a docker image.

## Demo Application

The application is a simple JavaScript application using `expressjs`,
a library enabling us to write a simple API server.

In the JavaScript world, we use NodeJS as the runtime for the code of our application.
We also use `npm` to handle external dependencies
(Think `maven` in the java world, `pip` in the python world).

In the app directory, look at the `index.js` file: `cat index.js`.

## Build a docker image

To build the image, we will use a `Dockerfile`.
In the `app` directory, you will find a small web application written in Node.JS and using expressjs as a web server.

* First, let's start by navigating to the app directory.
* Display the Dockerfile: `cat Dockerfile`.
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

# Run a docker image

* To run the image we just created:
  * podman: `podman run --rm --detach --name demo --publish 3000:3000 vvision/demo-app:v1`
* List running container:
  * podman: `podman container list`
* Go to the browser to see the app.
* Stop the container:
  * podman: `podman container stop demo`
* Verify the container has stopped:
    * podman: `podman container list`
* To run the container with an environment variable:
    * podman: `podman run --rm --detach --name demo --publish 3000:3000 --env COLOR=cyan vvision/demo-app:v1`
* Stop the container:
    * podman: `podman container stop demo`
* Verify the container has stopped:
    * podman: `podman container list`

## Misc

Look at `Dockerfile_multi_step` for an example of a multi-stage build.
