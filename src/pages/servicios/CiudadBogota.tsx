import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un proyecto de ingeniería hidráulica en Bogotá')

const seoConfig = {
  title: 'Consultoría hidráulica e hidrológica en Bogotá | BIC Ingeniería',
  description: 'Consultoría hidráulica e hidrológica en Bogotá y Cundinamarca: POT, estudios de inundación río Bogotá, diseño de acueductos, planes parciales y riesgo hídrico. BIC · COPNIA · UNAL.',
  keywords: [
    'consultoría hidráulica Bogotá',
    'ingeniería hidráulica Bogotá',
    'estudios hidrológicos Bogotá',
    'riesgo hídrico POT Bogotá',
    'diseño acueducto Cundinamarca',
    'inundación río Bogotá',
    'planes parciales Bogotá',
    'HEC-RAS Bogotá',
    'consultoría ambiental CAR Cundinamarca',
    'ingeniero hidráulico Bogotá',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/bogota',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BIC – Bernal Ingeniería Consultores',
  description: 'Consultoría en ingeniería hidráulica e hidrológica en Bogotá y Cundinamarca.',
  url: 'https://ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rbernalr01@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogotá',
    addressRegion: 'Cundinamarca',
    addressCountry: 'CO',
  },
  areaServed: ['Bogotá', 'Cundinamarca', 'Sabana de Bogotá'],
  founder: {
    '@type': 'Person',
    name: 'Rogerio Bernal Ríos',
    jobTitle: 'Director General · Especialista Ingeniería Hidráulica y Ambiental UNAL',
  },
  knowsAbout: [
    'Ingeniería Hidráulica', 'Hidrología', 'POT Bogotá', 'Riesgo Hídrico',
    'Planes Parciales', 'Río Bogotá', 'Acueductos y Alcantarillado', 'HEC-RAS',
  ],
}

const SERVICIOS = [
  {
    nombre: 'Riesgo hídrico para POT y planes parciales',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Estudios de amenaza, vulnerabilidad y riesgo hídrico bajo Decreto 1807/2014 para planes parciales y licencias urbanísticas en Bogotá. Zonificación de zonas de inundación.',
  },
  {
    nombre: 'Modelación río Bogotá y afluentes',
    href: '/servicios/modelacion-hec-ras',
    desc: 'Modelación HEC-RAS 1D/2D de crecientes del río Bogotá, Tunjuelo, Salitre, Fucha y Torca para estudios de gestión del riesgo y obras de protección.',
  },
  {
    nombre: 'Diseño acueducto y alcantarillado',
    href: '/servicios/acueducto-alcantarillado',
    desc: 'Diseño de redes de agua potable y saneamiento bajo Res. 0330/2017 y normas EAAB para proyectos en Bogotá y municipios de Cundinamarca.',
  },
  {
    nombre: 'Redes hidrosanitarias y contra incendios',
    href: '/servicios/redes-hidrosanitarias',
    desc: 'Diseño de instalaciones hidrosanitarias y sistemas CI-NSR10 para urbanizaciones, edificios comerciales y bodegas en la Sabana de Bogotá.',
  },
  {
    nombre: 'Formulación proyectos regalías (MGA-Web)',
    href: '/servicios/regalias-mga',
    desc: 'Estructuración de proyectos de agua y saneamiento básico para el SGR en municipios de Cundinamarca.',
  },
  {
    nombre: 'Estudios ambientales CAR Cundinamarca',
    href: '/servicios/ambiental',
    desc: 'Concesiones de agua, permisos de vertimientos y trámites ante la CAR Cundinamarca y la SDA para proyectos en Bogotá y la Sabana.',
  },
]

const PROYECTOS = [
  {
    tipo: 'Planes parciales Bogotá',
    desc: 'Riesgo hídrico obligatorio para planes parciales en zonas de expansión como Usme, Bosa y Fontibón. BIC produce los estudios exigidos por la SDP y el Decreto 1807/2014 para avanzar en aprobación de licencias.',
  },
  {
    tipo: 'Urbanizaciones Sabana Occidente',
    desc: 'Diseño de redes de acueducto y alcantarillado para urbanizaciones en Mosquera, Facatativá, Madrid y Funza, coordinando con las ESP locales y la CAR Cundinamarca.',
  },
  {
    tipo: 'Inundaciones río Bogotá',
    desc: 'Modelación hidráulica de las llanuras de inundación del río Bogotá para estudios POT, obras de encauzamiento y proyectos de mitigación de riesgo en municipios ribereños.',
  },
  {
    tipo: 'Infraestructura vial e industrial',
    desc: 'Estudios hidrológicos e hidráulicos para obras viales, bodegas logísticas y parques industriales en Bogotá y municipios de la Sabana: drenaje pluvial, canales y estructuras de paso.',
  },
]

export default function CiudadBogota() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-local-bogota'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-local-bogota')?.remove() }
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
          <SectionLabel light>Cobertura nacional · Bogotá, Cundinamarca</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Consultoría hidráulica e hidrológica<br />
            <span style={{ color: '#17A2B8' }}>en Bogotá y Cundinamarca</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC apoya proyectos en Bogotá y la Sabana con estudios hidrológicos, modelación del río
            Bogotá y sus afluentes, riesgo hídrico para POT y planes parciales, y diseño de redes
            de acueducto y alcantarillado. Director: Rogerio Bernal Ríos, Especialista en
            Ingeniería Hidráulica y Ambiental (UNAL) · COPNIA 17202-313228.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización en Bogotá
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
          {['POT Bogotá', 'Río Bogotá', 'Planes parciales', 'HEC-RAS', 'CAR Cundinamarca', 'SDA', 'Decreto 1807'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios en Bogotá</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos ejecutamos en Bogotá y Cundinamarca?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
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
          }}>Proyectos típicos en Bogotá y la Sabana</h2>
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
          <SectionLabel light>Por qué BIC en Bogotá</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Consultor nacional con respaldo técnico verificado</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: '🎓', tit: 'Especialista UNAL', txt: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental — Universidad Nacional de Colombia.' },
              { icon: '📋', tit: 'COPNIA 17202-313228', txt: 'Matrícula profesional COPNIA vigente. Firma de planos y memorias de cálculo con respaldo legal en toda Colombia.' },
              { icon: '🌊', tit: 'HEC-RAS y modelación 2D', txt: 'Modelación de ríos y quebradas con HEC-RAS 1D/2D para manchas de inundación, amenaza y planes de gestión del riesgo.' },
              { icon: '⚡', tit: 'Propuesta en 24 horas', txt: 'Enviamos propuesta técnica y económica en menos de 24 horas para proyectos en Bogotá y Cundinamarca.' },
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
            ¿Tiene un proyecto hidráulico en Bogotá?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto (plan parcial, urbanización, acueducto municipal, obra vial)
            y la ubicación. Le enviamos propuesta técnica en menos de 24 horas.
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
