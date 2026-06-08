import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesitamos propuesta para modelación hidrológica HEC-HMS en Colombia. Es para EIA / vía / POMCA / POT / diseño de acueducto. ¿Pueden enviarnos una propuesta técnica?')

const seoConfig = {
  title: 'Modelación Hidrológica Colombia — HEC-HMS · EIA · Vías 4G · POMCA · POT | BIC',
  description: 'BIC ejecuta modelación hidrológica HEC-HMS para EIA de proyectos de infraestructura, concesiones viales 4G, POMCA y estudios de ordenamiento hídrico en Colombia. Firma COPNIA 17202-313228. Propuesta técnica.',
  keywords: [
    'modelación hidrológica Colombia',
    'HEC-HMS Colombia',
    'estudio hidrológico EIA Colombia',
    'modelación hidrológica concesiones viales Colombia',
    'HEC-HMS vías 4G Colombia',
    'modelación hidrológica POMCA Colombia',
    'estudio hidrológico POT EOT Colombia',
    'caudales diseño acueducto Colombia',
    'análisis frecuencias caudales Colombia',
    'curvas IDF Colombia IDEAM',
    'hidrograma creciente HEC-HMS Colombia',
    'modelación hidrológica infraestructura Colombia',
    'consultor hidrología COPNIA Colombia',
    'estudio hidrológico INVÍAS Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/modelacion-hidrologica-colombia',
}

const SOFTWARE = [
  { tag: 'HEC-HMS', org: 'USACE', desc: 'Modelación hidrológica de cuencas — estándar internacional para hidrogramas de creciente, tránsito de caudales y análisis de cuencas complejas. Aceptado por ANLA, CAR e IDEAM en Colombia.' },
  { tag: 'HEC-GeoHMS', org: 'USACE + ESRI', desc: 'Extensión SIG para delimitación automática de cuencas hidrográficas y extracción de parámetros morfométricos desde DEM de alta resolución.' },
  { tag: 'SWAT / SWAT+', org: 'USDA-ARS', desc: 'Modelación hidrológica continua para cuencas grandes (>100 km²): balance hídrico, escorrentía base, sedimentos. Para POMCA y estudios IDEAM.' },
  { tag: 'ArcGIS / QGIS', org: 'SIG', desc: 'Delimitación de cuencas, cartografía hidrológica, mapas de curvas de número CN y análisis espacial de estaciones hidrometeorológicas.' },
  { tag: 'Estadística hidrológica', org: 'IDEAM / RAS 2017', desc: 'Análisis de frecuencias Gumbel, Log-Pearson III, GEV. Ajuste de curvas IDF regionales. Correlación con registros IDEAM. Método Racional Modificado y SCS-CN.' },
  { tag: 'HEC-DSS', org: 'USACE', desc: 'Gestión de series de tiempo hidrológicas: precipitación, caudales, evapotranspiración. Integración directa con HEC-HMS y HEC-RAS.' },
]

const TIPOS = [
  {
    icon: '🏗️',
    tipo: 'Modelación Hidrológica para Diseño de Obras',
    subtitulo: 'Acueductos, bocatomas, puentes, alcantarillas, canales',
    desc: 'Toda obra hidráulica parte de un caudal de diseño confiable. Si el caudal está mal calculado, la obra queda subdimensionada (falla en la primera creciente) o sobredimensionada (costo innecesario). BIC calcula los caudales de diseño para los períodos de retorno que exige la norma — Tr 10, 25, 50 y 100 años según el tipo de obra — usando HEC-HMS calibrado con registros del IDEAM, curvas IDF regionales y el RAS 2017.',
    usos: ['Bocatomas y captaciones para acueductos', 'Alcantarillas y pasos de vía (INVÍAS)', 'Puentes y viaductos en zonas fluviales', 'Canales de conducción y drenaje', 'Diques y obras de protección contra crecientes', 'Represas y reservorios de agua'],
    norma: 'RAS 2017, Resolución 0330/2017, Manual INVÍAS, IDEAM',
  },
  {
    icon: '📋',
    tipo: 'Modelación Hidrológica para Licencias y Planes Parciales',
    subtitulo: 'Decreto 1807 / 2014 — componente hidrológico del estudio de riesgo',
    desc: 'El Decreto 1807/2014 exige un estudio de detalle con modelación hidrológica e hidráulica para que el curador otorgue licencia en zonas con amenaza alta o media. BIC entrega el componente hidrológico del estudio: análisis de la cuenca, caudales de diseño y caudal pico de la creciente que el modelo HEC-RAS necesita como condición de frontera. Sin este análisis hidrológico, el modelo hidráulico no es válido.',
    usos: ['Planes parciales en suelo de expansión con cauces cercanos', 'Licencias de construcción en zonas de amenaza', 'Urbanizaciones y parcelaciones con ríos o quebradas colindantes', 'Polígonos de actuación urbanística para constructoras'],
    norma: 'Decreto 1807/2014 (Decreto 1077/2015), Guía Técnica MinVivienda',
  },
  {
    icon: '🏙️',
    tipo: 'Modelación Hidrológica para POT y Ordenamiento Territorial',
    subtitulo: 'Zonificación de amenaza municipal — estudios básicos y detallados',
    desc: 'Los POT, PBOT y EOT deben incluir la zonificación de amenaza hídrica a escala municipal. BIC realiza el componente hidrológico con modelos HEC-HMS para los cauces principales, análisis de frecuencias con series del IDEAM y cartografía de cuencas. El estudio básico (escala 1:25.000) y el estudio de detalle (escala 1:5.000 o 1:2.000) se diferencian en alcance y resolución espacial.',
    usos: ['Formulación o revisión de POT / PBOT / EOT', 'Planes Municipales de Gestión del Riesgo (PMGRD)', 'Estudios base para corporaciones ambientales (CORPOCALDAS, CARDER, CRQ)', 'Componente de riesgo en planes de desarrollo departamental'],
    norma: 'Ley 388/97, Decreto 1807/2014, Guía técnica MinVivienda 2018',
  },
  {
    icon: '🌿',
    tipo: 'Modelación de Oferta Hídrica y Caudal Ecológico',
    subtitulo: 'Concesiones de agua — permisos CAR y ANLA',
    desc: 'Antes de otorgar una concesión de aguas, la CAR exige un estudio de oferta y demanda que demuestre que el río tiene suficiente agua para el proyecto sin comprometer el caudal ecológico mínimo. BIC calcula el caudal medio mensual, el Q95% (estiaje), la demanda hídrica y el caudal ecológico según el Decreto 1076/2015, con datos de estaciones IDEAM cercanas.',
    usos: ['Concesión de aguas para acueductos veredales y bocatomas', 'Concesión para distritos de riego y agroindustria', 'Concesión para uso industrial (parques industriales, minería)', 'Permiso de ocupación de cauce'],
    norma: 'Decreto 1076/2015, Resolución 865/2004 MAVDT (caudal ecológico)',
  },
  {
    icon: '💰',
    tipo: 'Modelación Hidrológica para Proyectos de Regalías SGR',
    subtitulo: 'Componente hidrológico en proyectos MGA-Web para municipios',
    desc: 'Los proyectos de acueducto, alcantarillado y saneamiento formulados ante el SGR requieren un estudio hidrológico que soporta el caudal de diseño del sistema. BIC elabora el análisis hidrológico conforme a los lineamientos del DNP y del Ministerio de Vivienda para la aprobación en banca de proyectos, utilizando HEC-HMS y los métodos del RAS 2017.',
    usos: ['Proyectos de acueducto veredal para municipios', 'Estudios de factibilidad para PTAP municipales', 'Proyectos de manejo de aguas lluvias y drenaje urbano', 'Estudios de riesgo hídrico para obras de mitigación'],
    norma: 'CONPES 3981, Lineamientos DNP, RAS 2017',
  },
]

const METODOLOGIA = [
  {
    paso: '01',
    titulo: 'Recopilación de Información Hidroclimatológica',
    desc: 'Descarga de series históricas de precipitación máxima en 24h y caudales medios diarios de las estaciones del IDEAM más cercanas al área del proyecto. Análisis de completitud de los registros y relleno de datos faltantes. Cartografía base: DEM SRTM 30m o CartoCiudad, usos del suelo SIAC, suelos IGAC.',
    resultado: 'Base de datos hidroclimatológica del área de estudio',
  },
  {
    paso: '02',
    titulo: 'Delimitación y Caracterización Morfométrica de la Cuenca',
    desc: 'Delimitación automática de la cuenca hidrográfica con HEC-GeoHMS sobre el DEM. Caracterización morfométrica: área, perímetro, longitud del cauce principal, pendiente media, índice de compacidad (Gravelius), factor de forma (Horton), tiempo de concentración. Determinación de curvas de número CN según uso del suelo y tipos de suelo (método SCS).',
    resultado: 'Cuenca delimitada + parámetros morfométricos + mapa de uso del suelo',
  },
  {
    paso: '03',
    titulo: 'Análisis de Frecuencias y Curvas IDF',
    desc: 'Ajuste de distribuciones estadísticas (Gumbel, Log-Pearson III, GEV) a las series de precipitación máxima en 24h y de caudales máximos anuales. Pruebas de bondad de ajuste (chi-cuadrado, Kolmogorov-Smirnov). Construcción de curvas IDF regionales o uso de las curvas del IDEAM / RAS 2017 para la región de la cuenca.',
    resultado: 'Caudales y precipitaciones de diseño para Tr 2.33, 5, 10, 25, 50, 100 y 500 años',
  },
  {
    paso: '04',
    titulo: 'Construcción y Calibración del Modelo HEC-HMS',
    desc: 'Configuración del modelo HEC-HMS: subcuencas, cauces, almacenamientos y puntos de unión. Selección y calibración de métodos de pérdidas (SCS-CN, Green-Ampt), transformación lluvia-caudal (SCS, Clark, Snyder) y tránsito hidrológico (Muskingum, Lag). Calibración con eventos históricos documentados y validación cruzada.',
    resultado: 'Modelo HEC-HMS calibrado y validado con métricas de desempeño (NSE > 0.65)',
  },
  {
    paso: '05',
    titulo: 'Corrida del Modelo y Obtención de Caudales de Diseño',
    desc: 'Simulación del modelo para cada período de retorno. Obtención de hidrogramas de creciente: caudal pico, tiempo al pico, volumen de escorrentía directa. Para cuencas con regulación de embalses: tránsito del hidrograma a través de las estructuras de control. Análisis de sensibilidad a los parámetros de calibración.',
    resultado: 'Hidrogramas de creciente y caudales pico para cada Tr',
  },
  {
    paso: '06',
    titulo: 'Informe Técnico y Cartografía',
    desc: 'Elaboración del informe hidrológico conforme a los requisitos de la entidad receptora (CAR, Curador, DNP, ANLA): memoria de cálculo completa, mapa de cuencas y subcuencas, tabla de parámetros morfométricos, curvas IDF, hidrogramas de diseño y análisis de incertidumbre. Se entregan los archivos fuente del modelo HEC-HMS.',
    resultado: 'Informe técnico + archivos HEC-HMS + cartografía SIG lista para radicación',
  },
]

const PRECIOS = [
  { servicio: 'Estudio hidrológico básico (cuenca < 50 km², datos IDEAM disponibles)', rango: '$5M – $10M COP' },
  { servicio: 'Modelación HEC-HMS con calibración (cuenca media, 50–200 km²)', rango: '$8M – $18M COP' },
  { servicio: 'Modelación HEC-HMS compleja (cuenca grande o sin calibración histórica)', rango: '$15M – $28M COP' },
  { servicio: 'Componente hidrológico para estudio Decreto 1807 (plan parcial / POT)', rango: '$5M – $12M COP' },
  { servicio: 'Estudio de oferta hídrica y caudal ecológico (concesión de aguas)', rango: '$6M – $14M COP' },
  { servicio: 'Modelación hidrológica para SGR / MGA-Web (municipios)', rango: '$5M – $10M COP' },
]

const FAQ = [
  {
    q: '¿Para qué se usa la modelación hidrológica en Colombia?',
    a: 'La modelación hidrológica en Colombia se usa para calcular los caudales de diseño de obras hidráulicas (bocatomas, puentes, alcantarillas), elaborar estudios de amenaza por inundación exigidos por el Decreto 1807, obtener concesiones de aguas ante la CAR, y formular el componente hídrico de proyectos de regalías SGR. Es el paso previo obligatorio a la modelación hidráulica HEC-RAS.',
  },
  {
    q: '¿Cuánto cuesta un estudio de modelación hidrológica en Colombia?',
    a: 'El costo depende del tamaño de la cuenca, la disponibilidad de datos hidroclimáticos y el alcance del informe. Para estudios básicos (cuenca pequeña, datos IDEAM disponibles) los honorarios oscilan entre $5 y $10 millones COP. Para cuencas medianas o grandes con calibración completa, entre $10 y $25 millones. BIC entrega presupuesto detallado en menos de 24 horas hábiles sin costo.',
  },
  {
    q: '¿Cuánto tiempo tarda una modelación hidrológica?',
    a: 'Un estudio hidrológico básico (cuenca pequeña, datos del IDEAM disponibles) puede entregarse en 2 a 3 semanas. Para cuencas medianas con calibración y validación, el plazo típico es de 4 a 6 semanas. Cuando se requiere análisis de datos escasos o cuencas sin estaciones cercanas, puede extenderse a 6–10 semanas. BIC establece el cronograma exacto en la propuesta.',
  },
  {
    q: '¿Qué diferencia hay entre modelación hidrológica e hidráulica?',
    a: 'La modelación hidrológica (HEC-HMS) responde ¿cuánta agua llega? — transforma la lluvia en caudal, considerando la cuenca. La modelación hidráulica (HEC-RAS) responde ¿adónde va el agua? — simula el flujo dentro del cauce o la llanura de inundación. Para un estudio de riesgo Decreto 1807 completo, BIC realiza ambas modelaciones de forma integrada.',
  },
  {
    q: '¿Qué información necesita BIC para iniciar el estudio hidrológico?',
    a: 'BIC necesita: ubicación del proyecto (coordenadas o dirección), superficie aproximada de la cuenca, tipo de obra o trámite a realizar (plan parcial, licencia ambiental, bocatoma, etc.), y si dispone de algún levantamiento topográfico previo. Con esa información, BIC puede entregar una propuesta de honorarios y cronograma en menos de 24 horas.',
  },
  {
    q: '¿BIC realiza modelaciones hidrológicas fuera del Eje Cafetero?',
    a: 'Sí. BIC ha ejecutado estudios hidrológicos en Putumayo, Meta, Nariño, Valle, Antioquia y municipios de todo el país. La empresa tiene sede en Manizales (Caldas) con registro COPNIA vigente y capacidad de movilización nacional. Para cuencas sin estaciones IDEAM cercanas, BIC trabaja con datos satelitales (CHIRPS, ERA5) y correlación regional.',
  },
]

export default function ModelacionHidrologicaColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const schemaData = {
    faqItems: FAQ.map(f => ({ question: f.q, answer: f.a })),
    priceItems: PRECIOS.map(p => ({
      name: p.servicio,
      minPrice: parseInt(p.rango.replace(/[^0-9]/g, '').slice(0, 2)) * 1_000_000,
      maxPrice: parseInt(p.rango.replace(/[^0-9\s]/g, '').trim().split(/\s+/).pop()!) * 1_000_000,
      currency: 'COP',
    })),
  }

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup {...schemaData} />
      <BlueprintBg>

        {/* ── HERO ── */}
        <Section style={{ paddingTop: 72, paddingBottom: 48 }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <SectionLabel>Servicio Especializado</SectionLabel>
            <h1 style={{ fontSize: 'clamp(1.7rem,4vw,2.6rem)', fontWeight: 800, lineHeight: 1.15, margin: '12px 0 16px' }}>
              Modelación Hidrológica Colombia
            </h1>
            <p style={{ fontSize: 17, color: '#1e3a5f', maxWidth: 640, margin: '0 auto 12px', lineHeight: 1.7 }}>
              HEC-HMS · Análisis de Cuencas · Caudales de Diseño · Curvas IDF · Decreto 1807
            </p>
            <p style={{ fontSize: 15, color: '#475569', maxWidth: 620, margin: '0 auto 28px', lineHeight: 1.7 }}>
              Para <strong>constructoras, municipios, industria y promotores</strong> que necesitan el componente hidrológico de su proyecto. Firma COPNIA. Sede Manizales — cobertura nacional.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" variant="primary">
                Cotizar en WhatsApp
              </Btn>
              <Btn href="#cotizar" variant="outline">
                Propuesta en 24 h
              </Btn>
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── PRECIOS VISIBLES ── */}
        <Section style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <SectionLabel>Honorarios Orientativos</SectionLabel>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '8px 0 20px', color: '#1e3a5f' }}>
              ¿Cuánto cuesta una modelación hidrológica en Colombia?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
              {PRECIOS.map((p, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid #cbd5e1', borderRadius: 10, padding: '16px 20px' }}>
                  <p style={{ fontSize: 14, color: '#475569', margin: '0 0 8px', lineHeight: 1.5 }}>{p.servicio}</p>
                  <p style={{ fontSize: 18, fontWeight: 700, color: '#1d4ed8', margin: 0 }}>{p.rango}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: '#64748b', marginTop: 16, textAlign: 'center' }}>
              Los precios varían según tamaño de cuenca, disponibilidad de datos y alcance del informe. BIC entrega propuesta detallada en menos de 24 h hábiles — sin costo.
            </p>
          </div>
        </Section>

        <ThinLine />

        {/* ── ANTI-INTERMEDIARIO ── */}
        <Section style={{ paddingTop: 32, paddingBottom: 32 }}>
          <div style={{ maxWidth: 760, margin: '0 auto', background: 'rgba(30,58,95,0.06)', border: '1px solid #bfdbfe', borderRadius: 10, padding: '20px 24px' }}>
            <p style={{ fontSize: 15, color: '#1e3a5f', margin: 0, lineHeight: 1.7 }}>
              <strong>Atención directa al decisor.</strong> BIC trabaja directamente con gerentes de constructoras, directores de obra, secretarios de planeación municipal, gerentes de industria y promotores de urbanizaciones. No atendemos intermediarios, subcontratistas ni estudiantes. Si usted toma la decisión de contratar, escríbanos directo.
            </p>
          </div>
        </Section>

        <ThinLine />

        {/* ── SOFTWARE ── */}
        <Section style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <SectionLabel>Herramientas y Métodos</SectionLabel>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '8px 0 24px', color: '#1e3a5f' }}>
              Software e instrumentos de modelación
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
              {SOFTWARE.map((s, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid #e2e8f0', borderRadius: 10, padding: '16px 18px' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                    <Tag>{s.tag}</Tag>
                    <span style={{ fontSize: 12, color: '#64748b', marginTop: 3 }}>{s.org}</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#475569', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── TIPOS DE ESTUDIO ── */}
        <Section style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <SectionLabel>Alcance del Servicio</SectionLabel>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '8px 0 24px', color: '#1e3a5f' }}>
              Tipos de modelación hidrológica que ejecuta BIC
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {TIPOS.map((t, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.88)', border: '1px solid #cbd5e1', borderRadius: 12, padding: '20px 24px' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10 }}>
                    <span style={{ fontSize: 24 }}>{t.icon}</span>
                    <div>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1e3a5f', margin: '0 0 2px' }}>{t.tipo}</h3>
                      <p style={{ fontSize: 13, color: '#3b82f6', margin: 0, fontWeight: 500 }}>{t.subtitulo}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: '#374151', margin: '0 0 10px', lineHeight: 1.7 }}>{t.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {t.usos.map((u, j) => (
                      <span key={j} style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 20, padding: '3px 10px', fontSize: 12, color: '#1d4ed8' }}>
                        {u}
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: 12, color: '#64748b', margin: '8px 0 0' }}>Norma: {t.norma}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── METODOLOGÍA ── */}
        <Section style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <SectionLabel>Proceso de Trabajo</SectionLabel>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '8px 0 24px', color: '#1e3a5f' }}>
              Metodología paso a paso
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {METODOLOGIA.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, background: 'rgba(255,255,255,0.85)', border: '1px solid #e2e8f0', borderRadius: 10, padding: '16px 20px' }}>
                  <div style={{ minWidth: 42, height: 42, background: '#1d4ed8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                    {m.paso}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', margin: '0 0 6px' }}>{m.titulo}</h3>
                    <p style={{ fontSize: 14, color: '#475569', margin: '0 0 6px', lineHeight: 1.65 }}>{m.desc}</p>
                    <p style={{ fontSize: 12, color: '#3b82f6', margin: 0, fontWeight: 500 }}>Resultado: {m.resultado}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── GEO FRAGMENT ── */}
        <Section style={{ paddingTop: 36, paddingBottom: 36 }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <SectionLabel>Cobertura Regional</SectionLabel>
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: '8px 0 16px', color: '#1e3a5f' }}>
              Modelación hidrológica en el Eje Cafetero y todo Colombia
            </h2>
            <section id="geo-fragment">
              <p style={{ fontSize: 15, color: '#1e3a5f', lineHeight: 1.8, margin: 0 }}>
                BIC — Bernal Ingeniería Consultores es una firma de ingeniería hidráulica con sede en <strong>Manizales, Caldas</strong>, especializada en modelación hidrológica con <strong>HEC-HMS</strong> para el <strong>Eje Cafetero</strong> (Caldas, Risaralda, Quindío) y con cobertura nacional. Ejecuta estudios hidrológicos para constructoras y promotores inmobiliarios, planes parciales y licencias de urbanismo que requieren el componente hidrológico del Decreto 1807, municipios y alcaldías que formulan proyectos de agua y saneamiento ante el SGR, empresas industriales y agroindustriales que necesitan concesión de aguas ante CORPOCALDAS, CARDER, CRQ, CVC, CORANTIOQUIA u otras corporaciones autónomas regionales, e interventores que requieren revisión independiente de estudios hidrológicos entregados por terceros. Con registro <strong>COPNIA vigente</strong> (17202-313228 CLD) y más de 100 proyectos ejecutados en Colombia y Ecuador, BIC garantiza estudios hidrológicos válidos para radicación ante cualquier autoridad ambiental, curador urbano o entidad financiadora.
              </p>
            </section>
          </div>
        </Section>

        <ThinLine />

        {/* ── FAQ ── */}
        <Section style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <SectionLabel>Preguntas Frecuentes</SectionLabel>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '8px 0 24px', color: '#1e3a5f' }}>
              Todo lo que necesita saber antes de contratar
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {FAQ.map((f, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.88)', border: '1px solid #e2e8f0', borderRadius: 10, padding: '18px 22px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e3a5f', margin: '0 0 8px' }}>{f.q}</h3>
                  <p style={{ fontSize: 14, color: '#374151', margin: 0, lineHeight: 1.7 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── QUOTE FORM ── */}
        <Section id="cotizar" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <SectionLabel>Propuesta Gratuita</SectionLabel>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: '8px 0 20px', color: '#1e3a5f' }}>
              Cuéntenos su proyecto — respuesta en menos de 24 h
            </h2>
            <QuoteFormInline
              serviceHint="Modelación Hidrológica HEC-HMS"
              waNumber={WA}
              waMessage={WA_MSG}
            />
          </div>
        </Section>

        {/* ── CTA BANNER ── */}
        <CTABanner
          title="¿Necesita el estudio hidrológico para su proyecto?"
          subtitle="Constructoras, municipios e industria — atención directa al decisor. Sin intermediarios."
          ctaPrimary={{ label: 'WhatsApp directo', href: `https://wa.me/${WA}?text=${WA_MSG}` }}
          ctaSecondary={{ label: 'Ver gestión de riesgo', href: '/gestion-riesgo-hidrico' }}
      
        />
      </>
    )
}
