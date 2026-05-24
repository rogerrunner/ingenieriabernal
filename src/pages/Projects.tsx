import { useState, useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section, useInView } from '../components/ui'
import SEOHead from '../components/SEOHead'
import SchemaMarkup from '../components/SchemaMarkup'

const PROJECTS = [
  {
    id: 'guatica-risaralda',
    title: 'Control de Erosion Hidrica -- Guatica, Risaralda',
    client: 'Municipio de Guatica',
    location: 'Guatica, Risaralda',
    year: '2021',
    contract: 'Estudios hidraulicos e hidrologicos',
    value: 'Proyecto municipal',
    duration: '2021',
    category: 'Riesgo Hidrico',
    color: '#003B6F',
    img: '/img/proyectos/gbp_expert/p01_campo_guatica_risaralda.jpeg',
    challenge: 'Evaluar y modelar los procesos hidrologicos e hidraulicos de erosion lateral en el municipio de Guatica para proponer obras de proteccion y control de socavacion del cauce.',
    solution: 'Levantamiento topografico, modelacion HEC-RAS 2D, analisis de caudales maximos, perfil de velocidades y cartografia de amenaza. Propuesta de obras de estabilizacion de ribera.',
    result: 'Informe tecnico con mapas de amenaza, especificaciones de obras de control de erosion y medidas de manejo del cauce entregados al municipio y a la Corporacion Ambiental.',
    skills: ['HEC-RAS 2D', 'ArcGIS', 'HEC-HMS', 'AutoCAD'],
    norms: ['Dec. 1807/2014', 'RAS 2017', 'POMCA'],
  },
  {
    id: 'belalcazar-caldas',
    title: 'Gestion del Riesgo por Inundacion -- Belalcazar, Caldas',
    client: 'Municipio de Belalcazar',
    location: 'Belalcazar, Caldas',
    year: '2022',
    contract: 'Estudios detallados gestion del riesgo (Decreto 1807)',
    value: 'Regalias SGR',
    duration: '2022',
    category: 'Riesgo Hidrico',
    color: '#1A3A5C',
    img: '/img/proyectos/gbp_expert/p02_mapa_riesgo_belalcazar_caldas.jpg',
    challenge: 'Elaborar los estudios detallados de gestion del riesgo por inundacion requeridos por el Decreto 1807 de 2014 como insumo para la revision del EOT del municipio.',
    solution: 'Modelacion HEC-RAS 2D con DEM LiDAR, delimitacion de zonas de amenaza alta, media y baja. Cartografia de vulnerabilidad y estimacion del riesgo para periodos de retorno TR 10, 50 y 100 anos.',
    result: 'Mapas oficiales de amenaza y riesgo por inundacion incorporados al expediente del EOT. Informes aprobados por Corpocaldas e integrados al proceso de revision del ordenamiento territorial.',
    skills: ['HEC-RAS 2D', 'ArcGIS', 'LiDAR', 'HEC-HMS'],
    norms: ['Dec. 1807/2014', 'POMCA Rio Risaralda', 'RAS 2017'],
  },
  {
    id: 'santa-rosa-pasabocas',
    title: 'HEC-RAS 2D Pasabocas Patty -- Santa Rosa de Cabal, Risaralda',
    client: 'Promotor privado (parcelacion campestre)',
    location: 'Santa Rosa de Cabal, Risaralda',
    year: '2023',
    contract: 'Estudios hidraulicos e hidrologicos parcelacion',
    value: 'Proyecto privado',
    duration: '2023',
    category: 'Riesgo Hidrico',
    color: '#2D6A4F',
    img: '/img/proyectos/gbp_expert/p06_modelo_3d_hec_ras_santa_rosa.jpeg',
    challenge: 'Modelar hidraulicamente el sector Pasabocas Patty en Santa Rosa de Cabal para determinar la amenaza por inundacion sobre una parcelacion campestre en zona de expansion urbana.',
    solution: 'Modelacion HEC-RAS 2D con TR 10/50/100 anos. Mapas de profundidad y velocidad de la corriente. Cartografia de amenaza para tramite ante la CARDER y para el plan parcial del promotor.',
    result: 'Estudios tecnicos aprobados por la CARDER. Viabilidad hidraulica del predio confirmada con medidas de mitigacion. Proyecto privado avanzando a etapa de licencia urbanistica.',
    skills: ['HEC-RAS 2D', 'HEC-HMS', 'ArcGIS', 'Civil 3D'],
    norms: ['Dec. 1807/2014', 'POMCA Rio Campoalegre', 'RAS 2017'],
  },
  {
    id: 'aguas-manizales',
    title: 'Optimizacion Red Agua Potable -- Aguas de Manizales',
    client: 'INGEOSYS S.A. / Aguas de Manizales',
    location: 'Manizales, Caldas',
    year: '2016',
    contract: 'Contrato 20160110',
    value: '$250.000.000 COP',
    duration: 'Jun 2016 - Dic 2016',
    category: 'Acueducto',
    color: '#17A2B8',
    img: '/img/proyectos/gbp_expert/09_inspeccion_canales_hidraulicos_campo.jpeg',
    challenge: 'Modelar y optimizar la red de distribucion de agua potable de Manizales para identificar deficiencias de presion, caudal y cobertura, y proponer alternativas de mejora.',
    solution: 'Construccion del modelo hidraulico en EPANET con toda la red de la ciudad. Calibracion con datos reales de Aguas de Manizales. Analisis de escenarios y propuestas de optimizacion.',
    result: 'Modelo hidraulico calibrado y entregado a Aguas de Manizales. Propuestas tecnicas para mejoramiento de presiones en zonas deficitarias y optimizacion de la operacion del sistema.',
    skills: ['EPANET', 'AutoCAD', 'ArcGIS', 'Excel avanzado'],
    norms: ['RAS 2017', 'Res. 0330/2017'],
  },
  {
    id: 'primavera-real',
    title: 'Plan Parcial Primavera Real',
    client: 'PSI Ingenieria y Diseno S.A.S.',
    location: 'La Dorada, Caldas',
    year: '2017 - 2018',
    contract: 'Estudios geotecnicos e hidraulicos',
    value: '$20.000.000 COP',
    duration: 'May 2017 - Ene 2018',
    category: 'Riesgo Hidrico',
    color: '#003B6F',
    img: '/img/proyectos/gbp_expert/06_mapa_riesgo_hidrico_alto_medio_bajo.jpeg',
    challenge: 'Evaluar la viabilidad hidraulica y geotecnica de un desarrollo urbanistico de 24 hectareas en La Dorada para su incorporacion al plan parcial municipal.',
    solution: 'Estudios geotecnicos de campo, modelacion hidraulica HEC-RAS de cuencas que inciden sobre el predio, analisis de amenaza por inundacion y torrencialidad, propuesta de medidas estructurales y no estructurales.',
    result: 'Soporte tecnico completo para viabilidad del plan parcial. Proyecto aprobado con las medidas de mitigacion propuestas e incorporado al expediente municipal.',
    skills: ['HEC-RAS', 'HEC-HMS', 'ArcGIS', 'AutoCAD', 'Civil 3D'],
    norms: ['Dec. 1807/2014', 'RAS 2017', 'NSR-10'],
  },
  {
    id: 'makari-mall',
    title: 'Centro Comercial Makari Mall',
    client: 'TFCOL S.A.S. / Carlos Alberto Diaz',
    location: 'Dosquebradas, Risaralda',
    year: '2022',
    contract: 'Disenos hidrosanitarios y CI',
    value: '$4.500.000 COP',
    duration: 'Dic 2022',
    category: 'Contra Incendios',
    color: '#E63946',
    img: '/img/proyectos/gbp_expert/p07_dem_topografia_dosquebradas.jpeg',
    challenge: 'Disenar el sistema integral de redes hidrosanitarias y contra incendios para un centro comercial, cumpliendo la normativa colombiana vigente y los requisitos de la empresa de servicios publicos.',
    solution: 'Diseno hidraulico completo: red de acueducto, alcantarillado sanitario y pluvial, red contra incendios (rociadores, red humeda, extintores). Calculos NSR-10 Capitulos J y K, NTC 1500/1669/2301.',
    result: 'Proyecto completo listo para tramite y aprobacion ante la ESP y para construccion en obra. Cumplimiento total de normativa vigente.',
    skills: ['SewerGEMs', 'EPANET', 'AutoCAD', 'Civil 3D'],
    norms: ['NSR-10 J y K', 'NTC 1500', 'NTC 1669', 'NTC 2301'],
  },
  {
    id: 'guayaquil',
    title: 'Urbanizaciones Guayaquil -- Ecuador',
    client: 'Juan Bernardo Botero Ingenieria S.A.S. / Grupo AB',
    location: 'Guayaquil, Ecuador',
    year: '2015',
    contract: 'Consultoria hidraulica y geotecnica',
    value: '30+ km de canales',
    duration: 'Jun 2015 - Dic 2015',
    category: 'Internacional',
    color: '#7B2D8B',
    img: '/img/proyectos/gbp_expert/05_hec_ras_2d_rio_risaralda_llanura.jpeg',
    challenge: 'Diagnosticar y mejorar el comportamiento hidraulico de mas de 30 km de canales pluviales y 50+ obras civiles en tres urbanizaciones residenciales en Guayaquil ante eventos de lluvia intensa.',
    solution: 'Modelacion hidrologica e hidraulica completa con HEC-RAS y HEC-GEORAS. Visitas de campo, diagnostico de problematicas existentes (erosion, desbordamientos, sedimentacion). Diseno de obras de control.',
    result: 'Propuestas de intervencion integral para reducir vulnerabilidad. Planos de obras de control de erosion y manejo de escorrentias entregados al cliente.',
    skills: ['HEC-RAS', 'HEC-HMS', 'HEC-GEORAS', 'AutoCAD', 'ArcGIS'],
    norms: ['Norma IEOS Ecuador', 'RAS Colombia (referencia)'],
  },
  {
    id: 'chignahuapan',
    title: 'Ordenamiento Territorial Chignahuapan',
    client: 'Empresa Vision Norte / Municipio Chignahuapan',
    location: 'Puebla, Mexico',
    year: '2015 - 2017',
    contract: 'POT + Desarrollo Urbano (Apostille)',
    value: 'Dos programas validados SEDATU',
    duration: 'Oct 2015 - Dic 2017',
    category: 'Internacional',
    color: '#006400',
    img: '/img/proyectos/gbp_expert/04_modelacion_hec_ras_2d_malla_terreno.jpeg',
    challenge: 'Formular y estructurar los programas de Ordenamiento Territorial y Desarrollo Urbano para el municipio de Chignahuapan, Puebla, con cumplimiento de requisitos SEDATU para validacion oficial.',
    solution: 'Analisis espacial, cartografia tematica, estudios de riesgo hidrico, diagnostico urbano y rural. Dos programas formulados y presentados ante autoridades estatales y federales de Mexico.',
    result: 'Ambos programas validados por SEDATU (Secretaria de Desarrollo Agrario, Territorial y Urbano) y por la Direccion Municipal. Documentos con Apostille internacional.',
    skills: ['ArcGIS', 'AutoCAD', 'HEC-RAS', 'QGIS'],
    norms: ['LGAH Mexico', 'Ley de Asentamientos Humanos', 'SEDATU'],
  },
  {
    id: 'parque-tecnologico',
    title: 'Parque Tecnologico Villamaria Fase II',
    client: 'VHZ Ingenieria S.A.S.',
    location: 'Villamaria, Caldas',
    year: '2022',
    contract: 'Residente de Obra',
    value: 'Proyecto gubernamental',
    duration: 'Ene 2022 - Dic 2022',
    category: 'Residencia',
    color: '#B5451B',
    img: '/img/proyectos/gbp_expert/03_modelacion_hec_ras_2d_inundacion_3d.jpeg',
    challenge: 'Ejecutar la segunda fase del Parque Tecnologico de Villamaria como residente de obra, garantizando calidad tecnica, cumplimiento de especificaciones e informes a interventoria.',
    solution: 'Residencia tecnica permanente en obra. Seguimiento a instalaciones hidrosanitarias, redes CI, obras civiles. Coordinacion con interventoria, control de calidad y reportes de avance.',
    result: 'Fase II entregada en tiempo y con calidad tecnica verificada por interventoria. Proyecto referenciable ante VHZ Ingenieria y Gobernacion de Caldas.',
    skills: ['MS Project', 'AutoCAD', 'Excel', 'NSR-10'],
    norms: ['NSR-10', 'RAS 2017', 'NTC aplicables'],
  },
]

const CATEGORIES = ['Todos', 'Riesgo Hidrico', 'Acueducto', 'Contra Incendios', 'Internacional', 'Residencia']

const SEO_CONFIG = {
  title: 'Portafolio de Proyectos Hidraulicos -- BIC Colombia | Ingenieria Hidraulica',
  description: 'Proyectos reales de ingenieria hidraulica entregados por BIC en Colombia, Ecuador y Mexico. Gestion del riesgo Decreto 1807, modelacion HEC-RAS 2D, disenos hidrosanitarios y acueductos. COPNIA 17202-313228 CLD.',
  keywords: 'portafolio ingenieria hidraulica colombia, proyectos hec-ras colombia, gestion riesgo inundacion colombia, diseno acueducto proyectos colombia, bic bernal ingenieria proyectos',
  canonical: 'https://ingenieriabernal.co/proyectos',
}

export default function Projects() {
  const [cat, setCat] = useState('Todos')
  const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null)
  const { ref, inView } = useInView(0.05)

  useEffect(() => {
    // ItemList schema for AEO -- each project as a ListItem with location data
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Portafolio de Proyectos -- BIC Bernal Ingenieria Consultores',
      description: 'Proyectos de ingenieria hidraulica y sanitaria ejecutados por BIC en Colombia, Ecuador y Mexico.',
      url: 'https://ingenieriabernal.co/proyectos',
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: p.title,
          description: p.result,
          provider: {
            '@type': 'ProfessionalService',
            name: 'BIC Bernal Ingenieria Consultores',
            url: 'https://ingenieriabernal.co',
          },
          areaServed: {
            '@type': 'Place',
            name: p.location,
          },
        },
      })),
    }
    let el = document.getElementById('schema-portfolio')
    if (!el) {
      el = document.createElement('script')
      el.id = 'schema-portfolio'
      el.setAttribute('type', 'application/ld+json')
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)
    return () => { document.getElementById('schema-portfolio')?.remove() }
  }, [])

  const filtered = cat === 'Todos' ? PROJECTS : PROJECTS.filter(p => p.category === cat)

  return (
    <>
      <SEOHead config={SEO_CONFIG} />
      <SchemaMarkup type="service"
        serviceName="Portafolio Ingenieria Hidraulica BIC Colombia"
        serviceDesc="Proyectos reales de ingenieria hidraulica, gestion del riesgo y diseno hidrosanitario. BIC COPNIA 17202-313228 CLD."
        serviceUrl="/proyectos"
      />

      <section style={{ background: '#003B6F', padding: '120px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative' }}>
          <SectionLabel>Portafolio de proyectos</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.15 }}>
            Evidencia que respalda<br /><span style={{ color: '#17A2B8' }}>cada propuesta.</span>
          </h1>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: 16, marginTop: 20, maxWidth: 520, lineHeight: 1.75 }}>
            Proyectos reales con cliente, contrato y resultado verificable. Colombia, Ecuador y Mexico. COPNIA 17202-313228 CLD.
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {filtered.map((p, i) => (
              <div
                key={p.id}
                onClick={() => setSelected(p)}
                style={{
                  border: '1px solid #E2E8F0', borderRadius: 4, overflow: 'hidden',
                  cursor: 'pointer', transition: 'all 0.28s ease', background: '#fff',
                  opacity: inView ? 1 : 0,
                  animation: inView ? `fadeSlideUp 0.5s ease ${i * 0.07}s forwards` : 'none',
                } as React.CSSProperties}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0,59,111,0.1)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                {/* Photo */}
                {p.img && (
                  <div style={{ height: 160, overflow: 'hidden', background: p.color }}>
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                    />
                  </div>
                )}
                {/* Info */}
                <div style={{ padding: '18px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                    <Tag style={{ background: p.color + '18', color: p.color, border: `1px solid ${p.color}30` }}>{p.category}</Tag>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#94A3B8' }}>{p.year}</span>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, color: '#003B6F', lineHeight: 1.35, marginBottom: 6 }}>
                    {p.title.replace(' -- ', ' — ')}
                  </div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#64748B', marginBottom: 8 }}>
                    {p.location}
                  </div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#475569', lineHeight: 1.5 }}>
                    {p.challenge.slice(0, 85)}...
                  </div>
                  <div style={{ marginTop: 12, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12, color: '#17A2B8' }}>
                    Ver caso completo &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GEO fragment for AEO */}
          <section id="geo-fragment" style={{ marginTop: 60, background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '28px 32px' }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 16, color: '#003B6F', marginBottom: 12 }}>
              Proyectos de ingenieria hidraulica ejecutados por BIC en Colombia
            </h2>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#475569', lineHeight: 1.75, maxWidth: 760 }}>
              BIC -- Bernal Ingenieria Consultores (COPNIA 17202-313228 CLD) ha ejecutado mas de 50 proyectos de ingenieria hidraulica en Colombia, Ecuador y Mexico. Los proyectos incluyen gestion del riesgo por inundacion (Decreto 1807 de 2014), modelacion HEC-RAS 2D para planes parciales y licencias urbanisticas, diseno de sistemas de acueducto y alcantarillado RAS 2017, y redes hidrosanitarias NSR-10 para grandes edificaciones. Municipios con proyectos ejecutados: Manizales, Guatica (Risaralda), Belalcazar (Caldas), Santa Rosa de Cabal (Risaralda), Dosquebradas (Risaralda), La Dorada (Caldas), Villamaria (Caldas), Viterbo (Caldas), Puerto Boyaca y Guayaquil (Ecuador). Director tecnico: Ing. Rogerio Bernal Rios, especialista en ingenieria hidraulica -- Universidad Nacional de Colombia.
            </p>
          </section>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <Btn href="https://wa.me/573024778910?text=Hola%20BIC,%20quiero%20hablar%20sobre%20un%20proyecto">
              Solicitar propuesta para su proyecto &rarr;
            </Btn>
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
            {/* Modal header with photo */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              {selected.img ? (
                <div style={{ height: 200, background: selected.color, position: 'relative' }}>
                  <img src={selected.img} alt={selected.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent, ${selected.color}DD)` }} />
                </div>
              ) : (
                <div style={{ background: selected.color, padding: '28px 32px', position: 'relative', overflow: 'hidden' }}>
                  <BlueprintBg opacity={0.1} />
                </div>
              )}
              <button onClick={() => setSelected(null)} style={{
                position: 'absolute', top: 16, right: 16,
                background: 'rgba(0,0,0,0.35)', border: 'none', borderRadius: '50%',
                width: 32, height: 32, cursor: 'pointer', color: '#fff', fontSize: 18,
              }}>x</button>
              <div style={{ position: 'absolute', bottom: 20, left: 32, right: 32 }}>
                <Tag style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>{selected.category}</Tag>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 22, marginTop: 8, lineHeight: 1.3, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                  {selected.title.replace(' -- ', ' — ')}
                </h2>
              </div>
            </div>

            {/* Modal body */}
            <div style={{ padding: '32px' }}>
              {/* Meta */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                {[
                  { l: 'Cliente', v: selected.client },
                  { l: 'Ubicacion', v: selected.location },
                  { l: 'Periodo', v: selected.duration },
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
                { label: 'Solucion', text: selected.solution, color: '#17A2B8' },
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
                <Btn href="/contacto">Consultar proyecto similar &rarr;</Btn>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
