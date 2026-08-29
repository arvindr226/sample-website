export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'
export type ProgressState = 'not-started' | 'learning' | 'completed'

export interface Blog {
  title: string
  slug: string
  description: string
  author: string
  publishedDate: string
  category: string
  tags: string[]
  readingTime: string
  rating: number
  popularity: number
  featured: boolean
  githubDiscussionUrl?: string
  body: string
}

export interface RoadmapTopic {
  id: string
  title: string
  description: string
  whyItMatters: string
  prerequisites: string[]
  resources: string[]
  difficulty: Difficulty
  effort: string
  relatedBlogs: string[]
  relatedDiscussions: string[]
}

export interface RoadmapStage {
  id: string
  number: number
  title: string
  outcome: string
  topics: RoadmapTopic[]
}

export interface Discussion {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  background: string
  whyItMatters: string
  points: string[]
  argumentsFor: string[]
  argumentsAgainst: string[]
  risks: string[]
  considerations: string[]
  architecture: string[]
  relatedTools: string[]
  relatedBlogs: string[]
  furtherReading: string[]
  importance: number
  status: 'Open' | 'Evolving' | 'Principle'
  githubDiscussionUrl?: string
}

export interface ToolEntry {
  slug: string
  name: string
  category: string
  description: string
  website: string
  openSource: boolean
  useCases: string[]
  difficulty: Difficulty
  relevance: number
  editorialRating: number
  learningCurve: string
}

export interface Bookmark {
  id: string
  type: 'blog' | 'roadmap' | 'discussion' | 'tool' | 'case-study'
  title: string
  path: string
  savedAt: string
}
