import { useState } from 'react'

const WA = '573024778910'

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
        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(0,59,111,0.4); }
          50% { box-shadow: 0 4px 30px rgba(23,162,184,0.6); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label="Solicitar cotización"
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 999,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #003B6F 0%, #17A2B8 100%)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,59,111,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          animation: isOpen ? 'none' : 'pulse 2s infinite',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15)'
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,59,111,0.6)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,59,111,0.4)'
        }}
      >
        {isOpen ? '✕' : '💬'}
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
              background: 'linear-gradient(135deg, #003B6F 0%, #17A2B8 100%)',
              padding: '16px 20px',
            }}
          >
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, margin: 0 }}>
              💬 Cotización rápida
            </p>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: 12,
                margin: '4px 0 0',
              }}
            >
              Te respondo en menos de 2 horas
            </p>
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
