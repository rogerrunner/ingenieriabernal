import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Estudios Geotécnicos y de Suelos')

const seoConfig = {
  title: 'Estudios Geotécnicos y de Suelos Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Estudios geotécnicos y de suelos para constructoras, municipios y entidades públicas en Colombia. Capacidad portante, estabilidad de taludes, NSR-10 Título H. Especialista UNAL. COPNIA 17202-313228.',
  keywords: [
    'estudios geotécnicos Colombia',
    'estudio de suelos Colombia',
    'capacidad portante suelo',
    'estabilidad de taludes Colombia',
    'NSR-10 Título H',
    'exploración del subsuelo Colombia',
    'ensayos geotécnicos Colombia',
    'estudio geotécnico constructoras',
    'estudio suelos licencia construcción',
    'geotecnia Eje Cafetero',
    'análisis de asentamientos',
    'SPT Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/geotecnia',
}

const INCLUYE = [
  { icon: '🔩', titulo: 'Exploración del subsuelo', desc: 'Programación y supervisión de sondeos de penetración estándar (SPT), apiques, perforaciones con recuperación de muestras inalteradas y ensayos de penetración estática (CPT) según la NSR-10 Título H y el NSR-10 A.10.' },
  { icon: '🧪', titulo: 'Ensayos de laboratorio geotécnico', desc: 'Interpretación de ensayos sobre muestras: clasificación USCS, límites de Atterberg, granulometría, humedad natural, densidad, compresión simple, consolidación y corte directo. Correlaciones empíricas con parámetros de diseño.' },
  { icon: '🏗️', titulo: 'Capacidad portante y diseño de cimentaciones', desc: 'Cálculo de la capacidad portante admisible del suelo. Recomendación del tipo de cimentación (superficial o profunda), presiones de diseño, asentamientos diferenciales y medidas de mejoramiento. Cumplimiento NSR-10 Título H.' },
  { icon: '⛰️', titulo: 'Análisis de estabilidad de taludes', desc: 'Evaluación de la estabilidad de cortes y terraplenes mediante métodos de equilibrio límite (Bishop, Morgenstern-Price, Spencer). Determinación del factor de seguridad estático y seudoestático. Propuesta de obras de estabilización.' },
  { icon: '🌊', titulo: 'Geotecnia para obras hidráulicas', desc: 'Estudios geotécnicos específicos para diques, presas de tierra, canales, defensas fluviales y obras de control de erosión. Análisis de filtraciones, tubificación y estabilidad hidráulica de terraplenes.' },
  { icon: '📋', titulo: 'Informe geotécnico completo', desc: 'Informe técnico con descripción del subsuelo, resultados de ensayos, parámetros de diseño, recomendaciones de cimentación, modelo geotécnico y conclusiones. Firmado por especialista para trámite de licencia de construcción.' },
]

const PARA_QUIEN = [
  { tipo: 'Constructoras y promotores de vivienda', desc: 'Estudio de suelos obligatorio para trámite de licencia de construcción ante la curaduría urbana. Recomendación de cimentación para edificios de hasta 5 pisos y proyectos mayores con NSR-10 Título H.' },
  { tipo: 'Alcaldías y entidades públicas', desc: 'Estudios geotécnicos para diseño de obras de infraestructura: alcantarillados profundos, defensas fluviales, accesos viales y equipamientos municipales sobre suelos blandos o en zonas de ladera.' },
  { tipo: 'Empresas de infraestructura e industria', desc: 'Geotecnia para plantas industriales, bodegas, tanques de almacenamiento, redes de servicios enterradas y cimentaciones de maquinaria pesada o estructuras especiales.' },
  { tipo: 'Interventores y revisores técnicos', desc: 'Revisión de estudios geotécnicos presentados por contratistas. Verificación de la exploración mínima requerida, ensayos realizados y parámetros utilizados en el diseño de cimentaciones.' },
]

export default function ServicioGeotecnia() {
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
            Estudios Geotécnicos y de Suelos<br />
            <span style={{ color: '#17A2B8' }}>para Constructoras, Municipios y Obras en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios geotécnicos y de suelos para proyectos
            de construcción, obras hidráulicas e infraestructura en Colombia. Supervisamos sondeos
            SPT, interpretamos ensayos de laboratorio, calculamos capacidad portante, analizamos
            estabilidad de taludes y recomendamos soluciones de cimentación bajo la NSR-10 Título H.
            Nuestros informes geotécnicos están firmados por especialista con COPNIA vigente y están
            diseñados para superar la revisión técnica de curadurías urbanas, supervisores de obra y
            entidades financiadoras. Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y
            Ambiental (UNAL), integra la geotecnia con la hidráulica fluvial en proyectos donde el
            comportamiento del suelo es crítico: zonas de ladera, suelos blandos y cauces activos.
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
          {['NSR-10 Título H', 'ASTM', 'INVIAS', 'SPT / CPT', 'Bishop / Spencer'].map(t => (
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
          }}>¿Qué incluye el estudio geotécnico?</h2>
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
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos integra la geotecnia con la ingeniería hidráulica y la gestión del riesgo: fundamental para proyectos en zonas de ladera, cauces y amenaza torrencial. COPNIA 17202-313228.' },
              { icon: '🌊', titulo: 'Geotecnia + hidráulica en un solo consultor', desc: 'BIC combina el estudio geotécnico con análisis hidrológico e hidráulico, eliminando inconsistencias entre disciplinas y reduciendo costos de coordinación para el cliente.' },
              { icon: '📜', titulo: 'COPNIA vigente — firma profesional válida', desc: 'Todos los informes geotécnicos firmados por profesional legalmente habilitado. Válido para curadurías, INVÍAS, gobernaciones y cualquier entidad territorial o financiadora.' },
              { icon: '⚡', titulo: 'Propuesta en 24 horas', desc: 'Respuesta directa del director técnico. Planificación de campo coordinada con laboratorios aliados en el Eje Cafetero y otras regiones del país.' },
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

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/riesgo-hidraulico-ciudades-densas" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Riesgo Hidráulico en Ciudades Densas: Estrategias Técnicas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/cambios-normativos-ingenieria-hidraulica-2026" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cambios Normativos en Ingeniería Hidráulica 2026</span>
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
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Modelación HEC-RAS 2D para socavación local y estabilidad de orillas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos complementarios para análisis de filtración y tubificación</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/gestion-riesgo-hidrico" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Gestión del riesgo hídrico en zonas de ladera y torrencialidad</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/interventoria" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Interventoría técnica de obras hidráulicas y civiles en suelos blandos</span>
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
            ¿Su proyecto necesita estudio de suelos?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de obra, el área del terreno y el municipio de ubicación.
            Le enviamos propuesta técnica y económica en menos de 24 horas.
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
const WA_MSG = encodeURIComponent('Hola, necesito un estudio geotécnico o de suelos. ¿Pueden asesorarme sobre el alcance y costo?')

const seoConfig = {
  title: 'Estudios Geotécnicos Colombia — NSR-10, Taludes y Obras Hidráulicas | BIC',
  description: 'BIC realiza estudios geotécnicos y de suelos en Colombia: cimentaciones (NSR-10 Cap. H), estabilidad de taludes y laderas, geotecnia para obras hidráulicas (bocatomas, diques, canales) y caracterización de zonas de riesgo. Cobertura nacional. Cotización en 24 horas.',
  keywords: [
    'estudio geotécnico Colombia',
    'estudio de suelos Colombia',
    'estudio geotécnico para obras hidráulicas',
    'exploración geotécnica Colombia',
    'NSR-10 estudio de suelos',
    'estabilidad de taludes Colombia',
    'geotecnia bocatomas diques Colombia',
    'estudio capacidad portante Colombia',
    'sondeos SPT Colombia',
    'ensayos laboratorio suelos Colombia',
    'estudio geotécnico ladera Colombia',
    'informe geotécnico licencia construcción',
    'caracterización geotécnica riesgo Colombia',
    'geotecnia hidráulica Colombia',
    'estudio suelos NSR-10 Cap H',
    'geotecnia Eje Cafetero Manizales',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/geotecnia',
}

const TIPOS = [
  {
    icon: '🏗️',
    tipo: 'Estudio geotécnico para cimentaciones',
    subtitulo: 'NSR-10 Cap. H — para licencia de construcción y diseño estructural',
    desc: 'El estudio geotécnico para cimentaciones es el documento técnico que establece las características del suelo del predio (estratigrafía, resistencia, compresibilidad, nivel freático) y define el tipo de cimentación adecuado para el proyecto (zapatas aisladas, combinadas o corridas, losa de cimentación, pilotes o pilas de concreto) junto con los parámetros de diseño estructural. BIC ejecuta la exploración del subsuelo (apiques y/o sondeos con ensayo de penetración estándar SPT), toma las muestras para ensayos de laboratorio (granulometría, límites de Atterberg, consolidación, corte directo) y elabora el informe con la caracterización estratigráfica, el análisis de capacidad portante y los asentamientos, firmado por el ingeniero especialista COPNIA. El informe es el requisito para que el ingeniero estructural diseñe la cimentación conforme a la NSR-10 y para tramitar la licencia de construcción.',
    usos: ['Edificios residenciales y comerciales para licencia de construcción', 'Infraestructura pública (colegios, hospitales, edificios municipales)', 'Ampliaciones o rehabilitaciones donde no existe estudio previo', 'Proyectos industriales con cargas de cimentación elevadas'],
    norma: ['NSR-10 Cap. H', 'NTC 1458 (SPT)', 'NTC 3657 (corte directo)'],
  },
  {
    icon: '⛰️',
    tipo: 'Estudio de estabilidad de taludes y laderas',
    subtitulo: 'Para proyectos en ladera, vías y zonas de deslizamiento',
    desc: 'Colombia tiene miles de kilómetros de vías y cientos de municipios en zonas de ladera donde los deslizamientos son el riesgo geológico más frecuente. BIC realiza el estudio de estabilidad de taludes para proyectos que implican cortes o rellenos en ladera, ampliación de vías en terreno inclinado, zonas con historial de movimientos en masa o predios donde la CAR o la Secretaría de Planeación exige concepto geotécnico de estabilidad. El estudio incluye la caracterización geológica y geotécnica del talud, la exploración del subsuelo, los ensayos de laboratorio, el análisis de estabilidad con el método de equilibrio límite (Bishop, Janbu, Morgenstern-Price), el cálculo del factor de seguridad para condiciones estáticas y sísmicas (NSR-10), y la propuesta de medidas de estabilización si el talud es inestable.',
    usos: ['Ampliación de vías en terreno montañoso (cortes y rellenos)', 'Proyectos de construcción en ladera con taludes naturales o artificiales', 'Taludes municipales con historial de deslizamientos activos', 'Estudios de estabilidad para planes de gestión del riesgo (Decreto 1807/2014)'],
    norma: ['NSR-10 Cap. H', 'Decreto 1807/2014', 'Manual INVIAS taludes'],
  },
  {
    icon: '💧',
    tipo: 'Geotecnia para obras hidráulicas',
    subtitulo: 'Bocatomas, diques, canales y presas de tierra',
    desc: 'Las obras hidráulicas — bocatomas, diques de protección contra inundaciones, canales de conducción, presas de tierra y jarillones — tienen requerimientos geotécnicos específicos que van más allá de los estudios de cimentación convencionales. BIC realiza el estudio geotécnico especializado para estas obras: caracterización de los materiales de fundación (suelo y roca del lecho del río, márgenes y cuerpo de la presa), evaluación de la permeabilidad del suelo para el diseño del pantallado impermeable o la pantalla de inyecciones, análisis de la estabilidad del terraplén o dique bajo condiciones de llenado rápido y vaciado rápido, verificación de la capacidad de soporte de los suelos de fundación bajo las cargas hidrostáticas, y diseño de los filtros y drenes de pie del dique. Para bocatomas y estructuras de concreto en cauces, BIC analiza la profundidad de socavación para definir la profundidad mínima de las fundaciones.',
    usos: ['Diseño geotécnico de diques y jarillones de protección contra inundaciones', 'Estudios para cimentación de bocatomas, azudes y estructuras de captación', 'Caracterización del cuerpo de una presa de tierra o un embalse', 'Canales de conducción con taludes de corte o en terraplén'],
    norma: ['NSR-10 Cap. H', 'RAS 2017 (obras hidráulicas)', 'INVIAS Manual Diseño Geométrico'],
  },
  {
    icon: '📋',
    tipo: 'Caracterización geotécnica de zonas de riesgo',
    subtitulo: 'Para municipios, CAR y gestión del riesgo Decreto 1807/2014',
    desc: 'La caracterización geotécnica de zonas de riesgo va más allá del estudio puntual de un predio: abarca la evaluación sistemática de un sector del municipio o de una ladera para determinar el nivel de amenaza por movimientos en masa, definir las medidas de gestión del riesgo y establecer las condiciones de uso del suelo. BIC realiza este tipo de estudios para municipios que necesitan actualizar el componente de gestión del riesgo del POT (Decreto 1807/2014 Art. 5), para sectores con concentración de deslizamientos activos que requieren un programa de intervención correctiva, o para predios que la CAR condiciona a un concepto geotécnico favorable antes de otorgar permisos o licencias. El estudio incluye el mapeo geomorfológico y geológico del sector, la exploración geotécnica representativa, el análisis de estabilidad de los taludes más críticos y la propuesta de medidas de reducción del riesgo.',
    usos: ['Actualización del componente de gestión del riesgo en el POT municipal', 'Sectores con concentración de deslizamientos para priorizar inversión pública', 'Predios condicionados por la CAR a concepto geotécnico favorable', 'Proyectos de reasentamiento en zonas de riesgo no mitigable'],
    norma: ['Decreto 1807/2014', 'Ley 1523/2012', 'SGC Manual Movimientos en Masa'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Reconocimiento de campo y recopilación de información',
    desc: 'El primer paso es la visita de reconocimiento al predio o área de estudio: BIC evalúa las condiciones geológicas y geomorfológicas del terreno (tipo de roca o suelo en superficie, presencia de agua, pendiente, vegetación, señales de inestabilidad previa), revisa la información disponible — planchas del IGAC a escala 1:25.000, mapas geológicos del SGC a escala 1:100.000, imágenes satelitales de alta resolución y estudios geotécnicos previos del sector — y define el plan de exploración del subsuelo más apropiado para el tipo de proyecto y las condiciones del terreno. Una exploración mal diseñada (apiques superficiales en suelo residual profundo, o sondeos escasos en un talud amplio) es la causa más frecuente de errores en los estudios geotécnicos en Colombia.',
    herramientas: ['Planchas IGAC 1:25.000 (topografía y cartografía básica)', 'Mapas geológicos SGC 1:100.000', 'Imagen satelital Google Earth y Sentinel-2', 'Fichas de reconocimiento geomorfológico (metodología SGC)'],
    resultado: 'Plan de exploración definido, caracterización preliminar del terreno, identificación de condiciones geológicas especiales',
  },
  {
    paso: '02',
    titulo: 'Exploración del subsuelo — apiques, sondeos y SPT',
    desc: 'La exploración del subsuelo es la etapa más crítica del estudio geotécnico: los parámetros del diseño dependen directamente de la calidad y representatividad de la exploración. BIC ejecuta la exploración con los métodos y profundidades adecuadas para cada tipo de proyecto: apiques a cielo abierto (hasta 3 m de profundidad) para proyectos de vivienda unifamiliar o estudios superficiales; sondeos con perforadora mecánica más ensayo de penetración estándar (SPT, ASTM D-1586) a profundidades de 6 a 30 m para edificios de varios pisos o proyectos de mayor carga; y ensayos de carga in situ (ensayo de placa de carga, Velane, Presiómetro) cuando el SPT no es el método más adecuado para el tipo de suelo específico. La ubicación y el número de puntos de exploración se diseñan para cubrir el área de influencia de la estructura y detectar la variabilidad espacial del subsuelo.',
    herramientas: ['Apiques a cielo abierto con descripción estratigráfica in situ', 'Perforadora mecánica rotativa con ensayo SPT (ASTM D-1586)', 'Ensayo de carga sobre placa (ASTM D-1194)', 'Permeabilidad in situ (ensayo Lefranc o Slug Test para obras hidráulicas)'],
    resultado: 'Estratigrafía del subsuelo en cada punto de exploración, perfil N-SPT, nivel freático, recuperación de muestras',
  },
  {
    paso: '03',
    titulo: 'Ensayos de laboratorio de mecánica de suelos',
    desc: 'Las muestras obtenidas durante la exploración se llevan al laboratorio de mecánica de suelos para determinar las propiedades físicas, mecánicas e hidráulicas del suelo. BIC programa los ensayos en función de los parámetros que necesita para los análisis de diseño: para cimentaciones, los ensayos básicos son granulometría, límites de Atterberg (plasticidad) y ensayo de corte directo o triaxial (para obtener la cohesión c y el ángulo de fricción φ); para análisis de asentamientos en arcillas, el ensayo de consolidación unidimensional (Cc, Cv, eo); para diques y taludes en suelos finos saturados, el triaxial UU (no consolidado-no drenado) que da la resistencia al corte en condición saturada; y para permeabilidad en obras hidráulicas, el ensayo de permeabilidad en cabeza variable o constante. Los resultados de laboratorio definen los parámetros de resistencia y deformabilidad que se usan en los cálculos de diseño.',
    herramientas: ['Granulometría y límites de Atterberg (INV E-122 a E-126)', 'Corte directo consolidado drenado (ASTM D-3080)', 'Triaxial UU y CU (ASTM D-2850 / D-4767)', 'Consolidación oedométrica (ASTM D-2435) para arcillas'],
    resultado: 'Parámetros geotécnicos de diseño: c, φ, γ, Cc, Cv, k — por estrato y condición de drenaje',
  },
  {
    paso: '04',
    titulo: 'Análisis geotécnico — capacidad portante, estabilidad y asentamientos',
    desc: 'Con los parámetros del laboratorio y la estratigrafía definida, BIC realiza los análisis de diseño específicos para el tipo de proyecto: para cimentaciones, el cálculo de la capacidad portante última y admisible por los métodos de Meyerhof o Hansen (suelos), Terzaghi (cimentación superficial) y correlaciones con el N-SPT (suelos granulares); el cálculo del asentamiento inmediato y por consolidación para el tipo de cimentación propuesto y las cargas del proyecto. Para taludes, el análisis de estabilidad con el método de Bishop Simplificado y Morgenstern-Price usando el software SLIDE (Rocscience): factor de seguridad para condición estática (FS ≥ 1.5) y condición sísmica (kh = 0.2a en zona sísmica colombiana, NSR-10 A.2). Para obras hidráulicas, el análisis de la presión hidrostática, la subpresión y la estabilidad al deslizamiento y al volteo de las estructuras de concreto.',
    herramientas: ['SLIDE (Rocscience — análisis estabilidad de taludes)', 'Métodos Meyerhof/Hansen (capacidad portante cimentaciones)', 'Método Terzaghi (asentamientos por consolidación)', 'NSR-10 Cap. H (verificación sísmica de taludes)'],
    resultado: 'Capacidad portante admisible, factor de seguridad del talud para condición estática y sísmica, asentamientos esperados',
  },
  {
    paso: '05',
    titulo: 'Informe geotécnico con firma COPNIA y recomendaciones de diseño',
    desc: 'El informe geotécnico es el documento técnico que el ingeniero estructural, el ingeniero hidráulico o la curaduría urbana usan para diseñar la cimentación o las obras del proyecto. BIC elabora el informe completo con: descripción del proyecto y su localización, metodología de exploración ejecutada, descripción de los perfiles estratigráficos y el nivel freático, resultados de los ensayos de laboratorio con tablas y gráficas, análisis geotécnico con los resultados de capacidad portante, estabilidad y asentamientos, recomendaciones de diseño (tipo de cimentación, profundidad de desplante, capacidad admisible de diseño, medidas especiales como mejoramiento de suelo o tablestacado), y conclusiones sobre la viabilidad geotécnica del proyecto. El informe se firma con tarjeta profesional COPNIA 17202-313228 CLD del Ing. Rogerio Bernal Ríos para cumplir el requisito de la NSR-10 y la curaduría urbana.',
    herramientas: ['Informe geotécnico completo (firma COPNIA)', 'Planos de localización de exploración y perfil estratigráfico', 'Tablas de ensayos de laboratorio y análisis de resultados', 'Memorias de cálculo de capacidad portante y estabilidad'],
    resultado: 'Informe geotécnico firmado COPNIA con recomendaciones de diseño listo para curaduría, ESP o entidad financiadora',
  },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta un estudio geotécnico en Colombia?',
    a: 'El costo del estudio geotécnico depende del tipo de proyecto, el número y profundidad de los sondeos o apiques requeridos y los ensayos de laboratorio necesarios. Para un edificio residencial de 3 a 5 pisos en suelo conocido (con 2 apiques y ensayos básicos de laboratorio), el estudio completo con informe firmado COPNIA oscila entre $6.000.000 y $14.000.000 COP. Para edificios de mayor altura (6 a 15 pisos, con sondeos SPT de 15-25 m), el rango es $15.000.000 a $35.000.000 COP. Para proyectos de obras hidráulicas o estudios de taludes, el costo varía según el alcance de la exploración. BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo y sin compromiso.',
  },
  {
    q: '¿Cuándo es obligatorio el estudio geotécnico para una licencia de construcción en Colombia?',
    a: 'La NSR-10 Título H establece que todas las edificaciones nuevas en Colombia requieren un estudio de suelos firmado por un ingeniero geotecnista con tarjeta profesional COPNIA. El estudio es obligatorio para cualquier edificación que requiera licencia de construcción, independientemente de su tamaño. En la práctica, para viviendas unifamiliares de 1 piso en zonas con suelo conocido, algunas curadorías aceptan estudios simplificados; pero para edificios de 2 o más pisos, el estudio completo con sondeos y ensayos de laboratorio es indispensable. La curadería urbana no otorga la licencia de construcción sin el informe geotécnico firmado por el especialista, que sirve de base para el diseño de la cimentación por el ingeniero estructural.',
  },
  {
    q: '¿Qué es el ensayo SPT y qué información proporciona para el diseño?',
    a: 'El SPT (Standard Penetration Test, ASTM D-1586) es el ensayo de campo más usado en Colombia para caracterizar el suelo a distintas profundidades dentro del sondeo: consiste en golpear un muestreador estándar con una masa de 63.5 kg dejada caer desde 76 cm de altura, contando el número de golpes necesarios para penetrar 30 cm (valor N-SPT). El valor N tiene correlaciones empíricas con propiedades del suelo ampliamente aceptadas: la densidad relativa de arenas, el ángulo de fricción de suelos granulares, la consistencia de arcillas y el módulo de elasticidad del suelo. En Colombia, el SPT es el ensayo base para los cálculos de capacidad portante por el método de Meyerhof en suelos granulares y para la verificación de la densificación necesaria en zonas con potencial de licuación sísmica (NSR-10 H.5). BIC correlaciona los resultados del SPT con las pruebas de laboratorio para obtener parámetros de diseño confiables.',
  },
  {
    q: '¿Qué diferencia hay entre un estudio geotécnico para edificios y uno para obras hidráulicas?',
    a: 'La diferencia fundamental está en los análisis que se realizan y los parámetros que se necesitan. Para edificios, el foco es la capacidad portante del suelo bajo las cargas de la estructura y los asentamientos esperados que determinarán si es viable una cimentación superficial o si se necesitan pilotes. Para obras hidráulicas, los análisis adicionales son la evaluación de la permeabilidad del suelo (fundamental para diseñar el sistema de impermeabilización de un dique o la pantalla de una presa), la estabilidad del terraplén bajo la presión hidrostática del agua (análisis de llenado y vaciado rápido del embalse), la subpresión bajo la base de las estructuras de concreto expuestas a agua en carga, y la profundidad de socavación del lecho del río que puede dejar sin apoyo la cimentación de la bocatoma o el puente. Los ensayos de laboratorio también son diferentes: para obras hidráulicas se añaden los ensayos de permeabilidad, la curva de compactación Proctor (para el diseño del núcleo impermeable del dique) y el análisis de la gradación de materiales filtrantes.',
  },
  {
    q: '¿Cuántos sondeos se necesitan para un estudio geotécnico?',
    a: 'El número y la distribución de los sondeos depende del tamaño del proyecto, la complejidad geológica del terreno y los requisitos de la NSR-10 Tabla H.3.1. Para un lote pequeño (menor de 500 m²) con una edificación de hasta 3 pisos, 1 a 2 apiques o sondeos SPT suelen ser suficientes si el terreno es homogéneo. Para un edificio de mayor altura (6 pisos o más), la NSR-10 exige al menos 1 sondeo por cada 200 m² de huella de cimentación, con un mínimo de 3 puntos de exploración. Para proyectos de obras hidráulicas (bocatomas, diques), la exploración se diseña en función de la longitud de la obra: al menos 1 sondeo por cada 50-100 m de longitud para diques, y exploración en el eje y las márgenes para bocatomas. BIC diseña el plan de exploración específico para cada proyecto y lo presenta en la propuesta técnica.',
  },
  {
    q: '¿BIC hace estudios geotécnicos para proyectos en ladera en el Eje Cafetero?',
    a: 'Sí, es una de las especialidades principales de BIC. El Eje Cafetero (Caldas, Risaralda, Quindío) tiene una geología particular — suelos residuales volcánicos profundos (hasta 30-50 m), laderas empinadas y alta sismicidad — que requiere experticia específica en geotecnia de la región. Los estudios geotécnicos en ladera del Eje Cafetero presentan desafíos que no existen en terrenos planos: la variabilidad vertical y lateral del suelo residual, la presencia de nivel freático colgado en épocas de lluvia, la influencia de la ceniza volcánica y la necesidad de considerar el efecto sísmico en la estabilidad de los taludes. BIC tiene amplia experiencia en proyectos de cimentación, estabilización de taludes y geotecnia hidráulica en Manizales, Pereira, Armenia y los municipios del Eje Cafetero.',
  },
  {
    q: '¿Qué pasa si el estudio geotécnico revela que el suelo no es apto para el proyecto?',
    a: 'Si los resultados del estudio geotécnico indican que el suelo superficial no tiene la capacidad portante requerida, BIC presenta alternativas técnicas y económicas para que el cliente pueda decidir con información completa: (1) cambio del tipo de cimentación, pasando de cimentación superficial a cimentación profunda (pilotes de concreto colado in situ o micropilotes) que transfiere las cargas a estratos más profundos y competentes; (2) mejoramiento del suelo mediante compactación dinámica, sustitución de suelo blando por material granular compactado, o inyecciones de lechada; (3) modificación del proyecto para reducir las cargas sobre el suelo (cambio de número de pisos, reducción de cargas vivas, redistribución de la estructura). El informe geotécnico de BIC siempre incluye la recomendación técnica más apropiada para cada situación.',
  },
  {
    q: '¿BIC realiza estudios geotécnicos para proyectos financiados con regalías (SGR)?',
    a: 'Sí. Los proyectos de infraestructura pública financiados con recursos del Sistema General de Regalías (acueductos, alcantarillados, obras de protección contra inundaciones, vías) requieren estudios geotécnicos como parte de los estudios y diseños detallados que se incluyen en el expediente técnico del proyecto en el BPIN. BIC elabora los estudios geotécnicos con toda la documentación exigida por el DNP, el MinVivienda (para proyectos de agua y saneamiento) y la NSR-10: informe firmado con tarjeta COPNIA vigente, resultados de laboratorio certificados, planos de localización de la exploración y memorias de cálculo. BIC también puede prestar el servicio de formulación del proyecto en la plataforma MGA-Web integrando el componente geotécnico en el análisis de riesgo del proyecto.',
  },
]

const CLIENTES = [
  { tipo: 'Constructoras y edificadores', desc: 'Estudios geotécnicos para edificios residenciales, comerciales e industriales con informe firmado COPNIA en el formato de cada curaduría urbana en Colombia.' },
  { tipo: 'Promotores de obras en ladera', desc: 'Estudios de estabilidad de taludes para proyectos de construcción en terreno inclinado, con análisis de equilibrio límite estático y sísmico NSR-10.' },
  { tipo: 'Alcaldías con taludes inestables', desc: 'Caracterización geotécnica de sectores con deslizamientos activos para actualizar el POT (Decreto 1807/2014) y priorizar inversiones en estabilización.' },
  { tipo: 'Proyectos hidráulicos (bocatomas, diques, canales)', desc: 'Geotecnia especializada para obras en cauces y márgenes de ríos: permeabilidad, estabilidad del terraplén, socavación y capacidad portante bajo carga hidrostática.' },
  { tipo: 'Municipios con proyectos SGR infraestructura', desc: 'Estudios geotécnicos como componente de los estudios y diseños detallados requeridos para postular proyectos ante el OCAD con recursos de regalías.' },
  { tipo: 'Propietarios de predios en zonas de riesgo', desc: 'Concepto geotécnico técnico para obtener viabilidad de la CAR, la curaduría o la alcaldía cuando el predio está condicionado por amenaza por movimientos en masa.' },
]

const NORMATIVA = [
  { codigo: 'NSR-10 Cap. H', descripcion: 'Norma Sismo Resistente Colombiana Capítulo H — estudios geotécnicos para cimentaciones, análisis de licuación, estabilidad de taludes y diseño de cimentaciones bajo efectos sísmicos' },
  { codigo: 'NTC 1458', descripcion: 'Norma Técnica Colombiana — método de ensayo para el SPT (Ensayo de Penetración Estándar). Estándar de referencia para la ejecución del ensayo en campo' },
  { codigo: 'NTC 3657', descripcion: 'Norma Técnica Colombiana para ensayo de corte directo en suelos bajo condición consolidada drenada (CD) — parámetros de resistencia para análisis de estabilidad' },
  { codigo: 'Decreto 1807/2014', descripcion: 'Reglamenta el Art. 189 del Decreto 1077 — obliga a incorporar estudios de amenaza por movimientos en masa en los POT. Define metodología y requisitos para estudios de riesgo geotécnico' },
  { codigo: 'Manual INVIAS', descripcion: 'Manual de Diseño Geométrico y Drenaje del INVIAS — criterios de exploración y estabilidad geotécnica para vías nacionales, secundarias y proyectos de infraestructura vial' },
  { codigo: 'SGC Manual MM', descripcion: 'Guía Metodológica para Estudios de Amenaza, Vulnerabilidad y Riesgo por Movimientos en Masa (SGC, 2016) — metodología para caracterización geotécnica de zonas de riesgo' },
]

export default function ServicioGeotecnia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #2A1A0A 0%, #4A2E0F 55%, #6B4220 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Geotecnia · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Estudios Geotécnicos y de Suelos en Colombia
          </h1>
          <p style={{ color: '#E8A96A', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Cimentaciones NSR-10, estabilidad de taludes, geotecnia para obras hidráulicas y caracterización de zonas de riesgo
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            BIC Bernal Ingeniería Consultores realiza estudios geotécnicos y de mecánica de suelos
            para constructoras, promotores, municipios y proyectos hidráulicos en todo Colombia.
            Cada estudio incluye exploración del subsuelo, ensayos de laboratorio certificados,
            análisis geotécnico completo e informe firmado por especialista COPNIA vigente.
            Cobertura nacional con experiencia especial en el Eje Cafetero.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar estudio geotécnico</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['NSR-10 Cap. H','SPT ASTM D-1586','SLIDE Rocscience','Decreto 1807/2014','NTC 1458','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(232,169,106,0.15)', color: '#F0C080', border: '1px solid rgba(232,169,106,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#fdf8f0', borderBottom: '1px solid #e8d5b0' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+200', label: 'estudios geotécnicos ejecutados en Colombia' },
              { num: '+15 años', label: 'de experiencia en geotecnia y mecánica de suelos' },
              { num: 'Eje Cafetero', label: 'y cobertura nacional — suelos residuales volcánicos' },
              { num: 'COPNIA', label: 'firma vigente — 17202-313228 CLD activa' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#2A1A0A', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de estudio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de estudio geotécnico necesita su proyecto?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El alcance del estudio geotécnico depende del tipo de proyecto, las cargas de la estructura,
            la complejidad geológica del terreno y los requisitos de la norma aplicable (NSR-10, Decreto 1807, INVIAS).
            BIC hace el diagnóstico inicial sin costo para definir el plan de exploración adecuado.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #8B5C28',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#2A1A0A', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#8B5C28', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#fdf8f0', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#5C3A10', marginBottom: 6 }}>USOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#444', fontSize: 13, lineHeight: 1.6 }}>
                    {t.usos.map(u => <li key={u}>{u}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>NORMA</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {t.norma.map(n => (
                      <span key={n} style={{
                        background: '#f5ede0', color: '#2A1A0A', borderRadius: 4,
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
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo ejecuta BIC un estudio geotécnico
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde el reconocimiento de campo hasta el informe con firma COPNIA.
            Cada estudio BIC cumple la NSR-10 Capítulo H, las normas NTC de mecánica de suelos
            y los requisitos específicos de cada entidad territorial o financiadora.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #8B5C28, #5C3A10)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#e8d5b0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#2A1A0A' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#f5ede0', borderRadius: 8, padding: '10px 14px', border: '1px solid #e8d5b0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#5C3A10', marginBottom: 6 }}>ENTREGABLE</p>
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
      <section style={{ background: 'linear-gradient(90deg, #2A1A0A, #6B4220)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita un estudio geotécnico o de suelos?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo</p>
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
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Clientes que contratan estudios geotécnicos con BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con constructoras, promotores inmobiliarios, municipios, alcaldías y propietarios
            de predios en todo Colombia que necesitan el estudio geotécnico para obtener la licencia
            de construcción, diseñar obras en ladera o gestionar el riesgo por movimientos en masa.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#fdf8f0', border: '1px solid #e8d5b0', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #8B5C28',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#2A1A0A', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal y técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa para estudios geotécnicos en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC ejecuta cada estudio bajo las normas colombianas vigentes. Conocer la norma aplicable
            evita rechazos por parte de las curaderías urbanas, las CAR y las entidades financiadoras.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#2A1A0A', color: '#fff', borderRadius: 6,
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
            Otros servicios técnicos que ofrece BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Estudios de torrencialidad Colombia', href: '/estudios-torrencialidad-colombia' },
              { label: 'Diseño bocatomas y obras hidráulicas', href: '/bocatomas-colombia' },
              { label: 'Diseño alcantarillado y PTAR', href: '/servicios/acueducto-alcantarillado' },
              { label: 'Interventoría técnica de obras', href: '/servicios/interventoria' },
              { label: 'Ingeniería ambiental — permisos CAR', href: '/servicios/ingenieria-ambiental' },
              { label: 'Gestión del riesgo hídrico Colombia', href: '/gestion-riesgo-hidrico' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#fdf8f0', border: '1px solid #e8d5b0',
                borderRadius: 10, padding: '14px 18px', color: '#2A1A0A',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f0e0c0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#fdf8f0')}
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
            Todo lo que necesita saber sobre estudios geotécnicos en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas técnicas a las preguntas reales que nos hacen constructoras, arquitectos
            y propietarios de predios antes de contratar el estudio.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#2A1A0A', lineHeight: 1.4 }}>
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
        background: 'linear-gradient(135deg, #1A0D05 0%, #4A2E0F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>⛰️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita un estudio geotécnico<br />o de suelos en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proyecto, el municipio, el número de pisos o el tipo de obra
            y si tiene información geológica previa del terreno.
          </p>
          <p style={{ color: '#E8A96A', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC le envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo.
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
