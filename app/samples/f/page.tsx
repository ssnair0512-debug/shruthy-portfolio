/**
 * SAMPLE F — "Sparse / The Work Speaks"
 *
 * Direction: Strip everything back. The current hero is dense —
 * headline + rotating quote + two CTAs + four experience cards.
 * This one trusts the work to carry the page.
 *
 * - Minimal hero: role, name, one sentence. That's it.
 * - No experience section above the fold — doesn't need to be there
 * - The work grid gets more vertical real estate
 * - Editorial spaciousness, like a well-edited portfolio book
 */

import Link from 'next/link'

const whyRows = [
  { num: '#48', title: 'Move onboarding email out of Mailchimp', tag: 'infra', time: 'Drafting' },
  { num: '#47', title: 'Audit log stays in Postgres', tag: 'infra', time: '5d ago' },
  { num: '#46', title: 'Drop system design round', tag: 'hiring', time: '9d ago' },
  { num: '#45', title: 'Decisions public by default', tag: 'product', time: '13d ago' },
]

const experience = [
  { year: '2025', role: 'Product Designer', company: 'Relay (contract)', current: true },
  { year: '2024', role: 'Product Designer · WUD!', company: 'Team of 2', current: false },
  { year: '2023', role: 'UX Design Intern', company: 'Studio engagement', current: false },
  { year: '2022', role: 'Design Researcher', company: 'Academic · field study', current: false },
]

export default function SampleF() {
  return (
    <main id="main-content">

      {/* ── Hero — deliberately spare ── */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }} className="wrap">

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

          {/* Role — sits alone, commands space */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--mute)',
            fontWeight: 500,
            marginBottom: 18,
          }}>
            Product Designer
          </p>

          {/* Name — the only large thing on the page */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            marginBottom: 40,
          }}>
            Shruthy
            <br />
            <span style={{ color: 'var(--mute)', fontWeight: 300 }}>Nair</span>
          </h1>

          {/* One sentence — enough */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
            color: 'var(--ink-soft)',
            maxWidth: '44ch',
            lineHeight: 1.65,
            marginBottom: 40,
          }}>
            I work at the intersection of research and craft to make products
            that feel considered — currently at{' '}
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Relay</span>,
            previously WUD!
          </p>

          {/* Minimal CTAs */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <a href="#work" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13.5,
              fontWeight: 500,
              color: 'var(--ink)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}>
              View work
              <span style={{ fontSize: 16, fontWeight: 300 }}>↓</span>
            </a>
            <span style={{ color: 'var(--rule-strong)', fontSize: 14 }}>·</span>
            <Link href="/about" style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13.5,
              fontWeight: 400,
              color: 'var(--mute)',
            }}>
              About me
            </Link>
            <span style={{ color: 'var(--rule-strong)', fontSize: 14 }}>·</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13.5,
                fontWeight: 400,
                color: 'var(--mute)',
              }}
            >
              Résumé
            </a>
          </div>
        </div>
      </section>

      {/* ── Selected Work — given more room ── */}
      <section id="work" className="wrap" style={{ paddingBottom: 80 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          borderTop: '1px solid var(--rule)',
          padding: '20px 0 36px',
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

        <div className="f-work-grid">

          <Link href="/projects/wud" className="f-work-card">
            <div className="f-thumb" style={{
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
            <p className="f-meta">Personal · Product Design · 2024 · Team of 2</p>
            <h3 className="f-title">WUD! Reimagining the social event lifecycle</h3>
            <p className="f-desc">4 apps replaced with 1. 60% to 91% Create Event completion. 14 user interviews informed a journey-map pivot.</p>
          </Link>

          <Link href="/projects/why" className="f-work-card">
            <div className="f-thumb" style={{
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
            <p className="f-meta">Relay · Feature Design · 2025 · Team of 2</p>
            <h3 className="f-title">Why. The decision ledger.</h3>
            <p className="f-desc">A capture system that meets people where work happens. 3 timing shapes, 13 explored directions, 1 working principle.</p>
          </Link>

          <div className="f-work-card" style={{ pointerEvents: 'none', opacity: 0.45 }} aria-hidden="true">
            <div className="f-thumb" style={{ background: `repeating-linear-gradient(135deg, transparent 0 12px, oklch(0.9 0.01 250) 12px 13px), var(--bg-tint)`, display: 'flex', alignItems: 'flex-end', padding: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, background: 'var(--bg)', padding: '3px 8px', borderRadius: 3, color: 'var(--mute)' }}>in progress</span>
            </div>
            <p className="f-meta">Studio · UX Research · 2023</p>
            <h3 className="f-title">Field study, retail logistics</h3>
            <p className="f-desc">Synthesis underway.</p>
          </div>

          <div className="f-work-card" style={{ pointerEvents: 'none', opacity: 0.45 }} aria-hidden="true">
            <div className="f-thumb" style={{ background: 'oklch(0.94 0.04 250)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '30%', border: '2px solid oklch(0.5 0.12 250)', borderRadius: 8, transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', inset: '35%', background: 'oklch(0.6 0.15 30)', borderRadius: 8, transform: 'rotate(6deg)' }} />
            </div>
            <p className="f-meta">Personal · Design Systems · 2023</p>
            <h3 className="f-title">Form library for a small team</h3>
            <p className="f-desc">Coming soon.</p>
          </div>
        </div>
      </section>

      {/* ── Experience — at the bottom, not competing ── */}
      <section className="wrap" style={{ paddingBottom: 80 }}>
        <div style={{
          borderTop: '1px solid var(--rule)',
          paddingTop: 24,
          display: 'flex',
          gap: 0,
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: 11,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--mute)', fontWeight: 500,
            width: '100%', marginBottom: 18,
          }}>
            Experience
          </p>
          {experience.map((exp, i) => (
            <div key={exp.year} style={{
              flex: '1 1 180px',
              paddingRight: 24,
              paddingBottom: 12,
              borderRight: i < experience.length - 1 ? '1px solid var(--rule)' : 'none',
              marginRight: i < experience.length - 1 ? 24 : 0,
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 13,
                fontWeight: exp.current ? 500 : 400,
                color: exp.current ? 'var(--ink)' : 'var(--ink-soft)',
              }}>
                {exp.role}
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>
                {exp.company}
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: exp.current ? 'var(--accent)' : 'var(--mute)', marginTop: 5,
              }}>
                {exp.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .f-work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 800px) {
          .f-work-grid { grid-template-columns: 1fr; }
        }
        .f-work-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        a.f-work-card:hover { transform: translateY(-3px); }
        .f-thumb {
          aspect-ratio: 4 / 3;
          width: 100%;
          border-radius: var(--radius);
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.3s;
        }
        a.f-work-card:hover .f-thumb {
          box-shadow: 0 16px 36px -16px oklch(0.5 0.05 250 / 0.3);
        }
        .f-meta {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--mute);
          margin: 14px 0 5px;
          letter-spacing: 0.03em;
        }
        .f-title {
          font-family: var(--font-serif);
          font-size: 20px;
          line-height: 1.25;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
          font-weight: 400;
        }
        .f-desc {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--ink-soft);
          line-height: 1.55;
          max-width: 48ch;
        }
        @media (prefers-reduced-motion: no-preference) {
          a.f-work-card {
            transition: transform 0.35s cubic-bezier(0.6, 0.01, 0, 1);
          }
        }
      `}</style>

    </main>
  )
}
