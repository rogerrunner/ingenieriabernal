import { Btn } from '../components/ui'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', background: '#003B6F', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40 }}>
      <div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 120, color: 'rgba(23,162,184,0.2)', lineHeight: 1 }}>404</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 32, marginTop: -20 }}>Página no encontrada</h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: 16, marginTop: 12, marginBottom: 32 }}>
          La página que buscas no existe. Vuelve al inicio.
        </p>
        <Btn href="/">← Volver al inicio</Btn>
      </div>
    </div>
  )
}
