import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito diseño de acueducto en el Quindío. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño de Acueductos en el Quindío | BIC',
  description: 'Diseño de acueductos rurales y municipales en Armenia, Calarcá y el Quindío. RAS 2017, Res. 0330. BIC, COPNIA vigente. Propuesta en 24 h.',
  keywords: [
    'diseño acueducto Quindío',
    'acueducto rural Quindío',
    'diseño acueducto Armenia',
    'acueducto municipal Calarcá',
    'RAS 2017 Quindío',
    'ingeniero acueducto Quindío',
    'PTAP Quindío',
    'agua potable Quindío',
    'acueducto Montenegro Quindío',
    'consultoría acueducto Quindío',
  ],
  canonical: 'https://ingenieriabernal.co/acueducto-quindio',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Diseño de Acueductos en el Quindío',
  description: 'Diseño de acueductos rurales y municipales en Armenia, Calarcá y el Quindío. RAS 2017, Res. 0330/2017. COPNIA vigente.',
  url: 'https://ingenieriabernal.co/acueducto-quindio',
  serviceType: 'Diseño de Acueductos',
  areaServed: ['Quindío', 'Armenia', 'Calarcá', 'Montenegro', 'Eje Cafetero', 'Colombia'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bernal Ingeniería Consultores — BIC',
    url: 'https://ingenieriabernal.co',
    telephone: '+573024778910',
  },
}

const SERVICIOS = [
  {
    icon: '💧',
    titulo: 'Acueductos rurales y veredales',
    desc: 'Diseño completo de acueductos veredales en el Quindío: captación, línea de aducción, PTAP, tanque de almacenamiento y red de distribución. Conforme al RAS 2017 y la Resolución 0330/2017 del Ministerio de Vivienda. Memorias de cálculo, planos DWG y presupuesto APU listos para SGR o FINDETER.',
  },
  {
    icon: '🏗️',
    titulo: 'Sistemas de agua potable municipales',
    desc: 'Diseño de sistemas de distribución de agua potable para cabeceras municipales y centros poblados del Quindío. Modelación EPANET de la red, optimización de presiones y caudales, dimensionamiento de tanques de almacenamiento y selección de equipos de bombeo.',
  },
  {
    icon: '🔧',
    titulo: 'Diagnóstico y mejoramiento de sistemas existentes',
    desc: 'Diagnóstico técnico de acueductos existentes en municipios del Quindío: evaluación del IRCA, identificación de pérdidas técnicas (agua no contabilizada), propuesta de mejoras y elaboración del Plan de Mejoramiento del Servicio conforme a la normativa de la Superintendencia de Servicios Públicos.',
  },
  {
    icon: '📜',
    titulo: 'Formulación MGA-Web para regalías SGR',
    desc: 'Formulación del proyecto de agua potable en la Metodología General Ajustada (MGA-Web) del DNP para presentación ante los OCAD del SGR. BIC prepara el proyecto completo: ficha MGA, estudios técnicos de soporte, presupuesto verificable y análisis de alternativas exigido por el DNP.',
  },
]

const MUNICIPIOS = [
  'Armenia', 'Calarcá', 'Montenegro', 'Quimbaya', 'La Tebaida',
  'Circasia', 'Salento', 'Filandia', 'Génova', 'Buenavista', 'Córdoba (Q)',
]

const FAQ = [
  {
    q: '¿Cuánto cuesta un diseño de acueducto rural en el Quindío?',
    a: 'El costo de diseñar un acueducto veredal en el Quindío oscila entre $18 y $45 millones COP según la longitud de la red, el número de usuarios, la disponibilidad de información topográfica y la complejidad de la fuente de abastecimiento. BIC envía propuesta técnica y económica en menos de 24 horas después de recibir la información básica del proyecto.',
  },
  {
    q: '¿BIC puede elaborar el proyecto para regalías SGR en el Quindío?',
    a: 'Sí. BIC ha formulado proyectos de agua potable y saneamiento en MGA-Web del DNP para presentación ante los OCAD del SGR. Para el Quindío y el Eje Cafetero, elaboramos el diseño técnico del acueducto, el proyecto MGA-Web completo con análisis de alternativas, el presupuesto verificable con APU y el documento BPIN para la presentación al OCAD departamental o regional.',
  },
  {
    q: '¿Qué norma regula el diseño de acueductos en el Quindío?',
    a: 'El Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico — RAS 2017, adoptado por la Resolución 0330 de 2017 del Ministerio de Vivienda, Ciudad y Territorio, rige para todos los municipios del Quindío y Colombia. El nivel de complejidad del sistema (bajo, medio, medio-alto, alto) determina los parámetros de diseño aplicables.',
  },
]

export default function ServicioAcueductoQuindio() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-acueducto-quindio'
    s.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(s)
    return () => { document.getElementById('schema-acueducto-quindio')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería sanitaria · Quindío</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de Acueductos en el Quindío
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Sistemas de agua potable rurales y municipales — RAS 2017 y regalías SGR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 28, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña sistemas de acueducto para los once municipios
            del Quindío: acueductos rurales veredales, sistemas para cabeceras municipales y diagnósticos
            para mejoramiento de ESP. Con base en Manizales y proyectos activos en Armenia, Calarcá
            y Montenegro. Especialista UNAL, COPNIA 17202-313228.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de acueducto</Btn>
            <Btn variant="outline" href="/servicios/diseno-acueductos" dark>Ver servicio nacional</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['RAS 2017', 'Res. 0330', 'EPANET', 'PTAP', 'Regalías SGR', 'COPNIA'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios en el Quindío</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Diseño de acueductos y sistemas de agua potable en el Quindío
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: 24, borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 8 }}>{s.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── MUNICIPIOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cobertura departamental</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 12 }}>
            Municipios del Quindío donde trabaja BIC
          </h2>
          <ThinLine mb={28} />
          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
            BIC opera en los once municipios del departamento del Quindío. El Quindío cuenta con
            importantes proyectos de agua potable financiados con regalías del SGR, especialmente
            en municipios con IRCA alto como Génova, Buenavista y Córdoba. La CRQ (Corporación
            Autónoma Regional del Quindío) es la autoridad ambiental para los trámites de
            concesión de aguas en todo el departamento.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {MUNICIPIOS.map(m => (
              <span key={m} style={{
                background: '#e6f2fa', border: '1px solid #b3d4e8',
                borderRadius: 20, padding: '5px 14px', color: '#003B6F',
                fontWeight: 600, fontSize: 13,
              }}>{m}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>
            Acueductos en el Quindío — preguntas comunes
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TAMBIÉN DISPONIBLE EN ── */}
      <Section style={{ background: '#eef6fb' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 14 }}>
            Servicio nacional de diseño de acueductos
          </p>
          <a href="/servicios/diseno-acueductos" style={{
            display: 'inline-block', background: '#fff', border: '1px solid #b3d4e8',
            borderRadius: 8, padding: '14px 20px', color: '#003B6F',
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
          }}>
            Ver diseño de acueductos Colombia — todas las regiones →
          </a>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💧</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita diseño de acueducto<br />en el Quindío?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Compártanos el municipio, la vereda o zona y la fuente de abastecimiento disponible.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              }}
            >
              📱 Propuesta en 24 h — sin costo
            </a>
            <a
              href="/contacto"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: 'transparent', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
