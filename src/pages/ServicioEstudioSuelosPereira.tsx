import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito estudio de suelos o geotecnia en Pereira. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Estudio de Suelos en Pereira | Geotecnia BIC',
  description: 'Estudios geotécnicos para construcción en Pereira y Risaralda. NSR-10 Título H. Sondeos SPT, apiques. BIC, COPNIA vigente. Presupuesto en 24 h.',
  keywords: [
    'estudio de suelos Pereira',
    'geotecnia Pereira',
    'estudio geotécnico Pereira',
    'NSR-10 Pereira',
    'estudio suelos licencia Pereira',
    'sondeos SPT Pereira',
    'capacidad portante Pereira',
    'estudio suelos Risaralda',
    'geotecnia Dosquebradas',
    'ingeniero geotécnico Pereira',
  ],
  canonical: 'https://ingenieriabernal.co/geotecnia-pereira',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Estudio de Suelos y Geotecnia en Pereira',
  description: 'Estudios geotécnicos para construcción en Pereira y Risaralda. NSR-10 Título H. Sondeos SPT, apiques. COPNIA vigente.',
  url: 'https://ingenieriabernal.co/geotecnia-pereira',
  serviceType: 'Estudios Geotécnicos y de Suelos',
  areaServed: ['Pereira', 'Risaralda', 'Dosquebradas', 'Santa Rosa de Cabal', 'Eje Cafetero', 'Colombia'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bernal Ingeniería Consultores — BIC',
    url: 'https://ingenieriabernal.co',
    telephone: '+573024778910',
  },
}

const INCLUYE = [
  {
    icon: '🔩',
    titulo: 'Sondeos SPT y apiques',
    desc: 'Programación y supervisión de sondeos de penetración estándar (SPT), apiques explorativos y perforaciones con recuperación de muestras inalteradas para determinar el perfil geotécnico del subsuelo. Todos los trabajos se ejecutan conforme a la NSR-10 Título H y los criterios del INVIAS para obras de infraestructura en Pereira y Risaralda.',
  },
  {
    icon: '🧪',
    titulo: 'Ensayos de laboratorio geotécnico',
    desc: 'Interpretación de ensayos sobre muestras de suelo: clasificación USCS, límites de Atterberg, granulometría, humedad natural, densidad seca, compresión inconfinada y corte directo. Los resultados alimentan el diseño de cimentaciones y las recomendaciones para el tipo de fundación más adecuado para el proyecto en Pereira.',
  },
  {
    icon: '📐',
    titulo: 'Diseño de cimentaciones',
    desc: 'Recomendaciones de cimentación superficial (zapatas, vigas de amarre, losa de cimentación) o profunda (pilotes, micropilotes) con cálculo de la capacidad portante neta admisible. Verificación del asentamiento tolerable conforme a la NSR-10 E.3 para garantizar la estabilidad estructural de edificaciones en Pereira y Dosquebradas.',
  },
  {
    icon: '⛰️',
    titulo: 'Estabilidad de taludes y ladera',
    desc: 'Análisis de estabilidad de taludes para obras de corte y relleno en Pereira: factores de seguridad estático y pseudoestático con métodos de Bishop o Janbu. Recomendaciones de tratamiento (cunetas, subdrenajes, muros de contención, vegetación) y concepto de riesgo por movimiento en masa para curadurías.',
  },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta un estudio de suelos en Pereira?',
    a: 'El costo de un estudio de suelos en Pereira depende del tipo de obra, el número de sondeos y los ensayos de laboratorio requeridos. Para una vivienda unifamiliar de 1 a 2 pisos, el costo oscila entre $4 y $8 millones COP (apiques + laboratorio básico). Para edificios de 5 o más pisos, el rango es $12 a $30 millones incluyendo SPT y ensayos completos. BIC envía presupuesto en menos de 24 horas.',
  },
  {
    q: '¿Por qué Pereira necesita estudios de suelos especializados?',
    a: 'Pereira se asienta sobre suelos de origen volcánico (cenizas volcánicas del Eje Cafetero) con alta variabilidad lateral, susceptibles a licuefacción en zonas de ladera y con comportamiento complejo bajo cargas dinámicas (sismo). Además, la expansión urbana en laderas del Río Otún y zonas de expansión como el Parque Industrial y el corredor Cerritos genera demanda constante de estudios geotécnicos para licencias de construcción y planes parciales.',
  },
  {
    q: '¿Cuántos sondeos se necesitan para un lote en Pereira?',
    a: 'La NSR-10 Título H establece el mínimo de sondeos según el área del lote y el nivel de complejidad del proyecto. Para lotes menores a 500 m², generalmente se realizan 2 a 3 apiques o sondeos. Para edificaciones de 5 o más pisos, se recomiendan al menos 4 a 6 sondeos SPT distribuidos en la huella del edificio. BIC dimensiona el programa de exploración de acuerdo con el tipo de obra y las exigencias de la curaduría.',
  },
  {
    q: '¿BIC puede hacer el estudio de suelos y el diseño hidrosanitario en el mismo contrato?',
    a: 'Sí. Una de las ventajas de contratar BIC es que en un mismo equipo está disponible la geotecnia, los diseños hidrosanitarios y las memorias hidráulicas que exigen las curadurías y el Amco para licencias en Pereira y el Área Metropolitana. Esto reduce el tiempo de trámite y evita inconsistencias entre estudios de diferentes firmas.',
  },
]

export default function ServicioEstudioSuelosPereira() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-geotecnia-pereira'
    s.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(s)
    return () => { document.getElementById('schema-geotecnia-pereira')?.remove() }
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
          <SectionLabel light>Geotecnia · Pereira · Risaralda</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Estudio de Suelos en Pereira
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Estudios geotécnicos y de suelos para licencia de construcción — NSR-10 Título H
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 28, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores realiza estudios de suelos y geotecnia en Pereira,
            Dosquebradas, Santa Rosa de Cabal y el Área Metropolitana del Centro Occidente (AMCO).
            Estudios para licencia de construcción, planes parciales, obras de infraestructura y
            análisis de estabilidad de taludes. Firma COPNIA 17202-313228 con experiencia verificada
            en el Eje Cafetero desde 2010.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar estudio de suelos</Btn>
            <Btn variant="outline" href="/servicios/geotecnia" dark>Ver servicio nacional</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['NSR-10 H', 'SPT', 'Cimentaciones', 'Taludes', 'AMCO', 'COPNIA'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUYE ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Qué incluye?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Alcance del estudio geotécnico en Pereira
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {INCLUYE.map(s => (
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

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>
            Estudio de suelos en Pereira — lo que más preguntan
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
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
            Servicio nacional de geotecnia
          </p>
          <a href="/servicios/geotecnia" style={{
            display: 'inline-block', background: '#fff', border: '1px solid #b3d4e8',
            borderRadius: 8, padding: '14px 20px', color: '#003B6F',
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
          }}>
            Ver estudios geotécnicos Colombia — todas las regiones →
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>⛰️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita estudio de suelos<br />en Pereira o Risaralda?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Indíquenos el tipo de obra, la dirección del lote y el número de pisos proyectado.
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
              📱 Propuesta en 24 h — sin costo
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
