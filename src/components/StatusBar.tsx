export function StatusBar({ value, label }: { value: number; label: string }) {
  const safe = Math.max(0, Math.min(100, value))
  return <div><div className="mb-2 flex justify-between gap-3 text-sm"><span className="font-semibold">{label}</span><span className="font-mono text-[var(--muted)]">{Math.round(safe)}%</span></div><div className="h-2 overflow-hidden rounded-full bg-[var(--surface-soft)]" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(safe)}><div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${safe}%` }} /></div></div>
}
