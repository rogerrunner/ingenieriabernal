import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar el diseño de una PTAR en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño de PTAR en Colombia — Plantas de Tratamiento Aguas Residuales | BIC',
  description: 'BIC diseña plantas de tratamiento de aguas residuales (PTAR) municipales e industriales en Colombia. RAS 2017, PSMV, vertimientos CAR. Memoria de cálculo COPNIA. Cotice en 24 horas.',
  keywords: [
    'diseño PTAR Colombia',
    'planta tratamiento aguas residuales Colombia',
    'PTAR municipal Colombia',
    'PTAR industrial Colombia',
    'diseño PTAR Manizales',
    'diseño PTAR Eje Cafetero',
    'planta tratamiento aguas residuales RAS 2017',
    'PSMV plan saneamiento manejo vertimientos',
    'permiso vertimientos CAR Colombia',
    'ingeniería sanitaria Colombia',
    'PTAR aguas residuales domésticas',
    'consultor diseño PTAR Colombia',
const WA = '573162888989'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Diseño de PTAR en Colombia')

const seoConfig = {
  title: 'Diseño de PTAR en Colombia | Plantas de Tratamiento Aguas Residuales',
  description: 'Diseño profesional de plantas de tratamiento de aguas residuales (PTAR) en Colombia. Ingeniería hidráulica con experiencia en proyectos municipales e industriales.',
  keywords: [
    'diseño ptar colombia',
    'planta tratamiento aguas residuales colombia',
    'ptar municipal colombia',
    'ptar industrial colombia',
    'diseño ptar eje cafetero',
    'planta tratamiento aguas residuales manizales',
    'ingeniería ambiental ptar colombia',
    'ptar RAS 2000 colombia',
    'diseño sistemas tratamiento aguas residuales',
    'consultoría ptar colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-ptar-colombia',
}

const TIPOS = [
  {
    icon: '🏭',
    tipo: 'PTAR Municipal',
    desc: 'Tratamiento de aguas residuales domésticas para municipios y centros poblados. Diseño de sistemas de tratamiento primario, secundario y terciario según la carga contaminante y los límites de vertimiento exigidos por la CAR. Tecnologías aplicadas: lagunas de estabilización, reactores UASB, filtros percoladores, lodos activados y humedales artificiales.',
    aplica: 'Alcaldías, ESP acueducto/alcantarillado, asociaciones comunitarias de acueducto.',
  },
  {
    icon: '🏗️',
    tipo: 'PTAR Industrial',
    desc: 'Sistemas de tratamiento para efluentes industriales con cargas específicas: aguas de proceso agroindustrial (café, caña, lácteos), aguas de lavado industrial, lixiviados y aguas con alta carga de grasas o sólidos. El diseño incluye sistemas de pretratamiento, tratamiento fisicoquímico y biológico, con verificación de cumplimiento de los límites de vertimiento del Decreto 1076/2015.',
    aplica: 'Industria agroindustrial, parques industriales, bodegas y centros logísticos.',
  },
  {
    icon: '🏘️',
    tipo: 'PTAR para Urbanizaciones',
    desc: 'Plantas de tratamiento para proyectos urbanísticos que no tienen posibilidad de conexión a la red de alcantarillado público. El diseño incluye análisis de alternativas tecnológicas, cálculo de la carga doméstica, selección del sistema de tratamiento y diseño de la disposición final del efluente (riego, infiltración o descarga a cuerpo de agua).',
    aplica: 'Constructoras, urbanizadores, campamentos, conjuntos residenciales rurales.',
  },
  {
    icon: '🔄',
    tipo: 'Rehabilitación de PTAR Existente',
    desc: 'Diagnóstico técnico y rediseño de plantas que no cumplen con los parámetros de vertimiento, presentan problemas de olores, colmatación de lechos o insuficiencia de caudal. BIC realiza el diagnóstico en campo, identificación de la causa de la falla y propuesta técnica de rehabilitación con presupuesto.',
    aplica: 'Municipios, ESP y empresas con PTAR en operación deficiente.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Caracterización del agua residual y análisis de caudal',
    desc: 'Se determinan los caudales de diseño (caudal medio diario, caudal máximo horario) y la carga contaminante (DBO, DQO, SST, coliformes) mediante aforo de caudales y toma de muestras de laboratorio. Esta información es la base para seleccionar la tecnología de tratamiento adecuada.',
    herramientas: ['Aforo de caudales en campo', 'Análisis de laboratorio acreditado', 'Estimación poblacional DANE', 'Dotaciones RAS 2017'],
    resultado: 'Caudales de diseño + caracterización fisicoquímica del afluente',
  },
  {
    paso: '02',
    titulo: 'Selección de tecnología y análisis de alternativas',
    desc: 'BIC evalúa al menos dos alternativas tecnológicas considerando eficiencia de remoción, costos de construcción y operación, disponibilidad de área, requerimientos de energía y capacidad operativa del municipio o empresa. Se selecciona la alternativa óptima con criterios técnicos, económicos y de sostenibilidad.',
    herramientas: ['Análisis multicriterio', 'Costos comparativos O&M', 'Normativa MVCT (RAS 2017)', 'Guías técnicas MADS'],
    resultado: 'Alternativa seleccionada y justificada técnicamente',
  },
  {
    paso: '03',
    titulo: 'Diseño hidráulico y estructural de la PTAR',
    desc: 'Diseño detallado de cada unidad de tratamiento: dimensiones hidráulicas, tiempos de retención, cargas superficiales, estructuras de entrada y salida. Para sistemas biológicos se calculan los parámetros cinéticos y la carga orgánica superficial. Se generan memorias de cálculo completas firmadas por especialista COPNIA.',
    herramientas: ['AutoCAD Civil 3D (planos)', 'Modelación hidráulica unidades', 'NSR-10 (estructuras)', 'RAS 2017 (criterios de diseño)'],
    resultado: 'Memoria de cálculo + planos constructivos de cada unidad',
  },
  {
    paso: '04',
    titulo: 'Trámite de permiso de vertimiento ante la CAR',
    desc: 'BIC elabora los estudios técnicos requeridos por la Corporación Autónoma Regional para tramitar el permiso de vertimiento: caracterización del cuerpo receptor, análisis de capacidad de asimilación, estudio de impacto ambiental simplificado y memoria descriptiva del proyecto. Acompañamos el proceso hasta la obtención del permiso.',
    herramientas: ['Caracterización cuerpo receptor', 'Decreto 1076/2015 (permiso vertimiento)', 'Resoluciones CAR vigentes', 'Formularios SISTEMA'],
    resultado: 'Expediente técnico completo para radicar ante la CAR',
  },
]

const NORMATIVA = [
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'Reglamento Técnico del Sector de Agua Potable — criterios de diseño para PTAR municipales' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — régimen de permisos de vertimiento y estándares de calidad del efluente' },
  { codigo: 'Resolución 0631/2015', descripcion: 'MADS — parámetros y valores límite para vertimientos puntuales a cuerpos de agua' },
  { codigo: 'NSR-10', descripcion: 'Diseño estructural de tanques, reactores y estructuras de concreto de la PTAR' },
  { codigo: 'NTC 813', descripcion: 'Calidad del agua — parámetros fisicoquímicos y microbiológicos para monitoreo' },
  { codigo: 'PSMV', descripcion: 'Plan de Saneamiento y Manejo de Vertimientos — instrumento de planificación para municipios' },
const SERVICIOS_PTAR = [
  {
    icon: '🏭',
    titulo: 'PTAR municipal — sistemas de tratamiento colectivo',
    desc: 'Diseño integral de plantas de tratamiento de aguas residuales para municipios y centros poblados. Sistemas de tratamiento primario (rejillas, desarenadores, sedimentadores), secundario (lodos activados, filtros percoladores, reactores UASB) y terciario según los objetivos de calidad del cuerpo receptor. Cumplimiento de la Resolución 631 de 2015 del MADS y los lineamientos del PSMV ante la autoridad ambiental.',
  },
  {
    icon: '🔬',
    titulo: 'PTAR industrial — efluentes con cargas específicas',
    desc: 'Diseño de sistemas de tratamiento para industrias con vertimientos de alta carga orgánica, sólidos suspendidos, grasas y aceites o sustancias específicas: agroindustria cafetera, mataderos, procesadoras de lácteos, industria textil y química. Caracterización del afluente, balance de masas, dimensionamiento de unidades y memorias de cálculo para radicación ante CAR.',
  },
  {
    icon: '🌿',
    titulo: 'Sistemas de tratamiento sostenible — humedales y lagunaje',
    desc: 'Para comunidades rurales y pequeños municipios, BIC diseña sistemas de bajo costo y operación simplificada: lagunas de estabilización (anaerobias, facultativas y de maduración), humedales artificiales de flujo subsuperficial y sistemas de infiltración. Tecnologías apropiadas que cumplen el RAS 2000 con mínimos requerimientos de energía y personal calificado.',
  },
  {
    icon: '📋',
    titulo: 'Permiso de vertimiento y PSMV',
    desc: 'Elaboración del Plan de Saneamiento y Manejo de Vertimientos (PSMV) para municipios y del expediente técnico para la solicitud de permiso de vertimiento ante corporaciones autónomas (CORPOCALDAS, CRQ, CARDER, CAR, CDMB y otras). Incluye caracterización de vertimientos, modelación de calidad del cuerpo receptor y propuesta de metas de reducción.',
  },
]

const NORMATIVA = [
  {
    norma: 'Resolución 631 de 2015 — MADS',
    desc: 'Establece los parámetros y valores límite máximos permisibles en los vertimientos puntuales a cuerpos de agua superficiales y a los sistemas de alcantarillado público. Define los estándares de calidad que debe cumplir el efluente de toda PTAR antes de su descarga. BIC diseña los sistemas de tratamiento garantizando el cumplimiento de estos límites para cada tipo de industria o municipio.',
  },
  {
    norma: 'RAS 2000 — Resolución 0330 de 2017',
    desc: 'El Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico establece los criterios de diseño para plantas de tratamiento de aguas residuales en Colombia: población de diseño, períodos de retorno, caudales de diseño, sistemas de tratamiento mínimos según el nivel de complejidad y requisitos de los diseños para aprobación ante el ente de control.',
  },
  {
    norma: 'Decreto 3930 de 2010 y Decreto 1076 de 2015',
    desc: 'Marco normativo para el uso del agua y los residuos líquidos. El Decreto 1076 de 2015 (Decreto Único Reglamentario del Sector Ambiente) compila los requisitos para permisos de vertimiento, planes de cumplimiento y PSMV. BIC elabora los documentos técnicos requeridos para iniciar el trámite ante la autoridad ambiental competente.',
  },
  {
    norma: 'Ley 9 de 1979 y normativa sanitaria',
    desc: 'El Código Sanitario Nacional establece los requisitos básicos de saneamiento para el tratamiento y disposición de aguas residuales. En conjunto con las normas del INVIMA y el Ministerio de Salud, regula el diseño de sistemas de tratamiento en industrias de alimentos, hospitales y entidades de salud que generan aguas residuales con riesgos sanitarios especiales.',
  },
]

const TECNOLOGIAS = [
  { nombre: 'Lodos Activados', uso: 'Sistema biológico aerobio de alta eficiencia para remoción de DBO y sólidos suspendidos. Ideal para municipios medianos y grandes con alta carga orgánica y exigencias de calidad del efluente.' },
  { nombre: 'Reactor UASB', uso: 'Reactor anaerobio de flujo ascendente para tratamiento primario-secundario. Alta eficiencia con bajo consumo energético. Aplicado frecuentemente en el Eje Cafetero para aguas municipales e industriales de la agroindustria cafetera.' },
  { nombre: 'Filtros Percoladores', uso: 'Tratamiento biológico en medio fijo. Adecuado para municipios con fluctuaciones de caudal y donde la robustez operacional es prioritaria. BIC los diseña según el Modelo de Eckenfelder y las curvas NRC.' },
  { nombre: 'Lagunas de Estabilización', uso: 'Solución de bajo costo para comunidades rurales y municipios pequeños. BIC dimensiona el tren laguna anaerobia–facultativa–de maduración para cumplir los objetivos de calidad del efluente conforme al RAS.' },
]

const PROYECTOS = [
  { tipo: 'Municipios pequeños y medianos', desc: 'Diseño de PTAR para cabeceras municipales de nivel de complejidad bajo y medio. Selección de tecnología, diseño hidráulico y estructural, memorias de cálculo y planos para radicación ante la CAR y el MVCT.' },
  { tipo: 'Centros poblados y veredas', desc: 'Sistemas de tratamiento comunitario para caseríos y centros poblados rurales. Tanques sépticos mejorados, filtros anaerobios y humedales artificiales diseñados para operar sin energía eléctrica continua.' },
  { tipo: 'Plantas industriales — agroindustria', desc: 'PTAR para beneficio de café, procesamiento de lácteos, mataderos y plazas de mercado en el Eje Cafetero. Tratamiento de aguas con alta carga de DBO, aceites vegetales, sólidos y coliformes.' },
  { tipo: 'Hospitales y centros de salud', desc: 'Sistemas de tratamiento con desinfección avanzada (cloración, UV) para aguas residuales hospitalarias con riesgo microbiológico. Cumplimiento de requisitos del Ministerio de Salud y la autoridad ambiental.' },
  { tipo: 'Hoteles y desarrollos turísticos', desc: 'Plantas compactas de tratamiento para proyectos de ecoturismo y hoteles en zonas de alto valor ambiental. Diseño orientado al cumplimiento de los criterios de calidad de la CAR y la minimización del impacto visual.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Caracterización y diagnóstico', desc: 'Aforo de caudales, muestreo y análisis de laboratorio del agua residual. Evaluación del sistema existente y proyección de la población de diseño para el horizonte del proyecto.' },
  { paso: '02', titulo: 'Selección de tecnología', desc: 'Comparación de alternativas de tratamiento según caudal, caracterización del afluente, objetivos de calidad, disponibilidad de terreno, costos de construcción y operación, y capacidad institucional del operador.' },
  { paso: '03', titulo: 'Diseño hidráulico y estructural', desc: 'Dimensionamiento de todas las unidades de tratamiento: cálculos de carga hidráulica, tiempos de retención, eficiencias de remoción, perfiles hidráulicos y diseño estructural de tanques y estructuras.' },
  { paso: '04', titulo: 'Entregables y tramitación', desc: 'Memorias de cálculo, planos de planta, perfil y detalles constructivos, especificaciones técnicas, presupuesto detallado y documentación para trámite de permiso de vertimiento ante la corporación ambiental.' },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de una PTAR en Colombia?',
    a: 'El costo depende del caudal de diseño, la tecnología seleccionada, si existe información de campo disponible y los entregables requeridos. Para una PTAR municipal de 2 a 10 L/s (1.000 a 5.000 habitantes), el diseño completo con alternativas tecnológicas, memorias de cálculo y planos oscila entre $18 y $45 millones COP. Para plantas industriales el rango varía según la complejidad del efluente. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Qué tecnología de tratamiento es mejor para un municipio pequeño?',
    a: 'Para municipios menores a 5.000 habitantes en Colombia, las lagunas de estabilización (laguna anaerobia + laguna facultativa) son generalmente la opción más adecuada porque tienen costos de construcción moderados, operación simple y no requieren energía eléctrica. Para municipios con restricción de área, los sistemas compactos como el UASB + filtro biológico son una buena alternativa. BIC realiza el análisis de alternativas para cada caso específico considerando el área disponible, el presupuesto y la capacidad de operación del acueducto.',
  },
  {
    q: '¿Se puede financiar una PTAR con recursos del SGR?',
    a: 'Sí, es uno de los usos más frecuentes de las regalías en el sector de agua potable y saneamiento básico. Los proyectos de PTAR pueden financiarse con recursos del SGR (fondo de CTel, OCAD regional o OCAD paz), con SGP (Sistema General de Participaciones) y con recursos del Ministerio de Vivienda (programas de saneamiento). BIC puede formular el proyecto completo en MGA-Web del DNP con diseños técnicos, presupuesto APU y todos los módulos requeridos.',
  },
  {
    q: '¿Cuánto tiempo toma diseñar una PTAR?',
    a: 'El plazo típico es de 8 a 16 semanas para una PTAR municipal estándar: 2-3 semanas para caracterización del agua residual y análisis de alternativas, 4-6 semanas para el diseño detallado y 2-4 semanas para el expediente de permiso ambiental. Para plantas industriales con efluentes complejos el plazo puede ser mayor por los tiempos de laboratorio.',
  },
  {
    q: '¿BIC tramita el permiso de vertimiento ante la CAR?',
    a: 'BIC elabora toda la documentación técnica requerida para el permiso de vertimiento: caracterización del efluente, análisis del cuerpo receptor, memoria descriptiva y formularios. El radicado formal lo realiza el cliente, pero BIC acompaña el proceso respondiendo las observaciones técnicas de la Corporación Autónoma Regional hasta la expedición del permiso.',
  },
]

const ARTICULOS = [
  { href: '/blog/ptar-industrial-colombia', title: 'PTAR Industrial en Colombia: Guía Técnica Completa' },
  { href: '/blog/estudio-hidrologico-colombia', title: 'Estudio Hidrológico en Colombia: Requisitos y Proceso' },
  { href: '/blog/que-necesito-para-urbanizar-un-lote-colombia', title: '¿Qué necesito para urbanizar un lote en Colombia?' },
]
    q: '¿Qué es una PTAR y cuándo se requiere en Colombia?',
    a: 'Una Planta de Tratamiento de Aguas Residuales (PTAR) es una instalación que elimina o reduce contaminantes del agua antes de su descarga a un cuerpo receptor o al sistema de alcantarillado. En Colombia, toda descarga de aguas residuales requiere permiso de vertimiento (Decreto 1076 de 2015). Es obligatoria para: municipios con sistemas de alcantarillado (a través del PSMV), industrias con vertimientos puntuales, grandes generadores de aguas residuales y cualquier proyecto que requiera licencia ambiental ante la ANLA o la CAR.',
  },
  {
    q: '¿Cuál es la diferencia entre PTAR municipal e industrial?',
    a: 'La PTAR municipal trata aguas residuales domésticas de la red de alcantarillado de un municipio o centro poblado. La carga contaminante es relativamente homogénea (DBO, sólidos suspendidos, coliformes). La PTAR industrial trata efluentes de procesos productivos específicos que pueden contener cargas muy superiores: grasas y aceites, solventes, metales pesados, colorantes, etc. El diseño industrial requiere caracterizar el efluente en detalle antes de seleccionar el sistema de tratamiento.',
  },
  {
    q: '¿Cuánto cuesta diseñar una PTAR en Colombia?',
    a: 'El costo del diseño depende del caudal de diseño, la complejidad del sistema de tratamiento y los entregables requeridos. Como referencia para el mercado colombiano en 2026: PTAR rural o comunitaria (caudal < 5 L/s): $15–30 millones COP; PTAR municipal pequeña (5–50 L/s): $30–80 millones COP; PTAR municipal mediana con ingeniería de detalle: $80–200 millones COP; PTAR industrial con caracterización de laboratorio: $25–60 millones COP. BIC elabora propuesta detallada una vez conocida la información básica del proyecto.',
  },
  {
    q: '¿Qué documentos necesito para tramitar el permiso de vertimiento?',
    a: 'El expediente para permiso de vertimiento ante la CAR incluye: solicitud formal, certificado de existencia o representación legal, planos de localización, estudio técnico con caracterización del vertimiento (análisis de laboratorio), descripción del sistema de tratamiento, evaluación de la capacidad del cuerpo receptor, plan de seguimiento y monitoreo, y pago de tasas retributivas. BIC elabora todo el expediente técnico y acompaña el proceso ante la corporación hasta obtener la resolución de vertimiento.',
  },
  {
    q: '¿Cuánto tiempo tarda el diseño de una PTAR?',
    a: 'El tiempo depende de la complejidad del proyecto y la disponibilidad de información de campo. Para una PTAR rural o comunitaria con información disponible: 4–8 semanas. Para una PTAR municipal pequeña con aforos y caracterización incluidos: 8–16 semanas. Para PTAR municipales medianas o grandes con ingeniería de detalle: 16–32 semanas. El trámite de permiso de vertimiento ante la corporación ambiental puede tardar entre 3 y 12 meses adicionales dependiendo de la entidad y la complejidad del caso.',
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'BIC — Bernal Ingeniería Consultores',
      url: 'https://ingenieriabernal.co',
      telephone: '+573162888989',
      address: { '@type': 'PostalAddress', addressLocality: 'Manizales', addressRegion: 'Caldas', addressCountry: 'CO' },
      areaServed: 'Colombia',
      description: 'Consultoría en ingeniería hidráulica e hidrológica en Colombia. Diseño de PTAR, PTAP, modelación hidráulica y estudios hidrológicos.',
    },
    {
      '@type': 'Service',
      name: 'Diseño de PTAR en Colombia',
      provider: { '@type': 'LocalBusiness', name: 'BIC — Bernal Ingeniería Consultores' },
      areaServed: 'Colombia',
      description: 'Diseño de plantas de tratamiento de aguas residuales (PTAR) municipales e industriales en Colombia. Cumplimiento Resolución 631/2015 y RAS 2000.',
      serviceType: 'Ingeniería Ambiental e Hidráulica',
    },
  ],
}

export default function DisenoPTARColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería sanitaria · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de PTAR en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Plantas de tratamiento de aguas residuales municipales e industriales con permiso CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña plantas de tratamiento de aguas residuales en Colombia
            conforme al RAS 2017, la Resolución 0631/2015 y el Decreto 1076/2015. Entregamos memorias
            de cálculo firmadas, planos constructivos y el expediente técnico para tramitar el permiso
            de vertimiento ante la CAR.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de PTAR</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['RAS 2017','Res. 0631/2015','PSMV','Permiso CAR','COPNIA vigente','UASB · Lagunas'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de PTAR</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de PTAR necesita su proyecto?
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{t.tipo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>APLICA PARA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.aplica}</p>
                </div>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado · Nacional · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de PTAR en Colombia:<br />
            <span style={{ color: '#17A2B8' }}>Plantas de Tratamiento de Aguas Residuales</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña plantas de tratamiento de aguas residuales
            (PTAR) municipales e industriales en toda Colombia. Cumplimiento de la Resolución 631
            de 2015, el RAS 2000 y los lineamientos de las corporaciones autónomas regionales.
            Memorias de cálculo, planos y documentación técnica para tramitar el permiso de vertimiento.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['Res. 631/2015', 'RAS 2000', 'Decreto 1076/2015', 'PSMV', 'UASB', 'Lodos Activados', 'CAR'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye el diseño de una PTAR?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS_PTAR.map((item) => (
              <div key={item.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 10,
                }}>{item.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa aplicada: Resolución 631, RAS 2000 y Decreto 1076</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {NORMATIVA.map((item) => (
              <div key={item.norma} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
                border: '1px solid #E2E8F0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 13, marginBottom: 10,
                }}>{item.norma}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC una PTAR en Colombia
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#002A50' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3e0ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>ENTREGABLE</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
      {/* ── TECNOLOGÍAS ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Tecnologías de tratamiento</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Sistemas de tratamiento: UASB, Lodos Activados, Lagunas y Filtros</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {TECNOLOGIAS.map(s => (
              <div key={s.nombre} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 15, marginBottom: 10,
                }}>{s.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{s.uso}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige el diseño de PTAR en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12,
                }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
      {/* ── TIPOS DE PROYECTOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Experiencia en Colombia</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de proyectos PTAR en Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PROYECTOS.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#fff',
                borderLeft: '3px solid #17A2B8',
                border: '1px solid #E2E8F0', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{p.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <section style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1a3c5e', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Artículos relacionados</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ARTICULOS.map(a => (
                <li key={a.href}>
                  <a href={a.href} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', fontSize: 15 }}>→ {a.title}</a>
                </li>
              ))}
            </ul>
          </section>
      {/* ── PROCESO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso de trabajo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>4 fases del diseño de una PTAR</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {PROCESO.map(p => (
              <div key={p.paso} style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#17A2B8',
                  fontSize: 32, marginBottom: 8,
                }}>{p.paso}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{p.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre el diseño de PTAR en Colombia
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Diseño de PTAR en Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{
                background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: '24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10,
                }}>{item.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0,
                }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💧</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita el diseño de una PTAR<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de aguas residuales, el caudal estimado y la región.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Atención en todo Colombia.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              }}
            >
              📱 Cotizar por WhatsApp · +57 302 477 8910
            </a>
            <a
              href="/contacto"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: 'transparent', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Necesita diseñar una PTAR en Colombia?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto (municipal, industrial o rural), el municipio, el caudal
            estimado y los requerimientos de la corporación ambiental. Le enviamos propuesta técnica
            y cotización en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp · +57 316 288 8989
          </Btn>
        </div>
      </Section>
    </>
  )
}
