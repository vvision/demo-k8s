# namespaces demo



## Part 1

Namespace discovery.

* List namespaces in the cluster: `kubectl get namespaces`.
* List pods in the kube-system: `kubectl get pods --namespace kube-system`.
* List all resources in the kube-system namespace: `kubectl get all --namespace kube-system`.
* Create some namespaces:
  * `kubetcl create ns demo`
  * `kubetcl create ns prod`
* Verify the new namespaces are available.
* List namespaced resources: `kubetcl api-resources --namespaced=true`
* Change current namespace: `kubectl config set-context --current --namespace=kube-system`
* List pods without namespace argument to verify we are not in `default` anymore: `kubectl get pods`
* Verify changes in config: `cat ~/.kube/config`.
* Back to default namespace: `kubectl config set-context --current --namespace=default`

## Part 2

Namespaced ressources.
