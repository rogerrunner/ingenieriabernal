import { useState, useEffect, useRef, ReactNode, CSSProperties } from 'react'

/* ── Intersection Observer hook ── */
export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ── Animated counter hook ── */
export function useCounter(target: number, duration = 1400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (target === 0) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [target, duration])
  return count
}

/* ── Blueprint SVG background ── */
export function BlueprintBg({ opacity = 0.06 }: { opacity?: number }) {
  const id = useRef(`bp-${Math.random().toString(36).slice(2, 8)}`)
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`${id.current}-g`} width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#17A2B8" strokeWidth="0.5" opacity={opacity} />
        </pattern>
        <pattern id={`${id.current}-c`} width="192" height="192" patternUnits="userSpaceOnUse">
          <circle cx="96" cy="96" r="3" fill="none" stroke="#17A2B8" strokeWidth="0.8" opacity={opacity * 1.5} />
          <line x1="80" y1="96" x2="112" y2="96" stroke="#17A2B8" strokeWidth="0.5" opacity={opacity * 1.5} />
          <line x1="96" y1="80" x2="96" y2="112" stroke="#17A2B8" strokeWidth="0.5" opacity={opacity * 1.5} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id.current}-g)`} />
      <rect width="100%" height="100%" fill={`url(#${id.current}-c)`} />
    </svg>
  )
}

/* ── Tag / Badge — acepta style prop completo ── */
export function Tag({ children, style = {} }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px',
      background: '#17A2B81A', color: '#17A2B8',
      border: '1px solid #17A2B844', borderRadius: '2px',
      fontSize: '11px', fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600, letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      ...style,
    }}>
      {children}
    </span>
  )
}

/* ── Thin decorative line ── */
export function ThinLine({ color = '#17A2B8', width = 48, mb = 24, center = false }:
  { color?: string; width?: number; mb?: number; center?: boolean }) {
  return (
    <div style={{ width, height: 2, background: color, marginBottom: mb, borderRadius: 1,
      ...(center ? { marginLeft: 'auto', marginRight: 'auto' } : {}) }} />
  )
}

/* ── Section label ── */
export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <div style={{ width: 22, height: 1, background: '#17A2B8' }} />
      <span style={{
        fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700,
        letterSpacing: '0.15em', textTransform: 'uppercase' as const,
        color: light ? 'rgba(255,255,255,0.7)' : '#17A2B8',
      }}>
        {children}
      </span>
    </div>
  )
}

/* ── Button ── */
type BtnVariant = 'primary' | 'outline' | 'ghost'
export function Btn({
  children, variant = 'primary', onClick, href, style = {}, dark = false
}: {
  children: ReactNode; variant?: BtnVariant; onClick?: () => void
  href?: string; style?: CSSProperties; dark?: boolean
}) {
  const [hov, setHov] = useState(false)
  const base: CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '12px 28px', borderRadius: '2px',
    fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
    fontSize: 13, letterSpacing: '0.04em',
    cursor: 'pointer', transition: 'all 0.25s ease',
    border: 'none', textDecoration: 'none',
  }
  const vs: Record<BtnVariant, CSSProperties> = {
    primary: {
      background: hov ? '#1EBDD6' : '#17A2B8', color: '#fff',
      boxShadow: hov ? '0 8px 24px rgba(23,162,184,0.38)' : '0 4px 12px rgba(23,162,184,0.22)',
      transform: hov ? 'translateY(-2px)' : 'none',
    },
    outline: {
      background: 'transparent',
      color: hov ? '#17A2B8' : (dark ? 'rgba(255,255,255,0.85)' : '#003B6F'),
      border: `1.5px solid ${hov ? '#17A2B8' : (dark ? 'rgba(255,255,255,0.35)' : '#003B6F')}`,
      transform: hov ? 'translateY(-2px)' : 'none',
    },
    ghost: {
      background: 'transparent', color: hov ? '#17A2B8' : '#475569',
      textDecoration: hov ? 'underline' : 'none',
    },
  }
  const combined = { ...base, ...vs[variant], ...style }
  if (href) return (
    <a href={href} style={combined} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </a>
  )
  return (
    <button onClick={onClick} style={combined} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      {children}
    </button>
  )
}

/* ── Section wrapper con fade-in ── */
export function Section({ children, bg = '#fff', style = {} }:
  { children: ReactNode; bg?: string; style?: CSSProperties }) {
  const { ref, inView } = useInView(0.06)
  return (
    <section ref={ref} style={{
      background: bg, position: 'relative', overflow: 'hidden',
      opacity: inView ? 1 : 0,
      transform: inView ? 'none' : 'translateY(20px)',
      transition: 'opacity 0.65s ease, transform 0.65s ease',
      ...style,
    }}>
      {children}
    </section>
  )
}

/* ── CTA WhatsApp Sticky — botón flotante fijo al scroll ── */
const WA_NUMBER = '573024778910'
const WA_MSG = encodeURIComponent('Hola, me gustaría una propuesta para mi proyecto. ¿Podemos hablar?')

export function CTAWhatsAppSticky() {
  const [visible, setVisible] = useState(false)
  const [hov, setHov] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'fixed', bottom: 28, right: 24, zIndex: 9999,
        display: 'flex', alignItems: 'center', gap: 10,
        background: hov ? '#1DA851' : '#25D366',
        color: '#fff',
        padding: hov ? '13px 22px' : '13px 18px',
        borderRadius: 50,
        boxShadow: hov
          ? '0 8px 32px rgba(37,211,102,0.55)'
          : '0 4px 18px rgba(37,211,102,0.40)',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700, fontSize: 13,
        letterSpacing: '0.03em',
        textDecoration: 'none',
        transition: 'all 0.22s ease',
        transform: hov ? 'translateY(-3px) scale(1.04)' : 'none',
        whiteSpace: 'nowrap',
      }}
      aria-label="Solicitar propuesta por WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      📋 Propuesta en 24 h — sin costo
    </a>
  )
}

/* ── CTA inline para páginas de servicio (banner arriba del fold) ── */
export function CTABanner({ service = '' }: { service?: string }) {
  const [hov, setHov] = useState(false)
  const msg = encodeURIComponent(
    service
      ? `Hola, necesito una propuesta para: ${service}. ¿Podemos hablar?`
      : 'Hola, me gustaría una propuesta para mi proyecto. ¿Podemos hablar?'
  )
  return (
    <div style={{
      background: 'linear-gradient(135deg, #003B6F 0%, #005599 100%)',
      padding: '16px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 12,
      borderLeft: '4px solid #25D366',
    }}>
      <div>
        <p style={{ margin: 0, color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14 }}>
          ¿Necesitas este estudio para tu proyecto?
        </p>
        <p style={{ margin: '2px 0 0', color: 'rgba(255,255,255,0.75)', fontSize: 12, fontFamily: 'Georgia, serif' }}>
          COPNIA 17202-313228 CLD · Propuesta en 24 h · Sin intermediarios
        </p>
      </div>
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: hov ? '#1DA851' : '#25D366',
          color: '#fff', textDecoration: 'none',
          padding: '10px 20px', borderRadius: 2,
          fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
          transition: 'all 0.2s ease',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(37,211,102,0.35)',
        }}
      >
        📱 Solicitar propuesta gratis →
      </a>
    </div>
  )
}

/* ── CTA Banner inline — arriba del fold en páginas de servicio ── */
const WA_NUMBER = '573024778910'

export function CTABanner({ service = '' }: { service?: string }) {
  const [hov, setHov] = useState(false)
  const msg = encodeURIComponent(
    service
      ? `Hola, necesito una propuesta para: ${service}. ¿Podemos hablar?`
      : 'Hola, me gustaría una propuesta para mi proyecto. ¿Podemos hablar?'
  )
  return (
    <div style={{
      background: 'linear-gradient(135deg, #003B6F 0%, #005599 100%)',
      padding: '14px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap' as const, gap: 12,
      borderLeft: '4px solid #25D366',
    }}>
      <div>
        <p style={{ margin: 0, color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14 }}>
          ¿Necesitas este estudio para tu proyecto?
        </p>
        <p style={{ margin: '2px 0 0', color: 'rgba(255,255,255,0.75)', fontSize: 12, fontFamily: 'Georgia, serif' }}>
          COPNIA 17202-313228 CLD · Propuesta en 24 h · Sin intermediarios
        </p>
      </div>
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: hov ? '#1DA851' : '#25D366',
          color: '#fff', textDecoration: 'none',
          padding: '10px 20px', borderRadius: 2,
          fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
          transition: 'all 0.2s ease',
          whiteSpace: 'nowrap' as const,
          boxShadow: '0 2px 8px rgba(37,211,102,0.35)',
        }}
      >
        📱 Solicitar propuesta gratis →
      </a>
    </div>
  )
}
