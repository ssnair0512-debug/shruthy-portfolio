'use client'
import { useEffect } from 'react'

export default function SuppressChrome() {
  useEffect(() => {
    document.body.classList.add('rds-standalone')
    return () => {
      document.body.classList.remove('rds-standalone')
    }
  }, [])
  return null
}
