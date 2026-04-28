import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar una Interventoría Hidráulica en Manizales')

const seoConfig = {
  title: 'Interventoría Hidráulica en Manizales | BIC Ingeniería',
  description: 'Interventoría técnica de obras hidráulicas en Manizales y Caldas. Acueductos, alcantarillados, canales. RAS 2000. +57 302 477 8910',
  keywords: [
    'interventoría hidráulica Manizales',
    'interventoría obras acueducto Caldas',
    'interventoría alcantarillado Manizales',
    'control técnico obras hidráulicas Colombia',
    'RAS 2000 interventoría',
    'interventoría canales Manizales',
    'supervisión obras sanitarias Caldas',
    'interventoría técnica administrativa financiera',
    'Corpocaldas interventoría obras',
    'BIC ingeniería Manizales',
  ],
  canonical: 'https://ingenieriabernal.co/interventoria-hidraulica-manizales',
}

const TIPOS_INTERVENTORIA = [
  {
    icon: '🔧',
    titulo: 'Interventoría técnica',
    desc: 'Verificación del cumplimiento de las especificaciones técnicas, normas de diseño y calidad de materiales durante la ejecución de la obra. Incluye revisión de planos de taller, control de calidad de concretos y tubería, verificación de compactación de zanjas, ensayos de presión en redes y aprobación de actas de recibo parcial y final.',
  },
  {
    icon: '📋',
    titulo: 'Interventoría administrativa',
    desc: 'Control del cumplimiento del contrato de obra: plazos, cronograma de ejecución, reportes de avance, legalización de contratos de personal, afiliaciones a seguridad social, pólizas de garantía y correcta ejecución del presupuesto. BIC elabora los informes periódicos requeridos por la entidad contratante.',
  },
  {
    icon: '💰',
    titulo: 'Interventoría financiera',
    desc: 'Revisión y aprobación de actas de cobro, verificación de cantidades de obra ejecutadas, control de precios unitarios y análisis de precios de ítems no previstos. BIC elabora las actas de pago y verifica que los recursos se inviertan de acuerdo con el objeto contractual y el plan de inversiones aprobado.',
  },
  {
    icon: '🌿',
    titulo: 'Interventoría social y ambiental',
    desc: 'Supervisión del cumplimiento del Plan de Manejo Ambiental (PMA) durante la obra: manejo de escombros, control de ruido, protección de rondas hídricas, señalización vial y gestión de quejas de la comunidad. Exigida por Corpocaldas en obras con licencia ambiental en Caldas.',
  },
]

const OBRAS = [
  { nombre: 'Redes de acueducto', desc: 'Tuberías de conducción y distribución (PVC, HDPE, asbesto cemento, hierro dúctil), válvulas de control, hidrantes, tanques de almacenamiento, estaciones de bombeo y PTAP. BIC verifica el cumplimiento del RAS 2000 Título B y la Resolución 0330/2017.' },
  { nombre: 'Redes de alcantarillado', desc: 'Colectores sanitarios, pluviales y combinados; pozos de inspección, sumideros y conexiones domiciliarias. Control de verticalidad, pendiente y profundidad. Ensayos de infiltración y exfiltración según RAS 2000 Título D.' },
  { nombre: 'Canales y obras de encauzamiento', desc: 'Canales de conducción en tierra, concreto o roca. Muros de contención y obras de protección de márgenes. Disipadores de energía y estructuras de cruce. Verificación de secciones y pendientes contra el diseño hidráulico aprobado.' },
  { nombre: 'Plantas de tratamiento', desc: 'PTAP (plantas de agua potable) y PTAR (plantas de aguas residuales). Control de calidad de equipos hidromecánicos, instrumentación, obras civiles y pruebas de puesta en marcha. Verificación de parámetros de eficiencia contra los estándares del RAS 2000.' },
  { nombre: 'Obras de drenaje pluvial', desc: 'Alcantarillas de carretera, box culverts, cunetas, sumideros y redes pluviales urbanas. Control de geometría, armado y vaciado de concreto. Verificación de capacidad hidráulica mediante inspección visual y ensayos.' },
]

const NORMATIVA = [
  { norma: 'RAS 2000 / Resolución 0330/2017', desc: 'Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico. Define las especificaciones técnicas mínimas para el diseño, construcción y operación de los sistemas de acueducto y alcantarillado en Colombia.' },
  { norma: 'NSR-10 Título C y D', desc: 'Norma Sismo Resistente para concretos y mampostería estructural. Aplica a obras civiles de las plantas de tratamiento, tanques y estructuras de gran envergadura que hacen parte del sistema de acueducto o alcantarillado.' },
  { norma: 'Decreto 1077/2015', desc: 'Decreto Único Reglamentario del Sector Vivienda, Ciudad y Territorio. Regula los usos del agua y los sistemas de saneamiento básico, incluyendo la interventoría de las obras financiadas con recursos del SGR o del Ministerio de Vivienda.' },
  { norma: 'Ley 80/1993 y Ley 1150/2007', desc: 'Estatuto General de Contratación Pública. Establece las obligaciones de la interventoría como figura contractual en obras financiadas con recursos públicos, incluyendo la responsabilidad solidaria del interventor con el contratista.' },
  { norma: 'NTC 3459 y NTC 1500', desc: 'Normas Técnicas Colombianas para agua de amasado de concreto (NTC 3459) y el código de instalaciones hidráulicas (NTC 1500). BIC verifica el cumplimiento durante la ejecución de obras civiles e instalaciones hidrosanitarias.' },
]

const DIFERENCIA = [
  {
    concepto: 'Consultoría de diseño',
    desc: 'Elabora los estudios técnicos y los planos del proyecto. Asume responsabilidad por la calidad del diseño. BIC actúa como consultor cuando elabora el diseño hidráulico, el estudio hidrológico o los planos de redes.',
  },
  {
    concepto: 'Interventoría',
    desc: 'Supervisa que la obra se construya exactamente según el diseño y las especificaciones aprobadas. Actúa como representante de la entidad contratante durante la ejecución. BIC actúa como interventor cuando verifica la obra en campo.',
  },
  {
    concepto: 'Supervisión directa',
    desc: 'Figura alternativa a la interventoría para contratos de menor cuantía. La ejerce directamente el contratante. BIC puede actuar como apoyo técnico a la supervisión directa cuando la entidad no tiene capacidad técnica interna.',
  },
]

const FAQ = [
  {
    q: '¿Qué es la interventoría técnica de obras hidráulicas?',
    a: 'La interventoría técnica es la función de vigilancia y control ejercida durante la construcción de una obra para garantizar que se ejecute conforme a los planos, especificaciones técnicas y normas aplicables. En obras hidráulicas, el interventor verifica la calidad de los materiales (tubería, concreto, válvulas), la correcta instalación de los componentes, las pruebas de presión y hermeticidad de las redes, y el cumplimiento del RAS 2000. BIC actúa como interventor con ingenieros especializados en hidráulica y saneamiento.',
  },
  {
    q: '¿La interventoría es obligatoria para todos los contratos de obra?',
    a: 'En Colombia, la Ley 80/1993 y la Ley 1474/2011 obligan a contratar interventoría para los contratos de obra cuyo valor supere la menor cuantía de la entidad contratante. Para contratos de menor valor, la entidad puede optar por supervisión directa. En obras financiadas con recursos del SGR (regalías), la interventoría es siempre obligatoria independientemente del valor, según el artículo 27 de la Ley 1530/2012.',
  },
  {
    q: '¿Puede BIC hacer al mismo tiempo el diseño y la interventoría de la misma obra?',
    a: 'No. La misma persona natural o jurídica que elaboró el diseño de una obra no puede ejercer su interventoría, ya que existe un conflicto de interés que podría comprometer la objetividad del control técnico. BIC ofrece diseño o interventoría, pero no ambos para el mismo proyecto. Esta restricción está establecida en el artículo 32 de la Ley 80/1993.',
  },
  {
    q: '¿Qué informes entrega BIC como interventor?',
    a: 'BIC entrega informes mensuales de interventoría con: registro fotográfico de los frentes de obra, avance de cantidades ejecutadas, resultados de ensayos de control de calidad, análisis de cumplimiento del cronograma, observaciones técnicas y recomendaciones. Al final de la obra, elabora el informe final de interventoría con el acta de recibo definitivo y las memorias técnicas de lo construido.',
  },
  {
    q: '¿BIC puede hacer interventoría en municipios fuera de Manizales?',
    a: 'Sí. BIC tiene capacidad operativa para ejecutar interventorías en todo el departamento de Caldas y el Eje Cafetero (Risaralda y Quindío). Hemos supervisado obras de acueducto y alcantarillado en municipios como Villamaría, Palestina, Chinchiná, Santa Rosa de Cabal y otros del Eje Cafetero. Contamos con ingenieros residentes disponibles para desplazamiento a municipios de la región.',
  },
]

export default function InterventoriaHidraulicaManizales() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado · Manizales</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Interventoría Hidráulica en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Control Técnico de Obras de Acueducto y Alcantarillado</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores ejerce la interventoría técnica, administrativa y
            financiera de obras hidráulicas en Manizales y Caldas. Supervisamos la construcción
            de acueductos, alcantarillados, canales de encauzamiento y plantas de tratamiento
            garantizando el cumplimiento del RAS 2000, la Resolución 0330/2017 y los estándares
            de calidad exigidos por el Ministerio de Vivienda y Corpocaldas.
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Marco normativo:</span>
          {['RAS 2000', 'Resolución 0330/2017', 'Ley 80/1993', 'NSR-10', 'Corpocaldas'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── TIPOS DE INTERVENTORÍA ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Tipos de interventoría</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Interventoría técnica, administrativa y financiera</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS_INTERVENTORIA.map((item) => (
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

      {/* ── OBRAS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Obras que supervisamos</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Obras hidráulicas que BIC puede intervenir</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {OBRAS.map((o) => (
              <div key={o.nombre} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{o.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Regulación vigente</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Marco normativo: RAS 2000 y contratación pública</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {NORMATIVA.map((n) => (
              <div key={n.norma} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 24,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 13, marginBottom: 8,
                }}>{n.norma}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.6,
                }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── DIFERENCIA CONSULTORÍA VS INTERVENTORÍA ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Diferencias clave</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Diferencia entre consultoría e interventoría</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {DIFERENCIA.map((d) => (
              <div key={d.concepto} style={{
                padding: 24, background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, borderTop: '3px solid #17A2B8',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.concepto}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Interventoría hidráulica en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: '24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10,
                }}>{item.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7,
                  margin: 0,
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
            ¿Necesita interventoría para una obra hidráulica en Manizales?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de obra, el contrato a supervisar y la entidad contratante.
            Le enviamos propuesta técnica y económica en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp · +57 302 477 8910
          </Btn>
        </div>
      </Section>
    </>
  )
}
