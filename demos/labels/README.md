# labels demo


## Labels

* Execute `deploy_pods.sh` to deploy 3 pods each with a different env label.
* List pods: `kubectl get pods`.
* Filter pods by label `dev` and `staging`: `kubectl get pods -l "env in (staging, dev)"`.
  * With labels, add `--show-labels`: `kubectl get pods -l "env in (staging, dev)" --show-labels`.
Filter pods by label `prod`: `kubectl get pods -l "env=prod"`.
  * With labels, add `--show-labels`: `kubectl get pods -l "env=prod" --show-labels`.
* Get pods having app=nginx: `kubectl get pods -l app=nginx`.
* Get pods for app=nginx and env=prod: `kubectl get pods -l app=nginx -l env=prod`.

* Add a label `tier=frontend` to the dev pod: `kubectl label pods nginx-dev tier=frontend`.
* List pods having the new label: `kubectl get pods -l tier=frontend`.
* Add a label `tier=frontend` to the nginx pods: `kubectl label pods -l app=nginx tier=frontend`.

* Delete pods: `kubectl delete pods -l app=nginx`
