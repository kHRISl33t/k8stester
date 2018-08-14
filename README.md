Sample app to test out simple things in a k8s cluster.

# Usage

```
npm run deploy-app
# deploys the sample app
npm run create-service
# create a service for it with LoadBalancer (external IP)
kubectl get svc | grep k8stester-service
```

# Available endpoints

- /
- /test