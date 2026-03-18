import { useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section } from '../components/ui'

const WA = '573017326991'

const NAVY = '#003B6F'
const TEAL = '#17A2B8'
const SLATE = '#2C3E50'

const specialists = [
  { discipline: 'Arquitectura y Urbanismo', icon: '🏛️', color: '#17A2B8',
    description: 'Diseño arquitectónico, planificación urbana, planes parciales y licenciamiento. Integración de criterios funcionales y normativos en proyectos residenciales, comerciales e institucionales.',
    skills: ['Diseño arquitectónico', 'Planes parciales', 'Licencias de construcción', 'Planificación urbana', 'BIM'],
    projects: 'Proyectos residenciales, comerciales e institucionales en el Eje Cafetero.' },
  { discipline: 'Geotecnia y Mecánica de Suelos', icon: '⛏️', color: '#8B4513',
    description: 'Estudios de suelos, análisis de estabilidad de taludes, cimentaciones y zonificación geotécnica para POT y proyectos de infraestructura.',
    skills: ['Mecánica de suelos', 'Estabilidad de taludes', 'Cimentaciones', 'SPT / ensayos campo', 'Zonificación geotécnica'],
    projects: 'Estudios geotécnicos para urbanizaciones, vías y obras de protección en Caldas y Risaralda.' },
  { discipline: 'Ingeniería Ambiental', icon: '🌿', color: '#0D6E3A',
    description: 'EIA, planes de manejo ambiental (PMA), permisos ante CAR, concesiones de agua, permisos de vertimientos y diagnósticos ambientales.',
    skills: ['EIA / PMA', 'CORPOCALDAS / CARDER / CRQ', 'Calidad del agua', 'Permisos vertimientos', 'Legislación ambiental'],
    projects: 'PMA para proyectos de infraestructura hídrica, urbanizaciones y vías en la región andina.' },
  { discipline: 'Ingeniería Estructural', icon: '🏗️', color: '#2C3E50',
    description: 'Diseño estructural bajo NSR-10, estructuras metálicas, concreto reforzado, vulnerabilidad sísmica y reforzamiento de estructuras existentes.',
    skills: ['NSR-10', 'ETABS / SAP2000', 'Concreto reforzado', 'Estructuras metálicas', 'Vulnerabilidad sísmica'],
    projects: 'Diseño y revisión estructural de edificios, naves industriales y estructuras hidráulicas.' },
  { discipline: 'Topografía y Cartografía SIG', icon: '📐', color: '#17A2B8',
    description: 'Levantamientos topográficos, topobatimetría de quebradas y ríos, modelos digitales de terreno (MDT) y cartografía técnica en ArcGIS/QGIS.',
    skills: ['Estación total / GPS RTK', 'AutoCAD Civil 3D', 'ArcGIS / QGIS', 'Drones / fotogrametría', 'MDT / perfiles'],
    projects: 'Levantamientos para HEC-RAS, planes parciales, acueductos y estudios de riesgo.' },
]

const advantages = [
  { icon: '🎯', title: 'Un solo contrato', body: 'Todas las disciplinas bajo un único acuerdo técnico. Sin coordinar múltiples firmas ni responsabilidades cruzadas.' },
  { icon: '⚡', title: 'Coordinación eficiente', body: 'Diseños en paralelo. Hidráulica, geotecnia y arquitectura integrados desde el inicio. Menos tiempo muerto.' },
  { icon: '📋', title: 'Un solo interlocutor', body: 'Rogerio Bernal centraliza la comunicación técnica. Sin mensajes cruzados ni responsabilidades difusas.' },
  { icon: '✅', title: 'Compatibilidad garantizada', body: 'Los diseños de cada disciplina se verifican entre sí antes de la entrega. Cero incompatibilidades en obra.' },
]

export default function Team() {
  useEffect(() => {
    document.title = 'Equipo Consultor — BIC Bernal Ingeniería Consultores | Manizales'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content',
      'Equipo multidisciplinario BIC: hidráulica, geotecnia, arquitectura, ambiental y estructural. Director Rogerio Bernal Ríos — UNAL · COPNIA 17202-313228. Manizales y Colombia.'
    )
  }, [])

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #002A50 0%, #003B6F 100%)', padding: '120px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 860, textAlign: 'center' }}>
          <SectionLabel>Equipo Consultor BIC</SectionLabel>
          <ThinLine center />
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(26px, 5vw, 52px)', lineHeight: 1.15, margin: '1.5rem 0 1.2rem' }}>
            Un equipo completo.<br />Un solo interlocutor.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: 640, margin: '0 auto 2rem', lineHeight: 1.8 }}>
            BIC integra especialistas en hidráulica, geotecnia, arquitectura, ambiental y estructural para que tu proyecto tenga una sola ventanilla técnica — desde el diseño hasta la entrega.
          </p>
          <Btn href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, me interesa una consultoría integral con BIC.')}`}>
            Solicitar consultoría integral →
          </Btn>
        </div>
      </section>

      {/* DIRECTOR */}
      <Section bg="#f0f7fa" style={{ padding: '56px 40px' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionLabel>Dirección Técnica</SectionLabel>
          <ThinLine />
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem', alignItems: 'start', marginTop: '1.5rem' }}>
            <div style={{ width: 140, height: 175, borderRadius: 8, background: 'linear-gradient(135deg, #003B6F 0%, #17A2B8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontSize: '2.5rem', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>RB</span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.7rem', fontWeight: 700, color: NAVY, margin: 0 }}>
                  Rogerio Bernal Ríos
                </h2>
                <Tag style={{ background: TEAL, color: '#fff', fontSize: '0.78rem' }}>Director General</Tag>
              </div>
              <p style={{ color: TEAL, fontWeight: 600, marginBottom: '0.8rem', fontSize: '0.95rem' }}>Especialista en Ingeniería Hidráulica y Ambiental</p>
              <p style={{ color: SLATE, lineHeight: 1.75, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
                Ingeniero Civil de la Universidad Nacional de Colombia con Especialización en Ingeniería Hidráulica y Ambiental. Fundador y Director General de BIC con más de 10 años ejecutando proyectos en Colombia, Ecuador y México. Experto en HEC-RAS 1D/2D, diseños hidrosanitarios NSR-10, regalías MGA-Web, gestión del riesgo hídrico y topobatimetría.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {['UNAL Manizales', 'Esp. Hidráulica y Ambiental', 'COPNIA 17202-313228', 'TOEFL iBT 98/120', 'CO · EC · MX'].map(c => (
                  <Tag key={c} style={{ background: '#fff', border: '1px solid #d0e8f0', color: NAVY, fontSize: '0.75rem' }}>{c}</Tag>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['HEC-RAS 1D/2D', 'EPANET', 'NSR-10 J/K', 'MGA-Web', 'ArcGIS', 'RAS 2017'].map(s => (
                  <Tag key={s} style={{ background: NAVY, color: '#fff', fontSize: '0.72rem' }}>{s}</Tag>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.2rem', flexWrap: 'wrap' }}>
                {[['10+', 'años experiencia'], ['50+', 'proyectos'], ['3', 'países']].map(([v, l]) => (
                  <div key={l}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 700, color: NAVY, fontFamily: "'Montserrat', sans-serif" }}>{v}</span>
                    <span style={{ color: '#666', fontSize: '0.8rem', display: 'block' }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ESPECIALISTAS */}
      <Section bg="#fff" style={{ padding: '56px 40px' }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <SectionLabel>Red de Especialistas</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: NAVY, fontSize: 'clamp(20px, 3vw, 28px)', margin: '1.2rem 0 0.8rem' }}>
            Especialistas aliados por disciplina
          </h2>
          <p style={{ color: SLATE, maxWidth: 680, lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.95rem' }}>
            Para cada proyecto BIC conforma el equipo técnico adecuado según alcance, plazo y normativa — garantizando coordinación desde una sola dirección.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.4rem' }}>
            {specialists.map(sp => (
              <div key={sp.discipline} style={{ border: '1px solid #e0edf5', borderRadius: 10, padding: '1.6rem', background: '#fafcff', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 24px rgba(0,59,111,0.1)')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.boxShadow = 'none')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                  <span style={{ fontSize: '1.6rem' }}>{sp.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: NAVY, margin: 0 }}>{sp.discipline}</h3>
                    <div style={{ width: 28, height: 3, background: sp.color, borderRadius: 2, marginTop: 4 }} />
                  </div>
                </div>
                <p style={{ color: SLATE, fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1rem' }}>{sp.description}</p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                  {sp.skills.map(s => (
                    <Tag key={s} style={{ fontSize: '0.7rem', background: '#e8f4fa', color: NAVY, border: 'none' }}>{s}</Tag>
                  ))}
                </div>
                <p style={{ fontSize: '0.76rem', color: '#666', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>{sp.projects}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* VENTAJAS */}
      <Section bg="#003B6F" style={{ padding: '56px 40px' }}>
        <div className="container" style={{ maxWidth: 860, textAlign: 'center' }}>
          <SectionLabel light>La ventaja BIC</SectionLabel>
          <ThinLine center />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(20px, 3vw, 28px)', margin: '1.5rem 0 2rem' }}>
            ¿Por qué contratar un equipo integrado?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
            {advantages.map(a => (
              <div key={a.title} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '1.4rem', textAlign: 'left' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{a.icon}</div>
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", color: '#fff', fontWeight: 700, margin: '0 0 0.5rem', fontSize: '0.95rem' }}>{a.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.83rem', lineHeight: 1.65, margin: 0 }}>{a.body}</p>
              </div>
            ))}
          </div>
          <Btn href="/contacto" style={{ background: TEAL, color: '#fff', border: 'none', fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Cotizar proyecto integral →
          </Btn>
        </div>
      </Section>
    </>
  )
}
