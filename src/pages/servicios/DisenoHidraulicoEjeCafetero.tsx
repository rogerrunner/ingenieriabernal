import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Diseño Hidráulico en el Eje Cafetero')

const seoConfig = {
  title: 'Diseño Hidráulico Eje Cafetero | BIC Ingeniería',
  description: 'Diseño hidráulico en Caldas, Risaralda y Quindío. Redes de acueducto, alcantarillado y estructuras. BIC cubre todo el Eje Cafetero. +57 302 477 8910',
  keywords: [
    'diseño hidráulico Eje Cafetero',
    'diseño acueducto Caldas Risaralda Quindío',
    'diseño alcantarillado Eje Cafetero',
    'RAS 2017 Resolución 0330',
    'ingeniería hidráulica Manizales Pereira Armenia',
    'estructuras hidráulicas Eje Cafetero',
    'canales hidráulicos Caldas',
    'drenaje pluvial Eje Cafetero',
    'EPANET acueducto',
    'diseño hidráulico Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-hidraulico-eje-cafetero',
}

const SERVICIOS_HIDRAULICOS = [
  {
    icon: '🚰',
    titulo: 'Acueductos urbanos y rurales',
    desc: 'Diseño de sistemas de acueducto bajo la Resolución 0330/2017 (RAS): redes de distribución, obras de captación, líneas de conducción, tanques de almacenamiento y plantas de tratamiento de agua potable (PTAP). Modelos hidráulicos en EPANET y WaterGEMS para análisis de presiones, caudales y escenarios de demanda futura en municipios de Caldas, Risaralda y Quindío.',
  },
  {
    icon: '🏗️',
    titulo: 'Alcantarillados sanitarios y pluviales',
    desc: 'Diseño de redes de alcantarillado sanitario y pluvial, colectores principales, emisarios y estructuras especiales (pozos, cámaras de inspección, sifones invertidos, aliviaderos). Verificación de capacidad hidráulica por el método de Manning para tuberías circulares y canales a sección parcialmente llena, conforme al RAS 2017.',
  },
  {
    icon: '🌊',
    titulo: 'Canales y estructuras hidráulicas',
    desc: 'Diseño hidráulico de canales de conducción, canales de drenaje agrícola y urbano, disipadores de energía, vertederos, compuertas y obras de arte vial (alcantarillas, box-culverts, puentes). Verificación de velocidad de erosión y sedimentación, diseño de revestimiento y estabilidad de estructuras en concreto y gaviones.',
  },
  {
    icon: '🏙️',
    titulo: 'Drenaje pluvial urbano y planes parciales',
    desc: 'Diseño de sistemas de drenaje pluvial para urbanizaciones, parques industriales y planes parciales en el Eje Cafetero. Estimación de caudales de escorrentía con el método racional y SCS CN para áreas urbanas. Diseño de zanjas, tuberías, pozos, sumideros y sistemas de retención-detención conforme al RAS 2017 y los POT municipales.',
  },
  {
    icon: '🔧',
    titulo: 'Diagnóstico y rehabilitación de redes existentes',
    desc: 'Evaluación del estado hidráulico de redes de acueducto y alcantarillado existentes en municipios del Eje Cafetero. Identificación de tramos deficientes, análisis de capacidad residual y propuesta de rehabilitación o reposición. Insumo técnico para proyectos de inversión ante el SGR y el Ministerio de Vivienda.',
  },
  {
    icon: '💧',
    titulo: 'Sistemas de riego y drenaje agropecuario',
    desc: 'Diseño de sistemas de riego por goteo, aspersión y gravedad para el sector agropecuario de Caldas, Risaralda y Quindío. Cálculo de demanda hídrica de cultivos, diseño de redes de conducción y distribución, y diseño de obras de drenaje en zonas de cultivo de café, plátano y hortalizas en el Eje Cafetero.',
  },
]

const COBERTURA = [
  { ciudad: 'Manizales y área metropolitana', desc: 'Diseños para construcciones en suelo urbano, proyectos de expansión, planes parciales y obras de infraestructura municipal. Coordinación con Aguas de Manizales y Corpocaldas para cumplimiento normativo.' },
  { ciudad: 'Pereira y Dosquebradas', desc: 'Área metropolitana de Pereira con alta demanda de diseños hidrosanitarios para vivienda, industria y comercio. Coordinación con Aguas y Aguas de Pereira y CARDER.' },
  { ciudad: 'Armenia y municipios del Quindío', desc: 'Proyectos de reconstrucción y nuevas urbanizaciones en Armenia y el Quindío. Diseño de redes bajo los estándares de la CRQ y el Plan Departamental de Aguas del Quindío.' },
  { ciudad: 'Municipios rurales del Eje Cafetero', desc: 'BIC diseña sistemas de acueducto y alcantarillado para cabeceras municipales y zonas rurales de Caldas, Risaralda y Quindío con financiación SGR, APSB o Presupuesto General de la Nación.' },
]

const FAQ = [
  {
    q: '¿Qué normativa aplica para el diseño hidráulico en el Eje Cafetero?',
    a: 'El Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS), actualizado por la Resolución 0330/2017 del Ministerio de Vivienda, es la norma central para el diseño de acueductos y alcantarillados en Colombia, incluyendo todos los municipios del Eje Cafetero. Adicionalmente, el diseño de canales y estructuras hidráulicas en zona de amenaza requiere cumplir el Decreto 1807/2014 y los términos de referencia de las Corporaciones Autónomas Regionales (Corpocaldas, CARDER, CRQ).',
  },
  {
    q: '¿Qué es EPANET y por qué se usa en el diseño de acueductos?',
    a: 'EPANET es un software de simulación hidráulica de sistemas de distribución de agua desarrollado por la EPA de Estados Unidos. Permite modelar el comportamiento de redes de tuberías bajo diferentes condiciones de demanda y presión, identificar zonas deficitarias, dimensionar tuberías y verificar la correcta operación del sistema. En Colombia, el RAS 2017 reconoce EPANET como herramienta válida para el análisis y diseño de redes de acueducto.',
  },
  {
    q: '¿BIC puede diseñar sistemas de acueducto para municipios pequeños del Eje Cafetero?',
    a: 'Sí. BIC tiene experiencia específica en diseño de sistemas de agua potable para cabeceras municipales pequeñas y zonas rurales del Eje Cafetero. El proceso incluye análisis de la fuente de abastecimiento, diseño de la captación, la conducción, el tratamiento y la red de distribución conforme al RAS 2017 y a los niveles de complejidad del sistema (bajo, medio o alto según el número de suscriptores).',
  },
  {
    q: '¿Cuánto tiempo demora un diseño hidráulico completo?',
    a: 'Un diseño de red hidrosanitaria para una edificación típica (edificio residencial o bodega industrial) demora entre 2 y 4 semanas. Un diseño de acueducto o alcantarillado para un proyecto urbanístico (plan parcial o urbanización) demora entre 4 y 8 semanas, dependiendo de la extensión y complejidad del sistema. BIC entrega cronograma detallado en la propuesta inicial.',
  },
  {
    q: '¿Los diseños de BIC son aceptados por las curadurías y las empresas de servicios públicos del Eje Cafetero?',
    a: 'Sí. Los diseños hidráulicos de BIC son elaborados conforme al RAS 2017 y los reglamentos técnicos aplicables, y están firmados por ingenieros con matrícula COPNIA vigente. Son aceptados por las curadurías urbanas de Manizales, Pereira y Armenia, así como por Aguas de Manizales, Aguas y Aguas de Pereira, ACUASEO y las demás empresas de servicios públicos del Eje Cafetero para la revisión de los diseños de conexión a las redes existentes.',
  },
]

export default function DisenoHidraulicoEjeCafetero() {
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
          <SectionLabel light>Servicio regional · Eje Cafetero</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño Hidráulico en el Eje Cafetero:<br />
            <span style={{ color: '#17A2B8' }}>Caldas, Risaralda y Quindío</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña sistemas hidráulicos en todo el Eje Cafetero:
            acueductos y alcantarillados municipales, redes hidrosanitarias para edificaciones,
            canales de conducción y drenaje, estructuras hidráulicas y sistemas de control pluvial.
            Cumplimiento de la Resolución 0330/2017 (RAS) y todas las normas aplicables en Caldas,
            Risaralda y Quindío.
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
          {['RAS 2017 · Res. 0330', 'EPANET', 'NSR-10', 'Caldas · Risaralda · Quindío', 'COPNIA'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Portafolio hidráulico</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Servicios de diseño hidráulico en el Eje Cafetero</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS_HIDRAULICOS.map((item) => (
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

      {/* ── COBERTURA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Cobertura</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Cobertura regional: Caldas, Risaralda y Quindío</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {COBERTURA.map((c) => (
              <div key={c.ciudad} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{c.ciudad}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ENTREGABLES ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Entregables</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué entrega BIC en un diseño hidráulico?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '📐', titulo: 'Planos hidráulicos en DWG y PDF', desc: 'Planta general de la red, perfiles longitudinales, detalles de pozos, cámaras, conexiones domiciliarias y estructuras especiales. Escalas adecuadas para construcción y para trámite de licencia.' },
              { icon: '📊', titulo: 'Memoria de cálculo hidráulico', desc: 'Hoja de cálculo con el dimensionamiento de tuberías, caudales de diseño, velocidades, presiones y cotas piezométricas. Modelo EPANET exportado para acueductos. Auditables y verificables por la entidad contratante o la curaduría.' },
              { icon: '📄', titulo: 'Informe técnico con especificaciones', desc: 'Documento con descripción del sistema diseñado, criterios de diseño, normas aplicadas, materiales especificados, cantidades de obra y presupuesto de referencia conforme a los precios de la zona del Eje Cafetero.' },
              { icon: '💾', titulo: 'Modelo EPANET (acueductos)', desc: 'Archivo del modelo hidráulico calibrado en EPANET para redes de distribución de agua potable. Permite al operador de la ESP verificar la operación del sistema y simular escenarios futuros.' },
              { icon: '📋', titulo: 'Especificaciones técnicas de construcción', desc: 'Especificaciones de materiales, proceso constructivo, control de calidad y pruebas de presión e impermeabilidad para cada componente del sistema hidráulico diseñado.' },
              { icon: '🏗️', titulo: 'Propuesta de interventoría', desc: 'BIC puede continuar como interventor técnico durante la construcción del sistema diseñado, garantizando que la obra se ejecute conforme a los planos y especificaciones aprobados.' },
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
          }}>FAQ — Diseño hidráulico en el Eje Cafetero</h2>
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
            ¿Necesita un diseño hidráulico en el Eje Cafetero?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto, la ubicación y el sistema que necesita diseñar.
            Le enviamos propuesta técnica con presupuesto en menos de 24 horas.
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
