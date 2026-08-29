import type { Bookmark, ProgressState } from '../types/content'

export const STORAGE_KEYS = {
  theme: 'ai-devops-theme',
  roadmap: 'ai-devops-roadmap-progress',
  bookmarks: 'ai-devops-bookmarks',
  ratings: 'ai-devops-ratings',
  assessment: 'ai-devops-assessment',
  votes: 'ai-devops-discussion-votes',
  preferences: 'ai-devops-user-preferences',
  learning: 'ai-devops-learning-progress',
} as const

export interface StoredEnvelope<T> { version: 1; data: T }
export interface RatingRecord { rating: number; timestamp: string }
export interface AssessmentRecord { completedAt: string; answers: Record<string, number>; scores: Record<string, number>; overall: number }
export interface UserPreferences { preferredRole: string; targetRole: string; experience: string }

const memoryFallback = new Map<string, string>()

function storageAvailable() {
  try {
    const key = '__ai_devops_storage_test__'
    window.localStorage.setItem(key, key)
    window.localStorage.removeItem(key)
    return true
  } catch { return false }
}

export const isLocalStorageAvailable = () => typeof window !== 'undefined' && storageAvailable()

export function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = isLocalStorageAvailable() ? window.localStorage.getItem(key) : memoryFallback.get(key) ?? null
    if (!raw) return fallback
    const parsed = JSON.parse(raw) as Partial<StoredEnvelope<T>>
    if (parsed.version !== 1 || !('data' in parsed)) return fallback
    return parsed.data as T
  } catch { return fallback }
}

export function writeStorage<T>(key: string, data: T): boolean {
  try {
    const raw = JSON.stringify({ version: 1, data } satisfies StoredEnvelope<T>)
    if (isLocalStorageAvailable()) window.localStorage.setItem(key, raw)
    else memoryFallback.set(key, raw)
    window.dispatchEvent(new CustomEvent('ai-devops-storage', { detail: { key } }))
    return true
  } catch { return false }
}

export function removeStorage(key: string) {
  try { window.localStorage.removeItem(key) } catch { memoryFallback.delete(key) }
  window.dispatchEvent(new CustomEvent('ai-devops-storage', { detail: { key } }))
}

export const readRoadmapProgress = () => readStorage<Record<string, ProgressState>>(STORAGE_KEYS.roadmap, {})
export const setRoadmapTopicProgress = (topicId: string, state: ProgressState) => writeStorage(STORAGE_KEYS.roadmap, { ...readRoadmapProgress(), [topicId]: state })

export const readBookmarks = () => readStorage<Bookmark[]>(STORAGE_KEYS.bookmarks, [])
export function toggleBookmark(bookmark: Omit<Bookmark, 'savedAt'>) {
  const current = readBookmarks()
  const exists = current.some(item => item.id === bookmark.id && item.type === bookmark.type)
  const next = exists ? current.filter(item => !(item.id === bookmark.id && item.type === bookmark.type)) : [...current, { ...bookmark, savedAt: new Date().toISOString() }]
  writeStorage(STORAGE_KEYS.bookmarks, next)
  return !exists
}

export const readRatings = () => readStorage<Record<string, RatingRecord>>(STORAGE_KEYS.ratings, {})
export function setRating(id: string, rating: number) {
  const safeRating = Math.max(1, Math.min(5, Math.round(rating)))
  writeStorage(STORAGE_KEYS.ratings, { ...readRatings(), [id]: { rating: safeRating, timestamp: new Date().toISOString() } })
}

export function resetAllLocalData() {
  Object.values(STORAGE_KEYS).forEach(removeStorage)
  try { window.localStorage.removeItem('ai-devops-theme') } catch { /* memory fallback has no theme */ }
}
