export default function DirectionAScreen() {
  return (
    <>
      <div className="relay-browser-frame">
        <div className="browser-bar">
          <div className="browser-dots"><span/><span/><span/></div>
          <div className="browser-url">relay.team/why/new</div>
        </div>
        <div className="relay-app" style={{ height: 540 }}>
          {/* Sidebar */}
          <div className="relay-side">
            <div className="relay-logo">RELAY</div>
            <div className="relay-search">Search <span style={{ fontFamily: 'var(--mono)' }}>⌘K</span></div>
            <div className="relay-nav-item"><span>📥 Inbox</span><span className="relay-nav-count">3</span></div>
            <div className="relay-nav-item"><span>💬 Threads</span></div>
            <div className="relay-nav-item"><span>✎ Drafts</span><span className="relay-nav-count">2</span></div>
            <div className="relay-nav-item"><span>🗓 Calendar</span></div>
            <div className="relay-nav-item active"><span>🧭 Why</span><span className="relay-nav-count">47</span></div>
            <div className="relay-nav-item"><span>👥 People</span></div>
          </div>

          {/* Main — cream bg, capture form */}
          <div className="relay-main" style={{ background: '#fafaf6', overflow: 'auto' }}>
            {/* Header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div className="relay-crumb" style={{ margin: 0 }}>
                ‹ Why <span style={{ margin: '0 8px', color: '#5a6f63' }}>/</span> Capture a new decision
                <span style={{ marginLeft: 12, color: '#5a6f63', fontSize: 10 }}>Draft · saves as you write</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ background: '#fff', border: '1px solid #e7e5dd', padding: '5px 12px', borderRadius: 6, fontSize: 11, cursor: 'default' }}>Save as draft</button>
                <button style={{ background: '#16a34a', color: '#fff', padding: '5px 12px', borderRadius: 6, fontSize: 11, fontWeight: 500, cursor: 'default', border: 'none' }}>✓ Save decision</button>
              </div>
            </div>

            {/* Two-column form */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 24 }}>
              {/* Left: form */}
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.14em', color: '#14532d', marginBottom: 6 }}>
                  #48 · DRAFTING <span style={{ color: '#5a6f63', marginLeft: 8 }}>this number is reserved when you save</span>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.14em', color: '#5a6f63', marginTop: 14, marginBottom: 4 }}>TITLE</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#0a1f12', marginBottom: 14 }}>Move the onboarding email out of Mailchimp</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.14em', color: '#14532d', marginBottom: 6 }}>⚖ THE DECISION</div>
                <div style={{ border: '1px solid #e7e5dd', borderRadius: 8, padding: '8px 10px', fontSize: 11, color: '#0a1f12', background: '#fff', marginBottom: 14, lineHeight: 1.4 }}>
                  Send onboarding from Relay&rsquo;s transactional email service. Decommission the Mailchimp automation by end of month.
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.14em', color: '#14532d' }}>📎 RATIONALE</div>
                  <div style={{ background: '#052e16', color: '#fff', padding: '3px 8px', borderRadius: 999, fontSize: 9 }}>✦ Draft from linked threads</div>
                </div>
                <div style={{ border: '1px solid #16a34a', borderRadius: 8, padding: '8px 10px', background: '#fff', marginBottom: 6 }}>
                  <div style={{ fontSize: 9, color: '#14532d', marginBottom: 4 }}>✦ Suggested rationale · based on 2 threads</div>
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 11, color: '#0a1f12', lineHeight: 1.5 }}>
                    Mailchimp&rsquo;s automation is fine for marketing but the onboarding sequence has drifted into transactional territory. Moving it gives tighter control over content and one set of suppression rules instead of two.
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button style={{ background: '#16a34a', color: '#fff', padding: '4px 10px', borderRadius: 5, fontSize: 10, border: 'none', cursor: 'default' }}>✓ Use as written</button>
                  <button style={{ background: '#fff', border: '1px solid #e7e5dd', padding: '4px 10px', borderRadius: 5, fontSize: 10, cursor: 'default' }}>Edit</button>
                  <button style={{ background: '#fff', border: '1px solid #e7e5dd', padding: '4px 10px', borderRadius: 5, fontSize: 10, cursor: 'default' }}>Try again</button>
                </div>
              </div>

              {/* Right: metadata */}
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.14em', color: '#5a6f63', marginBottom: 8 }}>
                  STAKEHOLDERS <em style={{ color: '#5a6f63', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>who should know</em>
                </div>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 14 }}>
                  <span style={{ background: '#f0fdf4', color: '#14532d', padding: '3px 8px', borderRadius: 999, fontSize: 10 }}>Aki ×</span>
                  <span style={{ background: '#f0fdf4', color: '#14532d', padding: '3px 8px', borderRadius: 999, fontSize: 10 }}>Diego ×</span>
                  <span style={{ background: '#fff', border: '1px dashed #e7e5dd', padding: '3px 8px', borderRadius: 999, fontSize: 10, color: '#5a6f63' }}>+ add</span>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.14em', color: '#5a6f63', marginBottom: 6 }}>AREA</div>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 14 }}>
                  <span style={{ background: '#dbeafe', color: '#1e40af', padding: '2px 6px', borderRadius: 4, fontSize: 9 }}>infra</span>
                  <span style={{ color: '#5a6f63', padding: '2px 6px', fontSize: 9 }}>product</span>
                  <span style={{ color: '#5a6f63', padding: '2px 6px', fontSize: 9 }}>growth</span>
                  <span style={{ color: '#5a6f63', padding: '2px 6px', fontSize: 9 }}>brand</span>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 8, letterSpacing: '0.14em', color: '#5a6f63', marginBottom: 6 }}>REVISIT BY</div>
                <div style={{ border: '1px solid #e7e5dd', borderRadius: 6, padding: '6px 8px', fontSize: 11 }}>📅 Oct 27, 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annotation grid */}
      <div className="anno-grid">
        <div />
        <div className="anno-list">
          {[
            'Relay detects decision language in real time and highlights the message in the source app.',
            'Log button appears inline. No context switch, no separate tool to open.',
            'Panel slides in alongside the thread. The conversation stays visible.',
            'Decision is pre-filled from message content. No typing required.',
            'Only the "why" is left blank. The one field the system cannot infer.',
          ].map((text, i) => (
            <div key={i} className="anno-row">
              <div className="anno-num">{i + 1}</div>
              <div>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
