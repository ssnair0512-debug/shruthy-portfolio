'use client'
import { useEffect } from 'react'

export default function SuppressChrome() {
  useEffect(() => {
    document.body.classList.add('why-standalone')
    return () => {
      document.body.classList.remove('why-standalone')
    }
  }, [])
  return null
}
