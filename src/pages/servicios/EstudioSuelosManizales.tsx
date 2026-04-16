import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Estudio de Suelos en Manizales')

const seoConfig = {
  title: 'Estudio de Suelos en Manizales | BIC Ingeniería',
  description: 'Realizamos estudios de suelos en Manizales según NSR-10. Informe geotécnico completo para licencia de construcción. Solicite cotización: +57 302 477 8910',
  keywords: [
    'estudio de suelos Manizales',
    'estudio geotécnico Manizales',
    'NSR-10 Manizales',
    'licencia de construcción Manizales estudio suelos',
    'SPT Manizales',
    'microzonificación sísmica Manizales',
    'capacidad portante suelo Manizales',
    'informe geotécnico curaduría Manizales',
    'perforación exploratoria Manizales',
    'granulometría ensayo laboratorio Colombia',
    'cimentación edificio Manizales',
    'estabilidad taludes Caldas',
  ],
  canonical: 'https://ingenieriabernal.co/estudio-de-suelos-manizales',
}

const PROCESO = [
  {
    icon: '📍',
    titulo: 'Visita de reconocimiento y planificación de campo',
    desc: 'Inspección ocular del terreno para identificar características geomorfológicas, evidencias de inestabilidad, nivel freático superficial y accesibilidad para el equipo de perforación. Definición del número y profundidad de los sondeos según el área del proyecto y la tipología constructiva.',
  },
  {
    icon: '🔩',
    titulo: 'Perforaciones y ensayo SPT',
    desc: 'Ejecución de sondeos de penetración estándar (SPT) a las profundidades requeridas por la NSR-10 Título H. Para edificaciones de hasta 5 pisos se alcanzan profundidades de 6 a 12 m. El ensayo SPT mide la resistencia del suelo cada 1,5 m y permite correlacionar el número de golpes N con la capacidad portante y los parámetros de resistencia.',
  },
  {
    icon: '🧪',
    titulo: 'Ensayos de laboratorio geotécnico',
    desc: 'Análisis de muestras en laboratorio: clasificación USCS, granulometría por tamizado y sedimentación, límites de Atterberg (límite líquido y plástico), humedad natural, densidad aparente, compresión inconfinada y consolidación cuando se requiere. Los ensayos permiten caracterizar el suelo y seleccionar los parámetros de diseño apropiados.',
  },
  {
    icon: '📐',
    titulo: 'Análisis de capacidad portante y diseño de cimentaciones',
    desc: 'Cálculo de la presión admisible del suelo mediante las teorías de Terzaghi, Meyerhof o Vesic según las condiciones del terreno. Verificación de asentamientos totales y diferenciales. Recomendación del tipo de cimentación: zapatas corridas, aisladas, vigas de amarre o pilotes, con dimensiones y presiones de trabajo de diseño.',
  },
  {
    icon: '⛰️',
    titulo: 'Análisis de estabilidad de taludes (cuando aplica)',
    desc: 'En Manizales, con su topografía de laderas pronunciadas, es frecuente que los predios en desarrollo requieran análisis de estabilidad de cortes y terraplenes. BIC aplica métodos de equilibrio límite (Bishop simplificado, Morgenstern-Price) para determinar el factor de seguridad estático y bajo condición sísmica según la microzonificación de Manizales.',
  },
  {
    icon: '📋',
    titulo: 'Informe geotécnico para licencia de construcción',
    desc: 'Documento técnico completo con descripción del subsuelo, perfiles estratigráficos, resultados de ensayos SPT y de laboratorio, modelo geotécnico, parámetros de diseño, recomendaciones de cimentación y conclusiones. Firmado por ingeniero especialista con COPNIA vigente, listo para presentar ante la Curaduría 1 o Curaduría 2 de Manizales.',
  },
]

const ZONAS = [
  { zona: 'Centro de Manizales', desc: 'Suelos de origen volcánico y antrópico (rellenos). Alta variabilidad estratigráfica. Requiere SPT profundo para verificar la presencia de rellenos y residuos. Microzonificación sísmica obligatoria según el POT.' },
  { zona: 'Sector Cable y Palogrande', desc: 'Zona residencial de alto estrato con edificios en altura. Suelos limosos volcánicos (cenizas) con comportamiento colapsible en estado seco. El estudio debe evaluar el potencial de colapso por humedecimiento.' },
  { zona: 'La Enea y Maltería', desc: 'Sector de expansión industrial y comercial. Depósitos fluviales del Río Chinchiná en terrazas bajas. Requiere análisis de licuación bajo carga sísmica y verificación de nivel freático.' },
  { zona: 'Zona universitaria (Campus UNal)', desc: 'Colinas de cenizas volcánicas sobre depósitos piroclásticos. Alta susceptibilidad a movimientos en masa en épocas de lluvias. El estudio geotécnico debe integrar análisis de estabilidad de taludes.' },
  { zona: 'Villamaría y zona sur', desc: 'Municipio contiguo a Manizales con alto dinamismo constructivo. Suelos de origen volcánico con afloramientos rocosos. Los proyectos de vivienda en ladera requieren exploración profunda para detectar discontinuidades.' },
  { zona: 'Zonas de expansión norte', desc: 'Sector del Aeropuerto La Nubia y alrededores en proceso de cambio de uso. Suelos residuales sobre formaciones ígneas. BIC realiza estudios geotécnicos para planes parciales en toda la franja norte.' },
]

const ENTREGAS = [
  { icon: '📄', titulo: 'Informe geotécnico COPNIA', desc: 'Documento firmado por especialista habilitado. Incluye descripción del proyecto, metodología, exploración, ensayos, análisis y recomendaciones. Formato aceptado por las curadurías de Manizales.' },
  { icon: '📊', titulo: 'Registros de campo SPT', desc: 'Formatos originales de perforación con N-SPT cada 1,5 m, descripción táctil-visual del suelo, profundidad del nivel freático y observaciones de campo. Certificados por el técnico perforador.' },
  { icon: '🧾', titulo: 'Resultados de laboratorio', desc: 'Informes originales del laboratorio geotécnico aliado con resultados de cada ensayo: granulometría, Atterberg, humedad, compresión. Identificados por muestra y profundidad.' },
  { icon: '📐', titulo: 'Perfil estratigráfico del subsuelo', desc: 'Columnas de perforación con descripción de capas, profundidades, clasificación USCS y valores SPT. En formato DWG y PDF a escala.' },
  { icon: '🏗️', titulo: 'Recomendaciones de cimentación', desc: 'Tabla de presiones admisibles según tipo de cimentación, profundidad de desplante recomendada, módulo de reacción del suelo y coeficiente sísmico de diseño según microzonificación de Manizales.' },
]

const FAQ = [
  {
    q: '¿Es obligatorio el estudio de suelos para cualquier construcción en Manizales?',
    a: 'La NSR-10 (Norma Sismo Resistente de Colombia) exige estudio de suelos para toda edificación nueva independientemente de su tamaño. En Manizales, la Curaduría Urbana exige presentar el informe geotécnico firmado por especialista como requisito previo al otorgamiento de la licencia de construcción. La exigencia aplica tanto a vivienda unifamiliar como a proyectos de varios pisos.',
  },
  {
    q: '¿Cuántas perforaciones necesita mi proyecto?',
    a: 'El número mínimo de sondeos lo define la NSR-10 Título H según el área del terreno y la magnitud del proyecto. Para una vivienda unifamiliar en lote de hasta 200 m², generalmente se requieren 2 sondeos SPT. Para edificios multifamiliares de 4 o más pisos, se recomienda mínimo 3 sondeos más perforaciones adicionales si la variabilidad del suelo lo justifica. BIC define el programa de exploración tras la visita de reconocimiento.',
  },
  {
    q: '¿Qué es la microzonificación sísmica de Manizales y por qué importa?',
    a: 'Manizales tiene un estudio de microzonificación sísmica que divide el territorio municipal en zonas con diferente comportamiento dinámico del suelo frente a sismos. Este estudio, realizado con la Universidad Nacional, define el espectro sísmico de diseño específico para cada zona de la ciudad. El estudio de suelos de un predio en Manizales debe indicar en qué zona de microzonificación se ubica y usar los parámetros sísmicos correspondientes para el diseño de la cimentación.',
  },
  {
    q: '¿Cuánto cuesta un estudio de suelos en Manizales?',
    a: 'El costo depende del número de sondeos, la profundidad de exploración, los ensayos de laboratorio requeridos y la complejidad del análisis. Para una vivienda unifamiliar estándar, el rango típico en Manizales está entre $3.500.000 y $7.000.000 COP. Para edificios multifamiliares el costo aumenta según el programa de exploración. BIC envía cotización detallada en menos de 24 horas tras recibir los datos del proyecto.',
  },
  {
    q: '¿Cuánto tarda el estudio de suelos?',
    a: 'Desde la aprobación del proyecto hasta la entrega del informe, el plazo típico es de 2 a 4 semanas. Incluye: 1) coordinación con el laboratorio aliado para el trabajo de campo (3–5 días), 2) ensayos de laboratorio (5–10 días), y 3) análisis e informe (3–5 días). Para proyectos urgentes con obras ya en curso, BIC puede acelerar el proceso. Consulte disponibilidad.',
  },
  {
    q: '¿El informe de BIC es aceptado por todas las curadurías de Manizales?',
    a: 'Sí. Los informes geotécnicos de BIC son elaborados por profesional con matrícula COPNIA vigente y cumplen los requisitos técnicos exigidos por la NSR-10 Título H y los reglamentos de las Curadurías 1 y 2 de Manizales. El documento incluye firma profesional, número de matrícula y todos los anexos requeridos para el trámite de licencia de construcción.',
  },
]

export default function EstudioSuelosManizales() {
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
            Estudio de Suelos en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Informe Geotécnico para su Proyecto</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios de suelos en Manizales y Caldas
            para constructoras, propietarios y promotores de vivienda. Ejecutamos perforaciones SPT,
            ensayos de laboratorio y análisis de capacidad portante según la NSR-10 Título H.
            Nuestros informes geotécnicos están firmados por especialista con COPNIA vigente y son
            aceptados por las Curadurías 1 y 2 de Manizales para el trámite de licencias de
            construcción. Integramos la microzonificación sísmica de Manizales en cada análisis.
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
          {['NSR-10 Título H', 'SPT', 'USCS', 'Microzonificación Sísmica', 'Curadurías Manizales'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── QUÉ ES Y POR QUÉ ES OBLIGATORIO ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué es el estudio de suelos y por qué es obligatorio en Manizales?</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                El estudio de suelos o estudio geotécnico es la investigación técnica del subsuelo
                de un terreno que determina las propiedades mecánicas del suelo — resistencia,
                deformabilidad, permeabilidad — para diseñar la cimentación de una edificación de
                forma segura y económica.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8 }}>
                En Colombia, la NSR-10 (Norma Sismo Resistente) establece en su Título H que toda
                edificación nueva debe ser diseñada sobre la base de un estudio geotécnico que
                caracterice el suelo y defina los parámetros de cimentación. En Manizales, donde el
                suelo es predominantemente de origen volcánico (cenizas y pómez) y la topografía
                es de ladera, el comportamiento del subsuelo puede variar significativamente de
                predio a predio, por lo que el estudio es indispensable incluso para construcciones
                de pequeña escala.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 14, marginBottom: 12 }}>
                Características del suelo en Manizales:
              </h3>
              <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
                <li><strong>Cenizas volcánicas:</strong> Suelos limosos de alta plasticidad y baja capacidad portante cuando están saturados</li>
                <li><strong>Suelos colapsibles:</strong> Cenizas en estado seco que se contraen al humedecerse — requieren verificación especial</li>
                <li><strong>Variabilidad estratigráfica:</strong> La geología volcánica del Eje Cafetero produce capas irregulares de ceniza, pómez y suelo residual</li>
                <li><strong>Riesgo sísmico alto:</strong> Manizales está en zona de amenaza sísmica alta según NSR-10; la microzonificación define espectros locales</li>
                <li><strong>Laderas activas:</strong> Gran parte del municipio está en ladera con potencial de movimientos en masa que afecta el diseño de cimentaciones</li>
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
          }}>Nuestro proceso: perforaciones, SPT y granulometría</h2>
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
            {ENTREGAS.map(d => (
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

      {/* ── ZONAS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Cobertura local</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Zonas de Manizales donde trabajamos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {ZONAS.map((z) => (
              <div key={z.zona} style={{
                padding: 24, background: '#fff',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
                border: '1px solid #E2E8F0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{z.zona}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{z.desc}</p>
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
          }}>FAQ — Estudio de suelos en Manizales</h2>
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
            ¿Necesita estudio de suelos para su proyecto en Manizales?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos la dirección del predio, el uso del suelo y el tipo de edificación
            proyectada. Le enviamos propuesta técnica con número de sondeos y costo total
            en menos de 24 horas.
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
