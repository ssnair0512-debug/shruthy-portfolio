'use client'

import { useState } from 'react'

const EMAIL = 'ssnair0512@gmail.com'

export default function CopyEmail({ color = 'var(--ink)' }: { color?: string }) {
  const [state, setState] = useState<'idle' | 'copied'>('idle')

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setState('copied')
      setTimeout(() => setState('idle'), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={state === 'copied' ? 'Email copied to clipboard' : 'Copy email address'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 15,
        color: state === 'copied' ? 'oklch(0.55 0.16 150)' : color,
        background: 'none',
        border: 'none',
        borderBottom: '1px solid var(--rule-strong)',
        cursor: 'pointer',
        padding: 0,
        paddingBottom: 2,
        transition: 'color 0.2s',
        fontFamily: 'inherit',
      }}
    >
      {state === 'copied' ? (
        <>
          <CheckIcon />
          <span>Copied</span>
        </>
      ) : (
        <>
          <MailIcon />
          <span>Email</span>
        </>
      )}
    </button>
  )
}

function MailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M1.5 5l6.5 4.5L14.5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
