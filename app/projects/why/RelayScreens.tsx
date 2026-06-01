import { Ic, RAv, RelayWindow, RelaySidebar, RelayTopbar } from './RelayUI'

/* ─── Decision Detail — Variant A (Card stack) ───────────────── */
export function DecisionDetailA() {
  return (
    <RelayWindow>
      <RelaySidebar active="why" />
      <div className="r-main">
        <RelayTopbar
          crumbs={['Why', '№ 044', 'Address the reader as “you” across product surfaces']}
          actions={<>
            <button className="r-btn link"><Ic name="copy" /> Copy link</button>
            <button className="r-btn"><Ic name="edit" /> Revise</button>
            <button className="r-icon-btn"><Ic name="dots" /></button>
          </>}
        />
        <div className="r-content">
          <div className="r-content-main">
            <div className="r-head">
              <div className="r-numero-row">
                <span className="r-numero"><span className="nordic">№</span>044</span>
                <span className="r-numero-divider"></span>
                <span className="r-status-pill decided">Decided</span>
                <span className="r-tag-pill">brand</span>
                <span className="r-visibility-meta"><Ic name="globe" size={13} /> visible to workspace</span>
              </div>
              <h1 className="r-title">Address the reader as &ldquo;you&rdquo; across product surfaces</h1>
            </div>
            <div className="r-decision-card">
              <div className="r-decision-card-label"><Ic name="scales" size={13} /> The decision</div>
              <div className="r-decision-card-body">Product copy uses second-person singular. &ldquo;We&rdquo; is reserved for Relay-the-company speaking, never the product itself.</div>
            </div>
            <div className="r-block">
              <div className="r-block-head">
                <span className="r-block-label"><Ic name="feather" size={13} /> Rationale</span>
                <span className="r-block-sub">The reasoning, in the author&rsquo;s words</span>
              </div>
              <p className="r-rationale">Second person reads as a tool talking to its user, which is what Relay is. First-person plural sneaks in a presumed shared identity that we haven&rsquo;t earned and that distributed teams find slightly off. Audited 14 surfaces with &ldquo;we&rdquo; phrasing; rewriting to &ldquo;you&rdquo; made every one of them clearer.</p>
            </div>
            <div className="r-block">
              <div className="r-block-head">
                <span className="r-block-label"><Ic name="scales" size={13} /> Options considered</span>
                <span className="r-block-sub">2 weighed · 1 chosen</span>
              </div>
              <div className="r-options">
                <div className="r-option chosen">
                  <div className="r-option-dot"><Ic name="check" size={12} /></div>
                  <div className="r-option-body">
                    <div className="r-option-row"><span className="r-option-title">Second person</span><span className="r-option-tag">CHOSEN</span></div>
                    <div className="r-option-desc">Tool addressing user. Direct.</div>
                  </div>
                </div>
                <div className="r-option rejected">
                  <div className="r-option-dot"><Ic name="x" size={12} /></div>
                  <div className="r-option-body">
                    <div className="r-option-row"><span className="r-option-title">First-person plural</span></div>
                    <div className="r-option-desc">Implies a shared identity that doesn&rsquo;t fit async tooling.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="r-block">
              <div className="r-block-head">
                <span className="r-block-label"><Ic name="link" size={13} /> Linked context</span>
                <span className="r-block-sub">Where this came from</span>
              </div>
              <div className="r-ctx-list">
                <div className="r-ctx-item">
                  <div className="r-ctx-icon thread"><Ic name="thread-bubble" /></div>
                  <div className="r-ctx-body">
                    <div className="r-ctx-title">Brand voice — second-person everywhere?</div>
                    <div className="r-ctx-sub">#brand · Apr 5</div>
                  </div>
                  <span className="r-ctx-arrow"><Ic name="arrow-right" /></span>
                </div>
              </div>
            </div>
          </div>
          <aside className="r-rail">
            <div className="r-rail-block">
              <div className="r-rail-label">Decided by</div>
              <div className="r-rail-person"><RAv initials="PP" size="lg" color="#7a4a2b" /><div><div className="name">Priya Patel</div><div className="role">decision owner</div></div></div>
            </div>
            <div className="r-rail-block">
              <div className="r-rail-label">Stakeholders <span className="aux">kept in the loop</span></div>
              <div className="r-stake-chips">
                <span className="r-chip"><span className="chip-av">YO</span> You</span>
                <span className="r-chip"><span className="chip-av" style={{ background: '#1d5e3a' }}>NE</span> Nora</span>
              </div>
            </div>
            <div className="r-rail-block">
              <div className="r-rail-label">Decided</div>
              <div><div className="r-rail-date">Apr 8, 2026</div><div className="r-rail-date-sub">19 days ago</div></div>
            </div>
            <div className="r-rail-block">
              <div className="r-rail-label">Revisit by</div>
              <div className="r-rail-date-row"><Ic name="clock" /><span className="date-main">Apr 8, 2027</span><span className="date-aux">set aside</span></div>
            </div>
            <div className="r-rail-block">
              <div className="r-rail-label">Permalink</div>
              <div className="r-permalink">relay.team/why/044&#8209;second&#8209;person&#8209;copy<span className="copy"><Ic name="copy" size={13} /></span></div>
            </div>
          </aside>
        </div>
      </div>
    </RelayWindow>
  )
}

/* ─── Decision Detail — Variant B (Timeline) ─────────────────── */
export function DecisionDetailB() {
  return (
    <RelayWindow>
      <RelaySidebar active="why" />
      <div className="r-main">
        <RelayTopbar crumbs={['Why', '№ 044', 'Address the reader as “you” across product surfaces']} aside={<span className="r-aside-italic" style={{ marginLeft: 12 }}>· timeline view</span>} actions={<><button className="r-btn link"><Ic name="copy" /> Copy link</button><button className="r-btn"><Ic name="edit" /> Revise</button></>} />
        <div className="r-content no-rail">
          <div className="r-content-main">
            <div className="r-head">
              <div className="r-numero-row"><span className="r-numero"><span className="nordic">№</span>044</span><span className="r-numero-divider"></span><span className="r-status-pill decided">Decided</span><span className="r-tag-pill">brand</span></div>
              <h1 className="r-title" style={{ fontSize: 32 }}>Address the reader as &ldquo;you&rdquo; across product surfaces</h1>
            </div>
            <div className="r-timeline">
              {[
                { when: 'Apr 5 · spark', dot: false, content: <><p className="lead">Nora posted in #brand: &ldquo;Why do we say &lsquo;we&rsquo; in product? Sounds like a Slack channel, not a tool.&rdquo;</p><div className="r-ctx-item" style={{ maxWidth: 520 }}><div className="r-ctx-icon thread"><Ic name="thread-bubble" /></div><div className="r-ctx-body"><div className="r-ctx-title">Brand voice — second-person everywhere?</div><div className="r-ctx-sub">#brand · 14 replies</div></div></div></> },
                { when: 'Apr 6 · draft', dot: false, content: <p className="lead">Priya opened decision № 044 and weighed two options: second-person vs first-person plural.</p> },
                { when: 'Apr 7 · audit', dot: false, content: <p className="lead">Audited 14 product surfaces. Every &ldquo;we&rdquo; rewritten to &ldquo;you&rdquo; read clearer.</p> },
                { when: 'Apr 8 · decided', dot: true, content: <div className="r-decision-card" style={{ background: 'var(--r-card)' }}><div className="r-decision-card-label"><Ic name="scales" size={13} /> The decision</div><div className="r-decision-card-body">Product copy uses second-person singular. &ldquo;We&rdquo; is reserved for Relay-the-company speaking, never the product itself.</div></div> },
              ].map((row, i) => (
                <div key={i} className="r-timeline-row">
                  <div className="r-timeline-when">{row.when}</div>
                  <div className={`r-timeline-dot${row.dot ? ' now' : ''}`}></div>
                  <div className="r-timeline-content">{row.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RelayWindow>
  )
}

/* ─── Decision Detail — Variant C (Split view) ───────────────── */
export function DecisionDetailC() {
  return (
    <RelayWindow>
      <RelaySidebar active="why" />
      <div className="r-main">
        <RelayTopbar crumbs={['Why', '№ 044', 'Address the reader as “you” across product surfaces']} aside={<span className="r-aside-italic" style={{ marginLeft: 12 }}>· split view</span>} actions={<><button className="r-btn link"><Ic name="copy" /> Copy link</button><button className="r-btn"><Ic name="edit" /> Revise</button></>} />
        <div className="r-content no-rail">
          <div className="r-split">
            <div className="r-split-pane">
              <div className="r-head">
                <div className="r-numero-row"><span className="r-numero"><span className="nordic">№</span>044</span><span className="r-status-pill decided">Decided</span></div>
                <h2 className="r-title" style={{ fontSize: 26 }}>Address the reader as &ldquo;you&rdquo; across product surfaces</h2>
              </div>
              <div className="r-decision-card"><div className="r-decision-card-label"><Ic name="scales" size={13} /> The decision</div><div className="r-decision-card-body" style={{ fontSize: 15 }}>Product copy uses second-person singular. &ldquo;We&rdquo; is reserved for Relay-the-company speaking.</div></div>
              <p className="r-rationale" style={{ fontSize: 17 }}>Second person reads as a tool talking to its user. First-person plural sneaks in a presumed shared identity that we haven&rsquo;t earned.</p>
              <div className="r-option chosen" style={{ marginTop: 4 }}><div className="r-option-dot"><Ic name="check" size={12} /></div><div className="r-option-body"><div className="r-option-row"><span className="r-option-title">Second person</span><span className="r-option-tag">CHOSEN</span></div></div></div>
            </div>
            <div className="r-split-pane">
              <div className="r-split-tabs">
                <span className="r-split-tab active"><Ic name="thread-bubble" size={12} /> Slack thread</span>
                <span className="r-split-tab"><Ic name="cal" size={12} /> Brand sync notes</span>
              </div>
              <div className="r-block-head"><span className="r-block-label" style={{ fontSize: 11 }}>#brand · Apr 5</span><span className="r-block-sub" style={{ fontSize: 12 }}>Where this came from</span></div>
              <div className="r-thread">
                {[
                  { initials: 'NE', color: '#1d5e3a', name: 'Nora', time: 'Apr 5 · 11:14 AM', body: 'Why do we say “we” in product copy? Sounds like a Slack channel, not a tool.', pinned: '“rewriting to ‘you’ made every one of them clearer.” — pulled into rationale' },
                  { initials: 'PP', color: '#7a4a2b', name: 'Priya', time: 'Apr 5 · 11:31 AM', body: 'Going to audit our surfaces this week. Suspect “we” is hiding in 10+ places.' },
                  { initials: 'YO', color: '#3b6db5', name: 'You', time: 'Apr 5 · 1:02 PM', body: 'Counter: “we” reads warmer. But you’re right — async tools shouldn’t fake camaraderie.' },
                ].map((m, i) => (
                  <div key={i} className="r-thread-msg">
                    <RAv initials={m.initials} color={m.color} size="md" />
                    <div><div className="r-thread-meta"><span className="r-thread-name">{m.name}</span><span className="r-thread-time">{m.time}</span></div><div className="r-thread-body">{m.body}</div>{m.pinned && <div className="r-thread-pinned">{m.pinned}</div>}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RelayWindow>
  )
}

/* ─── Capture Screen 1 — empty modal ─────────────────────────── */
export function CaptureEmpty() {
  return (
    <RelayWindow>
      <RelaySidebar active="why" />
      <div className="r-main">
        <RelayTopbar crumbs={['Why', 'Capture a new decision']} aside={<span className="r-aside-italic" style={{ marginLeft: 12 }}>Untitled · just started</span>} actions={<button className="r-btn ghost"><Ic name="x" /></button>} />
        <div style={{ position: 'relative', flex: 1, padding: '12px 56px 40px' }}>
          <div style={{ opacity: 0.25, display: 'flex', flexDirection: 'column', gap: 24, filter: 'blur(0.4px)' }}>
            <div style={{ height: 38, width: '55%', background: 'var(--r-line)', borderRadius: 6 }}></div>
            <div style={{ height: 110, background: 'var(--r-card)', border: '1px solid var(--r-line)', borderLeft: '3px solid var(--r-green)', borderRadius: 8 }}></div>
            <div style={{ height: 180, background: 'var(--r-card)', border: '1px solid var(--r-line)', borderRadius: 8 }}></div>
            <div style={{ height: 140, background: 'var(--r-card)', border: '1px solid var(--r-line)', borderRadius: 8 }}></div>
          </div>
          <div className="r-modal-shell">
            <div className="r-modal">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="r-status-pill drafting">Drafting</span>
                <span className="r-aside-italic">this number is reserved when you save</span>
              </div>
              <h2 className="r-modal-title">What are we <em>deciding?</em></h2>
              <p className="r-modal-sub">Start with the question. Sources and options come next.</p>
              <input className="r-modal-input" defaultValue="Move the onboarding email out of Mailchimp" readOnly />
              <p className="r-aside-italic" style={{ fontSize: 13.5 }}>A clear question makes the &ldquo;why&rdquo; easier to find six months later.</p>
              <div className="r-modal-foot">
                <span className="kbd-hint"><kbd>⌘</kbd> <kbd>↵</kbd> to continue</span>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                  <button className="r-btn ghost">Cancel</button>
                  <button className="r-btn primary">Continue <Ic name="arrow-right" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RelayWindow>
  )
}

/* ─── Capture Screen 2 — pulling context ─────────────────────── */
export function CaptureImport() {
  const sources = [
    { icon: 'slack', label: 'SL', title: '#infra · Email infra — what’s actually transactional?', sub: 'Slack · 23 replies · last Tue', selected: true },
    { icon: 'slack', label: 'SL', title: '#growth · Onboarding deliverability spike', sub: 'Slack · 11 replies · Apr 18', selected: true },
    { icon: 'cal',   label: 'CA', title: 'Product review — Apr 24', sub: 'Calendar · 3 days ago · 8 attendees', selected: true },
    { icon: 'notion',label: 'NO', title: 'Lifecycle email RFC (v3)', sub: 'Notion · edited 2 days ago', selected: false },
    { icon: 'jira',  label: 'JI', title: 'GROW-1140 — Migrate to Postmark', sub: 'Jira · epic · 4 child tickets', selected: false },
    { icon: 'figma', label: 'FI', title: 'Onboarding email — visual audit', sub: 'Figma · 12 frames · last opened Apr 22', selected: false },
  ]
  return (
    <RelayWindow>
      <RelaySidebar active="why" />
      <div className="r-main">
        <RelayTopbar crumbs={['Why', 'Capture a new decision']} aside={<span className="r-aside-italic" style={{ marginLeft: 12 }}>Draft · pulling context</span>} actions={<><button className="r-btn">Save as draft</button><button className="r-btn primary"><Ic name="check" /> Save decision</button></>} />
        <div className="r-content no-rail">
          <div className="r-content-main">
            <div className="r-head">
              <div className="r-numero-row"><span className="r-numero"><span className="nordic">№</span>048</span><span className="r-numero-divider"></span><span className="r-status-pill drafting">Drafting</span></div>
              <h1 className="r-title" style={{ fontSize: 30 }}>Move the onboarding email out of Mailchimp</h1>
            </div>
            <div className="r-block">
              <div className="r-block-head"><span className="r-block-label"><Ic name="link" size={13} /> Pull context</span><span className="r-block-sub">Where does this conversation already live?</span></div>
              <div className="r-source-picker">
                {sources.map((s, i) => (
                  <div key={i} className={`r-source-row${s.selected ? ' selected' : ''}`}>
                    <div className={`r-source-icon ${s.icon}`}>{s.label}</div>
                    <div><div className="src-title">{s.title}</div><div className="src-sub">{s.sub}</div></div>
                    <div className="src-check">{s.selected && <Ic name="check" size={12} />}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="r-aside-italic" style={{ fontSize: 14 }}>3 sources selected · AI will draft a rationale from these</span>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                <button className="r-btn">Skip — write from scratch</button>
                <button className="r-btn primary">Continue to draft <Ic name="arrow-right" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RelayWindow>
  )
}

/* ─── Capture Screen 3 — full draft ──────────────────────────── */
export function CaptureCompose() {
  return (
    <RelayWindow>
      <RelaySidebar active="why" />
      <div className="r-main">
        <RelayTopbar crumbs={['Why', 'Capture a new decision']} aside={<span className="r-aside-italic" style={{ marginLeft: 12 }}>Draft · saves as you write</span>} actions={<><button className="r-btn">Save as draft</button><button className="r-btn primary"><Ic name="check" /> Save decision</button></>} />
        <div className="r-content">
          <div className="r-content-main">
            <div className="r-head">
              <div className="r-numero-row"><span className="r-numero"><span className="nordic">№</span>048</span><span className="r-numero-divider"></span><span className="r-status-pill drafting">Drafting</span><span className="r-aside-italic">this number is reserved when you save</span></div>
              <div><div className="r-title-label">Title</div><h1 className="r-title">Move the onboarding email out of Mailchimp</h1></div>
            </div>
            <div className="r-block">
              <div className="r-block-head"><span className="r-block-label"><Ic name="scales" size={13} /> The decision</span></div>
              <div className="r-rationale-input">Send onboarding from Relay&rsquo;s transactional email service. Decommission the Mailchimp automation by end of month.</div>
            </div>
            <div className="r-block">
              <div className="r-block-head">
                <span className="r-block-label"><Ic name="feather" size={13} /> Rationale</span>
                <button className="r-action-pill" style={{ marginLeft: 'auto' }}><span className="ico"><Ic name="spark" size={13} /></span>Draft from linked threads</button>
              </div>
              <div className="r-rationale-suggestion">
                <div className="r-suggestion-meta"><span className="spark"><Ic name="spark" size={14} /></span><strong>Suggested rationale</strong><span className="r-aside-italic">· based on 2 threads and yesterday&rsquo;s product review</span></div>
                <p className="r-rationale" style={{ fontSize: 18, lineHeight: 1.5 }}>Mailchimp&rsquo;s automation surface is fine for marketing but the onboarding sequence has drifted into transactional territory — password resets, workspace invites, two-factor codes. Keeping that in a marketing tool means our deliverability is bound to a different reputation than our product email. Moving onboarding to our own transactional service gives us tighter control over content, faster iteration, and one set of suppression rules instead of two.<span className="r-caret-bar"></span></p>
                <div className="r-suggestion-actions">
                  <button className="r-btn primary"><Ic name="check" /> Use as written</button>
                  <button className="r-btn"><Ic name="edit" /> Edit</button>
                  <button className="r-btn">Try again</button>
                  <span className="r-suggestion-foot">You write it. AI just gets you started.</span>
                </div>
              </div>
            </div>
            <div className="r-block">
              <div className="r-block-head"><span className="r-block-label"><Ic name="scales" size={13} /> Options considered</span><span className="r-block-sub">What else did the team weigh?</span></div>
              <div className="r-options">
                <div className="r-option chosen"><div className="r-option-dot"><Ic name="check" size={12} /></div><div className="r-option-body"><div className="r-option-row"><span className="r-option-title">Bring onboarding email in-house</span><span className="r-option-tag">CHOSEN</span></div><div className="r-option-desc">Tight control, single deliverability story, faster iteration.</div></div></div>
                <div className="r-option"><div className="r-option-dot"></div><div className="r-option-body"><div className="r-option-row"><span className="r-option-title">Stay on Mailchimp</span></div><div className="r-option-desc">Zero migration cost. Keeps two reputations to manage.</div></div></div>
                <div className="r-option"><div className="r-option-dot"></div><div className="r-option-body"><div className="r-option-row"><span className="r-option-title">Move to Postmark, leave marketing on Mailchimp</span></div><div className="r-option-desc">Cleaner split but a third vendor to maintain.</div></div></div>
                <button className="r-add-option"><Ic name="plus" size={13} /> Add an option you considered</button>
              </div>
            </div>
            <div className="r-block">
              <div className="r-block-head"><span className="r-block-label"><Ic name="link" size={13} /> Linked context</span><span className="r-block-sub">AI found these — confirm or remove</span></div>
              <div className="r-ctx-list">
                {[
                  { icon: 'thread', ic: 'thread-bubble', title: 'Email infra — what’s actually transactional?', sub: '#infra · last Tue' },
                  { icon: 'thread', ic: 'thread-bubble', title: 'Onboarding deliverability spike', sub: '#growth · Apr 18' },
                  { icon: 'cal',   ic: 'cal',           title: 'Product review — Apr 24',       sub: '3 days ago' },
                ].map((ctx, i) => (
                  <div key={i} className="r-ctx-item">
                    <div className={`r-ctx-icon ${ctx.icon}`}><Ic name={ctx.ic} /></div>
                    <div className="r-ctx-body"><div className="r-ctx-title">{ctx.title}</div><div className="r-ctx-sub">{ctx.sub}</div></div>
                    <div className="r-ctx-actions"><span className="r-ctx-suggested"><Ic name="spark" size={11} /> suggested</span><button className="r-ctx-keep"><Ic name="check" size={12} /> Keep</button><span className="r-ctx-dismiss"><Ic name="x" /></span></div>
                  </div>
                ))}
              </div>
              <div className="r-link-add"><span className="plus"><Ic name="plus" size={11} /></span>Link a thread, message, or meeting</div>
            </div>
          </div>
          <aside className="r-rail">
            <div className="r-rail-block">
              <div className="r-rail-label">Decided by</div>
              <div className="r-rail-person"><RAv initials="YO" size="lg" /><div><div className="name">You</div><div className="role">add a co-decider</div></div></div>
              <button className="r-chip-add" style={{ width: 'fit-content' }}><Ic name="plus" size={11} /> Co-decider</button>
            </div>
            <div className="r-rail-block">
              <div className="r-rail-label">Stakeholders <span className="aux">who should know</span></div>
              <div className="r-stake-chips">
                <span className="r-chip x"><span className="chip-av">AK</span> Aki <Ic name="x" size={10} /></span>
                <span className="r-chip x"><span className="chip-av" style={{ background: '#7a4a2b' }}>DR</span> Diego <Ic name="x" size={10} /></span>
                <button className="r-chip-add"><Ic name="plus" size={11} /> add</button>
              </div>
            </div>
            <div className="r-rail-block">
              <div className="r-rail-label">Area</div>
              <div className="r-stake-chips">
                <span className="r-tag-pill area selected">infra</span>
                <span className="r-tag-pill area-soft">product</span>
                <span className="r-tag-pill area-soft">growth</span>
                <span className="r-tag-pill area-soft">brand</span>
              </div>
            </div>
            <div className="r-rail-block">
              <div className="r-rail-label">Revisit by</div>
              <div className="r-rail-date-row"><Ic name="cal" /><span className="date-main">Oct 27, 2026</span><span className="date-aux">+6 months</span></div>
            </div>
            <div className="r-rail-block">
              <div className="r-rail-label">Visibility</div>
              <div className="r-vis-list">
                <div className="r-vis-item selected"><span className="r-vis-radio"></span><span className="ico-vis"><Ic name="globe" size={13} /></span><span className="lbl">Workspace</span><span className="sub">Anyone at relay.team</span></div>
                <div className="r-vis-item"><span className="r-vis-radio"></span><span className="ico-vis"><Ic name="team" size={13} /></span><span className="lbl">Team</span><span className="sub">Only #infra</span></div>
                <div className="r-vis-item"><span className="r-vis-radio"></span><span className="ico-vis"><Ic name="lock" size={13} /></span><span className="lbl">Private</span><span className="sub">Only invited people</span></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </RelayWindow>
  )
}

/* ─── Context Panel — Slack inline ───────────────────────────── */
export function ContextPanelSlack() {
  const msgs = [
    { initials: 'NE', color: '#1d5e3a', name: 'Nora',  time: 'Apr 5 · 11:14 AM', body: 'Why do we say “we” in product copy? Sounds like a Slack channel, not a tool. The onboarding modal: “we’ll get you set up.” Who is “we”?', pinned: true },
    { initials: 'PP', color: '#7a4a2b', name: 'Priya', time: 'Apr 5 · 11:31 AM', body: 'Going to audit our surfaces this week. Suspect “we” is hiding in 10+ places.', pinned: false },
    { initials: 'YO', color: '#3b6db5', name: 'You',   time: 'Apr 5 · 1:02 PM',  body: 'Counter: “we” reads warmer. But you’re right — async tools shouldn’t fake camaraderie.', pinned: false },
    { initials: 'PP', color: '#7a4a2b', name: 'Priya', time: 'Apr 7 · 9:48 AM',  body: 'Audited. 14 surfaces. Rewriting to “you” made every one of them clearer. Opening a decision.', pinned: true },
    { initials: 'PP', color: '#7a4a2b', name: 'Priya', time: 'Apr 7 · 9:52 AM',  body: 'relay.team/why/044 — please review by EOW.', pinned: true },
  ]
  return (
    <RelayWindow>
      <RelaySidebar active="why" />
      <div className="r-main">
        <RelayTopbar crumbs={['Why', '№ 044', 'Linked context']} actions={<><button className="r-btn link"><Ic name="copy" /> Copy link</button><button className="r-btn">Open in Slack ↗</button></>} />
        <div className="r-content no-rail">
          <div className="r-content-main">
            <div className="r-head">
              <div className="r-numero-row"><span className="r-numero"><span className="nordic">№</span>044</span><span className="r-numero-divider"></span><span className="r-status-pill decided">Decided</span><span className="r-aside-italic">· viewing linked thread inline</span></div>
              <h1 className="r-title" style={{ fontSize: 30 }}>The thread that <em style={{ fontFamily: 'var(--wy-serif)', fontStyle: 'italic', color: 'var(--r-green-ink)' }}>started</em> it.</h1>
              <p className="r-aside-italic" style={{ fontSize: 15 }}>Pulled from #brand on Apr 5. The original 14-reply thread, preserved inline. Three replies were pinned into the decision&rsquo;s rationale.</p>
            </div>
            <div style={{ background: 'var(--r-card)', border: '1px solid var(--r-line)', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderBottom: '1px solid var(--r-line-soft)', background: 'var(--r-card-soft)' }}>
                <div className="r-source-icon slack" style={{ width: 28, height: 28, fontSize: 10 }}>SL</div>
                <div style={{ flex: 1 }}><div style={{ fontSize: 14, fontWeight: 600, color: 'var(--r-ink)' }}>#brand · brand voice — second-person everywhere?</div><div style={{ fontSize: 12, color: 'var(--r-muted)', fontFamily: 'var(--wy-mono)' }}>14 replies · 6 people · last activity Apr 7</div></div>
                <span className="r-status-pill decided" style={{ fontSize: 11 }}>3 messages pinned</span>
              </div>
              <div style={{ padding: '8px 20px' }}>
                <div className="r-thread">
                  {msgs.map((m, i) => (
                    <div key={i} className="r-thread-msg" style={m.pinned ? { background: 'var(--r-green-soft)', margin: '6px -12px', padding: '10px 12px', borderRadius: 8 } : undefined}>
                      <RAv initials={m.initials} color={m.color} size="md" />
                      <div>
                        <div className="r-thread-meta">
                          <span className="r-thread-name">{m.name}</span><span className="r-thread-time">{m.time}</span>
                          {m.pinned && <span className="r-ctx-suggested" style={{ marginLeft: 8 }}><Ic name="spark" size={10} /> pinned</span>}
                        </div>
                        <div className="r-thread-body">{m.body}</div>
                      </div>
                    </div>
                  ))}
                  <div style={{ textAlign: 'center', color: 'var(--r-faint)', fontFamily: 'var(--wy-serif)', fontStyle: 'italic', fontSize: 13, padding: '10px 0 6px' }}>— 9 more replies preserved —</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: 'var(--r-green-soft)', border: '1px solid #8fcfa1', borderRadius: 10 }}>
              <div className="r-source-icon" style={{ background: 'var(--r-green)', color: '#fff' }}>W</div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 11.5, color: 'var(--r-green-2)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>This thread became</div><div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--r-ink)' }}>№ 044 — Address the reader as &ldquo;you&rdquo; across product surfaces</div></div>
              <button className="r-btn primary">Open decision <Ic name="arrow-right" /></button>
            </div>
          </div>
        </div>
      </div>
    </RelayWindow>
  )
}

/* ─── Context Panel — Figma inline ───────────────────────────── */
export function ContextPanelFigma() {
  const surfaces = [
    ['Onboarding modal', 'We’ll get you set up', 'You’re set up. Add a team to start.'],
    ['Empty inbox', 'We don’t see anything yet', 'No decisions in your inbox yet.'],
    ['Permission denied', 'We can’t show you this', 'You don’t have access to this decision.'],
    ['Saved confirmation', 'We’ve saved your changes', 'Saved. Closing now.'],
  ]
  const comments = [
    { name: 'Nora', color: '#1d5e3a', initials: 'NE', text: 'Confirmed across all 14. Second-person never made anything worse.' },
    { name: 'Priya', color: '#7a4a2b', initials: 'PP', text: '"Saved" with no actor is fine. Don\'t add "you" where there\'s nothing to say to.' },
    { name: 'You', color: '#3b6db5', initials: 'YO', text: 'Changed my mind. Pinning this thread into the decision rationale.' },
    { name: 'Nora', color: '#1d5e3a', initials: 'NE', text: 'Decision opened — № 044. Closing this comment.' },
  ]
  return (
    <RelayWindow>
      <RelaySidebar active="why" />
      <div className="r-main">
        <RelayTopbar crumbs={['Why', '№ 044', 'Linked context · Figma']} actions={<button className="r-btn">Open in Figma ↗</button>} />
        <div className="r-content no-rail">
          <div className="r-content-main">
            <div className="r-head">
              <div className="r-numero-row"><span className="r-numero"><span className="nordic">№</span>044</span><span className="r-numero-divider"></span><span className="r-status-pill decided">Decided</span><span className="r-aside-italic">· viewing linked Figma frame inline</span></div>
              <h1 className="r-title" style={{ fontSize: 30 }}>The audit that <em style={{ fontFamily: 'var(--wy-serif)', fontStyle: 'italic', color: 'var(--r-green-ink)' }}>proved</em> it.</h1>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 14 }}>
              <div style={{ background: 'var(--r-card)', border: '1px solid var(--r-line)', borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: '1px solid var(--r-line-soft)' }}>
                  <div className="r-source-icon figma" style={{ width: 22, height: 22, fontSize: 9 }}>FI</div>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>Brand voice — surface audit</span>
                  <span style={{ marginLeft: 'auto', fontFamily: 'var(--wy-mono)', fontSize: 11, color: 'var(--r-muted)' }}>v3 · 14 surfaces</span>
                </div>
                <div style={{ background: '#f6f4ef', padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {surfaces.map(([label, before, after], i) => (
                    <div key={i} style={{ background: '#fff', border: '1px solid var(--r-line)', borderRadius: 6, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10.5, fontFamily: 'var(--wy-mono)', color: 'var(--r-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
                      <div style={{ fontSize: 12.5, color: 'var(--r-rose)', textDecoration: 'line-through', marginBottom: 4 }}>&ldquo;{before}&rdquo;</div>
                      <div style={{ fontSize: 12.5, color: 'var(--r-green-2)', fontWeight: 500 }}>&ldquo;{after}&rdquo;</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div className="r-block-label" style={{ fontSize: 11 }}>Frame comments</div>
                {comments.map((c, i) => (
                  <div key={i} className="r-ctx-item" style={{ padding: 12 }}>
                    <RAv initials={c.initials} color={c.color} size="sm" />
                    <div className="r-ctx-body"><div className="r-ctx-title" style={{ fontSize: 13, whiteSpace: 'normal' }}>{c.text}</div><div className="r-ctx-sub" style={{ fontFamily: 'var(--wy-sans)' }}>{c.name} · Apr 6</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: 'var(--r-green-soft)', border: '1px solid #8fcfa1', borderRadius: 10 }}>
              <div className="r-source-icon" style={{ background: 'var(--r-green)', color: '#fff' }}>W</div>
              <div style={{ flex: 1 }}><div style={{ fontSize: 11.5, color: 'var(--r-green-2)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>This audit became</div><div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--r-ink)' }}>№ 044 — Address the reader as &ldquo;you&rdquo; across product surfaces</div></div>
              <button className="r-btn primary">Open decision <Ic name="arrow-right" /></button>
            </div>
          </div>
        </div>
      </div>
    </RelayWindow>
  )
}
