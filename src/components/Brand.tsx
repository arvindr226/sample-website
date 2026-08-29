import { Braces, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Brand() {
  return <Link to="/" className="flex items-center gap-2" aria-label="AI DevOps Field Guide home"><span className="relative grid h-9 w-9 place-items-center rounded-lg bg-[#07111f] text-white dark:bg-[var(--accent)] dark:text-[#031710]"><Braces size={18} strokeWidth={2.4} /><Sparkles className="absolute -right-1 -top-1 text-[var(--accent)] dark:text-white" size={12} fill="currentColor" /></span><span className="leading-none"><span className="block text-[.68rem] font-extrabold uppercase tracking-[.18em] text-[var(--muted)]">AI DevOps</span><span className="block text-sm font-extrabold tracking-tight">Field Guide</span></span></Link>
}
