import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar el diseño de una PTAP en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño de PTAP en Colombia — Plantas de Tratamiento Agua Potable | BIC',
  description: 'BIC diseña plantas de tratamiento de agua potable (PTAP) para municipios y acueductos en Colombia conforme al RAS 2017 y Resolución 0330. Memoria COPNIA, trámite CAR. Cotice en 24 horas.',
  keywords: [
    'diseño PTAP Colombia',
    'planta tratamiento agua potable Colombia',
    'PTAP municipal Colombia',
    'diseño PTAP RAS 2017',
    'planta potabilizadora Colombia',
    'PTAP acueducto rural Colombia',
    'diseño PTAP Manizales',
    'diseño PTAP Eje Cafetero',
    'sistema abastecimiento agua potable Colombia',
    'consultor PTAP Colombia',
    'ingeniería sanitaria agua potable',
    'potabilización agua Colombia norma',
const WA = '573162888989'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Diseño de PTAP en Colombia')

const seoConfig = {
  title: 'Diseño de PTAP en Colombia | Plantas de Tratamiento Agua Potable',
  description: 'Diseño de plantas de tratamiento de agua potable (PTAP) en Colombia. Ingeniería especializada para sistemas de acueducto rural y urbano conforme al RAS.',
  keywords: [
    'diseño ptap colombia',
    'planta tratamiento agua potable colombia',
    'ptap rural colombia',
    'ptap acueducto colombia',
    'diseño ptap eje cafetero',
    'planta potabilizacion agua colombia',
    'ptap ras 2000 colombia',
    'diseño acueducto ptap colombia',
    'ingenieria ptap colombia',
    'consultoría plantas agua potable colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-ptap-colombia',
}

const COMPONENTES = [
  {
    icon: '🌊',
    nombre: 'Captación y conducción',
    desc: 'Diseño de la bocatoma o pozo de captación, línea de aducción hasta la planta y canal o tubería de llegada. El diseño incluye la cámara de recolección, la derivación de caudal de diseño y el rebose de seguridad.',
  },
  {
    icon: '🔵',
    nombre: 'Pretratamiento',
    desc: 'Desarenador para remoción de sólidos gruesos, tamiz o rejilla de gruesos y, para aguas con alta turbiedad, presedimentador. El diseño incluye cámara de distribución, tolva de lodos y sistema de lavado.',
  },
  {
    icon: '💧',
    nombre: 'Coagulación-floculación',
    desc: 'Canal de mezcla rápida para dosificación de coagulante (sulfato de aluminio o policloruro de aluminio), floculadores de flujo horizontal o vertical con gradientes de velocidad calculados para favorecer la formación de flóculos.',
  },
  {
    icon: '🏗️',
    nombre: 'Sedimentación o flotación',
    desc: 'Sedimentador convencional de flujo horizontal o módulos de láminas inclinadas (Lamella) para mayor eficiencia en espacios reducidos. Para aguas con baja turbiedad: flotación por aire disuelto (DAF).',
  },
  {
    icon: '🔬',
    nombre: 'Filtración',
    desc: 'Filtros rápidos de arena y antracita con diseño de tasa de filtración, carga hidráulica, lecho filtrante y sistema de retrolavado. Para plantas pequeñas: filtros lentos de arena o filtros de flujo ascendente.',
  },
  {
    icon: '⚗️',
    nombre: 'Desinfección y almacenamiento',
    desc: 'Sistema de cloración (gas cloro, hipoclorito de sodio o dióxido de cloro), cámara de contacto con tiempo mínimo CT para inactivación de Giardia, y tanque de almacenamiento regulador con volumen calculado para compensar variaciones horarias de consumo.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico de la fuente y análisis de calidad del agua',
    desc: 'Aforo de caudales de la fuente, toma de muestras de agua cruda en laboratorio acreditado (parámetros fisicoquímicos y microbiológicos según Decreto 1575/2007) y evaluación de variabilidad de turbiedad, color y carga bacteriológica a lo largo del año.',
    herramientas: ['Aforo de caudales en campo', 'Laboratorio acreditado (Decreto 1575)', 'IDEAM (datos hidrometeorológicos)', 'Muestreo representativo (NTC 813)'],
    resultado: 'Caracterización del agua cruda + viabilidad de potabilización',
  },
  {
    paso: '02',
    titulo: 'Caudal de diseño y proyección de demanda',
    desc: 'Estimación de la población actual y proyección a 25 años según metodologías del RAS 2017 (aritmético, geométrico, exponencial). Cálculo de dotaciones por nivel de complejidad, caudal medio diario, caudal máximo diario y caudal máximo horario de diseño.',
    herramientas: ['RAS 2017 (proyección poblacional)', 'DANE (datos censo)', 'Curvas de variación horaria', 'Factores k1 y k2 según norma'],
    resultado: 'Caudales de diseño por horizonte de planificación',
  },
  {
    paso: '03',
    titulo: 'Diseño de la planta y selección tecnológica',
    desc: 'Análisis de alternativas tecnológicas, diseño hidráulico de cada unidad (dimensiones, tiempos de retención, cargas superficiales), ensayo de jarras para definir dosis de coagulante y verificación de los parámetros del efluente frente al Decreto 1575 y la Resolución 2115.',
    herramientas: ['Ensayo de jarras (laboratorio)', 'RAS 2017 (criterios de diseño)', 'Resolución 2115/2007 (calidad agua potable)', 'AutoCAD Civil 3D (planos)'],
    resultado: 'Memoria de cálculo + planos constructivos de cada unidad',
  },
  {
    paso: '04',
    titulo: 'Expediente técnico y trámites ante CAR y MinVivienda',
    desc: 'BIC elabora la memoria descriptiva completa con firmante COPNIA, planos constructivos, especificaciones técnicas, presupuesto con APU y cronograma de ejecución. Si se requiere financiación con regalías, preparamos el proyecto completo en MGA-Web del DNP.',
    herramientas: ['Firma COPNIA vigente', 'MGA-Web DNP (regalías)', 'AutoCAD (planos)', 'Presupuesto APU detallado'],
    resultado: 'Expediente completo para licitar, financiar o tramitar permisos',
  },
]

const NORMATIVA = [
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'Reglamento Técnico del Sector — criterios de diseño para sistemas de tratamiento de agua potable' },
  { codigo: 'Decreto 1575/2007', descripcion: 'MinProtección Social — sistema para la protección y control de la calidad del agua para consumo humano' },
  { codigo: 'Resolución 2115/2007', descripcion: 'MinProtección / MAVDT — características, instrumentos y frecuencias del sistema de control de calidad del agua' },
  { codigo: 'NSR-10', descripcion: 'Diseño estructural de tanques, sedimentadores y estructuras de concreto de la PTAP' },
  { codigo: 'Resolución 0330/2017', descripcion: 'MinVivienda — RAS actualizado con requisitos técnicos para nivel de complejidad bajo, medio y alto' },
const SERVICIOS_PTAP = [
  {
    icon: '🚰',
    titulo: 'PTAP convencional — coagulación, floculación y filtración',
    desc: 'Diseño de plantas de potabilización de tipo convencional para acueductos urbanos y rurales de mediana y alta complejidad. Unidades de mezcla rápida (vertedero, resalto hidráulico), floculación hidráulica y mecánica, sedimentación lamelar o convencional, filtración rápida en arena y carbón activado, y desinfección con cloro. Cumplimiento del RAS 2000 y la Resolución 0330 de 2017 del Ministerio de Vivienda.',
  },
  {
    icon: '🏘️',
    titulo: 'PTAP compacta — sistemas rurales y comunitarios',
    desc: 'Para acueductos veredales y comunidades rurales aisladas, BIC diseña sistemas de potabilización compactos y de fácil operación: filtros lentos de arena, filtros gruesos dinámicos y en grava, plants prefabricadas dimensionadas para caudales de 1 a 30 L/s. Tecnologías apropiadas que permiten agua segura con mínima dependencia de insumos químicos y sin personal técnico calificado permanente.',
  },
  {
    icon: '⚗️',
    titulo: 'Remoción de contaminantes específicos — hierro, manganeso, arsénico',
    desc: 'Diseño de etapas de tratamiento para fuentes con características fisicoquímicas especiales: oxidación y filtración para hierro y manganeso, suavización por intercambio iónico para aguas duras, adsorción en alúmina activada para flúor y arsénico, y sistemas de desalinización por ósmosis inversa para fuentes con alta conductividad. Análisis de la calidad de la fuente y selección del tren de tratamiento más eficiente.',
  },
  {
    icon: '📊',
    titulo: 'Memorias de cálculo y documentación técnica',
    desc: 'Elaboración de memorias de cálculo hidráulico detalladas para cada unidad de la PTAP: dimensionamiento, tiempo de retención hidráulica (TRH), gradientes de velocidad, dosis de coagulante, tasas de filtración y perfil hidráulico de la planta. Planos en AutoCAD con planta de conjunto, detalles constructivos y perfiles hidráulicos. Documentación para radicación ante MVCT, CAR y operadores de acueducto.',
  },
]

const NORMATIVA = [
  {
    norma: 'RAS 2000 — Resolución 0330 de 2017 (Título C)',
    desc: 'El Reglamento Técnico del Sector de Agua Potable, Título C, establece todos los criterios de diseño para plantas de potabilización de agua en Colombia: parámetros de calidad del agua cruda y tratada, período de diseño, caudales de diseño, tasas unitarias para cada unidad de tratamiento, materiales de construcción y requisitos de los diseños para aprobación por parte del ente de control.',
  },
  {
    norma: 'Resolución 2115 de 2007 — calidad del agua para consumo humano',
    desc: 'Define los valores máximos permisibles de parámetros microbiológicos, fisicoquímicos y organolépticos del agua potable en Colombia. La PTAP debe diseñarse para producir agua que cumpla estos estándares. BIC verifica el cumplimiento de la Resolución 2115 para cada parámetro crítico de la fuente en el diseño del tren de tratamiento.',
  },
  {
    norma: 'Decreto 1575 de 2007 — Sistema para la Protección del Agua',
    desc: 'Establece el sistema para la protección y control de la calidad del agua para consumo humano, incluyendo el Índice de Riesgo de Calidad del Agua (IRCA). La PTAP debe garantizar que el agua suministrada alcance la categoría Sin Riesgo (IRCA < 5%). BIC diseña con base en el peor escenario de calidad del agua cruda para garantizar el cumplimiento en temporada de lluvias.',
  },
  {
    norma: 'NSR-10 — estructuras de la planta',
    desc: 'Los tanques y estructuras civiles de la PTAP (floculadores, sedimentadores, filtros, tanques de almacenamiento) deben cumplir los criterios sísmicos de la NSR-10 según la zona de amenaza sísmica del municipio. En el Eje Cafetero, zona de amenaza sísmica alta, esto implica diseño sismorresistente de muros y losas con verificación estructural detallada.',
  },
]

const TECNOLOGIAS = [
  { nombre: 'Filtros Lentos de Arena', uso: 'Tecnología de bajo costo y operación simplificada para comunidades rurales. Ideal para aguas de turbiedad moderada. No requiere coagulantes químicos. BIC los dimensiona según los parámetros del RAS para acueductos de complejidad baja.' },
  { nombre: 'Filtros Gruesos Dinámicos', uso: 'Pretratamiento en grava para aguas de alta turbiedad antes del filtro lento. Adecuado para fuentes con picos de turbiedad durante lluvias intensas. Aumenta la vida útil del filtro lento y reduce la frecuencia de limpieza.' },
  { nombre: 'Coagulación-Floculación-Sedimentación', uso: 'Tren de tratamiento convencional para aguas superficiales de complejidad media y alta. Dosis de sulfato de aluminio o policloruro de aluminio, floculación hidráulica y sedimentación convencional o lamelar.' },
  { nombre: 'Desinfección con Cloro', uso: 'Sistema de cloración para eliminación de microorganismos patógenos. Diseño del sistema de dosificación, cálculo de la dosis y verificación del tiempo de contacto mínimo para garantizar la inactivación de Giardia y Criptosporidium según la Resolución 2115.' },
]

const PROYECTOS = [
  { tipo: 'Acueductos rurales — regalías y SGR', desc: 'Diseño de PTAP para proyectos financiados por el Sistema General de Regalías y el Ministerio de Vivienda. Documentación técnica compatible con los requisitos MGA-Web del DNP para formulación de proyectos de agua potable en zonas rurales.' },
  { tipo: 'Municipios pequeños — complejidad baja y media', desc: 'Diseño y ampliación de plantas de tratamiento municipales con caudales de diseño de 10 a 100 L/s. Memorias de cálculo, planos y especificaciones técnicas para licitación y aprobación ante el MVCT.' },
  { tipo: 'Acueductos veredales y comunitarios', desc: 'PTAP de baja complejidad para sistemas de abastecimiento de comunidades de 50 a 1.000 habitantes. Filtros lentos, prefabricados o compactos que garantizan calidad sin personal técnico permanente.' },
  { tipo: 'Urbanizaciones y planes parciales — fuente propia', desc: 'Plantas de tratamiento para proyectos urbanísticos que captan agua de fuentes propias (aljibes, manantiales, quebradas) y requieren sistema de potabilización antes de la distribución domiciliaria.' },
  { tipo: 'Resguardos indígenas y comunidades étnicas', desc: 'Diseño de PTAP en el marco de proyectos de cooperación y consulta previa. Tecnologías apropiadas, transferencia de conocimiento y diseños que respetan las dinámicas culturales y organizativas de cada comunidad.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Caracterización del agua cruda', desc: 'Análisis fisicoquímico y microbiológico de la fuente en diferentes épocas del año. Determinación de turbiedad, color, pH, hierro, manganeso, coliformes y parámetros especiales según la fuente.' },
  { paso: '02', titulo: 'Selección del tren de tratamiento', desc: 'Comparación de alternativas tecnológicas según la calidad del agua cruda, el caudal de diseño, la complejidad del sistema y las capacidades del operador. Análisis de costos de construcción y operación.' },
  { paso: '03', titulo: 'Diseño hidráulico y sanitario', desc: 'Dimensionamiento de cada unidad: cálculos de carga hidráulica, tiempos de retención, dosis de químicos, perfiles hidráulicos y diseño de la línea de lodos. Verificación del cumplimiento del RAS.' },
  { paso: '04', titulo: 'Entregables y documentación', desc: 'Memorias de cálculo, planos de conjunto y detalles constructivos, especificaciones técnicas, manual de operación y mantenimiento, presupuesto detallado y documentación para radicación ante el MVCT.' },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de una PTAP en Colombia?',
    a: 'El costo depende del caudal de diseño, el nivel de complejidad del sistema (bajo, medio, medio-alto o alto según RAS) y si existe información de calidad del agua disponible. Para una PTAP de nivel bajo (menos de 2 L/s para comunidades rurales), el diseño puede estar entre $12 y $25 millones COP. Para sistemas de nivel medio o alto (5 a 50 L/s para cabeceras municipales) el rango oscila entre $25 y $60 millones. BIC envía propuesta técnica y económica en menos de 24 horas.',
  },
  {
    q: '¿Qué tecnología de tratamiento es adecuada para agua de río en el Eje Cafetero?',
    a: 'Las fuentes de agua en el Eje Cafetero tienen alta variabilidad de turbiedad (especialmente en temporada de lluvias), color y carga de materia orgánica. El proceso convencional de coagulación-floculación-sedimentación-filtración-cloración es el más indicado para estas características. Para caudales menores a 1 L/s en zonas rurales, los filtros lentos de arena pueden ser una alternativa económica si la turbiedad es baja. BIC define la tecnología con base en el ensayo de jarras y la caracterización del agua cruda.',
  },
  {
    q: '¿Es posible financiar una PTAP con recursos de regalías (SGR)?',
    a: 'Sí, es uno de los proyectos más financiados con regalías en Colombia. El SGR, el SGP y el Ministerio de Vivienda tienen líneas específicas para agua potable en municipios con IRCA alto (Índice de Riesgo de Calidad del Agua) o sin sistema de tratamiento. BIC puede elaborar el proyecto completo en MGA-Web del DNP con los diseños, presupuesto y análisis de alternativas que exige el OCAD para su aprobación.',
  },
  {
    q: '¿BIC diseña PTAP para acueductos rurales con fondos comunitarios?',
    a: 'Sí. BIC diseña plantas de tratamiento para acueductos comunitarios rurales de todas las escalas — desde sistemas compactos para 50 viviendas hasta plantas para centros poblados de 2.000 habitantes. El diseño se adapta al nivel de complejidad establecido por el RAS 2017 y a la capacidad operativa de la asociación de acueducto. Para proyectos con recursos limitados, BIC puede proponer soluciones de bajo costo y fácil operación.',
  },
  {
    q: '¿Qué hace diferente a BIC en el diseño de PTAP?',
    a: 'BIC integra en un mismo equipo el diseño hidráulico de la planta, la modelación de la fuente (hidrología, aforos), los trámites ambientales ante la CAR y, si es necesario, la formulación del proyecto para financiación con regalías. Esto reduce el número de consultores que el cliente necesita contratar y garantiza coherencia técnica entre todos los componentes del proyecto. Todos los diseños son firmados por profesional COPNIA vigente con experiencia verificable.',
  },
]

const ARTICULOS = [
  { href: '/blog/estudio-hidrologico-colombia', title: 'Estudio Hidrológico en Colombia: Requisitos y Proceso' },
  { href: '/blog/diseno-canales-colombia', title: 'Diseño de Canales en Colombia' },
  { href: '/blog/bocatoma-caudal-riego-colombia', title: 'Bocatoma y Caudal para Riego en Colombia' },
]

export default function DisenoPTAPColombia() {
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
            Diseño de PTAP en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Plantas de tratamiento de agua potable para municipios y acueductos — RAS 2017 y Decreto 1575
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña plantas de potabilización en Colombia desde la
            caracterización del agua cruda hasta la memoria de cálculo firmada COPNIA y el expediente
            técnico para financiación con regalías SGR o recursos del Ministerio de Vivienda.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de PTAP</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['RAS 2017','Decreto 1575','Res. 2115','COPNIA vigente','Regalías SGR','Acueducto rural'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPONENTES ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Componentes de la PTAP</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué unidades incluye el diseño de una PTAP?
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
            {COMPONENTES.map(c => (
              <div key={c.nombre} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: 24, borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 8 }}>{c.nombre}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado · Nacional · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de PTAP en Colombia:<br />
            <span style={{ color: '#17A2B8' }}>Plantas de Tratamiento de Agua Potable — RAS 2000</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña plantas de tratamiento de agua potable (PTAP)
            para acueductos rurales y urbanos en toda Colombia. Cumplimiento del RAS 2000
            (Resolución 0330 de 2017) y la Resolución 2115 de 2007. Memorias de cálculo, planos
            constructivos y documentación para radicación ante el MVCT y corporaciones ambientales.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización
            </Btn>
            <Btn variant="outline" href="/servicios/acueducto-alcantarillado" dark>
              Ver servicio de acueducto
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['RAS 2000', 'Res. 0330/2017', 'Res. 2115/2007', 'IRCA', 'MVCT', 'NSR-10', 'SGR'].map(t => (
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
          }}>¿Qué incluye el diseño de una PTAP?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS_PTAP.map((item) => (
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
          }}>Normativa: RAS 2000, Resolución 2115 y Decreto 1575</h2>
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
            Cómo diseña BIC una PTAP en Colombia
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
          <SectionLabel light>Tecnologías de potabilización</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Sistemas de tratamiento: filtros lentos, convencional y desinfección</h2>
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
            Normativa para diseño de PTAP en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'center',
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
          }}>Tipos de proyectos PTAP en Colombia</h2>
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
          }}>4 fases del diseño de una PTAP en Colombia</h2>
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
            Todo sobre diseño de PTAP en Colombia
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
          }}>FAQ — Diseño de PTAP en Colombia</h2>
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
            ¿Necesita el diseño de una PTAP<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el caudal, la fuente de agua y la región.
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
            ¿Necesita diseñar una PTAP en Colombia?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de fuente (río, quebrada, manantial), el caudal estimado
            y los análisis de agua disponibles. Si tiene análisis de laboratorio del agua
            cruda, mejor aún. Le enviamos propuesta técnica en menos de 24 horas.
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
