import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito modelación hidráulica en el Putumayo. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Modelación Hidráulica en Putumayo | BIC Colombia',
  description: 'Modelación HEC-RAS 1D/2D de quebradas y ríos en Putumayo y Caquetá. Decreto 1807/2014. Inundaciones, espolones, Mocoa. BIC COPNIA. Cotice ya.',
  keywords: [
    'modelación hidráulica Putumayo',
    'HEC-RAS Putumayo',
    'estudio inundación Putumayo',
    'ingeniería hidráulica Putumayo',
    'modelación hidráulica Mocoa',
    'riesgo hídrico Putumayo',
    'río Putumayo modelación',
    'Decreto 1807 Putumayo',
    'HEC-RAS 2D Caquetá',
    'consultoría hidráulica Putumayo',
  ],
  canonical: 'https://ingenieriabernal.co/modelacion-hidraulica-putumayo',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Modelación Hidráulica en el Putumayo',
  description: 'Modelación HEC-RAS 1D/2D para quebradas y ríos en Putumayo y Caquetá. Decreto 1807/2014, inundaciones y riesgo hídrico.',
  url: 'https://ingenieriabernal.co/modelacion-hidraulica-putumayo',
  serviceType: 'Modelación Hidráulica',
  areaServed: ['Putumayo', 'Caquetá', 'Mocoa', 'Colombia'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bernal Ingeniería Consultores — BIC',
    url: 'https://ingenieriabernal.co',
    telephone: '+573024778910',
  },
}

const SERVICIOS = [
  {
    icon: '🌊',
    titulo: 'Modelación HEC-RAS 1D/2D',
    desc: 'Modelación hidráulica de ríos y quebradas del Putumayo con HEC-RAS versión 6.x. Análisis de lámina de agua en perfil longitudinal (1D) y simulación bidimensional de llanuras de inundación (2D) para zonificación de amenaza hídrica conforme al Decreto 1807/2014.',
  },
  {
    icon: '📍',
    titulo: 'Estudio de inundabilidad para POT',
    desc: 'Elaboración del estudio de amenaza, vulnerabilidad y riesgo por inundación para planes de ordenamiento territorial (POT) y planes parciales en municipios de Putumayo. Mapas de zonificación de inundación en zonas de amenaza alta, media y baja para curadurías y CAR.',
  },
  {
    icon: '⚙️',
    titulo: 'Diseño de obras de encauzamiento',
    desc: 'Diseño de espolones, muros de encauzamiento, bermas y obras de protección de orillas para ríos y quebradas del Putumayo. Modelación con HEC-RAS para verificar la eficacia hidráulica del diseño antes de la construcción y reducir el riesgo de socavación.',
  },
  {
    icon: '📋',
    titulo: 'Concepto de riesgo hídrico Decreto 1807',
    desc: 'Expedición de conceptos de riesgo hídrico para trámites de licencia de construcción, urbanismo y subdivisión predial en municipios del Putumayo y Caquetá. El concepto cumple los requisitos del Decreto 1807/2014 y la normativa de cada curaduría urbana.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Recopilación de información hidrológica e hidráulica',
    desc: 'Revisión de información del IDEAM (estaciones hidrológicas, caudales máximos, curvas IDF), imágenes satelitales (SRTM, Copernicus DEM), ortofotografías y cartografía de las fuentes hídricas en el área del proyecto en Putumayo o Caquetá.',
  },
  {
    paso: '02',
    titulo: 'Estudio hidrológico de crecientes',
    desc: 'Análisis de frecuencias hidrológicas para periodos de retorno de 2 a 500 años con el método estadístico adecuado (Gumbel, Log-Pearson III). Estimación del hidrograma de diseño con HEC-HMS o el método racional modificado para cuencas pequeñas.',
  },
  {
    paso: '03',
    titulo: 'Modelación hidráulica y mapeo de inundación',
    desc: 'Construcción del modelo HEC-RAS con la geometría extraída del MDT, calibración del coeficiente de Manning y simulación para periodos de retorno de 2, 10, 50, 100 y 500 años. Exportación de mapas de inundación en ArcGIS o QGIS para entrega a la entidad.',
  },
]

const FAQ = [
  {
    q: '¿Qué información se necesita para modelar un río en Putumayo?',
    a: 'Para iniciar la modelación hidráulica en Putumayo se necesita: modelo digital del terreno (MDT o LiDAR si está disponible), datos hidrológicos de la estación más cercana del IDEAM, información topográfica de la sección transversal del cauce y los datos del proyecto que genera el requerimiento (tipo de obra, trámite ambiental o urbanístico). BIC gestiona toda la información disponible de fuentes oficiales sin costo adicional.',
  },
  {
    q: '¿Cuánto cuesta una modelación HEC-RAS en el Putumayo?',
    a: 'El costo depende de la longitud del tramo a modelar, si se requiere modelo 1D, 2D o acoplado, y la escala del MDT disponible. Para un concepto de riesgo hídrico para licencia de construcción en un lote urbano, el costo oscila entre $8 y $18 millones COP. Para estudios de inundabilidad para POT municipal, el rango es $25 a $60 millones. BIC envía propuesta en menos de 24 horas.',
  },
  {
    q: '¿BIC puede desplazarse al Putumayo para el proyecto?',
    a: 'Sí. BIC tiene base en Manizales y opera en todo el territorio colombiano, incluyendo Putumayo, Mocoa, Puerto Asís, Valle del Guamuez y San Miguel. Para proyectos que requieren trabajo de campo (levantamiento topográfico de cauces, aforo de caudales), BIC coordina el desplazamiento con el cliente y lo incluye en la propuesta económica.',
  },
]

export default function ServicioModelacionHidraulicaPutumayo() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-modelacion-putumayo'
    s.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(s)
    return () => { document.getElementById('schema-modelacion-putumayo')?.remove() }
  }, [])

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
          <SectionLabel light>Ingeniería hidráulica · Putumayo</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Modelación Hidráulica en el Putumayo
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            HEC-RAS 1D/2D para ríos, quebradas e inundaciones en Putumayo y Caquetá
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 28, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores realiza modelación hidráulica para el departamento del Putumayo y Caquetá:
            estudios de inundabilidad para POT, conceptos de riesgo hídrico para licencias de construcción,
            diseño de obras de protección de orillas y formulación de proyectos de encauzamiento.
            Toda la modelación cumple el Decreto 1807/2014 y los requerimientos de las CAR regionales
            (Corpoamazonía). COPNIA 17202-313228 vigente.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar modelación hidráulica</Btn>
            <Btn variant="outline" href="/modelacion-hidraulica-colombia" dark>Ver servicio nacional</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['HEC-RAS 1D/2D', 'Decreto 1807', 'Corpoamazonía', 'POT', 'Riesgo hídrico', 'COPNIA'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios en Putumayo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            ¿Qué incluye la modelación hidráulica en Putumayo?
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: 24, borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 8 }}>{s.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>
            Cómo trabajamos en proyectos hidráulicos del Putumayo
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {PROCESO.map((p, i) => (
              <div key={p.paso} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                  color: '#fff', fontWeight: 900, fontSize: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>{p.paso}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 8 }}>{p.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>
            Modelación hidráulica en Putumayo — preguntas comunes
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TAMBIÉN DISPONIBLE EN ── */}
      <Section style={{ background: '#eef6fb' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 14 }}>
            Servicio nacional de modelación hidráulica
          </p>
          <a href="/modelacion-hidraulica-colombia" style={{
            display: 'inline-block', background: '#fff', border: '1px solid #b3d4e8',
            borderRadius: 8, padding: '14px 20px', color: '#003B6F',
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
          }}>
            Ver modelación hidráulica Colombia — todas las regiones →
          </a>
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
            ¿Necesita modelación hidráulica<br />en el Putumayo?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Cuéntenos el río o quebrada, el municipio y el trámite que requiere.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none',
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
