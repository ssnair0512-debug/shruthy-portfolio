'use client'

import { useState } from 'react'

const EMAIL = 'ssnair0512@gmail.com'

export default function ContactCopyEmail() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
      style={{
        background: 'var(--ink)',
        color: 'var(--paper)',
        border: '2px solid var(--ink)',
        padding: '13px 22px',
        borderRadius: 999,
        fontFamily: 'var(--display)',
        fontWeight: 600,
        fontSize: 15,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        boxShadow: '0 3px 0 var(--ink)',
        cursor: 'pointer',
        textDecoration: 'none',
        outline: 'none',
      }}
    >
      <span>{copied ? '✓' : '✉'}</span>
      {copied ? 'Copied!' : 'Copy email'}
    </button>
  )
}
