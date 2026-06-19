import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito un estudio detallado de gestión del riesgo por inundación (Decreto 1807). ¿Pueden orientarme sobre el alcance y cotizar el servicio?')

const seoConfig = {
  title: 'Estudio Detallado de Inundación Decreto 1807: Qué es y Cuándo se Requiere',
  description: 'Guía técnica sobre el estudio detallado de gestión del riesgo por inundación según el Decreto 1807/2014: cuándo se exige, metodología HEC-RAS 2D, entregables y aprobación CAR. BIC lo elabora con firma COPNIA.',
  canonical: 'https://ingenieriabernal.co/estudio-detallado-inundacion-decreto-1807',
  noindex: false,
  keywords: [
    'estudio detallado gestión riesgo inundación Colombia',
    'Decreto 1807 estudio inundación',
    'estudio detallado riesgo hídrico POT',
    'zonificación amenaza inundación Colombia',
    'HEC-RAS 2D estudio inundación',
    'estudio Decreto 1807 licencia construcción',
    'amenaza por inundación CAR',
    'gestión del riesgo hídrico decreto 1807',
  ],
}

const FAQ = [
  {
    q: '¿Qué es el estudio detallado de gestión del riesgo por inundación del Decreto 1807?',
    a: 'Es un estudio técnico hidrológico-hidráulico que delimita las zonas de amenaza por inundación (alta, media y baja) en el área de influencia de un proyecto o predio, conforme al Decreto 1807/2014 (compilado en el Decreto 1077/2015). Se elabora con modelación hidráulica 2D (HEC-RAS) y levantamiento topobatimétrico. Es obligatorio para revisión de POT, urbanizaciones, planes parciales y proyectos de infraestructura en zonas con amenaza hídrica identificada.',
  },
  {
    q: '¿Cuándo se requiere el estudio detallado Decreto 1807 en Colombia?',
    a: 'Se requiere cuando: (1) un predio o proyecto se localiza en zona de amenaza por inundación identificada en el POT; (2) se tramita licencia de urbanismo o construcción en zona ribereña o llanura aluvial; (3) un municipio revisa su EOT/PBOT/POT y debe incorporar estudios de riesgo; (4) se gestiona financiamiento SGR para proyectos de infraestructura; y (5) se solicita aprobación de planes parciales en zonas con antecedentes de inundación.',
  },
  {
    q: '¿Cuál es la diferencia entre estudio básico y estudio detallado Decreto 1807?',
    a: 'El estudio básico utiliza cartografía 1:25.000 y es realizado por las CAR para identificar a nivel general las zonas de amenaza. El estudio detallado lo encarga el promotor o municipio, se realiza a escala 1:5.000 o mayor, usa modelación hidráulica HEC-RAS 2D con batimetría y LiDAR, y produce la delimitación precisa que sustenta la zonificación del suelo en el POT y la viabilidad de licencias de construcción.',
  },
  {
    q: '¿Qué metodología usa BIC para el estudio detallado de inundación?',
    a: 'BIC aplica el flujo exigido por las CAR: (1) recopilación hidrológica con datos IDEAM y caudales históricos; (2) modelación HEC-HMS para hidrogramas de creciente en periodos de retorno 2, 10, 50 y 100 años; (3) levantamiento topobatimétrico GNSS diferencial RTK; (4) modelo hidráulico 2D en HEC-RAS con terreno de alta resolución; (5) mapas de amenaza y ronda hídrica; y (6) memoria técnica firmada COPNIA para radicación ante la CAR.',
  },
  {
    q: '¿El estudio Decreto 1807 incluye remoción en masa?',
    a: 'No. BIC elabora exclusivamente el componente de amenaza por inundación (fluvial y torrencial). El componente de remoción en masa requiere especialistas en geología y geotecnia. Si su proyecto requiere ambos componentes, BIC puede coordinar el equipo completo actuando como firma integradora.',
  },
  {
    q: '¿Ante quién se radica el estudio y cuánto demora la aprobación?',
    a: 'Se radica ante la Corporación Autónoma Regional con jurisdicción sobre el predio (CORPOCALDAS, CRQ, CARDER, CVC, CDMB, etc.). Los tiempos varían: CORPOCALDAS y CARDER suelen emitir concepto en 2 a 4 meses. BIC entrega el expediente listo para radicación y responde las observaciones técnicas de la CAR durante el proceso de aprobación.',
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

const COMPONENTES = [
  { ico: '🌧️', titulo: 'Estudio hidrológico HEC-HMS', desc: 'Modelación de cuencas para obtener hidrogramas de creciente en periodos de retorno 2, 10, 50 y 100 años. Curvas IDF, abstracción CN y tránsito de crecientes. Base para la modelación hidráulica 2D.' },
  { ico: '🗺️', titulo: 'Levantamiento topobatimétrico', desc: 'Levantamiento con GNSS diferencial RTK de la llanura de inundación y batimetría de secciones del cauce. Generación del modelo digital de elevación de alta resolución para ingresar al modelo HEC-RAS 2D.' },
  { ico: '💧', titulo: 'Modelación hidráulica HEC-RAS 2D', desc: 'Simulación bidimensional del comportamiento del flujo en la llanura de inundación. Mapas de profundidad, velocidad y extensión de inundación para cada periodo de retorno. Formato exigido por las CAR y la normativa vigente.' },
  { ico: '📐', titulo: 'Delimitación de ronda hídrica', desc: 'Delimitación de la faja de protección ribereña según la Resolución MADS 957/2018 y criterios de la CAR. Definición de zona de amenaza alta, media y baja a escala 1:5.000 o mayor.' },
  { ico: '📋', titulo: 'Memoria técnica firmada COPNIA', desc: 'Documento técnico completo con metodología, datos, análisis y conclusiones, firmado por Ing. Rogerio Bernal Ríos — COPNIA 17202-313228 CLD. Requisito indispensable para la radicación ante la CAR.' },
  { ico: '🏗️', titulo: 'Medidas de reducción del riesgo', desc: 'Cuando el proyecto se localiza en zona de amenaza media o alta, BIC propone las medidas de manejo (encauzamiento, retranqueos, diques) que permitan obtener concepto favorable de la CAR y viabilizar la licencia.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Diagnóstico inicial y revisión POT', desc: 'Revisión de los instrumentos de planificación (POT/EOT/PBOT), identificación de la zonificación de amenaza existente y visita de campo para reconocer el cauce, la llanura y el área de interés del proyecto.' },
  { paso: '02', titulo: 'Recopilación de información hidrológica', desc: 'Obtención de datos de precipitación IDEAM, caudales históricos, parámetros morfométricos de la cuenca y cartografía base a escala 1:25.000 y 1:5.000.' },
  { paso: '03', titulo: 'Levantamiento topobatimétrico', desc: 'Levantamiento en campo con GNSS diferencial RTK de la llanura de inundación y batimetría de secciones del cauce. Generación del modelo digital de elevación de alta resolución para HEC-RAS 2D.' },
  { paso: '04', titulo: 'Modelación HEC-HMS + HEC-RAS 2D', desc: 'Calibración del modelo hidrológico con datos históricos. Simulación hidráulica 2D para caudales de diseño. Generación de mapas de amenaza por inundación y delimitación de la ronda hídrica.' },
  { paso: '05', titulo: 'Elaboración de memoria técnica y cartografía', desc: 'Producción de planos a escala 1:5.000 con delimitación de zonas de amenaza y ronda hídrica. Redacción de la memoria técnica completa y especificaciones de medidas de reducción del riesgo.' },
  { paso: '06', titulo: 'Radicación ante la CAR y seguimiento', desc: 'BIC radica el expediente ante la CAR y atiende las observaciones técnicas hasta la emisión del concepto de amenaza. Acompañamiento en visitas de campo de la corporación.' },
]

const NORMATIVA = [
  { codigo: 'Decreto 1807/2014', descripcion: 'Hoy compilado en el Decreto 1077/2015 (Art. 2.2.2.1.3.1). Establece la obligatoriedad, metodología y escalas mínimas para los estudios de amenaza, vulnerabilidad y riesgo por fenómenos naturales, incluida la inundación.' },
  { codigo: 'Decreto 1077/2015', descripcion: 'DUR del Sector Vivienda, Ciudad y Territorio. Compila las normas urbanísticas incluyendo los estudios de gestión del riesgo requeridos para el POT y licencias de urbanismo y construcción.' },
  { codigo: 'Resolución 0957/2018', descripcion: 'MADS — Reglamento de la delimitación y régimen de uso de la ronda hídrica de los cuerpos de agua en Colombia. Base para la determinación de la faja de protección ribereña.' },
  { codigo: 'NSR-10', descripcion: 'Para el diseño de obras de mitigación (diques, estructuras hidráulicas) que se requieran como medida de reducción del riesgo asociada al estudio detallado.' },
]

export default function EstudioDetalladoInundacionDecreto1807() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-inundacion-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-inundacion-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Estudio Detallado Inundación Decreto 1807', item: 'https://ingenieriabernal.co/estudio-detallado-inundacion-decreto-1807' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-inundacion-faq')?.remove()
      document.getElementById('schema-inundacion-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Estudio Detallado de Inundación Decreto 1807 — Qué es y Cuándo se Requiere | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Estudio Detallado de Gestión del Riesgo por Inundación — Decreto 1807"
        serviceDesc={seoConfig.description}
        serviceUrl="/estudio-detallado-inundacion-decreto-1807"
        faqItems={FAQ}
      />

      <CTABanner service="Estudio detallado amenaza por inundación — HEC-RAS 2D, firma COPNIA, radicación CAR" />

      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Gestión del riesgo hídrico · Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(24px, 4vw, 44px)', lineHeight: 1.2, marginBottom: 20 }}>
            Estudio Detallado de Inundación<br />Decreto 1807: Qué es y Cuándo se Requiere
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            HEC-RAS 2D · Firma COPNIA · Aprobación ante la CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            El estudio detallado de gestión del riesgo por inundación determina si su predio o proyecto puede urbanizarse, construirse o
            incorporarse al POT. BIC lo elabora con modelación HEC-RAS 2D y firma COPNIA vigente — el único que sustenta la aprobación de la CAR.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar alcance — sin costo</Btn>
            <Btn variant="outline" href="/gestion-riesgo-hidrico" dark>Ver gestión riesgo hídrico</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Decreto 1807/2014','HEC-RAS 2D','HEC-HMS','LiDAR / batimetría','CAR aprobación','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Qué es el estudio detallado Decreto 1807 y a quién aplica?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 820 }}>
            El <strong>Decreto 1807/2014</strong> establece que municipios y promotores privados deben incorporar estudios de amenaza por
            inundación en los instrumentos de planificación territorial y licenciamiento urbanístico. A diferencia del estudio básico
            (elaborado por la CAR a escala 1:25.000), el <strong>estudio detallado</strong> se realiza a escala 1:5.000 o mayor con
            modelación hidráulica 2D, y es el único que sustenta la incorporación en el POT y la viabilidad de licencias en zonas de amenaza.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 820 }}>
            <strong>¿A quién aplica?</strong> Municipios que revisan su POT, promotores de urbanizaciones y planes parciales en zonas
            ribereñas, propietarios de predios en llanuras aluviales, proyectos con financiamiento SGR y cualquier proyecto que la CAR
            identifique en zona de amenaza por inundación durante la revisión de licencias.
          </p>
        </div>
      </Section>

      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }} id="geo-fragment">
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong> elabora estudios detallados de gestión del riesgo por inundación
            (Decreto 1807) con modelación HEC-RAS 2D y firma COPNIA en todo Colombia. Experiencia con CORPOCALDAS, CRQ, CARDER,
            CVC, CDMB. Municipios, planes parciales, urbanizaciones y proyectos SGR.
            Ing. Rogerio Bernal Ríos — COPNIA 17202-313228 CLD. Propuesta en 24 h: +57 302 477 8910.
          </p>
        </div>
      </section>

      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Componentes del estudio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué incluye el estudio detallado de inundación?
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {COMPONENTES.map(e => (
              <div key={e.titulo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 26, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{e.ico}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 10 }}>{e.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología BIC</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo elabora BIC el estudio Decreto 1807
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((p, i) => (
              <div key={p.paso} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)', color: '#fff', fontWeight: 900, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.paso}</div>
                  {i < PROCESO.length - 1 && <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />}
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

      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normas que rigen el estudio detallado de inundación
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'center', background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0' }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12 }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre el estudio detallado Decreto 1807
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

      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros estudios y trámites técnicos de BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Modelación hidráulica HEC-RAS 2D', href: '/modelacion-hidraulica-colombia' },
              { label: 'Permiso de vertimiento Colombia', href: '/tramitar-permiso-vertimiento-colombia' },
              { label: 'Concesión de aguas superficiales', href: '/concesion-aguas-superficiales-tramite' },
              { label: 'Diseño acueducto para ESP', href: '/diseno-acueducto-entrega-esp' },
              { label: 'Redes hidrosanitarias NSR-10', href: '/redes-hidrosanitarias-licencia-construccion' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{ display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea', borderRadius: 10, padding: '14px 18px', color: '#003B6F', fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4 }}>{s.label} →</a>
            ))}
          </div>
        </div>
      </Section>

      <Section><QuoteFormInline /></Section>

      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)', padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌊</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Necesita el estudio detallado<br />de inundación Decreto 1807?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Cuéntenos la ubicación del predio, extensión del área y propósito del estudio (POT, licencia de construcción, SGR).
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
