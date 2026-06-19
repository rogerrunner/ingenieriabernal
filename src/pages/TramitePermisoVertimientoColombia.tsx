import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito tramitar un permiso de vertimiento ante la CAR. ¿Pueden orientarme sobre los estudios requeridos y cotizar el servicio?')

const seoConfig = {
  title: 'Permiso de Vertimiento en Colombia: Qué Estudios se Requieren y Cómo Tramitarlo',
  description: 'Guía completa para tramitar el permiso de vertimiento ante la CAR en Colombia: estudios técnicos requeridos, diseño PTAR, caracterización, proceso paso a paso. BIC lleva el trámite completo.',
  canonical: 'https://ingenieriabernal.co/tramitar-permiso-vertimiento-colombia',
  noindex: false,
  keywords: [
    'permiso de vertimiento Colombia cómo tramitar',
    'qué estudios pide la CAR para permiso vertimiento',
    'permiso vertimiento Colombia requisitos',
    'trámite permiso vertimiento CAR',
    'estudio caracterización vertimiento Colombia',
    'diseño PTAR permiso vertimiento',
    'permiso ambiental vertimientos Colombia',
    'Decreto 1076 2015 vertimientos',
  ],
}

const FAQ = [
  {
    q: '¿Quién necesita permiso de vertimiento en Colombia?',
    a: 'Todo proyecto que descargue aguas residuales (domésticas, industriales o de servicios) a un cuerpo hídrico superficial, subterráneo o al suelo necesita permiso de vertimiento ante la CAR correspondiente, según el Decreto 1076/2015. Esto incluye urbanizaciones, hoteles, industrias, campamentos, beneficiaderos de café y cualquier actividad que genere efluentes líquidos.',
  },
  {
    q: '¿Cuáles son los estudios técnicos que exige la CAR para el permiso de vertimiento?',
    a: 'La CAR exige: (1) caracterización fisicoquímica y microbiológica del vertimiento, (2) diseño del sistema de tratamiento (PTAR) firmado por ingeniero con matrícula COPNIA vigente, (3) caracterización del cuerpo receptor, (4) análisis de capacidad de asimilación del cuerpo hídrico, (5) memoria descriptiva del proyecto, (6) coordenadas del punto de vertimiento y (7) formularios del SISTEMA de la CAR. BIC elabora todos estos documentos.',
  },
  {
    q: '¿Cuánto demora obtener el permiso de vertimiento?',
    a: 'El proceso tiene dos fases: (1) elaboración de estudios técnicos por BIC: 4 a 8 semanas según complejidad; (2) trámite ante la CAR: entre 3 y 8 meses dependiendo de la corporación (CORPOCALDAS, CRQ, CARDER, etc.) y la carga administrativa. BIC acompaña el proceso respondiendo observaciones hasta la expedición del permiso.',
  },
  {
    q: '¿Qué es el Decreto 1076/2015 en materia de vertimientos?',
    a: 'El Decreto 1076/2015 (DUR Sector Ambiente) compila la normativa ambiental colombiana. El Artículo 2.2.3.3 regula los permisos de vertimiento: define quién los necesita, qué información debe presentarse y los plazos del trámite. Complementa la Resolución 0631/2015 del MADS, que establece los límites máximos permisibles para cada parámetro contaminante.',
  },
  {
    q: '¿BIC tramita el permiso directamente ante la CAR?',
    a: 'BIC elabora toda la documentación técnica requerida y acompaña el proceso ante la CAR. El radicado formal lo realiza el cliente (o BIC con poder notarial si el cliente lo delega), pero BIC responde las observaciones técnicas, asiste a visitas de campo y gestiona hasta la expedición del permiso.',
  },
  {
    q: '¿Se puede obtener permiso de vertimiento sin construir la PTAR?',
    a: 'No. La CAR exige el diseño aprobado de la PTAR antes de otorgar el permiso. Una vez expedido el permiso, el cliente tiene un plazo para construir la planta. BIC diseña la PTAR y elabora el expediente del permiso en un solo proceso integrado, lo que reduce tiempos y costos.',
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
  { ico: '🧪', titulo: 'Caracterización del vertimiento', desc: 'Muestreo compuesto del efluente en laboratorio acreditado. Parámetros: DBO₅, DQO, SST, grasas y aceites, pH, coliformes fecales y los específicos por actividad (metales pesados, fenoles, etc.) según la Resolución 0631/2015.' },
  { ico: '⚙️', titulo: 'Diseño del sistema de tratamiento (PTAR)', desc: 'Diseño hidráulico-sanitario de la planta de tratamiento firmado por ingeniero con matrícula COPNIA vigente. Incluye análisis de alternativas, dimensionamiento de unidades, planos constructivos y especificaciones técnicas.' },
  { ico: '🏞️', titulo: 'Caracterización del cuerpo receptor', desc: 'Aforo del caudal del cuerpo receptor, muestreo de calidad del agua aguas arriba del punto de vertimiento. Análisis de la capacidad de asimilación y dilución del efluente tratado.' },
  { ico: '📍', titulo: 'Levantamiento topográfico y coordenadas', desc: 'Localización del punto de vertimiento en coordenadas Magna-Sirgas. Perfil topográfico del área de influencia. Plano de localización a escala apropiada para el expediente CAR.' },
  { ico: '📋', titulo: 'Memoria descriptiva del proyecto', desc: 'Descripción técnica completa del proceso generador del vertimiento, volúmenes, frecuencia de descarga y tecnología de tratamiento. Documento central del expediente ante la CAR.' },
  { ico: '🔬', titulo: 'Prueba de percolación (sistema séptico)', desc: 'Para vertimientos al suelo mediante campo de infiltración. Ensayo de percolación para determinar la capacidad de absorción del suelo y dimensionar el sistema de dispersión subsuperficial.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Visita de campo y levantamiento de información', desc: 'BIC realiza visita al predio para identificar el punto de captación o vertimiento, evaluar las condiciones del cuerpo hídrico receptor y recolectar la información base para los estudios.' },
  { paso: '02', titulo: 'Caracterización del efluente y cuerpo receptor', desc: 'Toma de muestras compuestas del vertimiento y del cuerpo receptor para análisis en laboratorio acreditado. Los resultados determinan los parámetros de diseño de la PTAR y el impacto sobre el receptor.' },
  { paso: '03', titulo: 'Diseño de la PTAR y memoria de cálculo', desc: 'Con base en la caracterización, BIC diseña la PTAR más adecuada: sistema séptico, PTAR compacta, lagunas o sistema biológico. Entrega memorias de cálculo, planos y especificaciones técnicas firmadas COPNIA.' },
  { paso: '04', titulo: 'Elaboración del expediente para la CAR', desc: 'BIC compila el expediente completo: memoria descriptiva, caracterizaciones, diseño PTAR, coordenadas, formularios SISTEMA y documentación del solicitante. Revisión interna antes de radicación.' },
  { paso: '05', titulo: 'Radicación y trámite ante la CAR', desc: 'Radicación del expediente ante la corporación autónoma regional correspondiente (CORPOCALDAS, CRQ, CARDER, CVC, etc.). BIC atiende las observaciones técnicas, participa en visitas de campo y gestiona hasta la expedición del permiso.' },
]

const NORMATIVA = [
  { codigo: 'Decreto 1076/2015', descripcion: 'Art. 2.2.3.3 — Régimen de permisos de vertimiento. Define quién requiere permiso, qué información presentar y los plazos del trámite ante la CAR.' },
  { codigo: 'Resolución 0631/2015', descripcion: 'MADS — Establece los parámetros y valores límite máximos permisibles para vertimientos puntuales a cuerpos de agua superficiales y al alcantarillado.' },
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'MVCT — Reglamento Técnico del Sector de Agua Potable y Saneamiento. Criterios de diseño para sistemas de tratamiento de aguas residuales.' },
  { codigo: 'NSR-10', descripcion: 'Diseño estructural de tanques, reactores y estructuras de concreto de la PTAR. Requerido para que el diseño civil sea válido.' },
]

export default function TramitePermisoVertimientoColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-permiso-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-permiso-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Permiso de Vertimiento Colombia', item: 'https://ingenieriabernal.co/tramitar-permiso-vertimiento-colombia' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-permiso-faq')?.remove()
      document.getElementById('schema-permiso-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Permiso de Vertimiento en Colombia — Qué Estudios se Requieren y Cómo Tramitarlo | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Trámite de Permiso de Vertimiento ante la CAR — Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/tramitar-permiso-vertimiento-colombia"
        faqItems={FAQ}
      />

      <CTABanner service="Trámite de permiso de vertimiento — estudios técnicos y gestión ante CAR" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Trámite ambiental · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(24px, 4vw, 44px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Permiso de Vertimiento en Colombia:<br />Qué Estudios se Requieren y Cómo Tramitarlo
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Todo lo que necesita saber antes de ir a la CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            El permiso de vertimiento es el acto administrativo que autoriza descargar aguas residuales a un cuerpo hídrico o al suelo.
            Sin él, su proyecto puede ser sancionado o paralizado por la Corporación Autónoma Regional. BIC elabora los estudios técnicos
            requeridos y gestiona el proceso completo hasta la expedición del permiso.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar requisitos — sin costo</Btn>
            <Btn variant="outline" href="/diseno-ptar-colombia" dark>Ver diseño de PTAR</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Decreto 1076/2015','Res. 0631/2015','CAR · CORPOCALDAS · CRQ','Trámite completo','COPNIA vigente','PTAR diseño'].map(t => (
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
            ¿Qué es el permiso de vertimiento y quién lo necesita?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 820 }}>
            El <strong>permiso de vertimiento</strong> es la autorización ambiental que otorga la Corporación Autónoma Regional (CAR) para
            descargar aguas residuales tratadas a un cuerpo hídrico superficial, subterráneo o al suelo. Está regulado por el
            <strong> Decreto 1076/2015 (Artículo 2.2.3.3)</strong> y complementado por la Resolución 0631/2015 del MADS, que establece
            los parámetros máximos permisibles del efluente.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 820 }}>
            <strong>¿Quién lo necesita?</strong> Cualquier persona natural o jurídica que genere vertimientos de aguas residuales:
            urbanizaciones, conjuntos residenciales campestres, hoteles, fincas agropecuarias, industrias, campamentos de obra,
            beneficiaderos de café, lavaderos, restaurantes con caudal significativo y cualquier proyecto que no pueda conectarse
            al sistema de alcantarillado público. La obligación aplica tanto en zona rural como urbana.
          </p>
        </div>
      </Section>

      {/* ── GEO FRAGMENT ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }} id="geo-fragment">
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong> elabora los estudios técnicos para tramitar el permiso de vertimiento
            ante la CAR en Colombia: caracterización del efluente, diseño de PTAR, caracterización del cuerpo receptor y expediente completo.
            Cobertura: Eje Cafetero (CORPOCALDAS, CRQ, CARDER), todo Colombia y proyectos internacionales en Ecuador.
            Ing. Rogerio Bernal Ríos — COPNIA 17202-313228 CLD. Propuesta en 24 h: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── ESTUDIOS REQUERIDOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Documentación técnica</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué estudios técnicos exige la CAR para el permiso de vertimiento?
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
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Paso a paso</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo tramita BIC el permiso de vertimiento
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

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normas que rigen el trámite de vertimiento en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12 }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
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
            Todo sobre el permiso de vertimiento en Colombia
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
              { label: 'Diseño de PTAR Colombia', href: '/diseno-ptar-colombia' },
              { label: 'Concesión de aguas Colombia', href: '/concesion-aguas-superficiales-tramite' },
              { label: 'Diseño acueducto para ESP', href: '/diseno-acueducto-entrega-esp' },
              { label: 'Estudio inundación Decreto 1807', href: '/estudio-detallado-inundacion-decreto-1807' },
              { label: 'Redes hidrosanitarias NSR-10', href: '/redes-hidrosanitarias-licencia-construccion' },
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>📋</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita tramitar el permiso<br />de vertimiento ante la CAR?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Cuéntenos el tipo de vertimiento, la CAR ante quien debe tramitarlo y la región.
            BIC le envía propuesta técnica con alcance y costos en menos de 24 horas.
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
