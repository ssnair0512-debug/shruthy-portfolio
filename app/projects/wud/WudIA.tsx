'use client'

import { useEffect, useRef, useState } from 'react'

/* ── Avatar helpers ───────────────────────────────────────────── */
function IAv({ c, children }: { c: string; children: React.ReactNode }) {
  return <div className={`ia-av ${c}`}>{children}</div>
}
function FriendStack() {
  return (
    <div className="ia-avstack">
      <IAv c="c1">MA</IAv><IAv c="c2">DI</IAv><IAv c="c3">AK</IAv><IAv c="c4">RP</IAv><IAv c="more">+4</IAv>
    </div>
  )
}

/* ── State definitions ────────────────────────────────────────── */
type IaState = {
  key: string
  chip: string
  cap: string
  trig: React.ReactNode
  panel: React.ReactNode
  knows: string
  wants: string
  says: string
  why: string
}

const STATES: IaState[] = [
  {
    key: 'prerSVP', chip: 'Before RSVP', cap: "Event page · not yet RSVP'd",
    trig: <>trigger · <b>user opens the event, Gate 1 closed</b></>,
    panel: (
      <>
        <div className="ia-pl">Who&rsquo;s going</div>
        <div className="ia-avstack"><IAv c="more">?</IAv><IAv c="more">?</IAv><IAv c="more">?</IAv></div>
        <div className="ia-count">151 attending <span className="sub">&middot; 8 you may know</span></div>
        <div className="ia-note">Identities unlock <b>after you RSVP</b>, and only for people who opted in.</div>
        <div className="ia-cta">RSVP to see who&rsquo;s going</div>
      </>
    ),
    knows: 'The user hasn\'t RSVP\'d, so Gate 1 forbids revealing any attendee\'s identity.',
    wants: 'Judge whether it\'s worth committing, before earning the social reveal.',
    says: 'Show the count and a "8 you may know" teaser, but keep faces locked, and state the unlock condition out loud rather than hiding it silently.',
    why: 'It stops anyone from lurking a guest list, and hands the user a fair, concrete reason to RSVP. The privacy gate doubles as the conversion moment.',
  },
  {
    key: 'friends', chip: 'Friends going', cap: 'Event page · friends confirmed',
    trig: <>trigger · <b>mutuals have a confirmed RSVP</b></>,
    panel: (
      <>
        <div className="ia-pl">Who&rsquo;s going</div>
        <FriendStack />
        <div className="ia-count">8 friends going <span className="sub">&middot; 151 attending</span></div>
        <div className="ia-note calm"><b>Aanya, Dev and 6 others</b> have confirmed. You won&rsquo;t be walking in alone.</div>
        <div className="ia-cta">RSVP &middot; 3 taps</div>
      </>
    ),
    knows: '8 mutual connections hold a confirmed RSVP for this event.',
    wants: 'Confirm I won\'t be showing up alone before I commit.',
    says: 'Lead with faces and "confirmed" badges, names ahead of any crowd number. The 151 total is secondary context.',
    why: 'Recognising known faces answers "is anyone I know going?" in under a second — the exact question that used to push people off into WhatsApp.',
  },
  {
    key: 'none', chip: 'No friends yet', cap: "Event page · no friends RSVP'd",
    trig: <>trigger · <b>0 friends in, but user has connections</b></>,
    panel: (
      <>
        <div className="ia-pl">Who&rsquo;s going</div>
        <div className="ia-rowcard">
          <div className="ia-rc-ico" style={{ background: 'var(--w-purple-soft)', color: 'var(--w-purple-dark)' }}>✦</div>
          <div className="ia-rc-tx"><b>None of your friends yet</b>Be the first in, or bring someone</div>
        </div>
        <div className="ia-note">12 people here flagged they&rsquo;re <b>looking for company</b>.</div>
        <div className="ia-cta ghost">Invite a friend</div>
        <div className="ia-cta">See who&rsquo;s looking for company</div>
      </>
    ),
    knows: 'Zero friends have RSVP\'d, but the user does have connections on the platform.',
    wants: 'Avoid being the one person who shows up alone.',
    says: 'Never render an empty avatar row — it reads as rejection. Replace it with an action (invite) and surface others who opted into "looking for company."',
    why: 'An empty state framed as a dead end spikes anxiety; framed as "here\'s your next move," it dissolves it.',
  },
  {
    key: 'invited', chip: 'Invited · undecided', cap: 'Event page · invites pending',
    trig: <>trigger · <b>friends invited, no reply yet</b></>,
    panel: (
      <>
        <div className="ia-pl">Who&rsquo;s going</div>
        <div className="ia-avstack"><IAv c="pend">NR</IAv><IAv c="pend">SJ</IAv></div>
        <div className="ia-count" style={{ color: 'var(--w-text-2)' }}>2 friends invited &middot; awaiting reply</div>
        <div className="ia-note warn"><b>Invited isn&rsquo;t confirmed.</b> We&rsquo;ll nudge you when they respond.</div>
        <div className="ia-cta">RSVP anyway</div>
      </>
    ),
    knows: 'Friends were invited but haven\'t responded yet.',
    wants: 'Know whether to wait for friends or just commit now.',
    says: 'Pending must look unmistakably different — dashed, grey, the literal word "invited" — and never borrow the visual language of a confirmed yes.',
    why: 'Overstating certainty sets up a worse let-down at the door. Honest ambiguity is calmer than false confidence.',
  },
  {
    key: 'newuser', chip: 'New to the city', cap: 'Event page · no network yet',
    trig: <>trigger · <b>user has no connections on platform</b></>,
    panel: (
      <>
        <div className="ia-pl">New here?</div>
        <div className="ia-rowcard">
          <div className="ia-rc-ico" style={{ background: '#E8F6EE', color: '#1F7A4D' }}>◎</div>
          <div className="ia-rc-tx"><b>23 people nearby are going solo too</b>Most are new to the city, like you</div>
        </div>
        <div className="ia-toggle">
          I&rsquo;m looking for company
          <div className="ia-sw" />
        </div>
        <div className="ia-note calm">Turn this on and others who did the same can say hi — <b>only after you both RSVP.</b></div>
        <div className="ia-cta">RSVP &amp; find people</div>
      </>
    ),
    knows: 'The user has no connections yet, likely new to the app or the area.',
    wants: 'Find like-minded people to go with, and not feel alone in a new place.',
    says: 'Swap social proof for peer discovery. Surface others who flagged "looking for company," gated behind RSVP and a mutual opt-in to contact.',
    why: 'The loneliest user is the one the happy path forgets. Naming "others are in the same boat" is the entire reason this product exists.',
  },
  {
    key: 'change', chip: 'Friend backs out', cap: 'Event page · count changed',
    trig: <>trigger · <b>a confirmed friend withdraws after you commit</b></>,
    panel: (
      <>
        <div className="ia-pl">Who&rsquo;s going</div>
        <div className="ia-avstack"><IAv c="c1">MA</IAv><IAv c="c3">AK</IAv><IAv c="c4">RP</IAv><IAv c="more">+4</IAv></div>
        <div className="ia-count">7 friends going <span className="sub">was 8</span></div>
        <div className="ia-note warn"><b>Dev can no longer make it.</b> Count updated, you&rsquo;re still confirmed.</div>
        <div className="ia-cta ghost">View your RSVP</div>
      </>
    ),
    knows: 'A previously-confirmed friend withdrew after the user had already committed.',
    wants: 'Not be surprised at the door; quietly reassess.',
    says: 'Update the number in place and announce the change exactly once, calmly. Never silently mutate a figure the user has already read.',
    why: 'Coordination anxiety is mostly the fear of surprises. A calm, honest correction protects trust in the number itself.',
  },
  {
    key: 'loading', chip: 'Loading', cap: 'Event page · data in flight',
    trig: <>trigger · <b>attendee fetch not resolved</b></>,
    panel: (
      <>
        <div className="ia-pl">Who&rsquo;s going</div>
        <div className="ia-avstack">
          <div className="ia-av ia-skel" style={{ width: 33, height: 33 }} />
          <div className="ia-av ia-skel" style={{ width: 33, height: 33 }} />
          <div className="ia-av ia-skel" style={{ width: 33, height: 33 }} />
          <div className="ia-av ia-skel" style={{ width: 33, height: 33 }} />
        </div>
        <div className="ia-skel" style={{ height: 14, width: '64%' }} />
        <div className="ia-skel" style={{ height: 40, width: '100%', marginTop: 2 }} />
        <div className="ia-skel" style={{ height: 42, width: '100%', marginTop: 'auto' }} />
      </>
    ),
    knows: 'Attendee data is in flight; counts aren\'t confirmed yet.',
    wants: 'Trust that the social info is real, not stale or guessed.',
    says: 'Render a skeleton in the exact shape of the answer — never a spinner over a void, and never a placeholder "0" that will jump.',
    why: 'A "0 friends" that flickers to "8" does more damage than a half-second skeleton. Don\'t show a number you might have to retract.',
  },
  {
    key: 'failed', chip: 'Load failed', cap: 'Event page · social layer failed',
    trig: <>trigger · <b>attendee fetch errors, page data fine</b></>,
    panel: (
      <>
        <div className="ia-pl">Who&rsquo;s going</div>
        <div className="ia-note alert"><b>Couldn&rsquo;t load who&rsquo;s going.</b> The rest of the event is fine.</div>
        <div className="ia-cta ghost">Retry</div>
        <div className="ia-note" style={{ marginTop: 'auto' }}>You can still RSVP — friends will show once it loads.</div>
        <div className="ia-cta">RSVP now</div>
      </>
    ),
    knows: 'The attendee fetch failed, but the rest of the event data loaded fine.',
    wants: 'Still decide on the event despite the missing social layer.',
    says: 'Fail the panel, not the page. Name what\'s missing, offer a retry, and never block RSVP on a social signal that didn\'t arrive.',
    why: 'Treating a partial failure as a total outage strands the user. The core action has to survive a degraded social layer.',
  },
  {
    key: 'soldout', chip: 'Sold out', cap: 'Event page · capacity reached',
    trig: <>trigger · <b>attending == capacity</b></>,
    panel: (
      <>
        <div className="ia-pl">Who&rsquo;s going</div>
        <FriendStack />
        <div className="ia-count">Event full <span className="sub">&middot; 151 / 151</span></div>
        <div className="ia-note warn"><b>Sold out</b> — spots open up as plans change.</div>
        <div className="ia-cta">Join the waitlist</div>
      </>
    ),
    knows: 'Capacity is reached; the user hasn\'t secured a spot.',
    wants: 'Still get in, or at least know the odds.',
    says: 'State capacity honestly, keep the social context visible, and turn the dead end into a waitlist action with an expectation set.',
    why: '"Sold out" with no next step is pure frustration. A waitlist converts a wall into a queue you can actually stand in.',
  },
  {
    key: 'waitlist', chip: 'On waitlist', cap: 'Event page · waitlisted',
    trig: <>trigger · <b>user joins the waitlist</b></>,
    panel: (
      <>
        <div className="ia-pl">Your status</div>
        <div className="ia-rowcard">
          <div className="ia-rc-ico" style={{ background: 'var(--w-purple-soft)', color: 'var(--w-purple-dark)', fontFamily: 'var(--display)', fontSize: 12, fontWeight: 700 }}>#4</div>
          <div className="ia-rc-tx"><b>You&rsquo;re #4 on the waitlist</b>~70% of the top 5 usually get in</div>
        </div>
        <div className="ia-note">We&rsquo;ll notify you the moment a spot opens. <b>8 friends still going.</b></div>
        <div className="ia-cta ghost">Leave waitlist</div>
      </>
    ),
    knows: 'The user holds a waitlist position; admission is probabilistic.',
    wants: 'Know the odds and whether to line up a backup plan.',
    says: 'Show the position, set expectation with real history ("~70% of top 5 get in"), and let them hold or drop the spot freely.',
    why: 'Uncertainty is bearable once it\'s quantified. A position to hold onto beats an open-ended "maybe."',
  },
  {
    key: 'withdrew', chip: 'Withdrew', cap: 'Event page · RSVP cancelled',
    trig: <>trigger · <b>user withdraws their attendance</b></>,
    panel: (
      <>
        <div className="ia-pl">Your status</div>
        <div className="ia-note"><b>You&rsquo;re no longer attending.</b> No hard feelings.</div>
        <FriendStack />
        <div className="ia-count">8 friends still going</div>
        <div className="ia-cta" style={{ marginTop: 'auto' }}>Re-join &middot; 1 tap</div>
      </>
    ),
    knows: 'The user cancelled their own RSVP.',
    wants: 'Leave cleanly, with the door open to come back.',
    says: 'Confirm the withdrawal without guilt, keep the friends-going context as a reason to return, and make re-joining a single tap.',
    why: 'Punishing a withdrawal poisons the next decision. A graceful exit keeps the user willing to return.',
  },
]

/* ── IA Explorer component ────────────────────────────────────── */
export default function WudIA() {
  const [cur, setCur] = useState(1) // default: friends going
  const [touched, setTouched] = useState(false)
  const explorerRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const curRef = useRef(cur)
  curRef.current = cur

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    function startAuto() {
      if (autoRef.current || touched) return
      autoRef.current = setInterval(() => {
        setCur(c => (c + 1) % STATES.length)
      }, 3600)
    }
    function stopAuto() {
      if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null }
    }

    const obs = new IntersectionObserver(es => {
      if (es[0].isIntersecting) startAuto(); else stopAuto()
    }, { threshold: 0.4 })

    const el = explorerRef.current
    if (el) {
      obs.observe(el)
      el.addEventListener('mouseenter', () => { setTouched(true); stopAuto() }, { once: true })
    }
    return () => { obs.disconnect(); stopAuto() }
  }, [touched])

  const s = STATES[cur]

  return (
    <section className="chapter">
      <div className="chapter-inner">
        <div className="lede">
          <div className="col-l">
            <div className="kick"><span className="n">08</span> Interaction architecture</div>
            <h2 className="chap-h">Designing for uncertainty, <em>not just the happy path.</em></h2>
            <p className="chap-body">
              Research showed discovery was never the real problem — <strong>coordination anxiety</strong> was.
              People found events fine, then left the app to answer &ldquo;is anyone I know going?&rdquo;,
              &ldquo;am I attending alone?&rdquo;, &ldquo;is this even worth it?&rdquo;. So I designed the
              coordination layer as <strong>system behaviour</strong>, not a screen: what the product should know,
              and how it should respond, under every real-world condition, not just the one where everything goes right.
            </p>
            <p className="chap-body">Drawing the happy path took an afternoon. The work was the other ten branches.</p>
          </div>
          <div className="col-r">
            <div className="think">
              <div className="think-blob"><span className="blush l" /><span className="blush r" /></div>
              <div className="think-note">
                <span className="lbl">thinking</span>
                <span className="said">A visual designer asks how the screen looks. An interaction designer asks <em>how the product behaves</em> when the data is missing, the friend bails, or the room is full.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Happy vs real paths */}
        <div className="ia-paths">
          <div className="ia-path happy">
            <div className="pk"><span className="pd" />The path everyone designs</div>
            <h4>Friends are going. Data loads. Seats are open.</h4>
            <p>One screen, one state. Faces appear, the count is real, RSVP succeeds. It demos beautifully and it&rsquo;s true maybe a third of the time.</p>
          </div>
          <div className="ia-path real">
            <div className="pk"><span className="pd" />The conditions that actually occur</div>
            <ul>
              <li>No friends have RSVP&rsquo;d, or the user has none on the platform yet.</li>
              <li>Friends were invited but haven&rsquo;t replied.</li>
              <li>A confirmed friend backs out after you commit.</li>
              <li>Attendee data is loading, or fails to load.</li>
              <li>The event is full; the user joins a waitlist, or withdraws.</li>
            </ul>
          </div>
        </div>

        {/* Gate 1 */}
        <div className="surface-head" style={{ marginTop: 48 }}>
          <div className="sub-kick">
            <span className="sub-n" style={{ background: '#6F4FE6' }}>→</span>
            The decision spine
          </div>
          <h3 className="sub-h">Two gates decide <em>what the panel is even allowed to say.</em></h3>
          <p className="sub-b">Before rendering anything social, the system resolves two questions. The first protects attendees; the second decides which reality the user is in.</p>
        </div>

        <div className="ia-spine">
          <div className="ia-node"><div className="nk">Entry</div><div className="nt">Opens event</div></div>
          <div className="ia-arrow"><svg viewBox="0 0 34 14" fill="none"><path d="M0 7h28m0 0l-6-5m6 5l-6 5" stroke="currentColor" strokeWidth="1.6" /></svg></div>
          <div className="ia-node dec"><div className="nk">Gate 1 · privacy</div><div className="nt">Has the user<br />RSVP&rsquo;d?</div></div>
          <div className="ia-arrow"><svg viewBox="0 0 34 14" fill="none"><path d="M0 7h28m0 0l-6-5m6 5l-6 5" stroke="currentColor" strokeWidth="1.6" /></svg></div>
          <div className="ia-branch">
            <div className="br"><span className="yn no">No</span> Counts only. Attendee identities stay hidden until you&rsquo;re in.</div>
            <div className="br"><span className="yn yes">Yes</span> Reveal who&rsquo;s going — gated by each attendee&rsquo;s opt-in.</div>
          </div>
        </div>

        <div className="ia-gate-note">
          <span className="lk">why gate 1</span>
          <p>Co-attendee identities only unlock <strong>after you register</strong>, and only for people who opted in to being contacted. You can&rsquo;t lurk a guest list. That single rule is what lets the panel show real faces without it feeling like surveillance — the exact line the identity research drew.</p>
        </div>

        {/* Gate 2 */}
        <div className="ia-spine" style={{ marginTop: 14 }}>
          <div className="ia-node dec"><div className="nk">Gate 2 · reality</div><div className="nt">Who&rsquo;s in your<br />network here?</div></div>
          <div className="ia-arrow"><svg viewBox="0 0 34 14" fill="none"><path d="M0 7h28m0 0l-6-5m6 5l-6 5" stroke="currentColor" strokeWidth="1.6" /></svg></div>
          <div className="ia-branch">
            <div className="br"><span className="yn yes">Friends</span> Lead with faces &amp; confirmed badges.</div>
            <div className="br"><span className="yn no">None</span> Offer an action; surface peers who flagged &ldquo;looking for company.&rdquo;</div>
            <div className="br"><span className="yn no">New</span> No network yet — switch the panel to peer discovery for people new to the city.</div>
          </div>
        </div>

        {/* Interactive state explorer */}
        <div className="surface-head" style={{ marginTop: 52 }}>
          <div className="sub-kick">
            <span className="sub-n" style={{ background: '#C8459B' }}>→</span>
            The state model · interactive
          </div>
          <h3 className="sub-h">One panel, <em>eleven states.</em> Tap a condition to see how it behaves.</h3>
          <p className="sub-b">The same &ldquo;who&rsquo;s going&rdquo; surface, resolved under every condition it can hit in the wild. For each: what the system <em>knows</em>, what the user is <em>trying to do</em>, what the interface should <em>say</em>, and why that choice lowers coordination anxiety.</p>
        </div>

        <div className="ia-explorer" ref={explorerRef}>
          {/* Phone */}
          <div className="ia-stage">
            <span className="deco-b x1" /><span className="deco-b x2" />
            <div className="phone">
              <div className="screen">
                <div className="notch" />
                <div className="status-bar"><span>9:41</span><div className="icons"><span className="sig"><i /><i /><i /><i /></span><div className="batt"><i /></div></div></div>
                <div className="ia-screen">
                  <div className="ia-ev-head">
                    <div className="iah-t">Food Festival</div>
                    <div className="iah-m">Oct 17 · 1pm · @ Angels Square</div>
                  </div>
                  <div className="ia-panel" key={s.key}>
                    {s.panel}
                  </div>
                </div>
              </div>
            </div>
            <div className="stage-cap">{s.cap}</div>
          </div>

          {/* Controls + ledger */}
          <div className="ia-ctrl">
            <div className="ia-chips">
              {STATES.map((st, i) => (
                <button
                  key={st.key}
                  type="button"
                  className={`ia-chip${cur === i ? ' on' : ''}`}
                  onClick={() => { setTouched(true); setCur(i) }}
                >
                  <span className="chip-dot" />{st.chip}
                </button>
              ))}
            </div>
            <div className="ia-led-head">
              <span className="ia-nm">{s.chip}</span>
              <span className="ia-trig">{s.trig}</span>
            </div>
            <div className="ia-led">
              <div className="ia-cell"><div className="ia-ck">What the system knows</div><p>{s.knows}</p></div>
              <div className="ia-cell"><div className="ia-ck">What the user wants</div><p>{s.wants}</p></div>
              <div className="ia-cell"><div className="ia-ck">What the interface says</div><p>{s.says}</p></div>
              <div className="ia-cell why"><div className="ia-ck">Why it lowers anxiety</div><p>{s.why}</p></div>
            </div>
          </div>
        </div>

        <p className="caveat" style={{ marginTop: 30 }}>
          None of this is extra screens — it&rsquo;s the same screen, behaving honestly. The unifying rule:{' '}
          <em>never show a number, a face, or a certainty the system can&rsquo;t stand behind.</em>{' '}
          Loading skeletons hold the shape of the answer, failures degrade the panel without blocking the RSVP, and every dead end (full, waitlisted, withdrawn) carries a next move. That&rsquo;s what turns coordination anxiety into coordination confidence.
        </p>
      </div>
    </section>
  )
}
