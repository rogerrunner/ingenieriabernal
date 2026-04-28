import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar una Modelación Hidráulica en Manizales')

const seoConfig = {
  title: 'Modelación Hidráulica en Manizales | BIC Ingeniería',
  description: 'Modelación hidráulica 1D y 2D en Manizales con HEC-RAS. Análisis de inundaciones, socavación y diseño de obras. +57 302 477 8910',
  keywords: [
    'modelación hidráulica Manizales',
    'HEC-RAS 1D 2D Manizales',
    'HEC-GeoRAS Manizales',
    'QGIS hidrología Manizales',
    'análisis inundaciones Caldas',
    'socavación puentes Manizales',
    'diseño obras hidráulicas Caldas',
    'modelación caudales Eje Cafetero',
    'flujo no permanente HEC-RAS',
    'mancha de inundación Manizales',
    'cuenca Río Chinchiná modelación',
    'BIC ingeniería hidráulica',
  ],
  canonical: 'https://ingenieriabernal.co/modelacion-hidraulica-manizales',
}

const TIPOS = [
  {
    icon: '📏',
    titulo: 'Modelación 1D (unidimensional)',
    desc: 'Análisis del perfil hidráulico a lo largo del eje del cauce. Se discretiza la sección transversal cada cierta distancia y se resuelven las ecuaciones de Saint-Venant en régimen gradualmente variado o no permanente. Ideal para cauces canalizados, obras de arte y diseño de secciones de descarga. HEC-RAS 1D es la herramienta estándar en Colombia para trámites ante corporaciones autónomas y Ministerio de Ambiente.',
  },
  {
    icon: '🌊',
    titulo: 'Modelación 2D (bidimensional)',
    desc: 'Simula la propagación del flujo sobre la llanura de inundación mediante una malla de elementos finitos o diferencias finitas. Genera mapas de profundidad, velocidad y tiempo de llegada del frente de onda para cada período de retorno. Obligatoria según el Decreto 1807/2014 para estudios de amenaza hídrica en zonas de expansión urbana. BIC trabaja exclusivamente con HEC-RAS 2D para estudios de inundabilidad en Manizales.',
  },
  {
    icon: '🔀',
    titulo: 'Modelación quasi-2D y acoplamiento',
    desc: 'Combina la precisión del modelo 1D en el cauce principal con la capacidad del 2D para representar la dinámica de inundación en la llanura. Útil para tramos urbanos donde la geometría del canal es irregular y la llanura de inundación es compleja. BIC acopla ambas aproximaciones según las condiciones topográficas y el objetivo del estudio.',
  },
  {
    icon: '💨',
    titulo: 'Modelación de flujo torrencial con sedimentos',
    desc: 'En el Eje Cafetero, muchas quebradas presentan avenidas torrenciales con alto contenido de sedimentos y material de arrastre. BIC aplica módulos de transporte de sedimentos de HEC-RAS y modelos especializados (FLO-2D, RAMMS) para evaluar la amenaza por flujos de lodo y detritos, especialmente relevante para las microcuencas de Manizales con antecedentes de avalanchas.',
  },
]

const SOFTWARE = [
  { nombre: 'HEC-RAS', desc: 'Software del Cuerpo de Ingenieros del Ejército de EE. UU. Estándar mundial y colombiano para modelación hidráulica 1D y 2D. BIC trabaja con las versiones más recientes y entrega los archivos fuente del modelo para auditoría.' },
  { nombre: 'HEC-GeoRAS / RAS Mapper', desc: 'Interfaz entre HEC-RAS y SIG (ArcGIS/QGIS). Permite procesar el Modelo Digital de Terreno, preparar la geometría del modelo y exportar los resultados como capas georreferenciadas en MAGNA-SIRGAS.' },
  { nombre: 'QGIS', desc: 'Plataforma SIG de código abierto para procesamiento cartográfico, análisis de cuencas y elaboración de mapas temáticos. Integración completa con HEC-RAS y GRASS GIS para análisis de drenaje y delimitación de cuencas hidrográficas.' },
  { nombre: 'HEC-HMS', desc: 'Módulo de modelación hidrológica para la estimación de caudales de diseño a partir de datos de precipitación. BIC lo usa para generar los hidrogramas de entrada al modelo hidráulico de HEC-RAS en cuencas con datos suficientes.' },
]

const APLICACIONES = [
  { icon: '🏘️', titulo: 'Estudios de inundabilidad para licencias', desc: 'Decreto 1807/2014 exige estudio detallado de amenaza hídrica para licencias de urbanismo y construcción en zonas de amenaza media o alta. BIC entrega informe aceptado por Corpocaldas y curadurías de Manizales.' },
  { icon: '🌉', titulo: 'Análisis de socavación en puentes', desc: 'Cálculo de profundidad de socavación general, contracción y local en estribos y pilas de puentes. Metodología HEC-18 integrada en HEC-RAS. Insumo para diseño de cimentaciones de obras viales en Caldas.' },
  { icon: '🚧', titulo: 'Diseño de obras hidráulicas', desc: 'Dimensionamiento de canales de conducción, obras de protección de márgenes, disipadores de energía, pasos de vía y estructuras de control de inundaciones. Verificación hidráulica de la sección de diseño mediante modelación.' },
  { icon: '🗺️', titulo: 'Actualización de POT y POMCA', desc: 'Los Planes de Ordenamiento Territorial y los POMCA requieren mapas de zonificación de amenaza hídrica actualizados. BIC elabora los insumos cartográficos y técnicos para incorporar la gestión del riesgo hídrico en los instrumentos de planificación de Manizales y Caldas.' },
  { icon: '🏗️', titulo: 'Evaluación de impacto de obras en el régimen hidráulico', desc: 'Análisis del efecto de rellenos, canalizaciones, puentes o embalses sobre el nivel del agua aguas arriba y aguas abajo. Requisito frecuente en trámites de licencia ambiental y estudios de impacto ambiental en el Eje Cafetero.' },
]

const CUENCAS = [
  { nombre: 'Río Chinchiná', desc: 'Cuenca principal de Manizales. POMCA formulado con Corpocaldas. Modelación bidimensional del tramo urbano para análisis de amenaza en sectores de Maltería, La Enea y Bosques del Norte.' },
  { nombre: 'Quebrada Manizales', desc: 'Afluente urbano con historial de desbordamientos. Modelo 2D de alta resolución para el tramo canalizado y la sección natural con evaluación de capacidad hidráulica.' },
  { nombre: 'Quebrada Olivares', desc: 'Cuenca con régimen torrencial y pendientes pronunciadas. Modelo acoplado 1D/2D para el tramo medio y bajo con análisis de transporte de sedimentos.' },
  { nombre: 'Quebrada Minitas y tributarios', desc: 'Afluentes del Chinchiná con presión urbanística creciente. Modelación 2D para planes parciales en el sector sur de Manizales y municipios del área metropolitana.' },
]

const ENTREGAS = [
  { icon: '📄', titulo: 'Informe técnico con memoria de cálculo', desc: 'Documento PDF firmado por especialista COPNIA. Incluye hidrología, configuración del modelo, calibración, resultados para cada período de retorno y recomendaciones de gestión del riesgo.' },
  { icon: '🗺️', titulo: 'Mapas SHP georeferenciados MAGNA-SIRGAS', desc: 'Shapefiles de manchas de inundación (profundidad, velocidad, extensión) para T=10, 25, 50 y 100 años. Planos PDF y DWG a escala para presentación ante autoridades.' },
  { icon: '📐', titulo: 'Perfiles hidráulicos y secciones transversales', desc: 'Perfiles del pelo de agua a lo largo del eje del cauce y secciones transversales con la mancha de inundación exportados desde HEC-RAS en formato vectorial.' },
  { icon: '💾', titulo: 'Archivos del modelo HEC-RAS', desc: 'Entrega del modelo completo (.prj) con geometría, condiciones de borde y resultados. Permite verificación y reproducción independiente por parte de Corpocaldas o la curaduría.' },
]

const FAQ = [
  {
    q: '¿Qué diferencia hay entre modelación 1D y 2D en HEC-RAS?',
    a: 'El modelo 1D calcula el nivel del agua en secciones transversales a lo largo del eje del cauce pero no representa bien la expansión lateral de la inundación sobre la llanura. El modelo 2D usa una malla de cálculo sobre la superficie del terreno y simula la propagación del flujo en todas las direcciones, produciendo mapas de inundación mucho más precisos. Para estudios de amenaza hídrica que requieren cumplir el Decreto 1807/2014 en Colombia, las autoridades ambientales exigen modelación 2D.',
  },
  {
    q: '¿Corpocaldas acepta los modelos elaborados con HEC-RAS?',
    a: 'Sí. HEC-RAS es la herramienta estándar reconocida por el IDEAM, el Ministerio de Ambiente y todas las Corporaciones Autónomas Regionales de Colombia, incluida Corpocaldas. Los términos de referencia del POMCA Río Chinchiná contemplan HEC-RAS como metodología válida para estudios de amenaza y riesgo hídrico.',
  },
  {
    q: '¿Qué topografía necesito para hacer el modelo?',
    a: 'Para modelación 2D se requiere un Modelo Digital de Terreno (MDT) con resolución de 0,5 a 2 metros. BIC puede utilizar datos LiDAR del IGAC cuando estén disponibles, o gestionar un levantamiento topográfico con dron (fotogrametría) o GPS diferencial para el área de estudio. Para el cauce se requiere batimetría de secciones transversales complementaria al MDT de superficie.',
  },
  {
    q: '¿Cuánto tiempo demora la modelación hidráulica?',
    a: 'Depende de la extensión del área y la disponibilidad de datos. Para un tramo urbano puntual (1–3 km de cauce) con datos topográficos disponibles, el plazo típico es de 3 a 5 semanas. Para modelaciones de cuenca completa o tramos más extensos, entre 6 y 12 semanas. BIC entrega propuesta con cronograma detallado en menos de 24 horas.',
  },
  {
    q: '¿Para qué sirve el análisis de socavación en puentes?',
    a: 'La socavación es la erosión del lecho del cauce alrededor de los estribos y pilas de un puente durante una crecida. Si no se diseña la cimentación considerando la profundidad de socavación, el puente puede colapsar. HEC-RAS incluye módulos para calcular la socavación general, por contracción y local siguiendo la metodología HEC-18, insumo obligatorio para el diseño estructural de puentes en Colombia según el Manual de Diseño Geométrico del INVIAS.',
  },
  {
    q: '¿Qué períodos de retorno usa BIC en sus modelos?',
    a: 'El estándar para estudios de inundabilidad en Colombia (Decreto 1807/2014) establece períodos de retorno de 10, 25, 50 y 100 años para la zonificación de amenaza en alta, media y baja. Para diseño de obras hidráulicas, el período de retorno depende del tipo de obra: alcantarillas (10–25 años), canales urbanos (25–50 años), defensas ribereñas (100 años). BIC define los períodos de retorno apropiados según el objetivo del estudio y la normativa aplicable.',
  },
]

export default function ModelacionHidraulicaManizales() {
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
            Modelación Hidráulica en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>HEC-RAS 1D/2D y Análisis de Caudales</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza modelaciones hidráulicas 1D y 2D en Manizales
            y Caldas con HEC-RAS, HEC-GeoRAS y QGIS. Elaboramos estudios de inundabilidad,
            análisis de socavación en puentes y diseño de obras hidráulicas para cuencas del Eje
            Cafetero. Nuestros modelos son aceptados por Corpocaldas y las curadurías de Manizales
            para trámites de licencias y actualización del POT.
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Herramientas:</span>
          {['HEC-RAS 1D/2D', 'HEC-GeoRAS', 'QGIS', 'HEC-HMS', 'Decreto 1807/2014', 'Corpocaldas'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── TIPOS DE MODELACIÓN ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Tipos de modelación</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Modelación 1D, 2D y quasi-2D con HEC-RAS</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS.map((item) => (
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

      {/* ── SOFTWARE ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Plataformas de trabajo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Software: HEC-RAS, HEC-GeoRAS y QGIS</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {SOFTWARE.map((s) => (
              <div key={s.nombre} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{s.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── APLICACIONES ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Aplicaciones</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Aplicaciones: inundaciones, socavación y diseño de obras hidráulicas</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {APLICACIONES.map((item) => (
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
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Área de acción</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Cuencas del Eje Cafetero donde modelamos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {CUENCAS.map((c) => (
              <div key={c.nombre} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 24,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 14, marginBottom: 8,
                }}>{c.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.6,
                }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ENTREGABLES ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Entregables</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué entrega BIC al finalizar la modelación?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {ENTREGAS.map(d => (
              <div key={d.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{d.desc}</p>
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
          }}>FAQ — Modelación hidráulica en Manizales</h2>
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
            ¿Necesita modelación hidráulica para su proyecto en Manizales?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el trámite que necesita adelantar, la quebrada o río involucrado y la
            extensión del área de estudio. Le enviamos propuesta técnica y económica en menos
            de 24 horas.
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
