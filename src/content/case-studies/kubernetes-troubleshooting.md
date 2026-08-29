---
title: AI-assisted Kubernetes troubleshooting
slug: kubernetes-troubleshooting
category: Kubernetes
---

## Engineering notes

The assistant begins with a pinned cluster, namespace, and workload. Every tool response carries a timestamp and source. It may request a maximum of three additional read operations before producing hypotheses.

The strongest implementation detail is separation: evidence collection is deterministic, interpretation is probabilistic, and mutation is absent from the triage identity.
