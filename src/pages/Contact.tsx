import { useState, useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section } from '../components/ui'
import SchemaMarkup from '../components/SchemaMarkup'

const WA = '573024778910'
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL as string | undefined

const SERVICES = [
  'Diseño hidrosanitario y contra incendios (NSR-10)',
  'Modelación HEC-RAS / estudio de inundación',
  'Acueducto y alcantarillado (Res. 0330/2017)',
  'Gestión del riesgo hídrico / POT',
  'PTAP o PTAR — planta de tratamiento',
  'Topobatimetría y levantamiento topográfico',
  'Formulación proyectos regalías (MGA-Web)',
  'Residencia o interventoría de obra',
  'Ingeniería ambiental / trámites CAR',
  'Consulta general / otro',
]

const CITIES = [
  'Manizales', 'Pereira', 'Armenia', 'Dosquebradas', 'Villamaría',
  'Chinchiná', 'Palestina', 'Viterbo', 'Anserma', 'La Dorada',
  'Riosucio / Supía', 'Honda', 'Cerritos', 'Santa Rosa de Cabal',
  'Rionegro', 'Medellín', 'Bogotá / Sabana', 'Bucaramanga',
  'Cali / Valle', 'Costa Caribe', 'Llanos / Orinoquía', 'Otra ciudad',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', city: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Contacto — BIC Bernal Ingeniería Consultores | Manizales'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content',
      'Contacta a BIC — Bernal Ingeniería Consultores. Consultoría integral: hidráulica, geotecnia, arquitectura, ambiental y estructural. Manizales y toda Colombia. WhatsApp: +57 302 477 8910.'
    )
  }, [])

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  const sendWA = (e: React.FormEvent) => {
    e.preventDefault()

    // Lead tracking — solo si el webhook está configurado en producción
    if (WEBHOOK_URL) {
      const fullMessage =
        `${form.service ? `Servicio: ${form.service}. ` : ''}` +
        `Ciudad: ${form.city || 'Colombia'}. ` +
        `${form.company ? `Empresa: ${form.company}. ` : ''}` +
        `${form.message || ''}`
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: '',
          phone: '',
          message: fullMessage.trim(),
          source: window.location.pathname,
          page_url: window.location.href,
        }),
      }).catch(() => { /* silencioso */ })
    }

    const msg = encodeURIComponent(
      `Hola Ing. Rogerio, completé el formulario de contacto con los siguientes datos: ` +
      `Nombre: ${form.name}` +
      `${form.company ? `, Empresa: ${form.company}` : ''}, ` +
      `Ciudad: ${form.city || 'Colombia'}, ` +
      `Servicio: ${form.service || 'consulta general'}, ` +
      `Mensaje: ${form.message || '¿Podríamos conversar?'}`
    )
    window.open(`https://wa.me/${WA}?text=${msg}`, '_blank')
    setSent(true)
  }

  const input = {
    width: '100%', padding: '11px 14px', borderRadius: 8,
    border: '1px solid #deedf5', fontSize: 14, boxSizing: 'border-box' as const,
    outline: 'none', background: '#fff', color: '#2C3E50',
  }

  return (
    <>
      <SchemaMarkup type="contact" />
      {/* HERO */}
      <section style={{ background: '#003B6F', padding: '120px 40px 60px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 760 }}>
          <SectionLabel>Contacto BIC</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 48px)', lineHeight: 1.15, marginBottom: 20 }}>
            Hablemos de tu proyecto.<br />
            <span style={{ color: '#17A2B8' }}>Primera consulta sin costo.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: 580, lineHeight: 1.8, marginBottom: 28 }}>
            Cuéntanos en qué consiste el proyecto, la ciudad y el alcance. BIC te da una valoración técnica inicial en menos de 24 horas hábiles — sin compromiso.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['UNAL · COPNIA 17202-313228', '10+ años', 'Colombia · Ecuador · México', 'Respuesta &lt; 2h'].map(t => (
              <Tag key={t} style={{ fontSize: 12 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO + INFO */}
      <Section bg="#F8FAFC" style={{ padding: '56px 40px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start', maxWidth: 1060 }}>

          {/* Formulario */}
          <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', border: '1px solid #e0edf5' }}>

            {/* OPCIÓN RÁPIDA — botón directo sin formulario */}
            <div style={{ background: '#f0faf4', border: '1px solid #b7e4c7', borderRadius: 12, padding: '1.2rem 1.4rem', marginBottom: '1.5rem' }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, color: '#1a7a3a', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 10px' }}>
                Opción rápida:
              </p>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, quisiera información sobre sus servicios de ingeniería. ¿Podríamos conversar?')}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  padding: '13px 20px', borderRadius: 10,
                  background: '#25D366', color: '#fff', fontWeight: 700, fontSize: 15,
                  textDecoration: 'none',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>💬</span>
                Escríbenos por WhatsApp
              </a>
              <p style={{ fontSize: 12, color: '#666', textAlign: 'center', margin: '8px 0 0' }}>
                Un clic — sin formulario — respuesta en menos de 2 h hábiles
              </p>
            </div>

            {/* Separador */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
              <div style={{ flex: 1, height: 1, background: '#e0edf5' }} />
              <span style={{ fontSize: 13, color: '#94a3b8', whiteSpace: 'nowrap' }}>O envíanos tu consulta con más detalle</span>
              <div style={{ flex: 1, height: 1, background: '#e0edf5' }} />
            </div>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 22, marginBottom: 12 }}>
                  ¡Mensaje enviado!
                </h2>
                <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                  Se abrió WhatsApp con tu consulta prellenada. Si no se abrió automáticamente, escríbenos directo al <strong>+57 302 477 8910</strong>.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{ padding: '10px 24px', borderRadius: 8, border: '1px solid #003B6F', background: 'transparent', color: '#003B6F', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
            <>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 22, marginBottom: '1.5rem' }}>
              Cuéntanos tu proyecto
            </h2>
            <form onSubmit={sendWA} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#003B6F', display: 'block', marginBottom: 6 }}>Nombre *</label>
                  <input required style={input} placeholder="Tu nombre completo" value={form.name} onChange={set('name')} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#003B6F', display: 'block', marginBottom: 6 }}>Empresa / Entidad</label>
                  <input style={input} placeholder="Opcional" value={form.company} onChange={set('company')} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#003B6F', display: 'block', marginBottom: 6 }}>Ciudad *</label>
                  <select required style={input} value={form.city} onChange={set('city')}>
                    <option value="">Selecciona...</option>
                    {CITIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#003B6F', display: 'block', marginBottom: 6 }}>Servicio requerido</label>
                  <select style={input} value={form.service} onChange={set('service')}>
                    <option value="">Selecciona...</option>
                    {SERVICES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#003B6F', display: 'block', marginBottom: 6 }}>Descripción del proyecto</label>
                <textarea
                  rows={4} style={{ ...input, resize: 'vertical' as const }}
                  placeholder="Describe brevemente el proyecto: tipo, alcance, plazo estimado..."
                  value={form.message} onChange={set('message')}
                />
              </div>

              <button type="submit" style={{
                padding: '14px', borderRadius: 10, border: 'none',
                background: '#25D366', color: '#fff', fontWeight: 700, fontSize: 15,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              }}>
                <span style={{ fontSize: '1.2rem' }}>📱</span>
                Enviar por WhatsApp a BIC
              </button>
              <p style={{ fontSize: 12, color: '#888', textAlign: 'center', margin: 0 }}>
                Se abre WhatsApp con el mensaje completo prellenado · Respuesta en menos de 2 horas hábiles
              </p>
            </form>
            </>
            )}
          </div>

          {/* Info lateral */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* WhatsApp directo */}
            <div style={{ background: '#003B6F', borderRadius: 12, padding: '1.5rem' }}>
              <p style={{ color: '#17A2B8', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>WhatsApp directo</p>
              <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer"
                style={{ color: '#fff', fontWeight: 700, fontSize: 20, textDecoration: 'none', display: 'block', marginBottom: 4 }}>
                +57 302 477 8910
              </a>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, margin: 0 }}>Rogerio Bernal Ríos — Director General BIC</p>
            </div>

            {/* Email */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', border: '1px solid #e0edf5' }}>
              <p style={{ color: '#003B6F', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Correo electrónico</p>
              <a href="mailto:rogeriobernal@ingenieriabernal.co" style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                rogeriobernal@ingenieriabernal.co
              </a>
            </div>

            {/* Horario */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', border: '1px solid #e0edf5' }}>
              <p style={{ color: '#003B6F', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>Horario de atención</p>
              {[['Lunes — Viernes', '8:00 am – 6:00 pm'], ['Sábados', '9:00 am – 1:00 pm'], ['Domingos', 'Cerrado']].map(([d, h]) => (
                <div key={d} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: '#475569' }}>{d}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#003B6F' }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Sede */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.5rem', border: '1px solid #e0edf5' }}>
              <p style={{ color: '#003B6F', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Sede principal</p>
              <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Calle 65A #23B-24, Guayacanes<br />
                Manizales, Caldas, Colombia<br />
                <span style={{ color: '#17A2B8', fontWeight: 600 }}>Atención nacional e internacional</span>
              </p>
            </div>

            {/* Cobertura */}
            <div style={{ background: '#f0f7fa', borderRadius: 12, padding: '1.2rem 1.5rem' }}>
              <p style={{ color: '#003B6F', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>Cobertura</p>
              <p style={{ fontSize: 12, color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Manizales · Pereira · Armenia · Dosquebradas · Eje Cafetero · Viterbo · Palestina · La Dorada · Rionegro · Sabana Norte · Bucaramanga · Costa Caribe · Llanos · Todo Colombia
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
