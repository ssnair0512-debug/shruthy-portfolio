/**
 * SAMPLE B — "Gallery / Refined" (MNKY Chau energy)
 *
 * - Name first in serif, role as a quiet subtitle
 * - Lots of whitespace, nothing cramped
 * - Work presented as a gallery list with large row items
 * - Typography does the work — no huge decorative headlines
 * - Experience as a thin bottom strip
 */

import Link from 'next/link'

const works = [
  {
    href: '/projects/wud',
    index: '01',
    title: 'WUD! — Social event lifecycle',
    tags: ['Product Design', '2024'],
    desc: '4 apps replaced with 1. 60→91% Create Event completion.',
    thumb: 'wud',
  },
  {
    href: '/projects/why',
    index: '02',
    title: 'Why. — The decision ledger',
    tags: ['Feature Design', '2025'],
    desc: 'A capture system that fits three timing shapes.',
    thumb: 'why',
  },
]

const experience = [
  { year: '2025', role: 'Product Designer', company: 'Relay (contract)', current: true },
  { year: '2024', role: 'Product Designer', company: 'WUD!', current: false },
  { year: '2023', role: 'UX Design Intern', company: 'Studio', current: false },
  { year: '2022', role: 'Design Researcher', company: 'Academic', current: false },
]

export default function SampleB() {
  return (
    <main id="main-content">

      {/* ── Hero — name-led, editorial ── */}
      <section style={{ paddingTop: 72, paddingBottom: 80 }} className="wrap">
        <div style={{ maxWidth: 680 }}>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
            fontWeight: 400,
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Shruthy Nair
          </h1>

          {/* Subtitle — em dash style, lowercase */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.6vw, 1.125rem)',
            color: 'var(--ink-soft)',
            lineHeight: 1.6,
            marginBottom: 32,
          }}>
            &mdash;&thinsp;product designer who works at the intersection of{' '}
            <em style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
              research, systems, and craft.
            </em>{' '}
            Currently at Relay. Previously WUD!, studio work, field research.
          </p>

          <div style={{ display: 'flex', gap: 10 }}>
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
              About
            </Link>
          </div>
        </div>
      </section>

      {/* ── Selected Work — gallery row list ── */}
      <section id="work" className="wrap" style={{ paddingBottom: 80 }}>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 11,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--mute)', fontWeight: 500,
          marginBottom: 0, paddingBottom: 14,
          borderBottom: '1px solid var(--rule)',
        }}>
          Selected work
        </p>

        {/* Work rows */}
        <div>
          {works.map((work) => (
            <Link
              key={work.href}
              href={work.href}
              className="gallery-row"
            >
              {/* Index */}
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--mute)', flexShrink: 0, paddingTop: 2,
              }}>
                {work.index}
              </span>

              {/* Thumbnail — small */}
              <div style={{
                width: 80, height: 60, borderRadius: 8,
                flexShrink: 0, overflow: 'hidden', position: 'relative',
                background: work.thumb === 'wud'
                  ? 'linear-gradient(135deg, #f4ecff 0%, #ffd4cc 50%, #c5f5e1 100%)'
                  : 'var(--green-cream)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {work.thumb === 'wud' && (
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 18, color: '#16181d', letterSpacing: '-0.04em' }}>
                    WUD<span style={{ color: 'oklch(0.55 0.18 290)' }}>!</span>
                  </span>
                )}
                {work.thumb === 'why' && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'oklch(0.32 0.08 150)', padding: '0 8px', textAlign: 'center', lineHeight: 1.4 }}>
                    #48 · infra<br />#47 · infra<br />#46 · hiring
                  </span>
                )}
              </div>

              {/* Title + desc */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.375rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}>
                  {work.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: 13,
                  color: 'var(--ink-soft)', lineHeight: 1.5,
                }}>
                  {work.desc}
                </p>
              </div>

              {/* Tags */}
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 4,
                alignItems: 'flex-end', flexShrink: 0,
              }}>
                {work.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-sans)', fontSize: 11,
                    color: 'var(--mute)', whiteSpace: 'nowrap',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span className="gallery-arrow" style={{
                fontFamily: 'var(--font-sans)', fontSize: 16,
                color: 'var(--mute)', flexShrink: 0, paddingTop: 2,
              }}>
                →
              </span>
            </Link>
          ))}

          {/* In progress rows */}
          {[
            { index: '03', title: 'Field study, retail logistics', meta: 'UX Research · 2023' },
            { index: '04', title: 'Form library for a small team', meta: 'Design Systems · 2023' },
          ].map((item) => (
            <div key={item.index} className="gallery-row" style={{ opacity: 0.4, pointerEvents: 'none', cursor: 'default' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mute)', flexShrink: 0 }}>{item.index}</span>
              <div style={{ width: 80, height: 60, borderRadius: 8, background: 'var(--bg-tint)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--mute)' }}>soon</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 400, letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--mute)', marginTop: 3 }}>In progress</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--mute)' }}>{item.meta}</span>
              </div>
              <span style={{ fontSize: 16, color: 'var(--mute)', flexShrink: 0 }}>—</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience — thin bottom strip ── */}
      <section className="wrap" style={{ paddingBottom: 80 }}>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 11,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--mute)', fontWeight: 500,
          marginBottom: 14, paddingTop: 28,
          borderTop: '1px solid var(--rule)',
        }}>
          Experience
        </p>
        <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
          {experience.map((exp, i) => (
            <div key={exp.year} style={{
              flex: '1 1 160px',
              paddingRight: 24,
              paddingBottom: 8,
              borderRight: i < experience.length - 1 ? '1px solid var(--rule)' : 'none',
              marginRight: i < experience.length - 1 ? 24 : 0,
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: 13,
                fontWeight: exp.current ? 500 : 400,
                color: exp.current ? 'var(--ink)' : 'var(--ink-soft)',
                lineHeight: 1.35,
              }}>
                {exp.role}
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>{exp.company}</p>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: exp.current ? 'var(--accent)' : 'var(--mute)', marginTop: 4,
              }}>
                {exp.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .gallery-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid var(--rule);
          text-decoration: none;
          color: inherit;
          transition: background 0.2s;
        }
        a.gallery-row:hover {
          background: var(--bg-tint);
          margin: 0 -16px;
          padding-left: 16px;
          padding-right: 16px;
          border-radius: 8px;
          border-bottom-color: transparent;
        }
        .gallery-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        a.gallery-row:hover .gallery-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        @media (max-width: 600px) {
          .gallery-row { gap: 12px; }
          .gallery-row > div:nth-child(4) { display: none; }
        }
        @media (prefers-reduced-motion: no-preference) {
          .gallery-row { transition: background 0.2s; }
          .gallery-arrow { transition: opacity 0.2s, transform 0.2s; }
        }
      `}</style>

    </main>
  )
}
