import { useState, useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section, useInView } from '../components/ui'

const SERVICES = [
  {
    id: 'hidrosanitario',
    icon: '💧',
    title: 'Diseños Hidrosanitarios y Contra Incendios',
    subtitle: 'NSR-10 Cap. J y K · NTC 1500 · NTC 1669 · NTC 2301',
    seoKeywords: 'diseño hidrosanitario Colombia, sistemas contra incendios NSR-10, red húmeda seca rociadores',
    desc: 'Diseño integral de redes internas de acueducto, alcantarillado sanitario, aguas lluvias, ventilación y sistemas de protección contra incendios — rociadores, red húmeda y seca, gabinetes, extintores y detección. Entregamos memorias de cálculo hidráulico, planos constructivos en AutoCAD, despieces isométricos y presupuesto de obra con APU. Cumplimiento total de NSR-10 Capítulos J y K, NTC 1500, NTC 1669, NTC 2301 y Resolución 0330/2017.',
    norms: ['NSR-10 Cap. J y K', 'NTC 1500', 'NTC 1669', 'NTC 2301', 'Res. 0330/2017'],
    software: ['EPANET', 'SewerGEMs', 'EPASWMM', 'AutoCAD', 'Civil 3D'],
    deliverables: ['Memorias de cálculo hidráulico', 'Planos constructivos CAD', 'Isométricos y despieces', 'Especificaciones técnicas', 'Presupuesto APU'],
    projects: ['Makarí Mall — Dosquebradas (diseño CI completo)', 'Centro Cultural Cacique Ucuzca — Anserma', 'Proyecto Montecarlo — Viterbo', 'Palacio de Justicia — La Dorada (Rama Judicial)'],
    color: '#17A2B8',
  },
  {
    id: 'modelacion',
    icon: '🌊',
    title: 'Modelación Hidráulica e Hidrológica',
    subtitle: 'HEC-RAS 1D/2D · HEC-HMS · Iber · TETIS v9.0',
    seoKeywords: 'modelación HEC-RAS 2D Colombia, estudio inundación torrencialidad, análisis hidrológico hidráulico',
    desc: 'Modelación hidrológica e hidráulica para estudios de amenaza por inundación, torrencialidad y crecientes. HEC-RAS 1D/2D con superficies LiDAR de alta resolución, HEC-HMS para hidrologías de cuenca, TETIS v9.0 para caudales máximos y el software Iber para análisis 2D en zonas urbanas. Mapas de profundidad, velocidad y tiempo de concentración. Insumo técnico para POT, planes parciales, licencias de urbanismo y gestión del riesgo bajo Decreto 1807/2014.',
    norms: ['Decreto 1807/2014', 'RAS 2017', 'Guía metodológica IDEAM', 'POMCA', 'NSR-10'],
    software: ['HEC-RAS 1D/2D', 'HEC-HMS', 'HEC-GEORAS', 'Iber', 'TETIS v9.0', 'ArcGIS', 'AutoCAD'],
    deliverables: ['Modelo HEC-RAS calibrado', 'Mapas de amenaza por inundación', 'Caudales de diseño por período de retorno', 'Informe técnico IDEAM-compatible', 'Recomendaciones de mitigación'],
    projects: ['EJE GROUP — Torrencialidad 8 municipios Eje Cafetero', 'Primavera Real — Plan parcial 24 Ha La Dorada', 'Urbanizaciones residenciales — Guayaquil, Ecuador (30+ km canales)'],
    color: '#0077B6',
  },
  {
    id: 'acueducto',
    icon: '🔧',
    title: 'Acueducto, Alcantarillado y Saneamiento Básico',
    subtitle: 'Res. 0330/2017 · RAS 2017 · Diseño municipal y rural',
    seoKeywords: 'diseño acueducto alcantarillado Colombia municipios, saneamiento básico Res 0330 2017, EPANET red distribución',
    desc: 'Diseño de sistemas de abastecimiento de agua potable y saneamiento básico para municipios, urbanizaciones y desarrollos rurales. Redes de distribución con modelación EPANET, alcantarillado sanitario y pluvial con SewerGEMs, líneas de conducción y estructuras de captación. Aplicación estricta de la Resolución 0330 de 2017 y el Reglamento de Agua y Saneamiento (RAS 2017). Incluye memoria de cálculo, planos, especificaciones técnicas y presupuesto listo para proceso contractual.',
    norms: ['Resolución 0330/2017', 'RAS 2017', 'Decreto 1076/2015', 'NSR-10'],
    software: ['EPANET', 'SewerGEMs', 'EPASWMM', 'AutoCAD Civil 3D', 'HEC-RAS'],
    deliverables: ['Diseño hidráulico de redes', 'Modelo EPANET calibrado', 'Planos constructivos', 'Especificaciones y presupuesto APU', 'Memorias de cálculo RAS 2017'],
    projects: ['Aguas de Manizales — Optimización red agua potable ($250M COP)', 'Urbanización Guaduales Santa Rosa — RL Constructora', 'Proyectos acueducto Alcaldía Viterbo — Caldas'],
    color: '#0D6E3A',
  },
  {
    id: 'riesgo',
    icon: '⚠️',
    title: 'Gestión del Riesgo y Ordenamiento Territorial',
    subtitle: 'Decreto 1807/2014 · POT · Planes Parciales · ArcGIS',
    seoKeywords: 'estudio riesgo hídrico POT Colombia, zonificación amenaza plan parcial Decreto 1807, consultor riesgo inundación Caldas',
    desc: 'Estudios de amenaza, vulnerabilidad y riesgo por inundación, avenidas torrenciales y movimientos en masa para licencias de urbanismo, planes parciales y revisiones de POT. Cartografía de riesgo con ArcGIS, análisis de aptitud urbanística bajo el Decreto 1807 de 2014 y la Ley 1523 de 2012. Experiencia directa en POT municipales y programas de ordenamiento territorial con validación SEDATU (México, Apostille). Elaboración de planes de gestión del riesgo y sistemas de alerta temprana.',
    norms: ['Decreto 1807/2014', 'Ley 1523/2012', 'POMCA', 'Guías IDEAM / SGC', 'NSR-10 Tit. A'],
    software: ['ArcGIS', 'QGIS', 'HEC-RAS 2D', 'HEC-HMS', 'AutoCAD'],
    deliverables: ['Zonificación de amenaza y riesgo', 'Cartografía SIG escala 1:2000 y 1:5000', 'Concepto de aptitud urbanística', 'Plan de gestión del riesgo', 'Informe técnico para Curaduría / Alcaldía'],
    projects: ['Villahermosa Lote 7 — Viterbo (3 Ha, PSI Ingeniería)', 'Primavera Real — La Dorada (24 Ha, $20M COP)', 'Programa Ordenamiento Territorial — Chignahuapan, México (validado SEDATU, Apostille)'],
    color: '#C0392B',
  },
  {
    id: 'ptap',
    icon: '🏭',
    title: 'Diseño de PTAP y PTAR',
    subtitle: 'Plantas de Tratamiento de Agua Potable y Residual · Res. 0330/2017',
    seoKeywords: 'diseño PTAP planta tratamiento agua potable Colombia, diseño PTAR aguas residuales municipio, consultor agua potable Eje Cafetero',
    desc: 'Diseño de plantas de tratamiento de agua potable (PTAP) y plantas de tratamiento de aguas residuales (PTAR) para municipios, comunidades rurales e industrias. Definición del tren de tratamiento, diseño hidráulico de unidades (captación, desarenador, coagulación, floculación, sedimentación, filtración, desinfección), memorias de cálculo y planos constructivos. Cumplimiento de la Resolución 0330/2017, Resolución 2115/2007 y Resolución 0631/2015. La PTAP del Occidente de Caldas — que beneficia a 43.000 habitantes en Anserma, Belalcázar, San José y municipios aledaños — es un proyecto de referencia activo en la zona de operación de BIC.',
    norms: ['Resolución 0330/2017', 'Resolución 2115/2007', 'Resolución 0631/2015', 'RAS 2017', 'Decreto 1076/2015'],
    software: ['AutoCAD Civil 3D', 'EPANET', 'SewerGEMs', 'Excel técnico'],
    deliverables: ['Diseño del tren de tratamiento', 'Memorias de cálculo unidades hidráulicas', 'Planos arquitectónicos y constructivos', 'Especificaciones técnicas', 'Presupuesto APU'],
    projects: ['PTAP Occidente de Caldas — zona de influencia directa BIC ($14.800M COP activos)', 'Diseños plantas tratamiento municipios Caldas y Risaralda'],
    color: '#17A2B8',
  },
  {
    id: 'topobatimetria',
    icon: '📐',
    title: 'Topografía y Levantamientos Topobatimétricos',
    subtitle: 'Estación total · GPS RTK · Topobatimetría de quebradas y ríos',
    seoKeywords: 'levantamiento topobatimétrico quebrada río Colombia, topografía GPS RTK Eje Cafetero, modelo digital terreno MDT ingeniería hidráulica',
    desc: 'Levantamientos topográficos con estación total y GPS diferencial RTK para proyectos de ingeniería civil, vías, urbanizaciones y obras hidráulicas. Levantamientos topobatimétricos de quebradas, ríos y cuerpos de agua para modelación hidráulica con HEC-RAS — secciones transversales, perfil longitudinal y batimetría de fondo. Modelos Digitales del Terreno (MDT), cartografía SIG en ArcGIS/QGIS, diseño de vías y plataformas en Civil 3D. El levantamiento topobatimétrico es el insumo principal para cualquier estudio de inundación o torrencialidad verificable.',
    norms: ['IGAC — Manual levantamientos', 'Resolución 0330/2017', 'Decreto 1807/2014'],
    software: ['AutoCAD Civil 3D', 'ArcGIS', 'QGIS', 'GPS RTK', 'Estación total'],
    deliverables: ['Nube de puntos georeferenciada', 'MDT y curvas de nivel', 'Secciones transversales para HEC-RAS', 'Planos topográficos CAD', 'Cartografía SIG'],
    projects: ['Levantamientos topobatimétricos para modelaciones HEC-RAS en Caldas y Risaralda', 'Topografía para planes parciales y urbanizaciones Eje Cafetero'],
    color: '#8B4513',
  },
  {
    id: 'regalias',
    icon: '📋',
    title: 'Formulación de Proyectos de Regalías — MGA-Web',
    subtitle: 'SGR · DNP · MGA-Web · Agua Potable y Saneamiento',
    seoKeywords: 'formulación proyectos regalías MGA-Web DNP Colombia, proyectos agua saneamiento SGR municipios, consultor regalías acueducto alcantarillado',
    desc: 'Formulación de proyectos de inversión pública en agua potable, saneamiento básico y gestión del riesgo para el Sistema General de Regalías (SGR) en la plataforma MGA-Web del DNP. Elaboración de estudios de prefactibilidad, análisis de alternativas, estudios y diseños técnicos, presupuestos, fichas EBI y documentación completa para aprobación ante OCAD. Experiencia directa en proyectos aprobados para municipios de Caldas y Boyacá. Es el servicio más escaso en el mercado nacional — la mayoría de municipios no tienen quién les formule correctamente.',
    norms: ['Decreto 1082/2015 SGR', 'Manual MGA-Web DNP', 'BPIN', 'Normativa agua y saneamiento'],
    software: ['MGA-Web DNP', 'MS Project', 'Excel técnico', 'AutoCAD'],
    deliverables: ['Documento técnico de formulación', 'Ficha EBI diligenciada en MGA-Web', 'Presupuesto detallado SGR', 'Estudios de prefactibilidad', 'Anexos técnicos para OCAD'],
    projects: ['Alcaldía Puerto Boyacá — Contrato 621/2021 ($10.5M COP, 44 días)', 'Alcaldía Viterbo Caldas — Proyectos de inversión hídrica'],
    color: '#6610F2',
  },
  {
    id: 'ambiental',
    icon: '🌿',
    title: 'Ingeniería Ambiental y Trámites ante CAR',
    subtitle: 'CORPOCALDAS · CARDER · CRQ · CVC · Concesiones · Vertimientos',
    seoKeywords: 'trámites ambientales CAR Colombia ingeniería, permiso vertimientos CORPOCALDAS CARDER, estudio impacto ambiental EIA consultor',
    desc: 'Gestión de trámites ambientales ante corporaciones autónomas regionales: concesiones de agua superficial y subterránea, permisos de vertimientos, ocupaciones de cauce, planes de manejo ambiental (PMA) y estudios de impacto ambiental (EIA). Conocimiento directo de los requerimientos técnicos de CORPOCALDAS, CARDER y CRQ. Diagnósticos ambientales, caracterizaciones de fuentes hídricas, monitoreo de calidad del agua y elaboración de informes de cumplimiento para entidades reguladoras.',
    norms: ['Decreto 1076/2015', 'Ley 99/1993', 'Res. 0631/2015 vertimientos', 'Res. 2115/2007 calidad agua'],
    software: ['ArcGIS', 'QGIS', 'AutoCAD', 'Excel técnico'],
    deliverables: ['Solicitud concesión de aguas', 'Permiso de vertimientos', 'Plan de Manejo Ambiental PMA', 'Estudio de Impacto Ambiental EIA', 'Informes de cumplimiento CAR'],
    projects: ['Proyectos con permisos CORPOCALDAS en Caldas occidente', 'Planes de manejo ambiental para obras de infraestructura hídrica'],
    color: '#0D6E3A',
  },
  {
    id: 'residencia',
    icon: '🏗️',
    title: 'Residencia, Supervisión e Interventoría de Obra',
    subtitle: 'Obras hidráulicas · Hidrosanitarias · Infraestructura',
    seoKeywords: 'residente obra hidráulica Colombia, interventoría obras acueducto alcantarillado, supervisión técnica ingeniería hidráulica',
    desc: 'Dirección técnica en campo como residente de obra o interventor para proyectos de infraestructura hidráulica, redes hidrosanitarias, sistemas contra incendios, vías con componente de drenaje y obras de protección hídrica. Control de calidad de materiales, seguimiento a cronograma y presupuesto, informes de avance, actas parciales y liquidación. Experiencia en obras contratadas por la Rama Judicial, VHZ Ingeniería, empresas privadas y alcaldías municipales en el Eje Cafetero y Magdalena Medio.',
    norms: ['NSR-10', 'RAS 2017', 'Res. 0330/2017', 'Normativa INVIAS para obras de drenaje'],
    software: ['MS Project', 'AutoCAD', 'Excel control de obra'],
    deliverables: ['Informes semanales de avance', 'Control de calidad materiales', 'Actas de obra parciales', 'Registro fotográfico técnico', 'Informe final y acta de liquidación'],
    projects: ['Modernización red CI Palacio de Justicia La Dorada — Rama Judicial (Contrato CE-39-2025)', 'Parque Tecnológico Villamaría Fase II — VHZ Ingeniería 2022', 'Zona Industrial Santa Marta — Escala Constructores 2025', 'Vía Placa Huella Palestina, Caldas — Julián Rubio Arango 2020-2021'],
    color: '#2C3E50',
  },
]

export default function Services() {
  const [active, setActive] = useState('hidrosanitario')

  useEffect(() => {
    document.title = 'Servicios de Consultoría Integral — BIC Bernal Ingeniería Consultores'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content',
      'BIC ofrece consultoría integral: diseños hidrosanitarios NSR-10, modelación HEC-RAS 2D, acueducto y alcantarillado Res. 0330/2017, PTAP y PTAR, topobatimetría, gestión del riesgo, formulación regalías MGA-Web e interventoría. Manizales, Eje Cafetero y Colombia.'
    )
  }, [])

  const svc = SERVICES.find(s => s.id === active) || SERVICES[0]

  return (
    <>
      {/* HERO */}
      <section style={{ background: '#003B6F', padding: '120px 40px 60px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 860 }}>
          <SectionLabel>Servicios BIC</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 50px)', lineHeight: 1.15, marginBottom: 20 }}>
            Consultoría Integral de Ingeniería<br />
            <span style={{ color: '#17A2B8' }}>en Colombia y Latinoamérica</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: 660, lineHeight: 1.8, marginBottom: 28 }}>
            BIC — Bernal Ingeniería Consultores ofrece nueve líneas de servicio bajo una sola dirección técnica. Hidráulica, topobatimetría, PTAP/PTAR, gestión del riesgo, formulación de regalías, ambiental y más — sin que el cliente tenga que coordinar múltiples firmas.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn href="https://wa.me/573017326991?text=Hola%2C%20quiero%20consultar%20sobre%20los%20servicios%20de%20BIC">📱 Consultar servicio específico</Btn>
            <Btn href="/equipo" variant="outline" dark>Ver equipo →</Btn>
          </div>
        </div>
      </section>

      {/* SELECTOR DE SERVICIOS */}
      <section style={{ background: '#F8FAFC', padding: '56px 40px' }}>
        <div className="container">
          <SectionLabel>Líneas de servicio</SectionLabel>
          <ThinLine />
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem', marginTop: '1.5rem', alignItems: 'start' }}>

            {/* Lista lateral */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, position: 'sticky', top: 90 }}>
              {SERVICES.map(s => (
                <button key={s.id} onClick={() => setActive(s.id)} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
                  background: active === s.id ? '#003B6F' : '#fff',
                  border: `1px solid ${active === s.id ? '#003B6F' : '#deedf5'}`,
                  borderRadius: 8, cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                  borderLeft: `4px solid ${active === s.id ? '#17A2B8' : 'transparent'}`,
                }}>
                  <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12, color: active === s.id ? '#fff' : '#2C3E50', lineHeight: 1.3 }}>{s.title}</span>
                </button>
              ))}
            </div>

            {/* Detalle del servicio activo */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '2rem', border: '1px solid #e0edf5' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2rem' }}>{svc.icon}</span>
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(18px, 2vw, 24px)', margin: 0 }}>{svc.title}</h2>
                  <p style={{ color: '#17A2B8', fontSize: 13, fontWeight: 600, margin: '4px 0 0' }}>{svc.subtitle}</p>
                </div>
              </div>
              <div style={{ width: 40, height: 3, background: svc.color, borderRadius: 2, marginBottom: '1.2rem' }} />
              <p style={{ color: '#2C3E50', fontSize: 15, lineHeight: 1.8, marginBottom: '1.5rem' }}>{svc.desc}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.2rem', marginBottom: '1.5rem' }}>
                <div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, color: '#003B6F', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Normativa aplicada</h4>
                  {svc.norms.map(n => <div key={n} style={{ fontSize: 12, color: '#475569', padding: '3px 0', borderBottom: '1px solid #f0f0f0' }}>{n}</div>)}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, color: '#003B6F', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Software</h4>
                  {svc.software.map(s => <div key={s} style={{ fontSize: 12, color: '#475569', padding: '3px 0', borderBottom: '1px solid #f0f0f0' }}>{s}</div>)}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, color: '#003B6F', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Entregables</h4>
                  {svc.deliverables.map(d => <div key={d} style={{ fontSize: 12, color: '#475569', padding: '3px 0', borderBottom: '1px solid #f0f0f0' }}>{d}</div>)}
                </div>
              </div>

              <div style={{ background: '#f0f7fa', borderRadius: 8, padding: '1rem 1.2rem', marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700, color: '#003B6F', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>Proyectos ejecutados</h4>
                {svc.projects.map(p => (
                  <div key={p} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#17A2B8', marginTop: 6, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: '#2C3E50' }}>{p}</span>
                  </div>
                ))}
              </div>

              <Btn href={`https://wa.me/573017326991?text=Hola%2C%20necesito%20información%20sobre%20${encodeURIComponent(svc.title)}%20con%20BIC`} style={{ fontSize: 13 }}>
                📱 Cotizar {svc.title} →
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ BIC */}
      <section style={{ background: '#003B6F', padding: '56px 40px' }}>
        <BlueprintBg opacity={0.06} />
        <div className="container" style={{ position: 'relative', maxWidth: 960 }}>
          <SectionLabel light>La diferencia BIC</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(20px, 3vw, 30px)', margin: '1.2rem 0 2rem' }}>
            ¿Por qué elegir BIC sobre un consultor individual?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.2rem' }}>
            {[
              { icon: '🎯', t: 'Un solo contrato', b: 'Todos los servicios bajo un único acuerdo técnico. Sin coordinar múltiples firmas ni responsabilidades cruzadas.' },
              { icon: '⚡', t: 'Entrega más rápida', b: 'Diseños de hidráulica, geotecnia y arquitectura en paralelo. Menos tiempo muerto entre disciplinas.' },
              { icon: '📋', t: 'Normativa garantizada', b: 'Rogerio Bernal conoce NSR-10, RAS 2017, Res. 0330/2017, Decreto 1807/2014 y la normativa CAR de memoria. Sin reprocesos.' },
              { icon: '🌍', t: 'Experiencia internacional', b: 'Colombia, Ecuador y México. TOEFL iBT 98/120. Proyectos validados con Apostille. Acceso a licitaciones BID/CAF.' },
            ].map(item => (
              <div key={item.t} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '1.5rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", color: '#fff', fontWeight: 700, margin: '0 0 0.5rem', fontSize: '1rem' }}>{item.t}</h4>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.85rem', lineHeight: 1.65, margin: 0 }}>{item.b}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Btn href="/contacto" style={{ background: '#17A2B8', color: '#fff', border: 'none', fontSize: '1rem', padding: '0.9rem 2.2rem' }}>
              Solicitar cotización integral →
            </Btn>
          </div>
        </div>
      </section>
    </>
  )
}
