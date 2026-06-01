/* Phone mockup components for WUD! case study */

function StatusBar() {
  return (
    <div className="status-bar">
      <span>9:41</span>
      <div className="icons">
        <span className="sig"><i /><i /><i /><i /></span>
        <span style={{ fontSize: 9 }}>5G</span>
        <div className="batt"><i /></div>
      </div>
    </div>
  )
}

export function TabBar({ active }: { active?: string }) {
  return (
    <div className="tabbar">
      {['Explore', 'Calendar', '+', 'Map', 'Profile'].map(t => (
        <div key={t} className={`tab${t === '+' ? ' plus' : ''}${t === active ? ' active' : ''}`}>
          {t === '+' ? <div className="tab-ic-plus">+</div> : <><div className="tab-ic" /><span>{t}</span></>}
        </div>
      ))}
    </div>
  )
}

export function PhoneSplash() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <StatusBar />
        <div className="splash">
          <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
          <div className="blob b4" /><div className="blob b5" />
          <div className="logo">WUD!</div>
          <div className="tagline">Juggling life? Let our app keep your social life in balance.</div>
        </div>
      </div>
    </div>
  )
}

export function PhoneOnboarding() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <StatusBar />
        <div className="onb">
          <div className="onb-top">
            <span className="back">‹</span>
            <span className="skip">Skip</span>
          </div>
          <h3>Profile Details</h3>
          <div className="photo-row">
            <div className="ph"><span className="ph-ic">📷</span><span className="ph-lbl">Gallery</span></div>
            <div className="ph"><span className="ph-ic">📷</span><span className="ph-lbl">Photo</span></div>
          </div>
          <label>Name</label>
          <div className="field placeholder">Your name</div>
          <label>Birthday</label>
          <div className="field placeholder">Select date <span className="chev">›</span></div>
          <div className="next-btn">Next ›</div>
        </div>
      </div>
    </div>
  )
}

export function PhoneExplore({ activeTab, showNeighbourLabel }: { activeTab?: string; showNeighbourLabel?: boolean }) {
  const isYou = activeTab === 'You'
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <StatusBar />
        <div className="explore">
          <div className="exp-tabs">
            {['You', 'Explore'].map(t => (
              <div key={t} className={`exp-tab${(activeTab ?? 'You') === t ? ' on' : ''}`}>{t}</div>
            ))}
          </div>
          <div className="exp-search">
            <span>🔍</span> {isYou ? 'Music events' : 'Events near you'}
            <div className="chip">Filters</div>
          </div>
          {isYou && (
            <>
              <div className="section-label">Events you&apos;re invited to</div>
              <div className="invite-card">
                <div className="invite-head">
                  <div className="exp-av">N</div>
                  <div className="nm">Niomi Roothe<br /><span className="sub">Invited you</span></div>
                  <div className="inv">Invite ›</div>
                </div>
                <div className="invite-banner">
                  <div className="ib-date"><div className="d">24</div><div className="m">JUL</div></div>
                  <div className="ib-info">
                    <div className="title">Birthday Pool Party</div>
                    <div className="meta">6pm · 36 Guild St, Texas</div>
                    <div className="lock">🔒 Private Event</div>
                  </div>
                </div>
              </div>
            </>
          )}
          {showNeighbourLabel && <div className="section-label">Explore by neighbourhood</div>}
          {!showNeighbourLabel && !isYou && <div className="section-label">Explore by neighbourhood</div>}
          <div className="neighbour">
            <div className="row">
              <div className="ev-thumb" />
              <div className="nb-info"><div className="t">Jazz Night</div><div className="s">Fri · 8pm · Near you</div></div>
            </div>
            <div className="row" style={{ marginTop: 8 }}>
              <div className="ev-thumb alt" />
              <div className="nb-info"><div className="t">Food Festival</div><div className="s">Sat · 1pm · 0.8mi</div></div>
            </div>
          </div>
        </div>
        <TabBar active="Explore" />
      </div>
    </div>
  )
}

export function PhoneFilter() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <StatusBar />
        <div className="filter-screen">
          <div className="fs-top">
            <span className="back">‹</span>
            <span className="title">Filters</span>
            <span className="clear">Clear all</span>
          </div>
          <span className="fs-lbl">Distance</span>
          <div className="slider"><div className="fill" /><div className="knob" /></div>
          <div className="slider-meta"><span>0 mi</span><span>25 mi</span></div>
          <span className="fs-lbl">Category</span>
          <div className="chips">
            <div className="chip on">Music</div><div className="chip on">Food</div>
            <div className="chip">Sports</div><div className="chip">Art</div><div className="chip">Tech</div>
          </div>
          <span className="fs-lbl">Date</span>
          <div className="chips">
            <div className="chip on">This week</div><div className="chip">This month</div><div className="chip">Custom</div>
          </div>
          <span className="fs-lbl">Price</span>
          <div className="chips"><div className="chip on">Free</div><div className="chip">Paid</div></div>
          <div className="toggle-row">Friends attending <div className="sw" /></div>
          <div className="apply">Apply filters</div>
        </div>
      </div>
    </div>
  )
}

export function PhonePrefs() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <StatusBar />
        <div className="pref-screen">
          <div className="progress">
            <div className="step on" /><div className="step on" /><div className="step on" /><div className="step" />
          </div>
          <h3>What are your interests?</h3>
          <div className="ps-desc">Help us find events you&apos;ll actually want to attend.</div>
          <div className="pref-grid">
            <div className="pref a on"><span className="pref-ic">🎵</span>Music<div className="pref-check">✓</div></div>
            <div className="pref b on"><span className="pref-ic">🎨</span>Art<div className="pref-check">✓</div></div>
            <div className="pref c"><span className="pref-ic">🏃</span>Sports</div>
            <div className="pref d"><span className="pref-ic">🍕</span>Food</div>
            <div className="pref e"><span className="pref-ic">💻</span>Tech</div>
            <div className="pref f"><span className="pref-ic">🎭</span>Theatre</div>
          </div>
          <div className="ps-next">Next ›</div>
        </div>
      </div>
    </div>
  )
}

export function PhoneRSVP() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <StatusBar />
        <div className="rsvp">
          <div className="rsvp-banner">
            <div className="rb-back">‹</div>
            <div className="rb-label">FOOD FESTIVAL</div>
          </div>
          <div className="rsvp-body">
            <div className="rsvp-title">Angels Square Food Festival</div>
            <div className="rsvp-meta">Oct 17 <span className="dot">·</span> 1pm <span className="dot">·</span> Angels Square</div>
            <div className="att-row">
              <div className="av-stack">
                <div className="rsvp-av a">N</div><div className="rsvp-av b">J</div>
                <div className="rsvp-av c">M</div><div className="rsvp-av d">S</div>
              </div>
              <div className="rsvp-nums"><b>151 attending</b><span className="you-going">3 friends going</span></div>
              <div className="left-pill">49 left</div>
            </div>
            <div className="guests">
              <div className="gh-label">Number of guests</div>
              <div className="stepper">
                <div className="st-btn">−</div>
                <div className="st-num">1</div>
                <div className="st-btn">+</div>
              </div>
              <div className="st-note">Tickets are limited, RSVP to secure your spot</div>
            </div>
            <div className="rsvp-confirm">
              <div className="rc-check">✓</div>
              I confirm my attendance
            </div>
            <div className="done-btn">DONE</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PhoneProfile() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <StatusBar />
        <div className="profile">
          <div className="prof-head">
            <div className="prof-nm">Devdutt Oruganti</div>
            <div className="prof-more">···</div>
          </div>
          <div className="av-big">D</div>
          <div className="display-name">Devdutt Oruganti</div>
          <div className="handle">@devdutt</div>
          <div className="prof-stats">
            <div className="col"><div className="n">38</div><div className="l">Following</div></div>
            <div className="col"><div className="n">100</div><div className="l">Followers</div></div>
            <div className="col"><div className="n">10</div><div className="l">Events</div></div>
          </div>
          <div className="prof-sect">Account</div>
          <div className="prof-menu">
            {['My Account', 'My Events', 'Notifications', 'Help & Support'].map(item => (
              <div key={item} className="item">
                <div className="item-ic" /><span>{item}</span><span className="item-chev">›</span>
              </div>
            ))}
          </div>
        </div>
        <TabBar active="Profile" />
      </div>
    </div>
  )
}

export function PhoneHelp() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <StatusBar />
        <div className="help-screen">
          <div className="h-top">
            <span>Help &amp; Support</span>
            <span className="x">×</span>
          </div>
          <div className="h-search"><span>🔍</span> Search help</div>
          <div className="h-section">Event Creation FAQs</div>
          <div className="faq">
            {['Can I add a co-host?', 'How do I set visibility?', 'How do I set capacity?', 'How to host private?', 'Withdraw an invitation?'].map(q => (
              <div key={q} className="q">{q}<span className="ch">›</span></div>
            ))}
          </div>
        </div>
        <TabBar active="Profile" />
      </div>
    </div>
  )
}

export function PhoneMyEvents() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="notch" />
        <StatusBar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--w-bg)', padding: '12px 16px', overflow: 'hidden' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: 15, fontWeight: 700, marginBottom: 14 }}>My Events</div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
            {['Tickets', 'Saved', 'Hosted'].map((t, i) => (
              <div key={t} style={{ flex: 1, padding: '6px', borderRadius: 999, textAlign: 'center', fontSize: 10, fontWeight: 600, background: i === 0 ? 'var(--w-purple)' : 'var(--w-surface)', color: i === 0 ? '#fff' : 'var(--w-text-3)', border: '1px solid var(--w-border-soft)' }}>{t}</div>
            ))}
          </div>
          {[
            { title: 'Birthday Pool Party', date: '24\nJUL', bg: 'linear-gradient(135deg,var(--v-2),var(--p-2))', status: 'Confirmed' },
            { title: 'Jazz Night', date: '12\nAUG', bg: 'linear-gradient(135deg,var(--c-2),var(--g-2))', status: 'Pending' },
          ].map(ev => (
            <div key={ev.title} style={{ background: 'var(--w-surface)', border: '1px solid var(--w-border-soft)', borderRadius: 12, padding: 10, marginBottom: 8, display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: ev.bg, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, color: 'var(--w-text)', lineHeight: 1.2, textAlign: 'center', whiteSpace: 'pre-line' }}>{ev.date}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{ev.title}</div>
                <div style={{ fontSize: 10, color: 'var(--w-purple)', marginTop: 2, fontWeight: 600 }}>{ev.status}</div>
              </div>
            </div>
          ))}
        </div>
        <TabBar active="Profile" />
      </div>
    </div>
  )
}
