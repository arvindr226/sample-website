import { beforeEach, describe, expect, it } from 'vitest'
import { readBookmarks, readRatings, readRoadmapProgress, readStorage, setRating, setRoadmapTopicProgress, STORAGE_KEYS, toggleBookmark, writeStorage } from '../utils/storage'

describe('versioned local storage', () => {
  beforeEach(() => localStorage.clear())

  it('returns a safe fallback for invalid and unversioned data', () => {
    localStorage.setItem('broken', '{not-json')
    expect(readStorage('broken', { safe: true })).toEqual({ safe: true })
    localStorage.setItem('old', JSON.stringify({ data: { value: 1 } }))
    expect(readStorage('old', { value: 0 })).toEqual({ value: 0 })
  })

  it('writes a versioned envelope', () => {
    expect(writeStorage('example', { value: 42 })).toBe(true)
    expect(JSON.parse(localStorage.getItem('example') ?? '')).toEqual({ version: 1, data: { value: 42 } })
  })

  it('stores roadmap progress', () => {
    setRoadmapTopicProgress('linux', 'learning')
    setRoadmapTopicProgress('python', 'completed')
    expect(readRoadmapProgress()).toEqual({ linux: 'learning', python: 'completed' })
  })

  it('toggles bookmarks without creating duplicates', () => {
    const bookmark = { id: 'rag', type: 'blog' as const, title: 'RAG', path: '/blogs/rag' }
    expect(toggleBookmark(bookmark)).toBe(true)
    expect(readBookmarks()).toHaveLength(1)
    expect(toggleBookmark(bookmark)).toBe(false)
    expect(readBookmarks()).toHaveLength(0)
  })

  it('stores ratings locally with a timestamp', () => {
    setRating('blog:rag', 4)
    expect(readRatings()['blog:rag'].rating).toBe(4)
    expect(readRatings()['blog:rag'].timestamp).toBeTruthy()
    expect(localStorage.getItem(STORAGE_KEYS.ratings)).toContain('blog:rag')
  })
})
