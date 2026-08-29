import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BookmarkButton } from '../components/BookmarkButton'
import { PageShell } from '../components/PageShell'
import { caseStudies } from '../data/caseStudies'
import { usePageMeta } from '../hooks/usePageMeta'

export default function CaseStudiesPage() {
  usePageMeta('AI DevOps Case Studies', 'Static reference case studies for AI-assisted Kubernetes, RAG runbooks, deployment planning, RCA, GitOps, logs, and Helm validation.')
  return <PageShell eyebrow="Architecture in practice" title="Case studies with the failure modes left in" description="Each reference design includes the traditional workflow, AI approach, risks, human approval boundary, and lessons learned."><section className="container-shell section-pad"><div className="grid gap-4 md:grid-cols-2">{caseStudies.map((item, index) => <article className={`panel flex flex-col p-6 ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-[1fr_auto] md:items-end md:gap-8 md:p-8' : ''}`} key={item.slug}><div><div className="flex items-start justify-between gap-3"><span className="chip">{item.category}</span><BookmarkButton compact item={{ id: item.slug, type: 'case-study', title: item.title, path: `/case-studies/${item.slug}` }} /></div><h2 className={`${index === 0 ? 'title-md' : 'text-xl'} mt-5 font-bold`}>{item.title}</h2><p className="muted mt-3 max-w-3xl text-sm leading-6">{item.summary}</p><div className="mt-5 flex flex-wrap gap-2">{item.tags.map(tag => <span className="chip" key={tag}>{tag}</span>)}</div></div><Link to={`/case-studies/${item.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-dark)]">Read case study <ArrowRight size={15} /></Link></article>)}</div></section></PageShell>
}
