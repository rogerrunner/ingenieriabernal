import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573162888989'
const WA_MSG = encodeURIComponent('Hola, quiero asesoría para tramitar una Concesión de Aguas en Colombia')

const seoConfig = {
  title: 'Concesión de Aguas en Colombia | Trámites y Estudios Técnicos',
  description: 'Tramitación de concesión de aguas en Colombia. Estudios técnicos, aforos, memorias de cálculo y radicación ante corporaciones ambientales (CAR, CORPOCALDAS, CRQ, CARDER).',
  keywords: [
    'concesion aguas colombia',
    'tramite concesion aguas colombia',
    'corporacion autonoma regional concesion',
    'concesion aguas superficiales colombia',
    'permiso aprovechamiento hidrico colombia',
    'concesion aguas corpocaldas',
    'concesion aguas crq',
    'estudio tecnico concesion aguas',
    'aforo caudal concesion aguas',
    'consultoría concesión hídrica colombia',
  ],
  canonical: 'https://ingenieriabernal.co/concesion-aguas-colombia',
}

const SERVICIOS = [
  {
    icon: '💧',
    titulo: 'Estudios técnicos para concesión de aguas superficiales',
    desc: 'Elaboración del estudio técnico que sustenta la solicitud de concesión ante la CAR: aforo de caudales en la fuente, balance hídrico de la cuenca, cálculo del caudal ecológico mínimo, justificación del volumen solicitado y evaluación de la disponibilidad hídrica. Cumplimiento del Decreto 1076 de 2015 y los protocolos de cada corporación autónoma regional.',
  },
  {
    icon: '📊',
    titulo: 'Aforos y caracterización de la fuente hídrica',
    desc: 'Medición de caudales mediante métodos directos (molinete, flotadores, estructuras de aforo) e indirectos (curva de gasto). Monitoreo de caudales en período de estiaje y lluvia para determinar la disponibilidad real de la fuente. Análisis de series históricas del IDEAM y modelación hidrológica para proyección de caudales a largo plazo.',
  },
  {
    icon: '📋',
    titulo: 'Radicación y trámite ante la corporación ambiental',
    desc: 'Preparación del expediente completo para radicación: solicitud formal, estudio técnico firmado por especialista, planos de localización georreferenciados, certificado de propiedad o autorización del predio, y pago de tasas de uso. BIC conoce los requisitos específicos de CORPOCALDAS, CRQ, CARDER, CAR Cundinamarca, CDMB, CORMACARENA y demás corporaciones del país.',
  },
  {
    icon: '🔄',
    titulo: 'Renovación, modificación y seguimiento de concesión',
    desc: 'Tramitación de renovaciones de concesiones vencidas, modificaciones de caudal o punto de captación, y elaboración de informes de monitoreo requeridos por la resolución de concesión. BIC acompaña a titulares de concesión en el cumplimiento de las condiciones establecidas por la autoridad ambiental para mantener vigente el permiso de aprovechamiento hídrico.',
  },
]

const NORMATIVA = [
  {
    norma: 'Decreto 1076 de 2015 — Decreto Único Reglamentario Sector Ambiente',
    desc: 'Compila toda la normativa de aprovechamiento del recurso hídrico en Colombia. Establece los requisitos para solicitar concesión de aguas superficiales y subterráneas, los documentos exigidos, los plazos de respuesta de la CAR, las causales de caducidad y los criterios para el cálculo del caudal ecológico mínimo que debe permanecer en la fuente.',
  },
  {
    norma: 'Política Nacional para la Gestión Integral del Recurso Hídrico',
    desc: 'Define los lineamientos para el ordenamiento, uso eficiente y protección del agua en Colombia. Establece que las concesiones deben otorgarse respetando el caudal ambiental y la disponibilidad real de la fuente, lo cual requiere un estudio técnico detallado con aforos de campo y análisis hidrológico de la cuenca aportante.',
  },
  {
    norma: 'Resolución 865 de 2004 — caudal ambiental',
    desc: 'Adopta la metodología para el cálculo del índice de escasez para aguas superficiales y subterráneas en Colombia. Este índice determina si una fuente puede soportar la concesión solicitada sin comprometer el caudal ecológico ni los derechos de terceros. BIC calcula el índice de escasez como parte del estudio técnico de cada concesión.',
  },
  {
    norma: 'Ley 99 de 1993 — Sistema Nacional Ambiental (SINA)',
    desc: 'Crea las Corporaciones Autónomas Regionales como autoridades ambientales con competencia para otorgar concesiones de agua. Cada CAR tiene autonomía para establecer requisitos adicionales y criterios técnicos específicos para su jurisdicción. BIC conoce las particularidades de cada corporación en el Eje Cafetero y otras regiones del país.',
  },
]

const CORPORACIONES = [
  { nombre: 'CORPOCALDAS', region: 'Caldas', desc: 'Corporación Autónoma Regional de Caldas. Jurisdicción sobre toda la cuenca del río Cauca en Caldas, quebradas del Eje Cafetero y afluentes del río Magdalena en el departamento.' },
  { nombre: 'CRQ', region: 'Quindío', desc: 'Corporación Autónoma Regional del Quindío. Trámites de concesión en cuencas del río La Vieja, quebradas de Armenia y municipios del departamento del Quindío.' },
  { nombre: 'CARDER', region: 'Risaralda', desc: 'Corporación Autónoma Regional de Risaralda. Concesiones en cuencas del río Otún, Consotá y afluentes en Pereira, Dosquebradas, Santa Rosa y municipios de Risaralda.' },
  { nombre: 'CAR Cundinamarca', region: 'Cundinamarca y Bogotá', desc: 'Corporación Autónoma Regional de Cundinamarca. Mayor volumen de trámites del país. Concesiones en cuencas de los ríos Bogotá, Sumapaz, Magdalena y sus afluentes en Cundinamarca.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Diagnóstico del predio y la fuente', desc: 'Visita de campo para identificar el punto de captación, estimar caudales iniciales, verificar la fuente y recopilar antecedentes existentes de concesiones aguas arriba y aguas abajo.' },
  { paso: '02', titulo: 'Aforos y estudio técnico', desc: 'Medición de caudales, análisis de información hidrológica del IDEAM, cálculo del caudal ecológico, balance hídrico de la cuenca y justificación técnica del volumen solicitado.' },
  { paso: '03', titulo: 'Elaboración del expediente', desc: 'Preparación de todos los documentos requeridos por la CAR: solicitud formal, estudio técnico firmado, planos georreferenciados, certificados de predio y pago de tasas de radicación.' },
  { paso: '04', titulo: 'Radicación y seguimiento', desc: 'Presentación del expediente ante la corporación, respuesta a requerimientos técnicos de los funcionarios y acompañamiento hasta la expedición de la resolución de concesión.' },
]

const FAQ = [
  {
    q: '¿Qué es una concesión de aguas y cuándo se necesita en Colombia?',
    a: 'La concesión de aguas es el derecho que otorga una Corporación Autónoma Regional para aprovechar el agua de una fuente superficial o subterránea. En Colombia se requiere para: (1) captar agua de ríos, quebradas o manantiales para acueductos rurales o urbanos; (2) derivar agua para sistemas de riego agrícola; (3) abastecer plantas industriales que consumen agua en sus procesos; (4) recargar tanques para ganadería en zonas rurales. Cualquier aprovechamiento de agua sin concesión es ilegal y puede generar multas por parte de la CAR.',
  },
  {
    q: '¿Cuáles son los documentos requeridos para tramitar una concesión de aguas?',
    a: 'Los requisitos básicos en la mayoría de corporaciones son: solicitud formal con datos del solicitante y del predio, estudio técnico firmado por un profesional (ingeniería civil, ambiental o afines) que incluya aforos de caudal, balance hídrico y justificación del volumen, planos de localización del predio y del punto de captación georreferenciados, certificado de tradición y libertad del predio o autorización del propietario, y comprobante de pago de las tasas de radicación. Algunas CAR exigen documentos adicionales según la fuente y el uso del agua.',
  },
  {
    q: '¿Cuánto tiempo demora el trámite de concesión de aguas en Colombia?',
    a: 'El tiempo depende de la corporación y la complejidad del caso. El Decreto 1076 de 2015 establece que la CAR debe resolver la solicitud en un plazo máximo de 60 días hábiles después de expedida la licencia de trámite. En la práctica, los tiempos reales en el Eje Cafetero son: CORPOCALDAS: 3–8 meses; CRQ: 3–6 meses; CARDER: 4–9 meses. Los principales factores que prolongan el trámite son la solicitud de información adicional por parte de la CAR y la complejidad de la fuente (ríos con múltiples concesiones otorgadas).',
  },
  {
    q: '¿Cuánto cuesta el estudio técnico para la concesión de aguas?',
    a: 'El costo del estudio técnico en Colombia en 2026 varía según la complejidad: para concesión de fuente simple con caudal pequeño (< 1 L/s), predio accesible y fuente sin conflictos conocidos: $5–12 millones COP. Para concesión con aforo de campo, análisis hidrológico y balance de cuenca para caudales medios: $12–25 millones COP. Para proyectos de acueducto rural con estudios de disponibilidad hídrica a largo plazo y múltiples fuentes alternativas: $20–50 millones COP. El costo de la radicación (tasas de la CAR) es independiente y varía según la corporación.',
  },
  {
    q: '¿BIC puede tramitar la concesión ante cualquier CAR del país?',
    a: 'Sí. BIC elabora estudios técnicos para concesiones de agua ante cualquier corporación autónoma regional del país. Conocemos los requisitos específicos y los formatos de CORPOCALDAS, CRQ, CARDER, CAR Cundinamarca, CDMB, CORTOLIMA, CORMACARENA, CVC, CORNARE y otras. El trámite de radicación puede hacerse de forma remota en muchas corporaciones, lo que nos permite atender proyectos en todo el territorio nacional desde nuestra oficina en Manizales.',
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'BIC — Bernal Ingeniería Consultores',
      url: 'https://ingenieriabernal.co',
      telephone: '+573162888989',
      address: { '@type': 'PostalAddress', addressLocality: 'Manizales', addressRegion: 'Caldas', addressCountry: 'CO' },
      areaServed: 'Colombia',
      description: 'Consultoría en ingeniería hidráulica e hidrológica en Colombia. Tramitación de concesiones de agua, estudios hidrológicos y diseño de sistemas hídricos.',
    },
    {
      '@type': 'Service',
      name: 'Concesión de Aguas en Colombia — Trámites y Estudios Técnicos',
      provider: { '@type': 'LocalBusiness', name: 'BIC — Bernal Ingeniería Consultores' },
      areaServed: 'Colombia',
      description: 'Tramitación de concesión de aguas superficiales ante corporaciones autónomas en Colombia. Estudios técnicos, aforos y acompañamiento ante CAR.',
      serviceType: 'Ingeniería Hidrológica y Ambiental',
    },
  ],
}

export default function ConcesionAguasColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Trámite especializado · Nacional · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Concesión de Aguas en Colombia:<br />
            <span style={{ color: '#17A2B8' }}>Trámites Técnicos ante CAR, CORPOCALDAS, CRQ y CARDER</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores elabora los estudios técnicos y gestiona el trámite
            de concesión de aguas superficiales ante corporaciones autónomas regionales en toda
            Colombia. Aforos de caudal, balances hídricos, memorias de cálculo firmadas por
            especialista y acompañamiento hasta la expedición de la resolución.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Consultar trámite
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Corporaciones:</span>
          {['CORPOCALDAS', 'CRQ', 'CARDER', 'CAR', 'CDMB', 'CORTOLIMA', 'Decreto 1076/2015'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye el trámite de concesión de aguas?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS.map((item) => (
              <div key={item.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 10,
                }}>{item.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa: Decreto 1076/2015, Ley 99/1993 y caudal ambiental</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {NORMATIVA.map((item) => (
              <div key={item.norma} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
                border: '1px solid #E2E8F0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 13, marginBottom: 10,
                }}>{item.norma}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CORPORACIONES ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Corporaciones autónomas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tramitación ante CORPOCALDAS, CRQ, CARDER y CAR</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {CORPORACIONES.map(s => (
              <div key={s.nombre} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 15, marginBottom: 6,
                }}>{s.nombre}</h3>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(23,162,184,0.7)',
                  marginBottom: 10,
                }}>{s.region}</div>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso de trabajo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>4 pasos para tramitar su concesión de aguas</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {PROCESO.map(p => (
              <div key={p.paso} style={{
                background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#17A2B8',
                  fontSize: 32, marginBottom: 8,
                }}>{p.paso}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{p.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Concesión de aguas en Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: '24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10,
                }}>{item.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0,
                }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Necesita tramitar una concesión de aguas?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el uso del agua (acueducto, riego, industria), el municipio, la fuente
            hídrica y la corporación autónoma competente. Le orientamos sobre los requisitos
            específicos y le cotizamos el estudio técnico en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp · +57 316 288 8989
          </Btn>
        </div>
      </Section>
    </>
  )
}
