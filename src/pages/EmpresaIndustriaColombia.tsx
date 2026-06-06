import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, tengo una empresa/proyecto industrial y necesito estudios técnicos hidráulicos (permiso CAR, ronda hídrica, riesgo por inundación). ¿Pueden orientarme?')

const seoConfig = {
  title: 'Estudios Hidráulicos para Empresas e Industrias Colombia — Permiso CAR | BIC',
  description: 'BIC elabora los estudios técnicos que la CAR, Planeación o la curaduría le exige a su empresa: ronda hídrica, amenaza por inundación, permiso de ocupación de cauce, concesión de aguas y vertimientos. COPNIA. Eje Cafetero y toda Colombia. Diagnóstico en 24 h.',
  keywords: [
    'estudios hidráulicos empresa Colombia',
    'permiso CAR empresa proyecto industrial',
    'ronda hídrica empresa Colombia',
    'estudio amenaza inundación empresa Colombia',
    'ocupación de cauce Colombia empresa',
    'concesión aguas empresa Colombia',
    'permiso vertimiento empresa Colombia',
    'ingeniería hidráulica industria Colombia',
    'estudios CAR Colombia empresa',
    'construir cerca río empresa Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/empresa-industria-colombia',
}

const SITUACIONES = [
  {
    icon: '🏭',
    titulo: 'Le pidieron estudios para el permiso CAR',
    desc: 'CORPOCALDAS, CARDER, CRQ u otra CAR le exigió un estudio técnico para tramitar la licencia ambiental, permiso de ocupación de cauce, concesión de aguas o autorización de vertimientos. BIC elabora el estudio con la metodología que acepta la autoridad ambiental.',
    keyword: 'Trámite CAR',
  },
  {
    icon: '🌊',
    titulo: 'Su planta o bodega está cerca a un río o quebrada',
    desc: 'Necesita demostrar que su proyecto no está en zona de amenaza alta o que puede mitigar el riesgo para obtener la licencia de construcción o la licencia ambiental. BIC hace la modelación HEC-RAS 2D y entrega la zonificación requerida.',
    keyword: 'Ronda hídrica',
  },
  {
    icon: '💧',
    titulo: 'Necesita concesión de aguas para su proceso productivo',
    desc: 'Si su empresa toma agua de una fuente superficial o subterránea para proceso industrial, riego o consumo, requiere la concesión de aguas ante la CAR. BIC elabora el estudio hidrológico, el aforo y la memoria técnica del Decreto 1076/2015.',
    keyword: 'Concesión de aguas',
  },
  {
    icon: '🏗️',
    titulo: 'Necesita diseño hidrosanitario o sistema contra incendio',
    desc: 'Para centros logísticos, bodegas, plantas industriales y proyectos comerciales. Redes de agua, alcantarillado sanitario y pluvial, sistemas de rociadores NFPA 13, hidrantes NFPA 14 y bombas NFPA 20 según NSR-10 Títulos J y K.',
    keyword: 'Diseño NSR-10',
  },
]

const ENTIDADES = ['CORPOCALDAS', 'CARDER', 'CRQ', 'CORNARE', 'CORTOLIMA', 'CVC', 'CAR Cundinamarca', 'CDMB', 'CORANTIOQUIA', 'CORPONARIÑO']

const PREGUNTAS = [
  {
    q: '¿Cuánto tiempo tarda un estudio para la CAR?',
    a: 'Depende del tipo de estudio. Un estudio de ronda hídrica básico o una memoria para concesión de aguas tarda 2–3 semanas. Una modelación HEC-RAS 2D completa con topobatimetría tarda 4–6 semanas. BIC le da un cronograma firme en la propuesta.',
  },
  {
    q: '¿El informe de BIC es aceptado por las CARs?',
    a: 'Sí. Los informes llevan la firma de Ing. Rogerio Bernal Ríos, COPNIA 17202-313228 CLD, especialista en hidráulica de la UNAL. BIC ha presentado estudios ante CORPOCALDAS, CARDER, CRQ y otras CARs con resultado favorable. La metodología usa los datos oficiales del IDEAM y la cartografía del IGAC.',
  },
  {
    q: '¿Necesito visita de campo?',
    a: 'En muchos casos no. Los estudios hidrológicos e hidráulicos se elaboran con información secundaria (IDEAM, IGAC, SRTM). Cuando se requiere topobatimetría o aforo de caudales, BIC coordina la brigada en la ubicación del proyecto.',
  },
  {
    q: '¿Trabajan fuera del Eje Cafetero?',
    a: 'Sí. BIC opera desde Manizales con capacidad de atender proyectos en todo Colombia y Latinoamérica. Los estudios de modelación y los trámites ante CARs nacionales se gestionan de forma remota con presencia puntual cuando se requiere.',
  },
]

export default function EmpresaIndustriaColombia() {
  useEffect(() => {
    document.title = seoConfig.title
  }, [])

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Estudios Hidráulicos para Empresas e Industrias Colombia',
    provider: {
      '@type': 'Organization',
      name: 'BIC Bernal Ingeniería Consultores',
      url: 'https://ingenieriabernal.co',
    },
    areaServed: { '@type': 'Country', name: 'Colombia' },
    description: seoConfig.description,
    serviceType: 'Consultoría Hidráulica y Ambiental',
  }

  return (
    <>
      <SEOHead {...seoConfig} />
      <SchemaMarkup schema={schema} />

      {/* Hero */}
      <BlueprintBg>
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
          <SectionLabel>Para empresas, industrias y proyectos comerciales</SectionLabel>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#003B6F', margin: '1rem 0' }}>
            Los estudios técnicos que la CAR o Planeación le exige a su empresa — en menos de 4 semanas
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4a6a82', maxWidth: 680, margin: '0 auto 2rem', lineHeight: 1.7, fontFamily: "'Lato', sans-serif" }}>
            BIC elabora la ronda hídrica, el estudio de amenaza por inundación, la concesión de aguas y los diseños hidrosanitarios que necesita su empresa para avanzar ante la CAR, Planeación o la curaduría. COPNIA vigente. Director accesible. Metodología aceptada a nivel nacional.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank">
              📱 Diagnóstico sin costo — WhatsApp
            </Btn>
            <Btn variant="outline" href="#situaciones">
              Ver casos típicos
            </Btn>
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['COPNIA 17202-313228', 'Trámites CAR', 'HEC-RAS 2D', 'NSR-10'].map(t => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </section>
      </BlueprintBg>



      {/* Situaciones */}
      <Section id="situaciones" bg="light">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>¿Cuál es su situación?</SectionLabel>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', marginBottom: '2rem' }}>
            Casos típicos que BIC resuelve para empresas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.25rem' }}>
            {SITUACIONES.map(s => (
              <div key={s.titulo} style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', border: '1px solid #D0E8F2', boxShadow: '0 2px 8px rgba(0,59,111,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 26 }}>{s.icon}</span>
                  <span style={{ background: '#EBF5F9', color: '#003B6F', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, padding: '3px 9px', borderRadius: 20 }}>{s.keyword}</span>
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: '0.95rem', margin: '0 0 8px' }}>{s.titulo}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#4a6a82', fontSize: 13.5, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CARs */}
      <Section bg="white">
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel>Cobertura nacional</SectionLabel>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', marginBottom: '1rem' }}>
            Estudios aceptados ante todas las CARs de Colombia
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#5a7f99', fontSize: 14, marginBottom: '1.5rem' }}>
            BIC conoce la metodología y los requisitos específicos de cada autoridad ambiental regional.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {ENTIDADES.map(e => (
              <span key={e} style={{ background: '#EBF5F9', color: '#003B6F', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, padding: '6px 14px', borderRadius: 20, border: '1px solid #B8DDEF' }}>{e}</span>
            ))}
            <span style={{ background: '#EBF5F9', color: '#003B6F', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, padding: '6px 14px', borderRadius: 20, border: '1px solid #B8DDEF' }}>+ todas las demás</span>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="light">
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', marginBottom: '1.5rem' }}>
            Lo que las empresas preguntan antes de contratar
          </h2>
          {PREGUNTAS.map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '1.25rem', marginBottom: '1rem', border: '1px solid #D0E8F2' }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: '0.95rem', margin: '0 0 8px' }}>{item.q}</h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#4a6a82', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Form */}
      <Section bg="white">
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <QuoteFormInline serviceId="decreto1807" />
        </div>
      </Section>

      <CTABanner
        title="¿La CAR o Planeación le pidió estudios técnicos?"
        subtitle="Diagnóstico sin costo en 24 horas. Le decimos qué necesita, cuánto cuesta y en cuánto tiempo lo entregamos."
        cta="Consultar por WhatsApp"
        href={`https://wa.me/${WA}?text=${WA_MSG}`}
      />
    </>
  )
}
