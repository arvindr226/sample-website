import { Github } from 'lucide-react'

export function DiscussOnGitHub({ url }: { url?: string }) {
  if (!url) return null
  return <a className="btn-secondary" href={url} target="_blank" rel="noreferrer"><Github size={17} /> Continue discussion on GitHub</a>
}
