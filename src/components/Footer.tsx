import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Brand } from './Brand'

const groups = [
  { title: 'Explore', links: [['Roadmap', '/roadmap'], ['Blogs', '/blogs'], ['Discussions', '/discussions'], ['Tools', '/tools']] },
  { title: 'Learn', links: [['Learning path', '/learning-path'], ['Career transition', '/career'], ['RAG', '/blogs/rag-explained-for-devops'], ['Kubernetes AI', '/case-studies']] },
  { title: 'About', links: [['About this project', '/about'], ['Contributing', '/contributing'], ['Bookmarks', '/bookmarks'], ['GitHub repository', 'https://github.com/arvindr226/sample-website']] },
]

export function Footer() {
  return <footer className="border-t border-[var(--line)] bg-[var(--navy)] text-white"><div className="container-shell grid gap-10 py-14 md:grid-cols-[1.5fr_2fr]"><div><Brand /><p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">Built as an open knowledge resource for DevOps Engineers transitioning into AI-powered operations.</p></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{groups.map(group => <div key={group.title}><h2 className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{group.title}</h2><ul className="mt-4 space-y-3">{group.links.map(([label, href]) => <li key={label}>{href.startsWith('http') ? <a className="text-sm text-slate-300 hover:text-white" href={href} target="_blank" rel="noreferrer">{label}</a> : <Link className="text-sm text-slate-300 hover:text-white" to={href}>{label}</Link>}</li>)}</ul></div>)}</div></div><div className="border-t border-slate-800"><div className="container-shell flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-slate-500"><span>© {new Date().getFullYear()} AI DevOps Field Guide · Open knowledge, no tracking.</span><a href="https://github.com/arvindr226/sample-website" aria-label="GitHub repository"><Github size={18} /></a></div></div></footer>
}
