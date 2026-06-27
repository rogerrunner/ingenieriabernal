import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito estudios hidraulicos en Cali y Norte del Valle del Cauca. Pueden cotizar?')

const seoConfig = {
  title: 'Estudios Hidraulicos Cali y Norte del Valle del Cauca — HEC-RAS 2D Decreto 1807 | BIC COPNIA',
  description: 'BIC realiza modelacion hidraulica, estudios Decreto 1807, concesiones de aguas y permisos de vertimientos en Cali y Norte del Valle del Cauca. CVC (Corporacion Autonoma Regional del Valle del Cauca). COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: ['estudios hidraulicos Cali Colombia', 'modelacion HEC-RAS Cali Valle del Cauca', 'estudio Decreto 1807 Cali Colombia', 'concesion aguas CVC Cali', 'estudio riesgo hidrico Cali urbanizacion'],
  canonical: 'https://ingenieriabernal.co/estudios-hidraulicos-cali-norte-valle',
}

const SERVICIOS = [
  { t: 'Modelacion hidraulica HEC-RAS 2D', d: 'Modelacion unidimensional y bidimensional de rios, quebradas y canales pluviales para inundabilidad, calculo de ronda hidrica, planes de ordenacion de cuencas (POMCA) y estudios de torrencialidad en Valle del Cauca.' },
  { t: 'Estudio Decreto 1807 — licencias', d: 'Estudio detallado de amenaza y riesgo hidrico exigido por la Curaduria de Cali y Norte del Valle del Cauca para otorgar licencias de construccion y urbanismo en predios ubicados en zonas de amenaza hidrica media o alta. Cero observaciones en primera revision.' },
  { t: 'Tramites CVC (Corporacion Autonoma Regional del Valle del Cauca)', d: 'Concesiones de aguas superficiales y subterraneas, permisos de vertimientos y permisos de ocupacion de cauce ante CVC (Corporacion Autonoma Regional del Valle del Cauca). Gestion completa: solicitud, modelacion de soporte, visita tecnica y seguimiento hasta la resolucion.' },
  { t: 'Acueducto y alcantarillado', d: 'Diseno de redes de distribucion (EPANET), alcantarillados (SewerGEMs), bocatomas, captaciones y lineas de conduccion para urbanizadores, constructoras y empresas de servicios publicos en Valle del Cauca.' },
]

const FAQ = [
  { q: 'BIC realiza estudios hidraulicos en Cali y Norte del Valle del Cauca?', a: 'Si. BIC atiende proyectos en Cali y Norte del Valle del Cauca y todo el Valle del Cauca con visita tecnica presencial al predio. La sede tecnica esta en Manizales (Caldas), a menos de 3 horas de distancia. BIC tiene experiencia en tramites ante CVC (Corporacion Autonoma Regional del Valle del Cauca) con aprobaciones en primera revision.' },
  { q: 'Cuanto cuesta un estudio hidraulico en Cali y Norte del Valle del Cauca?', a: 'El costo depende del tipo de estudio y alcance: un estudio Decreto 1807 para licencia de construccion parte de $8M COP; modelaciones HEC-RAS 2D para planes parciales o concesiones de agua cuestan entre $15M y $50M COP. BIC entrega propuesta tecnica y economica en 24 horas.' },
  { q: 'Cuanto tarda una concesion de aguas ante CVC (Corporacion Autonoma Regional del Valle del Cauca)?', a: 'El tramite ante CVC (Corporacion Autonoma Regional del Valle del Cauca) tarda entre 4 y 8 meses segun la complejidad del expediente. BIC prepara toda la documentacion tecnica y hace seguimiento hasta la expedicion de la resolucion, reduciendo al minimo las solicitudes de informacion adicional.' },
  { q: 'BIC puede apoyar planes parciales con componente hidraulico en Cali y Norte del Valle del Cauca?', a: 'Si. BIC realiza el componente hidraulico completo de planes parciales en Valle del Cauca: modelacion de rondas hidricas, diseno de canales de drenaje, estudio de torrencialidad y gestion de los permisos ambientales ante CVC (Corporacion Autonoma Regional del Valle del Cauca). Experiencia directa con proyectos aprobados.' },
]

const SCHEMA_FAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function EstudiosHidraulicosCaliNorteValle() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'schema-cali-norte-valle-faq'
    s.textContent = JSON.stringify(SCHEMA_FAQ); document.head.appendChild(s)
    const sb = document.createElement('script'); sb.type = 'application/ld+json'; sb.id = 'schema-cali-norte-valle-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Estudios Hidraulicos Cali y Norte del Valle del Cauca', item: 'https://ingenieriabernal.co/estudios-hidraulicos-cali-norte-valle' },
      ]
    }); document.head.appendChild(sb)
    return () => { document.getElementById('schema-cali-norte-valle-faq')?.remove(); document.getElementById('schema-cali-norte-valle-bc')?.remove() }
  }, [])
  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Estudios Hidraulicos Cali y Norte del Valle del Cauca" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Cali · Norte del Valle · CVC</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Estudios Hidraulicos<br />en Cali y Norte del Valle del Cauca
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 8, maxWidth: 700 }}>
            BIC realiza <strong style={{ color: '#fff' }}>modelacion HEC-RAS 2D</strong>, estudios <strong style={{ color: '#60A5FA' }}>Decreto 1807</strong>, tramites ante <strong style={{ color: '#60A5FA' }}>CVC</strong> y diseno de acueducto y alcantarillado en Cali y Norte del Valle del Cauca y todo el Valle del Cauca.
          </p>
          <p style={{ fontSize: 15, color: '#94A3B8', marginBottom: 28 }}>COPNIA <strong style={{ color: '#60A5FA' }}>17202-313228 CLD</strong> · Tramites aprobados ante CVC (Corporacion Autonoma Regional del Valle del Cauca) · Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong></p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Contactar por WhatsApp
          </a>
        </div>
      </section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Servicios BIC en Cali y Norte del Valle del Cauca</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Que hacemos en Valle del Cauca</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Estudios hidraulicos en Cali y Norte del Valle del Cauca</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite su propuesta para Cali y Norte del Valle del Cauca</h2>
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
