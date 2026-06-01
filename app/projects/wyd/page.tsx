import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'WUD! — Reimagining the Social Event Lifecycle — Shruthy Nair',
  description: '3 core friction points eliminated. 1 app to replace 4.',
}

const serif = { style: { fontFamily: 'var(--font-serif)' } }
const sans  = { style: { fontFamily: 'var(--font-sans)' } }

// ── Primitives ────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.65rem] font-medium tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--color-text-muted)', ...sans.style }}>
      {children}
    </p>
  )
}

function Divider() {
  return <div className="border-t my-16 md:my-24" style={{ borderColor: 'var(--color-border)' }} />
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.62rem] font-medium tracking-[0.18em] uppercase mb-1.5" style={{ color: 'var(--color-text-muted)', ...sans.style }}>
      {children}
    </p>
  )
}

function EvidenceBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-r-lg py-4 pl-4 pr-5 my-6" style={{ borderLeft: '2px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
      <p className="text-[0.52rem] font-medium tracking-[0.18em] uppercase mb-1.5" style={{ color: 'var(--color-text-ghost)', ...sans.style }}>{label}</p>
      <div className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)', ...sans.style }}>{children}</div>
    </div>
  )
}

function ReframeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl px-8 py-10 md:px-12 md:py-14 my-7" style={{ background: 'var(--color-text-primary)' }}>
      <p style={{ ...serif.style, color: 'var(--color-bg)', fontWeight: 400, fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)', lineHeight: 1.5, fontStyle: 'italic' }}>
        {children}
      </p>
      <p className="mt-4 text-[0.62rem] tracking-[0.12em] uppercase" style={{ color: 'rgba(255,255,255,0.3)', ...sans.style }}>
        Reframed problem statement — derived from research, not the original brief
      </p>
    </div>
  )
}

// ── Journey Map ───────────────────────────────────────────────

function JourneyMap() {
  const phases = [
    {
      num: '01',
      label: 'Before Event',
      sub: 'Discovery · Coordination · Getting there',
      activities: [
        'Hear about the event',
        'Research on Google / Social Media',
        'Coordinate with friends',
        'Buy tickets online',
        'Drive to event',
      ],
      miniPath: 'M 0,40 C 16,40 36,62 58,66 C 78,70 96,76 112,78 C 130,78 150,8 176,6 C 200,4 222,38 252,40 C 266,40 274,40 280,40',
      miniLow: [112, 78] as [number, number],
      miniHigh: [176, 6] as [number, number],
      moments: [
        { high: false, text: '"How can I plan if I don\'t have info and planning with friends is HARD!!"' },
        { high: true,  text: '"I can\'t wait to go now that I have a ticket!"' },
      ],
      opportunities: [
        'Organise planning tools in one place',
        'Consolidate event info so nothing is scattered',
        'Make coordination feel less chaotic than a group chat',
      ],
    },
    {
      num: '02',
      label: 'During Event',
      sub: 'Arrival · Participation · Socialising',
      activities: [
        'See fashion shows on the runway',
        'Buy food & drinks',
        'See live performances',
        'Buy merchandise from local brands',
        'Socialise with others',
      ],
      miniPath: 'M 0,46 C 12,50 26,60 40,64 C 54,68 66,6 90,4 C 114,2 128,48 146,52 C 160,54 174,26 202,22 C 226,18 254,38 280,40',
      miniLow: [40, 64] as [number, number],
      miniHigh: [90, 4] as [number, number],
      moments: [
        { high: false, text: '"There\'s so much traffic and I don\'t know where to find parking?"' },
        { high: true,  text: '"WOW, I love these clothes!" / "I made a new friend."' },
      ],
      opportunities: [
        'Provide an organised itinerary and map',
        'Surface local food and brand alternatives',
        'Enable in-event social discovery',
      ],
    },
    {
      num: '03',
      label: 'After Event',
      sub: 'Departure · Reflection · Sharing',
      activities: [
        'Leave event and drive home',
        'Look at pictures',
        'Talk about event with friends',
        'Post on social media',
        'Wear the things they bought',
      ],
      miniPath: 'M 0,42 C 14,44 30,62 50,68 C 68,72 84,78 98,80 C 116,80 138,6 164,4 C 188,2 210,24 234,26 C 256,28 270,22 280,20',
      miniLow: [98, 80] as [number, number],
      miniHigh: [164, 4] as [number, number],
      moments: [
        { high: false, text: '"There\'s traffic and crowds when leaving."' },
        { high: true,  text: '"That was so much fun!" / "I\'m so glad I bought this shirt."' },
      ],
      opportunities: [
        'Provide exit route options',
        'Enable post-event sharing and reflection',
        'Give users a social record of their experience',
      ],
    },
  ]

  const row: React.CSSProperties = { borderTop: '1px solid var(--color-border)', padding: '1rem 1.25rem' }
  const rl: React.CSSProperties = {
    fontFamily: sans.style.fontFamily,
    fontSize: '0.55rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--color-text-muted)',
    marginBottom: '0.75rem',
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {phases.map((phase) => (
        <div
          key={phase.label}
          className="rounded-2xl overflow-hidden flex flex-col"
          style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}
        >
          <div style={{ height: 4, background: '#7C3AED' }} />
          <div style={{ padding: '1.25rem 1.25rem 0' }}>
            <p style={{ ...rl, marginBottom: '0.35rem', color: '#7C3AED' }}>Phase {phase.num}</p>
            <p style={{ fontFamily: serif.style.fontFamily, fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
              {phase.label}
            </p>
            <p style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', fontFamily: sans.style.fontFamily }}>
              {phase.sub}
            </p>
          </div>
          <div style={row}>
            <p style={rl}>Actions</p>
            <div style={{ position: 'relative', paddingLeft: '1.25rem' }}>
              <div style={{ position: 'absolute', left: 6, top: 6, bottom: 6, width: 1, background: 'var(--color-border)' }} />
              {phase.activities.map((act, i) => (
                <div key={act} style={{ position: 'relative', paddingBottom: i < phase.activities.length - 1 ? '0.6rem' : 0 }}>
                  <div style={{
                    position: 'absolute', left: '-1.25rem', top: 3,
                    width: 13, height: 13, borderRadius: '50%',
                    border: '1.5px solid var(--color-border)',
                    background: 'var(--color-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#7C3AED' }} />
                  </div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', lineHeight: 1.45, fontFamily: sans.style.fontFamily }}>
                    {act}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...row, paddingBottom: '0.75rem', backgroundColor: 'var(--color-surface)' }}>
            <p style={{ ...rl, marginBottom: '0.5rem' }}>Emotional Arc</p>
            <svg viewBox="0 0 280 86" style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
              <defs>
                <linearGradient id={`mp-${phase.num}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                </linearGradient>
                <linearGradient id={`mn-${phase.num}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.1" />
                </linearGradient>
                <clipPath id={`mca-${phase.num}`}><rect x="0" y="0" width="280" height="43" /></clipPath>
                <clipPath id={`mcb-${phase.num}`}><rect x="0" y="43" width="280" height="43" /></clipPath>
              </defs>
              <text x="0" y="11" fontSize="8" fill="var(--color-border)" fontFamily="monospace">high</text>
              <text x="0" y="82" fontSize="8" fill="var(--color-border)" fontFamily="monospace">low</text>
              <line x1="0" y1="43" x2="280" y2="43" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="5 4" />
              <path d={`${phase.miniPath} L 280,43 L 0,43 Z`} fill={`url(#mp-${phase.num})`} clipPath={`url(#mca-${phase.num})`} />
              <path d={`${phase.miniPath} L 280,43 L 0,43 Z`} fill={`url(#mn-${phase.num})`} clipPath={`url(#mcb-${phase.num})`} />
              <path d={phase.miniPath} fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
              <circle cx={phase.miniLow[0]} cy={phase.miniLow[1]} r="4" fill="var(--color-bg)" stroke="#9CA3AF" strokeWidth="2" />
              <circle cx={phase.miniHigh[0]} cy={phase.miniHigh[1]} r="4" fill="var(--color-bg)" stroke="#7C3AED" strokeWidth="2" />
            </svg>
          </div>
          <div style={row}>
            <p style={rl}>Key Moments</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {phase.moments.map((m, j) => (
                <div
                  key={j}
                  style={{
                    borderRadius: 8,
                    padding: '0.6rem 0.75rem',
                    borderLeft: `2.5px solid ${m.high ? '#7C3AED' : '#FCA5A5'}`,
                    background: m.high ? 'rgba(124,58,237,0.04)' : 'rgba(252,165,165,0.07)',
                  }}
                >
                  <p style={{ fontFamily: sans.style.fontFamily, fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: m.high ? '#7C3AED' : '#EF4444', marginBottom: '0.3rem' }}>
                    {m.high ? '↑ high' : '↓ low'}
                  </p>
                  <p style={{ fontFamily: serif.style.fontFamily, fontSize: '0.7rem', fontStyle: 'italic', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ ...row, backgroundColor: 'var(--color-surface)', flexGrow: 1, marginTop: 'auto' }}>
            <p style={{ ...rl, color: '#7C3AED' }}>Opportunities</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {phase.opportunities.map((opp, i) => (
                <div key={opp} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{ fontFamily: sans.style.fontFamily, fontSize: '0.52rem', fontWeight: 700, color: '#7C3AED', minWidth: 18, paddingTop: 2 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', lineHeight: 1.45, fontFamily: sans.style.fontFamily }}>
                    {opp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Create Event Steps ─────────────────────────────────────────

function CreateEventSteps() {
  const steps = [
    {
      num: '01', title: 'Basic Info',
      fields: ['Add Image', 'Event Title', 'Event Time (Start / End)', 'Location', 'Event Description'],
      cta: 'Next', isFinal: false,
    },
    {
      num: '02', title: 'Social Settings',
      fields: ['Social Media Links', 'Event Capacity', 'Select Category', 'Select Co-Host', 'Event Visibility'],
      cta: 'Next', isFinal: false,
    },
    {
      num: '03', title: 'RSVP Config',
      fields: ['RSVP Required / Walk-in', 'Enable Waitlist', 'Allow +1s', 'No. of +1s Allowed'],
      cta: 'Next', isFinal: false,
    },
    {
      num: '04', title: 'Policies',
      fields: ['Dietary Restrictions', 'Cancellation Policy', 'Additional Information'],
      cta: 'Create Event', isFinal: true,
    },
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {steps.map((step, stepIndex) => (
          <div
            key={step.num}
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)' }}
          >
            <div className="flex items-center justify-between px-3 py-2" style={{ backgroundColor: '#7C3AED' }}>
              <span style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.8)', fontFamily: sans.style.fontFamily }}>9:41</span>
              <span style={{ fontSize: '0.58rem', color: 'white', fontWeight: 600, fontFamily: sans.style.fontFamily }}>Create Event</span>
              <span style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>✕</span>
            </div>
            <div className="flex gap-0.5 px-3 pt-2 pb-1">
              {steps.map((_, j) => (
                <div
                  key={j}
                  style={{
                    height: '3px',
                    flex: 1,
                    borderRadius: '2px',
                    backgroundColor: j <= stepIndex ? '#7C3AED' : '#EDE9FE',
                  }}
                />
              ))}
            </div>
            <div className="px-3 pb-1">
              <p style={{ fontSize: '0.55rem', fontWeight: 600, color: '#7C3AED', fontFamily: sans.style.fontFamily, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Step {step.num}
              </p>
              <p style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--color-text-primary)', fontFamily: sans.style.fontFamily, marginTop: '0.1rem' }}>
                {step.title}
              </p>
            </div>
            <div className="px-3 pb-3 space-y-1">
              {step.fields.map((field) => (
                <div
                  key={field}
                  style={{
                    padding: '0.28rem 0.4rem',
                    borderRadius: '4px',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                  }}
                >
                  <p style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)', fontFamily: sans.style.fontFamily }}>
                    {field}
                  </p>
                </div>
              ))}
              <div
                style={{
                  marginTop: '0.6rem',
                  padding: '0.35rem',
                  borderRadius: '6px',
                  textAlign: 'center',
                  backgroundColor: step.isFinal ? '#7C3AED' : 'transparent',
                  border: step.isFinal ? 'none' : '1px solid #7C3AED',
                }}
              >
                <p style={{ fontSize: '0.62rem', fontWeight: 600, color: step.isFinal ? 'white' : '#7C3AED', fontFamily: sans.style.fontFamily }}>
                  {step.cta}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────

export default function WydPage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-12 xl:gap-16 items-start pb-32">

        {/* Sticky TOC sidebar */}
        <aside
          className="hidden lg:block w-44 shrink-0"
          style={{ position: 'sticky', top: '132px', height: 'fit-content' }}
          aria-label="Table of contents"
        >
          <p className="mb-3" style={{ ...sans.style, fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-text-ghost)' }}>Contents</p>
          <nav className="flex flex-col">
            {[
              { href: '#overview',    label: 'Overview' },
              { href: '#research',    label: 'Research' },
              { href: '#reframe',     label: 'Reframe' },
              { href: '#design',      label: 'Design' },
              { href: '#solution',    label: 'Solution' },
              { href: '#tried',       label: 'What I Tried' },
              { href: '#reflection',  label: 'Reflection' },
            ].map((item, i, arr) => (
              <a
                key={item.href}
                href={item.href}
                style={{ ...sans.style, fontSize: '0.8rem', fontWeight: 300, color: 'var(--color-text-muted)', textDecoration: 'none', padding: '0.35rem 0', borderBottom: i < arr.length - 1 ? '1px solid var(--color-border-2)' : 'none', lineHeight: 1.3, transition: 'color 0.15s' }}
                className="hover:text-stone-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main id="main-content" className="flex-1 min-w-0" style={sans.style}>

          {/* ────────────────────────────────────────────
              HERO
          ──────────────────────────────────────────── */}
          <section className="pt-12 pb-10 md:pt-16">

            <Link
              href="/"
              className="inline-flex sm:hidden items-center gap-1.5 text-sm mb-8 transition-opacity duration-150 hover:opacity-60"
              style={{ color: 'var(--color-text-muted)', ...sans.style }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </Link>

            <SectionLabel>Case Study · Personal Project · Product Design 2025</SectionLabel>

            <h1
              className="leading-tight mb-8 max-w-3xl"
              style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              WUD! — Reimagining the Social Event Lifecycle
            </h1>

            {/* Hero image — full width, above meta */}
            <div className="mb-8">
              <Image
                src="/images/projects/wyd/FlpA8j2MB68VhSeOYUrjf9abgtM.jpg.webp"
                alt="WUD! final design — six key screens: Event Details, RSVP flow, Registration Success, Map view, Filters panel, and Calendar"
                width={2048}
                height={896}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            {/* Meta row — below image, WHy-style */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <div>
                <MetaLabel>Role</MetaLabel>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  Product Designer<br />
                  <span style={{ color: 'var(--color-text-muted)' }}>Primary Research, Journey Mapping, Concept Ideation, Prototyping, High-Fidelity Design</span>
                </p>
              </div>
              <div>
                <MetaLabel>Timeline</MetaLabel>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>July – December 2025</p>
              </div>
              <div>
                <MetaLabel>Skills &amp; Tools</MetaLabel>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  User Research, Competitive Analysis, Interaction Design, Prototyping<br />
                  <span style={{ color: 'var(--color-text-muted)' }}>Figma, Adobe Creative Suite</span>
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* ────────────────────────────────────────────
              OVERVIEW
          ──────────────────────────────────────────── */}
          <section id="overview" className="pb-12 md:pb-16">
            <SectionLabel>Overview</SectionLabel>

            <p className="mb-8 leading-relaxed" style={{ ...serif.style, fontStyle: 'italic', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-text-primary)', lineHeight: 1.5 }}>
              Event planning is social. The tools people use to plan events aren&apos;t — and that gap is where this project lives.
            </p>

            {/* Outcome strip — lead with results */}
            <div
              className="flex flex-col sm:flex-row gap-px mb-8 rounded-xl overflow-hidden"
              style={{ background: 'var(--color-border)', border: '1px solid var(--color-border)' }}
            >
              {[
                { n: '4 → 1', label: 'apps consolidated into a single lifecycle' },
                { n: '3',     label: 'core friction points eliminated' },
                { n: '60% → 91%', label: 'Create Event completion after redesign' },
              ].map((item) => (
                <div key={item.n} className="flex-1 px-6 py-5" style={{ background: 'var(--color-bg)' }}>
                  <p className="font-medium mb-1 leading-none" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--color-text-primary)', letterSpacing: '-0.02em', ...sans.style }}>
                    {item.n}
                  </p>
                  <p className="text-xs leading-snug" style={{ color: 'var(--color-text-muted)' }}>{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Users were already juggling Eventbrite for discovery, WhatsApp for coordination, Google Calendar for tracking, and Instagram for social proof — and none of these talked to each other. WUD! was designed to replace the stitching with connective tissue: a single app covering the full social event lifecycle from discovery to memory.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I owned this project end to end — research, concept, architecture, and high-fidelity design — working independently throughout.
            </p>
          </section>

          <Divider />

          {/* ────────────────────────────────────────────
              RESEARCH
          ──────────────────────────────────────────── */}
          <section id="research" className="pb-16 md:pb-24">
            <SectionLabel>Research</SectionLabel>

            <h2 className="mb-4" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              I went in with the wrong hypothesis. The research corrected it.
            </h2>

            <EvidenceBlock label="Starting Assumption">
              The biggest barrier was discoverability — users couldn&apos;t find relevant events. This turned out to be only partially true. The coordination problem was where the experience was actually breaking down.
            </EvidenceBlock>

            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-text-secondary)' }}>
              To challenge that assumption, I adopted a mixed-methods approach across four research methods — designed to capture both what users were doing and why they felt frustrated. 10 users were observed in natural contexts, without prompting. 48 responded to a survey to separate personal frustrations from systemic patterns. 7 platforms were audited. 5 users were interviewed in depth.
            </p>

            {/* Method grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                {
                  num: '01 — Observation Study',
                  title: '10 users, natural contexts',
                  body: 'Shadowed students and professionals tracking natural navigation patterns without prompting — seeing behavior in context, not in a test scenario. Real drop-off points, not recalled ones.',
                },
                {
                  num: '02 — Competitor Audit',
                  title: '7 platforms analyzed',
                  body: 'Eventbrite, Meetup, and 5 others — mapping what the market solved well (centralized discovery) and where it consistently failed (everything after you find an event).',
                },
                {
                  num: '03 — Qualitative Interviews',
                  title: '5 in-depth sessions',
                  body: 'Focused on coordination frustrations specifically — surfacing the emotional dimension of the problem. The anxiety, not just the inconvenience of switching between apps.',
                },
                {
                  num: '04 — Survey',
                  title: '48 respondents',
                  body: 'Validated interview findings at scale to distinguish personal frustrations from systemic patterns and to size which problems mattered most across user types.',
                },
              ].map((m) => (
                <div key={m.num} className="p-5 rounded-lg border" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg)' }}>
                  <p className="text-[0.52rem] font-medium tracking-[0.16em] uppercase mb-2" style={{ color: 'var(--color-text-ghost)', ...sans.style }}>{m.num}</p>
                  <p className="text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-primary)' }}>{m.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{m.body}</p>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="rounded-lg p-6 mb-6" style={{ backgroundColor: 'var(--color-surface)' }}>
              <p className="leading-relaxed mb-2" style={{ ...serif.style, fontStyle: 'italic', fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', color: 'var(--color-text-primary)' }}>
                &ldquo;I know there are cool things happening — I just never know if my friends are going, so I don&apos;t bother.&rdquo;
              </p>
              <p className="text-[0.68rem] tracking-[0.1em]" style={{ color: 'var(--color-text-ghost)', ...sans.style }}>— Interview participant, age 24</p>
            </div>

            {/* Stats column — inline, no sidebar */}
            <div className="rounded-xl overflow-hidden mb-10" style={{ border: '1px solid var(--color-border)' }}>
              {[
                { n: '65%', body: 'explicitly requested better personalisation — they felt buried under irrelevant suggestions from algorithms that didn\'t know them.' },
                { n: '70%', body: 'found coordinating events with friends difficult and were regularly forced off-platform to WhatsApp.' },
                { n: '80%', body: 'wanted a way to showcase their event history socially. No existing platform addressed this need at all.' },
              ].map((s, i) => (
                <div
                  key={s.n}
                  className="flex items-baseline gap-5 px-5 py-4"
                  style={{ borderTop: i > 0 ? '1px solid var(--color-border)' : undefined, backgroundColor: 'var(--color-bg)' }}
                >
                  <span className="font-medium shrink-0" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'var(--color-text-primary)', lineHeight: 1, letterSpacing: '-0.02em', minWidth: '4.5rem', ...sans.style }}>
                    {s.n}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s.body}</p>
                </div>
              ))}
            </div>

            {/* Journey map */}
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              The user journey map was the pivot point. Plotting emotion across three phases — Before, During, After — revealed that pain clustered around coordination anxiety before the event and identity frustration after it. The event itself was largely positive. The design opportunity wasn&apos;t inside the event experience. It was in everything surrounding it.
            </p>

            <JourneyMap />

            <EvidenceBlock label="Journey Map Finding">
              The discovery problem was real but solvable. The coordination problem was being almost completely ignored by competitors. And the 80% identity statistic was the most surprising: users weren&apos;t just trying to attend events — they were trying to be seen as people who do interesting things.
            </EvidenceBlock>
          </section>

          <Divider />

          {/* ────────────────────────────────────────────
              REFRAME
          ──────────────────────────────────────────── */}
          <section id="reframe" className="pb-16 md:pb-24">
            <SectionLabel>Reframe</SectionLabel>

            <h2 className="mb-4" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              The original brief asked for better discovery. The research asked for something harder.
            </h2>

            <p className="text-base leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              Better search is a UI problem. Solving for coordination anxiety and social identity are system design problems — they require features that feel less like tools and more like social infrastructure.
            </p>

            <ReframeBlock>
              &ldquo;How might we reduce the friction of group coordination and social validation in event planning, so that users never need to leave the app to do the social work that makes events actually happen?&rdquo;
            </ReframeBlock>

            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              The phrase &ldquo;never need to leave&rdquo; became the constraint that shaped every feature decision that followed. Any coordination that happened off-platform wasn&apos;t a UX convenience — it was a product failure. That reframe made prioritization clear and kept the design honest.
            </p>
          </section>

          <Divider />

          {/* ────────────────────────────────────────────
              DESIGN
          ──────────────────────────────────────────── */}
          <section id="design" className="pb-16 md:pb-24">
            <SectionLabel>Design</SectionLabel>

            <h2 className="mb-4" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              Three principles. One structural constraint. Each with explicit reasoning.
            </h2>

            <p className="text-base leading-relaxed mb-2" style={{ color: 'var(--color-text-secondary)' }}>
              Before any screens, I defined three design principles directly from the research — and confronted one structural constraint that shaped the entire information architecture: the same user could be both an attendee and a host, sometimes simultaneously.
            </p>

            <EvidenceBlock label="Structural Constraint — Dual Persona">
              Every feature had to work cleanly for Attendees (discovering and coordinating) and Hosts (creating and managing) within a single account. I organized the Figma workspace by user mode before designing any screens — forcing explicit decisions about which features lived where, and which needed to surface in both contexts.
            </EvidenceBlock>

            {/* Principles with explicit rationale */}
            <div className="flex flex-col mb-10">
              {[
                {
                  num: '1',
                  title: 'Keep the group together.',
                  why: 'Why this principle',
                  body: '70% of users were already going off-platform mid-flow. Every trip to WhatsApp was a product failure. The app needed to make group planning feel less chaotic than a group chat — or coordination would always leak out regardless of how good the discovery experience was.',
                },
                {
                  num: '2',
                  title: "Earn relevance, don't assume it.",
                  why: 'Why this principle',
                  body: "The 65% personalisation complaint came from users feeling manipulated by algorithms they couldn't see or control. Explicit preference collection upfront — event type, distance, time of day — makes recommendations feel intentional. Trust, not targeting, was the product.",
                },
                {
                  num: '3',
                  title: 'Let users build an identity.',
                  why: 'Why this principle',
                  body: "80% of users wanted event history displayed socially. No competitor was designing for this. Social proof isn't vanity — it's how people decide who to trust and what events are worth attending. The profile had to be a social signal, not a settings page.",
                },
              ].map((p) => (
                <div
                  key={p.num}
                  className="grid border-t py-6"
                  style={{ gridTemplateColumns: '2rem 1fr', gap: '1.25rem', borderColor: 'var(--color-border)' }}
                >
                  <p className="text-sm font-medium pt-0.5" style={{ color: 'var(--color-text-muted)', ...sans.style }}>{p.num}</p>
                  <div>
                    <p className="text-base font-medium mb-1" style={{ color: 'var(--color-text-primary)', ...serif.style }}>{p.title}</p>
                    <p className="text-[0.55rem] font-medium tracking-[0.14em] uppercase mb-1.5" style={{ color: 'var(--color-text-ghost)', ...sans.style }}>{p.why}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* IA nav tabs — inline, no sidebar */}
            <h3 className="mb-4" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.1rem, 2vw, 1.45rem)' }}>
              Navigation as a Design Statement
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-0 mb-6 border rounded-lg overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
              {[
                { icon: 'Explore',   label: 'Social + geo feed',     note: 'Primary discovery surface. Splits between social invitations (warm) and neighbourhood events (cold).' },
                { icon: 'Calendar',  label: 'Committed events',       note: 'Personal calendar with upcoming registered events. Reduces reliance on external calendar apps.' },
                { icon: '+ Create',  label: 'Host entry point',       note: 'Centre tab as a permanent CTA for the host persona — never buried in settings.' },
                { icon: 'Map',       label: 'Geo discovery',          note: 'Event pins clustered by category. Tap to preview event details without leaving the map.' },
                { icon: 'Profile',   label: 'Identity + settings',    note: 'Social footprint, my events, tickets, bookmarks, and account settings under one tab.' },
              ].map((tab, i, arr) => (
                <div
                  key={tab.icon}
                  className="p-5"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRight: i < arr.length - 1 ? '1px solid var(--color-border)' : undefined,
                  }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-primary)', ...sans.style }}>{tab.icon}</p>
                  <p className="text-[0.62rem] uppercase tracking-widest mb-3" style={{ color: 'var(--color-text-muted)' }}>{tab.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{tab.note}</p>
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Placing the Create action at the centre of the bottom navigation — between Calendar and Map — was a deliberate statement: hosting is not a power-user feature. It&apos;s a first-class action available to anyone at any time, directly addressing the finding that 70% of users found coordination difficult by making event creation feel as accessible as browsing.
            </p>
          </section>

          <Divider />

          {/* ────────────────────────────────────────────
              SOLUTION
          ──────────────────────────────────────────── */}
          <section id="solution" className="pb-16 md:pb-24">
            <SectionLabel>Solution</SectionLabel>

            <h2 className="mb-14" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              Three Problems. Three Design Responses.
            </h2>

            {/* Problem 01 */}
            <div className="mb-20">
              <p className="text-[0.58rem] font-medium tracking-[0.16em] uppercase mb-2" style={{ color: '#7C3AED', ...sans.style }}>Problem 01 — Clutter and Irrelevant Discovery</p>
              <h3 className="mb-4" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>
                Profile Preferences + Dual Discovery Feed
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                The Profile Preferences system lets users define their interests upfront during onboarding — so recommendations are earned rather than guessed. The Explore page surfaces two parallel discovery paths: &ldquo;Events You&apos;re Invited to&rdquo; (social, warm) above &ldquo;Explore by Neighbourhood&rdquo; (geo-based, cold) — prioritizing social context over algorithmic suggestion.
              </p>
              <Image
                src="/images/projects/wyd/FlpA8j2MB68VhSeOYUrjf9abgtM.jpg.webp"
                alt="Discovery screens — Event Details, RSVP flow, Registration Success, Map with event pins, Filters panel, and Calendar view"
                width={2048}
                height={896}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="flex gap-3 items-start">
                <span className="text-[0.58rem] font-medium tracking-[0.14em] uppercase whitespace-nowrap pt-0.5" style={{ color: 'var(--color-text-ghost)', ...sans.style }}>Note</span>
                <p className="text-xs leading-relaxed pl-3" style={{ color: 'var(--color-text-secondary)', borderLeft: '2px solid var(--color-border-2)' }}>
                  The filter panel covers 5 dimensions — distance, date, category, price, and social context — where existing platforms offered at most 2. Each dimension maps to a specific friction identified in the competitor audit.
                </p>
              </div>
            </div>

            {/* Problem 02 */}
            <div className="mb-20">
              <p className="text-[0.58rem] font-medium tracking-[0.16em] uppercase mb-2" style={{ color: '#7C3AED', ...sans.style }}>Problem 02 — The Coordination Gap</p>
              <h3 className="mb-4" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>
                Network Context on the Event Detail Page Itself
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                The Event Details page surfaces who from your network is attending — attendee avatars, follow-status badges, tickets remaining — answering &ldquo;is anyone I know going?&rdquo; without a group chat. The RSVP flow is three steps: confirm guest count → contact preference for updates → registration success with ticket confirmation.
              </p>
              <Image
                src="/images/projects/wyd/LogLezJ2rx8UNGweEhEVlKYY0kE.jpg.webp"
                alt="Event Details screen — Food Festival showing host info, 151 attendees, 49 tickets remaining, and network context"
                width={1500}
                height={1200}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="flex gap-3 items-start">
                <span className="text-[0.58rem] font-medium tracking-[0.14em] uppercase whitespace-nowrap pt-0.5" style={{ color: 'var(--color-text-ghost)', ...sans.style }}>Note</span>
                <p className="text-xs leading-relaxed pl-3" style={{ color: 'var(--color-text-secondary)', borderLeft: '2px solid var(--color-border-2)' }}>
                  Surfacing social network context on the event detail page eliminated the primary reason users abandoned events mid-planning. No separate &ldquo;friends going&rdquo; feature needed — the signal was already available; it just hadn&apos;t been surfaced.
                </p>
              </div>
            </div>

            {/* Problem 03 */}
            <div>
              <p className="text-[0.58rem] font-medium tracking-[0.16em] uppercase mb-2" style={{ color: '#7C3AED', ...sans.style }}>Problem 03 — Identity and Social Validation</p>
              <h3 className="mb-4" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}>
                Event Participation as Social Currency
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                The Profile displays Following, Followers, and Events attended as three equal stats — treating participation as social currency on par with relationships. My Events uses three tabs: Event Tickets (QR codes for physical check-in), Saved Events, and Hosted Events (with inline editing). The Following list appends event context to each connection: &ldquo;Going pool party on 9/12.&rdquo;
              </p>
              <Image
                src="/images/projects/wyd/xIQ4JSwHa2Mo5qDcivQYzneVong.jpg.webp"
                alt="Identity screens — onboarding preferences, profile with Following/Events stats, Followers list with event context, and profile edit"
                width={2048}
                height={896}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="flex gap-3 items-start">
                <span className="text-[0.58rem] font-medium tracking-[0.14em] uppercase whitespace-nowrap pt-0.5" style={{ color: 'var(--color-text-ghost)', ...sans.style }}>Note</span>
                <p className="text-xs leading-relaxed pl-3" style={{ color: 'var(--color-text-secondary)', borderLeft: '2px solid var(--color-border-2)' }}>
                  The Following list as a social feed — showing what people you know are doing — addresses the coordination gap without requiring a separate feature. The Hosted Events tab unifies host and attendee identities within one profile, solving the dual persona constraint at the surface level.
                </p>
              </div>
            </div>
          </section>

          <Divider />

          {/* ────────────────────────────────────────────
              WHAT I TRIED
          ──────────────────────────────────────────── */}
          <section id="tried" className="pb-16 md:pb-24">
            <SectionLabel>What I Tried</SectionLabel>

            <h2 className="mb-3" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              Four things I got wrong — and what they revealed
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              Good design decisions often look obvious in retrospect. These four failures showed me where the initial intuitions were wrong, and why.
            </p>

            <div className="flex flex-col">
              {[
                {
                  label: '01 — RSVP status indicators were too subtle',
                  problem: '4 of 10 users in testing couldn\'t accurately state whether a friend had confirmed or was pending. The design was visually clean but the distinction between states wasn\'t legible at a glance.',
                  reveal: 'What this revealed',
                  learn: 'Clarity matters more than elegance in status UI. Redesigned with distinct color, iconography, and explicit label — readable, not deduced. The host-side list also gained checkbox bulk-remove for lists over 10 attendees, because bulk actions became the dominant host behavior in testing once list size exceeded single-digit.',
                },
                {
                  label: '02 — Animations were announcing, not confirming',
                  problem: 'The first pass at motion was too aggressive. Users described the interface as "busy." Counterintuitively, the UI was competing with the social content it was meant to surface.',
                  reveal: 'What this revealed',
                  learn: 'Motion should confirm an action, not announce it. Pulled back intensity significantly. The app also felt faster with less motion — a perception effect I hadn\'t anticipated.',
                },
                {
                  label: '03 — Auto-populated Showcase felt passive, not expressive',
                  problem: 'The initial event history auto-populated everything. Users felt no control over their own social identity. The feature felt like surveillance, not expression — precisely the opposite of what the 80% said they wanted.',
                  reveal: 'What this revealed',
                  learn: 'Curation is part of the social identity product, not a power feature. Expanded to three tabs: Event Tickets, Saved Events, Hosted Events — giving users explicit control over what they display and how they\'re seen.',
                },
                {
                  label: '04 — Create Event as a single long scroll didn\'t work',
                  problem: 'Hosts lost orientation mid-form — 13 distinct decisions on one scroll, completion rate was 60%. The form covered everything from image to cancellation policy without grouping or pacing.',
                  reveal: 'What this revealed',
                  learn: 'Progressive disclosure isn\'t a nice-to-have for complex creation flows — it\'s the only way to sustain completion. Split into 4 steps: basic info → social settings → RSVP configuration → policies. Completion improved to 91% in retesting. The structure itself is a design argument about how creating an event is conceptually organized.',
                  showSteps: true,
                },
              ].map((item) => (
                <div key={item.label} className="border-t pt-8 pb-8" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="text-[0.6rem] font-medium tracking-[0.14em] uppercase mb-3" style={{ color: '#b45309', ...sans.style }}>{item.label}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{item.problem}</p>
                  <p className="text-[0.58rem] font-medium tracking-[0.14em] uppercase mb-1.5" style={{ color: 'var(--color-text-ghost)', ...sans.style }}>{item.reveal}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.learn}</p>
                  {item.showSteps && (
                    <div className="mt-8">
                      <CreateEventSteps />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* ────────────────────────────────────────────
              REFLECTION
          ──────────────────────────────────────────── */}
          <section id="reflection" className="pb-20 md:pb-32">
            <SectionLabel>Reflection</SectionLabel>

            <h2 className="mb-8" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              What changed, what I&apos;d do differently, what I&apos;d carry forward
            </h2>

            <div className="flex flex-col">
              {[
                {
                  title: 'Functional and emotional problems require different design responses — and I almost conflated them.',
                  body: 'Finding events is a functional problem, solvable with better filters. Coordination anxiety and the desire to be seen as someone with an interesting social life are emotional problems. They require features that feel less like tools and more like social infrastructure. I went in expecting to design a better search experience. I came out having designed a system for how people show up — and show up together — in their social lives. The research is what forced that shift.',
                },
                {
                  title: 'The journey map was the turning point, not a deliverable.',
                  body: 'Without mapping emotion across the full Before/During/After arc, I would have designed a better version of Eventbrite. The map made the opportunity undeniable: not during the event, but in everything before it started and everything users wanted to carry away after. That insight changed the reframe, which changed the principles, which changed the features. Everything downstream traced back to that moment.',
                },
                {
                  title: "I'd instrument the prototype earlier next time — and go deeper on the host side.",
                  body: "Usability testing told me whether users completed tasks. It didn't tell me where they slowed down within a flow. Behavioral data — time on step, abandonment points, retry rates — would have given me evidence instead of instinct when making tradeoffs under time pressure. Similarly, most of my interview participants were attendees. The host experience was underserved in the research phase, and it shows in the Create Event flow. Equal rigor, both sides, from the start.",
                },
                {
                  title: 'The next problem worth solving is consensus before commitment.',
                  body: "The coordination features I designed address the problem at the interaction level. But the hardest part of planning an event with friends isn't tracking RSVPs — it's reaching consensus on what to attend in the first place. A vote-on-options or shared shortlisting feature would target that upstream friction more directly than anything in the current design. That's where version two starts.",
                },
              ].map((item) => (
                <div key={item.title} className="border-t py-7" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="text-base mb-2" style={{ color: 'var(--color-text-primary)', ...serif.style, fontWeight: 400 }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  )
}
