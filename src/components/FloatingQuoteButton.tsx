import { useState, useEffect } from 'react'

const WA = '573024778910'

const WAIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.433.65 4.713 1.784 6.685L2 30l7.548-1.762A13.924 13.924 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z" fill="#fff"/>
    <path d="M16 4.5C9.649 4.5 4.5 9.649 4.5 16c0 2.21.624 4.274 1.706 6.02l.318.529-1.208 4.415 4.538-1.19.512.303A11.438 11.438 0 0016 27.5C22.351 27.5 27.5 22.351 27.5 16S22.351 4.5 16 4.5z" fill="#25D366"/>
    <path d="M12.28 10.5c-.28-.624-.574-.637-.839-.647-.217-.009-.465-.008-.713-.008-.248 0-.65.093-.991.465-.34.372-1.302 1.272-1.302 3.1s1.332 3.596 1.518 3.845c.186.248 2.575 4.097 6.321 5.583 3.128 1.234 3.747.988 4.42.926.672-.062 2.17-.886 2.479-1.74.31-.856.31-1.59.217-1.742-.093-.154-.341-.248-.713-.434-.372-.186-2.2-1.085-2.542-1.208-.34-.124-.588-.186-.837.186-.248.372-.96 1.208-1.177 1.457-.217.248-.434.279-.806.093-.372-.186-1.571-.579-2.993-1.847-1.106-.987-1.854-2.206-2.071-2.578-.217-.372-.023-.573.163-.758.168-.167.372-.434.558-.651.186-.217.248-.372.372-.62.124-.249.062-.466-.031-.652-.094-.186-.815-2.024-1.127-2.77z" fill="#fff"/>
  </svg>
)

const QUICK = [
  { label: '📐 Diseño hidrosanitario / CI',        msg: 'Hola, necesito cotización para diseño hidrosanitario o sistema contra incendios en BIC. ¿Podríamos hablar?' },
  { label: '🌊 Modelación HEC-RAS / inundación',   msg: 'Hola, necesito modelación HEC-RAS o estudio de amenaza por inundación. ¿Podríamos hablar?' },
  { label: '🏗️ Acueducto / alcantarillado',        msg: 'Hola, necesito cotización para diseño de acueducto o alcantarillado. ¿Podríamos hablar?' },
  { label: '📋 Licencia / trámite CAR',            msg: 'Hola, necesito estudios técnicos para licencia de urbanismo o trámite ante la CAR. ¿Podríamos hablar?' },
  { label: '💬 Otra consulta',                     msg: 'Hola, quisiera información sobre servicios de ingeniería hidráulica de BIC. ¿Podríamos hablar?' },
]

export default function FloatingQuoteButton() {
  const [open, setOpen] = useState(false)
  const [showBadge, setShowBadge] = useState(false)

  // Badge aparece con delay para no distraer en la carga
  useEffect(() => {
    const t = setTimeout(() => setShowBadge(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%,100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); }
          50%      { box-shadow: 0 4px 35px rgba(37,211,102,0.85), 0 0 0 10px rgba(37,211,102,0.12); }
        }
        @keyframes slideUpPanel {
          from { opacity:0; transform:translateY(14px) scale(0.97); }
          to   { opacity:1; transform:translateY(0)    scale(1);    }
        }
        @keyframes badgePop {
          from { opacity:0; transform:scale(0.7) translateY(6px); }
          to   { opacity:1; transform:scale(1)   translateY(0);   }
        }
        .wa-fab { transition: transform 0.25s cubic-bezier(.34,1.56,.64,1); }
        .wa-fab:hover { transform: scale(1.13) !important; }
        .wa-quick { display:flex; align-items:center; gap:10px; width:100%;
          padding:10px 13px; border:none; border-radius:9px; cursor:pointer;
          background:#f0f8ff; color:#1e3a52;
          font-family:'Lato',sans-serif; font-size:13.5px; font-weight:700; text-align:left;
          text-decoration:none; box-sizing:border-box;
          transition:background 0.17s, transform 0.14s; }
        .wa-quick:hover { background:#d4f0e4; transform:translateX(3px); }
      `}</style>

      {/* Badge flotante */}
      {showBadge && !open && (
        <div style={{
          position:'fixed', bottom:38, right:96, zIndex:998,
          background:'#fff', color:'#003B6F', fontWeight:700, fontSize:12.5,
          padding:'5px 13px', borderRadius:20, whiteSpace:'nowrap',
          boxShadow:'0 2px 12px rgba(0,0,0,0.13)', border:'1.5px solid #B8DDEF',
          pointerEvents:'none',
          animation:'badgePop 0.45s cubic-bezier(.34,1.56,.64,1)',
        }}>
          💬 ¿Hablamos?
        </div>
      )}

      {/* Panel */}
      {open && (
        <div style={{
          position:'fixed', bottom:96, right:20, zIndex:998,
          width:292, borderRadius:18, overflow:'hidden',
          boxShadow:'0 14px 55px rgba(0,0,0,0.22)', border:'1px solid #d4edf9',
          background:'#fff', animation:'slideUpPanel 0.28s cubic-bezier(.34,1.56,.64,1)',
        }}>
          {/* Header verde */}
          <div style={{
            background:'linear-gradient(130deg,#075E54 0%,#128C7E 55%,#25D366 100%)',
            padding:'14px 18px', display:'flex', alignItems:'center', gap:11,
          }}>
            <WAIcon size={32} />
            <div>
              <p style={{ color:'#fff', fontWeight:800, fontSize:14, margin:0, fontFamily:"'Montserrat',sans-serif" }}>
                BIC Bernal Ingeniería
              </p>
              <p style={{ color:'rgba(255,255,255,0.88)', fontSize:11.5, margin:'2px 0 0', fontFamily:"'Lato',sans-serif" }}>
                Respuesta en &lt; 2 h · Primera consulta gratis
              </p>
            </div>
          </div>

          <div style={{ padding:'14px 16px 4px' }}>
            {/* Botón principal — 1 clic */}
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, quisiera información sobre servicios de ingeniería hidráulica de BIC. ¿Podríamos hablar?')}`}
              target="_blank" rel="noreferrer"
              style={{
                display:'flex', alignItems:'center', justifyContent:'center', gap:9,
                background:'#25D366', color:'#fff',
                fontFamily:"'Montserrat',sans-serif", fontWeight:800, fontSize:15,
                padding:'12px 16px', borderRadius:10, textDecoration:'none',
                boxShadow:'0 3px 14px rgba(37,211,102,0.4)',
                transition:'all .18s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1eba57')}
              onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
            >
              <WAIcon size={20} />&nbsp;Chatear con BIC ahora
            </a>
            <p style={{ textAlign:'center', fontSize:10.5, color:'#aaa', margin:'5px 0 11px', fontFamily:"'Lato',sans-serif" }}>
              Un clic — abre WhatsApp inmediatamente
            </p>

            {/* Separador */}
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:9 }}>
              <div style={{ flex:1, height:1, background:'#e5f0f7' }} />
              <span style={{ fontSize:10.5, color:'#bbb', fontFamily:"'Lato',sans-serif", whiteSpace:'nowrap' }}>o elige tu consulta</span>
              <div style={{ flex:1, height:1, background:'#e5f0f7' }} />
            </div>

            {/* Accesos rápidos — sin formulario */}
            <div style={{ display:'flex', flexDirection:'column', gap:5, paddingBottom:6 }}>
              {QUICK.map(q => (
                <a
                  key={q.label}
                  href={`https://wa.me/${WA}?text=${encodeURIComponent(q.msg)}`}
                  target="_blank" rel="noreferrer"
                  className="wa-quick"
                >
                  {q.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{
            background:'#f0f8ff', padding:'8px 16px',
            borderTop:'1px solid #daeef8',
          }}>
            <span style={{ fontSize:10.5, color:'#7a9db5', fontFamily:"'Lato',sans-serif" }}>
              🔒 Consulta confidencial · COPNIA 17202-313228
            </span>
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
          boxShadow: open
            ? '0 4px 20px rgba(0,59,111,0.38)'
            : '0 4px 20px rgba(37,211,102,0.5)',
          display:'flex', alignItems:'center', justifyContent:'center',
          animation: open ? 'none' : 'waPulse 2.5s infinite',
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
