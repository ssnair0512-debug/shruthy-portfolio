'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dot = document.getElementById('cursor-dot') as HTMLElement
    const pill = document.getElementById('cursor-pill') as HTMLElement
    const pillLabel = document.getElementById('cursor-pill-label') as HTMLElement
    if (!dot || !pill || !pillLabel) return

    // Pill offset from dot center — pill top-left corner starts here
    const OFFSET_X = 16
    const OFFSET_Y = 12

    let mx = -300, my = -300
    let prevMx = -300
    let rafId: number
    let ready = false

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!ready) {
        prevMx = mx
        ready = true
      }
    }
    document.addEventListener('mousemove', onMove)

    const onOver = (e: MouseEvent) => {
      const t = (e.target as Element)?.closest('a, button, [data-cursor]')
      pillLabel.textContent = t?.getAttribute('data-cursor') ?? (t ? 'VIEW' : 'YOU')
      document.body.classList.toggle('cursor-on-link', !!t)
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOver)

    function tick() {
      // Velocity-based tilt — calculated each frame from mouse delta
      const vx = mx - prevMx
      prevMx = mx
      const tilt = Math.max(-14, Math.min(14, vx * 3))

      // Dot snaps exactly to cursor — hotspot is always at dot center
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`

      // Pill is a rigid offset from the dot — they move as one unit
      // translate(x,y) positions the pill's top-left (pointy) corner
      pill.style.transform = `translate(${mx + OFFSET_X}px, ${my + OFFSET_Y}px) rotate(${tilt}deg)`

      rafId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-pill" aria-hidden="true">
        <span id="cursor-pill-label">YOU</span>
      </div>
    </>
  )
}
