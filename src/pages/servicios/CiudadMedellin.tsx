import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un proyecto de ingeniería hidráulica en Medellín')

const seoConfig = {
  title: 'Ingeniero hidráulico en Medellín — Ingeniería Bernal',
  description: 'Ingeniero hidráulico en Medellín y Antioquia: estudios hidrológicos, modelación HEC-RAS, riesgo hídrico cerros y quebradas, diseño acueductos, planes parciales AMVA. BIC · COPNIA · UNAL.',
  keywords: [
    'ingeniero hidráulico Medellín',
    'ingeniería hidráulica Medellín',
    'estudios hidrológicos Medellín',
    'riesgo hídrico cerros Medellín',
    'quebradas Medellín HEC-RAS',
    'planes parciales AMVA',
    'diseño acueducto Antioquia',
    'consultoría hidráulica Antioquia',
    'modelación inundación Medellín',
    'gestión riesgo quebradas Área Metropolitana',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/medellin',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BIC – Bernal Ingeniería Consultores',
  description: 'Consultoría en ingeniería hidráulica en Medellín, Antioquia y el Área Metropolitana del Valle de Aburrá.',
  url: 'https://ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Medellín',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  areaServed: ['Medellín', 'Antioquia', 'Área Metropolitana del Valle de Aburrá'],
  founder: {
    '@type': 'Person',
    name: 'Rogerio Bernal Ríos',
    jobTitle: 'Director General · Especialista Ingeniería Hidráulica y Ambiental UNAL',
  },
  knowsAbout: [
    'Ingeniería Hidráulica', 'Hidrología', 'Quebradas Medellín', 'Riesgo Hídrico Cerros',
    'Planes Parciales AMVA', 'HEC-RAS', 'Acueductos y Alcantarillado', 'Gestión del Riesgo',
  ],
}

const SERVICIOS = [
  {
    nombre: 'Riesgo hídrico quebradas y cerros',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Estudios de amenaza hídrica y torrencialidad en quebradas y laderas de Medellín y el Área Metropolitana, bajo Decreto 1807/2014, para licencias urbanísticas y planes parciales.',
  },
  {
    nombre: 'Modelación HEC-RAS quebradas',
    href: '/servicios/modelacion-hec-ras',
    desc: 'Modelación hidráulica 1D/2D de crecientes en quebradas de Medellín (La Iguaná, Santa Elena, La Presidenta, Altavista) y en el río Medellín para manchas de inundación.',
  },
  {
    nombre: 'Diseño acueducto y alcantarillado',
    href: '/servicios/acueducto-alcantarillado',
    desc: 'Diseño de sistemas de agua potable y saneamiento bajo Res. 0330/2017 para municipios y proyectos privados en Antioquia, coordinando con EPM y las ESP municipales.',
  },
  {
    nombre: 'Redes hidrosanitarias y NSR-10',
    href: '/servicios/redes-hidrosanitarias',
    desc: 'Diseño de instalaciones hidrosanitarias y sistemas contra incendios NSR-10 para edificios residenciales, comerciales e industriales en Medellín y el Valle de Aburrá.',
  },
  {
    nombre: 'Gestión del riesgo AMVA',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Planes de gestión del riesgo hídrico para municipios del Área Metropolitana: Bello, Itagüí, Envigado, Sabaneta, La Estrella, Copacabana, Barbosa y Girardota.',
  },
  {
    nombre: 'Estudios ambientales CORANTIOQUIA / AMVA',
    href: '/servicios/ambiental',
    desc: 'Concesiones de agua, permisos de vertimientos y trámites ambientales ante CORANTIOQUIA y la Autoridad Ambiental del Área Metropolitana (AMVA) para proyectos en Antioquia.',
  },
]

const PROYECTOS = [
  {
    tipo: 'Planes parciales cerros y laderas',
    desc: 'Estudios hidrológicos e hidráulicos para planes parciales en zonas de ladera en Medellín (Altavista, San Cristóbal, Noroccidental). BIC produce las memorias de riesgo hídrico exigidas por el POT y el Decreto 1807/2014.',
  },
  {
    tipo: 'Quebradas y torrencialidad',
    desc: 'Modelación de crecientes torrenciales en quebradas de los cerros tutelares de Medellín — donde la urbanización informal y la expansión residencial generan demanda permanente de estudios de riesgo y obras de manejo hídrico.',
  },
  {
    tipo: 'Proyectos industriales Rionegro',
    desc: 'Diseño hidrosanitario y sistemas CI-NSR10 para parques industriales, bodegas y centros logísticos en el corredor aeroportuario de Rionegro (Guarne, La Ceja, Marinilla), con alta demanda por expansión productiva.',
  },
  {
    tipo: 'Acueductos municipales Antioquia',
    desc: 'Formulación y diseño de sistemas de abastecimiento de agua para municipios de Antioquia con recursos SGR y MVCT: captación, conducción, tratamiento y red de distribución bajo RAS 2017.',
  },
]

export default function CiudadMedellin() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-local-medellin'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-local-medellin')?.remove() }
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
          <SectionLabel light>Cobertura nacional · Medellín, Antioquia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniero hidráulico en Medellín<br />
            <span style={{ color: '#17A2B8' }}>— Ingeniería Bernal</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC ejecuta proyectos de ingeniería hidráulica en Medellín y el Área Metropolitana del
            Valle de Aburrá: modelación de quebradas y cerros, riesgo hídrico para planes parciales,
            diseño de acueductos y alcantarillado, e instalaciones hidrosanitarias NSR-10.
            Director: Rogerio Bernal Ríos (UNAL) · COPNIA 17202-313228.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización en Medellín
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
          {['Quebradas Medellín', 'Cerros tutelares', 'AMVA', 'HEC-RAS', 'CORANTIOQUIA', 'Decreto 1807', 'Planes parciales'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios en Medellín</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos ejecutamos en Medellín y Antioquia?</h2>
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
          }}>Proyectos típicos en Medellín y el Valle de Aburrá</h2>
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
          <SectionLabel light>Por qué BIC en Medellín</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Especialista en hidrología de cuencas andinas</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏔️', tit: 'Cuencas andinas', txt: 'Amplia experiencia en hidrología de cuencas montañosas del Eje Cafetero y Antioquia, con modelación de torrentes y quebradas de ladera.' },
              { icon: '🎓', tit: 'Especialista UNAL · COPNIA', txt: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental UNAL. Matrícula COPNIA 17202-313228 activa.' },
              { icon: '🌊', tit: 'HEC-RAS 1D/2D', txt: 'Modelación hidráulica bidimensional para manchas de inundación en quebradas y ríos de la Cordillera Central antioqueña.' },
              { icon: '⚡', tit: 'Propuesta en 24 horas', txt: 'Enviamos propuesta técnica y económica en menos de 24 horas para proyectos en Medellín, el AMVA y municipios de Antioquia.' },
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
            ¿Tiene un proyecto hidráulico en Medellín?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto (plan parcial, quebrada, acueducto municipal, industria)
            y la ubicación en el Valle de Aburrá. Le enviamos propuesta técnica en menos de 24 horas.
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
