'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const router = useRouter()
  const onHome = pathname === '/'
  const [activeSection, setActiveSection] = useState<'work' | 'about'>('work')

  function handleWorkClick() {
    setActiveSection('work')
  }

  function handleAboutClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setActiveSection('about')
    if (pathname === '/') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/#about')
    }
  }

  return (
    <nav
      aria-label="Main navigation"
      className="site-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 80,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '22px 40px 0',
        pointerEvents: 'none',
      }}
    >
      {/* Logo group */}
      <div className="nav-grp">
        <Link
          href="/"
          className="nav-logo"
          aria-label="Shruthy Nair — home"
        >
          <span className="nav-mark">S</span>
          <span className="nav-word">
            Shruthy<span className="nav-dot">.</span>
          </span>
        </Link>
      </div>

      {/* Links group */}
      <div className="nav-grp">
        <Link
          href="/#work"
          onClick={handleWorkClick}
          className={`nav-btn${onHome && activeSection === 'work' ? ' active' : ''}`}
        >
          Work
        </Link>
        <a
          href="/#about"
          onClick={handleAboutClick}
          className={`nav-btn${onHome && activeSection === 'about' ? ' active' : ''}`}
        >
          About
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn resume"
          download
        >
          Résumé <span className="nav-dl">↓</span>
        </a>
      </div>
    </nav>
  )
}
