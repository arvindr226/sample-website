import { mkdir, writeFile } from 'node:fs/promises'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'sample-website'
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'arvindr226'
const siteUrl = process.env.SITE_URL ?? `https://${owner}.github.io/${repository}/`
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>
`

await mkdir('dist', { recursive: true })
await writeFile('dist/sitemap.xml', xml)
