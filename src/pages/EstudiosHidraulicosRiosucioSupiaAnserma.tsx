import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito estudios hidraulicos en Riosucio Supia y Anserma. Pueden cotizar?')

const seoConfig = {
  title: 'Estudios Hidraulicos Riosucio Supia y Anserma — HEC-RAS 2D Decreto 1807 | BIC COPNIA',
  description: 'BIC realiza modelacion hidraulica, estudios Decreto 1807, concesiones de aguas y permisos de vertimientos en Riosucio Supia y Anserma. CORPOCALDAS. COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: ['estudios hidraulicos Riosucio Caldas', 'estudio hidraulico Supia Anserma Caldas', 'concesion aguas CORPOCALDAS Riosucio', 'estudio riesgo hidrico occidente Caldas', 'modelacion HEC-RAS Caldas occidental'],
  canonical: 'https://ingenieriabernal.co/estudios-hidraulicos-riosucio-supia-anserma',
}

const SERVICIOS = [
  { t: 'Modelacion hidraulica HEC-RAS 2D', d: 'Modelacion de rios, quebradas y canales pluviales para inundabilidad, ronda hidrica y torrencialidad en Caldas. Informes para Curaduria, CORPOCALDAS y entidades de planeacion municipal.' },
  { t: 'Estudio Decreto 1807 para licencias', d: 'Estudio detallado de amenaza y riesgo hidrico para licencias de construccion y urbanismo en Riosucio Supia y Anserma. Entregamos el informe listo para primera revision sin observaciones.' },
  { t: 'Tramites CORPOCALDAS', d: 'Concesiones de aguas, permisos de vertimientos y permisos de ocupacion de cauce ante CORPOCALDAS. Gestion completa desde la solicitud hasta la resolucion.' },
  { t: 'Acueducto, alcantarillado y saneamiento', d: 'Diseno de redes (EPANET, SewerGEMs), bocatomas y captaciones para urbanizaciones, constructoras y ESP en Caldas.' },
]

const FAQ = [
  { q: 'BIC atiende proyectos en Riosucio Supia y Anserma?', a: 'Si. BIC atiende proyectos en Riosucio Supia y Anserma y todo el Caldas con visita tecnica presencial. La sede tecnica esta en Manizales, dentro del radio de operacion habitual. Tramites aprobados ante CORPOCALDAS con cero observaciones.' },
  { q: 'Cuanto cuesta un estudio hidraulico en Riosucio Supia y Anserma?', a: 'Un estudio Decreto 1807 para licencia parte de $8M COP; modelaciones HEC-RAS 2D para planes parciales o concesiones cuestan entre $15M y $50M COP segun alcance. BIC entrega propuesta en 24 horas.' },
  { q: 'Cuanto tarda el tramite de concesion de aguas ante CORPOCALDAS?', a: 'Entre 4 y 8 meses segun complejidad. BIC prepara toda la documentacion tecnica y hace seguimiento hasta la expedicion de la resolucion, minimizando solicitudes de informacion adicional.' },
  { q: 'BIC puede apoyar planes parciales en Caldas?', a: 'Si. BIC realiza el componente hidraulico completo: modelacion de rondas, canales de drenaje, torrencialidad y permisos ambientales ante CORPOCALDAS.' },
]

const SCHEMA_FAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function EstudiosHidraulicosRiosucioSupiaAnserma() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'schema-riosucio-supia-anserma-faq'
    s.textContent = JSON.stringify(SCHEMA_FAQ); document.head.appendChild(s)
    const sb = document.createElement('script'); sb.type = 'application/ld+json'; sb.id = 'schema-riosucio-supia-anserma-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Estudios Hidraulicos Riosucio Supia y Anserma', item: 'https://ingenieriabernal.co/estudios-hidraulicos-riosucio-supia-anserma' },
      ]
    }); document.head.appendChild(sb)
    return () => { document.getElementById('schema-riosucio-supia-anserma-faq')?.remove(); document.getElementById('schema-riosucio-supia-anserma-bc')?.remove() }
  }, [])
  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Estudios Hidraulicos Riosucio Supia y Anserma" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Riosucio · Supia · Anserma · Caldas Occidental</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Estudios Hidraulicos<br />en Riosucio Supia y Anserma
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 8, maxWidth: 700 }}>
            BIC realiza <strong style={{ color: '#fff' }}>modelacion HEC-RAS 2D</strong>, estudios <strong style={{ color: '#60A5FA' }}>Decreto 1807</strong> y tramites ante <strong style={{ color: '#60A5FA' }}>CORPOCALDAS</strong> en Riosucio Supia y Anserma y todo el Caldas.
          </p>
          <p style={{ fontSize: 15, color: '#94A3B8', marginBottom: 28 }}>COPNIA <strong style={{ color: '#60A5FA' }}>17202-313228 CLD</strong> · Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong></p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Contactar por WhatsApp
          </a>
        </div>
      </section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Servicios en Riosucio Supia y Anserma</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Que hacemos en Caldas</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, maxWidth: 820 }}>
          {SERVICIOS.map(s => (
            <div key={s.t} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 10 }}>{s.t}</h3>
              <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <ThinLine />
      <Section>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Estudios hidraulicos en Riosucio Supia y Anserma</h2>
        <div style={{ display: 'grid', gap: 16, maxWidth: 820 }}>
          {FAQ.map(item => (
            <div key={item.q} style={{ background: '#F8FAFC', borderRadius: 12, padding: 24, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 10 }}>{item.q}</h3>
              <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite su propuesta para Riosucio Supia y Anserma</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Sin compromiso. Respuesta en 24 horas.</p>
        <QuoteFormInline />
      </Section>
      <Section>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios' },
            { href: '/estudio-decreto-1807-licencia-construccion', t: 'Decreto 1807' },
            { href: '/estudios-riesgo-hidrico-municipios-colombia', t: 'Riesgo Hidrico' },
            { href: '/servicios', t: 'Todos los servicios' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
