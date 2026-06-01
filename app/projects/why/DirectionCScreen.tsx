export default function DirectionCScreen() {
  return (
    <>
      <div className="relay-browser-frame">
        <div className="browser-bar">
          <div className="browser-dots"><span/><span/><span/></div>
          <div className="browser-url">relay.team/digest</div>
        </div>

        <div style={{ background: '#fafaf6', padding: 32 }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18, alignItems: 'baseline' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', color: '#14532d' }}>5:30 PM · END-OF-DAY DIGEST</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#0a1f12', marginTop: 4 }}>3 decisions you flagged today</div>
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 12, color: '#5a6f63' }}>Sorted by context freshness, not time of day</div>
          </div>

          {/* Warning banner */}
          <div style={{ background: '#fff7ed', border: '1px solid #fdba74', padding: '8px 14px', borderRadius: 8, fontSize: 11, color: '#9a3412', marginBottom: 16, fontFamily: 'var(--serif)', fontStyle: 'italic' }}>
            Some context fades within hours. We&rsquo;re surfacing the most at-risk first.
          </div>

          {/* Item 1: FRESHNESS LOW */}
          <div style={{ background: '#fff', border: '1px solid #fdba74', borderRadius: 10, padding: 16, marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <div>
                <span style={{ display: 'inline-block', background: '#fef3c7', color: '#92400e', padding: '2px 8px', borderRadius: 999, fontSize: 9, fontWeight: 600, marginRight: 8 }}>⚠ FRESHNESS LOW</span>
                <span style={{ fontSize: 11, color: '#5a6f63' }}>flagged 7h ago · 9:14 AM standup</span>
              </div>
              <span style={{ fontSize: 11, color: '#9a3412' }}>~3h until &ldquo;why&rdquo; decays</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#0a1f12', marginBottom: 6 }}>Push the migration to next sprint</div>
            <div style={{ background: '#f0fdf4', padding: '8px 10px', borderRadius: 6, fontSize: 11, color: '#0a1f12', marginBottom: 10 }}>
              <div style={{ fontSize: 9, color: '#14532d', letterSpacing: '0.1em', marginBottom: 2 }}>✦ THE WHAT (PRE-FILLED FROM YOUR FLAG)</div>
              Defer the Postgres migration to Sprint 24.
            </div>
            <div style={{ border: '1.5px dashed #fdba74', padding: 10, borderRadius: 6, background: '#fffbeb' }}>
              <div style={{ fontSize: 9, color: '#9a3412', letterSpacing: '0.1em', marginBottom: 4 }}>⚠ ONLY THIS FIELD NEEDS YOU · WHY</div>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 11, color: '#5a6f63' }}>type the reason this was deferred...</div>
            </div>
          </div>

          {/* Item 2: FRESHNESS OK */}
          <div style={{ background: '#fff', border: '1px solid #e7e5dd', borderRadius: 10, padding: 14, marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div>
                <span style={{ display: 'inline-block', background: '#f0fdf4', color: '#14532d', padding: '2px 8px', borderRadius: 999, fontSize: 9, fontWeight: 600, marginRight: 8 }}>FRESHNESS OK</span>
                <span style={{ fontSize: 11, color: '#5a6f63' }}>flagged 3h ago · #design</span>
              </div>
            </div>
            <div style={{ fontWeight: 600, fontSize: 13, color: '#0a1f12', marginBottom: 4 }}>Use a single onboarding template across product surfaces</div>
            <div style={{ fontSize: 11, color: '#5a6f63', fontFamily: 'var(--serif)', fontStyle: 'italic' }}>Why field empty · 2 stakeholders pending</div>
          </div>

          {/* Item 3: FRESHNESS HIGH */}
          <div style={{ background: '#fff', border: '1px solid #e7e5dd', borderRadius: 10, padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div>
                <span style={{ display: 'inline-block', background: '#f0fdf4', color: '#14532d', padding: '2px 8px', borderRadius: 999, fontSize: 9, fontWeight: 600, marginRight: 8 }}>FRESHNESS HIGH</span>
                <span style={{ fontSize: 11, color: '#5a6f63' }}>flagged 35m ago · 4:55 PM</span>
              </div>
            </div>
            <div style={{ fontWeight: 600, fontSize: 13, color: '#0a1f12', marginBottom: 4 }}>Hold the v3 release until QA finishes audit</div>
            <div style={{ fontSize: 11, color: '#5a6f63', fontFamily: 'var(--serif)', fontStyle: 'italic' }}>Decision and why both clear · 30 sec to confirm</div>
          </div>
        </div>
      </div>

      {/* Annotation grid */}
      <div className="anno-grid">
        <div />
        <div className="anno-list">
          {[
            'Digest appears at a consistent low-pressure moment, not as an interruption during the day.',
            'Freshness is shown, not hidden. Items are ordered by context risk, not time of day.',
            'The banner acknowledges decay honestly rather than pretending context is fully recoverable.',
            'The "what" is pre-filled from the original flag. No typing for what\'s already known.',
            'Only the "why" stays empty. It is the one field that cannot survive waiting until end of day.',
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
