import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, somos un municipio y necesitamos estudios de riesgo hidrico. Pueden cotizar?')

const seoConfig = {
  title: 'Estudios de Riesgo Hidrico para Municipios Colombia — SGR OCAD | BIC COPNIA',
  description: 'Estudios detallados de riesgo hidrico para municipios colombianos: POT, gestion del riesgo, regalias SGR. BIC — COPNIA 17202-313228 CLD. Experiencia en OCAD Caldas y Boyaca. Propuesta en 24 horas.',
  keywords: [
    'estudios riesgo hidrico municipios Colombia',
    'estudio gestion riesgo hidrico alcaldia Colombia',
    'estudio riesgo hídrico regalías SGR municipio',
    'estudio Decreto 1807 municipio Colombia',
    'consultor riesgo inundacion municipio Caldas',
    'estudio amenaza hidrica POT municipal Colombia',
    'estudios OCAD gestion riesgo hídrico Colombia',
    'riesgo hídrico torrencialidad municipio Eje Cafetero',
  ],
  canonical: 'https://ingenieriabernal.co/estudios-riesgo-hidrico-municipios-colombia',
}

const CLIENTS = [
  { t: 'Alcaldías y secretarías de planeación', d: 'Estudios de amenaza y riesgo hídrico para revisión y ajuste del POT, planes de gestión del riesgo (PGRD) y caracterización de zonas de ladera y cauces urbanos. Cumplimiento de la Ley 1523/2012.' },
  { t: 'Proyectos de regalías SGR', d: 'Formulación y estudios técnicos de proyectos de gestión del riesgo hídrico para el Sistema General de Regalías (SGR). Experiencia directa en proyectos aprobados ante OCAD en Caldas y Boyacá.' },
  { t: 'Consejos municipales de gestión del riesgo', d: 'Estudios técnicos de soporte para los Consejos Municipales de Gestión del Riesgo de Desastres (CMGRD): caracterización de eventos históricos, zonificación de amenaza y priorización de intervenciones.' },
  { t: 'Empresas de servicios públicos', d: 'Evaluación de amenaza hídrica en infraestructura de acueducto y alcantarillado, captaciones y bocatomas en zonas de amenaza. Planes de contingencia ante eventos extremos.' },
]

const FAQ = [
  { q: 'Que estudios de riesgo hidrico puede contratar un municipio colombiano?', a: 'Un municipio puede contratar estudios de amenaza por inundacion y avenidas torrenciales para actualizar el POT, estudios detallados de riesgo para el Plan de Gestion del Riesgo de Desastres (PGRD), estudios tecnicos para proyectos SGR ante el OCAD, y caracterizacion de cauces urbanos para intervenciones de mitigacion.' },
  { q: 'Cuanto cuesta un estudio de riesgo hidrico para un municipio?', a: 'El costo depende del alcance: una caracterizacion de amenaza para un sector urbano cuesta entre $12M y $30M COP; un estudio detallado de riesgo con modelacion HEC-RAS 2D para varios cauces puede costar entre $30M y $80M COP. Para proyectos SGR el presupuesto lo define el OCAD. BIC entrega propuesta tecnica y economica en 24 horas.' },
  { q: 'BIC puede formular el proyecto en la plataforma MGA-Web del DNP?', a: 'Si. BIC tiene experiencia directa en formulacion de proyectos de inversion publica en MGA-Web para el Sistema General de Regalias (SGR): ficha EBI, presupuesto, analisis de alternativas y documentacion tecnica completa para aprobacion ante OCAD. Proyectos aprobados en Caldas y Boyaca.' },
  { q: 'Que normativa rige los estudios de gestion del riesgo hidrico municipal?', a: 'Los estudios de gestion del riesgo se rigen principalmente por la Ley 1523 de 2012 (Sistema Nacional de Gestion del Riesgo), el Decreto 1807 de 2014 (estudios de amenaza en POT), las guias metodologicas del IDEAM y del Servicio Geologico Colombiano (SGC), y el Decreto 1076 de 2015 para el componente ambiental.' },
  { q: 'Cuanto tiempo tarda un estudio de riesgo hidrico municipal?', a: 'Un estudio de amenaza sectorial tarda entre 6 y 12 semanas. Un estudio detallado de riesgo con modelacion multidimensional de varios cauces puede tardar entre 3 y 6 meses. BIC define el cronograma exacto en la propuesta tecnica y lo cumple con actualizaciones periodicas al municipio.' },
]

const SCHEMA_FAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function EstudiosRiesgoHidricoMunicipiosColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'schema-mun-faq'
    s.textContent = JSON.stringify(SCHEMA_FAQ); document.head.appendChild(s)
    const sb = document.createElement('script'); sb.type = 'application/ld+json'; sb.id = 'schema-mun-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Estudios Riesgo Hidrico Municipios', item: 'https://ingenieriabernal.co/estudios-riesgo-hidrico-municipios-colombia' },
      ]
    }); document.head.appendChild(sb)
    return () => { document.getElementById('schema-mun-faq')?.remove(); document.getElementById('schema-mun-bc')?.remove() }
  }, [])
  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Estudios de Riesgo Hidrico para Municipios" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Alcaldias — Municipios — SGR</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Estudios de Riesgo Hidrico<br />para Municipios en Colombia
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 8, maxWidth: 700 }}>
            BIC realiza estudios detallados de amenaza y riesgo hidrico para municipios colombianos: <strong style={{ color: '#fff' }}>actualizacion de POT</strong>, proyectos <strong style={{ color: '#60A5FA' }}>regalias SGR</strong>, planes de gestion del riesgo (PGRD) y caracterizacion de cauces urbanos con modelacion <strong style={{ color: '#60A5FA' }}>HEC-RAS 2D</strong>.
          </p>
          <p style={{ fontSize: 15, color: '#94A3B8', marginBottom: 28 }}>COPNIA <strong style={{ color: '#60A5FA' }}>17202-313228 CLD</strong> · Proyectos OCAD aprobados en Caldas y Boyaca · Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong></p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Contactar por WhatsApp
          </a>
        </div>
      </section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Clientes del sector publico</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Quienes contratan estudios de riesgo hidrico municipal</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, maxWidth: 820 }}>
          {CLIENTS.map(c => (
            <div key={c.t} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 10 }}>{c.t}</h3>
              <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <ThinLine />
      <Section>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Estudios de riesgo hidrico para municipios</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Propuesta para su municipio</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Sin compromiso. Respuesta en 24 horas.</p>
        <QuoteFormInline />
      </Section>
      <Section>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios Estudios Hidraulicos' },
            { href: '/estudio-decreto-1807-licencia-construccion', t: 'Decreto 1807 Licencia Construccion' },
            { href: '/concesion-aguas-corpocaldas', t: 'Concesion Aguas CORPOCALDAS' },
            { href: '/promotor-urbanizacion-colombia', t: 'Servicios para Promotores' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
