import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, tengo un proyecto en México y necesito consultoría en ingeniería hidráulica. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Consultoría en Ingeniería Hidráulica México — HEC-RAS, CONAGUA | BIC',
  description: 'BIC ofrece estudios hidrológicos, modelación HEC-RAS 2D, diseño de sistemas hidráulicos y gestión del riesgo hídrico para proyectos en México. Propuesta en 24 h.',
  keywords: [
    'consultoría ingeniería hidráulica México',
    'estudios hidrológicos México',
    'modelación HEC-RAS México',
    'gestión riesgo inundación México',
    'diseño acueducto alcantarillado México',
    'CONAGUA trámites México',
    'ingeniería hídrica México',
    'consultor hidráulico México',
    'estudio inundación México',
    'diseño drenaje pluvial México',
    'SEMARNAT estudios hidráulicos',
  ],
  canonical: 'https://ingenieriabernal.co/consultoria-hidraulica-mexico',
}

const SCHEMA_ORG = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BIC — Bernal Ingeniería Consultores',
  description: 'Consultoría en ingeniería hidráulica para proyectos en México: estudios hidrológicos, modelación HEC-RAS 2D, diseño hidráulico y gestión del riesgo hídrico.',
  url: 'https://ingenieriabernal.co/consultoria-hidraulica-mexico',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  areaServed: 'México',
}

const SERVICIOS = [
  {
    icon: '🌊',
    titulo: 'Estudios hidrológicos e hidráulicos',
    desc: 'Análisis de cuencas, caudales de diseño y modelación de inundaciones para proyectos en México conforme a Normas Técnicas de CONAGUA y metodologías del Manual de Agua Potable, Alcantarillado y Saneamiento (MAPAS).',
    precio: 'Desde $70.000 MXN',
  },
  {
    icon: '🖥️',
    titulo: 'Modelación HEC-RAS 2D',
    desc: 'Delimitación de zonas de inundación, amenaza y riesgo hídrico para ATLAS de riesgos municipales, planes de desarrollo urbano y estudios de impacto ambiental ante SEMARNAT.',
    precio: 'Desde $80.000 MXN',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño de acueductos y alcantarillado',
    desc: 'Diseño de redes de distribución de agua potable, colectores sanitarios y pluviales bajo las Normas Técnicas Complementarias del DF/CDMX y el Manual MAPAS de CONAGUA.',
    precio: 'Desde $55.000 MXN',
  },
  {
    icon: '📋',
    titulo: 'Gestión del riesgo hídrico',
    desc: 'Estudios de amenaza y vulnerabilidad por inundaciones y movimientos en masa para predios, desarrollos habitacionales y proyectos de infraestructura en México.',
    precio: 'Desde $60.000 MXN',
  },
  {
    icon: '🌿',
    titulo: 'Estudios para trámites CONAGUA y SEMARNAT',
    desc: 'Elaboración de estudios técnicos para concesiones de agua, Manifiestos de Impacto Ambiental (MIA) con componente hídrico y trámites ante CONAGUA.',
    precio: 'Consulte según alcance',
  },
  {
    icon: '🔍',
    titulo: 'Revisión técnica y supervisión de proyectos',
    desc: 'Revisión de memorias de cálculo, dictámenes técnicos y supervisión de estudios hidráulicos para desarrolladores inmobiliarios y entidades gubernamentales en México.',
    precio: 'Consulte según alcance',
  },
]

const DIFERENCIADORES = [
  {
    icon: '🎓',
    tit: 'Especialista con visión internacional',
    txt: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL Manizales). Aplicamos metodologías compatibles con los estándares de CONAGUA y el CENAPRED para estudios de riesgo.',
  },
  {
    icon: '🖥️',
    tit: 'HEC-RAS 2D — software de referencia CONAGUA',
    txt: 'HEC-RAS 2D es el software de referencia en los lineamientos técnicos de CONAGUA para estudios de inundación. Complementamos con SWMM, EPANET y SIG (ArcGIS / QGIS).',
  },
  {
    icon: '⚡',
    tit: 'Propuesta en 24 horas',
    txt: 'Propuesta técnica y económica sin costo en menos de 24 horas. Entregables 100% digitales. No requerimos presencia física en México para la mayoría de los estudios.',
  },
  {
    icon: '💵',
    tit: 'Tarifas en MXN o USD — trato directo',
    txt: 'Contratación directa con el especialista, sin intermediarios. Tarifas en pesos mexicanos o dólares. Facturación internacional disponible.',
  },
]

export default function LatamMexico() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-latam-mexico'
    script.textContent = JSON.stringify(SCHEMA_ORG)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-latam-mexico')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicios para México · LATAM</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Consultoría en Ingeniería Hidráulica<br />
            <span style={{ color: '#17A2B8' }}>para Proyectos en México</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 12,
          }}>
            BIC presta servicios de consultoría hidráulica para desarrolladores,
            constructoras, municipios y entidades gubernamentales en México que
            necesitan estudios hidrológicos, modelación HEC-RAS 2D, diseño de
            sistemas hidráulicos y gestión del riesgo de inundación.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)',
            fontSize: 15, lineHeight: 1.6, maxWidth: 720, marginBottom: 36,
          }}>
            Entregables digitales. Propuesta sin costo en 24 horas. Tarifas en MXN o USD.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar propuesta — sin costo
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios disponibles para México</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos podemos ejecutar en México?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 24, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{s.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6, marginBottom: 12,
                }}>{s.desc}</p>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 13,
                }}>{s.precio}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>¿Por qué contratar BIC desde México?</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Metodología internacional · Entrega digital · Sin fronteras</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {DIFERENCIADORES.map(d => (
              <div key={d.tit} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.tit}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{d.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTEXTO MEXICO ── */}
      <Section bg="#F0F7FF" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Contexto técnico</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(20px, 3.5vw, 28px)', marginBottom: 16,
          }}>
            Ingeniería hidráulica en México: regulación y demanda
          </h2>
          <ThinLine mb={24} />
          <p style={{
            fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16,
          }}>
            En México, la <strong>Ley de Aguas Nacionales</strong> y la <strong>CONAGUA</strong> (Comisión Nacional del Agua)
            regulan el aprovechamiento de aguas nacionales y los estudios técnicos para concesiones.
            Los Atlas de Riesgos municipales —exigidos por el <strong>CENAPRED</strong> para acceder a fondos federales—
            requieren modelaciones hidráulicas de inundación que son el núcleo de nuestra especialidad.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16,
          }}>
            Para desarrollos habitacionales, el <strong>Manual de Agua Potable, Alcantarillado y Saneamiento (MAPAS)</strong>
            de CONAGUA define los criterios de diseño de acueductos y sistemas de drenaje. Los estudios con
            componente hídrico para la <strong>Manifestación de Impacto Ambiental (MIA)</strong> ante SEMARNAT
            también requieren modelación hidráulica certificada.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8,
          }}>
            La creciente urbanización en la Zona Metropolitana del Valle de México, el Bajío,
            el corredor Monterrey-Saltillo, la Riviera Maya y ciudades medias genera una demanda
            sostenida de estudios hidráulicos para desarrolladores, constructoras y gobiernos
            estatales y municipales.
          </p>
        </div>
      </Section>

      {/* ── FORMULARIO ── */}
      <Section bg="#fff" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <SectionLabel>Solicitar propuesta</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(20px, 3.5vw, 28px)', marginBottom: 8,
          }}>Cuéntenos su proyecto en México</h2>
          <ThinLine mb={32} />
          <QuoteFormInline serviceId="latam-mexico" />
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 16,
          }}>
            ¿Tiene un proyecto en México?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos la ubicación y el tipo de estudio que necesita.
            Le respondemos con una propuesta técnica y económica en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Propuesta en 24 h — sin costo
          </Btn>
        </div>
      </Section>
    </>
  )
}
