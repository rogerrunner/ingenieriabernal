import { useState, useEffect } from 'react'

const WA_LINK =
  'https://wa.me/573024778910?text=Hello%2C%20I%20need%20hydraulic%20engineering%20services'

export default function USWelcomeBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const lang = navigator.language || ''
    const closed = sessionStorage.getItem('us_banner_closed')
    if (lang.startsWith('en') && closed !== 'true') {
      setVisible(true)
    }
  }, [])

  function handleClose() {
    sessionStorage.setItem('us_banner_closed', 'true')
    setVisible(false)
  }

  return (
    <div
      role="banner"
      aria-label="Welcome banner for English-speaking visitors"
      style={{
        position: 'relative',
        zIndex: 1000,
        backgroundColor: '#1C3557',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '0.55rem 3rem 0.55rem 1rem',
        fontSize: 'clamp(0.78rem, 2vw, 0.9rem)',
        lineHeight: 1.4,
        flexWrap: 'wrap',
        minHeight: '2.4rem',
        overflow: 'hidden',
        maxHeight: visible ? '6rem' : '0',
        paddingTop: visible ? '0.55rem' : '0',
        paddingBottom: visible ? '0.55rem' : '0',
        transition: 'none',
      }}
    >
      {/* Message + CTA */}
      <span style={{ textAlign: 'center' }}>
        Hydraulic Engineering for your project in Colombia{' '}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get a free quote via WhatsApp"
          style={{
            display: 'inline-block',
            marginLeft: '0.4rem',
            padding: '0.2rem 0.75rem',
            backgroundColor: '#F5A623',
            color: '#1C3557',
            fontWeight: 700,
            borderRadius: '3px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            letterSpacing: '0.01em',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#d48f1a')
          }
          onMouseOut={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F5A623')
          }
        >
          Get a free quote →
        </a>
      </span>

      {/* Close button */}
      <button
        onClick={handleClose}
        aria-label="Close welcome banner"
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          fontSize: '1.1rem',
          lineHeight: 1,
          padding: '0.25rem 0.4rem',
          opacity: 0.75,
          transition: 'opacity 0.2s',
        }}
        onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '1')}
        onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = '0.75')}
      >
        ✕
      </button>
    </div>
  )
}
