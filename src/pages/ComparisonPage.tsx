import { AlertTriangle, ArrowDown, Bot, CheckCircle2, UserRound } from 'lucide-react'
import { useState } from 'react'
import { PageShell } from '../components/PageShell'
import { usePageMeta } from '../hooks/usePageMeta'

const comparison = [
  ['Deployment', 'Engineer designs and runs pipeline', 'AI drafts risk-aware rollout; controlled pipeline executes'],
  ['Monitoring', 'Static dashboards and threshold alerts', 'Signal correlation, summaries, and adaptive investigation'],
  ['Troubleshooting', 'Engineer queries tools manually', 'Agent gathers bounded evidence and proposes next tests'],
  ['Incident response', 'Human coordinates every diagnostic step', 'AI prepares context while humans command and decide'],
  ['Log analysis', 'Keyword queries and manual sampling', 'Clustering, semantic search, and cited explanations'],
  ['Root cause analysis', 'Manual timeline and hypothesis review', 'Ranked hypotheses with evidence and counter-evidence'],
  ['Capacity planning', 'Dashboard trends and spreadsheet models', 'Forecast-assisted scenarios with explicit uncertainty'],
  ['Security', 'Rules, scans, and expert review', 'AI explains findings; policy remains authoritative'],
  ['Documentation', 'Manual updates after changes', 'Drafted from diffs and verified by owners'],
  ['Infrastructure automation', 'Scripts and declarative tools', 'AI proposes plans; IaC and policy execute'],
  ['GitOps', 'Humans review and merge declarative changes', 'Agents enrich PRs with context, risk, and verification'],
  ['Kubernetes operations', 'kubectl, dashboards, and runbooks', 'Typed cluster tools, RAG, and bounded agent workflows'],
]

const traditionalFlow = ['Alert', 'Engineer checks dashboard', 'Engineer checks logs', 'Engineer runs kubectl', 'Engineer finds root cause', 'Engineer applies fix']
const aiFlow = ['Alert', 'Observability agent', 'Log + Kubernetes context', 'RAG knowledge retrieval', 'RCA hypotheses', 'Suggested remediation', 'Human approval', 'Deterministic execution', 'Verification']

export default function ComparisonPage() {
  const [mode, setMode] = useState<'matrix' | 'workflow'>('matrix')
  usePageMeta('DevOps vs AI DevOps', 'Compare traditional operations with grounded, human-controlled AI DevOps workflows.')
  return <PageShell eyebrow="Role evolution" title="DevOps vs AI DevOps" description="The foundation does not disappear. AI changes how engineers gather context, form plans, and supervise automation."><section className="container-shell section-pad"><div className="mb-8 inline-flex rounded-lg border border-[var(--line)] bg-[var(--surface)] p-1" role="group" aria-label="Comparison view"><button className={`rounded-md px-4 py-2 text-sm font-bold ${mode === 'matrix' ? 'bg-[var(--surface-soft)]' : ''}`} onClick={() => setMode('matrix')}>Capability matrix</button><button className={`rounded-md px-4 py-2 text-sm font-bold ${mode === 'workflow' ? 'bg-[var(--surface-soft)]' : ''}`} onClick={() => setMode('workflow')}>Incident workflow</button></div>
  {mode === 'matrix' ? <div className="overflow-x-auto rounded-2xl border border-[var(--line)]"><table className="w-full min-w-[760px] border-collapse text-left"><thead><tr className="bg-[var(--navy)] text-white"><th className="p-4 text-xs uppercase tracking-wider">Capability</th><th className="p-4 text-xs uppercase tracking-wider">Traditional DevOps</th><th className="p-4 text-xs uppercase tracking-wider text-emerald-300">AI DevOps extension</th></tr></thead><tbody>{comparison.map(([area, traditional, ai], index) => <tr key={area} className={index % 2 ? 'bg-[var(--surface-soft)]' : 'bg-[var(--surface)]'}><th className="p-4 text-sm">{area}</th><td className="p-4 text-sm text-[var(--muted)]">{traditional}</td><td className="p-4 text-sm">{ai}</td></tr>)}</tbody></table></div> : <div className="grid gap-8 lg:grid-cols-2"><Workflow title="Traditional DevOps" icon={<UserRound />} steps={traditionalFlow} tone="neutral" /><Workflow title="AI DevOps" icon={<Bot />} steps={aiFlow} tone="accent" /></div>}
  <div className="mt-10 grid gap-4 md:grid-cols-3"><div className="panel p-6"><AlertTriangle className="text-amber-500" /><h2 className="mt-4 font-bold">What AI should not do</h2><p className="muted mt-2 text-sm leading-6">Invent state, hide uncertainty, bypass controls, or execute unrestricted model-generated shell.</p></div><div className="panel p-6"><Bot className="text-[var(--accent-dark)]" /><h2 className="mt-4 font-bold">What AI should do</h2><p className="muted mt-2 text-sm leading-6">Retrieve evidence, correlate signals, explain options, and draft inspectable plans.</p></div><div className="panel p-6"><CheckCircle2 className="text-[var(--accent-dark)]" /><h2 className="mt-4 font-bold">What remains authoritative</h2><p className="muted mt-2 text-sm leading-6">Humans, policy engines, typed tools, delivery controls, telemetry, verification, and rollback.</p></div></div></section></PageShell>
}

function Workflow({ title, icon, steps, tone }: { title: string; icon: React.ReactNode; steps: string[]; tone: 'neutral' | 'accent' }) {
  return <div className={`rounded-2xl border p-6 ${tone === 'accent' ? 'border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] bg-[color-mix(in_srgb,var(--accent)_6%,var(--surface))]' : 'border-[var(--line)] bg-[var(--surface)]'}`}><div className="flex items-center gap-3"><span className={tone === 'accent' ? 'text-[var(--accent-dark)]' : 'text-[var(--muted)]'}>{icon}</span><h2 className="title-md">{title}</h2></div><div className="mt-8">{steps.map((step, index) => <div key={step}><div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3 text-sm font-semibold">{step}</div>{index < steps.length - 1 && <ArrowDown className="mx-auto my-2 text-[var(--muted)]" size={16} />}</div>)}</div></div>
}
