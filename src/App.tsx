import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { useStoredValue } from './hooks/useStoredValue'
import { STORAGE_KEYS } from './utils/storage'

const ComparisonPage = lazy(() => import('./pages/ComparisonPage'))
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'))
const BlogsPage = lazy(() => import('./pages/BlogsPage'))
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'))
const DiscussionsPage = lazy(() => import('./pages/DiscussionsPage'))
const DiscussionDetailPage = lazy(() => import('./pages/DiscussionDetailPage'))
const DebatesPage = lazy(() => import('./pages/DebatesPage'))
const ToolsPage = lazy(() => import('./pages/ToolsPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage'))
const SkillsPage = lazy(() => import('./pages/SkillsPage'))
const AssessmentPage = lazy(() => import('./pages/AssessmentPage'))
const ArchitecturePage = lazy(() => import('./pages/ArchitecturePage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const LearningPathPage = lazy(() => import('./pages/LearningPathPage'))
const BookmarksPage = lazy(() => import('./pages/BookmarksPage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))
const CareerPage = lazy(() => import('./pages/CareerPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContributingPage = lazy(() => import('./pages/ContributingPage'))

function App() {
  const [theme, setTheme] = useStoredValue<'light' | 'dark'>(STORAGE_KEYS.theme, window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark') }, [theme])
  return <div className="min-h-screen"><Header theme={theme} onToggleTheme={() => setTheme(current => current === 'light' ? 'dark' : 'light')} /><Suspense fallback={<main className="container-shell min-h-[60vh] py-20" aria-live="polite">Loading field guide…</main>}><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/devops-vs-ai-devops" element={<ComparisonPage />} />
    <Route path="/roadmap" element={<RoadmapPage />} />
    <Route path="/blogs" element={<BlogsPage />} />
    <Route path="/blogs/:slug" element={<BlogDetailPage />} />
    <Route path="/discussions" element={<DiscussionsPage />} />
    <Route path="/discussions/:slug" element={<DiscussionDetailPage />} />
    <Route path="/debates" element={<DebatesPage />} />
    <Route path="/tools" element={<ToolsPage />} />
    <Route path="/case-studies" element={<CaseStudiesPage />} />
    <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
    <Route path="/skills" element={<SkillsPage />} />
    <Route path="/assessment" element={<AssessmentPage />} />
    <Route path="/architecture" element={<ArchitecturePage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/learning-path" element={<LearningPathPage />} />
    <Route path="/bookmarks" element={<BookmarksPage />} />
    <Route path="/settings" element={<SettingsPage />} />
    <Route path="/career" element={<CareerPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contributing" element={<ContributingPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></Suspense><Footer /></div>
}
export default App
