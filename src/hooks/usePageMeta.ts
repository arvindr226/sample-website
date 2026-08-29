import { useEffect } from 'react'

const socialImage = 'https://arvindr226.github.io/sample-website/og.png'

function ensureMeta(selector: string, attribute: 'name' | 'property', value: string) {
  let meta = document.querySelector<HTMLMetaElement>(selector)
  if (!meta) { meta = document.createElement('meta'); meta.setAttribute(attribute, value); document.head.appendChild(meta) }
  return meta
}

export function usePageMeta(title: string, description: string, includeSiteImage = true) {
  useEffect(() => {
    document.title = `${title} | AI DevOps Field Guide`
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    const twitterTitle = ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title')
    const twitterDescription = ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description')
    descriptionMeta?.setAttribute('content', description)
    ogTitle?.setAttribute('content', title)
    ogDescription?.setAttribute('content', description)
    twitterTitle.setAttribute('content', title)
    twitterDescription.setAttribute('content', description)
    const imageTags = [document.querySelector<HTMLMetaElement>('meta[property="og:image"]'), document.querySelector<HTMLMetaElement>('meta[name="twitter:image"]')]
    if (includeSiteImage) {
      ensureMeta('meta[property="og:image"]', 'property', 'og:image').setAttribute('content', socialImage)
      ensureMeta('meta[name="twitter:image"]', 'name', 'twitter:image').setAttribute('content', socialImage)
    } else imageTags.forEach(tag => tag?.remove())
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = window.location.href
  }, [description, includeSiteImage, title])
}
