import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Estudio de Suelos en Pereira')

const seoConfig = {
  title: 'Estudio de Suelos en Pereira | BIC Ingeniería',
  description: 'Realizamos estudios de suelos en Pereira según NSR-10. Informe geotécnico completo para licencia de construcción en Risaralda. +57 302 477 8910',
  keywords: [
    'estudio de suelos Pereira',
    'estudio geotécnico Pereira',
    'NSR-10 Pereira',
    'licencia de construcción Pereira estudio suelos',
    'SPT Pereira',
    'microzonificación sísmica Pereira',
    'capacidad portante suelo Pereira',
    'informe geotécnico curaduría Pereira',
    'perforación exploratoria Risaralda',
    'granulometría ensayo laboratorio Eje Cafetero',
    'cimentación edificio Pereira',
    'estabilidad taludes Risaralda',
    'CARDER estudio suelos',
    'suelos volcánicos Eje Cafetero',
  ],
  canonical: 'https://ingenieriabernal.co/estudio-de-suelos-pereira',
}

const PROCESO = [
  {
    icon: '📍',
    titulo: 'Visita de reconocimiento y planificación de campo',
    desc: 'Inspección ocular del terreno para identificar características geomorfológicas, evidencias de inestabilidad, nivel freático superficial y accesibilidad para el equipo de perforación. Definición del número y profundidad de los sondeos según el área del proyecto y la tipología constructiva. En Pereira se evalúa además la cercanía a quebradas y la presencia de rellenos antrópicos en sectores de ladera.',
  },
  {
    icon: '🔩',
    titulo: 'Perforaciones y ensayo SPT',
    desc: 'Ejecución de sondeos de penetración estándar (SPT) a las profundidades requeridas por la NSR-10 Título H. Para edificaciones de hasta 5 pisos se alcanzan profundidades de 6 a 12 m. El ensayo SPT mide la resistencia del suelo cada 1,5 m y permite correlacionar el número de golpes N con la capacidad portante y los parámetros de resistencia al cortante del suelo volcánico del Eje Cafetero.',
  },
  {
    icon: '🧪',
    titulo: 'Ensayos de laboratorio geotécnico',
    desc: 'Análisis de muestras en laboratorio: clasificación USCS, granulometría por tamizado y sedimentación, límites de Atterberg (límite líquido y plástico), humedad natural, densidad aparente, compresión inconfinada y consolidación cuando se requiere. Los ensayos permiten caracterizar las cenizas volcánicas del Eje Cafetero y seleccionar los parámetros de diseño apropiados para Pereira y Dosquebradas.',
  },
  {
    icon: '📐',
    titulo: 'Análisis de capacidad portante y diseño de cimentaciones',
    desc: 'Cálculo de la presión admisible del suelo mediante las teorías de Terzaghi, Meyerhof o Vesic según las condiciones del terreno. Verificación de asentamientos totales y diferenciales. Recomendación del tipo de cimentación: zapatas corridas, aisladas, vigas de amarre o pilotes, con dimensiones y presiones de trabajo de diseño acordes a la microzonificación sísmica de Pereira.',
  },
  {
    icon: '⛰️',
    titulo: 'Análisis de estabilidad de taludes (cuando aplica)',
    desc: 'En Pereira y el área metropolitana, gran parte de los predios en desarrollo se ubican en ladera con pendientes pronunciadas y drenajes naturales activos. BIC aplica métodos de equilibrio límite (Bishop simplificado, Morgenstern-Price) para determinar el factor de seguridad estático y bajo condición sísmica. Se evalúa también la interacción con el sistema hídrico del municipio y las restricciones de la CARDER.',
  },
  {
    icon: '📋',
    titulo: 'Informe geotécnico para licencia de construcción',
    desc: 'Documento técnico completo con descripción del subsuelo, perfiles estratigráficos, resultados de ensayos SPT y de laboratorio, modelo geotécnico, parámetros de diseño, recomendaciones de cimentación y conclusiones. Firmado por ingeniero especialista con COPNIA vigente, listo para presentar ante las curadurías de Pereira para el trámite de licencia de construcción en Risaralda.',
  },
]

const ZONAS = [
  { zona: 'Centro de Pereira y Cuba', desc: 'Sectores con alta densidad constructiva sobre suelos de origen volcánico y rellenos antrópicos. La variabilidad estratigráfica es elevada y requiere SPT en profundidades mayores para detectar bolsones de material débil. El POT de Pereira exige estudio de suelos para cualquier licencia en estas zonas.' },
  { zona: 'Pinares, Álamos y Belmonte', desc: 'Zona residencial de alto estrato con edificios en altura. Suelos limosos volcánicos (cenizas) de alta plasticidad. El estudio debe evaluar el potencial de colapso por humedecimiento y definir el espectro de diseño según la microzonificación sísmica vigente de Pereira.' },
  { zona: 'Dosquebradas y La Badea', desc: 'Municipio conurbado con Pereira, con amplia actividad industrial y comercial. Suelos en terrazas sobre depósitos cuaternarios del río Otún. Requiere análisis de asentamientos diferenciales en estructuras de bodega y verificación de nivel freático estacional.' },
  { zona: 'Cerritos y La Virginia', desc: 'Corredor vial de expansión hacia el Valle del Cauca. Suelos aluviales con depósitos de grava y arena de media a alta capacidad portante. Proyectos de bodegaje y logística requieren verificación de compactación y análisis de licuación sísmica.' },
  { zona: 'Sector Aeropuerto y Galicia', desc: 'Zona de expansión con múltiples proyectos residenciales y comerciales. Suelos de cenizas volcánicas sobre formaciones terciarias. Los proyectos de mayor envergadura requieren correlación de sondeos para detectar variaciones laterales del subsuelo.' },
  { zona: 'Comunas del sur (El Oso, Perla del Otún)', desc: 'Sectores de ladera con pendiente moderada a alta. Alta incidencia de procesos de remoción en masa. BIC integra el análisis de estabilidad de taludes con el diseño de cimentaciones y las restricciones ambientales de la CARDER para laderas en zona de protección.' },
]

const ENTREGAS = [
  { icon: '📄', titulo: 'Informe geotécnico COPNIA', desc: 'Documento firmado por especialista habilitado. Incluye descripción del proyecto, metodología, exploración, ensayos, análisis y recomendaciones. Formato aceptado por las curadurías de Pereira para el trámite de licencia de construcción en Risaralda.' },
  { icon: '📊', titulo: 'Registros de campo SPT', desc: 'Formatos originales de perforación con N-SPT cada 1,5 m, descripción táctil-visual del suelo, profundidad del nivel freático y observaciones de campo. Certificados por el técnico perforador y respaldados por BIC.' },
  { icon: '🧾', titulo: 'Resultados de laboratorio', desc: 'Informes originales del laboratorio geotécnico aliado con resultados de cada ensayo: granulometría, Atterberg, humedad, compresión inconfinada. Identificados por muestra y profundidad para trazabilidad completa.' },
  { icon: '📐', titulo: 'Perfil estratigráfico del subsuelo', desc: 'Columnas de perforación con descripción de capas, profundidades, clasificación USCS y valores SPT. En formato DWG y PDF a escala, compatible con el entregable requerido por las curadurías de Pereira.' },
  { icon: '🏗️', titulo: 'Recomendaciones de cimentación', desc: 'Tabla de presiones admisibles según tipo de cimentación, profundidad de desplante recomendada, módulo de reacción del suelo y coeficiente sísmico de diseño según la microzonificación sísmica de Pereira (Resolución CARDER).' },
]

const FAQ = [
  {
    q: '¿Es obligatorio el estudio de suelos para construir en Pereira?',
    a: 'Sí. La NSR-10 (Norma Sismo Resistente de Colombia) exige estudio de suelos para toda edificación nueva independientemente de su tamaño. En Pereira, las curadurías urbanas exigen presentar el informe geotécnico firmado por especialista como requisito previo al otorgamiento de la licencia de construcción. La exigencia aplica tanto a vivienda unifamiliar como a proyectos multifamiliares, comerciales e industriales.',
  },
  {
    q: '¿Qué es la microzonificación sísmica de Pereira y cómo afecta mi construcción?',
    a: 'Pereira cuenta con un estudio de microzonificación sísmica que zonifica el territorio según el comportamiento dinámico del suelo ante sismos. Este estudio, que complementa los parámetros de la NSR-10, define espectros de diseño específicos para cada zona de la ciudad. El informe geotécnico de cualquier predio en Pereira debe indicar en qué zona de microzonificación se ubica y utilizar los parámetros sísmicos locales correspondientes, lo que puede incrementar o reducir los requisitos de refuerzo estructural.',
  },
  {
    q: '¿Cuántas perforaciones necesita mi proyecto en Pereira?',
    a: 'El número mínimo de sondeos lo define la NSR-10 Título H según el área del terreno y la magnitud del proyecto. Para una vivienda unifamiliar en lote de hasta 200 m², generalmente se requieren 2 sondeos SPT. Para edificios multifamiliares de 4 o más pisos, se recomienda mínimo 3 sondeos más perforaciones adicionales si la variabilidad del suelo lo justifica. BIC define el programa de exploración tras la visita de reconocimiento inicial al predio en Pereira.',
  },
  {
    q: '¿Cuánto cuesta un estudio de suelos en Pereira?',
    a: 'El costo depende del número de sondeos, la profundidad de exploración, los ensayos de laboratorio requeridos y la complejidad geotécnica del terreno. Para una vivienda unifamiliar estándar en Pereira, el rango típico está entre $3.500.000 y $7.000.000 COP. Para edificios multifamiliares el costo aumenta según el programa de exploración. BIC envía cotización detallada en menos de 24 horas tras recibir los datos del proyecto.',
  },
  {
    q: '¿Qué papel juega la CARDER en los estudios de suelos en Pereira?',
    a: 'La CARDER (Corporación Autónoma Regional de Risaralda) es la autoridad ambiental competente en Pereira y Risaralda, equivalente a lo que Corpocaldas representa en Manizales. La CARDER interviene en los estudios geotécnicos cuando el predio se ubica en zonas de amenaza o protección ambiental: rondas hídricas, áreas de ladera con restricción, o cuando el proyecto requiere permisos de aprovechamiento forestal. BIC conoce los requisitos de la CARDER e integra estas restricciones al análisis geotécnico.',
  },
  {
    q: '¿Cuánto tiempo tarda el estudio de suelos?',
    a: 'Desde la aprobación del proyecto hasta la entrega del informe, el plazo típico es de 2 a 4 semanas. Incluye: coordinación con el laboratorio aliado para el trabajo de campo (3–5 días), ensayos de laboratorio (5–10 días), y análisis e informe (3–5 días). Para proyectos urgentes con obras en curso o fechas de radicación en curaduría próximas, BIC puede acelerar el proceso. Consulte disponibilidad al momento de cotizar.',
  },
]

export default function EstudioSuelosPereira() {
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
          <SectionLabel light>Servicio especializado · Pereira · Risaralda</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Estudio de Suelos en Pereira:<br />
            <span style={{ color: '#17A2B8' }}>Informe Geotécnico según NSR-10</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios de suelos en Pereira, Dosquebradas
            y Risaralda para constructoras, propietarios y promotores de vivienda. Ejecutamos
            perforaciones SPT, ensayos de laboratorio geotécnico y análisis de capacidad portante
            conforme a la NSR-10 Título H. Nuestros informes están firmados por especialista con
            COPNIA vigente y son aceptados por las curadurías de Pereira. Integramos la
            microzonificación sísmica local y las restricciones de la CARDER en cada análisis.
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
          {['NSR-10 Título H', 'SPT', 'USCS', 'Microzonificación Sísmica Pereira', 'CARDER', 'Curadurías Pereira'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── POR QUÉ ES OBLIGATORIO ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué es obligatorio el estudio de suelos en Pereira?</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                El estudio de suelos o estudio geotécnico es la investigación técnica del subsuelo
                de un terreno que determina sus propiedades mecánicas —resistencia, deformabilidad,
                permeabilidad— para diseñar la cimentación de una edificación de forma segura y
                económica.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8 }}>
                En Colombia, la NSR-10 establece en su Título H que toda edificación nueva debe
                basarse en un estudio geotécnico. En Pereira, capital del Departamento de Risaralda,
                los suelos volcánicos del Eje Cafetero y la topografía quebrada generan variaciones
                significativas de predio a predio. La combinación de alta amenaza sísmica y suelos
                de ceniza volcánica hace del estudio geotécnico una herramienta indispensable,
                incluso para viviendas de una sola planta.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 14, marginBottom: 12 }}>
                Características del suelo en Pereira y el Eje Cafetero:
              </h3>
              <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
                <li><strong>Cenizas volcánicas:</strong> Suelos limosos de alta plasticidad y baja capacidad portante en estado saturado, característicos del Eje Cafetero</li>
                <li><strong>Suelos colapsibles:</strong> Cenizas que se compactan súbitamente al humedecerse desde estado seco — requieren verificación especial en temporadas de lluvias</li>
                <li><strong>Variabilidad estratigráfica:</strong> La actividad volcánica histórica del Nevado del Ruiz produce capas irregulares de ceniza, pómez y suelo residual en toda la región</li>
                <li><strong>Riesgo sísmico alto:</strong> Pereira está en zona de amenaza sísmica alta según la NSR-10; la microzonificación local define espectros de diseño específicos por sector</li>
                <li><strong>Restricciones CARDER:</strong> La autoridad ambiental de Risaralda define zonas de ladera y rondas hídricas donde el diseño de cimentaciones debe integrar condicionantes ambientales</li>
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
          }}>Proceso: perforaciones, ensayos SPT y análisis geotécnico</h2>
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
          }}>¿Qué entrega BIC al finalizar el estudio de suelos?</h2>
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
          }}>Zonas de Pereira donde trabajamos</h2>
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
          }}>FAQ — Estudio de suelos en Pereira</h2>
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
            ¿Necesita estudio de suelos para su proyecto en Pereira?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos la dirección del predio en Pereira o Risaralda, el uso del suelo y el tipo
            de edificación proyectada. Le enviamos propuesta técnica con número de sondeos y costo
            total en menos de 24 horas.
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
