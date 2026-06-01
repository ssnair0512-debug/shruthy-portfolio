import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WYD — Concept B: Visual Hierarchy',
  description: 'Concept B: Strong visual hierarchy with accent treatments',
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

export default function WydPageB() {
  return (
    <>
      {/* Sub-nav */}
      <div className="sticky top-14 z-40 border-b hidden sm:block" style={{ backgroundColor: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-muted)' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <p className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>WYD — Reimagining the Social Event Lifecycle</p>
          <div className="w-10" aria-hidden="true" />
        </div>
      </div>

      {/* Concept B label */}
      <div className="bg-violet-50 border-b border-violet-200 py-2 px-4 text-center">
        <p className="text-xs font-semibold text-violet-700 tracking-widest uppercase">Concept B — Strong Visual Hierarchy with Callouts</p>
      </div>

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-10">
          <Link href="/" className="inline-flex sm:hidden items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-muted)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>

          <SectionLabel>Case Study</SectionLabel>
          <h1 className="font-semibold tracking-tight leading-tight mb-3 max-w-3xl" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-text-primary)' }}>
            WYD
          </h1>
          <p className="mb-10 max-w-3xl" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'var(--color-text-secondary)', fontWeight: 400 }}>
            Reimagining the Social Event Lifecycle
          </p>

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

        <div className="mb-14 md:mb-20">
          <ImagePlaceholder label="Hero — Product Overview / App Mockup" height={480} />
        </div>

        {/* Impact statement — stronger treatment */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-3xl">
            <blockquote className="font-bold leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: 'var(--color-text-primary)' }}>
              3 core friction points eliminated. 1 app to replace 4.
            </blockquote>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              Event planning is social. The tools people use to plan events aren&apos;t. Users juggled Eventbrite, WhatsApp, Google Calendar, and Instagram — none of which talked to each other. WYD was an opportunity to design the connective tissue that was missing.
            </p>

            {/* Quick-glance tag strip */}
            <div className="flex flex-wrap gap-2">
              {['Discovery', 'Coordination', 'Social Identity', 'Mixed-Methods Research', '48 Survey Respondents', '10 Usability Testers'].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-text-secondary)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* BRIEF */}
        <section className="pb-16 max-w-3xl">
          <SectionLabel>Context</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-6" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>The Brief</h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Design an intuitive event app that simplifies discovery, planning, and participation. But rather than accepting that at face value, I started by asking: what is actually broken, and for whom?
          </p>
        </section>

        <Divider />

        {/* RESEARCH */}
        <section className="pb-16">
          <SectionLabel>Research</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-6 max-w-2xl" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
            Navigating the &ldquo;Obvious&rdquo; Problem
          </h2>
          <div className="max-w-3xl mb-10 space-y-4">
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              My initial assumption was that the biggest barrier was discoverability — that users simply couldn&apos;t find relevant events. That turned out to be only partially true.
            </p>
          </div>

          {/* Research cards — with accent numbering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { num: '01', title: 'Observation Study', body: 'Shadowed 10 users to track natural navigation patterns. Seeing behavior in context revealed where drop-off points were.' },
              { num: '02', title: 'Competitor Audit', body: 'Analyzed 7 platforms. What the market solved well: discovery. What it ignored: everything after you find an event.' },
              { num: '03', title: 'Qualitative Interviews', body: '5 in-depth sessions focused on coordination frustrations. Surfaced the emotional dimension — anxiety, not just inconvenience.' },
              { num: '04', title: 'Quantitative Survey', body: 'Validated findings with 48 respondents to separate personal frustrations from systemic patterns.' },
            ].map((m) => (
              <div key={m.num} className="p-5 rounded-lg border-l-4" style={{ backgroundColor: 'var(--color-surface)', borderLeftColor: 'var(--color-text-primary)' }}>
                <p className="text-xs font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{m.num}</p>
                <p className="text-sm font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>{m.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{m.body}</p>
              </div>
            ))}
          </div>

          <ImagePlaceholder label="Research Methods — Observation Notes / Affinity Map" height={380} />
        </section>

        <Divider />

        {/* FINDINGS — dark band treatment */}
        <section className="pb-16">
          <SectionLabel>Findings</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-4" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
            What the Data Actually Said
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-3xl" style={{ color: 'var(--color-text-secondary)' }}>
            The research reframed the problem entirely — from a discovery problem to a coordination and identity problem.
          </p>

          {/* Stats — full-width dark band */}
          <div className="rounded-xl mb-10 px-8 py-10" style={{ backgroundColor: 'var(--color-text-primary)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: '65%', body: 'requested better personalisation — buried under irrelevant suggestions.' },
                { value: '70%', body: 'found coordinating with friends difficult and were forced to use WhatsApp.' },
                { value: '80%', body: 'wanted to showcase their event history — a need no platform addressed.' },
              ].map((s) => (
                <div key={s.value} className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                  <p className="font-bold tracking-tight mb-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', lineHeight: 1, color: '#ffffff' }}>{s.value}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key insight callout */}
          <div className="flex gap-4 p-6 rounded-lg mb-12 border-l-4" style={{ backgroundColor: 'var(--color-surface)', borderLeftColor: 'var(--color-text-primary)' }}>
            <div>
              <p className="text-[0.65rem] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>Key Insight</p>
              <p className="text-base font-medium leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                The discovery problem was real, but solvable. The coordination problem was where the experience truly broke down — and was almost completely ignored by competitors.
              </p>
            </div>
          </div>

          <ImagePlaceholder label="Data Visualization — Survey Results Chart" height={380} />
        </section>

        <Divider />

        {/* REFRAME */}
        <section className="pb-16">
          <SectionLabel>Reframe</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-8" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Reframed Problem Statement</h2>
          <div className="p-8 md:p-10 rounded-lg max-w-3xl" style={{ backgroundColor: 'var(--color-surface)' }}>
            <p className="leading-relaxed italic" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'var(--color-text-primary)' }}>
              &ldquo;How might we reduce the friction of group coordination and social validation in event planning, so that users never need to leave the app to do the social work that makes events actually happen?&rdquo;
            </p>
          </div>
        </section>

        <Divider />

        {/* DESIGN PRINCIPLES */}
        <section className="pb-16">
          <SectionLabel>Design</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-6" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Design Principles I Anchored To</h2>
          <p className="text-base leading-relaxed mb-10 max-w-3xl" style={{ color: 'var(--color-text-secondary)' }}>Before moving to screens, I defined three principles based directly on the research:</p>

          <div className="flex flex-col gap-0 max-w-3xl mb-12">
            {[
              { num: '1', title: 'Keep the group together.', body: 'Any coordination that happens off-platform is a product failure. The app needs to make group planning feel less chaotic than a group chat.' },
              { num: '2', title: "Earn relevance, don't assume it.", body: 'Surfacing irrelevant events erodes trust faster than having no recommendations at all. Personalization needs to feel intentional.' },
              { num: '3', title: 'Let users build an identity.', body: "Social proof isn't vanity — it's how people decide who to trust and what to try. The profile isn't an afterthought; it's a social signal." },
            ].map((p) => (
              <div key={p.num} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t py-7" style={{ borderColor: 'var(--color-border)' }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg)' }}>
                  {p.num}
                </div>
                <div>
                  <p className="text-base font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>{p.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <ImagePlaceholder label="Early Ideation — Sketches / Whiteboard Photos" height={380} />
        </section>

        <Divider />

        {/* ITERATION */}
        <section className="pb-16">
          <SectionLabel>Process</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-6 max-w-2xl" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
            From Low-Fi to High-Fi: Where Iteration Mattered Most
          </h2>
          <p className="text-base leading-relaxed mb-10 max-w-3xl" style={{ color: 'var(--color-text-secondary)' }}>
            I ran usability testing across two prototype rounds with 10 users, focusing on three core tasks.
          </p>

          <div className="flex flex-col gap-0 max-w-3xl mb-12">
            {[
              { label: 'What We Got Wrong First', problem: 'The initial RSVP tracking UI used subtle status indicators that users regularly misread. 4 out of 10 users couldn\'t accurately state whether a friend had confirmed or was still pending.', fix: 'Redesigned RSVP states with distinct visual differentiation — color, iconography, and label — so status was readable at a glance.' },
              { label: 'What We Got Wrong Second', problem: 'The first pass at animations was too aggressive. Users described the interface as \'busy\' and \'distracting.\'', fix: 'Pulled back animation intensity. The rule: motion should confirm an action, not announce it.' },
              { label: 'Profile Feature Expansion', problem: 'Testing revealed the initial Showcase feature was too limited. Users wanted to curate, not just accumulate. We expanded badge options and added photo uploads.' },
            ].map((b) => (
              <div key={b.label} className="border-t pt-7 pb-4" style={{ borderColor: 'var(--color-border)' }}>
                <MetaLabel>{b.label}</MetaLabel>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{b.problem}</p>
                {b.fix && (
                  <div className="flex gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <span className="font-bold shrink-0 mt-0.5" style={{ color: 'var(--color-text-muted)' }}>→</span>
                    <div>
                      <MetaLabel>What We Changed</MetaLabel>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{b.fix}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ImagePlaceholder label="Wireframe — Before" height={320} />
            <ImagePlaceholder label="Final Screen — After" height={320} />
          </div>
        </section>

        <Divider />

        {/* SOLUTION */}
        <section className="pb-16">
          <SectionLabel>Solution</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-12" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>The Three Problems, Solved</h2>

          {[
            { num: '01', title: 'Clutter and Irrelevant Discovery', body: 'The Profile Preferences system lets users define their interests upfront so recommendations are earned rather than guessed. The Map Search page adds granular filters. The Calendar view gives a clean overview of what they\'ve committed to.', imgLabel: 'Final UI — Discovery Screens' },
            { num: '02', title: 'The Coordination Gap', body: 'The Event Details page shows who in a user\'s network is attending — solving the \'is anyone I know going?\' question without requiring a group chat. The RSVP flow keeps attendance tracking inside the app with clear visual states.', imgLabel: 'Final UI — Coordination / RSVP Screens' },
            { num: '03', title: 'Identity and Social Validation', body: 'The Profile displays event history, follower/following relationships, and curated badges. For hosts, Event Management consolidates ticket tracking, guest lists, and event settings in a single view.', imgLabel: 'Final UI — Profile & Management Screens' },
          ].map((p) => (
            <div key={p.num} className="mb-16 last:mb-0">
              {/* Accent header */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-bold" style={{ color: 'var(--color-border)' }}>{p.num}</span>
                <h3 className="font-semibold" style={{ color: 'var(--color-text-primary)', fontSize: '1.15rem' }}>{p.title}</h3>
              </div>
              <p className="text-base leading-relaxed mb-8 max-w-3xl" style={{ color: 'var(--color-text-secondary)' }}>{p.body}</p>
              <ImagePlaceholder label={p.imgLabel} height={400} />
            </div>
          ))}
        </section>

        <Divider />

        {/* REFLECTION */}
        <section className="pb-16 max-w-3xl">
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
        <section className="pb-20 md:pb-32 max-w-3xl">
          <SectionLabel>Takeaway</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-8" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>The Bigger Lesson</h2>
          <div className="space-y-5">
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>This project taught me that functional problems and emotional problems require different design responses.</p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>The functional problem — finding events — was addressable with better filters and a cleaner UI. The emotional problem — the anxiety of coordination and the desire to be seen — required features that felt less like tools and more like social infrastructure.</p>

            {/* Closing pull quote */}
            <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <p className="font-semibold leading-snug" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-text-primary)' }}>
                &ldquo;I went in expecting to design a better search experience. I came out having designed a system for how people show up — and show up together — in their social lives.&rdquo;
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
