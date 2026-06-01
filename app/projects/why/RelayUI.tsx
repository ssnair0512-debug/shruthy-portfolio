'use client'
import { useRef, useState, useEffect, type ReactNode } from 'react'

/* ── Icon set (16×16 SVG, stroke 1.6) ─────────────────────────── */
export function Ic({ name, size = 16 }: { name: string; size?: number }) {
  const s = { width: size, height: size, display: 'inline-block', verticalAlign: 'middle' } as const
  const sw = 1.6
  switch (name) {
    case 'inbox':    return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M2 9.5v2.5A1.5 1.5 0 0 0 3.5 13.5h9a1.5 1.5 0 0 0 1.5-1.5V9.5M2 9.5l1.6-5.5A1.5 1.5 0 0 1 5 2.9h6a1.5 1.5 0 0 1 1.4 1.1L14 9.5M2 9.5h3l1 1.5h4l1-1.5h3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'threads':  return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M3 4.5h10M3 8h7M3 11.5h5" strokeLinecap="round"/></svg>
    case 'draft':    return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M3 13.5l2-.6 7.5-7.5-1.4-1.4-7.5 7.5L3 13.5zM10 4l2 2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'calendar': return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><rect x="2.5" y="3.5" width="11" height="10" rx="1.5"/><path d="M5.5 2v3M10.5 2v3M2.5 6.5h11" strokeLinecap="round"/></svg>
    case 'compass':  return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><circle cx="8" cy="8" r="5.5"/><path d="M10.5 5.5L9 9 5.5 10.5 7 7z" strokeLinejoin="round"/></svg>
    case 'people':   return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><circle cx="6" cy="6" r="2.3"/><path d="M2 13c0-2 1.8-3.6 4-3.6S10 11 10 13M11 4.5a2 2 0 1 1 0 4M14 13c0-1.6-1.1-3-2.6-3.5" strokeLinecap="round"/></svg>
    case 'search':   return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><circle cx="7" cy="7" r="4.3"/><path d="M10.5 10.5l3 3" strokeLinecap="round"/></svg>
    case 'back':     return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M10 4l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'copy':     return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M9 7.5L13 3.5M13 3.5h-3M13 3.5v3" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="6" width="6.5" height="6.5" rx="1.2"/></svg>
    case 'edit':     return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M2.5 13.5h2L13 5l-2-2-8.5 8.5v2zM9.5 4.5l2 2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'dots':     return <svg viewBox="0 0 16 16" style={s} fill="currentColor"><circle cx="4" cy="8" r="1"/><circle cx="8" cy="8" r="1"/><circle cx="12" cy="8" r="1"/></svg>
    case 'scales':   return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M8 2.5v11M3 6h10M3 6l-1.5 3a2 2 0 0 0 3 0L3 6zM13 6l-1.5 3a2 2 0 0 0 3 0L13 6z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'feather':  return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M13 3c0 5-3 8-7 8H3l4-4M3 13l4-4M9 4.5l2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'link':     return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M7 9.5l2-2M5.5 11l-1 1a2 2 0 1 1-2.8-2.8l1-1M10.5 5l1-1a2 2 0 1 1 2.8 2.8l-1 1" strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'check':    return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth="2"><path d="M3.5 8.5L6.5 11.5 12.5 5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'x':        return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round"/></svg>
    case 'plus':     return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M8 3.5v9M3.5 8h9" strokeLinecap="round"/></svg>
    case 'globe':    return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><circle cx="8" cy="8" r="5.5"/><path d="M2.5 8h11M8 2.5c2 2 2 9 0 11M8 2.5c-2 2-2 9 0 11"/></svg>
    case 'lock':     return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><rect x="3" y="7" width="10" height="6.5" rx="1.2"/><path d="M5 7V5a3 3 0 0 1 6 0v2"/></svg>
    case 'team':     return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><circle cx="8" cy="6" r="2.3"/><path d="M3 13c0-2 2-3.6 5-3.6S13 11 13 13" strokeLinecap="round"/></svg>
    case 'spark':    return <svg viewBox="0 0 16 16" style={s} fill="currentColor"><path d="M8 1l1.4 4.3L13.7 7 9.4 8.4 8 12.7 6.6 8.4 2.3 7l4.3-1.7L8 1zM13 11l.7 1.5L15 13l-1.3.5L13 15l-.7-1.5L11 13l1.3-.5L13 11z"/></svg>
    case 'thread-bubble': return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M3 4.5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 13 4.5v5a1.5 1.5 0 0 1-1.5 1.5H7l-3 2.5V11H4.5A1.5 1.5 0 0 1 3 9.5v-5z"/></svg>
    case 'cal':      return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><rect x="2.5" y="4" width="11" height="9" rx="1.5"/><path d="M5 2.5V5M11 2.5V5M2.5 7h11"/></svg>
    case 'arrow-right': return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'clock':    return <svg viewBox="0 0 16 16" style={s} fill="none" stroke="currentColor" strokeWidth={sw}><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5" strokeLinecap="round"/></svg>
    default: return null
  }
}

/* ── Avatar ───────────────────────────────────────────────────── */
export function RAv({ initials, color = '#3b6db5', size = 'md' }: { initials: string; color?: string; size?: string }) {
  return <span className={`r-av ${size}`} style={{ background: color }}>{initials}</span>
}

/* ── Screen frame — scales 1280px Relay window into page width ── */
export function ScreenFrame({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<number | undefined>()

  useEffect(() => {
    const update = () => {
      const outer = outerRef.current, inner = innerRef.current
      if (!outer || !inner) return
      const w = outer.clientWidth
      const s = Math.min(1, w / 1280)
      const h = inner.scrollHeight * s
      setScale(s)
      setHeight(h)
    }
    update()
    const ro = new ResizeObserver(update)
    if (outerRef.current) ro.observe(outerRef.current)
    if (innerRef.current) ro.observe(innerRef.current)
    window.addEventListener('resize', update)
    return () => { ro.disconnect(); window.removeEventListener('resize', update) }
  }, [])

  return (
    <div ref={outerRef} className="screen-frame" style={{ height }}>
      <div ref={innerRef} className="screen-frame-inner" style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        {children}
      </div>
    </div>
  )
}

/* ── Relay Window shell ───────────────────────────────────────── */
export function RelayWindow({ children }: { children: ReactNode }) {
  return <div className="relay-window">{children}</div>
}

/* ── Sidebar ──────────────────────────────────────────────────── */
export function RelaySidebar({ active = 'why' }: { active?: string }) {
  return (
    <aside className="r-sidebar">
      <div className="r-wordmark">RELAY</div>
      <div className="r-search"><Ic name="search" /><span>Search</span><span className="kbd">⌘K</span></div>
      <div className="r-nav-group">
        {([['inbox','Inbox',3],['threads','Threads',0],['draft','Drafts',2],['calendar','Calendar',0],['compass','Why',47],['people','People',0]] as [string,string,number][]).map(([icon,label,count]) => (
          <div key={icon} className={`r-nav-item${active === (icon === 'compass' ? 'why' : icon) ? ' active' : ''}`}>
            <span className="ico"><Ic name={icon} /></span> {label}
            {count > 0 && <span className="count">{count}</span>}
          </div>
        ))}
      </div>
      <div className="r-nav-group">
        <div className="r-nav-label">Channels</div>
        <div className="r-channel"><span className="ch-hash">#</span>infra-migration</div>
        <div className="r-channel"><span className="ch-hash">#</span>hiring</div>
        <div className="r-channel"><span className="ch-hash">#</span>product<span className="dot"></span></div>
        <div className="r-channel"><span className="ch-hash">#</span>brand</div>
      </div>
      <div className="r-user">
        <div className="r-user-avatar">YO</div>
        <div><div className="r-user-name">You</div><div className="r-user-sub">relay.team</div></div>
      </div>
    </aside>
  )
}

/* ── Topbar ───────────────────────────────────────────────────── */
export function RelayTopbar({ crumbs = [], aside = null, actions = null }: { crumbs?: string[]; aside?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="r-topbar">
      {crumbs.map((c, i) => (
        <span key={i}>
          {i === 0 && <span className="r-back"><Ic name="back" size={14} /> {c}</span>}
          {i > 0 && <span className="r-crumb-sep">/</span>}
          {i > 0 && (c.startsWith('№')
            ? <span className="r-crumb-no">{c}</span>
            : <span className={i === crumbs.length - 1 ? 'r-crumb-title' : ''}>{c}</span>
          )}
        </span>
      ))}
      {aside}
      {actions && <div className="actions">{actions}</div>}
    </div>
  )
}
