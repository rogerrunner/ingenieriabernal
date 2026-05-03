import { useState } from 'react'

const WA = '573024778910'
const EMAIL = 'rogeriobernal@ingenieriabernal.co'

const SERVICES_PRICING = [
  { id: 'consulta', label: 'Consulta técnica (1 h online)', price: '$250.000 COP', detail: 'Revisión de caso, orientación normativa y hoja de ruta para su proyecto.' },
  { id: 'hec-ras-1d', label: 'Modelación HEC-RAS 1D', price: 'desde $9.000.000 COP', detail: 'Perfil hidráulico, diseño de alcantarilla o puente, cálculo de socavación.' },
  { id: 'hec-ras-2d', label: 'Modelación HEC-RAS 2D (plan parcial / POT)', price: 'desde $20.000.000 COP', detail: 'Mapa de inundación Tr 10/50/100 años, estudio de amenaza Decreto 1807.' },
  { id: 'socavacion', label: 'Análisis de socavación en puentes (HEC-18)', price: 'desde $9.000.000 COP', detail: 'Socavación general, por contracción y local en pilas y estribos. Informe INVIAS.' },
  { id: 'hidrologico', label: 'Estudio hidrológico', price: 'desde $8.000.000 COP', detail: 'Análisis de frecuencias, HEC-HMS, caudales de diseño por períodos de retorno.' },
  { id: 'topobatimetria', label: 'Topobatimetría y levantamiento fluvial', price: 'desde $7.500.000 COP', detail: 'Secciones transversales del cauce para modelo HEC-RAS.' },
  { id: 'decreto1807', label: 'Estudio amenaza Decreto 1807 (licencia constr.)', price: 'desde $14.000.000 COP', detail: 'HEC-HMS + HEC-RAS 2D + informe técnico apto para curaduría y CAR.' },
  { id: 'acueducto', label: 'Diseño acueducto / alcantarillado', price: 'desde $10.000.000 COP', detail: 'Diseño hidráulico, memoria RAS 2017, planos constructivos.' },
  { id: 'hidrosanitario', label: 'Diseño hidrosanitario edificio', price: 'desde $5.500.000 COP', detail: 'Redes internas agua fría/caliente, aguas residuales y aguas lluvias NSR-10.' },
  { id: 'regalias', label: 'Formulación MGA-Web / regalías', price: 'desde $18.000.000 COP', detail: 'Formulación y radicación de proyecto de acueducto o alcantarillado en MGA-Web.' },
  { id: 'otro', label: 'Otro / no estoy seguro', price: '', detail: 'Descríbanos su proyecto y le orientamos sin costo.' },
]

const REGIONS = [
  'Manizales / Caldas (sede central BIC)',
  'Eje Cafetero (Pereira, Armenia, Dosquebradas)',
  'Medellín / Antioquia',
  'Bogotá / Cundinamarca',
  'Cali / Valle del Cauca',
  'Bucaramanga / Santander',
  'Barranquilla / Costa Caribe',
  'Otra región de Colombia',
]

export default function QuoteFormInline({ serviceId }: { serviceId?: string }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', region: '', service: serviceId || '', description: '',
  })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const selectedService = SERVICES_PRICING.find(s => s.id === form.service)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Requerido'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido'
    if (!form.service) e.service = 'Seleccione un servicio'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    const svc = selectedService ? selectedService.label : form.service
    const msg = encodeURIComponent(
      `Hola, soy ${form.name}.\n` +
      `📍 Región: ${form.region || 'no indicada'}\n` +
      `🔧 Servicio: ${svc}${selectedService?.price ? ' (' + selectedService.price + ')' : ''}\n` +
      `📧 Email: ${form.email}\n` +
      `📞 Tel: ${form.phone || 'no indicado'}\n` +
      `📝 Proyecto: ${form.description || 'sin detalle adicional'}`
    )
    window.open(`https://wa.me/${WA}?text=${msg}`, '_blank')
    setSent(true)
  }

  const inp: React.CSSProperties = {
    width: '100%', padding: '10px 13px', borderRadius: 8, fontSize: 14,
    border: '1.5px solid #D0E8F2', outline: 'none', boxSizing: 'border-box',
    fontFamily: "'Lato', sans-serif", color: '#1e3a52', background: '#fff',
    transition: 'border-color .2s',
  }
  const lbl: React.CSSProperties = {
    display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
    fontSize: 11.5, color: '#003B6F', marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.04em',
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #EBF5F9 0%, #f5fbff 100%)',
      border: '2px solid #B8DDEF', borderRadius: 16, padding: '2rem',
      marginTop: '2.5rem', marginBottom: '1rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#003B6F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>📋</div>
        <div>
          <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: '1.05rem', margin: 0 }}>
            Solicitar cotización — BIC Bernal Ingeniería
          </h3>
          <p style={{ color: '#5a7f99', fontSize: 12.5, margin: '3px 0 0', fontFamily: "'Lato', sans-serif" }}>
            Primera consulta sin costo · Respuesta en &lt; 24 horas hábiles · WhatsApp + correo
          </p>
        </div>
      </div>

      {/* Pricing table */}
      <div style={{
        background: '#fff', borderRadius: 10, border: '1px solid #D0E8F2',
        marginBottom: '1.5rem', overflow: 'hidden',
      }}>
        <div style={{ background: '#003B6F', padding: '8px 16px' }}>
          <p style={{ color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Precios de referencia — Eje Cafetero 2026 (otras regiones: +10–20%)
          </p>
        </div>
        {SERVICES_PRICING.filter(s => s.id !== 'otro').map(svc => (
          <div key={svc.id} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            padding: '9px 16px', borderBottom: '1px solid #EBF5F9', gap: 8, flexWrap: 'wrap',
          }}>
            <div style={{ flex: 1, minWidth: 180 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#1e3a52', fontSize: 12, margin: 0 }}>{svc.label}</p>
              <p style={{ color: '#6b8fa8', fontSize: 11, margin: '2px 0 0', fontFamily: "'Lato', sans-serif" }}>{svc.detail}</p>
            </div>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#17A2B8', fontSize: 12, whiteSpace: 'nowrap' }}>{svc.price}</span>
          </div>
        ))}
      </div>

      {!sent ? (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={lbl}>Nombre y apellido *</label>
              <input style={{ ...inp, borderColor: errors.name ? '#e53e3e' : '#D0E8F2' }}
                placeholder="Ej: Andrés Ospina"
                value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                onFocus={e => { e.currentTarget.style.borderColor = '#17A2B8' }}
                onBlur={e => { e.currentTarget.style.borderColor = errors.name ? '#e53e3e' : '#D0E8F2' }}
              />
              {errors.name && <span style={{ color: '#e53e3e', fontSize: 11 }}>{errors.name}</span>}
            </div>
            <div>
              <label style={lbl}>Correo electrónico *</label>
              <input style={{ ...inp, borderColor: errors.email ? '#e53e3e' : '#D0E8F2' }}
                placeholder="correo@empresa.com" type="email"
                value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                onFocus={e => { e.currentTarget.style.borderColor = '#17A2B8' }}
                onBlur={e => { e.currentTarget.style.borderColor = errors.email ? '#e53e3e' : '#D0E8F2' }}
              />
              {errors.email && <span style={{ color: '#e53e3e', fontSize: 11 }}>{errors.email}</span>}
            </div>
            <div>
              <label style={lbl}>Teléfono / WhatsApp</label>
              <input style={inp} placeholder="+57 300 000 0000" type="tel"
                value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                onFocus={e => { e.currentTarget.style.borderColor = '#17A2B8' }}
                onBlur={e => { e.currentTarget.style.borderColor = '#D0E8F2' }}
              />
            </div>
            <div>
              <label style={lbl}>Región / ciudad del proyecto</label>
              <select style={{ ...inp, background: '#fff' }}
                value={form.region} onChange={e => setForm(f => ({ ...f, region: e.target.value }))}
                onFocus={e => { e.currentTarget.style.borderColor = '#17A2B8' }}
                onBlur={e => { e.currentTarget.style.borderColor = '#D0E8F2' }}
              >
                <option value="">Seleccionar región…</option>
                {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={lbl}>Servicio requerido *</label>
            <select style={{ ...inp, borderColor: errors.service ? '#e53e3e' : '#D0E8F2', background: '#fff' }}
              value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
              onFocus={e => { e.currentTarget.style.borderColor = '#17A2B8' }}
              onBlur={e => { e.currentTarget.style.borderColor = errors.service ? '#e53e3e' : '#D0E8F2' }}
            >
              <option value="">Seleccione el servicio…</option>
              {SERVICES_PRICING.map(s => (
                <option key={s.id} value={s.id}>{s.label}{s.price ? ' — ' + s.price : ''}</option>
              ))}
            </select>
            {errors.service && <span style={{ color: '#e53e3e', fontSize: 11 }}>{errors.service}</span>}
            {selectedService?.detail && (
              <p style={{ color: '#17A2B8', fontSize: 12, margin: '5px 0 0', fontFamily: "'Lato', sans-serif" }}>
                ℹ️ {selectedService.detail}
              </p>
            )}
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={lbl}>Descripción del proyecto</label>
            <textarea style={{ ...inp, resize: 'vertical', minHeight: 80 } as React.CSSProperties}
              placeholder="Describa brevemente el proyecto: municipio, tipo de fuente hídrica, etapa (diseño, licencia, licitación), entidad que solicita el estudio…"
              value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              onFocus={e => { e.currentTarget.style.borderColor = '#17A2B8' }}
              onBlur={e => { e.currentTarget.style.borderColor = '#D0E8F2' }}
            />
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <button type="submit" style={{
              background: '#25D366', color: '#fff', fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800, fontSize: 14, padding: '12px 24px', border: 'none',
              borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
              transition: 'all .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1eba57'; e.currentTarget.style.transform = 'scale(1.02)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              📱 Enviar por WhatsApp
            </button>
            <a href={`mailto:${EMAIL}?subject=Cotización BIC — Ingeniería Hidráulica`}
              style={{ color: '#17A2B8', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
              ✉️ Enviar por correo
            </a>
          </div>
          <p style={{ color: '#6b8fa8', fontSize: 11.5, margin: '10px 0 0', fontFamily: "'Lato', sans-serif" }}>
            Al enviar, se abre WhatsApp con su consulta prellenada. También puede escribirnos directamente a{' '}
            <a href={`mailto:${EMAIL}`} style={{ color: '#17A2B8' }}>{EMAIL}</a>
          </p>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>✅</div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: '1.1rem', margin: '0 0 8px' }}>
            ¡Cotización enviada!
          </p>
          <p style={{ color: '#5a7f99', fontSize: 14, margin: 0 }}>
            Abra WhatsApp y le responderemos en menos de 24 horas hábiles.<br />
            También le enviamos respuesta a <strong>{form.email}</strong>
          </p>
        </div>
      )}
    </div>
  )
}
