import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Estudio de Suelos en Pereira')

const seoConfig = {
  title: 'Estudio de Suelos para Torres y Edificios en Pereira y Risaralda | BIC',
  description: 'Estudios geotécnicos NSR-10 para edificios, torres y proyectos de construcción en Pereira, Dosquebradas y Risaralda. Sondeos SPT, capacidad portante, cimentaciones.',
  keywords: [
    'estudio de suelos Pereira',
    'estudio geotécnico Pereira',
    'sondeo SPT Risaralda',
    'capacidad portante Pereira',
    'cimentación edificio Pereira',
    'NSR-10 Título H Pereira',
    'estudio suelos Dosquebradas',
    'geotecnia Eje Cafetero',
    'pilotes Pereira edificio',
    'estudio geotécnico torre Pereira',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/estudio-suelos-pereira',
}

const INCLUYE = [
  {
    icon: '🔩',
    titulo: 'Exploración geotécnica — sondeos SPT',
    desc: 'Perforación de sondeos con recuperación de muestras alteradas e inalteradas. Ensayo de Penetración Estándar (SPT) cada metro hasta la profundidad de diseño (mínimo 10 m para edificios de 2–5 pisos, 20 m para estructuras altas). Nivel freático y descripción estratigráfica USCS conforme a NSR-10 Título H.',
  },
  {
    icon: '🧪',
    titulo: 'Ensayos de laboratorio',
    desc: 'Clasificación de suelos (granulometría, límites de Atterberg), contenido de humedad, peso unitario, ensayo de compresión inconfinada (UCS) en arcillas, ensayo triaxial CU para suelos saturados. Análisis de colapso en suelos volcánicos de cenizas del Eje Cafetero (colapsibles bajo saturación).',
  },
  {
    icon: '📐',
    titulo: 'Análisis de capacidad portante',
    desc: 'Cálculo de capacidad portante última y admisible para cimentaciones superficiales (zapatas corridas, aisladas y combinadas) y profundas (pilotes y caissons). Métodos: Terzaghi, Meyerhof, Vesic. Correlaciones SPT para suelos areno-arcillosos del Valle del Cauca y Risaralda.',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño y recomendación de cimentación',
    desc: 'Recomendación técnica del tipo de cimentación más adecuado para el proyecto según la estratigrafía, las cargas de la estructura y las condiciones de sismicidad. Predimensionamiento de zapatas, vigas de amarre, pilotes o caissons conforme a NSR-10 Capítulo B.6.',
  },
  {
    icon: '🌋',
    titulo: 'Análisis sísmico — zona cafetera',
    desc: 'Pereira y Dosquebradas están en zona de amenaza sísmica alta (NSR-10). El estudio incluye análisis de amplificación de ondas sísmicas en el perfil de suelo, clasificación del perfil sísmico (SA a SF según NSR-10 Tabla A.2.4-1) y coeficientes de sitio Fa y Fv para el diseño estructural.',
  },
  {
    icon: '📋',
    titulo: 'Informe geotécnico completo',
    desc: 'Informe NSR-10 Título H con: resumen ejecutivo, descripción del área, trabajo de campo, ensayos de laboratorio, análisis de capacidad portante, análisis sísmico, perfil de suelo y recomendaciones de cimentación. Firmado por ingeniero con tarjeta COPNIA vigente apto para trámite de licencia.',
  },
]

const TIPOS_CIMENTACION = [
  {
    tipo: 'Cimentación superficial (zapatas)',
    cuando: 'Edificios de 2–8 pisos sobre suelos firmes o medianamente compactos con capacidad portante admisible > 8 t/m². En Pereira, aplica en estratos de arenas densas o arcillas de baja plasticidad por encima de los 3–5 m.',
    desc: 'Zapatas aisladas para columnas, corridas para muros de carga. Se verifican asentamientos totales (< 25 mm) y diferenciales (< 20 mm) conforme a NSR-10 C.9.',
  },
  {
    tipo: 'Pilotes de concreto (vaciados in situ)',
    cuando: 'Torres de 9–20 pisos, estructuras sobre suelos blandos o rellenos antrópicos en los primeros 5–8 m. Frecuente en zonas de depósito fluvio-volcánico de la cuenca del río Otún en Pereira.',
    desc: 'Pilotes perforados de diámetro 30–60 cm con longitudes de 8–20 m. Capacidad por punta y fricción lateral conforme a NSR-10 C.10. Pruebas de carga estática o dinámica (PDA) para verificación.',
  },
  {
    tipo: 'Caissons o pilas de gran diámetro',
    cuando: 'Cimientos de puentes, estructuras industriales o edificios con cargas muy altas donde la roca o estrato portante se encuentra a más de 15 m. También en laderas de Dosquebradas con presencia de roca meteorizada.',
    desc: 'Excavación manual o mecánica de diámetros > 80 cm. Requieren inspección visual del fondo para verificar el estrato de apoyo. Altas capacidades portantes (> 100 t/caisson).',
  },
  {
    tipo: 'Losa de cimentación',
    cuando: 'Estructuras con cargas uniformemente distribuidas sobre suelos de baja capacidad portante donde la zapata individual ocuparía más del 50% del área de planta. También en estructuras con sótano que requieren impermeabilización integral.',
    desc: 'Diseño por control de asentamientos diferenciales y verificación de presión de contacto. Puede combinarse con pilotes (losa-pilote) para estructuras de alta carga en suelos blandos de Pereira.',
  },
]

const CONTEXTO_PEREIRA = [
  { icon: '🌋', titulo: 'Suelos volcánicos de cenizas en el Eje Cafetero', desc: 'Pereira y Dosquebradas están sobre un perfil de suelo derivado de cenizas volcánicas de los volcanes Cerro Bravo y Nevado del Ruiz. Estos suelos tienen características especiales: alta deformabilidad cuando se saturan, colapsibilidad y sensibilidad sísmica. El NSR-10 exige tratamiento especial para estas condiciones.' },
  { icon: '📍', titulo: 'Alta sismicidad — zona cafetera', desc: 'Pereira se encuentra en zona de amenaza sísmica alta según el Decreto 340/2012 y la NSR-10. El diseño de cimentaciones debe considerar los coeficientes de sitio Fa y Fv que amplifican la aceleración espectral de diseño según el perfil de suelo determinado en el estudio geotécnico.' },
  { icon: '🏗️', titulo: 'Torres residenciales en expansión', desc: 'La expansión inmobiliaria de Pereira (Pinares, Circunvalar, Cuba, Belmonte) genera alta demanda de estudios geotécnicos para proyectos de 2 a 20 pisos. BIC realiza estudios desde predios de 150 m² (vivienda unifamiliar) hasta proyectos multifamiliares de gran escala.' },
  { icon: '⚠️', titulo: 'Dosquebradas: laderas y rellenos antrópicos', desc: 'El municipio de Dosquebradas tiene sectores con rellenos de laderas y suelos de origen residual que requieren exploración más profunda y análisis de estabilidad de taludes asociados a la cimentación. BIC integra el análisis de estabilidad de talud con el diseño geotécnico de la cimentación.' },
]

const COSTOS_2026 = [
  { tipo: 'Vivienda unifamiliar 1–2 pisos', sondeos: '1–2 sondeos SPT (6–8 m)', plazo: '2–3 semanas', rango: '$3–6 millones COP' },
  { tipo: 'Edificio 3–6 pisos', sondeos: '3–4 sondeos SPT (10–12 m)', plazo: '3–4 semanas', rango: '$8–15 millones COP' },
  { tipo: 'Torre 7–15 pisos', sondeos: '4–6 sondeos SPT (15–20 m)', plazo: '4–6 semanas', rango: '$15–28 millones COP' },
  { tipo: 'Torre > 15 pisos o proyecto especial', sondeos: '6–8+ sondeos SPT + ensayos especiales', plazo: '6–10 semanas', rango: 'Consultar' },
]

const FAQ = [
  {
    q: '¿Cuántos sondeos necesito para mi proyecto en Pereira?',
    a: 'El NSR-10 Título H establece el número mínimo de sondeos según el área de la edificación y el nivel de exploración requerido. Como referencia: viviendas unifamiliares (< 200 m² de construcción) requieren mínimo 1 sondeo; edificios de 3–6 pisos entre 3 y 4 sondeos; torres de 7 o más pisos entre 4 y 6 sondeos con profundidades mayores. BIC determina el programa de exploración óptimo en la propuesta técnica.',
  },
  {
    q: '¿Cuánto demora un estudio de suelos en Pereira?',
    a: 'Un estudio geotécnico estándar para edificio de 3–6 pisos en Pereira tarda entre 3 y 4 semanas desde la orden de inicio: 1 semana para el trabajo de campo (sondeos, muestras), 1 semana para ensayos de laboratorio y 1–2 semanas para el análisis y elaboración del informe. Para proyectos urgentes con priorización de laboratorio, BIC puede entregar en 2 semanas. Las torres de más de 10 pisos requieren 5–8 semanas por la mayor profundidad de exploración.',
  },
  {
    q: '¿Qué incluye el informe geotécnico para radicación de licencia en Pereira?',
    a: 'El informe geotécnico para trámite de licencia de construcción en Pereira debe cumplir los requisitos del NSR-10 Título H y la Curaduría Urbana Municipal. Incluye: memoria descriptiva del área, programa de exploración con registros de campo, resultados de ensayos de laboratorio, perfiles estratigráficos, análisis de capacidad portante, clasificación del perfil sísmico (Tabla A.2.4-1 NSR-10), recomendaciones de cimentación y planos de ubicación de sondeos. Firmado y sellado por ingeniero con tarjeta profesional COPNIA activa.',
  },
  {
    q: '¿Por qué los suelos de Pereira necesitan tratamiento especial?',
    a: 'Pereira se encuentra sobre un perfil de suelo formado por cenizas volcánicas del Nevado del Ruiz y cerros aledaños. Estos suelos tienen características atípicas: son porosos y livianos cuando están en estado natural, pero colapsan (reducen volumen bruscamente) cuando se saturan bajo carga. Además, la zona es de alta sismicidad (NSR-10). El estudio geotécnico en Pereira debe identificar estas condiciones especiales y diseñar la cimentación considerando tanto la colapsibilidad como la amplificación sísmica del perfil.',
  },
  {
    q: '¿Cuándo se necesitan pilotes en lugar de zapatas en Pereira?',
    a: 'Se recomienda cimentación profunda (pilotes) en Pereira cuando: la capacidad portante del suelo superficial es insuficiente para las cargas del edificio (< 5 t/m² para cargas de torre), existe relleno antrópico en los primeros metros, el perfil muestra suelos blandos o colapsibles hasta más de 5 m de profundidad, o el edificio supera los 8–10 pisos con cargas elevadas en columnas. Los pilotes perforados vaciados in situ (diámetros 35–50 cm) son la solución más común en Pereira para torres residenciales.',
  },
  {
    q: '¿BIC realiza estudios de suelos en Dosquebradas y otros municipios de Risaralda?',
    a: 'Sí. BIC realiza estudios geotécnicos en todos los municipios de Risaralda: Dosquebradas, Santa Rosa de Cabal, La Virginia, Marsella, Quinchía, Santuario y Belén de Umbría. También en municipios limítrofes del Eje Cafetero (Caldas y Quindío). Los desplazamientos de campo se incluyen en el presupuesto según la ubicación del predio.',
  },
]

export default function ServicioEstudioSuelosPereira() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Estudio de Suelos y Geotecnia — Pereira y Risaralda',
      description: seoConfig.description,
      url: 'https://ingenieriabernal.co/servicios/estudio-suelos-pereira',
      serviceType: 'Estudio Geotécnico NSR-10',
      provider: {
        '@type': 'ProfessionalService',
        name: 'BIC Bernal Ingeniería Consultores',
        url: 'https://ingenieriabernal.co',
        telephone: '+573024778910',
      },
      areaServed: [
        { '@type': 'City', name: 'Pereira' },
        { '@type': 'AdministrativeArea', name: 'Risaralda' },
        { '@type': 'City', name: 'Dosquebradas' },
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
        serviceName="Estudio de Suelos y Geotecnia — Pereira y Risaralda"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/estudio-suelos-pereira"
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
          <SectionLabel light>Servicio especializado — Pereira y Risaralda</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Estudio de Suelos y Geotecnia para Edificios en Pereira
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC realiza estudios geotécnicos conforme al NSR-10 Título H para edificios,
            torres residenciales y proyectos de construcción en Pereira, Dosquebradas y
            Risaralda. Sondeos SPT, ensayos de laboratorio, análisis de capacidad portante,
            clasificación sísmica del perfil de suelo y recomendación de cimentación
            (zapatas, pilotes, caissons). Informes aptos para Curaduría Urbana y licencias
            de construcción. Ingeniero COPNIA vigente.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar estudio de suelos en Pereira
            </Btn>
            <Btn variant="outline" href="/servicios/geotecnia" dark>
              Ver servicio de geotecnia nacional →
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Cobertura:</span>
          {['Pereira', 'Dosquebradas', 'Risaralda', 'NSR-10 Título H', 'SPT', 'COPNIA'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── ENLACE INTERNO ── */}
      <div style={{ background: '#EEF6FB', padding: '18px 24px', borderBottom: '1px solid #D1E9F5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#475569', margin: 0 }}>
            Página especializada para Pereira y Risaralda.{' '}
            <a href="/servicios/geotecnia" style={{ color: '#17A2B8', fontWeight: 700, textDecoration: 'none' }}>
              Ver página principal del servicio de Geotecnia en Colombia →
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
          }}>¿Qué incluye el estudio de suelos NSR-10 en Pereira?</h2>
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

      {/* ── TIPOS DE CIMENTACIÓN ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Recomendaciones técnicas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de cimentación para edificios en Pereira: ¿cuál aplica?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {TIPOS_CIMENTACION.map((t) => (
              <div key={t.tipo} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4, padding: 24 }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 15, marginBottom: 6 }}>{t.tipo}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 13, fontStyle: 'italic', marginBottom: 8, lineHeight: 1.5 }}><strong>Cuándo aplica:</strong> {t.cuando}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTEXTO PEREIRA ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto geotécnico regional</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Suelos de Pereira y Risaralda: qué debe saber antes de construir</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 }}>
            {CONTEXTO_PEREIRA.map(c => (
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

      {/* ── TABLA DE COSTOS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Referencia de costos 2026</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Costos orientativos de estudios de suelos en Pereira 2026
          </h2>
          <ThinLine mb={40} />
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif", fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#003B6F', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12 }}>Tipo de proyecto</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12 }}>Exploración mínima</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12 }}>Plazo entrega</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12 }}>Rango orientativo</th>
                </tr>
              </thead>
              <tbody>
                {COSTOS_2026.map((row, i) => (
                  <tr key={row.tipo} style={{ background: i % 2 === 0 ? '#F8FAFC' : '#fff', borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '12px 16px', color: '#001A33', fontWeight: 600 }}>{row.tipo}</td>
                    <td style={{ padding: '12px 16px', color: '#475569' }}>{row.sondeos}</td>
                    <td style={{ padding: '12px 16px', color: '#475569' }}>{row.plazo}</td>
                    <td style={{ padding: '12px 16px', color: '#17A2B8', fontWeight: 700 }}>{row.rango}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#94A3B8', marginTop: 12 }}>
              * Costos orientativos 2026. El presupuesto definitivo depende del número de sondeos, profundidad, ensayos especiales requeridos y ubicación del predio. BIC entrega cotización exacta en &lt; 24 horas.
            </p>
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
          }}>¿Por qué contratar BIC para su estudio de suelos en Pereira?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Ingeniero Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL) con formación geotécnica. Tarjeta COPNIA 17202-313228 CLD activa. Informes firmados y aceptados por Curadurías Urbanas.' },
              { icon: '🌋', titulo: 'Experiencia en suelos volcánicos Eje Cafetero', desc: 'Conocimiento específico de los perfiles de suelo de cenizas volcánicas del Eje Cafetero: colapsibilidad, susceptibilidad sísmica y comportamiento bajo carga. Criterios NSR-10 aplicados a la geología local de Pereira y Dosquebradas.' },
              { icon: '🏗️', titulo: 'Proyectos en Dosquebradas verificables', desc: 'BIC ejecutó el diseño hidrosanitario y sistemas contra incendios del Makarí Mall en Dosquebradas. Presencia activa en Pereira, Dosquebradas y el Eje Cafetero con referencias disponibles.' },
              { icon: '⚡', titulo: 'Entrega ágil · Propuesta en 24 horas', desc: 'Proceso claro: propuesta técnica y económica en 24 horas, inicio de campo dentro de 5 días hábiles, entrega del informe en 3–6 semanas según el alcance. Comunicación directa con el director técnico.' },
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
            Preguntas frecuentes — estudios de suelos en Pereira
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
            <a href="/servicios/geotecnia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios geotécnicos y de suelos — página nacional</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/gestion-riesgo-taludes-colombia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Gestión del riesgo de taludes e inestabilidad de ladera</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Modelación HEC-RAS — estudios de inundabilidad para licencias</span>
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
            ¿Necesita estudio de suelos en Pereira o Risaralda?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos la dirección del predio, el número de pisos proyectados y si tiene
            planos del proyecto. Le respondemos con propuesta técnica y presupuesto en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Solicitar estudio de suelos en Pereira
          </Btn>
        </div>
      </Section>
    </>
  )
}
