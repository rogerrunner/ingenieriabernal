import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy propietario/empresario y necesito tramitar un permiso de vertimiento ante CORPOCALDAS. Tengo el proyecto activo y quiero cotizar directamente.')

const seoConfig = {
  title: 'Permiso de Vertimientos CORPOCALDAS Caldas — Tramite con Ingeniero COPNIA | BIC',
  description: 'Tramite de permiso de vertimientos ante CORPOCALDAS en Caldas. Expediente tecnico, PSMV, diseno PTAR si aplica y gestion completa. BIC — COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: [
    'permiso vertimientos CORPOCALDAS',
    'tramite vertimientos Caldas CORPOCALDAS',
    'permiso vertimientos Manizales',
    'autorizacion vertimientos Caldas',
    'PSMV CORPOCALDAS Caldas',
    'permiso ambiental vertimientos Caldas',
    'expediente tecnico vertimientos CORPOCALDAS',
    'ingenieria ambiental vertimientos Caldas',
  ],
  canonical: 'https://ingenieriabernal.co/permiso-vertimientos-corpocaldas',
}

const FAQ = [
  { q: 'Quienes necesitan permiso de vertimientos ante CORPOCALDAS?', a: 'Toda persona natural o juridica que vierta aguas residuales domesticas, industriales o de servicios a un cuerpo de agua superficial o al suelo en Caldas necesita permiso de vertimientos de CORPOCALDAS. Incluye urbanizaciones, empresas, hoteles, hospitales, mataderos y sistemas de saneamiento rural.' },
  { q: 'Cuales son los documentos del expediente tecnico para CORPOCALDAS?', a: 'El expediente tecnico para CORPOCALDAS incluye: caracterizacion del vertimiento, memoria descriptiva del sistema de tratamiento existente o a implementar, planos, PSMV si aplica, y diseno de PTAR si el sistema actual no cumple los estandares del Decreto 1594/84 y sus modificaciones.' },
  { q: 'Cuanto cuesta el tramite de permiso de vertimientos en Caldas?', a: 'El costo del expediente tecnico para CORPOCALDAS varia entre $5 y $40 millones COP. Sin diseno de PTAR: $5-$12 millones. Con diseno de PTAR pequena: $15-$30 millones. Propuesta exacta de BIC en 24 horas.' },
  { q: 'Cuanto tarda CORPOCALDAS en resolver el permiso de vertimientos?', a: 'El proceso de CORPOCALDAS tarda entre 6 y 18 meses desde la radicacion, segun la complejidad del vertimiento y si se requieren visitas de campo. BIC gestiona el seguimiento al expediente.' },
  { q: 'BIC puede disenar la PTAR y tramitar el permiso de vertimientos?', a: 'Si. BIC ofrece el servicio integrado: diseno de PTAR, elaboracion del expediente tecnico, radicacion ante CORPOCALDAS y seguimiento al tramite. Esto es mas eficiente que contratar el diseno y el tramite por separado.' },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function PermisoVertimientosCorpocaldas() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'; s.id = 'schema-pv-corp-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA); document.head.appendChild(s)
    const sb = document.createElement('script')
    sb.type = 'application/ld+json'; sb.id = 'schema-pv-corp-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Permiso de Vertimientos Colombia', item: 'https://ingenieriabernal.co/permiso-vertimientos-colombia' },
        { '@type': 'ListItem', position: 3, name: 'Permiso Vertimientos CORPOCALDAS', item: 'https://ingenieriabernal.co/permiso-vertimientos-corpocaldas' },
      ],
    }); document.head.appendChild(sb)
    return () => {
      document.getElementById('schema-pv-corp-faq')?.remove()
      document.getElementById('schema-pv-corp-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Permiso de Vertimientos ante CORPOCALDAS" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Caldas — CORPOCALDAS</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Permiso de Vertimientos ante<br />CORPOCALDAS en Caldas
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 24, maxWidth: 700 }}>
            BIC elabora el expediente tecnico de vertimientos, diseña la PTAR si se requiere
            y gestiona el tramite completo ante <strong style={{ color: '#60A5FA' }}>CORPOCALDAS</strong>.
            Ingenieros con <strong style={{ color: '#60A5FA' }}>COPNIA 17202-313228 CLD</strong>.
            Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong>.
          </p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Cotizar por WhatsApp
          </a>
        </div>
      </section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Preguntas sobre vertimientos y CORPOCALDAS</h2>
        <div style={{ display: 'grid', gap: 16, maxWidth: 820 }}>
          {FAQ.map(item => (
            <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 10 }}>{item.q}</h3>
              <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
      <ThinLine />

      {/* ── ANTI-INTERMEDIARIO ENHANCED ── */}
      <Section style={{ background: '#001A33', padding: '48px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(17px, 2.3vw, 24px)', color: '#fff', marginBottom: 14 }}>
            Solo con quien tiene el proyecto y puede contratar directamente
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.80)', fontSize: 14, lineHeight: 1.8, maxWidth: 680, margin: '0 auto 10px' }}>
            BIC trabaja directamente con <strong style={{ color: '#17A2B8' }}>industriales, hoteleros, haciendas y propietarios privados</strong> que requieren el permiso de vertimiento — no con intermediarios que re-cotizan ni con ingenieros que buscan precios de referencia para sus propios clientes.
            Si usted es el contratante directo y tiene el proyecto activo, la propuesta llega en 24 horas.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.30)', fontSize: 11 }}>
            ¿Colega ingeniero buscando asesoría o cotización comparativa? No es el canal.
          </p>
        </div>
      </Section>

      <ThinLine />

      <Section>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite su propuesta para CORPOCALDAS</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Sin compromiso. Respuesta en 24 horas.</p>
        <QuoteFormInline />
      </Section>
      <Section style={{ background: '#F8FAFC' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/permiso-vertimientos-colombia', t: 'Permiso de Vertimientos en Colombia' },
            { href: '/permiso-vertimientos-carder', t: 'Permiso de Vertimientos CARDER' },
            { href: '/concesion-aguas-corpocaldas', t: 'Concesion de Aguas CORPOCALDAS' },
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios de Estudios Hidraulicos' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
