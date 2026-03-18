import { useState } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section, useInView } from '../components/ui'

const PROJECTS = [
  {
    id: 'aguas-manizales',
    title: 'Optimización Red Agua Potable — Aguas de Manizales',
    client: 'INGEOSYS S.A. / Aguas de Manizales',
    location: 'Manizales, Caldas',
    year: '2016',
    contract: 'Contrato 20160110',
    value: '$250.000.000 COP',
    duration: 'Jun — Dic 2016',
    category: 'Acueducto',
    color: '#17A2B8',
    challenge: 'Modelar y optimizar la red de distribución de agua potable de Manizales para identificar deficiencias de presión, caudal y cobertura, y proponer alternativas de mejora.',
    solution: 'Construcción del modelo hidráulico en EPANET con toda la red de la ciudad. Calibración con datos reales de Aguas de Manizales. Análisis de escenarios y propuestas de optimización.',
    result: 'Modelo hidráulico calibrado y entregado a Aguas de Manizales. Propuestas técnicas para mejoramiento de presiones en zonas deficitarias y optimización de la operación del sistema.',
    skills: ['EPANET', 'AutoCAD', 'ArcGIS', 'Excel avanzado'],
    norms: ['RAS 2017', 'Res. 0330/2017'],
  },
  {
    id: 'primavera-real',
    title: 'Plan Parcial Primavera Real',
    client: 'PSI Ingeniería y Diseño S.A.S.',
    location: 'La Dorada, Caldas',
    year: '2017 — 2018',
    contract: 'Estudios geotécnicos e hidráulicos',
    value: '$20.000.000 COP',
    duration: 'May 2017 — Ene 2018',
    category: 'Riesgo Hídrico',
    color: '#003B6F',
    challenge: 'Evaluar la viabilidad hidráulica y geotécnica de un desarrollo urbanístico de 24 hectáreas en La Dorada para su incorporación al plan parcial municipal.',
    solution: 'Estudios geotécnicos de campo, modelación hidráulica HEC-RAS de cuencas que inciden sobre el predio, análisis de amenaza por inundación y torrencialidad, propuesta de medidas estructurales y no estructurales.',
    result: 'Soporte técnico completo para viabilidad del plan parcial. Proyecto aprobado con las medidas de mitigación propuestas e incorporado al expediente municipal.',
    skills: ['HEC-RAS', 'HEC-HMS', 'ArcGIS', 'AutoCAD', 'Civil 3D'],
    norms: ['Dec. 1807/2014', 'RAS 2017', 'NSR-10'],
  },
  {
    id: 'makari-mall',
    title: 'Centro Comercial Makarí Mall',
    client: 'TFCOL S.A.S. / Carlos Alberto Díaz',
    location: 'Dosquebradas, Risaralda',
    year: '2022',
    contract: 'Diseños hidrosanitarios y CI',
    value: '$4.500.000 COP',
    duration: 'Dic 2022',
    category: 'Contra Incendios',
    color: '#E63946',
    challenge: 'Diseñar el sistema integral de redes hidrosanitarias y contra incendios para un centro comercial, cumpliendo la normativa colombiana vigente y los requisitos de la empresa de servicios públicos.',
    solution: 'Diseño hidráulico completo: red de acueducto, alcantarillado sanitario y pluvial, red contra incendios (rociadores, red húmeda, extintores). Cálculos NSR-10 Capítulos J y K, NTC 1500/1669/2301. Planos, memorias y presupuesto.',
    result: 'Proyecto completo listo para trámite y aprobación ante la ESP y para construcción en obra. Cumplimiento total de normativa vigente.',
    skills: ['SewerGEMs', 'EPANET', 'AutoCAD', 'Civil 3D'],
    norms: ['NSR-10 J y K', 'NTC 1500', 'NTC 1669', 'NTC 2301', 'Res. 0330/2017'],
  },
  {
    id: 'guayaquil',
    title: 'Urbanizaciones Guayaquil — Ecuador',
    client: 'Juan Bernardo Botero Ingeniería S.A.S. / Grupo AB',
    location: 'Guayaquil, Ecuador',
    year: '2015',
    contract: 'Consultoría hidráulica y geotécnica',
    value: '30+ km de canales',
    duration: 'Jun — Dic 2015',
    category: 'Internacional',
    color: '#7B2D8B',
    challenge: 'Diagnosticar y mejorar el comportamiento hidráulico de más de 30 km de canales pluviales y 50+ obras civiles en tres urbanizaciones residenciales en Guayaquil ante eventos de lluvia intensa.',
    solution: 'Modelación hidráulica e hidrológica completa con HEC-RAS y HEC-GEORAS. Visitas de campo, diagnóstico de problemáticas existentes (erosión, desbordamientos, sedimentación). Diseño de obras de control.',
    result: 'Propuestas de intervención integral para reducir vulnerabilidad. Planos de obras de control de erosión y manejo de escorrentías entregados al cliente.',
    skills: ['HEC-RAS', 'HEC-HMS', 'HEC-GEORAS', 'AutoCAD', 'ArcGIS'],
    norms: ['Norma IEOS Ecuador', 'RAS Colombia (referencia)'],
  },
  {
    id: 'chignahuapan',
    title: 'Ordenamiento Territorial Chignahuapan',
    client: 'Empresa Visión Norte / Municipio Chignahuapan',
    location: 'Puebla, México',
    year: '2015 — 2017',
    contract: 'POT + Desarrollo Urbano (Apostille)',
    value: 'Dos programas validados SEDATU',
    duration: 'Oct 2015 — Dic 2017',
    category: 'Internacional',
    color: '#006400',
    challenge: 'Formular y estructurar los programas de Ordenamiento Territorial y Desarrollo Urbano para el municipio de Chignahuapan, Puebla, con cumplimiento de requisitos SEDATU para validación oficial.',
    solution: 'Profesional SIG/hidráulica/riesgo. Análisis espacial, cartografía temática, estudios de riesgo, diagnóstico urbano y rural. Dos programas formulados y presentados ante autoridades estatales y federales.',
    result: 'Ambos programas validados por SEDATU (Secretaría de Desarrollo Agrario, Territorial y Urbano) y por la Dirección Municipal. Documentos con Apostille internacional.',
    skills: ['ArcGIS', 'AutoCAD', 'HEC-RAS', 'QGIS'],
    norms: ['LGAH México', 'Ley de Asentamientos Humanos', 'SEDATU'],
  },
  {
    id: 'parque-tecnologico',
    title: 'Parque Tecnológico Villamaría Fase II',
    client: 'VHZ Ingeniería S.A.S.',
    location: 'Villamaría, Caldas',
    year: '2022',
    contract: 'Residente de Obra',
    value: 'Proyecto gubernamental',
    duration: 'Ene — Dic 2022',
    category: 'Residencia',
    color: '#B5451B',
    challenge: 'Ejecutar la segunda fase del Parque Tecnológico de Villamaría como residente de obra, garantizando calidad técnica, cumplimiento de especificaciones e informes a interventoría.',
    solution: 'Residencia técnica permanente en obra. Seguimiento a instalaciones hidrosanitarias, redes CI, obras civiles. Coordinación con interventoría, control de calidad y reportes de avance.',
    result: 'Fase II entregada en tiempo y con calidad técnica verificada por interventoría. Proyecto referenciable ante VHZ Ingeniería y Gobernación de Caldas.',
    skills: ['MS Project', 'AutoCAD', 'Excel', 'NSR-10'],
    norms: ['NSR-10', 'RAS 2017', 'NTC aplicables'],
  },
]

const CATEGORIES = ['Todos', 'Acueducto', 'Riesgo Hídrico', 'Contra Incendios', 'Internacional', 'Residencia']

export default function Projects() {
  const [cat, setCat] = useState('Todos')
  const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null)
  const { ref, inView } = useInView(0.05)

  const filtered = cat === 'Todos' ? PROJECTS : PROJECTS.filter(p => p.category === cat)

  return (
    <>
      <section style={{ background: '#003B6F', padding: '120px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative' }}>
          <SectionLabel>Portafolio de proyectos</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.15 }}>
            Evidencia que respalda<br /><span style={{ color: '#17A2B8' }}>cada propuesta.</span>
          </h1>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: 16, marginTop: 20, maxWidth: 520, lineHeight: 1.75 }}>
            Proyectos reales con cliente, contrato y resultado verificable. Colombia, Ecuador y México.
          </p>
        </div>
      </section>

      <section style={{ background: '#F8FAFC', padding: '60px 40px' }}>
        <div className="container" ref={ref as React.RefObject<HTMLDivElement>}>
          {/* Filter */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 36, flexWrap: 'wrap' }}>
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '7px 16px', borderRadius: 2, cursor: 'pointer',
                border: `1px solid ${cat === c ? '#17A2B8' : '#E2E8F0'}`,
                background: cat === c ? '#17A2B8' : '#fff',
                color: cat === c ? '#fff' : '#475569',
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12,
                transition: 'all 0.2s',
              }}>
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {filtered.map((p, i) => (
              <div
                key={p.id}
                onClick={() => setSelected(p)}
                style={{
                  border: '1px solid #E2E8F0', borderRadius: 4, overflow: 'hidden',
                  cursor: 'pointer', transition: 'all 0.28s ease',
                  opacity: inView ? 1 : 0,
                  animation: inView ? `fadeSlideUp 0.5s ease ${i * 0.07}s forwards` : 'none',
                  ':hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(0,59,111,0.1)' },
                } as React.CSSProperties}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,59,111,0.1)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                {/* Color header */}
                <div style={{ background: p.color, padding: '24px 20px', position: 'relative', overflow: 'hidden' }}>
                  <BlueprintBg opacity={0.12} />
                  <div style={{ position: 'relative' }}>
                    <Tag style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>{p.category}</Tag>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 18, marginTop: 10, lineHeight: 1.3 }}>
                      {p.title.split('—')[0]}
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div style={{ padding: '18px 20px', background: '#fff' }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#94A3B8', marginBottom: 6 }}>
                    {p.location} · {p.year}
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 13, color: p.color }}>
                    {p.value}
                  </div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#475569', marginTop: 8, lineHeight: 1.5 }}>
                    {p.challenge.slice(0, 80)}...
                  </div>
                  <div style={{ marginTop: 14, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12, color: '#17A2B8' }}>
                    Ver caso completo →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 500,
            background: 'rgba(0,42,80,0.85)', backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff', borderRadius: 6, maxWidth: 720, width: '100%',
              maxHeight: '90vh', overflow: 'auto',
              animation: 'fadeSlideUp 0.35s ease forwards',
            }}
          >
            {/* Modal header */}
            <div style={{ background: selected.color, padding: '28px 32px', position: 'relative', overflow: 'hidden' }}>
              <BlueprintBg opacity={0.1} />
              <button onClick={() => setSelected(null)} style={{
                position: 'absolute', top: 16, right: 16,
                background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
                width: 32, height: 32, cursor: 'pointer', color: '#fff', fontSize: 18,
              }}>×</button>
              <div style={{ position: 'relative' }}>
                <Tag style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>{selected.category}</Tag>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 24, marginTop: 12, lineHeight: 1.3 }}>
                  {selected.title}
                </h2>
              </div>
            </div>

            {/* Modal body */}
            <div style={{ padding: '32px' }}>
              {/* Meta */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                {[
                  { l: 'Cliente', v: selected.client },
                  { l: 'Ubicación', v: selected.location },
                  { l: 'Período', v: selected.duration },
                  { l: 'Alcance', v: selected.value },
                ].map(m => (
                  <div key={m.l} style={{ background: '#F8FAFC', borderRadius: 3, padding: '10px 16px', minWidth: 140 }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: '#94A3B8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{m.l}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#003B6F', marginTop: 3 }}>{m.v}</div>
                  </div>
                ))}
              </div>

              {/* C/S/R */}
              {[
                { label: 'Reto', text: selected.challenge, color: '#E63946' },
                { label: 'Solución', text: selected.solution, color: '#17A2B8' },
                { label: 'Resultado', text: selected.result, color: '#2D6A4F' },
              ].map(block => (
                <div key={block.label} style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 4, height: 20, background: block.color, borderRadius: 2 }} />
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: block.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {block.label}
                    </div>
                  </div>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#475569', lineHeight: 1.75, paddingLeft: 12 }}>
                    {block.text}
                  </p>
                </div>
              ))}

              {/* Tags */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 20 }}>
                {selected.skills.map(s => <Tag key={s} color="#2C3E50">{s}</Tag>)}
                {selected.norms.map(n => <Tag key={n} color={selected.color}>{n}</Tag>)}
              </div>

              <div style={{ marginTop: 24 }}>
                <Btn href="/contacto">Consultar proyecto similar →</Btn>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
