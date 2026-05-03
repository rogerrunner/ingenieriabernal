import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero contratar un ingeniero hidráulico en Manizales')

const seoConfig = {
  title: 'Ingeniero Hidráulico Manizales — Ing. Rogerio Bernal · BIC',
  description: 'Consultor hidráulico certificado COPNIA en Manizales. Diseño acueductos, PTAP, HEC-RAS, redes CI NSR-10. Proyectos en Caldas y Eje Cafetero. Cotice sin costo.',
  keywords: [
    'ingeniero hidráulico Manizales',
    'consultor hidráulico Manizales',
    'ingeniero hidráulico Caldas',
    'diseño acueductos Manizales',
    'PTAP Manizales',
    'modelación HEC-RAS Manizales',
    'redes contra incendio NSR-10 Manizales',
    'proyectos SGR Manizales',
    'estudios hidrológicos Manizales',
    'COPNIA Manizales',
  ],
  canonical: 'https://ingenieriabernal.co/ingeniero-hidraulico-manizales',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Bernal Ingeniería Consultores — BIC',
  description: 'Consultoría en ingeniería hidráulica y saneamiento básico en Manizales, Colombia',
  url: 'https://ingenieriabernal.co/ingeniero-hidraulico-manizales',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 65A #23B-24',
    addressLocality: 'Manizales',
    addressRegion: 'Caldas',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '5.0703',
    longitude: '-75.5138',
  },
  areaServed: ['Manizales', 'Caldas', 'Eje Cafetero', 'Colombia'],
  serviceType: ['Ingeniería hidráulica', 'Diseño acueductos', 'PTAP', 'HEC-RAS', 'NSR-10'],
}

const SERVICIOS = [
  { nombre: 'Diseño de Acueductos Rurales y Veredales', href: '/servicios/acueducto-alcantarillado', desc: 'Sistemas de agua potable bajo RAS 2017 y Resolución 0330/2017 para comunidades veredales, municipios y ESP de Caldas.' },
  { nombre: 'Diseño de PTAP para Comunidades Pequeñas', href: '/servicios/acueducto-alcantarillado', desc: 'Plantas de tratamiento de agua potable dimensionadas para acueductos rurales con caudales menores a 5 L/s.' },
  { nombre: 'Modelación HEC-RAS 1D/2D', href: '/servicios/modelacion-hec-ras', desc: 'Estudios de inundabilidad, manchas de amenaza hídrica y socavación para POT, POMCA y licencias ambientales en Caldas.' },
  { nombre: 'Redes Contra Incendio NSR-10 / NFPA', href: '/servicios/sistemas-contra-incendio', desc: 'Diseño de sistemas CI bajo NSR-10 Título J, NFPA 13 y NFPA 14 para edificaciones residenciales, comerciales e industriales.' },
  { nombre: 'Formulación de Proyectos SGR (MGA-Web)', href: '/servicios/regalias-mga', desc: 'Estructuración de proyectos de agua potable y saneamiento básico para el Sistema General de Regalías en municipios de Caldas y el Eje Cafetero.' },
  { nombre: 'Estudios Hidrológicos para POMCA y Licencias', href: '/servicios/estudios-hidrologicos', desc: 'Análisis de cuencas, curvas IDF, caudales de diseño y períodos de retorno exigidos por CORPOCALDAS y autoridades ambientales.' },
]

export default function IngenieroHidraulicoManizales() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-prof-hidraulico-manizales'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-prof-hidraulico-manizales')?.remove() }
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
          <SectionLabel light>Consultor independiente · Manizales, Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniero Hidráulico en Manizales<br />
            <span style={{ color: '#17A2B8' }}>Bernal Ingeniería Consultores — BIC</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            Ing. Rogerio Bernal Ríos — consultor independiente con base en Manizales, Caldas.
            Especialista en Ingeniería Hidráulica y Ambiental egresado de la Universidad Nacional
            de Colombia sede Manizales. Matrícula profesional COPNIA vigente No. 17202-313228 CLD.
            Más de 10 años ejecutando proyectos de acueductos, saneamiento básico, modelación
            hidráulica y sistemas contra incendio en el Eje Cafetero y todo el país. Consultor
            local: conocimiento del territorio cafetero, visitas de campo sin costos adicionales
            y precios directos sin intermediarios.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Solicitar presupuesto sin costo
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
          }}>Servicios de ingeniería hidráulica en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.nombre} href={s.href} style={{ textDecoration: 'none' }}>
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

      {/* ── ÁREA DE COBERTURA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Cobertura geográfica</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Dónde atendemos proyectos?</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 40 }}>
            {[
              { zona: 'Manizales', detalle: 'Ciudad base — visitas de campo sin costo adicional' },
              { zona: 'Caldas', detalle: 'Todos los municipios del departamento' },
              { zona: 'Eje Cafetero', detalle: 'Risaralda, Quindío y Caldas' },
              { zona: 'Tolima', detalle: 'Norte del Tolima y área de influencia' },
              { zona: 'Colombia', detalle: 'Proyectos SGR y consultoría nacional' },
            ].map(z => (
              <div key={z.zona} style={{
                padding: '20px 24px', background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 6,
                }}>{z.zona}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.5,
                }}>{z.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ CONTRATAR UN CONSULTOR LOCAL ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Ventaja del consultor local</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Por qué contratar un consultor hidráulico en Manizales</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '📍', tit: 'Visitas de campo sin costo extra', txt: 'Base en Manizales. Las visitas técnicas en Caldas y el Eje Cafetero no generan costos adicionales de desplazamiento, reduciendo el presupuesto total del proyecto.' },
              { icon: '🏔️', tit: 'Conocimiento del territorio cafetero', txt: 'Condiciones topográficas, suelos volcánicos, régimen hidrológico andino y normativa de CORPOCALDAS y CRQ conocidos de primera mano.' },
              { icon: '🤝', tit: 'Relación directa con el ingeniero', txt: 'Sin subcontratos ni intermediarios. Usted trabaja directamente con el Ing. Rogerio Bernal Ríos, responsable técnico y profesional COPNIA vigente.' },
              { icon: '⚡', tit: 'Respuesta en menos de 24 horas', txt: 'Propuesta técnica y económica en menos de 24 horas para cualquier proyecto en Caldas, Risaralda o Quindío.' },
            ].map(d => (
              <div key={d.tit} style={{
                padding: 24, background: '#fff',
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
            Solicite su presupuesto sin costo
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de proyecto y la ubicación. Respuesta en menos de 24 horas
            con propuesta técnica y económica. WhatsApp directo con el Ing. Bernal.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Btn
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
            >
              WhatsApp +57 302 477 8910
            </Btn>
            <Btn
              href="mailto:rogeriobernal@ingenieriabernal.co"
              style={{ background: 'transparent', color: '#fff', fontSize: 15, padding: '14px 36px', border: '2px solid rgba(255,255,255,0.7)' }}
            >
              rogeriobernal@ingenieriabernal.co
            </Btn>
          </div>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.75)',
            fontSize: 14, marginTop: 20,
          }}>
            También puede <a href="/cotizar" style={{ color: '#fff', textDecoration: 'underline' }}>completar el formulario de cotización</a> en línea.
          </p>
        </div>
      </Section>
    </>
  )
}
