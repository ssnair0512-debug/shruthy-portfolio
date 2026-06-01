/**
 * SAMPLE A — "Casual & Direct" (Yash Shenai energy)
 *
 * - Controlled font sizes, nothing bleeds off screen
 * - Identity through copy tone, not huge type
 * - Role presented naturally inline, no "INDEPENDENT" label
 * - Personal detail sentence adds warmth
 * - Experience as a compact 2-col list, not the hero
 */

import Link from 'next/link'

const experience = [
  { year: '2025', role: 'Product Designer', company: 'Relay (contract)', current: true },
  { year: '2024', role: 'Product Designer · WUD!', company: 'Personal venture, team of 2', current: false },
  { year: '2023', role: 'UX Design Intern', company: 'Studio engagement', current: false },
  { year: '2022', role: 'Design Researcher', company: 'Academic · field study', current: false },
]

const whyRows = [
  { num: '#48', title: 'Move onboarding email out of Mailchimp', tag: 'infra', time: 'Drafting' },
  { num: '#47', title: 'Audit log stays in Postgres', tag: 'infra', time: '5d ago' },
  { num: '#46', title: 'Drop system design round', tag: 'hiring', time: '9d ago' },
  { num: '#45', title: 'Decisions public by default', tag: 'product', time: '13d ago' },
]

export default function SampleA() {
  return (
    <main id="main-content">

      {/* ── Hero ── */}
      <section style={{ paddingTop: 64, paddingBottom: 56 }} className="wrap">

        {/* Role label — simple, no "INDEPENDENT" */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          letterSpacing: '0.06em',
          color: 'var(--mute)',
          marginBottom: 20,
        }}>
          product designer
        </p>

        {/* Headline — controlled size, conversational */}
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          maxWidth: '22ch',
          marginBottom: 24,
        }}>
          I design products that feel like someone{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 300 }}>
            actually thought about you.
          </em>
        </h1>

        {/* Personal bio — warm, specific */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          color: 'var(--ink-soft)',
          maxWidth: '46ch',
          lineHeight: 1.7,
          marginBottom: 32,
        }}>
          I&rsquo;m Shruthy — currently designing decision capture at{' '}
          <strong style={{ fontWeight: 500, color: 'var(--ink)' }}>Relay</strong>.
          Previously built WUD! from 0 to 1 with a team of 2.
          I care about the unglamorous details: empty states, onboarding,
          the screen nobody redesigns.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href="#work" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '10px 20px', borderRadius: 999,
            fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-sans)',
            background: 'var(--ink)', color: '#fff',
          }}>
            View work
          </a>
          <Link href="/about" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '10px 20px', borderRadius: 999,
            fontSize: 13, fontWeight: 500, fontFamily: 'var(--font-sans)',
            background: 'transparent', color: 'var(--ink)',
            border: '1px solid var(--rule)',
          }}>
            About me
          </Link>
        </div>
      </section>

      {/* ── Experience — compact 2-col list ── */}
      <section className="wrap" style={{ paddingBottom: 64 }}>
        <div style={{
          borderTop: '1px solid var(--rule)',
          paddingTop: 28,
          display: 'grid',
          gridTemplateColumns: '80px 1fr',
          gap: '10px 24px',
        }}
          className="exp-list"
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
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: exp.current ? 'var(--accent)' : 'var(--mute)',
                paddingTop: 2,
                fontVariantNumeric: 'tabular-nums',
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
          marginBottom: 0,
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 11,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--mute)', fontWeight: 500,
          }}>
            Selected work
          </p>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: 11,
            color: 'var(--mute)',
          }}>
            02 shipped · 04 in progress
          </span>
        </div>

        <div className="work-grid">

          <Link href="/projects/wud" className="work-card-anchor">
            <div className="work-thumb" style={{
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
            <p className="work-meta">Personal · Product Design · 2024 · Team of 2</p>
            <h3 className="work-title">WUD! Reimagining the social event lifecycle</h3>
            <p className="work-desc">4 apps replaced with 1. 60% to 91% Create Event completion. 14 user interviews informed a journey-map pivot.</p>
          </Link>

          <Link href="/projects/why" className="work-card-anchor">
            <div className="work-thumb" style={{
              background: 'var(--green-cream)', padding: 20,
              display: 'flex', flexDirection: 'column', gap: 8,
              fontFamily: 'var(--font-mono)', fontSize: 11,
            }}>
              {whyRows.map((row) => (
                <div key={row.num} style={{
                  background: '#fff', border: '1px solid oklch(0.9 0.02 150)',
                  borderRadius: 8, padding: '12px 14px',
                  display: 'flex', gap: 10, alignItems: 'center',
                }}>
                  <span style={{ color: 'oklch(0.6 0.05 150)', fontSize: 10, flexShrink: 0 }}>{row.num}</span>
                  <span style={{ color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.title}</span>
                  <span style={{ padding: '2px 8px', background: 'oklch(0.92 0.05 150)', color: 'oklch(0.32 0.08 150)', borderRadius: 4, fontSize: 9, flexShrink: 0 }}>{row.tag}</span>
                  <span style={{ color: 'var(--mute)', fontSize: 10, marginLeft: 'auto', flexShrink: 0 }}>{row.time}</span>
                </div>
              ))}
            </div>
            <p className="work-meta">Relay · Feature Design · 2025 · Team of 2</p>
            <h3 className="work-title">Why. The decision ledger.</h3>
            <p className="work-desc">A capture system that meets people where work happens. 3 timing shapes, 13 explored directions, 1 working principle.</p>
          </Link>

          <div className="work-card-anchor" style={{ pointerEvents: 'none', opacity: 0.5 }} aria-hidden="true">
            <div className="work-thumb" style={{ background: `repeating-linear-gradient(135deg, transparent 0 12px, oklch(0.9 0.01 250) 12px 13px), var(--bg-tint)`, display: 'flex', alignItems: 'flex-end', padding: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, background: 'var(--bg)', padding: '3px 8px', borderRadius: 3, color: 'var(--mute)' }}>in progress</span>
            </div>
            <p className="work-meta">Studio · UX Research · 2023</p>
            <h3 className="work-title">Field study, retail logistics</h3>
            <p className="work-desc">Synthesis underway.</p>
          </div>

          <div className="work-card-anchor" style={{ pointerEvents: 'none', opacity: 0.5 }} aria-hidden="true">
            <div className="work-thumb" style={{ background: 'oklch(0.94 0.04 250)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '30%', border: '2px solid oklch(0.5 0.12 250)', borderRadius: 8, transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', inset: '35%', background: 'oklch(0.6 0.15 30)', borderRadius: 8, transform: 'rotate(6deg)' }} />
            </div>
            <p className="work-meta">Personal · Design Systems · 2023</p>
            <h3 className="work-title">Form library for a small team</h3>
            <p className="work-desc">Coming soon.</p>
          </div>

        </div>
      </section>

      <style>{`
        .exp-list { align-items: start; }
        .work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 800px) {
          .work-grid { grid-template-columns: 1fr; }
          .exp-list { grid-template-columns: 60px 1fr; }
        }
        .work-card-anchor {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        a.work-card-anchor:hover { transform: translateY(-3px); }
        .work-thumb {
          aspect-ratio: 4 / 3;
          width: 100%;
          border-radius: var(--radius);
          background: var(--bg-tint);
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s;
        }
        a.work-card-anchor:hover .work-thumb {
          box-shadow: 0 16px 36px -16px oklch(0.5 0.05 250 / 0.3);
        }
        .work-meta {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--mute);
          margin: 14px 0 5px;
          letter-spacing: 0.03em;
        }
        .work-title {
          font-family: var(--font-serif);
          font-size: 20px;
          line-height: 1.25;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          font-weight: 400;
        }
        .work-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.55;
          max-width: 48ch;
        }
        @media (prefers-reduced-motion: no-preference) {
          a.work-card-anchor {
            transition: transform 0.35s cubic-bezier(0.6, 0.01, 0, 1);
          }
        }
      `}</style>

    </main>
  )
}
