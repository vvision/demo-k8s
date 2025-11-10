# secrets demo


## Secrets

* Convert the secret string to base64: `echo -n 'securedpassword' | base64`.
* Add the secret to the secret definition file if needed.
* Deploy the secret: `kubectl apply -f my-secret.yaml`.

* Create a secret from the command line: `kubectl create secret generic my-api-key --from-literal=api-key='super-secret-api-key'`.
* List secrets: `kubectl get secrets`.

* Deploy the pod that consumes the secrets: `kubectl apply -f secret-pod.yaml`.
* Connect into the pod to explore the secrets: `kubectl exec --stdin --tty secret-pod -- /bin/sh`
* Check for secret file: `ls /etc/secret-volume/` and print secret: `cat /etc/secret-volume/api-key`.
* Verify that the database password is available in env with: `env`.
