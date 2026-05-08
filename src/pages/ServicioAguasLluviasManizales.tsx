import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Diseño de Redes de Aguas Lluvias en Manizales')

const seoConfig = {
  title: 'Diseño Redes Aguas Lluvias en Manizales y Caldas | BIC',
  description: 'Diseño de redes pluviales para cubiertas, colegios e industria en Manizales y Caldas. Curvas IDF, método Racional, NSR-10, tanques de retención. Cotice hoy.',
  keywords: [
    'diseño aguas lluvias Manizales',
    'redes pluviales Manizales',
    'aguas lluvias colegio Manizales',
    'diseño alcantarillado pluvial Caldas',
    'curvas IDF Manizales IDEAM',
    'tanque retención aguas lluvias',
    'método racional hidrología Manizales',
    'NSR-10 aguas lluvias Colombia',
    'drenaje pluvial industrial Manizales',
    'ingeniería pluvial Eje Cafetero',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/aguas-lluvias-manizales',
}

const INCLUYE = [
  {
    icon: '🌧️',
    titulo: 'Análisis hidrológico — Curvas IDF',
    desc: 'Determinación de la intensidad de diseño usando las curvas Intensidad-Duración-Frecuencia (IDF) del IDEAM para la estación meteorológica más representativa de Manizales. Períodos de retorno Tr = 5, 10, 25 años según el tipo de infraestructura. Manizales tiene intensidades de diseño de 50–140 mm/h para 60 min de duración.',
  },
  {
    icon: '📐',
    titulo: 'Cálculo de caudales — Método Racional y SCS',
    desc: 'Método Racional (Q = C·i·A) para áreas de cubierta, patios y lotes de pequeña extensión (< 5 ha). Método SCS-CN para cuencas urbanas e industriales más grandes, considerando CN según uso del suelo y cobertura. Caudales de diseño verificados contra el RAS 2017 Título D y las normas municipales de CHEC/Aguas de Manizales.',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño de redes de alcantarillado pluvial',
    desc: 'Diseño hidráulico de colectores pluviales: diámetros (PVC, concreto), pendientes mínimas y máximas, cámaras de inspección, sumideros, conexiones de entrega. Verificación de velocidades de autolimpieza (> 0.6 m/s) y no erosión (< 5 m/s). Conforme al RAS 2017 Título D y MAVDT Res. 0330/2017.',
  },
  {
    icon: '🏠',
    titulo: 'Cubiertas de edificios e instituciones',
    desc: 'Diseño de canaletas, bajantes y colectores enterrados para cubiertas de colegios, hospitales, bodegas e industria. Cálculo de áreas de captación, coeficientes de escorrentía (0.90–0.95 en cubiertas impermeables), selección de canaletas (semicirculares, rectangulares), bajantes y puntos de descarga.',
  },
  {
    icon: '💧',
    titulo: 'Tanques de retención y amortiguación',
    desc: 'Diseño de tanques de retención para control del caudal pico en urbanizaciones, colegios e industria donde la red receptora no tiene capacidad para caudales de diseño. Cálculo del volumen de retención (tránsito de ondas), sistema de descarga controlada y desbordamiento de emergencia.',
  },
  {
    icon: '📋',
    titulo: 'Memorias, planos y licencia',
    desc: 'Memoria de cálculo hidrológico e hidráulico completa. Planos en AutoCAD: planta general, perfiles hidráulicos, detalles de cámaras, sumideros y estructura de entrega. Especificaciones técnicas de materiales. Documento apto para licencia de construcción ante Curaduría Urbana de Manizales.',
  },
]

const TIPOS_PROYECTO = [
  {
    icon: '🏫',
    tipo: 'Cubiertas de colegios e instituciones',
    desc: 'Las instituciones educativas y hospitalarias de Manizales tienen grandes áreas de cubierta (500–5.000 m²) con requerimientos específicos de canaletes, bajantes y disposición del agua lluvia sin afectar zonas peatonales. Normativa NSR-10 Títulos J/K y reglamentos de construcción municipales. BIC ha diseñado sistemas pluviales para instituciones del Eje Cafetero.',
  },
  {
    icon: '🏭',
    tipo: 'Zonas industriales y bodegas',
    desc: 'Naves industriales y bodegas logísticas con coberturas metálicas de alta impermeabilidad (C = 0.90). Caudales de alta magnitud concentrados en pocos bajantes. Diseño de colectores subterráneos, separadores de grasas y aceites, y sistemas de pretratamiento previo a la descarga a la red pública o a fuentes superficiales.',
  },
  {
    icon: '🏘️',
    tipo: 'Urbanizaciones y proyectos residenciales',
    desc: 'Redes pluviales para proyectos de parcelación, urbanización y vivienda. Diseño integrado con la topografía del lote, vías internas y entrega al sistema de alcantarillado de Aguas de Manizales. Verificación de la capacidad del receptor y, cuando se requiere, diseño de tanque de amortiguación o parque de retención.',
  },
  {
    icon: '🏪',
    tipo: 'Centros comerciales y proyectos mixtos',
    desc: 'Proyectos de uso mixto con grandes áreas impermeables. Diseño del sistema de aguas lluvias coordinado con los sistemas sanitario y de incendios. Cálculo de bombas de aguas lluvias para sótanos y semisótanos. Estudio de impacto hídrico sobre la red de Aguas de Manizales requerido por el POT.',
  },
]

const CONTEXTO_MANIZALES = [
  {
    icon: '☁️',
    titulo: 'Alta pluviosidad en Manizales',
    desc: 'Manizales registra precipitaciones anuales de 2.200–3.800 mm/año según el sector, con intensidades máximas de 60–120 mm/h en tormentas de corta duración. Las curvas IDF del IDEAM para la estación Aeropuerto La Nubia (altitud 2.085 m) son la referencia base para diseños en la ciudad.',
  },
  {
    icon: '⚠️',
    titulo: 'Riesgo torrencial en laderas',
    desc: 'La topografía de Manizales genera escorrentía concentrada en quebradas urbanas y canales de drenaje. El Plan de Gestión del Riesgo municipal identifica zonas de alta amenaza por avenidas torrenciales (quebrada Manizales, El Guamo). Los proyectos en ladera requieren análisis de la escorrentía de ladera y diseño de obras de encauzamiento.',
  },
  {
    icon: '🏛️',
    titulo: 'POT y regulación municipal',
    desc: 'El Plan de Ordenamiento Territorial de Manizales (Acuerdo 0958/2017) establece requerimientos técnicos para sistemas pluviales en proyectos de construcción. La Curaduría Urbana exige memorias de cálculo de aguas lluvias para proyectos con áreas > 500 m² de cubierta o urbanizaciones de más de 10 viviendas.',
  },
  {
    icon: '💧',
    titulo: 'Aguas de Manizales: conexión y capacidad',
    desc: 'Aguas de Manizales exige estudio de capacidad del receptor antes de aprobar conexiones pluviales que aumenten el caudal al sistema existente. BIC elabora el estudio de impacto hidráulico sobre la red receptora y, cuando es necesario, diseña el sistema de retención o almacenamiento que garantiza el caudal de conexión permitido.',
  },
]

const ALCANCE_TABLA = [
  { tipo: 'Diagnóstico', detalle: 'Reconocimiento del área. Verificación de la topografía. Revisión de la red receptora (Aguas de Manizales). Determinación del período de retorno de diseño según tipo de infraestructura y normativa aplicable.' },
  { tipo: 'Hidrología', detalle: 'Cálculo de intensidades IDF para Manizales. Estimación de caudales de diseño por Método Racional o SCS-CN. Verificación con datos IDEAM estación La Nubia. Definición del caudal máximo de diseño para la red pluvial.' },
  { tipo: 'Diseño hidráulico', detalle: 'Trazado de colectores, selección de diámetros y pendientes. Verificación de velocidades. Diseño de cámaras de inspección, sumideros y estructuras especiales. Perfiles hidráulicos con cotas de plantilla y nivel de agua.' },
  { tipo: 'Entregables', detalle: 'Memoria de cálculo. Planos en AutoCAD (planta, perfil, detalles). Especificaciones técnicas. Presupuesto de obra. Apto para licencia en Curaduría Urbana de Manizales y tramite ante Aguas de Manizales.' },
  { tipo: 'Acompañamiento', detalle: 'Asistencia en respuesta a observaciones de Curaduría o Aguas de Manizales. Ajustes de diseño por cambios del proyecto arquitectónico. Visitas de supervisión técnica en construcción si se contratan.' },
]

const FAQ = [
  {
    q: '¿Por qué Manizales necesita diseños especiales de aguas lluvias?',
    a: 'Manizales tiene una de las pluviosidades más altas de Colombia para su altitud: 2.200–3.800 mm/año con tormentas de alta intensidad. La topografía en ladera concentra la escorrentía rápidamente, generando caudales pico elevados en poco tiempo. El suelo volcánico tiene alta capacidad de infiltración cuando está seco, pero satura fácilmente en eventos consecutivos. Estos factores hacen que el diseño de aguas lluvias en Manizales sea más exigente que en ciudades planas, con curvas IDF más intensas y mayor énfasis en el control de caudales pico.',
  },
  {
    q: '¿Qué período de retorno se usa para diseño de aguas lluvias en colegios e instituciones?',
    a: 'Según el RAS 2017 Título D y los criterios de Aguas de Manizales, se usan los siguientes períodos de retorno según el tipo de obra: Para cubiertas de edificios y áreas privadas: Tr = 5 años. Para vías locales y colectores secundarios: Tr = 10 años. Para colectores principales y áreas industriales: Tr = 25 años. Para estructuras de retención y obras de control: Tr = 25–100 años. BIC selecciona el período de retorno apropiado para cada componente del sistema.',
  },
  {
    q: '¿Cuándo se necesita un tanque de retención en aguas lluvias en Manizales?',
    a: 'Un tanque de retención (o atenuación de caudal pico) es requerido cuando: la red receptora de Aguas de Manizales no tiene capacidad para el caudal de diseño generado por el nuevo proyecto; el POT municipal exige retención para proyectos sobre cierta superficie impermeable; el predio está en una cuenca con problemas comprobados de inundación aguas abajo. BIC realiza el estudio de capacidad del receptor y, si se requiere retención, diseña el tanque incluyendo el cálculo del volumen (método del hidrograma de entrada-salida) y el sistema de descarga controlada.',
  },
  {
    q: '¿Qué diferencia hay entre el alcantarillado sanitario y el pluvial en Manizales?',
    a: 'Manizales tiene un sistema de alcantarillado separado en la mayor parte de la ciudad: la red sanitaria recoge aguas residuales domésticas e industriales y las lleva a la PTAR La Francia; la red pluvial recoge el agua lluvia de calles, cubiertas y áreas duras y la descarga a fuentes superficiales. Conectar aguas lluvias a la red sanitaria o viceversa está prohibido y genera multas de Aguas de Manizales y CORPOCALDAS. BIC diseña los sistemas garantizando la separación conforme a la normativa.',
  },
  {
    q: '¿Cuánto cuesta el diseño de aguas lluvias para un colegio en Manizales?',
    a: 'Para una institución educativa típica de Manizales (área de cubierta de 1.000–3.000 m², sistema de canaletas, bajantes y colectores subterráneos hasta entrega a red pública), el rango orientativo 2026 es $4–10 millones COP. Para proyectos que incluyen estudio de impacto sobre la red receptora y diseño de tanque de retención, el rango es $8–18 millones COP. BIC entrega propuesta técnica y económica detallada en menos de 24 horas hábiles, sin costo.',
  },
]

export default function ServicioAguasLluviasManizales() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Diseño de Redes de Aguas Lluvias — Manizales y Caldas',
      description: seoConfig.description,
      url: 'https://ingenieriabernal.co/servicios/aguas-lluvias-manizales',
      serviceType: 'Diseño de Redes Pluviales y Drenaje Urbano',
      provider: {
        '@type': 'ProfessionalService',
        name: 'BIC Bernal Ingeniería Consultores',
        url: 'https://ingenieriabernal.co',
        telephone: '+573024778910',
      },
      areaServed: [
        { '@type': 'City', name: 'Manizales' },
        { '@type': 'AdministrativeArea', name: 'Caldas' },
        { '@type': 'AdministrativeArea', name: 'Eje Cafetero' },
      ],
    }
    let el = document.getElementById('schema-service-geo')
    if (!el) {
      el = document.createElement('script')
      el.id = 'schema-service-geo'
      el.setAttribute('type', 'application/ld+json')
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)
    return () => { document.getElementById('schema-service-geo')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Redes de Aguas Lluvias — Manizales y Caldas"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/aguas-lluvias-manizales"
        faqItems={FAQ}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado — Manizales y Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de Redes de Aguas Lluvias en Manizales
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC diseña redes de aguas lluvias para cubiertas de colegios e instituciones,
            zonas industriales, urbanizaciones y proyectos mixtos en Manizales y Caldas.
            Curvas IDF del IDEAM, Método Racional y SCS-CN, cálculo de caudales de diseño,
            colectores, sumideros, cámaras y tanques de retención. Memorias aceptadas por
            Curaduría Urbana y Aguas de Manizales. Ingeniero COPNIA vigente y sede local.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización de aguas lluvias en Manizales
            </Btn>
            <Btn variant="outline" href="/servicios/redes-hidrosanitarias" dark>
              Ver servicio de redes hidrosanitarias →
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Cobertura:</span>
          {['Manizales', 'Caldas', 'Eje Cafetero', 'NSR-10', 'RAS 2017', 'COPNIA'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── ENLACE INTERNO ── */}
      <div style={{ background: '#EEF6FB', padding: '18px 24px', borderBottom: '1px solid #D1E9F5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#475569', margin: 0 }}>
            Página especializada para Manizales y Caldas.{' '}
            <a href="/servicios/redes-hidrosanitarias" style={{ color: '#17A2B8', fontWeight: 700, textDecoration: 'none' }}>
              Ver página principal del servicio de Redes Hidrosanitarias →
            </a>
          </p>
        </div>
      </div>

      {/* ── QUÉ INCLUYE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye el diseño de aguas lluvias en Manizales?</h2>
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

      {/* ── TIPOS DE PROYECTO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Aplicaciones</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de proyecto de aguas lluvias en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 }}>
            {TIPOS_PROYECTO.map(t => (
              <div key={t.tipo} style={{ padding: '20px 22px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{t.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#001A33', margin: '0 0 6px' }}>{t.tipo}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTEXTO MANIZALES ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto local</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Por qué el drenaje pluvial en Manizales es diferente</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 }}>
            {CONTEXTO_MANIZALES.map(c => (
              <div key={c.titulo} style={{ padding: '20px 22px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#001A33', margin: '0 0 6px' }}>{c.titulo}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ALCANCE POR TIPO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso de trabajo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Etapas del diseño: diagnóstico, diseño y acompañamiento
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ALCANCE_TABLA.map((a, i) => (
              <div key={a.tipo} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 20, padding: '20px 0', borderBottom: i < ALCANCE_TABLA.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <div style={{ background: '#003B6F', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 12px' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 12, textAlign: 'center', lineHeight: 1.3 }}>{a.tipo}</span>
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{a.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Diferenciadores BIC</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué contratar BIC para aguas lluvias en Manizales?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '📍', titulo: 'Sede local en Manizales', desc: 'BIC tiene sede en Manizales (Calle 65A #23B-24). Conocimiento directo del POT, curvas IDF locales, criterios de Curaduría Urbana y Aguas de Manizales. Respuesta inmediata a observaciones de las entidades.' },
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, egresado UNAL, especialista en Ingeniería Hidráulica y Ambiental. Matrícula COPNIA 17202-313228 CLD activa. Memorias firmadas y aceptadas por Curaduría Urbana de Manizales.' },
              { icon: '🌧️', titulo: 'Experiencia en pluviosidad de alta montaña', desc: 'BIC tiene experiencia en diseño hidrológico para zonas de alta pluviosidad como Manizales y el Eje Cafetero. Manejo de curvas IDF del IDEAM, correlación con estaciones locales y aplicación del Método Racional para intensidades de hasta 140 mm/h.' },
              { icon: '⚡', titulo: 'Propuesta en 24 horas · Trato directo', desc: 'Comunicación directa con el director técnico. Propuesta técnica y económica en menos de 24 horas hábiles, sin costo. Acompañamiento hasta la aprobación de la licencia en Curaduría Urbana.' },
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Preguntas frecuentes — aguas lluvias en Manizales
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQ.map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '22px 26px' }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33', fontSize: 14, margin: '0 0 10px', lineHeight: 1.4 }}>{faq.q}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
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
            <a href="/servicios/redes-hidrosanitarias" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Redes hidrosanitarias — agua potable, sanitario y pluvial</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Modelación HEC-RAS para cuencas urbanas e inundabilidad</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/diseno-alcantarillado-colombia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de alcantarillado sanitario y combinado Colombia</span>
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
            ¿Proyecto de aguas lluvias en Manizales o Caldas?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el tipo de proyecto, el área aproximada de cubierta o del lote y
            el municipio. Le respondemos con propuesta técnica y presupuesto en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Solicitar cotización de aguas lluvias en Manizales
          </Btn>
        </div>
      </Section>
    </>
  )
}
