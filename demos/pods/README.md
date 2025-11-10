# pods demo

## Imperative mode

* Create a pod in an imperative way: `kubectl run my-pod --image nginx`.
* Verify that the pod is running: `kubectl get pods`.
* Look at the pod's details: `kubectl describe pods my-pod`.
  * Find the IP of the pod in the cluster.
    Ex:
    ```
    IP:               10.244.194.66
    IPs:
        IP:  10.244.194.66
    ```
* Check that nginx is running correctly: `curl -XGET <IP>`.
  * Ex: `curl -XGET 10.244.194.66`, should give you the nginx welcome page with `<title>Welcome to nginx!</title>`.
* Look at the pod's logs: `kubectl logs my-pod`.
* Edit the pod and change the image to apache (image name: httpd): `kubectl edit pod my-pod`.
* Curl the pod's IP to see the changes.
* Delete pods: `kubectl delete pod my-pod`.

## Declarative mode

* Create a pod from a file: `kubectl create -f nginx-pod.yaml`.
* Edit the yaml file to change the image version to `nginx:1.29.3`.
* Apply changes: `kubectl apply -f nginx-pod.yaml`.
* Verify the changes: `kubectl describe pod nginx`.
* Delete pods: `kubectl delete pod nginx`.


## Misc

It's possible to get a pod declarative file from the command line:
`kubectl run demo --image=nginx --dry-run=client -o yaml > demo-pod.yaml`
