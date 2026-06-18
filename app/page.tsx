import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>

      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section className="intro" data-screen-label="Intro">

        <div className="entry-row">
          <div className="entry">
            <span className="greet">
              hi, i&rsquo;m <span className="mini-blob" aria-hidden="true" />
            </span>
            <h1 className="entry-name">Shruthy<span className="name-dot">.</span></h1>
            <p className="entry-lead">
              A product designer drawn to the <em>messy, human</em> end of the work &mdash; here&rsquo;s what&rsquo;s filling my head right now.
            </p>
            <span className="entry-avail">
              <span className="pulse" />
              Available for thoughtful projects
            </span>
          </div>

          <div className="entry-photo">
            <div className="photo-card">
              <Image
                src="/images/shruthy-profile.jpg"
                alt="Shruthy Nair, senior product designer"
                width={242}
                height={304}
                className="photo-img"
                priority
                sizes="242px"
              />
              <span className="cap">that&rsquo;s me &#x263A;</span>
            </div>
          </div>
        </div>

        <div className="now-strip" data-screen-label="Right now">
          <div className="now-label"><span className="now-dot" />right now</div>
          <div className="now-items">
            <div className="now-item">
              <span className="kk">&#128214; reading</span>
              <span className="vv">Mother Mary Comes to Me</span>
              <span className="mm">Arundhati Roy</span>
            </div>
            <div className="now-item">
              <span className="kk">
                &#127911; listening&nbsp;
                <span className="eq-mini" aria-hidden="true">
                  <span /><span /><span /><span />
                </span>
              </span>
              <span className="vv">Disney soundtracks</span>
              <span className="mm">on loop, no shame</span>
            </div>
            <div className="now-item">
              <span className="kk">&#9749; drinking</span>
              <span className="vv">Boba tea</span>
              <span className="mm">extra pearls, always</span>
            </div>
            <div className="now-item">
              <span className="kk">&#10024; obsessing over</span>
              <span className="vv">Empty states</span>
              <span className="mm">that don&rsquo;t feel empty</span>
            </div>
          </div>
        </div>

      </section>

      {/* ── Featured Works Heading ────────────────────────────────── */}
      <section className="works-head" id="work" data-screen-label="Featured works">
        <div className="explore">
          <span className="scribble">explore my work! <span>&#8628;</span></span>
        </div>
        <h2 className="works-title">FEATURED<br />WORKS</h2>
        <div>
          <span className="works-note">
            Three products &mdash; a consumer app, a team tool, and the system beneath them. Concept to ship, real users, real teams.
          </span>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────── */}
      <section data-screen-label="Projects" style={{ paddingTop: '56px' }}>
        <div className="projects">

          {/* 1) WUD! */}
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
                wud &middot; event/detail
              </div>
              <div className="mini-wud" aria-hidden="true">
                <div className="screen">
                  <div className="notch" />
                  <div className="w-status">
                    <span>9:41</span><span>&#9650;&#9650; &#9608;&#9608;</span>
                  </div>
                  <div className="w-top">
                    <span className="back">&#8592;</span>
                    <span className="more">&middot;&middot;&middot;</span>
                  </div>
                  <div className="w-hero">
                    <span className="tag">Sat &middot; Aug 16</span>
                    <span className="blob b1" />
                    <span className="blob b2" />
                  </div>
                  <div className="w-body">
                    <div className="w-title">Rooftop dinner<br />+ tiny disco</div>
                    <div className="w-when">
                      <span className="ico">&#128205;</span>
                      Maya&rsquo;s place &middot; 7pm
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
                  <div className="w-cta">I&rsquo;m in &#8594;</div>
                </div>
              </div>
              <div className="preview-pin" style={{ top: 48, right: 38 }}>
                <div className="pin-dot" style={{ background: 'var(--v)' }}>D</div>
                <div className="bubble">
                  <div className="who">Devon &middot; user 09</div>
                  &ldquo;finally &mdash; one tap instead of four apps&rdquo;
                </div>
              </div>
            </div>
            <div className="project-body">
              <span className="proj-num">01</span>
              <div className="proj-meta">
                <span className="tag-pill" style={{ background: 'var(--v)', color: 'var(--ink)' }}>
                  <span className="sw" style={{ background: '#6F4FE6' }} />Interaction design
                </span>
                <span>Personal</span>
                <span className="sep">&middot;</span>
                <span>2024 &mdash; 9 wk</span>
              </div>
              <h3 className="proj-title">WUD! <em>&mdash; Designing the social coordination layer.</em></h3>
              <p className="proj-summary">
                Discovery wasn&rsquo;t the bottleneck &mdash; coordination uncertainty was. I designed the behavioural system that moves people from interest to attendance, lifting{' '}
                <strong>coordination confidence 38 &rarr; 84%</strong>.
              </p>
              <div className="proj-facts">
                <div className="proj-fact"><span className="k">My role</span><span className="v">Interaction designer</span></div>
                <div className="proj-fact"><span className="k">Research</span><span className="v">70 <em>people</em></span></div>
                <div className="proj-fact"><span className="k">Outcome</span><span className="v">60 &rarr; 91%</span></div>
              </div>
              <span className="proj-cta" style={{ background: 'var(--v)', color: 'var(--ink)' }}>
                Read case study <span className="arrow">&#8594;</span>
              </span>
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
                <span>Relay</span>
                <span className="sep">&middot;</span>
                <span>2025 &mdash; 14 wk</span>
              </div>
              <h3 className="proj-title">Why<span style={{ color: 'var(--g)' }}>.</span>&nbsp;<em>The decision ledger.</em></h3>
              <p className="proj-summary">
                Engineering teams ship features but lose the <em>why</em> behind them. I designed a capture system that meets people in{' '}
                <strong>Slack, Figma, and the home feed</strong> &mdash; three timing shapes for one decision.
              </p>
              <div className="proj-facts">
                <div className="proj-fact"><span className="k">My role</span><span className="v">Product designer</span></div>
                <div className="proj-fact"><span className="k">Process</span><span className="v">13 <em>directions</em></span></div>
                <div className="proj-fact"><span className="k">Outcome</span><span className="v">3 <em>surfaces shipped</em></span></div>
              </div>
              <span className="proj-cta">Read case study <span className="arrow">&#8594;</span></span>
            </div>
            <div
              className="project-preview"
              style={{ background: 'linear-gradient(135deg, var(--g-2) 0%, #EAF8E0 100%)' }}
            >
              <div className="frame-label">
                <span className="dot" style={{ background: 'var(--g)' }} />
                relay &middot; /why
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
                    <div className="nav-ico">&#8863;</div>
                    <div className="nav-ico active">?</div>
                    <div className="nav-ico">&#8599;</div>
                    <div className="nav-ico">&#8987;</div>
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
                        <span style={{ marginLeft: 'auto' }}>infra &middot; 2d</span>
                      </div>
                      <div className="decision">Move onboarding email out of Mailchimp into Postmark.</div>
                      <div className="meta"><span className="av">M</span><span>Maya &middot; async</span></div>
                    </div>
                    <div className="dcard">
                      <div className="row1">
                        <span className="id"># 047</span>
                        <span className="pillet warn">Drafting</span>
                        <span style={{ marginLeft: 'auto' }}>product &middot; 5d</span>
                      </div>
                      <div className="decision">Audit log stays in Postgres for the rest of FY26.</div>
                    </div>
                    <div className="dcard">
                      <div className="row1">
                        <span className="id"># 046</span>
                        <span className="pillet">Shipped</span>
                        <span style={{ marginLeft: 'auto' }}>hiring &middot; 9d</span>
                      </div>
                      <div className="decision">Drop the system-design round for IC2 candidates.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="preview-pin" style={{ top: 64, right: 32 }}>
                <div className="pin-dot">M</div>
                <div className="bubble">
                  <div className="who">Maya &middot; PM</div>
                  this is the page I want to live in
                </div>
              </div>
            </div>
          </Link>

          {/* 3) RELAY DESIGN SYSTEM */}
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
                relay-ds &middot; /tokens
              </div>
              <div className="mini-ds">
                <div className="mds-head">
                  <div className="lbl">Token set &middot; <span className="v">brand / light</span></div>
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
                <div className="mds-section-lbl">Components &middot; <span className="v">button / input</span></div>
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
              <span className="proj-num">03</span>
              <div className="proj-meta">
                <span className="tag-pill" style={{ background: 'var(--y)', color: 'var(--ink)' }}>
                  <span className="sw" style={{ background: '#B58A00' }} />Design systems
                </span>
                <span>Relay</span>
                <span className="sep">&middot;</span>
                <span>2025 &mdash; ongoing</span>
              </div>
              <h3 className="proj-title">Relay DS <em>&mdash; tokens, components, contracts.</em></h3>
              <p className="proj-summary">
                A token architecture and <strong>47-component library</strong> three product squads ship from without stepping on each other. Built for direct-manipulation edits, dark-mode parity, and accessibility receipts.
              </p>
              <div className="proj-facts">
                <div className="proj-fact"><span className="k">My role</span><span className="v">Product designer</span></div>
                <div className="proj-fact"><span className="k">Scale</span><span className="v">47 <em>components</em></span></div>
                <div className="proj-fact"><span className="k">Adoption</span><span className="v">3 <em>squads</em></span></div>
              </div>
              <span className="proj-cta" style={{ background: 'var(--y)' }}>
                Read case study <span className="arrow">&#8594;</span>
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
            I do my best work on tangled, end-to-end problems &mdash; from first concept to shipped product, next to sharp engineers and with users in the loop the whole way. If you&rsquo;re building something people will actually live in, let&rsquo;s talk.
          </p>
        </div>
      </section>

    </main>
  )
}
