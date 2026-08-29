import Fuse from 'fuse.js'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { blogs } from '../content/blogs'
import { caseStudies } from '../data/caseStudies'
import { discussions } from '../data/discussions'
import { allRoadmapTopics } from '../data/roadmap'
import { tools } from '../data/tools'
import { usePageMeta } from '../hooks/usePageMeta'

interface SearchEntry { id: string; title: string; description: string; category: string; tags: string[]; type: string; path: string }

const entries: SearchEntry[] = [
  ...blogs.map(item => ({ id: item.slug, title: item.title, description: item.description, category: item.category, tags: item.tags, type: 'Blog', path: `/blogs/${item.slug}` })),
  ...discussions.map(item => ({ id: item.slug, title: item.title, description: item.description, category: item.category, tags: item.tags, type: 'Discussion', path: `/discussions/${item.slug}` })),
  ...tools.map(item => ({ id: item.slug, title: item.name, description: item.description, category: item.category, tags: item.useCases, type: 'Tool', path: '/tools' })),
  ...allRoadmapTopics.map(item => ({ id: item.id, title: item.title, description: item.description, category: item.stage, tags: [item.difficulty], type: 'Roadmap', path: '/roadmap' })),
  ...caseStudies.map(item => ({ id: item.slug, title: item.title, description: item.summary, category: item.category, tags: item.tags, type: 'Case study', path: `/case-studies/${item.slug}` })),
]
const fuse = new Fuse(entries, { keys: [{ name: 'title', weight: 0.5 }, { name: 'description', weight: 0.25 }, { name: 'tags', weight: 0.2 }, { name: 'category', weight: 0.05 }], threshold: 0.35, includeScore: true })

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('all')
  const [category, setCategory] = useState('all')
  usePageMeta('Search', 'Search all local AI DevOps blogs, discussions, tools, roadmap topics, and case studies.')
  const types = [...new Set(entries.map(item => item.type))]
  const categories = [...new Set(entries.map(item => item.category))].sort()
  const results = useMemo(() => (query.trim() ? fuse.search(query).map(result => result.item) : entries).filter(item => (type === 'all' || item.type === type) && (category === 'all' || item.category === category)).slice(0, 80), [category, query, type])
  return <PageShell eyebrow="Local full-text search" title="Search the entire field guide" description="Fuse.js searches the static content bundled with this site. No query is sent to a server."><section className="container-shell section-pad"><label className="relative block"><span className="sr-only">Search field guide</span><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" /><input autoFocus className="h-14 w-full rounded-xl border border-[var(--line)] bg-[var(--surface)] pl-12 pr-4 text-lg" placeholder="Try “Kubernetes RCA”, “embeddings”, or “human approval”" value={query} onChange={event => setQuery(event.target.value)} /></label><div className="mt-3 grid gap-3 sm:grid-cols-2"><select aria-label="Filter result type" className="h-11 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3" value={type} onChange={event => setType(event.target.value)}><option value="all">All content types</option>{types.map(item => <option key={item}>{item}</option>)}</select><select aria-label="Filter result category" className="h-11 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3" value={category} onChange={event => setCategory(event.target.value)}><option value="all">All categories</option>{categories.map(item => <option key={item}>{item}</option>)}</select></div><p className="muted my-6 text-sm">{results.length} result{results.length === 1 ? '' : 's'}{!query && ' · showing the local index'}</p>{results.length ? <div className="divide-y divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-[var(--surface)]">{results.map(item => <Link to={item.path} className="block p-5 hover:bg-[var(--surface-soft)]" key={`${item.type}:${item.id}`}><div className="flex flex-wrap items-center gap-2"><span className="chip">{item.type}</span><span className="text-xs font-bold text-[var(--muted)]">{item.category}</span></div><h2 className="mt-3 font-bold">{item.title}</h2><p className="muted mt-1 text-sm leading-6">{item.description}</p></Link>)}</div> : <div className="panel py-16 text-center"><Search className="mx-auto text-[var(--muted)]" /><h2 className="mt-4 text-xl font-bold">No matching knowledge found</h2><p className="muted mt-2">Try fewer words or clear one of the filters.</p><button className="btn-secondary mt-5" onClick={() => { setQuery(''); setType('all'); setCategory('all') }}>Clear search</button></div>}</section></PageShell>
}
