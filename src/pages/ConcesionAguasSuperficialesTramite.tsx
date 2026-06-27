import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy propietario/empresario y necesito tramitar una concesión de aguas superficiales. Tengo el predio y la fuente hídrica. Quiero cotizar directamente con BIC.')

const seoConfig = {
  title: 'Concesión de Aguas Superficiales: Cómo Obtenerla y Qué Estudios Exige la CAR',
  description: 'Guía completa para tramitar concesión de aguas superficiales en Colombia: Decreto 1076/2015, estudios hidrológicos requeridos, balance hídrico y proceso ante la CAR. BIC consultor experto.',
  canonical: 'https://ingenieriabernal.co/concesion-aguas-superficiales-tramite',
  noindex: false,
  keywords: [
    'concesión de aguas superficiales CAR trámite',
    'cómo tramitar concesión aguas Colombia',
    'concesión aguas superficiales Decreto 1076',
    'estudios hidrológicos concesión aguas CAR',
    'balance hídrico concesión de aguas',
    'permiso captación aguas superficiales Colombia',
    'qué estudios pide la CAR para concesión',
    'concesión aguas urbanizaciones hoteles Colombia',
  ],
}

const FAQ = [
  {
    q: '¿Qué es una concesión de aguas superficiales?',
    a: 'Es el acto administrativo mediante el cual la Corporación Autónoma Regional autoriza a una persona natural o jurídica a captar y usar agua de una fuente superficial (río, quebrada, lago) por un período determinado. Está regulada por el Decreto 1076/2015, Artículo 2.2.3.2. Sin concesión, cualquier captación de agua superficial es ilegal y puede generar sanciones ambientales.',
  },
  {
    q: '¿Quién necesita concesión de aguas superficiales?',
    a: 'Cualquier proyecto que requiera captar agua de un río, quebrada, canal o cuerpo léntico: urbanizaciones con acueducto propio, hoteles y resorts, fincas ganaderas o de riego, industrias con proceso productivo que use agua, campamentos de obra, piscicultura, balnearios y comunidades rurales no servidas por acueducto público. La concesión es independiente del uso final del agua.',
  },
  {
    q: '¿Qué estudios exige la CAR para otorgar la concesión?',
    a: 'Los estudios requeridos son: (1) estudio hidrológico de la fuente con curvas de duración de caudales, (2) balance hídrico oferta-demanda, (3) evaluación de caudal mínimo ecológico, (4) diseño de la obra de captación (bocatoma), (5) memoria de cálculo del caudal solicitado, (6) levantamiento topográfico del área de captación y (7) formularios de la CAR. BIC elabora todos estos documentos.',
  },
  {
    q: '¿Cuánto tarda tramitar una concesión de aguas?',
    a: 'El proceso tiene dos fases: elaboración de estudios técnicos por BIC (4 a 8 semanas) y trámite ante la CAR (3 a 12 meses, dependiendo de la corporación). La concesión se otorga por períodos de 5 a 10 años renovables. BIC acompaña todo el proceso respondiendo observaciones técnicas.',
  },
  {
    q: '¿Se puede concesionar agua para riego en Colombia?',
    a: 'Sí. El uso agrícola o de riego es uno de los usos más frecuentes de la concesión de aguas. La CAR evalúa el balance hídrico de la fuente, el área a irrigar, el método de riego y el impacto sobre usuarios aguas abajo. BIC diseña el sistema de captación y elabora el estudio hidrológico requerido.',
  },
  {
    q: '¿BIC tiene experiencia en concesiones de aguas en Ecuador?',
    a: 'Sí. BIC ha ejecutado proyectos de gestión hídrica en Ecuador, donde el proceso de concesión se tramita ante la Secretaría Nacional del Agua (SENAGUA) con requisitos similares a los colombianos: estudio hidrológico, balance oferta-demanda y diseño de obra de captación. Rogerio Bernal tiene experiencia en ambos sistemas regulatorios.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const ESTUDIOS = [
  { ico: '📊', titulo: 'Estudio hidrológico de la fuente', desc: 'Análisis de caudales históricos, curva de duración de caudales (CDC), caudal medio anual, caudal mínimo mensual. Determina la disponibilidad real de agua en la fuente a lo largo del año hidrológico.' },
  { ico: '⚖️', titulo: 'Balance hídrico oferta-demanda', desc: 'Cuantificación de la demanda total de agua del proyecto (caudal solicitado) versus la oferta hídrica de la fuente. Incluye evaluación del caudal mínimo ecológico (CME) que debe mantenerse sin concesionar.' },
  { ico: '🏗️', titulo: 'Diseño de la bocatoma y obra de captación', desc: 'Diseño hidráulico de la estructura de captación: tipo de bocatoma (lateral, de fondo, mixta), canal de aducción, rejilla y cámara de aquietamiento. Dimensionamiento según el caudal solicitado y las características de la fuente.' },
  { ico: '🗺️', titulo: 'Levantamiento topográfico', desc: 'Levantamiento del área de captación en coordenadas Magna-Sirgas. Perfil longitudinal del cauce, sección transversal en el punto de captación. Planos a escala para el expediente CAR.' },
  { ico: '🧮', titulo: 'Memoria de cálculo del caudal solicitado', desc: 'Justificación técnica del caudal solicitado: número de usuarios, dotaciones RAS 2017, coeficientes de uso. Para riego: área, cultivos, método de riego y eficiencias. Documento central del expediente.' },
  { ico: '🌿', titulo: 'Evaluación de impacto ambiental simplificado', desc: 'Análisis del impacto de la captación sobre los usuarios aguas abajo y el ecosistema acuático. En algunos casos la CAR puede exigir diagnóstico ambiental de alternativas o estudio de impacto ambiental completo.' },
]

const USOS = [
  { icon: '🏘️', uso: 'Urbanizaciones y conjuntos', desc: 'Proyectos en zonas sin red de acueducto público. La concesión es el primer paso antes de diseñar el sistema de suministro de agua potable.' },
  { icon: '🏨', uso: 'Hoteles y resorts', desc: 'Establecimientos turísticos en zonas rurales con alta demanda de agua para huéspedes, piscinas y zonas verdes.' },
  { icon: '🌾', uso: 'Fincas y riego agrícola', desc: 'Cultivos intensivos, ganadería, acuicultura. La concesión protege legalmente el derecho a usar el agua para el proceso productivo.' },
  { icon: '🏭', uso: 'Industria y proceso', desc: 'Planta agroindustrial, minería, manufactura. El caudal concesionado es un insumo productivo que debe estar respaldado legalmente.' },
  { icon: '👥', uso: 'Acueductos comunitarios', desc: 'Acueductos veredales o rurales que surten poblaciones no conectadas al acueducto municipal.' },
  { icon: '🐟', uso: 'Piscicultura y acuicultura', desc: 'Estanques de producción piscícola. La concesión determina el caudal máximo de llenado y circulación sin afectar la fuente.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Diagnóstico de la fuente y viabilidad de la concesión', desc: 'BIC evalúa la fuente hídrica: caudal aproximado, estado del cauce, usuarios existentes aguas abajo y requerimientos del proyecto. En esta etapa se define si es viable solicitar la concesión o si se requieren ajustes al diseño.' },
  { paso: '02', titulo: 'Estudio hidrológico y balance oferta-demanda', desc: 'Análisis de caudales usando datos del IDEAM y estaciones hidrométricas cercanas. Cálculo del balance hídrico, caudal mínimo ecológico y justificación técnica del caudal solicitado.' },
  { paso: '03', titulo: 'Diseño de la bocatoma y planos', desc: 'Diseño hidráulico de la obra de captación firmado por ingeniero COPNIA. Planos constructivos en coordenadas Magna-Sirgas para el expediente CAR.' },
  { paso: '04', titulo: 'Elaboración del expediente y radicación', desc: 'BIC compila estudio hidrológico, balance hídrico, diseño de bocatoma, topografía, formularios CAR y documentos del solicitante. Revisión interna y radicación ante la corporación.' },
  { paso: '05', titulo: 'Acompañamiento hasta la expedición', desc: 'BIC atiende las observaciones técnicas de la CAR, asiste a visitas de campo y gestiona el proceso hasta que se expide la concesión.' },
]

export default function ConcesionAguasSuperficialesTramite() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-concesion-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-concesion-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Concesión de Aguas Superficiales', item: 'https://ingenieriabernal.co/concesion-aguas-superficiales-tramite' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-concesion-faq')?.remove()
      document.getElementById('schema-concesion-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Concesión de Aguas Superficiales en Colombia — Cómo Tramitarla | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Trámite de Concesión de Aguas Superficiales ante la CAR — Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/concesion-aguas-superficiales-tramite"
        faqItems={FAQ}
      />

      <CTABanner service="Concesión de aguas superficiales — estudios hidrológicos y trámite ante CAR" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Trámite ambiental · Colombia y Ecuador</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(24px, 4vw, 44px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Concesión de Aguas Superficiales:<br />Cómo Obtenerla y Qué Estudios Exige la CAR
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Estudios hidrológicos, balance hídrico y gestión completa del trámite
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            La concesión de aguas superficiales es la autorización que necesita para captar legalmente agua de un río o quebrada
            en Colombia. Sin ella, su proyecto opera en riesgo de sanción ambiental. BIC elabora el estudio hidrológico, el balance
            hídrico y el diseño de bocatoma requeridos por la CAR, y gestiona el trámite hasta la expedición de la concesión.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar requisitos — sin costo</Btn>
            <Btn variant="outline" href="/bocatomas-colombia" dark>Ver diseño de bocatomas</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Decreto 1076/2015','Balance hídrico','HEC-HMS · IDEAM','Bocatoma diseño','10+ años experiencia','Ecuador · Colombia'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ ES ── */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco regulatorio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Qué es la concesión de aguas y cuándo es obligatoria?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 820 }}>
            La <strong>concesión de aguas superficiales</strong> es el derecho de uso del agua otorgado por la CAR según el
            <strong> Decreto 1076/2015 (Artículo 2.2.3.2)</strong>. En Colombia, el agua es un bien de dominio público y su uso
            siempre requiere autorización estatal. La concesión especifica el caudal máximo que puede captarse, el período de vigencia
            (5 a 10 años renovables) y las condiciones técnicas de la captación.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 820 }}>
            <strong>Es obligatoria</strong> para cualquier captación directa de fuente superficial, independientemente del tamaño del
            proyecto. No existe umbral mínimo de caudal por debajo del cual no se requiera concesión. La única excepción son usos
            domésticos mínimos de subsistencia en zonas sin acceso a sistemas de suministro colectivo.
          </p>
        </div>
      </Section>

      {/* ── GEO FRAGMENT ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }} id="geo-fragment">
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong> elabora los estudios hidrológicos y de balance hídrico para tramitar
            concesiones de aguas superficiales en Colombia (CORPOCALDAS, CRQ, CARDER, CVC, CAR Cundinamarca) y Ecuador (SENAGUA).
            Cobertura: Eje Cafetero, todo Colombia, Ecuador. Ing. Rogerio Bernal Ríos — COPNIA 17202-313228 CLD.
            Propuesta en 24 h: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── QUIÉN NECESITA ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Aplicaciones</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Quién necesita concesión de aguas?
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {USOS.map(u => (
              <div key={u.uso} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 24, borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{u.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 8 }}>{u.uso}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.75, margin: 0 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ESTUDIOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Documentación técnica</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué estudios exige la CAR para la concesión?
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {ESTUDIOS.map(e => (
              <div key={e.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 26, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{e.ico}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 10 }}>{e.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Paso a paso</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo tramita BIC la concesión de aguas
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((p, i) => (
              <div key={p.paso} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{p.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: '#002A50' }}>{p.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre la concesión de aguas superficiales
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} className="faq-item" style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros trámites y servicios técnicos de BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Permiso de vertimiento Colombia', href: '/tramitar-permiso-vertimiento-colombia' },
              { label: 'Diseño bocatomas Colombia', href: '/bocatomas-colombia' },
              { label: 'Diseño acueducto para ESP', href: '/diseno-acueducto-entrega-esp' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Ingeniería hidráulica Colombia', href: '/ingenieria-hidraulica-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>{s.label} →</a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FORMULARIO ── */}
      {/* ── ANTI-INTERMEDIARIO ENHANCED ── */}
      <Section style={{ background: '#001A33', padding: '44px 24px' }}>
        <div style={{ maxWidth: 740, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(16px, 2.2vw, 22px)', color: '#fff', marginBottom: 12 }}>
            Solo con quien tiene el predio y puede contratar directamente
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.80)', fontSize: 14, lineHeight: 1.8, maxWidth: 660, margin: '0 auto 8px' }}>
            BIC tramita concesiones para <strong style={{ color: '#17A2B8' }}>propietarios, empresarios y proyectos privados</strong> que necesitan el permiso de captación — no con intermediarios ni con ingenieros buscando referencias de precio.
            Si usted es el contratante directo y tiene el proyecto activo, la propuesta llega en 24 horas.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.30)', fontSize: 11 }}>
            ¿Colega buscando precio o asesoría? No es el canal.
          </p>
        </div>
      </Section>

      <ThinLine />


      <Section>
        <QuoteFormInline />
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💧</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita tramitar la concesión<br />de aguas ante la CAR?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Cuéntenos la fuente hídrica, el caudal aproximado y el uso del agua.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Propuesta en 24 h — sin costo
            </a>
            <a href="/contacto" style={{ display: 'inline-block', padding: '15px 36px', background: 'transparent', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
