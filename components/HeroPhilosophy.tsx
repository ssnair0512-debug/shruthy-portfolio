'use client'

import { useEffect, useRef } from 'react'

const lines = [
  'I believe the craft is in restraint, in listening before drawing, and in leaving things simpler than I found them.',
  'The first answer is rarely the right one. The right question almost always is.',
  'Good design is quiet — it lets the work do the talking.',
  'Problems get easier when you stop asking how and start asking why.',
  "I'd rather solve one real problem than gesture at ten interesting ones.",
]

export default function HeroPhilosophy() {
  const elRef = useRef<HTMLParagraphElement>(null)
  const idx = useRef(0)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    el.style.transition = 'opacity 0.4s'

    const id = setInterval(() => {
      idx.current = (idx.current + 1) % lines.length
      el.style.opacity = '0'
      setTimeout(() => {
        el.textContent = lines[idx.current]
        el.style.opacity = '1'
      }, 350)
    }, 6000)

    return () => clearInterval(id)
  }, [])

  return (
    <p
      ref={elRef}
      style={{
        marginTop: 24,
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: 'clamp(17px, 1.5vw, 20px)',
        color: 'var(--ink-soft)',
        maxWidth: '46ch',
        minHeight: '3em',
        lineHeight: 1.5,
      }}
    >
      <span style={{ color: 'var(--accent)', marginRight: 4, fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.3em' }}>&ldquo;</span>
      {lines[0]}
    </p>
  )
}
