import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Modelación Hidráulica HEC-RAS 2D')

const seoConfig = {
  title: 'Modelación Hidráulica HEC-RAS 2D Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Modelación hidráulica HEC-RAS 1D y 2D para municipios, constructoras y entidades en Colombia. Manchas de inundación, amenaza hídrica Decreto 1807/2014. Director PhD. +30 años. Eje Cafetero.',
  keywords: [
    'modelación hidráulica HEC-RAS 2D Colombia',
    'HEC-RAS 2D Colombia',
    'manchas de inundación Colombia',
    'amenaza hídrica Decreto 1807',
    'modelación HEC-RAS municipios',
    'estudio riesgo hídrico planes parciales',
    'modelación hidráulica constructoras',
    'HEC-RAS Eje Cafetero',
    'zonas de inundación Colombia',
    'mapa amenaza hídrica',
    'perfiles hidráulicos',
    'flujo bidimensional',
  ],
  canonical: 'https://www.ingenieriabernal.co/servicios/modelacion-hec-ras',
}

const INCLUYE = [
  { icon: '🖥️', titulo: 'Modelación HEC-RAS 1D y 2D', desc: 'Construcción del modelo hidráulico 1D (secciones transversales) o 2D (malla computacional) del cauce. Análisis de flujo permanente e impermanente (tránsito de crecientes) con HEC-RAS versión 6.x.' },
  { icon: '🗺️', titulo: 'Manchas de inundación por período de retorno', desc: 'Generación de polígonos de inundación para Tr = 2.33, 10, 25, 50 y 100 años, clasificados por amenaza alta, media y baja conforme al Decreto 1807/2014 y la Guía Técnica del MVCT.' },
  { icon: '📐', titulo: 'Perfiles de la superficie libre del agua', desc: 'Trazado de perfiles longitudinales y secciones transversales con niveles de agua para cada período de retorno. Identificación de zonas de desbordamiento, confluencias críticas y puntos de control hidráulico.' },
  { icon: '🔧', titulo: 'Calibración y validación del modelo', desc: 'Ajuste del coeficiente de rugosidad de Manning con registros históricos de crecientes. Validación contra cotas de inundación documentadas o imágenes satelitales de eventos pasados para asegurar la confiabilidad del modelo.' },
  { icon: '📊', titulo: 'Análisis de medidas de mitigación', desc: 'Evaluación hidráulica de alternativas de reducción del riesgo: diques, canales de alivio, rectificaciones, dragados y obras de control. Comparación de escenarios con y sin intervención.' },
  { icon: '📋', titulo: 'Informe técnico y cartografía SIG', desc: 'Entrega de informe completo, modelo calibrado, archivos HEC-RAS, capas SIG (shapefile / GeoJSON) de amenaza, memorias de cálculo y cartografía en formato requerido por la entidad territorial.' },
]

const PARA_QUIEN = [
  { tipo: 'Alcaldías y oficinas de planeación', desc: 'Componente de amenaza hídrica para POT, EOT y planes de gestión del riesgo municipal exigido por el Decreto 1807/2014.' },
  { tipo: 'Constructoras y curadores urbanos', desc: 'Estudios de riesgo obligatorios para planes parciales, licencias urbanísticas en zonas de expansión o suelo suburbano con cauces cercanos.' },
  { tipo: 'INVÍAS, gobernaciones y concesiones viales', desc: 'Diseño hidráulico de puentes, box-culverts, alcantarillas y obras de drenaje longitudinal y transversal.' },
  { tipo: 'Interventores técnicos', desc: 'Revisión independiente de modelos hidráulicos entregados por consultores de diseño y verificación de cumplimiento normativo.' },
]

export default function ServicioModelacionHecRas() {
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
            Modelación Hidráulica HEC-RAS 2D<br />
            <span style={{ color: '#17A2B8' }}>para Municipios y Obras en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza modelaciones hidráulicas HEC-RAS 1D y 2D para
            determinar manchas de inundación, delimitar zonas de amenaza hídrica y cumplir el Decreto
            1807/2014. Nuestros modelos se construyen con topobatimetría de precisión, datos hidrológicos
            calibrados y la versión más reciente de HEC-RAS, entregando mapas de amenaza alta, media y
            baja aceptados por planeación municipal, UNGRD, CAR y financiadoras del SGR. Con más de
            30 años de experiencia y director PhD, garantizamos modelos que superan la revisión técnica
            más exigente en cualquier entidad territorial de Colombia.
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
          {['Decreto 1807/2014', 'HEC-RAS 6.x', 'MVCT Guía Técnica', 'UNGRD', 'SIG / GIS'].map(t => (
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
          }}>¿Qué incluye la modelación HEC-RAS?</h2>
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
              { icon: '🎓', titulo: 'Director PhD en ingeniería', desc: 'Nivel académico y técnico que garantiza modelos rigurosos, calibrados y documentados con el estándar científico más alto.' },
              { icon: '🏗️', titulo: '+30 años en proyectos hídricos', desc: 'Proyectos verificables en Dosquebradas, La Dorada, Puerto Boyacá, Viterbo y múltiples municipios del Eje Cafetero y el país.' },
              { icon: '📜', titulo: 'Certificación COPNIA vigente', desc: 'Tarjeta profesional COPNIA activa. Todos los informes firmados por profesional legalmente habilitado para ejercer en Colombia.' },
              { icon: '⚡', titulo: 'Entrega ágil y comunicación directa', desc: 'Trato directo con el director técnico. Propuesta en 24 h. Modelos entregados con seguimiento permanente hasta aprobación.' },
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
            ¿Necesita manchas de inundación o amenaza hídrica?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el cauce, la longitud del tramo y el objetivo del estudio.
            Le respondemos con presupuesto y plazo de entrega en menos de 24 horas.
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
