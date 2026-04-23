import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero información sobre los estudios técnicos para tramitar licencia de urbanismo en Colombia')

const seoConfig = {
  title: 'Licencia de Urbanismo Colombia: Estudios Técnicos Requeridos | BIC',
  description: 'BIC prepara todos los estudios técnicos para tramitar su licencia de urbanismo en Colombia: hidrosanitario, riesgo hídrico Decreto 1807, acueducto y alcantarillado. Urbanizaciones residenciales, comerciales e industriales. Cotice hoy.',
  keywords: [
    'licencia de urbanismo Colombia',
    'trámite licencia urbanismo',
    'estudios técnicos urbanización Colombia',
    'qué necesito para urbanizar un terreno Colombia',
    'permisos para hacer una urbanización Colombia',
    'requisitos licencia urbanística',
    'diseño hidrosanitario urbanización',
    'acueducto alcantarillado urbanización Colombia',
    'estudio riesgo hídrico plan parcial',
    'licencia de parcelación Colombia',
    'cómo urbanizar un lote Colombia',
    'estudios para urbanizar Colombia',
    'plan parcial licencia urbanismo',
    'decreto 1807 urbanización',
    'ingeniero para urbanización Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/licencia-de-urbanismo',
}

const DIFERENCIAS = [
  {
    tipo: 'Licencia de Urbanismo',
    desc: 'Autoriza desarrollar el suelo: abrir vías, instalar redes de servicios públicos, lotear el terreno. Se tramita ANTES de construir las edificaciones. Es la primera licencia que necesita todo urbanizador o promotor inmobiliario.',
    ejemplos: ['Urbanización residencial nueva', 'Parque industrial o logístico', 'Centro comercial en lote virgen', 'Plan parcial de desarrollo'],
    color: '#17A2B8',
  },
  {
    tipo: 'Licencia de Construcción',
    desc: 'Autoriza edificar sobre predios ya urbanizados o en lotes individuales. Se tramita para casas, apartamentos, bodegas y edificios en zonas donde ya existen servicios públicos y vías habilitadas.',
    ejemplos: ['Casa o edificio de apartamentos', 'Bodega en zona industrial', 'Local comercial', 'Ampliación de edificio existente'],
    color: '#6c757d',
  },
]

const ESTUDIOS_REQUERIDOS = [
  {
    icon: '💧',
    titulo: 'Diseño de Redes Hidrosanitarias de Urbanización',
    obligatorio: true,
    desc: 'Red de acueducto y alcantarillado sanitario y pluvial para la totalidad del área a urbanizar. Incluye diseño de colectores, pozos de inspección, puntos de conexión a la red pública y memorias de cálculo conforme a la Resolución 0330/2017 y el RAS 2017. Entregable obligatorio para la curaduría o la Secretaría de Planeación.',
  },
  {
    icon: '⚠️',
    titulo: 'Estudio de Amenaza y Riesgo Hídrico — Decreto 1807/2014',
    obligatorio: true,
    desc: 'Obligatorio cuando el predio o parte de él está en zona de amenaza media o alta por inundación o avenidas torrenciales según el POT municipal. BIC realiza la modelación HEC-RAS 2D con mapas de amenaza para períodos de retorno de 10, 25, 50 y 100 años. Sin este estudio la curaduría no expide la licencia en terrenos con restricción hídrica.',
  },
  {
    icon: '🌿',
    titulo: 'Estudio Ambiental y Permiso ante la CAR',
    obligatorio: false,
    desc: 'Para urbanizaciones que impliquen intervención de rondas hídricas, cuerpos de agua o bosques protectores se requiere concepto o permiso de la Corporación Autónoma Regional (CAR). BIC gestiona el trámite ambiental ante Corpocaldas, CARDER, CAR Cundinamarca, Corantioquia u otras CAR según la región del proyecto.',
  },
  {
    icon: '📐',
    titulo: 'Topografía y Levantamiento Planimétrico',
    obligatorio: true,
    desc: 'Levantamiento topográfico del predio a escala adecuada para el loteo y diseño de vías internas. Georeferenciación en MAGNA-SIRGAS. Modelo Digital de Terreno (MDT) para diseño hidráulico y perfil de vías. BIC realiza levantamientos convencionales y con dron para predios de gran extensión.',
  },
  {
    icon: '🔧',
    titulo: 'Diseño de Acueducto y Alcantarillado — Conexión a Redes Públicas',
    obligatorio: true,
    desc: 'Memorias de cálculo hidráulico para los sistemas de agua potable y saneamiento conforme al RAS 2017 y Resolución 0330/2017. Diseño de la conexión a la red existente, dimensionamiento de tuberías, presiones y capacidad del sistema. Requisito de la empresa prestadora para otorgar la viabilidad de servicios públicos.',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño de Pavimentos y Drenaje Vial',
    obligatorio: false,
    desc: 'Para urbanizaciones con vías internas: diseño de estructura de pavimento, cunetas, sumideros y drenaje pluvial de la vía. BIC coordina con el ingeniero de vías para integrar el drenaje vial al sistema pluvial de la urbanización.',
  },
]

const TIPOS_URBANIZACION = [
  {
    tipo: 'Urbanización Residencial',
    icon: '🏘️',
    desc: 'Condominios, conjuntos cerrados, barrios de vivienda de interés social (VIS) o no VIS. Requiere diseño de redes de servicios públicos, zonas comunes, parques y vías internas. BIC diseña las redes hidrosanitarias y elabora los estudios de riesgo hídrico para el plan parcial o la licencia de urbanismo directa.',
    terminos: ['conjunto residencial', 'urbanización casas', 'condominio campestre', 'VIS urbanismo'],
  },
  {
    tipo: 'Parque Industrial y Logístico',
    icon: '🏭',
    desc: 'Zonas francas, parques de bodegas, centros logísticos y distritos industriales. Requieren diseño hidrosanitario industrial, sistemas contra incendios NSR-10, drenaje pluvial de grandes superficies impermeables y estudio de riesgo si hay corrientes de agua cerca. BIC tiene experiencia en proyectos como la Zona Industrial de Santa Marta.',
    terminos: ['parque industrial Colombia', 'bodega logística diseño', 'zona franca Colombia'],
  },
  {
    tipo: 'Desarrollo Comercial y de Servicios',
    icon: '🏬',
    desc: 'Centros comerciales, plazas de mercado, sedes empresariales y parques de oficinas en desarrollo greenfield. BIC diseñó el sistema hidrosanitario y contra incendios del Makarí Mall en Dosquebradas. La experiencia en proyectos comerciales de gran formato es verificable.',
    terminos: ['centro comercial diseño Colombia', 'mall Colombia ingeniería'],
  },
  {
    tipo: 'Macroproyectos y Planes Parciales',
    icon: '🗺️',
    desc: 'Grandes desarrollos que requieren plan parcial aprobado antes de la licencia de urbanismo. El plan parcial exige estudio de riesgo hídrico, diseño de redes de servicios públicos y estudio ambiental. BIC elabora el componente hidráulico e hídrico del plan parcial con toda la documentación exigida por la Secretaría de Planeación y la curaduría.',
    terminos: ['plan parcial Colombia ingeniería', 'macroproyecto urbanístico'],
  },
]

const PROCESO = [
  { paso: '01', etapa: 'Consulta de norma urbanística', desc: 'Verificar el uso del suelo, tratamiento urbanístico, índices de construcción y posibles restricciones por riesgo o ambiental. BIC revisa el POT y los planos de amenaza antes de comprometer cualquier inversión.' },
  { paso: '02', etapa: 'Viabilidad de servicios públicos', desc: 'Solicitar a las empresas prestadoras (acueducto, energía, gas) el certificado de disponibilidad de servicios. Es la condición previa para radicar la licencia de urbanismo. BIC elabora los diseños que soportan esta solicitud.' },
  { paso: '03', etapa: 'Estudios técnicos de ingeniería', desc: 'BIC elabora el diseño hidrosanitario de la urbanización, el estudio de riesgo hídrico si aplica, la topografía y los demás estudios técnicos requeridos según el municipio y el tipo de proyecto.' },
  { paso: '04', etapa: 'Radicación ante curaduría o planeación', desc: 'Con los estudios técnicos completos y los documentos legales y urbanísticos, se radica la solicitud de licencia. La curaduría o la Secretaría de Planeación tiene plazos legales para resolver.' },
  { paso: '05', etapa: 'Respuesta a observaciones', desc: 'Si la curaduría formula observaciones técnicas a los diseños, BIC las atiende y ajusta los documentos hasta la aprobación de la licencia.' },
]

const FAQ = [
  {
    q: '¿Cuál es la diferencia entre licencia de urbanismo y licencia de construcción?',
    a: 'La licencia de urbanismo autoriza desarrollar el suelo: abrir vías, instalar redes de servicios públicos, parcelar y lotear. Es la primera licencia que necesita un urbanizador o promotor. La licencia de construcción autoriza edificar sobre predios ya urbanizados. Si quiere construir una urbanización de casas, primero necesita la licencia de urbanismo para el desarrollo del terreno y luego la licencia de construcción para cada edificación.',
  },
  {
    q: '¿Qué estudios técnicos exige la curaduría para la licencia de urbanismo?',
    a: 'Varía según el municipio y el tamaño del proyecto, pero los más frecuentes son: diseño de redes hidrosanitarias (acueducto, alcantarillado sanitario y pluvial) conforme al RAS 2017 y Resolución 0330/2017; estudio de amenaza y riesgo hídrico cuando el predio está en zona de amenaza media o alta (Decreto 1807/2014); topografía y levantamiento planimétrico; y concepto o permiso de la CAR cuando hay intervención de rondas o cuerpos de agua. BIC elabora todos estos documentos.',
  },
  {
    q: '¿Cuándo es obligatorio el estudio de riesgo hídrico para urbanizar?',
    a: 'El Decreto 1807/2014 — incorporado al Decreto 1077/2015 — exige el estudio detallado de amenaza y riesgo cuando el predio o parte de él está catalogado como amenaza media o alta en el mapa de amenaza hídrica del POT municipal. Cualquier urbanización cerca de quebradas, ríos, canales o en zonas de ladera debe verificar si su predio tiene restricción hídrica. BIC hace esta consulta gratuitamente y si se requiere el estudio lo elabora con modelación HEC-RAS 2D.',
  },
  {
    q: '¿BIC puede hacer el diseño hidrosanitario para un plan parcial grande?',
    a: 'Sí. BIC ha participado en el componente hidráulico de planes parciales y macroproyectos en el Eje Cafetero y otras regiones. El plan parcial requiere el diseño de las redes de servicios públicos del área total, el estudio de riesgo hídrico para el componente de gestión del riesgo del plan y la memoria de cálculo con la estimación de demandas. BIC entrega todos estos documentos con firma COPNIA vigente.',
  },
  {
    q: '¿Cuánto cuesta el diseño hidrosanitario de una urbanización?',
    a: 'El costo depende de la extensión del área, el número de lotes, la complejidad de las redes y la distancia a las redes públicas existentes. Para una urbanización residencial de 30–80 lotes, el diseño de redes hidrosanitarias puede oscilar entre $12.000.000 y $35.000.000 COP. Para parques industriales o desarrollos de mayor escala el costo es proporcional al área y complejidad. BIC envía cotización detallada en menos de 24 horas.',
  },
  {
    q: '¿BIC trabaja en todo Colombia o solo en el Eje Cafetero?',
    a: 'BIC tiene base en Manizales pero opera en todo el territorio nacional y en Ecuador y México. Ha ejecutado proyectos en Caldas, Risaralda, Boyacá, Cundinamarca y Magdalena. Para proyectos fuera del Eje Cafetero, BIC se desplaza según el alcance del estudio o, cuando el proyecto lo permite, trabaja con información remota (datos IDEAM, imágenes satelitales, LiDAR) y visita puntual de campo.',
  },
]

export default function LicenciaUrbanismo() {
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
          <SectionLabel light>Urbanizaciones · Planes Parciales · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Licencia de Urbanismo en Colombia:<br />
            <span style={{ color: '#17A2B8' }}>Estudios Técnicos de Ingeniería para su Proyecto</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.75, marginBottom: 32, maxWidth: 740 }}>
            BIC Bernal Ingeniería Consultores elabora los estudios técnicos que exigen las curadurías y secretarías de
            planeación para expedir la licencia de urbanismo en Colombia: diseño de redes hidrosanitarias, estudio de
            riesgo hídrico (Decreto 1807/2014), topografía y acompañamiento ambiental ante la CAR.
            Urbanizaciones residenciales, comerciales, industriales y planes parciales en todo el territorio nacional.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Solicitar cotización</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
            {['Resolución 0330/2017','RAS 2017','Decreto 1807/2014','NSR-10','Ley 1523/2012','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIA CLAVE ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Contexto normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Licencia de urbanismo vs. licencia de construcción: ¿cuál necesita?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Son dos actos administrativos distintos. Confundirlos genera pérdidas de tiempo y dinero.
            La licencia de urbanismo es siempre la primera en proyectos de desarrollo de suelo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {DIFERENCIAS.map(d => (
              <div key={d.tipo} style={{
                background: '#fff', border: `2px solid ${d.color}`,
                borderRadius: 12, padding: 28,
              }}>
                <h3 style={{ color: d.color, fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{d.tipo}</h3>
                <p style={{ color: '#444', lineHeight: 1.7, fontSize: 15, marginBottom: 16 }}>{d.desc}</p>
                <div style={{ fontSize: 13, color: '#666' }}>
                  <strong>Ejemplos:</strong>
                  <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                    {d.ejemplos.map(e => <li key={e}>{e}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ESTUDIOS REQUERIDOS ── */}
      <Section>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Ingeniería requerida</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            ¿Qué estudios técnicos exige la licencia de urbanismo?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Los requisitos varían por municipio y por el tipo de proyecto. BIC elabora todos los documentos técnicos de ingeniería
            bajo un solo contrato — el urbanizador no necesita coordinar múltiples firmas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {ESTUDIOS_REQUERIDOS.map(e => (
              <div key={e.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0',
                borderLeft: `4px solid ${e.obligatorio ? '#17A2B8' : '#adb5bd'}`,
                borderRadius: 10, padding: 24,
                display: 'grid', gridTemplateColumns: '48px 1fr', gap: 16, alignItems: 'start',
              }}>
                <div style={{ fontSize: 28, lineHeight: 1 }}>{e.icon}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <h3 style={{ fontWeight: 700, fontSize: 16, margin: 0 }}>{e.titulo}</h3>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20,
                      background: e.obligatorio ? 'rgba(23,162,184,0.12)' : 'rgba(108,117,125,0.12)',
                      color: e.obligatorio ? '#17A2B8' : '#6c757d',
                    }}>{e.obligatorio ? 'Frecuentemente obligatorio' : 'Según proyecto'}</span>
                  </div>
                  <p style={{ color: '#555', lineHeight: 1.7, fontSize: 14, margin: 0 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TIPOS DE URBANIZACIÓN ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de proyecto</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            BIC trabaja con todos los tipos de desarrollo urbanístico
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {TIPOS_URBANIZACION.map(t => (
              <div key={t.tipo} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10 }}>{t.tipo}</h3>
                <p style={{ color: '#555', lineHeight: 1.7, fontSize: 14, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {t.terminos.map(term => (
                    <span key={term} style={{ fontSize: 11, background: '#f0f9ff', color: '#17A2B8', padding: '2px 8px', borderRadius: 20 }}>{term}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cómo funciona</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            Proceso: de la compra del terreno a la licencia aprobada
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((p, i) => (
              <div key={p.paso} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20, position: 'relative', paddingBottom: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 13,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{p.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#e2e8f0', marginTop: 8, minHeight: 24 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{p.etapa}</h3>
                  <p style={{ color: '#555', lineHeight: 1.7, fontSize: 14 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            FAQ — Licencia de urbanismo en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 10, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50' }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #002A50, #004F96)',
        padding: '64px 24px', textAlign: 'center',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Va a desarrollar un predio y necesita la licencia de urbanismo?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
            Cuéntenos la ubicación y el tipo de proyecto. BIC le indica qué estudios necesita y
            le envía una propuesta técnica y económica en menos de 24 horas.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '14px 32px',
              background: '#25D366', color: '#fff',
              borderRadius: 8, fontWeight: 700, fontSize: 16,
              textDecoration: 'none',
            }}
          >
            📱 Chatear por WhatsApp · +57 302 477 8910
          </a>
        </div>
      </section>
    </>
  )
}
