import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, estoy en el Eje Cafetero y necesito ingeniería hidráulica. ¿Pueden asesorarme?')

const seoConfig = {
  title: 'Ingeniería Hidráulica en Manizales y el Eje Cafetero | BIC',
  description: 'BIC es la firma de ingeniería hidráulica con base en Manizales. Bocatomas, canales, encauzamientos, estudios hidrológicos y gestión del riesgo en Caldas, Risaralda y Quindío. Ante CORPOCALDAS, CARDER y CRQ. Cotización en 24 horas.',
  keywords: [
    'ingeniería hidráulica Manizales',
    'empresa ingeniería hidráulica Caldas',
    'ingeniería hidráulica Eje Cafetero',
    'firma hidráulica Manizales',
    'consultoría hidráulica Manizales',
    'bocatoma Manizales Caldas',
    'encauzamiento río Caldas',
    'estudio hidrológico Manizales',
    'modelación hidráulica Manizales',
    'CORPOCALDAS ingeniería hidráulica',
    'CARDER ingeniería hidráulica',
    'obras hidráulicas Eje Cafetero',
    'diseño hidráulico Pereira Risaralda',
    'gestión riesgo hídrico Manizales',
    'consultor CORPOCALDAS obras cauce',
    'ingeniería civil Manizales obras hidráulicas',
  ],
  canonical: 'https://ingenieriabernal.co/ingenieria-hidraulica-manizales',
}

const SERVICIOS = [
  {
    icon: '💧',
    servicio: 'Bocatomas y Captaciones',
    desc: 'Diseño de bocatomas laterales, tipo Tirol y de fondo para acueductos municipales, sistemas de riego y uso industrial en Caldas, Risaralda y Quindío. Los ríos del Eje Cafetero son torrenciales con alta carga de sedimentos — BIC conoce su comportamiento hidrológico y diseña bocatomas que funcionan todo el año.',
    hr: '/bocatomas-colombia',
    label: 'Ver detalles',
  },
  {
    icon: '🌊',
    servicio: 'Encauzamiento de Ríos y Quebradas',
    desc: 'El Eje Cafetero tiene decenas de municipios con ríos y quebradas que cruzan zonas urbanas y generan riesgo de inundación. BIC diseña obras de encauzamiento (muros, gaviones, espigones) con modelación HEC-RAS 2D y tramita el permiso de ocupación de cauce ante CORPOCALDAS, CARDER o CRQ.',
    hr: '/encauzamiento-rios-colombia',
    label: 'Ver detalles',
  },
  {
    icon: '🌾',
    servicio: 'Canales de Riego y Conducción',
    desc: 'La zona cafetera tiene una larga tradición de sistemas de riego para cultivos de café, plátano y cítricos. BIC diseña canales de riego agrícola y sistemas de conducción de agua para distritos de usuarios y propietarios de fincas en toda la región.',
    hr: '/diseno-canal-riego-colombia',
    label: 'Ver detalles',
  },
  {
    icon: '📊',
    servicio: 'Estudios Hidrológicos y HEC-RAS',
    desc: 'Análisis hidrológico de cuencas, caudales de diseño para períodos de retorno de 10 a 500 años, modelación unidimensional y bidimensional con HEC-RAS para estudios de inundabilidad, diseño de obras y tramitación de permisos ante las CAR del Eje Cafetero.',
    hr: '/servicios/estudios-hidrologicos',
    label: 'Ver detalles',
  },
  {
    icon: '⚠️',
    servicio: 'Gestión del Riesgo Hídrico',
    desc: 'Estudios de amenaza y riesgo por inundación y movimiento en masa para licencias de construcción, planes de ordenamiento y proyectos en zonas de amenaza. BIC elabora los estudios de detalle que exige el Decreto 1807 de 2014 y la norma municipal.',
    hr: '/gestion-riesgo-hidrico',
    label: 'Ver detalles',
  },
  {
    icon: '🏙️',
    servicio: 'Urbanizaciones y Planes Parciales',
    desc: 'Diseño hidrosanitario, redes de alcantarillado pluvial y sanitario, y estudios de riesgo hídrico para urbanizaciones y planes parciales en el Eje Cafetero. BIC integra el componente hidráulico en el proceso completo de licencia de urbanismo.',
    hr: '/urbanizacion-colombia',
    label: 'Ver detalles',
  },
]

const COBERTURA = [
  {
    departamento: 'Caldas',
    corporacion: 'CORPOCALDAS',
    ciudades: ['Manizales', 'Villamaría', 'Chinchiná', 'Palestina', 'Neira', 'Salamina', 'La Dorada', 'Viterbo', 'Anserma', 'Riosucio'],
    especializacion: 'Ríos torrenciales de ladera, cuencas del Cauca y Magdalena, zona de alta amenaza sísmica',
  },
  {
    departamento: 'Risaralda',
    corporacion: 'CARDER',
    ciudades: ['Pereira', 'Dosquebradas', 'Santa Rosa de Cabal', 'Cartago (Nº)', 'La Virginia', 'Marsella', 'Apía'],
    especializacion: 'Cuenca del Otún y Consotá, ríos urbanos de Pereira, zona de expansión urbana norte',
  },
  {
    departamento: 'Quindío',
    corporacion: 'CRQ',
    ciudades: ['Armenia', 'Calarcá', 'Montenegro', 'La Tebaida', 'Circasia', 'Salento'],
    especializacion: 'Cuencas del Quindío y Roble, suelo de expansión urbana de Armenia, riesgo en ladera',
  },
  {
    departamento: 'Norte del Valle del Cauca',
    corporacion: 'CVC',
    ciudades: ['Cartago', 'Alcalá', 'Ansermanuevo', 'Obando'],
    especializacion: 'Corredor del río La Vieja, obras de protección ribereña, sistemas de riego',
  },
]

const PORQUE_BIC = [
  {
    titulo: 'Conocimiento local de los ríos del Eje Cafetero',
    desc: 'Los ríos del Eje Cafetero tienen características hidrológicas muy específicas: alta torrencialidad, rápida respuesta a la lluvia, gran carga de sedimentos en temporadas de invierno y variación estacional marcada. BIC tiene experiencia directa en el comportamiento hidrológico de las cuencas principales de Caldas, Risaralda y Quindío — un conocimiento que no se puede reemplazar con herramientas de escritorio.',
  },
  {
    titulo: 'Relación establecida con las CAR de la región',
    desc: 'CORPOCALDAS, CARDER y CRQ son las autoridades ambientales ante quienes se tramitan los permisos de ocupación de cauce, las concesiones de aguas y los conceptos técnicos para proyectos en zonas de amenaza en el Eje Cafetero. BIC conoce los requerimientos técnicos específicos de cada corporación, sus formatos de radicación y los tiempos reales de respuesta — lo que evita re-trabajos y demoras en los trámites.',
  },
  {
    titulo: 'Cubrimiento completo del Eje Cafetero',
    desc: 'BIC atiende proyectos en los tres departamentos y en todos los municipios del Eje Cafetero. Para proyectos en municipios remotos, BIC coordina con topógrafos locales certificados y hace las visitas de campo focalizadas que requiere el proyecto. La mayor parte del trabajo técnico (hidrología, modelación, diseño, memorias) se hace desde Manizales con los datos del proyecto.',
  },
  {
    titulo: 'Experiencia en proyectos con financiación SGR',
    desc: 'Los municipios del Eje Cafetero reciben recursos del Sistema General de Regalías para proyectos de agua potable, saneamiento y gestión del riesgo. BIC tiene experiencia en la formulación de proyectos SGR (MGA-Web del DNP), incluyendo el diseño técnico, las memorias de cálculo y la documentación del expediente técnico que exige el OCAD.',
  },
]

const FAQ = [
  {
    q: '¿BIC solo trabaja en Manizales o en todo el Eje Cafetero?',
    a: 'BIC trabaja en todo el Eje Cafetero — Caldas, Risaralda y Quindío — y también en Norte del Valle del Cauca (Cartago, corredor del La Vieja). La firma tiene su base de operaciones en Manizales pero ejecuta proyectos en todos los municipios de la región. Para proyectos en áreas remotas, BIC coordina topógrafos y personal local certificado y hace las visitas de campo que el proyecto requiere. El análisis hidrológico, la modelación hidráulica, los diseños y las memorias de cálculo se elaboran desde Manizales.',
  },
  {
    q: '¿Qué tipo de proyectos hidráulicos son más frecuentes en el Eje Cafetero?',
    a: 'En el Eje Cafetero los proyectos hidráulicos más frecuentes que BIC atiende son: (1) bocatomas para acueductos rurales y municipales — la mayoría de los sistemas de acueducto rurales de la región captan de quebradas y muchos tienen bocatomas que necesitan rehabilitación o rediseño; (2) encauzamiento de quebradas urbanas — varios municipios tienen quebradas que cruzan zonas pobladas y generan inundaciones recurrentes; (3) estudios de amenaza por inundación para licencias de construcción — el Decreto 1807 de 2014 exige estos estudios en zonas con amenaza alta o media; (4) diseño hidrosanitario de urbanizaciones — el crecimiento del Eje Cafetero impulsa muchos proyectos de vivienda.',
  },
  {
    q: '¿Qué es CORPOCALDAS y para qué se necesita su concepto?',
    a: 'CORPOCALDAS (Corporación Autónoma Regional de Caldas) es la autoridad ambiental que regula el uso del agua, la ocupación de cauces y el manejo ambiental en el departamento de Caldas. Para hacer cualquier obra en un cauce de río o quebrada en Caldas (bocatomas, encauzamientos, canales), o para captar agua de fuentes superficiales, se requieren permisos de CORPOCALDAS: la concesión de aguas y/o el permiso de ocupación de cauce. BIC elabora los estudios técnicos requeridos para estos trámites y conoce los procedimientos y tiempos específicos de CORPOCALDAS.',
  },
  {
    q: '¿Qué diferencia hay entre estudios hidrológicos para la CAR y para una licencia de construcción?',
    a: 'Son estudios con propósitos diferentes. El estudio hidrológico para la CAR (para concesión de aguas u ocupación de cauce) calcula los caudales de la fuente, la oferta hídrica y los caudales de diseño de la obra que se quiere construir. El estudio de amenaza por inundación para licencia de construcción (Decreto 1807 de 2014) determina si el predio donde se quiere construir está en zona de amenaza por inundación o movimiento en masa, y en qué grado — para que el Curador Urbano pueda determinar si puede licenciar el proyecto y con qué condiciones. BIC hace ambos tipos de estudio.',
  },
  {
    q: '¿Cuánto demora un estudio hidrológico en el Eje Cafetero?',
    a: 'Para un estudio hidrológico de cuenca para diseño de obra (bocatoma, canal, encauzamiento) el plazo típico es de 3 a 5 semanas, dependiendo de la disponibilidad de información hidrométrica del IDEAM para el área del proyecto y de si se requiere levantamiento topográfico. Para un estudio de amenaza por inundación en predio (para licencia de construcción), el plazo es de 2 a 4 semanas si el predio tiene cartografía disponible y topografía reciente. BIC puede comprometerse con plazos específicos según el proyecto.',
  },
]

export default function IngenieriaHidraulicaManizales() {
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
          <SectionLabel light>Manizales · Caldas · Eje Cafetero</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Ingeniería Hidráulica en Manizales<br />y el Eje Cafetero
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            La firma de ingeniería hidráulica con base en Manizales — bocatomas, encauzamientos, estudios hidrológicos y gestión del riesgo en Caldas, Risaralda y Quindío
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores opera desde Manizales con cobertura en todo el Eje Cafetero.
            Conocemos el comportamiento hidrológico de los ríos de la región, los requerimientos específicos
            de CORPOCALDAS, CARDER y CRQ, y las condiciones topográficas y geológicas del paisaje cafetero.
            Bocatomas, encauzamientos, canales, estudios hidrológicos, modelación HEC-RAS y gestión del riesgo
            en Caldas, Risaralda, Quindío y Norte del Valle.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Solicitar consulta</Btn>
            <Btn variant="outline" href="/obras-hidraulicas-colombia" dark>Ver portafolio de obras</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Manizales','Caldas','Risaralda','Quindío','CORPOCALDAS','CARDER','CRQ'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios en el Eje Cafetero</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Portafolio de ingeniería hidráulica en Manizales
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            BIC presta todos los servicios de ingeniería hidráulica y consultoría técnica ambiental
            en el Eje Cafetero. Los proyectos se adaptan a las características específicas de los ríos,
            suelos y normativa de cada municipio y corporación de la región.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {SERVICIOS.map(s => (
              <div key={s.servicio} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 26, display: 'flex', flexDirection: 'column',
                borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 8 }}>{s.servicio}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, flex: 1, marginBottom: 16 }}>{s.desc}</p>
                <a href={s.hr} style={{ color: '#17A2B8', fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                  {s.label} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── COBERTURA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cobertura regional</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Cobertura de BIC en el Eje Cafetero
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 780 }}>
            BIC opera en los cuatro departamentos del Eje Cafetero ampliado, con conocimiento
            de las corporaciones ambientales, los POT y las condiciones hidrológicas de cada zona.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {COBERTURA.map(c => (
              <div key={c.departamento} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', margin: 0 }}>{c.departamento}</h3>
                  <span style={{
                    background: '#f0f9ff', border: '1px solid #b3e0ea',
                    borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700, color: '#003B6F',
                  }}>{c.corporacion}</span>
                </div>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>MUNICIPIOS</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                  {c.ciudades.map(ciudad => (
                    <span key={ciudad} style={{
                      background: '#f0f9ff', borderRadius: 4, padding: '2px 8px',
                      fontSize: 12, color: '#003B6F',
                    }}>{ciudad}</span>
                  ))}
                </div>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 4 }}>ESPECIALIZACIÓN</p>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.especializacion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '36px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un proyecto en el Eje Cafetero?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC le atiende desde Manizales · Propuesta en 24 horas · Primera consulta sin costo</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── POR QUÉ BIC ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Por qué elegirnos</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Por qué los clientes del Eje Cafetero eligen BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 28 }}>
            {PORQUE_BIC.map(r => (
              <div key={r.titulo} style={{
                background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 12, padding: 24,
                borderLeft: '4px solid #17A2B8',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 10 }}>{r.titulo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.75, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            FAQ — Ingeniería hidráulica en Manizales y el Eje Cafetero
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LINKS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios específicos</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño de bocatomas Colombia', href: '/bocatomas-colombia' },
              { label: 'Encauzamiento de ríos', href: '/encauzamiento-rios-colombia' },
              { label: 'Canales de riego y conducción', href: '/diseno-canal-riego-colombia' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Modelación HEC-RAS', href: '/servicios/modelacion-hec-ras' },
              { label: 'Gestión del riesgo hídrico', href: '/gestion-riesgo-hidrico' },
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

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>⛰️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Tiene un proyecto de ingeniería hidráulica<br />en Manizales o el Eje Cafetero?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proyecto, el municipio y el estado en que se encuentra.
            BIC le da una primera evaluación técnica sin costo.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Propuesta técnica y económica en 24 horas · Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Chatear por WhatsApp · +57 302 477 8910
            </a>
            <a href="/contacto"
              style={{ display: 'inline-block', padding: '15px 36px', background: 'transparent', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
