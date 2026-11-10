import { useEffect } from 'react'

/**
 * Lightweight per-page SEO: sets <title> and the meta description.
 */
export default function useSeo({ title, description }) {
  useEffect(() => {
    const suffix = 'Urban Junction — Drive Better. Live Bigger.'
    document.title = title ? `${title} | ${suffix}` : suffix

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
