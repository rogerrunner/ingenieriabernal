import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un proyecto de ingeniería hidráulica en Manizales')

const seoConfig = {
  title: 'Ingeniero Hidráulico Manizales | BIC — Consultoría Hidráulica Caldas',
  description: 'Bernal Ingeniería Consultores, su ingeniero hidráulico en Manizales. COPNIA 17202-313228 CLD. Gestión del riesgo, diseño hidrosanitario, acueductos y HEC-RAS. Cotice en 24 h.',
  keywords: [
    'ingeniero hidráulico Manizales',
    'consultoría hidráulica Manizales',
    'ingeniería hidráulica Caldas',
    'gestión del riesgo inundaciones Manizales',
    'diseño hidrosanitario Manizales',
    'acueducto parcelaciones Manizales',
    'modelación HEC-RAS Manizales',
    'obras hidráulicas Manizales',
    'COPNIA Manizales',
    'Bernal Ingeniería Consultores',
  ],
  canonical: 'https://ingenieriabernal.co/manizales',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'BIC – Bernal Ingeniería Consultores SAS',
  description: 'Firma de ingeniería hidráulica de referencia en Manizales y el Eje Cafetero. Dirigida por el Ing. Rogerio Bernal Ríos, COPNIA 17202-313228 CLD.',
  url: 'https://ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manizales',
    addressRegion: 'Caldas',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 5.0689,
    longitude: -75.5174,
  },
  areaServed: ['Manizales', 'Caldas', 'Eje Cafetero', 'Risaralda', 'Quindío'],
  hasMap: 'https://ingenieriabernal.co/manizales',
  priceRange: 'Desde $3.5M COP',
  knowsAbout: ['HEC-RAS', 'RAS 2017', 'Decreto 1807', 'NSR-10', 'diseño hidrosanitario', 'gestión del riesgo hídrico'],
}

const SERVICIOS = [
  {
    nombre: 'Gestión del riesgo ante inundaciones (Decreto 1807)',
    href: '/servicios/modelacion-hec-ras',
    desc: 'Componente técnico para planes parciales y licencias de construcción. Modelación HEC-RAS, cartografía de amenaza hídrica y formulación del plan de gestión del riesgo según el Decreto 1807/2014.',
  },
  {
    nombre: 'Diseño de redes hidrosanitarias — edificios comerciales y hoteles',
    href: '/servicios/redes-hidrosanitarias',
    desc: 'Redes de agua potable, aguas residuales y sistema contra incendio NSR-10 para edificios comerciales, hoteles, centros comerciales e industria en Manizales y el Eje Cafetero.',
  },
  {
    nombre: 'Diseño de acueducto y PTAP para parcelaciones — RAS 2017',
    href: '/servicios/diseno-acueductos',
    desc: 'Diseño completo de acueducto y planta de tratamiento de agua potable para condominios campestres y urbanizaciones privadas bajo RAS 2017 y Resolución 0330/2017.',
  },
  {
    nombre: 'Modelación HEC-RAS e hidrología para licencias de construcción',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Estudios hidrológicos, hidrológicos y de inundación para tramitar licencias de construcción ante curadurías y autoridades ambientales en Caldas y el Eje Cafetero.',
  },
  {
    nombre: 'Obras hidráulicas de protección para promotores en zona de riesgo',
    href: '/servicios/obras-hidraulicas',
    desc: 'Diseño de jarillones, disipadores de energía y canales de control de inundaciones para proyectos privados en zonas de amenaza hídrica.',
  },
]

export default function LandingManizales() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-landing-manizales'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-landing-manizales')?.remove() }
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
          <SectionLabel light>COPNIA 17202-313228 CLD · Manizales, Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniero Hidráulico en Manizales<br />
            <span style={{ color: '#17A2B8' }}>— Bernal Ingeniería Consultores</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC (Bernal Ingeniería Consultores SAS) es la firma de ingeniería hidráulica de referencia
            en Manizales y el Eje Cafetero. Dirigida por el Ing. Rogerio Bernal Ríos
            (COPNIA 17202-313228 CLD), con más de 10 años de experiencia en diseño hidráulico
            para proyectos privados de alta complejidad.
          </p>
          <div style={{
            display: 'inline-block', background: 'rgba(23,162,184,0.15)',
            border: '1px solid rgba(23,162,184,0.4)', borderRadius: 4,
            padding: '8px 16px', marginBottom: 28,
          }}>
            <span style={{ fontFamily: "'Lato', sans-serif", color: '#7DD3FC', fontSize: 13 }}>
              Proyectos desde $3.5M COP · Plazo: 3–4 semanas · 50% anticipo / 50% entrega
            </span>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Cotizar en 24 horas — WhatsApp
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios en Manizales y Caldas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿En qué proyectos le ayudamos?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                  padding: 24, borderTop: '3px solid #17A2B8',
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

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Credenciales verificadas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Por qué contratar BIC en Manizales</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              {
                icon: '🏛️',
                tit: 'COPNIA 17202-313228 CLD',
                txt: 'Matrícula profesional COPNIA vigente en Caldas. Sus memorias de cálculo y planos llevan firma profesional avalada para trámites ante curadurías, CORPOCALDAS y entidades financieras.',
              },
              {
                icon: '📍',
                tit: 'Sede en Manizales — disponibilidad inmediata',
                txt: 'BIC opera desde Manizales con capacidad de visita técnica en el mismo día para proyectos en el área metropolitana y al siguiente día hábil en municipios de Caldas.',
              },
              {
                icon: '🏗️',
                tit: '+10 años, proyectos de alta complejidad',
                txt: 'Makarí Mall (Dosquebradas), Palacio de Justicia (La Dorada), sistemas de acueducto para parcelaciones campestres y planes parciales con gestión del riesgo en el Eje Cafetero.',
              },
              {
                icon: '⚡',
                tit: 'Propuesta en 24 horas',
                txt: 'Compártanos el tipo de proyecto y la etapa en que se encuentra. Enviamos propuesta técnica y económica en menos de 24 horas hábiles, sin costo.',
              },
            ].map(d => (
              <div key={d.tit} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.tit}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
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
            ¿Tiene un proyecto en Manizales o Caldas?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 12,
          }}>
            Compártanos el tipo de proyecto y la etapa. Enviamos propuesta técnica y económica
            en menos de 24 horas. Sin costo.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.75)',
            fontSize: 14, lineHeight: 1.6, marginBottom: 32,
          }}>
            Proyectos desde $3.5M COP · Anticipo 50% / Entrega 50% · COPNIA 17202-313228 CLD
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            Chatear por WhatsApp +57 302 477 8910
          </Btn>
        </div>
      </Section>
    </>
  )
}
