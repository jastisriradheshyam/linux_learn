# Stateful Sets

- Initially called Pet Sets in v1.3, changed to StatefulSets and made stable in v1.9
- Pod name has postfix numbers (an index) to have deterministic pods with state and volumes attached to it will also be deterministic.
  - index start with 0 to n-1
  - Also allows DNS resolution deterministic as other services can find the pod by the deterministic pod name.
  - scaling goes from 0 to n-1
  - teardown or scaledown will start from n-1 to 0
