import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Diseño Hidráulico en Manizales')

const seoConfig = {
  title: 'Diseño Hidráulico Manizales para Industrias, Alcaldías y Grandes Promotores | BIC',
  description: 'Diseño hidráulico en Manizales para parques industriales, alcaldías, ESP y grandes promotores: acueducto, alcantarillado, PTAR y canales. RAS 2017 / COPNIA. +57 302 477 8910',
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
  canonical: 'https://ingenieriabernal.co/diseno-hidraulico-manizales',
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
  { nombre: 'EPANET', uso: 'Modelación de redes de acueducto a presión. Análisis estatico y dinámico de presiones y caudales en nodos y tuberías.' },
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
    desc: 'Norma colombiana de diseño y construcción sismo resistente aplicada a estructuras hidráulicas como tanques elevados, estructuras de retención, muros de contención y obras de paso. El NSR-10 rige el diseño estructural de las obras que el RAS define hidráulicamente. BIC aplica NSR-10 cuando la obra requiere cálculo de cargas sísmicas, revisión de estabilidad o diseño de elementos de concreto reforzado en proyectos de agua potable y saneamiento.',
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
    a: 'El costo depende del tipo de proyecto, el número de unidades habitacionales o la extensión de la red, la complejidad topográfica y los entregables requeridos. Para un parque industrial o un proyecto de infraestructura municipal, el rango típico está entre $12.000.000 y $45.000.000 COP según el alcance y los entregables requeridos. BIC envía propuesta detallada tras revisar la información básica del proyecto (plano topográfico, uso del suelo y capacidad instalada).',
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
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)', lineHeight: 1.65,
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
          <div style={{ marginBottom: 36, padding: '20px 24px', background: '#EBF8FF', borderLeft: '4px solid #17A2B8', borderRadius: '0 4px 4px 0' }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 13, marginBottom: 12 }}>
              Proyectos que atendemos:
            </p>
            <ul style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 14, lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
              <li>Parques industriales, bodegas y naves logísticas</li>
              <li>Alcaldías y ESP con proyectos SGR o Plan de Inversiones</li>
              <li>Grandes promotores en zonas de expansión urbana</li>
              <li>Proyectos agroindustriales e infraestructura vial</li>
              <li>Predios de más de 5 ha que requieren estudios de drenaje</li>
            </ul>
          </div>
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
            fontSize: 28, marginBottom: 32 }}>Documentos entregados por BIC</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#374151' }}>✓ Memoria de cálculo hidráulico — RAS 2017 (Res. 0330)</li>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#374151' }}>✓ Planos técnicos en AutoCAD firmados por ingeniero matriculado COPNIA</li>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#374151' }}>✓ Modelo EPANET 2.2 o SewerGEMS con resultados de simulación hidráulica</li>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb', color: '#374151' }}>✓ Informe técnico con metodología, parámetros de diseño y justificación normativa</li>
            <li style={{ padding: '12px 0', color: '#374151' }}>✓ Presupuesto de obra con APUs y cantidades</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
