import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero información sobre Consultoría de Ingeniería Civil en Manizales')

const seoConfig = {
  title: 'Consultoría Ingeniería Civil Manizales | BIC',
  description: 'Consultoría integral de ingeniería civil en Manizales: estudios técnicos, diseño, interventoría y gestión de proyectos. +57 302 477 8910',
  keywords: [
    'consultoría ingeniería civil Manizales',
    'consultor ingeniería Caldas',
    'diseño hidráulico Manizales',
    'estudios técnicos Manizales',
    'interventoría obras Manizales',
    'gestión proyectos ingeniería Caldas',
    'BIC Bernal Ingeniería Manizales',
    'ingeniería civil Eje Cafetero',
    'asesoría técnica construcción Manizales',
    'COPNIA ingeniero Manizales',
  ],
  canonical: 'https://ingenieriabernal.co/consultoria-ingenieria-civil-manizales/',
}

const SERVICIOS = [
  {
    icon: '💧',
    titulo: 'Estudios hidrológicos e hidráulicos',
    desc: 'Análisis de cuencas, estimación de caudales de diseño, curvas IDF, modelación HEC-RAS 1D/2D y estudios de inundabilidad para predios, planes parciales y revisiones de POT en Manizales. BIC domina las particularidades hidrológicas de la cuenca del Río Chinchiná y las microcuencas urbanas de la ciudad.',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño de redes hidrosanitarias y sistemas CI',
    desc: 'Diseño de redes de agua potable, aguas residuales, aguas lluvias y sistemas contra incendio bajo NSR-10 Títulos I, J y K para edificaciones residenciales, comerciales e industriales en Manizales. Memorias de cálculo completas para trámite ante curadurías urbanas y Superintendencia de Notariado.',
  },
  {
    icon: '🌊',
    titulo: 'Acueductos y alcantarillados',
    desc: 'Diseño, optimización y diagnóstico de sistemas de acueducto y alcantarillado municipales y rurales bajo RAS 2017 (Resolución 0330/2017). Modelos EPANET para análisis hidráulico de redes. BIC tiene experiencia verificada en proyectos de agua potable en municipios de Caldas con financiación SGR y MGA-Web.',
  },
  {
    icon: '⚖️',
    titulo: 'Interventoría técnica de obras',
    desc: 'Control técnico, administrativo y financiero de contratos de obra civil en Manizales y Caldas. Verificación del cumplimiento de especificaciones técnicas, seguimiento de cronograma y control de calidad de materiales. BIC ha ejercido interventoría en proyectos institucionales para entidades públicas en el Eje Cafetero.',
  },
  {
    icon: '📊',
    titulo: 'Formulación de proyectos de regalías MGA-Web',
    desc: 'Estructuración técnica y financiera de proyectos de inversión para el Sistema General de Regalías (SGR) en el módulo MGA-Web del DNP. BIC tiene experiencia en formulación de proyectos de agua potable y saneamiento básico para alcaldías de Caldas, con aprobación verificada por el Órgano Colegiado de Administración y Decisión (OCAD).',
  },
  {
    icon: '🗺️',
    titulo: 'Gestión del riesgo hídrico y geotécnico',
    desc: 'Estudios de amenaza y riesgo por inundación, avenidas torrenciales y movimientos en masa para POT, planes parciales y proyectos de infraestructura en Manizales. Integración con los lineamientos de Corpocaldas, el POMCA Río Chinchiná y el Sistema Municipal de Gestión del Riesgo de Manizales.',
  },
]

const SECTORES = [
  { nombre: 'Sector público municipal', desc: 'Alcaldías y secretarías de Caldas con proyectos de infraestructura hídrica, saneamiento básico y gestión del riesgo financiados por SGR, PGN o recursos propios.' },
  { nombre: 'Constructoras y urbanizadores', desc: 'Empresas constructoras en Manizales que desarrollan proyectos residenciales, comerciales o industriales que requieren estudios técnicos para licencias y planes parciales.' },
  { nombre: 'Empresas de servicios públicos', desc: 'ESP de acueducto y alcantarillado de Manizales y Caldas que necesitan diagnósticos de redes, modelaciones hidráulicas y diseños de expansión o rehabilitación.' },
  { nombre: 'Propietarios e inversionistas', desc: 'Particulares e inversionistas con predios en Manizales que requieren estudios de suelos, inundabilidad o diseños hidrosanitarios para tramitar licencias de construcción.' },
  { nombre: 'Entidades financiadoras', desc: 'Bancos, aseguradoras y fondos de inversión que necesitan estudios técnicos de riesgo hídrico o geotécnico para evaluar proyectos inmobiliarios en Manizales y el Eje Cafetero.' },
]

const FAQ = [
  {
    q: '¿Qué cubre exactamente la consultoría integral de BIC en Manizales?',
    a: 'BIC ofrece todos los estudios técnicos propios de un ingeniero civil especializado en hidráulica y geotecnia: estudios de suelos, diseño hidrosanitario, diseño de acueductos y alcantarillados, modelación hidráulica HEC-RAS, estudios de inundabilidad, interventoría técnica y formulación de proyectos de regalías MGA-Web. Para diseños estructurales y arquitectónicos, BIC trabaja articulado con aliados especializados.',
  },
  {
    q: '¿BIC trabaja solo en Manizales o tiene cobertura regional?',
    a: 'BIC tiene sede en Manizales y cobertura en todo el Eje Cafetero (Caldas, Risaralda y Quindío) y en cualquier municipio de Colombia para proyectos de alcance nacional. El equipo ha ejecutado proyectos en Viterbo, Anserma, La Dorada (Caldas), Dosquebradas (Risaralda) y Puerto Boyacá (Boyacá).',
  },
  {
    q: '¿Tienen ingenieros con matrícula COPNIA vigente?',
    a: 'Sí. El director técnico de BIC es Rogerio Bernal Ríos, ingeniero civil con especialización en recursos hidráulicos de la Universidad Nacional de Colombia, con matrícula COPNIA 17202-313228. Todos los informes y memorias de cálculo son elaborados y firmados por profesionales con matrícula vigente habilitados para suscribir documentos técnicos ante curadurías, entidades ambientales y contratantes públicos en Colombia.',
  },
  {
    q: '¿Cómo inicia el proceso de consultoría?',
    a: 'El proceso inicia con una consulta inicial —gratuita— por WhatsApp o correo electrónico. Con base en la descripción del proyecto, BIC elabora una propuesta técnica y económica detallada en menos de 24 horas. Una vez aprobada la propuesta, se firma el contrato de consultoría y se inicia la fase de campo o de diseño según el alcance acordado.',
  },
  {
    q: '¿Cuánto demora un proyecto de consultoría típico?',
    a: 'Depende del alcance. Un estudio de suelos para vivienda unifamiliar demora 2-3 semanas. Un diseño hidrosanitario completo para edificio de apartamentos, 3-4 semanas. Un estudio de inundabilidad con modelación HEC-RAS 2D, 4-8 semanas. Un proyecto de regalías MGA-Web completo, 4-6 semanas. BIC entrega cronograma detallado en la propuesta.',
  },
]

export default function ConsultoriaIngenieriaCivilManizales() {
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
          <SectionLabel light>Consultoría integral · Manizales</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Consultoría de Ingeniería Civil en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Estudios, Diseño y Gestión de Proyectos</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores es una empresa de consultoría de ingeniería civil con
            sede en Manizales y más de 10 años de experiencia en el Eje Cafetero y Colombia. Ofrecemos
            un portafolio integral de estudios técnicos, diseños de ingeniería, interventoría de obras
            y gestión de proyectos para el sector público y privado en Caldas, Risaralda y Quindío.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar consulta
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Especialidades:</span>
          {['Hidráulica', 'Geotecnia', 'NSR-10', 'HEC-RAS 2D', 'MGA-Web', 'COPNIA'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Portafolio técnico</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Servicios integrales de ingeniería civil en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS.map((item) => (
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

      {/* ── SECTORES ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Clientes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Sectores que atendemos en Manizales y Caldas</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {SECTORES.map((s) => (
              <div key={s.nombre} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{s.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── METODOLOGÍA ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Metodología</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué contratar a BIC en Manizales?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '📍', titulo: 'Sede local en Manizales', desc: 'BIC opera desde Manizales y conoce el territorio: el POT, las curadurías, las autoridades ambientales (Corpocaldas), los municipios de Caldas y las particularidades geotécnicas e hidrológicas de la región.' },
              { icon: '🎓', titulo: 'Especialización universitaria acreditada', desc: 'Director técnico con especialización en Recursos Hidráulicos de la Universidad Nacional de Colombia (sede Manizales), la institución de referencia en ingeniería civil en el Eje Cafetero.' },
              { icon: '✅', titulo: 'Proyectos verificados en la región', desc: 'Portafolio con proyectos ejecutados en Manizales (EPANET, gestión del riesgo), Dosquebradas (Makarí Mall), La Dorada (Palacio de Justicia) y municipios de Caldas y Boyacá.' },
              { icon: '⏱️', titulo: 'Respuesta en 24 horas', desc: 'BIC entrega propuesta técnica y económica detallada en menos de 24 horas. Cronograma incluido desde la primera propuesta para que el cliente planifique su proyecto.' },
              { icon: '📞', titulo: 'Comunicación directa con el especialista', desc: 'En BIC, el cliente se comunica directamente con el ingeniero especialista —no con intermediarios comerciales— lo que garantiza respuestas técnicas precisas desde el primer contacto.' },
              { icon: '🏆', titulo: 'Compromiso con la calidad del entregable', desc: 'Todos los informes y memorias de cálculo de BIC son revisados internamente antes de ser entregados. Se atienden sin costo adicional las observaciones técnicas de la autoridad competente derivadas de nuestros estudios.' },
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
          }}>FAQ — Consultoría de ingeniería civil en Manizales</h2>
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
            ¿Tiene un proyecto de ingeniería civil en Manizales?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Descríbanos el proyecto, el trámite o el estudio que necesita. BIC le responde con
            una propuesta técnica detallada en menos de 24 horas.
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
