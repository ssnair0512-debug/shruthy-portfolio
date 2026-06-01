import type { Metadata } from 'next'
import Link from 'next/link'
import './relay-ds.css'

export const metadata: Metadata = {
  title: 'Relay Design System · Shruthy Nair',
  description: 'Eight weeks turning scattered judgment calls into a shared foundation: tokens, components, and the structural choices that keep the system alive after the founding designers move on.',
}

export default function RelayDSPage() {
  return (
    <div className="rds">

      {/* ── HERO ── */}
      <section className="hero rds-page">
        <div className="hero-top">
          <div className="crumb">
            <Link href="/">Work</Link>
            <span className="sep">/</span>
            <span>Case study · 02</span>
          </div>
        </div>

        <h1 className="hero-name">Relay DS<span className="dot">.</span></h1>
        <p className="hero-tag">Component library &amp; token architecture for <em>Relay</em> — the async-first decision ledger.</p>
        <p className="hero-sub">
          Eight weeks turning scattered judgment calls into a shared foundation: tokens, components,
          and the structural choices that keep the system alive after the founding designers move on.{' '}
          <strong>A system built to outlast the people who built it.</strong>
        </p>

        <div className="hero-pills">
          <span className="hpill"><span className="sw" style={{ background: '#2DA169' }} />Design Systems</span>
          <span className="hpill"><span className="sw" style={{ background: '#0D3B28' }} />Token Architecture</span>
          <span className="hpill"><span className="sw" style={{ background: '#C68A1F' }} />Component Library</span>
          <span className="hpill"><span className="sw" style={{ background: '#C8459B' }} />Accessibility (WCAG 2.2 AA)</span>
        </div>

        <div className="meta-row">
          <div className="meta-card y">
            <div className="label">Role</div>
            <div className="value">Lead designer on the system</div>
            <div className="sub">Tokens, components, a11y, library docs — with brand, product &amp; eng</div>
          </div>
          <div className="meta-card c">
            <div className="label">Timeline</div>
            <div className="value">8 weeks · Q1 2025</div>
            <div className="sub">2 wks audit · 4 wks build · 2 wks docs &amp; rollout</div>
          </div>
          <div className="meta-card g">
            <div className="label">Stack</div>
            <div className="value">Figma Variables · Library</div>
            <div className="sub">Three-tier tokens · 9 components · docs per page</div>
          </div>
          <div className="meta-card p">
            <div className="label">Output</div>
            <div className="value">Relay DS v3.0</div>
            <div className="sub">Adopted across 3 product surfaces in the first sprint</div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="overview rds-page">
        <div className="figframe-green">
          <div className="ff-tag">
            <span className="ico" />
            relay-ds · v3.0 / components.fig · 8 contributors · published 04 Apr 2025
          </div>
          <div className="deco d1" />
          <div className="deco d2" />
          <div className="deco d3" />
          <div className="deco d4" />

          <div className="hi-frame">
            <div className="hi-bg-dots" />
            <div className="hi-toolbar">
              <div className="mark" />
              <span className="name">Relay Design System <em>v3.0</em></span>
              <span className="crumb">/ components</span>
              <div className="right">
                <span style={{ opacity: 0.5 }}>8 contributors · 78 screens</span>
                <span className="ver">v3.0</span>
              </div>
            </div>

            <div className="hi-stage">
              <div className="hi-stage-grid">

                {/* Panel 1: Featured decision card */}
                <div className="hi-card hi-featured">
                  <div className="ft-bar">
                    <div className="dots"><i /><i /><i /></div>
                    <span>relay.team / why / 048</span>
                  </div>
                  <div className="ft-body">
                    <div className="ft-h">DecisionCard / live · default</div>
                    <div className="ft-card">
                      <div className="r1">
                        <span>→ 048</span>
                        <span className="pill"><span className="d" /> live</span>
                        <span className="area">infra</span>
                      </div>
                      <div className="t">Move the onboarding email out of Mailchimp into our own queue.</div>
                      <div className="r2">
                        <div className="avs">
                          <span className="av">MA</span>
                          <span className="av">JL</span>
                        </div>
                        <span>3 linked sources · revisit at 200k/day</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panel 2: Tokens */}
                <div className="hi-card hi-tokens">
                  <div className="hi-card-l">
                    <span>Token layer · semantic status</span>
                    <span className="ct">18 tokens</span>
                  </div>
                  <div className="tk-list">
                    {[
                      { bg: '#2DA169', nm: '--status-live',     hex: '#2DA169' },
                      { bg: '#C68A1F', nm: '--status-drift',    hex: '#C68A1F' },
                      { bg: '#C8459B', nm: '--status-revise',   hex: '#C8459B' },
                      { bg: '#5A5C66', nm: '--status-archived', hex: '#5A5C66' },
                    ].map((t) => (
                      <div className="tk-row" key={t.nm}>
                        <span className="sw" style={{ background: t.bg }} />
                        <span className="nm">{t.nm}</span>
                        <span className="hex">{t.hex}</span>
                      </div>
                    ))}
                  </div>
                  <div className="tk-tier">
                    <span>primitive</span>
                    <span className="ar">→</span>
                    <span>semantic</span>
                    <span className="ar">→</span>
                    <span>component</span>
                  </div>
                </div>

                {/* Panel 3: Type ramp */}
                <div className="hi-card hi-type">
                  <div className="hi-card-l">
                    <span>Type ramp · Inter + JetBrains Mono</span>
                  </div>
                  <div className="ty-list">
                    <div className="ty-r t-h1"><span className="sz">32 / 1.1</span><span className="sp">Decisions.</span></div>
                    <div className="ty-r t-h2"><span className="sz">19 / 1.4</span><span className="sp">Surface title</span></div>
                    <div className="ty-r t-h3"><span className="sz">15 / 1.5</span><span className="sp">Section label</span></div>
                    <div className="ty-r t-bd"><span className="sz">14 / 1.55</span><span className="sp">Body copy text.</span></div>
                    <div className="ty-r t-lb"><span className="sz">11 / 1.0</span><span className="sp">LABEL · MONO</span></div>
                  </div>
                </div>

                {/* Panel 4: Component atoms */}
                <div className="hi-card hi-atom">
                  <div className="hi-card-l">
                    <span>Component library</span>
                    <span className="ct">9 entries</span>
                  </div>
                  <div className="at-list">
                    {[
                      { nm: 'DecisionCard', ct: '4 vars' },
                      { nm: 'StatusBadge',  ct: '4 states' },
                      { nm: 'FilterChip',   ct: '3 states' },
                      { nm: 'MetadataRow',  ct: '2 sizes' },
                    ].map((c) => (
                      <div className="at-row" key={c.nm}>
                        <span className="badge"><span className="d" />live</span>
                        <span className="nm">{c.nm}</span>
                        <span className="ct">{c.ct}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Panel 5: Actions / UI patterns */}
                <div className="hi-card hi-act">
                  <div className="hi-card-l">
                    <span>Actions &amp; inputs</span>
                  </div>
                  <div className="ac-body">
                    <div className="btn-row">
                      <span className="btn primary">Confirm decision</span>
                      <span className="btn secondary">Save draft</span>
                      <span className="btn ghost">Dismiss</span>
                    </div>
                    <div className="chip-row">
                      <span className="chip active"><span className="d" />Infra</span>
                      <span className="chip">Brand</span>
                      <span className="chip">Hiring</span>
                      <span className="chip">Eng</span>
                    </div>
                    <div className="inp-row">
                      <span>Search decisions</span>
                      <span className="cur" />
                      <span className="kbd">⌘K</span>
                    </div>
                  </div>
                </div>

                {/* Panel 6: Spacing */}
                <div className="hi-card hi-sp">
                  <div className="hi-card-l">
                    <span>Spacing scale · 4px base</span>
                    <span className="ct">8 steps</span>
                  </div>
                  <div className="sp-bars">
                    {[['4px','14%'],['8px','26%'],['12px','38%'],['16px','52%'],['24px','68%'],['32px','84%']].map(([label,w]) => (
                      <div className="br" key={label}>
                        <span>{label}</span>
                        <div className="bar" style={{ width: w }} />
                      </div>
                    ))}
                  </div>
                  <div className="sp-divide" />
                  <div className="ra-row">
                    <div className="ra" style={{ borderRadius: 6 }}>6px</div>
                    <div className="ra" style={{ borderRadius: 8 }}>8px</div>
                    <div className="ra" style={{ borderRadius: 12 }}>12px</div>
                  </div>
                </div>

              </div>

              {/* Annotations */}
              <div className="hi-anno" style={{ top: 55, left: 300 }}>
                <span className="dot" /><span className="line" style={{ width: 32 }} /><span className="lab accent">--status-live</span>
              </div>
              <div className="hi-anno" style={{ bottom: 88, right: 170 }}>
                <span className="lab">--radius-md · 8px</span><span className="line" style={{ width: 28 }} /><span className="dot" />
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="hi-foot">
            <div className="hf"><div className="l">A · foundation</div><div className="t">Token <em>architecture</em></div></div>
            <div className="hf"><div className="l">B · library</div><div className="t">9 <em>components live</em></div></div>
            <div className="hf"><div className="l">C · adoption</div><div className="t">100<em>% first sprint</em></div></div>
            <div className="hf"><div className="l">D · standard</div><div className="t">WCAG <em>2.2 AA</em></div></div>
          </div>
        </div>

        <div className="shot-cap">
          <span className="cn">The system ·</span>
          One file, three tiers of tokens, nine components, and a naming convention that explains itself.{' '}
          <em>Every layer points back to a token.</em>
        </div>
      </section>

      {/* ── CH 01 · WHY A SYSTEM ── */}
      <section className="chapter rds-page">
        <div className="chapter-inner">
          <div className="lede">
            <div>
              <div className="kick"><span className="n">01</span> Why a system</div>
              <h2 className="chap-h">A component isn&rsquo;t yours. <em>It&rsquo;s everyone&rsquo;s.</em></h2>
              <p className="chap-body">
                A component in a design system is a global decision. Every tweak made in one context
                ripples to every other context it lives in. That&rsquo;s the power — and the discipline required.
              </p>
              <p className="chap-body" style={{ marginTop: 14 }}>
                Relay had components, but no system. Each surface had its own interpretation. Designers
                tweaked in context, not in the library. The result was three versions of the same component
                and six different greens for the same semantic state.
              </p>
            </div>
            <div className="col-r">
              <div className="think">
                <div className="blob">
                  <span className="blush l" />
                  <span className="blush r" />
                </div>
                <div className="think-note">
                  <span className="lbl">thinking</span>
                  <span className="said">It was never an aesthetic problem. <em>It&rsquo;s operational</em>, and the kind that compounds quietly until it&rsquo;s a rewrite.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lifecycle diagram */}
          <div className="lifecycle">
            <div className="lc-tag">Component lifecycle · where Relay&rsquo;s components were stuck</div>
            <div className="lc-flow">

              <div className="lc-stage">
                <div className="chip">Build</div>
                <div className="note">Component created in the library for a specific need</div>
              </div>
              <div className="lc-arrow" aria-hidden="true">
                <svg viewBox="0 0 22 14" fill="none"><path d="M 0 7 L 18 7 M 13 2 L 19 7 L 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>

              <div className="lc-stage">
                <div className="chip">Use</div>
                <div className="note">Pulled into product screens and shipped to users</div>
              </div>
              <div className="lc-arrow" aria-hidden="true">
                <svg viewBox="0 0 22 14" fill="none"><path d="M 0 7 L 18 7 M 13 2 L 19 7 L 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>

              <div className="lc-stage flag">
                <div className="warn" aria-label="Warning">
                  <svg viewBox="0 0 22 20" fill="none"><path d="M11 2L20.5 18H1.5L11 2Z" stroke="#C2453B" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(194,69,59,0.08)"/><line x1="11" y1="8" x2="11" y2="13" stroke="#C2453B" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="16" r="0.8" fill="#C2453B"/></svg>
                </div>
                <div className="chip">Maintain</div>
                <div className="note"><span className="k">Skipped</span>No one owns updates. Drift begins silently.</div>
              </div>
              <div className="lc-arrow" aria-hidden="true">
                <svg viewBox="0 0 22 14" fill="none"><path d="M 0 7 L 18 7 M 13 2 L 19 7 L 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>

              <div className="lc-stage flag">
                <div className="warn" aria-label="Warning">
                  <svg viewBox="0 0 22 20" fill="none"><path d="M11 2L20.5 18H1.5L11 2Z" stroke="#C2453B" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(194,69,59,0.08)"/><line x1="11" y1="8" x2="11" y2="13" stroke="#C2453B" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="16" r="0.8" fill="#C2453B"/></svg>
                </div>
                <div className="chip">Re-use</div>
                <div className="note"><span className="k">Problem</span>Used in new context but forked, not extended</div>
              </div>
              <div className="lc-arrow" aria-hidden="true">
                <svg viewBox="0 0 22 14" fill="none"><path d="M 0 7 L 18 7 M 13 2 L 19 7 L 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>

              <div className="lc-stage flag">
                <div className="warn" aria-label="Warning">
                  <svg viewBox="0 0 22 20" fill="none"><path d="M11 2L20.5 18H1.5L11 2Z" stroke="#C2453B" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(194,69,59,0.08)"/><line x1="11" y1="8" x2="11" y2="13" stroke="#C2453B" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="16" r="0.8" fill="#C2453B"/></svg>
                </div>
                <div className="chip">Deprecate</div>
                <div className="note"><span className="k">Invisible</span>Old version lives alongside new — no canonical source</div>
              </div>
              <div className="lc-arrow" aria-hidden="true">
                <svg viewBox="0 0 22 14" fill="none"><path d="M 0 7 L 18 7 M 13 2 L 19 7 L 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>

              <div className="lc-stage flag">
                <div className="warn" aria-label="Warning">
                  <svg viewBox="0 0 22 20" fill="none"><path d="M11 2L20.5 18H1.5L11 2Z" stroke="#C2453B" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(194,69,59,0.08)"/><line x1="11" y1="8" x2="11" y2="13" stroke="#C2453B" strokeWidth="1.5" strokeLinecap="round"/><circle cx="11" cy="16" r="0.8" fill="#C2453B"/></svg>
                </div>
                <div className="chip">Re-customise</div>
                <div className="note"><span className="k">Untracked</span>One-offs multiply. No record, no ownership.</div>
              </div>
              <div className="lc-arrow" aria-hidden="true">
                <svg viewBox="0 0 22 14" fill="none"><path d="M 0 7 L 18 7 M 13 2 L 19 7 L 13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>

              <div className="lc-stage">
                <div className="chip">Repeat</div>
                <div className="note">Cycle restarts — with more drift than before</div>
              </div>

            </div>
            <div className="lc-foot">
              <strong>The lifecycle is a loop, not a line.</strong> Without a system, every component goes around once and comes out as a fork.
            </div>
          </div>

          <div className="note-strip" style={{ marginTop: 28 }}>
            This was where Relay was stuck at week one. Build and use were happening. Everything after that was invisible.
          </div>

          {/* Evidence header */}
          <div className="kick" style={{ marginTop: 56 }}><span className="n">!</span> Three symptoms from the week-one audit</div>
          <h3 className="chap-h" style={{ marginTop: 12, fontSize: 30 }}>Not a vibes problem. <em>Specific, countable evidence.</em></h3>

          {/* Evidence sticky cards */}
          <div className="evidence-grid">
            <div className="ev">
              <div className="lbl">Symptom 01 · radius drift</div>
              <div className="big">6 values</div>
              <div className="copy">in use for what should be <em>one</em> border-radius token. Counted across Inbox, Composer, and Decision Log.</div>
              <div className="radii-row">
                <div className="r" style={{ borderRadius: 2 }} />
                <div className="r" style={{ borderRadius: 3 }} />
                <div className="r" style={{ borderRadius: 4 }} />
                <div className="r" style={{ borderRadius: 6 }} />
                <div className="r" style={{ borderRadius: 8 }} />
                <div className="r" style={{ borderRadius: 12 }} />
              </div>
            </div>
            <div className="ev">
              <div className="lbl">Symptom 02 · detached fills</div>
              <div className="big">0 shared</div>
              <div className="copy">Every status color was applied <em>inline</em>. No styles, no variables — just raw hex pasted between files.</div>
              <div className="det-stack">
                <div className="det"><span className="sw" style={{ background: '#2DA169' }} /><span>#2DA169</span><span className="name">inline · DecisionCard</span></div>
                <div className="det"><span className="sw" style={{ background: '#2EA068' }} /><span>#2EA068</span><span className="name">inline · Inbox</span></div>
                <div className="det"><span className="sw" style={{ background: '#28A06A' }} /><span>#28A06A</span><span className="name">inline · Calendar</span></div>
              </div>
            </div>
            <div className="ev">
              <div className="lbl">Symptom 03 · component forks</div>
              <div className="big">3 versions</div>
              <div className="copy">of the <em>same</em> DecisionCard across three screens. Slightly different padding. Slightly different border.</div>
              <div className="forks">
                <div className="fk"><div className="vname">v / Inbox</div><div className="vlines"><i /><i /><i /></div></div>
                <div className="fk"><div className="vname">v / Threads</div><div className="vlines"><i /><i /><i /></div></div>
                <div className="fk"><div className="vname">v / Why</div><div className="vlines"><i /><i /><i /></div></div>
              </div>
            </div>
          </div>

          <div className="note-strip" style={{ marginTop: 28 }}>
            Every one of these is a decision the system should have made once. Instead it was being made again — slightly differently — every time a new screen was built.
          </div>
        </div>
      </section>

      {/* ── CH 02 · GOAL ── */}
      <section className="chapter rds-page">
        <div className="chapter-inner">
          <div className="lede">
            <div>
              <div className="kick"><span className="n">02</span> Goal</div>
              <h2 className="chap-h">One foundation. <em>Built to outlast the people who built it.</em></h2>
              <p className="chap-body">
                Before opening Figma we wrote down what &ldquo;done&rdquo; had to mean. Not a wish list —
                three operational outcomes the team could point at when something drifted later.
              </p>
            </div>
            <div className="col-r">
              <div className="think">
                <div className="blob">
                  <span className="blush l" />
                  <span className="blush r" />
                </div>
                <div className="think-note">
                  <span className="lbl">thinking</span>
                  <span className="said">A goal you can&rsquo;t point at later isn&rsquo;t a goal. Each one had to be countable in a production file.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="goal-grid">
            <div className="goal-card">
              <div className="step">GOAL · 01</div>
              <div className="gt">A <em>single source</em> for color, type, space.</div>
              <div className="gd">No more inline hex. No more &ldquo;close enough&rdquo; spacing. A token layer every screen file references, with one canonical name per decision.</div>
              <div className="measure">
                <span className="ml">How we&rsquo;d know</span>
                <em>Open any file, check the Variables panel: every fill bound, every padding bound.</em>
              </div>
            </div>
            <div className="goal-card">
              <div className="step">GOAL · 02</div>
              <div className="gt">A <em>lean library</em> of components — nine, not fifty.</div>
              <div className="gd">Only patterns that already recur three or more times across the product. No ghost components. Every item earns its page.</div>
              <div className="measure">
                <span className="ml">How we&rsquo;d know</span>
                <em>Open the library, every component has ≥ 3 instances in real screens.</em>
              </div>
            </div>
            <div className="goal-card">
              <div className="step">GOAL · 03</div>
              <div className="gt">A system the <em>next designer</em> can use without us.</div>
              <div className="gd">Documentation attached to every component, naming conventions readable from the layer panel. No tribal knowledge required.</div>
              <div className="measure">
                <span className="ml">How we&rsquo;d know</span>
                <em>Onboard a new designer in 30 min using only the library.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CH 03 · PRINCIPLES ── */}
      <section className="chapter rds-page">
        <div className="chapter-inner">
          <div className="lede">
            <div>
              <div className="kick"><span className="n">03</span> Principles</div>
              <h2 className="chap-h">Three rules <em>before</em> we opened Figma.</h2>
              <p className="chap-body">
                Constraints, not aspirations. Each one is short enough to recite in standup and concrete
                enough to point at when a PR drifts. Together they decide what belongs in the system.
              </p>
            </div>
            <div className="col-r">
              <div className="think">
                <div className="blob">
                  <span className="blush l" />
                  <span className="blush r" />
                </div>
                <div className="think-note">
                  <span className="lbl">thinking</span>
                  <span className="said">Rules before files. If a choice can&rsquo;t be made countable, it becomes an argument every sprint.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="principles">
            <div className="principle">
              <div className="pn">01</div>
              <div>
                <h4>Tokens before <em>styles.</em></h4>
                <p>Every color, radius, shadow, and spacing value lives in the token layer first. Nothing gets applied directly. If it can&rsquo;t be named, it doesn&rsquo;t belong in the system.</p>
                <span className="badge">No token → no merge</span>
              </div>
            </div>
            <div className="principle">
              <div className="pn">02</div>
              <div>
                <h4>Components serve patterns, not <em>screens.</em></h4>
                <p>A component is only worth building if it recurs across three or more distinct contexts. Screen-specific one-offs stay in the screen file. We&rsquo;d rather ship nine real components than fifty ghost ones.</p>
                <span className="badge">The 3× rule</span>
              </div>
            </div>
            <div className="principle">
              <div className="pn">03</div>
              <div>
                <h4>The system must <em>explain itself.</em></h4>
                <p>Every component ships with usage documentation — do/don&rsquo;t examples, anatomy, accessibility notes — attached directly in the library. A designer joining in six months should use it without asking anyone.</p>
                <span className="badge">Docs ship with the component</span>
              </div>
            </div>
          </div>

          <div className="note-strip green" style={{ marginTop: 28 }}>
            What this ruled out: building components before the token layer was stable. We held the line for two weeks while tokens were being named and reviewed — and it was the right call.
          </div>
        </div>
      </section>

      {/* ── CH 04 · TOKEN ARCHITECTURE ── */}
      <section className="chapter rds-page">
        <div className="chapter-inner">
          <div className="lede">
            <div>
              <div className="kick"><span className="n">04</span> Token architecture</div>
              <h2 className="chap-h">Primitive → semantic → component. <em>In that order. Always.</em></h2>
              <p className="chap-body">
                Three tiers in Figma Variables, with one strict rule: <strong>no layer references a layer above it.</strong>{' '}
                Change a primitive, every downstream layer follows. The discipline is one-way and makes refactors trivial.
              </p>
            </div>
            <div className="col-r">
              <div className="think">
                <div className="blob">
                  <span className="blush l" />
                  <span className="blush r" />
                </div>
                <div className="think-note">
                  <span className="lbl">thinking</span>
                  <span className="said">A one-way reference rule is the cheapest insurance there is. The discipline lives in the file, not in my memory.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="shot-cap" style={{ marginBottom: 18 }}>
            <span className="cn">relay-ds / variables · accent tier ·</span>
            the one-way chain
          </div>

          <div className="token-board">
            <div className="tb-head">
              <div className="col-h"><span className="num">01</span> Primitive <span className="arrow">→</span></div>
              <div className="col-h"><span className="num">02</span> Semantic <span className="arrow">→</span></div>
              <div className="col-h"><span className="num">03</span> Component</div>
            </div>
            <div className="tb-body">
              <div className="col primitive">
                <div className="cell"><span className="sw" style={{ background: '#2DA169' }} /><span className="nm">#2DA169</span><span className="meta">green-500</span></div>
                <div className="cell"><span className="sw" style={{ background: '#C68A1F' }} /><span className="nm">#C68A1F</span><span className="meta">amber-600</span></div>
                <div className="cell"><span className="sw" style={{ background: '#C8459B' }} /><span className="nm">#C8459B</span><span className="meta">pink-600</span></div>
                <div className="cell"><span className="sw" style={{ background: '#5A5C66' }} /><span className="nm">#5A5C66</span><span className="meta">gray-700</span></div>
              </div>
              <div className="col semantic">
                <div className="cell"><span className="sw" style={{ background: '#2DA169' }} /><span className="nm">--status-live</span><span className="meta">→ green-500</span></div>
                <div className="cell"><span className="sw" style={{ background: '#C68A1F' }} /><span className="nm">--status-drift</span><span className="meta">→ amber-600</span></div>
                <div className="cell"><span className="sw" style={{ background: '#C8459B' }} /><span className="nm">--status-revise</span><span className="meta">→ pink-600</span></div>
                <div className="cell"><span className="sw" style={{ background: '#5A5C66' }} /><span className="nm">--status-archived</span><span className="meta">→ gray-700</span></div>
              </div>
              <div className="col component">
                <div className="cell"><span className="sw" style={{ background: '#2DA169' }} /><span className="nm">DecisionCard <em>· statusDot</em></span></div>
                <div className="cell"><span className="sw" style={{ background: '#C68A1F' }} /><span className="nm">StatusBadge <em>· background</em></span></div>
                <div className="cell"><span className="sw" style={{ background: '#C8459B' }} /><span className="nm">FilterChip <em>· activeState</em></span></div>
                <div className="cell"><span className="sw" style={{ background: '#5A5C66' }} /><span className="nm">DecisionCard <em>· mutedState</em></span></div>
              </div>
            </div>
          </div>

          <div className="hardest-call">
            <div className="l">
              The hardest call
              <span className="who">— wasn&rsquo;t naming. It was deciding what <em>not</em> to tokenize.</span>
            </div>
            <div>
              <div className="t">The token layer should only contain decisions that <em>need</em> to be consistent, not decisions that happen to <em>be</em> similar.</div>
              <p>
                We chose <strong>not</strong> to tokenize three categories: one-off layout values,
                screen-specific spacing overrides, and decorative properties that don&rsquo;t recur.
                Every token added is a load-bearing decision — someone has to maintain its name,
                its mapping, and its WCAG contrast forever. The token layer earns scarcity.
              </p>
            </div>
          </div>

          <div className="inv-row">
            <div className="inv-card">
              <div className="inv-h">
                <span className="inv-num">4</span>
                <span className="inv-what">Semantic status</span>
              </div>
              <div className="inv-vis-status">
                {[['#2DA169','live'],['#C68A1F','drift'],['#C8459B','revise'],['#5A5C66','archived']].map(([bg,label]) => (
                  <div className="iv-s" key={label}><span className="sw" style={{ background: bg }} /><em>{label}</em></div>
                ))}
              </div>
            </div>
            <div className="inv-card">
              <div className="inv-h">
                <span className="inv-num">8</span>
                <span className="inv-what">Spacing steps</span>
              </div>
              <div className="inv-vis-space">
                {['20%','30%','40%','52%','64%','76%','88%','100%'].map((w, i) => (
                  <span className="iv-bar" key={i} style={{ width: w }} />
                ))}
                <span className="iv-cap">4px base unit · 0 → 8</span>
              </div>
            </div>
            <div className="inv-card">
              <div className="inv-h">
                <span className="inv-num">3</span>
                <span className="inv-what">Border radii</span>
              </div>
              <div className="inv-vis-radii">
                <div className="iv-r" style={{ borderRadius: 6 }}><em>sm 6px</em></div>
                <div className="iv-r" style={{ borderRadius: 8 }}><em>md 8px</em></div>
                <div className="iv-r" style={{ borderRadius: 12 }}><em>lg 12px</em></div>
              </div>
            </div>
            <div className="inv-card">
              <div className="inv-h">
                <span className="inv-num">2</span>
                <span className="inv-what">Elevation</span>
              </div>
              <div className="inv-vis-shadow">
                <div className="iv-sh" style={{ boxShadow: '0 2px 8px -2px rgba(20,18,15,0.14)' }}>sm</div>
                <div className="iv-sh" style={{ boxShadow: '0 8px 24px -8px rgba(20,18,15,0.22)' }}>md</div>
              </div>
            </div>
            <div className="inv-card">
              <div className="inv-h">
                <span className="inv-num">1</span>
                <span className="inv-what">Motion</span>
              </div>
              <div className="inv-vis-motion">
                <div className="iv-mc">--dur-base · 180ms ease-out</div>
                <div className="iv-mc" style={{ marginTop: 4, opacity: 0.55 }}>applied to all interactive components</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CH 05 · COMPONENT LIBRARY ── */}
      <section className="chapter rds-page">
        <div className="chapter-inner">
          <div className="lede">
            <div>
              <div className="kick"><span className="n">05</span> Component library</div>
              <h2 className="chap-h">Nine components. <em>Every one earns its place.</em></h2>
              <p className="chap-body">
                Built in priority order, highest-recurrence first. We mapped every UI pattern across
                existing screens, counted occurrences, and only built what appeared three or more times.
                Twenty seemed fine until we ran the count — nine was the honest number.
              </p>
            </div>
            <div className="col-r">
              <div className="think">
                <div className="blob">
                  <span className="blush l" />
                  <span className="blush r" />
                </div>
                <div className="think-note">
                  <span className="lbl">thinking</span>
                  <span className="said">Every component is a cost to maintain forever, so we built only what already recurred three or more times. The library stayed small enough the whole team could hold it in their head.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="comp-grid">
            {[
              { name: 'DecisionCard',   v: '4 variants',  desc: 'The atomic unit of the ledger. One white surface, one accent left bar, the decision in plain language.',              pct: '92%', ct: '31 screens' },
              { name: 'StatusBadge',    v: '4 states',    desc: 'Live / Drift / Revise / Archived. Color is the enhancement — icon and label are the signal.',                        pct: '85%', ct: '27 screens' },
              { name: 'FilterChip',     v: '3 variants',  desc: 'Area, date, person, status filters. One chip, three states — idle, active, pressed.',                                pct: '68%', ct: '19 screens' },
              { name: 'CapturePrompt',  v: '2 states',    desc: 'Inline AI suggestion widget — offered draft, confirmed draft. Lives in threads and Figma comments.',                  pct: '38%', ct: '11 screens' },
              { name: 'CommandPalette', v: '1 variant',   desc: 'Full-screen ⌘K search overlay. One surface, fuzzy search across decisions, threads, transcripts.',                   pct: '22%', ct: '6 surfaces' },
              { name: 'MetadataRow',    v: '2 densities', desc: 'Decided-by · area · revisit date. The footer row on every Decision detail page.',                                    pct: '75%', ct: '23 screens' },
              { name: 'LinkedSource',   v: '4 adapters',  desc: 'Thread, calendar, Figma, Linear. One row, four icons — pointer back to where the decision was made.',                pct: '52%', ct: '15 screens' },
              { name: 'OptionCard',     v: '3 states',    desc: 'Chosen / rejected / unchosen. Used inside DecisionCard when a resolution had alternatives worth recording.',         pct: '28%', ct: '8 screens'  },
              { name: 'Avatar',         v: '2 variants',  desc: 'Single and stacked group. Initials only — no decorative imagery. Each instance carries an aria-label.',              pct: '98%', ct: '34 screens' },
            ].map((c) => (
              <div className="comp" key={c.name}>
                <div className="head">
                  <div className="nm"><span className="slash">/</span>{c.name}</div>
                  <div className="var">{c.v}</div>
                </div>
                <div className="desc">{c.desc}</div>
                <div className="used">
                  <span>used in</span>
                  <div className="bar"><i style={{ width: c.pct }} /></div>
                  <span className="ct">{c.ct}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="badges-demo">
            <span className="demo-badge live"><span className="ico">✓</span>Live</span>
            <span className="demo-badge drift"><span className="ico">!</span>Drift</span>
            <span className="demo-badge revise"><span className="ico">↺</span>Revise</span>
            <span className="demo-badge archived"><span className="ico">×</span>Archived</span>
          </div>

          {/* DecisionCard anatomy */}
          <div className="anatomy">
            <div className="header">
              <h3>DecisionCard <em>· anatomy.</em></h3>
              <div className="h-sub">The signature surface. Every layer points back to a token; every state has an accessible name.</div>
            </div>

            <div className="var-strip">
              <span className="v decided active"><span className="d" />Decided · default</span>
              <span className="v drafting"><span className="d" />Drafting</span>
              <span className="v supers"><span className="d" />Superseded</span>
              <span className="v revisit"><span className="d" />Revisit soon</span>
            </div>

            <div className="anatomy-stage">
              <div className="ana-card">
                <div className="r1">
                  <span>→ 048</span>
                  <span className="stat"><span className="dot" />live</span>
                  <span className="area">infra</span>
                  <span style={{ marginLeft: 'auto', fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--r-text-3)', fontSize: 12 }}>2h ago · by Maya</span>
                </div>
                <div className="title">Move the onboarding email out of Mailchimp into our own queue.</div>
                <div className="meta">
                  <span className="who"><span className="av">MA</span>Maya</span>
                  <span>3 linked sources</span>
                  <span>revisit at 200k/day</span>
                  <em style={{ marginLeft: 'auto' }}>relay.team/why/048</em>
                </div>
              </div>

              <svg className="ana-svg" viewBox="0 0 1080 360" preserveAspectRatio="none" aria-hidden="true">
                <path d="M 90 200 Q 200 200 250 200" stroke="#1A2638" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.45" />
                <path d="M 350 80 Q 420 60 360 130" stroke="#1A2638" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.45" />
                <path d="M 820 80 Q 700 100 700 175" stroke="#1A2638" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.45" />
                <path d="M 970 220 Q 880 230 830 240" stroke="#1A2638" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.45" />
                <path d="M 110 300 Q 240 300 280 290" stroke="#1A2638" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.45" />
              </svg>

              <div className="ana-label" style={{ top: 188, left: 14 }}>
                border-left · 3px<br />
                <span className="tk">--status-live</span> <span className="v">→ #2DA169</span>
              </div>
              <div className="ana-label" style={{ top: 50, left: 280 }}>
                <span className="tk">StatusBadge/live</span><br />
                <span className="v">bg --status-live · 12% · radius-pill</span>
              </div>
              <div className="ana-label" style={{ top: 50, right: 30 }}>
                <span className="tk">--text · --weight-medium</span><br />
                <span className="v">--text-md (15.5px) · 1.4 line-height</span>
              </div>
              <div className="ana-label" style={{ top: 210, right: 14 }}>
                <span className="tk">--radius-md</span> <span className="v">· 6px</span><br />
                <span className="v">--border · 1px solid --border</span>
              </div>
              <div className="ana-label" style={{ bottom: 6, left: 40 }}>
                padding · <span className="tk">--space-4</span> <span className="v">16px</span><br />
                row gap · <span className="tk">--space-5</span> <span className="v">18px</span>
              </div>
            </div>

            <div className="token-summary">
              {[
                { lbl: 'Decided · default', val: <>border-left · <span style={{ color: 'var(--r-accent-hover)' }}>--status-live</span><br />accessible name · <span style={{ color: 'var(--r-accent-hover)' }}>&ldquo;live&rdquo;</span></> },
                { lbl: 'Drafting',          val: <>border-left · <span style={{ color: 'var(--r-warning)' }}>--status-drift</span><br />accessible name · <span style={{ color: 'var(--r-warning)' }}>&ldquo;drafting&rdquo;</span></> },
                { lbl: 'Superseded',        val: <>border-left · <span style={{ color: '#5A5C66' }}>--status-archived</span><br />title strikethrough · <span style={{ color: '#5A5C66' }}>&ldquo;superseded&rdquo;</span></> },
                { lbl: 'Revisit soon',      val: <>border-left · <span style={{ color: '#C8459B' }}>--status-revise</span><br />accessible name · <span style={{ color: '#C8459B' }}>&ldquo;revisit&rdquo;</span></> },
              ].map((ts) => (
                <div key={ts.lbl}>
                  <div className="ts-lbl">{ts.lbl}</div>
                  <div className="ts-val">{ts.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="kick" style={{ marginTop: 56 }}><span className="n" style={{ background: '#C8459B' }}>♿</span> Accessibility · a fifth structural choice</div>
          <h3 className="chap-h" style={{ fontSize: 24, marginTop: 14, maxWidth: 760 }}>Tested against four criteria <em>before</em> publish, not audited at the end.</h3>
          <p className="chap-body" style={{ maxWidth: 760 }}>Contrast at 4.5:1, full keyboard navigation, a visible focus state, and an accessible name on every interactive element. Each one is checked component by component, not screen by screen at the end of the sprint.</p>

          {/* A11y table */}
          <div className="a11y-table">
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Contrast 4.5:1</th>
                  <th>Keyboard nav</th>
                  <th>Focus state</th>
                  <th>Screen-reader label</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 'DecisionCard',   d: '· interactive surface', a: [true,  true,  true,  true]  },
                  { c: 'StatusBadge',    d: '· decorative pill',     a: [true,  null,  null,  true]  },
                  { c: 'CapturePrompt',  d: '· inline AI widget',    a: [true,  true,  true,  true]  },
                  { c: 'CommandPalette', d: '· ⌘K overlay',          a: [true,  true,  true,  true]  },
                  { c: 'FilterChip',     d: '· active state',        a: [true,  true,  true,  true]  },
                  { c: 'LinkedSource',   d: '· back-link row',       a: [true,  true,  true,  true]  },
                  { c: 'MetadataRow',    d: '· readonly',            a: [true,  null,  null,  true]  },
                ].map((row) => (
                  <tr key={row.c}>
                    <td>{row.c}<em>{row.d}</em></td>
                    {row.a.map((v, i) => (
                      <td key={i}>{v === true ? <span className="pass">✓</span> : <span className="na">–</span>}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CH 06 · MAINTAIN ── */}
      <section className="chapter rds-page">
        <div className="chapter-inner">
          <div className="lede">
            <div>
              <div className="kick"><span className="n">06</span> Keeping it alive</div>
              <h2 className="chap-h">A system stays consistent because of how it&rsquo;s built, <em>not because someone polices it.</em></h2>
              <p className="chap-body">
                A design system that isn&rsquo;t maintained is a liability. The honest answer isn&rsquo;t
                building a tool we&rsquo;d have to maintain too — it&rsquo;s baking the discipline into
                the structure so the path of least resistance is the correct one.
              </p>
            </div>
            <div className="col-r">
              <div className="think">
                <div className="blob">
                  <span className="blush l" />
                  <span className="blush r" />
                </div>
                <div className="think-note">
                  <span className="lbl">thinking</span>
                  <span className="said">Make the path of least resistance the correct one, and most drift never happens. The rest you catch by looking on purpose.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Previous system mock */}
          <div className="prev-system">
            <div>
              <div className="kick" style={{ marginBottom: 14 }}><span className="n">!</span> Lesson from the system before this one</div>
              <div className="ps-h">A generic DS doesn&rsquo;t survive contact with <em>a real product.</em></div>
              <p className="ps-p">The previous system had all the right primitives — a color ramp, a type scale, a spacing system. But it had no surface tokens. When hover states needed to be consistent across components, there was nothing to reference. Every designer calibrated their own <em>--surface-hover</em> value by eye.</p>
            </div>
            <div>
              <div className="ps-mock-tag">Token gap · v2.x · hover state audit</div>
              <div className="ps-mock">
                <div className="ps-mock-h">Surface tokens · expected vs found</div>
                <div className="ps-ramp">
                  <div className="ps-row">
                    <span className="sw" style={{ background: '#FAFBFC' }} />
                    <span className="ps-tok">--surface-100</span>
                    <span className="ps-hex">#FAFBFC</span>
                    <span className="ps-tag done">exists</span>
                  </div>
                  <div className="ps-row">
                    <span className="sw" style={{ background: '#EEF2F6' }} />
                    <span className="ps-tok">--surface-200</span>
                    <span className="ps-hex">#EEF2F6</span>
                    <span className="ps-tag done">exists</span>
                  </div>
                  <div className="ps-row off">
                    <span className="sw" style={{ background: 'transparent', boxShadow: 'inset 0 0 0 1.5px #C2453B' }} />
                    <span className="ps-tok">--surface-hover</span>
                    <span className="ps-hex">missing</span>
                    <span className="ps-tag bad">inline</span>
                  </div>
                </div>
                <div className="ps-gap">
                  <div className="ps-gap-line" />
                  <span className="ps-gap-label">6 designers · 6 values</span>
                  <div className="ps-gap-line" />
                </div>
                <div className="ps-mock-f">v3.0 defined <em>--surface-hover</em> as a first-class token on day one.</div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="pillars">
            <div className="pillar">
              <div className="pn"><span className="num">01</span> Token tiers</div>
              <h4 className="ph">A one-way reference rule that <em>refactors itself.</em></h4>
              <div className="pd">Components reference semantic tokens. Semantic tokens reference primitives. Change the primitive and every downstream layer follows — no audit, no find-and-replace.</div>
              <div className="pillar-mock">
                <div className="ml">Refactor · brand green shift</div>
                <div className="row"><span className="tick">✓</span> primitive <code>green-500</code> <span className="from">#4CA848</span> <span className="arrow">→</span> <span className="to">#2DA169</span></div>
                <div className="row"><span className="tick">✓</span> semantic <code>--status-live</code> — updates automatically</div>
                <div className="row"><span className="tick">✓</span> component <code>StatusBadge</code> — updates automatically</div>
                <div className="row" style={{ marginTop: 6 }}><span className="tick">✓</span> 31 screens · zero find-and-replace</div>
              </div>
            </div>
            <div className="pillar">
              <div className="pn"><span className="num">02</span> Naming convention</div>
              <h4 className="ph">Layer names that <em>explain themselves.</em></h4>
              <div className="pd">Every component follows <code style={{ background: 'var(--paper-2)', padding: '1px 5px', borderRadius: 3, color: 'var(--r-accent-hover)', fontSize: 12 }}>Name/state</code> — the UICollective convention. Read the layer panel and you already know what it is and what state it&rsquo;s in.</div>
              <div className="pillar-mock">
                <div className="ml">Sample layers · production file</div>
                <div className="name-row"><span className="num">a</span><code>DecisionCard/live</code></div>
                <div className="name-row"><span className="num">b</span><code>StatusBadge/drift</code></div>
                <div className="name-row"><span className="num">c</span><code>FilterChip/active</code></div>
                <div className="name-row"><span className="num">d</span><code>MetadataRow/dense</code></div>
                <div className="row" style={{ marginTop: 8, opacity: 0.55 }}><span className="cross">✕</span> <code style={{ textDecoration: 'line-through' }}>card-2-copy-final</code> — rejected at review</div>
              </div>
            </div>
            <div className="pillar">
              <div className="pn"><span className="num">03</span> The 3× rule</div>
              <h4 className="ph">Components <em>earn</em> their way in.</h4>
              <div className="pd">A pattern joins the library only after appearing in three or more distinct contexts. Below threshold, it stays in the screen file. Keeps the library lean and kills ghost components.</div>
              <div className="pillar-mock">
                <div className="ml">Promotion ledger · v3.0</div>
                <div className="row"><span className="tick">✓</span> <code>DecisionCard</code> — 31 instances · promoted</div>
                <div className="row"><span className="tick">✓</span> <code>StatusBadge</code> — 27 instances · promoted</div>
                <div className="row" style={{ opacity: 0.55 }}><span className="cross">✕</span> <code>TimezoneBadge</code> — 2 instances · waiting</div>
                <div className="row" style={{ opacity: 0.55 }}><span className="cross">✕</span> <code>ComposerInset</code> — 1 instance · stays a layer</div>
              </div>
            </div>
            <div className="pillar">
              <div className="pn"><span className="num">04</span> Docs ship-check</div>
              <h4 className="ph">No component <em>publishes without its page.</em></h4>
              <div className="pd">Before a component appears in the library, it has to ship with the same four artifacts: variant list, one do, one don&rsquo;t, a11y notes, and a token reference list.</div>
              <div className="pillar-mock">
                <div className="ml">Publish checklist · DecisionCard</div>
                <div className="row"><span className="tick">✓</span> variants documented — 4 states</div>
                <div className="row"><span className="tick">✓</span> 1 do · 1 don&rsquo;t example</div>
                <div className="row"><span className="tick">✓</span> a11y notes — contrast, focus, label</div>
                <div className="row"><span className="tick">✓</span> token reference list — 7 tokens</div>
                <div className="row" style={{ marginTop: 6, paddingTop: 8, borderTop: '1px dashed var(--line)' }}><span className="tick">✓</span> ready to merge</div>
              </div>
            </div>
          </div>

          {/* Audit rows */}
          <div className="audit-row">
            <div className="audit-card">
              <div className="ac-k"><span className="ico" />Token audit · v3.0</div>
              <h4>Every token <em>justified</em> before merge.</h4>
              <p>We ran a full token audit mid-build to catch anything tokenized speculatively. Three tokens removed. Every remaining one had at least three downstream references before it shipped.</p>
              <div className="audit-list">
                <div className="ai"><span className="tk">--status-live</span><span>31 references · DecisionCard, StatusBadge, FilterChip</span><span className="fix done">kept</span></div>
                <div className="ai"><span className="tk">--composer-inset</span><span>1 reference · screen-specific override</span><span className="fix next">removed</span></div>
                <div className="ai"><span className="tk">--marketing-hero-gap</span><span>1 reference · marketing site only</span><span className="fix next">removed</span></div>
              </div>
            </div>
            <div className="audit-card">
              <div className="ac-k"><span className="ico" style={{ background: '#C8459B' }} /> Bringing the team along</div>
              <h4>A system only holds if the team <em>believes in it.</em></h4>
              <p>Structure isn&rsquo;t enough on its own, people have to see the point. So we ran a short session on why a design system matters, framed three ways at once:</p>
              <div className="session">
                <div className="se"><span className="n">01</span><span><strong>Their view</strong> — less time re-deciding colour, radius, and spacing on every screen.</span></div>
                <div className="se"><span className="n">02</span><span><strong>The brand&rsquo;s view</strong> — one coherent voice instead of five dialects of the product.</span></div>
                <div className="se"><span className="n">03</span><span><strong>The product&rsquo;s view</strong> — changes that ship faster and stay consistent at scale.</span></div>
              </div>
              <p style={{ marginTop: 14 }}>Then I sat with designers and developers one-on-one, fitting a new design into the system or working out how a given part was meant to be used. Pairing, not policing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CH 07 · OUTCOME ── */}
      <section className="chapter rds-page">
        <div className="chapter-inner">
          <div className="lede">
            <div>
              <div className="kick"><span className="n">07</span> Outcome</div>
              <h2 className="chap-h">v3.0 shipped on time. <em>Adopted across three surfaces the next sprint.</em></h2>
              <p className="chap-body">
                The honest measure of a design system isn&rsquo;t how it looks at launch — it&rsquo;s
                whether the team actually reaches for it. Three weeks after publish, every new screen
                was being assembled from the library.
              </p>
            </div>
            <div className="col-r">
              <div className="think">
                <div className="blob">
                  <span className="blush l" />
                  <span className="blush r" />
                </div>
                <div className="think-note">
                  <span className="lbl">thinking</span>
                  <span className="said">Adoption is the only metric that matters. A perfect library nobody opens is a very tidy way to fail.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="outcome-grid">
            <div className="outcome-stat">
              <div className="ol">Library adoption · first sprint</div>
              <div className="big">100<em>%</em></div>
              <div className="gloss">Every new screen file referenced the library. Zero off-library components in the first PR cycle — naming made copies visible before they reached review.</div>
            </div>
            <div className="outcome-stat">
              <div className="ol">Spec questions in handoff · before / after</div>
              <div className="big">14 <em>→</em> 2</div>
              <div className="gloss">Per-week average. Engineers stopped asking &ldquo;what color is this?&rdquo; and started referencing the token by name. The token layer became a shared vocabulary.</div>
            </div>
          </div>

          <div className="outcome-list">
            <div className="ol-row">
              <div className="ol-l">Shipped</div>
              <div className="ol-t">18 tokens · <em>9 components</em></div>
              <div className="ol-d">Three-tier token system, nine components each with usage docs, do/don&rsquo;t examples, and a token reference list on its library page.</div>
            </div>
            <div className="ol-row">
              <div className="ol-l">Coverage</div>
              <div className="ol-t">3 surfaces · <em>78 screens</em></div>
              <div className="ol-d">Inbox, Threads, and the new Why ledger. All in-product surfaces; marketing site retained its standalone style for now.</div>
            </div>
            <div className="ol-row">
              <div className="ol-l">Time saved</div>
              <div className="ol-t">~2 days <em>per new screen</em></div>
              <div className="ol-d">Self-reported by the four designers building Q2 features. Most savings came from skipping the &ldquo;what colour / radius / spacing?&rdquo; loop with engineering.</div>
            </div>
            <div className="ol-row">
              <div className="ol-l">Drift after 3 months</div>
              <div className="ol-t"><em>Below noise.</em> 6 off-token layers</div>
              <div className="ol-d">Counted across all production files at the 90-day check-in. Each one had a documented reason. The structure held without a tool watching it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CH 08 · REFLECTIONS ── */}
      <section className="chapter rds-page">
        <div className="chapter-inner">
          <div className="lede">
            <div>
              <div className="kick"><span className="n">08</span> Reflections</div>
              <h2 className="chap-h">What I&rsquo;d keep, <em>and what I&rsquo;d do differently.</em></h2>
              <p className="chap-body">
                The honest debrief — not what I&rsquo;d say in a post-mortem to protect the project,
                but what I&rsquo;d actually change before starting again.
              </p>
            </div>
            <div className="col-r">
              <div className="think">
                <div className="blob">
                  <span className="blush l" />
                  <span className="blush r" />
                </div>
                <div className="think-note">
                  <span className="lbl">thinking</span>
                  <span className="said">Quality went up faster when the rules lived in pairings and structure, not in reviews. The system stopped being my thing.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reflect">
            <div className="reflect-col worked">
              <h4><span className="dot" />Worked — would do again</h4>
              <div className="reflect-item">
                <div className="t">Tokens <em>before</em> components.</div>
                <div className="d">Starting with the variable layer meant every component decision was already constrained. We never argued about whether a color was <em>right</em> — we argued about whether it needed a new token. That&rsquo;s a faster argument.</div>
              </div>
              <div className="reflect-item">
                <div className="t">The 3× rule on every component.</div>
                <div className="d">Keeping the library lean meant everything in it was actually used. No ghost components. No &ldquo;why is this here?&rdquo; in the audit. The library stayed at nine until evidence pushed it past nine.</div>
              </div>
              <div className="reflect-item">
                <div className="t">Naming as <em>documentation.</em></div>
                <div className="d">Following the UICollective convention meant component names were self-explanatory. <code>StatusBadge/live</code> needs no annotation. A new designer reads the layer name and already knows what it is.</div>
              </div>
              <div className="reflect-item">
                <div className="t">Building maintenance structure <em>into the deliverable.</em></div>
                <div className="d">The system would have drifted within a quarter without structural discipline. Naming, the 3× rule, and the docs ship-check keep drift visible without a separate tool watching it.</div>
              </div>
            </div>
            <div className="reflect-col killed">
              <h4><span className="dot" />Wouldn&rsquo;t ship again</h4>
              <div className="reflect-item">
                <div className="t">Token the motion layer <em>earlier.</em></div>
                <div className="d"><code>--dur-base</code> was added in week six. Animation values were hardcoded in four components before we caught it. The retrofit cost an afternoon; doing it on day one would have cost five minutes.</div>
              </div>
              <div className="reflect-item">
                <div className="t">Bring engineering into <em>token naming</em> from week one.</div>
                <div className="d">Several token names had to be renamed after handoff because they didn&rsquo;t match engineering&rsquo;s mental model. We added engineering as token reviewers from v3.1 onward.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT + UP NEXT + FOOTER ── */}
      <div className="rds-page" style={{ paddingTop: 40, paddingBottom: 40 }}>

        {/* Up next */}
        <div className="kick" style={{ marginTop: 80 }}><span className="n">→</span> Up next</div>
        <div className="up-next">
          <div className="next-card">
            <div className="nc-small">Case study · 01</div>
            <div className="nc-t">Why<span style={{ color: 'var(--g)' }}>.</span> <em>the decision ledger.</em></div>
            <div className="nc-d">Designing the core product experience for Relay — the async tool that replaces meeting culture with a living record of every decision.</div>
            <div className="nc-arr">Coming soon →</div>
          </div>
          <Link className="next-card" href="/projects/wud">
            <div className="nc-small">Case study · 03</div>
            <div className="nc-t">WUD<span style={{ color: 'var(--g)' }}>!</span> <em>one feed replaces four apps.</em></div>
            <div className="nc-d">Designing an accessible, sensory-aware learning tool for students with ADHD and autism spectrum traits.</div>
            <div className="nc-arr">Read the case →</div>
          </Link>
        </div>

      </div>

    </div>
  )
}
