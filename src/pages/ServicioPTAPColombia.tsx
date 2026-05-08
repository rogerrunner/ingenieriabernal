import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Diseño de Planta de Tratamiento de Agua Potable PTAP')

const seoConfig = {
  title: 'Diseño de Plantas de Tratamiento de Agua Potable Colombia y Latinoamérica | BIC',
  description: 'Diseño PTAP para municipios, zonas rurales y proyectos industriales en Colombia, Ecuador y Latinoamérica. RAS 2017, OMS. Ingenieros especializados COPNIA.',
  keywords: [
    'diseño PTAP Colombia',
    'planta tratamiento agua potable Colombia',
    'PTAP municipal Colombia RAS 2017',
    'diseño PTAP rural Colombia',
    'planta compacta agua potable',
    'diseño PTAP Ecuador',
    'PTAP MBBR Colombia',
    'tratamiento agua potable municipios',
    'ingeniería agua potable Colombia',
    'formulación PTAP SGR Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/diseno-ptap-colombia',
}

const TIPOS_PTAP = [
  {
    icon: '🏭',
    tipo: 'PTAP convencional',
    desc: 'Proceso de tratamiento de ciclo completo: coagulación, floculación, sedimentación convencional o de alta tasa, filtración rápida y desinfección con cloro. Para caudales de 10–500 l/s en municipios medianos y grandes. Conforme al RAS 2017 Título B y normas ICONTEC.',
    capacidad: '10 – 500 l/s',
  },
  {
    icon: '📦',
    tipo: 'PTAP compacta',
    desc: 'Unidades de tratamiento prefabricadas o de construcción modular para comunidades rurales y pequeños centros poblados. Proceso: coagulación-floculación en línea, filtración de doble medio y cloración. Operación simplificada para juntas administradoras de acueductos veredales.',
    capacidad: '0.5 – 15 l/s',
  },
  {
    icon: '🔬',
    tipo: 'PTAP MBBR (biológico)',
    desc: 'Moving Bed Biofilm Reactor para remoción de materia orgánica y nitrógeno en fuentes con alta carga orgánica natural. Complementa el tratamiento convencional cuando la turbiedad no es el único parámetro fuera de norma. Diseño de los medios de soporte, TRH y aireación.',
    capacidad: '5 – 200 l/s',
  },
  {
    icon: '💎',
    tipo: 'Ósmosis inversa y nanofiltración',
    desc: 'Para fuentes con alta salinidad, dureza, fluoruros o contaminantes disueltos no removibles por tratamiento convencional. Aplicación en zonas costeras, zonas mineras y proyectos industriales con requerimientos de agua purificada. Diseño de pretratamiento, membranas y post-tratamiento.',
    capacidad: '0.5 – 50 l/s',
  },
]

const PROCESO_DISENO = [
  {
    paso: '01',
    titulo: 'Caracterización de la fuente',
    desc: 'Análisis físico-químico y microbiológico del agua cruda (turbiedad, pH, DBO, DQO, coliformes, metales, minerales). Mínimo 4 muestras en épocas representativas (lluvia y verano). Identificación de parámetros críticos que determinan el tren de tratamiento requerido conforme al Decreto 1575/2007.',
  },
  {
    paso: '02',
    titulo: 'Caudales de diseño',
    desc: 'Cálculo del caudal medio diario (Qmd), caudal máximo horario (Qmh) y caudal máximo diario (QMD) conforme a la dotación per cápita y proyección de población a 25 años. El caudal de diseño de la PTAP es el QMD con factor de seguridad. RAS 2017 Artículo 2.2.2.',
  },
  {
    paso: '03',
    titulo: 'Tren de tratamiento',
    desc: 'Selección de las unidades de tratamiento según la calidad del agua cruda: bocatoma o captación, aducción, coagulación-floculación, sedimentación (convencional o de alta tasa), filtración (lenta, rápida, de múltiple medio), desinfección (cloro, UV, ozono) y disposición de lodos.',
  },
  {
    paso: '04',
    titulo: 'Diseño hidráulico de unidades',
    desc: 'Dimensionamiento de cada unidad: tiempos de retención hidráulica (TRH), tasas de flujo superficial, cargas hidráulicas sobre vertederos, velocidades en canales de interconexión. Verificación de la operación hidráulica por gravedad (sin bombeo entre unidades cuando sea posible). Perfil hidráulico de la planta.',
  },
  {
    paso: '05',
    titulo: 'Diseño de procesos',
    desc: 'Dosis óptima de coagulante (prueba de jarras), gradientes de velocidad en floculación (G·T), tasa de filtración, carrera de filtro entre lavados, dosificación de cloro residual y contacto de desinfección (Ct). Cumplimiento Resolución 2115/2007: turbiedad < 2 UNT, cloro residual 0.3–2.0 mg/L.',
  },
  {
    paso: '06',
    titulo: 'Memorias, planos y especificaciones',
    desc: 'Informe técnico de diseño con memorias de cálculo, planos arquitectónicos y estructurales de las unidades, planos hidráulicos, especificaciones técnicas de materiales y equipos, presupuesto detallado por unidad y programa de obra. Apto para licitación pública (SGR) o contratación privada.',
  },
]

const NORMATIVA = [
  { norma: 'RAS 2017 Título B', aplicacion: 'Diseño de acueductos y sistemas de potabilización. Caudales de diseño, unidades de tratamiento, criterios de funcionamiento.' },
  { norma: 'Resolución 2115/2007', aplicacion: 'Calidad del agua para consumo humano. Límites máximos de turbiedad, color, pH, coliformes, metales pesados y residual de cloro.' },
  { norma: 'Decreto 1575/2007', aplicacion: 'Sistema de control y vigilancia de la calidad del agua. Obligaciones del prestador, muestreo y frecuencias de análisis.' },
  { norma: 'NSR-10', aplicacion: 'Diseño estructural de las unidades de la PTAP: tanques, canales, edificio de operación, cerramientos.' },
  { norma: 'Guías OMS', aplicacion: 'Complemento técnico internacional para diseño de sistemas de potabilización, especialmente en proyectos con financiación de organismos multilaterales o internacionales.' },
  { norma: 'NTC/ICONTEC', aplicacion: 'Normas técnicas colombianas para materiales, equipos de dosificación, accesorios de tuberías y sistemas de medición de caudal.' },
]

const CAPACIDADES = [
  { contexto: 'Acueducto veredal rural', caudal: '0.5 – 2 l/s', usuarios: '50 – 250 viviendas', tipo: 'PTAP compacta o filtración lenta' },
  { contexto: 'Centro poblado pequeño', caudal: '2 – 10 l/s', usuarios: '250 – 1.500 viviendas', tipo: 'PTAP compacta o convencional pequeña' },
  { contexto: 'Municipio rural', caudal: '10 – 50 l/s', usuarios: '5.000 – 25.000 hab.', tipo: 'PTAP convencional o alta tasa' },
  { contexto: 'Municipio intermedio', caudal: '50 – 200 l/s', usuarios: '25.000 – 100.000 hab.', tipo: 'PTAP convencional o MBBR' },
  { contexto: 'Proyecto industrial', caudal: 'Variable', usuarios: 'Proceso productivo', tipo: 'Según calidad requerida del proceso' },
]

const FAQ = [
  {
    q: '¿Qué diferencia hay entre una PTAP convencional y una PTAP compacta?',
    a: 'Una PTAP convencional usa unidades construidas in situ (tanques de concreto, canales, filtros de arena y grava) diseñadas específicamente para el caudal y la calidad del agua cruda. Requiere mayor inversión inicial pero tiene vida útil de 25–40 años y es más fácil de operar y mantener en municipios con cierta capacidad técnica. Una PTAP compacta usa módulos prefabricados de acero o plástico reforzado que se instalan más rápido y con menor costo de construcción, pero tienen mayor costo de operación y menor vida útil. Son ideales para comunidades rurales remotas o proyectos de emergencia.',
  },
  {
    q: '¿Qué información se necesita para cotizar el diseño de una PTAP?',
    a: 'Para elaborar la propuesta técnica, BIC necesita: municipio o vereda, caudal de diseño o número de usuarios proyectados, fuente hídrica (río, quebrada, pozo), análisis de calidad del agua cruda si están disponibles (turbiedad, color, coliformes, metales), y si el proyecto es para formulación ante el SGR o para contratación directa. Con esta información, BIC prepara la propuesta técnica y económica en menos de 24 horas hábiles.',
  },
  {
    q: '¿BIC puede formular el proyecto de PTAP para el SGR (regalías)?',
    a: 'Sí. BIC tiene experiencia en formulación de proyectos de agua potable en MGA-Web para el Sistema General de Regalías. El proyecto de PTAP ante el SGR requiere: estudio de preinversión (diagnóstico, alternativas, selección y diseño), formulación en MGA-Web con análisis costo-beneficio, especificaciones técnicas y presupuesto conforme a precios del mercado regional. BIC puede ejecutar tanto el diseño como la formulación completa del proyecto para radicación ante el Órgano Colegiado de Administración y Decisión (OCAD).',
  },
  {
    q: '¿BIC realiza diseños de PTAP en Ecuador y otros países de Latinoamérica?',
    a: 'Sí. BIC ha realizado proyectos en Ecuador y tiene capacidad de operar en modalidad remota en toda Latinoamérica. Para proyectos internacionales, el diseño se adapta a la normativa local del país (normas INEN en Ecuador, normas de Bolivia, Perú u otros) complementada con las guías técnicas de la OMS y la OPS. Los desplazamientos de campo internacionales se cotizan según el alcance del proyecto.',
  },
  {
    q: '¿Cuánto cuesta el diseño de una PTAP en Colombia?',
    a: 'El costo del diseño de una PTAP depende del tipo de planta, la capacidad de tratamiento y el nivel de detalle requerido. Para una PTAP compacta rural de 1–5 l/s, el rango orientativo es $8–20 millones COP. Para PTAP convencionales municipales de 10–50 l/s con memorias completas para SGR, el rango es $25–70 millones COP. BIC elabora propuesta técnica y económica detallada sin costo en menos de 24 horas hábiles.',
  },
  {
    q: '¿Qué plazo típico tiene el diseño de una PTAP?',
    a: 'El plazo depende del tipo y escala de la planta: una PTAP compacta rural con información disponible puede diseñarse en 3–5 semanas. Una PTAP convencional municipal con caracterización del agua cruda incluida demora 6–12 semanas. Para proyectos SGR que requieren formulación en MGA-Web adicional al diseño, el plazo total es de 8–16 semanas. BIC establece el cronograma detallado en la propuesta según el alcance específico del proyecto.',
  },
]

export default function ServicioPTAPColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Diseño de Plantas de Tratamiento de Agua Potable (PTAP)',
      description: seoConfig.description,
      url: 'https://ingenieriabernal.co/servicios/diseno-ptap-colombia',
      serviceType: 'Diseño de PTAP — Agua Potable',
      provider: {
        '@type': 'ProfessionalService',
        name: 'BIC Bernal Ingeniería Consultores',
        url: 'https://ingenieriabernal.co',
        telephone: '+573024778910',
      },
      areaServed: [
        { '@type': 'Country', name: 'Colombia' },
        { '@type': 'Country', name: 'Ecuador' },
        { '@type': 'Place', name: 'América Latina' },
      ],
    }
    let el = document.getElementById('schema-service-geo')
    if (!el) {
      el = document.createElement('script')
      el.id = 'schema-service-geo'
      el.setAttribute('type', 'application/ld+json')
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)
    return () => { document.getElementById('schema-service-geo')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Plantas de Tratamiento de Agua Potable (PTAP) — Colombia y LATAM"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/diseno-ptap-colombia"
        faqItems={FAQ}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio nacional e internacional</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de Plantas de Tratamiento de Agua Potable
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC diseña plantas de tratamiento de agua potable (PTAP) para municipios,
            zonas rurales y proyectos industriales en Colombia, Ecuador y América Latina.
            PTAP convencionales, compactas, MBBR y sistemas de ósmosis inversa. Diseño
            conforme al RAS 2017, Resolución 2115/2007 y guías OMS. Formulación completa
            para proyectos de regalías SGR. Ingenieros COPNIA vigentes.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Cotizar diseño PTAP
            </Btn>
            <Btn variant="outline" href="/diseno-ptap-colombia" dark>
              Ver página PTAP Colombia →
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['RAS 2017', 'Res. 2115/2007', 'Dec. 1575/2007', 'OMS / OPS', 'SGR Colombia', 'COPNIA'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── ENLACE INTERNO ── */}
      <div style={{ background: '#EEF6FB', padding: '18px 24px', borderBottom: '1px solid #D1E9F5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#475569', margin: 0 }}>
            Página de servicio especializada en PTAP.{' '}
            <a href="/diseno-ptap-colombia" style={{ color: '#17A2B8', fontWeight: 700, textDecoration: 'none' }}>
              Ver página principal de Diseño PTAP en Colombia →
            </a>
          </p>
        </div>
      </div>

      {/* ── TIPOS DE PTAP ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Tipos de planta</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de PTAP que diseña BIC</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS_PTAP.map((item) => (
              <div key={item.tipo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 6,
                }}>{item.tipo}</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#17A2B8', fontWeight: 700, marginBottom: 10 }}>Capacidad: {item.capacidad}</p>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO DE DISEÑO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso de trabajo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Proceso de diseño de una PTAP: de la fuente a los planos
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO_DISENO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 20, padding: '20px 0', borderBottom: i < PROCESO_DISENO.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <div style={{ background: '#003B6F', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 48, fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#17A2B8', fontSize: 16 }}>
                  {m.paso}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33', fontSize: 14, margin: '0 0 6px' }}>{m.titulo}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CAPACIDADES TÍPICAS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Capacidades de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            PTAP para cada escala de proyecto: desde 1 l/s rural hasta 200 l/s municipal
          </h2>
          <ThinLine mb={40} />
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif", fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#003B6F', color: '#fff' }}>
                  {['Contexto', 'Caudal de diseño', 'Usuarios típicos', 'Tipo de PTAP recomendada'].map(h => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CAPACIDADES.map((row, i) => (
                  <tr key={row.contexto} style={{ background: i % 2 === 0 ? '#fff' : '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '12px 16px', color: '#001A33', fontWeight: 600 }}>{row.contexto}</td>
                    <td style={{ padding: '12px 16px', color: '#17A2B8', fontWeight: 700 }}>{row.caudal}</td>
                    <td style={{ padding: '12px 16px', color: '#475569' }}>{row.usuarios}</td>
                    <td style={{ padding: '12px 16px', color: '#475569' }}>{row.tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Normativa aplicable al diseño de PTAP en Colombia
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {NORMATIVA.map((n, i) => (
              <div key={n.norma} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 20, padding: '16px 0', borderBottom: i < NORMATIVA.length - 1 ? '1px solid #F1F5F9' : 'none', alignItems: 'center' }}>
                <div style={{ background: '#EEF6FB', borderRadius: 4, padding: '8px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 12, textAlign: 'center', lineHeight: 1.3 }}>{n.norma}</span>
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.aplicacion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Diferenciadores BIC</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué contratar BIC para su PTAP?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL). Tarjeta COPNIA 17202-313228 CLD activa. Diseños firmados, radicables ante municipios, SGR, CRA y Superservicios.' },
              { icon: '💧', titulo: 'Experiencia en agua potable RAS 2017', desc: 'Diseño de acueductos y PTAP conforme al RAS 2017 y Resolución 0330. Proyectos de agua potable formulados ante el SGR con experiencia verificable en municipios de Caldas, Risaralda y otros departamentos.' },
              { icon: '🌎', titulo: 'Proyectos internacionales — Ecuador y LATAM', desc: 'BIC opera en modalidad remota en toda Latinoamérica y tiene proyectos ejecutados en Ecuador. Adaptación de diseños a normativas locales (INEN Ecuador, normas OPS) con calidad técnica colombiana.' },
              { icon: '⚡', titulo: 'Propuesta en 24 horas · Trato directo', desc: 'Comunicación directa con el director técnico. Propuesta técnica y económica en menos de 24 horas hábiles sin costo. Acompañamiento completo desde el diseño hasta la formulación SGR y el recibo de obra.' },
            ].map(d => (
              <div key={d.titulo} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 14, marginBottom: 8,
                }}>{d.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Preguntas frecuentes sobre diseño de PTAP en Colombia
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQ.map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '22px 26px' }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33', fontSize: 14, margin: '0 0 10px', lineHeight: 1.4 }}>{faq.q}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section bg="#EFF6FB" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/diseno-ptap-colombia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño PTAP Colombia — página principal del servicio</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/diseno-acueductos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de acueductos y redes de distribución Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/diseno-ptar-colombia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de PTAR — plantas de tratamiento de aguas residuales</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
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
            ¿Necesita diseño de PTAP para su municipio o proyecto?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos la ubicación, el caudal de diseño (o número de usuarios) y la fuente hídrica disponible.
            Propuesta técnica y económica en menos de 24 horas hábiles, sin costo.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Cotizar diseño PTAP
          </Btn>
        </div>
      </Section>
    </>
  )
}
