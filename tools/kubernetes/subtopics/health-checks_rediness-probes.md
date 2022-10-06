# Health Checks

- Run 2 different type of health checks
  - Running a command in the container periodically
  - Periodic checks on a URL (HTTP)

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 15
  timeoutSeconds: 30
```

# Readiness Probe

- Used to check if pod is ready to serve

```yaml
readinessProbe:
  httpGet:
    path: /isReady
    port: 3000
  initialDelaySeconds: 15
  timeoutSeconds: 30
```