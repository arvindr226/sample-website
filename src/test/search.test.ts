import Fuse from 'fuse.js'
import { describe, expect, it } from 'vitest'
import { blogs } from '../content/blogs'
import { caseStudies } from '../data/caseStudies'
import { discussions } from '../data/discussions'
import { allRoadmapTopics } from '../data/roadmap'
import { tools } from '../data/tools'

describe('static content search', () => {
  const index = [
    ...blogs.map(item => ({ title: item.title, description: item.description, tags: item.tags, type: 'blog' })),
    ...discussions.map(item => ({ title: item.title, description: item.description, tags: item.tags, type: 'discussion' })),
    ...tools.map(item => ({ title: item.name, description: item.description, tags: item.useCases, type: 'tool' })),
    ...allRoadmapTopics.map(item => ({ title: item.title, description: item.description, tags: [item.stage], type: 'roadmap' })),
    ...caseStudies.map(item => ({ title: item.title, description: item.summary, tags: item.tags, type: 'case-study' })),
  ]
  const fuse = new Fuse(index, { keys: ['title', 'description', 'tags'], threshold: 0.35 })

  it('finds RAG content across multiple content types', () => {
    const results = fuse.search('RAG')
    expect(results.some(result => result.item.type === 'blog')).toBe(true)
    expect(results.some(result => result.item.type === 'case-study')).toBe(true)
  })

  it('finds a tool by operational purpose', () => {
    expect(fuse.search('LangGraph').some(result => result.item.title === 'LangGraph')).toBe(true)
  })
})
