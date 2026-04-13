'use client'

import { useEffect, useState } from 'react'

interface NavLink {
  label: string
  href: string
}

const links: NavLink[] = [
  { label: 'Knowledge System', href: '#knowledge-system' },
  { label: 'AI Workflow',       href: '#ai-workflow'       },
  { label: 'Product Engineering', href: '#product-engineering' },
]

export default function Navigation() {
  const [activeId, setActiveId] = useState<string>('')
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid #d2d2d7' : '1px solid transparent',
      }}
    >
      <nav className="max-w-content mx-auto px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="text-ink font-medium text-sm tracking-tight hover:text-ink-2 transition-colors"
        >
          Rena Hahn
        </a>

        {/* Section links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((link) => {
            const id = link.href.slice(1)
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{
                    color: isActive ? '#1d1d1f' : '#6e6e73',
                    fontWeight: isActive ? '500' : '400',
                  }}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

      </nav>
    </header>
  )
}
