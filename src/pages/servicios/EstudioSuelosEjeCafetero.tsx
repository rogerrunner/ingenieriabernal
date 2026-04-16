import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Estudio de Suelos en el Eje Cafetero')

const seoConfig = {
  title: 'Estudio de Suelos Eje Cafetero | BIC Ingeniería',
  description: 'Estudios de suelos en el Eje Cafetero: Manizales, Pereira y Armenia. Suelos volcánicos y cenizas del Quindío. NSR-10. +57 302 477 8910',
  keywords: [
    'estudio de suelos Eje Cafetero',
    'estudio geotécnico Manizales Pereira Armenia',
    'cenizas volcánicas Colombia NSR-10',
    'suelos colapsibles Quindío',
    'SPT Eje Cafetero',
    'capacidad portante Caldas Risaralda',
    'NSR-10 Título H Eje Cafetero',
    'geotecnia suelos volcánicos Colombia',
    'estudio de suelos cimentación',
    'laboratorio geotécnico Manizales',
  ],
  canonical: 'https://ingenieriabernal.co/estudio-de-suelos-eje-cafetero',
}

const PROCESO = [
  {
    icon: '🔍',
    titulo: 'Reconocimiento de campo y planificación',
    desc: 'Visita al predio para evaluar la topografía, identificar signos de inestabilidad (grietas, subsidencias, taludes activos) y planificar la ubicación y número de sondeos. En el Eje Cafetero es fundamental revisar si el predio está sobre cenizas volcánicas del Cuaternario —características de Manizales, Pereira y Armenia— o sobre suelos residuales de meteorización más antigua.',
  },
  {
    icon: '⚒️',
    titulo: 'Sondeos SPT y apiques de reconocimiento',
    desc: 'Ejecución de sondeos de penetración estándar (SPT) según ASTM D1586 hasta la profundidad requerida por el tipo de edificación. Se realizan también apiques a cielo abierto para caracterizar los estratos superficiales, tomar muestras inalteradas para ensayos de laboratorio y medir la profundidad del nivel freático cuando sea relevante para la cimentación.',
  },
  {
    icon: '🧪',
    titulo: 'Ensayos de laboratorio geotécnico',
    desc: 'Clasificación de suelos (granulometría, límites de Atterberg, USCS), ensayos de resistencia al corte (corte directo, triaxial), compresión inconfinada y, cuando se detectan materiales potencialmente colapsibles o expansivos —frecuentes en las cenizas volcánicas del Eje Cafetero—, ensayos de colapso con humedecimiento por carga (ASTM D5333) y de expansión libre.',
  },
  {
    icon: '📊',
    titulo: 'Análisis de capacidad portante y asentamientos',
    desc: 'Cálculo de la capacidad de carga última y admisible para el tipo de cimentación más adecuado (superficial, semiprofunda o profunda). Estimación de asentamientos inmediatos, por consolidación y diferencial. En suelos volcánicos con alta compresibilidad o con riesgo de colapso, el análisis de asentamientos es crítico para el diseño final de la cimentación.',
  },
  {
    icon: '📐',
    titulo: 'Diseño de la cimentación recomendada',
    desc: 'Propuesta del sistema de cimentación óptimo: zapatas aisladas, vigas de amarre, losa de cimentación o pilotes. En terrenos de ladera —comunes en Manizales y partes de Pereira— se evalúa además la estabilidad global del talud, la necesidad de obras de contención y la influencia del sismo de diseño según la microzonificación sísmica local.',
  },
  {
    icon: '📋',
    titulo: 'Informe geotécnico final (NSR-10 Capítulo H.3)',
    desc: 'Documento técnico completo con descripción del subsuelo, resultados de ensayos de campo y laboratorio, análisis de cimentación, recomendaciones constructivas y especificaciones técnicas. Firmado por ingeniero civil especializado con matrícula COPNIA vigente. Apto para presentar ante curadurías de Manizales, Pereira o Armenia y ante CARDER o Corpocaldas.',
  },
]

const CIUDADES = [
  {
    ciudad: 'Manizales — Caldas',
    desc: 'Suelos derivados de cenizas volcánicas del Nevado del Ruiz sobre laderas de alta pendiente. Comportamiento plástico, alta compresibilidad y susceptibilidad a flujos de lodo en zona de influencia volcánica. La microzonificación sísmica de Manizales (zona de amenaza alta) impone exigencias especiales en el diseño de cimentaciones.',
  },
  {
    ciudad: 'Pereira — Risaralda',
    desc: 'Mezcla de suelos residuales, coluviones y depósitos de ceniza volcánica. Las zonas de ladera presentan riesgo de inestabilidad especialmente en sectores con cortes viales previos. En el piedemonte y el corredor del Otún predominan los depósitos aluviales con nivel freático somero.',
  },
  {
    ciudad: 'Armenia — Quindío',
    desc: 'Ciudad reconstruida tras el terremoto de 1999. Los suelos volcánicos del Quindío son especialmente susceptibles al colapso por humedecimiento bajo carga — fenómeno documentado durante el sismo de 1999. La NSR-10 exige estudios detallados de colapsibilidad en toda la zona del Eje Cafetero con suelos volcánicos.',
  },
  {
    ciudad: 'Dosquebradas y La Virginia',
    desc: 'Área metropolitana de Pereira con desarrollo industrial y logístico activo. Suelos de terraza aluvial sobre el Río Otún y el Río Cauca con buena capacidad portante en general, pero con variabilidad lateral significativa que exige un número adecuado de sondeos por proyecto.',
  },
  {
    ciudad: 'Chinchiná, Palestina y Villamaría',
    desc: 'Corredor cafetero entre Manizales y el Río Chinchiná. Suelos volcánicos de alta plasticidad y llanuras aluviales del Chinchiná. Proyectos agro-industriales, bodegas y urbanizaciones en expansión requieren estudios geotécnicos adaptados a las condiciones volcánicas locales.',
  },
]

const FAQ = [
  {
    q: '¿Qué hace especiales a los suelos del Eje Cafetero geotécnicamente?',
    a: 'Los suelos del Eje Cafetero son principalmente depósitos de ceniza volcánica del Cuaternario, derivados del Complejo Volcánico del Ruiz-Tolima. Tienen una granulometría predominantemente limosa, índices de plasticidad moderados a altos, alta compresibilidad y, en algunos sectores, comportamiento colapsible cuando se humedecen bajo carga. El terremoto de Armenia de 1999 evidenció que estos suelos tienen una respuesta sísmica particular que amplifica las aceleraciones en ciertas frecuencias. Por todo esto, la NSR-10 exige caracterización geotécnica detallada antes de diseñar cualquier cimentación en la región.',
  },
  {
    q: '¿Qué es un suelo colapsible y cómo se detecta?',
    a: 'Un suelo colapsible es aquel que, estando en estado seco o parcialmente seco y bajo una carga, experimenta una reducción brusca de volumen al humedecerse. En el Eje Cafetero, las cenizas volcánicas con estructura metaestable son susceptibles a este fenómeno. Se detecta mediante el ensayo de colapso ASTM D5333, que mide el asentamiento adicional por humedecimiento bajo carga controlada. Si el potencial de colapso supera el 1%, la cimentación debe diseñarse con medidas especiales.',
  },
  {
    q: '¿Cuántos sondeos SPT necesita un proyecto de vivienda unifamiliar?',
    a: 'La NSR-10 Capítulo H.3 establece el número mínimo de sondeos según el área de la construcción y el tipo de edificación. Para una vivienda unifamiliar de 1 o 2 pisos en el Eje Cafetero, generalmente se requieren entre 2 y 3 sondeos hasta 6-10 metros de profundidad, dependiendo de la uniformidad del subsuelo y la existencia de datos previos en el sector. BIC define el programa de exploración al inicio del contrato.',
  },
  {
    q: '¿El estudio de suelos es diferente en ladera que en terreno plano?',
    a: 'Sí, significativamente. En terrenos de ladera —frecuentes en Manizales, partes de Pereira y muchos municipios del Eje Cafetero— el estudio debe incluir además el análisis de estabilidad del talud bajo condición estática y sísmica, la evaluación del riesgo de movimientos en masa y las recomendaciones para taludes de corte o relleno en la adecuación del predio. Esto amplía el alcance del estudio respecto a un predio en zona plana.',
  },
  {
    q: '¿El informe sirve para tramitar licencia en los tres departamentos del Eje?',
    a: 'Sí. El informe geotécnico elaborado por BIC cumple los requisitos de la NSR-10 y es aceptado por las curadurías urbanas de Manizales, Pereira, Armenia, Dosquebradas y cualquier municipio del Eje Cafetero. También sirve como insumo técnico para trámites ante Corpocaldas, CARDER y la CRQ cuando el proyecto requiere permiso ambiental.',
  },
]

export default function EstudioSuelosEjeCafetero() {
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
          <SectionLabel light>Servicio especializado · Eje Cafetero</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Estudio de Suelos en el Eje Cafetero:<br />
            <span style={{ color: '#17A2B8' }}>Geotecnia en Suelos Volcánicos de Caldas, Risaralda y Quindío</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios de suelos y geotecnia en todo el Eje
            Cafetero — Manizales, Pereira, Armenia y municipios de Caldas, Risaralda y Quindío. Con
            experiencia específica en los suelos volcánicos y las cenizas del Cuaternario de la región,
            elaboramos informes geotécnicos conforme a la NSR-10 Capítulo H.3, aptos para tramitar
            licencias de construcción y proyectos de infraestructura.
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Especialidad:</span>
          {['NSR-10 Título H', 'Cenizas volcánicas', 'SPT', 'Suelos colapsibles', 'Caldas · Risaralda · Quindío'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── PARTICULARIDADES ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Geotecnia regional</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Particularidades geotécnicas: cenizas volcánicas y suelos colapsibles</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Los suelos del Eje Cafetero son en gran parte depósitos de cenizas volcánicas del
                Complejo Volcánico Ruiz-Tolima, con edades que van desde el Pleistoceno hasta el
                Holoceno. Estos materiales tienen propiedades geotécnicas muy particulares que los
                diferencian de los suelos sedimentarios de otras regiones de Colombia: alta plasticidad,
                estructura metaestable y potencial de colapso por humedecimiento.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8 }}>
                El sismo de Armenia del 25 de enero de 1999 (Mw 6.2) demostró de forma contundente
                la importancia de caracterizar correctamente estos suelos: edificaciones con
                cimentaciones superficiales sobre cenizas volcánicas sin estudio geotécnico previo
                sufrieron colapsos por asentamientos diferenciales inducidos sísmicamente. Desde
                entonces, la NSR-10 exige estudios de suelos en todo el territorio nacional, con
                especial énfasis en las zonas de amenaza sísmica alta como el Eje Cafetero.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 14, marginBottom: 12 }}>
                Fenómenos geotécnicos propios del Eje Cafetero:
              </h3>
              <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.9, paddingLeft: 20 }}>
                <li>Colapsibilidad por humedecimiento bajo carga (cenizas volcánicas)</li>
                <li>Alta compresibilidad y asentamientos por consolidación</li>
                <li>Inestabilidad de taludes naturales y artificiales</li>
                <li>Amplificación sísmica en laderas y rellenos no compactados</li>
                <li>Licuación potencial en depósitos aluviales sueltos</li>
                <li>Expansividad de arcillas en sectores con depósitos más antiguos</li>
                <li>Nivel freático somero en llanuras aluviales del Otún, Chinchiná y Quindío</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso técnico</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Proceso completo del estudio de suelos en el Eje Cafetero</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {PROCESO.map((item) => (
              <div key={item.titulo} style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4,
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

      {/* ── DIFERENCIAS POR CIUDAD ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Cobertura regional</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Diferencias geotécnicas por ciudad del Eje Cafetero</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {CIUDADES.map((c) => (
              <div key={c.ciudad} style={{
                padding: 24, background: '#fff',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{c.ciudad}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{c.desc}</p>
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
          }}>FAQ — Estudio de suelos en el Eje Cafetero</h2>
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
            ¿Necesita un estudio de suelos en el Eje Cafetero?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos la ubicación del predio, el tipo de edificación proyectada y el número de
            pisos. Le enviamos propuesta técnica con programa de exploración y presupuesto en menos
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
