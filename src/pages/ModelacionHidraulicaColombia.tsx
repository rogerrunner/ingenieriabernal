import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573162888989'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar una Modelación Hidráulica en Colombia')

const seoConfig = {
  title: 'Modelación Hidráulica en Colombia | HEC-RAS 1D y 2D',
  description: 'Modelación hidráulica 1D y 2D con HEC-RAS en Colombia. Estudios de inundabilidad, manejo de crecientes y diseño de obras hidráulicas para proyectos de construcción.',
  keywords: [
    'modelacion hidraulica colombia',
    'hec-ras colombia',
    'modelacion hec-ras 2d colombia',
    'estudio inundabilidad colombia',
    'modelacion hidraulica eje cafetero',
    'hec-ras 1d colombia',
    'mapa inundacion colombia decreto 1807',
    'modelacion cauces colombia',
    'hidraulica fluvial colombia',
    'consultoría modelación hidráulica colombia',
  ],
  canonical: 'https://ingenieriabernal.co/modelacion-hidraulica-colombia',
}

const SERVICIOS = [
  {
    icon: '📏',
    titulo: 'Modelación 1D con HEC-RAS — perfil hidráulico en cauces',
    desc: 'Análisis del perfil de la lámina de agua a lo largo del eje de cauces y canales en régimen permanente y no permanente. Discretización de secciones transversales, cálculo de tirantes, velocidades y números de Froude para cada período de retorno. Obligatorio para diseño de puentes, alcantarillas y obras de arte bajo normativa INVIAS y para trámites ante corporaciones autónomas (CAR).',
  },
  {
    icon: '🌊',
    titulo: 'Modelación 2D con HEC-RAS — mapas de inundación',
    desc: 'Simulación de la propagación del flujo sobre la llanura de inundación mediante malla de elementos finitos. Genera mapas de profundidad, velocidad, fuerza tractiva y tiempo de llegada del frente de onda para períodos de retorno de 10, 50 y 100 años. Requerida por el Decreto 1807 de 2014 para estudios de amenaza hídrica en zonas de expansión urbana y planes parciales en Colombia.',
  },
  {
    icon: '🔀',
    titulo: 'Modelación acoplada 1D-2D — cauces urbanos complejos',
    desc: 'Combina la precisión del modelo 1D en el cauce principal con la capacidad 2D para representar la dinámica de inundación en planicies urbanas. Aplicado en zonas donde la red de alcantarillado interactúa con el drenaje superficial o en tramos con estructuras transversales como presas, compuertas y disipadores de energía.',
  },
  {
    icon: '💨',
    titulo: 'Modelación de avenidas torrenciales con sedimentos',
    desc: 'Análisis de flujos hiperconcentrados y de detritos en quebradas de montaña. Aplicado en el Eje Cafetero para cuencas con historial de avenidas torrenciales. BIC utiliza HEC-RAS con módulo de transporte de sedimentos y modelos complementarios para establecer zonas de amenaza alta y determinar obras de control torrencial.',
  },
]

const NORMATIVA = [
  {
    norma: 'Decreto 1807 de 2014 — amenaza hídrica en POT',
    desc: 'Establece que los municipios deben incorporar estudios de amenaza, vulnerabilidad y riesgo de inundación en sus POT. Para zonas de expansión urbana y planes parciales, exige estudios de detalle con modelación hidráulica 2D. El decreto define los períodos de retorno mínimos (10, 50 y 100 años) y las metodologías aceptadas por el MVCT y las CAR.',
  },
  {
    norma: 'Resolución 0549 de 2015 — zonificación de amenaza',
    desc: 'Complementa el Decreto 1807 definiendo los criterios técnicos para clasificar zonas en amenaza alta, media y baja por inundación. Los mapas resultantes de la modelación hidráulica 2D se utilizan directamente para la delimitación de estas zonas en los instrumentos de planificación territorial.',
  },
  {
    norma: 'Guía metodológica MVCT — estudios básicos de riesgo',
    desc: 'El Ministerio de Vivienda, Ciudad y Territorio publicó guías metodológicas para la elaboración de estudios básicos de amenaza por inundación y avenidas torrenciales. BIC aplica esta metodología oficial para garantizar que los estudios sean aceptados por las curadurías urbanas, alcaldías y corporaciones autónomas en todo el país.',
  },
  {
    norma: 'Normas INVIAS — obras de arte en vías',
    desc: 'El Manual de Diseño Geométrico y los Manuales de Drenaje de INVIAS establecen los criterios para el diseño hidráulico de alcantarillas, boxcoulverts y puentes en proyectos viales. La modelación HEC-RAS 1D es la herramienta estándar para verificar la capacidad hidráulica de estas estructuras y justificar los caudales de diseño.',
  },
]

const SOFTWARE = [
  { nombre: 'HEC-RAS 6.x', uso: 'Herramienta principal para modelación 1D y 2D. Desarrollado por el USACE (US Army Corps of Engineers). Estándar en Colombia para trámites ante CAR y MVCT.' },
  { nombre: 'HEC-HMS', uso: 'Modelación lluvia-escorrentía para obtener los hidrogramas de diseño que se introducen como condiciones de borde en HEC-RAS. Permite simular cuencas complejas con múltiples subcuencas y estructuras de control.' },
  { nombre: 'ArcGIS / QGIS + HEC-GeoRAS', uso: 'Procesamiento de modelos de elevación digital (DEM o LiDAR), extracción de geometría de secciones transversales, mallas 2D y generación de mapas de inundación georreferenciados.' },
  { nombre: 'Global Mapper / AutoCAD Civil 3D', uso: 'Procesamiento de nubes de puntos LiDAR, generación de MDT de alta resolución y diseño de secciones transversales para zonas urbanas con infraestructura compleja.' },
]

const PROYECTOS = [
  { tipo: 'Estudios de amenaza para POT y planes parciales', desc: 'Modelación hidráulica 2D para zonificar amenaza por inundación en zonas de expansión urbana. Requerida por el Decreto 1807/2014 para aprobación de planes parciales ante curadurías y alcaldías.' },
  { tipo: 'Diseño de obras de protección fluvial', desc: 'Modelación de alternativas de encauzamiento, jarillones, espigones y revestimientos de cauce para evaluar su efecto sobre la mancha de inundación y la dinámica del flujo en el cauce.' },
  { tipo: 'Alcantarillas y puentes — INVIAS', desc: 'Análisis hidráulico de estructuras de cruce vial: cálculo del caudal de diseño, verificación de la capacidad de descarga, socavación general y local, y diseño del colchón de protección.' },
  { tipo: 'Ronda hídrica y retiros de construcción', desc: 'Delimitación de la ronda hídrica de ríos y quebradas usando modelación hidráulica y criterios de las corporaciones autónomas. Determina el retiro mínimo de construcción exigido por la CAR.' },
  { tipo: 'Evaluación de inundación para pólizas de seguro', desc: 'Modelación hidráulica para determinar la probabilidad de inundación en predios de interés para aseguradoras o compradores de inmuebles en zonas de planicie aluvial.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Recopilación de información', desc: 'Levantamiento o procesamiento de LiDAR/DEM, secciones transversales de campo, datos de precipitación del IDEAM, aforos de caudal y antecedentes históricos de inundación.' },
  { paso: '02', titulo: 'Modelación lluvia-escorrentía (HEC-HMS)', desc: 'Delimitación y caracterización de subcuencas, obtención de hietogramas de diseño con curvas IDF regionales y cálculo de hidrogramas de creciente para múltiples períodos de retorno.' },
  { paso: '03', titulo: 'Modelación hidráulica (HEC-RAS 1D/2D)', desc: 'Construcción del modelo hidráulico, calibración con eventos históricos documentados, simulación de escenarios de diseño y generación de mapas de profundidad y velocidad.' },
  { paso: '04', titulo: 'Informe técnico y cartografía', desc: 'Elaboración del informe con metodología, resultados y mapas de amenaza por inundación georreferenciados, listos para incorporar al POT, plan parcial o expediente de licencia ambiental.' },
]

const FAQ = [
  {
    q: '¿Qué es la modelación hidráulica 2D y cuándo es obligatoria en Colombia?',
    a: 'La modelación hidráulica 2D simula cómo se extiende el agua sobre la llanura de inundación en caso de creciente, generando mapas detallados de profundidad, velocidad y área afectada. En Colombia, el Decreto 1807 de 2014 la exige para: (1) estudios de amenaza hídrica en zonas de expansión urbana del POT; (2) planes parciales que requieran estudio de detalle por inundación; (3) proyectos que soliciten licencia ambiental ante ANLA en zonas con cuerpos de agua. Muchas corporaciones autónomas también la exigen para permisos de ocupación de cauce.',
  },
  {
    q: '¿Cuánto cuesta un estudio de modelación hidráulica en Colombia?',
    a: 'El costo depende del tipo de modelación (1D o 2D), la longitud del tramo analizado, la disponibilidad de cartografía LiDAR, el número de períodos de retorno requeridos y el nivel de detalle del informe. Orientativamente en Colombia para 2026: modelación 1D de un tramo urbano simple (1–3 km): $8–20 millones COP; modelación 2D para plan parcial o POT (cuenca media): $20–60 millones COP; estudio integral con levantamiento topobatimétrico + HEC-HMS + HEC-RAS 2D: $40–120 millones COP. BIC elabora propuesta detallada con el alcance específico de cada proyecto.',
  },
  {
    q: '¿Qué diferencia hay entre HEC-RAS 1D y 2D?',
    a: 'HEC-RAS 1D calcula el perfil hidráulico a lo largo del eje del cauce: tirante, velocidad y energía en secciones transversales. Es eficiente para cauces bien definidos, obras de arte y cálculos de socavación. HEC-RAS 2D simula el flujo en toda la superficie: genera mapas que muestran exactamente dónde llega el agua y con qué profundidad y velocidad. Para estudios de amenaza por inundación requeridos por el Decreto 1807, el Ministerio de Vivienda recomienda la modelación 2D o acoplada 1D-2D por su mayor precisión espacial.',
  },
  {
    q: '¿Se puede usar la modelación hidráulica para delimitar la ronda hídrica?',
    a: 'Sí. La ronda hídrica en Colombia se delimita según criterios hidrológicos, hidráulicos y de estabilidad de laderas. La modelación hidráulica determina la mancha de inundación para creciente de 100 años, que es uno de los insumos principales para trazar el límite de la ronda hídrica ante la corporación autónoma regional. Otras corporaciones complementan este criterio con un retiro mínimo fijo (10–30 metros desde la orilla del cauce) y el análisis de inestabilidad de las márgenes.',
  },
  {
    q: '¿BIC puede elaborar estudios de modelación hidráulica para proyectos fuera del Eje Cafetero?',
    a: 'Sí. BIC elabora estudios de modelación hidráulica para proyectos en cualquier región de Colombia. Trabajamos con información del IDEAM (precipitación, caudales), modelos de elevación digital nacionales (DEM 12.5m del IGAC, LiDAR donde esté disponible) y visitas de campo puntuales para verificación de geometría y calibración. Hemos desarrollado proyectos en Caldas, Risaralda, Quindío, Cundinamarca, Boyacá y otras regiones del país.',
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
      description: 'Consultoría en modelación hidráulica e hidrológica en Colombia. HEC-RAS 1D y 2D, estudios de inundabilidad y diseño de obras hidráulicas.',
    },
    {
      '@type': 'Service',
      name: 'Modelación Hidráulica en Colombia — HEC-RAS 1D y 2D',
      provider: { '@type': 'LocalBusiness', name: 'BIC — Bernal Ingeniería Consultores' },
      areaServed: 'Colombia',
      description: 'Modelación hidráulica 1D y 2D con HEC-RAS para estudios de inundabilidad, planes parciales, POT y diseño de obras en toda Colombia.',
      serviceType: 'Ingeniería Hidráulica',
    },
  ],
}

export default function ModelacionHidraulicaColombia() {
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
          <SectionLabel light>Servicio especializado · Nacional · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Modelación Hidráulica en Colombia:<br />
            <span style={{ color: '#17A2B8' }}>HEC-RAS 1D y 2D — Estudios de Inundabilidad</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza modelación hidráulica 1D y 2D con HEC-RAS
            en toda Colombia. Estudios de inundabilidad para POT y planes parciales (Decreto 1807),
            diseño de obras de protección fluvial, análisis de socavación en puentes y delimitación
            de rondas hídricas ante corporaciones autónomas.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización
            </Btn>
            <Btn variant="outline" href="/servicios/modelacion-hec-ras" dark>
              Ver servicio HEC-RAS
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Herramientas:</span>
          {['HEC-RAS 1D/2D', 'HEC-HMS', 'Decreto 1807/2014', 'LiDAR', 'QGIS', 'ArcGIS', 'HEC-GeoRAS'].map(t => (
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
          }}>¿Qué incluye la modelación hidráulica?</h2>
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
          }}>Normativa: Decreto 1807, MVCT, INVIAS y CAR</h2>
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

      {/* ── SOFTWARE ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Herramientas de modelación</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Software: HEC-RAS, HEC-HMS, ArcGIS y Civil 3D</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {SOFTWARE.map(s => (
              <div key={s.nombre} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 15, marginBottom: 10,
                }}>{s.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{s.uso}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TIPOS DE PROYECTOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Aplicaciones</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de estudios de modelación hidráulica</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PROYECTOS.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#fff',
                borderLeft: '3px solid #17A2B8',
                border: '1px solid #E2E8F0', borderRadius: '0 4px 4px 0',
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

      {/* ── PROCESO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso de trabajo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>4 fases del estudio de modelación hidráulica</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {PROCESO.map(p => (
              <div key={p.paso} style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0',
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
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Modelación hidráulica en Colombia</h2>
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
            ¿Necesita modelación hidráulica en Colombia?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el municipio, el tipo de cauce o proyecto, si tiene LiDAR disponible
            y qué entidad solicita el estudio. Le enviamos propuesta técnica y cotización
            en menos de 24 horas hábiles.
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
