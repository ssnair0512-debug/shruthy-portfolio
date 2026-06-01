'use client'
import { useEffect } from 'react'
export default function SuppressChrome() {
  useEffect(() => {
    document.body.classList.add('wud-standalone')
    return () => { document.body.classList.remove('wud-standalone') }
  }, [])
  return null
}
