import { useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section, useInView, useCounter } from '../components/ui'
import SchemaMarkup from '../components/SchemaMarkup'

const WA = '573024778910'

const STATS = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 50, suffix: '+', label: 'Proyectos ejecutados' },
  { value: 3, suffix: '', label: 'Países: CO · EC · MX' },
  { value: 21, suffix: '', label: 'Regiones cubiertas' },
]

const DIFFERENTIATORS = [
  { icon: '🔥', title: 'CI NSR-10 Exclusivo', desc: 'Diseño de sistemas contra incendios — rociadores, red húmeda/seca, detección. Especialidad exclusiva BIC en el Eje Cafetero.' },
  { icon: '📋', title: 'Regalías MGA-Web', desc: 'Formulación de proyectos de agua y saneamiento para el SGR. Contratos ejecutados en Caldas y Boyacá.' },
  { icon: '🌎', title: 'Internacional / BID-CAF', desc: 'Proyectos en Ecuador y México con Apostille. TOEFL 98/120. Acceso a licitaciones multilaterales.' },
]

const SERVICES_PREVIEW = [
  { icon: '💧', title: 'Hidrosanitario y CI', desc: 'NSR-10 J/K · NTC 1500/1669/2301', href: '/servicios/redes-hidrosanitarias' },
  { icon: '🌊', title: 'Modelación HEC-RAS 2D', desc: 'Inundaciones · Torrencialidad · Riesgo', href: '/servicios/modelacion-hec-ras' },
  { icon: '🔧', title: 'Acueducto y Alcantarillado', desc: 'Res. 0330/2017 · EPANET · RAS 2017', href: '/servicios/acueducto-alcantarillado' },
  { icon: '⚠️', title: 'Gestión del Riesgo / POT', desc: 'Decreto 1807/2014 · ArcGIS · POMCA', href: '/gestion-riesgo-hidrico' },
  { icon: '🏭', title: 'PTAP y PTAR', desc: 'Plantas tratamiento agua potable y residual', href: '/servicios/diseno-acueductos' },
  { icon: '📐', title: 'Topobatimetría', desc: 'Levantamientos · MDT · Secciones HEC-RAS', href: '/servicios' },
  { icon: '📋', title: 'Regalías MGA-Web', desc: 'Formulación SGR · Municipios · Agua', href: '/servicios/regalias-mga' },
  { icon: '🌿', title: 'Ingeniería Ambiental', desc: 'CAR · CORPOCALDAS · CARDER · EIA', href: '/servicios/ambiental' },
  { icon: '🏗️', title: 'Residencia e Interventoría', desc: 'Supervisión técnica obras hidráulicas', href: '/servicios/interventoria' },
]

const CLIENTS = [
  'Aguas de Manizales', 'VHZ Ingeniería', 'Rama Judicial — Colombia',
  'EJE GROUP S.A.S.', 'PSI Ingeniería y Diseño', 'Alcaldía de Viterbo',
  'Alcaldía Puerto Boyacá', 'Escala Constructores', 'INGEOSYS S.A.',
  'Juan Bernardo Botero Ing.', 'Municipio Chignahuapan — México', 'TFCOL S.A.S.',
]

const PROJECTS_PREVIEW = [
  { title: 'Palacio de Justicia La Dorada', client: 'Rama Judicial — Contrato CE-39-2025', type: 'Sistemas CI · Res. Obra', year: '2025', dept: 'Caldas' },
  { title: 'Zona Industrial Santa Marta', client: 'Escala Constructores', type: 'Residencia de Obra', year: '2025', dept: 'Magdalena' },
  { title: 'Makarí Mall Dosquebradas', client: 'TFCOL S.A.S.', type: 'Diseño Hidrosanitario y CI', year: '2022', dept: 'Risaralda' },
  { title: 'Parque Tecnológico Villamaría', client: 'VHZ Ingeniería S.A.S.', type: 'Residencia Fase II', year: '2022', dept: 'Caldas' },
  { title: 'Torrencialidad Eje Cafetero', client: 'EJE GROUP S.A.S.', type: 'Modelación HEC-RAS 2D', year: '2022', dept: '8 municipios' },
  { title: 'Optimización Red Agua Potable', client: 'Aguas de Manizales — $250M COP', type: 'Diseño hidráulico EPANET', year: '2016', dept: 'Caldas' },
]

function StatCounter({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const { ref, inView } = useInView()
  const count = useCounter(inView ? value : 0, 1400)
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#17A2B8', lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, marginTop: 6, fontFamily: "'Lato', sans-serif" }}>{label}</div>
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'Ingeniero Hidráulico Colombia — BIC · Ing. Bernal COPNIA'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content',
      'Consultoría en diseño de acueductos, PTAR y obras hidráulicas en Colombia. COPNIA 17202-313228. Eje Cafetero y nacional. Solicita cotización.'
    )
  }, [])

  return (
    <>
      <SchemaMarkup type="home" />
      {/* ── HERO */}
      <section style={{ background: 'linear-gradient(135deg, #002A50 0%, #003B6F 60%, #004F96 100%)', padding: '130px 40px 80px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 960 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 12 }}>🇨🇴 Manizales, Colombia</Tag>
            <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 12 }}></Tag>
            <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 12 }}>UNAL Manizales</Tag>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(28px, 5vw, 58px)', lineHeight: 1.1, marginBottom: 20 }}>
            Ingeniería Hidráulica y Ambiental en Colombia<br />
            <span style={{ color: '#17A2B8' }}>| BIC — Bernal Ingeniería Consultores</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, maxWidth: 640, lineHeight: 1.8, marginBottom: 16 }}>
            Estudios hidrológicos, diseño de acueductos, modelación HEC-RAS 2D e interventoría técnica. +10 años de experiencia verificable. Manizales, Eje Cafetero y todo Colombia.
          </p>

          {/* 3 diferenciadores únicos */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
            {DIFFERENTIATORS.map(d => (
              <div key={d.title} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(23,162,184,0.2)', borderRadius: 10, padding: '10px 16px', display: 'flex', gap: 10, alignItems: 'flex-start', maxWidth: 240 }}>
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{d.icon}</span>
                <div>
                  <p style={{ color: '#17A2B8', fontWeight: 700, fontSize: 12, margin: '0 0 3px' }}>{d.title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, margin: 0, lineHeight: 1.5 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, necesito un estudio HEC-RAS. ¿Pueden cotizarme?')}`} style={{ background: '#25D366', color: '#fff' }}>
              📱 Solicitar estudio HEC-RAS
            </Btn>
            <Btn href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, quiero cotizar un diseño hidrosanitario con BIC.')}`} variant="outline" dark>
              💧 Cotizar diseño hidrosanitario
            </Btn>
            <Btn href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, necesito un análisis de riesgo hídrico. ¿Pueden ayudarme?')}`} variant="outline" dark>
              ⚠️ Consultar análisis de riesgo
            </Btn>
          </div>
        </div>
      </section>

      {/* ── STATS */}
      <section style={{ background: '#002A50', padding: '40px 40px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', maxWidth: 860, margin: '0 auto' }}>
          {STATS.map(s => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* ── NORMATIVA */}
      <section style={{ background: '#fff', padding: '44px 40px', borderTop: '1px solid #E2EEF5' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
            Normativa que manejamos
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              'RAS 2017', 'NSR-10 Títulos I/J/K', 'Resolución 0330/2017',
              'NTC 1500', 'NTC 1669', 'NTC 2301',
              'Decreto 1807/2014', 'Ley 1523/2012', 'Ley 388/1997',
              'Decreto 1076/2015', 'Manual MGA-Web DNP', 'POMCA',
            ].map(n => (
              <span key={n} style={{ padding: '5px 12px', background: '#EEF4F9', border: '1px solid #D3E6F0', borderRadius: 4, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12, color: '#003B6F' }}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COBERTURA GEOGRÁFICA */}
      <section style={{ background: '#F0F7FB', padding: '44px 40px', borderTop: '1px solid #D3E6F0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
            Cobertura geográfica — Colombia y proyectos internacionales
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { label: 'Eje Cafetero', flag: '🏔️' },
              { label: 'Bogotá D.C.', flag: '🏙️' },
              { label: 'Medellín', flag: '🌆' },
              { label: 'Cali', flag: '🌇' },
              { label: 'Barranquilla', flag: '🌊' },
              { label: 'Bucaramanga', flag: '🏛️' },
              { label: 'Todo Colombia', flag: '🇨🇴' },
              { label: 'Ecuador', flag: '🇪🇨' },
              { label: 'México', flag: '🇲🇽' },
            ].map(({ label, flag }) => (
              <span key={label} style={{ padding: '6px 14px', background: '#fff', border: '1px solid #C2DFF0', borderRadius: 20, fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#003B6F', display: 'flex', gap: 6, alignItems: 'center' }}>
                <span>{flag}</span>{label}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, marginTop: 14, lineHeight: 1.7 }}>
            Como <strong>ingeniero hidráulico en Manizales</strong> y <strong>especialista en ingeniería ambiental en Colombia</strong>, BIC opera sin límites geográficos. Proyectos ejecutados en 21 regiones del país, Ecuador y México con Apostille.
          </p>
        </div>
      </section>

      {/* ── SERVICIOS PREVIEW */}
      <Section bg="#F8FAFC" style={{ padding: '60px 40px' }}>
        <div className="container">
          <SectionLabel>9 líneas de servicio</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(22px, 3vw, 32px)', margin: '1.2rem 0 2rem' }}>
            Consultoría integral bajo una sola dirección
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12, marginBottom: 32 }}>
            {SERVICES_PREVIEW.map((s) => {
              const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#17A2B8'
                el.style.boxShadow = '0 4px 16px rgba(0,59,111,0.1)'
              }
              const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#deedf5'
                el.style.boxShadow = 'none'
              }
              return (
              <a key={s.title} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '16px 18px', background: '#fff', border: '1px solid #deedf5', borderRadius: 10, transition: 'all 0.2s', cursor: 'pointer' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 8 }}>{s.icon}</span>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#003B6F', margin: '0 0 4px' }}>{s.title}</h3>
                  <p style={{ fontSize: 12, color: '#475569', margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </a>
            )
            })}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Btn href="/servicios">Ver detalle completo de servicios →</Btn>
          </div>
        </div>
      </Section>

      {/* ── CLIENTES */}
      <Section bg="#fff" style={{ padding: '56px 40px' }}>
        <div className="container">
          <SectionLabel>Clientes y entidades que confían en BIC</SectionLabel>
          <ThinLine />
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {CLIENTS.map(c => (
              <div key={c} style={{ padding: '10px 18px', background: '#f0f7fa', borderRadius: 8, border: '1px solid #deedf5' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#003B6F' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROYECTOS PREVIEW */}
      <Section bg="#F8FAFC" style={{ padding: '56px 40px' }}>
        <div className="container">
          <SectionLabel>Proyectos ejecutados</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(20px, 3vw, 28px)', margin: '1.2rem 0 2rem' }}>
            Evidencia verificable en campo
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14, marginBottom: 28 }}>
            {PROJECTS_PREVIEW.map(p => (
              <div key={p.title} style={{ background: '#fff', border: '1px solid #e0edf5', borderRadius: 10, padding: '1.4rem', borderLeft: `4px solid #17A2B8` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <Tag style={{ fontSize: 11, background: '#f0f7fa', color: '#003B6F', border: '1px solid #deedf5' }}>{p.dept} · {p.year}</Tag>
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14, color: '#003B6F', margin: '0 0 4px' }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: '#17A2B8', fontWeight: 600, margin: '0 0 6px' }}>{p.type}</p>
                <p style={{ fontSize: 12, color: '#475569', margin: 0 }}>{p.client}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Btn href="/proyectos">Ver portafolio completo →</Btn>
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL */}
      <section style={{ background: '#003B6F', padding: '56px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 660 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 14 }}>
            ¿Tu proyecto está en cualquier lugar de Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
            BIC opera sin límites geográficos. Primera consulta sin costo. Respuesta en menos de 24 horas hábiles.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
            <Btn href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, tengo un proyecto y quiero consultar con BIC Bernal Ingeniería.')}`}>
              📱 WhatsApp — respuesta en menos de 2h
            </Btn>
            <Btn href="/contacto" variant="outline" dark>Formulario de contacto</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['BIC — Equipo Multidisciplinario', 'UNAL', '', '10+ años', 'Colombia · Ecuador · México'].map(b => (
              <Tag key={b} style={{ fontSize: 11 }}>{b}</Tag>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
