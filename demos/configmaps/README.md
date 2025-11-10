# env vars demo


## Environment variables

* Run a pod using the image of the app from the directory `app`: `kubectl run demo-app --image="ghcr.io/vvision/demo-k8s:main" --port 3000`
* Curl the ip:port of the pod to check.
* See what the yaml file looks like: `kubectl run demo-app --image="ghcr.io/vvision/demo-k8s:main" --port 3000 --dry-run=client -o yaml > demo-app-pod.yaml`
* Deploy demo-app-pod: `kubectl apply -f demo-app-pod.yaml`.
* Curl the ip of the pod to check that port changed and background color too.


## Misc

* Enable port forward to the pod: `kubectl port-forward pods/demo-app --address 0.0.0.0 8989:80`
  * VM port 8989 to Pod port 80.
* In your browser, provider the VM also forward port 8989 to the same port on the host, open: `http://127.0.0.1:8989`
