import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Resets scroll position on route change (ignores hash anchors). */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}
