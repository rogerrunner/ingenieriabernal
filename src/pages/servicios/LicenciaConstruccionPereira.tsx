import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero asesoría para una Licencia de Construcción en Pereira')

const seoConfig = {
  title: 'Licencia de Construcción Pereira: Documentos Técnicos | BIC',
  description: 'BIC prepara estudios técnicos para licencia de construcción en Pereira: suelos, estructural, planos. Curadurías de Pereira. +57 302 477 8910',
  keywords: [
    'licencia de construcción Pereira',
    'estudio de suelos Pereira licencia',
    'documentos técnicos curaduría Pereira',
    'planos arquitectónicos Pereira',
    'memoria de cálculo estructural Pereira',
    'Curaduría Urbana Pereira',
    'NSR-10 Pereira',
    'licencia urbanismo Risaralda',
    'CARDER permiso construcción',
    'POT Pereira licencia',
  ],
  canonical: 'https://ingenieriabernal.co/licencia-de-construccion-pereira',
}

const DOCUMENTOS = [
  {
    icon: '🏗️',
    titulo: 'Estudio de suelos y geotécnico (NSR-10 Título H)',
    desc: 'Investigación del subsuelo con sondeos de penetración estándar (SPT), apiques y ensayos de laboratorio. El informe geotécnico define el tipo de suelo, la capacidad portante, el nivel freático y el sistema de cimentación recomendado. Exigido por la NSR-10 Capítulo H.3 para toda edificación que requiera licencia de construcción en Pereira.',
  },
  {
    icon: '📐',
    titulo: 'Memoria de cálculo estructural',
    desc: 'Diseño de la estructura (concreto reforzado, metálica o mampostería) con verificación de cargas gravitacionales y sísmicas según la NSR-10. En Pereira, zona de amenaza sísmica alta (zona AIS-3), el diseño sismo resistente es especialmente exigente. La memoria incluye diseño de cimentación, columnas, vigas, muros y losas conforme al tipo de uso.',
  },
  {
    icon: '📄',
    titulo: 'Planos arquitectónicos y urbanísticos',
    desc: 'Plantas de distribución, fachadas, cortes y cuadro de áreas conforme al POT de Pereira, las normas volumétricas del sector y las reglamentaciones del Decreto 1077/2015. Incluye localización general, plano de loteo y plano de implantación con curvas de nivel cuando el predio está en ladera.',
  },
  {
    icon: '💧',
    titulo: 'Diseño de redes hidrosanitarias',
    desc: 'Sistema de agua potable, aguas residuales y aguas lluvias para la edificación conforme a la Resolución 0330/2017 (RAS) y la NSR-10 Título I. Incluye cálculo hidráulico de tuberías, dimensionamiento del tanque de almacenamiento, sistema de bombeo y conexión a las redes de la empresa de acueducto de Pereira (Aguas y Aguas de Pereira o ACUASEO).',
  },
  {
    icon: '🔥',
    titulo: 'Sistema contra incendio (si aplica NSR-10 Títulos J/K)',
    desc: 'Para edificaciones que superen los umbrales de la NSR-10 (altura, área o uso), BIC diseña el sistema de detección, extinción y control de incendios: rociadores automáticos, red de hidrantes, gabinetes BIE, extintores y sistemas de alarma. Cálculo hidráulico NFPA 13/14 integrado al expediente de licencia.',
  },
  {
    icon: '🌊',
    titulo: 'Estudio de inundabilidad (si el predio está en zona de amenaza)',
    desc: 'Para predios ubicados en zona de amenaza hídrica media o alta según el POT de Pereira, la licencia requiere un estudio de inundabilidad con modelación HEC-RAS 2D. BIC integra este análisis al expediente de la licencia, entregando los mapas de amenaza y la memoria de cálculo exigidos por la Curaduría Urbana de Pereira.',
  },
]

const FAQ = [
  {
    q: '¿Cuántas curadurías tiene Pereira y cuál debo contactar?',
    a: 'Pereira cuenta con dos Curadurías Urbanas. La asignación de expediente depende de la zona del predio según la distribución territorial vigente de las curadurías. BIC asesora al cliente para identificar la curaduría correspondiente, revisar el reglamento urbanístico aplicable y preparar el expediente completo con todos los documentos técnicos exigidos.',
  },
  {
    q: '¿Qué documentos técnicos solicita la curaduría de Pereira para una licencia de construcción?',
    a: 'Los requisitos del Decreto 1077/2015 incluyen: formulario de solicitud diligenciado, certificado de libertad y tradición vigente, planos arquitectónicos firmados por arquitecto con tarjeta CPNAA, memoria de cálculo estructural firmada por ingeniero con COPNIA, estudio de suelos NSR-10, diseño hidrosanitario y, cuando el predio está en zona de amenaza, el estudio de inundabilidad o remoción en masa requerido por el Decreto 1807/2014.',
  },
  {
    q: '¿BIC puede gestionar toda la documentación o solo algunos estudios?',
    a: 'BIC ofrece asesoría integral: elabora los estudios técnicos de suelos, el diseño hidrosanitario, el estudio de inundabilidad y la coordinación técnica del expediente. Para los planos arquitectónicos y la memoria estructural, trabajamos en equipo con arquitectos e ingenieros estructurales aliados o nos articulamos con el equipo del cliente.',
  },
  {
    q: '¿Cuánto demora el trámite de licencia en Pereira?',
    a: 'El Decreto 1077/2015 establece plazos máximos para las curadurías: entre 15 y 45 días hábiles dependiendo del tipo y complejidad del proyecto. Sin embargo, la preparación correcta del expediente técnico —sin observaciones ni requerimientos— es determinante para evitar suspensiones del plazo. BIC revisa el expediente antes de radicarlo para minimizar correcciones.',
  },
  {
    q: '¿Se requiere permiso de CARDER además de la licencia de curaduría?',
    a: 'En algunos casos sí. Si el predio está ubicado en zona de influencia de ronda hídrica, en área forestal protectora o si el proyecto implica movimientos de tierra significativos, puede ser necesario un concepto o permiso ambiental de CARDER. BIC identifica esta necesidad en la fase de diagnóstico previo y gestiona la documentación ambiental requerida.',
  },
]

export default function LicenciaConstruccionPereira() {
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
          <SectionLabel light>Servicio especializado · Pereira</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Licencia de Construcción en Pereira:<br />
            <span style={{ color: '#17A2B8' }}>Asesoría Técnica y Documentación Completa</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores prepara y coordina todos los estudios técnicos requeridos
            para tramitar la licencia de construcción en las Curadurías Urbanas de Pereira. Estudio
            de suelos NSR-10, diseño hidrosanitario, estudio de inundabilidad (cuando el predio está
            en zona de amenaza) y coordinación técnica del expediente completo. Respuesta en 24 horas.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar asesoría
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Referencia:</span>
          {['NSR-10', 'Decreto 1077/2015', 'RAS 2017', 'CARDER', 'Curadurías Pereira', 'POT Pereira'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── DOCUMENTOS REQUERIDOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Documentos técnicos</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Documentos técnicos que BIC elabora para su licencia en Pereira</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {DOCUMENTOS.map((item) => (
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

      {/* ── CURADURÍAS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Curadurías Urbanas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Curadurías de Pereira: qué exigen y cómo BIC le ayuda</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Pereira cuenta con dos Curadurías Urbanas que tramitan licencias de urbanismo y
                construcción conforme al Decreto 1077/2015 y el POT municipal. Cada curaduría atiende
                un sector de la ciudad según la distribución territorial vigente. El proceso incluye
                revisión del expediente técnico, visita al predio y expedición del acto administrativo
                de licencia.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8 }}>
                Un expediente técnico incompleto o con inconsistencias genera observaciones que
                suspenden el plazo legal y retrasan la obra. BIC revisa exhaustivamente cada documento
                antes de radicar el expediente para garantizar que cumpla todos los requisitos técnicos
                y normativos de la curaduría correspondiente.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 14, marginBottom: 12 }}>
                Tipos de proyecto que BIC atiende en Pereira:
              </h3>
              <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.8, paddingLeft: 20 }}>
                <li>Vivienda unifamiliar y bifamiliar en estrato 3-6</li>
                <li>Urbanizaciones y conjuntos residenciales</li>
                <li>Edificios de apartamentos (6 pisos o más)</li>
                <li>Locales comerciales, consultorios y oficinas</li>
                <li>Bodegas industriales y centros de distribución</li>
                <li>Proyectos institucionales y educativos</li>
                <li>Planes parciales y macroproyectos urbanos</li>
                <li>Ampliaciones y reforzamientos estructurales</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUÉ HACE BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Por qué elegirnos</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué hace BIC diferente para licencias en Pereira?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎯', titulo: 'Diagnóstico previo sin costo', desc: 'Antes de iniciar cualquier estudio, BIC revisa la situación del predio: POT, zona de amenaza, reglamento urbanístico y requisitos específicos de la curaduría. Esto permite presupuestar con precisión y evitar sorpresas durante el trámite.' },
              { icon: '⚡', titulo: 'Tiempos de entrega competitivos', desc: 'Estudio de suelos en 10-15 días hábiles. Diseño hidrosanitario en 5-8 días. Estudio de inundabilidad en 3-6 semanas. BIC coordina todos los estudios en paralelo para minimizar el tiempo total del expediente.' },
              { icon: '🤝', titulo: 'Coordinación técnica integral', desc: 'BIC actúa como coordinador técnico del expediente: articula los estudios propios con los planos arquitectónicos y estructurales del equipo del cliente, garantizando coherencia entre todos los documentos radicados.' },
              { icon: '📋', titulo: 'Conocimiento de normas locales', desc: 'El equipo de BIC conoce en detalle el POT de Pereira, las fichas normativas por sectores, los reglamentos de planes parciales vigentes y las exigencias específicas de cada curaduría, lo que reduce el riesgo de observaciones.' },
              { icon: '🛡️', titulo: 'Respaldo COPNIA', desc: 'Todos los estudios técnicos son elaborados y firmados por ingenieros con matrícula COPNIA vigente, habilitados legalmente para suscribir documentos técnicos ante las curadurías y autoridades de Pereira.' },
              { icon: '📱', titulo: 'Acompañamiento durante el trámite', desc: 'BIC atiende todas las observaciones técnicas que la curaduría pueda hacer al expediente, sin costo adicional por correcciones derivadas de nuestros estudios. El cliente tiene un único punto de contacto durante todo el proceso.' },
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
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Licencia de construcción en Pereira</h2>
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
            ¿Necesita documentos técnicos para su licencia en Pereira?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto, la dirección del predio y el trámite que necesita adelantar.
            Le enviamos diagnóstico previo y propuesta técnica en menos de 24 horas.
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
