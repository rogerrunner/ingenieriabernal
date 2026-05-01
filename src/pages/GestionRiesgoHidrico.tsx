import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito un estudio de gestión del riesgo hídrico para mi proyecto')

const seoConfig = {
  title: 'Gestión del Riesgo Hídrico Colombia | BIC Bernal Ingeniería',
  description: 'Estudios de amenaza y riesgo por inundación y avenidas torrenciales en Colombia. Decreto 1807/2014, Ley 1523/2012, PMGR municipales, mapas de amenaza hídrica. COPNIA vigente.',
  keywords: [
    'gestión del riesgo hídrico Colombia',
    'estudio amenaza inundación Colombia',
    'Decreto 1807 2014 riesgo hídrico',
    'mapa amenaza inundación Colombia',
    'análisis riesgo inundaciones Colombia',
    'plan gestión riesgo municipal Colombia',
    'estudio riesgo hídrico plan parcial',
    'amenaza torrencialidad Colombia',
    'PMGR municipio Colombia',
    'Ley 1523 gestión riesgo desastres',
    'BIC Bernal Ingeniería riesgo hídrico',
  ],
  canonical: 'https://ingenieriabernal.co/gestion-riesgo-hidrico',
}

const INCLUYE = [
  {
    icon: '🗺️',
    titulo: 'Diagnóstico de Amenaza Hídrica',
    desc: 'Identificación y caracterización de fuentes de amenaza: ríos, quebradas, canales y zonas con antecedentes de inundación o avenidas torrenciales. Revisión de POMCA vigente, cartografía IDEAM y registros históricos de eventos.',
  },
  {
    icon: '📐',
    titulo: 'Análisis Hidrológico — HEC-HMS',
    desc: 'Cálculo de caudales máximos para períodos de retorno de 10, 25, 50 y 100 años mediante HEC-HMS. Curvas IDF con datos del IDEAM, determinación de parámetros de cuenca y generación de hidrogramas de diseño.',
  },
  {
    icon: '🖥️',
    titulo: 'Modelación Hidráulica HEC-RAS 2D',
    desc: 'Simulación bidimensional del flujo de inundación sobre la llanura aluvial. Determinación de profundidades máximas, velocidades y extensión de la mancha de inundación por cada período de retorno. Calibración con registros históricos.',
  },
  {
    icon: '🏘️',
    titulo: 'Análisis de Vulnerabilidad y Riesgo',
    desc: 'Identificación de elementos expuestos: infraestructura, viviendas, vías, servicios públicos. Cruce cartográfico de amenaza y vulnerabilidad para obtener el mapa de riesgo conforme a la metodología del UNGRD y las guías del MVCT.',
  },
  {
    icon: '📊',
    titulo: 'Cartografía SIG a Escala Requerida',
    desc: 'Producción de mapas de amenaza alta, media y baja en ArcGIS Pro. Escala 1:2.000 para planes parciales (exigida por Curadurías), 1:5.000 para EOT/POT municipal. Entrega en shapefile, GeoJSON y PDF georeferenciado.',
  },
  {
    icon: '📋',
    titulo: 'Concepto de Aptitud Urbanística',
    desc: 'Determinación de zonas aptas para urbanizar, zonas condicionadas con medidas de mitigación y zonas no aptas. Incluye presupuesto estimado de obras de mitigación propuestas, requerido por la Curaduría para la licencia de urbanismo.',
  },
  {
    icon: '🏛️',
    titulo: 'Plan Municipal de Gestión del Riesgo (PMGR)',
    desc: 'Formulación o actualización del Plan Municipal de Gestión del Riesgo conforme a la Ley 1523/2012. Incluye caracterización de escenarios de riesgo, estrategia de respuesta y plan de inversión para reducción del riesgo hídrico municipal.',
  },
  {
    icon: '🔧',
    titulo: 'Diseño de Medidas de Mitigación',
    desc: 'Diseño conceptual o definitivo de obras de reducción del riesgo: diques de protección, canales de alivio, disipadores de energía, obras de encauzamiento y dragados. Análisis costo-beneficio de cada alternativa.',
  },
]

const PARA_QUIEN = [
  {
    tipo: 'Alcaldías y Oficinas de Planeación Municipal',
    desc: 'Componente de riesgo hídrico para revisión del POT/EOT exigido por el Decreto 1807/2014. Actualización de PMGR conforme a la Ley 1523/2012. Estudios requeridos por el OCAD para proyectos del SGR.',
  },
  {
    tipo: 'Constructoras y Curadores Urbanos',
    desc: 'Estudios de amenaza y riesgo obligatorios para planes parciales, licencias de urbanismo y proyectos de subdivisión en zonas con cauces cercanos. Sin este estudio la Curaduría no expide la licencia.',
  },
  {
    tipo: 'CAR y Entidades Ambientales',
    desc: 'Análisis de riesgo hídrico como insumo técnico para la expedición de licencias ambientales, conceptos de viabilidad de POMCA y planes de ordenación y manejo de cuencas hidrográficas.',
  },
  {
    tipo: 'Promotores Inmobiliarios y Fiduciarias',
    desc: 'Due diligence técnico de predios con exposición a inundación o torrencialidad. Cuantificación del riesgo para estructuración financiera de proyectos y obtención de seguros de construcción.',
  },
  {
    tipo: 'Concesiones Viales e INVÍAS',
    desc: 'Análisis de riesgo hídrico en corredores viales, diseño hidráulico de puentes, box-culverts y obras de drenaje bajo metodología INVÍAS. Evaluación de socavación y estabilidad de terraplenes.',
  },
]

const MARCO_NORMATIVO = [
  {
    norma: 'Ley 1523 de 2012',
    desc: 'Política nacional de gestión del riesgo de desastres. Obliga a todos los municipios de Colombia a tener un Plan Municipal de Gestión del Riesgo actualizado y a incorporar el riesgo en el ordenamiento territorial.',
  },
  {
    norma: 'Decreto 1807 de 2014',
    desc: 'Reglamenta la incorporación de la gestión del riesgo en los Planes de Ordenamiento Territorial. Define cómo deben hacerse los estudios básicos y detallados de amenaza hídrica para instrumentos de planificación y licencias de urbanismo.',
  },
  {
    norma: 'Decreto 1232 de 2020',
    desc: 'Modifica parcialmente el Decreto 1807/2014 para los estudios de amenaza y riesgo de los POT de municipios menores. Agiliza los estudios básicos para municipios de categorías 5 y 6.',
  },
  {
    norma: 'Guía Técnica MVCT / UNGRD',
    desc: 'Guías metodológicas para la elaboración de estudios básicos y detallados de amenaza y riesgo hídrico. Definen los insumos, la metodología y el contenido mínimo del informe técnico.',
  },
  {
    norma: 'Decretos POMCA Vigentes',
    desc: 'Los Planes de Ordenación y Manejo de Cuencas Hidrográficas adoptados por las CAR definen la zonificación ambiental y los usos permitidos en las rondas hídricas. Son insumo obligatorio de los estudios Decreto 1807.',
  },
]

const FAQS = [
  {
    q: '¿Cuándo es obligatorio un estudio de riesgo hídrico según el Decreto 1807/2014?',
    a: 'Es obligatorio para: (1) licencias de urbanismo en suelo de expansión o suelo rural con cauces dentro o adyacentes al predio; (2) revisión y formulación de POT/EOT en todos los municipios; (3) planes parciales con fuentes hídricas en el área de influencia; (4) proyectos financiados con el SGR cuando la zona tiene amenaza hídrica identificada. En la práctica, cualquier predio a menos de 100 metros de una quebrada o río en el Eje Cafetero requiere el estudio antes de solicitar la licencia de urbanismo.',
  },
  {
    q: '¿Qué diferencia hay entre un estudio básico y un estudio detallado de amenaza hídrica?',
    a: 'El estudio básico es el punto de partida para revisar o formular un POT: identifica las zonas con amenaza en el municipio a escala general (1:10.000 o 1:25.000) y define si se requiere estudio detallado. El estudio detallado se hace para zonas que van a urbanizarse o que tienen conflicto de uso, a escala 1:2.000 o 1:5.000, con modelación hidráulica completa y concepto de aptitud urbanística. Para obtener una licencia de urbanismo se exige siempre el estudio detallado.',
  },
  {
    q: '¿Cuánto tarda y cuánto cuesta un estudio de riesgo hídrico para un plan parcial?',
    a: 'Para un plan parcial de 5–20 hectáreas en el Eje Cafetero, el estudio tarda entre 3 y 6 semanas desde la entrega de la cartografía predial y el MDT. El costo oscila entre $15 y $35 millones COP según la complejidad de los cauces y la extensión del área a modelar. La primera consulta es sin costo.',
  },
  {
    q: '¿Qué información necesitan de mi parte para iniciar el estudio?',
    a: 'Básicamente: (1) localización del predio (municipio, vereda, coordenadas o matrícula inmobiliaria); (2) área del proyecto; (3) cauces que lo afectan o bordean; (4) cartografía disponible (topografía, ortofoto, LiDAR si existe); (5) concepto emitido por la CAR o la Curaduría si ya fue solicitado. Con esta información, BIC elabora la propuesta técnica y el cronograma en menos de 24 horas.',
  },
  {
    q: '¿BIC realiza estudios de gestión del riesgo en municipios fuera del Eje Cafetero?',
    a: 'Sí. BIC ha realizado estudios de riesgo hídrico en municipios de Caldas, Risaralda, Cundinamarca, Boyacá, Tolima, Santander y Antioquia. El trabajo de campo (levantamiento topobatimétrico, reconocimiento de cuenca) se coordina con aliados locales o el equipo se desplaza. Los modelos hidráulicos y los informes se elaboran en Manizales y se entregan digitalmente.',
  },
]

export default function GestionRiesgoHidrico() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Gestión del Riesgo Hídrico Colombia | BIC Bernal Ingeniería" />

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
            Gestión del Riesgo Hídrico<br />
            <span style={{ color: '#17A2B8' }}>Inundaciones y Torrencialidad en Colombia</span>
          </h1>
          <p className="servicio-intro" style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios de amenaza, vulnerabilidad y riesgo
            por inundación y avenidas torrenciales para municipios, constructoras y entidades públicas
            en Colombia. Nuestros estudios cumplen el Decreto 1807/2014, la Ley 1523/2012 y las guías
            técnicas del MVCT y la UNGRD. Modelos HEC-RAS 2D calibrados, cartografía SIG a escala
            requerida y conceptos de aptitud urbanística aceptados por Curadurías y CAR en todo
            el territorio nacional. Director técnico con matrícula COPNIA 17202-313228 CLD vigente.
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
          {['Decreto 1807/2014', 'Ley 1523/2012', 'HEC-RAS 2D', 'UNGRD / MVCT', 'SIG / GIS', 'POMCA'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── QUÉ ES EL RIESGO HÍDRICO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto técnico</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué es la Gestión del Riesgo Hídrico?</h2>
          <ThinLine mb={24} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                El riesgo hídrico es la probabilidad de que una comunidad, una infraestructura o un proyecto
                sufra daños causados por inundaciones, crecientes súbitas o avenidas torrenciales. En Colombia,
                donde más del 40% del territorio nacional tiene algún grado de amenaza por inundación según el
                IDEAM, la gestión del riesgo hídrico no es opcional: es un componente técnico y legal obligatorio
                para cualquier proceso de ordenamiento territorial o licencia de urbanismo.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                La <strong style={{ color: '#002A50' }}>amenaza</strong> es la posibilidad de que ocurra una inundación
                de cierta magnitud en un lugar determinado. La <strong style={{ color: '#002A50' }}>vulnerabilidad</strong> es
                la susceptibilidad de los elementos expuestos (personas, viviendas, infraestructura) a ser
                afectados. El <strong style={{ color: '#002A50' }}>riesgo</strong> es el resultado de combinar
                la amenaza con la vulnerabilidad: una zona muy amenazada pero sin elementos expuestos tiene
                bajo riesgo; una zona con amenaza moderada pero con alta densidad poblacional puede tener
                riesgo alto.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                El marco normativo colombiano es claro: el <strong style={{ color: '#002A50' }}>Decreto 1807 de 2014</strong> obliga
                a incorporar los estudios de riesgo hídrico en los instrumentos de ordenamiento territorial
                (POT, EOT, POT) y en las licencias de urbanismo en zonas con amenaza. La <strong style={{ color: '#002A50' }}>Ley 1523 de 2012</strong> establece
                la gestión del riesgo como política nacional y obliga a los municipios a formular y mantener
                actualizado su Plan Municipal de Gestión del Riesgo.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
                En la práctica, esto significa que <strong style={{ color: '#002A50' }}>cualquier proyecto de construcción
                o urbanismo</strong> ubicado en terrenos con cauces cercanos necesita un estudio técnico firmado
                por profesional habilitado antes de que la Curaduría pueda expedir la licencia. Sin este
                estudio, el proceso de licenciamiento queda bloqueado indefinidamente.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUÉ INCLUYE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué Incluye el Estudio de Riesgo Hídrico?</h2>
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
          }}>¿Para Quién es Este Servicio?</h2>
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

      {/* ── MARCO NORMATIVO ── */}
      <Section bg="#F0F7FA" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Normativa vigente</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Marco Normativo — Riesgo Hídrico Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {MARCO_NORMATIVO.map((n) => (
              <div key={n.norma} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: '20px 24px', display: 'flex', gap: 20, alignItems: 'flex-start',
              }}>
                <div style={{
                  background: '#17A2B8', color: '#fff', borderRadius: 4,
                  padding: '6px 12px', fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700, fontSize: 11, whiteSpace: 'nowrap', flexShrink: 0,
                }}>{n.norma}</div>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14,
                  lineHeight: 1.65, margin: 0,
                }}>{n.desc}</p>
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
          }}>¿Por qué BIC para su Estudio de Riesgo Hídrico?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              {
                icon: '🎓',
                titulo: 'Especialización Universitaria en Hidráulica',
                desc: 'Rogerio Bernal Ríos es Especialista en Ingeniería Hidráulica y Ambiental de la Universidad Nacional de Colombia. La especialización en gestión del riesgo hídrico es parte central de su formación académica y se refleja en la calidad técnica de cada estudio.',
              },
              {
                icon: '🏗️',
                titulo: 'Proyectos en Caldas, Risaralda y Colombia',
                desc: 'BIC ha realizado análisis de torrencialidad para 8 municipios del Eje Cafetero (EJE GROUP S.A.S., 2021–2022), estudios de riesgo para planes parciales en Dosquebradas y Manizales, y gestión del riesgo hídrico fluvial en el Magdalena Medio. Proyectos verificables con entidades públicas y privadas.',
              },
              {
                icon: '📜',
                titulo: 'Estudios Aceptados por CAR y Curadurías',
                desc: 'Los informes de BIC cumplen los requisitos de CORPOCALDAS, CARDER, CRQ y las Curadurías Urbanas de Manizales, Pereira y Armenia. El formato, la escala cartográfica y el contenido técnico se ajustan a lo que cada entidad exige para emitir su concepto favorable.',
              },
              {
                icon: '⚡',
                titulo: 'Propuesta en Menos de 24 Horas',
                desc: 'Comunicación directa con el director técnico. Una vez recibida la localización del predio y el alcance del proyecto, BIC entrega propuesta técnica y económica en menos de 24 horas. Sin intermediarios, sin formularios interminables.',
              },
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

      {/* ── CASO DE ÉXITO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Caso de aplicación</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Análisis de Torrencialidad — 8 Municipios del Eje Cafetero</h2>
          <ThinLine mb={24} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
            En 2021–2022, BIC realizó para EJE GROUP S.A.S. el análisis de torrencialidad y riesgo hídrico
            de 8 municipios del Eje Cafetero usando modelación HEC-RAS 2D con superficies LiDAR de 1 metro
            de resolución. El estudio identificó las zonas de mayor amenaza en cada municipio, cuantificó
            las profundidades y velocidades de inundación para períodos de retorno de 10 a 100 años, y
            propuso medidas de mitigación estructurales para las áreas críticas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 20 }}>
            {[
              { valor: '8', label: 'municipios analizados' },
              { valor: '12', label: 'zonas críticas identificadas' },
              { valor: '2.5–4.0 m', label: 'profundidades máximas' },
              { valor: '1.5–3.5 m/s', label: 'velocidades máximas' },
            ].map(s => (
              <div key={s.label} style={{ background: '#F0F7FA', borderRadius: 4, padding: '20px 16px', textAlign: 'center' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 28, margin: '0 0 4px' }}>{s.valor}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 13, margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.75 }}>
            Los resultados del estudio fueron incorporados en los instrumentos de planificación territorial de los
            municipios participantes y sirvieron como insumo para la priorización de inversión en obras de
            mitigación con recursos del SGR. El portafolio completo de proyectos está disponible en la sección
            <a href="/proyectos" style={{ color: '#17A2B8', textDecoration: 'none', fontWeight: 600 }}> Proyectos</a>.
          </p>
        </div>
      </Section>

      {/* ── FAQs ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Preguntas Frecuentes — Gestión del Riesgo Hídrico</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQS.map((faq) => (
              <div key={faq.q} className="faq-item" style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 15, marginBottom: 10,
                }}>{faq.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0,
                }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#fff" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/hec-ras-2d-modelacion-hidraulica-colombia" style={{ flex: '1 1 260px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Contratar modelación HEC-RAS 2D: qué debe exigirle a su consultor</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/mga-web-regalias-agua-potable" style={{ flex: '1 1 260px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Formulación proyectos regalías MGA-Web para agua y saneamiento</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 260px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Modelación Hidráulica HEC-RAS 1D/2D para municipios y obras en Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section bg="#EFF6FB" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Modelación hidráulica HEC-RAS 2D para manchas de inundación por período de retorno</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos con HEC-HMS — caudales máximos para períodos de retorno</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/regalias-mga" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Formulación de proyectos de gestión del riesgo en MGA-Web para el SGR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/geotecnia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios geotécnicos y de suelos para obras de mitigación y defensas fluviales</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
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
            ¿Necesita estudio de riesgo hídrico para su proyecto?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos la ubicación del predio, los cauces cercanos y la entidad a la que debe
            entregar el informe. Le respondemos con propuesta técnica y presupuesto en menos de
            24 horas. Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
            >
              📱 Chatear por WhatsApp
            </Btn>
            <Btn variant="outline" href="/contacto" style={{ borderColor: '#fff', color: '#fff' }}>
              Ver formulario de contacto
            </Btn>
          </div>
        </div>
      </Section>
    </>
  )
}
