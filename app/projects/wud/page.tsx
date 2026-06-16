import type { Metadata } from 'next'
import Link from 'next/link'
import SuppressChrome from './SuppressChrome'
import {
  PhoneSplash, PhoneOnboarding, PhoneExplore,
  PhoneFilter, PhonePrefs, PhoneRSVP,
  PhoneProfile, PhoneHelp, PhoneMyEvents,
} from './WudPhones'
import WudHeroReel from './WudHeroReel'
import WudExploration from './WudExploration'
import WudIA from './WudIA'
import './wud.css'

export const metadata: Metadata = {
  title: 'WUD! · Reimagining the Social Event Lifecycle · Shruthy Nair',
  description: 'A single app for the full social event lifecycle — discovery, coordination, and identity. Six-month university project, 2024.',
}

function Think({ children }: { children: React.ReactNode }) {
  return (
    <div className="think">
      <div className="think-blob">
        <span className="blush l" />
        <span className="blush r" />
      </div>
      <div className="think-note">
        <span className="lbl">thinking</span>
        <span className="said">{children}</span>
      </div>
    </div>
  )
}


function WudHero() {
  return (
    <section className="hero">
      <div className="wud-page">
        <div className="hero-top">
          <div className="crumb">
            <Link href="/">Work</Link>
          </div>
        </div>

        <div>
          <h1 className="hero-name">WUD<span className="dot">!</span></h1>
          <p className="hero-tag">One app for the whole social-event lifecycle &mdash; discover, coordinate, show up, and be seen.</p>
        </div>

        <WudHeroReel />

        <p className="hero-sub">
          Event planning is social. The tools people use to plan it aren&apos;t. Four apps were doing the work of one,
          and the seams between them were where every plan fell apart. I led the research and reframed the brief from
          &ldquo;better discovery&rdquo; into a bigger bet, then worked with a second designer, three engineers, and our PM to
          ship a single 0-to-1 product spanning <strong>discovery, coordination, and identity</strong>.
        </p>

        <div className="hero-pills">
          <span className="hpill"><span className="sw" style={{ background: '#6F4FE6' }} />UX Design</span>
          <span className="hpill"><span className="sw" style={{ background: '#C8459B' }} />Mixed-method research</span>
          <span className="hpill"><span className="sw" style={{ background: '#1F8FA0' }} />Journey mapping</span>
          <span className="hpill"><span className="sw" style={{ background: '#1F8A5B' }} />Hi-fi prototyping</span>
          <span className="hpill"><span className="sw" style={{ background: '#B58A00' }} />Information architecture</span>
        </div>

        <div className="meta-row">
          <div className="meta-card y">
            <div className="mc-label">Role</div>
            <div className="mc-value">UX Designer</div>
            <div className="mc-sub">In a team of 2 UX · 2 FE · 3 BE · 1 PO</div>
          </div>
          <div className="meta-card c">
            <div className="mc-label">Timeline</div>
            <div className="mc-value">6 months</div>
            <div className="mc-sub">Jul to Dec 2024, end to end</div>
          </div>
          <div className="meta-card g">
            <div className="mc-label">Owned</div>
            <div className="mc-value">Research, IA, Create&nbsp;Event</div>
            <div className="mc-sub">Shared: concept ideation &amp; visuals</div>
          </div>
          <div className="meta-card p">
            <div className="mc-label">Outcome</div>
            <div className="mc-value">60% → 91%</div>
            <div className="mc-sub">Create&nbsp;Event completion, pre/post</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WudOverview() {
  return (
    <section className="overview">
      <div className="wud-page">
        <div className="shot wide" style={{ marginTop: 0 }}>
          <div className="shot-tag"><span className="sq" />wud / launch-trio.fig &mdash; splash · onboarding · explore</div>
          <div className="figframe">
            <div className="deco b1" /><div className="deco b2" /><div className="deco b3" />
            <div className="deco b4" /><div className="deco b5" />
            <div className="phone-row">
              <PhoneSplash />
              <PhoneOnboarding />
              <PhoneExplore activeTab="You" />
            </div>
          </div>
          <div className="shot-cap">
            <span className="cn">The product</span>
            <span>Splash, onboarding, and the Explore feed. One app spanning discovery, coordination, and identity &mdash; <em>where users had been stitching four together.</em></span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Ch 01 · What Shipped ───────────────────────────────────── */
function Ch01() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">01</span> What shipped</div>
            <h2 className="chap-h">Four apps were doing the job of <em>one.</em></h2>
            <p className="chap-body">Eventbrite for discovery, WhatsApp to coordinate, Calendar to track, Instagram for proof &mdash; and none of them talking to each other. WUD! replaces the stitching with one lifecycle, discovery through memory.</p>
          </div>
          <div className="col-r">
            <Think>The interesting question was never which app to copy. It was what falls into the gaps <em>between</em> them.</Think>
          </div>
        </div>

        <div className="kpi">
          <div className="k hl">
            <span className="corner">scope</span>
            <div className="fig">4 <em>→</em> 1</div>
            <div className="cap">Apps consolidated into a single social-event lifecycle, from discovery through identity.</div>
          </div>
          <div className="k">
            <span className="corner">research</span>
            <div className="fig">70</div>
            <div className="cap">Participants across four methods &mdash; observation, audit, interviews, survey.</div>
          </div>
          <div className="k">
            <span className="corner">impact</span>
            <div className="fig">60<em>→</em>91%</div>
            <div className="cap">Create&nbsp;Event completion, after splitting one long form into four steps.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Ch 02 · Reframing ──────────────────────────────────────── */
function Ch02() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">02</span> Reframing the brief</div>
            <h2 className="chap-h">I went in with the wrong hypothesis. <em>The research corrected it.</em></h2>
            <p className="chap-body">The brief said better discovery. Four methods &mdash; observation, audit, interviews, survey &mdash; were built to capture both behaviour and feeling. They pointed somewhere else entirely.</p>
          </div>
          <div className="col-r">
            <Think>Being wrong early is cheap. Being wrong at launch is not. I&apos;d rather the research <em>embarrass me now.</em></Think>
          </div>
        </div>

        <div className="reframe">
          <div className="rf">
            <div className="rf-tag">What I assumed</div>
            <h4 className="strike">Discovery is the bottleneck.</h4>
            <p>Users couldn&apos;t find things to do. The fix was better filters, a smarter algorithm, a stronger search bar.</p>
          </div>
          <div className="rf found">
            <div className="rf-tag">What I found</div>
            <h4>Coordination and identity were breaking it.</h4>
            <p>Discovery was <em>solved-enough</em>. The drop-offs lived <em>after</em> people found an event &mdash; planning with friends, and being seen as someone who shows up.</p>
          </div>
          <div className="rf-arrow" aria-hidden="true">→</div>
        </div>
      </div>
    </section>
  )
}

/* ── Ch 03 · Research ───────────────────────────────────────── */
function Ch03() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">03</span> Research</div>
            <h2 className="chap-h">Four methods, seventy people. <em>The same finding came back from each.</em></h2>
            <p className="chap-body">Triangulation beats sample size when you&apos;re defending a pivot. I needed a signal strong enough that nobody could argue me out of it.</p>
          </div>
          <div className="col-r">
            <Think>If one method says it, it&apos;s a hunch. If <em>four</em> say it, it&apos;s a finding I can take to the team.</Think>
          </div>
        </div>

        <div className="methods">
          <div className="method">
            <div className="mh"><div className="mn">01</div><div className="ml">Observation</div></div>
            <div className="mb">
              <div className="scope">Shadowing · 10 users · natural contexts</div>
              <p>Tracked where people switched apps and stalled while planning. <em>Real drop-off points, not recalled ones.</em></p>
            </div>
          </div>
          <div className="method">
            <div className="mh"><div className="mn">02</div><div className="ml">Audit</div></div>
            <div className="mb">
              <div className="scope">7 platforms · Eventbrite, Meetup, Partiful…</div>
              <p>The market nails centralised discovery and fails at <em>everything after you&apos;ve found an event.</em></p>
            </div>
          </div>
          <div className="method">
            <div className="mh"><div className="mn">03</div><div className="ml">Interviews</div></div>
            <div className="mb">
              <div className="scope">5 sessions · 90 minutes each</div>
              <p>The emotional layer, not just the inconvenience &mdash; the language people use about <em>FOMO, hesitation, second-guessing.</em></p>
            </div>
          </div>
          <div className="method">
            <div className="mh"><div className="mn">04</div><div className="ml">Survey</div></div>
            <div className="mb">
              <div className="scope">48 respondents</div>
              <p>Sized the signal across <em>attendee and host segments</em>, separating personal frustration from systemic pattern.</p>
            </div>
          </div>
        </div>

        <div className="pq">
          <div className="t">&ldquo;I know there are cool things happening. I just never know if my friends are going, so I don&apos;t bother.&rdquo;</div>
          <div className="who">Interview participant · age 24</div>
        </div>

        <div className="bigstats">
          <div className="pct">65%</div>
          <div className="d">wanted <strong>better personalisation</strong> &mdash; they felt buried under irrelevant suggestions from algorithms that didn&apos;t know them.</div>
          <div className="pct v">70%</div>
          <div className="d">found <strong>coordinating with friends hard</strong>, and were regularly pushed off-platform to WhatsApp to make plans happen.</div>
          <div className="pct p">80%</div>
          <div className="d">wanted to <strong>show their event history socially</strong>. No existing platform addressed this need at all.</div>
        </div>
      </div>
    </section>
  )
}

/* ── Ch 04 · Journey Map ────────────────────────────────────── */
function Ch04() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">04</span> Journey map</div>
            <h2 className="chap-h">The pivot was on <em>the journey map.</em></h2>
            <p className="chap-body">Plotting emotion across before, during, after clustered the pain: coordination anxiety before the event, identity frustration after. The event itself was already fine.</p>
          </div>
          <div className="col-r">
            <Think>Plot the feeling, not the steps. The opportunity wasn&apos;t inside the event &mdash; it was <em>everything around it.</em></Think>
          </div>
        </div>

        <div className="journey">
          <div className="phase before">
            <div className="ph-head">
              <div className="ph-lbl">Phase 01 · Before</div>
              <div className="ph-nm">Discover, coordinate, get there</div>
              <div className="ph-sub">Highest friction · clearest opportunity</div>
            </div>
            <div className="ph-chart">
              <svg viewBox="0 0 220 90" preserveAspectRatio="none" aria-hidden="true">
                <path d="M 4,30 C 30,40 50,28 70,50 C 90,72 120,82 150,76 C 180,70 200,80 216,84" stroke="#FF7AC6" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                <circle cx="4" cy="30" r="3" fill="#FF7AC6" />
                <circle cx="70" cy="50" r="3" fill="#FF7AC6" />
                <circle cx="150" cy="76" r="3" fill="#FF7AC6" />
                <circle cx="216" cy="84" r="3" fill="#FF7AC6" />
              </svg>
              <div className="axis"><span>hear</span><span>plan</span><span>commit</span><span>arrive</span></div>
            </div>
            <div className="ql">&ldquo;How can I plan if I don&apos;t have info, and planning with friends is hard?&rdquo;</div>
            <ul>
              <li>Hear about the event</li>
              <li>Research on Google or social</li>
              <li>Coordinate with friends</li>
              <li>Buy tickets, drive there</li>
            </ul>
          </div>

          <div className="phase during">
            <div className="ph-head">
              <div className="ph-lbl">Phase 02 · During</div>
              <div className="ph-nm">Arrive, participate, socialise</div>
              <div className="ph-sub">Largely positive · not where to design</div>
            </div>
            <div className="ph-chart">
              <svg viewBox="0 0 220 90" preserveAspectRatio="none" aria-hidden="true">
                <path d="M 4,68 C 40,40 80,18 110,16 C 140,18 170,30 216,52" stroke="#2DA169" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                <circle cx="4" cy="68" r="3" fill="#2DA169" />
                <circle cx="110" cy="16" r="3" fill="#2DA169" />
                <circle cx="216" cy="52" r="3" fill="#2DA169" />
              </svg>
              <div className="axis"><span>arrive</span><span>peak</span><span>wind-down</span></div>
            </div>
            <div className="ql">&ldquo;I love these clothes. I just made a new friend.&rdquo;</div>
            <ul>
              <li>See live performances</li>
              <li>Buy food and drinks</li>
              <li>Discover local brands</li>
              <li>Socialise with strangers</li>
            </ul>
          </div>

          <div className="phase after">
            <div className="ph-head">
              <div className="ph-lbl">Phase 03 · After</div>
              <div className="ph-nm">Depart, reflect, share</div>
              <div className="ph-sub">Identity gap · second opportunity</div>
            </div>
            <div className="ph-chart">
              <svg viewBox="0 0 220 90" preserveAspectRatio="none" aria-hidden="true">
                <path d="M 4,30 C 40,24 80,32 110,46 C 140,60 170,72 216,80" stroke="#B89CFF" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                <circle cx="4" cy="30" r="3" fill="#B89CFF" />
                <circle cx="110" cy="46" r="3" fill="#B89CFF" />
                <circle cx="216" cy="80" r="3" fill="#B89CFF" />
              </svg>
              <div className="axis"><span>leave</span><span>reflect</span><span>share</span></div>
            </div>
            <div className="ql">&ldquo;That was so much fun. I&rsquo;m going to wear this everywhere.&rdquo;</div>
            <ul>
              <li>Leave, drive home</li>
              <li>Look at pictures</li>
              <li>Talk about it with friends</li>
              <li>Post on social media</li>
            </ul>
          </div>
        </div>

        <div className="note-strip green" style={{ marginTop: 28 }}>
          The <strong>80% identity finding</strong> was the biggest surprise. People weren&apos;t only trying to attend events &mdash; they were trying to be <strong>seen as someone who does interesting things.</strong>
        </div>
      </div>
    </section>
  )
}

/* ── Ch 05 · Problem, Reframed ──────────────────────────────── */
function Ch05() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">05</span> The problem, reframed</div>
            <h2 className="chap-h">The brief asked for better discovery. <em>The research asked for something harder.</em></h2>
            <p className="chap-body">Better search is a UI problem. Coordination anxiety and social identity are system-design problems &mdash; features that feel less like tools and more like social infrastructure.</p>
          </div>
          <div className="col-r">
            <Think>&ldquo;Never need to leave the app&rdquo; became the constraint. Any coordination off-platform was a <em>product failure</em>, not a convenience.</Think>
          </div>
        </div>

        <div className="tension">
          <div className="lbl">Reframed problem statement</div>
          <p>How might we reduce the friction of <em>group coordination</em> and <em>social validation</em>, so users never need to leave the app to do the social work that makes events actually happen?</p>
        </div>
      </div>
    </section>
  )
}

/* ── Ch 06 · Principles ─────────────────────────────────────── */
function Ch06() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">06</span> Principles</div>
            <h2 className="chap-h">Three principles, one structural constraint. <em>Each grounded in research.</em></h2>
            <p className="chap-body">Before any screens, three rules straight from the data &mdash; and one constraint that shaped the entire architecture.</p>
          </div>
          <div className="col-r">
            <Think>Define the rules before the screens, or the screens invent their own &mdash; usually the <em>wrong</em> ones.</Think>
          </div>
        </div>

        <div className="principles">
          <div className="principle">
            <div className="pn">01</div>
            <div>
              <h4>Keep the group together.</h4>
              <p>Every trip to WhatsApp was a product failure. Group planning had to feel calmer than a group chat, or coordination always leaks back out.</p>
              <span className="badge">70% off-platform</span>
            </div>
          </div>
          <div className="principle">
            <div className="pn">02</div>
            <div>
              <h4>Earn relevance, don&apos;t assume it.</h4>
              <p>Explicit preferences up front &mdash; type, distance, time of day &mdash; make recommendations feel intentional. <em>Trust, not targeting.</em></p>
              <span className="badge">65% personalisation</span>
            </div>
          </div>
          <div className="principle">
            <div className="pn">03</div>
            <div>
              <h4>Let users build an identity.</h4>
              <p>Event history as a social <em>signal</em>, not a settings page. It&apos;s how people decide who to trust and what&apos;s worth attending.</p>
              <span className="badge">80% identity</span>
            </div>
          </div>
          <div className="principle">
            <div className="pn">04</div>
            <div>
              <h4>One account, two modes.</h4>
              <p>Every feature had to work for <em>attendees</em> (discovering, coordinating) and <em>hosts</em> (creating, managing) inside a single account, sometimes at once.</p>
              <span className="badge">Dual persona</span>
            </div>
          </div>
        </div>

        <div className="surface-head" style={{ marginTop: 48 }}>
          <div className="sub-kick">
            <span className="sub-n" style={{ background: 'var(--v)' }}>…</span>
            Navigation as a statement
          </div>
          <h3 className="sub-h">Hosting is a first-class action, <em>not a power feature.</em></h3>
        </div>

        <div className="navrow" aria-label="Navigation diagram">
          <div className="t"><div className="ic">⌂</div><div className="nm">Explore</div><div className="role">social + geo</div></div>
          <div className="t"><div className="ic">♡</div><div className="nm">Calendar</div><div className="role">committed</div></div>
          <div className="t c"><div className="ic">+</div><div className="nm">Create</div><div className="role">host entry</div></div>
          <div className="t"><div className="ic">◎</div><div className="nm">Map</div><div className="role">geo discovery</div></div>
          <div className="t"><div className="ic">◯</div><div className="nm">Profile</div><div className="role">identity</div></div>
        </div>

        <p className="chap-body" style={{ marginTop: 18, maxWidth: 740 }}>
          Putting <em style={{ fontFamily: 'var(--serif)', color: 'var(--v)' }}>Create</em> at the centre makes event creation as accessible as browsing &mdash; answering the 70% coordination signal at the structural level, before a single screen was drawn.
        </p>
      </div>
    </section>
  )
}

/* ── Ch 07 · Solutions ─────────────────────────────────────────
   (WudExploration renders as its own chapter between 06 and 07)
   ─────────────────────────────────────────────────────────────── */
function Ch07() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">07</span> Three problems, three responses</div>
            <h2 className="chap-h">Designed for the <em>specific</em> friction, not the category.</h2>
            <p className="chap-body">Each research problem got one paired response in the product &mdash; and I resisted collapsing them into a single &ldquo;better feed&rdquo;.</p>
          </div>
          <div className="col-r">
            <Think>The temptation was one clever feed. The discipline was keeping the <em>three problems separate.</em></Think>
          </div>
        </div>

        {/* Surface i — Discovery */}
        <div className="surface-head">
          <div className="sub-kick">
            <span className="sub-n" style={{ background: '#6F4FE6' }}>i</span>
            Clutter &amp; relevance
          </div>
          <h3 className="sub-h">Recommendations earned, <em>not guessed.</em></h3>
          <p className="sub-b">Preferences set during onboarding, then two parallel paths in Explore &mdash; events you&apos;re invited to, and discovery by neighbourhood.</p>
        </div>
        <div className="shot wide" style={{ marginTop: 34 }}>
          <div className="shot-tag"><span className="sq" style={{ background: '#6F4FE6' }} />wud / onboarding · filters · explore feed</div>
          <div className="ph-frame three">
            <PhonePrefs />
            <PhoneFilter />
            <PhoneExplore activeTab="Explore" showNeighbourLabel />
            <div className="ph-ann" style={{ top: -16, right: 30 }}>
              <div className="ann-author"><div className="ann-av">M</div>Maya · PM</div>
              Filters cover 5 dimensions. Competitors offered 2.
            </div>
          </div>
          <div className="shot-cap">
            <span className="cn">Discovery</span>
            <span>Onboarding asks once, explicitly; the feed reflects it. Stacking &ldquo;invited&rdquo; (warm) above &ldquo;neighbourhood&rdquo; (cold) keeps social context from being buried. <em>Filters cover five dimensions where competitors offered two.</em></span>
          </div>
        </div>

        {/* Surface ii — Coordination */}
        <div className="surface-head">
          <div className="sub-kick">
            <span className="sub-n" style={{ background: '#C8459B' }}>ii</span>
            The coordination gap
          </div>
          <h3 className="sub-h">Surface the signal <em>in place.</em></h3>
          <p className="sub-b">Who from your network is going &mdash; avatars, follow badges, tickets left &mdash; answered on the event page itself, where the doubt actually happens.</p>
        </div>
        <div className="shot sol" style={{ marginTop: 34 }}>
          <div className="shot-tag"><span className="sq" style={{ background: '#C8459B' }} />wud / event detail · RSVP</div>
          <div className="ph-frame single">
            <PhoneRSVP />
            <div className="ph-ann" style={{ top: 40, right: -30 }}>
              <div className="ann-author"><div className="ann-av">D</div>Devon · Eng</div>
              Avatars surface social context inline &mdash; no &ldquo;friends going&rdquo; tab needed.
            </div>
            <div className="ph-ann" style={{ bottom: 80, left: -30 }}>
              <div className="ann-author"><div className="ann-av">P</div>Priya · UX</div>
              Stepper + checkbox + button. Three taps. That&apos;s the entire RSVP.
            </div>
          </div>
          <div className="shot-cap">
            <span className="cn">Coordination</span>
            <span>Friend avatars answer &ldquo;is anyone I know going?&rdquo; without a group chat. RSVP is three taps &mdash; guest count, contact preference, confirm. <em>&ldquo;49 left&rdquo; informs; it doesn&apos;t pressure.</em></span>
          </div>
        </div>

        {/* Surface iii — Identity */}
        <div className="surface-head">
          <div className="sub-kick">
            <span className="sub-n" style={{ background: '#1F8FA0' }}>iii</span>
            Identity &amp; validation
          </div>
          <h3 className="sub-h">Participation as a <em>public artifact.</em></h3>
          <p className="sub-b">Profile treats event history as social currency, on par with relationships. Curation tabs keep it expressive, never automatic.</p>
        </div>
        <div className="shot wide" style={{ marginTop: 34 }}>
          <div className="shot-tag"><span className="sq" style={{ background: '#1F8FA0' }} />wud / profile · help · my events</div>
          <div className="ph-frame three">
            <PhoneProfile />
            <PhoneHelp />
            <PhoneMyEvents />
            <div className="ph-ann" style={{ top: -16, left: 30 }}>
              <div className="ann-author"><div className="ann-av">A</div>Ari · Brand</div>
              Three equal stats &mdash; events sit beside followers, not below.
            </div>
          </div>
          <div className="shot-cap">
            <span className="cn">Identity</span>
            <span>Following, Followers, and Events sit as three <em>equal</em> stats. Tickets / Saved / Hosted tabs keep users in control of what they display. <em>Identity, not surveillance.</em></span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Ch 09 · Failures ───────────────────────────────────────── */
function Ch08() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">09</span> Honest failures</div>
            <h2 className="chap-h">Four things I got wrong, <em>and what they revealed.</em></h2>
            <p className="chap-body">The failures taught more durable lessons than the versions that worked. Each one named a habit worth keeping.</p>
          </div>
          <div className="col-r">
            <Think>The screenshot-friendly version is rarely the usable one. I learned to distrust things that only <em>looked</em> good.</Think>
          </div>
        </div>

        <div className="fails">
          <div className="fail">
            <div className="fail-n"><div className="pip" /> Failure 01</div>
            <h4>Status indicators were too subtle.</h4>
            <div className="pair">
              <div className="k">Broke</div>
              <div className="v">4 of 10 testers couldn&apos;t tell whether a friend was confirmed or pending. Clean, but not legible at a glance.</div>
              <div className="k">Revealed</div>
              <div className="v"><em>Clarity beats elegance in status UI.</em> Redesigned with distinct colour, icon, and explicit label.</div>
            </div>
          </div>
          <div className="fail">
            <div className="fail-n"><div className="pip" /> Failure 02</div>
            <h4>The motion announced itself.</h4>
            <div className="pair">
              <div className="k">Broke</div>
              <div className="v">The first pass was too aggressive; users called the interface &ldquo;busy&rdquo;. The UI competed with the content.</div>
              <div className="k">Revealed</div>
              <div className="v"><em>Motion should confirm an action, not announce it.</em> Less motion even felt faster.</div>
            </div>
          </div>
          <div className="fail">
            <div className="fail-n"><div className="pip" /> Failure 03</div>
            <h4>The showcase felt passive.</h4>
            <div className="pair">
              <div className="k">Broke</div>
              <div className="v">Auto-populated history felt like surveillance &mdash; the opposite of what the 80% had asked for.</div>
              <div className="k">Revealed</div>
              <div className="v"><em>Curation is part of the product.</em> Three tabs (Tickets, Saved, Hosted) put users in control.</div>
            </div>
          </div>
          <div className="fail">
            <div className="fail-n"><div className="pip" /> Failure 04</div>
            <h4>Create was one long scroll.</h4>
            <div className="pair">
              <div className="k">Broke</div>
              <div className="v">13 decisions on a single scroll. Hosts lost orientation; completion sat at 60%.</div>
              <div className="k">Revealed</div>
              <div className="v"><em>Progressive disclosure is the only way to sustain completion.</em> Split into four steps → 91%.</div>
            </div>
          </div>
        </div>

        <div className="surface-head" style={{ marginTop: 48 }}>
          <div className="sub-kick">
            <span className="sub-n" style={{ background: 'var(--v)' }}>✦</span>
            The redesign
          </div>
          <h3 className="sub-h">Create&nbsp;Event, in <em>four steps.</em></h3>
        </div>

        <div className="steps4">
          <div className="sc">
            <div className="sc-h"><span className="sc-n">STEP 01</span><span className="sc-of">1 / 4</span></div>
            <div className="sc-nm">Basic info</div>
            <div className="sc-fields">
              <div className="r">Add image<span className="x">…</span></div>
              <div className="r">Title<span className="x">Aa</span></div>
              <div className="r">Date &amp; time<span className="x">⌚</span></div>
            </div>
            <div className="sc-go">Next →</div>
          </div>
          <div className="sc">
            <div className="sc-h"><span className="sc-n">STEP 02</span><span className="sc-of">2 / 4</span></div>
            <div className="sc-nm">Social settings</div>
            <div className="sc-fields">
              <div className="r">Visibility<span className="x">⌚</span></div>
              <div className="r">Co-hosts<span className="x">＋</span></div>
              <div className="r">Who can invite<span className="x">⌚</span></div>
            </div>
            <div className="sc-go">Next →</div>
          </div>
          <div className="sc">
            <div className="sc-h"><span className="sc-n">STEP 03</span><span className="sc-of">3 / 4</span></div>
            <div className="sc-nm">RSVP config</div>
            <div className="sc-fields">
              <div className="r">Capacity<span className="x">123</span></div>
              <div className="r">Guest limit<span className="x">±</span></div>
              <div className="r">Waitlist<span className="x">on/off</span></div>
            </div>
            <div className="sc-go">Next →</div>
          </div>
          <div className="sc final">
            <div className="sc-h"><span className="sc-n">STEP 04</span><span className="sc-of">4 / 4</span></div>
            <div className="sc-nm">Policies</div>
            <div className="sc-fields">
              <div className="r">Dietary<span className="x">⌚</span></div>
              <div className="r">Cancellation<span className="x">Aa</span></div>
              <div className="r">Extra info<span className="x">Aa</span></div>
            </div>
            <div className="sc-go">Create event ✦</div>
          </div>
        </div>

        <div className="result">
          <strong>Result.</strong> 13 decisions on one scroll became 3&ndash;4 per step, each previewable from the final review screen.{' '}
          <span className="pct">Completion rose 60% → 91%</span>; mean time-to-create dropped 4:20 → 2:35.
        </div>
      </div>
    </section>
  )
}

/* ── Ch 10 · Evaluation ─────────────────────────────────────── */
function Ch09() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">10</span> Evaluation</div>
            <h2 className="chap-h">I designed the fix &mdash; then <em>how we&apos;d know it worked.</em></h2>
            <p className="chap-body">Two pre/post studies during the redesign loop. Imperfect metrics, but a measurement plan is what turns a design exercise into a product argument.</p>
          </div>
          <div className="col-r">
            <Think>A number you <em>instrumented</em> beats a number you hoped for. Even a small one is an argument.</Think>
          </div>
        </div>

        <div className="evalrow">
          <div className="evalcard">
            <div className="ev-lbl">Study 01 · Create&nbsp;Event</div>
            <h4>Task completion, before and after progressive disclosure.</h4>
            <div className="bars">
              <div className="col">
                <div className="bar pre" style={{ height: '60%' }}><div className="bv">60%</div></div>
                <div className="when">PRE · 1 long scroll</div>
              </div>
              <div className="col">
                <div className="bar post" style={{ height: '91%' }}><div className="bv">91%</div></div>
                <div className="when">POST · 4 steps</div>
              </div>
            </div>
            <div className="delta"><strong>+31 points.</strong> In-product analytics over two weeks, same cohort of hosts.</div>
          </div>
          <div className="evalcard">
            <div className="ev-lbl">Study 02 · Coordination confidence</div>
            <h4>&ldquo;Is anyone I know going?&rdquo; answered without leaving the app.</h4>
            <div className="bars">
              <div className="col">
                <div className="bar pre" style={{ height: '38%' }}><div className="bv">38%</div></div>
                <div className="when">PRE · 22 users</div>
              </div>
              <div className="col">
                <div className="bar post" style={{ height: '84%' }}><div className="bv">84%</div></div>
                <div className="when">POST · same 22</div>
              </div>
            </div>
            <div className="delta"><strong>38% → 84%.</strong> Paired survey; same users, same question, before and after the event-detail redesign.</div>
          </div>
        </div>

        <p className="caveat">Both metrics are imperfect &mdash; they don&apos;t measure ongoing motivation or retention. The right next move is behavioural data, not more self-report. <em>But shipping with a measurement plan, however small, is what turned this from taste into argument.</em></p>
      </div>
    </section>
  )
}

/* ── Ch 11 · What's Next ────────────────────────────────────── */
function Ch10() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">11</span> Where it goes next</div>
            <h2 className="chap-h">The coordination features solve the interaction. <em>The next problem is upstream.</em></h2>
            <p className="chap-body">The features address friction at the interaction level. The harder, more valuable problem sits one step earlier.</p>
          </div>
          <div className="col-r">
            <Think>RSVPs aren&apos;t the hard part. Reaching <em>consensus on what to attend</em> is.</Think>
          </div>
        </div>

        <div className="nexts">
          <div className="nx">
            <div className="ix">→ Next 01</div>
            <h4>Consensus before commitment.</h4>
            <p>The hard part of planning with friends isn&apos;t tracking RSVPs &mdash; it&apos;s agreeing what to attend. A vote-on-options or shared shortlist targets that directly.</p>
          </div>
          <div className="nx">
            <div className="ix">→ Next 02</div>
            <h4>Host &amp; attendee parity in research.</h4>
            <p>Most participants were attendees. The host experience was underserved, and it shows in early Create&nbsp;Event drafts. Equal rigor on both sides, from the start.</p>
          </div>
          <div className="nx">
            <div className="ix">→ Next 03</div>
            <h4>Behavioural data, not just task data.</h4>
            <p>Testing told me whether users finished tasks. Time-on-step, abandonment, and retry rates would give evidence instead of instinct.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Ch 12 · Reflections ────────────────────────────────────── */
function Ch11() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">12</span> Reflections</div>
            <h2 className="chap-h">What changed <em>in how I work.</em></h2>
            <p className="chap-body">Two shifts stuck &mdash; one about the problem, one about the craft of owning a piece of it.</p>
          </div>
          <div className="col-r">
            <Think>I went in to design a better search box. I came out having designed how people <em>show up &mdash; and show up together.</em></Think>
          </div>
        </div>

        <div className="reflect">
          <div className="reflect-col worked">
            <h4><span className="dot" /> What the project taught me</h4>
            <div className="reflect-item">
              <div className="t">Functional and emotional problems differ.</div>
              <div className="d">Finding events is functional &mdash; solvable with filters. Coordination anxiety and identity are <em>emotional</em>, and need social infrastructure, not a better algorithm.</div>
            </div>
            <div className="reflect-item">
              <div className="t">The journey map was the turning point.</div>
              <div className="d">Without mapping the full before / during / after arc, I&apos;d have built a better Eventbrite. The map made the real opportunity undeniable.</div>
            </div>
          </div>
          <div className="reflect-col craft">
            <h4><span className="dot" style={{ background: 'var(--p)' }} /> On the craft</h4>
            <div className="reflect-item">
              <div className="t">&ldquo;I&rdquo; and &ldquo;we&rdquo; aren&apos;t interchangeable.</div>
              <div className="d">Research synthesis, the pivot, and Create&nbsp;Event were <em>mine</em>; ideation and visuals were <em>shared</em>. Saying which is which is what makes a portfolio defensible.</div>
            </div>
            <div className="reflect-item">
              <div className="t">Ship with a way to measure.</div>
              <div className="d">Even a small pre/post plan turned the redesign from a matter of taste into a matter of evidence.</div>
            </div>
          </div>
        </div>

        <div className="skillrow">
          <span className="hpill"><span className="sw" style={{ background: '#6F4FE6' }} />Mixed-method research</span>
          <span className="hpill"><span className="sw" style={{ background: '#1F8FA0' }} />Journey mapping</span>
          <span className="hpill"><span className="sw" style={{ background: '#C8459B' }} />Survey design</span>
          <span className="hpill"><span className="sw" style={{ background: '#1F8A5B' }} />Competitor audit</span>
          <span className="hpill"><span className="sw" style={{ background: '#B58A00' }} />Information architecture</span>
          <span className="hpill"><span className="sw" style={{ background: '#6F4FE6' }} />Hi-fi visual design</span>
          <span className="hpill"><span className="sw" style={{ background: '#1F8FA0' }} />Prototyping</span>
          <span className="hpill"><span className="sw" style={{ background: '#C8459B' }} />Pre/post measurement</span>
        </div>
      </div>
    </section>
  )
}

/* ── Contact Banner ─────────────────────────────────────────── */

/* ── Footer ─────────────────────────────────────────────────── */
function WudFooter() {
  return (
    <div className="wud-page">
      <div className="kick" style={{ marginTop: 64 }}><span className="n">→</span> Up next</div>
      <div className="up-next">
        <Link href="/projects/why" className="next-card">
          <div className="nc-small">Case study 02 · 2025</div>
          <div className="nc-t">Why<em>.</em> the decision ledger.</div>
          <div className="nc-d">A capture system for the decisions that get lost between Slack, Figma and the standup. Schema-first, AI-assisted.</div>
          <div className="nc-arr">Read next →</div>
        </Link>
        <Link href="/#work" className="next-card">
          <div className="nc-small">More work</div>
          <div className="nc-t">All case studies <em>&amp;</em> in-progress.</div>
          <div className="nc-d">A field study in retail logistics, a small-team form library, plus the writing index.</div>
          <div className="nc-arr">Back to index →</div>
        </Link>
      </div>
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────────── */
export default function WudPage() {
  return (
    <div className="wud-cs">
      <script dangerouslySetInnerHTML={{ __html: `document.body.classList.add('wud-standalone')` }} />
      <SuppressChrome />
      <WudHero />
      <WudOverview />
      <Ch01 />
      <Ch02 />
      <Ch03 />
      <Ch04 />
      <Ch05 />
      <Ch06 />
      <WudExploration />
      <Ch07 />
      <WudIA />
      <Ch08 />
      <Ch09 />
      <Ch10 />
      <Ch11 />
      <WudFooter />
    </div>
  )
}
