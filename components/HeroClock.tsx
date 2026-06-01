'use client'

import { useEffect, useState } from 'react'

export default function HeroClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      const d = new Date()
      let h = d.getHours()
      const m = d.getMinutes()
      const s = d.getSeconds()
      const ap = h >= 12 ? 'PM' : 'AM'
      h = h % 12 || 12
      const pad = (n: number) => String(n).padStart(2, '0')
      setTime(`${pad(h)}:${pad(m)}:${pad(s)} ${ap}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="clock" aria-label="Current time" aria-live="off">
      {time}
    </div>
  )
}
