import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy de una alcaldía / entidad pública y necesito asesoría técnica en ingeniería hidráulica (diseño acueducto, regalías SGR, PTAP, gestión del riesgo). ¿Pueden orientarnos?')

const seoConfig = {
  title: 'Consultoría Hidráulica para Alcaldías y Municipios Colombia — SGR | BIC',
  description: 'BIC presta consultoría hidráulica a alcaldías, gobernaciones y ESP en Colombia: diseño de acueductos y alcantarillados RAS 2017, formulación de proyectos en MGA-Web para regalías SGR, diseño de PTAP, gestión del riesgo hídrico Decreto 1807 y estudios para POT. COPNIA. Contrato verificable SECOP.',
  keywords: [
    'consultoría hidráulica alcaldías Colombia',
    'diseño acueducto municipio Colombia',
    'formulación proyectos regalías SGR agua potable',
    'MGA-Web acueducto alcantarillado Colombia',
    'diseño PTAP municipio Colombia',
    'ingeniería hidráulica municipios Colombia',
    'estudios hidrológicos alcaldía Colombia',
    'gestión riesgo hídrico municipio Colombia',
    'POT componente hídrico Colombia',
    'contratación pública ingeniería hidráulica Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/alcaldia-municipio-colombia',
}

const SERVICIOS = [
  {
    icon: '🚰',
    titulo: 'Diseño de acueducto y alcantarillado municipal',
    desc: 'Diseño técnico de sistemas de acueducto y alcantarillado conforme a RAS 2017 y Resolución 0330/2017. Incluye memoria de cálculo, planos AutoCAD, modelo EPANET/SWMM y presupuesto de obra. Listo para contratación SECOP y fuente de regalías SGR.',
    plazo: '6–10 semanas',
    precio: 'desde $10M COP',
  },
  {
    icon: '📊',
    titulo: 'Formulación de proyectos en MGA-Web (SGR)',
    desc: 'Formulación y radicación de proyectos de agua potable y saneamiento básico en la MGA-Web del DNP para el Sistema General de Regalías. BIC tiene contrato verificable en SECOP: Alcaldía de Puerto Boyacá, 2021. Conocemos exactamente qué pide el OCAD.',
    plazo: '4–6 semanas',
    precio: 'desde $18M COP',
  },
  {
    icon: '💧',
    titulo: 'Diseño de PTAP para municipio o acueducto rural',
    desc: 'Diseño de planta de tratamiento de agua potable según RAS 2017 y Resolución 0330/2017. Memoria técnica firmada COPNIA, planos y presupuesto de obra. Para municipios con regalías SGR o recursos propios. BIC coordina con la Superintendencia de Servicios Públicos.',
    plazo: '8–12 semanas',
    precio: 'desde $15M COP',
  },
  {
    icon: '🌊',
    titulo: 'Estudios de gestión del riesgo hídrico para POT',
    desc: 'Estudios de amenaza y riesgo por inundación para actualización de POT o PMGR municipal. Decreto 1807/2014, Ley 1523/2012. Incluye modelación HEC-RAS 2D, zonificación y medidas de mitigación. Aceptado por Planeación Departamental y autoridad ambiental.',
    plazo: '6–8 semanas',
    precio: 'desde $20M COP',
  },
]

const REFERENCIAS = [
  { entidad: 'Alcaldía Puerto Boyacá', contrato: '621/2021', desc: 'Formulación proyecto agua potable MGA-Web — SGR', verificable: true },
  { entidad: 'Palacio de Justicia La Dorada', contrato: 'Verificable', desc: 'Diseño hidrosanitario y sistemas contra incendio', verificable: true },
  { entidad: 'Proyectos EPANET Manizales', contrato: 'SECOP', desc: 'Modelación hidráulica redes acueducto', verificable: true },
]

const PREGUNTAS = [
  {
    q: '¿BIC tiene experiencia en proyectos financiados con regalías SGR?',
    a: 'Sí. BIC formuló el proyecto de agua potable de la Alcaldía de Puerto Boyacá en MGA-Web (Contrato 621/2021, verificable en SECOP). Conocemos los requisitos específicos del OCAD, los errores que hacen devolver los proyectos y la documentación técnica que pide el DNP. Puede verificar el contrato directamente en el portal SECOP.',
  },
  {
    q: '¿Pueden trabajar bajo proceso de licitación pública?',
    a: 'Sí. BIC está en capacidad de participar en procesos de contratación SECOP (licitación, selección abreviada, concurso de méritos y contratación directa). Rogerio Bernal cuenta con COPNIA vigente, RUT activo y toda la documentación habilitante para contratar con entidades públicas.',
  },
  {
    q: '¿Qué diferencia a BIC de otras firmas de ingeniería?',
    a: 'BIC es una consultora especializada en hidráulica — no hacemos de todo. Eso significa que el director del proyecto es el especialista, no un asistente. El municipio habla directamente con Rogerio Bernal, ingeniero civil UNAL especialista en hidráulica. Los entregables son precisos, cumplen la norma y se presentan en tiempo. Precio competitivo frente a firmas grandes con estructura más pesada.',
  },
  {
    q: '¿Trabajan en municipios pequeños o solo en ciudades grandes?',
    a: 'BIC trabaja especialmente bien con municipios intermedios y pequeños donde el problema hídrico es urgente pero el presupuesto no alcanza para una firma grande. Entendemos la realidad de los sistemas de acueducto rurales, los alcantarillados que llevan años sin mantenimiento y los procesos de regalías que se quedan estancados en el OCAD.',
  },
]

export default function AlcaldiaMunicipioColombia() {
  useEffect(() => {
    document.title = seoConfig.title
  }, [])

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Consultoría Hidráulica para Alcaldías y Municipios Colombia',
    provider: {
      '@type': 'Organization',
      name: 'BIC Bernal Ingeniería Consultores',
      url: 'https://ingenieriabernal.co',
    },
    areaServed: { '@type': 'Country', name: 'Colombia' },
    description: seoConfig.description,
    serviceType: 'Consultoría Hidráulica Municipal',
  }

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup type="service" />

      {/* Hero */}
      <BlueprintBg>
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
          <SectionLabel>Para alcaldías, gobernaciones y ESP de Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#003B6F', margin: '1rem 0' }}>
            Diseño de acueductos, regalías SGR y gestión del riesgo hídrico para su municipio
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4a6a82', maxWidth: 700, margin: '0 auto 2rem', lineHeight: 1.7, fontFamily: "'Lato', sans-serif" }}>
            BIC presta consultoría hidráulica especializada a entes territoriales y operadores de servicios públicos en Colombia. Formulamos proyectos en MGA-Web, diseñamos acueductos y PTAP según RAS 2017, y elaboramos los estudios de riesgo hídrico que pide el Decreto 1807. Contrato verificable en SECOP. COPNIA vigente.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Consultar por WhatsApp
            </Btn>
            <Btn variant="outline" href="#servicios">
              Ver servicios y precios
            </Btn>
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['COPNIA 17202-313228', 'MGA-Web SGR', 'RAS 2017', 'SECOP verificable'].map(t => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </section>
      </BlueprintBg>

      {/* Referencias verificables */}
      <Section bg="#ffffff">
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <SectionLabel>Experiencia verificable</SectionLabel>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', marginBottom: '1.25rem' }}>
            Proyectos con entidades públicas — consultables en SECOP
          </h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {REFERENCIAS.map(r => (
              <div key={r.entidad} style={{ background: '#EBF5F9', borderRadius: 10, padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 14, margin: 0 }}>{r.entidad}</p>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#4a6a82', fontSize: 13, margin: '2px 0 0' }}>{r.desc}</p>
                </div>
                {r.verificable && (
                  <span style={{ background: '#E8F5E9', color: '#1b5e20', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, padding: '4px 10px', borderRadius: 20, whiteSpace: 'nowrap' }}>
                    ✓ Verificable en SECOP
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Servicios */}
      <Section bg="#F8FAFC">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios para entidades públicas</SectionLabel>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', marginBottom: '2rem' }}>
            Lo que BIC entrega a su municipio
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', border: '1px solid #D0E8F2', boxShadow: '0 2px 8px rgba(0,59,111,0.06)' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: '1rem', margin: '0 0 8px' }}>{s.titulo}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#4a6a82', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 12px' }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{ background: '#EBF5F9', color: '#003B6F', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11.5, padding: '4px 10px', borderRadius: 20 }}>⏱ {s.plazo}</span>
                  <span style={{ background: '#E8F5E9', color: '#1b5e20', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11.5, padding: '4px 10px', borderRadius: 20 }}>💰 {s.precio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#ffffff">
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', marginBottom: '1.5rem' }}>
            Lo que los funcionarios preguntan antes de contratar
          </h2>
          {PREGUNTAS.map((item, i) => (
            <div key={i} style={{ background: '#EBF5F9', borderRadius: 10, padding: '1.25rem', marginBottom: '1rem', border: '1px solid #D0E8F2' }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: '0.95rem', margin: '0 0 8px' }}>{item.q}</h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#4a6a82', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Form */}
      <Section bg="#F8FAFC">
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <QuoteFormInline serviceId="regalias" />
        </div>
      </Section>

      <CTABanner
        title="¿Necesita formular un proyecto de agua con regalías o diseñar el acueducto de su municipio?"
        subtitle="Habla directamente con el Ing. Bernal. Respuesta en 24 horas. Contrato verificable en SECOP."
        cta="Consultar por WhatsApp"
        href={`https://wa.me/${WA}?text=${WA_MSG}`}
      />
    </>
  )
}
