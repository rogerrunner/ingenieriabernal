import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito diseño de red de aguas lluvias en Manizales. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño Aguas Lluvias en Manizales | BIC',
  description: 'Diseño de redes de aguas lluvias para cubiertas, colegios y urbanizaciones en Manizales. NSR-10, RAS 2017. BIC, COPNIA vigente. Cotice hoy.',
  keywords: [
    'diseño aguas lluvias Manizales',
    'red aguas lluvias Manizales',
    'drenaje pluvial Manizales',
    'diseño hidrosanitario Manizales',
    'aguas lluvias cubierta Manizales',
    'drenaje colegio Manizales',
    'NSR-10 aguas lluvias Manizales',
    'redes pluviales Manizales',
    'ingeniero hidrosanitario Manizales',
    'diseño aguas lluvias Caldas',
  ],
  canonical: 'https://ingenieriabernal.co/aguas-lluvias-manizales',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Diseño de Redes de Aguas Lluvias en Manizales',
  description: 'Diseño de redes de aguas lluvias para cubiertas, colegios y urbanizaciones en Manizales y Caldas. NSR-10, RAS 2017. COPNIA vigente.',
  url: 'https://ingenieriabernal.co/aguas-lluvias-manizales',
  serviceType: 'Diseño de Redes de Aguas Lluvias',
  areaServed: ['Manizales', 'Caldas', 'Eje Cafetero', 'Colombia'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bernal Ingeniería Consultores — BIC',
    url: 'https://ingenieriabernal.co',
    telephone: '+573024778910',
  },
}

const SERVICIOS = [
  {
    icon: '🏫',
    titulo: 'Aguas lluvias para colegios e instituciones',
    desc: 'Diseño del sistema de recolección y conducción de aguas lluvias para colegios, hospitales, clínicas y edificios institucionales en Manizales. Cálculo de caudal pluvial con las curvas IDF del IDEAM para Manizales, diseño de bajantes, canales de cubierta, cajas de inspección y conexión a la red pública de alcantarillado pluvial conforme al RAS 2017.',
  },
  {
    icon: '🏗️',
    titulo: 'Drenaje pluvial para urbanizaciones y planes parciales',
    desc: 'Diseño del sistema de drenaje pluvial para urbanizaciones residenciales, planes parciales y desarrollos industriales en Manizales y el Eje Cafetero. Cálculo de caudales con el método racional o el método hidrogramas SCS según la extensión de la cuenca, diseño de colectores pluviales, box culverts y estructuras de disipación de energía.',
  },
  {
    icon: '🏢',
    titulo: 'Redes pluviales para edificios y centros comerciales',
    desc: 'Diseño de la red interna de aguas lluvias para edificios residenciales, comerciales e industriales en Manizales. Dimensionamiento de bajantes de aguas lluvias, canales de cubierta, filtros de arena, sumideros y conexiones a red exterior. Cumplimiento de la NSR-10 Título I y el manual de diseño del Municipio de Manizales.',
  },
  {
    icon: '♻️',
    titulo: 'Sistemas de aprovechamiento de aguas lluvias',
    desc: 'Diseño de sistemas de recolección y almacenamiento de aguas lluvias para riego de zonas verdes, lavado de áreas comunes y otros usos no potables en conjuntos residenciales y edificios en Manizales. El sistema incluye tanque de almacenamiento, filtro de primer lavado, red de distribución y sistema de rebose hacia el alcantarillado.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Análisis de precipitaciones y curvas IDF en Manizales',
    desc: 'Manizales tiene una de las pluviometrías más altas de Colombia (más de 2.000 mm/año en el área urbana). BIC usa las curvas IDF del IDEAM para la estación de Manizales (La Nubia / Enea) para calcular las intensidades de diseño para periodos de retorno de 2, 5 y 10 años, según el tipo de proyecto y lo exigido por Aguas de Manizales.',
  },
  {
    paso: '02',
    titulo: 'Diseño hidráulico de la red de aguas lluvias',
    desc: 'Cálculo del caudal pluvial de diseño con el método racional (Q = C × I × A), diseño de los colectores por la ecuación de Manning, verificación de velocidades mínimas de autolimpieza y máximas para evitar erosión. Diseño de bajantes para cubiertas según la NSR-10 Título I Capítulo I.5.',
  },
  {
    paso: '03',
    titulo: 'Planos de diseño y memoria de cálculo',
    desc: 'Entrega de planos hidráulicos en AutoCAD (DWG) con la red de aguas lluvias georreferenciada, memorias de cálculo detalladas, especificaciones técnicas de tuberías y accesorios, presupuesto con APU y cronograma de obra. Todo firmado por profesional COPNIA para trámite ante Aguas de Manizales o la curaduría.',
  },
]

const FAQ = [
  {
    q: '¿Por qué el diseño de aguas lluvias es crítico en Manizales?',
    a: 'Manizales tiene una precipitación media anual superior a 2.000 mm en el área urbana, con intensidades horarias que superan los 80 mm/h en eventos extremos. Un sistema de drenaje pluvial mal diseñado o subestimado genera inundaciones en sótanos, erosión de taludes y daños estructurales. Aguas de Manizales exige que todos los proyectos de construcción presenten el diseño del sistema de aguas lluvias firmado COPNIA como requisito para la licencia de construcción.',
  },
  {
    q: '¿Cuánto cuesta el diseño de aguas lluvias para un colegio en Manizales?',
    a: 'El costo del diseño de la red de aguas lluvias para un colegio en Manizales (un edificio de 2 a 4 pisos con área de cubierta de 500 a 2.000 m²) oscila entre $4 y $10 millones COP, dependiendo del área de drenaje y la complejidad de la red exterior. Para urbanizaciones completas, el costo varía según el número de lotes y la extensión de la red pública. BIC envía presupuesto detallado en 24 horas.',
  },
  {
    q: '¿Las aguas lluvias se pueden separar de las aguas residuales en Manizales?',
    a: 'Sí, y es obligatorio en proyectos nuevos en Manizales. El sistema de alcantarillado de Aguas de Manizales S.A. E.S.P. exige la separación entre las redes de aguas residuales domésticas y las aguas lluvias en todos los proyectos de construcción nueva y en las renovaciones de redes. BIC diseña los dos sistemas de forma separada (hidrosanitario y pluvial) y entrega los planos diferenciados que exige la empresa de servicios.',
  },
]

const FAQ_SCHEMA = [
  {q: "¿Qué empresa diseña sistemas de manejo de aguas lluvias en Manizales?",
   a: "BIC — Bernal Ingeniería Consultores diseña sistemas de manejo de aguas lluvias en Manizales para proyectos residenciales, comerciales e industriales. El diseño incluye: análisis de curvas IDF para Manizales (IDEAM), cálculo de caudales de escorrentía por el método racional o SCS-CN, diseño de cunetas, sumideros, bajantes y colectores, separación de redes pluvial y sanitaria, y conexión a la red de alcantarillado pluvial de Aguas de Manizales o sistema de infiltración si no hay red disponible. Firma COPNIA."},
  {q: "¿Cuándo es obligatorio el diseño de alcantarillado pluvial separado en Colombia?",
   a: "El RAS 2017 (Resolución 0330 del MVCT) exige sistema separado (sanitario y pluvial) en todos los nuevos proyectos de urbanización y edificaciones con área mayor a 1.000 m² cubiertos. La Curaduría urbana exige los planos del sistema de aguas lluvias como parte del paquete de memorias hidrosanitarias para otorgar la licencia de construcción. BIC diseña el sistema de aguas lluvias integrado con la red sanitaria y el sistema contra incendio si aplica."},
  {q: "¿BIC diseña sistemas de aprovechamiento de aguas lluvias para edificios en Colombia?",
   a: "Sí. BIC diseña sistemas de cosecha y aprovechamiento de aguas lluvias para edificios en Colombia: captación en cubierta, filtro de primera escorrentía, tanque de almacenamiento, red de distribución secundaria (usos no potables: inodoros, riego, lavado de zonas duras) y análisis de eficiencia hídrica del sistema. Estos sistemas pueden obtener puntos en certificaciones sostenibles LEED o EDGE. BIC lo integra al diseño hidrosanitario general del edificio."},
]

export default function ServicioAguasLluviasManizales() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-aguas-lluvias-manizales'
    s.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(s)
    return () => { document.getElementById('schema-aguas-lluvias-manizales')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup type="service" faqItems={FAQ_SCHEMA} serviceName="Diseño Aguas Lluvias Manizales — Drenaje Pluvial" serviceUrl="/servicio-aguas-lluvias-manizales" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Redes pluviales · Manizales · Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de Aguas Lluvias en Manizales
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Redes pluviales para cubiertas, colegios, urbanizaciones y edificios — NSR-10 y RAS 2017
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 28, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña redes de aguas lluvias para proyectos de construcción
            en Manizales y el Eje Cafetero. Con la mayor pluviometría de Colombia, Manizales exige diseños
            rigurosos que cumplan las curvas IDF del IDEAM y los requerimientos de Aguas de Manizales S.A. E.S.P.
            BIC entrega planos firmados COPNIA aptos para trámite de licencia de construcción.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño aguas lluvias</Btn>
            <Btn variant="outline" href="/servicios/redes-hidrosanitarias" dark>Ver servicio hidrosanitario</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['NSR-10 I', 'RAS 2017', 'IDF Manizales', 'Manning', 'Aguas de Manizales', 'COPNIA'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de proyecto</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            ¿Para qué tipo de proyecto diseñamos aguas lluvias?
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: 24, borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 8 }}>{s.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>
            Cómo diseñamos aguas lluvias en Manizales
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {PROCESO.map(p => (
              <div key={p.paso} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                  color: '#fff', fontWeight: 900, fontSize: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>{p.paso}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 8 }}>{p.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>
            Aguas lluvias en Manizales — lo que más preguntan
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TAMBIÉN DISPONIBLE EN ── */}
      <Section style={{ background: '#eef6fb' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 14 }}>
            Servicio nacional de redes hidrosanitarias
          </p>
          <a href="/servicios/redes-hidrosanitarias" style={{
            display: 'inline-block', background: '#fff', border: '1px solid #b3d4e8',
            borderRadius: 8, padding: '14px 20px', color: '#003B6F',
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
          }}>
            Ver diseño de redes hidrosanitarias Colombia →
          </a>
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌧️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Su proyecto necesita diseño<br />de aguas lluvias en Manizales?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Compártanos el tipo de edificación, el área de cubierta y el municipio.
            BIC le envía presupuesto y plazo en menos de 24 horas.
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
              📱 Propuesta en 24 h — sin costo
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
