import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un proyecto de ingeniería hidráulica en Pereira')

const seoConfig = {
  title: 'Ingeniería Hidráulica Pereira | BIC Bernal Ingeniería Consultores',
  description: 'Consultoría en ingeniería hidráulica y sanitaria en Pereira y Risaralda. Diseño de acueductos, redes contra incendio y modelaciones HEC-RAS para sector público y privado.',
  keywords: [
    'ingeniería hidráulica Pereira',
    'consultoría acueductos Pereira',
    'ingeniería sanitaria Pereira',
    'estudios hidrológicos Risaralda',
    'diseño acueducto Pereira',
    'modelación HEC-RAS Pereira',
    'sistemas contra incendio Pereira',
    'ingeniería hidráulica Risaralda',
    'consultoría técnica Pereira',
  ],
  canonical: 'https://ingenieriabernal.co/regional/pereira',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BIC – Bernal Ingeniería Consultores',
  description: 'Consultoría en ingeniería hidráulica y sanitaria con presencia en Pereira, Risaralda.',
  url: 'https://ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pereira',
    addressRegion: 'Risaralda',
    addressCountry: 'CO',
  },
  areaServed: ['Pereira', 'Risaralda', 'Dosquebradas', 'La Virginia'],
  hasMap: 'https://ingenieriabernal.co/regional/pereira',
}

const SERVICIOS = [
  { nombre: 'Diseño Acueducto y Alcantarillado', href: '/servicios/acueducto-alcantarillado', desc: 'Sistemas de agua potable y saneamiento bajo RAS 2017 para municipios y ESP de Risaralda.' },
  { nombre: 'Sistemas Contra Incendio NSR-10', href: '/servicios/sistemas-contra-incendio', desc: 'Diseño de redes CI para centros comerciales, plantas industriales y bodegas en Pereira.' },
  { nombre: 'Modelación HEC-RAS', href: '/servicios/modelacion-hec-ras', desc: 'Estudios de inundación y manchas de amenaza hídrica para el POT de Pereira y municipios risaraldenses.' },
  { nombre: 'Redes Hidrosanitarias', href: '/servicios/redes-hidrosanitarias', desc: 'Diseño de instalaciones hidrosanitarias para proyectos residenciales, comerciales e industriales en Risaralda.' },
  { nombre: 'Estudios Hidrológicos', href: '/servicios/estudios-hidrologicos', desc: 'Análisis de cuencas, curvas IDF y caudales de diseño para proyectos en Risaralda.' },
  { nombre: 'Formulación Proyectos Regalías (MGA-Web)', href: '/servicios/regalias-mga', desc: 'Estructuración de proyectos de agua y saneamiento básico para el SGR en municipios risaraldenses.' },
  { nombre: 'Interventoría Técnica Hidráulica', href: '/servicios/interventoria', desc: 'Control técnico de contratos de obra para entidades públicas y privadas en Pereira y Risaralda.' },
  { nombre: 'Estudios Ambientales', href: '/servicios/ambiental', desc: 'Permisos de vertimientos, concesiones de agua y trámites ante CARDER.' },
]

export default function RegionalPereira() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-local-pereira'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-local-pereira')?.remove() }
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
          <SectionLabel light>Cobertura regional · Pereira, Risaralda</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Pereira<br />
            <span style={{ color: '#17A2B8' }}>y Risaralda — Sector Público y Privado</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            Atendemos proyectos de ingeniería hidráulica y sanitaria en Risaralda, con presencia
            activa en Pereira. Diseñamos sistemas de acueducto, redes contra incendio y
            modelaciones HEC-RAS para el sector público y privado. BIC opera desde Manizales
            con desplazamientos ágiles a Pereira, Dosquebradas, La Virginia y toda la región.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Solicitar cotización en Pereira
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
          <SectionLabel>Servicios en Pereira y Risaralda</SectionLabel>
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

      {/* ── PROYECTOS RISARALDA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Presencia verificada</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Experiencia en el Eje Cafetero</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏢', tit: 'Makarí Mall — Dosquebradas', txt: 'BIC ejecutó el diseño hidrosanitario y sistemas CI del Makarí Mall, uno de los proyectos comerciales más importantes del Eje Cafetero.' },
              { icon: '💧', tit: 'Acueductos municipales', txt: 'Diseño y optimización de redes de agua potable bajo RAS 2017 y Resolución 0330/2017 para municipios de la región.' },
              { icon: '🌊', tit: 'Modelación hidráulica', txt: 'Estudios de inundación y torrencialidad con HEC-RAS 2D para planes de ordenamiento territorial en Risaralda.' },
              { icon: '⚡', tit: 'Respuesta ágil desde Manizales', txt: 'A 45 minutos de Pereira. Disponibilidad para visitas técnicas en toda Risaralda sin costos elevados de desplazamiento.' },
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
            ¿Tiene un proyecto en Pereira o Risaralda?
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
