import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return <main className="container-shell grid min-h-[65vh] place-items-center py-20 text-center"><div><p className="eyebrow">404 / route not found</p><h1 className="display mt-4">Lost in the control plane?</h1><p className="muted mx-auto mt-5 max-w-xl text-lg">This page does not exist, but the roadmap home is one deterministic action away.</p><Link to="/" className="btn-primary mt-8"><ArrowLeft size={17} /> Back to homepage</Link></div></main>
}
