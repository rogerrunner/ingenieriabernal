import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar estudios hidráulicos en Bucaramanga')

const seoConfig = {
  title: 'Estudios hidráulicos en Bucaramanga | BIC Ingeniería',
  description: 'Estudios hidráulicos en Bucaramanga y Santander: cañones, taludes, gestión del riesgo CDMB, diseño acueductos, planes parciales Área Metropolitana. BIC · COPNIA · UNAL.',
  keywords: [
    'estudios hidráulicos Bucaramanga',
    'ingeniería hidráulica Bucaramanga',
    'estudios hidrológicos Santander',
    'cañones Bucaramanga riesgo',
    'taludes Bucaramanga geotecnia',
    'CDMB permisos ambientales',
    'diseño acueducto Santander',
    'riesgo hídrico Área Metropolitana Bucaramanga',
    'HEC-RAS Bucaramanga',
    'planes parciales Floridablanca',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/bucaramanga',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BIC – Bernal Ingeniería Consultores',
  description: 'Estudios hidráulicos en Bucaramanga, Santander y el Área Metropolitana: cañones, taludes, riesgo hídrico CDMB y diseño de infraestructura hídrica.',
  url: 'https://ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rbernalr01@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bucaramanga',
    addressRegion: 'Santander',
    addressCountry: 'CO',
  },
  areaServed: ['Bucaramanga', 'Santander', 'Floridablanca', 'Girón', 'Piedecuesta'],
  founder: {
    '@type': 'Person',
    name: 'Rogerio Bernal Ríos',
    jobTitle: 'Director General · Especialista Ingeniería Hidráulica y Ambiental UNAL',
  },
  knowsAbout: [
    'Ingeniería Hidráulica', 'Hidrología', 'Cañones Bucaramanga', 'Estabilidad Taludes',
    'CDMB', 'Riesgo Hídrico', 'HEC-RAS', 'Acueductos y Alcantarillado', 'Planes Parciales',
  ],
}

const SERVICIOS = [
  {
    nombre: 'Riesgo hídrico cañones y quebradas',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Estudios de amenaza hídrica y torrencial en los cañones característicos del Área Metropolitana de Bucaramanga — incluyendo el cañón del río de Oro y quebradas de Floridablanca, bajo Decreto 1807/2014.',
  },
  {
    nombre: 'Estabilidad de taludes y geotecnia',
    href: '/servicios/geotecnia',
    desc: 'Estudios geotécnicos e hidráulicos para la estabilidad de taludes en el cerro el Santísimo y laderas del AMB. Análisis de filtración, drenaje subterráneo y medidas de mitigación de riesgo.',
  },
  {
    nombre: 'Modelación HEC-RAS ríos de Santander',
    href: '/servicios/modelacion-hec-ras',
    desc: 'Modelación hidráulica 1D/2D de crecientes del río de Oro, Suratá, Umpalá y quebradas del Área Metropolitana para manchas de inundación, amenaza hídrica y obras de protección.',
  },
  {
    nombre: 'Diseño acueducto y alcantarillado',
    href: '/servicios/acueducto-alcantarillado',
    desc: 'Diseño de sistemas de agua potable y saneamiento bajo Res. 0330/2017 para municipios y proyectos privados en Santander, coordinando con EMPAS Bucaramanga y ESP municipales.',
  },
  {
    nombre: 'Redes hidrosanitarias y NSR-10',
    href: '/servicios/redes-hidrosanitarias',
    desc: 'Diseño de instalaciones hidrosanitarias y sistemas contra incendios NSR-10 para edificios residenciales, comerciales e industriales en Bucaramanga y el Área Metropolitana.',
  },
  {
    nombre: 'Estudios ambientales CDMB / CAS',
    href: '/servicios/ambiental',
    desc: 'Concesiones de agua, permisos de vertimientos y trámites ante la CDMB y la CAS para proyectos en Bucaramanga, el Área Metropolitana y municipios de Santander.',
  },
]

const PROYECTOS = [
  {
    tipo: 'Cañones y escarpes del Área Metropolitana',
    desc: 'El AMB está rodeado de cañones pronunciados (río de Oro, quebrada La Iglesia, sector Malpaso) que generan amenaza torrencial e hídrica sobre la expansión urbana. BIC modela crecientes y produce estudios de riesgo para planes parciales y licencias.',
  },
  {
    tipo: 'Cerro el Santísimo y laderas',
    desc: 'El Cerro el Santísimo y las laderas orientales del AMB concentran proyectos residenciales en zonas de alta pendiente, donde los estudios geotécnicos e hidráulicos son obligatorios antes de cualquier licencia de construcción.',
  },
  {
    tipo: 'Planes parciales Floridablanca y Piedecuesta',
    desc: 'Floridablanca (municipio mejor evaluado de Colombia con 71 puntos según el DNP 2025) y Piedecuesta concentran la mayor expansión urbana del AMB. Cada plan parcial requiere estudio de riesgo hídrico bajo Decreto 1807/2014.',
  },
  {
    tipo: 'Acueductos y saneamiento Santander',
    desc: 'Formulación y diseño de sistemas de abastecimiento para municipios de Santander con recursos SGR y MVCT: captación en quebradas de la serranía de los Yarigüíes, líneas de aducción y plantas de tratamiento compactas.',
  },
]

export default function CiudadBucaramanga() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-local-bucaramanga'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-local-bucaramanga')?.remove() }
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
          <SectionLabel light>Cobertura nacional · Bucaramanga, Santander</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Estudios hidráulicos en Bucaramanga<br />
            <span style={{ color: '#17A2B8' }}>y el Área Metropolitana</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC realiza estudios hidráulicos en Bucaramanga y Santander: modelación de cañones y
            quebradas, riesgo hídrico para planes parciales y POT, estabilidad de taludes, diseño
            de acueductos y alcantarillado, y trámites ante la CDMB y la CAS.
            Director: Rogerio Bernal Ríos (UNAL) · COPNIA 17202-313228.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización en Bucaramanga
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
          {['Cañones Bucaramanga', 'Cerro el Santísimo', 'CDMB', 'CAS', 'HEC-RAS', 'Taludes', 'AMB'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios en Bucaramanga</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos ejecutamos en Bucaramanga y Santander?</h2>
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
          }}>Proyectos típicos en Bucaramanga y el AMB</h2>
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
          <SectionLabel light>Por qué BIC en Bucaramanga</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Especialistas en cañones, taludes y ríos de montaña</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏔️', tit: 'Cañones y torrentes', txt: 'Experiencia en modelación de crecientes torrenciales en cañones y quebradas de la Cordillera Oriental, donde el Área Metropolitana de Bucaramanga está asentada.' },
              { icon: '🎓', tit: 'Especialista UNAL · COPNIA', txt: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental UNAL. Matrícula COPNIA 17202-313228 para firma de estudios y planos.' },
              { icon: '⛏️', tit: 'Geotecnia e hidráulica', txt: 'BIC integra estudios geotécnicos con análisis hidráulico para proyectos en laderas y taludes del AMB, donde la interacción suelo–agua es crítica para la estabilidad.' },
              { icon: '⚡', tit: 'Propuesta en 24 horas', txt: 'Enviamos propuesta técnica y económica en menos de 24 horas para proyectos en Bucaramanga, Floridablanca, Girón y Piedecuesta.' },
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
            ¿Tiene un proyecto hidráulico en Bucaramanga?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto (cañón, talud, plan parcial, acueducto municipal, CDMB)
            y la ubicación en el AMB. Le enviamos propuesta técnica en menos de 24 horas.
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
