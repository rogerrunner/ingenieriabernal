import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

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
    q: '¿Qué es una PTAP y cuándo se necesita en Colombia?',
    a: 'Una Planta de Tratamiento de Agua Potable (PTAP) es el conjunto de procesos físicos, químicos y biológicos que transforman el agua cruda de una fuente superficial o subterránea en agua apta para consumo humano. En Colombia se requiere para: (1) cualquier sistema de acueducto que suministre agua a más de 50 personas; (2) proyectos de urbanización o planes parciales con fuente propia; (3) ampliación o mejoramiento de sistemas existentes que no cumplen la Resolución 2115 de 2007 (IRCA elevado). El RAS 2000 define los requisitos de diseño según el nivel de complejidad del acueducto.',
  },
  {
    q: '¿Cuál es la diferencia entre PTAP y PTAR?',
    a: 'La PTAP (Planta de Tratamiento de Agua Potable) produce agua segura para consumo humano a partir de agua cruda de ríos, quebradas o pozos. La PTAR (Planta de Tratamiento de Aguas Residuales) trata el agua ya usada —doméstica o industrial— antes de devolverla a los cuerpos de agua. Son el inicio y el final del ciclo urbano del agua: la PTAP produce agua potable, la PTAR trata el agua residual. Un sistema de acueducto y saneamiento completo requiere ambas.',
  },
  {
    q: '¿Cuánto cuesta el diseño de una PTAP en Colombia?',
    a: 'El costo depende del tipo de tecnología, el caudal y la complejidad de los documentos requeridos. Rangos orientativos para 2026: PTAP rural compacta o filtros lentos (caudal < 5 L/s): $12–25 millones COP; PTAP convencional para municipio pequeño (5–30 L/s): $25–70 millones COP; PTAP de mediana complejidad con ingeniería de detalle (30–100 L/s): $60–180 millones COP. El diseño debe incluir memorias de cálculo firmadas por especialista, planos constructivos y especificaciones técnicas para cumplir con los requisitos del MVCT.',
  },
  {
    q: '¿Qué entidades aprueban el diseño de una PTAP en Colombia?',
    a: 'Dependiendo del sistema, el diseño de PTAP debe ser revisado y aprobado por: el Ministerio de Vivienda, Ciudad y Territorio (MVCT) para proyectos nacionales de regalías y agua potable rural; la Superintendencia de Servicios Públicos para empresas de acueducto prestadoras de servicios públicos; la corporación autónoma regional correspondiente cuando la planta está asociada a un permiso de concesión de aguas; y la alcaldía municipal para proyectos que requieren licencia de construcción de las instalaciones civiles.',
  },
  {
    q: '¿Cuánto tiempo tarda el diseño de una PTAP?',
    a: 'El tiempo de diseño varía según la complejidad. Para una PTAP rural con filtros lentos y análisis básico del agua: 3–6 semanas. Para PTAP convencional con caracterización completa del agua cruda y ensayos de jarras para dosificación de coagulante: 8–16 semanas. Para PTAP de mediana o alta complejidad con ingeniería de detalle y licitación: 16–28 semanas. La obtención de análisis de laboratorio del agua cruda (que puede tomar 2–4 semanas dependiendo del laboratorio) es el primer paso del proceso y determina el tren de tratamiento a diseñar.',
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
      description: 'Consultoría en ingeniería hidráulica e hidrológica en Colombia. Diseño de PTAP, PTAR, modelación hidráulica y estudios hidrológicos.',
    },
    {
      '@type': 'Service',
      name: 'Diseño de PTAP en Colombia — Plantas de Tratamiento de Agua Potable',
      provider: { '@type': 'LocalBusiness', name: 'BIC — Bernal Ingeniería Consultores' },
      areaServed: 'Colombia',
      description: 'Diseño de plantas de tratamiento de agua potable (PTAP) para acueductos rurales y urbanos en Colombia. Cumplimiento RAS 2000 y Resolución 2115/2007.',
      serviceType: 'Ingeniería Sanitaria e Hidráulica',
    },
  ],
}

export default function DisenoPTAPColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
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
