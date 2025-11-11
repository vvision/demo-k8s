# Resource management demo

## Requests

* Deploy a pod asking for 50Gi of memory: `kubectl apply -f request-pod.yaml`
* Look at the pod status, it should be blocked in pending mode.
* Explore the pod details: `kubectl describe pod nginx-memory-lover`.
* Look at the Events and the FailedScheduling reason.


