# AI DevOps Field Guide

A production-quality static knowledge site for the transition from **DevOps Engineer → AI DevOps Engineer**. It explains how Kubernetes, GitOps, observability, RAG, agent workflows, policy, human approval, and verification combine into safe AI-powered operations.

The site has no backend, database, authentication, server-side AI, runtime secrets, analytics, or paid-service dependency. All content ships from this repository and all personal state remains in browser `localStorage`.

## Features

- Nine-stage interactive AI DevOps roadmap with local progress tracking
- 25-question, client-side readiness assessment with rule-based recommendations
- Markdown blog system with frontmatter, filtering, sorting, tables, code, and related content
- Curated discussions with balanced arguments and private local positions
- Split-screen debates emphasizing human-controlled production automation
- Tool directory with 2–3 tool comparison and clearly editorial ratings
- Static case studies for Kubernetes triage, RAG, RCA, GitOps, deployment planning, logs, and Helm
- Role-based ten-week learning tracks, skills matrix, career progression, and reference architecture
- Fuse.js search across blogs, discussions, tools, roadmap topics, and case studies
- Local bookmarks with JSON export/import, local ratings, preferences, dark mode, and reset controls
- HashRouter routing for reliable GitHub Pages navigation under a repository subpath
- Lazy-loaded routes, semantic HTML, keyboard focus states, reduced-motion support, and a custom 404

## Architecture

```text
src/
├── components/              reusable UI and local-interaction components
├── content/
│   ├── blogs/               Markdown articles with frontmatter
│   └── case-studies/        Markdown engineering notes
├── data/                    typed roadmap, tools, discussions, assessment, skills
├── hooks/                   page metadata and stored-value hooks
├── pages/                   lazy-loaded route components
├── styles/                  Tailwind-based global design system
├── types/                   shared content types
└── utils/                   versioned storage and assessment scoring
```

React, TypeScript, Vite, Tailwind CSS, React Router, Fuse.js, Lucide, React Markdown, Vitest, and Testing Library are used entirely at build or browser runtime.

## Local development

Node.js 22 is recommended.

```bash
npm install
npm run dev
```

Build and preview the static output:

```bash
npm run build
npm run preview
```

Quality checks:

```bash
npm run lint
npm test
```

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` checks out the repository, installs with `npm ci`, lints, tests, builds, uploads `dist/`, and deploys with official GitHub Pages actions.

1. Push to GitHub on the `main` branch.
2. Open **Settings → Pages**.
3. Select **GitHub Actions** as the source.

Vite detects the repository name from `GITHUB_REPOSITORY` and builds assets under `/<repository-name>/`. Routes use URL hashes such as `/#/roadmap`, so direct navigation and refresh do not need an SPA fallback.

To override the base path locally or for another host:

```bash
VITE_BASE_PATH=/your-repository/ npm run build
```

Use `/` for a root or custom-domain deployment.

## Adding content

### Blogs

Add a Markdown file to `src/content/blogs/` with these frontmatter fields:

```yaml
---
title: Article title
slug: article-slug
description: One-sentence summary
author: Author name
publishedDate: 2026-08-29
category: AI DevOps
tags: RAG, Kubernetes, Safety
readingTime: 8 min
rating: 4.7
popularity: 80
featured: false
githubDiscussionUrl: https://github.com/OWNER/REPO/discussions/1
---
```

`githubDiscussionUrl` is optional. Popularity and rating are static editorial metadata and must never be presented as global visitor metrics.

### Discussions

Add a typed entry to `src/data/discussions.ts`. Include background, arguments for and against, risks, engineering considerations, suggested architecture, and related content.

### Tools

Add a neutral entry to `src/data/tools.ts`. Use the official website, state open-source status accurately, and treat relevance and ratings as editorial judgment.

### Case studies

Add structured metadata to `src/data/caseStudies.ts` and engineering notes to `src/content/case-studies/` using the same slug.

## Local data model

Reusable utilities in `src/utils/storage.ts` wrap data in a versioned envelope:

```json
{
  "version": 1,
  "data": {}
}
```

Stored keys cover theme, roadmap progress, bookmarks, ratings, assessment, discussion positions, learning progress, and role preferences. Invalid or corrupted JSON returns a safe default. If browser storage is unavailable, the site uses an in-memory fallback for the active tab.

Visitor ratings are always labeled **Your local rating** and never imply community consensus. Editorial ratings come from source-controlled content. The same local-only principle applies to discussion positions and assessment results.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md), use the issue templates, and submit a focused pull request. GitHub provides the project’s community review and discussion workflow.

## License

MIT — see [LICENSE](LICENSE).
