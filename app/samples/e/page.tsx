/**
 * SAMPLE E — "Split: Statement + Evidence"
 *
 * Direction: The current hero asks you to trust the headline alone.
 * This one pairs a punchy left statement with concrete evidence on the right —
 * the headline is earned by what sits beside it.
 *
 * - Left: short, confident H1 + one-sentence descriptor
 * - Right: 3 concrete "proof points" — specific things you've done
 * - Experience as a compact list below the fold
 * - The split is more balanced than the current 1.4fr/1fr hero
 */

import Link from 'next/link'

const proofPoints = [
  {
    stat: '60→91%',
    label: 'Create Event completion',
    context: 'WUD! · 2024',
  },
  {
    stat: '14',
    label: 'user interviews that changed the direction',
    context: 'WUD! journey-map pivot',
  },
  {
    stat: '13',
    label: 'design directions explored',
    context: 'Why. · Relay · 2025',
  },
]

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

export default function SampleE() {
  return (
    <main id="main-content">

      {/* ── Hero ── */}
      <section style={{ paddingTop: 72, paddingBottom: 64 }} className="wrap">
        <div className="e-hero-grid">

          {/* Left — statement */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.1em',
              color: 'var(--mute)',
              marginBottom: 22,
            }}>
              Shruthy Nair · Product Designer
            </p>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.25rem, 4.5vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              marginBottom: 24,
            }}>
              I design products
              that are clear to use
              and{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>
                honest in their constraints.
              </em>
            </h1>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--ink-soft)',
              lineHeight: 1.65,
              maxWidth: '38ch',
              marginBottom: 32,
            }}>
              Three years in. Currently designing decision capture at Relay.
              Previously built WUD! from 0 to 1 with a team of 2.
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#work" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '11px 22px', borderRadius: 999,
                fontSize: 13.5, fontWeight: 500, fontFamily: 'var(--font-sans)',
                background: 'var(--ink)', color: '#fff',
              }}>
                View work
              </a>
              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '11px 22px', borderRadius: 999,
                fontSize: 13.5, fontWeight: 500, fontFamily: 'var(--font-sans)',
                background: 'transparent', color: 'var(--ink)',
                border: '1px solid var(--rule)',
              }}>
                About me
              </Link>
            </div>
          </div>

          {/* Right — proof points */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--mute)',
              fontWeight: 500,
              marginBottom: 14,
            }}>
              By the numbers
            </p>
            {proofPoints.map((p) => (
              <div key={p.stat} style={{
                padding: '18px 20px',
                borderRadius: 12,
                border: '1px solid var(--rule)',
                background: '#fff',
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.03em',
                  color: 'var(--ink)',
                  lineHeight: 1,
                  marginBottom: 6,
                }}>
                  {p.stat}
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13.5,
                  color: 'var(--ink-soft)',
                  lineHeight: 1.35,
                  marginBottom: 6,
                }}>
                  {p.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  color: 'var(--mute)',
                  letterSpacing: '0.05em',
                }}>
                  {p.context}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="wrap" style={{ paddingBottom: 56 }}>
        <div style={{
          borderTop: '1px solid var(--rule)',
          paddingTop: 24,
          display: 'grid',
          gridTemplateColumns: '80px 1fr',
          gap: '8px 24px',
        }}
          className="e-exp-list"
        >
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 11,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--mute)', fontWeight: 500,
            gridColumn: '1 / -1', marginBottom: 4,
          }}>
            Experience
          </p>
          {experience.map((exp) => (
            <>
              <span key={exp.year + '-year'} style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: exp.current ? 'var(--accent)' : 'var(--mute)',
                paddingTop: 3,
              }}>
                {exp.year}
              </span>
              <div key={exp.year + '-detail'} style={{ paddingBottom: 12, borderBottom: '1px solid var(--rule)' }}>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: 14,
                  fontWeight: exp.current ? 500 : 400,
                  color: exp.current ? 'var(--ink)' : 'var(--ink-soft)',
                }}>
                  {exp.role}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: 13,
                  color: 'var(--mute)', marginTop: 2,
                }}>
                  {exp.company}
                </p>
              </div>
            </>
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

        <div className="e-work-grid">

          <Link href="/projects/wud" className="e-work-card">
            <div className="e-thumb" style={{
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
            <p className="e-meta">Personal · Product Design · 2024 · Team of 2</p>
            <h3 className="e-title">WUD! Reimagining the social event lifecycle</h3>
            <p className="e-desc">4 apps replaced with 1. 60% to 91% Create Event completion. 14 user interviews informed a journey-map pivot.</p>
          </Link>

          <Link href="/projects/why" className="e-work-card">
            <div className="e-thumb" style={{
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
            <p className="e-meta">Relay · Feature Design · 2025 · Team of 2</p>
            <h3 className="e-title">Why. The decision ledger.</h3>
            <p className="e-desc">A capture system that meets people where work happens. 3 timing shapes, 13 explored directions, 1 working principle.</p>
          </Link>

          <div className="e-work-card" style={{ pointerEvents: 'none', opacity: 0.45 }} aria-hidden="true">
            <div className="e-thumb" style={{ background: `repeating-linear-gradient(135deg, transparent 0 12px, oklch(0.9 0.01 250) 12px 13px), var(--bg-tint)`, display: 'flex', alignItems: 'flex-end', padding: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, background: 'var(--bg)', padding: '3px 8px', borderRadius: 3, color: 'var(--mute)' }}>in progress</span>
            </div>
            <p className="e-meta">Studio · UX Research · 2023</p>
            <h3 className="e-title">Field study, retail logistics</h3>
            <p className="e-desc">Synthesis underway.</p>
          </div>

          <div className="e-work-card" style={{ pointerEvents: 'none', opacity: 0.45 }} aria-hidden="true">
            <div className="e-thumb" style={{ background: 'oklch(0.94 0.04 250)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '30%', border: '2px solid oklch(0.5 0.12 250)', borderRadius: 8, transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', inset: '35%', background: 'oklch(0.6 0.15 30)', borderRadius: 8, transform: 'rotate(6deg)' }} />
            </div>
            <p className="e-meta">Personal · Design Systems · 2023</p>
            <h3 className="e-title">Form library for a small team</h3>
            <p className="e-desc">Coming soon.</p>
          </div>
        </div>
      </section>

      <style>{`
        .e-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .e-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        .e-exp-list { align-items: start; }
        @media (max-width: 600px) {
          .e-exp-list { grid-template-columns: 56px 1fr; }
        }
        .e-work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 800px) {
          .e-work-grid { grid-template-columns: 1fr; }
        }
        .e-work-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        a.e-work-card:hover { transform: translateY(-3px); }
        .e-thumb {
          aspect-ratio: 4 / 3;
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s;
        }
        a.e-work-card:hover .e-thumb {
          box-shadow: 0 16px 36px -16px oklch(0.5 0.05 250 / 0.3);
        }
        .e-meta {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--mute);
          margin: 14px 0 5px;
          letter-spacing: 0.03em;
        }
        .e-title {
          font-family: var(--font-serif);
          font-size: 20px;
          line-height: 1.25;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          font-weight: 400;
        }
        .e-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.55;
          max-width: 48ch;
        }
        @media (prefers-reduced-motion: no-preference) {
          a.e-work-card {
            transition: transform 0.35s cubic-bezier(0.6, 0.01, 0, 1);
          }
        }
      `}</style>

    </main>
  )
}
