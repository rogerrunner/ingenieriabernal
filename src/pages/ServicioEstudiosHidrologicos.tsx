import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Estudios Hidrológicos')

const seoConfig = {
  title: 'Estudios Hidrológicos Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Estudios hidrológicos para municipios, constructoras y entidades públicas en Colombia. Análisis de cuencas, curvas IDF, caudales de diseño, periodos de retorno. Director PhD. +30 años experiencia. Eje Cafetero.',
  keywords: [
    'estudios hidrológicos Colombia',
    'estudio hidrológico municipios',
    'análisis de cuencas hidrográficas',
    'curvas IDF Colombia',
    'caudales de diseño',
    'periodos de retorno hidrología',
    'estudio hidrológico constructoras',
    'hidrología Eje Cafetero',
    'estudio hidrológico Manizales',
    'modelación hidrológica HEC-HMS',
    'Decreto 1807 2014',
    'RAS 2017 hidrología',
  ],
  canonical: 'https://www.ingenieriabernal.co/servicios/estudios-hidrologicos',
}

const INCLUYE = [
  { icon: '🌊', titulo: 'Caracterización de cuenca hidrográfica', desc: 'Delimitación automática con DEM, cálculo de parámetros morfométricos (área, pendiente, longitud, forma) y análisis de cobertura vegetal y uso del suelo.' },
  { icon: '📊', titulo: 'Análisis de frecuencia y curvas IDF', desc: 'Procesamiento estadístico de series pluviométricas del IDEAM. Ajuste de distribuciones (Gumbel, Log-Pearson III, GEV). Construcción de curvas Intensidad-Duración-Frecuencia para períodos de retorno 2, 5, 10, 25, 50 y 100 años.' },
  { icon: '🔬', titulo: 'Modelación lluvia-escorrentía', desc: 'Estimación de caudales pico y volumétricos mediante modelos HEC-HMS, método racional modificado y Curva Número (CN-SCS) según normativa RAS 2017 y Decreto 1807/2014.' },
  { icon: '📈', titulo: 'Caudales de diseño y verificación normativa', desc: 'Determinación de caudales para diferentes períodos de retorno según la obra a diseñar. Cumplimiento estricto del Reglamento Técnico RAS 2017 y la Resolución 0330/2017 del Ministerio de Vivienda.' },
  { icon: '🗺️', titulo: 'Análisis de amenaza hídrica', desc: 'Delimitación de zonas de amenaza por inundación y avenidas torrenciales conforme al Decreto 1807/2014, aplicable a instrumentos de planificación (POT, EOT, planes parciales).' },
  { icon: '📋', titulo: 'Informe técnico completo y respaldo normativo', desc: 'Documentación técnica con memorias de cálculo, planos, cartografía digital y bases de datos. Apto para trámites ante autoridades ambientales (CORPOCALDAS, CVC, CARDER) y aprobación de planes parciales.' },
]

const PARA_QUIEN = [
  { tipo: 'Alcaldías y secretarías de planeación', desc: 'Estudios para POT/EOT, planes de ordenamiento del riesgo, formulación de proyectos de agua y saneamiento ante el SGR.' },
  { tipo: 'Constructoras y promotores inmobiliarios', desc: 'Estudios hidrológicos exigidos para licencias urbanísticas, planes parciales y proyectos de vivienda y uso mixto.' },
  { tipo: 'Entidades públicas (INVÍAS, gobernaciones, ESP)', desc: 'Hidrología para diseño de puentes, drenaje vial, defensas fluviales y sistemas de acueducto y alcantarillado.' },
  { tipo: 'Interventores y supervisores de obra', desc: 'Revisión técnica de estudios hidrológicos presentados por terceros y validación de memorias de cálculo.' },
]

export default function ServicioEstudiosHidrologicos() {
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
            Estudios Hidrológicos para Municipios,<br />
            <span style={{ color: '#17A2B8' }}>Constructoras y Entidades Públicas</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios hidrológicos en Colombia con rigor técnico
            y cumplimiento normativo total. Caracterizamos cuencas hidrográficas, construimos curvas IDF
            con datos certificados del IDEAM, estimamos caudales de diseño bajo el Decreto 1807/2014 y
            el RAS 2017, y entregamos memorias de cálculo aprobables ante planeación municipal, autoridades
            ambientales y entidades del Sistema General de Regalías. Nuestro director posee doctorado en
            ingeniería y más de 30 años de experiencia en proyectos hídricos a lo largo de Colombia,
            garantizando estudios que superan la revisión técnica de cualquier entidad territorial o financiadora.
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

      {/* ── TAGS NORMATIVOS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['Decreto 1807/2014', 'RAS 2017', 'Resolución 0330/2017', 'HEC-HMS', 'IDEAM'].map(t => (
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
          }}>¿Qué incluye el estudio hidrológico?</h2>
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
              { icon: '🎓', titulo: '+30 años de experiencia', desc: 'Director con doctorado en ingeniería y trayectoria verificable en proyectos de infraestructura hídrica en Colombia, México y Ecuador.' },
              { icon: '📜', titulo: 'Certificación COPNIA y UNAL', desc: 'Profesional con Tarjeta Profesional vigente COPNIA y formación de posgrado en la Universidad Nacional de Colombia.' },
              { icon: '🗺️', titulo: 'Base en el Eje Cafetero', desc: 'Presencia directa en Manizales, Pereira, Armenia y los 18 departamentos del área de influencia. Desplazamientos a todo el país.' },
              { icon: '✅', titulo: 'Aprobación garantizada', desc: 'Estudios diseñados para superar la revisión de planeación municipal, CAR, DNP y entidades financiadoras del SGR.' },
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

      {/* ── CTA FINAL ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            Solicite su estudio hidrológico hoy
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto, la cuenca de interés y la entidad que revisará el estudio.
            Le enviamos propuesta técnica y económica en 24 horas.
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
