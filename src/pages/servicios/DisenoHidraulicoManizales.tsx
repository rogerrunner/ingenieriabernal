import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Diseño Hidráulico en Manizales')

const seoConfig = {
  title: 'Diseño Hidráulico en Manizales | BIC Ingeniería',
  description: 'Diseño hidráulico en Manizales: redes de acueducto, alcantarillado, canales y estructuras. BIC cumple RAS 2000 y normativa vigente. +57 302 477 8910',
  keywords: [
    'diseño hidráulico Manizales',
    'redes acueducto Manizales',
    'alcantarillado pluvial Manizales',
    'diseño hidráulico Caldas',
    'RAS 2000 Manizales',
    'EPANET Manizales',
    'HEC-RAS canales Caldas',
    'diseño alcantarillado sanitario Manizales',
    'estructuras hidráulicas Colombia',
    'ingeniería hidráulica Manizales',
    'Resolución 0330 2017 Colombia',
    'AutoCAD Civil 3D redes',
    'SewerGEMS alcantarillado',
    'memorias de cálculo hidráulico',
  ],
  canonical: 'https://www.ingenieriabernal.co/diseno-hidraulico-manizales/',
}

const SERVICIOS_HIDRAULICOS = [
  {
    icon: '💧',
    titulo: 'Redes de acueducto y distribución de agua potable',
    desc: 'Diseño de redes de distribución de agua potable en sistema mallado y ramificado. Modelación hidráulica con EPANET para verificar presiones, velocidades y caudales en condiciones estáticas y de incendio. Aplicación del RAS 2000 (Resolución 0330 de 2017) y las normas técnicas de Aguas de Manizales para proyectos en el área urbana.',
  },
  {
    icon: '🌧️',
    titulo: 'Alcantarillado pluvial y sanitario',
    desc: 'Diseño de redes de alcantarillado sanitario, pluvial y combinado. Cálculo de caudales de diseño mediante el método racional modificado y curvas IDF de Manizales. Modelación con SewerGEMS para verificar capacidad de colectores, pozos de inspección, estructuras de unión y conexión a la red pública de Aguas de Manizales.',
  },
  {
    icon: '🏞️',
    titulo: 'Canales y estructuras de conducción',
    desc: 'Diseño hidráulico de canales trapezoidales, rectangulares y circulares para conducción de aguas lluvia o riego. Cálculo de Manning, análisis de flujo crítico y lámina libre. Diseño de estructuras de caída, disipadores de energía, transiciones y estructuras de control compatibles con el sistema de drenaje urbano de Manizales y Caldas.',
  },
  {
    icon: '🔧',
    titulo: 'Estructuras hidráulicas especiales',
    desc: 'Diseño de estructuras de captación, vertederos, aforadores Parshall, cámaras de quiebre, tanques de almacenamiento y sistemas de bombeo. Cálculo hidráulico detallado con selección de bombas centrífugas, curvas del sistema y verificación del golpe de ariete para sistemas con impulsión.',
  },
]

const SOFTWARE = [
  { nombre: 'EPANET', uso: 'Modelación de redes de acueducto a presión. Análisis estático y dinámico de presiones y caudales en nodos y tuberías.' },
  { nombre: 'SewerGEMS / OpenFlows', uso: 'Diseño y modelación de redes de alcantarillado a superficie libre y a presión. Verificación de capacidad hidráulica bajo lluvia de diseño.' },
  { nombre: 'HEC-RAS', uso: 'Análisis de flujo en canales y cauces naturales en régimen permanente y no permanente. Cálculo de lámina de agua y perfil hidráulico.' },
  { nombre: 'AutoCAD Civil 3D', uso: 'Modelación del terreno (MDT), diseño de perfiles de red, generación de planos en planta y perfil para acueducto y alcantarillado.' },
]

const NORMATIVA = [
  {
    norma: 'RAS 2000 — Resolución 0330 de 2017',
    desc: 'Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico. Establece criterios de diseño para acueductos, alcantarillados, plantas de tratamiento y disposición de aguas residuales. BIC aplica el RAS 2000 actualizado en todos los proyectos de infraestructura hídrica.',
  },
  {
    norma: 'NSR-10 (estructuras hidráulicas)',
    desc: 'Para estructuras como tanques de almacenamiento, cámaras de inspección enterradas y muros de canal, BIC aplica los criterios sísmicos de la NSR-10 que corresponden a las cargas y condiciones de Manizales, zona de amenaza sísmica alta.',
  },
  {
    norma: 'PGIRS — Plan de Gestión Integral de Residuos Sólidos',
    desc: 'El diseño de sistemas de drenaje pluvial en Manizales debe articularse con el PGIRS y el plan de obras de alcantarillado pluvial del municipio, especialmente en sectores de expansión donde la Alcaldía exige estudios de drenaje previos a la aprobación de planes parciales.',
  },
  {
    norma: 'Normas de Aguas de Manizales (AMAC)',
    desc: 'La empresa de servicios públicos de Manizales tiene criterios de diseño propios para la conexión de proyectos privados a la red pública. BIC coordina con AMAC los diseños de acometidas, redes internas y puntos de entrega de alcantarillado, asegurando compatibilidad técnica con la infraestructura existente.',
  },
]

const PROYECTOS = [
  { tipo: 'Urbanizaciones y planes parciales', desc: 'Diseño de redes domiciliarias de acueducto y alcantarillado para urbanizaciones en Manizales y Caldas: trazado, dimensionamiento, presupuesto de obra y memorias de cálculo para radicación en AMAC y Alcaldía.' },
  { tipo: 'Edificios multifamiliares y torres', desc: 'Redes hidrosanitarias internas y conexiones al sistema público. Diseño de sistemas de presión constante para torres de 5 a 20 pisos. Verificación de presiones disponibles en el punto de conexión con la red de Aguas de Manizales.' },
  { tipo: 'Parques industriales y bodegas', desc: 'Sistemas de agua contra incendio integrados con el alcantarillado pluvial industrial. Diseño de trampas de grasa, separadores de hidrocarburos y plantas de tratamiento de aguas residuales industriales conforme al PSMV de Manizales.' },
  { tipo: 'Canales y obras de drenaje vial', desc: 'Diseño hidráulico de cunetas, alcantarillas de vía, canales de guardia y obras de paso para proyectos viales en Caldas. Cálculo de caudales de diseño con periodos de retorno según norma INVIAS.' },
  { tipo: 'Acueductos veredales y rurales', desc: 'Diseño de sistemas de abastecimiento de agua por gravedad para comunidades rurales de Caldas. Captación en fuente superficial, línea de aducción, planta de tratamiento compacta y red de distribución por gravedad sin bombeo.' },
]

const ENTREGAS = [
  { icon: '📐', titulo: 'Memorias de cálculo hidráulico', desc: 'Documento con bases de diseño, parámetros adoptados, cálculos de caudal, dimensionamiento de tuberías, verificación de velocidades y presiones, y resultados de modelación. Firmado por especialista.' },
  { icon: '🗺️', titulo: 'Planos hidráulicos', desc: 'Planos en planta y perfil de redes de acueducto y alcantarillado en AutoCAD, con cotas de terreno, cotas de solera, diámetros, materiales, pendientes y localización de estructuras.' },
  { icon: '📋', titulo: 'Especificaciones técnicas de construcción', desc: 'Documento con requisitos de materiales, procedimientos de instalación, pruebas de presión, relleno de zanjas y criterios de aceptación de obra, compatibles con los pliegos de AMAC.' },
  { icon: '💻', titulo: 'Archivos de modelación', desc: 'Archivos EPANET (.inp), SewerGEMS o HEC-RAS utilizados en el diseño, entregados al cliente para futuras expansiones o modificaciones del sistema.' },
  { icon: '📊', titulo: 'Presupuesto de obra hidráulica', desc: 'APU de cada ítem de la red con cantidades de obra, precios unitarios de mercado en Manizales y resumen presupuestal por capítulo.' },
]

const FAQ = [
  {
    q: '¿Cuál es la diferencia entre diseño hidráulico y diseño hidrológico?',
    a: 'El diseño hidrológico determina cuánta agua llega a un punto: calcula caudales de lluvia, escorrentía y crecientes usando modelos de cuenca (HEC-HMS, análisis estadístico de lluvias, curvas IDF). El diseño hidráulico define cómo se conduce esa agua: dimensiona tuberías, canales, estructuras y redes bajo principios de mecánica de fluidos. En la práctica, los proyectos requieren ambos: la hidrología aporta el caudal de diseño y la hidráulica diseña la estructura que lo conduce. BIC integra los dos en un mismo proyecto cuando es necesario.',
  },
  {
    q: '¿Cuándo necesito un diseño hidráulico en Manizales?',
    a: 'Necesita diseño hidráulico en cualquiera de estos casos: (1) proyecto de urbanización o plan parcial que requiere diseño de redes domiciliarias para radicación en AMAC; (2) edificio multifamiliar o comercial que debe conectarse a las redes públicas de acueducto y alcantarillado; (3) obra de infraestructura vial con alcantarillas y canales de drenaje; (4) proyecto industrial con vertimientos que requiere planta de tratamiento; (5) obra de protección de cauces o manejo de aguas lluvias exigida por la Alcaldía de Manizales o Corpocaldas.',
  },
  {
    q: '¿Qué pasa si no cumplo el RAS 2000 en mi proyecto?',
    a: 'El incumplimiento del RAS 2000 puede generar: rechazo de la documentación técnica por parte de AMAC o la Alcaldía, lo que retrasa la licencia; problemas operativos como presiones insuficientes, taponamiento de colectores o fallas por golpe de ariete; responsabilidad legal del diseñador y constructor ante daños a terceros o al sistema público. Además, las entidades financiadoras (gobernaciones, SGP, Ministerio de Vivienda) exigen cumplimiento del RAS para girar recursos a proyectos de infraestructura.',
  },
  {
    q: '¿Cuánto cuesta un diseño hidráulico en Manizales?',
    a: 'El costo depende del tipo de proyecto, el número de unidades habitacionales o la extensión de la red, la complejidad topográfica y los entregables requeridos. Para una urbanización de 50 viviendas en Manizales, el diseño de redes de acueducto y alcantarillado puede estar entre $8.000.000 y $18.000.000 COP según el alcance. BIC envía propuesta detallada tras revisar la información básica del proyecto (plano topográfico, uso del suelo y número de unidades).',
  },
  {
    q: '¿Pueden diseñar redes en municipios fuera de Manizales?',
    a: 'Sí. BIC tiene experiencia en proyectos de acueducto y alcantarillado en varios municipios de Caldas: Villamaría, Chinchiná, Palestina, La Dorada, Riosucio y otros. También atendemos proyectos en Risaralda, Quindío y otras regiones del país. Para municipios fuera del área metropolitana de Manizales, coordinamos con la empresa de servicios públicos local y la Alcaldía el cumplimiento de los requisitos particulares de cada entidad.',
  },
  {
    q: '¿BIC tramita los permisos ante Aguas de Manizales?',
    a: 'BIC elabora toda la documentación técnica requerida para la radicación ante AMAC: memorias de cálculo, planos en planta y perfil, especificaciones técnicas y formularios de solicitud. El trámite de aprobación formal lo adelanta el propietario o constructor ante AMAC, aunque BIC acompaña el proceso respondiendo consultas técnicas de los revisores de la empresa de servicios públicos hasta obtener el visto bueno.',
  },
]

export default function DisenoHidraulicoManizales() {
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
          <SectionLabel light>Servicio especializado · Manizales · Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño Hidráulico en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Redes, Canales y Estructuras Hidráulicas</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña redes de acueducto, alcantarillado pluvial y
            sanitario, canales y estructuras hidráulicas en Manizales y Caldas. Aplicamos el
            RAS 2000 (Resolución 0330 de 2017), la NSR-10 y los estándares de Aguas de Manizales.
            Modelamos con EPANET, SewerGEMS y HEC-RAS para garantizar diseños verificables y
            aprobables ante las entidades competentes.
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
          {['RAS 2000', 'Resolución 0330/2017', 'NSR-10', 'EPANET', 'SewerGEMS', 'HEC-RAS', 'Aguas de Manizales'].map(t => (
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
          }}>¿Qué incluye el diseño hidráulico?</h2>
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

      {/* ── NORMATIVA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa aplicada: RAS 2000, NSR-10 y PGIRS</h2>
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
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                  margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SOFTWARE ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Herramientas de modelación</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Software utilizado: EPANET, SewerGEMS, HEC-RAS y Civil 3D</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {SOFTWARE.map(s => (
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
          <SectionLabel>Experiencia local</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de proyectos en Manizales y Caldas</h2>
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

      {/* ── QUÉ ENTREGA BIC ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Entregables</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué entrega BIC? Memorias, planos y especificaciones</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {ENTREGAS.map(d => (
              <div key={d.titulo} style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
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
          }}>FAQ — Diseño hidráulico en Manizales</h2>
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
            ¿Necesita diseño hidráulico en Manizales?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de proyecto (urbanización, edificio, vía, acueducto rural),
            la ubicación en Manizales o Caldas y el número de unidades o caudal estimado.
            Le enviamos propuesta técnica detallada en menos de 24 horas.
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
