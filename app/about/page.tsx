import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Shruthy Nair',
  description: 'Product designer with six years between the post-its and the pixel grid.',
}

export default function About() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="hero" style={{ paddingBottom: '60px' }}>
        <div className="hero-top">
          <span className="breadcrumb">
            <Link href="/">Shruthy Nair</Link>
            <span className="sep">/</span>
            <span>about</span>
          </span>
          <span
            className="availability"
            style={{ background: 'transparent', boxShadow: 'none', color: 'var(--ink-3)', padding: '0', borderRadius: '0' }}
          >
            <span className="pulse" />
            Available · summer 2026
          </span>
        </div>

        <div className="hero-grid">
          <div>
            <div className="hero-title-wrap" style={{ marginTop: 14, marginBottom: 24 }}>
              <span className="sel-tag">page/about</span>
              <h1 className="hero-title">
                Hey, I&rsquo;m<br />Shruthy<span className="hero-dot">.</span>
                <span className="ledger">— Product designer · six years between the post-its and the pixel grid.</span>
              </h1>
              <div className="sel-rect" style={{ bottom: 60 }} />
              <div className="sel-handle" style={{ top: 6, left: -30 }} />
              <div className="sel-handle" style={{ top: 6, right: -30 }} />
              <div className="sel-handle" style={{ bottom: 52, left: -30 }} />
              <div className="sel-handle" style={{ bottom: 52, right: -30 }} />
            </div>

            <p className="hero-lead">
              I work the part of the process between{' '}
              <em style={{ color: 'inherit' }}>&ldquo;we should fix this&rdquo;</em> and{' '}
              <em style={{ color: 'inherit' }}>&ldquo;ship it&rdquo;</em>{' '}
              — the part where the problem keeps changing shape on you.
            </p>
          </div>

          <aside className="id-card">
            <div className="id-top">
              <span className="lbl">ID card · /about</span>
              <span className="ver">v2026</span>
            </div>
            <div className="portrait">
              <span className="swatches">
                <span style={{ background: 'var(--p)' }} />
                <span style={{ background: 'var(--y)' }} />
                <span style={{ background: 'var(--g)' }} />
                <span style={{ background: 'var(--c)' }} />
              </span>
            </div>
            <div className="id-meta">
              <div className="id-row">
                <span className="k">Based in</span>
                <span className="v">Bangalore <em>· IN</em></span>
              </div>
              <div className="id-row">
                <span className="k">Currently</span>
                <span className="v">Relay <em>· Product</em></span>
              </div>
              <div className="id-row">
                <span className="k">Years in</span>
                <span className="v">~6 <em>shipping</em></span>
              </div>
              <div className="id-row">
                <span className="k">Pronouns</span>
                <span className="v">she/her</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Story ───────────────────────────────────────────────── */}
      <section className="body">
        <div className="section-head">
          <div className="left">
            <span className="section-num">§ 01</span>
            <span className="kicker"><span className="dot" />The story</span>
          </div>
          <div className="right">
            <h2 className="section-h2">
              I design for products where{' '}
              <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--ink-2)' }}>
                &ldquo;just figure it out&rdquo;
              </em>
              {' '}isn&rsquo;t an option.
            </h2>
          </div>
        </div>

        <div className="story">
          <div>
            <p>
              I spend my days designing for healthcare platforms, booking systems, and dev tools — products where the
              people using them are busy, stressed, and have <strong>actual work to do</strong>. My job is to get out
              of their way.
            </p>
            <p>
              I&rsquo;ve worked on teams of two and teams of twenty. I&rsquo;ve had access to endless user research
              and I&rsquo;ve had to make educated guesses with limited data. I&rsquo;ve worked within strict component
              libraries and I&rsquo;ve built design systems from scratch. What stays consistent is{' '}
              <strong>
                asking good questions, collaborating with people who know more than me, and shipping things that
                actually help
              </strong>.
            </p>
            <blockquote className="pullquote">
              The best designs feel obvious in hindsight — that&rsquo;s the whole job.
              <span className="who">— my one belief, scribbled in every notebook</span>
            </blockquote>
            <p>
              Currently I&rsquo;m at Relay working on a decision-capture tool for engineering teams. Before that,
              I spent almost two years at a salon-management platform helping stylists negotiate scheduling systems
              they had strong (and frequently loud) opinions about.
            </p>
            <p>
              When I&rsquo;m not designing, you&rsquo;ll find me thinking about why some interfaces feel intuitive
              and others make you want to throw your laptop out a window. Usually with coffee.
            </p>
          </div>

          <aside className="story-side">
            <div className="side-card belief">
              <div className="lbl">Lens</div>
              <div className="v">&ldquo;I want to design the thing that makes the spreadsheet unnecessary.&rdquo;</div>
            </div>
            <div className="side-card">
              <div className="lbl">Tools, daily</div>
              <div className="side-tools">
                <span className="tool">Figma</span>
                <span className="tool">FigJam</span>
                <span className="tool">Linear</span>
                <span className="tool">Notion</span>
                <span className="tool">Pen + paper</span>
              </div>
            </div>
            <div className="side-card">
              <div className="lbl">Reading right now</div>
              <div className="v"><em>&ldquo;Shape Up&rdquo;</em> — for the third time, mostly the appendix.</div>
            </div>
            <div className="side-card">
              <div className="lbl">Not in a CV</div>
              <div className="v">Trained as an architect. Still draws plans on receipts.</div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Principles ─────────────────────────────────────────── */}
      <section className="body">
        <div className="section-head">
          <div className="left">
            <span className="section-num">§ 02</span>
            <span className="kicker"><span className="dot" />How I work</span>
          </div>
          <div className="right">
            <h2 className="section-h2">Four principles I keep coming back to.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Not rules — habits. They show up most when the brief is foggy and the deadline is real.
            </p>
          </div>
        </div>

        <div className="principles-about">
          <div className="principle-card">
            <div className="top">
              <span className="num">01</span>
              <span className="swatch" style={{ background: 'var(--c)' }} />
            </div>
            <h3>Starting with <em>why</em>, not what.</h3>
            <p>
              Before jumping into wireframes, I want to understand what problem we&rsquo;re actually solving. The
              thing people ask for isn&rsquo;t always the thing they need. My favorite projects start with good
              questions and end with solutions that feel obvious in hindsight.
            </p>
          </div>

          <div className="principle-card">
            <div className="top">
              <span className="num">02</span>
              <span className="swatch" style={{ background: 'var(--y)' }} />
            </div>
            <h3>Designing for <em>real constraints</em>.</h3>
            <p>
              Perfect conditions don&rsquo;t exist. Budgets are tight, timelines are aggressive, legacy systems are
              messy, and sometimes you just can&rsquo;t talk to users directly. I&rsquo;m comfortable making smart
              decisions with imperfect information.
            </p>
          </div>

          <div className="principle-card">
            <div className="top">
              <span className="num">03</span>
              <span className="swatch" style={{ background: 'var(--g)' }} />
            </div>
            <h3>Collab over <em>hero design</em>.</h3>
            <p>
              The best work happens when designers, engineers, and product folks are actually talking to each other
              — not throwing things over the wall. I enjoy the back-and-forth of figuring out what&rsquo;s
              practical, what&rsquo;s possible, and what&rsquo;s going to create the most value.
            </p>
          </div>

          <div className="principle-card">
            <div className="top">
              <span className="num">04</span>
              <span className="swatch" style={{ background: 'var(--p)' }} />
            </div>
            <h3>Making the invisible <em>visible</em>.</h3>
            <p>
              The most impactful design work isn&rsquo;t always flashy — it&rsquo;s the progress indicator that
              keeps people oriented, the auto-save that prevents panic, the validation message that helps instead
              of just saying &ldquo;error.&rdquo; These details build trust.
            </p>
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────────────── */}
      <section className="body">
        <div className="section-head">
          <div className="left">
            <span className="section-num">§ 03</span>
            <span className="kicker"><span className="dot" />Timeline</span>
          </div>
          <div className="right">
            <h2 className="section-h2">Where I&rsquo;ve been.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Five stops, one straight line through products where the user has a job to do and not a lot of time
              to figure out the tool.
            </p>
          </div>
        </div>

        <div className="timeline">
          <div className="legend">
            <span className="kicker"><span className="dot" />Roles · 2019 – now</span>
            <div className="item">
              <span className="dot" style={{ background: 'var(--g)' }} />
              Current
            </div>
            <div className="item">
              <span
                className="dot"
                style={{ background: 'var(--paper)', boxShadow: '0 0 0 1.5px var(--ink)' }}
              />
              Past
            </div>
          </div>

          <div className="roles">
            <div className="role current">
              <div className="when">Sep &rsquo;25 – now</div>
              <h3>Relay <span className="now-tag">Current</span></h3>
              <div className="where">Product Designer · Decision capture for engineering teams</div>
              <p>
                Designing the moment between thinking and deciding. Three timing shapes — sync, async, scheduled —
                and figuring out which one a team actually wants when they say &ldquo;let&rsquo;s decide on
                this.&rdquo; Currently also leading the design system.
              </p>
            </div>

            <div className="role">
              <div className="when">Mar &rsquo;24 – Aug &rsquo;25</div>
              <h3>StyleBook</h3>
              <div className="where">Senior Product Designer · Salon-management platform</div>
              <p>
                Redesigned everything from appointment booking to inventory management. Worked directly with salon
                owners and stylists to understand their workflows, then rebuilt features to match how they actually
                work instead of how we thought they worked.
              </p>
            </div>

            <div className="role">
              <div className="when">Feb &rsquo;23 – Dec &rsquo;23</div>
              <h3>Northlight Consulting</h3>
              <div className="where">Design Lead · Enterprise discovery</div>
              <p>
                Led UX strategy and discovery for enterprise clients. Facilitated workshops with stakeholders who
                had very different ideas about what they were building, then helped everyone land on the same page.
                Also mentored junior designers, which taught me how to articulate my process instead of just doing it.
              </p>
            </div>

            <div className="role">
              <div className="when">Jan &rsquo;21 – Dec &rsquo;22</div>
              <h3>Homestead</h3>
              <div className="where">Product Designer · Co-living platform</div>
              <p>
                Joined when the product was technically functional but deeply confusing. Talked to users who were
                struggling, mapped where the interface was failing them, and redesigned the core experience to
                actually make sense. Also helped establish initial brand direction.
              </p>
            </div>

            <div className="role">
              <div className="when">2019 – 2020</div>
              <h3>Earlier — Studio &amp; freelance</h3>
              <div className="where">Junior – Mid · Various</div>
              <p>
                The &ldquo;trying everything&rdquo; years. Brand identity, packaging, a couple of websites
                I&rsquo;d rather not link, and the first time I had to use the words &ldquo;design system&rdquo;
                with a straight face.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ─────────────────────────────────────────── */}
      <section>
        <div className="footer-cta">
          <div className="inner">
            <span className="kicker">
              <span className="dot" />
              Let&rsquo;s talk · /contact
            </span>
            <h2>
              Let&rsquo;s<br />talk<span className="dot">.</span>
            </h2>
            <p className="sub">
              I&rsquo;m most energized by projects where I can dig into complex problems, collaborate with people
              who know more than me, and ship things that genuinely improve someone&rsquo;s day.
            </p>
            <div className="cta-row">
              <div className="btns">
                <a className="cta-btn" href="mailto:hello@shruthynair.com">
                  ✉&nbsp; hello@shruthynair.com
                </a>
                <a
                  className="cta-btn ghost"
                  href="https://linkedin.com/in/shruthynair"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <Link className="cta-btn ghost" href="/">
                  ← Back to work
                </Link>
              </div>
              <a className="subtle" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume.pdf ↗
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
