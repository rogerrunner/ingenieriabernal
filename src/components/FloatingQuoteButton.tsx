import { useState, useEffect } from 'react'

const WA = '573024778910'

const WAIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.433.65 4.713 1.784 6.685L2 30l7.548-1.762A13.924 13.924 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#fff"/>
    <path d="M16 4.5C9.649 4.5 4.5 9.649 4.5 16c0 2.21.624 4.274 1.706 6.02l.318.529-1.208 4.415 4.538-1.19.512.303A11.438 11.438 0 0016 27.5C22.351 27.5 27.5 22.351 27.5 16S22.351 4.5 16 4.5z" fill="#25D366"/>
    <path d="M12.28 10.5c-.28-.624-.574-.637-.839-.647-.217-.009-.465-.008-.713-.008-.248 0-.65.093-.991.465-.34.372-1.302 1.272-1.302 3.1s1.332 3.596 1.518 3.845c.186.248 2.575 4.097 6.321 5.583 3.128 1.234 3.747.988 4.42.926.672-.062 2.17-.886 2.479-1.74.31-.856.31-1.59.217-1.742-.093-.154-.341-.248-.713-.434-.372-.186-2.2-1.085-2.542-1.208-.34-.124-.588-.186-.837.186-.248.372-.96 1.208-1.177 1.457-.217.248-.434.279-.806.093-.372-.186-1.571-.579-2.993-1.847-1.106-.987-1.854-2.206-2.071-2.578-.217-.372-.023-.573.163-.758.168-.167.372-.434.558-.651.186-.217.248-.372.372-.62.124-.249.062-.466-.031-.652-.094-.186-.815-2.024-1.127-2.77z" fill="#fff"/>
  </svg>
)

export default function FloatingQuoteButton() {
  const [open, setOpen]           = useState(false)
  const [showBadge, setShowBadge] = useState(false)
  const [name, setName]           = useState('')
  const [city, setCity]           = useState('')

  useEffect(() => {
    const t = setTimeout(() => setShowBadge(true), 2500)
    return () => clearTimeout(t)
  }, [])

  const handleSend = () => {
    const msg = name.trim()
      ? `Hola, soy ${name.trim()}${city.trim() ? ' de ' + city.trim() : ''}. Me interesa una consulta con BIC. ¿Podríamos conversar?`
      : 'Hola, me interesa una consulta con BIC. ¿Podríamos conversar?'
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank')
    setOpen(false)
    setName('')
    setCity('')
  }

  const inp: React.CSSProperties = {
    width: '100%', padding: '9px 12px', borderRadius: 8, fontSize: 13.5,
    border: '1.5px solid #D0E8F2', outline: 'none', boxSizing: 'border-box',
    fontFamily: "'Lato', sans-serif", color: '#1e3a52', background: '#fff',
    transition: 'border-color .18s',
  }

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%,100% { box-shadow: 0 4px 24px rgba(37,211,102,0.55); }
          50%      { box-shadow: 0 4px 38px rgba(37,211,102,0.9), 0 0 0 10px rgba(37,211,102,0.13); }
        }
        @keyframes badgeIn {
          from { opacity:0; transform:translateX(8px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes panelUp {
          from { opacity:0; transform:translateY(12px) scale(0.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .wa-fab { animation: waPulse 2.5s infinite; transition: transform .22s cubic-bezier(.34,1.56,.64,1); }
        .wa-fab:hover { transform: scale(1.13) !important; }
        .wa-send:hover { background: #1eba57 !important; transform: scale(1.02); }
      `}</style>

      {/* Badge */}
      {showBadge && !open && (
        <div style={{
          position:'fixed', bottom:38, right:96, zIndex:998,
          background:'#fff', color:'#003B6F',
          fontFamily:"'Montserrat',sans-serif", fontWeight:700, fontSize:12.5,
          padding:'6px 14px', borderRadius:20, whiteSpace:'nowrap',
          boxShadow:'0 2px 14px rgba(0,0,0,0.12)', border:'1.5px solid #B8DDEF',
          pointerEvents:'none', animation:'badgeIn 0.4s cubic-bezier(.34,1.56,.64,1)',
        }}>
          💬 ¿Hablamos?
        </div>
      )}

      {/* Panel */}
      {open && (
        <div style={{
          position:'fixed', bottom:96, right:20, zIndex:998,
          width:272, borderRadius:16, overflow:'hidden',
          boxShadow:'0 12px 50px rgba(0,0,0,0.2)', border:'1px solid #d4edf9',
          background:'#fff', animation:'panelUp 0.26s cubic-bezier(.34,1.56,.64,1)',
        }}>
          {/* Header */}
          <div style={{
            background:'linear-gradient(130deg,#075E54 0%,#128C7E 55%,#25D366 100%)',
            padding:'13px 16px', display:'flex', alignItems:'center', gap:10,
          }}>
            <WAIcon size={30} />
            <div>
              <p style={{ color:'#fff', fontWeight:800, fontSize:13.5, margin:0, fontFamily:"'Montserrat',sans-serif" }}>
                BIC Bernal Ingeniería
              </p>
              <p style={{ color:'rgba(255,255,255,0.85)', fontSize:11, margin:'2px 0 0', fontFamily:"'Lato',sans-serif" }}>
                Respuesta &lt; 2 h · Primera consulta gratis
              </p>
            </div>
          </div>

          {/* Formulario mínimo */}
          <div style={{ padding:'14px 16px 16px' }}>
            <input
              style={inp}
              placeholder="Tu nombre"
              value={name}
              onChange={e => setName(e.target.value)}
              onFocus={e  => { e.currentTarget.style.borderColor = '#25D366' }}
              onBlur={e   => { e.currentTarget.style.borderColor = '#D0E8F2' }}
              onKeyDown={e => { if (e.key === 'Enter') handleSend() }}
            />
            <input
              style={{ ...inp, marginTop: 8 }}
              placeholder="Tu ciudad"
              value={city}
              onChange={e => setCity(e.target.value)}
              onFocus={e  => { e.currentTarget.style.borderColor = '#25D366' }}
              onBlur={e   => { e.currentTarget.style.borderColor = '#D0E8F2' }}
              onKeyDown={e => { if (e.key === 'Enter') handleSend() }}
            />
            <button
              onClick={handleSend}
              className="wa-send"
              style={{
                marginTop:10, width:'100%', padding:'11px',
                background:'#25D366', color:'#fff', border:'none', borderRadius:9,
                fontFamily:"'Montserrat',sans-serif", fontWeight:800, fontSize:14,
                cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                transition:'all .18s',
              }}
            >
              <WAIcon size={18} /> Enviar por WhatsApp
            </button>
            <p style={{ textAlign:'center', fontSize:10.5, color:'#aaa', margin:'6px 0 0', fontFamily:"'Lato',sans-serif" }}>
              Se abre WhatsApp con tu mensaje listo
            </p>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Cerrar' : 'Contactar por WhatsApp'}
        className="wa-fab"
        style={{
          position:'fixed', bottom:24, right:24, zIndex:999,
          width:60, height:60, borderRadius:'50%', border:'none', cursor:'pointer',
          background: open ? '#003B6F' : '#25D366',
          boxShadow: open ? '0 4px 20px rgba(0,59,111,0.38)' : '0 4px 20px rgba(37,211,102,0.5)',
          display:'flex', alignItems:'center', justifyContent:'center',
          animation: open ? 'none' : 'waPulse 2.5s infinite',
          transition:'background .2s, box-shadow .2s',
        }}
      >
        {open
          ? <span style={{ color:'#fff', fontSize:22, lineHeight:1 }}>✕</span>
          : <WAIcon size={30} />
        }
      </button>
    </>
  )
}
