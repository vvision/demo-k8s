# ConfigMaps demo


## ConfigMaps - env (Part 1)

* Create the ConfigMap with: `kubectl apply -f demo-configmap.yaml`.
* List the configMaps: `kubectl get configmaps`.
* Display the content of the configMap: `kubectl describe demo-configmap`.
* Deploy a pod referencing the configMap demo-configmap: `kubectl apply -f demo-configmap-pod.yaml`.
* Connect into the pod to look at the env: `kubectl exec --stdin --tty demo-configmap -- /bin/sh`, followed by: `env`.

* Modify the value of COLOR in the configMap (`kubectl edit configmap demo-configmap`).
* Check the configuration of the pod and verify that the value of COLOR has not changed.
  (Because the pod consumes the configmap through its env variables.)

## ConfigMaps - volume (Part 2)

* Create the ConfigMap with: `kubectl apply -f part2/demo-configmap-nginx.yaml`.
* List the configMaps: `kubectl get configmaps`.
* Display the content of the configMap: `kubectl describe nginx-conf`.
* Deploy a pod referencing the configMap: `kubectl apply -f part2/demo-cm-nginx-pod.yaml`.
* Connect into the pod to look at the env: `kubectl exec --stdin --tty demo-cm-nginx -- /bin/sh`, followed by: `env`.


## Misc

* Enable port forward to the pod: `kubectl port-forward pods/demo-configmap --address 0.0.0.0 8989:80`
  * VM port 8989 to Pod port 80.
* In your browser, provider the VM also forward port 8989 to the same port on the host, open: `http://127.0.0.1:8989`
