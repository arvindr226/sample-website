export interface AssessmentQuestion { id: string; category: string; question: string; recommendation: string }

export const assessmentQuestions: AssessmentQuestion[] = [
  { id: 'linux-1', category: 'DevOps Fundamentals', question: 'Can you diagnose Linux process, memory, disk, and service failures without a runbook?', recommendation: 'Practice Linux failure labs and evidence collection.' },
  { id: 'net-1', category: 'DevOps Fundamentals', question: 'Can you trace DNS, TLS, routing, and load-balancer failures?', recommendation: 'Strengthen network troubleshooting from client to service.' },
  { id: 'docker-1', category: 'DevOps Fundamentals', question: 'Can you build secure, reproducible container images and debug runtime failures?', recommendation: 'Review image layers, security, and container diagnostics.' },
  { id: 'cloud-1', category: 'DevOps Fundamentals', question: 'Can you reason about cloud identity, networking, compute, and cost boundaries?', recommendation: 'Build one small cloud platform with least privilege.' },
  { id: 'cicd-1', category: 'DevOps Fundamentals', question: 'Can you design a pipeline with tests, policy, rollback, and release evidence?', recommendation: 'Add deterministic gates and rollback to a delivery pipeline.' },
  { id: 'k8s-1', category: 'Kubernetes & Platform', question: 'Can you diagnose scheduling, networking, storage, and workload health in Kubernetes?', recommendation: 'Work through Kubernetes failure scenarios.' },
  { id: 'helm-1', category: 'Kubernetes & Platform', question: 'Can you render, test, diff, and debug Helm releases?', recommendation: 'Practice values layering and rendered-manifest validation.' },
  { id: 'gitops-1', category: 'Kubernetes & Platform', question: 'Can you explain reconciliation, drift, promotion, and rollback in GitOps?', recommendation: 'Deploy an app through a pull-request-based GitOps flow.' },
  { id: 'obs-1', category: 'Kubernetes & Platform', question: 'Can you correlate logs, metrics, traces, events, and recent changes?', recommendation: 'Create a cross-signal incident timeline.' },
  { id: 'rbac-1', category: 'Kubernetes & Platform', question: 'Can you design least-privilege RBAC for an automation identity?', recommendation: 'Design read-only and task-scoped Kubernetes roles.' },
  { id: 'python-1', category: 'Programming', question: 'Can you write a typed Python module with tests and error handling?', recommendation: 'Build a typed Python CLI with unit tests.' },
  { id: 'api-1', category: 'Programming', question: 'Can you integrate REST APIs with authentication, retries, timeouts, and pagination?', recommendation: 'Build a resilient API client.' },
  { id: 'schema-1', category: 'Programming', question: 'Can you validate JSON inputs and outputs against a schema?', recommendation: 'Practice schema validation for automation contracts.' },
  { id: 'llm-1', category: 'AI Fundamentals', question: 'Can you explain tokens, context windows, sampling, and hallucination?', recommendation: 'Learn LLM inference behavior and limitations.' },
  { id: 'prompt-1', category: 'AI Fundamentals', question: 'Can you prompt for evidence, constraints, uncertainty, and structured output?', recommendation: 'Design prompts as explicit probabilistic interfaces.' },
  { id: 'eval-1', category: 'AI Fundamentals', question: 'Can you evaluate an LLM workflow with repeatable test cases?', recommendation: 'Create a small golden dataset and score outputs.' },
  { id: 'embed-1', category: 'RAG', question: 'Can you explain embeddings and semantic similarity?', recommendation: 'Build a semantic runbook search lab.' },
  { id: 'retrieval-1', category: 'RAG', question: 'Can you compare lexical, vector, hybrid search, and reranking?', recommendation: 'Compare retrieval strategies on the same incident set.' },
  { id: 'rag-1', category: 'RAG', question: 'Can you build ingestion, chunking, retrieval, grounding, and citations?', recommendation: 'Build a cited runbook assistant.' },
  { id: 'rag-eval-1', category: 'RAG', question: 'Can you measure retrieval relevance and answer groundedness?', recommendation: 'Evaluate retrieval and generation separately.' },
  { id: 'agent-1', category: 'Agentic AI', question: 'Can you describe an agent as state, tools, policy, and termination?', recommendation: 'Build a bounded read-only agent workflow.' },
  { id: 'tool-1', category: 'Agentic AI', question: 'Can you expose narrow typed tools instead of unrestricted shell access?', recommendation: 'Replace a shell prompt with typed tool contracts.' },
  { id: 'graph-1', category: 'Agentic AI', question: 'Can you model retries, approval, rollback, and stop conditions?', recommendation: 'Implement a state graph with explicit checkpoints.' },
  { id: 'safety-1', category: 'AI Safety', question: 'Can you threat-model prompt injection, privilege, and data leakage?', recommendation: 'Threat-model an AI operations workflow.' },
  { id: 'hitl-1', category: 'AI Safety', question: 'Can you design informed human approval and post-action verification?', recommendation: 'Add evidence, expiry, rollback, and verification to approval.' },
]

export const responseOptions = [
  { label: 'Not yet', value: 0, help: 'I cannot do this independently.' },
  { label: 'Somewhat', value: 1, help: 'I understand it or can do it with guidance.' },
  { label: 'Confident', value: 2, help: 'I can do and explain this independently.' },
]
