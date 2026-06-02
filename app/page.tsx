import Link from 'next/link'
import HeroClock from '@/components/HeroClock'

export default function Home() {
  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="hero" data-screen-label="Hero">
        <HeroClock />

        <div className="note left">
          <span className="k">Currently</span>
          Consolidating several design systems into one scalable framework
        </div>
        <div className="note right">
          <span className="k">Focus</span>
          Accessibility-first UI &mdash; <strong>WCAG &amp; ADA</strong> built into every component
        </div>

        <div className="hero-mascot" aria-hidden="true">
          <span className="wave">hi! ✿</span>
          <div className="blob">
            <span className="blush l" />
            <span className="blush r" />
          </div>
        </div>

        <div className="kicker-wrap">
          <span className="hero-badge">Product Designer</span>
        </div>

        <div className="name-wrap">
          <span className="sel-tag" style={{ fontFamily: 'var(--mono)' }}>page/hero</span>
          <h1 className="hero-name">Shruthy</h1>
          <div className="sel-rect" />
          <span className="sel-handle" style={{ top: 0, left: -16 }} />
          <span className="sel-handle" style={{ top: 0, right: -16 }} />
          <span className="sel-handle" style={{ bottom: 8, left: -16 }} />
          <span className="sel-handle" style={{ bottom: 8, right: -16 }} />
        </div>

        <div>
          <span className="hero-avail">
            <span className="pulse" />
            Available for thoughtful projects
          </span>
        </div>

        <a className="contact-me" href="#contact">
          <span className="ic">→</span>
          Contact me
        </a>

        <svg
          className="arc"
          viewBox="0 0 1200 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 86 C 360 6, 840 6, 1200 86" />
        </svg>
      </section>

      {/* ── What's Up / About ─────────────────────────────────────── */}
      <section className="whatsup" id="about" data-screen-label="About">
        <div style={{ marginBottom: 14 }}>
          <span className="scribble">about me! <span>↓</span></span>
        </div>
        <span className="tab"><span className="dot" />what&rsquo;s up</span>
        <p className="about-line">
          I&rsquo;m Shruthy <span className="emo">🎨</span> a product designer who gets a little
          too <em>excited</em> <span className="emo">✨</span> about the whole journey — from
          untangling messy, undefined problems with research and real users, to
          building systems that feel <em>simple</em>, consistent, and usable
          for everyone <span className="emo">🐸</span>
        </p>
        <div className="skills">
          <span className="skill" style={{ '--rot': '-2deg', background: 'var(--y-2)' } as React.CSSProperties}>
            <span className="gem" style={{ background: 'var(--y)' }} />
            Design Systems
          </span>
          <span className="skill" style={{ '--rot': '1.5deg', background: 'var(--c-2)' } as React.CSSProperties}>
            <span className="gem" style={{ background: 'var(--c)' }} />
            Component Libraries
          </span>
          <span className="skill" style={{ '--rot': '-1deg', background: 'var(--p-2)' } as React.CSSProperties}>
            <span className="gem" style={{ background: 'var(--p)' }} />
            Accessibility
          </span>
          <span className="skill" style={{ '--rot': '2deg', background: 'var(--g-2)' } as React.CSSProperties}>
            <span className="gem" style={{ background: 'var(--g)' }} />
            Interaction Design
          </span>
        </div>
      </section>

      {/* ── Featured Works Heading ────────────────────────────────── */}
      <section className="works-head" id="work" data-screen-label="Featured works">
        <div className="explore">
          <span className="scribble">explore my work! <span>↴</span></span>
        </div>
        <h2 className="works-title">FEATURED<br />WORKS</h2>
        <div>
          <span className="works-note">
            Three places where scattered, inconsistent interfaces became one system teams could actually build on — real surfaces, real teams.
          </span>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────── */}
      <section data-screen-label="Projects" style={{ paddingTop: '20px' }}>
        <div className="projects">

          {/* 1) RELAY DESIGN SYSTEM */}
          <Link
            href="/projects/relay-design-system"
            className="project"
            style={{ '--accent': 'var(--y)' } as React.CSSProperties}
            data-screen-label="Project — Relay DS"
          >
            <div
              className="project-preview"
              style={{ background: 'linear-gradient(135deg, var(--y-2) 0%, #FFF8C8 100%)' }}
            >
              <div className="frame-label">
                <span className="dot" style={{ background: 'var(--y)' }} />
                relay-ds · /tokens
              </div>
              <div className="mini-ds">
                <div className="mds-head">
                  <div className="lbl">Token set · <span className="v">brand / light</span></div>
                  <div className="ver">v3.2</div>
                </div>
                <div className="mds-tokens">
                  <div className="mds-token"><div className="sw" style={{ background: '#2DA169' }} /><div className="nm"><span className="h">brand</span>900</div></div>
                  <div className="mds-token"><div className="sw" style={{ background: '#1A2638' }} /><div className="nm"><span className="h">ink</span>900</div></div>
                  <div className="mds-token"><div className="sw" style={{ background: '#4E657A' }} /><div className="nm"><span className="h">ink</span>600</div></div>
                  <div className="mds-token"><div className="sw" style={{ background: '#D4DCE6' }} /><div className="nm"><span className="h">line</span>300</div></div>
                  <div className="mds-token"><div className="sw" style={{ background: '#FAFBFC' }} /><div className="nm"><span className="h">surf</span>100</div></div>
                  <div className="mds-token"><div className="sw" style={{ background: '#C68A1F' }} /><div className="nm"><span className="h">warn</span>700</div></div>
                </div>
                <div className="mds-section-lbl">Components · <span className="v">button / input</span></div>
                <div className="mds-buttons">
                  <span className="mds-btn primary">Save changes</span>
                  <span className="mds-btn ghost">Cancel</span>
                  <span className="mds-btn subtle">Later</span>
                  <span className="mds-btn danger">Delete</span>
                </div>
                <div className="mds-input focused">team-name.relay.team</div>
                <div className="mds-input">Add a teammate by email</div>
                <div className="mds-foot">
                  <div className="stat"><span className="n">47</span>components</div>
                  <div className="stat"><span className="n">312</span>tokens</div>
                  <div className="stat"><span className="n">AA</span>contrast min</div>
                </div>
              </div>
            </div>
            <div className="project-body">
              <span className="proj-num">01</span>
              <div className="proj-meta">
                <span className="tag-pill" style={{ background: 'var(--y)', color: 'var(--ink)' }}>
                  <span className="sw" style={{ background: '#B58A00' }} />Design systems
                </span>
                <span>Relay</span><span className="sep">·</span><span>2025 — ongoing</span>
              </div>
              <h3 className="proj-title">Relay DS <em>— tokens, components, contracts.</em></h3>
              <p className="proj-summary">
                A token architecture and <strong>47-component library</strong> three product squads ship from without stepping on each other. Built for direct-manipulation edits, dark-mode parity, and accessibility receipts.
              </p>
              <div className="proj-facts">
                <div className="proj-fact"><span className="k">My role</span><span className="v">Product designer</span></div>
                <div className="proj-fact"><span className="k">Scale</span><span className="v">47 <em>components</em></span></div>
                <div className="proj-fact"><span className="k">Adoption</span><span className="v">3 <em>squads</em></span></div>
              </div>
              <span className="proj-cta" style={{ background: 'var(--y)' }}>Read case study <span className="arrow">→</span></span>
            </div>
          </Link>

          {/* 2) WHY */}
          <Link
            href="/projects/why"
            className="project flip"
            style={{ '--accent': 'var(--g)' } as React.CSSProperties}
            data-screen-label="Project — Why"
          >
            <div className="project-body">
              <span className="proj-num">02</span>
              <div className="proj-meta">
                <span className="tag-pill"><span className="sw" style={{ background: 'var(--g)' }} />Feature design</span>
                <span>Relay</span><span className="sep">·</span><span>2025 — 14 wk</span>
              </div>
              <h3 className="proj-title">Why<span style={{ color: 'var(--g)' }}>.</span> &nbsp;<em>The decision ledger.</em></h3>
              <p className="proj-summary">
                Engineering teams ship features but lose the <em>why</em> behind them. I designed a capture system that meets people in{' '}
                <strong>Slack, Figma, and the home feed</strong> — three timing shapes for one decision.
              </p>
              <div className="proj-facts">
                <div className="proj-fact"><span className="k">My role</span><span className="v">Product designer</span></div>
                <div className="proj-fact"><span className="k">Process</span><span className="v">13 <em>directions</em></span></div>
                <div className="proj-fact"><span className="k">Outcome</span><span className="v">3 <em>surfaces shipped</em></span></div>
              </div>
              <span className="proj-cta">Read case study <span className="arrow">→</span></span>
            </div>
            <div
              className="project-preview"
              style={{ background: 'linear-gradient(135deg, var(--g-2) 0%, #EAF8E0 100%)' }}
            >
              <div className="frame-label">
                <span className="dot" style={{ background: 'var(--g)' }} />
                relay · /why
              </div>
              <div className="mini-relay">
                <div className="mr-chrome">
                  <div className="dots">
                    <span className="r" /><span className="y" /><span className="g" />
                  </div>
                  <div className="url">
                    <span style={{ color: 'var(--r-text-3)' }}>relay.team</span>
                    <span className="path">/why</span>
                  </div>
                </div>
                <div className="mr-body">
                  <div className="mr-side">
                    <div className="ws-mark">R</div>
                    <div className="nav-ico">⊟</div>
                    <div className="nav-ico active">?</div>
                    <div className="nav-ico">↗</div>
                    <div className="nav-ico">⏱</div>
                  </div>
                  <div className="mr-main">
                    <div className="mr-bar">
                      <div className="ttl"><em>Why</em> Decisions</div>
                      <div className="new">+ New</div>
                    </div>
                    <div className="dcard">
                      <div className="row1">
                        <span className="id"># 048</span>
                        <span className="pillet">Shipped</span>
                        <span style={{ marginLeft: 'auto' }}>infra · 2d</span>
                      </div>
                      <div className="decision">Move onboarding email out of Mailchimp into Postmark.</div>
                      <div className="meta"><span className="av">M</span><span>Maya · async</span></div>
                    </div>
                    <div className="dcard">
                      <div className="row1">
                        <span className="id"># 047</span>
                        <span className="pillet warn">Drafting</span>
                        <span style={{ marginLeft: 'auto' }}>product · 5d</span>
                      </div>
                      <div className="decision">Audit log stays in Postgres for the rest of FY26.</div>
                    </div>
                    <div className="dcard">
                      <div className="row1">
                        <span className="id"># 046</span>
                        <span className="pillet">Shipped</span>
                        <span style={{ marginLeft: 'auto' }}>hiring · 9d</span>
                      </div>
                      <div className="decision">Drop the system-design round for IC2 candidates.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="preview-pin" style={{ top: 64, right: 32 }}>
                <div className="pin-dot">M</div>
                <div className="bubble">
                  <div className="who">Maya · PM</div>
                  this is the page I want to live in
                </div>
              </div>
            </div>
          </Link>

          {/* 3) WUD! */}
          <Link
            href="/projects/wud"
            className="project"
            style={{ '--accent': 'var(--v)' } as React.CSSProperties}
            data-screen-label="Project — WUD"
          >
            <div
              className="project-preview"
              style={{ background: 'linear-gradient(135deg, var(--v-2) 0%, #F2E6FF 100%)' }}
            >
              <div className="frame-label">
                <span className="dot" style={{ background: 'var(--v)' }} />
                wud · event/detail
              </div>
              <div className="mini-wud" aria-hidden="true">
                <div className="screen">
                  <div className="notch" />
                  <div className="w-status">
                    <span>9:41</span><span>▲▲ ██</span>
                  </div>
                  <div className="w-top">
                    <span className="back">←</span>
                    <span className="more">···</span>
                  </div>
                  <div className="w-hero">
                    <span className="tag">Sat · Aug 16</span>
                    <span className="blob b1" />
                    <span className="blob b2" />
                  </div>
                  <div className="w-body">
                    <div className="w-title">Rooftop dinner<br />+ tiny disco</div>
                    <div className="w-when">
                      <span className="ico">📍</span>
                      Maya&rsquo;s place · 7pm
                    </div>
                    <div className="w-friends">
                      <span className="avs">
                        <span className="av">M</span>
                        <span className="av pk">D</span>
                        <span className="av cm">P</span>
                        <span className="av">+4</span>
                      </span>
                      <span>7 friends in</span>
                    </div>
                  </div>
                  <div className="w-cta">I&rsquo;m in →</div>
                </div>
              </div>
              <div className="preview-pin" style={{ top: 48, right: 38 }}>
                <div className="pin-dot" style={{ background: 'var(--v)' }}>D</div>
                <div className="bubble">
                  <div className="who">Devon · user 09</div>
                  &ldquo;finally — one tap instead of four apps&rdquo;
                </div>
              </div>
            </div>
            <div className="project-body">
              <span className="proj-num">03</span>
              <div className="proj-meta">
                <span className="tag-pill" style={{ background: 'var(--v)', color: 'var(--ink)' }}>
                  <span className="sw" style={{ background: '#6F4FE6' }} />Product design
                </span>
                <span>Personal</span><span className="sep">·</span><span>2024 — 9 wk</span>
              </div>
              <h3 className="proj-title">WUD! <em>— Reimagining the social event lifecycle.</em></h3>
              <p className="proj-summary">
                Four apps replaced with one. A journey-map pivot that lifted{' '}
                <strong>Create Event completion 60 → 91%</strong> in usability testing.
              </p>
              <div className="proj-facts">
                <div className="proj-fact"><span className="k">My role</span><span className="v">Solo designer</span></div>
                <div className="proj-fact"><span className="k">Research</span><span className="v">14 <em>interviews</em></span></div>
                <div className="proj-fact"><span className="k">Outcome</span><span className="v">60 → 91%</span></div>
              </div>
              <span className="proj-cta" style={{ background: 'var(--v)', color: 'var(--ink)' }}>
                Read case study <span className="arrow">→</span>
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* ── Let's Chat ────────────────────────────────────────────── */}
      <section className="letschat" data-screen-label="Let's chat">
        <div className="lc-text">
          <h2 className="lc-big">LET&rsquo;S <span className="ghost">CHAT</span></h2>
          <p>
            I do my best work on tangled, systems-level problems — working closely with engineering, product, and research partners, with a stubborn bar for craft, accessibility, and making complex products feel effortlessly clear. If you&rsquo;re building something that has to scale and serve every kind of user, let&rsquo;s talk.
          </p>
        </div>
      </section>

    </main>
  )
}
