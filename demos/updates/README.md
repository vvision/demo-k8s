# Updates demo

## Rolling Update

* Deploy the deployment: `kubectl apply -f rolling/nginx-depl.yaml`.
* Check deployment status: ` kubectl get deployments -owide`.
* Check the replicaSet associated with the deployment: `kubectl get rs`.
* Pause deployment: `kubectl rollout pause deployment/nginx-deployment`.
* Update image: `kubectl set image deployment/nginx-deployment nginx=nginx:1.16.1`.
* `k get deployments -owide` UP-TO-DATE shows 0.
* `k describe pod <pod_name>` to check image version.
* Explore rollout history (no new rollout started): `kubectl rollout history deployment/nginx-deployment`.
* Re-enable deployment rollout: `kubectl rollout resume deployment/nginx-deployment`.
* Watch the rollout live: `kubectl get rs --watch`
* Ensure there is a new revision in history: `kubectl rollout history deployment/nginx-deployment`.
* Look at the details of revision 1: ` kubectl rollout history deployment/nginx-deployment --revision 2`

## Recreate

* Deploy the deployment: `kubectl apply -f recreate/nginx-depl.yaml`.
* Check deployment status: `kubectl get deployments -owide`.
* Check the replicaSet associated with the deployment: `kubectl get rs`.
* Pause deployment: `kubectl rollout pause deployment/nginx-deployment`.
* Update image: `kubectl set image deployment/nginx-deployment nginx=nginx:1.16.1`.
* `k get deployments -owide` UP-TO-DATE shows 0.
* `k describe pod <pod_name>` to check image version.
* Explore rollout history (no new rollout started): `kubectl rollout history deployment/nginx-deployment`.
* Re-enable deployment rollout: `kubectl rollout resume deployment/nginx-deployment`.
* Watch the rollout live: `kubectl get rs --watch`

## Blue/Green

* Deploy the deployment: `kubectl apply -f blue-green/demo-blue-depl.yaml`.
* Deploy the service: `kubectl apply -f blue-green/demo-svc.yaml`.
* curl the service's clusterIP, it should return "blue".
* Copy the yaml to green: `cp blue-green/demo-blue-depl.yaml blue-green/demo-green-depl.yaml`.
* Edit new deployment file to set color to green.
* Deploy the new deployment: `kubectl apply -f blue-green/demo-green-depl.yaml`.
* Check that there is 2 deployments.
* Edit the service file and re-apply service.
* curl the service's clusterIP, it should return "green".

## Canary

* From the end of the Blue/Green demo.
* Set the number of replica for green to 2 and for blue to 1.
It should get use a 33% ratio between green and blue.
* Edit the service to match only on `app: demo` label.
* curl the service's IP a few time to get both blue and green.
