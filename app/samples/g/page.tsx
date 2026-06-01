/**
 * SAMPLE G — "Inline Personality"
 *
 * Inspired by: the "Meet ✌️" reference — large flowing prose where
 * small inline visual markers (colored pill tags, accent spans) sit
 * inside the text like punctuation. Conversational, not declarative.
 * Dot-grid background adds texture without weight.
 *
 * Hero is ONE paragraph + two links. Nothing else above the fold.
 */

import Link from 'next/link'

const whyRows = [
  { num: '#48', title: 'Move onboarding email out of Mailchimp', tag: 'infra', time: 'Drafting' },
  { num: '#47', title: 'Audit log stays in Postgres', tag: 'infra', time: '5d ago' },
  { num: '#46', title: 'Drop system design round', tag: 'hiring', time: '9d ago' },
  { num: '#45', title: 'Decisions public by default', tag: 'product', time: '13d ago' },
]

export default function SampleG() {
  return (
    <main id="main-content">

      {/* ── Hero — inline personality ── */}
      <section
        className="g-hero-section"
        style={{
          paddingTop: 80,
          paddingBottom: 80,
          position: 'relative',
        }}
      >
        {/* Dot-grid background texture */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, oklch(0.75 0.01 250) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.45,
            pointerEvents: 'none',
          }}
        />

        <div className="wrap" style={{ position: 'relative' }}>
          {/* Intro label */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--mute)',
            fontWeight: 500,
            marginBottom: 28,
          }}>
            Product Designer · Mumbai
          </p>

          {/* The flowing headline — inline markers mixed in */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4.5vw, 3.75rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
            maxWidth: '22ch',
            color: 'var(--ink)',
          }}>
            Shruthy{' '}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              verticalAlign: 'middle',
              fontSize: '0.55em',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              padding: '3px 10px',
              borderRadius: 999,
              margin: '0 4px',
              position: 'relative',
              top: '-0.1em',
            }}>
              ✌ designer
            </span>{' '}
            who thrives in{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--mute)', fontWeight: 300 }}>collaborative</em>{' '}
            spaces.{' '}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              verticalAlign: 'middle',
              fontSize: '0.55em',
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              background: 'var(--plum-soft)',
              color: 'var(--plum)',
              padding: '3px 10px',
              borderRadius: 999,
              margin: '0 4px',
              position: 'relative',
              top: '-0.1em',
            }}>
              currently @ relay
            </span>
          </h1>

          {/* Minimal links */}
          <div style={{ marginTop: 40, display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="#work" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--ink)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              borderBottom: '1.5px solid var(--ink)',
              paddingBottom: 1,
            }}>
              See work
            </a>
            <Link href="/about" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: 'var(--mute)',
            }}>
              About
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: 'var(--mute)',
            }}>
              Résumé
            </a>
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

        <div className="g-work-grid">
          <Link href="/projects/wud" className="g-card">
            <div className="g-thumb" style={{
              background: 'linear-gradient(135deg, #f4ecff 0%, #ffd4cc 50%, #c5f5e1 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
            }}>
              <div style={{ position: 'absolute', width: '60%', height: '60%', borderRadius: '50%', background: 'oklch(0.85 0.1 290 / 0.4)', top: '-10%', right: '-10%' }} />
              <div style={{ position: 'absolute', width: '50%', height: '50%', borderRadius: '50%', background: 'oklch(0.88 0.08 25 / 0.5)', bottom: '-10%', left: '-10%' }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 64, color: '#16181d', zIndex: 2, letterSpacing: '-0.04em', position: 'relative' }}>
                WUD<span style={{ color: 'oklch(0.55 0.18 290)' }}>!</span>
              </div>
            </div>
            <p className="g-meta">Personal · Product Design · 2024</p>
            <h3 className="g-title">WUD! Reimagining the social event lifecycle</h3>
            <p className="g-desc">4 apps replaced with 1. 60% to 91% Create Event completion.</p>
          </Link>

          <Link href="/projects/why" className="g-card">
            <div className="g-thumb" style={{ background: 'var(--green-cream)', padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {whyRows.map((row) => (
                <div key={row.num} style={{ background: '#fff', border: '1px solid oklch(0.9 0.02 150)', borderRadius: 8, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ color: 'oklch(0.6 0.05 150)', fontSize: 10, flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{row.num}</span>
                  <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.title}</span>
                  <span style={{ padding: '2px 8px', background: 'oklch(0.92 0.05 150)', color: 'oklch(0.32 0.08 150)', borderRadius: 4, fontSize: 9, flexShrink: 0, fontFamily: 'var(--font-sans)' }}>{row.tag}</span>
                </div>
              ))}
            </div>
            <p className="g-meta">Relay · Feature Design · 2025</p>
            <h3 className="g-title">Why. The decision ledger.</h3>
            <p className="g-desc">A capture system that meets people where work happens.</p>
          </Link>

          <div className="g-card" style={{ pointerEvents: 'none', opacity: 0.4 }} aria-hidden="true">
            <div className="g-thumb" style={{ background: `repeating-linear-gradient(135deg, transparent 0 12px, oklch(0.9 0.01 250) 12px 13px), var(--bg-tint)`, display: 'flex', alignItems: 'flex-end', padding: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, background: 'var(--bg)', padding: '3px 8px', borderRadius: 3, color: 'var(--mute)' }}>in progress</span>
            </div>
            <p className="g-meta">Studio · UX Research · 2023</p>
            <h3 className="g-title">Field study, retail logistics</h3>
          </div>

          <div className="g-card" style={{ pointerEvents: 'none', opacity: 0.4 }} aria-hidden="true">
            <div className="g-thumb" style={{ background: 'oklch(0.94 0.04 250)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '30%', border: '2px solid oklch(0.5 0.12 250)', borderRadius: 8, transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', inset: '35%', background: 'oklch(0.6 0.15 30)', borderRadius: 8, transform: 'rotate(6deg)' }} />
            </div>
            <p className="g-meta">Personal · Design Systems · 2023</p>
            <h3 className="g-title">Form library for a small team</h3>
          </div>
        </div>
      </section>

      <style>{`
        .g-work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 800px) {
          .g-work-grid { grid-template-columns: 1fr; }
          .g-hero-section h1 { font-size: clamp(2rem, 7vw, 3rem) !important; }
        }
        .g-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .g-thumb {
          aspect-ratio: 4 / 3;
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s;
        }
        a.g-card:hover .g-thumb {
          box-shadow: 0 16px 36px -16px oklch(0.5 0.05 250 / 0.3);
        }
        .g-meta {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--mute);
          margin: 14px 0 5px;
          letter-spacing: 0.03em;
        }
        .g-title {
          font-family: var(--font-serif);
          font-size: 20px;
          line-height: 1.25;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          font-weight: 400;
        }
        .g-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.55;
        }
        @media (prefers-reduced-motion: no-preference) {
          a.g-card { transition: transform 0.35s cubic-bezier(0.6, 0.01, 0, 1); }
          a.g-card:hover { transform: translateY(-3px); }
        }
      `}</style>

    </main>
  )
}
