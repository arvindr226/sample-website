import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { BookmarkButton } from '../components/BookmarkButton'
import { Rating } from '../components/Rating'
import RoadmapPage from '../pages/RoadmapPage'
import { readBookmarks, readRatings, readRoadmapProgress } from '../utils/storage'

describe('local interactions', () => {
  beforeEach(() => localStorage.clear())

  it('saves a local rating and distinguishes the editorial score', async () => {
    render(<Rating id="blog:test" editorialRating={4.8} />)
    expect(screen.getByText('4.8 / 5')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('radio', { name: /4 stars/i }))
    expect(readRatings()['blog:test'].rating).toBe(4)
    expect(screen.getByText(/stored only in this browser/i)).toBeInTheDocument()
  })

  it('adds and removes a bookmark', async () => {
    render(<MemoryRouter><BookmarkButton item={{ id: 'test', type: 'blog', title: 'Test article', path: '/blogs/test' }} /></MemoryRouter>)
    await userEvent.click(screen.getByRole('button', { name: /add bookmark/i }))
    expect(readBookmarks()).toHaveLength(1)
    await userEvent.click(screen.getByRole('button', { name: /remove bookmark/i }))
    expect(readBookmarks()).toHaveLength(0)
  })

  it('persists roadmap progress', () => {
    render(<MemoryRouter><RoadmapPage /></MemoryRouter>)
    fireEvent.change(screen.getByLabelText('Progress for Linux'), { target: { value: 'completed' } })
    expect(readRoadmapProgress().linux).toBe('completed')
    expect(screen.getByText(/1 of .* topics completed/i)).toBeInTheDocument()
  })
})
