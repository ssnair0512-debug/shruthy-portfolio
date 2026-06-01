/**
 * SAMPLE D — "Name First / Concrete"
 *
 * Direction: Lead with your name, not a tagline.
 * The current hero opens with a metaphor ("connective tissue") —
 * this one opens with who you are, then earns the tagline with specifics.
 *
 * - Name as H1 in large serif
 * - Role + current engagement as a quiet one-liner
 * - Short, specific bio (no metaphors, no abstraction)
 * - No experience sidebar — kept in a light strip below
 * - Breathing room, nothing competing for attention
 */

import Link from 'next/link'

const experience = [
  { year: '2025', role: 'Product Designer', company: 'Relay (contract)', current: true },
  { year: '2024', role: 'Product Designer · WUD!', company: 'Team of 2', current: false },
  { year: '2023', role: 'UX Design Intern', company: 'Studio engagement', current: false },
  { year: '2022', role: 'Design Researcher', company: 'Academic · field study', current: false },
]

const whyRows = [
  { num: '#48', title: 'Move onboarding email out of Mailchimp', tag: 'infra', time: 'Drafting' },
  { num: '#47', title: 'Audit log stays in Postgres', tag: 'infra', time: '5d ago' },
  { num: '#46', title: 'Drop system design round', tag: 'hiring', time: '9d ago' },
  { num: '#45', title: 'Decisions public by default', tag: 'product', time: '13d ago' },
]

export default function SampleD() {
  return (
    <main id="main-content">

      {/* ── Hero ── */}
      <section style={{ paddingTop: 80, paddingBottom: 72 }} className="wrap">

        {/* Status pill */}
        <div style={{ marginBottom: 36 }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: 'var(--green-deep)',
            background: 'var(--green-cream)',
            border: '1px solid oklch(0.88 0.06 150)',
            padding: '5px 12px',
            borderRadius: 999,
            fontWeight: 500,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: 'var(--green)',
              display: 'inline-block',
            }} />
            Currently at Relay
          </span>
        </div>

        {/* Name — the identity anchor */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: 400,
          letterSpacing: '-0.03em',
          lineHeight: 1.0,
          marginBottom: 20,
        }}>
          Shruthy Nair
        </h1>

        {/* Role label — earns its place below the name */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
          color: 'var(--ink-soft)',
          lineHeight: 1.65,
          maxWidth: '50ch',
          marginBottom: 36,
        }}>
          Product designer, three years in. I work end-to-end — research to shipped —
          and I'm most useful when the problem isn't fully defined yet.
          Right now: designing decision capture at Relay.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href="#work" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '11px 22px', borderRadius: 999,
            fontSize: 13.5, fontWeight: 500, fontFamily: 'var(--font-sans)',
            background: 'var(--ink)', color: '#fff',
            letterSpacing: '0.01em',
          }}>
            View work
          </a>
          <Link href="/about" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '11px 22px', borderRadius: 999,
            fontSize: 13.5, fontWeight: 500, fontFamily: 'var(--font-sans)',
            background: 'transparent', color: 'var(--ink)',
            border: '1px solid var(--rule)',
            letterSpacing: '0.01em',
          }}>
            About me
          </Link>
        </div>
      </section>

      {/* ── Experience strip — quiet, doesn't compete ── */}
      <section className="wrap" style={{ paddingBottom: 56 }}>
        <div style={{
          borderTop: '1px solid var(--rule)',
          paddingTop: 20,
          display: 'flex',
          gap: 32,
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
          className="d-exp-strip"
        >
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--mute)',
            fontWeight: 500,
            flexShrink: 0,
            alignSelf: 'center',
          }}>
            Experience
          </span>
          {experience.map((exp, i) => (
            <div key={exp.year} style={{
              flexShrink: 0,
              paddingRight: i < experience.length - 1 ? 32 : 0,
              borderRight: i < experience.length - 1 ? '1px solid var(--rule)' : 'none',
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: exp.current ? 500 : 400,
                color: exp.current ? 'var(--ink)' : 'var(--ink-soft)',
                whiteSpace: 'nowrap',
              }}>
                {exp.role}
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: 'var(--mute)',
                marginTop: 2,
                whiteSpace: 'nowrap',
              }}>
                {exp.company} &middot;{' '}
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>{exp.year}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section id="work" className="wrap" style={{ paddingBottom: 80 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderTop: '1px solid var(--rule)',
          padding: '20px 0 32px',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 11,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--mute)', fontWeight: 500,
          }}>
            Selected work
          </p>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--mute)' }}>
            02 shipped · 04 in progress
          </span>
        </div>

        <div className="d-work-grid">

          <Link href="/projects/wud" className="d-work-card">
            <div className="d-thumb" style={{
              background: 'linear-gradient(135deg, #f4ecff 0%, #ffd4cc 50%, #c5f5e1 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
            }}>
              <div style={{ position: 'absolute', width: '60%', height: '60%', borderRadius: '50%', background: 'oklch(0.85 0.1 290 / 0.4)', top: '-10%', right: '-10%' }} />
              <div style={{ position: 'absolute', width: '50%', height: '50%', borderRadius: '50%', background: 'oklch(0.88 0.08 25 / 0.5)', bottom: '-10%', left: '-10%' }} />
              <div style={{ position: 'absolute', right: '18%', top: '28%', zIndex: 1 }}>
                <div style={{ position: 'absolute', width: 56, height: 56, borderRadius: '50%', background: 'oklch(0.55 0.18 290)', boxShadow: '0 8px 16px -4px rgba(0,0,0,0.2)', top: 0, left: 30 }} />
                <div style={{ position: 'absolute', width: 36, height: 36, borderRadius: '50%', background: 'oklch(0.6 0.16 25)', boxShadow: '0 8px 16px -4px rgba(0,0,0,0.2)', top: 30, left: -10 }} />
                <div style={{ position: 'absolute', width: 28, height: 28, borderRadius: '50%', background: 'oklch(0.65 0.13 160)', boxShadow: '0 8px 16px -4px rgba(0,0,0,0.2)', top: 70, left: 28 }} />
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 64, color: '#16181d', zIndex: 2, letterSpacing: '-0.04em', position: 'relative' }}>
                WUD<span style={{ color: 'oklch(0.55 0.18 290)' }}>!</span>
              </div>
            </div>
            <p className="d-meta">Personal · Product Design · 2024 · Team of 2</p>
            <h3 className="d-title">WUD! Reimagining the social event lifecycle</h3>
            <p className="d-desc">4 apps replaced with 1. 60% to 91% Create Event completion. 14 user interviews informed a journey-map pivot.</p>
          </Link>

          <Link href="/projects/why" className="d-work-card">
            <div className="d-thumb" style={{
              background: 'var(--green-cream)', padding: 20,
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              {whyRows.map((row) => (
                <div key={row.num} style={{
                  background: '#fff', border: '1px solid oklch(0.9 0.02 150)',
                  borderRadius: 8, padding: '12px 14px',
                  display: 'flex', gap: 10, alignItems: 'center',
                }}>
                  <span style={{ color: 'oklch(0.6 0.05 150)', fontSize: 10, flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{row.num}</span>
                  <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.title}</span>
                  <span style={{ padding: '2px 8px', background: 'oklch(0.92 0.05 150)', color: 'oklch(0.32 0.08 150)', borderRadius: 4, fontSize: 9, flexShrink: 0, fontFamily: 'var(--font-sans)' }}>{row.tag}</span>
                  <span style={{ color: 'var(--mute)', fontSize: 10, marginLeft: 'auto', flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{row.time}</span>
                </div>
              ))}
            </div>
            <p className="d-meta">Relay · Feature Design · 2025 · Team of 2</p>
            <h3 className="d-title">Why. The decision ledger.</h3>
            <p className="d-desc">A capture system that meets people where work happens. 3 timing shapes, 13 explored directions, 1 working principle.</p>
          </Link>

          <div className="d-work-card" style={{ pointerEvents: 'none', opacity: 0.45 }} aria-hidden="true">
            <div className="d-thumb" style={{ background: `repeating-linear-gradient(135deg, transparent 0 12px, oklch(0.9 0.01 250) 12px 13px), var(--bg-tint)`, display: 'flex', alignItems: 'flex-end', padding: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, background: 'var(--bg)', padding: '3px 8px', borderRadius: 3, color: 'var(--mute)' }}>in progress</span>
            </div>
            <p className="d-meta">Studio · UX Research · 2023</p>
            <h3 className="d-title">Field study, retail logistics</h3>
            <p className="d-desc">Synthesis underway.</p>
          </div>

          <div className="d-work-card" style={{ pointerEvents: 'none', opacity: 0.45 }} aria-hidden="true">
            <div className="d-thumb" style={{ background: 'oklch(0.94 0.04 250)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '30%', border: '2px solid oklch(0.5 0.12 250)', borderRadius: 8, transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', inset: '35%', background: 'oklch(0.6 0.15 30)', borderRadius: 8, transform: 'rotate(6deg)' }} />
            </div>
            <p className="d-meta">Personal · Design Systems · 2023</p>
            <h3 className="d-title">Form library for a small team</h3>
            <p className="d-desc">Coming soon.</p>
          </div>
        </div>
      </section>

      <style>{`
        .d-exp-strip::-webkit-scrollbar { display: none; }
        .d-work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 800px) {
          .d-work-grid { grid-template-columns: 1fr; }
        }
        .d-work-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        a.d-work-card:hover { transform: translateY(-3px); }
        .d-thumb {
          aspect-ratio: 4 / 3;
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s;
        }
        a.d-work-card:hover .d-thumb {
          box-shadow: 0 16px 36px -16px oklch(0.5 0.05 250 / 0.3);
        }
        .d-meta {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--mute);
          margin: 14px 0 5px;
          letter-spacing: 0.03em;
        }
        .d-title {
          font-family: var(--font-serif);
          font-size: 20px;
          line-height: 1.25;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          font-weight: 400;
        }
        .d-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.55;
          max-width: 48ch;
        }
        @media (prefers-reduced-motion: no-preference) {
          a.d-work-card {
            transition: transform 0.35s cubic-bezier(0.6, 0.01, 0, 1);
          }
        }
      `}</style>

    </main>
  )
}
