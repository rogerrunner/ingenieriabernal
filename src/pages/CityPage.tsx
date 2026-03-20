import { useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section } from '../components/ui'

const WA = '573024778910'

const DEFAULT_SERVICES = [
  'Diseños Hidrosanitarios y Contra Incendios (NSR-10)',
  'Modelación Hidráulica HEC-RAS 1D/2D',
  'Acueducto y Alcantarillado — Res. 0330/2017',
  'Gestión del Riesgo Hídrico / POT — Decreto 1807',
  'PTAP y PTAR — Plantas de Tratamiento',
  'Topobatimetría y Levantamientos Topográficos',
  'Formulación Proyectos Regalías MGA-Web SGR',
  'Ingeniería Ambiental — CORPOCALDAS / CARDER',
  'Residencia e Interventoría de Obra',
]

const DISCIPLINES = [
  { icon: '💧', label: 'Hidráulica e Hidrología' },
  { icon: '🏛️', label: 'Arquitectura y Urbanismo' },
  { icon: '⛏️', label: 'Geotecnia y Suelos' },
  { icon: '🌿', label: 'Ingeniería Ambiental' },
  { icon: '🏗️', label: 'Ingeniería Estructural' },
  { icon: '📐', label: 'Topografía y SIG' },
]

// Deep content for priority pages - 600+ words each with integrated keywords
const DEEP_CONTENT: Record<string, { body: string[], keyFacts: string[], cta: string }> = {
  'viterbo-occidente-caldas': {
    body: [
      'El occidente de Caldas concentra una de las mayores inversiones en infraestructura hídrica de la región andina. La Planta de Potabilización del Occidente de Caldas, con una inversión superior a $14.800 millones, beneficia directamente a más de 43.000 habitantes en Viterbo, Anserma, Belalcázar, San José y Risaralda municipio. BIC ha trabajado directamente en este territorio: Rogerio Bernal Ríos ejerció como Profesional Universitario en la Alcaldía de Viterbo, y ejecutó el diseño hidrosanitario y sistemas contra incendios del Centro Cultural Cacique Ucuzca en Anserma.',
      'Para proyectos de acueducto y alcantarillado en el occidente de Caldas, BIC aplica la Resolución 0330 de 2017 y el Reglamento RAS 2017 desde la prefactibilidad, garantizando diseños aprobables ante CORPOCALDAS y las empresas prestadoras de servicios públicos de la zona. Cada diseño incluye memorias de cálculo hidráulico con EPANET y SewerGEMs, planos constructivos en AutoCAD Civil 3D y presupuesto APU verificable.',
      'Los esquemas de ordenamiento territorial (EOT) de los municipios del occidente de Caldas — Viterbo, Anserma, Belalcázar, La Merced y Filadelfia — están en proceso de actualización, lo que genera demanda directa de estudios de amenaza y riesgo hídrico bajo el Decreto 1807 de 2014. BIC tiene experiencia verificable en la elaboración de estos estudios y en la cartografía de riesgo con ArcGIS para planes de ordenamiento territorial en Colombia y México.',
      'La formulación de proyectos de inversión pública para el Sistema General de Regalías (SGR) en la plataforma MGA-Web del DNP es uno de los servicios más escasos y más demandados en el occidente de Caldas. Municipios como Viterbo, Riosucio y Supía tienen recursos asignados pero frecuentemente carecen de profesionales técnicos para formular correctamente los proyectos de agua potable y saneamiento básico. BIC tiene contratos ejecutados de formulación MGA-Web verificables en el SECOP.',
    ],
    keyFacts: [
      'Experiencia directa: Alcaldía de Viterbo + Centro Cultural Cacique Ucuzca, Anserma',
      'PTAP Occidente Caldas activa: $14.800M — zona de operación BIC',
      'Municipios cubiertos: Viterbo · Anserma · Belalcázar · San José · Risaralda municipio · La Merced · Filadelfia',
      'Autoridad ambiental: CORPOCALDAS — BIC conoce los requisitos técnicos',
      'EOT municipales en actualización — estudios de riesgo obligatorios',
    ],
    cta: 'BIC conoce el territorio del occidente de Caldas desde adentro. Hemos trabajado con la Alcaldía de Viterbo y ejecutado proyectos en Anserma. Primera consulta sin costo.',
  },
  'palestina-aerocafe': {
    body: [
      'El Aeropuerto Internacional del Café — Aerocafé — representa la mayor inversión en infraestructura de transporte del Eje Cafetero, con más de $828.000 millones comprometidos en construcción de plataformas, pista, glorietas, vías de circulación y servicios de apoyo. Cada constructora y firma de ingeniería que entra a trabajar en el corredor de Palestina necesita estudios hidrológicos e hidráulicos, diseños de drenaje pluvial y gestión del riesgo hídrico compatibles con las exigencias del Aeropuerto Civil y la Aeronáutica Civil.',
      'BIC trabajó directamente en Palestina como residente de obra en el proyecto de vía placa huella entre 2020 y 2021, lo que significa conocimiento de primera mano de las condiciones geotécnicas, hidrológicas y normativas del municipio. Para proyectos en la zona de influencia de Aerocafé, el Decreto 1807 de 2014 exige estudios de amenaza y riesgo hídrico como requisito para licencias de urbanismo y obras de infraestructura.',
      'El diseño de drenaje pluvial para infraestructura aeroportuaria y sus zonas de expansión industrial requiere modelación hidráulica con HEC-RAS 2D para garantizar que los caudales máximos de diseño no generen inundaciones en la pista ni en las instalaciones. BIC realiza estas modelaciones con superficies LiDAR de alta resolución y períodos de retorno ajustados a la normativa aeroportuaria y a los requisitos del RAS 2017.',
      'La expansión urbana e industrial en el corredor Palestina–Chinchiná–Manizales, impulsada por la construcción de Aerocafé, genera proyectos de acueducto y alcantarillado para urbanizaciones, bodegas logísticas y parques industriales. BIC diseña estos sistemas bajo la Resolución 0330 de 2017, con modelación EPANET para redes de distribución y SewerGEMs para alcantarillado, garantizando cumplimiento normativo y aprobación expedita ante la empresa prestadora.',
    ],
    keyFacts: [
      'Inversión Aerocafé activa: $828.000 millones — mayor obra del Eje Cafetero',
      'BIC: residencia de obra en Palestina 2020–2021 — conocimiento directo del territorio',
      'Decreto 1807/2014: estudios de riesgo obligatorios para licencias en la zona',
      'Municipios del corredor: Palestina · Chinchiná · Villamaría · Manizales',
      'Autoridad ambiental: CORPOCALDAS — BIC conoce los trámites locales',
    ],
    cta: 'BIC trabajó en Palestina y conoce las condiciones técnicas del corredor Aerocafé. Consulta tu proyecto sin costo.',
  },
  'cerritos-norte-valle': {
    body: [
      'Cerritos es hoy la zona de mayor actividad constructiva del Eje Cafetero, con 22 planes parciales activos, 47 industrias establecidas y un hospital de alta complejidad en construcción. La doble calzada Cerritos–La Virginia amplía la conectividad y acelera el desarrollo inmobiliario e industrial de toda la franja norte del río Cauca. Cada uno de estos planes parciales está obligado por el Decreto 1807 de 2014 a presentar un estudio de amenaza y riesgo hídrico como requisito previo a la licencia de urbanismo.',
      'BIC realiza los estudios de riesgo hídrico para planes parciales en Cerritos con metodología compatible con los requerimientos de la Curaduría Urbana de Pereira y la CARDER. La modelación hidráulica con HEC-RAS 2D sobre el sistema hídrico de la zona — quebradas tributarias del río Otún y el río Cauca — permite determinar con precisión las zonas de amenaza alta, media y baja, y establecer las medidas de mitigación que hacen viable el proyecto urbanístico.',
      'Para proyectos industriales en la zona de Cerritos — bodegas logísticas, plantas de producción, centros de distribución — BIC diseña los sistemas contra incendios bajo NSR-10 Capítulos J y K, incluyendo red húmeda y seca, rociadores automáticos, detección y alarma, y sistemas de extinción especial. Este servicio no lo ofrece Ingehys ni la mayoría de firmas consultoras del Eje Cafetero.',
      'El corredor La Virginia–Cartago suma demanda técnica adicional. La doble calzada activa y la nueva sede de la CVC en Cartago (10.000 m²) generan proyectos de ingeniería hidráulica, ambiental y estructural que BIC puede resolver con su equipo multidisciplinario.',
    ],
    keyFacts: [
      '22 planes parciales activos en Cerritos — cada uno requiere estudio de riesgo hídrico',
      '47 industrias en la zona — demanda de CI NSR-10 y diseños hidrosanitarios',
      'Autoridad ambiental: CARDER — BIC conoce los requisitos técnicos',
      'Río Cauca y quebradas tributarias: modelación HEC-RAS 2D obligatoria',
      'Cartago: nueva sede CVC 10.000 m² + corredor Vías del Samán activo',
    ],
    cta: 'BIC domina los requisitos del Decreto 1807 para planes parciales en Cerritos y la CARDER. Consulta tu proyecto.',
  },
  'manizales': {
    body: [
      'Manizales es la ciudad base de operaciones de BIC y el mercado donde la firma tiene mayor trayectoria verificable. BIC ejecutó la optimización de la red de agua potable de Aguas de Manizales (Contrato 20160110, $250 millones COP) con modelación EPANET de toda la red urbana. En 2022 residió el Parque Tecnológico de Villamaría (VHZ Ingeniería), y en 2025 modernizó la red contra incendios del Palacio de Justicia (Rama Judicial, Contrato CE-39-2025). Son proyectos verificables en el SECOP y en el historial de las entidades contratantes.',
      'Para proyectos de consultoría en Manizales, BIC aplica la Resolución 0330 de 2017 y RAS 2017 con conocimiento directo de las condiciones de suelo, topografía y normativa local. La Curaduría Urbana de Manizales, CORPOCALDAS y las empresas prestadoras tienen requerimientos técnicos específicos que BIC conoce de primera mano. Esto se traduce en menos observaciones y aprobaciones más rápidas.',
      'Manizales tiene una dinámica constructiva activa en sectores como El Cable, Milán, Los Agustinos y las zonas de expansión hacia Villamaría y Chinchiná. Cada nuevo proyecto de urbanización requiere estudios de riesgo hídrico bajo el Decreto 1807/2014 como requisito para la licencia de urbanismo. La ciudad también tiene una alta demanda de diseños hidrosanitarios y contra incendios NSR-10 para edificios comerciales e institucionales — servicio donde BIC no tiene competencia directa de Ingehys.',
    ],
    keyFacts: [
      'Contrato ejecutado: Aguas de Manizales — optimización red agua potable $250M COP',
      'Contrato ejecutado: Parque Tecnológico Villamaría — VHZ Ingeniería 2022',
      'Contrato ejecutado: Palacio de Justicia — Rama Judicial 2025',
      'Normativa aplicada: CORPOCALDAS + Curaduría Urbana Manizales — conocimiento directo',
      'Diferenciador: CI NSR-10 completo — servicio que Ingehys no declara',
    ],
    cta: 'BIC tiene contratos ejecutados en Manizales verificables con Aguas de Manizales y la Rama Judicial. Primera consulta sin costo.',
  },
  'eje-cafetero': {
    body: [
      'El Eje Cafetero — Pereira, Armenia y Dosquebradas — es la zona de mayor dinamismo constructivo de Colombia media. BIC ejecutó el diseño integral hidrosanitario y contra incendios del Makarí Mall en Dosquebradas (TFCOL S.A.S., 2022), proyecto que incluyó cumplimiento total de NSR-10 Capítulos J y K, NTC 1500, 1669 y 2301. Es una referencia verificable de alta complejidad técnica en la zona.',
      'En Risaralda, el Decreto 1807/2014 es de obligatorio cumplimiento para toda licencia de urbanismo en zonas con amenaza hídrica. Cerritos concentra 22 planes parciales activos donde cada uno debe presentar estudio de riesgo hídrico antes de la licencia. BIC realiza estos estudios con modelación HEC-RAS 2D, cartografía en ArcGIS y conceptos técnicos compatibles con la Curaduría Urbana de Pereira y la CARDER.',
      'Armenia y el Quindío tienen expansión residencial y agroindustrial activa con proyectos de acueducto y alcantarillado bajo Resolución 0330/2017. La CRQ (Corporación Autónoma Regional del Quindío) tiene requisitos específicos para permisos ambientales en proyectos con intervención de fuentes hídricas — BIC conoce estos trámites y puede gestionarlos como parte de la consultoría integral.',
    ],
    keyFacts: [
      'Proyecto ejecutado: Makarí Mall Dosquebradas — NSR-10 J/K completo',
      '22 planes parciales activos en Cerritos — cada uno requiere estudio Decreto 1807',
      'CARDER (Risaralda) + CRQ (Quindío) — BIC conoce los requerimientos técnicos',
      'Armenia: expansión agroindustrial y residencial activa — mercado en crecimiento',
    ],
    cta: 'BIC ejecutó proyectos en Dosquebradas y conoce los requerimientos de CARDER y CRQ. Consulta tu proyecto en el Eje Cafetero.',
  },
  'magdalena-medio': {
    body: [
      'BIC tiene contratos ejecutados verificables en el Magdalena Medio: el Palacio de Justicia de La Dorada (Rama Judicial, Contrato CE-39-2025) con modernización completa de la red contra incendios NSR-10, y la formulación de proyectos de regalías en Puerto Boyacá (Contrato 621/2021, $10.5 millones COP, MGA-Web DNP). Estos contratos son verificables en el SECOP y acreditan presencia real de BIC en la región.',
      'La Dorada es el principal nodo logístico del Magdalena Medio caldense. Su ubicación sobre el río Magdalena genera demanda permanente de estudios de inundación para proyectos industriales y de infraestructura. Los análisis de crecientes del río Magdalena requieren modelación HEC-RAS 2D con datos hidrológicos del IDEAM y períodos de retorno adecuados a la normativa de licencias ambientales y urbanismo.',
      'Puerto Boyacá y Barrancabermeja tienen actividad petrolera e industrial intensa que genera proyectos de ingeniería hidrosanitaria, sistemas CI para plantas industriales, estudios de riesgo y gestión ambiental. Honda y Mariquita, en el norte del Tolima, son municipios con proyectos de acueducto activos y regalías disponibles — mercado sin competencia digital en consultoría técnica especializada.',
    ],
    keyFacts: [
      'Contrato ejecutado: Palacio de Justicia La Dorada — Rama Judicial CE-39-2025',
      'Contrato ejecutado: Alcaldía Puerto Boyacá — regalías MGA-Web Contrato 621/2021',
      'Río Magdalena: modelación HEC-RAS 2D para inundaciones con datos IDEAM',
      'Municipios sin SEO competidor: Honda, Mariquita, Puerto Salgar, La Victoria',
    ],
    cta: 'BIC tiene contratos ejecutados en La Dorada y Puerto Boyacá. Conocemos el río Magdalena y la región. Consulta tu proyecto.',
  },
  'rionegro-oriente-antioquia': {
    body: [
      'El oriente antioqueño — Rionegro, Guarne, La Ceja, El Retiro y Marinilla — figura entre las zonas más desarrolladas de Colombia según el Índice de Ciudades Modernas del DNP 2025. El corredor del aeropuerto José María Córdova concentra parques industriales, centros logísticos y urbanizaciones de alto estrato en expansión permanente. Cada proyecto de urbanización o plan parcial en estos municipios debe cumplir el Decreto 1807/2014 con estudios de riesgo hídrico como requisito para la licencia.',
      'La Curaduría Urbana de Rionegro exige estudios geotécnicos específicos para obras de movimiento de tierra — requerimiento que BIC puede cubrir con su equipo aliado de geotecnia. Cornare, la autoridad ambiental del oriente antioqueño, tiene requerimientos técnicos propios para concesiones de agua, permisos de vertimientos y ocupaciones de cauce que BIC conoce y puede gestionar.',
      'Rionegro tiene obras activas de mejora de la capacidad hidráulica del río Negro en 13.8 kilómetros, lideradas por Cornare y la Alcaldía. Esta dinámica genera demanda de consultores especializados en modelación hidráulica, topobatimetría y diseño de obras de protección — exactamente la especialidad de BIC. Ninguna firma consultora tiene presencia SEO específica para Rionegro, Guarne o La Ceja.',
    ],
    keyFacts: [
      'Rionegro, Guarne, La Ceja: top municipios desarrollados Colombia — DNP 2025',
      'Curaduría Urbana Rionegro: exige estudios geotécnicos específicos para movimiento tierra',
      'Cornare: autoridad ambiental — BIC puede gestionar permisos y concesiones',
      'Río Negro: obras hidráulicas activas 13.8 km — demanda de modelación HEC-RAS',
      'Cero firma consultora con SEO local para ingeniería hidráulica en la zona',
    ],
    cta: 'BIC ofrece consultoría integral en Rionegro y el Oriente Antioqueño. Estudios de riesgo, CI NSR-10, modelación HEC-RAS. Primera consulta sin costo.',
  },
  'sabana-norte': {
    body: [
      'La Sabana Norte de Bogotá — Tocancipá, Zipaquirá, Cajicá, Chía y Sopó — concentra el mayor crecimiento industrial y residencial del norte de Cundinamarca. Tocancipá figura entre los municipios más desarrollados de Colombia según el DNP, con parques industriales activos de empresas como Bavaria, Alpina y decenas de bodegas logísticas. Cada una de estas instalaciones requiere sistemas contra incendios NSR-10 y diseños hidrosanitarios industriales — servicio donde BIC no tiene competencia digital posicionada en la zona.',
      'Un hallazgo crítico para esta región: ningún municipio de la Sabana Norte ha podido invertir en mapeo de riesgos y desastres naturales, aunque la región es vulnerable a deslizamientos e inundaciones por quebradas tributarias del río Bogotá. Esto representa una oportunidad directa para BIC — la CAR Cundinamarca ha emitido suspensiones de obras por falta de estudios técnicos hídricos previos, generando urgencia en constructoras y desarrolladores.',
      'La inversión de $30.000 millones en infraestructura activa vía DNP-ENTerritorio en Chocontá, Zipaquirá y Tocancipá genera proyectos de acueducto, alcantarillado y gestión del riesgo hídrico donde BIC puede participar con su experiencia en formulación MGA-Web. Los municipios tienen regalías y transferencias disponibles pero frecuentemente carecen de consultores técnicos que formulen correctamente los proyectos.',
    ],
    keyFacts: [
      'Tocancipá: top municipios desarrollados Colombia según DNP — parques industriales activos',
      'Ningún municipio Sabana Norte ha invertido en mapeo de riesgos — demanda real verificada',
      'CAR Cundinamarca: suspensiones de obras por falta de estudios hídricos',
      'Inversión activa $30.000M vía DNP-ENTerritorio en la zona',
      'CI NSR-10 para industria: Bavaria, Alpina, bodegas logísticas — demanda alta',
    ],
    cta: 'BIC cubre la Sabana Norte con consultoría integral. Estudios de riesgo, CI NSR-10, acueducto y regalías. Primera consulta sin costo.',
  },
}

interface Props {
  city: string
  dept: string
  intro: string
  services?: string[]
  pageKey?: string
}

export default function CityPage({ city, dept, intro, services, pageKey }: Props) {
  const serviceList = services || DEFAULT_SERVICES
  const deepContent = pageKey ? DEEP_CONTENT[pageKey] : null
  const waMsg = encodeURIComponent(`Hola, me interesa una consultoría de BIC en ${city}. ¿Podríamos conversar?`)

  useEffect(() => {
    document.title = `Consultoría Integral en ${city} — BIC Bernal Ingeniería Consultores`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content',
      `BIC — Bernal Ingeniería Consultores en ${city}, ${dept}: hidráulica, geotecnia, arquitectura, ambiental y estructural. Director Rogerio Bernal Ríos — UNAL · COPNIA 17202-313228. 10+ años, Colombia.`
    )
  }, [city, dept])

  return (
    <>
      {/* HERO */}
      <section style={{ background: '#003B6F', padding: '120px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 860 }}>
          <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', marginBottom: 16 }}>
            📍 {city}, {dept}
          </Tag>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 50px)', lineHeight: 1.15, marginBottom: 20 }}>
            Consultoría Integral de Ingeniería<br />
            <span style={{ color: '#17A2B8' }}>en {city}, {dept}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: 620, lineHeight: 1.8, marginBottom: 10 }}>{intro}</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, maxWidth: 620, lineHeight: 1.75, marginBottom: 28 }}>
            BIC — Bernal Ingeniería Consultores · Director: Rogerio Bernal Ríos · UNAL · COPNIA 17202-313228 · 10+ años · Colombia, Ecuador y México
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${waMsg}`}>📱 Consultar — primera vez sin costo</Btn>
            <Btn href="/equipo" variant="outline" dark>Conocer el equipo →</Btn>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <Section bg="#F8FAFC" style={{ padding: '56px 40px' }}>
        <div className="container">
          <SectionLabel>Servicios en {city}</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(20px, 3vw, 28px)', margin: '1.2rem 0 2rem' }}>
            ¿Qué puede resolver BIC en {city}?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
            {serviceList.map((s, i) => (
              <div key={i} style={{ padding: '16px 20px', background: '#fff', border: '1px solid #deedf5', borderRadius: 8, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#17A2B8', marginTop: 6, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: '#2C3E50', lineHeight: 1.55 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTENIDO PROFUNDO (solo para páginas prioritarias) */}
      {deepContent && (
        <Section bg="#fff" style={{ padding: '56px 40px' }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <SectionLabel>Por qué BIC en {city}</SectionLabel>
            <ThinLine />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(20px, 3vw, 26px)', margin: '1.2rem 0 1.5rem' }}>
              Experiencia verificable en {city} y su región
            </h2>
            {deepContent.body.map((para, i) => (
              <p key={i} style={{ color: '#2C3E50', fontSize: 15, lineHeight: 1.85, marginBottom: '1.2rem' }}>{para}</p>
            ))}
            <div style={{ background: '#f0f7fa', borderRadius: 10, padding: '1.4rem 1.8rem', marginTop: '1.5rem' }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#003B6F', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                Datos clave para {city}
              </h3>
              {deepContent.keyFacts.map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#17A2B8', marginTop: 7, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: '#2C3E50', lineHeight: 1.6 }}>{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* EQUIPO */}
      <Section bg={deepContent ? '#F8FAFC' : '#fff'} style={{ padding: '56px 40px' }}>
        <div className="container">
          <SectionLabel>Equipo BIC en {city}</SectionLabel>
          <ThinLine />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center', marginTop: '1.5rem' }}>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(18px, 2.5vw, 24px)', marginBottom: '1rem' }}>
                Un equipo completo.<br />Un solo interlocutor técnico.
              </h2>
              <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Para proyectos en {city} que requieren más de una disciplina, BIC coordina el equipo sin que el cliente gestione múltiples contratos. Hidráulica, geotecnia, arquitectura, ambiental y estructural — bajo una sola dirección técnica.
              </p>
              <Btn href="/equipo" style={{ fontSize: 13 }}>Ver equipo completo →</Btn>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {DISCIPLINES.map(d => (
                <div key={d.label} style={{ padding: '14px 16px', background: '#f0f7fa', borderRadius: 8, display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: '1.3rem' }}>{d.icon}</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, color: '#003B6F', lineHeight: 1.3 }}>{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="#003B6F" style={{ padding: '56px 40px', textAlign: 'center' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 660 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 12 }}>
            {deepContent ? deepContent.cta : `¿Tienes un proyecto en ${city}?`}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, marginBottom: 28, lineHeight: 1.8 }}>
            Primera consulta sin costo. BIC te da una valoración técnica inicial en menos de 24 horas hábiles.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            <Btn href={`https://wa.me/${WA}?text=${waMsg}`}>📱 WhatsApp — respuesta en menos de 2h</Btn>
            <Btn href="/contacto" variant="outline" dark>Formulario de contacto</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['BIC — Equipo Multidisciplinario', 'UNAL', 'COPNIA 17202-313228', '10+ años', '3 países'].map(b => (
              <Tag key={b} style={{ fontSize: 11 }}>{b}</Tag>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

