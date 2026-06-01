'use client'
import { useState, useEffect } from 'react'

const CHAPTERS = [
  { id: 'brief',       n: '00', label: 'Brief' },
  { id: 'lifecycle',   n: '01', label: 'Lifecycle' },
  { id: 'teardown',    n: '02', label: 'Teardown' },
  { id: 'reframe',     n: '03', label: 'Reframe' },
  { id: 'object',      n: '04', label: 'Object model' },
  { id: 'sketches',    n: '05', label: 'Sketches' },
  { id: 'system',      n: '06', label: 'System' },
  { id: 'capture',     n: '07', label: 'Capture' },
  { id: 'detail',      n: '08', label: 'The page' },
  { id: 'context',     n: '09', label: 'Context inline' },
  { id: 'micro',       n: '10', label: 'Details' },
  { id: 'reflections', n: '11', label: 'Reflections' },
]

export default function Breadcrumb() {
  const [active, setActive] = useState('brief')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (top) setActive(top.target.id)
      },
      { rootMargin: '-30% 0px -65% 0px', threshold: 0 }
    )
    CHAPTERS.forEach(c => {
      const el = document.getElementById(c.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav className="wy-breadcrumb" aria-label="Chapter navigation">
      <div className="wy-breadcrumb-inner">
        {CHAPTERS.map(c => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={`bc-item${active === c.id ? ' active' : ''}`}
          >
            <span className="bc-dot"></span>
            <span>{c.n} · {c.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
