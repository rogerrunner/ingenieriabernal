import { useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section } from '../components/ui'

const DEFAULT_PHONE = '573024778910'

const REGIONAL_SERVICES = [
  { icon: '💧', title: 'Diseño Hidráulico', desc: 'Redes hidrosanitarias, drenaje pluvial y sistemas contra incendios NSR-10.' },
  { icon: '🌊', title: 'Estudios Hidrológicos', desc: 'Modelación HEC-RAS 1D/2D, análisis de crecientes y gestión del riesgo hídrico.' },
  { icon: '🏗️', title: 'Acueductos y Alcantarillado', desc: 'Diseño bajo Res. 0330/2017 y RAS 2017 para sistemas municipales y privados.' },
  { icon: '⛏️', title: 'Geotecnia y Suelos', desc: 'Estudios geotécnicos, movimiento de tierras y estabilidad de taludes.' },
  { icon: '🌿', title: 'PSMV', desc: 'Plan de Saneamiento y Manejo de Vertimientos para empresas y municipios.' },
]

const DISCIPLINES = [
  { icon: '💧', label: 'Hidráulica e Hidrología' },
  { icon: '🏛️', label: 'Arquitectura y Urbanismo' },
  { icon: '⛏️', label: 'Geotecnia y Suelos' },
  { icon: '🌿', label: 'Ingeniería Ambiental' },
  { icon: '🏗️', label: 'Ingeniería Estructural' },
  { icon: '📐', label: 'Topografía y SIG' },
]

interface Props {
  city: string
  department: string
  description: string
  phone?: string
}

export default function RegionalPage({ city, department, description, phone = DEFAULT_PHONE }: Props) {
  const waMsg = encodeURIComponent(`Hola, me interesa una consultoría de BIC en Ingeniería Hidráulica en ${city}. ¿Podríamos conversar?`)
  const waUrl = `https://wa.me/${phone}?text=${waMsg}`

  useEffect(() => {
    document.title = `Ingeniería Hidráulica ${city} | BIC Ingeniería Consultores`

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)

    // Schema.org LocalBusiness JSON-LD
    const schemaId = 'regional-schema-ld'
    let script = document.getElementById(schemaId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = schemaId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'BIC Bernal Ingeniería Consultores',
      description: `Consultoría en ingeniería hidráulica, hidrología, acueductos y geotecnia en ${city}, ${department}`,
      url: 'https://ingenieriabernal.co',
      telephone: `+${phone}`,
      email: 'rogeriobernal@ingenieriabernal.co',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressRegion: department,
        addressCountry: 'CO',
      },
      areaServed: { '@type': 'City', name: city },
      founder: {
        '@type': 'Person',
        name: 'Rogerio Bernal Ríos',
        jobTitle: 'Director General',
      },
      knowsAbout: [
        'Ingeniería Hidráulica', 'Hidrología', 'Acueductos y Alcantarillado',
        'Geotecnia', 'PSMV', 'HEC-RAS', 'NSR-10', 'Gestión del Riesgo Hídrico',
      ],
    })

    return () => {
      const el = document.getElementById(schemaId)
      if (el) el.remove()
    }
  }, [city, department, description, phone])

  return (
    <>
      {/* HERO */}
      <section style={{ background: '#003B6F', padding: '120px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 860 }}>
          <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', marginBottom: 16 }}>
            📍 {city}, {department}
          </Tag>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 50px)', lineHeight: 1.15, marginBottom: 20 }}>
            Consultoría en Ingeniería Hidráulica<br />
            <span style={{ color: '#17A2B8' }}>en {city}, {department}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: 620, lineHeight: 1.8, marginBottom: 10 }}>
            {description}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, maxWidth: 620, lineHeight: 1.75, marginBottom: 28 }}>
            BIC — Bernal Ingeniería Consultores · Director: Rogerio Bernal Ríos · UNAL · COPNIA 17202-313228 · 10+ años · Colombia, Ecuador y México
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px',
              background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700,
              fontSize: 14, textDecoration: 'none',
            }}>
              📱 Consultar en WhatsApp — sin costo
            </a>
            <Btn href="/contacto" variant="outline" dark>Formulario de contacto →</Btn>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <Section bg="#F8FAFC" style={{ padding: '56px 40px' }}>
        <div className="container">
          <SectionLabel>Servicios en {city}</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(20px, 3vw, 28px)', margin: '1.2rem 0 2rem' }}>
            Ingeniería Hidráulica en {city}: ¿Qué puede resolver BIC?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {REGIONAL_SERVICES.map((s) => (
              <div key={s.title} style={{ padding: '20px 22px', background: '#fff', border: '1px solid #deedf5', borderRadius: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14, color: '#003B6F', margin: 0 }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* POR QUÉ BIC */}
      <Section bg="#fff" style={{ padding: '56px 40px' }}>
        <div className="container">
          <SectionLabel>Equipo BIC en {city}</SectionLabel>
          <ThinLine />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center', marginTop: '1.5rem' }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(18px, 2.5vw, 24px)', marginBottom: '1rem' }}>
                Consultoría integral.<br />Un solo interlocutor técnico.
              </h2>
              <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Para proyectos en {city} que requieren múltiples disciplinas, BIC coordina todo el equipo bajo una sola dirección técnica. Hidráulica, geotecnia, arquitectura, ambiental y estructural — sin que el cliente gestione contratos separados.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {['UNAL · COPNIA 17202-313228', '10+ años', 'Colombia · Ecuador · México', 'Respuesta &lt; 2h'].map(t => (
                  <Tag key={t} style={{ fontSize: 11 }}>{t}</Tag>
                ))}
              </div>
              <Btn href="/equipo" style={{ fontSize: 13 }}>Ver equipo completo →</Btn>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {DISCIPLINES.map(d => (
                <div key={d.label} style={{ padding: '14px 16px', background: '#f0f7fa', borderRadius: 8, display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: '1.3rem' }}>{d.icon}</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, color: '#003B6F', lineHeight: 1.3 }}>{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="#003B6F" style={{ padding: '56px 40px', textAlign: 'center' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 660 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 12 }}>
            ¿Tienes un proyecto de ingeniería hidráulica en {city}?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, marginBottom: 28, lineHeight: 1.8 }}>
            Primera consulta sin costo. BIC te da una valoración técnica inicial en menos de 24 horas hábiles.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            <a href={waUrl} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 24px',
              background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700,
              fontSize: 14, textDecoration: 'none',
            }}>
              📱 WhatsApp +57 302 477 8910
            </a>
            <Btn href="/contacto" variant="outline" dark>Formulario de contacto</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['BIC — Equipo Multidisciplinario', 'UNAL', 'COPNIA 17202-313228', '10+ años', '3 países'].map(b => (
              <Tag key={b} style={{ fontSize: 11 }}>{b}</Tag>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
