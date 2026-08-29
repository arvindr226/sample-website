import type { Difficulty, RoadmapStage, RoadmapTopic } from '../types/content'

const topic = (
  id: string,
  title: string,
  description: string,
  whyItMatters: string,
  difficulty: Difficulty,
  effort: string,
  prerequisites: string[] = [],
  resources: string[] = ['Official documentation', 'Build a focused hands-on lab'],
  relatedBlogs: string[] = ['devops-to-ai-devops-roadmap'],
  relatedDiscussions: string[] = ['which-skill-matters-most-after-kubernetes'],
): RoadmapTopic => ({ id, title, description, whyItMatters, difficulty, effort, prerequisites, resources, relatedBlogs, relatedDiscussions })

export const roadmap: RoadmapStage[] = [
  {
    id: 'foundations', number: 1, title: 'DevOps Foundations', outcome: 'Operate modern systems confidently before adding an AI reasoning layer.',
    topics: [
      topic('linux', 'Linux', 'Processes, filesystems, permissions, services, and shell diagnostics.', 'Agents need the same trustworthy operating context as engineers.', 'Beginner', '25–35 hours'),
      topic('networking', 'Networking', 'DNS, HTTP, TLS, routing, load balancing, and connection failure modes.', 'Many “AI” incidents are still ordinary network failures.', 'Intermediate', '20–30 hours', ['Linux']),
      topic('git', 'Git', 'Branching, history, reviews, conflict resolution, and signed changes.', 'Git becomes the auditable boundary for AI-proposed changes.', 'Beginner', '10–15 hours'),
      topic('docker', 'Docker', 'Images, layers, registries, containers, networking, and runtime security.', 'AI services still require reproducible packaging and constrained execution.', 'Beginner', '20–30 hours', ['Linux']),
      topic('cicd', 'CI/CD', 'Build, test, scan, release, deployment, rollback, and evidence capture.', 'Agent output must pass deterministic delivery gates.', 'Intermediate', '25–40 hours', ['Git', 'Docker']),
      topic('cloud', 'Cloud', 'Identity, compute, storage, networks, managed services, and cost boundaries.', 'Safe AI operations depend on resource and permission literacy.', 'Intermediate', '40–60 hours', ['Networking']),
      topic('iac', 'Infrastructure as Code', 'Declarative infrastructure, state, plans, modules, and policy checks.', 'Plans provide a reviewable artifact between AI intent and infrastructure change.', 'Intermediate', '30–45 hours', ['Git', 'Cloud']),
    ],
  },
  {
    id: 'platform', number: 2, title: 'Kubernetes & Platform Engineering', outcome: 'Build a reliable platform interface that AI workflows can inspect safely.',
    topics: [
      topic('kubernetes', 'Kubernetes', 'Workloads, scheduling, services, storage, RBAC, and troubleshooting.', 'Kubernetes is a rich operational control plane for read-only diagnosis and bounded action.', 'Intermediate', '60–90 hours', ['Docker', 'Networking'], ['Kubernetes documentation', 'Local cluster failure labs'], ['agentic-ai-kubernetes'], ['ai-agents-production-kubernetes-access']),
      topic('helm', 'Helm', 'Template, package, test, and version Kubernetes applications.', 'Rendered manifests are a deterministic validation point for AI-assisted review.', 'Intermediate', '15–25 hours', ['Kubernetes']),
      topic('argocd', 'Argo CD', 'Reconcile declared Git state into clusters with health and drift visibility.', 'GitOps keeps AI-suggested changes reviewable, reversible, and observable.', 'Intermediate', '20–30 hours', ['Git', 'Kubernetes']),
      topic('gitops', 'GitOps', 'Use pull requests, reconciliation, policy, and rollback as an operations model.', 'It provides a safer execution boundary than free-form shell access.', 'Intermediate', '20–30 hours', ['Git', 'Kubernetes']),
      topic('operators', 'Operators', 'Encode lifecycle knowledge through controllers and custom resources.', 'Reliable automation turns repeated reasoning into deterministic control loops.', 'Advanced', '35–50 hours', ['Kubernetes', 'Go or Python']),
      topic('observability', 'Observability', 'Correlate metrics, logs, traces, events, SLOs, and change history.', 'High-quality context is the raw material for useful AIOps.', 'Intermediate', '35–50 hours', ['Kubernetes']),
    ],
  },
  {
    id: 'programming', number: 3, title: 'Programming & Integration', outcome: 'Turn operational intent into testable, typed, maintainable integrations.',
    topics: [
      topic('python', 'Python', 'Write modules, tests, async tasks, validation, and API clients.', 'Python is the shortest path to AI tools, retrieval pipelines, and automation glue.', 'Beginner', '45–70 hours', ['Basic scripting'], ['Python documentation', 'Build a typed CLI'], ['devops-to-ai-devops-roadmap'], ['is-python-mandatory-ai-devops']),
      topic('go', 'Go', 'Build reliable binaries and Kubernetes-native controllers.', 'Go is valuable where performance, portability, and platform integration matter.', 'Intermediate', '50–80 hours', ['Programming basics']),
      topic('rest', 'REST APIs', 'Understand HTTP methods, authentication, pagination, retries, and errors.', 'Tool calling is usually an API integration with stronger schemas.', 'Beginner', '12–18 hours', ['Networking']),
      topic('json', 'JSON', 'Model and validate structured data with explicit schemas.', 'Structured AI output must be machine-checkable before it can drive workflows.', 'Beginner', '6–10 hours'),
      topic('yaml', 'YAML', 'Author configuration safely and recognize coercion and templating risks.', 'Most platform plans eventually become configuration changes.', 'Beginner', '6–10 hours'),
      topic('data-processing', 'Data Processing', 'Normalize, filter, aggregate, and enrich operational data.', 'Retrieved context is useful only after careful transformation and metadata handling.', 'Intermediate', '20–30 hours', ['Python']),
    ],
  },
  {
    id: 'ai-fundamentals', number: 4, title: 'AI Fundamentals', outcome: 'Understand model capabilities, limitations, costs, and control surfaces.',
    topics: [
      topic('ai-basics', 'Artificial Intelligence Basics', 'Separate rules, statistical models, generative models, and agents.', 'Clear mental models prevent hype-driven architecture.', 'Beginner', '8–12 hours'),
      topic('ml-basics', 'Machine Learning Basics', 'Learn training, inference, features, evaluation, drift, and uncertainty.', 'You need vocabulary and evaluation sense—not necessarily model training expertise.', 'Beginner', '12–18 hours'),
      topic('llms', 'Large Language Models', 'Understand generation, sampling, instruction following, and failure modes.', 'LLMs provide reasoning-like synthesis but are not sources of operational truth.', 'Beginner', '15–25 hours', ['AI basics'], ['Model provider documentation', 'Compare prompts on a local model'], ['what-is-ai-devops'], ['does-devops-need-machine-learning']),
      topic('tokens', 'Tokens', 'Understand tokenization, limits, latency, and cost implications.', 'Operational context must fit a bounded, expensive attention budget.', 'Beginner', '4–6 hours', ['LLMs']),
      topic('context-windows', 'Context Windows', 'Design context selection instead of dumping entire systems into a prompt.', 'Relevant context beats more context and reduces risk.', 'Intermediate', '6–10 hours', ['Tokens']),
      topic('prompting', 'Prompt Engineering', 'Specify roles, constraints, evidence, uncertainty, and response contracts.', 'Prompts are interface design for probabilistic components.', 'Beginner', '12–20 hours', ['LLMs']),
      topic('structured-output', 'Structured Output', 'Constrain model responses to typed, validated schemas.', 'Machine actions should never depend on parsing casual prose.', 'Intermediate', '8–12 hours', ['JSON', 'Prompt engineering']),
      topic('function-calling', 'Function Calling', 'Expose narrow tools with explicit parameters and error handling.', 'Tool contracts create the boundary between model reasoning and real operations.', 'Intermediate', '12–18 hours', ['REST APIs', 'Structured output']),
    ],
  },
  {
    id: 'retrieval', number: 5, title: 'Embeddings & Vector Search', outcome: 'Retrieve relevant operational knowledge by meaning, metadata, and exact terms.',
    topics: [
      topic('embeddings', 'Embeddings', 'Represent text and other data as vectors that preserve useful semantic relationships.', 'They connect incident language with relevant runbooks and prior fixes.', 'Intermediate', '15–20 hours', ['LLMs', 'Python'], ['Embedding model documentation', 'Build a runbook similarity search'], ['embeddings-for-devops'], ['rag-vs-fine-tuning-infrastructure']),
      topic('vector-databases', 'Vector Databases', 'Store vectors with metadata, filtering, indexing, and lifecycle controls.', 'Operational retrieval needs access boundaries, freshness, and traceability.', 'Intermediate', '15–25 hours', ['Embeddings']),
      topic('semantic-search', 'Semantic Search', 'Retrieve conceptually related content even when keywords differ.', 'Incident descriptions rarely match runbook language exactly.', 'Intermediate', '10–15 hours', ['Embeddings']),
      topic('hybrid-search', 'Hybrid Search', 'Combine lexical matches, vectors, and metadata constraints.', 'Exact resource names and semantic symptoms both matter in operations.', 'Advanced', '12–18 hours', ['Semantic search']),
      topic('reranking', 'Reranking', 'Re-score initial results using a stronger relevance model.', 'Better evidence ordering reduces distraction and unsupported conclusions.', 'Advanced', '10–15 hours', ['Semantic search']),
    ],
  },
  {
    id: 'rag', number: 6, title: 'Retrieval-Augmented Generation', outcome: 'Ground AI answers in current, permitted, citable operational evidence.',
    topics: [
      topic('ingestion', 'Document Ingestion', 'Load runbooks, incidents, dashboards, repositories, and change records.', 'RAG quality begins with trustworthy sources and ownership.', 'Intermediate', '12–18 hours', ['Python']),
      topic('chunking', 'Chunking', 'Split content along semantic and operational boundaries.', 'Bad chunks separate symptoms, commands, caveats, and outcomes.', 'Intermediate', '8–12 hours', ['Document ingestion']),
      topic('rag-embedding', 'Embedding Pipeline', 'Embed chunks consistently while preserving source metadata.', 'Repeatability and lineage matter when knowledge changes.', 'Intermediate', '10–15 hours', ['Embeddings', 'Chunking']),
      topic('retrieval', 'Retrieval', 'Select evidence using queries, filters, permissions, and recency.', 'The model can only reason over the evidence it receives.', 'Intermediate', '12–18 hours', ['Semantic search']),
      topic('rag-reranking', 'Reranking for RAG', 'Prioritize the most diagnostic evidence before generation.', 'It improves signal within limited context windows.', 'Advanced', '8–12 hours', ['Reranking']),
      topic('grounding', 'Grounding', 'Require answers and plans to stay within retrieved evidence.', 'Grounding reduces unsupported operational claims.', 'Intermediate', '8–12 hours', ['Retrieval', 'Prompt engineering']),
      topic('citations', 'Citations', 'Attach each claim to a source, timestamp, and scope.', 'Engineers need to verify evidence before approving action.', 'Intermediate', '6–10 hours', ['Grounding']),
      topic('knowledge-graphs', 'Knowledge Graph Concepts', 'Model relationships among services, owners, dependencies, and changes.', 'Dependency context improves blast-radius reasoning.', 'Advanced', '15–25 hours', ['Data processing']),
    ],
  },
  {
    id: 'agents', number: 7, title: 'Agentic AI', outcome: 'Design bounded workflows that plan, use tools, preserve state, and request approval.',
    topics: [
      topic('agents', 'AI Agents', 'Combine a model, instructions, state, tools, and termination conditions.', 'Agents turn one response into a controlled multi-step workflow.', 'Intermediate', '15–25 hours', ['LLMs', 'Function calling'], ['Framework documentation', 'Build a read-only triage agent'], ['agentic-ai-kubernetes'], ['is-agentic-ai-next-devops-evolution']),
      topic('planning', 'Planning', 'Decompose goals into inspectable steps with assumptions and exit criteria.', 'Plans provide the artifact that policy and humans can review.', 'Advanced', '12–18 hours', ['AI Agents']),
      topic('tool-calling', 'Tool Calling', 'Invoke allow-listed tools with typed inputs and explicit permissions.', 'Narrow tools are safer than unrestricted shell generation.', 'Intermediate', '15–25 hours', ['Function calling']),
      topic('memory', 'Agent Memory', 'Persist task state, evidence, decisions, and outcomes with lifecycle rules.', 'Memory enables continuity but must avoid stale or sensitive context.', 'Advanced', '15–25 hours', ['RAG', 'AI Agents']),
      topic('multi-agent', 'Multi-Agent Systems', 'Coordinate specialized roles with explicit handoffs and shared evidence.', 'Specialization can improve clarity, but adds failure and coordination modes.', 'Advanced', '20–30 hours', ['AI Agents', 'Planning']),
      topic('langgraph', 'LangGraph', 'Model stateful, inspectable agent workflows as graphs.', 'Graphs make approval, retry, rollback, and termination explicit.', 'Advanced', '20–30 hours', ['Python', 'AI Agents']),
      topic('hitl', 'Human in the Loop', 'Pause at risk boundaries for informed review and approval.', 'Accountability cannot be delegated to a probabilistic model.', 'Intermediate', '10–15 hours', ['Planning'], ['Safety patterns', 'Build an approval checkpoint'], ['human-in-the-loop-production'], ['should-ai-auto-remediate-incidents']),
      topic('mcp', 'Model Context Protocol', 'Expose contextual tools and resources through a standard integration boundary.', 'MCP can reduce bespoke connector work while keeping capabilities explicit.', 'Intermediate', '10–16 hours', ['Tool calling']),
    ],
  },
  {
    id: 'ai-devops', number: 8, title: 'Applied AI DevOps', outcome: 'Apply grounded reasoning to real operational workflows with measurable safeguards.',
    topics: [
      topic('k8s-agent', 'Kubernetes AI Agents', 'Correlate cluster objects and diagnostics through read-first tools.', 'Cluster context makes generic suggestions operationally relevant.', 'Advanced', '30–45 hours', ['Kubernetes', 'AI Agents'], ['Kubernetes API', 'Read-only incident lab'], ['building-first-kubernetes-ai-agent'], ['ai-agents-production-kubernetes-access']),
      topic('log-analysis', 'AI Log Analysis', 'Cluster symptoms, explain patterns, and link evidence across services.', 'AI can accelerate sense-making across noisy high-volume data.', 'Advanced', '20–30 hours', ['Observability', 'RAG']),
      topic('ai-rca', 'AI Root Cause Analysis', 'Build evidence-backed causal hypotheses and rank uncertainty.', 'RCA is synthesis, not just summarization, and needs verification.', 'Advanced', '25–40 hours', ['Observability', 'RAG'], ['Incident datasets', 'Hypothesis evaluation'], ['ai-powered-root-cause-analysis'], ['can-llms-reliably-kubernetes-rca']),
      topic('deployment-planner', 'AI Deployment Planner', 'Assess changes, dependencies, risk, rollout strategy, and rollback conditions.', 'Change planning is a valuable low-autonomy, high-leverage use case.', 'Advanced', '25–35 hours', ['CI/CD', 'Planning']),
      topic('runbook-assistant', 'AI Runbook Assistant', 'Retrieve, explain, and adapt procedures to current context.', 'It shortens discovery time while keeping source instructions visible.', 'Intermediate', '20–30 hours', ['RAG']),
      topic('gitops-intelligence', 'GitOps Intelligence', 'Review diffs, drift, policy, and rollout evidence in a Git-centered workflow.', 'Pull requests preserve human control and auditability.', 'Advanced', '20–30 hours', ['GitOps', 'Tool calling']),
      topic('config-analysis', 'Configuration Analysis', 'Find inconsistencies, risky defaults, and context-specific problems.', 'Configuration review is bounded, inspectable, and easy to validate.', 'Intermediate', '15–25 hours', ['YAML', 'Kubernetes']),
      topic('security-review', 'AI Security Review', 'Augment threat modeling and configuration review with evidence and policy.', 'AI can broaden review coverage but should never be the only control.', 'Advanced', '20–30 hours', ['Cloud', 'Security fundamentals']),
    ],
  },
  {
    id: 'advanced', number: 9, title: 'Advanced AI DevOps', outcome: 'Build operationally accountable systems that learn without silently expanding authority.',
    topics: [
      topic('operational-memory', 'Operational Memory', 'Store incidents, hypotheses, decisions, approvals, changes, and verified outcomes.', 'Structured memory helps future reasoning without pretending every past action was correct.', 'Advanced', '25–40 hours', ['RAG', 'Agent memory'], ['Memory lifecycle design', 'Incident outcome schema'], ['operational-memory-ai-devops']),
      topic('predictive-ops', 'Predictive Operations', 'Use trends and signals to anticipate capacity, reliability, and change risk.', 'Prediction can create decision lead time when calibrated carefully.', 'Advanced', '30–50 hours', ['Observability', 'ML basics']),
      topic('self-healing', 'Self-Healing Concepts', 'Automate narrow, reversible responses to well-understood conditions.', 'Safe self-healing is bounded control engineering, not general autonomy.', 'Advanced', '25–40 hours', ['Operators', 'AI Safety']),
      topic('policy-engines', 'Policy Engines', 'Evaluate identity, action, resource, environment, and risk before execution.', 'Policy converts safety intent into deterministic enforcement.', 'Advanced', '20–30 hours', ['GitOps', 'Security fundamentals']),
      topic('approval-workflows', 'Approval Workflows', 'Route plans to accountable reviewers with evidence and expiry.', 'Approval must be informed, scoped, and auditable—not a ceremonial click.', 'Advanced', '15–25 hours', ['Human in the loop']),
      topic('verification-engines', 'Verification Engines', 'Test expected state and rollback after every operational action.', 'Execution success is not proof that the system recovered.', 'Advanced', '20–30 hours', ['Observability', 'CI/CD']),
      topic('remediation-safety', 'Autonomous Remediation Safety', 'Constrain blast radius, rate, identity, scope, rollback, and termination.', 'Autonomy is acceptable only where failure is bounded and recoverable.', 'Advanced', '30–45 hours', ['Policy engines', 'Verification engines']),
    ],
  },
]

export const allRoadmapTopics = roadmap.flatMap(stage => stage.topics.map(item => ({ ...item, stage: stage.title })))
