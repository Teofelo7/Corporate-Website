import { useState, useEffect } from 'react'

/**
 * Returns true once the page has scrolled past the given threshold (px).
 * Useful for triggering navbar shadow, sticky states, etc.
 */
export function useScrollEffect(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > threshold)
    }

    // Check initial scroll position on mount (e.g. after page refresh)
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}