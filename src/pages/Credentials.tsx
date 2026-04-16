import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section, useInView } from '../components/ui'
import SEOHead from '../components/SEOHead'

const seoConfig = {
  title: 'Credenciales | Ingeniero Hidráulico Manizales — BIC Bernal Ingeniería Consultores',
  description: 'Rogerio Bernal Ríos — ingeniero hidráulico en Manizales, especialista en ingeniería ambiental, consultor HEC-RAS Colombia. COPNIA 17202-313228 CLD. UNAL Manizales. Proyectos ejecutados verificables.',
  keywords: ['ingeniero hidráulico Manizales', 'especialista ingeniería ambiental Colombia', 'consultor HEC-RAS Colombia', 'COPNIA ingeniero civil Manizales', 'credenciales ingeniería hidráulica'],
  canonical: 'https://ingenieriabernal.co/credenciales',
}

const DEGREES = [
  {
    icon: '🎓',
    title: 'Ingeniero Civil',
    institution: 'Universidad Nacional de Colombia — Sede Manizales',
    year: 'Grado: 20 agosto 2015',
    reg: 'Registro SNIES: 3735',
    highlight: true,
  },
  {
    icon: '🎓',
    title: 'Especialista en Ingeniería Hidráulica y Ambiental',
    institution: 'Universidad Nacional de Colombia — Sede Manizales',
    year: 'Grado: 31 marzo 2016',
    reg: 'Registro SNIES: 1150',
    highlight: true,
  },
]

const CERTS = [
  { icon: '📋', title: 'Matrícula Profesional COPNIA', detail: 'No. 17202-313228 CLD · Vigente desde 02/10/2015', color: '#17A2B8' },
  { icon: '🌐', title: 'TOEFL iBT — 98/120', detail: 'Nivel C1 certificado internacionalmente', color: '#2D6A4F' },
  { icon: '🌎', title: 'Proyectos validados — México', detail: 'SEDATU + Apostille · Chignahuapan, Puebla 2015–2017', color: '#7B2D8B' },
  { icon: '🌎', title: 'Experiencia internacional — Ecuador', detail: 'Guayaquil · Juan Bernardo Botero Ingeniería / Grupo AB 2015', color: '#B5451B' },
]

const SOFTWARE = [
  { cat: 'Modelación Hidráulica', items: ['HEC-RAS 1D/2D', 'HEC-HMS', 'HEC-GEORAS', 'Iber', 'TETIS v9.0'] },
  { cat: 'Redes Hidráulicas', items: ['EPANET', 'EPASWMM', 'SewerGEMs'] },
  { cat: 'CAD y GIS', items: ['AutoCAD 2D/3D', 'Civil 3D', 'ArcGIS', 'QGIS'] },
  { cat: 'Gestión de Proyectos', items: ['MS Project', 'MGA-Web (DNP)', 'Excel avanzado'] },
  { cat: 'Análisis y Programación', items: ['Python', 'R', 'MATLAB'] },
  { cat: 'Estructural (apoyo)', items: ['ETABS', 'Photoshop'] },
]

const NORMS = [
  'NSR-10 (Cap. J y K)', 'Resolución 0330/2017', 'RAS 2017',
  'NTC 1500', 'NTC 1669', 'NTC 2301',
  'Decreto 1807/2014', 'Ley 388/97', 'Decreto 1082/2015',
  'Manual MGA-Web DNP', 'LGAH México', 'POMCA',
]

const PROJECTS = [
  {
    title: 'Palacio de Justicia La Dorada — Red Contra Incendios',
    client: 'Rama Judicial · Contrato CE-39-2025',
    type: 'Diseño CI NSR-10 + Residencia de Obra',
    year: '2025', dept: 'Caldas',
    color: '#17A2B8',
  },
  {
    title: 'Zona Industrial Santa Marta',
    client: 'Escala Constructores',
    type: 'Residencia de Obra — Obras Civiles',
    year: '2025', dept: 'Magdalena',
    color: '#0077B6',
  },
  {
    title: 'Análisis Torrencialidad Eje Cafetero — HEC-RAS 2D',
    client: 'EJE GROUP S.A.S.',
    type: 'Modelación HEC-RAS 2D · 8 municipios',
    year: '2022', dept: 'Risaralda / Caldas',
    color: '#003B6F',
  },
  {
    title: 'Makarí Mall Dosquebradas',
    client: 'TFCOL S.A.S.',
    type: 'Diseño Hidrosanitario y CI',
    year: '2022', dept: 'Risaralda',
    color: '#17A2B8',
  },
  {
    title: 'Parque Tecnológico Villamaría — Fase II',
    client: 'VHZ Ingeniería S.A.S.',
    type: 'Residencia de Obra',
    year: '2022', dept: 'Caldas',
    color: '#0077B6',
  },
  {
    title: 'Centro Cultural Cacique Ucuza Anserma',
    client: 'PSI Ingeniería y Diseño',
    type: 'Estudios Geotécnicos e Hidrológicos',
    year: '2021', dept: 'Caldas',
    color: '#003B6F',
  },
  {
    title: 'Diseño Acueducto Guaduales de Santa Rosa',
    client: 'Alcaldía de Santa Rosa de Cabal',
    type: 'Diseño red de distribución de agua potable',
    year: '2020', dept: 'Risaralda',
    color: '#17A2B8',
  },
  {
    title: 'Formulación Proyectos de Regalías Puerto Boyacá',
    client: 'Alcaldía Puerto Boyacá',
    type: 'MGA-Web DNP · Agua potable y saneamiento',
    year: '2019', dept: 'Boyacá',
    color: '#7B2D8B',
  },
  {
    title: 'Estudios Geotécnicos e Hidrológicos Viterbo y La Dorada',
    client: 'PSI Ingeniería y Diseño',
    type: 'Geotecnia · Hidrología · Hidráulica',
    year: '2018–2019', dept: 'Caldas',
    color: '#0077B6',
  },
  {
    title: 'Optimización Red Agua Potable Manizales',
    client: 'Aguas de Manizales · $250M COP',
    type: 'Diseño hidráulico EPANET',
    year: '2016', dept: 'Caldas',
    color: '#003B6F',
  },
]

export default function Credentials() {
  const { ref, inView } = useInView(0.05)

  return (
    <>
      <SEOHead {...seoConfig} />
      <section style={{ background: '#003B6F', padding: '120px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative' }}>
          <SectionLabel>Formación y certificaciones</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.15 }}>
            Ingeniero Hidráulico en Manizales<br /><span style={{ color: '#17A2B8' }}>Especialista en Ingeniería Ambiental — UNAL</span>
          </h1>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: 16, marginTop: 20, maxWidth: 600, lineHeight: 1.75 }}>
            Rogerio Bernal Ríos — <strong style={{ color: 'rgba(255,255,255,0.85)' }}>consultor HEC-RAS en Colombia</strong> con más de 10 años de experiencia verificable en modelación hidráulica, diseño de acueductos, sistemas contra incendios NSR-10 y formulación de proyectos de regalías SGR. Credenciales verificables, software especializado y normativa aplicada en proyectos reales.
          </p>
          {/* COPNIA highlight */}
          <div style={{ display: 'inline-flex', gap: 12, alignItems: 'center', background: 'rgba(23,162,184,0.15)', border: '1px solid rgba(23,162,184,0.4)', borderRadius: 8, padding: '12px 20px', marginTop: 24 }}>
            <span style={{ fontSize: '1.4rem' }}>📋</span>
            <div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 13, margin: 0 }}>Matrícula Profesional COPNIA</p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.8)', fontSize: 12, margin: '2px 0 0' }}>No. 17202-313228 CLD · Vigente desde 02/10/2015</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref as React.RefObject<HTMLElement>} style={{ background: '#F8FAFC', padding: '72px 40px' }}>
        <div className="container">

          {/* Degrees */}
          <div style={{ marginBottom: 60 }}>
            <SectionLabel>Títulos académicos — UNAL Manizales</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {DEGREES.map((d, i) => (
                <div key={i} style={{
                  padding: '28px 24px',
                  background: '#003B6F',
                  border: '1px solid rgba(23,162,184,0.3)',
                  borderRadius: 4,
                  opacity: inView ? 1 : 0,
                  animation: inView ? `fadeSlideUp 0.5s ease ${i * 0.1}s forwards` : 'none',
                }}>
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{d.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#17A2B8', fontSize: 20, marginBottom: 8 }}>
                    {d.title}
                  </h3>
                  <div style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 6 }}>{d.institution}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>{d.year}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 4 }}>{d.reg}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certs */}
          <div style={{ marginBottom: 60 }}>
            <SectionLabel>Certificaciones y habilitaciones</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {CERTS.map((c, i) => (
                <div key={i} style={{
                  padding: '20px 22px',
                  background: '#fff',
                  border: `1px solid ${c.color}30`,
                  borderLeft: `4px solid ${c.color}`,
                  borderRadius: 4,
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  opacity: inView ? 1 : 0,
                  animation: inView ? `fadeSlideUp 0.5s ease ${0.2 + i * 0.1}s forwards` : 'none',
                }}>
                  <div style={{ fontSize: 24 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14, color: c.color }}>{c.title}</div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#475569', marginTop: 4 }}>{c.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software */}
          <div style={{ marginBottom: 60 }}>
            <SectionLabel>Software técnico especializado</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {SOFTWARE.map((sw, i) => (
                <div key={i} style={{
                  padding: '20px',
                  background: '#fff',
                  border: '1px solid #E2E8F0',
                  borderRadius: 4,
                  opacity: inView ? 1 : 0,
                  animation: inView ? `fadeSlideUp 0.45s ease ${0.3 + i * 0.07}s forwards` : 'none',
                }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, color: '#17A2B8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                    {sw.cat}
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {sw.items.map(it => (
                      <span key={it} style={{
                        padding: '4px 10px', background: '#F1F5F9',
                        borderRadius: 2, fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600, fontSize: 12, color: '#003B6F',
                      }}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: 60 }}>
            <SectionLabel>Proyectos destacados ejecutados</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14 }}>
              {PROJECTS.map((p, i) => (
                <div key={i} style={{
                  background: '#fff',
                  border: '1px solid #E2E8F0',
                  borderLeft: `4px solid ${p.color}`,
                  borderRadius: 4,
                  padding: '16px 18px',
                  opacity: inView ? 1 : 0,
                  animation: inView ? `fadeSlideUp 0.45s ease ${0.3 + i * 0.05}s forwards` : 'none',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 11, color: p.color, background: `${p.color}15`, padding: '2px 8px', borderRadius: 2 }}>{p.dept} · {p.year}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#003B6F', margin: '0 0 4px', lineHeight: 1.4 }}>{p.title}</h3>
                  <p style={{ fontSize: 12, color: p.color, fontWeight: 600, margin: '0 0 4px' }}>{p.type}</p>
                  <p style={{ fontSize: 12, color: '#475569', margin: 0 }}>{p.client}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Norms */}
          <div>
            <SectionLabel>Normativa aplicada</SectionLabel>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {NORMS.map(n => <Tag key={n}>{n}</Tag>)}
            </div>
          </div>

        </div>
      </section>

      <Section bg="#003B6F" style={{ padding: '56px 40px', textAlign: 'center' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 600 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 30, marginBottom: 14 }}>
            ¿Necesitas verificar estas credenciales?
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 28 }}>
            COPNIA, UNAL y SEDATU son entidades de verificación pública. Puedo compartir copias físicas o digitales en cualquier momento.
          </p>
          <Btn href="/contacto">Solicitar hoja de vida completa →</Btn>
        </div>
      </Section>
    </>
  )
}
