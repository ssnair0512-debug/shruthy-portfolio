/**
 * SAMPLE H — "Two-Column Typographic"
 *
 * Inspired by: Jithuna Das reference — split layout with a personal
 * illustration/avatar placeholder on the left and stacked large-type
 * keywords on the right. Warm cream background. Mix of serif and sans.
 * The keywords replace a paragraph — they communicate the designer's
 * values faster than sentences do.
 *
 * Hero: avatar left, 3 stacked keywords right. One sentence below.
 */

import Link from 'next/link'

const whyRows = [
  { num: '#48', title: 'Move onboarding email out of Mailchimp', tag: 'infra', time: 'Drafting' },
  { num: '#47', title: 'Audit log stays in Postgres', tag: 'infra', time: '5d ago' },
  { num: '#46', title: 'Drop system design round', tag: 'hiring', time: '9d ago' },
  { num: '#45', title: 'Decisions public by default', tag: 'product', time: '13d ago' },
]

const keywords = [
  { word: 'Empathy', style: 'normal' as const },
  { word: 'Craft', style: 'italic' as const },
  { word: 'Intention', style: 'normal' as const },
]

export default function SampleH() {
  return (
    <main id="main-content" style={{ background: '#f7f4ee', minHeight: '100vh' }}>

      {/* ── Hero — two-column typographic ── */}
      <section style={{ paddingTop: 72, paddingBottom: 72 }} className="wrap">
        <div className="h-hero-grid">

          {/* Left — name + avatar placeholder */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'oklch(0.55 0.03 60)',
              fontWeight: 500,
            }}>
              Hi, I&apos;m
            </p>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              color: 'oklch(0.18 0.02 60)',
            }}>
              Shruthy<br />Nair
            </h1>

            {/* Avatar placeholder — hand-drawn feel via dashed border + blob shape */}
            <div
              aria-hidden="true"
              style={{
                width: 160,
                height: 160,
                borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
                background: 'oklch(0.88 0.05 60)',
                border: '2px dashed oklch(0.65 0.06 60)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 52,
                color: 'oklch(0.55 0.08 60)',
                lineHeight: 1,
                userSelect: 'none',
              }}>
                S
              </span>
            </div>

            {/* One-line context */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13.5,
              color: 'oklch(0.45 0.03 60)',
              lineHeight: 1.6,
              maxWidth: '26ch',
            }}>
              Product designer · currently at Relay, based in Mumbai.
            </p>

            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <a href="#work" style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 600,
                color: 'oklch(0.18 0.02 60)',
                borderBottom: '1.5px solid oklch(0.18 0.02 60)',
                paddingBottom: 1,
              }}>
                View work
              </a>
              <Link href="/about" style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                color: 'oklch(0.55 0.03 60)',
              }}>
                About
              </Link>
            </div>
          </div>

          {/* Right — stacked keywords */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 0 }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'oklch(0.55 0.03 60)',
              fontWeight: 500,
              marginBottom: 16,
            }}>
              Product designer focused on
            </p>

            {keywords.map(({ word, style }) => (
              <div
                key={word}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3rem, 7vw, 6rem)',
                  fontWeight: 400,
                  fontStyle: style,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.0,
                  color: 'oklch(0.18 0.02 60)',
                  borderBottom: '1px solid oklch(0.82 0.04 60)',
                  paddingBottom: 12,
                  marginBottom: 12,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                {word}
                {word === 'Craft' && (
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'var(--accent-soft)',
                      border: '1px solid oklch(0.88 0.06 25)',
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section id="work" className="wrap" style={{ paddingBottom: 80 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderTop: '1px solid oklch(0.82 0.04 60)',
          padding: '20px 0 32px',
        }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.55 0.03 60)', fontWeight: 500 }}>
            Selected work
          </p>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'oklch(0.55 0.03 60)' }}>
            02 shipped · 04 in progress
          </span>
        </div>

        <div className="h-work-grid">
          <Link href="/projects/wud" className="h-card">
            <div className="h-thumb" style={{
              background: 'linear-gradient(135deg, #f4ecff 0%, #ffd4cc 50%, #c5f5e1 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
            }}>
              <div style={{ position: 'absolute', width: '60%', height: '60%', borderRadius: '50%', background: 'oklch(0.85 0.1 290 / 0.4)', top: '-10%', right: '-10%' }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 64, color: '#16181d', zIndex: 2, letterSpacing: '-0.04em', position: 'relative' }}>
                WUD<span style={{ color: 'oklch(0.55 0.18 290)' }}>!</span>
              </div>
            </div>
            <p className="h-meta">Personal · Product Design · 2024</p>
            <h3 className="h-title">WUD! Reimagining the social event lifecycle</h3>
            <p className="h-desc">4 apps replaced with 1. 60% to 91% Create Event completion.</p>
          </Link>

          <Link href="/projects/why" className="h-card">
            <div className="h-thumb" style={{ background: 'var(--green-cream)', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {whyRows.map((row) => (
                <div key={row.num} style={{ background: '#fff', border: '1px solid oklch(0.9 0.02 150)', borderRadius: 8, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ color: 'oklch(0.6 0.05 150)', fontSize: 10, flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{row.num}</span>
                  <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.title}</span>
                  <span style={{ padding: '2px 8px', background: 'oklch(0.92 0.05 150)', color: 'oklch(0.32 0.08 150)', borderRadius: 4, fontSize: 9, flexShrink: 0, fontFamily: 'var(--font-sans)' }}>{row.tag}</span>
                </div>
              ))}
            </div>
            <p className="h-meta">Relay · Feature Design · 2025</p>
            <h3 className="h-title">Why. The decision ledger.</h3>
            <p className="h-desc">A capture system that meets people where work happens.</p>
          </Link>

          <div className="h-card" style={{ pointerEvents: 'none', opacity: 0.4 }} aria-hidden="true">
            <div className="h-thumb" style={{ background: `repeating-linear-gradient(135deg, transparent 0 12px, oklch(0.88 0.03 60) 12px 13px), oklch(0.92 0.03 60)`, display: 'flex', alignItems: 'flex-end', padding: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, background: '#f7f4ee', padding: '3px 8px', borderRadius: 3, color: 'oklch(0.55 0.03 60)' }}>in progress</span>
            </div>
            <p className="h-meta">Studio · UX Research · 2023</p>
            <h3 className="h-title">Field study, retail logistics</h3>
          </div>

          <div className="h-card" style={{ pointerEvents: 'none', opacity: 0.4 }} aria-hidden="true">
            <div className="h-thumb" style={{ background: 'oklch(0.90 0.04 250)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '30%', border: '2px solid oklch(0.5 0.12 250)', borderRadius: 8, transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', inset: '35%', background: 'oklch(0.6 0.15 30)', borderRadius: 8, transform: 'rotate(6deg)' }} />
            </div>
            <p className="h-meta">Personal · Design Systems · 2023</p>
            <h3 className="h-title">Form library for a small team</h3>
          </div>
        </div>
      </section>

      <style>{`
        .h-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 60px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .h-hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        .h-work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 800px) {
          .h-work-grid { grid-template-columns: 1fr; }
        }
        .h-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .h-thumb {
          aspect-ratio: 4 / 3;
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s;
        }
        a.h-card:hover .h-thumb {
          box-shadow: 0 16px 36px -16px oklch(0.4 0.06 60 / 0.25);
        }
        .h-meta {
          font-family: var(--font-sans);
          font-size: 12px;
          color: oklch(0.55 0.03 60);
          margin: 14px 0 5px;
          letter-spacing: 0.03em;
        }
        .h-title {
          font-family: var(--font-serif);
          font-size: 20px;
          line-height: 1.25;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          font-weight: 400;
          color: oklch(0.18 0.02 60);
        }
        .h-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: oklch(0.38 0.02 60);
          line-height: 1.55;
        }
        @media (prefers-reduced-motion: no-preference) {
          a.h-card { transition: transform 0.35s cubic-bezier(0.6, 0.01, 0, 1); }
          a.h-card:hover { transform: translateY(-3px); }
        }
      `}</style>

    </main>
  )
}
