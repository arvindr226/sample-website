import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import App from '../App'
import { readStorage, STORAGE_KEYS } from '../utils/storage'

describe('application shell', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the primary navigation and homepage', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    expect(screen.getByRole('heading', { name: /from devops engineer to ai devops engineer/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore the ai devops roadmap/i })).toHaveAttribute('href', '/roadmap')
  })

  it('switches and stores the dark theme', async () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    await userEvent.click(screen.getByRole('button', { name: /switch to dark theme/i }))
    expect(document.documentElement).toHaveClass('dark')
    expect(readStorage(STORAGE_KEYS.theme, 'light')).toBe('dark')
  })
})
