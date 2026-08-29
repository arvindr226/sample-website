import { CheckCircle2, Circle } from 'lucide-react'
import { useState } from 'react'
import { PageShell } from '../components/PageShell'
import { learningTracks } from '../data/skills'
import { usePageMeta } from '../hooks/usePageMeta'
import { STORAGE_KEYS } from '../utils/storage'
import { useStoredValue } from '../hooks/useStoredValue'

export default function LearningPathPage() {
  const [selected, setSelected] = useState(learningTracks[0].id)
  const [progress, setProgress] = useStoredValue<Record<string, boolean>>(STORAGE_KEYS.learning, {})
  usePageMeta('AI DevOps Learning Paths', 'Choose a role-based ten-week learning track and keep progress locally in your browser.')
  const track = learningTracks.find(item => item.id === selected) ?? learningTracks[0]
  return <PageShell eyebrow="Role-based tracks" title="Choose the shortest credible path" description="Every ten-week track ends in a working, bounded portfolio project. Your checkmarks stay on this device."><section className="container-shell section-pad"><div className="grid gap-8 lg:grid-cols-[20rem_1fr]"><div className="space-y-2" role="tablist" aria-label="Learning tracks">{learningTracks.map(item => <button key={item.id} role="tab" aria-selected={selected === item.id} onClick={() => setSelected(item.id)} className={`w-full rounded-xl border p-4 text-left ${selected === item.id ? 'border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_8%,var(--surface))]' : 'border-[var(--line)] bg-[var(--surface)]'}`}><span className="font-bold">{item.title}</span><span className="muted mt-1 block text-xs leading-5">{item.audience}</span></button>)}</div><div className="panel p-6 md:p-8"><p className="eyebrow">Selected track</p><h2 className="title-md mt-3">{track.title}</h2><p className="muted mt-3 leading-7">{track.audience}</p><ol className="mt-8 space-y-3">{track.weeks.map((week, index) => { const id = `${track.id}-${index}`; const done = progress[id] ?? false; return <li key={week}><button className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left ${done ? 'border-[color-mix(in_srgb,var(--accent)_45%,var(--line))] bg-[color-mix(in_srgb,var(--accent)_6%,var(--surface))]' : 'border-[var(--line)] bg-[var(--surface)]'}`} onClick={() => setProgress(current => ({ ...current, [id]: !done }))}>{done ? <CheckCircle2 className="shrink-0 text-[var(--accent-dark)]" /> : <Circle className="shrink-0 text-[var(--muted)]" />}<span><span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Week {index + 1}</span><span className={`mt-1 block font-semibold ${done ? 'line-through opacity-70' : ''}`}>{week}</span></span></button></li>})}</ol></div></div></section></PageShell>
}
