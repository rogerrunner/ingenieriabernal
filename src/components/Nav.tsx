import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'wouter'
import { Btn } from './ui'

const LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Equipo', path: '/equipo' },
  { label: 'Cobertura', path: '/cobertura-nacional' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contacto', path: '/contacto' },
]

const SERVICES_SUBMENU = [
  { label: 'Estudios Hidrológicos', path: '/servicios/estudios-hidrologicos' },
  { label: 'Modelación HEC-RAS 2D', path: '/servicios/modelacion-hec-ras' },
  { label: 'Diseño Acueducto y Alcantarillado', path: '/servicios/acueducto-alcantarillado' },
  { label: 'Redes Hidrosanitarias', path: '/servicios/redes-hidrosanitarias' },
  { label: 'Sistemas Contra Incendio NSR-10', path: '/servicios/sistemas-contra-incendio' },
  { label: 'Interventoría Técnica Hidráulica', path: '/servicios/interventoria' },
  { label: 'Formulación Regalías MGA-Web', path: '/servicios/regalias-mga' },
]

const WA = '573024778910'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [location] = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isServicesActive = location === '/servicios' || location.startsWith('/servicios/')

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
        .nav-dropdown-item:hover {
          background: rgba(23,162,184,0.12) !important;
          color: #17A2B8 !important;
        }
        .nav-services-btn:hover {
          color: #17A2B8 !important;
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
          <Link href="/" style={{
            textDecoration: 'none', padding: '6px 12px', borderRadius: '2px',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 11,
            letterSpacing: '0.04em',
            color: location === '/' ? '#17A2B8' : 'rgba(255,255,255,0.75)',
            borderBottom: location === '/' ? '2px solid #17A2B8' : '2px solid transparent',
            transition: 'all 0.2s',
          }}>Inicio</Link>

          {/* Servicios con dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="nav-services-btn"
              onClick={() => setServicesOpen(o => !o)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '6px 12px', borderRadius: '2px',
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 11,
                letterSpacing: '0.04em', cursor: 'pointer',
                color: isServicesActive ? '#17A2B8' : 'rgba(255,255,255,0.75)',
                borderBottom: isServicesActive ? '2px solid #17A2B8' : '2px solid transparent',
                background: 'transparent', border: 'none',
                borderBottomStyle: 'solid',
                borderBottomWidth: 2,
                borderBottomColor: isServicesActive ? '#17A2B8' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              Servicios
              <span style={{ fontSize: 8, transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▼</span>
            </button>

            {servicesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, zIndex: 300,
                background: 'rgba(0,26,51,0.98)', backdropFilter: 'blur(16px)',
                border: '1px solid rgba(23,162,184,0.25)', borderRadius: 4,
                minWidth: 260, padding: '6px 0',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}>
                <Link href="/servicios" style={{
                  display: 'block', padding: '9px 18px',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 10,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#17A2B8', textDecoration: 'none',
                  borderBottom: '1px solid rgba(23,162,184,0.15)', marginBottom: 4,
                }}>Ver todos los servicios →</Link>
                {SERVICES_SUBMENU.map(s => (
                  <Link key={s.path} href={s.path}
                    className="nav-dropdown-item"
                    style={{
                      display: 'block', padding: '9px 18px',
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 12,
                      color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                      transition: 'all 0.15s',
                    }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
          maxHeight: menuOpen ? '600px' : '0',
          overflow: 'hidden', transition: 'max-height 0.35s ease',
        }}
      >
        <div style={{ padding: '8px 0 16px' }}>
          <Link href="/" style={{
            display: 'block', padding: '13px 24px',
            textDecoration: 'none',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14,
            color: location === '/' ? '#17A2B8' : 'rgba(255,255,255,0.85)',
            borderLeft: location === '/' ? '3px solid #17A2B8' : '3px solid transparent',
          }}>Inicio</Link>

          {/* Servicios mobile con submenú */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(o => !o)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '13px 24px',
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14,
                color: isServicesActive ? '#17A2B8' : 'rgba(255,255,255,0.85)',
                borderLeft: isServicesActive ? '3px solid #17A2B8' : '3px solid transparent',
                background: 'transparent', border: 'none', cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              Servicios
              <span style={{ fontSize: 10, marginRight: 8, transition: 'transform 0.2s', transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', display: 'inline-block' }}>▼</span>
            </button>
            <div style={{
              maxHeight: mobileServicesOpen ? '400px' : '0',
              overflow: 'hidden', transition: 'max-height 0.3s ease',
              background: 'rgba(0,0,0,0.2)',
            }}>
              <Link href="/servicios" style={{
                display: 'block', padding: '10px 36px',
                textDecoration: 'none',
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12,
                color: '#17A2B8', letterSpacing: '0.06em',
                borderBottom: '1px solid rgba(23,162,184,0.1)',
              }}>Ver todos los servicios →</Link>
              {SERVICES_SUBMENU.map(s => (
                <Link key={s.path} href={s.path} style={{
                  display: 'block', padding: '10px 36px',
                  textDecoration: 'none',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: 13,
                  color: 'rgba(255,255,255,0.75)',
                }}>{s.label}</Link>
              ))}
            </div>
          </div>

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
                background: '#25D366', color: '#fff', padding: '11px 22px',
                borderRadius: 2, fontSize: 13, fontWeight: 600,
                textDecoration: 'none', fontFamily: "'Montserrat', sans-serif",
              }}
            >
              📱 Solicitar cotización
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
