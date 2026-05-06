import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, soy de una alcaldía/entidad pública y necesito consultoría en ingeniería hidráulica para un proyecto. ¿Me dan información?'
)

const seoConfig = {
  title: 'Consultoría Hidráulica para Municipios y SGR 2026 — Desde $8M | BIC Colombia',
  description:
    'Consultoría en ingeniería hidráulica para alcaldías, gobernaciones y entidades SGR en Colombia desde $8M COP: diseño de acueductos, PTAP, formulación MGA-Web, riesgo hídrico y defensas fluviales. COPNIA vigente. Contrato verificable Alcaldía Puerto Boyacá.',
  keywords: [
    'consultoría hidráulica municipios Colombia',
    'ingeniería hidráulica alcaldías SGR',
    'diseño acueductos municipios Colombia 2026',
    'formulación proyectos SGR agua potable',
    'estudios hidráulicos municipios Caldas',
    'consultoría técnica gobiernos locales Colombia',
    'proyectos regalías agua saneamiento',
    'MGA-Web alcaldías Colombia',
    'planeación hídrica municipios',
    'obras hidráulicas contratos públicos Colombia',
    'ingeniería civil contratación estatal',
    'SECOP proyectos hidráulicos',
  ],
  canonical: 'https://ingenieriabernal.co/consultoria-municipios-sgr',
}

const SERVICIOS_MUN = [
  {
    icon: '🏗️',
    titulo: 'Diseño de acueductos y alcantarillados',
    rango: 'Desde $15M COP',
    desc: 'Diseño detallado de sistemas de abastecimiento de agua potable y redes de alcantarillado sanitario y pluvial para cabeceras y zonas rurales. Planos hidráulicos, memorias de cálculo, especificaciones y presupuesto de obra según Reglamento Técnico RAS 2017.',
  },
  {
    icon: '💧',
    titulo: 'Formulación de proyectos MGA-Web (SGR)',
    rango: 'Desde $8M COP',
    desc: 'Formulación integral de proyectos de inversión pública en la plataforma MGA-Web del DNP para el Sistema General de Regalías: acueductos, alcantarillados, PTAP, PTAR, gestión del riesgo hídrico. BPIN, ficha EBI y acompañamiento ante el OCAD hasta aprobación.',
  },
  {
    icon: '🌊',
    titulo: 'Estudios de amenaza y riesgo hídrico',
    rango: 'Desde $12M COP',
    desc: 'Modelación hidráulica de ríos y quebradas (HEC-RAS 1D/2D), delimitación de zonas inundables, análisis de avenidas torrenciales y mapas de riesgo para incorporación en POT y planes de gestión del riesgo municipal conforme al Decreto 1807/2014.',
  },
  {
    icon: '🔬',
    titulo: 'Diseño de PTAP y PTAR municipales',
    rango: 'Desde $18M COP',
    desc: 'Diseño de plantas de tratamiento de agua potable (coagulación, filtración, desinfección) y plantas de tratamiento de aguas residuales para municipios con cargas de hasta 30.000 hab. Estudios de caudal, selección de procesos unitarios y diseño constructivo RAS 2017.',
  },
  {
    icon: '🛡️',
    titulo: 'Obras de protección fluvial y encauzamiento',
    rango: 'Desde $20M COP',
    desc: 'Diseño de jarillones, espolones, muros de encauzamiento y trinchos para protección de cabeceras municipales, vías y zonas productivas. Modelación HEC-RAS para verificación hidráulica y coordinación con INVIAS/CAR para tramitación de permisos.',
  },
  {
    icon: '📋',
    titulo: 'Interventoría de obras hidráulicas públicas',
    rango: 'Desde $15M COP',
    desc: 'Interventoría técnica, administrativa y financiera de contratos de obras civiles hidráulicas celebrados por entidades públicas. Control de calidad, informes SSIFP para Gesproy-SGR, liquidación técnica y acompañamiento ante entes de control.',
  },
]

const CLIENTES = [
  {
    tipo: 'Alcaldías municipales',
    desc: 'Municipios con recursos propios o regalías directas que requieren estudios técnicos para licencias de construcción, planes de ordenamiento territorial, proyectos de inversión o contratos de obra hídrica.',
    color: '#17A2B8',
  },
  {
    tipo: 'Gobernaciones y planes departamentales de agua',
    desc: 'Entidades departamentales con proyectos de sistemas regionales de acueducto y saneamiento, planes maestros de acueducto rural o gestión integral de cuencas hidrográficas.',
    color: '#0D6EFD',
  },
  {
    tipo: 'Secretarías de planeación e infraestructura',
    desc: 'Dependencias técnicas municipales y departamentales que necesitan soporte externo especializado para viabilizar proyectos ante el Ministerio de Vivienda, DNP, CAR o INVIAS.',
    color: '#198754',
  },
  {
    tipo: 'Gestores SGR y OCAD',
    desc: 'Profesionales contratados por entidades públicas para gestionar proyectos de regalías que requieren soporte técnico en los componentes de agua, saneamiento y riesgo hídrico.',
    color: '#FFC107',
  },
]

const DIFERENCIADORES = [
  { icon: '✅', titulo: 'Contrato verificable en SECOP', desc: 'Contrato No. 621/2021 con la Alcaldía Municipal de Puerto Boyacá (Boyacá). Búsqueda pública en el SECOP I. La trayectoria más valiosa en contratación pública.' },
  { icon: '🎓', titulo: 'COPNIA vigente y UNAL', desc: 'Matrícula profesional COPNIA 17202-313228. Ingenieros egresados de la Universidad Nacional de Colombia — la mayor garantía técnica ante veedurías y entes de control.' },
  { icon: '⚡', titulo: 'Entrega en 15 días hábiles', desc: 'Estudios técnicos y formulaciones MGA-Web con plazos definidos contractualmente. Cumplimiento crítico para proyectos con ventanas de presentación ante OCAD.' },
  { icon: '🗺️', titulo: 'Cobertura nacional desde Manizales', desc: 'Proyectos ejecutados en Boyacá, Caldas, Risaralda, Quindío, Tolima y Antioquia. Trabajo remoto más visita técnica al municipio cuando el proyecto lo requiere.' },
  { icon: '💬', titulo: 'Comunicación directa con el ingeniero', desc: 'Sin intermediarios. El ingeniero a cargo del proyecto es quien responde, reporta y asiste a las reuniones técnicas. Trazabilidad completa de cada entregable.' },
  { icon: '📄', titulo: 'Entregables lista para contratación', desc: 'Documentos técnicos, presupuestos y memorias formateados para SECOP, Gesproy-SGR y los sistemas de información del Ministerio de Vivienda y DNP.' },
]

const FAQ_MUN = [
  {
    q: '¿Cómo puede un municipio contratar los servicios de BIC?',
    a: 'Los municipios pueden contratar a BIC a través de contratación directa (Ley 80) cuando el valor sea inferior a la mínima cuantía, o mediante proceso de selección abreviada o licitación pública según el monto. BIC cuenta con RUT, registro en SECOP y experiencia certificada en contratos públicos. El proceso inicia con una propuesta técnica y económica que preparamos en 48 horas.',
  },
  {
    q: '¿Cuánto tiempo demora la formulación de un proyecto SGR en MGA-Web?',
    a: 'La formulación completa de un proyecto de agua potable o saneamiento en MGA-Web toma entre 20 y 40 días hábiles, dependiendo de la complejidad y la disponibilidad de información del municipio. BIC coordina directamente con la secretaría de planeación para recopilar la información de base y minimizar los tiempos de respuesta del cliente.',
  },
  {
    q: '¿BIC puede elaborar los estudios técnicos de soporte para un proyecto SGR ya formulado?',
    a: 'Sí. Frecuentemente los proyectos son devueltos por el DNP o el OCAD por insuficiencia de estudios técnicos (sin diseño hidráulico detallado, sin modelo HEC-RAS, sin estudio de amenaza). BIC elabora esos estudios complementarios y prepara los ajustes a la ficha EBI para volver a radicar. Esta es una de las solicitudes más frecuentes de alcaldías con proyectos devueltos.',
  },
  {
    q: '¿Cuál es el costo de un diseño de acueducto rural para un municipio pequeño?',
    a: 'Para un acueducto rural que abastece entre 100 y 500 usuarios, el diseño técnico (planos, memorias, presupuesto) tiene un costo típico entre $15M y $30M COP. Para sistemas más grandes (cabecera municipal, optimización de planta existente) el rango es $30M–$60M. BIC entrega propuesta detallada con alcance y plazo en 48 horas previa consulta.',
  },
]

const CASO = {
  entidad: 'Alcaldía Municipal de Puerto Boyacá',
  contrato: 'No. 621 de 2021 — Verificable en SECOP I',
  alcance: 'Formulación de proyecto de agua potable y saneamiento básico en MGA-Web para postulación al OCAD Departamental de Boyacá.',
  resultado: 'Proyecto aprobado y registrado en Gesproy-SGR. Inversión gestionada: $2.800 millones COP en mejoramiento del sistema de acueducto rural.',
}

export default function ConsultoriaMunicipiosSGR() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Consultoría Hidráulica para Municipios y SGR — BIC"
        serviceDesc="Consultoría técnica en ingeniería hidráulica para alcaldías, gobernaciones y entidades SGR en Colombia: diseño de acueductos, formulación MGA-Web, riesgo hídrico, PTAP y obras de protección fluvial."
        serviceUrl="https://ingenieriabernal.co/consultoria-municipios-sgr"
        faqItems={FAQ_MUN}
        priceSpecification={[
          { name: 'Formulación proyectos MGA-Web SGR', minPrice: 8000000, maxPrice: 28000000, priceCurrency: 'COP' },
          { name: 'Diseño acueductos y alcantarillados municipales', minPrice: 15000000, maxPrice: 60000000, priceCurrency: 'COP' },
          { name: 'Estudios amenaza y riesgo hídrico', minPrice: 12000000, maxPrice: 35000000, priceCurrency: 'COP' },
          { name: 'Interventoría obras hidráulicas públicas', minPrice: 15000000, maxPrice: 50000000, priceCurrency: 'COP' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Para alcaldías y entidades públicas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Consultoría en Ingeniería Hidráulica<br />
            <span style={{ color: '#17A2B8' }}>para Municipios, SGR y Entidades Públicas</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores es la firma consultora especializada en proyectos
            hidráulicos para el sector público colombiano. Diseñamos acueductos, formulamos proyectos
            SGR en MGA-Web, modelamos riesgos de inundación y acompañamos a alcaldías y gobernaciones
            desde el estudio técnico hasta la aprobación OCAD. COPNIA vigente. Contrato verificable en SECOP.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} primary>
              Solicitar propuesta técnica
            </Btn>
            <Btn href="mailto:rogeriobernal@ingenieriabernal.co">
              rogeriobernal@ingenieriabernal.co
            </Btn>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            {['COPNIA 17202-313228', 'UNAL Egresados', 'SECOP verificable', 'Cobertura nacional'].map(t => (
              <Tag key={t} light>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      <ThinLine />

      {/* ── CASO DE ÉXITO ── */}
      <Section bg="#f0f8ff">
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Referencia verificable</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px,4vw,32px)', marginBottom: 24 }}>
            Caso de Éxito — Sector Público
          </h2>
          <div style={{
            background: '#fff', borderRadius: 12, padding: '32px 36px',
            borderLeft: '5px solid #17A2B8',
            boxShadow: '0 4px 24px rgba(0,26,51,0.08)',
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 20 }}>
              <div>
                <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 12, color: '#17A2B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Entidad contratante</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#001A33', fontSize: 18 }}>{CASO.entidad}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 12, color: '#17A2B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Contrato</div>
                <div style={{ fontFamily: "'Lato',sans-serif", color: '#333', fontSize: 15, fontWeight: 600 }}>{CASO.contrato}</div>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 12, color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Alcance</div>
              <p style={{ fontFamily: "'Lato',sans-serif", color: '#333', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{CASO.alcance}</p>
            </div>
            <div style={{
              background: 'linear-gradient(90deg,#e8f8fb,#f0fbff)', borderRadius: 8, padding: '16px 20px',
            }}>
              <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 12, color: '#17A2B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Resultado</div>
              <p style={{ fontFamily: "'Lato',sans-serif", color: '#001A33', fontSize: 15, lineHeight: 1.65, fontWeight: 600, margin: 0 }}>{CASO.resultado}</p>
            </div>
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── SERVICIOS ── */}
      <Section>
        <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Portafolio de servicios</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px,4vw,32px)', marginBottom: 8 }}>
            Servicios para el Sector Público
          </h2>
          <p style={{ fontFamily: "'Lato',sans-serif", color: '#555', fontSize: 16, marginBottom: 40, maxWidth: 680 }}>
            Todos los servicios incluyen documentación lista para presentación en SECOP, Gesproy-SGR
            y los sistemas del Ministerio de Vivienda y Ciudad y Territorio.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 24 }}>
            {SERVICIOS_MUN.map(s => (
              <div key={s.titulo} style={{
                background: '#fff', borderRadius: 12, padding: '28px 24px',
                boxShadow: '0 4px 20px rgba(0,26,51,0.07)',
                borderTop: '3px solid #17A2B8',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#001A33', fontSize: 17, marginBottom: 6 }}>{s.titulo}</div>
                <div style={{
                  display: 'inline-block', background: '#e8f8fb', color: '#0D6EFD',
                  fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 13,
                  borderRadius: 6, padding: '3px 10px', marginBottom: 14, alignSelf: 'flex-start',
                }}>{s.rango}</div>
                <p style={{ fontFamily: "'Lato',sans-serif", color: '#555', fontSize: 14, lineHeight: 1.65, margin: 0, flex: 1 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} primary>
              Solicitar propuesta para mi municipio
            </Btn>
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── PARA QUIÉN ── */}
      <Section bg="#f7fbff">
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Clientes objetivo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px,4vw,32px)', marginBottom: 32 }}>
            ¿A quién apoyamos?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(380px,1fr))', gap: 20 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#fff', borderRadius: 10, padding: '24px 28px',
                borderLeft: `4px solid ${c.color}`,
                boxShadow: '0 2px 12px rgba(0,26,51,0.06)',
              }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#001A33', fontSize: 16, marginBottom: 10 }}>{c.tipo}</div>
                <p style={{ fontFamily: "'Lato',sans-serif", color: '#555', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── POR QUÉ BIC ── */}
      <Section>
        <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Diferenciadores</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px,4vw,32px)', marginBottom: 36 }}>
            Por qué contratar a BIC para su municipio
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
            {DIFERENCIADORES.map(d => (
              <div key={d.titulo} style={{
                background: 'linear-gradient(135deg,#f8fafd,#eef5ff)',
                borderRadius: 10, padding: '22px 24px',
                boxShadow: '0 2px 10px rgba(0,26,51,0.05)',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{d.icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#001A33', fontSize: 15, marginBottom: 8 }}>{d.titulo}</div>
                <p style={{ fontFamily: "'Lato',sans-serif", color: '#555', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── INVERSIÓN REFERENCIAL ── */}
      <Section bg="#f0f8ff">
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión estimada</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px,4vw,32px)', marginBottom: 8 }}>
            Rango de Honorarios — Consultoría Pública 2026
          </h2>
          <p style={{ fontFamily: "'Lato',sans-serif", color: '#555', fontSize: 15, marginBottom: 32 }}>
            Valores orientativos en pesos colombianos. Cada propuesta se elabora sobre el alcance específico
            del proyecto y puede ser presentada en formato SECOP con análisis de precios unitarios.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 16 }}>
            {[
              { label: 'Formulación MGA-Web SGR', rango: '$8M – $28M COP', color: '#17A2B8' },
              { label: 'Diseño acueducto/alcantarillado rural', rango: '$15M – $40M COP', color: '#0D6EFD' },
              { label: 'Estudio amenaza inundación (POT)', rango: '$12M – $30M COP', color: '#198754' },
              { label: 'Diseño PTAP/PTAR municipal', rango: '$18M – $55M COP', color: '#6610F2' },
              { label: 'Protección fluvial y encauzamiento', rango: '$20M – $60M COP', color: '#DC3545' },
              { label: 'Interventoría hidráulica pública', rango: '$15M – $50M COP', color: '#FD7E14' },
            ].map(r => (
              <div key={r.label} style={{
                background: '#fff', borderRadius: 10, padding: '22px 20px',
                borderTop: `3px solid ${r.color}`,
                boxShadow: '0 2px 10px rgba(0,26,51,0.06)',
              }}>
                <div style={{ fontFamily: "'Lato',sans-serif", fontSize: 13, color: '#555', marginBottom: 8, lineHeight: 1.4 }}>{r.label}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: r.color, fontSize: 18 }}>{r.rango}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} primary>
              Solicitar propuesta con APU para SECOP
            </Btn>
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px,4vw,32px)', marginBottom: 32 }}>
            Preguntas Frecuentes de Alcaldías y Entidades Públicas
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ_MUN.map(f => (
              <div key={f.q} style={{
                background: '#f7fbff', borderRadius: 10, padding: '24px 28px',
                borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#001A33', fontSize: 16, marginBottom: 10 }}>
                  {f.q}
                </div>
                <p style={{ fontFamily: "'Lato',sans-serif", color: '#444', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── CTA FINAL ── */}
      <Section bg="linear-gradient(135deg,#001A33,#002A50)">
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(24px,4vw,36px)', marginBottom: 16 }}>
            ¿Su municipio tiene un proyecto hidráulico pendiente?
          </h2>
          <p style={{ fontFamily: "'Lato',sans-serif", color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
            Cuéntenos el proyecto — formulación SGR, diseño de acueducto, estudio de inundación,
            interventoría — y le enviamos una propuesta técnica con alcance y valor en 48 horas.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} primary>
              WhatsApp +57 302 477 8910
            </Btn>
            <Btn href="mailto:rogeriobernal@ingenieriabernal.co" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>
              rogeriobernal@ingenieriabernal.co
            </Btn>
          </div>
        </div>
      </Section>
    </>
  )
}
