# Probes demo

## Readiness Probe

* Deploy the pod: `kubectl apply -f readiness/readiness-pod.yaml`.
* List pod and confirm it's in a ready false state. 
* Expose the pod with a service: `kubectl expose pod health-probe-app --port 80 --target-port=3000 --name readiness-app-svc`.
* Try to curl the IP of the service, it should fail.
* Change the path of the readiness probe to /health and redeploy the pod.
* List pod and confirm it's in a ready state.
* Try to curl the IP of the service, it should pass.

## Liveness Probe

* Deploy the pod: `kubectl apply -f liveness/liveness-pod.yaml`.
* Describe pod to look at the events periodically: `k describe pods liveness-exec`.
* For the first 30 seconds of the container's life, there is a /tmp/healthy file.
  So during the first 30 seconds, the command cat /tmp/healthy returns a success code.
  After 30 seconds, cat /tmp/healthy returns a failure code.
* Wait a little bit to see the container being restarted (execute `describe` periodically to see the events changing).
* Execute `kubetcl get pods` to verify that `RESTART` has been incremented.

From: [Configure Liveness, Readiness and Startup Probes > Define a liveness command](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-liveness-command)

## Startup Probe

No demo for startup probe (yet).
