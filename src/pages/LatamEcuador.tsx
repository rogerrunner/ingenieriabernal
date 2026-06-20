import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, tengo un proyecto en Ecuador y necesito consultoría en ingeniería hidráulica. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Consultoría en Ingeniería Hidráulica Ecuador — HEC-RAS, SENAGUA | BIC',
  description: 'BIC ofrece estudios hidrológicos, modelación HEC-RAS 2D, diseño de acueductos y gestión del riesgo hídrico para proyectos en Ecuador. Firma COPNIA. Propuesta en 24 h.',
  keywords: [
    'consultoría ingeniería hidráulica Ecuador',
    'estudios hidrológicos Ecuador',
    'modelación HEC-RAS Ecuador',
    'gestión riesgo inundación Ecuador',
    'diseño acueducto alcantarillado Ecuador',
    'SENAGUA trámites Ecuador',
    'ingeniería hídrica Ecuador',
    'consultor hidráulico Ecuador',
    'estudio inundación Ecuador',
    'diseño sistema drenaje pluvial Ecuador',
  ],
  canonical: 'https://ingenieriabernal.co/consultoria-hidraulica-ecuador',
}

const SCHEMA_ORG = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BIC — Bernal Ingeniería Consultores',
  description: 'Consultoría en ingeniería hidráulica para proyectos en Ecuador: estudios hidrológicos, modelación HEC-RAS 2D, diseño de acueductos y gestión del riesgo hídrico.',
  url: 'https://ingenieriabernal.co/consultoria-hidraulica-ecuador',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  areaServed: 'Ecuador',
}

const SERVICIOS = [
  {
    icon: '🌊',
    titulo: 'Estudios hidrológicos e hidráulicos',
    desc: 'Análisis de cuencas, caudales de diseño, curvas IDF y modelación de inundaciones para proyectos en Ecuador conforme a metodologías INAMHI y estándares internacionales.',
    precio: 'Desde $3.500 USD',
  },
  {
    icon: '🖥️',
    titulo: 'Modelación HEC-RAS 2D',
    desc: 'Delimitación de zonas de inundación, amenaza y riesgo hídrico para planes de ordenamiento territorial (PDOT), proyectos urbanísticos y estudios de impacto ambiental en Ecuador.',
    precio: 'Desde $4.000 USD',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño de acueductos y alcantarillado',
    desc: 'Diseño de redes de distribución de agua potable, colectores sanitarios y sistemas de drenaje pluvial bajo normas INEN y reglamentos técnicos ecuatorianos.',
    precio: 'Desde $2.800 USD',
  },
  {
    icon: '📋',
    titulo: 'Gestión del riesgo hídrico',
    desc: 'Estudios de amenaza, vulnerabilidad y riesgo por inundaciones y movimientos en masa para predios, urbanizaciones y proyectos de infraestructura en Ecuador.',
    precio: 'Desde $3.000 USD',
  },
  {
    icon: '🌿',
    titulo: 'Trámites ante SENAGUA y MAE',
    desc: 'Apoyo técnico en la elaboración de estudios para concesiones de agua, autorizaciones de aprovechamiento hídrico y licencias ante SENAGUA y el Ministerio de Ambiente del Ecuador.',
    precio: 'Consulte según alcance',
  },
  {
    icon: '🔍',
    titulo: 'Interventoría y supervisión técnica',
    desc: 'Seguimiento técnico a contratos de obra en sistemas de agua potable y saneamiento financiados por el BEDE, GAD municipales o entidades multilaterales en Ecuador.',
    precio: 'Consulte según alcance',
  },
]

const DIFERENCIADORES = [
  {
    icon: '🎓',
    tit: 'Especialista con experiencia regional',
    txt: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL Manizales). Experiencia en proyectos hídricos en Colombia y América Latina con metodologías compartidas por la región andina.',
  },
  {
    icon: '🖥️',
    tit: 'HEC-RAS 2D y herramientas avanzadas',
    txt: 'Modelación hidráulica con HEC-RAS 2D, SWMM, EPANET y SIG (ArcGIS / QGIS). Resultados compatibles con los requerimientos técnicos de SENAGUA, GAD y entidades ecuatorianas.',
  },
  {
    icon: '⚡',
    tit: 'Propuesta en 24 horas',
    txt: 'Propuesta técnica y económica sin costo en menos de 24 horas. Entregables 100% digitales que no requieren desplazamiento a Ecuador para la mayoría de los estudios.',
  },
  {
    icon: '💵',
    tit: 'Tarifas en USD — trato directo',
    txt: 'Contratación directa con el especialista. Tarifas transparentes en dólares. Facturación desde Colombia con soporte técnico permanente.',
  },
]

const FAQ_SCHEMA = [
  {q: "¿BIC hace proyectos de ingeniería hidráulica en Ecuador?",
   a: "Sí. BIC — Bernal Ingeniería Consultores realiza consultoría en ingeniería hidráulica para proyectos en Ecuador en modalidad remota: estudios hidrológicos con datos INAMHI (Instituto Nacional de Meteorología e Hidrología), modelación HEC-RAS 2D para proyectos de gestión del riesgo hídrico, diseño de sistemas de agua potable y saneamiento conforme a normas INEN y SENAGUA, y estudios para permisos ante el Ministerio del Ambiente, Agua y Transición Ecológica (MAATE). Experiencia en Sierra, Costa y Amazonía ecuatoriana."},
  {q: "¿Cuál es la normativa de diseño de agua potable en Ecuador?",
   a: "En Ecuador, el diseño de sistemas de agua potable se rige por las Normas INEN (NTE INEN 1108 calidad del agua potable), las Normas para Estudio y Diseño de Sistemas de Agua Potable y Disposición de Aguas Residuales de la Subsecretaría de Agua Potable y Saneamiento (ex-MIDUVI), y los lineamientos técnicos de SENAGUA para concesiones. BIC adapta sus diseños a las normas ecuatorianas y tiene experiencia colaborando con ingenieros locales para la firma de planos en Ecuador."},
  {q: "¿Cómo se tramita una concesión de aguas en Ecuador?",
   a: "En Ecuador, las concesiones de uso y aprovechamiento del agua las otorga la Secretaría Nacional del Agua (SENAGUA) a través de sus Demarcaciones Hidrográficas. El trámite requiere: solicitud formal, estudio técnico de la fuente (caudal disponible, balance hídrico), diseño de la obra de captación, descripción del uso y caudal solicitado. BIC elabora los estudios técnicos hidrológicos e hidráulicos para el trámite de concesión ante SENAGUA. El proceso puede tardar entre 6 y 18 meses."},
]

export default function LatamEcuador() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-latam-ecuador'
    script.textContent = JSON.stringify(SCHEMA_ORG)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-latam-ecuador')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup type="service" faqItems={FAQ_SCHEMA} serviceName="Consultoría Ingeniería Hidráulica Ecuador" serviceUrl="/consultoria-hidraulica-ecuador" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicios para Ecuador · LATAM</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Consultoría en Ingeniería Hidráulica<br />
            <span style={{ color: '#17A2B8' }}>para Proyectos en Ecuador</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 12,
          }}>
            BIC presta servicios de consultoría hidráulica para clientes en Ecuador:
            promotores, municipios GAD, constructoras y entidades públicas que necesitan
            estudios hidrológicos, modelación HEC-RAS 2D, diseño de acueductos
            y gestión del riesgo hídrico.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)',
            fontSize: 15, lineHeight: 1.6, maxWidth: 720, marginBottom: 36,
          }}>
            Entregables digitales. Propuesta sin costo en 24 horas. Tarifas en USD.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar propuesta — sin costo
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios disponibles para Ecuador</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos podemos ejecutar en Ecuador?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 24, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{s.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6, marginBottom: 12,
                }}>{s.desc}</p>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 13,
                }}>{s.precio}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>¿Por qué contratar BIC desde Ecuador?</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Experiencia regional · Entrega digital · Sin fronteras</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {DIFERENCIADORES.map(d => (
              <div key={d.tit} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.tit}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{d.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTEXTO ECUADOR ── */}
      <Section bg="#F0F7FF" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Contexto técnico</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(20px, 3.5vw, 28px)', marginBottom: 16,
          }}>
            Ingeniería hidráulica en Ecuador: regulación y demanda
          </h2>
          <ThinLine mb={24} />
          <p style={{
            fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16,
          }}>
            Ecuador cuenta con un marco normativo hídrico robusto. La <strong>Ley Orgánica de Recursos
            Hídricos (2014)</strong>, administrada por la SENAGUA, regula concesiones y aprovechamiento
            de fuentes superficiales y subterráneas. Las normas técnicas del <strong>MIDUVI</strong> (NTE INEN,
            Norma CO 10.7-601) rigen el diseño de acueductos y alcantarillados para urbanizaciones
            y proyectos de vivienda.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16,
          }}>
            El <strong>INAMHI</strong> (Instituto Nacional de Meteorología e Hidrología) publica los
            registros hidrometeorológicos que sustentan los cálculos de caudales de diseño. BIC trabaja
            con datos INAMHI y metodologías validadas en la región andina, compartida entre Colombia y Ecuador.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8,
          }}>
            La demanda de estudios hidráulicos crece en Ecuador de la mano de los <strong>PDOT</strong>
            (planes de desarrollo y ordenamiento territorial), los proyectos de vivienda del MIDUVI,
            la expansión urbana en Guayaquil, Quito, Cuenca y ciudades intermedias, y los proyectos
            de infraestructura financiados por el BEDE y el Banco Mundial.
          </p>
        </div>
      </Section>

      {/* ── FORMULARIO ── */}
      <Section bg="#fff" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <SectionLabel>Solicitar propuesta</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(20px, 3.5vw, 28px)', marginBottom: 8,
          }}>Cuéntenos su proyecto en Ecuador</h2>
          <ThinLine mb={32} />
          <QuoteFormInline serviceId="latam-ecuador" />
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 16,
          }}>
            ¿Tiene un proyecto en Ecuador?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos la ubicación y el tipo de estudio que necesita.
            Le respondemos con una propuesta técnica y económica en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Propuesta en 24 h — sin costo
          </Btn>
        </div>
      </Section>
    </>
  )
}
