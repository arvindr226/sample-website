import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { BookmarkButton } from '../components/BookmarkButton'
import { DiscussOnGitHub } from '../components/DiscussOnGitHub'
import { Rating } from '../components/Rating'
import { blogs, getBlog } from '../content/blogs'
import { discussions } from '../data/discussions'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFoundPage from './NotFoundPage'

function slugify(value: string) { return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }

export default function BlogDetailPage() {
  const { slug } = useParams()
  const blog = getBlog(slug)
  usePageMeta(blog?.title ?? 'Article not found', blog?.description ?? 'This field note could not be found.', false)
  if (!blog) return <NotFoundPage />
  const headings = [...blog.body.matchAll(/^##\s+(.+)$/gm)].map(match => match[1])
  const related = blogs.filter(item => item.slug !== blog.slug && (item.category === blog.category || item.tags.some(tag => blog.tags.includes(tag)))).slice(0, 3)
  const relatedDiscussions = discussions.filter(item => item.tags.some(tag => blog.tags.includes(tag))).slice(0, 2)
  return <main><article><header className="border-b border-[var(--line)] bg-[var(--surface)]"><div className="container-shell py-12 md:py-20"><Link to="/blogs" className="muted inline-flex items-center gap-2 text-sm font-bold hover:text-[var(--ink)]"><ArrowLeft size={16} /> All field notes</Link><div className="mt-8 flex flex-wrap gap-2"><span className="chip">{blog.category}</span>{blog.tags.map(tag => <span className="chip" key={tag}>{tag}</span>)}</div><h1 className="title-lg mt-6 max-w-4xl">{blog.title}</h1><p className="muted mt-5 max-w-3xl text-lg leading-8">{blog.description}</p><div className="muted mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"><span>{blog.author}</span><span className="flex items-center gap-1.5"><CalendarDays size={15} /> {new Date(`${blog.publishedDate}T00:00:00`).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span><span className="flex items-center gap-1.5"><Clock3 size={15} /> {blog.readingTime}</span></div><div className="mt-7 flex flex-wrap gap-3"><BookmarkButton item={{ id: blog.slug, type: 'blog', title: blog.title, path: `/blogs/${blog.slug}` }} /><DiscussOnGitHub url={blog.githubDiscussionUrl} /></div></div></header><div className="container-shell grid gap-10 py-12 lg:grid-cols-[14rem_minmax(0,46rem)] lg:justify-center"><aside className="lg:sticky lg:top-24 lg:self-start"><p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">On this page</p><nav className="mt-4 space-y-2" aria-label="Table of contents">{headings.map(heading => <a className="block text-sm text-[var(--muted)] hover:text-[var(--accent-dark)]" href={`#${slugify(heading)}`} key={heading}>{heading}</a>)}</nav></aside><div><div className="prose"><ReactMarkdown remarkPlugins={[remarkGfm]} components={{ h2: ({ children }) => <h2 id={slugify(String(children))}>{children}</h2> }}>{blog.body}</ReactMarkdown></div><div className="mt-12"><Rating id={`blog:${blog.slug}`} editorialRating={blog.rating} /></div></div></div></article><section className="border-t border-[var(--line)] bg-[var(--surface)]"><div className="container-shell section-pad"><h2 className="title-md">Continue learning</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{related.map(item => <Link className="panel p-5 hover:border-[var(--accent)]" to={`/blogs/${item.slug}`} key={item.slug}><span className="eyebrow">{item.category}</span><h3 className="mt-3 font-bold leading-6">{item.title}</h3><p className="muted mt-2 text-xs">{item.readingTime}</p></Link>)}</div>{relatedDiscussions.length > 0 && <div className="mt-10"><p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Related discussions</p><div className="mt-3 flex flex-wrap gap-3">{relatedDiscussions.map(item => <Link className="btn-secondary" to={`/discussions/${item.slug}`} key={item.slug}>{item.title}</Link>)}</div></div>}</div></section></main>
}
