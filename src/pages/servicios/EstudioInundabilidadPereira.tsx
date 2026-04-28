import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Estudio de Inundabilidad en Pereira')

const seoConfig = {
  title: 'Estudio de Inundabilidad en Pereira | BIC Ingeniería',
  description: 'Estudios de inundabilidad en Pereira con HEC-RAS 2D. Requerido por CARDER, POT Pereira y licencias de construcción. +57 302 477 8910',
  keywords: [
    'estudio de inundabilidad Pereira',
    'modelación HEC-RAS 2D Pereira',
    'amenaza hídrica Pereira',
    'CARDER inundabilidad',
    'POMCA Río Otún',
    'gestión del riesgo Risaralda',
    'Decreto 1807 2014 Risaralda',
    'períodos de retorno hidrología Pereira',
    'POT Pereira riesgo hídrico',
    'Río Otún inundación',
    'Quebrada Consotá Pereira',
    'QGIS hidrología Risaralda',
  ],
  canonical: 'https://ingenieriabernal.co/estudio-de-inundabilidad-pereira',
}

const METODOLOGIA = [
  {
    icon: '🗺️',
    titulo: 'Levantamiento topográfico y modelo digital de terreno',
    desc: 'Obtención del MDT a partir de datos LiDAR del IGAC y levantamientos batimétricos de secciones transversales del cauce. En Pereira, la topografía accidentada de la cordillera occidental y los depósitos aluviales del Río Otún exigen una representación del terreno de alta resolución para que el modelo HEC-RAS 2D sea confiable. Se procesan los datos en QGIS y RAS Mapper.',
  },
  {
    icon: '🌧️',
    titulo: 'Análisis hidrológico — curvas IDF y caudales de diseño',
    desc: 'Regionalización de lluvias con registros de las estaciones IDEAM ubicadas en la cuenca del Otún y afluentes. Construcción de curvas IDF para Pereira con métodos de Chen o Chow. Estimación de caudales para períodos de retorno de 2, 5, 10, 25, 50 y 100 años mediante métodos racional modificado, SCS CN y HEC-HMS, considerando las altas intensidades de lluvia características de Risaralda.',
  },
  {
    icon: '💧',
    titulo: 'Modelación hidráulica bidimensional HEC-RAS 2D',
    desc: 'Configuración del modelo 2D con malla de cálculo adaptada a la geometría del cauce y la llanura de inundación. Simulación de flujo no permanente para los hidrogramas de diseño de cada período de retorno. Cuando existen registros de marcas de agua de eventos históricos en Pereira — como las crecientes del Otún documentadas por CARDER — se realiza calibración del modelo.',
  },
  {
    icon: '📊',
    titulo: 'Mapas de amenaza hídrica por período de retorno',
    desc: 'Generación de manchas de inundación con profundidad, velocidad y extensión para TR 10, 25, 50 y 100 años. Categorización de la amenaza en alta, media y baja según el Decreto 1807/2014 y los lineamientos de la UNGRD. Superposición con cartografía predial e infraestructura vial de Pereira para identificar predios y sectores afectados.',
  },
  {
    icon: '⚙️',
    titulo: 'Medidas de reducción del riesgo',
    desc: 'Evaluación de alternativas de mitigación adaptadas a las condiciones geomorfológicas de Pereira: obras de encauzamiento, muros de contención, readecuación de rondas hídricas, revegetalización de orillas y sistemas de alerta temprana. Modelación de las obras propuestas para verificar la reducción efectiva de la amenaza en cada escenario de diseño.',
  },
  {
    icon: '📋',
    titulo: 'Informe técnico con entregables para CARDER y curadurías',
    desc: 'Documento completo con metodología, resultados, mapas temáticos en SHP y PDF georeferenciados en MAGNA-SIRGAS, tablas de caudales, perfiles hidráulicos y recomendaciones de gestión del riesgo. El informe cumple los términos de referencia de CARDER y las exigencias de las curadurías urbanas de Pereira para tramitar licencias de construcción en zonas de amenaza.',
  },
]

const CUENCAS = [
  { nombre: 'Río Otún', desc: 'Principal arteria hídrica de Pereira. Alimenta el embalse La Esmeralda y atraviesa sectores urbanos y periurbanos con alta presión de urbanización. POMCA formulado y en actualización por CARDER.' },
  { nombre: 'Quebrada Consotá', desc: 'Afluente del Otún que atraviesa el sur de Pereira. Sectores como Cuba, Belmonte y La Sultana presentan riesgo de desbordamiento por encauzamiento insuficiente y pérdida de cobertura vegetal en la ronda.' },
  { nombre: 'Río Barbas', desc: 'Límite natural entre Risaralda y Quindío. Cuenca con alta pluviosidad y crecidas torrenciales. Afecta predios rurales y proyectos de loteo en la zona periurbana de Pereira.' },
  { nombre: 'Quebrada El Oso', desc: 'Microcuenca urbana del centro-oriente de Pereira. Zonas residenciales consolidadas en el corredor de la quebrada con historial de inundaciones en eventos de lluvia extrema.' },
  { nombre: 'Río La Vieja', desc: 'Delimitador sur entre Risaralda, Quindío y Valle del Cauca. Proyectos de loteo en el corredor Cerritos–La Virginia requieren estudio de inundabilidad por influencia del río y sus afluentes.' },
  { nombre: 'Otras microcuencas urbanas', desc: 'BIC atiende predios y proyectos sobre cualquier drenaje urbano o periurbano de Pereira y el Área Metropolitana (Dosquebradas, La Virginia). Consulte por su caso específico.' },
]

const FAQ = [
  {
    q: '¿Cuándo es obligatorio el estudio de inundabilidad en Pereira?',
    a: 'El Decreto 1807/2014 —incorporado al Decreto 1077/2015— exige presentar un estudio de amenaza y riesgo por inundación para tramitar licencias de urbanismo y construcción en zonas categorizadas como amenaza media o alta, para revisión o modificación del POT, y para obtener permisos ambientales ante CARDER. Los planes parciales en el municipio también requieren este estudio como insumo obligatorio del componente de gestión del riesgo.',
  },
  {
    q: '¿Cuál es el papel de CARDER en los estudios de inundabilidad de Pereira?',
    a: 'La Corporación Autónoma Regional de Risaralda (CARDER) es la autoridad ambiental competente en Pereira. Revisa y avala los estudios de amenaza hídrica para trámites de permisos ambientales, concesiones de agua y planes de manejo de cuencas. Sus términos de referencia establecen la metodología mínima aceptable y los períodos de retorno requeridos. BIC elabora los estudios en plena conformidad con los lineamientos de CARDER.',
  },
  {
    q: '¿Qué diferencia hay entre un estudio 1D y un estudio 2D?',
    a: 'El modelo 1D calcula el nivel del pelo de agua a lo largo del eje del cauce, pero no representa bien la extensión lateral de la inundación sobre la llanura. El modelo 2D (HEC-RAS 2D con malla bidimensional) simula la propagación del flujo sobre el terreno, produciendo mapas de profundidad y velocidad mucho más precisos. CARDER y las curadurías de Pereira exigen modelación 2D para los estudios detallados de amenaza hídrica.',
  },
  {
    q: '¿Cuánto tiempo demora el estudio de inundabilidad en Pereira?',
    a: 'Para un predio o proyecto puntual, el plazo típico es de 3 a 6 semanas. Para estudios que abarcan tramos de río extensos o varios afluentes, entre 6 y 12 semanas. El tiempo depende de la disponibilidad de datos topográficos e hidrológicos del área de estudio. BIC entrega propuesta técnica con cronograma detallado en menos de 24 horas.',
  },
  {
    q: '¿El estudio sirve también para planes parciales o proyectos urbanísticos?',
    a: 'Sí. El estudio de inundabilidad es un requisito expreso para los planes parciales en Pereira conforme al POT vigente y al Decreto 1807/2014. BIC adapta el alcance del estudio al tipo de trámite: licencia individual, plan parcial, macroproyecto o revisión de POT. También elaboramos el componente de gestión del riesgo para planes de desarrollo predial.',
  },
]

export default function EstudioInundabilidadPereira() {
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
          <SectionLabel light>Servicio especializado · Pereira</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Estudio de Inundabilidad en Pereira:<br />
            <span style={{ color: '#17A2B8' }}>Modelación y Gestión del Riesgo Hídrico en Risaralda</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios de inundabilidad en Pereira y Risaralda
            con modelación hidráulica bidimensional HEC-RAS 2D. Nuestros estudios cumplen los requisitos
            del Decreto 1807/2014, los términos de referencia de CARDER y los lineamientos del POMCA
            Río Otún. Entregamos mapas de amenaza alta, media y baja para períodos de retorno de 10,
            25, 50 y 100 años, listos para tramitar licencias de construcción, planes parciales y
            revisión del POT de Pereira.
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
          {['Decreto 1807/2014', 'POMCA Río Otún', 'HEC-RAS 2D', 'QGIS', 'CARDER', 'POT Pereira'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── CONTEXTO ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Marco normativo: CARDER, POT y Decreto 1807/2014</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Pereira está ubicada en la vertiente occidental de los Andes colombianos, sobre una
                topografía de fuertes pendientes y redes de drenaje de alta torrencialidad. El Río
                Otún, la Quebrada Consotá y decenas de microcuencas urbanas representan un riesgo
                hídrico significativo para los asentamientos de la ciudad, especialmente en sectores
                de ladera y en las llanuras aluviales del piedemonte.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8 }}>
                CARDER ha documentado múltiples eventos de crecida e inundación en el área metropolitana
                de Pereira. El POT municipal incorpora la zonificación de amenaza hídrica, pero los
                predios en zona de amenaza media o alta requieren un estudio de detalle que actualice
                y refine esa cartografía antes de tramitar cualquier licencia urbanística.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 14, marginBottom: 12 }}>
                Trámites que exigen el estudio:
              </h3>
              <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
                <li>Licencias de urbanismo y construcción en zonas de amenaza media o alta (Decreto 1807/2014)</li>
                <li>Planes parciales en el municipio de Pereira</li>
                <li>Revisión ordinaria o modificación excepcional del POT de Pereira</li>
                <li>Permisos de vertimientos, concesiones de agua y otros trámites ante CARDER</li>
                <li>Actualización del POMCA Río Otún y sus afluentes</li>
                <li>Licencias ambientales para infraestructura vial, puentes y rellenos en zona de influencia hídrica</li>
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
          }}>Normativa aplicable en Pereira y Risaralda</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              {
                norma: 'Decreto 1807/2014 — Decreto 1077/2015',
                desc: 'Establece los criterios técnicos para incorporar la gestión del riesgo en los POT. Define la zonificación de amenaza hídrica en alta, media y baja, y exige estudios detallados de riesgo antes de expedir licencias urbanísticas en zonas de amenaza. Es la norma central que sustenta la obligatoriedad del estudio en Pereira.',
              },
              {
                norma: 'POMCA Río Otún',
                desc: 'Plan de Ordenación y Manejo de la Cuenca Hidrográfica del Río Otún. Formulado y administrado por CARDER. Define zonas de protección, rondas hídricas y restricciones de uso del suelo. Los estudios de inundabilidad en Pereira deben ser coherentes con su zonificación y directrices de manejo.',
              },
              {
                norma: 'POT de Pereira',
                desc: 'El Plan de Ordenamiento Territorial de Pereira incorpora el mapa de amenaza hídrica municipal. Los predios en zonas de amenaza media o alta requieren estudio de detalle que refine la cartografía del POT para la escala predial específica antes de tramitar cualquier licencia.',
              },
              {
                norma: 'Ley 1523/2012 — SNGRD',
                desc: 'Sistema Nacional de Gestión del Riesgo. Asigna responsabilidades al municipio de Pereira, a CARDER y al Consejo Municipal de Gestión del Riesgo (CMGRD) en la identificación y reducción del riesgo hídrico. El estudio de inundabilidad es el insumo técnico fundamental para actualizar el PMGRD de Pereira.',
              },
              {
                norma: 'NSR-10 Título H — Geotecnia',
                desc: 'La norma sismo resistente exige considerar el nivel freático y la presencia de depósitos fluviales y coluviales en el diseño de cimentaciones. En zonas inundables de Pereira, el estudio geotécnico debe integrarse con el análisis de inundabilidad para garantizar la seguridad estructural en toda condición hidráulica de diseño.',
              },
              {
                norma: 'Resolución 0330/2017 — RAS',
                desc: 'Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico. Para el diseño de alcantarillados pluviales y sistemas de drenaje en proyectos ubicados en llanuras de inundación de Pereira, la hidráulica de los cauces naturales debe modelarse en coherencia con el diseño del sistema de drenaje urbano del proyecto.',
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
          }}>Metodología HEC-RAS 2D para ríos y quebradas de Pereira</h2>
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
          <SectionLabel>Ríos y quebradas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Cuencas donde trabajamos en Pereira: Otún, Consotá y más</h2>
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

      {/* ── ENTREGABLES ── */}
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
              { icon: '📄', titulo: 'Informe técnico firmado por especialista COPNIA', desc: 'Documento PDF con metodología, análisis hidrológico, resultados hidráulicos, mapas de amenaza y recomendaciones. Cumple los términos de referencia de CARDER y las exigencias de las curadurías urbanas de Pereira.' },
              { icon: '🗺️', titulo: 'Mapas SHP y PDF georeferenciados en MAGNA-SIRGAS', desc: 'Shapefiles de manchas de inundación para cada período de retorno (10, 25, 50, 100 años). Planos en PDF y DWG a escala adecuada para el trámite ante CARDER o curaduría.' },
              { icon: '📐', titulo: 'Perfiles longitudinales y secciones transversales', desc: 'Perfiles del pelo de agua sobre el eje del cauce y secciones transversales con la mancha de inundación exportados desde HEC-RAS en formato vectorial y PDF.' },
              { icon: '💾', titulo: 'Modelo HEC-RAS 2D calibrado', desc: 'Entrega del modelo (.prj) con geometría, condiciones de borde y resultados. Permite a CARDER o la curaduría verificar y reproducir los resultados de forma independiente.' },
              { icon: '📊', titulo: 'Memoria de cálculo hidrológico', desc: 'Análisis estadístico de caudales, curvas IDF, hidrogramas de diseño y resultados de HEC-HMS con fuentes de datos IDEAM citadas y auditables.' },
              { icon: '🏗️', titulo: 'Propuesta de medidas de reducción del riesgo', desc: 'Recomendaciones con alternativas de intervención estructural y no estructural: encauzamiento, muros, restricciones en ronda hídrica y medidas de alerta temprana.' },
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
          }}>FAQ — Estudio de inundabilidad en Pereira</h2>
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
            ¿Necesita un estudio de inundabilidad en Pereira?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos la ubicación del predio, la quebrada o río más cercano y el trámite que
            necesita adelantar ante CARDER o la curaduría de Pereira. Le enviamos propuesta técnica
            y económica en menos de 24 horas.
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
