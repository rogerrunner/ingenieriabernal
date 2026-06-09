import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy promotor de un proyecto de urbanización y necesito asesoría técnica hidráulica (gestión del riesgo, hidrosanitario, acueducto). ¿Pueden orientarme?')

const seoConfig = {
  title: 'Consultoría Hidráulica para Promotores de Urbanización Colombia | BIC',
  description: 'BIC acompaña al promotor en todo el componente técnico hídrico: estudio de riesgo Decreto 1807, diseño de acueducto y alcantarillado, redes hidrosanitarias y CI para planes parciales y urbanizaciones en Colombia. COPNIA. Entrega en 3–4 semanas.',
  keywords: [
    'consultoría hidráulica promotores urbanización Colombia',
    'estudio riesgo inundación urbanización Colombia',
    'diseño acueducto urbanización Colombia',
    'plan parcial gestión riesgo Colombia',
    'componente hídrico plan parcial',
    'decreto 1807 urbanización Colombia',
    'ingeniería hidráulica promotores inmobiliarios Colombia',
    'consultoría técnica plan parcial Colombia',
    'diseño hidrosanitario urbanización Colombia',
    'promotor urbanizador Colombia estudio hídrico',
  ],
  canonical: 'https://ingenieriabernal.co/promotor-urbanizacion-colombia',
  noindex: true,
}

const SERVICIOS = [
  {
    icon: '🌊',
    titulo: 'Estudio de gestión del riesgo por inundación',
    desc: 'Obligatorio para todo plan parcial con terrenos cercanos a fuentes hídricas o clasificados con amenaza media-alta por el POT. BIC entrega la modelación HEC-RAS 2D, la zonificación de amenaza y las medidas de mitigación que exige el Decreto 1807/2014.',
    plazo: '3–4 semanas',
    precio: 'desde $20M COP',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño de acueducto y alcantarillado para parcelación',
    desc: 'Redes de distribución de agua potable, colectores sanitarios y pluviales para urbanizaciones y parcelaciones campestres. Memoria técnica RAS 2017, planos AutoCAD, EPANET/SWMM. Lista para presentar a la ESP o empresa de servicios públicos.',
    plazo: '4–6 semanas',
    precio: 'desde $10M COP',
  },
  {
    icon: '🔥',
    titulo: 'Diseño hidrosanitario y sistema contra incendio',
    desc: 'Redes internas para vivienda, comercio y áreas comunes del proyecto. NSR-10 Títulos D, J y K. Rociadores NFPA 13, hidrantes NTC 2301, memorias de cálculo firmadas COPNIA. Necesario para la licencia de construcción.',
    plazo: '2–3 semanas',
    precio: 'desde $5,5M COP',
  },
  {
    icon: '📋',
    titulo: 'Componente técnico completo para plan parcial',
    desc: 'Paquete integral que incluye el estudio de riesgo, el diseño de redes de servicios públicos y las memorias COPNIA requeridas por Planeación municipal para la adopción del plan parcial. Coordinamos directamente con la curaduría urbana y la CAR.',
    plazo: '6–8 semanas',
    precio: 'Consulte según alcance',
  },
]

const PROCESO = [
  { num: '01', titulo: 'Diagnóstico sin costo', desc: 'Nos envía la ubicación del predio y el uso del suelo en el POT. En 24 horas le decimos qué estudios necesita y cuánto cuestan.' },
  { num: '02', titulo: 'Propuesta técnica y económica', desc: 'Recibe un documento formal con el alcance, los entregables, el cronograma y el valor. Sin letra pequeña ni costos ocultos.' },
  { num: '03', titulo: 'Ejecución con director disponible', desc: 'Rogerio Bernal dirige el estudio personalmente. Usted tiene acceso directo al profesional responsable, no a un asistente.' },
  { num: '04', titulo: 'Entrega y acompañamiento ante entidades', desc: 'Los informes están listos para ser radicados ante Planeación, la CAR y la curaduría. BIC lo acompaña si hay observaciones técnicas.' },
]

const PREGUNTAS = [
  {
    q: '¿Qué pasa si no tengo el estudio de riesgo antes de presentar el plan parcial?',
    a: 'Planeación municipal no puede emitir concepto favorable sin el componente de gestión del riesgo exigido por el Decreto 1807/2014. El plan parcial queda bloqueado hasta que el promotor entregue el estudio de detalle de amenaza y las medidas de mitigación. En muchos municipios del Eje Cafetero esto ya está siendo exigido desde la etapa de radicación inicial.',
  },
  {
    q: '¿El estudio de BIC es aceptado por la CAR y las curadurías?',
    a: 'Sí. Los informes son firmados por Ing. Rogerio Bernal Ríos, COPNIA 17202-313228 CLD, matrícula vigente. La metodología usa HEC-RAS 2D con datos del IDEAM y la cartografía oficial del municipio. BIC ha elaborado estudios aceptados por CORPOCALDAS, CARDER, CRQ y Planeación Municipal en Manizales, Pereira, Armenia, La Dorada y otros municipios.',
  },
  {
    q: '¿Pueden trabajar en cualquier ciudad de Colombia?',
    a: 'Sí. BIC opera desde Manizales con presencia directa en el Eje Cafetero y capacidad de desplazamiento a todo el territorio nacional. Los estudios hidrológicos e hidráulicos se elaboran con información secundaria nacional (IDEAM, IGAC, SRTM) que no requiere visita de campo en todos los casos. Cuando se requiere topobatimetría, coordina la brigada en la región del proyecto.',
  },
  {
    q: '¿Trabajan con promotores que están empezando el trámite o solo con proyectos ya avanzados?',
    a: 'Con ambos. Si está en la etapa de prefactibilidad (evaluando si el terreno es viable), BIC le hace un diagnóstico rápido sin costo para que sepa de entrada si el componente hídrico es un obstáculo o no. Si ya tiene el plan parcial en trámite y le exigieron el estudio, también lo atendemos con urgencia.',
  },
]

export default function PromotorUrbanizacionColombia() {
  useEffect(() => {
    document.title = seoConfig.title
  }, [])

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Consultoría Hidráulica para Promotores de Urbanización',
    provider: {
      '@type': 'Organization',
      name: 'BIC Bernal Ingeniería Consultores',
      url: 'https://ingenieriabernal.co',
    },
    areaServed: { '@type': 'Country', name: 'Colombia' },
    description: seoConfig.description,
    serviceType: 'Consultoría Hidráulica',
  }

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup type="service" />

      {/* Hero */}
      <BlueprintBg>
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
          <SectionLabel>Para promotores, urbanizadores y desarrolladores</SectionLabel>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#003B6F', margin: '1rem 0' }}>
            El componente técnico hídrico de su urbanización, resuelto en 3–4 semanas
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4a6a82', maxWidth: 680, margin: '0 auto 2rem', lineHeight: 1.7, fontFamily: "'Lato', sans-serif" }}>
            BIC entrega los estudios hidrológicos, hidráulicos y de diseño que Planeación, la CAR y la curaduría le exigen para avanzar su plan parcial o urbanización en Colombia. Director disponible, matrícula COPNIA vigente, resultados verificables.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Diagnóstico sin costo — WhatsApp
            </Btn>
            <Btn variant="outline" href="#propuesta">
              Ver servicios y precios
            </Btn>
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['COPNIA 17202-313228', 'HEC-RAS 2D', 'Decreto 1807', 'Eje Cafetero y Colombia'].map(t => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </section>
      </BlueprintBg>



      {/* Servicios */}
      <Section bg="#F8FAFC">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios para su proyecto</SectionLabel>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', marginBottom: '2rem' }}>
            Qué entrega BIC para su urbanización o plan parcial
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', border: '1px solid #D0E8F2', boxShadow: '0 2px 8px rgba(0,59,111,0.06)' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: '1rem', margin: '0 0 8px' }}>{s.titulo}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#4a6a82', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 12px' }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ background: '#EBF5F9', color: '#003B6F', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11.5, padding: '4px 10px', borderRadius: 20 }}>⏱ {s.plazo}</span>
                  <span style={{ background: '#E8F5E9', color: '#1b5e20', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11.5, padding: '4px 10px', borderRadius: 20 }}>💰 {s.precio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Proceso */}
      <Section bg="#ffffff">
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Cómo trabajamos</SectionLabel>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', marginBottom: '2rem' }}>
            De la consulta a la entrega — sin intermediarios
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
            {PROCESO.map(p => (
              <div key={p.num} style={{ textAlign: 'center', padding: '1.25rem 1rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#003B6F', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 18, margin: '0 auto 12px' }}>{p.num}</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: '0.9rem', margin: '0 0 8px' }}>{p.titulo}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#5a7f99', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F8FAFC">
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', marginBottom: '1.5rem' }}>
            Lo que los promotores preguntan antes de contratar
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
      <Section bg="#ffffff">
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <QuoteFormInline serviceId="decreto1807" />
        </div>
      </Section>

      <CTABanner
        title="¿Tiene un terreno o un plan parcial que necesita el componente hídrico?"
        subtitle="Diagnóstico técnico sin costo en 24 horas. Director disponible. Entrega en 3–4 semanas."
        cta="Consultar por WhatsApp"
        href={`https://wa.me/${WA}?text=${WA_MSG}`}
      />
    </>
  )
}
