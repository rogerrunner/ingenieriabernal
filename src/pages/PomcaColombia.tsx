import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito información sobre formulación de POMCA en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'POMCA Colombia — Plan de Ordenación y Manejo de Cuencas | BIC',
  description: 'Formulación y ajuste de POMCA en Colombia. Fase diagnóstico, prospectiva, zonificación ambiental. Decreto 1076/2015, Ley 388/1997. Consultoría especializada desde Manizales.',
  keywords: [
    'POMCA Colombia',
    'plan ordenación manejo cuencas Colombia',
    'formulación POMCA Colombia',
    'POMCA Decreto 1076 2015',
    'POMCA CORPOCALDAS',
    'zonificación ambiental cuencas Colombia',
    'gestión cuencas hidrográficas Colombia',
    'diagnóstico cuenca hidrográfica Colombia',
    'ajuste POMCA Colombia',
    'POMCA Eje Cafetero',
    'consultoría POMCA Colombia',
    'ingeniería ambiental cuencas Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/pomca-colombia',
}

const FASES = [
  {
    icon: '🔍',
    fase: 'Aprestamiento',
    desc: 'Identificación y caracterización de los actores sociales, institucionales y productivos de la cuenca. Se elabora la estrategia de participación, el plan de comunicaciones y la identificación de fuentes de información disponibles. En esta fase se definen los alcances técnicos del proceso y se constituyen los consejos de cuenca.',
    actores: ['CAR/CORPOCALDAS (coordinación)', 'Alcaldías municipales', 'Comunidades y JAC', 'Sector productivo'],
  },
  {
    icon: '📊',
    fase: 'Diagnóstico',
    desc: 'Caracterización integral de la cuenca en sus dimensiones biofísica (geología, suelos, hidrología, cobertura vegetal, biodiversidad), socioeconómica (demografía, actividades productivas, servicios públicos) y cultural. Se identifican las problemáticas ambientales, los conflictos de uso del suelo y el estado actual de los ecosistemas estratégicos.',
    actores: ['Profesionales biofísica y SIG', 'Componente socioeconómico', 'Talleres participativos', 'Información IDEAM/IGAC'],
  },
  {
    icon: '🔭',
    fase: 'Prospectiva y Zonificación',
    desc: 'Construcción de escenarios futuros para la cuenca: escenario tendencial, escenario apuesta y escenario de referencia. Se realiza la zonificación ambiental que define las categorías de uso del suelo (preservación, restauración, uso sostenible, uso múltiple) y establece la línea base para la gestión del riesgo hídrico en la cuenca.',
    actores: ['Talleres prospectiva comunitaria', 'Análisis multicriterio SIG', 'Gestión del riesgo', 'Ecosistemas estratégicos'],
  },
  {
    icon: '📋',
    fase: 'Formulación',
    desc: 'Definición del componente programático del POMCA: objetivo general, programas, proyectos y metas de corto, mediano y largo plazo. Se establece el presupuesto por fuente de financiación (SGR, PGN, recursos propios CAR), indicadores de seguimiento y las medidas de manejo para cada categoría de la zonificación ambiental.',
    actores: ['Plan de inversiones CAR', 'Recursos SGR y PGN', 'Indicadores SIAC', 'Mesa POMCA'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Caracterización biofísica de la cuenca',
    desc: 'Análisis del clima (precipitación, temperatura, evapotranspiración), hidrología (caudales medios, crecientes, estiajes), geología y geomorfología (litología, unidades de terreno, procesos erosivos), suelos (clasificación, capacidad de uso, conflictos) y cobertura vegetal (clasificación CORINE Land Cover adaptada para Colombia, ecosistemas estratégicos). Se utilizan las bases de datos del IDEAM, IGAC, Corporaciones y sensores remotos.',
    herramientas: ['ArcGIS / QGIS (cartografía)', 'IDEAM (climatología e hidrología)', 'IGAC (suelos y cartografía base)', 'Clasificación CORINE Land Cover'],
    resultado: 'Documento diagnóstico biofísico + cartografía temática 1:25.000',
  },
  {
    paso: '02',
    titulo: 'Análisis socioeconómico y gestión del riesgo',
    desc: 'Caracterización demográfica (DANE, proyecciones municipales), actividades productivas, presión sobre los recursos naturales, servicios ecosistémicos y conflictos de uso del suelo. Evaluación de la amenaza por inundación, avenidas torrenciales y movimientos en masa en la cuenca. Identificación de poblaciones en riesgo y zonas de intervención prioritaria según la Ley 1523/2012.',
    herramientas: ['DANE (demografía)', 'Ley 1523/2012 (gestión del riesgo)', 'HEC-RAS / FLO-2D (modelación)', 'PDGR municipales'],
    resultado: 'Capítulo socioeconómico + mapa de amenaza y riesgo cuenca',
  },
  {
    paso: '03',
    titulo: 'Zonificación ambiental y escenarios',
    desc: 'Integración de las capas biofísicas, socioeconómicas y de riesgo para construir el mapa de zonificación ambiental de la cuenca con las categorías definidas por el Decreto 1076/2015: áreas de preservación, restauración, uso sostenible y uso múltiple. Se construyen los escenarios prospectivos (tendencial y apuesta) mediante talleres participativos con los actores de la cuenca.',
    herramientas: ['ArcGIS (álgebra de mapas)', 'Decreto 1076/2015 (categorías)', 'Talleres participativos', 'Análisis multicriterio'],
    resultado: 'Mapa zonificación ambiental + escenario apuesta concertado',
  },
  {
    paso: '04',
    titulo: 'Plan de medidas y componente programático',
    desc: 'Formulación del plan de manejo con las medidas específicas por categoría de zonificación: restauración ecológica, protección de nacimientos, regulación hídrica, reducción del riesgo, manejo sostenible de sistemas productivos. Se define el componente programático con programas, proyectos, metas, indicadores y fuentes de financiación (SGR, PGN, recursos propios CAR, cooperación internacional).',
    herramientas: ['MGA-Web (formulación proyectos)', 'Marco lógico', 'Indicadores SIAC', 'Planes de inversión CAR'],
    resultado: 'Documento POMCA completo + plan de inversiones plurianual',
  },
]

const NORMATIVA = [
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — Parte 3, Título 3: régimen de ordenación y manejo de cuencas hidrográficas, fases del POMCA y actores' },
  { codigo: 'Ley 99/1993', descripcion: 'Ley general ambiental — funciones de las CAR en la ordenación y manejo de cuencas hidrográficas' },
  { codigo: 'Ley 388/1997', descripcion: 'Ley de Desarrollo Territorial — articulación del POMCA con los POT municipales y normas de uso del suelo' },
  { codigo: 'Ley 1523/2012', descripcion: 'Política Nacional de Gestión del Riesgo — integración de la gestión del riesgo en los POMCA' },
  { codigo: 'Política Nacional para la Gestión Integral del Recurso Hídrico', descripcion: 'MADS — marco de referencia para la ordenación de cuencas y la gestión del agua en Colombia' },
  { codigo: 'Resolución 1907/2013', descripcion: 'MADS — guía técnica para la formulación de los planes de ordenación y manejo de cuencas hidrográficas' },
]

const FAQ = [
  {
    q: '¿Qué es un POMCA y cuándo es obligatorio en Colombia?',
    a: 'El POMCA (Plan de Ordenación y Manejo de Cuencas Hidrográficas) es el instrumento de planificación y administración de una cuenca hidrográfica en Colombia, definido en el Decreto 1076/2015. Es formulado y coordinado por la Corporación Autónoma Regional competente con participación de municipios, comunidades y sector productivo. El POMCA es determinante para el ordenamiento territorial — los POT municipales deben armonizarse con él — y condiciona las licencias ambientales, concesiones de agua y proyectos de infraestructura en la cuenca. Su formulación es obligatoria para cuencas declaradas en ordenación por la CAR.',
  },
  {
    q: '¿Cuánto tiempo toma formular un POMCA en Colombia?',
    a: 'La formulación completa de un POMCA en Colombia requiere entre 18 y 36 meses dependiendo del tamaño de la cuenca, la disponibilidad de información base y la complejidad del proceso participativo. Las fases de aprestamiento y diagnóstico suelen tomar entre 6 y 12 meses; la prospectiva y zonificación entre 4 y 8 meses; y la formulación del plan de manejo entre 4 y 8 meses. BIC puede participar como consultor técnico en cualquiera de las fases o en el proceso completo.',
  },
  {
    q: '¿Cómo afecta el POMCA a un proyecto de construcción o urbanismo?',
    a: 'El POMCA es determinante ambiental de los POT municipales, lo que significa que las normas del POMCA prevalecen sobre el ordenamiento urbano local en todo lo relacionado con la gestión hídrica. Si su predio está en una cuenca con POMCA adoptado, las categorías de zonificación ambiental del POMCA (especialmente las áreas de preservación y las zonas de riesgo) afectan directamente qué puede construir y qué permisos ambientales necesita. BIC revisa la compatibilidad de su proyecto con el POMCA vigente como parte de los estudios de viabilidad ambiental.',
  },
]

const ARTICULOS = [
  { href: '/blog/pomca-colombia', title: 'POMCA en Colombia: Plan de Ordenación y Manejo de Cuencas' },
  { href: '/blog/estudio-hidrologico-decreto-1807', title: 'Estudio Hidrológico para Decreto 1807: Qué incluye y cuánto cuesta' },
  { href: '/blog/estudio-amenaza-inundacion', title: 'Estudio de amenaza por inundación en Colombia: paso a paso' },
]

export default function PomcaColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Planificación ambiental · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            POMCA en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Formulación de Planes de Ordenación y Manejo de Cuencas Hidrográficas — Decreto 1076/2015
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores apoya la formulación y ajuste de POMCA en Colombia:
            diagnóstico biofísico y socioeconómico, zonificación ambiental, escenarios prospectivos y
            plan de medidas de manejo. Coordinamos con CAR/CORPOCALDAS y acompañamos los procesos
            participativos con municipios y comunidades desde Manizales.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar sobre POMCA</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Decreto 1076/2015','Ley 388/1997','Zonificación ambiental','CORPOCALDAS','Gestión del riesgo','SIG · ArcGIS'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── FASES ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Fases del POMCA</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿En qué fase del POMCA puede apoyarle BIC?
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {FASES.map(f => (
              <div key={f.fase} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{f.fase}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{f.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>ACTORES CLAVE</p>
                  <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                    {f.actores.map(a => <li key={a}>{a}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Componentes técnicos</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo BIC aborda la formulación técnica del POMCA
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#002A50' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3e0ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>ENTREGABLE</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige los POMCA en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 11,
                }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <section style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1a3c5e', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Artículos relacionados</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ARTICULOS.map(a => (
                <li key={a.href}>
                  <a href={a.href} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', fontSize: 15 }}>→ {a.title}</a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios relacionados con gestión hídrica y planificación ambiental
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Gestión riesgo hídrico Colombia', href: '/gestion-riesgo-hidrico' },
              { label: 'Gestión riesgo taludes Colombia', href: '/gestion-riesgo-taludes-colombia' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Modelación hidráulica Colombia', href: '/modelacion-hidraulica-colombia' },
              { label: 'Licencia de urbanismo', href: '/licencia-de-urbanismo' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Preguntas sobre POMCA en Colombia
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌿</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita apoyo técnico en la formulación<br />de un POMCA en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos la cuenca, la CAR competente y la fase en la que se encuentra el proceso.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Atención en todo Colombia.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              }}
            >
              📱 Consultar por WhatsApp · +57 302 477 8910
            </a>
            <a
              href="/contacto"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: 'transparent', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
