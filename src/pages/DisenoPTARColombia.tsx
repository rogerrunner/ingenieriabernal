import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar el diseño de una PTAR en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño de PTAR para tu Proyecto Industrial, Urbanización o Municipio | BIC Colombia',
  description: '¿Necesitas diseñar tu planta de tratamiento de aguas residuales? BIC entrega el proyecto completo: memorias COPNIA, permisos CAR, RAS 2017. Para industrias, constructoras y entes territoriales. Propuesta sin costo.',
  keywords: [
    'diseño PTAR Colombia',
    'diseño PTAP Colombia',
    'planta tratamiento aguas residuales Colombia',
    'PTAR municipal Colombia',
    'PTAP filtración lenta Colombia',
    'diseño PTAR Manizales',
    'diseño PTAR Eje Cafetero',
    'planta tratamiento aguas residuales RAS 2017',
    'PSMV plan saneamiento manejo vertimientos',
    'permiso vertimientos CAR Colombia',
    'ingeniería sanitaria Colombia',
    'PTAR lagunas estabilización Colombia',
    'PTAP comunidades rurales Colombia',
    'consultor diseño PTAR Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-ptar-colombia',
}

const TECNOLOGIAS = [
  { ico: '🏞️', nombre: 'Lagunas de estabilización', desc: 'Facultativas, anaerobias y de maduración. Bajo costo de construcción y operación, sin energía eléctrica. Ideal para comunidades rurales y municipios hasta 5.000 hab.' },
  { ico: '⚗️', nombre: 'Reactores UASB', desc: 'Alta eficiencia en remoción de materia orgánica para caudales medianos. Genera biogás aprovechable. Menor huella de suelo que sistemas de lagunas.' },
  { ico: '🌿', nombre: 'Filtros biológicos y lechos de secado', desc: 'Filtros percoladores para remoción biológica secundaria. Lechos de secado para estabilización y deshidratación de lodos antes de disposición final.' },
  { ico: '🔄', nombre: 'Lodos activados', desc: 'Sistema convencional de alta eficiencia para caudales mediados y grandes. Requiere energía eléctrica y operación técnica cualificada.' },
  { ico: '🌱', nombre: 'Humedales artificiales (wetlands)', desc: 'Tratamiento sostenible integrado al paisaje. Flujo subsuperficial o superficial. Adecuado para efluentes secundarios o comunidades con énfasis ecológico.' },
  { ico: '📦', nombre: 'PTAR compactas prefabricadas', desc: 'Sistemas modulares para condominios y conjuntos residenciales rurales. Instalación rápida, huella reducida, operación simplificada.' },
  { ico: '🔧', nombre: 'Pretratamiento', desc: 'Cribas, desarenadores y sedimentadores primarios. Protegen las unidades biológicas y mejoran la eficiencia global del sistema.' },
]

const PRECIOS_PTAR = [
  { servicio: 'PTAR veredal 50–200 usuarios (lagunas)', rango: '$12M – $22M COP' },
  { servicio: 'PTAR municipal 200–1.000 hab', rango: '$18M – $40M COP' },
  { servicio: 'PTAR para condominio/conjunto residencial', rango: '$8M – $18M COP' },
  { servicio: 'PTAP veredal filtración lenta', rango: '$10M – $20M COP' },
  { servicio: 'PTAP municipal RAS 2017', rango: '$15M – $35M COP' },
]

const TRAMITES = [
  { ico: '📋', titulo: 'Permiso de vertimientos ante CAR', desc: 'Documentación técnica completa para CORPOCALDAS, CRQ, CORPOAMAZONIA, CVC, CAR Cundinamarca y otras corporaciones del país.' },
  { ico: '🏛️', titulo: 'Certificado de viabilidad SSPD', desc: 'Viabilidad técnica para acueductos rurales ante la Superintendencia de Servicios Públicos Domiciliarios.' },
  { ico: '💰', titulo: 'Formulación en MGA-Web SGR', desc: 'Formulación completa del proyecto de inversión en la MGA-Web del DNP para financiación con regalías (OCAD regional, OCAD paz o fondo CTel).' },
  { ico: '🔍', titulo: 'Acompañamiento en auditorías', desc: 'Respuesta a observaciones técnicas de la CAR, visitas de seguimiento y soporte durante todo el proceso hasta la expedición del permiso.' },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuántos usuarios necesitan PTAR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde 10 conexiones la CAR puede exigirlo. Comunidades rurales con vertimiento a fuente hídrica deben diseñar y construir sistema de tratamiento conforme a la Resolución 0631/2015 del MADS.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto demora el diseño de una PTAR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre 3 y 6 semanas según complejidad. Para regalías SGR, el diseño debe estar aprobado por la entidad ejecutora antes de formular el proyecto en MGA-Web.',
      },
    },
    {
      '@type': 'Question',
      name: '¿BIC trabaja en todo Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Hemos ejecutado proyectos en Caldas, Eje Cafetero, Putumayo, Antioquia y otras regiones. La mayor parte del trabajo de diseño se realiza de forma remota con visitas de campo puntuales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Pueden formular el proyecto en el MGA-Web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, acompañamos la formulación completa del proyecto de inversión en la MGA-Web del DNP para financiación con regalías, incluyendo diseños técnicos, presupuesto APU y todos los módulos requeridos.',
      },
    },
  ],
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
]

const FAQ = [
  {
    q: '¿Cuántos usuarios necesitan PTAR?',
    a: 'Desde 10 conexiones la CAR puede exigirlo. Comunidades rurales con vertimiento a fuente hídrica deben diseñar y construir sistema de tratamiento conforme a la Resolución 0631/2015 del MADS.',
  },
  {
    q: '¿Cuánto demora el diseño de una PTAR o PTAP?',
    a: 'Entre 3 y 6 semanas según complejidad. Para regalías SGR, el diseño debe estar aprobado por la entidad ejecutora antes de formular el proyecto en MGA-Web. Para proyectos urgentes, BIC puede entregar avances en 2 semanas.',
  },
  {
    q: '¿BIC trabaja en todo Colombia o solo en el Eje Cafetero?',
    a: 'Sí, trabajamos en todo el territorio nacional. Hemos ejecutado proyectos en Caldas, Eje Cafetero, Putumayo, Antioquia y otras regiones. La mayor parte del diseño se realiza de forma remota, con visitas de campo para levantamientos topográficos y caracterización de fuentes cuando es necesario.',
  },
  {
    q: '¿Pueden formular el proyecto en el MGA-Web para regalías?',
    a: 'Sí, acompañamos la formulación completa del proyecto de inversión en la MGA-Web del DNP para financiación con regalías (OCAD regional, OCAD paz o fondo CTel). Esto incluye diseños técnicos aprobados, presupuesto APU, plan de adquisiciones, indicadores y todos los módulos requeridos por el sistema.',
  },
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

export default function DisenoPTARColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-ptar-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    return () => { document.getElementById('schema-ptar-faq')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de PTAR en Colombia — Plantas de Tratamiento Aguas Residuales | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de PTAR para Industrias, Urbanizaciones y Municipios — Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-ptar-colombia"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'PTAR veredal o comunitaria (50–200 usuarios)', minPrice: 12000000, maxPrice: 22000000, priceCurrency: 'COP', description: 'Lagunas de estabilización o filtros anaerobios — bajo costo de operación, entrega en 6–8 semanas' },
          { name: 'PTAR municipal (200–1.000 hab)', minPrice: 18000000, maxPrice: 40000000, priceCurrency: 'COP', description: 'Sistema convencional con permiso de vertimientos ante la CAR, firmado COPNIA' },
          { name: 'PTAR industrial o gran proyecto (> 1.000 hab)', minPrice: 30000000, maxPrice: 80000000, priceCurrency: 'COP', description: 'Diseño específico según parámetros del agua residual industrial, estudio de impacto ambiental' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
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
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
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

      {/* ── QUÉ ES UNA PTAR ── */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco regulatorio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Qué es una PTAR y cuándo se necesita en Colombia?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 800 }}>
            Una Planta de Tratamiento de Aguas Residuales (PTAR) es requerida por la <strong>Resolución 0631/2015 del MADS</strong> para todo vertimiento a cuerpos hídricos superficiales o subterráneos. Las Corporaciones Autónomas Regionales (CAR) como CORPOCALDAS, CRQ, CORPOAMAZONIA, CVC y otras exigen diseño profesional firmado por ingeniero con matrícula vigente del COPNIA para otorgar el permiso de vertimientos.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 800 }}>
            Desde comunidades rurales de 10 conexiones hasta municipios de 20.000 habitantes, pasando por conjuntos residenciales campestres, campamentos y plantas agroindustriales — cualquier proyecto que descargue aguas residuales a un cuerpo de agua o suelo debe contar con sistema de tratamiento diseñado bajo el <strong>RAS 2017 (Resolución 0330 del MVCT)</strong> y el Decreto 1076/2015.
          </p>
        </div>
      </Section>

            {/* ── GEO FRAGMENT (AI citation target) ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> BIC — Bernal Ingeniería Consultores diseña plantas de tratamiento de aguas residuales (PTAR) para industrias, urbanizaciones y municipios en Colombia, conforme al RAS 2017 y Decreto 1594/84. Honorarios desde $12 millones COP para PTAR veredales hasta $80 millones para proyectos industriales grandes. Firma COPNIA 17202-313228 CLD. Trámite de permiso de vertimientos ante la CAR incluido. Sede Manizales — proyectos en todo Colombia. Propuesta en 24 horas sin costo: +57 302 477 8910.
          </p>
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
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TECNOLOGÍAS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tecnologías disponibles</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Tecnologías de tratamiento que diseña BIC
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {TECNOLOGIAS.map(t => (
              <div key={t.nombre} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>{t.ico}</span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 6 }}>{t.nombre}</h3>
                  <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#fff' }}>
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
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PTAP ── */}
      <Section style={{ background: '#f0f9ff', borderTop: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Agua potable rural</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            PTAP — Plantas de Tratamiento de Agua Potable
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 28, maxWidth: 820 }}>
            Diseñamos PTAP para comunidades rurales y municipios menores bajo el <strong>RAS 2017 Título C</strong>. Desde filtración lenta en arena para acueductos veredales hasta plantas convencionales para municipios de hasta 20.000 habitantes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
            {[
              { ico: '🏖️', nombre: 'Filtración lenta en arena', desc: 'Ideal para fuentes superficiales limpias y comunidades menores de 500 usuarios. Sin energía eléctrica, operación sencilla, bajo costo O&M.' },
              { ico: '💧', nombre: 'Filtración rápida + coagulación', desc: 'Para caudales mayores o fuentes con turbiedad variable. Incluye floculación, sedimentación y filtros rápidos.' },
              { ico: '☀️', nombre: 'Desinfección', desc: 'Cloración por goteo, desinfección UV y cloración automática según capacidad del acueducto y disponibilidad de energía.' },
              { ico: '🏛️', nombre: 'PTAP convencional municipal', desc: 'Para municipios hasta 20.000 hab. Diseño conforme a RAS 2017 con memorias de cálculo firmadas y expediente para SSPD.' },
            ].map(t => (
              <div key={t.nombre} style={{
                background: '#fff', border: '1px solid #b3e0ea', borderRadius: 12,
                padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>{t.ico}</span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 6 }}>{t.nombre}</h3>
                  <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión referencial</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Precios orientativos 2026
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Precios incluyen memorias de cálculo, planos constructivos, especificaciones técnicas y APU. <strong>No incluyen construcción.</strong> Cada proyecto recibe propuesta detallada en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PRECIOS_PTAR.map(p => (
              <div key={p.servicio} style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <p style={{ color: '#333', fontSize: 14, fontWeight: 500, margin: 0 }}>{p.servicio}</p>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 14px', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap',
                }}>{p.rango}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PERMISOS Y TRÁMITES ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Trámites ambientales</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Permisos y trámites que acompañamos
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {TRAMITES.map(t => (
              <div key={t.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 24, borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{t.ico}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 8 }}>{t.titulo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.75, margin: 0 }}>{t.desc}</p>
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
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios relacionados con saneamiento y agua
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño de PTAP Colombia', href: '/diseno-ptap-colombia' },
              { label: 'Concesión de aguas Colombia', href: '/concesion-aguas-colombia' },
              { label: 'Urbanizaciones Colombia', href: '/urbanizacion-colombia' },
              { label: 'Licencia de urbanismo', href: '/licencia-de-urbanismo' },
              { label: 'Ingeniería hidráulica Colombia', href: '/ingenieria-hidraulica-colombia-desde-manizales' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>
                {s.label} →
              </a>
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
              <div key={item.q} className="faq-item" style={{ background: '#f8f9fa', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

            {/* ── ANTI-INTERMEDIARIO G.3 ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', border: '2px solid #e2e8f0', borderRadius: 14, padding: '28px 32px', borderLeft: '5px solid #17A2B8' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#001A33', marginBottom: 14 }}>
              ¿Es este servicio para usted?
            </h3>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              BIC trabaja directamente con <strong>constructoras, promotores, alcaldías y empresas</strong> que tienen un proyecto concreto — no con intermediarios que re-cotizan a terceros.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              Los precios publicados en este sitio son los que BIC cobra al contratante directo. Si usted es quien decide contratar y tiene el proyecto, la propuesta llega en menos de 24 horas.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Si está averiguando precios para re-cotizar a un tercero, este servicio probablemente no es el correcto para esa gestión. BIC prioriza relaciones directas con el decisor del proyecto.
            </p>
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
    </>
  )
}
