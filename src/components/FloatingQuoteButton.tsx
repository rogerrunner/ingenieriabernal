import { useState } from 'react'

const WA = '573024778910'

const WAIcon = () => (
  <svg viewBox="0 0 32 32" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.433.65 4.713 1.784 6.685L2 30l7.548-1.762A13.924 13.924 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#fff"/>
    <path d="M16 4.5C9.649 4.5 4.5 9.649 4.5 16c0 2.21.624 4.274 1.706 6.02l.318.529-1.208 4.415 4.538-1.19.512.303A11.438 11.438 0 0016 27.5C22.351 27.5 27.5 22.351 27.5 16S22.351 4.5 16 4.5z" fill="#25D366"/>
    <path d="M12.28 10.5c-.28-.624-.574-.637-.839-.647-.217-.009-.465-.008-.713-.008-.248 0-.65.093-.991.465-.34.372-1.302 1.272-1.302 3.1s1.332 3.596 1.518 3.845c.186.248 2.575 4.097 6.321 5.583 3.128 1.234 3.747.988 4.42.926.672-.062 2.17-.886 2.479-1.74.31-.856.31-1.59.217-1.742-.093-.154-.341-.248-.713-.434-.372-.186-2.2-1.085-2.542-1.208-.34-.124-.588-.186-.837.186-.248.372-.96 1.208-1.177 1.457-.217.248-.434.279-.806.093-.372-.186-1.571-.579-2.993-1.847-1.106-.987-1.854-2.206-2.071-2.578-.217-.372-.023-.573.163-.758.168-.167.372-.434.558-.651.186-.217.248-.372.372-.62.124-.249.062-.466-.031-.652-.094-.186-.815-2.024-1.127-2.77z" fill="#fff"/>
  </svg>
)

export default function FloatingQuoteButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', city: '', service: '' })
  const [submitted, setSubmitted] = useState(false)

  const services = [
    'Diseño hidrosanitario y contra incendios',
    'Modelación HEC-RAS / estudio inundación',
    'Acueducto y alcantarillado',
    'Gestión del riesgo / POT',
    'PTAP o PTAR',
    'Topobatimetría y topografía',
    'Formulación proyectos regalías MGA-Web',
    'Residencia / interventoría de obra',
    'Otro / consulta general',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.city) return
    const msg = encodeURIComponent(
      `Hola, soy ${formData.name} de ${formData.city}. ` +
      `Me interesa una consulta con BIC sobre: ${formData.service || 'consulta general'}. ` +
      `¿Podríamos conversar?`
    )
    window.open(`https://wa.me/${WA}?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setFormData({ name: '', city: '', service: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); }
          50% { box-shadow: 0 4px 35px rgba(37,211,102,0.85), 0 0 0 8px rgba(37,211,102,0.15); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wa-fab:hover { transform: scale(1.12) !important; box-shadow: 0 8px 30px rgba(37,211,102,0.7) !important; }
        .wa-fab-close:hover { transform: scale(1.12) !important; }
      `}</style>

      {/* Etiqueta flotante "¿Hablamos?" */}
      {!isOpen && (
        <div style={{
          position: 'fixed', bottom: 36, right: 94, zIndex: 998,
          background: '#fff', color: '#003B6F', fontWeight: 700, fontSize: 13,
          padding: '6px 14px', borderRadius: 20,
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          whiteSpace: 'nowrap', pointerEvents: 'none',
          border: '1px solid #e0edf5',
          animation: 'slideUp 0.4s ease-out',
        }}>
          💬 ¿Hablamos?
        </div>
      )}

      {/* Botón WhatsApp flotante */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? 'Cerrar' : 'Contactar por WhatsApp'}
        className={isOpen ? 'wa-fab-close' : 'wa-fab'}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 999,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: isOpen ? '#003B6F' : '#25D366',
          border: 'none',
          cursor: 'pointer',
          boxShadow: isOpen ? '0 4px 20px rgba(0,59,111,0.4)' : '0 4px 20px rgba(37,211,102,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          animation: isOpen ? 'none' : 'waPulse 2.5s infinite',
        }}
      >
        {isOpen ? <span style={{ color: '#fff', fontSize: 20 }}>✕</span> : <WAIcon />}
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 96,
            right: 28,
            zIndex: 998,
            width: 300,
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 12px 50px rgba(0,0,0,0.25)',
            border: '1px solid #e0edf5',
            overflow: 'hidden',
            animation: 'slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
              padding: '14px 20px',
              display: 'flex', alignItems: 'center', gap: 10,
            }}
          >
            <WAIcon />
            <div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: 14, margin: 0 }}>
                WhatsApp — BIC Bernal Ingeniería
              </p>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 11, margin: '2px 0 0' }}>
                Responde en &lt; 2 horas hábiles · Primera consulta gratis
              </p>
            </div>
          </div>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ padding: '16px 20px' }}>
              <input
                required
                placeholder="Tu nombre *"
                value={formData.name}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, name: e.target.value }))
                }
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: 8,
                  border: '1px solid #deedf5',
                  fontSize: 13,
                  marginBottom: 10,
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = '#17A2B8')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = '#deedf5')
                }
              />
              <input
                required
                placeholder="Tu ciudad *"
                value={formData.city}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, city: e.target.value }))
                }
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: 8,
                  border: '1px solid #deedf5',
                  fontSize: 13,
                  marginBottom: 10,
                  boxSizing: 'border-box',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = '#17A2B8')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = '#deedf5')
                }
              />
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, service: e.target.value }))
                }
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: 8,
                  border: '1px solid #deedf5',
                  fontSize: 13,
                  marginBottom: 14,
                  boxSizing: 'border-box',
                  background: '#fff',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = '#17A2B8')
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = '#deedf5')
                }
              >
                <option value="">Selecciona el servicio...</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: 8,
                  border: 'none',
                  background: '#25D366',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#20BA58'
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#25D366'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <span>📱</span> Abrir WhatsApp
              </button>
              <p
                style={{
                  fontSize: 11,
                  color: '#888',
                  textAlign: 'center',
                  margin: '8px 0 0',
                }}
              >
                Se abre WhatsApp con el mensaje prellenado
              </p>
            </form>
          ) : (
            <div
              style={{
                padding: '20px',
                textAlign: 'center',
                animation: 'slideUp 0.3s ease-out',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✓</div>
              <p
                style={{
                  color: '#003B6F',
                  fontWeight: 700,
                  fontSize: 14,
                  margin: 0,
                }}
              >
                ¡Gracias por tu interés!
              </p>
              <p
                style={{
                  color: '#666',
                  fontSize: 12,
                  margin: '6px 0 0',
                  lineHeight: 1.5,
                }}
              >
                Abre WhatsApp y nos conectamos en menos de 2 horas.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}
