export default function DirectionBScreen() {
  return (
    <>
      <div className="relay-browser-frame">
        <div className="browser-bar">
          <div className="browser-dots"><span/><span/><span/></div>
          <div className="browser-url">relay.team/inbox/ai-drafts</div>
        </div>

        {/* AI draft panel */}
        <div style={{ background: '#fafaf6', padding: 32, borderBottom: '1px solid #e7e5dd' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', color: '#14532d', marginBottom: 12 }}>
            ✦ AI DRAFT · BASED ON YESTERDAY&rsquo;S CALL
          </div>
          <div style={{ background: '#fff', border: '2px solid #16a34a', borderRadius: 12, padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#0a1f12', marginBottom: 4 }}>Cut the second onboarding screen</div>
                <div style={{ fontSize: 11, color: '#5a6f63' }}>Detected from &ldquo;Product sync · 2:30pm&rdquo; transcript · 78% confidence</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ background: '#f0fdf4', color: '#14532d', padding: '2px 8px', borderRadius: 4, fontSize: 10 }}>product</span>
              </div>
            </div>

            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, color: '#0a1f12', lineHeight: 1.6, padding: 12, background: '#f0fdf4', borderRadius: 6 }}>
              Drop the workspace setup screen from onboarding. Activation data shows 38% of users abandon between screen 1 and 2. Maya pushed back on shipping it three times. The team agreed to remove it and re-test in two weeks.
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 16, alignItems: 'center' }}>
              <button style={{ background: '#16a34a', color: '#fff', padding: '7px 14px', borderRadius: 6, fontSize: 12, fontWeight: 500, border: 'none', cursor: 'default' }}>✓ Looks right</button>
              <button style={{ background: '#fff', border: '1px solid #e7e5dd', padding: '7px 14px', borderRadius: 6, fontSize: 12, cursor: 'default' }}>Edit before saving</button>
              <button style={{ background: 'transparent', padding: '7px 14px', fontSize: 12, color: '#5a6f63', border: 'none', cursor: 'default' }}>Not a decision</button>
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 11, color: '#5a6f63' }}>Aki and Maya can also confirm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Annotation grid */}
      <div className="anno-grid">
        <div />
        <div className="anno-list">
          {[
            'The system shows where the decision was detected, not just the draft. Source is visible by default.',
            'Confidence is exposed to the user. A 78% draft asks for review, a 95% draft auto-confirms with one tap.',
            '"Not a decision" is a first-class action. Saying no is as easy as saying yes.',
            'Co-confirmers are listed. Anyone in the conversation can validate the draft, not just the assigned owner.',
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
