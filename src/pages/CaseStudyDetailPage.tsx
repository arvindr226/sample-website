import { ArrowDown, ArrowLeft, CheckCircle2, ShieldAlert } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { BookmarkButton } from '../components/BookmarkButton'
import { caseStudies } from '../data/caseStudies'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFoundPage from './NotFoundPage'

export default function CaseStudyDetailPage() {
  const { slug } = useParams()
  const item = caseStudies.find(entry => entry.slug === slug)
  usePageMeta(item?.title ?? 'Case study not found', item?.summary ?? 'This case study could not be found.', false)
  if (!item) return <NotFoundPage />
  return <main><header className="border-b border-[var(--line)] bg-[var(--surface)]"><div className="container-shell py-12 md:py-20"><Link to="/case-studies" className="muted inline-flex items-center gap-2 text-sm font-bold"><ArrowLeft size={16} /> All case studies</Link><p className="eyebrow mt-8">{item.category} case study</p><h1 className="title-lg mt-4 max-w-4xl">{item.title}</h1><p className="muted mt-5 max-w-3xl text-lg leading-8">{item.summary}</p><div className="mt-7"><BookmarkButton item={{ id: item.slug, type: 'case-study', title: item.title, path: `/case-studies/${item.slug}` }} /></div></div></header><div className="container-shell section-pad"><div className="grid gap-10 lg:grid-cols-[minmax(0,46rem)_20rem]"><div className="space-y-10"><Text title="Problem" body={item.problem} /><Text title="Traditional approach" body={item.traditional} /><List title="Limitations" items={item.limitations} /><Text title="AI approach" body={item.aiApproach} /><section><h2 className="title-md">Reference architecture</h2><div className="mt-5 max-w-xl">{item.architecture.map((step, index) => <div key={step}><div className="panel p-4 text-center text-sm font-bold">{step}</div>{index < item.architecture.length - 1 && <ArrowDown className="mx-auto my-2 text-[var(--muted)]" size={16} />}</div>)}</div></section><List title="Workflow" items={item.workflow} numbered /><div className="grid gap-4 md:grid-cols-2"><List title="Benefits" items={item.benefits} icon={<CheckCircle2 className="text-[var(--accent-dark)]" />} /><List title="Risks" items={item.risks} icon={<ShieldAlert className="text-amber-500" />} /></div><List title="Lessons learned" items={item.lessons} />{item.body && <section className="prose"><ReactMarkdown remarkPlugins={[remarkGfm]}>{item.body}</ReactMarkdown></section>}</div><aside className="lg:sticky lg:top-24 lg:self-start"><div className="rounded-2xl border border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] bg-[color-mix(in_srgb,var(--accent)_7%,var(--surface))] p-5"><p className="eyebrow">Human approval</p><p className="mt-3 text-sm leading-6">{item.approvals}</p></div></aside></div></div></main>
}

function Text({ title, body }: { title: string; body: string }) { return <section><h2 className="title-md">{title}</h2><p className="muted mt-4 leading-7">{body}</p></section> }
function List({ title, items, numbered = false, icon }: { title: string; items: string[]; numbered?: boolean; icon?: React.ReactNode }) { const Tag = numbered ? 'ol' : 'ul'; return <section><h2 className="title-md flex items-center gap-2">{icon}{title}</h2><Tag className="mt-4 space-y-3">{items.map((entry, index) => <li className="flex gap-3 text-sm leading-6" key={entry}><span className="font-mono font-bold text-[var(--accent-dark)]">{numbered ? String(index + 1).padStart(2, '0') : '•'}</span>{entry}</li>)}</Tag></section> }
