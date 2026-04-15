import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un proyecto de ingeniería hidráulica en Manizales')

const seoConfig = {
  title: 'Ingeniería Hidráulica Manizales | BIC Bernal Ingeniería Consultores',
  description: 'BIC tiene su sede en Manizales. Estudios hidrológicos, diseño de acueductos, alcantarillados y modelación HEC-RAS para alcaldías, constructoras y ESP en Caldas y Eje Cafetero.',
  keywords: [
    'ingeniería hidráulica Manizales',
    'consultoría hidráulica Manizales',
    'estudios hidrológicos Manizales',
    'diseño acueducto Manizales',
    'acueducto alcantarillado Caldas',
    'modelación HEC-RAS Manizales',
    'ingeniería sanitaria Caldas',
    'consultoría ingeniería Caldas',
    'interventoría hidráulica Manizales',
  ],
  canonical: 'https://ingenieriabernal.co/regional/manizales',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BIC – Bernal Ingeniería Consultores',
  description: 'Consultoría en ingeniería hidráulica, sanitaria y ambiental con sede en Manizales, Caldas.',
  url: 'https://ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manizales',
    addressRegion: 'Caldas',
    addressCountry: 'CO',
  },
  areaServed: ['Manizales', 'Caldas', 'Eje Cafetero'],
  hasMap: 'https://ingenieriabernal.co/regional/manizales',
}

const SERVICIOS = [
  { nombre: 'Estudios Hidrológicos', href: '/servicios/estudios-hidrologicos', desc: 'Análisis de cuencas, curvas IDF y caudales de diseño para cuencas caldenses.' },
  { nombre: 'Diseño Acueducto y Alcantarillado', href: '/servicios/acueducto-alcantarillado', desc: 'Diseño bajo RAS 2017 y Resolución 0330/2017 para municipios y ESP de Caldas.' },
  { nombre: 'Modelación HEC-RAS', href: '/servicios/modelacion-hec-ras', desc: 'Manchas de inundación y amenaza hídrica para el POT de Manizales y municipios vecinos.' },
  { nombre: 'Redes Hidrosanitarias', href: '/servicios/redes-hidrosanitarias', desc: 'Diseño de instalaciones hidrosanitarias para proyectos residenciales y comerciales en Manizales.' },
  { nombre: 'Interventoría Técnica Hidráulica', href: '/servicios/interventoria', desc: 'Supervisión técnica de contratos de obra financiados con SGR o recursos propios.' },
  { nombre: 'Formulación Proyectos Regalías (MGA-Web)', href: '/servicios/regalias-mga', desc: 'Estructuración de proyectos de agua y saneamiento para el SGR en municipios de Caldas.' },
  { nombre: 'Estudios Ambientales', href: '/servicios/ambiental', desc: 'Permisos de vertimientos, concesiones de agua y trámites ante CORPOCALDAS.' },
  { nombre: 'Estudios Geotécnicos', href: '/servicios/geotecnia', desc: 'Análisis de suelos y estabilidad de taludes para proyectos en el área andina caldense.' },
]

export default function RegionalManizales() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-local-manizales'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-local-manizales')?.remove() }
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
          <SectionLabel light>Sede central · Manizales, Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Manizales<br />
            <span style={{ color: '#17A2B8' }}>para Municipios, Constructoras y ESP</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC tiene su sede en Manizales y lleva más de 10 años ejecutando proyectos de
            ingeniería hidráulica en Caldas. Desde estudios hidrológicos hasta diseño de
            acueductos y alcantarillados, apoyamos alcaldías, constructoras y ESP en la
            región con el respaldo técnico de un equipo con doctorado en ingeniería y
            registro COPNIA vigente.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Solicitar cotización en Manizales
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
          }}>¿Qué proyectos ejecutamos en la región?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                  padding: 24, borderTop: '3px solid #17A2B8',
                  transition: 'box-shadow 0.2s',
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

      {/* ── POR QUÉ BIC MANIZALES ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Ventaja local</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>BIC: consultor local con alcance nacional</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '📍', tit: 'Sede en Manizales', txt: 'Disponibilidad para visitas técnicas en cualquier municipio de Caldas sin costos adicionales de desplazamiento.' },
              { icon: '🎓', tit: 'Director PhD — COPNIA vigente', txt: 'Máximo nivel técnico con responsabilidad profesional registrada ante el Estado colombiano.' },
              { icon: '🏗️', tit: '+10 años en la región', txt: 'Proyectos ejecutados en Manizales, Viterbo, Anserma, La Dorada y municipios del Eje Cafetero.' },
              { icon: '⚡', tit: 'Respuesta en 24 horas', txt: 'Propuesta técnica y económica en 24 horas para proyectos en Caldas y el Eje Cafetero.' },
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
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto y la entidad contratante. Le enviamos propuesta técnica y
            económica en menos de 24 horas.
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
