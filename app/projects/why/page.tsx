import type { Metadata } from 'next'
import Link from 'next/link'
import './why.css'

export const metadata: Metadata = {
  title: 'Why. — The decision ledger · Shruthy Nair',
  description: "Eight weeks designing a decision ledger for async teams inside Relay's workspace.",
}

/* ── Shared primitives ───────────────────────────────────────── */
function ThinkBlob() {
  return (
    <div className="blob" aria-hidden="true">
      <span className="blush l" />
      <span className="blush r" />
    </div>
  )
}

function CropHandles() {
  return (
    <>
      <span className="ch tl" /><span className="ch tr" />
      <span className="ch bl" /><span className="ch br" />
      <span className="ch tc" /><span className="ch bc" />
      <span className="ch lc" /><span className="ch rc" />
    </>
  )
}

function BrowserChrome({ path }: { path: string }) {
  return (
    <div className="browser-chrome">
      <div className="dots">
        <span className="dot r" /><span className="dot y" /><span className="dot g" />
      </div>
      <div className="url">
        <span className="scheme">relay.team</span>
        <span className="path">{path}</span>
      </div>
      <div className="actions"><span>⌘K</span></div>
    </div>
  )
}

function AppSidebar({
  active = 'why',
  blur = false,
  navItems = ['Inbox', 'Threads', 'Why', 'Calendar'],
  channels = [] as string[],
  showMe = false,
}: {
  active?: string
  blur?: boolean
  navItems?: string[]
  channels?: string[]
  showMe?: boolean
}) {
  const style = blur ? { opacity: 0.5, filter: 'saturate(0.7)' } : undefined
  return (
    <aside className="app-sidebar" style={style} aria-hidden="true">
      <div className="ws"><span className="ws-mark">RELAY</span></div>
      <div className="search-pill">
        <span style={{ opacity: 0.6 }}>⌘</span> Search
        <span className="kbd">⌘K</span>
      </div>
      {navItems.map(item => (
        <div key={item} className={`nav-row${active.toLowerCase() === item.toLowerCase() ? ' active' : ''}`}>
          <span className="ico" /> {item}
        </div>
      ))}
      {channels.length > 0 && (
        <>
          <div className="group-label">Channels</div>
          {channels.map(ch => (
            <div key={ch} className="nav-row" style={{ fontSize: '12.5px' }}>
              <span style={{ opacity: 0.55 }}>#</span>&nbsp;{ch}
            </div>
          ))}
        </>
      )}
      {showMe && (
        <div className="me">
          <div className="av">YO</div>
          <div className="id">
            <div className="nm">You</div>
            <div className="ws2">relay.team</div>
          </div>
        </div>
      )}
    </aside>
  )
}

/* ── Relay screens ───────────────────────────────────────────── */
function RelayHome() {
  return (
    <div className="relay-screen" aria-label="Relay: Why decisions home">
      <BrowserChrome path="/why" />
      <div className="app">
        <AppSidebar
          active="why"
          navItems={['Inbox', 'Threads', 'Why', 'Calendar']}
          channels={['infra-migration', 'product', 'brand']}
          showMe
        />
        <div className="app-main">
          <div className="app-bar">
            <div className="crumbs">
              <span className="back">‹ Why</span>
              <span className="sep">/</span>
              <span>Decisions</span>
            </div>
            <div className="actions">
              <span className="ghost-btn">All areas ▾</span>
              <span className="new-btn">＋ Capture a decision</span>
            </div>
          </div>
          <div className="app-title">The team&apos;s reasoning, kept where the team works.</div>
          <div className="app-sub">
            <span className="pill live"><span className="dot" /> Recently decided</span>
            <span>Last updated 4 minutes ago</span>
          </div>

          <div className="decision-card">
            <div className="row1">
              <span className="pillet">infra</span>
              <span className="pillet gray">decided · 2h ago</span>
              <span style={{ marginLeft: 'auto' }}>by Maya</span>
            </div>
            <div className="decision">Move the onboarding email out of Mailchimp into our own queue.</div>
            <div className="meta">
              <span className="av"><span className="avatar">MA</span> Maya, Aki, Diego</span>
              <span>3 linked threads · 1 meeting</span>
            </div>
          </div>

          <div className="decision-card">
            <div className="row1">
              <span className="pillet">brand</span>
              <span className="pillet gray">decided · 5d ago</span>
              <span style={{ marginLeft: 'auto' }}>by Priya</span>
            </div>
            <div className="decision">Address the reader as &ldquo;you&rdquo; across product surfaces.</div>
            <div className="meta">
              <span className="av"><span className="avatar c">PP</span> Priya, You, Nora</span>
              <span>2 linked · revisit Apr 2027</span>
            </div>
          </div>

          <div className="decision-card">
            <div className="row1">
              <span className="pillet">product</span>
              <span className="pillet warn">drafting · saves as you write</span>
              <span style={{ marginLeft: 'auto' }}>by You</span>
            </div>
            <div className="decision">Inbox shows unresolved threads first, not most-recent.</div>
            <div className="meta">
              <span className="av"><span className="avatar y">DR</span> Diego, You</span>
              <span>5 linked threads · drafting the why</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CaptureScreen() {
  return (
    <div className="relay-screen" aria-label="Relay: in-thread AI decision detection">
      <BrowserChrome path="/threads/infra-migration" />
      <div className="app">
        <AppSidebar
          active="threads"
          navItems={['Threads', 'Inbox', 'Why']}
          channels={['infra-migration', 'product']}
        />
        <div className="app-main">
          <div className="thread-channel-head">
            <span className="chan"><span className="hash">#</span>infra-migration</span>
            <span className="meta">9 members · async</span>
            <span className="ago">just now</span>
          </div>
          <div className="thread-msg">
            <div className="av p">MA</div>
            <div>
              <div className="head"><span className="nm">Maya</span><span className="t">2:14 PM</span></div>
              <div className="bod">Onboarding email is stuck in Mailchimp again. We&apos;ve patched this twice. Should we just move it into our own queue?</div>
            </div>
          </div>
          <div className="thread-msg">
            <div className="av">DI</div>
            <div>
              <div className="head"><span className="nm">Diego</span><span className="t">2:16 PM</span></div>
              <div className="bod">+1. Cost of a queue is one afternoon. Cost of debugging Mailchimp is forever.</div>
            </div>
          </div>
          <div className="thread-msg">
            <div className="av c">AK</div>
            <div>
              <div className="head"><span className="nm">Aki</span><span className="t">2:18 PM</span></div>
              <div className="bod">Agreed, let&apos;s do it. Maya, you own it this sprint?</div>
            </div>
          </div>
          <div className="capture-card">
            <div className="cc-head">
              <span className="spark">◈</span>
              Looks like a decision. Add it to Why?
              <span className="ago">drafted from this thread</span>
            </div>
            <div className="cc-label">Decision</div>
            <div className="cc-decision">Move the onboarding email out of Mailchimp into our own queue.</div>
            <div className="cc-why">
              <span className="k">Why</span>
              Patched twice already. Ongoing debugging cost is higher than the one-afternoon build cost. Owner: Maya.
            </div>
            <div className="cc-actions">
              <span className="cc-btn primary">Add to Why</span>
              <span className="cc-btn ghost">Edit first</span>
              <span className="cc-btn subtle">Not a decision</span>
              <span className="cc-helper">You write it. AI just gets you started.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailScreen() {
  return (
    <div className="relay-screen" aria-label="Relay: decision detail page">
      <BrowserChrome path="/why/onboarding-email-queue" />
      <div className="app">
        <AppSidebar
          active="why"
          navItems={['Inbox', 'Threads', 'Why', 'Calendar']}
        />
        <div className="app-main">
          <div className="detail-head">
            <div className="crumb">
              <span className="back">‹ Why</span>
              <span className="sep">/</span>
              Infra
            </div>
            <div className="pills">
              <span className="pillet">infra</span>
              <span className="pillet gray">decided · 2h ago</span>
            </div>
            <div className="title">Move the onboarding email out of Mailchimp into our own queue.</div>
          </div>
          <div className="detail-grid">
            <div>
              <div className="label">Why</div>
              <div className="rationale">
                We&apos;ve patched the Mailchimp delivery twice in six weeks. The build cost of moving it in-house is roughly one afternoon; the debugging cost of staying is open-ended. Owning the queue gives us retry semantics and a seat at the table when marketing asks for new triggers. <em>Revisit if send volume crosses 200k a day.</em>
              </div>
              <div className="label" style={{ marginTop: 22 }}>Linked context</div>
              <div className="linked">
                <div className="src">
                  <span className="src-ico" style={{ background: '#4A154B' }}>#</span>
                  <span>Slack thread, <em>#infra-migration, 2:14 PM</em></span>
                  <span className="src-meta">3 msgs</span>
                </div>
                <div className="src">
                  <span className="src-ico" style={{ background: '#1A1F36' }}>⬛</span>
                  <span>Standup transcript, <em>infra weekly</em></span>
                  <span className="src-meta">@ 14:08</span>
                </div>
                <div className="src">
                  <span className="src-ico" style={{ background: '#F24E1E' }}>F</span>
                  <span>Figma frame, <em>onboarding / email-states</em></span>
                  <span className="src-meta">v4</span>
                </div>
                <div className="src">
                  <span className="src-ico" style={{ background: '#1868DB' }}>L</span>
                  <span>Linear, <em>build the queue</em></span>
                  <span className="src-meta">in&nbsp;progress</span>
                </div>
              </div>
            </div>
            <div className="detail-aside">
              <div className="row"><span className="k">Owner</span><span className="v">Maya</span></div>
              <div className="row">
                <span className="k">In the room</span>
                <span className="v">
                  <span className="av-stack">
                    <span className="av">MA</span>
                    <span className="av c">AK</span>
                    <span className="av y">DI</span>
                  </span>
                </span>
              </div>
              <div className="row"><span className="k">Captured from</span><span className="v">#infra-migration</span></div>
              <div className="row"><span className="k">Decided</span><span className="v">2h ago</span></div>
              <div className="row"><span className="k">Revisit</span><span className="v">at 200k / day</span></div>
              <div className="row"><span className="k">Visibility</span><span className="v">Everyone</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RetrieveScreen() {
  return (
    <div className="relay-screen" aria-label="Relay: ⌘K command palette search">
      <BrowserChrome path="/why" />
      <div className="app">
        <AppSidebar active="why" blur navItems={['Inbox', 'Threads', 'Why']} />
        <div className="app-main" style={{ padding: 0, position: 'relative' }}>
          <div className="palette-stage">
            <div className="stage-faded">
              <div className="ph s" /><div className="ph" /><div className="ph l" />
              <div className="card-ph" /><div className="card-ph" /><div className="card-ph" />
            </div>
            <div className="scrim" />
            <div className="palette">
              <div className="pal-input">
                <span className="ic" />
                <span className="q">why mailchimp<span className="caret" aria-hidden="true" /></span>
                <span className="kbd">esc</span>
              </div>
              <div className="pal-section">Decisions · 3 matches</div>
              <div className="pal-row active">
                <span className="pal-id">infra</span>
                <span className="pal-title">Move the onboarding email out of <em>Mailchimp</em>.</span>
                <span className="pal-tag">decided</span>
                <span className="pal-when">2h</span>
              </div>
              <div className="pal-row">
                <span className="pal-id">growth</span>
                <span className="pal-title">Keep <em>Mailchimp</em> for marketing-only sends.</span>
                <span className="pal-tag">decided</span>
                <span className="pal-when">3mo</span>
              </div>
              <div className="pal-row">
                <span className="pal-id">growth</span>
                <span className="pal-title">Adopt <em>Mailchimp</em> as the lifecycle vendor.</span>
                <span className="pal-tag">decided</span>
                <span className="pal-when">1y</span>
              </div>
              <div className="pal-section">Threads · 7 matches</div>
              <div className="pal-row">
                <span className="pal-id">#</span>
                <span className="pal-title">#infra-migration, <em>mailchimp</em> retries</span>
                <span className="pal-tag">thread</span>
                <span className="pal-when">2h</span>
              </div>
              <div className="pal-foot">
                <span><span className="kbd">↑↓</span>navigate</span>
                <span><span className="kbd">↵</span>open</span>
                <span style={{ marginLeft: 'auto' }}>works from email and calendar too</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────────── */
export default function WhyPage() {
  const channels = [
    { ico: '#',  bg: '#4A154B', name: 'Chat',              tools: 'Slack, Teams, Discord',      loss: 'Buried by the next thread within hours.' },
    { ico: '⬡',  bg: '#2E73B7', name: 'Data pulls',        tools: 'Looker, Mode, Metabase',     loss: 'The number is saved. The reason it was pulled is not.' },
    { ico: 'N',  bg: '#1A1A1A', name: 'Notion, Confluence', tools: 'Wiki, runbooks, sources of truth', loss: 'Long-form. Rarely opened after week one, often stale.' },
    { ico: 'J',  bg: '#1868DB', name: 'Jira, Linear',       tools: 'Tickets, epics, statuses',  loss: 'Captures what got done. Not why it was chosen.' },
    { ico: 'F',  bg: '#F24E1E', name: 'Figma comments',     tools: 'Inline pins, threads on artefacts', loss: 'Carry real context, then vanish when the frame moves.' },
    { ico: '@',  bg: '#C95A2A', name: 'Email',              tools: 'All-hands, vendor pings, sign-offs', loss: 'Reaches a few inboxes. Stays inside them.' },
    { ico: '▶',  bg: '#6A52E5', name: 'Recordings',         tools: 'Loom, recorded standups',   loss: 'Hide the resolution somewhere in minute 14.' },
    { ico: '■',  bg: '#1A1F36', name: 'Meetings',           tools: 'Zoom, Meet, in person',     loss: 'Resolved by a nod. Captured by nobody.' },
  ]

  const rungs = [
    { n: '↓ lightest', mode: 'Message',       sub: 'chat · DM · slash-thread',          weight: 1, loss: 'Decision dies in the thread, buried by the next one within hours.', cracked: true  },
    { n: '↓',          mode: 'Quick call',    sub: 'huddle · 1:1 · jump on real quick', weight: 2, loss: 'Everyone not on the call never hears it happened.',                 cracked: true  },
    { n: '↓',          mode: 'Proper meeting',sub: 'scheduled · 5+ people · agenda',    weight: 3, loss: 'Resolution hides inside minute 38 of a 60-minute transcript.',       cracked: false },
    { n: '↓',          mode: 'Email',         sub: 'all-hands · stakeholder ping · sign-off', weight: 4, loss: 'Findable for two weeks, then buried in the archive.',         cracked: false },
    { n: '↓ heaviest', mode: 'Documentation', sub: 'Notion · runbook · source of truth', weight: 5, loss: 'Written for a small fraction of decisions, and rarely updated when they change.', cracked: false },
  ]

  const frictions = [
    { n: '01', t: 'Vague memory.',           x: 'You know it exists, not where.' },
    { n: '02', t: 'Wrong tool first.',       x: 'Slack? doc? email? a call?' },
    { n: '03', t: 'Context-switch tax.',     x: 'Every tab break kills the flow.' },
    { n: '04', t: "Recordings don't skim.",  x: 'Two minutes hidden in sixty.' },
    { n: '05', t: 'The confidence gap.',     x: 'Is this still the final version?' },
    { n: '06', t: 'No trail of reasoning.',  x: 'You find the what, not the why.' },
    { n: '07', t: 'Asking has a cost.',      x: 'Feels like admitting you missed it.' },
    { n: '08', t: 'The rabbit hole.',        x: 'Thirty minutes gone, nothing found.' },
  ]

  const principles = [
    { n: '01', h: 'Live where work lives.',               p: "Why is a section inside Relay, not a standalone tool. Capture happens at the surface where the decision was made, from a thread, a transcript, a comment. Never ‘open a new app and fill out a form’.", badge: 'Surface budget' },
    { n: '02', h: 'Make capture cheaper than the conversation.', p: "If writing a decision down costs more than the call that made it, it won’t happen. So the goal is less friction and less time, not a number on a clock. AI drafts from the source. The person confirms or edits. Nothing is saved without consent.", badge: 'Friction budget' },
    { n: '03', h: "Reference, don’t recreate.",      p: "A decision points back at its source rather than copying the content into a new place. One source of truth per artefact. If the source moves, the link follows. If it’s edited, the reasoning stays put.", badge: 'Anti-duplication' },
    { n: '04', h: 'Retrievable by anyone, from anywhere.', p: 'A new hire, a returner from PTO, someone in another timezone all reach the same answer the same way. From inside Relay, from the channels it integrates with, from a deep link in email and calendar.', badge: 'Recall budget' },
  ]

  return (
    <>
      <div className="why-cs">

        {/* ── Hero ── */}
        <header className="hero">
          <div className="chapter-inner">
            <div className="hero-top">
              <span className="crumb">
                <a href="/">Work</a>
              </span>
            </div>

            <div className="hero-grid">
              <h1 className="hero-name" id="cs-title">Why<span className="dot">.</span></h1>
              <p className="hero-tag">A decision ledger that lives inside the tools a team already works in.</p>
            </div>

            <p className="hero-sub">
              Distributed teams make decisions in chat, on calls, in a Figma comment, in a meeting nobody recorded.
              The decision survives. The reasoning behind it does not. <strong>Why</strong> is a place to keep that
              reasoning, built on the surfaces people already use so nobody has to remember to open another tool.
            </p>

            <div className="hero-pills" role="list">
              {[
                { label: 'Product & UI',            color: '#1F8A5B' },
                { label: 'UX Research',             color: '#1F8FA0' },
                { label: 'Interaction Design',      color: '#B58A00' },
                { label: 'Accessibility (WCAG 2.2 AA)', color: '#C8459B' },
              ].map(({ label, color }) => (
                <span key={label} className="hpill" role="listitem">
                  <span className="sw" style={{ background: color }} />
                  {label}
                </span>
              ))}
            </div>

            <div className="meta-row" role="list">
              <div className="meta-card y" role="listitem">
                <div className="label">Role</div>
                <div className="value">Product designer</div>
                <div className="sub">Research, IA, visual + interaction, a11y review</div>
              </div>
              <div className="meta-card c" role="listitem">
                <div className="label">Timeline</div>
                <div className="value">8 weeks</div>
                <div className="sub">Feb to Apr 2025, v1 shipped to one workspace</div>
              </div>
              <div className="meta-card g" role="listitem">
                <div className="label">Team</div>
                <div className="value">2 eng, 1 PM, me</div>
                <div className="sub">Plus brand &amp; accessibility partners on review</div>
              </div>
              <div className="meta-card p" role="listitem">
                <div className="label">Surface</div>
                <div className="value">A section inside Relay</div>
                <div className="sub">One new sidebar item, not a new product</div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Overview ── */}
        <section style={{ paddingTop: 64 }} aria-label="Product overview">
          <div className="chapter-inner">
            <div className="shot wide" style={{ marginTop: 0 }}>
              <div className="shot-tag"><span className="sq" />&nbsp;relay.team / why · decisions home · v3.2</div>
              <div className="cropframe">
                <CropHandles />
                <RelayHome />
              </div>
              <p className="shot-cap">
                <span className="cn">The home</span>
                <span>One quiet list of decisions and the reasoning behind each. No dashboards, no counters, no leaderboard. <em>It is a record, not a scoreboard.</em></span>
              </p>
            </div>
          </div>
        </section>

        {/* ── 01 · Approach ── */}
        <section className="chapter" aria-labelledby="ch-01">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">01</span> Approach</span>
                <h2 className="chap-h" id="ch-01">I stopped trying to solve, and started trying to <em>seek.</em></h2>
                <p className="chap-body">
                  There is never one problem. There are dozens, and most of them are decoys. So before designing anything I changed my own posture from problem solver to <strong>problem seeker</strong>, and held one rule: pick the problem that serves both the business and the person using the product, then sit inside it far longer than feels comfortable before reaching for a solution.
                </p>
                <p className="chap-body">
                  The deeper I went, the more the surface request (&ldquo;give us a place to write decisions down&rdquo;) turned out to be the wrong thing to build.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">Don&apos;t normalise the problem. A product people already use still has to <em>evolve</em>, but the change can&apos;t be jarring. Improve it inside the limits of what they already know.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 · Problem ── */}
        <section className="chapter" aria-labelledby="ch-02">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">02</span> The problem</span>
                <h2 className="chap-h" id="ch-02">A single decision rarely lives in <em>one place.</em></h2>
                <p className="chap-body">
                  Relay is the async workspace for distributed teams. Shadowing forty-two of them, the same shape kept appearing. A decision starts in chat, gets validated on a quick call, references a dashboard, lands in a doc, and is finally announced by email.
                </p>
                <p className="chap-body">
                  Every step is a different surface, and each one loses context in its own way.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">Nobody owns the job of connecting information across tools. They were never built to talk to each other, so the <em>why</em> falls between them.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="channels" role="list" aria-label="Where decisions get lost">
              {channels.map(({ ico, bg, name, tools, loss }) => (
                <div key={name} className="chan-cell" role="listitem">
                  <div className="ch-ico" style={{ background: bg, color: '#fff' }}>{ico}</div>
                  <div className="ch-name">{name}</div>
                  <div className="ch-loss">{loss}</div>
                  <div className="ch-foot">{tools}</div>
                </div>
              ))}
            </div>

            <div className="note-strip">
              Two senior engineers had quietly become the team&apos;s memory. They were the highest-message-volume people in the workspace, <strong>a metric nobody was proud of</strong>, because every answer that only lives in someone&apos;s head is a single point of failure.
            </div>
          </div>
        </section>

        {/* ── 03 · Journey ── */}
        <section className="chapter" aria-labelledby="ch-03">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">03</span> How a decision travels</span>
                <h2 className="chap-h" id="ch-03">People pick the <em>lightest</em> mode that still gets the decision made.</h2>
                <p className="chap-body">
                  When something needs deciding, people don&apos;t pick the most durable channel. They pick the cheapest one they think they can get away with. A message costs nothing to send. A document costs an hour to write. So the decision falls through the cracks of whichever mode it chose.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">The team isn&apos;t lazy. Every one of these rungs is the <em>right</em> way to work that day. The problem is that none of them remember.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ladder" role="list" aria-label="Communication modes by weight">
              {rungs.map(({ n, mode, sub, weight, loss, cracked }) => (
                <div key={mode} className={`rung${cracked ? ' cracked' : ''}`} role="listitem">
                  <div className="rung-n">{n}</div>
                  <div className="rung-mode">
                    {mode}
                    <span className="sub">{sub}</span>
                  </div>
                  <div className="rung-weight">
                    weight&nbsp;
                    <span className="bars" aria-label={`Weight: ${weight} of 5`}>
                      {[1,2,3,4,5].map(v => <i key={v} className={v <= weight ? undefined : 'off'} />)}
                    </span>
                  </div>
                  <div className="rung-loss">{loss}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 · Finding the right source ── */}
        <section className="chapter" aria-labelledby="ch-04">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">04</span> Finding the right source</span>
                <h2 className="chap-h" id="ch-04">You are mid-document, you need one fact, and you <em>know</em> it exists somewhere.</h2>
                <p className="chap-body">
                  You remember the conversation. But you are writing something other people will rely on, so you need to be sure before you put it down. Asking feels like admitting you missed it, so you go looking. Here is what that costs.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">Design for this moment. Not &lsquo;store decisions&rsquo;, but <em>the cost of becoming sure</em> when you already half-remember the answer.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="frictions" role="list">
              {frictions.map(({ n, t, x }) => (
                <div key={n} className="fric" role="listitem">
                  <span className="fn">{n}</span>
                  <span className="ft">{t}</span>
                  <span className="fx">{x}</span>
                </div>
              ))}
            </div>

            <div className="tension">
              <div className="lbl">The core tension</div>
              <p>You need <em>confidence</em> before you commit something to a document. Getting it means digging through fragmented, multi-tool information. The real value isn&apos;t finding information, it&apos;s <em>lowering the cost of being sure</em>.</p>
            </div>
          </div>
        </section>

        {/* ── 05 · Honest questions ── */}
        <section className="chapter" aria-labelledby="ch-05">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">05</span> The honest questions</span>
                <h2 className="chap-h" id="ch-05">Will searching scattered tools actually help, or is this just <em>poor personal management?</em></h2>
                <p className="chap-body">
                  I kept circling this, so I made myself answer it. Yes, there is a discipline component. But it is also structural, and pretending it is purely a personal failing is how you ship the wrong fix.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">Finding it only helps if you find the <em>right</em> thing, fast, with confidence. A long search that ends in doubt just relocated the problem.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="both">
              <div className="bc disc">
                <span className="bk">Personal habit</span>
                <div className="bp">If nobody writes it down, no tool can find it.</div>
              </div>
              <div className="bplus" aria-hidden="true">＋</div>
              <div className="bc struct">
                <span className="bk">Structural friction</span>
                <div className="bp">Tools were never built to talk to each other.</div>
              </div>
            </div>

            <div className="verdict">
              <span className="vlbl">So the honest answer</span>
              <p>It&apos;s both. The fix isn&apos;t discipline <em>or</em> software. It is lowering the cost of capture at the moment a decision happens, so there is actually something to find later.</p>
            </div>
          </div>
        </section>

        {/* ── 06 · Docs vs logs ── */}
        <section className="chapter" aria-labelledby="ch-06">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">06</span> Docs vs decision logs</span>
                <h2 className="chap-h" id="ch-06">Aren&apos;t documentation and decision logs the <em>same thing?</em></h2>
                <p className="chap-body">
                  A fair challenge, and worth answering before building a new place for either. Documentation is crystallised decisions. A spec, an API contract, a brand guideline are all decisions that got formal enough to write down. The difference is which half of the story each one keeps.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">They don&apos;t compete. They&apos;re two layers of the same thing, and most teams only keep <em>one</em> of them.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="dvl">
              <div className="dvl-card log">
                <div className="tag"><span className="sq" style={{ background: '#6BE0A0' }} />Decision log</div>
                <h4>WHY</h4>
                <div className="cap">the moment of choice</div>
                <p>Options, the pick, who was in the room.</p>
              </div>
              <div className="dvl-card doc">
                <div className="tag"><span className="sq" style={{ background: '#5FD3E0' }} />Documentation</div>
                <h4>WHAT</h4>
                <div className="cap">the outcome, as fact</div>
                <p>The decision, written for the future. Rarely carries the why.</p>
              </div>
            </div>

            <div className="gap-strip">
              <div className="q">So where do the decision logs live?</div>
              <div className="a">Mostly nowhere. That&apos;s the gap Why fills.</div>
            </div>
          </div>
        </section>

        {/* ── 07 · Principles ── */}
        <section className="chapter" aria-labelledby="ch-07">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">07</span> Principles</span>
                <h2 className="chap-h" id="ch-07">Don&apos;t normalise the problem. <em>Integrate with it.</em></h2>
                <p className="chap-body">
                  The wrong move was to ship a sixth wiki and ask everyone to change how they work. The team doesn&apos;t need a new channel. They need the channels they already use to remember things. Four rules kept the work honest.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">Familiarity is the budget, and I don&apos;t get to spend much of it.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="principles" role="list">
              {principles.map(({ n, h, p, badge }) => (
                <div key={n} className="principle" role="listitem">
                  <div className="pn">{n}</div>
                  <div>
                    <h4>{h}</h4>
                    <p>{p}</p>
                    <span className="badge">{badge}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="note-strip green" style={{ marginTop: 18 }}>
              The principle underneath all four: <strong>fit the mental model people already have.</strong> Adoption fails the moment a tool asks for extra thought in the middle of real work. The smartest version of Why is the one that feels like a quiet part of a tool they already know, not a new thing to manage.
            </div>
          </div>
        </section>

        {/* ── 08 · Explorations ── */}
        <section className="chapter" aria-labelledby="ch-08">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">08</span> Explorations</span>
                <h2 className="chap-h" id="ch-08">Schema before screens. Then six directions, <em>one survivor.</em></h2>
                <p className="chap-body">
                  Before opening Figma I wrote the data model in plain text. What a decision is, what it links to, how it changes over time. That one habit killed three dead-end layouts before they cost a week each, because a pretty screen on top of the wrong model is just an expensive mistake.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">If I can&apos;t write the object in a sentence, I&apos;m not ready to draw it.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="explore-grid">

              {/* 00 · SCHEMA */}
              <div className="xcard">
                <div className="x-mock" style={{ background: '#16161A' }} aria-hidden="true">
                  <span className="x-tag">00 · SCHEMA</span>
                  <div style={{ position: 'absolute', inset: '38px 16px 16px', fontFamily: 'var(--mono)', fontSize: 9.5, lineHeight: 1.7, color: '#9FE870' }}>
                    <div style={{ color: '#5FD3E0' }}>decision {'{'}</div>
                    <div>&nbsp;&nbsp;statement: <span style={{ color: '#FFE45C' }}>string</span></div>
                    <div>&nbsp;&nbsp;why: <span style={{ color: '#FFE45C' }}>string</span></div>
                    <div>&nbsp;&nbsp;sources: <span style={{ color: '#FF7AC6' }}>Ref[]</span></div>
                    <div>&nbsp;&nbsp;owner, area, status</div>
                    <div>&nbsp;&nbsp;revisit_when?</div>
                    <div style={{ color: '#5FD3E0' }}>{'}'}</div>
                  </div>
                </div>
                <div className="x-body">
                  <div className="x-status shipped"><span className="dot" /> Held the whole build</div>
                  <h4>The object, in text first.</h4>
                  <p>Sources are <em>references</em>, never copies. That single line shaped every screen after it.</p>
                </div>
              </div>

              {/* A · LIFECYCLE RIBBON */}
              <div className="xcard">
                <div className="x-mock" style={{ background: 'linear-gradient(180deg,#F3F0E8,#E8E2D0)' }} aria-hidden="true">
                  <span className="x-tag">A · LIFECYCLE RIBBON</span>
                  <div style={{ position: 'absolute', inset: '42px 16px 16px', background: '#fff', borderRadius: 8, boxShadow: '0 8px 18px -10px rgba(0,0,0,0.15)', padding: 14 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 8.5, letterSpacing: '0.06em', color: 'var(--ink-3)', textTransform: 'uppercase', marginBottom: 10 }}>Decision lifecycle</div>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {['debate','resolve','exec','recall'].map((s, i) => (
                        <div key={s} style={{ flex: 1, height: 8, borderRadius: 4, background: i < 2 ? 'var(--g)' : i === 2 ? 'var(--y)' : 'var(--paper-2)' }} />
                      ))}
                    </div>
                    <div style={{ marginTop: 16, height: 7, width: '60%', background: 'var(--paper-2)', borderRadius: 3 }} />
                    <div style={{ marginTop: 6,  height: 7, width: '80%', background: 'var(--paper-2)', borderRadius: 3 }} />
                  </div>
                </div>
                <div className="x-body">
                  <div className="x-status killed"><span className="dot" /> Killed at week 1</div>
                  <h4>The lifecycle ribbon.</h4>
                  <p>Beautiful diagram. Nobody could tell me what to <em>do</em> with it. Pretty, useless.</p>
                </div>
              </div>

              {/* B · TRIAGE FEED */}
              <div className="xcard">
                <div className="x-mock" style={{ background: '#F6F4EE' }} aria-hidden="true">
                  <span className="x-tag">B · TRIAGE FEED</span>
                  <div style={{ position: 'absolute', inset: '42px 16px 16px', background: '#fff', borderRadius: 8, boxShadow: '0 8px 18px -10px rgba(0,0,0,0.15)', padding: 12 }}>
                    {[
                      { c: 'var(--g)' },
                      { c: 'var(--y)' },
                      { c: 'var(--p)' },
                    ].map((r, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 0', borderBottom: i < 2 ? '1px solid var(--line)' : undefined }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: r.c, display: 'inline-block', flexShrink: 0 }} />
                        <span style={{ flex: 1, height: 6, background: 'var(--paper-2)', borderRadius: 3 }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="x-body">
                  <div className="x-status killed"><span className="dot" /> Killed at week 2</div>
                  <h4>Triage feed as home.</h4>
                  <p>People didn&apos;t want to triage. They wanted to find <em>one decision they half-remembered.</em></p>
                </div>
              </div>

              {/* C · INLINE CAPTURE */}
              <div className="xcard">
                <div className="x-mock" style={{ background: 'linear-gradient(180deg,#ECF8F0,#D7F4DE)' }} aria-hidden="true">
                  <span className="x-tag">C · INLINE CAPTURE</span>
                  <div style={{ position: 'absolute', inset: '42px 16px 16px', background: '#fff', borderRadius: 8, boxShadow: '0 8px 18px -10px rgba(0,0,0,0.15)', padding: 12, borderLeft: '3px solid var(--r-accent)' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 8, color: 'var(--r-accent-hover)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>… looks like a decision</div>
                    <div style={{ height: 7, width: '90%', background: 'var(--paper-2)', borderRadius: 3 }} />
                    <div style={{ marginTop: 5, height: 7, width: '70%', background: 'var(--paper-2)', borderRadius: 3 }} />
                    <div style={{ display: 'flex', gap: 5, marginTop: 12 }}>
                      <span style={{ fontSize: 8, background: 'var(--r-accent)', color: '#fff', padding: '3px 8px', borderRadius: 4 }}>Add</span>
                      <span style={{ fontSize: 8, background: '#fff', color: 'var(--ink-2)', border: '1px solid var(--line)', padding: '3px 8px', borderRadius: 4 }}>Edit</span>
                    </div>
                  </div>
                </div>
                <div className="x-body">
                  <div className="x-status shipped"><span className="dot" /> Shipped</div>
                  <h4>Capture in the thread.</h4>
                  <p>Catch it where it happened, draft it, let the human confirm. <em>Zero context switch.</em></p>
                </div>
              </div>

              {/* D · DECISION CARD */}
              <div className="xcard">
                <div className="x-mock" style={{ background: 'linear-gradient(180deg,#EEF2F6,#E2EAF1)' }} aria-hidden="true">
                  <span className="x-tag">D · DECISION CARD</span>
                  <div style={{ position: 'absolute', inset: '42px 16px 16px', background: '#fff', borderRadius: 8, boxShadow: '0 8px 18px -10px rgba(0,0,0,0.15)', padding: 14, borderLeft: '4px solid var(--r-accent)' }}>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 8, color: 'var(--r-text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 7 }}>infra · live</div>
                    <div style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: 12, lineHeight: 1.3, color: 'var(--ink)' }}>Move onboarding email into our own queue.</div>
                    <div style={{ display: 'flex', gap: 5, marginTop: 12 }}>
                      <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#4A8FE6', display: 'inline-block' }} />
                      <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#C68A1F', display: 'inline-block' }} />
                      <span style={{ width: 13, height: 13, borderRadius: '50%', background: '#C2453B', display: 'inline-block' }} />
                    </div>
                  </div>
                </div>
                <div className="x-body">
                  <div className="x-status shipped"><span className="dot" /> Shipped as v1</div>
                  <h4>The decision card.</h4>
                  <p>One white card, one green bar, the resolution in plain language. The thing people screenshotted.</p>
                </div>
              </div>

              {/* E · ⌘K RETRIEVE */}
              <div className="xcard">
                <div className="x-mock" style={{ background: '#0D2A1E' }} aria-hidden="true">
                  <span className="x-tag">E · ⌘K RETRIEVE</span>
                  <div style={{ position: 'absolute', inset: '42px 16px 16px', background: '#fff', borderRadius: 8, boxShadow: '0 12px 24px -10px rgba(0,0,0,0.3)', padding: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, borderBottom: '1px solid var(--line)', paddingBottom: 8 }}>
                      <span style={{ width: 11, height: 11, borderRadius: 3, background: 'var(--paper-2)', display: 'inline-block' }} />
                      <span style={{ fontSize: 10, color: 'var(--ink)' }}>why mailchimp</span>
                    </div>
                    <div style={{ background: 'var(--r-accent-light)', borderRadius: 5, padding: '6px 8px', marginTop: 8, fontSize: 8.5, color: 'var(--ink)' }}>Move email into our own queue</div>
                    <div style={{ padding: '5px 8px', fontSize: 8.5, color: 'var(--ink-3)' }}>Keep Mailchimp for marketing only</div>
                  </div>
                </div>
                <div className="x-body">
                  <div className="x-status shipped"><span className="dot" /> Shipped</div>
                  <h4>Two keystrokes to recall.</h4>
                  <p>The same query that opens the palette inside Relay works from email and calendar too.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 09 · Solution ── */}
        <section className="chapter" aria-labelledby="ch-09">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">09</span> The solution</span>
                <h2 className="chap-h" id="ch-09">Three quiet moments, built into tools the team <em>already opens.</em></h2>
                <p className="chap-body">
                  Why does three things and nothing more. It <strong>captures</strong> the decision at the moment it is made, gives it a small <strong>home</strong> with the linked context, and makes it <strong>retrievable</strong> from anywhere with two keystrokes. Each one is shaped to fit a habit people already have.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">The win isn&apos;t a feature. It&apos;s that none of these three moments asks the user to <em>think differently</em> than they already do.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Surface i: Capture */}
            <div style={{ marginTop: 64 }}>
              <div className="kick" style={{ marginBottom: 10 }}>
                <span className="n" style={{ background: '#C68A1F' }}>i</span> Capture · in the thread
              </div>
              <h3 className="chap-h" style={{ fontSize: 26 }}>Catch the decision the moment it&apos;s made.</h3>
              <p className="chap-body" style={{ maxWidth: 680 }}>
                When the language of resolution shows up in a thread, &ldquo;let&apos;s do it&rdquo;, &ldquo;agreed&rdquo;, &ldquo;you own it&rdquo;, Why drafts a one-line decision and asks the people in it to confirm. The author writes it. AI only removes the blank-page cost.
              </p>
            </div>
            <div className="shot sol" style={{ marginTop: 40 }}>
              <div className="shot-tag"><span className="sq" style={{ background: '#C68A1F' }} />&nbsp;relay.team / threads / infra-migration</div>
              <div className="cropframe">
                <CropHandles />
                <CaptureScreen />
                <div className="annotation" style={{ top: 250, right: -150, maxWidth: 190 }} aria-hidden="true">
                  <span className="pin">M</span>
                  <div className="bubble">
                    <div className="who">Maya · Eng</div>
                    It appears right under the conversation. I never leave the thread to save it.
                  </div>
                </div>
              </div>
              <p className="shot-cap">
                <span className="cn">Capture</span>
                <span>The draft is editable and never auto-saved. &ldquo;Not a decision&rdquo; closes it without shame and teaches the model. <em>Same pattern works in transcripts and Figma comments.</em></span>
              </p>
            </div>

            {/* Surface ii: Detail */}
            <div style={{ marginTop: 88 }}>
              <div className="kick" style={{ marginBottom: 10 }}>
                <span className="n" style={{ background: '#8B6BD9' }}>ii</span> Detail · one decision&apos;s home
              </div>
              <h3 className="chap-h" style={{ fontSize: 26 }}>Reference, don&apos;t re-create.</h3>
              <p className="chap-body" style={{ maxWidth: 680 }}>
                Each decision gets its own small page. One sentence at the top, the reasoning underneath, and the linked context as <em>references</em> back to the channels it was made on. The source stays the source.
              </p>
            </div>
            <div className="shot sol" style={{ marginTop: 40 }}>
              <div className="shot-tag"><span className="sq" style={{ background: '#8B6BD9' }} />&nbsp;relay.team / why / onboarding-email-queue</div>
              <div className="cropframe">
                <CropHandles />
                <DetailScreen />
                <div className="annotation" style={{ top: 150, left: -150, maxWidth: 190 }} aria-hidden="true">
                  <span className="pin c">A</span>
                  <div className="bubble">
                    <div className="who">Aki · PM</div>
                    Why doesn&apos;t copy the thread. It points at it, so the source can move and the link follows.
                  </div>
                </div>
              </div>
              <p className="shot-cap">
                <span className="cn">Detail</span>
                <span>Owner, the people in the room, and the channel it came from sit in a fixed rail. &ldquo;Revisit at&hellip;&rdquo; lets the team set a <em>sunset condition</em> instead of a date.</span>
              </p>
            </div>

            {/* Surface iii: Retrieve */}
            <div style={{ marginTop: 88 }}>
              <div className="kick" style={{ marginBottom: 10 }}>
                <span className="n" style={{ background: '#1F8A5B' }}>iii</span> Retrieve · ⌘K from anywhere
              </div>
              <h3 className="chap-h" style={{ fontSize: 26 }}>Recall in two keystrokes, from any surface.</h3>
              <p className="chap-body" style={{ maxWidth: 680 }}>
                The new hire&apos;s question, the returner&apos;s &ldquo;what did I miss&rdquo;, the auditor&apos;s &ldquo;who signed off&rdquo;, all answered by the same input. ⌘K opens the palette inside Relay, and the same query works from the browser extension, the email digest, and the calendar add-on.
              </p>
            </div>
            <div className="shot sol" style={{ marginTop: 40 }}>
              <div className="shot-tag"><span className="sq" style={{ background: '#1F8A5B' }} />&nbsp;relay.team / why · command palette</div>
              <div className="cropframe">
                <CropHandles />
                <RetrieveScreen />
                <div className="annotation" style={{ bottom: 70, right: -150, maxWidth: 190 }} aria-hidden="true">
                  <span className="pin v">D</span>
                  <div className="bubble">
                    <div className="who">Diego · Eng</div>
                    The new hire&apos;s first ⌘K saves a senior engineer an afternoon of answering.
                  </div>
                </div>
              </div>
              <p className="shot-cap">
                <span className="cn">Retrieve</span>
                <span>Fuzzy across statement, area, owner, and any text in the linked sources. Decisions surface first, threads follow. <em>Full keyboard nav, no meaning carried by colour alone.</em></span>
              </p>
            </div>

          </div>
        </section>

        {/* ── 10 · Reflections ── */}
        <section className="chapter" aria-labelledby="ch-10">
          <div className="chapter-inner">
            <div className="lede">
              <div>
                <span className="kick"><span className="n">10</span> Reflections</span>
                <h2 className="chap-h" id="ch-10">What I&apos;d keep, and what I wouldn&apos;t <em>ship again.</em></h2>
                <p className="chap-body">
                  The hardest part wasn&apos;t making the screens look good. It was deciding <em>which existing tool the product was not going to compete with</em>, and trusting that restraint was the design.
                </p>
              </div>
              <div className="col-r">
                <div className="think">
                  <ThinkBlob />
                  <div className="note">
                    <span className="lbl">thinking</span>
                    <span className="said">The strongest features here are the ones nobody notices. They just felt like part of a tool the team already trusted.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reflect">
              <div className="reflect-col worked">
                <h4><span className="dot" /> Worked, would do again</h4>
                {[
                  { t: 'Schema before screens.',  d: 'Writing the data model in plain text killed three dead-end layouts. The card only worked because the references existed first.' },
                  { t: 'Suggest, don\'t auto-fill.', d: 'AI offers a draft, never inserts it. The authorship contract stays on screen, so people trust what they read later.' },
                  { t: 'Fit the existing habit.', d: 'Capture lives in the thread, recall lives behind ⌘K. No new place to remember, so adoption didn\'t fight muscle memory.' },
                ].map(({ t, d }) => (
                  <div key={t} className="reflect-item">
                    <div className="t">{t}</div>
                    <div className="d">{d}</div>
                  </div>
                ))}
              </div>
              <div className="reflect-col killed">
                <h4><span className="dot" /> Wouldn&apos;t ship again</h4>
                {[
                  { t: 'The lifecycle ribbon.',           d: 'A beautiful diagram with no place to act. I kept iterating because it looked good in screenshots, a discipline failure I now name out loud.' },
                  { t: 'Triage feed as the home.',        d: 'People didn\'t want triage. They wanted to find one decision they half-remembered. Replaced with search-first recall.' },
                  { t: 'A separate comment thread per card.', d: 'It doubled the surface for the same conversation. Killed in favour of pulling the existing thread inline. The discussion already had a home.' },
                ].map(({ t, d }) => (
                  <div key={t} className="reflect-item">
                    <div className="t">{t}</div>
                    <div className="d">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Up next ── */}
        <div className="up-next">
          <Link href="/projects/wud" className="next-card">
            <span className="small">Case study 03 · 2024</span>
            <span className="t">WUD! <em>one feed replaces four apps.</em></span>
            <span className="d">A journey-map pivot that lifted Create Event completion from 60% to 91%.</span>
            <span className="arr">Read next →</span>
          </Link>
          <Link href="/projects/relay-design-system" className="next-card">
            <span className="small">Case study 02 · 2025</span>
            <span className="t">Relay DS <em>tokens, components, contracts.</em></span>
            <span className="d">The 47-component library three squads ship from. Where the DecisionCard graduated to.</span>
            <span className="arr">Read next →</span>
          </Link>
        </div>

      </div>
    </>
  )
}
