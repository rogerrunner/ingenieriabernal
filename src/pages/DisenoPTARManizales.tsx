import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito asesoría para el diseño de una PTAR en Manizales o Caldas. ¿Pueden orientarme?')

const seoConfig = {
  title: 'Diseño de Plantas de Tratamiento de Aguas Residuales (PTAR) en Manizales | BIC',
  description: 'Diseño de PTARs municipales, industriales y residenciales en Manizales y Caldas. Cumplimiento Resolución 0631. Tramitación ante CORPOCALDAS. Proyectos desde $8M COP.',
  keywords: [
    'diseño PTAR Manizales',
    'planta tratamiento aguas residuales Manizales',
    'PTAR Caldas',
    'tratamiento aguas residuales Eje Cafetero',
    'PTAR CORPOCALDAS',
    'permiso vertimientos CORPOCALDAS',
    'diseño PTAR Caldas',
    'PTAR municipal Manizales',
    'tratamiento aguas residuales Manizales',
    'ingeniero sanitario Manizales',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-ptar-manizales',
}

const TECNOLOGIAS = [
  { ico: '🏞️', nombre: 'Lagunas de oxidación', desc: 'Lagunas anaerobias y facultativas. Bajo costo de construcción y operación, sin energía eléctrica. Ideal para municipios y comunidades rurales de Caldas hasta 5.000 habitantes.' },
  { ico: '🌿', nombre: 'Filtros percoladores', desc: 'Tratamiento biológico secundario con baja demanda energética. Adecuados para caudales medianos y municipios con capacidad técnica limitada.' },
  { ico: '⚗️', nombre: 'Reactor UASB', desc: 'Alta eficiencia en remoción de DBO para caudales medianos. Genera biogás aprovechable. Menor área que lagunas. Muy usado en municipios cafeteros.' },
  { ico: '🌱', nombre: 'Wetlands construidos', desc: 'Humedales artificiales de flujo subsuperficial o superficial. Integración paisajística. Adecuados para municipios con énfasis ambiental o zonas turísticas del Eje Cafetero.' },
  { ico: '🔄', nombre: 'Lodos activados', desc: 'Sistema convencional de alta eficiencia para caudales medianos y grandes. Requiere energía eléctrica y operación técnica. Apto para Manizales y municipios industriales de Caldas.' },
  { ico: '📦', nombre: 'Sistemas compactos prefabricados', desc: 'Módulos industriales para condominios, conjuntos residenciales y campamentos. Instalación rápida, huella reducida. Desde 0,1 L/s.' },
]

const MUNICIPIOS = [
  { municipio: 'Manizales', poblacion: '~430.000 hab', car: 'CORPOCALDAS', nota: 'Capital departamental — demanda industrial y residencial activa' },
  { municipio: 'Viterbo', poblacion: '~14.000 hab', car: 'CORPOCALDAS', nota: 'Zona cafetera occidente — proyectos rurales y municipales' },
  { municipio: 'Chinchiná', poblacion: '~50.000 hab', car: 'CORPOCALDAS', nota: 'Centro cafetero con industria agroindustrial activa' },
  { municipio: 'Riosucio', poblacion: '~70.000 hab', car: 'CORPOCALDAS', nota: 'Municipio minero con alta demanda de saneamiento básico' },
  { municipio: 'Anserma', poblacion: '~30.000 hab', car: 'CORPOCALDAS', nota: 'Occidente de Caldas — acueducto y alcantarillado rural' },
  { municipio: 'Neira', poblacion: '~27.000 hab', car: 'CORPOCALDAS', nota: 'Norte de Caldas — comunidades cafeteras en expansión' },
  { municipio: 'La Dorada', poblacion: '~80.000 hab', car: 'CORPOCALDAS', nota: 'Magdalena Medio — industria y logística creciente' },
]

const PRECIOS_PTAR = [
  { servicio: 'PTAR pequeña < 0,5 L/s (sistemas compactos)', rango: 'Desde $8M COP' },
  { servicio: 'PTAR comunitaria / veredal 0,5–2 L/s (lagunas)', rango: '$12M – $22M COP' },
  { servicio: 'PTAR mediana 2–10 L/s — municipio cafetero', rango: 'Desde $25M COP' },
  { servicio: 'PTAR industrial agroindustrial (café, lácteos)', rango: '$18M – $40M COP' },
  { servicio: 'Permiso de vertimientos CORPOCALDAS (solo trámite)', rango: '$5M – $12M COP' },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Caracterización y caudal',
    desc: 'Medición de caudales, toma de muestras y análisis de laboratorio para determinar la carga contaminante (DBO, DQO, SST, coliformes). Base técnica para seleccionar la tecnología adecuada.',
    herramientas: ['Aforo en campo', 'Lab. acreditado', 'DANE (proyección pob.)', 'Dotaciones RAS 2017'],
    resultado: 'Caudales de diseño + caracterización fisicoquímica',
  },
  {
    paso: '02',
    titulo: 'Selección tecnológica',
    desc: 'BIC evalúa al menos dos alternativas considerando eficiencia de remoción, costo de O&M, área disponible y capacidad operativa del municipio o empresa de Caldas.',
    herramientas: ['Análisis multicriterio', 'Costos O&M comparativos', 'RAS 2017 / Res. 0330', 'Guías técnicas MADS'],
    resultado: 'Alternativa seleccionada y justificada técnicamente',
  },
  {
    paso: '03',
    titulo: 'Diseño detallado PTAR',
    desc: 'Diseño hidráulico de cada unidad: dimensiones, tiempos de retención, cargas superficiales. Memorias de cálculo firmadas por especialista con matrícula COPNIA vigente. Planos constructivos en AutoCAD.',
    herramientas: ['AutoCAD Civil 3D', 'Modelación hidráulica', 'NSR-10 (estructuras)', 'RAS 2017'],
    resultado: 'Memoria de cálculo + planos constructivos firmados COPNIA',
  },
  {
    paso: '04',
    titulo: 'Trámite ante CORPOCALDAS',
    desc: 'BIC elabora el expediente técnico para el permiso de vertimientos: caracterización cuerpo receptor, análisis de capacidad de asimilación, estudio de dilución y memoria descriptiva. Acompañamiento hasta la resolución.',
    herramientas: ['Dec. 1076/2015', 'Res. 0631/2015', 'Formularios CORPOCALDAS', 'Sistema VITAL'],
    resultado: 'Expediente completo radicado ante CORPOCALDAS',
  },
]

const NORMATIVA = [
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'Reglamento Técnico del Sector Agua Potable — criterios de diseño PTAR municipales en Caldas' },
  { codigo: 'Res. 0631/2015', descripcion: 'MADS — parámetros y límites de vertimiento para aguas residuales domésticas e industriales' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — régimen de permisos de vertimiento ante CORPOCALDAS' },
  { codigo: 'NSR-10', descripcion: 'Diseño estructural de tanques, reactores y estructuras de concreto de la PTAR' },
  { codigo: 'PSMV', descripcion: 'Plan de Saneamiento y Manejo de Vertimientos — instrumento de planificación obligatorio para municipios de Caldas' },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de una PTAR en Manizales?',
    a: 'Para sistemas pequeños (< 0,5 L/s, condominios o conjuntos residenciales) el diseño parte desde $8 millones COP. Para PTAR municipales en municipios de Caldas entre 2 y 10 L/s, el rango habitual es de $25 a $45 millones. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Qué exige CORPOCALDAS para el permiso de vertimientos?',
    a: 'CORPOCALDAS exige caracterización fisicoquímica del efluente, análisis del cuerpo receptor (capacidad de asimilación), diseño del sistema de tratamiento firmado por ingeniero con matrícula COPNIA vigente, y memoria descriptiva del proyecto. BIC elabora todo el expediente técnico.',
  },
  {
    q: '¿Cuánto tarda el diseño de una PTAR en Caldas?',
    a: 'El diseño completo toma entre 4 y 8 semanas dependiendo de la complejidad. El trámite del permiso de vertimientos ante CORPOCALDAS puede tomar entre 3 y 6 meses adicionales una vez radicado el expediente.',
  },
  {
    q: '¿BIC trabaja en todos los municipios de Caldas?',
    a: 'Sí. BIC tiene presencia verificada en Manizales, Viterbo, Chinchiná, Riosucio, Anserma, Neira, La Dorada y demás municipios del departamento. Rogerio Bernal trabajó como Profesional Universitario en la Alcaldía de Viterbo y conoce la dinámica de CORPOCALDAS.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const ARTICULOS = [
  { href: '/blog/ptar-industrial-colombia', title: 'PTAR Industrial en Colombia: Guía Técnica Completa' },
  { href: '/diseno-ptar-colombia', title: 'Diseño de PTAR en Colombia — Servicio Nacional BIC' },
  { href: '/permiso-vertimientos-colombia', title: 'Permiso de Vertimientos en Colombia — Trámite ante CAR' },
]

export default function DisenoPTARManizales() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-ptar-mzl-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-ptar-mzl-breadcrumb'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Diseño de PTAR Manizales', item: 'https://ingenieriabernal.co/diseno-ptar-manizales' },
      ],
    })
    document.head.appendChild(bc)
    const svc = document.createElement('script')
    svc.type = 'application/ld+json'
    svc.id = 'schema-ptar-mzl-service'
    svc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Diseño de PTAR en Manizales y Caldas',
      description: seoConfig.description,
      url: seoConfig.canonical,
      provider: {
        '@type': 'Organization',
        name: 'BIC — Bernal Ingeniería Consultores',
        url: 'https://ingenieriabernal.co',
        telephone: '+573024778910',
        address: { '@type': 'PostalAddress', addressLocality: 'Manizales', addressRegion: 'Caldas', addressCountry: 'CO' },
      },
      areaServed: [
        { '@type': 'City', name: 'Manizales' },
        { '@type': 'AdministrativeArea', name: 'Caldas' },
        { '@type': 'AdministrativeArea', name: 'Eje Cafetero' },
      ],
      serviceType: 'Diseño de Planta de Tratamiento de Aguas Residuales',
    })
    document.head.appendChild(svc)
    return () => {
      document.getElementById('schema-ptar-mzl-faq')?.remove()
      document.getElementById('schema-ptar-mzl-breadcrumb')?.remove()
      document.getElementById('schema-ptar-mzl-service')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de PTAR en Manizales y Caldas — Plantas de Tratamiento | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de PTAR en Manizales y Caldas"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-ptar-manizales"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'PTAR pequeña < 0,5 L/s', minPrice: 8000000, maxPrice: 14000000, priceCurrency: 'COP', description: 'Sistemas compactos para condominios y conjuntos residenciales rurales' },
          { name: 'PTAR comunitaria veredal 0,5–2 L/s', minPrice: 12000000, maxPrice: 22000000, priceCurrency: 'COP', description: 'Lagunas de estabilización o filtros anaerobios — bajo costo O&M' },
          { name: 'PTAR municipal mediana 2–10 L/s', minPrice: 25000000, maxPrice: 45000000, priceCurrency: 'COP', description: 'Municipios cafeteros de Caldas con permiso CORPOCALDAS incluido' },
        ]}
      />

      <CTABanner service="Diseño de PTAR en Manizales y Caldas" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería sanitaria · Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de PTAR en Manizales y Caldas
          </h1>
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Plantas de tratamiento de aguas residuales con permiso CORPOCALDAS
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña plantas de tratamiento de aguas residuales (PTAR)
            en Manizales y todos los municipios de Caldas. Cumplimiento Resolución 0631/2015 y Decreto
            1076/2015. Tramitamos el permiso de vertimientos ante CORPOCALDAS. Memorias de cálculo
            firmadas COPNIA y planos constructivos completos.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de PTAR</Btn>
            <Btn variant="outline" href="/diseno-ptar-colombia" dark>Ver servicio nacional</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Res. 0631/2015', 'CORPOCALDAS', 'RAS 2017', 'COPNIA vigente', 'Caldas · Eje Cafetero', 'UASB · Lagunas · Wetlands'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEO FRAGMENT ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña plantas de tratamiento de aguas residuales (PTAR) en Manizales y los municipios de Caldas conforme al RAS 2017 y la Resolución 0631/2015. Tramitamos el permiso de vertimientos ante CORPOCALDAS. Proyectos desde $8 millones COP para sistemas pequeños hasta $45 millones para PTAR municipales medianas. Firma COPNIA 17202-313228 CLD. Sede Manizales. Propuesta en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── CUÁNDO SE NECESITA ── */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco regulatorio en Caldas</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Cuándo exige CORPOCALDAS una PTAR?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 800 }}>
            La <strong>Resolución 0631/2015 del MADS</strong> obliga a tratar cualquier vertimiento a cuerpos hídricos superficiales o al suelo. En Caldas, CORPOCALDAS es la autoridad ambiental competente para otorgar el permiso de vertimientos y exige diseño profesional firmado por ingeniero con matrícula vigente del COPNIA.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 800 }}>
            Desde comunidades rurales de 10 conexiones hasta conjuntos residenciales campestres, plantas agroindustriales (beneficiaderos de café, plantas lácteas) y municipios con PSMV vigente — todo vertimiento en Caldas debe contar con sistema de tratamiento diseñado bajo el <strong>RAS 2017 (Resolución 0330)</strong> y el Decreto 1076/2015.
          </p>
        </div>
      </Section>

      {/* ── TECNOLOGÍAS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tecnologías PTAR disponibles</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Tecnologías de tratamiento que diseña BIC en Caldas
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {TECNOLOGIAS.map(t => (
              <div key={t.nombre} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: 26, flexShrink: 0, marginTop: 2 }}>{t.ico}</span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 6 }}>{t.nombre}</h3>
                  <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo trabaja BIC: de la caracterización al permiso CORPOCALDAS
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

      {/* ── MUNICIPIOS ── */}
      <Section style={{ background: '#f0f9ff', borderTop: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cobertura en Caldas</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Municipios de Caldas donde trabaja BIC
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {MUNICIPIOS.map(m => (
              <div key={m.municipio} style={{
                display: 'grid', gridTemplateColumns: '130px 100px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 13 }}>{m.municipio}</div>
                <p style={{ color: '#555', fontSize: 12, margin: 0 }}>{m.poblacion}</p>
                <p style={{ color: '#444', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{m.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cumplimiento normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa aplicable en Caldas y Eje Cafetero
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '170px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12 }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión referencial</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Precios orientativos 2026 — Manizales y Caldas
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Incluyen memorias de cálculo, planos constructivos, especificaciones técnicas y APU. <strong>No incluyen construcción.</strong> Propuesta detallada en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PRECIOS_PTAR.map(p => (
              <div key={p.servicio} style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <p style={{ color: '#333', fontSize: 14, fontWeight: 500, margin: 0 }}>{p.servicio}</p>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 14px', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>{p.rango}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section>
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
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios de saneamiento y agua en Caldas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Permiso de vertimientos Colombia', href: '/permiso-vertimientos-colombia' },
              { label: 'Diseño de PTAR Colombia', href: '/diseno-ptar-colombia' },
              { label: 'Concesión de aguas Colombia', href: '/concesion-aguas-colombia' },
              { label: 'Diseño de PTAP Colombia', href: '/diseno-ptap-colombia' },
              { label: 'Acueducto rural Caldas', href: '/acueducto-rural-caldas' },
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
            PTAR en Manizales y Caldas — respuestas directas
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} className="faq-item" style={{ background: '#f8f9fa', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ANTI-INTERMEDIARIO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', border: '2px solid #e2e8f0', borderRadius: 14, padding: '28px 32px', borderLeft: '5px solid #17A2B8' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#001A33', marginBottom: 14 }}>
              ¿Es este servicio para usted?
            </h3>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              BIC trabaja directamente con <strong>constructoras, promotores, alcaldías y empresas</strong> en Manizales y Caldas que tienen un proyecto concreto — no con intermediarios.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Los precios publicados son los que BIC cobra al contratante directo. Si usted es quien decide contratar y tiene el proyecto, la propuesta llega en menos de 24 horas.
            </p>
          </div>
        </div>
      </Section>

      {/* ── FORMULARIO COTIZACIÓN ── */}
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
            ¿Necesita el diseño de una PTAR<br />en Manizales o Caldas?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de aguas residuales, el caudal estimado y el municipio.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Trámite ante CORPOCALDAS incluido.
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
