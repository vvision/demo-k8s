# Services demo


## Services - ClusterIP

* Create the deployment: `kubectl apply -f nginx-depl.yaml`.
* List the deployments: `kubectl get deployments`.

* Create the service: `kubectl apply -f svc-clusterip.yaml`.
* List the services: `kubectl get svc`.
* Curl the IP of our service; `curl http://<svc-ip>`.

## Services - NodePort

* Create the service: `kubectl apply -f svc-nodeport.yaml`.
* List the services: `kubectl get svc`.
* curl the service on the master (master is also a node): `curl 127.0.0.1:30123`
* * curl the service on the worker: `curl 10.1.1.11:30123`

## Services - LoadBalancer

* Create the service: `kubectl apply -f svc-lb.yaml`.
* List the services: `kubectl get svc`.
* Notice that the service has ClusterIP and NodePort

## DNS

* Create a pod and connect inside it:
  * `kubectl run nodejs --image=ghcr.io/vvision/demo-k8s:main`
  * `kubectl exec --stdin --tty nodejs -- /bin/sh`
* Make a request to the service ClusterIP using its local DNS: `wget my-nginx-clusterip.default.svc.cluster.local`
* Make a request to the service ExternalName using its local DNS: ` wget --no-check-certificate my-external-name-svc.default.svc.cluster.local`
* Delete pod: `kubectl delete pod nodejs`
