import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Estudio de Inundabilidad en Manizales')

const seoConfig = {
  title: 'Estudio de Inundabilidad en Manizales | BIC Ingeniería',
  description: 'Estudios de inundabilidad en Manizales con modelación HEC-RAS 2D. Requerido por Corpocaldas, POMCA y POT. Solicite cotización: +57 302 477 8910',
  keywords: [
    'estudio de inundabilidad Manizales',
    'modelación HEC-RAS 2D Manizales',
    'amenaza hídrica Manizales',
    'Corpocaldas inundabilidad',
    'POMCA Río Chinchiná',
    'gestión del riesgo Manizales',
    'Decreto 1807 2014 Caldas',
    'períodos de retorno hidrología',
    'POT Manizales riesgo hídrico',
    'estudio hidráulico Manizales',
    'Quebrada Manizales inundación',
    'QGIS hidrología Colombia',
  ],
}

const METODOLOGIA = [
  {
    icon: '🗺️',
    titulo: 'Levantamiento topográfico y datos LiDAR',
    desc: 'Obtención del Modelo Digital de Terreno (MDT) con resolución adecuada. Integración con datos LiDAR disponibles del IGAC y levantamientos batimétricos de sección transversal del cauce. Procesamiento en QGIS para preparar el terreno de simulación.',
  },
  {
    icon: '🌧️',
    titulo: 'Análisis hidrológico — curvas IDF y caudales de diseño',
    desc: 'Regionalización de lluvias con registros de estaciones del IDEAM en la cuenca. Construcción de curvas IDF para Manizales. Estimación de caudales de diseño para períodos de retorno de 2, 5, 10, 25, 50 y 100 años mediante métodos racional modificado, SCS y HEC-HMS.',
  },
  {
    icon: '💧',
    titulo: 'Modelación hidráulica HEC-RAS 2D',
    desc: 'Configuración del modelo bidimensional en HEC-RAS 2.0+ con malla de cálculo adaptada a la geometría del cauce y la llanura de inundación. Simulación de flujo no permanente para los caudales de diseño. Calibración con marcas de agua históricas cuando se dispone de registros de eventos pasados en Manizales.',
  },
  {
    icon: '📊',
    titulo: 'Mapas de amenaza, vulnerabilidad y riesgo',
    desc: 'Generación de manchas de inundación para cada período de retorno: profundidad, velocidad y extensión del área afectada. Categorización de la amenaza en alta, media y baja según el Decreto 1807/2014 y los lineamientos de la UNGRD. Superposición con cartografía predial del IGAC para cuantificar predios afectados.',
  },
  {
    icon: '⚙️',
    titulo: 'Medidas de mitigación y control',
    desc: 'Evaluación de alternativas de reducción del riesgo: obras de encauzamiento, muros de contención, readecuación de secciones, dragado y reforestación de rondas hídricas. Modelación del efecto de las obras propuestas para verificar reducción efectiva de la amenaza.',
  },
  {
    icon: '📋',
    titulo: 'Informe técnico y memoria de cálculo',
    desc: 'Documento completo con metodología, resultados, mapas temáticos en formato SHP y PDF, tablas de caudales, perfiles hidráulicos y recomendaciones de gestión del riesgo. Apto para trámite ante Corpocaldas, curadurías urbanas de Manizales y revisión de POT o planes parciales.',
  },
]

const CUENCAS = [
  { nombre: 'Río Chinchiná', desc: 'Principal arteria hídrica de Manizales. POMCA formulado y en actualización. Amenaza por crecidas súbitas en sectores de Maltería, La Enea y Bosques del Norte.' },
  { nombre: 'Quebrada Manizales', desc: 'Afluente urbano con historial de desbordamientos en el centro y el sector de La Esperanza. Alta densidad constructiva en la ronda hídrica.' },
  { nombre: 'Quebrada Olivares', desc: 'Cuenca con pendientes pronunciadas y asentamientos en zonas de amenaza alta. Requiere modelación de flujo torrencial con transporte de sedimentos.' },
  { nombre: 'Quebrada Minitas', desc: 'Tributario del Chinchiná con presión urbanística creciente en el sector sur de la ciudad. Integración con el POMCA vigente de la cuenca.' },
  { nombre: 'Quebrada La Francia', desc: 'Zona norte de Manizales con desarrollo residencial activo. Requiere estudio de inundabilidad para trámites de planes parciales bajo el POT.' },
  { nombre: 'Otras microcuencas urbanas', desc: 'BIC atiende predios y proyectos sobre cualquier drenaje urbano o periurbano de Manizales. Consulte por su caso específico.' },
]

const FAQ = [
  {
    q: '¿Cuándo es obligatorio el estudio de inundabilidad en Manizales?',
    a: 'El Decreto 1807/2014 —incorporado al Decreto 1077/2015— obliga a presentar un estudio de amenaza y riesgo por inundación para tramitar licencias de urbanismo y construcción en zonas de amenaza media o alta, para revisión o modificación de POT, y para obtener permisos ambientales ante Corpocaldas. Los planes parciales en el municipio también exigen este estudio como insumo obligatorio del componente de gestión del riesgo.',
  },
  {
    q: '¿Qué diferencia hay entre un estudio de inundación 1D y 2D?',
    a: 'El modelo 1D (secciones transversales) calcula el nivel del agua a lo largo del eje del cauce pero no representa bien la extensión lateral de la inundación. El modelo 2D (malla bidimensional con HEC-RAS 2D) simula la propagación del flujo sobre la llanura de inundación, produciendo mapas de profundidad y velocidad mucho más precisos y exigidos por las autoridades ambientales colombianas. BIC trabaja exclusivamente con modelación 2D para estudios en Manizales.',
  },
  {
    q: '¿Corpocaldas acepta informes elaborados con HEC-RAS?',
    a: 'Sí. HEC-RAS es el software estándar reconocido por el IDEAM, el Ministerio de Ambiente y todas las Corporaciones Autónomas Regionales de Colombia, incluida Corpocaldas. Los términos de referencia del POMCA Río Chinchiná y los lineamientos de la UNGRD contemplan explícitamente la modelación bidimensional como metodología válida.',
  },
  {
    q: '¿Cuánto tiempo tarda el estudio?',
    a: 'Depende de la extensión del área de estudio y la disponibilidad de datos topográficos e hidrológicos. Para un predio o proyecto puntual en Manizales, el plazo típico es de 3 a 6 semanas. Para estudios municipales o de cuenca completa, entre 2 y 4 meses. BIC entrega propuesta con cronograma detallado en menos de 24 horas.',
  },
  {
    q: '¿El estudio sirve para tramitar seguros o financiamiento bancario?',
    a: 'Sí. Los mapas de amenaza hídrica generados por el estudio son utilizados por aseguradoras y entidades financieras para valorar el riesgo de predios e infraestructura. BIC puede adaptar el alcance del informe a los requerimientos específicos de la entidad financiadora o aseguradora.',
  },
]

export default function EstudioInundabilidadManizales() {
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
          <SectionLabel light>Servicio especializado · Manizales</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Estudio de Inundabilidad en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Modelación Hidráulica y Gestión del Riesgo</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios de inundabilidad en Manizales y Caldas
            con modelación hidráulica bidimensional HEC-RAS 2D. Nuestros estudios cumplen los
            requisitos del Decreto 1807/2014, los lineamientos del POMCA Río Chinchiná y los
            términos de referencia de Corpocaldas. Entregamos mapas de amenaza alta, media y baja
            para períodos de retorno de 10, 25, 50 y 100 años, listos para trámite de licencias
            de construcción, planes parciales y revisión de POT en Manizales.
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
          {['Decreto 1807/2014', 'POMCA Río Chinchiná', 'HEC-RAS 2D', 'QGIS', 'Corpocaldas', 'POT Manizales'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── QUÉ ES Y CUÁNDO SE REQUIERE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué es y cuándo se requiere un estudio de inundabilidad?</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Un estudio de inundabilidad es un análisis técnico que determina la extensión, profundidad
                y velocidad del agua en una zona determinada cuando se presenta un evento de lluvia o
                crecida de una magnitud específica. En Colombia, estos estudios son obligatorios para
                múltiples trámites urbanísticos y ambientales.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8 }}>
                En Manizales, la accidentada topografía y la alta pluviosidad del Eje Cafetero hacen
                que prácticamente todas las microcuencas urbanas presenten riesgo de crecidas súbitas.
                El municipio registra historial de eventos en quebradas como La Niza, Manizales,
                Olivares y Minitas, lo que convierte al estudio de inundabilidad en un requisito
                frecuente para constructoras, alcaldías, Corpocaldas y propietarios de predios
                ubicados en zonas de expansión.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 14, marginBottom: 12 }}>
                Situaciones que obligan al estudio:
              </h3>
              <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
                <li>Licencias de urbanismo y construcción en zonas de amenaza media o alta (Decreto 1807/2014)</li>
                <li>Planes parciales y macroproyectos urbanos en Manizales</li>
                <li>Revisión ordinaria o modificación excepcional del POT</li>
                <li>Obtención de concesión de aguas o permiso de vertimientos ante Corpocaldas</li>
                <li>Actualización del POMCA Río Chinchiná</li>
                <li>Licencias ambientales para obras de infraestructura (vías, puentes, rellenos)</li>
                <li>Requerimientos de aseguradoras o entidades financiadoras de proyectos</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── MARCO NORMATIVO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Regulación vigente</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Marco normativo: Corpocaldas, POT y Decreto 1807/2014</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              {
                norma: 'Decreto 1807/2014 — Decreto 1077/2015',
                desc: 'Establece los criterios técnicos para la incorporación de la gestión del riesgo en los POT. Define la zonificación de amenaza por inundación en alta, media y baja, y obliga a elaborar estudios detallados de riesgo antes de expedir licencias urbanísticas en zonas de amenaza.',
              },
              {
                norma: 'POMCA Río Chinchiná',
                desc: 'Plan de Ordenación y Manejo de la Cuenca Hidrográfica del Río Chinchiná. Formulado por Corpocaldas, define zonas de protección, áreas de ronda hídrica y restricciones de uso del suelo. Los estudios de inundabilidad en Manizales deben ser coherentes con su zonificación.',
              },
              {
                norma: 'POT de Manizales',
                desc: 'El Plan de Ordenamiento Territorial de Manizales incorpora el mapa de amenaza hídrica municipal. Los trámites de licencia en zonas categorizadas como amenaza media o alta requieren estudio de detalle que actualice y refine la cartografía del POT para el predio específico.',
              },
              {
                norma: 'Ley 1523/2012 — SNGRD',
                desc: 'Sistema Nacional de Gestión del Riesgo de Desastres. Asigna responsabilidades a municipios y CAR en la identificación, análisis y reducción del riesgo. Los estudios de inundabilidad son el insumo técnico básico para los PMGRD (Planes Municipales de Gestión del Riesgo).',
              },
              {
                norma: 'NSR-10 Título H — Geotecnia',
                desc: 'La Norma Sismo Resistente exige considerar el nivel freático y la presencia de depósitos fluviales en el diseño de cimentaciones. En zonas inundables de Manizales, el estudio geotécnico debe integrarse con el análisis de inundabilidad para garantizar la seguridad estructural.',
              },
              {
                norma: 'Microzonificación Sísmica de Manizales',
                desc: 'Manizales cuenta con un estudio de microzonificación sísmica que define el comportamiento del suelo frente a eventos sísmicos. En combinación con el estudio de inundabilidad, permite evaluar el riesgo combinado de sismos e inundaciones, relevante para el diseño de obras en zonas de ladera.',
              },
            ].map(item => (
              <div key={item.norma} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 13, marginBottom: 8,
                }}>{item.norma}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── METODOLOGÍA ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso técnico</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Metodología: HEC-RAS 2D, QGIS y períodos de retorno 10–100 años</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {METODOLOGIA.map((item) => (
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

      {/* ── CUENCAS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Área de acción</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Cuencas donde trabajamos en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {CUENCAS.map((c) => (
              <div key={c.nombre} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{c.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── QUÉ ENTREGA BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Entregables</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué entrega BIC al finalizar el estudio?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '📄', titulo: 'Informe técnico completo', desc: 'Documento PDF firmado por especialista con COPNIA vigente. Incluye introducción, metodología, análisis hidrológico, resultados hidráulicos, mapas de amenaza y recomendaciones. Apto para presentación ante Corpocaldas y curadurías.' },
              { icon: '🗺️', titulo: 'Mapas SHP y PDF georeferenciados', desc: 'Shapefiles de manchas de inundación para cada período de retorno (10, 25, 50, 100 años) en coordenadas MAGNA-SIRGAS. Planos en formato PDF y DWG a escala adecuada para el trámite.' },
              { icon: '📐', titulo: 'Perfiles longitudinales y secciones transversales', desc: 'Perfiles del pelo de agua sobre el eje del cauce y secciones transversales con la mancha de inundación para los períodos de retorno de diseño. Exportados desde HEC-RAS en formato vectorial.' },
              { icon: '💾', titulo: 'Archivos del modelo HEC-RAS', desc: 'Entrega del modelo HEC-RAS 2D calibrado (.prj) con la geometría, condiciones de borde y resultados. Permite a la autoridad ambiental o curaduría verificar y reproducir los resultados de forma independiente.' },
              { icon: '📊', titulo: 'Memoria de cálculo hidrológico', desc: 'Anexo con el análisis estadístico de caudales, curvas IDF, hidrogramas de diseño y resultados de HEC-HMS. Completamente auditables con fuentes de datos IDEAM citadas.' },
              { icon: '🏗️', titulo: 'Propuesta de medidas de reducción del riesgo', desc: 'Capítulo de recomendaciones con alternativas de intervención: obras de control hidráulico, restricciones de uso del suelo en ronda hídrica y medidas no estructurales de alerta temprana.' },
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
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Estudio de inundabilidad en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{
                background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: '24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10,
                }}>{item.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7,
                  margin: 0,
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
            ¿Necesita un estudio de inundabilidad en Manizales?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos la ubicación del predio, la quebrada o río más cercano y el trámite que
            necesita adelantar. Le enviamos propuesta técnica y económica en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp · +57 302 477 8910
          </Btn>
        </div>
      </Section>
    </>
  )
}
