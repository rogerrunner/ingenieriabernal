import { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { Btn } from './ui'

const LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Equipo', path: '/equipo' },
  { label: 'Cobertura', path: '/cobertura-nacional' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contacto', path: '/contacto' },
]

const WA = '573024778910'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-ham { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-ham { display: none !important; }
          .nav-mobile-panel { display: none !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? 'rgba(0,26,51,0.97)' : 'rgba(0,42,80,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(23,162,184,0.15)',
        transition: 'all 0.3s ease',
        padding: scrolled ? '10px 24px' : '16px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 32, height: 32, border: '2px solid #17A2B8', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#17A2B8', fontSize: 12,
          }}>BIC</div>
          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#fff', fontSize: 13, letterSpacing: '0.04em' }}>
              Bernal Ingeniería Consultores
            </div>
            <div style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Consultoría Integral · Colombia
            </div>
          </div>
        </Link>

        <div className="nav-desktop" style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {LINKS.map(l => {
            const active = location === l.path
            return (
              <Link key={l.path} href={l.path} style={{
                textDecoration: 'none', padding: '6px 12px', borderRadius: '2px',
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 11,
                letterSpacing: '0.04em',
                color: active ? '#17A2B8' : 'rgba(255,255,255,0.75)',
                borderBottom: active ? '2px solid #17A2B8' : '2px solid transparent',
                transition: 'all 0.2s',
              }}>
                {l.label}
              </Link>
            )
          })}
          <Btn
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, me interesa una consultoría con BIC Bernal Ingeniería Consultores.')}`}
            style={{ padding: '8px 16px', fontSize: 11, marginLeft: 8 }}
          >
            📱 WhatsApp
          </Btn>
        </div>

        <button
          className="nav-ham"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menú"
          style={{
            display: 'none', flexDirection: 'column', gap: 5,
            background: 'transparent', border: 'none', cursor: 'pointer', padding: 8,
          }}
        >
          <span style={{ display: 'block', width: 24, height: 2, background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#fff', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      <div
        className="nav-mobile-panel"
        style={{
          display: 'none',
          position: 'fixed', top: scrolled ? 52 : 65, left: 0, right: 0, zIndex: 199,
          background: 'rgba(0,26,51,0.98)', backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(23,162,184,0.2)',
          maxHeight: menuOpen ? '420px' : '0',
          overflow: 'hidden', transition: 'max-height 0.35s ease',
        }}
      >
        <div style={{ padding: '8px 0 16px' }}>
          {LINKS.map(l => {
            const active = location === l.path
            return (
              <Link key={l.path} href={l.path} style={{
                display: 'block', padding: '13px 24px',
                textDecoration: 'none',
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14,
                color: active ? '#17A2B8' : 'rgba(255,255,255,0.85)',
                borderLeft: active ? '3px solid #17A2B8' : '3px solid transparent',
              }}>
                {l.label}
              </Link>
            )
          })}
          <div style={{ padding: '8px 24px 4px' }}>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, me interesa una consultoría con BIC Bernal Ingeniería Consultores.')}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#17A2B8', color: '#fff', padding: '11px 22px',
                borderRadius: 2, fontSize: 13, fontWeight: 600,
                textDecoration: 'none', fontFamily: "'Montserrat', sans-serif",
              }}
            >
              📱 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
