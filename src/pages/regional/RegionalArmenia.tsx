import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un proyecto de ingeniería hidráulica en Armenia')

const seoConfig = {
  title: 'Ingeniería Hidráulica Armenia | BIC Bernal Ingeniería Consultores',
  description: 'Consultoría hidráulica en Armenia y Quindío. Estudios hidráulicos, formulación de proyectos de regalías (MGA-Web) y diseño de redes hidrosanitarias con cumplimiento RAS 2000.',
  keywords: [
    'ingeniería hidráulica Armenia',
    'consultoría hidráulica Armenia',
    'estudios hidráulicos Quindío',
    'diseño acueducto Armenia',
    'ingeniería sanitaria Quindío',
    'formulación proyectos regalías Armenia',
    'MGA-Web Quindío',
    'redes hidrosanitarias Armenia',
    'modelación hidráulica Armenia',
  ],
  canonical: 'https://ingenieriabernal.co/regional/armenia',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BIC – Bernal Ingeniería Consultores',
  description: 'Consultoría en ingeniería hidráulica, sanitaria y formulación de regalías con cobertura en Armenia, Quindío.',
  url: 'https://ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Armenia',
    addressRegion: 'Quindío',
    addressCountry: 'CO',
  },
  areaServed: ['Armenia', 'Quindío', 'Calarcá', 'Montenegro'],
  hasMap: 'https://ingenieriabernal.co/regional/armenia',
}

const SERVICIOS = [
  { nombre: 'Estudios Hidrológicos', href: '/servicios/estudios-hidrologicos', desc: 'Análisis de cuencas, curvas IDF y caudales de diseño para proyectos en el Quindío.' },
  { nombre: 'Diseño Acueducto y Alcantarillado', href: '/servicios/acueducto-alcantarillado', desc: 'Diseño bajo RAS 2000/2017 y Resolución 0330/2017 para municipios y ESP quindíanos.' },
  { nombre: 'Formulación Proyectos Regalías (MGA-Web)', href: '/servicios/regalias-mga', desc: 'Estructuración de proyectos de agua potable y saneamiento para el SGR en Armenia y Quindío.' },
  { nombre: 'Redes Hidrosanitarias', href: '/servicios/redes-hidrosanitarias', desc: 'Diseño de instalaciones hidrosanitarias NSR-10 para edificaciones residenciales y comerciales en Armenia.' },
  { nombre: 'Modelación HEC-RAS', href: '/servicios/modelacion-hec-ras', desc: 'Manchas de inundación y estudios de amenaza hídrica para el POT de Armenia y municipios del Quindío.' },
  { nombre: 'Estudios Geotécnicos', href: '/servicios/geotecnia', desc: 'Análisis de suelos para fundaciones y estabilidad de taludes en el Quindío.' },
  { nombre: 'Sistemas Contra Incendio NSR-10', href: '/servicios/sistemas-contra-incendio', desc: 'Diseño de redes CI para proyectos comerciales e industriales en Armenia.' },
  { nombre: 'Estudios Ambientales', href: '/servicios/ambiental', desc: 'Permisos de vertimientos, concesiones de agua y trámites ante CRQ (Corporación Autónoma Regional del Quindío).' },
]

export default function RegionalArmenia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-local-armenia'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-local-armenia')?.remove() }
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
          <SectionLabel light>Cobertura regional · Armenia, Quindío</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Armenia<br />
            <span style={{ color: '#17A2B8' }}>y Quindío — Estudios, Diseños y Regalías</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            En el Quindío y Armenia apoyamos municipios y empresas con estudios hidráulicos,
            formulación de proyectos de regalías (MGA-Web) y diseño de redes hidrosanitarias
            con cumplimiento de normas RAS 2000. BIC opera desde Manizales con disponibilidad
            para visitas técnicas en toda la región cafetera.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Solicitar cotización en Armenia
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
          <SectionLabel>Servicios en Armenia y Quindío</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos ejecutamos en la región?</h2>
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

      {/* ── CLIENTES EN QUINDÍO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>¿Para quién trabajamos?</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Clientes en el Quindío</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { tipo: 'Alcaldías del Quindío', desc: 'Formulación MGA-Web, estudios hidráulicos y diseños de acueducto para inversión con recursos SGR.' },
              { tipo: 'Constructoras privadas', desc: 'Diseño hidrosanitario NSR-10, sistemas CI y estudios de amenaza hídrica para planes parciales y urbanizaciones.' },
              { tipo: 'Empresas de Servicios Públicos', desc: 'Optimización de redes de acueducto y alcantarillado, modelaciones EPANET y estudios de diagnóstico.' },
              { tipo: 'Entidades ambientales y regionales', desc: 'Estudios de inundación, torrencialidad y gestión del riesgo hídrico para el POT municipal y POT de Armenia.' },
            ].map(d => (
              <div key={d.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{d.desc}</p>
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
            ¿Tiene un proyecto en Armenia o Quindío?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de proyecto y la entidad contratante. Enviamos propuesta
            técnica y económica en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            Chatear por WhatsApp
          </Btn>
        </div>
      </Section>
    </>
  )
}
