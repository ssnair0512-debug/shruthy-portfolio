import { Ic } from './RelayUI'

/* ─── Lifecycle diagram ───────────────────────────────────────── */
export function JourneyDiagram() {
  const stages = [
    { n: '01', stage: 'Spark',     via: 'via Slack',       desc: 'Quick message\nin a channel',       loss: 'Dies under 200\nnewer messages',      red: false },
    { n: '02', stage: 'Debate',    via: 'via Zoom',        desc: 'Verbal back-\nand-forth',            loss: 'Lives in one\nperson\'s memory',      red: false },
    { n: '03', stage: 'Decide',    via: 'via Meeting',     desc: 'Someone says\nthe word',             loss: 'Only the\npeople in the\nroom know', red: false },
    { n: '04', stage: 'Document',  via: 'via Notion',      desc: 'If anyone\nremembers to',            loss: 'Stale within\n2 weeks',               red: false },
    { n: '05', stage: 'Reference', via: 'via (searching)', desc: 'New hire asks\n\'why\'',               loss: 'Answer is\ngone',                     red: true  },
  ]
  return (
    <figure className="diagram-figure">
      <div className="lifecycle">
        <div className="lifecycle-grid">
          {stages.map((s) => (
            <div key={s.n} className="lc-col">
              <div className="lc-num">{s.n}</div>
              <div className={`lc-dot${s.red ? ' red' : ''}`}></div>
              <div className="lc-stage">{s.stage}</div>
              <div className="lc-via">{s.via}</div>
              <div className="lc-desc">{s.desc}</div>
              <div className="lc-loss">↘ {s.loss}</div>
            </div>
          ))}
          <div className="lc-connector"></div>
        </div>
      </div>
      <figcaption className="diagram-caption">
        <span>01.A · The lifecycle of a decision today</span>
        <span>FIG · 01</span>
      </figcaption>
    </figure>
  )
}

/* ─── Competitive teardown ────────────────────────────────────── */
export function CompetitiveTeardown() {
  const tools = [
    { tool: 'Slack, Teams',       cat: 'messaging', capture: 4, retrieval: 1, verdict: 'Easy to type. Impossible to retrieve.' },
    { tool: 'Notion, Confluence', cat: 'docs',      capture: 1, retrieval: 4, verdict: 'Right format. Wrong timing.' },
    { tool: 'Loom',               cat: 'video',     capture: 3, retrieval: 1, verdict: 'A library of videos isn’t a ledger.' },
    { tool: 'Jira, Linear',       cat: 'tasks',     capture: 2, retrieval: 3, verdict: 'Tracks the what. Never the why.' },
    { tool: 'Figma',              cat: 'design',    capture: 2, retrieval: 2, verdict: 'Comments orphaned when frames change.' },
    { tool: 'Email',              cat: 'external',  capture: 3, retrieval: 1, verdict: 'Lives in inboxes. Lost when people leave.' },
  ]
  const Bars = ({ count, color }: { count: number; color: string }) => (
    <div className="bars">
      {[0,1,2,3,4].map(i => <span key={i} className={`bar${i < count ? ' on' : ''}`} style={i < count ? { background: color } : undefined}></span>)}
    </div>
  )
  return (
    <figure className="diagram-figure">
      <div className="teardown">
        <div className="teardown-head">
          <div>Tool</div>
          <div className="th-dot"><span></span></div>
          <div>Capture</div>
          <div>Retrieval</div>
          <div>Verdict</div>
        </div>
        {tools.map((t, i) => (
          <div key={i} className="teardown-row">
            <div><div className="td-name">{t.tool}</div><div className="td-cat">{t.cat}</div></div>
            <div></div>
            <Bars count={t.capture} color="#1f7a4a" />
            <Bars count={t.retrieval} color="#c2554a" />
            <div className="td-verdict">{t.verdict}</div>
          </div>
        ))}
      </div>
      <figcaption className="diagram-caption">
        <span>02.A · Where context goes to die — six tools, six different failure modes</span>
        <span>FIG · 02</span>
      </figcaption>
    </figure>
  )
}

/* ─── IA / object model ───────────────────────────────────────── */
export function IADiagram() {
  return (
    <figure className="diagram-figure">
      <div className="ia-diagram">
        <div className="ia-col">
          <div className="ia-label">Sources</div>
          {['Slack thread','Figma frame','Notion doc','Jira ticket','Calendar event','Email reply'].map(s => <div key={s} className="ia-pill">{s}</div>)}
        </div>
        <div className="ia-arrow"><span>pulls</span><span className="line"></span><span className="head">▸</span></div>
        <div className="ia-decision">
          <div className="ia-label">Decision</div>
          <div className="ia-numero">№ 044</div>
          <ul className="ia-schema">
            {['question','the_decision','rationale','options[]','chosen','linked_context[]','stakeholders[]','decided_by','revisit_by'].map(f => <li key={f}>{f}</li>)}
          </ul>
        </div>
        <div className="ia-arrow"><span>emits</span><span className="line"></span><span className="head">▸</span></div>
        <div className="ia-col">
          <div className="ia-label">Consumers</div>
          {[
            { l: 'New-hire onboarding', s: '/why search' },
            { l: 'Linked Jira epic',    s: 'auto-link' },
            { l: 'Slack reply',         s: 'permalink unfurl' },
            { l: 'Quarterly review',    s: 'filter by area' },
          ].map(c => (
            <div key={c.l} className="ia-pill ia-pill-2"><div>{c.l}</div><div className="sub">{c.s}</div></div>
          ))}
        </div>
      </div>
      <figcaption className="diagram-caption">
        <span>04.A · The decision is the smallest durable unit</span>
        <span>FIG · 03</span>
      </figcaption>
    </figure>
  )
}

/* ─── System slice ────────────────────────────────────────────── */
export function SystemSlice() {
  const typeRows = [
    { sz: 38, fam: 'serif-italic', fg: 'var(--r-green-ink)', text: '№ 044', label: 'Editorial numero' },
    { sz: 38, fam: 'sans-bold', fg: 'var(--r-ink)', text: 'Address the reader as “you”', label: 'Decision title' },
    { sz: 22, fam: 'serif-italic', fg: 'var(--r-ink)', text: 'Second person reads as a tool talking to its user.', label: 'Rationale body' },
    { sz: 14.5, fam: 'sans-bold', fg: 'var(--r-ink)', text: 'Linked context', label: 'Card title' },
    { sz: 12, fam: 'mono-caps', fg: 'var(--wy-muted)', text: 'OPTIONS CONSIDERED', label: 'Section label' },
  ]
  const swatches = [
    { name: 'Sidebar',    hex: '#0C3D2A', role: 'shell',        bg: '#0C3D2A', fg: '#c9e3d2' },
    { name: 'Active',     hex: '#B8E8B8', role: 'nav highlight',bg: '#B8E8B8', fg: '#0C3D2A' },
    { name: 'Bg',         hex: '#EEF2EC', role: 'main surface', bg: '#EEF2EC', fg: '#0c1410', border: true },
    { name: 'Card',       hex: '#FFFFFF', role: 'block',        bg: '#FFFFFF', fg: '#0c1410', border: true },
    { name: 'Green',      hex: '#1F7A4A', role: 'primary',      bg: '#1F7A4A', fg: '#fff' },
    { name: 'Soft green', hex: '#D8EFDE', role: 'chosen',       bg: '#D8EFDE', fg: '#1d5e3a', border: true },
    { name: 'Amber',      hex: '#B87D2A', role: 'drafting',     bg: '#B87D2A', fg: '#fff' },
    { name: 'Rose',       hex: '#C2554A', role: 'rejected',     bg: '#C2554A', fg: '#fff' },
  ]
  return (
    <div className="system-slice">
      <div className="frame frame-pad">
        <div className="tiny-label">Type scale</div>
        <div className="type-rows">
          {typeRows.map((t, i) => (
            <div key={i} className="type-row">
              <div className={`type-sample ${t.fam}`} style={{ fontSize: t.sz, color: t.fg }}>{t.text}</div>
              <div className="type-meta"><div className="mono-label">{t.sz}px</div><div className="mono-label faint">{t.label}</div></div>
            </div>
          ))}
        </div>
      </div>
      <div className="frame frame-pad">
        <div className="tiny-label">Surface &amp; ink</div>
        <div className="color-grid">
          {swatches.map(c => (
            <div key={c.name} className="swatch">
              <div className="swatch-chip" style={{ background: c.bg, color: c.fg, border: c.border ? '1px solid var(--wy-line)' : 'none' }}>Aa</div>
              <div><div className="swatch-name">{c.name}</div><div className="mono-label faint">{c.hex} · {c.role}</div></div>
            </div>
          ))}
        </div>
      </div>
      <div className="frame frame-pad">
        <div className="tiny-label">Rhythm</div>
        <div className="mono-label faint" style={{ marginBottom: 8 }}>Spacing — 4 / 8 / 12 / 16 / 24 / 32 / 56 / 88</div>
        <div className="spacing-bars">{[4,8,12,16,24,32,56,88].map(s => <div key={s} className="sp" style={{ width: s, height: s }}></div>)}</div>
        <div className="mono-label faint" style={{ marginTop: 24, marginBottom: 8 }}>Radius — 4 / 6 / 9 / 12</div>
        <div className="radius-chips">{[4,6,9,12].map(r => <div key={r} className="rd" style={{ borderRadius: r }}></div>)}</div>
        <div className="mono-label faint" style={{ marginTop: 24, marginBottom: 8 }}>Density · 14px / 1.5 lh</div>
        <div className="density-sample">Default row is 36px tall. Cards hold 18px padding. The page never exceeds 7 blocks without breaking to a new view.</div>
      </div>
    </div>
  )
}

/* ─── Sketches ────────────────────────────────────────────────── */
const SketchSvg = ({ variant }: { variant: number }) => {
  const stroke = '#3a3733'
  const sw = 1.2
  switch (variant) {
    case 0: return <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" stroke={stroke} strokeWidth={sw}><path d="M20 90 Q70 30, 140 90 T260 90"/>{[20,80,140,200,260].map((x,i) => <circle key={i} cx={x} cy={90} r="6" fill="#fff"/>)}{[20,80,140,200,260].map((x,i) => <text key={i} x={x} y={120} fontSize="9" fill={stroke} textAnchor="middle">{['spark','debate','decide','doc','ref'][i]}</text>)}<text x="140" y="158" fontSize="9.5" fill={stroke} textAnchor="middle" fontStyle="italic">&quot;too abstract — what&apos;s the unit?&quot;</text></svg>
    case 1: return <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" stroke={stroke} strokeWidth={sw}><rect x="20" y="20" width="240" height="30" rx="4"/><text x="30" y="40" fontSize="11" fill={stroke}>what are we deciding?</text>{[[20,70],[85,70],[150,70],[215,70]].map(([x,y],i) => <g key={i}><rect x={x} y={y} width="56" height="56" rx="4"/><text x={x+28} y={y+30} fontSize="8" fill={stroke} textAnchor="middle">{['Slack','Notion','Figma','Jira'][i]}</text></g>)}<text x="140" y="158" fontSize="9.5" fill={stroke} textAnchor="middle" fontStyle="italic">pull context picker</text></svg>
    case 2: return <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" stroke={stroke} strokeWidth={sw}><rect x="20" y="20" width="240" height="46" rx="3" fill={stroke} fillOpacity=".08"/><text x="30" y="47" fontSize="10" fill={stroke} fontWeight="bold">№ 044 · The decision</text><rect x="20" y="94" width="115" height="46" rx="3" strokeWidth="2.5"/><text x="77" y="121" fontSize="9.5" fill={stroke} textAnchor="middle">CHOSEN</text><rect x="145" y="94" width="115" height="46" rx="3"/><rect x="20" y="148" width="240" height="14" rx="3" strokeDasharray="2 2"/></svg>
    case 3: return <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" stroke={stroke} strokeWidth={sw}><line x1="40" y1="20" x2="40" y2="170"/>{[35,70,105,140].map((y,i) => <circle key={i} cx="40" cy={y} r="5" fill="#fff"/>)}<circle cx="40" cy="160" r="6" fill={stroke}/>{[['mon','thread opens'],['tue','decision drafted'],['thu','options weighed'],['fri','audit done'],['fri','DECIDED']].map(([d,t],i) => <g key={i}><text x="55" y={35+i*31.25+4} fontSize="10" fill={stroke}>{t}</text><text x="20" y={35+i*31.25+4} fontSize="8" fill={stroke} textAnchor="end">{d}</text></g>)}</svg>
    case 4: return <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" stroke={stroke} strokeWidth={sw}><rect x="20" y="20" width="110" height="140" rx="4"/><text x="30" y="38" fontSize="10" fill={stroke}>decision</text><line x1="30" y1="48" x2="120" y2="48" strokeDasharray="2 2"/><rect x="30" y="100" width="90" height="40" rx="3" fill={stroke}/><text x="75" y="124" fontSize="10" fill="#fff" textAnchor="middle">rationale</text><path d="M132 90 L150 90"/><path d="M147 87 L150 90 L147 93"/><rect x="150" y="20" width="110" height="140" rx="4" strokeDasharray="3 2"/><text x="160" y="38" fontSize="10" fill={stroke}>context inline</text>{[60,86,112].map((y,i) => <g key={i}><circle cx="165" cy={y} r="5"/><line x1="175" y1={y-2} x2="245" y2={y-2}/></g>)}</svg>
    case 5: return <svg viewBox="0 0 280 180" width="100%" height="100%" fill="none" stroke={stroke} strokeWidth={sw}><rect x="20" y="40" width="240" height="100" rx="6"/><text x="30" y="62" fontSize="11" fill={stroke}>slack #brand</text><line x1="30" y1="72" x2="250" y2="72"/><rect x="30" y="84" width="220" height="22" rx="3"/><text x="40" y="99" fontSize="11" fill={stroke}>/why second-person copy</text><rect x="30" y="112" width="220" height="22" rx="3" fill={stroke}/><text x="40" y="127" fontSize="9.5" fill="#fff">↳ № 044 · decided Apr 8</text></svg>
    default: return null
  }
}

export function Sketches() {
  const items = [
    { n: 'S-01', title: 'Lifecycle ribbon',      note: 'Killed — too abstract',   variant: 0 },
    { n: 'S-02', title: 'Pull-context picker',   note: 'Kept core idea',          variant: 1 },
    { n: 'S-03', title: 'Decision card stack',   note: 'Became the default',      variant: 2 },
    { n: 'S-04', title: 'Timeline view',         note: 'Became variant B',        variant: 3 },
    { n: 'S-05', title: 'Inline context viewer', note: 'Hero feature',            variant: 4 },
    { n: 'S-06', title: 'Slack /why command',    note: 'Future scope',            variant: 5 },
  ]
  return (
    <div className="sketches">
      {items.map((s) => (
        <div key={s.n} className="sketch">
          <div className="sketch-canvas"><SketchSvg variant={s.variant} /></div>
          <div className="sketch-meta">
            <span>{s.n} · {s.title}</span>
            <span className={s.note.includes('Killed') ? 'killed' : (s.note.includes('Hero') || s.note.includes('default')) ? 'kept' : ''}>{s.note}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Microinteractions ───────────────────────────────────────── */
export function Microinteractions() {
  return (
    <div className="micro-grid">
      <div className="frame frame-pad">
        <div className="tiny-label">Status — six states, one geometry</div>
        <div className="status-grid">
          <span className="r-status-pill drafting">Drafting</span>
          <span className="r-status-pill discussion">In review</span>
          <span className="r-status-pill" style={{ background: 'var(--r-rose-soft)', color: 'var(--r-rose)' }}>Pushback</span>
          <span className="r-status-pill decided">Decided</span>
          <span className="r-status-pill" style={{ background: '#ecebe6', color: 'var(--r-muted)' }}>Archived</span>
          <span className="r-status-pill" style={{ background: '#f4ead0', color: 'var(--r-amber)' }}>Revisit</span>
        </div>
        <p className="annotation">One geometry, three properties (bg, fg, pip). &ldquo;Decided&rdquo; is the only one with no implied next step.</p>
      </div>
      <div className="frame frame-pad">
        <div className="tiny-label">Rationale — empty / suggested / written</div>
        <div className="state-stack">
          <div className="state-row"><span className="state-tag">empty</span><div className="state-body" style={{ fontFamily: 'var(--wy-serif)', fontStyle: 'italic', color: 'var(--r-muted)' }}>Tell us why this matters — or pull threads and we&rsquo;ll draft it.</div></div>
          <div className="state-row"><span className="state-tag suggested">suggested</span><div className="state-body" style={{ fontFamily: 'var(--wy-serif)', fontStyle: 'italic' }}>Mailchimp&rsquo;s automation is fine for marketing&hellip;<span style={{ display: 'inline-block', marginLeft: 6, color: 'var(--r-green)' }}>✓ Use as written</span></div></div>
          <div className="state-row"><span className="state-tag written">written</span><div className="state-body" style={{ fontFamily: 'var(--wy-serif)', fontStyle: 'italic' }}>Schema-per-tenant has bitten us twice — moving on.</div></div>
        </div>
        <p className="annotation">The AI never auto-fills. It suggests, you accept. &ldquo;You write it. AI just gets you started.&rdquo;</p>
      </div>
      <div className="frame frame-pad">
        <div className="tiny-label">Linked context — three sync states</div>
        <div className="state-stack">
          <div className="ctx-state"><div className="r-ctx-icon thread"><Ic name="thread-bubble" /></div><span className="mini-title">#brand · brand voice thread</span><span className="mini-state ok">● in sync · 4m ago</span></div>
          <div className="ctx-state"><div className="r-ctx-icon figma"><span style={{ fontFamily: 'var(--wy-mono)', fontSize: 11 }}>FI</span></div><span className="mini-title">Brand voice — surface audit</span><span className="mini-state warn">● v4 available — preview diff</span></div>
          <div className="ctx-state"><div className="r-ctx-icon cal"><Ic name="cal" /></div><span className="mini-title">Product review — Apr 24</span><span className="mini-state stale">● source archived · snapshot kept</span></div>
        </div>
        <p className="annotation">Three legible states: <em>live</em>, <em>drifted</em>, <em>archived</em>. Source can be deleted; the snapshot can&rsquo;t.</p>
      </div>
      <div className="frame frame-pad">
        <div className="tiny-label">Keyboard — the muscle-memory bet</div>
        <div className="kbd-grid">
          {[
            ['⌘ K',      'Pull context from anywhere'],
            ['⌘ ↵',      'Save and continue'],
            ['D',         'Mark as decided'],
            ['R',         'Open Revise'],
            ['/',         '/why command in any Slack channel'],
            ['G then D',  'Jump to Decisions'],
          ].map(([k, l]) => (
            <span key={k} style={{ display: 'contents' }}>
              <span className="kbd-key">{k}</span>
              <span className="kbd-desc">{l}</span>
            </span>
          ))}
        </div>
        <p className="annotation">People who write decisions are people who already love keyboards. The whole flow works without a mouse.</p>
      </div>
    </div>
  )
}
