import { useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section, useInView, useCounter } from '../components/ui'
import SchemaMarkup from '../components/SchemaMarkup'

const WA = '573024778910'

const STATS = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 50, suffix: '+', label: 'Proyectos entregados' },
  { value: 3, suffix: '', label: 'Países: CO · EC · MX' },
  { value: 21, suffix: '', label: 'Regiones cubiertas' },
]

// Galería de portafolio con imágenes reales de proyectos BIC
const PORTFOLIO_GALLERY = [
  {
    img: '/img/proyectos/gbp_expert/01_inspeccion_campo_guatica_risaralda.jpeg',
    title: 'Inspección de campo — Erosión hídrica',
    location: 'Guática, Risaralda',
    type: 'Modelación HEC-RAS 2D · Decreto 1807',
    year: '2023',
    alt: 'Ingenieros BIC inspeccionando zona de erosión hídrica en Guática Risaralda',
  },
  {
    img: '/img/proyectos/gbp_expert/06_mapa_riesgo_hidrico_alto_medio_bajo.jpeg',
    title: 'Mapa de riesgo hídrico — Bajo/Medio/Alto',
    location: 'Belalcázar, Caldas',
    type: 'Gestión del Riesgo · Decreto 1807/2014',
    year: '2023',
    alt: 'Mapa de riesgo hídrico Belalcázar Caldas firmado por Rogerio Bernal COPNIA',
  },
  {
    img: '/img/proyectos/gbp_expert/03_modelacion_hec_ras_2d_inundacion_3d.jpeg',
    title: 'Modelo 3D HEC-RAS sobre imagen satelital',
    location: 'Santa Rosa de Cabal, Risaralda',
    type: 'Modelación HEC-RAS 2D · Inundación',
    year: '2022',
    alt: 'Modelo 3D terreno HEC-RAS 2D sobre imagen satelital Santa Rosa de Cabal',
  },
  {
    img: '/img/proyectos/gbp_expert/07_mapa_inundacion_profundidad_aereo.jpeg',
    title: 'Mapa de inundación TR-100 — Profundidad',
    location: 'Eje Cafetero, Colombia',
    type: 'Modelación hidrológica · HEC-HMS · ArcGIS',
    year: '2022',
    alt: 'Mapa de inundación profundidad TR100 vista aérea Colombia BIC',
  },
  {
    img: '/img/proyectos/gbp_expert/p06_modelo_3d_hec_ras_santa_rosa.jpeg',
    title: 'Modelo 3D HEC-RAS 2D — Llanura de inundación',
    location: 'Santa Rosa de Cabal, Risaralda',
    type: 'Modelación HEC-RAS 2D · Gestión del Riesgo · Decreto 1807',
    year: '2022',
    alt: 'Modelo 3D HEC-RAS 2D llanura inundación Santa Rosa de Cabal Risaralda BIC',
  },
]

const DIFFERENTIATORS = [
  { icon: '🌊', title: 'Modelación HEC-RAS 2D', desc: 'Inundaciones, torrencialidad y gestión del riesgo hídrico. Estudios Decreto 1807 para licencias de urbanismo y planes parciales.' },
  { icon: '🔧', title: 'Acueductos Veredales e Industriales', desc: 'Diseño de sistemas de abastecimiento para comunidades rurales, parcelaciones, municipios e industria. Res. 0330/2017.' },
  { icon: '🌱', title: 'Distritos de Riego y Canales', desc: 'Diseño hidráulico de canales de riego, bocatomas y estructuras de distribución para proyectos agropecuarios.' },
]

const SERVICES_PREVIEW = [
  // Ordenado por demanda real GSC (clics + impresiones)
  { icon: '♻️', title: 'PTAR — Aguas Residuales', desc: 'Diseño plantas tratamiento industrial y municipal · #1 en búsquedas', href: '/diseno-ptar-colombia' },
  { icon: '🔧', title: 'Diseño de Acueductos', desc: 'Veredales · Industriales · Res. 0330/2017 · EPANET', href: '/servicios/diseno-acueductos' },
  { icon: '🔥', title: 'Sistemas CI / NSR-10', desc: 'Rociadores · Red húmeda/seca · Detección · Capítulo J/K', href: '/servicios/contra-incendios-nsr10' },
  { icon: '💧', title: 'Redes Hidrosanitarias', desc: 'NTC 1500/1669/2301 · Memorias de cálculo · Residencial/Industrial', href: '/servicios/redes-hidrosanitarias' },
  { icon: '🌧️', title: 'Diseño de Alcantarillados', desc: 'Sanitario · Pluvial · SewerGEMs · RAS 2017 Título D', href: '/diseno-alcantarillado-colombia' },
  { icon: '🌊', title: 'Modelación Hidráulica', desc: 'HEC-RAS 2D · HEC-18 · Socavación · Torrencialidad', href: '/servicios/modelacion-hec-ras' },
  { icon: '⚠️', title: 'Gestión del Riesgo Hídrico', desc: 'Decreto 1807/2014 · Estudios detallados · POT', href: '/gestion-riesgo-hidrico' },
  { icon: '🏭', title: 'PTAP — Agua Potable', desc: 'Plantas tratamiento potabilización municipal y rural', href: '/diseno-ptap-colombia' },
  { icon: '📊', title: 'Modelación Hidrológica', desc: 'HEC-HMS · TETIS v9 · Caudales de diseño · TR 2-500 años', href: '/modelacion-hidrologica-colombia' },
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
    document.title = 'BIC Ingeniería Hidráulica Colombia | Gestión del Riesgo · HEC-RAS 2D · Acueductos · Distritos de Riego'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content',
      'Consultoría en ingeniería hidráulica en Colombia: modelación de inundaciones HEC-RAS 2D, estudios detallados Decreto 1807, diseño de acueductos veredales e industriales, distritos de riego, PTAP, PTAR, modelación hidrológica y alcantarillados. COPNIA 17202-313228 CLD. Propuesta en 24 h.'
    )
    let canonical = document.querySelector("link[rel='canonical']")
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ingenieriabernal.co/')
  }, [])

  return (
    <>
      <SchemaMarkup type="home" />
      {/* ── HERO */}
      <section style={{ background: 'linear-gradient(135deg, #002A50 0%, #003B6F 60%, #004F96 100%)', padding: 'clamp(90px, 12vw, 130px) 20px 60px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 960 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 12 }}>🇨🇴 Manizales, Colombia</Tag>
            <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 12 }}>✅ COPNIA 17202-313228 CLD</Tag>
            <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 12 }}>🎓 Especialista Ing. Hidráulica — UNAL</Tag>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(28px, 5vw, 58px)', lineHeight: 1.1, marginBottom: 20 }}>
            Ingeniería Hidráulica y Ambiental en Colombia<br />
            <span style={{ color: '#17A2B8' }}>| BIC — Bernal Ingeniería Consultores</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, maxWidth: 640, lineHeight: 1.8, marginBottom: 16 }}>
            Consultoría especializada en modelación de inundaciones HEC-RAS 2D, estudios de gestión del riesgo hídrico (Decreto 1807), diseño de acueductos veredales e industriales, distritos de riego, PTAP, PTAR, modelación hidrológica y alcantarillados. +10 años de experiencia verificable. Manizales, Eje Cafetero y todo Colombia.
          </p>

          {/* 3 diferenciadores únicos */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
            {DIFFERENTIATORS.map(d => (
              <div key={d.title} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(23,162,184,0.2)', borderRadius: 10, padding: '10px 16px', display: 'flex', gap: 10, alignItems: 'flex-start', maxWidth: 240 }}>
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{d.icon}</span>
                <div>
                  <p style={{ color: '#17A2B8', fontWeight: 700, fontSize: 12, margin: '0 0 3px' }}>{d.title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, margin: 0, lineHeight: 1.5 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, me gustaría una propuesta para mi proyecto hidráulico. ¿Podemos hablar?')}`} style={{ background: '#25D366', color: '#fff' }}>
              📱 Propuesta en 24 h — gratis
            </Btn>
            <Btn href="/proyectos" variant="outline" dark>
              📂 Ver 50+ proyectos →
            </Btn>
            <Btn href="/contacto" variant="ghost" dark>
              ✉️ Describir mi proyecto
            </Btn>
          </div>
        </div>
      </section>

      {/* ── STATS */}
      <section style={{ background: '#002A50', padding: '40px 40px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '2rem', maxWidth: 860, margin: '0 auto' }}>
          {STATS.map(s => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* ── TRUST BAR — credenciales clave arriba del fold */}
      <section style={{ background: '#003B6F', borderTop: '1px solid rgba(23,162,184,0.3)', padding: '0' }}>
        <div className="container" style={{ maxWidth: 960, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0 }}>
          {[
            { icon: '✅', label: 'COPNIA 17202-313228 CLD', sublabel: 'Matrícula profesional activa' },
            { icon: '🎓', label: 'Especialista Ing. Hidráulica', sublabel: 'Universidad Nacional — Manizales' },
            { icon: '📋', label: '50+ proyectos entregados', sublabel: 'Colombia · Ecuador · México' },
            { icon: '⚡', label: 'Propuesta en 24 horas', sublabel: 'Sin intermediarios' },
          ].map((item, i) => (
            <div key={i} style={{ flex: '1 1 200px', padding: '14px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', textAlign: 'center' }}>
              <span style={{ fontSize: '1.2rem', display: 'block', marginBottom: 3 }}>{item.icon}</span>
              <p style={{ margin: 0, color: '#fff', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12 }}>{item.label}</p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.55)', fontSize: 11, fontFamily: "'Lato', sans-serif" }}>{item.sublabel}</p>
            </div>
          ))}
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

      {/* ── PORTAFOLIO VISUAL — fotos reales de campo y modelación */}
      <Section bg="#F8FAFC" style={{ padding: '60px 40px' }}>
        <div className="container">
          <SectionLabel>Portafolio — proyectos reales en Colombia</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(20px, 3vw, 30px)', margin: '1.2rem 0 0.5rem' }}>
            Evidencia técnica verificable en campo
          </h2>
          <p style={{ color: '#475569', fontSize: 14, marginBottom: '2rem', lineHeight: 1.7 }}>
            Cada proyecto incluye modelación HEC-RAS 2D, informe técnico firmado COPNIA y concepto para la autoridad ambiental. 50+ proyectos entregados en Colombia, Ecuador y México.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
            {PORTFOLIO_GALLERY.map((p) => (
              <a key={p.title} href="/proyectos" style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ background: '#fff', border: '1px solid #e0edf5', borderRadius: 12, overflow: 'hidden', transition: 'box-shadow 0.2s, transform 0.2s', cursor: 'pointer' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(0,59,111,0.13)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'none' }}
                >
                  <div style={{ height: 180, overflow: 'hidden', background: '#e8f0f6' }}>
                    <img
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontSize: 11, color: '#17A2B8', fontWeight: 700, fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.location}</span>
                      <span style={{ fontSize: 11, color: '#94a3b8', fontFamily: "'Lato', sans-serif" }}>{p.year}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#003B6F', margin: '0 0 5px', lineHeight: 1.4 }}>{p.title}</h3>
                    <p style={{ fontSize: 12, color: '#475569', margin: 0, lineHeight: 1.5 }}>{p.type}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          {/* Proyectos adicionales en texto — contratos destacados */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10, marginBottom: 28 }}>
            {PROJECTS_PREVIEW.map(p => (
              <div key={p.title} style={{ background: '#fff', border: '1px solid #e0edf5', borderRadius: 8, padding: '12px 16px', borderLeft: '3px solid #17A2B8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 11, color: '#64748b', fontFamily: "'Lato', sans-serif" }}>{p.dept} · {p.year}</span>
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#003B6F', margin: '0 0 3px' }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: '#17A2B8', fontWeight: 600, margin: '0 0 3px' }}>{p.type}</p>
                <p style={{ fontSize: 11, color: '#475569', margin: 0 }}>{p.client}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Btn href="/proyectos" style={{ fontSize: 15, padding: '12px 32px' }}>Ver portafolio completo — 50+ proyectos →</Btn>
          </div>
        </div>
      </Section>

      {/* ── COBERTURA NACIONAL */}
      <Section bg="#F0F7FB" style={{ padding: '56px 40px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>Cobertura nacional</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(20px, 3vw, 30px)', margin: '1.2rem 0 2rem' }}>
            Ingeniería hidráulica en las principales ciudades de Colombia
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { city: 'Bogotá', href: '/ingenieria-bogota' },
              { city: 'Medellín', href: '/ingenieria-medellin' },
              { city: 'Cali', href: '/ingenieria-cali' },
              { city: 'Manizales', href: '/ingenieria-manizales' },
              { city: 'Bucaramanga', href: '/ingenieria-bucaramanga' },
              { city: 'Barranquilla', href: '/ingenieria-barranquilla' },
              { city: 'Eje Cafetero', href: '/ingenieria-eje-cafetero' },
              { city: 'Antioquia', href: '/ingenieria-antioquia' },
            ].map(({ city, href }) => (
              <a key={href} href={href} style={{ display: 'block', background: '#fff', border: '1px solid #D3E6F0', borderRadius: 6, padding: '14px 18px', textDecoration: 'none', color: '#003B6F', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 14, transition: 'border-color 0.2s' }}>
                {city}
              </a>
            ))}
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
              <Tag key={b} style={{ fontSize: 12 }}>{b}</Tag>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
