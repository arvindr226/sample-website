import { useCallback, useEffect, useState } from 'react'
import { readStorage, writeStorage } from '../utils/storage'

export function useStoredValue<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => readStorage(key, fallback))

  useEffect(() => {
    const sync = (event: Event) => {
      const custom = event as CustomEvent<{ key?: string }>
      if (!custom.detail?.key || custom.detail.key === key) setValue(readStorage(key, fallback))
    }
    window.addEventListener('ai-devops-storage', sync)
    window.addEventListener('storage', sync)
    return () => { window.removeEventListener('ai-devops-storage', sync); window.removeEventListener('storage', sync) }
  }, [fallback, key])

  const update = useCallback((next: T | ((current: T) => T)) => {
    setValue(current => {
      const resolved = typeof next === 'function' ? (next as (current: T) => T)(current) : next
      writeStorage(key, resolved)
      return resolved
    })
  }, [key])

  return [value, update] as const
}
