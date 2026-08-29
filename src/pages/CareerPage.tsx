import { ArrowDown, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { usePageMeta } from '../hooks/usePageMeta'

const roles = ['System Administrator', 'DevOps Engineer', 'Senior DevOps Engineer', 'Platform Engineer / SRE', 'AI DevOps Engineer', 'AI Platform Engineer', 'Agentic Infrastructure Architect']
const groups = [
  ['Skills becoming more valuable', ['System design', 'Observability quality', 'Security and identity', 'Evaluation', 'Incident leadership']],
  ['Skills becoming less manual', ['Configuration drafting', 'First-pass log analysis', 'Documentation summaries', 'Routine evidence collection']],
  ['Skills AI will augment', ['RCA hypothesis building', 'Deployment planning', 'Capacity scenarios', 'Policy explanation', 'Runbook discovery']],
  ['Skills that remain critical', ['Linux and networking', 'Kubernetes', 'Git and delivery', 'Cloud architecture', 'Human judgment']],
  ['New AI-specific skills', ['LLM behavior', 'Embeddings and RAG', 'Tool contracts', 'Agent state', 'AI safety and evaluation']],
]

export default function CareerPage() {
  usePageMeta('AI DevOps Career Transition', 'Understand the progression, durable skills, new capabilities, and portfolio evidence for an AI DevOps career.')
  return <PageShell eyebrow="Career transition" title="Evolve from operator to intelligence-platform engineer" description="The opportunity is not to abandon DevOps. It is to make operational expertise accessible to grounded, governed, measurable AI workflows."><section className="container-shell section-pad"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Role progression</p><div className="mt-5">{roles.map((role, index) => <div key={role}><div className={`rounded-xl border p-4 font-bold ${index >= 4 ? 'border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] bg-[color-mix(in_srgb,var(--accent)_7%,var(--surface))]' : 'border-[var(--line)] bg-[var(--surface)]'}`}>{role}</div>{index < roles.length - 1 && <ArrowDown className="mx-auto my-2 text-[var(--muted)]" size={17} />}</div>)}</div></div><div className="grid gap-4 sm:grid-cols-2">{groups.map(([title, items], index) => <article className={`panel p-6 ${index === groups.length - 1 ? 'sm:col-span-2' : ''}`} key={title as string}><h2 className="font-bold">{title}</h2><ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">{(items as string[]).map(item => <li key={item}>• {item}</li>)}</ul></article>)}</div></div><div className="mt-14 rounded-2xl bg-[var(--navy)] p-7 text-white md:flex md:items-center md:justify-between"><div><TrendingUp className="text-emerald-300" /><h2 className="mt-4 text-2xl font-bold">Build evidence, not just a syllabus.</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">One evaluated, read-only triage assistant with citations and safe tool contracts is a stronger career signal than a dozen framework certificates.</p></div><Link to="/learning-path" className="btn-primary mt-6 shrink-0 md:mt-0">Choose your learning track</Link></div></section></PageShell>
}
