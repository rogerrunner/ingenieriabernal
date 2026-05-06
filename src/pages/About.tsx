import { useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section, useInView } from '../components/ui'

const WA = '573024778910'

const TIMELINE = [
  { year: '2025', title: 'Ing. Residente — Palacio de Justicia La Dorada', company: 'VHZ Ingeniería S.A.S. — Rama Judicial (CE-39-2025)', desc: 'Sep–Nov 2025. Modernización red contra incendios NSR-10.' },
  { year: '2025', title: 'Ing. Residente — Zona Industrial Santa Marta', company: 'Juan Camilo Bermúdez / Escala Constructores', desc: 'Ene–Jul 2025. Residencia obra hidrosanitaria.' },
  { year: '2022', title: 'Asesoría Diseños Hidrosanitarios y CI', company: 'TFCOL S.A.S. — Makarí Mall Dosquebradas + Montecarlo Viterbo', desc: 'Dic 2022. NSR-10 J/K, NTC 1500/1669/2301.' },
  { year: '2022', title: 'Ing. Residente — Parque Tecnológico Villamaría Fase II', company: 'VHZ Ingeniería S.A.S.', desc: 'Ene–Dic 2022.' },
  { year: '2021–2022', title: 'Análisis de Torrencialidad e Inundaciones', company: 'EJE GROUP S.A.S.', desc: '8 meses. HEC-RAS 2D, RAS 2017. 8 municipios Eje Cafetero.' },
  { year: '2021', title: 'Formulación Proyectos de Regalías (SGR)', company: 'Alcaldía Puerto Boyacá — Contrato 621/2021', desc: '44 días, $10.5M COP. MGA-Web DNP.' },
  { year: '2020–2021', title: 'Residente de Obra — Vía Placa Huella', company: 'Julián Rubio Arango — Palestina, Caldas', desc: 'Oct 2020–Nov 2021. Infraestructura vial rural.' },
  { year: '2017–2020', title: 'Estudios Geotécnicos, Hidráulicos y Riesgo', company: 'PSI Ingeniería y Diseño S.A.S.', desc: 'Proyectos en La Dorada y Viterbo. Villahermosa Lote 7 + Primavera Real (24 Ha, $20M).' },
  { year: '2016–2020', title: 'Profesional Universitario (planta)', company: 'Alcaldía de Viterbo, Caldas', desc: 'Cargo 219 Grado 01. EOT, obras públicas, planeación territorial.' },
  { year: '2016', title: 'Diseñador — Optimización Red Agua Potable', company: 'INGEOSYS S.A. / Aguas de Manizales', desc: 'Contrato 20160110, $250M COP. EPANET + ArcGIS.' },
  { year: '2016', title: 'Profesional Universitario — Alcaldía Viterbo', company: 'Contrato 020/2016', desc: '57 días. $6M COP. Nov 2016.' },
  { year: '2015–2017', title: 'Profesional SIG / Hidráulica / Riesgo', company: 'Empresa Visión Norte — Chignahuapan, México', desc: 'POT + Desarrollo Urbano validados SEDATU. Apostille. 2 programas.' },
  { year: '2015', title: 'Ing. Diseño — Consultoría Hidráulica y Geotécnica', company: 'Juan Bernardo Botero Ingeniería — Guayaquil, Ecuador', desc: '+30 km canales, +50 obras civiles. HEC-RAS / HEC-GEORAS.' },
]

const SKILLS = [
  { cat: 'Modelación Hidráulica', items: ['HEC-RAS 1D/2D', 'HEC-HMS', 'HEC-GEORAS', 'Iber', 'TETIS v9.0'] },
  { cat: 'Redes Hidráulicas', items: ['EPANET', 'EPASWMM', 'SewerGEMs'] },
  { cat: 'CAD y GIS', items: ['AutoCAD 2D/3D', 'Civil 3D', 'ArcGIS', 'QGIS'] },
  { cat: 'Gestión de Proyectos', items: ['MS Project', 'MGA-Web DNP', 'Excel avanzado'] },
  { cat: 'Análisis', items: ['Python', 'R', 'MATLAB'] },
]

export default function About() {
  const { ref, inView } = useInView(0.05)

  useEffect(() => {
    document.title = 'Director — Rogerio Bernal Ríos | BIC Bernal Ingeniería Consultores'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content',
      'Rogerio Bernal Ríos — Director General de BIC. Ing. Civil Especialista en Hidráulica y Ambiental UNAL. COPNIA 17202-313228. 10+ años, Colombia, Ecuador y México.'
    )
    let canonical = document.querySelector("link[rel='canonical']")
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://ingenieriabernal.co/sobre-mi')
  }, [])

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #002A50 0%, #003B6F 100%)', padding: '120px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 60, alignItems: 'center', maxWidth: 1000 }}>
          <div>
            <SectionLabel>Director General — BIC</SectionLabel>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(28px, 4.5vw, 50px)', lineHeight: 1.15, margin: '12px 0 8px' }}>
              Rogerio Bernal Ríos
            </h1>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#17A2B8', fontSize: 20, marginBottom: 20 }}>
              Director General & Especialista en Ingeniería Hidráulica
            </p>
            <ThinLine width={60} mb={24} />
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, lineHeight: 1.8, maxWidth: 520, marginBottom: 16 }}>
              Ingeniero Civil y Especialista en Ingeniería Hidráulica y Ambiental de la Universidad Nacional de Colombia. Fundador y Director General de BIC — Bernal Ingeniería Consultores. 10+ años ejecutando proyectos de consultoría en Colombia, Ecuador y México.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: 15, lineHeight: 1.8, maxWidth: 520, marginBottom: 28 }}>
              Especializado en modelación hidráulica HEC-RAS 1D/2D, diseños hidrosanitarios y contra incendios NSR-10, gestión del riesgo hídrico, formulación de proyectos de regalías MGA-Web y acueducto/alcantarillado bajo Resolución 0330/2017. Lideró proyectos con Aguas de Manizales, VHZ Ingeniería, Rama Judicial, EJE Group y entidades municipales.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
              {['UNAL Manizales', 'COPNIA 17202-313228', 'TOEFL iBT 98/120', 'CO · EC · MX'].map(b => (
                <Tag key={b} style={{ fontSize: 11 }}>{b}</Tag>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Btn href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola Rogerio, me interesa una consultoría con BIC. ¿Podríamos conversar?')}`}>
                📱 Contactar directamente
              </Btn>
              <Btn href="/equipo" variant="outline" dark>Ver equipo BIC →</Btn>
            </div>
          </div>

          {/* Photo placeholder */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 260, height: 320, border: '1px solid rgba(23,162,184,0.3)',
              borderRadius: 4, position: 'relative', overflow: 'hidden',
              background: 'linear-gradient(160deg, rgba(0,79,150,0.5), rgba(23,162,184,0.2))',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14,
            }}>
              {[{top:8,left:8},{top:8,right:8},{bottom:8,left:8},{bottom:8,right:8}].map((p,i) => (
                <div key={i} style={{ position:'absolute', width:18, height:18, ...p,
                  borderTop: (p as any).top !== undefined ? '2px solid #17A2B8' : undefined,
                  borderBottom: (p as any).bottom !== undefined ? '2px solid #17A2B8' : undefined,
                  borderLeft: (p as any).left !== undefined ? '2px solid #17A2B8' : undefined,
                  borderRight: (p as any).right !== undefined ? '2px solid #17A2B8' : undefined,
                }} />
              ))}
              <div style={{ width: 90, height: 90, borderRadius: '50%', border: '2px solid #17A2B8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#17A2B8' }}>RB</div>
              <div style={{ textAlign: 'center', padding: '0 20px' }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", color: '#fff', fontWeight: 600, fontSize: 14 }}>Rogerio Bernal Ríos</div>
                <div style={{ color: '#17A2B8', fontSize: 11, marginTop: 4 }}>Director General — BIC</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, marginTop: 4 }}>📸 Reemplazar con foto profesional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <Section bg="#F8FAFC" style={{ padding: '48px 40px' }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
            {[
              { icon: '🔥', title: 'CI NSR-10 exclusivo', desc: 'Diseño de sistemas contra incendios — servicio que pocos consultores del Eje Cafetero ofrecen.' },
              { icon: '📋', title: 'Regalías MGA-Web', desc: 'Contratos ejecutados con alcaldías de Caldas y Boyacá. Proyectos aprobados ante OCAD.' },
              { icon: '🌎', title: 'Internacional/BID', desc: 'Proyectos apostillados en Ecuador y México. TOEFL 98. Acceso a licitaciones multilaterales.' },
              { icon: '🏗️', title: 'Obra y diseño', desc: '10 años integrando el criterio de residente con el rigor del diseñador. Proyectos que funcionan.' },
            ].map(d => (
              <div key={d.title} style={{ background: '#fff', border: '1px solid #e0edf5', borderRadius: 10, padding: '1.4rem' }}>
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: 8 }}>{d.icon}</span>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#003B6F', margin: '0 0 6px' }}>{d.title}</h3>
                <p style={{ fontSize: 13, color: '#475569', margin: 0, lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TIMELINE */}
      <section ref={ref as React.RefObject<HTMLElement>} style={{ background: '#fff', padding: '60px 40px' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionLabel>Trayectoria profesional</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(20px, 3vw, 28px)', margin: '1.2rem 0 2.5rem' }}>
            10+ años de experiencia verificable
          </h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 90, top: 0, bottom: 0, width: 2, background: '#E2E8F0' }} />
            {TIMELINE.map((t, i) => (
              <div key={i} style={{
                display: 'flex', gap: 0, marginBottom: 22,
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(10px)',
                transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`,
              }}>
                <div style={{ width: 90, flexShrink: 0, paddingTop: 14, textAlign: 'right', paddingRight: 20 }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, color: '#17A2B8', letterSpacing: '0.06em' }}>{t.year}</span>
                </div>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#17A2B8', flexShrink: 0, marginTop: 16, position: 'relative', zIndex: 1 }} />
                <div style={{ flex: 1, paddingLeft: 20, paddingBottom: 4 }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#003B6F' }}>{t.title}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#17A2B8', marginTop: 2 }}>{t.company}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, color: '#94A3B8', marginTop: 3 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <Section bg="#F8FAFC" style={{ padding: '48px 40px' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionLabel>Herramientas técnicas</SectionLabel>
          <ThinLine />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14, marginTop: '1.5rem' }}>
            {SKILLS.map(s => (
              <div key={s.cat} style={{ background: '#fff', border: '1px solid #e0edf5', borderRadius: 8, padding: '1.2rem' }}>
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, color: '#17A2B8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>{s.cat}</h4>
                {s.items.map(item => (
                  <div key={item} style={{ fontSize: 13, color: '#2C3E50', padding: '3px 0', borderBottom: '1px solid #f0f0f0' }}>{item}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="#003B6F" style={{ padding: '56px 40px', textAlign: 'center' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 680 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 14 }}>
            ¿Necesitas un equipo consultor con esta experiencia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, marginBottom: 28, lineHeight: 1.8 }}>
            BIC — Bernal Ingeniería Consultores. Primera consulta sin costo. Respuesta en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
            <Btn href={`https://wa.me/${WA}`}>📱 Contactar por WhatsApp</Btn>
            <Btn href="/credenciales" variant="outline" dark>Ver credenciales →</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['BIC — Bernal Ingeniería Consultores', 'UNAL', 'COPNIA 17202-313228', 'Colombia · Ecuador · México'].map(b => (
              <Tag key={b} style={{ fontSize: 11 }}>{b}</Tag>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
