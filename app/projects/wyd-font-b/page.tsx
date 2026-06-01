import type { Metadata } from 'next'
import Link from 'next/link'
import { Playfair_Display, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'WYD — Font B: Playfair Display + IBM Plex Mono',
  description: 'Typography concept B',
}

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const plexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] })

// ── Primitives ────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[0.65rem] font-medium tracking-[0.22em] uppercase mb-5"
      style={{ color: 'var(--color-text-muted)', fontFamily: plexMono.style.fontFamily }}
    >
      {children}
    </p>
  )
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[0.62rem] font-medium tracking-[0.18em] uppercase mb-1.5"
      style={{ color: 'var(--color-text-muted)', fontFamily: plexMono.style.fontFamily }}
    >
      {children}
    </p>
  )
}

function Divider() {
  return <div className="border-t my-16 md:my-24" style={{ borderColor: 'var(--color-border)' }} />
}

function ImagePlaceholder({ label, height = 400 }: { label: string; height?: number }) {
  return (
    <div
      style={{ minHeight: `${height}px`, backgroundColor: '#F2F2F2', border: '2px dashed #CCCCCC', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      role="img" aria-label={`Image placeholder: ${label}`}
    >
      <p style={{ color: '#AAAAAA', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', padding: '0 2rem', lineHeight: 1.8, fontFamily: plexMono.style.fontFamily }}>
        {label}
      </p>
    </div>
  )
}

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
      <p className="text-[0.58rem] font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)', fontFamily: plexMono.style.fontFamily }}>{label}</p>
      {value && (
        <p className="font-bold mb-1.5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-text-primary)', lineHeight: 1, fontFamily: plexMono.style.fontFamily }}>
          {value}
        </p>
      )}
      <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)', fontFamily: plexSans.style.fontFamily }}>{body}</p>
    </div>
  )
}

export default function WydFontB() {
  return (
    <>
      <div className="sticky top-14 z-40 border-b hidden sm:block" style={{ backgroundColor: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderColor: 'var(--color-border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs transition-opacity hover:opacity-60" style={{ color: 'var(--color-text-muted)', fontFamily: plexMono.style.fontFamily }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back
          </Link>
          <p className="text-xs font-medium truncate max-w-sm" style={{ color: 'var(--color-text-secondary)', fontFamily: plexMono.style.fontFamily }}>WYD — Reimagining the Social Event Lifecycle</p>
          <div className="w-10" aria-hidden="true" />
        </div>
      </div>

      {/* Concept banner */}
      <div className="bg-violet-50 border-b border-violet-200 py-2 px-4 text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-violet-700" style={{ fontFamily: plexMono.style.fontFamily }}>Font B — Playfair Display + IBM Plex Mono</p>
      </div>

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ fontFamily: plexSans.style.fontFamily }}>

        {/* HERO */}
        <section className="pt-12 pb-10 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 lg:gap-16">
            <div>
              <SectionLabel>Case Study</SectionLabel>
              <h1 className="leading-tight mb-6 max-w-3xl" style={{ color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily, fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                WYD — Reimagining the Social Event Lifecycle
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <div><MetaLabel>Role</MetaLabel><p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>Product Designer — Primary Research, Concept Ideation, Prototyping, High-Fidelity Design, Front-End Development</p></div>
                <div><MetaLabel>Timeline</MetaLabel><p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>July 2025 – December 2025</p></div>
                <div><MetaLabel>Tools</MetaLabel><p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Figma, Adobe Creative Suite</p></div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-4 pt-1">
              <p className="text-[0.6rem] font-medium tracking-widest uppercase" style={{ color: 'var(--color-text-muted)', fontFamily: plexMono.style.fontFamily }}>At a glance</p>
              <div className="space-y-4">
                {[{ n: '4 → 1', label: 'apps consolidated' }, { n: '3', label: 'friction points eliminated' }, { n: '48', label: 'survey respondents' }, { n: '10', label: 'usability test participants' }].map((item) => (
                  <div key={item.n} className="flex items-baseline gap-2">
                    <span className="font-bold text-lg" style={{ color: 'var(--color-text-primary)', fontFamily: plexMono.style.fontFamily }}>{item.n}</span>
                    <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mb-14 md:mb-20"><ImagePlaceholder label="Hero — Product Overview / App Mockup" height={480} /></div>

        {/* Impact */}
        <section className="pb-12 md:pb-16 max-w-3xl">
          <blockquote className="leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily, fontWeight: 700 }}>
            3 core friction points eliminated. 1 app to replace 4.
          </blockquote>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Event planning is social. The tools people use to plan events aren&apos;t. Users were already juggling Eventbrite for discovery, WhatsApp for coordination, Google Calendar for tracking, and Instagram for social proof — and none of these talked to each other. WYD was an opportunity to design the connective tissue that was missing.
          </p>
        </section>

        <Divider />

        {/* BRIEF */}
        <section className="pb-16 md:pb-24">
          <SectionLabel>Context</SectionLabel>
          <SplitSection aside={<Callout label="Starting assumption" body="The biggest barrier was discoverability — users couldn't find relevant events. This turned out to be only partially true." />}>
            <h2 className="mb-6" style={{ color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily, fontWeight: 600, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>The Brief</h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>Design an intuitive event app that simplifies discovery, planning, and participation. But rather than accepting that problem statement at face value, I started by asking: what is actually broken, and for whom?</p>
          </SplitSection>
        </section>

        <Divider />

        {/* RESEARCH */}
        <section className="pb-16 md:pb-24">
          <SectionLabel>Research</SectionLabel>
          <SplitSection aside={
            <div className="space-y-3">
              <Callout label="Method mix" body="Mixed-methods research to capture both what users were doing and why they felt frustrated." />
              <Callout label="Observed" value="10" body="users in natural navigation contexts, without prompting." />
              <Callout label="Platforms audited" value="7" body="Including Eventbrite and Meetup." />
              <Callout label="Survey respondents" value="48" body="To separate personal frustrations from systemic patterns." />
            </div>
          }>
            <h2 className="mb-6" style={{ color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily, fontWeight: 600, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>Navigating the &ldquo;Obvious&rdquo; Problem</h2>
            <div className="space-y-4 mb-12">
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>My initial assumption was that the biggest barrier was discoverability — that users simply couldn&apos;t find relevant events. That turned out to be only partially true.</p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>To challenge my assumptions, I adopted a mixed-methods research approach designed to capture both what users were doing and why they felt frustrated.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {[
                { num: '01', title: 'Observation Study', body: 'Shadowed 10 users (students and professionals) to track natural navigation patterns without prompting them. Seeing behavior in context revealed where the real drop-off points were.' },
                { num: '02', title: 'Competitor Audit', body: 'Analyzed 7 platforms including Eventbrite and Meetup to identify what the market was already solving well and where it was failing.' },
                { num: '03', title: 'Qualitative Interviews', body: 'Ran 5 in-depth sessions focused specifically on coordination frustrations. These surfaced the emotional dimension — the anxiety, not just the inconvenience.' },
                { num: '04', title: 'Quantitative Survey', body: 'Validated findings with 48 respondents to distinguish personal frustrations from systemic patterns.' },
              ].map((m) => (
                <div key={m.num} className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
                  <p className="text-[0.65rem] font-medium tracking-[0.15em] mb-3" style={{ color: 'var(--color-text-muted)', fontFamily: plexMono.style.fontFamily }}>{m.num}</p>
                  <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{m.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{m.body}</p>
                </div>
              ))}
            </div>
            <ImagePlaceholder label="Research Methods — Observation Notes / Affinity Map" height={400} />
          </SplitSection>
        </section>

        <Divider />

        {/* FINDINGS */}
        <section className="pb-16 md:pb-24">
          <SectionLabel>Findings</SectionLabel>
          <SplitSection aside={
            <div className="space-y-3">
              {[{ value: '65%', label: 'explicitly requested better personalisation — buried under irrelevant suggestions.' }, { value: '70%', label: 'found coordinating events with friends difficult and were forced off-platform.' }, { value: '80%', label: 'wanted a way to showcase their event history — a need no platform addressed.' }].map((s) => (
                <div key={s.value} className="p-5 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                  <p className="font-bold mb-2" style={{ fontSize: '2rem', lineHeight: 1, color: 'var(--color-text-primary)', fontFamily: plexMono.style.fontFamily }}>{s.value}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          }>
            <h2 className="mb-6" style={{ color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily, fontWeight: 600, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>What the Data Actually Said</h2>
            <p className="text-base leading-relaxed mb-8 italic" style={{ color: 'var(--color-text-secondary)', fontFamily: playfair.style.fontFamily }}>&ldquo;The research reframed the problem entirely.&rdquo;</p>
            <p className="text-base leading-relaxed mb-14" style={{ color: 'var(--color-text-secondary)' }}>The discovery problem was real, but solvable. The coordination problem was where the experience truly broke down — and it was being almost completely ignored by competitors.</p>
            <ImagePlaceholder label="Data Visualization — Survey Results Chart" height={400} />
          </SplitSection>
        </section>

        <Divider />

        {/* REFRAME */}
        <section className="pb-16 md:pb-24">
          <SectionLabel>Reframe</SectionLabel>
          <h2 className="mb-8" style={{ color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily, fontWeight: 600, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>Reframed Problem Statement</h2>
          <div className="p-8 md:p-10 rounded-lg max-w-3xl" style={{ backgroundColor: 'var(--color-surface)' }}>
            <p className="leading-relaxed italic" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily }}>
              &ldquo;How might we reduce the friction of group coordination and social validation in event planning, so that users never need to leave the app to do the social work that makes events actually happen?&rdquo;
            </p>
          </div>
        </section>

        <Divider />

        {/* DESIGN PRINCIPLES */}
        <section className="pb-16 md:pb-24">
          <SectionLabel>Design</SectionLabel>
          <SplitSection aside={<Callout label="Grounding filter" body="Every design decision was tested against: does this reduce the need to go off-platform?" />}>
            <h2 className="mb-6" style={{ color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily, fontWeight: 600, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>Design Principles I Anchored To</h2>
            <p className="text-base leading-relaxed mb-12" style={{ color: 'var(--color-text-secondary)' }}>Before moving to screens, I defined three principles based directly on the research:</p>
            <div className="flex flex-col gap-0 mb-14">
              {[
                { num: '1', title: 'Keep the group together.', body: 'Any coordination that happens off-platform is a product failure. The app needs to make group planning feel less chaotic than a group chat.' },
                { num: '2', title: "Earn relevance, don't assume it.", body: 'Surfacing irrelevant events erodes trust faster than having no recommendations at all. Personalization needs to feel intentional.' },
                { num: '3', title: 'Let users build an identity.', body: "Social proof isn't vanity — it's how people decide who to trust and what to try. The profile isn't an afterthought; it's a social signal." },
              ].map((p) => (
                <div key={p.num} className="grid grid-cols-[2rem_1fr] gap-4 border-t py-7" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)', fontFamily: plexMono.style.fontFamily }}>{p.num}</p>
                  <div>
                    <p className="text-base font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily }}>{p.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <ImagePlaceholder label="Early Ideation — Sketches / Whiteboard Photos" height={400} />
          </SplitSection>
        </section>

        <Divider />

        {/* TAKEAWAY */}
        <section className="pb-20 md:pb-32">
          <SectionLabel>Takeaway</SectionLabel>
          <SplitSection aside={<Callout label="Core lesson" body="Functional problems and emotional problems require different design responses. Don't mistake one for the other." />}>
            <h2 className="mb-8" style={{ color: 'var(--color-text-primary)', fontFamily: playfair.style.fontFamily, fontWeight: 600, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>The Bigger Lesson</h2>
            <div className="space-y-5">
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>This project taught me that functional problems and emotional problems require different design responses.</p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>The functional problem — finding events — was addressable with better filters and a cleaner UI. The emotional problem — the anxiety of coordination and the desire to be seen — required features that felt less like tools and more like social infrastructure.</p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>The pivot happened because the research challenged my first assumption. I went in expecting to design a better search experience. I came out having designed a system for how people show up — and show up together — in their social lives.</p>
            </div>
          </SplitSection>
        </section>

      </main>
    </>
  )
}
