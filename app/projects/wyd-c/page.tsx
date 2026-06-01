import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'WYD — Concept C: Two-Column Editorial',
  description: 'Concept C: Magazine-style two-column layout',
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

/* Two-column split: main content | right callout */
function SplitSection({ children, aside }: { children: React.ReactNode; aside: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 lg:gap-16 items-start">
      <div>{children}</div>
      <div className="lg:pt-1">{aside}</div>
    </div>
  )
}

function Callout({ label, value, body }: { label: string; value?: string; body: string }) {
  return (
    <div className="p-5 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
      <p className="text-[0.6rem] font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
      {value && <p className="font-bold mb-1.5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-text-primary)', lineHeight: 1 }}>{value}</p>}
      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{body}</p>
    </div>
  )
}

export default function WydPageC() {
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

      {/* Concept C label */}
      <div className="bg-teal-50 border-b border-teal-200 py-2 px-4 text-center">
        <p className="text-xs font-semibold text-teal-700 tracking-widest uppercase">Concept C — Two-Column Editorial Layout</p>
      </div>

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO — compact, stats beside title */}
        <section className="pt-12 pb-10 md:pt-16">
          <Link href="/" className="inline-flex sm:hidden items-center gap-1.5 text-sm mb-8 transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-muted)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 lg:gap-16">
            {/* Left: title + meta */}
            <div>
              <SectionLabel>Case Study</SectionLabel>
              <h1 className="font-semibold tracking-tight leading-tight mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'var(--color-text-primary)' }}>
                WYD — Reimagining the Social Event Lifecycle
              </h1>
              <div className="grid grid-cols-3 gap-4 pt-5 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <div>
                  <MetaLabel>Role</MetaLabel>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Product Designer</p>
                </div>
                <div>
                  <MetaLabel>Timeline</MetaLabel>
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Jul – Dec 2025</p>
                </div>
                <div>
                  <MetaLabel>Tools</MetaLabel>
                  <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Figma, Adobe CC</p>
                </div>
              </div>
            </div>

            {/* Right: at-a-glance numbers */}
            <div className="hidden lg:flex flex-col gap-4 pt-1">
              <p className="text-[0.6rem] font-semibold tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>At a glance</p>
              <div className="space-y-4">
                {[
                  { n: '4 → 1', label: 'apps consolidated' },
                  { n: '3', label: 'friction points eliminated' },
                  { n: '48', label: 'survey respondents' },
                  { n: '10', label: 'usability test participants' },
                ].map((item) => (
                  <div key={item.n} className="flex items-baseline gap-2">
                    <span className="font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>{item.n}</span>
                    <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mb-14">
          <ImagePlaceholder label="Hero — Product Overview / App Mockup" height={460} />
        </div>

        {/* Impact */}
        <section className="pb-14 max-w-3xl">
          <blockquote className="font-bold leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)', color: 'var(--color-text-primary)' }}>
            3 core friction points eliminated. 1 app to replace 4.
          </blockquote>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Event planning is social. The tools people use to plan events aren&apos;t. Users juggled Eventbrite, WhatsApp, Google Calendar, and Instagram — and none of these talked to each other. WYD was an opportunity to design the connective tissue that was missing.
          </p>
        </section>

        <Divider />

        {/* BRIEF — split */}
        <section className="pb-16">
          <SectionLabel>Context</SectionLabel>
          <SplitSection
            aside={
              <Callout
                label="Starting assumption"
                body="The biggest barrier was discoverability — users couldn't find relevant events. This turned out to be only partially true."
              />
            }
          >
            <h2 className="font-semibold tracking-tight mb-5" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>The Brief</h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Design an intuitive event app that simplifies discovery, planning, and participation. But rather than accepting that at face value, I started by asking: what is actually broken, and for whom?
            </p>
          </SplitSection>
        </section>

        <Divider />

        {/* RESEARCH — split */}
        <section className="pb-16">
          <SectionLabel>Research</SectionLabel>
          <SplitSection
            aside={
              <div className="space-y-3">
                <Callout label="Method mix" body="Mixed-methods to capture both what users were doing and why they felt frustrated." />
                <Callout label="Sample" value="10" body="users observed in natural navigation, without prompting." />
                <Callout label="Platforms audited" value="7" body="Including Eventbrite and Meetup — what they solved and what they missed." />
              </div>
            }
          >
            <h2 className="font-semibold tracking-tight mb-5" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>
              Navigating the &ldquo;Obvious&rdquo; Problem
            </h2>
            <div className="space-y-4 mb-10">
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                My initial assumption was that the biggest barrier was discoverability — that users simply couldn&apos;t find relevant events. That turned out to be only partially true.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                To challenge my assumptions, I adopted a mixed-methods research approach designed to capture both what users were doing and why they felt frustrated.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { num: '01', title: 'Observation Study', body: 'Shadowed 10 users to track natural navigation patterns without prompting them.' },
                { num: '02', title: 'Competitor Audit', body: 'Analyzed 7 platforms — what the market solved well and what it ignored.' },
                { num: '03', title: 'Qualitative Interviews', body: '5 in-depth sessions focused on coordination frustrations and emotional friction.' },
                { num: '04', title: 'Quantitative Survey', body: 'Validated findings with 48 respondents to separate personal from systemic.' },
              ].map((m) => (
                <div key={m.num} className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
                  <p className="text-[0.65rem] font-semibold tracking-[0.15em] mb-2" style={{ color: 'var(--color-text-muted)' }}>{m.num}</p>
                  <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>{m.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{m.body}</p>
                </div>
              ))}
            </div>

            <ImagePlaceholder label="Research Methods — Affinity Map / Observation Notes" height={340} />
          </SplitSection>
        </section>

        <Divider />

        {/* FINDINGS — split with big stats in aside */}
        <section className="pb-16">
          <SectionLabel>Findings</SectionLabel>
          <SplitSection
            aside={
              <div className="space-y-3">
                {[
                  { value: '65%', label: 'wanted better personalisation' },
                  { value: '70%', label: 'found coordination difficult' },
                  { value: '80%', label: 'wanted social event history' },
                ].map((s) => (
                  <div key={s.value} className="p-4 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                    <p className="font-bold" style={{ fontSize: '2rem', lineHeight: 1, color: 'var(--color-text-primary)' }}>{s.value}</p>
                    <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            }
          >
            <h2 className="font-semibold tracking-tight mb-5" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>What the Data Actually Said</h2>
            <p className="text-base leading-relaxed mb-6 italic" style={{ color: 'var(--color-text-secondary)' }}>
              &ldquo;The research reframed the problem entirely.&rdquo;
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--color-text-secondary)' }}>
              The discovery problem was real, but solvable. The coordination problem was where the experience truly broke down — and was almost completely ignored by competitors.
            </p>
            <ImagePlaceholder label="Data Visualization — Survey Results Chart" height={300} />
          </SplitSection>
        </section>

        <Divider />

        {/* REFRAME */}
        <section className="pb-16">
          <SectionLabel>Reframe</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-8" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>Reframed Problem Statement</h2>
          <div className="p-8 rounded-lg max-w-3xl" style={{ backgroundColor: 'var(--color-surface)' }}>
            <p className="leading-relaxed italic" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'var(--color-text-primary)' }}>
              &ldquo;How might we reduce the friction of group coordination and social validation in event planning, so that users never need to leave the app to do the social work that makes events actually happen?&rdquo;
            </p>
          </div>
        </section>

        <Divider />

        {/* DESIGN PRINCIPLES — split */}
        <section className="pb-16">
          <SectionLabel>Design</SectionLabel>
          <SplitSection
            aside={
              <Callout
                label="Grounding principle"
                body="Every design decision was filtered through: does this reduce the need to go off-platform?"
              />
            }
          >
            <h2 className="font-semibold tracking-tight mb-5" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>Design Principles I Anchored To</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>Before moving to screens, I defined three principles based directly on the research:</p>

            <div className="flex flex-col gap-0 mb-10">
              {[
                { num: '1', title: 'Keep the group together.', body: 'Any coordination that happens off-platform is a product failure. The app needs to make group planning feel less chaotic than a group chat.' },
                { num: '2', title: "Earn relevance, don't assume it.", body: 'Surfacing irrelevant events erodes trust faster than having no recommendations. Personalization needs to feel intentional.' },
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

            <ImagePlaceholder label="Early Ideation — Sketches / Whiteboard Photos" height={340} />
          </SplitSection>
        </section>

        <Divider />

        {/* ITERATION — split */}
        <section className="pb-16">
          <SectionLabel>Process</SectionLabel>
          <SplitSection
            aside={
              <div className="space-y-3">
                <Callout label="Rounds of testing" value="2" body="Low-fi prototype, then high-fi prototype with 10 users each round." />
                <Callout label="Core tasks tested" value="3" body="Discover an event. Coordinate attendance. Set up a profile." />
              </div>
            }
          >
            <h2 className="font-semibold tracking-tight mb-5" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>
              From Low-Fi to High-Fi: Where Iteration Mattered Most
            </h2>

            <div className="flex flex-col gap-0 mb-10">
              {[
                { label: 'What We Got Wrong First', problem: 'The initial RSVP tracking UI used subtle status indicators that users regularly misread. 4 out of 10 users couldn\'t accurately state whether a friend had confirmed or was pending.', fix: 'Redesigned RSVP states with distinct visual differentiation — color, iconography, and label — so status was readable at a glance.' },
                { label: 'What We Got Wrong Second', problem: 'The first pass at animations was too aggressive. Users described the interface as \'busy\' and \'distracting.\' The UI was competing with the social content.', fix: 'Pulled back animation intensity. The rule: motion should confirm an action, not announce it.' },
                { label: 'Profile Feature Expansion', problem: 'The initial Showcase feature was too limited. Users wanted to curate, not just accumulate. We expanded badge options and added photo uploads.' },
              ].map((b) => (
                <div key={b.label} className="border-t pt-6 pb-2" style={{ borderColor: 'var(--color-border)' }}>
                  <MetaLabel>{b.label}</MetaLabel>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{b.problem}</p>
                  {b.fix && (
                    <div className="flex gap-3">
                      <span className="font-bold shrink-0 mt-0.5" style={{ color: 'var(--color-text-muted)' }}>→</span>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{b.fix}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ImagePlaceholder label="Wireframe — Before" height={280} />
              <ImagePlaceholder label="Final Screen — After" height={280} />
            </div>
          </SplitSection>
        </section>

        <Divider />

        {/* SOLUTION */}
        <section className="pb-16">
          <SectionLabel>Solution</SectionLabel>
          <h2 className="font-semibold tracking-tight mb-12" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>The Three Problems, Solved</h2>

          {[
            { num: '01', title: 'Clutter and Irrelevant Discovery', body: 'The Profile Preferences system lets users define their interests upfront, so recommendations are earned rather than guessed. Map Search adds granular filters. The Calendar view gives a clean overview of commitments.', imgLabel: 'Final UI — Discovery Screens', aside: <Callout label="Key feature" body="Profile Preferences — users define interests upfront so every recommendation is earned." /> },
            { num: '02', title: 'The Coordination Gap', body: 'The Event Details page shows who in a user\'s network is attending — solving the \'is anyone I know going?\' question without a group chat. The RSVP flow keeps tracking in-app with clear visual states.', imgLabel: 'Final UI — Coordination / RSVP Screens', aside: <Callout label="Key insight" body="Moving coordination on-platform eliminated the #1 reason users abandoned events mid-planning." /> },
            { num: '03', title: 'Identity and Social Validation', body: 'The Profile displays event history, follower/following relationships, and curated badges. For hosts, Event Management consolidates ticket tracking, guest lists, and settings.', imgLabel: 'Final UI — Profile & Management Screens', aside: <Callout label="Key insight" body="80% of users wanted social event history. No existing platform was building for this need." /> },
          ].map((p) => (
            <div key={p.num} className="mb-16 last:mb-0">
              <SplitSection aside={p.aside}>
                <p className="text-[0.65rem] font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'var(--color-text-muted)' }}>Problem {p.num}</p>
                <h3 className="font-semibold mb-3" style={{ color: 'var(--color-text-primary)', fontSize: '1.1rem' }}>{p.title}</h3>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>{p.body}</p>
              </SplitSection>
              <div className="mt-6">
                <ImagePlaceholder label={p.imgLabel} height={380} />
              </div>
            </div>
          ))}
        </section>

        <Divider />

        {/* REFLECTION + TAKEAWAY — split */}
        <section className="pb-20 md:pb-32">
          <SplitSection
            aside={
              <Callout
                label="Core lesson"
                body="Functional problems and emotional problems require different design responses. Don't confuse one for the other."
              />
            }
          >
            <div className="mb-12">
              <SectionLabel>Reflection</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-6" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>What I&apos;d Do Differently</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  I&apos;d push earlier into the social dynamics of group decision-making. The hardest part of planning isn&apos;t tracking RSVPs — it&apos;s reaching consensus. A &lsquo;vote on options&rsquo; feature would have targeted that friction more directly.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  I&apos;d also instrument the prototype earlier. Behavioral data on where users slowed down would have told me which micro-decisions caused friction before the final round of testing.
                </p>
              </div>
            </div>

            <div>
              <SectionLabel>Takeaway</SectionLabel>
              <h2 className="font-semibold tracking-tight mb-6" style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>The Bigger Lesson</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>This project taught me that functional problems and emotional problems require different design responses.</p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  The functional problem — finding events — was addressable with better filters. The emotional problem — the anxiety of coordination and the desire to be seen — required features that felt less like tools and more like social infrastructure.
                </p>
                <p className="font-medium leading-snug mt-4 pt-4 border-t" style={{ color: 'var(--color-text-primary)', borderColor: 'var(--color-border)' }}>
                  I went in expecting to design a better search experience. I came out having designed a system for how people show up — and show up together — in their social lives.
                </p>
              </div>
            </div>
          </SplitSection>
        </section>

      </main>
    </>
  )
}
