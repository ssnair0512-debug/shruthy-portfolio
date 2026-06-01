/**
 * SAMPLE L — Inline pills, two-row layout with status bar
 *
 * Same filled-pill style as G but the hero is split into two rows:
 * top row has the headline sentence, bottom row has a small status bar
 * with "OPEN TO NEW ROLES" + current role inline. The pills are slightly
 * larger, more breathing room, no dot grid — cleaner canvas.
 */

import Link from 'next/link'

const whyRows = [
  { num: '#48', title: 'Move onboarding email out of Mailchimp', tag: 'infra', time: 'Drafting' },
  { num: '#47', title: 'Audit log stays in Postgres', tag: 'infra', time: '5d ago' },
  { num: '#46', title: 'Drop system design round', tag: 'hiring', time: '9d ago' },
  { num: '#45', title: 'Decisions public by default', tag: 'product', time: '13d ago' },
]

export default function SampleL() {
  return (
    <main id="main-content">

      {/* ── Hero ── */}
      <section style={{ paddingTop: 120, paddingBottom: 80 }} className="wrap">

        {/* Eyebrow */}
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 12,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--mute)', fontWeight: 500, marginBottom: 28,
        }}>
          Product Designer
        </p>

        {/* Headline with filled inline pills — same as G */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
          fontWeight: 400, letterSpacing: '-0.02em',
          lineHeight: 1.35, maxWidth: '22ch',
          color: 'var(--ink)',
        }}>
          Shruthy{' '}
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            verticalAlign: 'middle', fontSize: '0.55em',
            fontFamily: 'var(--font-sans)', fontWeight: 500,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            background: 'var(--accent-soft)', color: 'var(--accent)',
            padding: '3px 10px', borderRadius: 999,
            margin: '0 4px', position: 'relative', top: '-0.1em',
          }}>
            ✌ designer
          </span>{' '}
          who thrives in{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--mute)', fontWeight: 300 }}>collaborative</em>{' '}
          spaces.{' '}
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            verticalAlign: 'middle', fontSize: '0.55em',
            fontFamily: 'var(--font-sans)', fontWeight: 500,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            background: 'var(--plum-soft)', color: 'var(--plum)',
            padding: '3px 10px', borderRadius: 999,
            margin: '0 4px', position: 'relative', top: '-0.1em',
          }}>
            currently @ relay
          </span>
        </h1>

        {/* Status — availability only */}
        <div style={{ marginTop: 32 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontFamily: 'var(--font-sans)', fontSize: 11,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            fontWeight: 500, color: 'var(--green)',
            background: 'oklch(0.95 0.04 150)',
            padding: '5px 12px', borderRadius: 999,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--green)', flexShrink: 0,
            }} />
            Open to new roles
          </span>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="wrap" style={{ paddingBottom: 80 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderTop: '1px solid var(--rule)', padding: '20px 0 32px',
        }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mute)', fontWeight: 500 }}>
            Selected work
          </p>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--mute)' }}>
            02 case studies · 02 in progress
          </span>
        </div>

        <div className="l-work-grid">
          <Link href="/projects/wud" className="l-card">
            <div className="l-thumb" style={{
              background: 'linear-gradient(135deg, #f4ecff 0%, #ffd4cc 50%, #c5f5e1 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
            }}>
              <div style={{ position: 'absolute', width: '60%', height: '60%', borderRadius: '50%', background: 'oklch(0.85 0.1 290 / 0.4)', top: '-10%', right: '-10%' }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 64, color: '#16181d', zIndex: 2, letterSpacing: '-0.04em', position: 'relative' }}>
                WUD<span style={{ color: 'oklch(0.55 0.18 290)' }}>!</span>
              </div>
            </div>
            <p className="l-meta">Personal · Product Design · 2024 · Team of 2</p>
            <h3 className="l-title">WUD! Reimagining the social event lifecycle</h3>
            <p className="l-desc">4 apps replaced with 1. 60% to 91% Create Event completion.</p>
          </Link>

          <Link href="/projects/why" className="l-card">
            <div className="l-thumb" style={{ background: 'var(--green-cream)', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {whyRows.map((row) => (
                <div key={row.num} style={{ background: '#fff', border: '1px solid oklch(0.9 0.02 150)', borderRadius: 8, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ color: 'oklch(0.6 0.05 150)', fontSize: 10, flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{row.num}</span>
                  <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.title}</span>
                  <span style={{ padding: '2px 8px', background: 'oklch(0.92 0.05 150)', color: 'oklch(0.32 0.08 150)', borderRadius: 4, fontSize: 9, flexShrink: 0, fontFamily: 'var(--font-sans)' }}>{row.tag}</span>
                </div>
              ))}
            </div>
            <p className="l-meta">Relay · Feature Design · 2025 · Team of 2</p>
            <h3 className="l-title">Why. The decision ledger.</h3>
            <p className="l-desc">A capture system that meets people where work happens.</p>
          </Link>

          <div className="l-card" style={{ pointerEvents: 'none', opacity: 0.4 }} aria-hidden="true">
            <div className="l-thumb" style={{ background: `repeating-linear-gradient(135deg, transparent 0 12px, oklch(0.9 0.01 250) 12px 13px), var(--bg-tint)`, display: 'flex', alignItems: 'flex-end', padding: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, background: 'var(--bg)', padding: '3px 8px', borderRadius: 3, color: 'var(--mute)' }}>in progress</span>
            </div>
            <p className="l-meta">Studio · UX Research · 2023</p>
            <h3 className="l-title">Field study, retail logistics</h3>
          </div>

          <div className="l-card" style={{ pointerEvents: 'none', opacity: 0.4 }} aria-hidden="true">
            <div className="l-thumb" style={{ background: 'oklch(0.94 0.04 250)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '30%', border: '2px solid oklch(0.5 0.12 250)', borderRadius: 8, transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', inset: '35%', background: 'oklch(0.6 0.15 30)', borderRadius: 8, transform: 'rotate(6deg)' }} />
            </div>
            <p className="l-meta">Personal · Design Systems · 2023</p>
            <h3 className="l-title">Form library for a small team</h3>
          </div>
        </div>
      </section>

      <style>{`
        .l-work-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        @media (max-width: 800px) { .l-work-grid { grid-template-columns: 1fr; } }
        .l-card { display: block; text-decoration: none; color: inherit; }
        .l-thumb { aspect-ratio: 4/3; width: 100%; border-radius: var(--radius); overflow: hidden; position: relative; transition: box-shadow 0.3s; }
        a.l-card:hover .l-thumb { box-shadow: 0 16px 36px -16px oklch(0.5 0.05 250 / 0.3); }
        .l-meta { font-family: var(--font-sans); font-size: 12px; color: var(--mute); margin: 14px 0 5px; letter-spacing: 0.03em; }
        .l-title { font-family: var(--font-serif); font-size: 20px; line-height: 1.25; margin-bottom: 6px; letter-spacing: -0.01em; font-weight: 400; }
        .l-desc { font-family: var(--font-sans); font-size: 13.5px; color: var(--ink-soft); line-height: 1.55; }
        @media (prefers-reduced-motion: no-preference) {
          a.l-card { transition: transform 0.35s cubic-bezier(0.6, 0.01, 0, 1); }
          a.l-card:hover { transform: translateY(-3px); }
        }
      `}</style>

    </main>
  )
}
