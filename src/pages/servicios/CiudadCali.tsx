import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un estudio hidrológico o hidráulico en Cali')

const seoConfig = {
  title: 'Estudios hidrológicos e hidráulicos en Cali | BIC Ingeniería',
  description: 'Estudios hidrológicos e hidráulicos en Cali y Valle del Cauca: modelación río Cauca y río Cali, riesgo hídrico POT, diseño acueductos y alcantarillado, CVC. BIC · COPNIA · UNAL.',
  keywords: [
    'estudios hidrológicos Cali',
    'ingeniería hidráulica Cali',
    'modelación río Cauca Cali',
    'riesgo hídrico Valle del Cauca',
    'diseño acueducto Cali',
    'consultoría hidráulica Cali',
    'HEC-RAS río Cali',
    'CVC permisos hidráulicos',
    'planes parciales Cali',
    'inundación río Cauca',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/cali',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BIC – Bernal Ingeniería Consultores',
  description: 'Estudios hidrológicos e hidráulicos en Cali, Valle del Cauca: río Cauca, río Cali, riesgo hídrico y diseño de infraestructura hídrica.',
  url: 'https://ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rbernalr01@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cali',
    addressRegion: 'Valle del Cauca',
    addressCountry: 'CO',
  },
  areaServed: ['Cali', 'Valle del Cauca', 'Palmira', 'Buenaventura'],
  founder: {
    '@type': 'Person',
    name: 'Rogerio Bernal Ríos',
    jobTitle: 'Director General · Especialista Ingeniería Hidráulica y Ambiental UNAL',
  },
  knowsAbout: [
    'Ingeniería Hidráulica', 'Hidrología', 'Río Cauca', 'Riesgo Hídrico POT',
    'CVC', 'HEC-RAS', 'Acueductos y Alcantarillado', 'Planes Parciales Cali',
  ],
}

const SERVICIOS = [
  {
    nombre: 'Modelación río Cauca y afluentes',
    href: '/servicios/modelacion-hec-ras',
    desc: 'Modelación HEC-RAS 1D/2D de crecientes del río Cauca y afluentes (río Cali, Lilí, Meléndez, Pance) para manchas de inundación, amenaza hídrica y estudios de gestión del riesgo.',
  },
  {
    nombre: 'Riesgo hídrico para POT y planes parciales',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Estudios de amenaza, vulnerabilidad y riesgo hídrico bajo Decreto 1807/2014 para planes parciales en zonas de expansión de Cali y municipios del Valle del Cauca.',
  },
  {
    nombre: 'Diseño acueducto y alcantarillado',
    href: '/servicios/acueducto-alcantarillado',
    desc: 'Diseño de sistemas de agua potable y saneamiento bajo Res. 0330/2017 para municipios y proyectos privados en el Valle del Cauca, coordinando con EMCALI y ESP municipales.',
  },
  {
    nombre: 'Redes hidrosanitarias y NSR-10',
    href: '/servicios/redes-hidrosanitarias',
    desc: 'Diseño de instalaciones hidrosanitarias y sistemas contra incendios NSR-10 para proyectos residenciales, comerciales e industriales en Cali y el norte del Valle del Cauca.',
  },
  {
    nombre: 'Estudios ambientales CVC',
    href: '/servicios/ambiental',
    desc: 'Concesiones de agua, permisos de vertimientos y trámites ambientales ante la Corporación Autónoma Regional del Valle del Cauca (CVC) para proyectos en el departamento.',
  },
  {
    nombre: 'Formulación proyectos regalías (MGA-Web)',
    href: '/servicios/regalias-mga',
    desc: 'Estructuración de proyectos de agua y saneamiento para el SGR en municipios del Valle del Cauca con acceso a regalías o recursos del MVCT.',
  },
]

const PROYECTOS = [
  {
    tipo: 'Inundaciones río Cauca',
    desc: 'La llanura de inundación del río Cauca a su paso por Cali y la zona industrial sur genera demanda permanente de estudios hidráulicos para obras de protección, planes parciales y proyectos de mitigación de riesgo hídrico.',
  },
  {
    tipo: 'Zonas de expansión ladera oeste',
    desc: 'Las laderas occidentales de Cali (Siloé, Terrón Colorado, Altos de Normandía) concentran expansión urbana en zonas con alta amenaza hídrica y torrencial que requieren estudios especializados de riesgo.',
  },
  {
    tipo: 'Distrito agroindustrial norte del Valle',
    desc: 'Proyectos de diseño de riego, drenaje agrícola y sistemas de agua industrial para el corredor agroindustrial Cali–Palmira–Pradera, uno de los más activos de Colombia.',
  },
  {
    tipo: 'Acueductos municipales Valle del Cauca',
    desc: 'Formulación y diseño de sistemas de abastecimiento de agua para municipios del Valle del Cauca con recursos SGR y MVCT, coordinando con la CVC y la Gobernación del Valle.',
  },
]

export default function CiudadCali() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-local-cali'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-local-cali')?.remove() }
  }, [])

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
          <SectionLabel light>Cobertura nacional · Cali, Valle del Cauca</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Estudios hidrológicos e hidráulicos<br />
            <span style={{ color: '#17A2B8' }}>en Cali y Valle del Cauca</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC realiza estudios hidrológicos e hidráulicos en Cali y el Valle del Cauca: modelación
            del río Cauca y sus afluentes, riesgo hídrico para POT y planes parciales, diseño de
            redes de acueducto y alcantarillado, y trámites ante la CVC.
            Director: Rogerio Bernal Ríos (UNAL) · COPNIA 17202-313228.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización en Cali
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Especialidades:</span>
          {['Río Cauca', 'Río Cali', 'CVC', 'HEC-RAS', 'Planes parciales', 'Decreto 1807', 'EMCALI'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios en Cali</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos ejecutamos en Cali y el Valle del Cauca?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.href + s.nombre} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                  padding: 24, borderTop: '3px solid #17A2B8', height: '100%',
                }}>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                    fontSize: 14, marginBottom: 8,
                  }}>{s.nombre}</h3>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6, marginBottom: 12,
                  }}>{s.desc}</p>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 13 }}>
                    Ver servicio →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROYECTOS TÍPICOS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto regional</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Proyectos típicos en Cali y el Valle del Cauca</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PROYECTOS.map(p => (
              <div key={p.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
                border: '1px solid #E2E8F0',
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
      <Section bg="#001A33" style={{ padding: '64px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Por qué BIC en Cali</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Experiencia en ríos de planicie y cuencas andinas del Pacífico</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: '🌊', tit: 'Río Cauca y afluentes', txt: 'Modelación hidráulica de ríos de planicie andina como el Cauca, con gestión de inundaciones, llanuras aluviales y obras de protección ribereña.' },
              { icon: '🎓', tit: 'Especialista UNAL · COPNIA', txt: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental UNAL. Matrícula COPNIA 17202-313228 activa para firma de planos.' },
              { icon: '🏗️', tit: 'Proyectos multidisciplinarios', txt: 'BIC integra hidráulica, geotecnia, ambiental y estructural bajo una sola dirección técnica, simplificando la contratación del cliente.' },
              { icon: '⚡', tit: 'Propuesta en 24 horas', txt: 'Enviamos propuesta técnica y económica en menos de 24 horas para proyectos en Cali, el norte y sur del Valle del Cauca.' },
            ].map(d => (
              <div key={d.tit} style={{
                padding: 24, background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(23,162,184,0.2)', borderRadius: 4,
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 14, marginBottom: 8,
                }}>{d.tit}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.6,
                }}>{d.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Tiene un proyecto hidrológico o hidráulico en Cali?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto (plan parcial, acueducto municipal, obra río Cauca, industria)
            y la ubicación en el Valle del Cauca. Le enviamos propuesta técnica en menos de 24 horas.
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
