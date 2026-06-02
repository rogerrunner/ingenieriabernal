import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Estudios Geotécnicos y de Suelos')

const seoConfig = {
  title: 'Estudios Geotécnicos Colombia — Suelos NSR-10 Taludes | BIC',
  description: 'Estudios geotécnicos y de suelos en Colombia. NSR-10, estabilidad de taludes, capacidad portante. Proyectos de construcción e hidráulicos. COPNIA. Consulta.',
  keywords: [
    'estudios geotécnicos Colombia',
    'estudio de suelos Colombia',
    'capacidad portante suelo',
    'estabilidad de taludes Colombia',
    'NSR-10 Título H',
    'exploración del subsuelo Colombia',
    'ensayos geotécnicos Colombia',
    'estudio geotécnico constructoras',
    'estudio suelos licencia construcción',
    'geotecnia Eje Cafetero',
    'análisis de asentamientos',
    'SPT Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/geotecnia',
  noindex: true,
}

const INCLUYE = [
  { icon: '🔩', titulo: 'Exploración del subsuelo', desc: 'Programación y supervisión de sondeos de penetración estándar (SPT), apiques, perforaciones con recuperación de muestras inalteradas y ensayos de penetración estática (CPT) según la NSR-10 Título H y el NSR-10 A.10.' },
  { icon: '🧪', titulo: 'Ensayos de laboratorio geotécnico', desc: 'Interpretación de ensayos sobre muestras: clasificación USCS, límites de Atterberg, granulometría, humedad natural, densidad, compresión simple, consolidación y corte directo. Correlaciones empíricas con parámetros de diseño.' },
  { icon: '🏗️', titulo: 'Capacidad portante y diseño de cimentaciones', desc: 'Cálculo de la capacidad portante admisible del suelo. Recomendación del tipo de cimentación (superficial o profunda), presiones de diseño, asentamientos diferenciales y medidas de mejoramiento. Cumplimiento NSR-10 Título H.' },
  { icon: '⛰️', titulo: 'Análisis de estabilidad de taludes', desc: 'Evaluación de la estabilidad de cortes y terraplenes mediante métodos de equilibrio límite (Bishop, Morgenstern-Price, Spencer). Determinación del factor de seguridad estático y seudoestático. Propuesta de obras de estabilización.' },
  { icon: '🌊', titulo: 'Geotecnia para obras hidráulicas', desc: 'Estudios geotécnicos específicos para diques, presas de tierra, canales, defensas fluviales y obras de control de erosión. Análisis de filtraciones, tubificación y estabilidad hidráulica de terraplenes.' },
  { icon: '📋', titulo: 'Informe geotécnico completo', desc: 'Informe técnico con descripción del subsuelo, resultados de ensayos, parámetros de diseño, recomendaciones de cimentación, modelo geotécnico y conclusiones. Firmado por especialista para trámite de licencia de construcción.' },
]

const PARA_QUIEN = [
  { tipo: 'Constructoras y promotores de vivienda', desc: 'Estudio de suelos obligatorio para trámite de licencia de construcción ante la curaduría urbana. Recomendación de cimentación para edificios de hasta 5 pisos y proyectos mayores con NSR-10 Título H.' },
  { tipo: 'Alcaldías y entidades públicas', desc: 'Estudios geotécnicos para diseño de obras de infraestructura: alcantarillados profundos, defensas fluviales, accesos viales y equipamientos municipales sobre suelos blandos o en zonas de ladera.' },
  { tipo: 'Empresas de infraestructura e industria', desc: 'Geotecnia para plantas industriales, bodegas, tanques de almacenamiento, redes de servicios enterradas y cimentaciones de maquinaria pesada o estructuras especiales.' },
  { tipo: 'Interventores y revisores técnicos', desc: 'Revisión de estudios geotécnicos presentados por contratistas. Verificación de la exploración mínima requerida, ensayos realizados y parámetros utilizados en el diseño de cimentaciones.' },
]

const ESTUDIOS_BIC = [
  {
    num: '1',
    titulo: 'Estudio de suelos para cimentaciones (NSR-10 Capítulo H)',
    items: [
      'Perforación exploratoria y ensayos SPT',
      'Análisis de capacidad portante y asentamientos',
      'Recomendación de tipo de cimentación (zapatas, pilotes, platea)',
      'Requerido para licencias de construcción en todo tipo de edificaciones',
    ],
  },
  {
    num: '2',
    titulo: 'Estabilidad de taludes y laderas',
    items: [
      'Análisis de factores de seguridad (métodos Bishop, Fellenius, Morgenstern-Price)',
      'Identificación de zonas de movimiento en masa',
      'Diseño de obras de estabilización: muros de contención, anclajes, geomallas',
      'Requerido en proyectos viales, hidráulicos y POT/POMCA',
    ],
  },
  {
    num: '3',
    titulo: 'Estudios de riesgo geológico para POT y licencias',
    items: [
      'Zonificación de amenaza por movimientos en masa',
      'Evaluación de aptitud urbanística del predio',
      'Requerido por curadurías en zonas de ladera (Caldas, Eje Cafetero)',
    ],
  },
  {
    num: '4',
    titulo: 'Investigación de subsuelo para obras hidráulicas',
    items: [
      'Estudio de permeabilidad (ensayo Lefranc, permeámetro)',
      'Aptitud del terreno para PTAP, PTAR, tanques enterrados',
      'Análisis de licuación en zonas sísmicas',
    ],
  },
]

const FAQ_GEO = [
  {
    q: '¿El estudio geotécnico es obligatorio para obtener licencia de construcción?',
    a: 'Sí. La NSR-10 Capítulo H exige un Estudio de Suelos firmado por ingeniero COPNIA para todas las edificaciones de importancia normal y especial. Las curadurías urbanas verifican su presentación antes de expedir la licencia.',
  },
  {
    q: '¿Qué pasa si construyo sin estudio de suelos?',
    a: 'La edificación queda en situación irregular, la póliza de estabilidad no aplica y en caso de accidente la responsabilidad recae directamente sobre el propietario y el constructor. Además, dificulta la venta o hipoteca del inmueble.',
  },
  {
    q: '¿BIC hace las perforaciones y ensayos o solo el informe?',
    a: 'BIC ejecuta todo el proceso: diseño del programa exploratorio, contratación de la perforación, supervisión de ensayos SPT, toma de muestras y ensayos de laboratorio, análisis y elaboración del informe final firmado por ingeniero COPNIA.',
  },
  {
    q: '¿Pueden hacer el estudio geotécnico y el diseño de cimentación en el mismo contrato?',
    a: 'Sí. Incluimos las recomendaciones de cimentación directamente en el informe, y si el cliente lo requiere, elaboramos los planos constructivos de la cimentación como un alcance adicional.',
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Estudio de Suelos y Geotecnia para Construcción',
  description: 'Estudio de suelos para licencia de construcción en Pereira, Eje Cafetero y Colombia. Torres, edificios y obras. NSR-10 Título H.',
  url: 'https://ingenieriabernal.co/servicios/geotecnia',
  serviceType: 'Estudio de Suelos y Geotecnia',
  areaServed: ['Colombia', 'Eje Cafetero', 'Pereira', 'Manizales', 'Armenia', 'Risaralda'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bernal Ingeniería Consultores — BIC',
    url: 'https://ingenieriabernal.co',
    telephone: '+573024778910',
  },
}

export default function ServicioGeotecnia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-geotecnia'
    s.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(s)
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_GEO.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }
    const sf = document.createElement('script')
    sf.type = 'application/ld+json'
    sf.id = 'schema-geotecnia-faq'
    sf.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(sf)
    return () => {
      document.getElementById('schema-geotecnia')?.remove()
      document.getElementById('schema-geotecnia-faq')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Estudios Geotécnicos Colombia — Suelos NSR-10 Taludes | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Estudios Geotécnicos y de Suelos en Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/geotecnia"
        priceSpecification={[
          { name: 'Estudio geotécnico para licencia de construcción (NSR-10 H)', minPrice: 5000000, maxPrice: 18000000, priceCurrency: 'COP', description: 'Sondeos SPT, ensayos de laboratorio, capacidad portante, informe firmado COPNIA para curaduría' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Estudios Geotécnicos y de Suelos<br />
            <span style={{ color: '#17A2B8' }}>para Constructoras, Municipios y Obras en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios geotécnicos y de suelos para proyectos
            de construcción, obras hidráulicas e infraestructura en Colombia. Supervisamos sondeos
            SPT, interpretamos ensayos de laboratorio, calculamos capacidad portante, analizamos
            estabilidad de taludes y recomendamos soluciones de cimentación bajo la NSR-10 Título H.
            Nuestros informes geotécnicos están firmados por especialista con COPNIA vigente y están
            diseñados para superar la revisión técnica de curadurías urbanas, supervisores de obra y
            entidades financiadoras. Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y
            Ambiental (UNAL), integra la geotecnia con la hidráulica fluvial en proyectos donde el
            comportamiento del suelo es crítico: zonas de ladera, suelos blandos y cauces activos.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Propuesta en 24 h — sin costo
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
          <div style={{ marginTop: 20 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.35)',
              borderRadius: 100, padding: '7px 16px',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              color: '#4ADE80', fontSize: 13,
            }}>
              ✓ Desde $5.000.000 COP
            </span>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['NSR-10 Título H', 'ASTM', 'INVIAS', 'SPT / CPT', 'Bishop / Spencer'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── QUÉ ES ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Definición técnica</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué es un estudio geotécnico?</h2>
          <ThinLine mb={32} />
          <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.85, paddingLeft: 24, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li>Caracterización del subsuelo: tipo de suelo, estratigrafía, nivel freático</li>
            <li>Determinación de parámetros resistentes (cohesión, fricción, compresibilidad)</li>
            <li>Evaluación de la aptitud del terreno para cimentar o construir</li>
            <li>Obligatorio para licencias de construcción en zonas con riesgo geológico</li>
          </ul>
        </div>
      </Section>

      {/* ── QUÉ INCLUYE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye el estudio geotécnico?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {INCLUYE.map((item) => (
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

      {/* ── ESTUDIOS BIC ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Portafolio técnico</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Estudios que realiza BIC</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {ESTUDIOS_BIC.map(e => (
              <div key={e.num} style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    minWidth: 36, height: 36, borderRadius: '50%',
                    background: '#17A2B8', color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{e.num}</div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                      fontSize: 15, marginBottom: 12,
                    }}>{e.titulo}</h3>
                    <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, paddingLeft: 20, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {e.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PARA QUIÉN ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Clientes objetivo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Para quién es este servicio?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PARA_QUIEN.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#fff',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{p.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco legal</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { codigo: 'NSR-10 Capítulo H', desc: 'Requisitos de estudios geotécnicos para cimentaciones' },
              { codigo: 'NSR-10 Capítulo H.3', desc: 'Suelos problemáticos' },
              { codigo: 'Decreto 1807/2014', desc: 'Incorporación de riesgo en POT' },
              { codigo: 'INVIAS', desc: 'Manual de Diseño Geométrico y especificaciones geotécnicas para vías' },
              { codigo: 'SGC', desc: 'Servicio Geológico Colombiano: mapas de amenaza sísmica y geológica' },
            ].map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, alignItems: 'center',
                background: '#F8FAFC', borderRadius: 4, padding: '14px 20px', border: '1px solid #E2E8F0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 4,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 11,
                }}>{n.codigo}</div>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Inversión orientativa</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Precios orientativos 2026</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { tipo: 'Estudio de suelos vivienda unifamiliar', precio: '$2.5M – $5M COP' },
              { tipo: 'Estudio geotécnico edificio 5-10 pisos', precio: '$6M – $15M COP' },
              { tipo: 'Estabilidad de talud vial o predial', precio: '$5M – $12M COP' },
              { tipo: 'Estudio geotécnico para obra hidráulica', precio: '$4M – $10M COP' },
            ].map(p => (
              <div key={p.tipo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 24, borderTop: '3px solid #17A2B8',
              }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: '#001A33', fontSize: 14, marginBottom: 8 }}>{p.tipo}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#17A2B8', fontSize: 22, margin: 0 }}>{p.precio}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 13, marginTop: 20, lineHeight: 1.6 }}>
            Incluye trabajo de campo, ensayos de laboratorio, informe y recomendaciones de diseño. Precios referenciales — solicite cotización formal sin costo.
          </p>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Diferenciadores</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué BIC?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos integra la geotecnia con la ingeniería hidráulica y la gestión del riesgo: fundamental para proyectos en zonas de ladera, cauces y amenaza torrencial. COPNIA 17202-313228.' },
              { icon: '🌊', titulo: 'Geotecnia + hidráulica en un solo consultor', desc: 'BIC combina el estudio geotécnico con análisis hidrológico e hidráulico, eliminando inconsistencias entre disciplinas y reduciendo costos de coordinación para el cliente.' },
              { icon: '📜', titulo: 'COPNIA vigente — firma profesional válida', desc: 'Todos los informes geotécnicos firmados por profesional legalmente habilitado. Válido para curadurías, INVÍAS, gobernaciones y cualquier entidad territorial o financiadora.' },
              { icon: '⚡', titulo: 'Propuesta en 24 horas', desc: 'Respuesta directa del director técnico. Planificación de campo coordinada con laboratorios aliados en el Eje Cafetero y otras regiones del país.' },
            ].map(d => (
              <div key={d.titulo} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 14, marginBottom: 8,
                }}>{d.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Preguntas sobre estudios geotécnicos</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ_GEO.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 4, padding: 26, border: '1px solid #E2E8F0' }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 15,
                  marginBottom: 12, color: '#002A50', lineHeight: 1.4,
                }}>
                  {item.q}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/riesgo-hidraulico-ciudades-densas" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Riesgo Hidráulico en Ciudades Densas: Estrategias Técnicas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/cambios-normativos-ingenieria-hidraulica-2026" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cambios Normativos en Ingeniería Hidráulica 2026</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section bg="#EFF6FB" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Modelación HEC-RAS 2D para socavación local y estabilidad de orillas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos complementarios para análisis de filtración y tubificación</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/gestion-riesgo-hidrico" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Gestión del riesgo hídrico en zonas de ladera y torrencialidad</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/interventoria" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Interventoría técnica de obras hidráulicas y civiles en suelos blandos</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudio-suelos-pereira" style={{ flex: '1 1 220px', background: '#EEF6FB', border: '1px solid #17A2B8', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>¿Proyecto en Pereira o Risaralda? Ver página especializada →</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Estudio de suelos Pereira →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── TAMBIÉN DISPONIBLE EN ── */}
      <Section bg="#eef6fb" style={{ padding: '36px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 14 }}>
            También disponible en:
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/geotecnia-pereira" style={{
              display: 'inline-block', background: '#fff', border: '1px solid #b3d4e8',
              borderRadius: 8, padding: '12px 18px', color: '#003B6F',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}>
              Estudio de suelos en Pereira y Risaralda →
            </a>
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
            ¿Su proyecto necesita estudio de suelos?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de obra, el área del terreno y el municipio de ubicación.
            Le enviamos propuesta técnica y económica en menos de 24 horas.
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
