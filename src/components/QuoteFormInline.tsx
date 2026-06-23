import { useState } from 'react'

const WA = '573024778910'
const EMAIL = 'robernalri@unal.edu.co'

const SERVICE_MESSAGES: Record<string, string> = {
  'decreto1807':     'Hola, necesito un estudio de gestion del riesgo hidrico (Decreto 1807) para mi proyecto. Me pueden cotizar?',
  'hec-ras-2d':      'Hola, necesito una modelacion hidraulica HEC-RAS 2D para plan parcial o licencia. Me pueden cotizar?',
  'hec-ras-1d':      'Hola, necesito una modelacion hidraulica HEC-RAS 1D. Me pueden cotizar?',
  'hidrologico':     'Hola, necesito un estudio hidrologico (caudales de diseno, HEC-HMS). Me pueden cotizar?',
  'socavacion':      'Hola, necesito un analisis de socavacion en puentes (HEC-18). Me pueden cotizar?',
  'topobatimetria':  'Hola, necesito topobatimetria o levantamiento de secciones para modelo HEC-RAS. Me pueden cotizar?',
  'hidrosanitario':  'Hola, necesito el diseno hidrosanitario (redes AP, AR, AL y CI) para mi edificio. Me pueden cotizar?',
  'acueducto':       'Hola, necesito un diseno de acueducto y alcantarillado conforme al RAS 2017. Me pueden cotizar?',
  'regalias':        'Hola, necesito formular un proyecto de agua y saneamiento en MGA-Web para regalias. Me pueden ayudar?',
  'consulta':        'Hola, quisiera agendar una consulta tecnica (1 hora). En que dias tienen disponibilidad?',
  'ptar':            'Hola, necesito el diseno de una PTAR y el tramite del permiso de vertimiento. Me pueden cotizar?',
  'ptap':            'Hola, necesito el diseno de una PTAP para mi proyecto. Me pueden cotizar?',
  'bocatoma':        'Hola, necesito el diseno de una bocatoma y red de acueducto rural. Me pueden cotizar?',
  'ronda':           'Hola, necesito la delimitacion de ronda hidrica y ZMPA para mi predio. Me pueden cotizar?',
  'permiso':         'Hola, necesito tramitar un permiso de vertimiento ante la CAR. Me pueden ayudar?',
  'concesion':       'Hola, necesito tramitar una concesion de aguas superficiales. Me pueden ayudar?',
}

const DEFAULT_MSG = 'Hola, me interesa una propuesta de BIC Bernal Ingenieria Consultores. Podrian cotizarme?'

export default function QuoteFormInline({ serviceId }: { serviceId?: string }) {
  const baseMsg = (serviceId && SERVICE_MESSAGES[serviceId]) || DEFAULT_MSG
  const [note, setNote] = useState('')

  const buildWAMsg = () => {
    if (!note.trim()) return encodeURIComponent(baseMsg)
    return encodeURIComponent(baseMsg + '\n\nDetalle: ' + note.trim())
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #EBF5F9 0%, #f5fbff 100%)',
      border: '2px solid #B8DDEF', borderRadius: 16, padding: '2rem',
      marginTop: '2.5rem', marginBottom: '1rem', maxWidth: 640, margin: '2.5rem auto 1rem',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1rem' }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#003B6F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>📋</div>
        <div>
          <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#003B6F', fontSize: '1.05rem', margin: 0 }}>
            Cotización sin costo — respuesta en 24 h
          </h3>
          <p style={{ color: '#5a7f99', fontSize: 12.5, margin: '3px 0 0', fontFamily: "'Lato', sans-serif" }}>
            Primera consulta gratuita · Habla directamente con el ingeniero
          </p>
        </div>
      </div>

      {/* Trust signal */}
      <div style={{
        background: '#fff', border: '1px solid #B8DDEF', borderRadius: 8,
        padding: '10px 14px', marginBottom: '1.25rem', display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <span style={{ fontSize: 18, flexShrink: 0 }}>👤</span>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 12.5, color: '#1e3a52', margin: 0, lineHeight: 1.5 }}>
          <strong>Ing. Rogerio Bernal Ríos</strong> · COPNIA 17202-313228 CLD · Universidad Nacional de Colombia<br />
          Sin intermediarios. Responde personalmente en menos de 24 horas hábiles.
        </p>
      </div>

      {/* Optional note */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{
          display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
          fontSize: 11.5, color: '#003B6F', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em',
        }}>
          Cuéntenos brevemente su proyecto <span style={{ fontWeight: 400, color: '#6b8fa8' }}>(opcional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Ej: tengo un predio de 2 ha en Chinchiná, necesito estudio de riesgo hídrico para licencia de construcción..."
          value={note}
          onChange={e => setNote(e.target.value)}
          style={{
            width: '100%', padding: '10px 13px', borderRadius: 8, fontSize: 14,
            border: '1.5px solid #D0E8F2', outline: 'none', boxSizing: 'border-box',
            fontFamily: "'Lato', sans-serif", color: '#1e3a52', background: '#fff',
            resize: 'vertical', transition: 'border-color .2s',
          }}
          onFocus={e => { e.currentTarget.style.borderColor = '#17A2B8' }}
          onBlur={e => { e.currentTarget.style.borderColor = '#D0E8F2' }}
        />
      </div>

      {/* Primary CTA — WhatsApp */}
      <a
        href={`https://wa.me/${WA}?text=${buildWAMsg()}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 24px',
          fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 15,
          textDecoration: 'none', width: '100%', boxSizing: 'border-box',
          boxShadow: '0 4px 14px rgba(37,211,102,0.35)', transition: 'opacity .15s',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
      >
        <svg width="22" height="22" viewBox="0 0 32 32" fill="white"><path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.65 4.79 1.79 6.82L2 30l7.37-1.77A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.1 19.44c-.3.84-1.75 1.61-2.41 1.71-.62.1-1.41.14-2.27-.14-.52-.17-1.19-.4-2.05-.77-3.6-1.56-5.95-5.17-6.13-5.41-.18-.24-1.47-1.96-1.47-3.74s.93-2.66 1.26-3.02c.33-.36.72-.45.96-.45.24 0 .48.01.69.02.22.01.52-.08.81.62.3.72 1.02 2.5 1.11 2.68.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.37-.16.73.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.63 2.92 1.81.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.71z"/></svg>
        📱 Enviar consulta por WhatsApp
      </a>

      {/* Secondary — email */}
      <p style={{ textAlign: 'center', marginTop: 14, fontFamily: "'Lato', sans-serif", fontSize: 12.5, color: '#6b8fa8' }}>
        También puede escribirnos a{' '}
        <a href={`mailto:${EMAIL}`} style={{ color: '#003B6F', fontWeight: 700, textDecoration: 'none' }}>
          {EMAIL}
        </a>
      </p>
    </div>
  )
}
