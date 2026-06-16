'use client'

import { useEffect, useRef, useState } from 'react'

const STEPS = [
  { screen: 0, tapClass: 'r-rsvp-btn', dwell: 2200, railIdx: 0 },
  { screen: 1, tapClass: 'r-plus',     dwell: 2000, railIdx: 1 },
  { screen: 1, tapClass: 'r-done',     dwell: 1800, railIdx: 1 },
  { screen: 2, tapClass: 'r-find',     dwell: 2000, railIdx: 2 },
  { screen: 3, tapClass: null,         dwell: 2000, railIdx: 3 },
]
const LOOP_MS = STEPS.reduce((a, s) => a + s.dwell, 0)

function fmtTime(ms: number) {
  const s = Math.floor(Math.min(ms, LOOP_MS) / 1000)
  return `0:${s < 10 ? '0' : ''}${s}`
}

/* ── Phone tab bar (SVG icon glyphs) ─────────────────────────── */
function ReelTabBar({ active }: { active: 'Explore' | 'You' }) {
  return (
    <div className="tabbar">
      <div className={`tab${active === 'Explore' ? ' active' : ''}`}>
        <div className="tab-glyph">
          <svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><line x1="15.4" y1="15.4" x2="20.5" y2="20.5" /></svg>
        </div>
        Explore
      </div>
      <div className="tab">
        <div className="tab-glyph">
          <svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><line x1="3.5" y1="9.5" x2="20.5" y2="9.5" /><line x1="8" y1="2.5" x2="8" y2="6" /><line x1="16" y1="2.5" x2="16" y2="6" /></svg>
        </div>
        Cal
      </div>
      <div className="tab plus"><div className="tab-ic-plus">+</div></div>
      <div className="tab">
        <div className="tab-glyph">
          <svg viewBox="0 0 24 24"><path d="M12 21.5c4.2-4 7-7.2 7-11A7 7 0 0 0 5 10.5c0 3.8 2.8 7 7 11z" /><circle cx="12" cy="10.2" r="2.4" /></svg>
        </div>
        Map
      </div>
      <div className={`tab${active === 'You' ? ' active' : ''}`}>
        <div className="tab-glyph">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6" /><path d="M5.8 20a6.2 6.2 0 0 1 12.4 0" /></svg>
        </div>
        You
      </div>
    </div>
  )
}

function SBar() {
  return (
    <div className="status-bar">
      <span>9:41</span>
      <div className="icons">
        <span className="sig"><i /><i /><i /><i /></span>
        <div className="batt"><i /></div>
      </div>
    </div>
  )
}

export default function WudHeroReel() {
  const [curScreen, setCurScreen]     = useState(0)
  const [railIdx, setRailIdx]         = useState(0)
  const [guestCount, setGuestCount]   = useState(1)
  const [chatBubs, setChatBubs]       = useState([false, false, false, false])
  const [tickPopped, setTickPopped]   = useState(false)
  const [tapLeft, setTapLeft]         = useState('0px')
  const [tapTop, setTapTop]           = useState('0px')
  const [tapShow, setTapShow]         = useState(false)
  const [tapPress, setTapPress]       = useState(false)
  const [timeStr, setTimeStr]         = useState('0:00')
  const [progressW, setProgressW]     = useState(0)

  const stageRef      = useRef<HTMLDivElement>(null)
  const timerRef      = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef        = useRef<number | null>(null)
  const stepIdxRef    = useRef(0)
  const loopStartRef  = useRef(0)
  const isRunningRef  = useRef(false)
  const runStepRef    = useRef<() => void>(() => {})

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function clear() {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }

    function progTick() {
      const elapsed = Date.now() - loopStartRef.current
      setProgressW(Math.min(1, elapsed / LOOP_MS) * 100)
      setTimeStr(fmtTime(elapsed))
      if (elapsed < LOOP_MS) rafRef.current = requestAnimationFrame(progTick)
    }

    function startProg() {
      loopStartRef.current = Date.now()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (!reduce) rafRef.current = requestAnimationFrame(progTick)
    }

    function advance() {
      stepIdxRef.current = (stepIdxRef.current + 1) % STEPS.length
      if (stepIdxRef.current === 0) startProg()
      runStepRef.current()
    }

    function positionTapper(cls: string, cb: () => void) {
      if (reduce || !stageRef.current) { timerRef.current = setTimeout(cb, 400); return }
      const el = stageRef.current.querySelector(`.${cls}`) as HTMLElement | null
      if (!el) { timerRef.current = setTimeout(cb, 400); return }
      const sr = stageRef.current.getBoundingClientRect()
      const er = el.getBoundingClientRect()
      setTapLeft((er.left - sr.left + er.width / 2) + 'px')
      setTapTop((er.top - sr.top + er.height / 2) + 'px')
      setTapShow(true)
      timerRef.current = setTimeout(() => {
        setTapPress(true)
        timerRef.current = setTimeout(() => {
          setTapPress(false)
          setTapShow(false)
          cb()
        }, 380)
      }, 650)
    }

    runStepRef.current = function () {
      const step = STEPS[stepIdxRef.current]
      setCurScreen(step.screen)
      setRailIdx(step.railIdx)

      if (stepIdxRef.current === 0) setGuestCount(1)

      if (step.screen === 2) {
        setTickPopped(false)
        requestAnimationFrame(() => setTickPopped(true))
      }
      if (step.screen === 3) {
        setChatBubs([false, false, false, false])
        ;([0, 1, 2, 3] as const).forEach(i => {
          timerRef.current = setTimeout(() => {
            setChatBubs(p => { const n = [...p]; n[i] = true; return n })
          }, 350 + i * 450)
        })
      }

      const tapDelay = Math.max(step.dwell - 1500, 600)
      timerRef.current = setTimeout(() => {
        if (step.tapClass) {
          positionTapper(step.tapClass, () => {
            if (stepIdxRef.current === 1) setGuestCount(2)
            const hold = stepIdxRef.current === 1 ? 600 : 0
            timerRef.current = setTimeout(advance, hold)
          })
        } else {
          timerRef.current = setTimeout(advance, 1500)
        }
      }, tapDelay)
    }

    function start() {
      if (isRunningRef.current) return
      isRunningRef.current = true
      stepIdxRef.current = 0
      startProg()
      runStepRef.current()
    }

    const obs = new IntersectionObserver(es => {
      if (es[0].isIntersecting) start()
      else { isRunningRef.current = false; clear() }
    }, { threshold: 0.3 })

    if (stageRef.current) obs.observe(stageRef.current)
    return () => { obs.disconnect(); clear() }
  }, [])

  function handleReplay() {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    stepIdxRef.current = 0
    isRunningRef.current = false
    setCurScreen(0); setRailIdx(0); setGuestCount(1)
    setTapShow(false); setProgressW(0); setTimeStr('0:00')
    setChatBubs([false, false, false, false])
    setTimeout(() => {
      isRunningRef.current = false
      runStepRef.current()
    }, 80)
  }

  const sc = (n: number) => `reel-screen${curScreen === n ? ' on' : ''}`

  return (
    <div className="hero-demo">
      <div className="hero-demo-head">
        <span className="hd-live">
          <span className="hd-dot" />
          <span>{timeStr}</span>
          &nbsp;/&nbsp;0:10 &middot; plays on loop
        </span>
        <span className="hd-cap">
          The core loop, start to finish: discover an event, RSVP in seconds, see who&rsquo;s going, then break the ice. One product, where people had been stitching four apps together.
        </span>
        <button className="hd-replay" type="button" onClick={handleReplay}>&#8634; Replay</button>
      </div>
      <div className="hero-progress"><span className="hp-fill" style={{ width: progressW + '%' }} /></div>

      <div className="reel-wrap">
        {/* ── Phone ── */}
        <div className="reel-stage" ref={stageRef}>
          <span className="deco-b x1" /><span className="deco-b x2" /><span className="deco-b x3" />
          <div className="phone reel-phone">
            <div className="screen">
              <div className="notch" />
              <div className="reel-stack">

                {/* Screen 0 · Explore */}
                <div className={sc(0)}>
                  <SBar />
                  <div className="explore">
                    <div className="exp-search"><span>&#128269;</span><span>Tonight near you</span><span className="chip">&#x25BE;</span></div>
                    <div className="section-label">Events you&rsquo;re invited to</div>
                    <div className="invite-card">
                      <div className="invite-head">
                        <div className="exp-av">NR</div>
                        <div className="nm">Niomi &middot; invited<div className="sub">2 friends going</div></div>
                        <span className="inv r-rsvp-btn">RSVP &rsaquo;</span>
                      </div>
                      <div className="invite-banner">
                        <div className="ib-date"><div className="d">17</div><div className="m">OCT</div></div>
                        <div className="ib-info"><div className="title">Food Festival</div><div className="meta">1pm &middot; Angels Square</div></div>
                      </div>
                    </div>
                    <div className="section-label" style={{ marginTop: 14 }}>Explore by neighbourhood</div>
                    <div className="neighbour">
                      <div className="row">
                        <div className="ev-thumb" />
                        <div className="nb-info"><div className="t">Open-air market</div><div className="s">Sat &middot; 4 friends saved</div></div>
                      </div>
                    </div>
                  </div>
                  <ReelTabBar active="Explore" />
                </div>

                {/* Screen 1 · RSVP */}
                <div className={sc(1)}>
                  <SBar />
                  <div className="rsvp">
                    <div className="rsvp-banner"><div className="rb-back">&#8249;</div><div className="rb-label">FOOD FESTIVAL</div></div>
                    <div className="rsvp-body">
                      <div className="rsvp-title">Food Festival</div>
                      <div className="rsvp-meta">Oct 17<span className="dot">&middot;</span>1pm<span className="dot">&middot;</span>@Angels Square</div>
                      <div className="att-row">
                        <div className="att-top">
                          <div className="av-stack">
                            <div className="rsvp-av a">MA</div><div className="rsvp-av b">DI</div>
                            <div className="rsvp-av c">AK</div><div className="rsvp-av d">+5</div>
                          </div>
                          <div className="left-pill"><b>49</b> seats left</div>
                        </div>
                        <div className="att-counts"><b>151 attending</b><span className="you-going">&middot; 8 friends going</span></div>
                      </div>
                      <div className="guests">
                        <div className="gh-label">Confirm number of guests</div>
                        <div className="stepper">
                          <div className="st-btn r-minus">&#8722;</div>
                          <div className="st-num r-num">{guestCount}</div>
                          <div className="st-btn r-plus">+</div>
                        </div>
                        <div className="st-note">Tickets are limited, RSVP to secure your spot</div>
                      </div>
                      <div className="rsvp-confirm"><span className="rc-check r-check">&#10003;</span> I confirm my attendance</div>
                      <div className="done-btn r-done">DONE</div>
                    </div>
                  </div>
                </div>

                {/* Screen 2 · Confirmation */}
                <div className={sc(2)}>
                  <SBar />
                  <div className="confirm-screen">
                    <div className={`conf-tick${tickPopped ? ' pop' : ''}`}>&#10003;</div>
                    <h4>You&rsquo;re going!</h4>
                    <div className="who-going">
                      <div className="wg-stack">
                        <div className="wg-av" style={{ background: '#FF7AC6' }}>MA</div>
                        <div className="wg-av" style={{ background: '#5FD3E0', color: '#143A40' }}>DI</div>
                        <div className="wg-av" style={{ background: '#B89CFF' }}>AK</div>
                      </div>
                      <span className="wg-t">8 friends going too</span>
                    </div>
                    <div className="find-cta r-find">Find people to go with &rsaquo;</div>
                    <div className="conf-sub">No one you know? You&rsquo;re not the only one going solo.</div>
                  </div>
                </div>

                {/* Screen 3 · Chat */}
                <div className={sc(3)}>
                  <SBar />
                  <div className="chat-screen">
                    <div className="ch-head">
                      <span className="ch-back">&#8249;</span>
                      <div className="ch-av">AK</div>
                      <div className="ch-nm">Aanya K.<div className="ch-s">also going &middot; Food Festival</div></div>
                    </div>
                    <div className="ch-body">
                      <div className="ch-ctx">You&rsquo;re both going to Food Festival &middot; Oct 17</div>
                      <div className={`bub them${chatBubs[0] ? ' show' : ''}`}>Hey! Saw you&rsquo;re going Saturday too &#127881;</div>
                      <div className={`bub me${chatBubs[1] ? ' show' : ''}`}>Yes! First time though, going solo</div>
                      <div className="suggest">
                        <div className="sug-lbl">Suggested openers</div>
                        <span className={`pill${chatBubs[2] ? ' show' : ''}`}>Want to meet at the entrance?</span>
                        <span className={`pill${chatBubs[3] ? ' show' : ''}`}>Which stalls are you hitting first?</span>
                      </div>
                    </div>
                    <div className="ch-input">
                      <div className="ch-box">Message&hellip;</div>
                      <div className="ch-send">&#8250;</div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tapper${tapShow ? ' show' : ''}${tapPress ? ' press' : ''}`}
                  style={{ left: tapLeft, top: tapTop }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Step rail ── */}
        <div className="reel-rail">
          {[
            { title: 'Discover & RSVP', body: 'Invited events stack above cold discovery, so social context is the first thing you see.', mi: 'tap → RSVP' },
            { title: 'Confirm in three taps', body: '"49 left" informs without pressuring.', mi: 'stepper + · confirm · DONE' },
            { title: "See who's in", body: 'The reassurance lands at the moment of commitment, and names the solo case out loud.', mi: '8 friends going' },
            { title: 'Break the ice', body: 'A lightweight chat with suggested openers turns a stranger into a plan, the off-platform leak, sealed.', mi: 'suggested openers' },
          ].map((s, i) => (
            <div key={i} className={`rstep${railIdx === i ? ' active' : ''}`}>
              <div className="rn">{i + 1}</div>
              <div>
                <h5>{s.title}</h5>
                <p>{s.body} <span className="mi">{s.mi}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
