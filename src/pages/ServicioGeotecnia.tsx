import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Estudios Geotécnicos y de Suelos')

const seoConfig = {
  title: 'Estudios Geotécnicos y de Suelos Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Estudios geotécnicos y de suelos para constructoras, municipios y entidades públicas en Colombia. Capacidad portante, estabilidad de taludes, NSR-10 Título H. Especialista UNAL. COPNIA 17202-313228.',
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

export default function ServicioGeotecnia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

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
              📱 Solicitar cotización
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['NSR-10 Título H', 'ASTM', 'INVIAS', 'SPT / CPT', 'Bishop / Spencer'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

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

      {/* ── PARA QUIÉN ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
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
                padding: 24, background: '#F8FAFC',
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
            📱 Chatear por WhatsApp
          </Btn>
        </div>
      </Section>
    </>
  )
}
