/* Options Considered — "Exploration" section */

function WfBar({ style }: { style: React.CSSProperties }) {
  return <div className="wf-bar" style={style} />
}

function ConceptA() {
  return (
    <div className="wf">
      <div style={{ position: 'absolute', inset: '8px 10px 22px' }}>
        <WfBar style={{ top: 0, left: 0, width: '60%', height: 9 }} />
        <WfBar style={{ top: 18, left: 0, right: 0, height: 34 }} />
        <WfBar style={{ top: 60, left: 0, right: 0, height: 14 }} />
        <WfBar style={{ top: 80, left: 0, right: 0, height: 14 }} />
      </div>
      <div className="wf-tabs"><i /><i /><i /><i /><i className="hi" /></div>
      <span className="wf-hand" style={{ right: 6, bottom: 22 }}>silo ↓</span>
    </div>
  )
}

function ConceptB() {
  return (
    <div className="wf">
      <div style={{ position: 'absolute', inset: '8px 10px 22px' }}>
        <WfBar style={{ top: 0, left: 0, width: '50%', height: 9 }} />
        <WfBar style={{ top: 16, left: 0, right: 0, height: 18, background: 'rgba(150,120,255,0.22)' }} />
        <WfBar style={{ top: 40, left: 0, right: 0, height: 18, background: 'rgba(150,120,255,0.22)' }} />
        <WfBar style={{ top: 64, left: 0, right: 0, height: 18, background: 'rgba(150,120,255,0.22)' }} />
      </div>
      <div className="wf-tabs"><i /><i className="hi" /><i /><i /><i /></div>
      <span className="wf-hand" style={{ left: 8, top: 36, color: 'var(--c)' }}>in calendar?</span>
    </div>
  )
}

function ConceptC() {
  return (
    <div className="wf">
      <div style={{ position: 'absolute', inset: '8px 10px 22px' }}>
        <WfBar style={{ top: 0, left: 0, right: 0, height: 30, background: 'linear-gradient(135deg,#FFD9C2,#C9B5FF)' }} />
        <div className="wf-dot" style={{ top: 38, left: 0, width: 13, height: 13, background: '#FF7AC6' }} />
        <div className="wf-dot" style={{ top: 38, left: 9, width: 13, height: 13, background: '#5FD3E0' }} />
        <div className="wf-dot" style={{ top: 38, left: 18, width: 13, height: 13, background: '#B89CFF' }} />
        <WfBar style={{ top: 38, left: 38, width: '42%', height: 13, background: 'var(--g)' }} />
        <WfBar style={{ top: 60, left: 0, right: '30%', height: 13, background: 'rgba(150,120,255,0.3)', borderRadius: '8px 8px 8px 2px' }} />
      </div>
      <div className="wf-tabs"><i /><i /><i /><i /><i /></div>
      <span className="wf-hand" style={{ left: 30, top: 30, color: 'var(--g)', transform: 'rotate(3deg)' }}>here ↗</span>
    </div>
  )
}

export default function WudExploration() {
  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick">
              <span className="n" style={{ background: 'var(--v)' }}>·</span>
              Options considered
            </div>
            <h2 className="chap-h">Three places coordination could live. <em>Only one kept the group together.</em></h2>
            <p className="chap-body">
              The 70% off-platform signal demanded a home for coordination. Where it lived was an
              information-architecture bet, not a visual one, so I prototyped three nav models and
              pressure-tested each against one question: <strong>does the group ever need to leave?</strong>
            </p>
          </div>
          <div className="col-r">
            <div className="think">
              <div className="think-blob"><span className="blush l" /><span className="blush r" /></div>
              <div className="think-note">
                <span className="lbl">thinking</span>
                <span className="said">A chat tab is the obvious answer, and the wrong one. A silo people forget to open is just WhatsApp <em>with extra steps.</em></span>
              </div>
            </div>
          </div>
        </div>

        <div className="explore-lab">
          <div className="lab-grid">
            {/* Option A */}
            <div className="concept">
              <ConceptA />
              <div className="ct"><span className="badge-opt">Option A</span><span className="verdict-badge no">Cut</span></div>
              <h5>Chat as a fifth tab</h5>
              <p>A dedicated messaging home, parallel to Explore and Calendar. Familiar, easy to build.</p>
              <div className="why"><b>Why not:</b> coordination became a destination users had to <em>remember</em> to visit. In testing it sat unopened — the off-platform leak just moved one tab over.</div>
            </div>

            {/* Option B */}
            <div className="concept">
              <ConceptB />
              <div className="ct"><span className="badge-opt">Option B</span><span className="verdict-badge no">Cut</span></div>
              <h5>Folded into Calendar</h5>
              <p>Coordination threads attached to each committed event in the Calendar view.</p>
              <div className="why"><b>Why not:</b> wrong mental model. Calendar holds <em>decided</em> plans, but the anxiety happens <em>before</em> commitment, while people are still deciding whether to go.</div>
            </div>

            {/* Option C · won */}
            <div className="concept won">
              <ConceptC />
              <div className="ct"><span className="badge-opt">Option C</span><span className="verdict-badge yes">Shipped</span></div>
              <h5>Surfaced in place</h5>
              <p>Friend signals on the event page; a lightweight chat opened straight from RSVP — no silo, no separate inbox.</p>
              <div className="why"><b>Why:</b> coordination appears <em>where the doubt is</em>. &ldquo;Is anyone going?&rdquo; gets answered at the moment of hesitation, so the group never has a reason to leave.</div>
            </div>
          </div>

          <div className="converge-row">
            <span className="carrow">▲</span>
            <span className="clbl">A &amp; B leaked the group back off-platform. C kept it in, so C shipped.</span>
            <span className="cl" />
          </div>
        </div>
      </div>
    </section>
  )
}
