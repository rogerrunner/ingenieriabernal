import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Modelación Hidráulica HEC-RAS 2D')

const seoConfig = {
  title: 'Modelación Hidráulica HEC-RAS 2D Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Modelación hidráulica HEC-RAS 1D y 2D para municipios, constructoras y entidades en Colombia. Manchas de inundación, amenaza hídrica Decreto 1807/2014. COPNIA 17202-313228. Eje Cafetero.',
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
import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito una modelacion hidraulica HEC-RAS. ¿Pueden asesorarme sobre el alcance y costo?')

const seoConfig = {
  title: 'Modelacion Hidraulica HEC-RAS Colombia — 1D, 2D, Dam Break y Socavacion | BIC',
  description: 'BIC realiza modelacion hidraulica HEC-RAS 1D y 2D en Colombia: manchas de inundacion, amenaza hidrica Decreto 1807/2014, analisis de rotura de presa (dam break) y socavacion en puentes HEC-18. Para CAR, INVIAS, ANLA, municipios y constructoras. COPNIA vigente. Cotizacion en 24 h.',
  keywords: [
    'modelacion hidraulica HEC-RAS Colombia',
    'modelacion HEC-RAS 2D Colombia',
    'modelacion inundacion HEC-RAS',
    'estudio hidraulico Colombia',
    'modelacion hidrodinamica Colombia',
    'HEC-RAS 1D Colombia',
    'manchas de inundacion Colombia',
    'amenaza hidrica Decreto 1807',
    'dam break Colombia HEC-RAS',
    'socavacion puentes HEC-18',
    'modelo hidraulico CAR Colombia',
    'llanura de inundacion HEC-RAS',
    'perfil hidraulico Colombia',
    'rotura presa analisis Colombia',
    'HEC-RAS INVIAS puentes Colombia',
    'consultor HEC-RAS Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/modelacion-hec-ras',
}

const TIPOS = [
  {
    icon: '〰️',
    tipo: 'Modelacion 1D de rios y canales',
    subtitulo: 'HEC-RAS 1D — perfil hidraulico en seccion transversal',
    desc: 'La modelación unidimensional (1D) es el estándar técnico para el diseño hidráulico de ríos, canales y estructuras de control cuando el flujo se comporta de forma predominantemente longitudinal — es decir, cuando el caudal se concentra en un cauce bien definido y los desbordes laterales son de extensión limitada. BIC construye el modelo 1D con secciones transversales levantadas por topobatimetría de precisión, calibra el coeficiente de rugosidad de Manning con registros históricos de crecientes, y corre el modelo para flujo permanente (caudal pico para Tr 10, 25, 50 y 100 años) y flujo no permanente (tránsito de la onda de creciente). Los resultados — perfil longitudinal de la superficie libre, tirante hidráulico h (m), velocidad media v (m/s), número de Froude Fr — son la base del diseño de estructuras hidráulicas, obras de encauzamiento y socavación en puentes.',
    usos: ['Diseño hidráulico de canales de riego y conducción (RAS 2017)', 'Cálculo de socavación en estribos y pilas de puentes (HEC-18)', 'Perfil hidráulico para diseño de diques y muros de encauzamiento', 'Verificación de capacidad de cauces ante INVIAS y gobernaciones'],
    norma: ['Manual INVIAS (Drenaje Vial, 2009)', 'RAS 2017', 'HEC-18 (FHWA, 2012)', 'NSR-10 Cap. H'],
  },
  {
    icon: '🗺️',
    tipo: 'Modelacion 2D de llanuras de inundacion',
    subtitulo: 'HEC-RAS 2D — manchas de inundacion Decreto 1807/2014',
    desc: 'Cuando el caudal desborda el cauce y ocupa la llanura de inundación, el flujo se convierte en bidimensional: el agua se desplaza en dos direcciones y la distribución de velocidades en la sección ya no puede representarse con una sola sección transversal. La modelación 2D con HEC-RAS 2D es el método exigido por el Decreto 1807/2014 y la Guía Técnica del MVCT para determinar las manchas de inundación que definen las zonas de amenaza hídrica en el POT. BIC construye la malla computacional sobre el DEM de la llanura (preferiblemente LiDAR de 0.5-1 m de resolución), define las condiciones de frontera (hidrograma de entrada para tránsito de creciente), corre la simulación hidrodinámica 2D y extrae los mapas de inundación para los períodos de retorno exigidos por la norma. El resultado es el polígono de amenaza alta (h > 1 m o v×h > 0.5 m²/s), media y baja que se incorpora al POT y que define los usos del suelo permitidos en la llanura.',
    usos: ['Mapa de amenaza hídrica para POT y planes parciales (Art. 6, Decreto 1807/2014)', 'Estudio de riesgo hídrico para licencias urbanísticas en zona de expansión', 'Evaluación de medidas de mitigación: diques, canales de alivio, rectificaciones', 'Modelación de áreas de inundación para planes de emergencia y evacuación'],
    norma: ['Decreto 1807/2014', 'Guía Técnica MVCT-UNGRD (2015)', 'Ley 1523/2012', 'Ley 388/1997'],
  },
  {
    icon: '🌊',
    tipo: 'Modelacion de rotura de presa (Dam Break)',
    subtitulo: 'Analisis de onda de ruptura para ANLA y Ley 1508',
    desc: 'El análisis de rotura de presa (dam break) es el estudio que determina qué le pasaría aguas abajo si la presa, el embalse o el dique fallara de forma súbita. En Colombia es exigido por la ANLA como parte del Estudio de Impacto Ambiental (EIA) para proyectos de infraestructura hídrica (presas, embalses de hidroeléctricas, lagunas de oxidación, pilas de lixiviados), y por las Corporaciones Autónomas Regionales para embalses con potencial de afectación sobre centros poblados. BIC modela la onda de ruptura con HEC-RAS 2D en modo dam break: simula el proceso de erosión y falla de la estructura (piping, overtopping o falla en cuña), propaga la onda por el cauce aguas abajo y determina los tiempos de llegada del frente de onda, los tirantes máximos h (m) y las velocidades v (m/s) en cada sección del valle. Con estos resultados se construye el mapa de inundación por dam break y los planes de acción de emergencia (PAE) exigidos por la norma.',
    usos: ['EIA para proyectos con embalses y presas (ANLA, Decreto 2820/2010)', 'Plan de Acción de Emergencia (PAE) para presas existentes', 'Evaluación de seguridad de diques de protección contra inundaciones', 'Ola de ruptura para lagunas de oxidación y pilas de lixiviados (CAR)'],
    norma: ['Decreto 2820/2010 (EIA)', 'Guía Técnica ANLA para presas', 'FERC Engineering Guidelines (Dam Safety)', 'NSR-10 Cap. H'],
  },
  {
    icon: '🌉',
    tipo: 'Modelacion de socavacion en puentes',
    subtitulo: 'HEC-18 / HEC-RAS — diseño hidraulico INVIAS',
    desc: 'La socavación es el proceso de erosión del lecho alrededor de las pilas y estribos de un puente durante una creciente: el aumento de velocidad del flujo causado por la contracción del cauce en la sección del puente genera esfuerzos cortantes que superan la resistencia del material del lecho, y el suelo se excava bajo las cimentaciones. Es la causa más frecuente de colapso de puentes en Colombia. BIC realiza el análisis de socavación conforme a la metodología HEC-18 (FHWA, 2012) y el Manual de Drenaje para Carreteras del INVIAS: calcula la socavación general del cauce (Laursen), la socavación por contracción (reducción de sección en el tablero) y la socavación local en pilas (Richardson y Davis) y en estribos (HIRE equation), para los caudales de diseño de 50 y 100 años, y verifica la profundidad de empotramiento de la cimentación existente o diseña la nueva para la profundidad de socavación total calculada. Los resultados son la base del diseño hidráulico del puente para INVIAS, la ANI y las gobernaciones.',
    usos: ['Diseño hidráulico de puentes nuevos para INVIAS y ANI', 'Evaluación de socavación en puentes existentes (diagnóstico de vulnerabilidad)', 'Diseño de obras de protección: enrocados, gaviones, estacas metálicas', 'Estudios para cruce de vías sobre quebradas y ríos (box culverts)'],
    norma: ['HEC-18 (FHWA, 2012) — Evaluating Scour at Bridges', 'Manual de Drenaje para Carreteras (INVIAS, 2009)', 'NSR-10 Capítulo C y H', 'AASHTO LRFD Bridge Design Specifications'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Recopilacion topobatimetrica y datos hidrologicos',
    desc: 'Todo modelo hidráulico es tan bueno como la información con la que se construye. BIC inicia con la recopilación de dos tipos de datos: topobatimétricos (geometría del cauce y la llanura) e hidrológicos (cuánta agua llega al modelo y cuándo). Para la topobatimetría, BIC trabaja con levantamientos GNSS de precisión (error < 5 cm) en secciones transversales o con DEM LiDAR cuando está disponible — para modelación 2D, el LiDAR de alta resolución (0.5-1 m) es la diferencia entre un mapa de inundación confiable y uno que no sirve. Para la batimetría de cauces grandes (río Magdalena, Cauca y tributarios principales), BIC coordina levantamientos con ecosonda de haz simple. Para la hidrología, se toman los hidrogramas de diseño del estudio hidrológico de la cuenca (HEC-HMS o análisis estadístico IDEAM) para los períodos de retorno de diseño: típicamente Tr 10, 25, 50 y 100 años para amenaza, y hasta Tr 500 o 1000 años para dam break.',
    herramientas: ['Levantamiento GNSS RTK (precision < 5 cm)', 'DEM LiDAR (IGAC / fuentes internacionales)', 'Ecosonda batimetrica (rios grandes)', 'HEC-HMS (hidrogramas de diseño)', 'Series IDEAM (analisis de frecuencia)'],
    resultado: 'Geometria validada del cauce y la llanura + hidrogramas de diseño para cada periodo de retorno',
  },
  {
    paso: '02',
    titulo: 'Construccion y calibracion del modelo hidraulico',
    desc: 'Con la geometría y la hidrología definidas, BIC construye el modelo en HEC-RAS. Para modelos 1D: ingreso de secciones transversales, definición de puentes, alcantarillas y estructuras de control, ingreso de coeficientes de Manning iniciales por tipo de vegetación y material del lecho. Para modelos 2D: construcción de la malla computacional sobre el DEM (elementos de 2-10 m en el cauce, 10-50 m en la llanura según el nivel de detalle requerido), definición de condiciones de frontera (hidrograma upstream, cota de agua downstream) y configuración del esquema numérico (ecuaciones de difusión de onda o Saint-Venant 2D completas). La calibración es el proceso más crítico: BIC ajusta el coeficiente de Manning n hasta que el modelo reproduce los niveles de agua de un evento histórico documentado (cota de inundación registrada, marcas de agua en estructuras, fotografías georeferenciadas). El criterio de aceptación de calibración es error en nivel < 10% del tirante observado.',
    herramientas: ['HEC-RAS 6.x (USACE) — 1D y 2D', 'Malla computacional (SRH-2D / RAS-Mapper)', 'Registros historicos de crecientes (IDEAM, alcaldia, UNGRD)', 'QGIS / ArcGIS (procesamiento del DEM y visualizacion)'],
    resultado: 'Modelo hidraulico calibrado y validado con metricas de error aceptables (Nash-Sutcliffe > 0.75)',
  },
  {
    paso: '03',
    titulo: 'Corrida del modelo para periodos de retorno de diseño',
    desc: 'Con el modelo calibrado, BIC corre las simulaciones para cada período de retorno de diseño. Para modelación 1D en flujo permanente, la corrida es casi instantánea; para modelación 2D en flujo no permanente (tránsito de creciente), el tiempo computacional depende del tamaño de la malla y del período de simulación — un modelo 2D de 50 km² puede tardar 4-12 horas de cómputo por corrida. BIC corre los escenarios sin intervención (estado actual del cauce) y con intervención (estado del proyecto: dique construido, canal de alivio abierto, dragado ejecutado) para comparar y dimensionar las obras de mitigación. Para dam break, se simulan los escenarios de falla parcial y falla total con distintas hipótesis de desarrollo de la brecha (ancho, profundidad y tiempo de formación) para evaluar el caso más conservador. Todos los archivos del modelo corren en HEC-RAS versión 6.x (la más reciente disponible) para garantizar compatibilidad con los revisores técnicos de las entidades.',
    herramientas: ['HEC-RAS 6.x (corrida flujo permanente e impermanente)', 'Escenarios sin y con intervencion (medidas de mitigacion)', 'Dam break: falla por piping y overtopping', 'Analisis de sensibilidad en coeficiente Manning'],
    resultado: 'Resultados del modelo para Tr 10, 25, 50, 100 y 500 años: tirante h (m), velocidad v (m/s), numero de Froude, caudal de diseño en cada seccion',
  },
  {
    paso: '04',
    titulo: 'Mapas de inundacion y cartografia de amenaza',
    desc: 'Los resultados numéricos del modelo (tirante h y velocidad v en cada celda de la malla para cada Tr) se exportan a QGIS donde BIC genera los mapas de inundación. Para amenaza hídrica según el Decreto 1807/2014, la clasificación usa los umbrales de la Guía Técnica MVCT-UNGRD: amenaza alta cuando h > 1.0 m o cuando el producto v×h > 0.5 m²/s (criterio de arrastre de personas); amenaza media cuando 0.5 m < h < 1.0 m; amenaza baja cuando h < 0.5 m. Para dam break, el mapa muestra los tiempos de llegada del frente de onda y la envolvente de inundación máxima. BIC entrega la cartografía en formato shapefile (ESRI), KML (Google Earth), PDF imprimible a escala 1:5000-1:10000 y capas WMS para visualización online. Las capas SIG están georreferenciadas en MAGNA-SIRGAS / CTM12 (sistema de referencia oficial de Colombia, establecido por el IGAC mediante Resolución 471/2020).',
    herramientas: ['RAS-Mapper (exportacion resultados HEC-RAS)', 'QGIS (clasificacion de amenaza, simbologia estandar UNGRD)', 'Cartografia base IGAC (1:2000 a 1:25000)', 'Sistema de referencia MAGNA-SIRGAS / CTM12'],
    resultado: 'Mapa de inundacion por Tr de diseño + mapa de amenaza alta/media/baja en formato SIG (shapefile + KML + PDF)',
  },
  {
    paso: '05',
    titulo: 'Informe tecnico para CAR, INVIAS o ANLA',
    desc: 'BIC entrega el informe técnico completo con toda la metodología, los datos de entrada (fuentes y fecha de obtención), los resultados de calibración y las láminas de los mapas de inundación, redactado en el formato que exige la entidad receptora (CAR, MVCT, INVIAS, ANLA o SGR según corresponda). El informe incluye la memoria de cálculo del análisis hidrológico, los resultados de la modelación en tablas y figuras, la cartografía SIG de amenaza en alta resolución, los archivos del modelo HEC-RAS (proyecto .prj, geometría .g01, condiciones de flujo .f01 y plan .p01) para que la entidad pueda reproducir los resultados de forma independiente, y la firma de Rogerio Bernal Ríos con tarjeta profesional COPNIA 17202-313228 CLD vigente. Para informes de dam break, se incluye adicionalmente el Plan de Acción de Emergencia (PAE) con los tiempos de evacuación y las rutas de escape para cada centro poblado del área de influencia.',
    herramientas: ['Informe tecnico completo (formato CAR / INVIAS / ANLA / SGR)', 'Archivos HEC-RAS calibrados (proyecto completo entregable)', 'Cartografia SIG en MAGNA-SIRGAS / CTM12', 'Firma COPNIA 17202-313228 CLD vigente'],
    resultado: 'Expediente tecnico completo: informe + modelo calibrado + cartografia SIG + firma COPNIA, listo para radicar ante cualquier entidad colombiana',
  },
]

const FAQ = [
  {
    q: '¿Cuanto cuesta una modelacion HEC-RAS en Colombia?',
    a: 'El costo depende principalmente del tipo de modelo (1D o 2D), el tamaño del tramo a modelar (longitud del cauce y área de la llanura de inundación), la disponibilidad de información topobatimétrica existente y el número de escenarios de simulación requeridos. Para una modelación 1D de un tramo de río de 5-10 km para diseño de puente o encauzamiento, el rango típico es de $12.000.000 a $25.000.000 COP. Para una modelación 2D con generación de manchas de inundación para POT (Decreto 1807/2014), en un tramo de 10-30 km con elaboración de cartografía SIG de amenaza, el rango es de $28.000.000 a $70.000.000 COP. Para análisis de dam break con PAE, el costo depende del número de estructuras y la longitud del cauce aguas abajo. BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo.',
  },
  {
    q: '¿Cuanto tiempo toma la modelacion hidraulica?',
    a: 'El plazo típico para una modelación completa — desde la recopilación de información hasta la entrega del informe con cartografía SIG y firma COPNIA — es de 6 a 12 semanas. El factor que más alarga el plazo es la disponibilidad de información topobatimétrica: si hay LiDAR disponible del área, se puede avanzar rápido; si hay que realizar el levantamiento topobatimétrico de campo (GPS RTK + ecosonda), hay que agregar 2-4 semanas. Para informes de amenaza hídrica con plazo de entrega ante la Secretaría de Planeación o la CAR, BIC puede entregar una versión preliminar del mapa de inundación (con advertencia de que está sujeta a revisión final de calibración) en 3-4 semanas para que el cliente avance en el proceso administrativo.',
  },
  {
    q: '¿Cual es la diferencia entre HEC-RAS 1D y HEC-RAS 2D?',
    a: 'La diferencia es la forma en que representa el movimiento del agua. HEC-RAS 1D asume que el flujo se mueve en una sola dirección (a lo largo del cauce) y usa secciones transversales para representar la geometría: es preciso en cauces bien definidos, rápido computacionalmente y suficiente para diseño de estructuras lineales (puentes, encauzamientos, canales). HEC-RAS 2D resuelve las ecuaciones de movimiento en dos dimensiones (x e y) sobre una malla computacional que cubre toda la llanura de inundación: es necesario cuando el flujo se distribuye sobre la llanura en múltiples direcciones, cuando hay estructuras (carreteras, edificios) que dirigen el flujo de forma no obvia, o cuando se necesita el tirante y la velocidad en cada punto de la llanura para generar el mapa de amenaza conforme al Decreto 1807/2014. La Guía Técnica del MVCT para incorporar gestión del riesgo en los POT recomienda explícitamente la modelación 2D para zonas de expansión urbana — es el estándar que las CAR y los organismos de revisión reconocen como más robusto.',
  },
  {
    q: '¿Que acepta la CAR en terminos de modelacion hidraulica?',
    a: 'Cada CAR tiene sus propios lineamientos, pero en general las Corporaciones Autónomas Regionales en Colombia aceptan modelos elaborados con HEC-RAS (1D o 2D) cuando el informe incluye: la metodología detallada de construcción del modelo, la topobatimetría de base con fecha y precisión declaradas, el proceso de calibración con evidencia del evento histórico de referencia y las métricas de error, los archivos del modelo digital (para que el revisor pueda replicar los resultados), la cartografía en formato SIG con el sistema de referencia oficial MAGNA-SIRGAS/CTM12, y la firma del profesional responsable con tarjeta COPNIA vigente. BIC ha entregado estudios ante Corpocaldas, Carder, CRQ, CVC, CDMB, CAR Cundinamarca y Corantioquia — todos aprobados en primera revisión.',
  },
  {
    q: '¿Que necesita INVIAS para el diseño hidraulico de un puente?',
    a: 'INVIAS exige el diseño hidráulico de puentes elaborado conforme al Manual de Drenaje para Carreteras (2009, Capítulo 4) y la metodología HEC-18 para socavación. El expediente técnico debe incluir: el estudio hidrológico con los caudales de diseño para Tr 50 y 100 años (y Tr 500 para puentes sobre ríos principales), el modelo hidráulico HEC-RAS del tramo con la sección del puente (para calcular la contracción del flujo y el aumento de velocidad), el cálculo de socavación en pilas y estribos (socavación general + socavación por contracción + socavación local), el nivel de agua de diseño con el borde libre mínimo exigido (normalmente 1.50 m sobre el nivel máximo de agua para Tr 100 años), y las especificaciones de la protección de cimentaciones contra socavación (enrocado de protección, profundidad de empotramiento). BIC ha elaborado estos estudios para INVIAS, la ANI y gobernaciones en múltiples departamentos.',
  },
  {
    q: '¿Para dam break que requiere la ANLA?',
    a: 'La ANLA (Autoridad Nacional de Licencias Ambientales) exige el análisis de rotura de presa como parte del Estudio de Impacto Ambiental (EIA) para proyectos que generan un embalse de más de 10 millones de metros cúbicos o que pueden afectar centros poblados en caso de falla. El expediente debe incluir: la descripción de los modos de falla considerados (overtopping — cuando el agua supera la cresta, piping — erosión interna por filtraciones, y falla en cuña), la modelación de la onda de ruptura con HEC-RAS 2D para el caso más desfavorable, los mapas de inundación por dam break con tiempos de llegada a cada centro poblado y nivel de tirante máximo, y el Plan de Acción de Emergencia (PAE) con los procedimientos de alerta temprana, las rutas de evacuación y los tiempos disponibles para cada comunidad. BIC tiene experiencia en dam break para proyectos hídricos en Colombia.',
  },
  {
    q: '¿El modelo HEC-RAS puede usarse para el POT municipal?',
    a: 'Sí, y es el modelo recomendado por el Decreto 1807/2014 y la Guía Técnica MVCT-UNGRD (2015) para generar los mapas de amenaza hídrica que se incorporan al POT. El estudio de amenaza hídrica para el POT debe cubrir todos los cauces con capacidad de desbordamiento dentro del perímetro urbano y en el suelo de expansión, generar las manchas de inundación para los períodos de retorno de 10, 50 y 100 años (como mínimo), clasificar la amenaza en alta, media y baja según los umbrales del Decreto 1807, y entregar la cartografía en formato SIG para que se incorpore a los planos del POT. BIC ha elaborado estudios de amenaza hídrica para POT en municipios del Eje Cafetero, Caldas, Risaralda, Antioquia y Boyacá — todos con los resultados incorporados al componente de gestión del riesgo del POT adoptado.',
  },
]

const CLIENTES = [
  { tipo: 'Alcaldias y oficinas de planeacion', desc: 'Estudios de amenaza hidrica para actualizar el componente de gestión del riesgo del POT (Decreto 1807/2014). Soporte técnico para la Secretaria de Planeacion.' },
  { tipo: 'Constructoras y promotores inmobiliarios', desc: 'Estudios de riesgo hídrico para planes parciales y licencias urbanísticas en zonas de expansion con cauces proximos. Soporte ante curador urbano.' },
  { tipo: 'INVIAS, ANI y concesiones viales', desc: 'Diseño hidráulico de puentes, box culverts y obras de drenaje transversal. Analisis de socavacion HEC-18 para proyectos 4G y malla vial nacional.' },
  { tipo: 'Empresas de energia y ANLA', desc: 'Analisis de rotura de presa (dam break) y Plan de Accion de Emergencia (PAE) para proyectos con embalses. Soporte EIA ante la ANLA.' },
  { tipo: 'Interventores tecnicos', desc: 'Revision independiente de modelos HEC-RAS entregados por consultores de diseño. Verificacion de calibracion y cumplimiento normativo ante el contratante.' },
  { tipo: 'CAR y autoridades ambientales', desc: 'Estudios tecnicos para tramites de concesion de aguas, permiso de ocupacion de cauce y licencias ambientales que requieren modelacion hidraulica.' },
]

const NORMATIVA = [
  { codigo: 'Decreto 1807/2014', descripcion: 'Reglamenta la incorporacion de la gestión del riesgo en los POT — define categorias de amenaza hidrica alta, media y baja, y la metodologia de los estudios detallados' },
  { codigo: 'Guia MVCT-UNGRD 2015', descripcion: 'Guia Tecnica para la incorporacion de la gestion del riesgo en los POT — metodologia y formatos de entregables aceptados por las CAR y el MVCT' },
  { codigo: 'NSR-10 Capitulo H', descripcion: 'Norma Sismo Resistente — diseño estructural de obras hidraulicas expuestas a presion hidrostatica, hidrodinamica y cargas de impacto' },
  { codigo: 'Manual INVIAS 2009', descripcion: 'Manual de Drenaje para Carreteras — metodologia HEC-18 para socavacion en puentes, diseño de alcantarillas y drenaje longitudinal' },
  { codigo: 'Decreto 2820/2010', descripcion: 'Reglamenta el EIA para proyectos que requieren licencia ambiental — incluye analisis de rotura de presa para embalses de mas de 10 millones de m³' },
  { codigo: 'RAS 2017', descripcion: 'Reglamento Tecnico de Agua y Saneamiento — criterios de diseño hidrologico e hidraulico para acueductos, alcantarillados y obras de conduccion' },
]

export default function ServicioModelacionHecRas() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Modelacion hidraulica · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Modelacion Hidraulica HEC-RAS en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Modelos 1D y 2D, dam break y socavacion en puentes — manchas de inundacion para CAR, INVIAS y ANLA con firma COPNIA
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            BIC Bernal Ingeniería Consultores realiza modelaciones hidráulicas con HEC-RAS en todo Colombia.
            Construimos modelos 1D para diseño de puentes, canales y encauzamiento, modelos 2D para manchas
            de inundación y amenaza hídrica (Decreto 1807/2014), análisis de rotura de presa (dam break)
            para EIA ante la ANLA, y estudios de socavación HEC-18 para INVIAS. Cada modelo se entrega
            calibrado, con los archivos completos y la firma de especialista COPNIA vigente — el estándar
            que exigen las CAR, los curadores urbanos y las entidades financiadoras del SGR.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar modelacion HEC-RAS</Btn>
            <Btn variant="outline" href="/servicios/estudios-hidrologicos" dark>Ver estudios hidrologicos</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['HEC-RAS 6.x','HEC-RAS 2D','HEC-18 Socavacion','Dam Break','Decreto 1807/2014','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: 'HEC-RAS 6.x', label: 'version mas reciente — compatible con todos los revisores' },
              { num: '+60', label: 'modelos hidraulicos entregados en Colombia' },
              { num: '100%', label: 'modelos aprobados en primera revision ante CAR e INVIAS' },
              { num: 'Nacional', label: 'cobertura en todo el territorio colombiano' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE MODELACION ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de modelacion</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Que tipo de modelacion HEC-RAS necesita su proyecto?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El tipo de modelo depende del objetivo del estudio: diseño de estructuras (1D), mapa de amenaza
            para POT (2D), seguridad de presa (dam break) o diseño de cimentaciones de puente (HEC-18).
            BIC le asesora sin costo sobre el alcance y la metodología antes de contratar.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>USOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#444', fontSize: 13, lineHeight: 1.6 }}>
                    {t.usos.map(u => <li key={u}>{u}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>NORMA</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {t.norma.map(n => (
                      <span key={n} style={{
                        background: '#e6f7ff', color: '#003B6F', borderRadius: 4,
                        padding: '3px 8px', fontSize: 11, fontWeight: 600,
                      }}>{n}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodologia</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Como construye BIC un modelo HEC-RAS en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde el levantamiento topobatimetrico hasta el informe con firma COPNIA.
            Cada modelo BIC se calibra con eventos historicos, se entrega con todos los archivos
            y cumple los requisitos tecnicos de la CAR, INVIAS, ANLA y el Decreto 1807/2014.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#002A50' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3e0ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>ENTREGABLE</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA INTERMEDIO ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita una modelacion hidraulica HEC-RAS?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta tecnica y economica en menos de 24 horas · Primera consulta sin costo</p>
          </div>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '12px 28px',
              background: '#25D366', color: '#fff', borderRadius: 8,
              fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quien nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Clientes que contratan modelacion HEC-RAS con BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con entidades publicas, empresas privadas y consultores en todo Colombia.
            La modelacion HEC-RAS puede ser el componente central del proyecto o el insumo tecnico
            para un trámite de licencia, un diseño de obra o un estudio de impacto ambiental.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #17A2B8',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal y tecnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige la modelacion hidraulica en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC modela bajo las normas colombianas vigentes. Cada entregable cita la norma aplicable
            y cumple el formato requerido por la CAR, INVIAS, ANLA o la entidad territorial correspondiente.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12,
                }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros estudios hidrologicos e hidraulicos que realiza BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Estudios hidrologicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Estudios de torrencialidad Colombia', href: '/estudios-torrencialidad-colombia' },
              { label: 'Encauzamiento de rios y quebradas', href: '/encauzamiento-rios-colombia' },
              { label: 'Gestion del riesgo hidrico', href: '/gestion-riesgo-hidrico' },
              { label: 'Diseno de canales de riego', href: '/diseno-canal-riego-colombia' },
              { label: 'Ingenieria hidraulica Colombia', href: '/ingenieria-hidraulica-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d5eef9')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f0f9ff')}
              >
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo lo que necesita saber sobre modelacion HEC-RAS en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas tecnicas a las preguntas reales que nos hacen municipios, constructoras,
            interventores e INVIAS antes de contratar la modelacion hidraulica.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌊</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita una modelacion hidraulica<br />HEC-RAS en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el cauce, la longitud del tramo, el objetivo del estudio
            (POT, diseño de puente, dam break, licencia) y la entidad ante la que va a presentar el informe.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC le envía propuesta tecnica y economica en menos de 24 horas · Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none',
              }}
            >
              📱 Cotizar por WhatsApp · +57 302 477 8910
            </a>
            <a
              href="/contacto"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: 'transparent', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}