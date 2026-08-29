import { ArrowDown, Ban, Check, ShieldCheck } from 'lucide-react'
import { PageShell } from '../components/PageShell'
import { usePageMeta } from '../hooks/usePageMeta'

const components = [
  ['Human', 'Defines intent, risk tolerance, and accountability.'],
  ['AI DevOps Assistant', 'Creates the conversational and workflow entry point.'],
  ['Intent Understanding', 'Converts language into a scoped, validated operational goal.'],
  ['Knowledge Retrieval / RAG', 'Finds permitted runbooks, changes, ownership, and prior incidents with citations.'],
  ['Planner Agent', 'Produces an inspectable sequence, assumptions, rollback, and verification criteria.'],
  ['Specialized Agents', 'Use narrow Kubernetes, observability, security, and GitOps tools.'],
  ['Policy + Risk', 'Deterministically checks identity, action, resource, scope, and blast radius.'],
  ['Human Approval', 'An accountable reviewer approves an immutable plan with evidence.'],
  ['Deterministic Tools', 'Typed APIs, GitOps, controllers, and runbooks perform exact side effects.'],
  ['Infrastructure', 'Kubernetes, cloud, and delivery systems receive controlled changes.'],
  ['Verification', 'Independent telemetry proves recovery or triggers rollback.'],
  ['Operational Memory', 'Stores evidence, decisions, approvals, and verified outcomes with lifecycle controls.'],
]

export default function ArchitecturePage() {
  usePageMeta('AI DevOps Architecture', 'A production-safe architecture for grounded reasoning, specialist agents, policy, approval, deterministic action, and verification.')
  return <PageShell eyebrow="Reference architecture" title="AI reasons. Controlled systems act." description="The safest AI DevOps architecture separates probabilistic interpretation from deterministic authority."><section className="container-shell section-pad"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div className="lg:sticky lg:top-24 lg:self-start"><p className="eyebrow">Core flow</p><h2 className="title-md mt-3">From human intent to verified outcome</h2><p className="muted mt-4 leading-7">Every boundary narrows uncertainty or authority. The model never receives a standing, unrestricted production shell.</p><div className="mt-7 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4"><p className="flex items-center gap-2 font-bold"><Ban size={18} className="text-amber-600" /> Avoid unrestricted execution</p><p className="muted mt-2 text-sm leading-6">Generated shell combines plan, target, identity, and side effect in text. Replace it with typed tool contracts and policy.</p></div></div><div>{components.map(([name, description], index) => <div key={name}><article className={`grid gap-3 rounded-xl border p-5 sm:grid-cols-[2.5rem_1fr] ${['Human Approval', 'Policy + Risk', 'Verification'].includes(name) ? 'border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] bg-[color-mix(in_srgb,var(--accent)_6%,var(--surface))]' : 'border-[var(--line)] bg-[var(--surface)]'}`}><span className="font-mono text-sm font-bold text-[var(--accent-dark)]">{String(index + 1).padStart(2, '0')}</span><div><h3 className="font-bold">{name}</h3><p className="muted mt-1 text-sm leading-6">{description}</p>{name === 'Specialized Agents' && <div className="mt-3 flex flex-wrap gap-2">{['Kubernetes', 'Observability', 'Security', 'GitOps'].map(item => <span className="chip" key={item}>{item}</span>)}</div>}</div></article>{index < components.length - 1 && <ArrowDown className="mx-auto my-2 text-[var(--muted)]" size={18} />}</div>)}</div></div>
  <div className="mt-16 grid gap-5 md:grid-cols-2"><div className="panel p-6"><ShieldCheck className="text-[var(--accent-dark)]" /><h2 className="title-md mt-5">Production guardrails</h2><ul className="mt-5 space-y-3">{['Read before write', 'Short-lived task identities', 'Immutable approved plan', 'Blast-radius constraints', 'Independent health verification', 'Timeout and rollback'].map(item => <li className="flex items-start gap-2 text-sm" key={item}><Check className="mt-0.5 shrink-0 text-[var(--accent-dark)]" size={16} />{item}</li>)}</ul></div><div className="rounded-2xl bg-[var(--navy)] p-6 text-white"><p className="eyebrow">Design principle</p><blockquote className="mt-5 text-2xl font-semibold leading-9">“Autonomy is a permission boundary, not a model capability.”</blockquote><p className="mt-5 text-sm leading-6 text-slate-400">Increase authority only after the workflow proves evidence quality, safe termination, reviewer value, and reliable verification.</p></div></div></section></PageShell>
}
