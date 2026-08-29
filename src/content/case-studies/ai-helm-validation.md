---
title: AI-assisted Helm validation
slug: ai-helm-validation
category: Kubernetes
---

## Engineering notes

Both chart states are rendered before analysis. Schema validation, policy scanning, and manifest diff run deterministically; the model explains their operational meaning and identifies review questions.

The reviewer always retains access to the complete rendered artifacts rather than only an AI summary.
