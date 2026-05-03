import { Link } from 'wouter'

const SERVICES = [
  { label: 'Hidrosanitario y CI', path: '/servicios' },
  { label: 'Modelación HEC-RAS 2D', path: '/servicios' },
  { label: 'Acueducto y Alcantarillado', path: '/servicios' },
  { label: 'Gestión del Riesgo / POT', path: '/servicios' },
  { label: 'PTAP y PTAR', path: '/servicios' },
  { label: 'Topobatimetría', path: '/servicios' },
  { label: 'Regalías MGA-Web', path: '/servicios' },
  { label: 'Ingeniería Ambiental', path: '/servicios' },
  { label: 'Residencia e Interventoría', path: '/servicios' },
]

const CITIES = [
  { label: 'Manizales', path: '/manizales' },
  { label: 'Eje Cafetero', path: '/eje-cafetero' },
  { label: 'Palestina — Aerocafé', path: '/palestina-aerocafe' },
  { label: 'Viterbo y Occidente Caldas', path: '/viterbo-occidente-caldas' },
  { label: 'Magdalena Medio', path: '/magdalena-medio' },
  { label: 'Cerritos y Norte Valle', path: '/cerritos-norte-valle' },
  { label: 'Rionegro y Oriente Ant.', path: '/rionegro-oriente-antioquia' },
  { label: 'Sabana Norte', path: '/sabana-norte' },
  { label: 'Bucaramanga', path: '/bucaramanga-area' },
  { label: 'Ver cobertura nacional →', path: '/cobertura-nacional' },
]

const lnk: React.CSSProperties = {
  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
  fontFamily: "'Lato', sans-serif", fontSize: 13,
  display: 'block', marginBottom: 8, transition: 'color 0.2s',
}

export default function Footer() {
  return (
    <footer style={{ background: '#001A33', padding: '56px 40px 24px' }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr 1.5fr', gap: '2.5rem', marginBottom: '3rem' }}>

          {/* Marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, border: '2px solid #17A2B8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#17A2B8', fontSize: 14 }}>
                BIC
              </div>
              <div>
                <div style={{ color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14 }}>Bernal Ingeniería Consultores</div>
                <div style={{ color: '#17A2B8', fontSize: 10, fontFamily: "'Lato', sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>Consultoría Integral · Colombia</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
              Hidráulica, geotecnia, arquitectura, ambiental y estructural bajo una sola dirección técnica. Director: Rogerio Bernal Ríos — UNAL · COPNIA 17202-313228.
            </p>
            <a href="https://wa.me/573024778910?text=Hola%2C%20me%20interesa%20una%20consultoría%20con%20BIC"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#17A2B8', color: '#fff', padding: '9px 18px', borderRadius: 2, fontSize: 13, fontWeight: 600, textDecoration: 'none', fontFamily: "'Montserrat', sans-serif" }}>
              📱 +57 302 477 8910
            </a>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Servicios</h4>
            {SERVICES.map(s => (
              <Link key={s.label} href={s.path} style={lnk}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#17A2B8')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}>
                {s.label}
              </Link>
            ))}
          </div>

          {/* Cobertura */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Cobertura</h4>
            {CITIES.map(c => (
              <Link key={c.label} href={c.path} style={lnk}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#17A2B8')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}>
                {c.label}
              </Link>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Contacto</h4>
            <p style={{ ...lnk, cursor: 'default' }}>Calle 65A #23B-24<br />Manizales, Caldas · Colombia</p>
            <a href="mailto:rogeriobernal@ingenieriabernal.co" style={lnk}>rogeriobernal@ingenieriabernal.co</a>
            <a href="https://wa.me/573024778910" style={lnk}>+57 302 477 8910</a>
            <p style={{ ...lnk, cursor: 'default', marginTop: 12 }}>Lun–Vie 8am–6pm<br />Sábados 9am–1pm</p>
            <div style={{ marginTop: 16 }}>
              {['UNAL Manizales', 'COPNIA', 'TOEFL 98'].map(b => (
                <span key={b} style={{ display: 'inline-block', padding: '2px 8px', background: 'rgba(23,162,184,0.12)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.25)', borderRadius: 2, fontSize: 10, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, marginRight: 4, marginBottom: 4 }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
            © 2026 BIC — Bernal Ingeniería Consultores · ingenieriabernal.co
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
            Rogerio Bernal Ríos · Matrícula COPNIA 17202-313228 CLD
          </span>
        </div>
      </div>
    </footer>
  )
}
