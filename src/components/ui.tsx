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
