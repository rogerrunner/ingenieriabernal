import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Modelación Hidráulica HEC-RAS 2D')

const seoConfig = {
  title: 'Modelación HEC-RAS — Estudios de Inundabilidad · BIC',
  description: 'Estudios de inundabilidad y modelación hidráulica HEC-RAS 1D/2D. Apto POMCA, licencias ambientales. Manizales, Colombia.',
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
  canonical: 'https://ingenieriabernal.co/servicios/modelacion-hec-ras',
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

const TIPOS_PROYECTO = [
  { icon: '🏛️', tipo: 'POT y EOT Municipales', desc: 'Componente de amenaza hídrica para planes de ordenamiento territorial: estudios básicos y detallados según Decreto 1807/2014.' },
  { icon: '🏘️', tipo: 'Licencias Urbanísticas', desc: 'Estudios de riesgo obligatorios para planes parciales, urbanizaciones y construcciones en zonas de expansión con cauces cercanos.' },
  { icon: '🛣️', tipo: 'Obras Viales e INVÍAS', desc: 'Diseño hidráulico de puentes, box-culverts y obras de drenaje longitudinal y transversal para carreteras y concesiones.' },
  { icon: '💰', tipo: 'Proyectos de Regalías SGR', desc: 'Componente hidrológico e hidráulico para proyectos de agua y saneamiento formulados en MGA-Web ante el DNP.' },
  { icon: '🌿', tipo: 'POMCA', desc: 'Modelaciones hidrológicas e hidráulicas para Planes de Ordenación y Manejo de Cuencas Hidrográficas de las CAR.' },
  { icon: '🏗️', tipo: 'Defensa Civil y Mitigación', desc: 'Diseño de jarillones, diques, rectificaciones de cauces y obras de control de crecientes con comparación de escenarios.' },
]

const METODOLOGIA = [
  { paso: '01', titulo: 'Levantamiento topobatimétrico', desc: 'Batimetría del cauce con equipos de precisión y levantamiento topográfico del área de inundación. Se generan secciones transversales y el MDT (Modelo Digital de Terreno) base del modelo.' },
  { paso: '02', titulo: 'Análisis hidrológico HEC-HMS', desc: 'Cálculo de caudales máximos para períodos de retorno Tr 2.33, 10, 25, 50 y 100 años mediante HEC-HMS. Calibración con registros del IDEAM y correlación regional RAS 2017.' },
  { paso: '03', titulo: 'Construcción del modelo HEC-RAS', desc: 'Importación del MDT a HEC-GEORAS / RAS Mapper. Definición de condiciones de frontera, coeficientes de Manning según uso del suelo y tipo de cauce, y geometría hidráulica.' },
  { paso: '04', titulo: 'Calibración y validación', desc: 'Ajuste del modelo con eventos históricos documentados, imágenes satelitales de inundaciones pasadas o cotas de marcas de agua. Verificación de métricas de desempeño (NSE, RMSE).' },
  { paso: '05', titulo: 'Corrida hidráulica y manchas de inundación', desc: 'Simulación de flujo permanente e impermanente (tránsito de creciente). Exportación de polígonos de inundación y calados para cada período de retorno como shapefiles SIG.' },
  { paso: '06', titulo: 'Informe técnico y cartografía', desc: 'Elaboración del informe conforme a la Guía Técnica MVCT: memoria de cálculo, planos hidráulicos, mapa de amenaza alta/media/baja, archivos HEC-RAS y capas SIG entregables.' },
]

const FAQ_HECRAS = [
  {
    q: '¿Para qué se usa HEC-RAS en Colombia?',
    a: 'HEC-RAS se usa en Colombia para elaborar mapas de inundación en POMCA, obtener licencias ambientales para obras cerca de fuentes hídricas, definir franjas de retiro en POT y planes parciales, y diseñar obras de protección contra inundaciones.',
  },
  {
    q: '¿Qué entregables incluye un estudio HEC-RAS?',
    a: 'Un estudio HEC-RAS profesional incluye: memoria de cálculo con modelos calibrados, mapas de inundación en SIG para períodos de retorno 10, 25, 50 y 100 años, e informe técnico apto para radicación ante la CAR y el municipio.',
  },
  {
    q: '¿Cuánto cuesta un estudio de modelación HEC-RAS en Colombia?',
    a: 'Los honorarios dependen de la longitud del tramo, complejidad del cauce y si ya existe topobatimetría. Estudios básicos (municipio pequeño, 2–5 km de cauce, 1D) oscilan entre $8 y $20 millones COP. Modelos 2D para cuencas grandes o planes parciales complejos pueden superar los $40 millones. BIC entrega presupuesto detallado en menos de 24 horas hábiles, sin costo.',
  },
  {
    q: '¿Cuánto tarda un estudio HEC-RAS completo?',
    a: 'Un modelo 1D para POT o licencia urbanística, cuando ya existe información topohidrológica disponible, puede entregarse en 3 a 5 semanas. Cuando se requiere levantamiento topobatimétrico propio, el plazo típico es de 6 a 10 semanas. Modelos 2D para cuencas grandes con calibración completa: entre 8 y 14 semanas. BIC establece el cronograma detallado en la propuesta.',
  },
  {
    q: '¿Qué información se necesita para iniciar un estudio HEC-RAS?',
    a: 'Lo mínimo requerido: nombre del cauce, coordenadas del tramo a modelar, objetivo del estudio (POT, licencia, diseño de obra) y si hay topobatimetría disponible. BIC puede realizar el levantamiento topobatimétrico si no existe. Con esa información inicial, se elabora la propuesta técnica y económica en 24 horas.',
  },
  {
    q: '¿Qué diferencia hace usar HEC-RAS 2D en lugar de 1D?',
    a: 'HEC-RAS 1D es suficiente para cauces bien definidos con planicie de inundación simple: ríos rectos, secciones regulares, llanuras con flujo predominantemente unidimensional. HEC-RAS 2D es obligatorio cuando el flujo se distribuye en múltiples direcciones sobre una planicie: zonas urbanas inundables, confluencias, quebradas en cono de deyección o torrencial, planes parciales con topografía compleja. La malla computacional 2D captura la dinámica real del flujo y produce manchas de amenaza más precisas — lo que reduce el riesgo de litigios por clasificación incorrecta de zonas.',
  },
  {
    q: '¿La modelación HEC-RAS aplica para ríos pequeños o quebradas?',
    a: 'Sí — la mayoría de los eventos de inundación en Colombia ocurren en quebradas y ríos de cuencas menores de 100 km². HEC-RAS 1D y 2D son aplicables desde cauces de 1 km de longitud. Para quebradas con alta pendiente y comportamiento torrencial (flujo hiperconcentrado), BIC complementa el análisis con metodología de Iber o TETIS para estimar el potencial de daño y las zonas de amenaza alta.',
  },
]

export default function ServicioModelacionHecRas() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Modelación HEC-RAS — Estudios de Inundación en Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/modelacion-hec-ras"
        faqItems={FAQ_HECRAS}
      />

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
            Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL, COPNIA 17202-313228),
            garantiza modelos que superan la revisión técnica más exigente en cualquier entidad territorial de Colombia.
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

      {/* ── TIPOS DE PROYECTO ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Aplicaciones</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            ¿Para qué tipo de proyectos se requiere HEC-RAS en Colombia?
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 }}>
            {TIPOS_PROYECTO.map(t => (
              <div key={t.tipo} style={{ padding: '20px 22px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{t.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#001A33', margin: '0 0 6px' }}>{t.tipo}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── METODOLOGÍA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso de trabajo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Metodología: de la topobatimetría al mapa de amenaza
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {METODOLOGIA.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 20, padding: '20px 0', borderBottom: i < METODOLOGIA.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <div style={{ background: '#003B6F', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 48, fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#17A2B8', fontSize: 16 }}>
                  {m.paso}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33', fontSize: 14, margin: '0 0 6px' }}>{m.titulo}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 1D VS 2D ── */}
      <Section bg="#EEF6FB" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Comparativa técnica</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            HEC-RAS 1D vs 2D: ¿cuál necesita su proyecto?
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderTop: '3px solid #0077B6', borderRadius: 4, padding: 28 }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#0077B6', fontSize: 15, marginBottom: 14 }}>HEC-RAS 1D — Flujo unidimensional</h3>
              <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
                <li>Cauces con sección transversal bien definida</li>
                <li>Ríos con planicie de inundación simple</li>
                <li>Tramos rectos sin bifurcaciones complejas</li>
                <li>POT municipios pequeños con cauces rurales</li>
                <li>Menor costo y tiempo de elaboración</li>
                <li>Suficiente para cumplir Decreto 1807 en muchos casos</li>
              </ul>
            </div>
            <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderTop: '3px solid #17A2B8', borderRadius: 4, padding: 28 }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 15, marginBottom: 14 }}>HEC-RAS 2D — Flujo bidimensional</h3>
              <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
                <li>Zonas urbanas con flujo en múltiples direcciones</li>
                <li>Quebradas torrenciales en conos de deyección</li>
                <li>Confluencias y bifurcaciones de cauces</li>
                <li>Planes parciales con topografía compleja</li>
                <li>Cuencas de gran extensión con llanuras amplias</li>
                <li>Mayor precisión en manchas de amenaza — menor riesgo de litigios</li>
              </ul>
            </div>
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
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL). Modelos rigurosos, calibrados y documentados. Matrícula COPNIA 17202-313228 CLD activa.' },
              { icon: '🏗️', titulo: '+10 años en proyectos hídricos', desc: 'Proyectos verificables en Dosquebradas, La Dorada, Puerto Boyacá, Viterbo y múltiples municipios del Eje Cafetero y el país.' },
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

      {/* ── FAQ ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Preguntas frecuentes sobre modelación HEC-RAS en Colombia
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQ_HECRAS.map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '22px 26px' }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33', fontSize: 14, margin: '0 0 10px', lineHeight: 1.4 }}>{faq.q}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/hec-ras-2d-colombia" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>HEC-RAS 2D en Colombia: Guía Práctica para Consultores Hidráulicos</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/hec-ras-2d-modelacion-hidraulica-colombia" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Contratar modelación HEC-RAS 2D: qué debe exigirle a su consultor</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
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
            <a href="/gestion-riesgo-hidrico" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Gestión del riesgo hídrico — Decreto 1807/2014 para POT y licencias</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos con HEC-HMS — caudales máximos y curvas IDF</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/geotecnia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios geotécnicos para obras en zonas de amenaza hídrica y ladera</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/interventoria" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Interventoría técnica de obras hidráulicas y defensas fluviales</span>
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
