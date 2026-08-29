import { Star } from 'lucide-react'
import { useState } from 'react'
import { readRatings, setRating } from '../utils/storage'

export function Rating({ id, editorialRating }: { id: string; editorialRating: number }) {
  const [localRating, setLocalRating] = useState(() => readRatings()[id]?.rating ?? 0)
  const labels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']
  return <div className="panel p-5"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Editorial rating</p><p className="mt-1 font-bold">{editorialRating.toFixed(1)} / 5</p></div><div><p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Your local rating</p><div className="mt-1 flex gap-1" role="radiogroup" aria-label="Your local rating">{[1, 2, 3, 4, 5].map(value => <button key={value} type="button" className="border-0 bg-transparent p-0.5 text-amber-500" aria-label={`${value} stars — ${labels[value - 1]}`} aria-checked={localRating === value} role="radio" onClick={() => { setRating(id, value); setLocalRating(value) }}><Star size={20} fill={localRating >= value ? 'currentColor' : 'none'} /></button>)}</div></div></div><p className="muted mt-4 text-xs">Your rating is stored only in this browser. It is not a community score.</p></div>
}
