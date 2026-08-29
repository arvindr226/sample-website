import type { Blog } from '../../types/content'

const modules = import.meta.glob('./*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

function parseFrontmatter(raw: string): Blog {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error('Blog is missing valid frontmatter')
  const metadata: Record<string, string> = {}
  match[1].split('\n').forEach(line => {
    const separator = line.indexOf(':')
    if (separator > 0) metadata[line.slice(0, separator).trim()] = line.slice(separator + 1).trim()
  })
  return {
    title: metadata.title,
    slug: metadata.slug,
    description: metadata.description,
    author: metadata.author,
    publishedDate: metadata.publishedDate,
    category: metadata.category,
    tags: metadata.tags.split(',').map(tag => tag.trim()),
    readingTime: metadata.readingTime,
    rating: Number(metadata.rating),
    popularity: Number(metadata.popularity),
    featured: metadata.featured === 'true',
    githubDiscussionUrl: metadata.githubDiscussionUrl,
    body: match[2].trim(),
  }
}

export const blogs = Object.values(modules).map(parseFrontmatter).sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
export const blogCategories = [...new Set(blogs.map(blog => blog.category))].sort()
export const getBlog = (slug?: string) => blogs.find(blog => blog.slug === slug)
