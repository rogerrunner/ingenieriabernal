import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un proyecto de ingeniería hidráulica en el Eje Cafetero')

const seoConfig = {
  title: 'Consultoría Hidráulica Eje Cafetero | BIC Bernal Ingeniería Consultores',
  description: 'BIC opera en todo el Eje Cafetero — Caldas, Risaralda y Quindío. Consultoría integral en ingeniería hidráulica, sanitaria y ambiental para infraestructura pública y privada.',
  keywords: [
    'consultoría hidráulica Eje Cafetero',
    'estudios hidrológicos Eje Cafetero',
    'ingeniería hidráulica Eje Cafetero',
    'ingeniería sanitaria Eje Cafetero',
    'acueductos alcantarillados Eje Cafetero',
    'formulación regalías Eje Cafetero',
    'modelación HEC-RAS Eje Cafetero',
    'consultoría técnica Caldas Risaralda Quindío',
    'gestión riesgo hídrico Eje Cafetero',
  ],
  canonical: 'https://www.ingenieriabernal.co/regional/eje-cafetero',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BIC – Bernal Ingeniería Consultores',
  description: 'Consultoría integral en ingeniería hidráulica, sanitaria y ambiental para Caldas, Risaralda y Quindío.',
  url: 'https://www.ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manizales',
    addressRegion: 'Caldas',
    addressCountry: 'CO',
  },
  areaServed: ['Caldas', 'Risaralda', 'Quindío', 'Eje Cafetero', 'Manizales', 'Pereira', 'Armenia'],
  hasMap: 'https://www.ingenieriabernal.co/regional/eje-cafetero',
}

const SERVICIOS = [
  { nombre: 'Estudios Hidrológicos', href: '/servicios/estudios-hidrologicos', desc: 'Análisis de cuencas, curvas IDF, caudales de diseño y estudios de frecuencias para proyectos en los tres departamentos.' },
  { nombre: 'Modelación HEC-RAS', href: '/servicios/modelacion-hec-ras', desc: 'Modelación hidráulica 1D y 2D para amenaza hídrica, inundaciones y torrencialidad en la región andina cafetera.' },
  { nombre: 'Diseño Acueducto y Alcantarillado', href: '/servicios/acueducto-alcantarillado', desc: 'Sistemas de agua potable y saneamiento bajo RAS 2017 para municipios, ESP y constructoras del Eje.' },
  { nombre: 'Redes Hidrosanitarias', href: '/servicios/redes-hidrosanitarias', desc: 'Diseño de instalaciones hidrosanitarias NSR-10 para proyectos residenciales, comerciales e industriales.' },
  { nombre: 'Sistemas Contra Incendio NSR-10', href: '/servicios/sistemas-contra-incendio', desc: 'Diseño de redes CI para centros comerciales, bodegas e industrias en Caldas, Risaralda y Quindío.' },
  { nombre: 'Interventoría Técnica Hidráulica', href: '/servicios/interventoria', desc: 'Supervisión técnica de contratos de obra para entidades públicas y privadas en toda la región.' },
  { nombre: 'Formulación Proyectos Regalías (MGA-Web)', href: '/servicios/regalias-mga', desc: 'Estructuración de proyectos SGR en agua potable, saneamiento y gestión del riesgo para municipios del Eje Cafetero.' },
  { nombre: 'Estudios Ambientales', href: '/servicios/ambiental', desc: 'Permisos ambientales y trámites ante CORPOCALDAS, CARDER y CRQ para proyectos hídricos en la región.' },
]

const DEPARTAMENTOS = [
  {
    dept: 'Caldas',
    color: '#003B6F',
    ciudades: 'Manizales · Villamaría · Chinchiná · Viterbo · Anserma · La Dorada · Riosucio',
    desc: 'Sede de BIC. Más de 10 años de proyectos en Caldas: acueductos, interventoría, regalías y estudios de riesgo.',
  },
  {
    dept: 'Risaralda',
    color: '#002A50',
    ciudades: 'Pereira · Dosquebradas · Santa Rosa de Cabal · La Virginia · Apía',
    desc: 'Presencia activa en Risaralda. BIC ejecutó el diseño hidrosanitario y CI del Makarí Mall en Dosquebradas.',
  },
  {
    dept: 'Quindío',
    color: '#001A33',
    ciudades: 'Armenia · Calarcá · Montenegro · La Tebaida · Circasia · Filandia',
    desc: 'Cobertura en el Quindío para estudios hidráulicos, diseños MGA y proyectos de regalías municipales.',
  },
]

export default function RegionalEjeCafetero() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-local-eje-cafetero'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-local-eje-cafetero')?.remove() }
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
          <SectionLabel light>Cobertura integral · Caldas · Risaralda · Quindío</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Consultoría Hidráulica en el Eje Cafetero<br />
            <span style={{ color: '#17A2B8' }}>Infraestructura Pública y Privada</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC opera en todo el Eje Cafetero — Caldas, Risaralda y Quindío. Ofrecemos
            consultoría integral en ingeniería hidráulica, sanitaria y ambiental para
            proyectos de infraestructura pública y privada en la región. Desde Manizales
            atendemos proyectos en los tres departamentos con el mismo nivel de exigencia
            técnica que las grandes ciudades.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Solicitar cotización — Eje Cafetero
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── DEPARTAMENTOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Cobertura departamental</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Los tres departamentos del Eje</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {DEPARTAMENTOS.map(d => (
              <div key={d.dept} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: `3px solid #17A2B8`,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: d.color,
                  fontSize: 16, marginBottom: 6,
                }}>{d.dept}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginBottom: 12,
                }}>{d.ciudades}</p>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios en el Eje Cafetero</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos ejecutamos en la región?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4,
                  padding: 24, borderLeft: '3px solid #17A2B8',
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

      {/* ── CTA ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Proyecto en el Eje Cafetero?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            BIC atiende proyectos en Caldas, Risaralda y Quindío. Compártanos el alcance
            y le enviamos propuesta técnica y económica en 24 horas.
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
