import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito consultoría en obras hidráulicas: bocatoma / canal / encauzamiento / protección fluvial')

const seoConfig = {
  title: 'Obras Hidráulicas Colombia: Bocatomas, Canales, Encauzamiento | BIC',
  description: 'BIC diseña obras hidráulicas en Colombia: bocatomas, canales de conducción, encauzamientos, diques de protección fluvial, estructuras de control. Modelación HEC-RAS 2D, memorias de cálculo firmadas COPNIA. Municipios, ESP, constructoras e infraestructura.',
  keywords: [
    'obras hidráulicas Colombia',
    'diseño bocatoma Colombia',
    'diseño canal de conducción Colombia',
    'encauzamiento río Colombia',
    'obra de protección fluvial Colombia',
    'dique protección inundación Colombia',
    'estructura hidráulica Colombia',
    'diseño represa Colombia',
    'obras control torrencial Colombia',
    'gaviones Colombia diseño',
    'ingeniero hidráulico obras Colombia',
    'consultor bocatoma acueducto Colombia',
    'estudio hidrológico obra hidráulica',
    'diseño disipador energía hidráulica',
    'obras río Colombia ingeniería',
    'HEC-RAS diseño obra hidráulica',
  ],
  canonical: 'https://ingenieriabernal.co/obras-hidraulicas-colombia',
}

const OBRAS = [
  {
    icon: '🔵',
    tipo: 'Bocatomas y Captaciones',
    desc: 'Diseño hidráulico de bocatomas laterales, de fondo y sumergidas para acueductos municipales, distritos de riego e industria. Incluye análisis de sedimentos, rejillas de captación, cámara de aquietamiento y estructura de control de caudal. Memoria de cálculo conforme al RAS 2017 y Resolución 0330/2017.',
    clientes: ['Empresas de acueducto y alcantarillado (ESP)', 'Alcaldías y municipios', 'Distritos de riego', 'Empresas mineras'],
    keywords: ['diseño bocatoma Colombia', 'bocatoma acueducto rural', 'captación agua potable diseño'],
  },
  {
    icon: '〰️',
    tipo: 'Canales de Conducción y Distribución',
    desc: 'Diseño de canales abiertos, cubiertos y entubados para conducción de agua potable, riego, drenaje agrícola y control de aguas lluvias. Cálculo de sección hidráulica óptima, pendientes, revestimientos y obras de arte (caídas, rápidas, aforadores). Modelación con HEC-RAS y EPANET.',
    clientes: ['Empresas agropecuarias', 'Municipios con proyectos de riego', 'Constructoras de infraestructura vial', 'Empresas de servicios públicos'],
    keywords: ['canal de conducción Colombia', 'diseño canal riego Colombia', 'canal drenaje urbano'],
  },
  {
    icon: '🌊',
    tipo: 'Encauzamiento y Corrección de Torrentes',
    desc: 'Diseño de obras de encauzamiento para ríos y quebradas: muros de encauzamiento, rectificaciones de cauce, obras de consolidación de fondo y control de socavación. Modelación HEC-RAS 2D para verificar el comportamiento hidráulico del cauce con y sin las obras propuestas.',
    clientes: ['Municipios con ríos en zona urbana', 'Constructoras en obras lineales', 'Empresas de infraestructura vial', 'CAR y entidades ambientales'],
    keywords: ['encauzamiento río Colombia', 'corrección torrente Colombia', 'obras cauce Colombia'],
  },
  {
    icon: '🛡️',
    tipo: 'Diques y Obras de Protección contra Inundaciones',
    desc: 'Diseño de jarillones, diques de tierra y estructuras de protección fluvial para reducir el riesgo de inundación en zonas urbanas, rurales e industriales. Incluye análisis de estabilidad, diseño de filtros y drenes, y modelación HEC-RAS 2D para verificar la eficacia de la protección para distintos períodos de retorno.',
    clientes: ['Alcaldías y Unidades de Gestión del Riesgo', 'Propietarios de predios en zonas de inundación', 'Empresas con infraestructura en zona inundable', 'Constructoras'],
    keywords: ['dique protección Colombia', 'obra protección inundación', 'jarillón diseño Colombia'],
  },
  {
    icon: '🪨',
    tipo: 'Gaviones, Muros y Obras de Estabilización',
    desc: 'Diseño de estructuras de gaviones, muros de contención y obras de estabilización de taludes en zonas de erosión hídrica o amenaza por remoción en masa. Integración del análisis hidrológico con el geotécnico para obras en zonas de ladera con corrientes de agua.',
    clientes: ['Municipios con problemas de erosión', 'Constructoras viales', 'Propietarios de predios en ladera', 'CAR y UNGRD'],
    keywords: ['gaviones Colombia', 'muro contención hidráulica', 'estabilización ladera Colombia'],
  },
  {
    icon: '⚡',
    tipo: 'Disipadores de Energía y Estructuras de Control',
    desc: 'Diseño de disipadores de energía (trampolines, cuencos amortiguadores, rápidas escalonadas) para obras hidráulicas con gradiente hidráulico elevado. Cálculo hidráulico de estructuras de caída, pasos de vía, alcantarillas y sifones.',
    clientes: ['Constructoras de obras hidráulicas', 'Empresas de acueducto', 'Proyectos de infraestructura vial', 'Entidades de regalías y SGR'],
    keywords: ['disipador energía hidráulica Colombia', 'diseño rápida hidráulica', 'alcantarilla hidráulica diseño'],
  },
]

const METODOLOGIA = [
  {
    paso: '01', titulo: 'Análisis Hidrológico de la Cuenca',
    desc: 'Caracterización morfométrica de la cuenca, análisis de información pluviométrica del IDEAM, cálculo de caudales de diseño para períodos de retorno de 10, 25, 50 y 100 años mediante HEC-HMS, método racional y curvas IDF. Esta etapa define los caudales con los que se diseña la obra.',
  },
  {
    paso: '02', titulo: 'Modelación Hidráulica HEC-RAS 2D',
    desc: 'Simulación bidimensional del flujo en el cauce y la llanura de inundación. Verificación del comportamiento hidráulico actual y modelación de la obra propuesta para confirmar que cumple el objetivo de diseño (encauzamiento, protección, conducción). Los resultados se mapean en QGIS y ArcGIS.',
  },
  {
    paso: '03', titulo: 'Diseño Hidráulico de la Estructura',
    desc: 'Dimensionamiento de la sección hidráulica de la obra, cálculo de velocidades, fuerzas hidrostáticas e hidrodinámicas, análisis de estabilidad y verificación de la capacidad de conducción o protección. Software: HEC-RAS, EPANET, AutoCAD Civil 3D.',
  },
  {
    paso: '04', titulo: 'Memoria de Cálculo y Planos Constructivos',
    desc: 'Documento técnico completo con toda la metodología, resultados, análisis de alternativas y dimensionamiento final. Planos constructivos en AutoCAD con detalles de armado y especificaciones de materiales. Presupuesto con APU y especificaciones técnicas generales y particulares.',
  },
  {
    paso: '05', titulo: 'Acompañamiento en Permisos y Licitación',
    desc: 'Apoyo técnico para la obtención de permisos ambientales ante la CAR (concesiones de agua, permisos de ocupación de cauce). Participación en procesos de licitación pública como soporte técnico al contratante o contratista.',
  },
]

const FAQ = [
  {
    q: '¿Qué es una bocatoma y cuándo se necesita un ingeniero para diseñarla?',
    a: 'Una bocatoma es la estructura hidráulica que capta agua directamente de un río, quebrada o embalse para conducirla a un sistema de abastecimiento de agua potable, riego o uso industrial. Se necesita un ingeniero especialista cuando se va a construir o rehabilitar el sistema de captación, cuando la bocatoma ha fallado o es insuficiente, cuando se requiere ampliar la capacidad de captación, o cuando las autoridades ambientales exigen estudios técnicos para renovar la concesión de aguas. BIC diseña bocatomas para acueductos municipales y sistemas industriales con modelación hidráulica incluida.',
  },
  {
    q: '¿BIC diseña obras hidráulicas para municipios pequeños y proyectos de regalías?',
    a: 'Sí. BIC tiene experiencia directa en formulación de proyectos de agua y saneamiento con recursos del SGR (regalías) usando el MGA-Web del DNP. Los proyectos de obras hidráulicas financiados con regalías requieren diseños técnicos detallados y memorias de cálculo como parte del expediente técnico. BIC elabora el diseño completo y la documentación técnica necesaria para radicar el proyecto ante el OCAD.',
  },
  {
    q: '¿Qué diferencia hay entre un encauzamiento y una canalización?',
    a: 'Técnicamente son distintos. El encauzamiento dirige el flujo de un río o quebrada dentro de una sección definida usando obras de borde (muros, diques, gaviones) sin impermeabilizar el fondo — preserva el ecosistema fluvial. La canalización reemplaza el cauce natural por una sección artificial (generalmente en concreto) eliminando la morfología natural. El encauzamiento es más aceptado ambientalmente y exigido por las CAR para obras urbanas. BIC diseña ambos según lo que requiera el proyecto y los permisos ambientales.',
  },
  {
    q: '¿Cuánto cuesta el diseño de una bocatoma o un encauzamiento en Colombia?',
    a: 'El costo depende de la magnitud del cauce, la longitud de la obra, la disponibilidad de información topográfica e hidrológica y la complejidad de los permisos ambientales. Para una bocatoma de acueducto municipal de tamaño medio, el diseño puede oscilar entre $18.000.000 y $45.000.000 COP. Para un encauzamiento en zona urbana el rango es más amplio dependiendo de la longitud. BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo.',
  },
  {
    q: '¿BIC tramita los permisos ante la CAR para las obras hidráulicas?',
    a: 'BIC elabora los estudios técnicos requeridos por la CAR para los permisos de ocupación de cauce y concesiones de agua: estudio hidrológico, modelación hidráulica y memoria descriptiva del proyecto. La radicación y el seguimiento del trámite ante la entidad lo hace el propietario del proyecto (empresa, alcaldía, particular) pero BIC puede asesorar y atender los requerimientos técnicos que la CAR formule.',
  },
]

const ENTIDADES = [
  'Municipios y alcaldías', 'Empresas de Servicios Públicos (ESP)',
  'Gobernaciones y entidades departamentales', 'Constructoras de infraestructura',
  'Empresas mineras y agroindustriales', 'Proyectos financiados con regalías SGR',
  'Entidades CAR y UNGRD', 'Promotores inmobiliarios en zonas de amenaza',
]

export default function ObrasHidraulicasColombia() {
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
          <SectionLabel light>Infraestructura hídrica · Todo Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Obras Hidráulicas en Colombia:<br />
            <span style={{ color: '#17A2B8' }}>Bocatomas, Canales, Encauzamientos y Protección Fluvial</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.75, marginBottom: 32, maxWidth: 740 }}>
            BIC Bernal Ingeniería Consultores diseña obras hidráulicas mayores con modelación HEC-RAS 2D,
            memorias de cálculo firmadas por especialista COPNIA y planos constructivos en AutoCAD.
            Municipios, empresas de servicios públicos, constructoras de infraestructura y proyectos de regalías
            en todo el territorio nacional.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar sobre mi proyecto</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
            {['HEC-RAS 2D','HEC-HMS','EPANET','AutoCAD Civil 3D','QGIS','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE OBRAS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Líneas de servicio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Tipos de obras hidráulicas que diseña BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde la captación de agua hasta su conducción, control y protección contra inundaciones.
            Cada diseño parte de un análisis hidrológico real con datos del IDEAM y modelación bidimensional.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 24 }}>
            {OBRAS.map(o => (
              <div key={o.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 26 }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{o.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: '#002A50' }}>{o.tipo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{o.desc}</p>
                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>CLIENTES TÍPICOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#555', fontSize: 13 }}>
                    {o.clientes.map(c => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── METODOLOGÍA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            Metodología BIC: de la hidrología al plano constructivo
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {METODOLOGIA.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20, position: 'relative', paddingBottom: 24 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 13,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < METODOLOGIA.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#e2e8f0', marginTop: 8, minHeight: 24 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.7, fontSize: 14 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ENTIDADES ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 24 }}>
            Clientes que contratan diseño de obras hidráulicas
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
            {ENTIDADES.map(e => (
              <div key={e} style={{
                background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 8, padding: '8px 16px',
                color: '#003B6F', fontWeight: 600, fontSize: 14,
              }}>{e}</div>
            ))}
          </div>
          <p style={{ color: '#555', lineHeight: 1.75, marginTop: 20 }}>
            Los proyectos de obras hidráulicas con financiación pública (regalías SGR, presupuesto municipal,
            programas del Ministerio de Vivienda) requieren diseños técnicos con firma de especialista COPNIA.
            BIC elabora el expediente técnico completo para licitación o contratación directa.
          </p>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            FAQ — Obras hidráulicas en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 10, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50' }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #002A50, #004F96)',
        padding: '64px 24px', textAlign: 'center',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Tiene un proyecto de obra hidráulica?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
            Cuéntenos el tipo de obra, la región y el estado del proyecto.
            BIC le envía una propuesta técnica y económica en menos de 24 horas.
            Primera consulta sin costo.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '14px 32px',
              background: '#25D366', color: '#fff',
              borderRadius: 8, fontWeight: 700, fontSize: 16,
              textDecoration: 'none',
            }}
          >
            📱 Chatear por WhatsApp · +57 302 477 8910
          </a>
        </div>
      </section>
    </>
  )
}
