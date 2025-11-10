# Deployments demo


## Deployments

* Create the deployment: `kubectl apply -f nginx-depl.yaml`.
* List the deployments: `kubectl get deployments`.
* Look at the details of the deployment: ` kubectl describe deployments nginx-deployment`.
* List the pods: `kubectl get pods`.

* Change the number of `replicas` to 2 with: `kubectl edit deployment/nginx-deployment`
* List the pods to verify that we only have 2 pods left: `kubectl get pods`.

* Delete the deployment: `kubectl delete deployment/nginx-deployment`.
* Check resources deletion: `kubectl get pods` and `kubectl get deployments`.
