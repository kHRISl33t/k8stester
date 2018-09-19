Sample app to test out simple things in a k8s cluster.

# Usage

```
# deploy the sample app
$ npm run deploy-app
# create a service for the deployment with type ClusterIP (internal IP)
$ npm run create-internal-service
# create a service for the deployment with type LoadBalancer (external IP)
$ npm run create-external-service

kubectl get svc | grep k8stester-service
```

# Available endpoints

- /
- /test
- /health
- /healthz