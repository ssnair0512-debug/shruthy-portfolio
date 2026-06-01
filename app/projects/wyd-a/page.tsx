import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WYD — Concept A: Sticky TOC',
  description: 'Concept A: Sticky Table of Contents sidebar for navigation',
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: 'var(--color-text-muted)' }}>
      {children}
    </p>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: 'var(--color-text-muted)' }}>
      {children}
    </p>
  )
}

function Divider() {
  return <div className="border-t my-16 md:my-20" style={{ borderColor: 'var(--color-border)' }} />
}

function ImagePlaceholder({ label, height = 400 }: { label: string; height?: number }) {
  return (
    <div
      style={{ minHeight: `${height}px`, backgroundColor: '#F2F2F2', border: '2px dashed #CCCCCC', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <p style={{ color: '#AAAAAA', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', padding: '0 2rem', lineHeight: 1.8 }}>
        {label}
      </p>
    </div>
  )
}

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'brief', label: 'The Brief' },
  { id: 'research', label: 'Research' },
  { id: 'findings', label: 'Findings' },
  { id: 'reframe', label: 'Reframe' },
  { id: 'design', label: 'Design' },
  { id: 'iteration', label: 'Iteration' },
  { id: 'solution', label: 'Solution' },
  { id: 'reflection', label: 'Reflection' },
  { id: 'takeaway', label: 'Takeaway' },
]

export default function WydPageA() {
  return (
    <>
      {/* Sub-nav */}
      <div
        className="sticky top-14 z-40 border-b hidden sm:block"
        style={{ backgroundColor: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs transition-opacity duration-150 hover:opacity-60" style={{ color: 'var(--color-text-muted)' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <p className="text-xs font-medium truncate max-w-sm" style={{ color: 'var(--color-text-secondary)' }}>WYD — Reimagining the Social Event Lifecycle</p>
          <div className="w-10" aria-hidden="true" />
        </div>
      </div>

      {/* Concept A label */}
      <div className="bg-amber-50 border-b border-amber-200 py-2 px-4 text-center">
        <p className="text-xs font-semibold text-amber-700 tracking-widest uppercase">Concept A — Sticky Table of Contents</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-16">

          {/* ── Sticky TOC Sidebar ── */}
          <aside className="hidden lg:block w-44 shrink-0">
            <div className="sticky top-36 pt-14">
              <p className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: 'var(--color-text-muted)' }}>On this page</p>
              <nav className="flex flex-col gap-0">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-xs py-1.5 border-l-2 pl-3 transition-colors duration-150 hover:border-current"
                    style={{ color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>

              {/* Reading progress */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--color-text-muted)' }}>Quick stats</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>65%</p>
                    <p className="text-[0.65rem] leading-tight" style={{ color: 'var(--color-text-muted)' }}>wanted better personalisation</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>70%</p>
                    <p className="text-[0.65rem] leading-tight" style={{ color: 'var(--color-text-muted)' }}>found coordination difficult</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>80%</p>
                    <p className="text-[0.65rem] leading-tight" style={{ color: 'var(--color-text-muted)' }}>wanted social event history</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* ── Main content ── */}
          <main id="main-content" className="flex-1 min-w-0">

            {/* HERO */}
            <section id="overview" className="pt-12 pb-8 md:pt-16 md:pb-10">
              <Link href="/" className="inline-flex sm:hidden items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-muted)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
              </Link>

              <SectionLabel>Case Study</SectionLabel>
              <h1 className="font-semibold tracking-tight leading-tight mb-10 max-w-3xl" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--color-text-primary)' }}>
                WYD — Reimagining the Social Event Lifecycle
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-6 border-t border-b" style={{ borderColor: 'var(--color-border)' }}>
                <div>
                  <MetaLabel>Role</MetaLabel>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Product Designer — Research, Ideation, Prototyping, Hi-Fi Design, Front-End Dev</p>
                </div>
                <div>
                  <MetaLabel>Timeline</MetaLabel>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>July – December 2025</p>
                </div>
                <div>
                  <MetaLabel>Tools</MetaLabel>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Figma, Adobe Creative Suite</p>
                </div>
              </div>
            </section>

            <div className="mb-14">
              <ImagePlaceholder label="Hero — Product Overview / App Mockup" height={420} />
            </div>

            <section className="pb-12 max-w-2xl">
              <blockquote className="font-bold leading-tight tracking-tight mb-8" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--color-text-primary)' }}>
                3 core friction points eliminated. 1 app to replace 4.
              </blockquote>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Event planning is social. The tools people use to plan events aren&apos;t. Users were already juggling Eventbrite for discovery, WhatsApp for coordination, Google Calendar for tracking, and Instagram for social proof — and none of these talked to each other.
              </p>
            </section>

            <Divider />

            {/* BRIEF */}
            <section id="brief" className="pb-16 max-w-2xl">
              <SectionLabel>Context</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-6" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>The Brief</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Design an intuitive event app that simplifies discovery, planning, and participation. But rather than accepting that at face value, I started by asking: what is actually broken, and for whom?
              </p>
            </section>

            <Divider />

            {/* RESEARCH */}
            <section id="research" className="pb-16">
              <SectionLabel>Research</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-6" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                Navigating the &ldquo;Obvious&rdquo; Problem
              </h2>
              <div className="max-w-2xl mb-10 space-y-4">
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  My initial assumption was that the biggest barrier was discoverability. That turned out to be only partially true.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  I adopted a mixed-methods research approach designed to capture both what users were doing and why they felt frustrated.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  { num: '01', title: 'Observation Study', body: 'Shadowed 10 users to track natural navigation patterns without prompting them. Revealed where the real drop-off points were.' },
                  { num: '02', title: 'Competitor Audit', body: 'Analyzed 7 platforms to identify what the market solved well and where it was failing — everything after you find an event.' },
                  { num: '03', title: 'Qualitative Interviews', body: '5 in-depth sessions focused on coordination frustrations. Surfaced the emotional dimension — anxiety, not just inconvenience.' },
                  { num: '04', title: 'Quantitative Survey', body: 'Validated findings with 48 respondents to distinguish personal frustrations from systemic patterns.' },
                ].map((m) => (
                  <div key={m.num} className="p-5 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <p className="text-[0.65rem] font-semibold tracking-[0.15em] mb-2.5" style={{ color: 'var(--color-text-muted)' }}>{m.num}</p>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>{m.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{m.body}</p>
                  </div>
                ))}
              </div>

              <ImagePlaceholder label="Research Methods — Observation Notes / Affinity Map" height={360} />
            </section>

            <Divider />

            {/* FINDINGS */}
            <section id="findings" className="pb-16">
              <SectionLabel>Findings</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-4" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                What the Data Actually Said
              </h2>
              <p className="text-base leading-relaxed mb-10 max-w-2xl italic" style={{ color: 'var(--color-text-secondary)' }}>
                &ldquo;The research reframed the problem entirely.&rdquo;
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  { value: '65%', body: 'requested better personalisation — buried under irrelevant suggestions.' },
                  { value: '70%', body: 'found coordinating with friends difficult and were forced off-platform.' },
                  { value: '80%', body: 'wanted to showcase their event history — a need no platform addressed.' },
                ].map((s) => (
                  <div key={s.value} className="border-t pt-5" style={{ borderColor: 'var(--color-border)' }}>
                    <p className="font-bold tracking-tight mb-2" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1, color: 'var(--color-text-primary)' }}>{s.value}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s.body}</p>
                  </div>
                ))}
              </div>

              <p className="text-base leading-relaxed max-w-2xl mb-12" style={{ color: 'var(--color-text-secondary)' }}>
                The discovery problem was real, but solvable. The coordination problem was where the experience truly broke down — and was almost completely ignored by competitors.
              </p>

              <ImagePlaceholder label="Data Visualization — Survey Results Chart" height={360} />
            </section>

            <Divider />

            {/* REFRAME */}
            <section id="reframe" className="pb-16">
              <SectionLabel>Reframe</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-8" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Reframed Problem Statement</h2>
              <div className="p-8 rounded-lg max-w-2xl" style={{ backgroundColor: 'var(--color-surface)' }}>
                <p className="leading-relaxed italic" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--color-text-primary)' }}>
                  &ldquo;How might we reduce the friction of group coordination and social validation in event planning, so that users never need to leave the app to do the social work that makes events actually happen?&rdquo;
                </p>
              </div>
            </section>

            <Divider />

            {/* DESIGN */}
            <section id="design" className="pb-16">
              <SectionLabel>Design</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-6" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Design Principles I Anchored To</h2>
              <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>Before moving to screens, I defined three principles based directly on the research:</p>

              <div className="flex flex-col gap-0 max-w-2xl mb-12">
                {[
                  { num: '1', title: 'Keep the group together.', body: 'Any coordination that happens off-platform is a product failure. The app needs to make group planning feel less chaotic than a group chat.' },
                  { num: '2', title: "Earn relevance, don't assume it.", body: 'Surfacing irrelevant events erodes trust faster than having no recommendations at all. Personalization needs to feel intentional.' },
                  { num: '3', title: 'Let users build an identity.', body: "Social proof isn't vanity — it's how people decide who to trust and what to try." },
                ].map((p) => (
                  <div key={p.num} className="grid grid-cols-[2rem_1fr] gap-4 border-t py-6" style={{ borderColor: 'var(--color-border)' }}>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text-muted)' }}>{p.num}</p>
                    <div>
                      <p className="text-base font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>{p.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <ImagePlaceholder label="Early Ideation — Sketches / Whiteboard Photos" height={360} />
            </section>

            <Divider />

            {/* ITERATION */}
            <section id="iteration" className="pb-16">
              <SectionLabel>Process</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-6 max-w-2xl" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>From Low-Fi to High-Fi</h2>
              <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
                I ran usability testing across two prototype rounds with 10 users, focusing on three core tasks.
              </p>

              <div className="flex flex-col gap-0 max-w-2xl mb-12">
                {[
                  { label: 'What We Got Wrong First', problem: 'The initial RSVP tracking UI used subtle status indicators that users regularly misread. 4 out of 10 users couldn\'t accurately state whether a friend had confirmed or was still pending.', fix: 'Redesigned RSVP states with distinct visual differentiation — color, iconography, and label.' },
                  { label: 'What We Got Wrong Second', problem: 'The first pass at animations was too aggressive. Users described the interface as \'busy\' and \'distracting.\'', fix: 'Pulled back animation intensity. The rule: motion should confirm an action, not announce it.' },
                  { label: 'Profile Feature Expansion', problem: 'The initial Showcase feature was too limited. Users wanted to curate, not just accumulate. We expanded badge options and added photo uploads.' },
                ].map((b) => (
                  <div key={b.label} className="border-t pt-7 pb-2" style={{ borderColor: 'var(--color-border)' }}>
                    <p className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-1.5 " style={{ color: 'var(--color-text-muted)' }}>{b.label}</p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{b.problem}</p>
                    {b.fix && (
                      <div className="flex gap-3">
                        <span className="font-bold shrink-0 mt-0.5" style={{ color: 'var(--color-text-muted)' }}>→</span>
                        <div>
                          <p className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: 'var(--color-text-muted)' }}>What We Changed</p>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{b.fix}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ImagePlaceholder label="Wireframe — Before" height={300} />
                <ImagePlaceholder label="Final Screen — After" height={300} />
              </div>
            </section>

            <Divider />

            {/* SOLUTION */}
            <section id="solution" className="pb-16">
              <SectionLabel>Solution</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-12" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>The Three Problems, Solved</h2>

              {[
                { num: '01', title: 'Clutter and Irrelevant Discovery', body: 'The Profile Preferences system lets users define their interests upfront. The Map Search page adds granular filters. The Calendar view gives a clean overview of what they\'ve committed to.', imgLabel: 'Final UI — Discovery Screens' },
                { num: '02', title: 'The Coordination Gap', body: 'The Event Details page shows who in a user\'s network is attending. The RSVP flow keeps tracking inside the app with clear visual states.', imgLabel: 'Final UI — Coordination / RSVP Screens' },
                { num: '03', title: 'Identity and Social Validation', body: 'The Profile displays event history, follower/following relationships, and curated badges. For hosts, Event Management consolidates ticket tracking and guest lists.', imgLabel: 'Final UI — Profile & Management Screens' },
              ].map((p) => (
                <div key={p.num} className="mb-14 last:mb-0">
                  <p className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: 'var(--color-text-muted)' }}>Problem {p.num}</p>
                  <h3 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)', fontSize: '1.1rem' }}>{p.title}</h3>
                  <p className="text-base leading-relaxed mb-8 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>{p.body}</p>
                  <ImagePlaceholder label={p.imgLabel} height={380} />
                </div>
              ))}
            </section>

            <Divider />

            {/* REFLECTION */}
            <section id="reflection" className="pb-16 max-w-2xl">
              <SectionLabel>Reflection</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-8" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>What I&apos;d Do Differently</h2>
              <div className="space-y-5">
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  I&apos;d push earlier into the social dynamics of group decision-making. The hardest part of planning isn&apos;t tracking RSVPs — it&apos;s reaching consensus. A &lsquo;vote on options&rsquo; feature would have targeted that friction more directly.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  I&apos;d also instrument the prototype earlier. Behavioral data on where users slowed down would have told me which micro-decisions caused friction before the final round of testing.
                </p>
              </div>
            </section>

            <Divider />

            {/* TAKEAWAY */}
            <section id="takeaway" className="pb-20 max-w-2xl">
              <SectionLabel>Takeaway</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-8" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>The Bigger Lesson</h2>
              <div className="space-y-5">
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>This project taught me that functional problems and emotional problems require different design responses.</p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>The functional problem — finding events — was addressable with better filters. The emotional problem — the anxiety of coordination and the desire to be seen — required features that felt less like tools and more like social infrastructure.</p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>I went in expecting to design a better search experience. I came out having designed a system for how people show up together in their social lives.</p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  )
}
