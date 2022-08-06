# Ingress

- kind: `Ingress`

## Nginx Based annotations

- `kubernetes.io/ingress.class: "nginx"`
- `nginx.ingress.kubernetes.io/use-regex: "true"`
- 
  ```conf
  nginx.ingress.kubernetes.io/server-snippet: |
    proxy_intercept_errors on;
    error_page 404 = @custom_404;
      
    location @custom_404 {
      proxy_set_header X-Code $status;
      return 404 'Hey, resource not found!';
    }
  ```

- https://www.callumpember.com/Easy-Kubernetes-Nginx-Ingress-Custom-Error-Pages/