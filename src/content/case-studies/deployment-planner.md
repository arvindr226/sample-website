---
title: AI deployment planner
slug: deployment-planner
category: Delivery
---

## Engineering notes

The planner consumes immutable diff, service catalog, policy, ownership, and recent incident artifacts. Its output is a typed plan with risk claims, rollout stages, rollback thresholds, and missing evidence.

It cannot deploy. The pull request remains the review boundary and the reconciler remains the execution mechanism.
