import { ArrowRight, MessageSquareText } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookmarkButton } from '../components/BookmarkButton'
import { PageShell } from '../components/PageShell'
import { discussions } from '../data/discussions'
import { usePageMeta } from '../hooks/usePageMeta'

export default function DiscussionsPage() {
  const [category, setCategory] = useState('all')
  usePageMeta('AI DevOps Discussions', 'Curated engineering questions with balanced arguments, risks, architecture considerations, and local positions.')
  const categories = [...new Set(discussions.map(item => item.category))]
  const visible = useMemo(() => category === 'all' ? discussions : discussions.filter(item => item.category === category), [category])
  return <PageShell eyebrow="Curated engineering questions" title="Discuss the tradeoffs, not the hype" description="These are static, source-controlled topics—not a server-backed forum. Choose a private local position or continue on GitHub when a link is available."><section className="container-shell section-pad"><div className="mb-8 flex flex-wrap gap-2"><button className={`chip border ${category === 'all' ? 'border-[var(--accent)] text-[var(--ink)]' : 'border-transparent'}`} onClick={() => setCategory('all')}>All topics</button>{categories.map(item => <button className={`chip border ${category === item ? 'border-[var(--accent)] text-[var(--ink)]' : 'border-transparent'}`} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div><div className="grid gap-4 md:grid-cols-2">{visible.map(item => <article className="panel flex flex-col p-6" key={item.slug}><div className="flex items-start justify-between gap-4"><span className="chip"><MessageSquareText size={13} />{item.category}</span><BookmarkButton compact item={{ id: item.slug, type: 'discussion', title: item.title, path: `/discussions/${item.slug}` }} /></div><h2 className="mt-5 text-xl font-bold leading-7"><Link to={`/discussions/${item.slug}`} className="hover:text-[var(--accent-dark)]">{item.title}</Link></h2><p className="muted mt-3 flex-1 text-sm leading-6">{item.description}</p><div className="mt-5 flex flex-wrap gap-2">{item.tags.map(tag => <span className="chip" key={tag}>{tag}</span>)}</div><div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-4"><span className="text-xs font-bold text-[var(--muted)]">Editorial importance {item.importance}/10 · {item.status}</span><Link aria-label={`Open ${item.title}`} to={`/discussions/${item.slug}`} className="text-[var(--accent-dark)]"><ArrowRight size={18} /></Link></div></article>)}</div></section></PageShell>
}
