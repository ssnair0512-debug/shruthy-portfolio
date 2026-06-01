/**
 * SAMPLE I — "Light Editorial"
 *
 * Inspired by: Nikhil Vashistha reference — name highlighted in an
 * accent color within a bold serif sentence. Location + availability
 * on a small status line. Avatar mark alongside as a character detail.
 * Light background, clean and editorial.
 *
 * Hero: one sentence where the name pops, status line below.
 */

import Link from 'next/link'

const whyRows = [
  { num: '#48', title: 'Move onboarding email out of Mailchimp', tag: 'infra', time: 'Drafting' },
  { num: '#47', title: 'Audit log stays in Postgres', tag: 'infra', time: '5d ago' },
  { num: '#46', title: 'Drop system design round', tag: 'hiring', time: '9d ago' },
  { num: '#45', title: 'Decisions public by default', tag: 'product', time: '13d ago' },
]

export default function SampleI() {
  return (
    <main id="main-content">

      {/* ── Hero — light editorial ── */}
      <section style={{ paddingTop: 80, paddingBottom: 80 }} className="wrap">
        <div className="i-hero-grid">

          {/* Left — initials mark */}
          <div
            aria-hidden="true"
            style={{
              width: 140,
              height: 180,
              flexShrink: 0,
              borderRadius: 16,
              background: 'var(--bg-tint)',
              border: '1px solid var(--rule)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 64,
              fontWeight: 300,
              color: 'var(--accent)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              userSelect: 'none',
            }}>
              SN
            </div>
          </div>

          {/* Right — headline + status + links */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
            {/* The sentence */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              color: 'var(--ink)',
            }}>
              I&apos;m{' '}
              <span style={{
                color: 'var(--accent)',
                fontStyle: 'italic',
              }}>
                Shruthy Nair
              </span>
              , a product designer building digital experiences that feel{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--mute)' }}>
                considered
              </em>.
            </h1>

            {/* Status line */}
            <div style={{
              display: 'flex',
              gap: 0,
              flexWrap: 'wrap',
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--mute)',
              fontWeight: 500,
            }}>
              <span>Mumbai, India</span>
              <span style={{ margin: '0 12px', color: 'var(--rule-strong)' }}>|</span>
              <span>Currently @ Relay</span>
              <span style={{ margin: '0 12px', color: 'var(--rule-strong)' }}>|</span>
              <span style={{ color: 'var(--green)' }}>Open to new roles</span>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <a href="#work" style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--ink)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                border: '1px solid var(--rule-strong)',
                padding: '8px 18px',
                borderRadius: 999,
              }}>
                View work
              </a>
              <Link href="/about" style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: 'var(--mute)',
              }}>
                About
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: 'var(--mute)',
              }}>
                Résumé ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section id="work" className="wrap" style={{ paddingBottom: 80 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderTop: '1px solid var(--rule)',
          padding: '20px 0 32px',
        }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--mute)', fontWeight: 500 }}>
            Selected work
          </p>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--mute)' }}>
            02 shipped · 04 in progress
          </span>
        </div>

        <div className="i-work-grid">
          <Link href="/projects/wud" className="i-card">
            <div className="i-thumb" style={{
              background: 'linear-gradient(135deg, #f4ecff 0%, #ffd4cc 50%, #c5f5e1 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
            }}>
              <div style={{ position: 'absolute', width: '60%', height: '60%', borderRadius: '50%', background: 'oklch(0.85 0.1 290 / 0.4)', top: '-10%', right: '-10%' }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 64, color: '#16181d', zIndex: 2, letterSpacing: '-0.04em', position: 'relative' }}>
                WUD<span style={{ color: 'oklch(0.55 0.18 290)' }}>!</span>
              </div>
            </div>
            <p className="i-meta">Personal · Product Design · 2024</p>
            <h3 className="i-title">WUD! Reimagining the social event lifecycle</h3>
            <p className="i-desc">4 apps replaced with 1. 60% to 91% Create Event completion.</p>
          </Link>

          <Link href="/projects/why" className="i-card">
            <div className="i-thumb" style={{ background: 'var(--green-cream)', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {whyRows.map((row) => (
                <div key={row.num} style={{ background: '#fff', border: '1px solid oklch(0.9 0.02 150)', borderRadius: 8, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ color: 'oklch(0.6 0.05 150)', fontSize: 10, flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{row.num}</span>
                  <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.title}</span>
                  <span style={{ padding: '2px 8px', background: 'oklch(0.92 0.05 150)', color: 'oklch(0.32 0.08 150)', borderRadius: 4, fontSize: 9, flexShrink: 0, fontFamily: 'var(--font-sans)' }}>{row.tag}</span>
                </div>
              ))}
            </div>
            <p className="i-meta">Relay · Feature Design · 2025</p>
            <h3 className="i-title">Why. The decision ledger.</h3>
            <p className="i-desc">A capture system that meets people where work happens.</p>
          </Link>

          <div className="i-card" style={{ pointerEvents: 'none', opacity: 0.45 }} aria-hidden="true">
            <div className="i-thumb" style={{ background: `repeating-linear-gradient(135deg, transparent 0 12px, oklch(0.9 0.01 250) 12px 13px), var(--bg-tint)`, display: 'flex', alignItems: 'flex-end', padding: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, background: 'var(--bg)', padding: '3px 8px', borderRadius: 3, color: 'var(--mute)' }}>in progress</span>
            </div>
            <p className="i-meta">Studio · UX Research · 2023</p>
            <h3 className="i-title">Field study, retail logistics</h3>
          </div>

          <div className="i-card" style={{ pointerEvents: 'none', opacity: 0.45 }} aria-hidden="true">
            <div className="i-thumb" style={{ background: 'oklch(0.94 0.04 250)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '30%', border: '2px solid oklch(0.5 0.12 250)', borderRadius: 8, transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', inset: '35%', background: 'oklch(0.6 0.15 30)', borderRadius: 8, transform: 'rotate(6deg)' }} />
            </div>
            <p className="i-meta">Personal · Design Systems · 2023</p>
            <h3 className="i-title">Form library for a small team</h3>
          </div>
        </div>
      </section>

      <style>{`
        .i-hero-grid {
          display: flex;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .i-hero-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }
        }
        .i-work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 800px) {
          .i-work-grid { grid-template-columns: 1fr; }
        }
        .i-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .i-thumb {
          aspect-ratio: 4 / 3;
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s;
        }
        a.i-card:hover .i-thumb {
          box-shadow: 0 16px 36px -16px oklch(0.5 0.05 250 / 0.3);
        }
        .i-meta {
          font-family: var(--font-sans);
          font-size: 11px;
          color: var(--mute);
          margin: 14px 0 5px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .i-title {
          font-family: var(--font-serif);
          font-size: 20px;
          line-height: 1.25;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          font-weight: 400;
          color: var(--ink);
        }
        .i-desc {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--ink-soft);
          line-height: 1.55;
        }
        @media (prefers-reduced-motion: no-preference) {
          a.i-card { transition: transform 0.35s cubic-bezier(0.6, 0.01, 0, 1); }
          a.i-card:hover { transform: translateY(-3px); }
        }
      `}</style>

    </main>
  )
}
