import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Estudio Hidrológico en Manizales')

const seoConfig = {
  title: 'Estudio Hidrológico en Manizales | BIC Ingeniería',
  description: 'Estudios hidrológicos en Manizales: caudales de diseño, curvas IDF, períodos de retorno. Cumplimiento RAS 2000 y EIA. +57 302 477 8910',
  keywords: [
    'estudio hidrológico Manizales',
    'curvas IDF Manizales IDEAM',
    'caudales de diseño Caldas',
    'método racional hidrología',
    'HEC-HMS Manizales',
    'regionalización hidrológica Colombia',
    'períodos de retorno hidrología',
    'RAS 2000 hidrología',
    'análisis de frecuencias caudales',
    'cuenca Río Chinchiná hidrología',
    'POMCA hidrología Corpocaldas',
    'EIA hidrología Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/estudio-hidrologico-manizales',
}

const CONTENIDO = [
  {
    icon: '🌧️',
    titulo: 'Recopilación y análisis de información climatológica',
    desc: 'Revisión de registros de precipitación de las estaciones del IDEAM en la cuenca y sus alrededores. Análisis de consistencia y homogeneidad de las series históricas. Selección de estaciones representativas y relleno de datos faltantes mediante correlación estadística.',
  },
  {
    icon: '📐',
    titulo: 'Delimitación y caracterización morfométrica de la cuenca',
    desc: 'Delimitación automática de la cuenca aportante usando QGIS y el Modelo Digital de Elevación del IGAC. Cálculo de parámetros morfométricos: área, perímetro, longitud del cauce principal, pendiente media, tiempo de concentración (métodos de Kirpich, Témez y SCS). Estos parámetros son insumo directo del análisis hidrológico.',
  },
  {
    icon: '📊',
    titulo: 'Construcción de curvas IDF para Manizales',
    desc: 'Las curvas Intensidad-Duración-Frecuencia (IDF) relacionan la intensidad de lluvia con su duración y período de retorno. BIC construye las curvas IDF específicas para Manizales usando registros pluviográficos del IDEAM y ajuste de distribuciones de probabilidad (Gumbel, Pearson III, Log-Pearson III). Las curvas IDF son la base del método racional y el input principal del modelo HEC-HMS.',
  },
  {
    icon: '🔢',
    titulo: 'Análisis de frecuencias y períodos de retorno',
    desc: 'Ajuste estadístico de series de caudales máximos anuales a distribuciones de probabilidad: Gumbel, Log-Pearson III, Log-Normal. Pruebas de bondad de ajuste (Kolmogorov-Smirnov, Chi-cuadrado). Estimación de caudales de diseño para T = 2, 5, 10, 25, 50 y 100 años, con intervalos de confianza al 95%.',
  },
  {
    icon: '💧',
    titulo: 'Estimación de caudales — método racional y HEC-HMS',
    desc: 'Para cuencas pequeñas (< 250 ha) se aplica el método racional modificado con coeficientes de escorrentía calibrados para suelos volcánicos del Eje Cafetero. Para cuencas mayores se implementa HEC-HMS con pérdidas por el método de curva número SCS, transformación por hidrograma unitario sintético y tránsito hidrológico por Muskingum-Cunge.',
  },
  {
    icon: '🗺️',
    titulo: 'Regionalización hidrológica',
    desc: 'Cuando no se dispone de datos suficientes en la cuenca de interés, BIC aplica técnicas de regionalización usando las ecuaciones regionales del IDEAM y estudios de cuencas hidrológicamente homogéneas en el Eje Cafetero. Este enfoque es especialmente útil para microcuencas sin estaciones de aforo en Caldas y Risaralda.',
  },
]

const CUANDOSEREQUIERE = [
  { caso: 'Diseño de alcantarillas y cunetas viales', desc: 'RAS 2000 Título D exige estudio hidrológico para dimensionar las obras de drenaje de vías. El caudal de diseño determina el diámetro de la alcantarilla o las dimensiones de la cuneta.' },
  { caso: 'Diseño de redes de alcantarillado pluvial', desc: 'La resolución 0330/2017 y el RAS 2000 exigen estudio hidrológico para proyectar las redes de drenaje pluvial de urbanizaciones y centros poblados en Colombia.' },
  { caso: 'Estudios de inundabilidad (Decreto 1807/2014)', desc: 'El análisis hidrológico es el primer paso de todo estudio de inundabilidad: sin los caudales de diseño no hay modelo hidráulico. BIC integra hidrología e hidráulica en un servicio completo.' },
  { caso: 'Licencias ambientales y EIA', desc: 'Los Estudios de Impacto Ambiental para proyectos de infraestructura deben incluir un capítulo hidrológico con caracterización del régimen de caudales y evaluación de alteraciones al ciclo hidrológico.' },
  { caso: 'Proyectos de agua potable y saneamiento', desc: 'El dimensionamiento de captaciones, PTAP y redes de acueducto requiere conocer los caudales disponibles en la fuente y su variabilidad estacional para garantizar la seguridad hídrica del sistema.' },
  { caso: 'Actualización de POMCA y POT', desc: 'Los planes de ordenamiento de cuencas y los POT municipales requieren caracterización hidrológica actualizada del territorio como insumo para la zonificación de amenazas y el ordenamiento del uso del suelo.' },
]

const METODOS = [
  { nombre: 'Método Racional', desc: 'Para cuencas pequeñas y urbanas. Relaciona la intensidad de lluvia de diseño con el área y el coeficiente de escorrentía de la cuenca para estimar el caudal pico.' },
  { nombre: 'Curva Número SCS', desc: 'Método del Servicio de Conservación de Suelos de EE. UU. para estimar la lámina de escorrentía en función de la precipitación, el tipo de suelo y el uso del suelo.' },
  { nombre: 'HEC-HMS', desc: 'Modelo distribuido que simula el ciclo hidrológico (pérdidas, transformación, tránsito) para cuencas complejas con múltiples subcuencas y embalses.' },
  { nombre: 'Regionalización IDEAM', desc: 'Transferencia de información hidrológica de cuencas con datos a cuencas sin aforo usando relaciones estadísticas entre parámetros morfométricos y caudales.' },
]

const ENTREGAS = [
  { icon: '📄', titulo: 'Informe hidrológico firmado COPNIA', desc: 'Documento técnico completo con metodología, datos de entrada, análisis estadístico, caudales de diseño para todos los períodos de retorno y conclusiones. Aceptado por Corpocaldas, curadurías y Ministerio de Ambiente.' },
  { icon: '📊', titulo: 'Curvas IDF para el sitio de proyecto', desc: 'Tablas y gráficas de curvas IDF construidas para la cuenca de interés con registros del IDEAM. Ecuación de ajuste disponible para uso en hojas de cálculo de diseño.' },
  { icon: '💾', titulo: 'Archivos HEC-HMS del modelo', desc: 'Entrega del modelo hidrológico completo con subcuencas, parámetros calibrados e hidrogramas exportados. Permite verificación independiente y uso en futuras actualizaciones.' },
  { icon: '🗺️', titulo: 'Cartografía de la cuenca en QGIS/SHP', desc: 'Shapefile con el límite de la cuenca, red de drenaje, isoyetas e isocronas. En coordenadas MAGNA-SIRGAS, lista para integrar con la modelación hidráulica.' },
]

const FAQ = [
  {
    q: '¿Qué es una curva IDF y por qué es importante para Manizales?',
    a: 'Las curvas IDF (Intensidad-Duración-Frecuencia) describen la intensidad máxima de lluvia esperada para una duración determinada y un período de retorno dado. Son el insumo fundamental para el diseño de cualquier obra de drenaje. Para Manizales, donde la precipitación media supera los 2.000 mm/año y los eventos convectivos son frecuentes, las curvas IDF deben construirse con datos locales del IDEAM para reflejar el comportamiento real de las lluvias en el Eje Cafetero.',
  },
  {
    q: '¿Qué métodos hidrológicos reconoce el RAS 2000 en Colombia?',
    a: 'El Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS 2000, actualizado con la Resolución 0330/2017) reconoce el método racional para cuencas pequeñas, el método de la curva número SCS para estimación de escorrentía, y modelos distribuidos como HEC-HMS para cuencas complejas. También acepta la regionalización hidrológica cuando no existen datos de aforo en la cuenca de interés.',
  },
  {
    q: '¿Puede BIC hacer el estudio hidrológico si no hay estación pluviométrica cerca?',
    a: 'Sí. Cuando no existe una estación del IDEAM suficientemente cercana al sitio de proyecto, BIC aplica técnicas de regionalización usando las isolíneas de precipitación del IDEAM, datos de estaciones vecinas y correlaciones estadísticas con parámetros morfométricos de la cuenca. Este procedimiento está documentado en los lineamientos del IDEAM para hidrología en cuencas sin datos.',
  },
  {
    q: '¿Cuánto tiempo tarda un estudio hidrológico?',
    a: 'Para un proyecto puntual en Manizales con datos disponibles, el estudio hidrológico básico (caracterización de la cuenca, curvas IDF y caudales de diseño para los períodos de retorno requeridos) toma entre 1 y 3 semanas. Para estudios más completos que incluyan calibración de modelo HEC-HMS con datos de aforo y análisis de frecuencias detallado, el plazo puede extenderse a 4–6 semanas.',
  },
  {
    q: '¿El estudio hidrológico es diferente del estudio hidráulico?',
    a: 'Sí. El estudio hidrológico determina los caudales (cuánta agua llega a la sección de interés) mientras que el estudio hidráulico analiza cómo se comporta ese caudal dentro del cauce (niveles, velocidades, áreas inundadas). Para un estudio completo de inundabilidad se necesitan ambos: BIC los integra en un solo servicio, entregando primero los hidrogramas hidrológicos y luego los resultados de la modelación HEC-RAS.',
  },
  {
    q: '¿Qué período de retorno debo usar para mi proyecto?',
    a: 'El período de retorno depende del tipo de obra y el nivel de riesgo aceptable. Para alcantarillas de vías secundarias: T = 10–25 años. Para colectores pluviales urbanos: T = 25–50 años. Para obras de protección de márgenes: T = 100 años. Para infraestructura crítica (presas, diques): T = 100–500 años. El RAS 2000 y el Manual de Drenaje del INVIAS establecen los períodos de retorno mínimos según el tipo de obra. BIC asesora en la selección del período de retorno apropiado para cada proyecto.',
  },
]

export default function EstudioHidrologicoManizales() {
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
            Estudio Hidrológico en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Caudales, Curvas IDF y Análisis de Frecuencias</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios hidrológicos en Manizales y Caldas
            para el diseño de obras de drenaje, estudios de inundabilidad, licencias ambientales
            y proyectos de agua potable. Construimos curvas IDF con datos del IDEAM, estimamos
            caudales de diseño para todos los períodos de retorno y aplicamos métodos racional,
            HEC-HMS y regionalización según el RAS 2000 y los lineamientos de Corpocaldas.
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
          {['RAS 2000', 'IDEAM', 'HEC-HMS', 'Método Racional', 'Curvas IDF', 'Corpocaldas'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── QUÉ INCLUYE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance técnico</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye el estudio hidrológico de BIC?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {CONTENIDO.map((item) => (
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

      {/* ── MÉTODOS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Métodos: racional, HEC-HMS y regionalización</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {METODOS.map((m) => (
              <div key={m.nombre} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{m.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CUÁNDO SE REQUIERE ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Aplicaciones</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Cuándo se requiere el estudio hidrológico?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {CUANDOSEREQUIERE.map((c) => (
              <div key={c.caso} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 24,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 14, marginBottom: 8,
                }}>{c.caso}</h3>
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
          }}>¿Qué entrega BIC al finalizar el estudio?</h2>
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
          }}>FAQ — Estudio hidrológico en Manizales</h2>
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
            ¿Necesita estudio hidrológico en Manizales o Caldas?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos la cuenca de interés, el tipo de obra y el trámite que necesita adelantar.
            Le enviamos propuesta técnica y económica en menos de 24 horas.
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
