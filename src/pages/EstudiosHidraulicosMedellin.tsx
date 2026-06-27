import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito estudios hidraulicos en Medellin y Antioquia. Pueden cotizar?')

const seoConfig = {
  title: 'Estudios Hidraulicos Medellin y Antioquia — HEC-RAS 2D Decreto 1807 | BIC COPNIA',
  description: 'BIC realiza modelacion hidraulica, estudios Decreto 1807, tramites ante CORANTIOQUIA y diseno de acueducto y alcantarillado en Medellin y Antioquia. COPNIA 17202-313228 CLD. Cobertura nacional. Propuesta en 24 horas.',
  keywords: ['estudios hidraulicos Medellin Antioquia', 'estudio Decreto 1807 Medellin Colombia', 'modelacion HEC-RAS Medellin urbanizacion', 'tramites CORANTIOQUIA Medellin', 'estudio riesgo hidrico Medellin plan parcial'],
  canonical: 'https://ingenieriabernal.co/estudios-hidraulicos-medellin',
}

const SERVICIOS = [
  { t: 'Modelacion hidraulica HEC-RAS 2D', d: 'Modelacion de rios, quebradas y canales para inundabilidad, ronda hidrica y torrencialidad en Antioquia. BIC opera de forma remota con lidar, DEM de alta resolucion y visita tecnica al predio.' },
  { t: 'Estudio Decreto 1807 para licencias', d: 'Estudio detallado de amenaza y riesgo hidrico para licencias de construccion y urbanismo en Medellin y Antioquia. Informe listo para primera revision ante la Curaduria o entidad competente, sin observaciones.' },
  { t: 'Tramites CORANTIOQUIA', d: 'Concesiones de aguas, permisos de vertimientos y permisos de ocupacion de cauce ante CORANTIOQUIA. Gestion completa del expediente tecnico y seguimiento hasta la resolucion.' },
  { t: 'Acueducto, alcantarillado y saneamiento', d: 'Diseno de redes (EPANET, SewerGEMs), bocatomas y captaciones para urbanizaciones, constructoras e industriales en Antioquia.' },
]

const FAQ = [
  { q: 'BIC puede realizar estudios hidraulicos en Medellin y Antioquia?', a: 'Si. BIC tiene cobertura nacional y atiende proyectos en Medellin y Antioquia con modalidad remota (usando LiDAR, DEM y cartografia existente) mas visita tecnica al predio cuando el alcance lo requiere. BIC tiene experiencia en tramites ante CORANTIOQUIA.' },
  { q: 'Cuanto cuesta un estudio hidraulico en Medellin y Antioquia?', a: 'Un estudio Decreto 1807 para licencia parte de $8M COP; modelaciones HEC-RAS 2D para planes parciales o tramites ambientales cuestan entre $15M y $50M COP. BIC entrega propuesta tecnica y economica en 24 horas sin costo.' },
  { q: 'Cuanto tarda un tramite ante CORANTIOQUIA?', a: 'Depende del tipo de tramite: concesiones de aguas tardan entre 4 y 10 meses; permisos de ocupacion de cauce entre 4 y 8 meses. BIC hace seguimiento permanente y responde los requerimientos de informacion dentro de los plazos legales.' },
  { q: 'Como funciona el trabajo remoto de BIC en Medellin y Antioquia?', a: 'BIC realiza la modelacion hidrologica e hidraulica con informacion oficial (IDEAM, IGC, LiDAR disponible) y visita tecnica al predio para la toma de datos de campo. Los entregables son identicos a los de un proyecto presencial. Proyectos entregados en Antioquia con aprobaciones en primera revision.' },
]

const SCHEMA_FAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function EstudiosHidraulicosMedellin() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'schema-medellin-faq'
    s.textContent = JSON.stringify(SCHEMA_FAQ); document.head.appendChild(s)
    const sb = document.createElement('script'); sb.type = 'application/ld+json'; sb.id = 'schema-medellin-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Estudios Hidraulicos Medellin y Antioquia', item: 'https://ingenieriabernal.co/estudios-hidraulicos-medellin' },
      ]
    }); document.head.appendChild(sb)
    return () => { document.getElementById('schema-medellin-faq')?.remove(); document.getElementById('schema-medellin-bc')?.remove() }
  }, [])
  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Estudios Hidraulicos Medellin y Antioquia" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Medellin · Antioquia · CORANTIOQUIA</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Estudios Hidraulicos<br />en Medellin y Antioquia
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 8, maxWidth: 700 }}>
            BIC realiza <strong style={{ color: '#fff' }}>modelacion HEC-RAS 2D</strong>, estudios <strong style={{ color: '#60A5FA' }}>Decreto 1807</strong> y tramites ante <strong style={{ color: '#60A5FA' }}>CORANTIOQUIA</strong> en Medellin y Antioquia. Cobertura nacional con visita tecnica al predio.
          </p>
          <p style={{ fontSize: 15, color: '#94A3B8', marginBottom: 28 }}>COPNIA <strong style={{ color: '#60A5FA' }}>17202-313228 CLD</strong> · Cobertura nacional · Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong></p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Contactar por WhatsApp
          </a>
        </div>
      </section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Servicios en Medellin y Antioquia</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Que hacemos en Antioquia</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Estudios hidraulicos en Medellin y Antioquia</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite su propuesta para Medellin y Antioquia</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Sin compromiso. Respuesta en 24 horas.</p>
        <QuoteFormInline />
      </Section>
      <Section>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios' },
            { href: '/estudio-decreto-1807-licencia-construccion', t: 'Decreto 1807' },
            { href: '/permiso-ocupacion-cauce-colombia', t: 'Permiso Ocupacion Cauce' },
            { href: '/servicios', t: 'Todos los servicios' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
