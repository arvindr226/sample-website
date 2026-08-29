import { Bookmark as BookmarkIcon } from 'lucide-react'
import { useState } from 'react'
import type { Bookmark } from '../types/content'
import { readBookmarks, toggleBookmark } from '../utils/storage'

export function BookmarkButton({ item, compact = false }: { item: Omit<Bookmark, 'savedAt'>; compact?: boolean }) {
  const [saved, setSaved] = useState(() => readBookmarks().some(bookmark => bookmark.id === item.id && bookmark.type === item.type))
  return <button type="button" className={compact ? 'grid h-9 w-9 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)]' : 'btn-secondary'} aria-label={`${saved ? 'Remove' : 'Add'} bookmark for ${item.title}`} aria-pressed={saved} onClick={() => setSaved(toggleBookmark(item))}><BookmarkIcon size={16} fill={saved ? 'currentColor' : 'none'} />{!compact && (saved ? 'Saved locally' : 'Bookmark')}</button>
}
