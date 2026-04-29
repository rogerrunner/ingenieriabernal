import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Formulación de Proyectos de Regalías MGA-Web')

const seoConfig = {
  title: 'Formulación Proyectos Regalías MGA-Web Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Formulación de proyectos de inversión para el Sistema General de Regalías (SGR) en MGA-Web. Agua potable, saneamiento básico, gestión del riesgo. COPNIA 17202-313228. Eje Cafetero.',
  keywords: [
    'formulación proyectos regalías MGA-Web Colombia',
    'formulación proyectos SGR agua saneamiento',
    'MGA-Web Colombia municipios',
    'proyectos inversión agua potable SGR',
    'BPIN proyectos regalías',
    'formulación proyectos alcaldías Colombia',
    'proyectos regalías acueducto alcantarillado',
    'DNP MGA-Web formulación',
    'fichas técnicas proyectos SGR',
    'SECOP proyectos regalías agua',
    'formulación proyectos gestión riesgo SGR',
    'MGA Colombia municipios 2025',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/regalias-mga',
}

const INCLUYE = [
  { icon: '📊', titulo: 'Formulación completa en MGA-Web', desc: 'Registro y diligenciamiento integral del proyecto en la plataforma MGA-Web del DNP: identificación del problema, análisis de alternativas, preparación y evaluación. Generación del BPIN y ficha EBI aprobable por el OCAD correspondiente.' },
  { icon: '🔬', titulo: 'Estudios técnicos de soporte', desc: 'Elaboración o compilación de los estudios técnicos requeridos: estudio de necesidades, diagnóstico de la infraestructura existente, diseños básicos del sistema de agua o saneamiento, estudio de amenaza y vulnerabilidad, y análisis de alternativas.' },
  { icon: '💰', titulo: 'Presupuesto y programación de inversión', desc: 'Estimación detallada de costos de inversión, operación y mantenimiento. Análisis costo-eficiencia o costo-beneficio según la tipología del proyecto. Cronograma físico-financiero coherente con el flujo de recursos del SGR.' },
  { icon: '📋', titulo: 'Fichas técnicas sectoriales y CONPES', desc: 'Elaboración de fichas técnicas sectoriales de agua potable y saneamiento básico, gestión del riesgo o infraestructura, alineadas con los CONPES vigentes y los criterios del DNP para elegibilidad y priorización del gasto.' },
  { icon: '🏛️', titulo: 'Acompañamiento ante el OCAD', desc: 'Preparación de la presentación técnica ante el Órgano Colegiado de Administración y Decisión (OCAD). Atención de observaciones, subsanación de requerimientos y ajustes necesarios hasta lograr la aprobación del proyecto.' },
  { icon: '📌', titulo: 'Seguimiento y registro en Gesproy-SGR', desc: 'Una vez aprobado el proyecto, acompañamiento en el registro del contrato de ejecución en Gesproy-SGR y apoyo en la elaboración de los primeros informes de seguimiento (SSIFP) exigidos por el DNP.' },
]

const PARA_QUIEN = [
  { tipo: 'Alcaldías y secretarías de planeación', desc: 'Municipios con recursos asignados de regalías directas que necesitan formular proyectos de agua potable, saneamiento, gestión del riesgo o infraestructura para tramitarlos ante el OCAD Municipal o Departamental.' },
  { tipo: 'Gobernaciones y entidades departamentales', desc: 'Proyectos de mayor inversión para sistemas regionales de acueducto, optimización de PTAP/PTAR y planes departamentales de agua que requieren aprobación del OCAD Departamental.' },
  { tipo: 'Gestores de proyectos del SGR', desc: 'Profesionales contratados por alcaldías o gobernaciones que necesitan soporte técnico especializado en los componentes de agua, hidráulica y riesgo de proyectos MGA en tramitación.' },
  { tipo: 'Entidades públicas con regalías indirectas', desc: 'Universidades públicas, hospitales y otras entidades beneficiarias de regalías para ciencia, tecnología e innovación que formulan proyectos con componente hídrico o ambiental.' },
]

export default function ServicioRegaliasMga() {
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
          <SectionLabel light>Servicio especializado</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Formulación de Proyectos de Regalías MGA-Web<br />
            <span style={{ color: '#17A2B8' }}>Agua, Saneamiento y Gestión del Riesgo en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores formula proyectos de inversión para el Sistema General
            de Regalías (SGR) en la plataforma MGA-Web del DNP: acueductos, alcantarillados, plantas
            de tratamiento, defensas fluviales y gestión del riesgo hídrico. Registramos el BPIN,
            elaboramos fichas técnicas sectoriales, calculamos indicadores costo-eficiencia y
            acompañamos el proceso ante el OCAD hasta la aprobación. Rogerio Bernal Ríos, Especialista
            UNAL (COPNIA 17202-313228), ha formulado proyectos aprobados en municipios de Caldas,
            Boyacá, Santander y los Llanos, acumulando un historial verificable de proyectos
            financiados que superaron la revisión técnica del DNP, las contralorías departamentales
            y los OCAD sectoriales.
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Plataformas:</span>
          {['MGA-Web DNP', 'Gesproy-SGR', 'BPIN', 'SECOP II', 'OCAD'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── QUÉ INCLUYE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye la formulación MGA-Web?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {INCLUYE.map((item) => (
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

      {/* ── PARA QUIÉN ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Clientes objetivo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Para quién es este servicio?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PARA_QUIEN.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
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

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Diferenciadores</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué BIC?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '✅', titulo: 'Proyectos aprobados verificables', desc: 'Historial real de proyectos aprobados por OCAD en Caldas, Boyacá, Santander y Llanos. Referencias disponibles con contactos de las alcaldías contratantes.' },
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL), garantiza que los análisis técnicos, la valoración de alternativas y los indicadores económicos superen la revisión del banco de proyectos del DNP.' },
              { icon: '⚡', titulo: 'Proceso ágil orientado a aprobación', desc: 'Conocemos los criterios de elegibilidad del DNP y los requerimientos de cada OCAD. Formulamos para que el proyecto sea aprobado en el primer ciclo, sin reprocesos costosos.' },
              { icon: '🔗', titulo: 'Diseños y formulación bajo el mismo techo', desc: 'BIC realiza tanto los estudios técnicos de soporte (hidrología, hidráulica, diseños) como la formulación MGA-Web, garantizando coherencia total entre los componentes del proyecto.' },
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

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/proyectos-regalias-agua-saneamiento" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cómo Formular Proyectos de Agua y Saneamiento con Recursos de Regalías</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/mga-web-regalias-agua-potable" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Formulación de proyectos con regalías y MGA Web: cómo no perder el cupo</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
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
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos como soporte técnico obligatorio al SGR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/gestion-riesgo-hidrico" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Gestión del riesgo hídrico para proyectos de inversión pública y SGR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/acueducto-alcantarillado" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de acueducto y saneamiento básico — entregable técnico del proyecto SGR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/ambiental" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Permisos ambientales y CAR para proyectos de infraestructura hídrica</span>
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
            ¿Su municipio tiene regalías sin formular?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el sector (agua, saneamiento, riesgo), el monto disponible y la fecha del
            próximo OCAD. Le enviamos propuesta de honorarios y plan de trabajo en 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp
          </Btn>
        </div>
      </Section>
    </>
  )
}
