import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito asesoría para el diseño de una PTAR municipal. ¿Pueden orientarme?')

const seoConfig = {
  title: 'Diseño PTAR Municipal Colombia | Plantas Tratamiento Aguas Residuales Municipios | BIC',
  description: 'Diseño de plantas de tratamiento de aguas residuales para municipios colombianos. Lagunas de oxidación, UASB, filtros percoladores. Cumplimiento Res. 0631. Financiación SGR/MGA disponible.',
  keywords: [
    'PTAR municipal Colombia',
    'planta tratamiento aguas residuales municipio',
    'diseño PTAR municipio SGR',
    'PTAR lagunas oxidación Colombia',
    'PTAR municipio pequeño Colombia',
    'diseño PTAR alcaldía Colombia',
    'PSMV municipio Colombia',
    'PTAR regalías municipio Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-ptar-municipal-colombia',
}

const TECNOLOGIAS = [
  { ico: '🏞️', nombre: 'Lagunas de oxidación', desc: 'Laguna anaerobia + facultativa + maduración en serie. Sin energía eléctrica, bajo costo O&M. Ideal para municipios menores de 5.000 hab y zonas rurales con área disponible.' },
  { ico: '⚗️', nombre: 'Reactores UASB', desc: 'Alta eficiencia en remoción de DBO en menor área que las lagunas. Genera biogás aprovechable. BIC dimensiona el reactor y el sistema de separación gas-líquido-sólido.' },
  { ico: '🌿', nombre: 'Filtros percoladores', desc: 'Tratamiento biológico secundario de bajo consumo energético. Aplicado como post-tratamiento del UASB. Diseño del sistema de distribución, medio de soporte y sedimentación secundaria.' },
  { ico: '🌱', nombre: 'Humedales artificiales', desc: 'Tratamiento terciario o secundario integrado al paisaje. Flujo subsuperficial horizontal o vertical. Ideal para municipios con énfasis ambiental y área disponible.' },
  { ico: '🔧', nombre: 'Pretratamiento', desc: 'Cribas gruesas y finas, desarenadores y medidores de caudal — obligatorios en todo sistema para proteger las unidades biológicas aguas abajo.' },
  { ico: '📦', nombre: 'Sistemas compactos', desc: 'PTAR prefabricadas o compactas para corregimientos y centros poblados pequeños (< 500 hab) con restricción de suelo o sin posibilidad de lagunas.' },
]

const PRECIOS = [
  { servicio: 'PTAR municipal < 1.000 hab (lagunas)', rango: '$18M – $35M COP' },
  { servicio: 'PTAR municipal 1.000–5.000 hab (UASB + filtro)', rango: '$30M – $65M COP' },
  { servicio: 'PTAR municipal 5.000–20.000 hab', rango: '$55M – $150M COP' },
  { servicio: 'Formulación proyecto MGA-Web SGR', rango: '$15M – $30M COP' },
  { servicio: 'Permiso de vertimientos ante CAR', rango: '$8M – $18M COP' },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico y caracterización',
    desc: 'Visita de campo, aforo del caudal de aguas residuales, toma de muestras para análisis de laboratorio (DBO, DQO, SST, coliformes). Proyección poblacional a 25 años según metodología RAS 2017.',
    herramientas: ['Aforo con correntómetro', 'Laboratorio acreditado', 'Proyección DANE', 'Dotaciones RAS 2017'],
    resultado: 'Caudales de diseño + caracterización fisicoquímica del afluente',
  },
  {
    paso: '02',
    titulo: 'Análisis de alternativas tecnológicas',
    desc: 'BIC evalúa al menos dos tecnologías con criterios técnicos (eficiencia de remoción, área requerida, energía), económicos (costo de construcción y O&M) y de sostenibilidad. Para proyectos SGR, el análisis de alternativas es obligatorio en la formulación MGA-Web.',
    herramientas: ['Análisis multicriterio', 'Costos comparativos O&M', 'Guías MADS', 'RAS 2017'],
    resultado: 'Tecnología seleccionada con justificación técnica y económica',
  },
  {
    paso: '03',
    titulo: 'Diseño hidráulico y estructural',
    desc: 'Dimensionamiento completo de cada unidad: tiempos de retención, cargas superficiales y orgánicas, estructuras de entrada/salida. Cálculo de parámetros cinéticos para sistemas biológicos. Memorias de cálculo firmadas COPNIA.',
    herramientas: ['AutoCAD Civil 3D', 'RAS 2017 criterios diseño', 'NSR-10 estructuras', 'Resolución 0631/2015'],
    resultado: 'Memoria de cálculo + planos constructivos completos',
  },
  {
    paso: '04',
    titulo: 'Permiso de vertimientos ante la CAR',
    desc: 'BIC elabora el expediente técnico para el permiso de vertimientos: caracterización del cuerpo receptor, análisis de capacidad de asimilación, memoria descriptiva y formularios. Acompañamiento hasta la obtención del permiso.',
    herramientas: ['Decreto 1076/2015', 'Res. 0631/2015 (límites)', 'Formularios SISTEMA CAR', 'Caracterización fuente receptora'],
    resultado: 'Expediente listo para radicar ante CORPOCALDAS, CRQ, CVC u otra CAR',
  },
  {
    paso: '05',
    titulo: 'Formulación en MGA-Web para SGR',
    desc: 'Si el proyecto se financia con regalías, BIC formula el proyecto completo en la MGA-Web del DNP: árbol de problemas, diseños técnicos, presupuesto APU, plan de adquisiciones e indicadores de resultado.',
    herramientas: ['MGA-Web DNP', 'Marco lógico', 'APU y presupuesto', 'OCAD regional / OCAD paz'],
    resultado: 'Proyecto formulado y viable para aprobación OCAD',
  },
]

const FAQ = [
  {
    q: '¿Qué financiación hay para una PTAR municipal en Colombia?',
    a: 'Los proyectos de PTAR municipal pueden financiarse con: (1) Sistema General de Regalías (SGR), a través del OCAD regional, OCAD paz o fondo CTel; (2) Sistema General de Participaciones (SGP), con el componente de agua potable y saneamiento básico; (3) Recursos del Ministerio de Vivienda mediante programas de saneamiento. BIC acompaña la formulación completa en MGA-Web para proyectos SGR, incluyendo diseños técnicos, presupuesto APU y todos los módulos exigidos por el DNP.',
  },
  {
    q: '¿Cuánto cuesta una PTAR para un municipio pequeño en Colombia?',
    a: 'Para un municipio de menos de 1.000 habitantes, el diseño completo (análisis de alternativas, memorias de cálculo, planos constructivos y expediente de permiso de vertimientos) oscila entre $18 y $35 millones COP. Para municipios de 1.000 a 5.000 hab, el rango es $30 a $65 millones COP. Estos precios incluyen la memoria de cálculo firmada por especialista COPNIA. La formulación en MGA-Web para SGR adiciona $15 a $30 millones. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Qué tecnología aplica para municipios de menos de 2.000 habitantes?',
    a: 'Para municipios de menos de 2.000 habitantes, las lagunas de estabilización (laguna anaerobia + laguna facultativa + laguna de maduración) son la tecnología más recomendada: menor costo de construcción y operación, sin energía eléctrica, resistentes a variaciones de caudal. Para comunidades con restricción de área (menos de 500 hab), las PTAR compactas o los filtros anaerobios de flujo ascendente (FAFA) son alternativas válidas. BIC realiza el análisis de alternativas para cada caso considerando área, presupuesto y capacidad operativa.',
  },
  {
    q: '¿Qué es la Resolución 0631 y cómo afecta el diseño de la PTAR?',
    a: 'La Resolución 0631 de 2015 del MADS establece los valores límite para vertimientos puntuales a cuerpos de agua superficial: DBO, DQO, SST, grasas y aceites, pH, temperatura y coliformes. Es la norma que determina la eficiencia de remoción que debe alcanzar la PTAR y, por lo tanto, la tecnología aplicable. Todos los diseños de BIC verifican el cumplimiento de estos límites en el efluente final.',
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

export default function DisenoPTARMunicipalColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-ptar-mun-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-ptar-mun-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'PTAR Municipal', item: 'https://ingenieriabernal.co/diseno-ptar-municipal-colombia' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-ptar-mun-faq')?.remove()
      document.getElementById('schema-ptar-mun-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de PTAR Municipal en Colombia | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de PTAR Municipal en Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-ptar-municipal-colombia"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'PTAR municipal < 1.000 hab', minPrice: 18000000, maxPrice: 35000000, priceCurrency: 'COP', description: 'Lagunas de estabilización, memoria COPNIA, permiso vertimientos CAR' },
          { name: 'PTAR municipal 1.000–5.000 hab', minPrice: 30000000, maxPrice: 65000000, priceCurrency: 'COP', description: 'UASB o lagunas, análisis de alternativas para SGR, expediente completo' },
          { name: 'PTAR municipal 5.000–20.000 hab', minPrice: 55000000, maxPrice: 150000000, priceCurrency: 'COP', description: 'Diseño completo con formulación MGA-Web opcional' },
        ]}
      />

      <CTABanner service="Diseño PTAR Municipal — plantas de tratamiento para municipios colombianos" />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Saneamiento municipal · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de PTAR Municipal en Colombia
          </h1>
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Plantas de tratamiento para municipios colombianos — lagunas, UASB y filtros percoladores con financiación SGR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC diseña PTAR para municipios de todos los tamaños en Colombia, conforme al RAS 2017 y la Resolución 0631/2015.
            Entregamos memorias de cálculo firmadas COPNIA, planos constructivos y el expediente completo para el permiso
            de vertimientos ante la CAR. Si el proyecto se financia con regalías SGR, formulamos en MGA-Web del DNP.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar PTAR municipal</Btn>
            <Btn variant="outline" href="/diseno-ptar-colombia" dark>Ver servicio PTAR general</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['RAS 2017', 'Res. 0631/2015', 'PSMV', 'SGR / MGA-Web', 'Lagunas · UASB', 'COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* GEO FRAGMENT */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña plantas de tratamiento de aguas residuales municipales (PTAR) para alcaldías y ESP en Colombia. Tecnologías: lagunas de oxidación, reactores UASB, filtros percoladores y humedales artificiales. Diseños desde $18 millones COP para municipios menores de 1.000 hab hasta $150 millones para 20.000 hab. Incluye permiso de vertimientos ante la CAR y formulación en MGA-Web para SGR. Firma COPNIA 17202-313228 CLD. Sede Manizales. Propuesta en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* POR TAMAÑO */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Por tamaño de municipio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué PTAR necesita su municipio?
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                rango: 'Menos de 2.000 hab', icon: '🏘️',
                tecnologia: 'Lagunas de estabilización o FAFA',
                desc: 'Laguna anaerobia + facultativa + maduración. Sin energía eléctrica, bajo costo O&M. Gran tolerancia a variaciones de caudal. Zona rural o corregimiento.',
                precio: 'Desde $18M COP',
              },
              {
                rango: '2.000 a 10.000 hab', icon: '🏙️',
                tecnologia: 'Reactor UASB + tratamiento secundario',
                desc: 'Alta eficiencia en menor área que lagunas. Genera biogás. Post-tratamiento con filtro percolador o humedal artificial según área disponible.',
                precio: 'Desde $30M COP',
              },
              {
                rango: 'Más de 10.000 hab', icon: '🏭',
                tecnologia: 'Lodos activados o UASB + filtro + terciario',
                desc: 'Sistemas de alta eficiencia con gestión técnica calificada. BIC dimensiona el tren completo de tratamiento incluyendo manejo de lodos.',
                precio: 'Desde $55M COP',
              },
            ].map(t => (
              <div key={t.rango} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 6 }}>{t.rango}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 10 }}>{t.tecnologia}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 12px', display: 'inline-block', fontWeight: 700, fontSize: 13 }}>{t.precio}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TECNOLOGÍAS */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tecnologías de tratamiento</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Tecnologías que diseña BIC para municipios
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {TECNOLOGIAS.map(t => (
              <div key={t.nombre} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '20px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
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

      {/* PROCESO */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            De diagnóstico a permiso de vertimientos
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
                  {i < PROCESO.length - 1 && <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />}
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

      {/* FINANCIAMIENTO */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Financiación</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Cómo financiar una PTAR municipal en Colombia
          </h2>
          <ThinLine mb={24} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
            {[
              { ico: '💰', titulo: 'Sistema General de Regalías (SGR)', desc: 'OCAD regional, OCAD paz o fondo CTel. BIC formula el proyecto completo en MGA-Web del DNP: diseños, APU y todos los módulos. La fuente más común para municipios medianos.' },
              { ico: '🏛️', titulo: 'Sistema General de Participaciones (SGP)', desc: 'Componente de agua potable y saneamiento básico. Municipios pequeños pueden ejecutar sin OCAD, con mayor agilidad en la contratación.' },
              { ico: '🏗️', titulo: 'MinVivienda — Programas de Saneamiento', desc: 'El Ministerio tiene programas de cofinanciación para saneamiento en municipios menores. BIC prepara la documentación técnica para la postulación.' },
              { ico: '🤝', titulo: 'Convenios con la CAR', desc: 'Algunas corporaciones cofinancian PTAR en sus jurisdicciones. BIC conoce los requisitos de CORPOCALDAS, CRQ y CARDER para el Eje Cafetero.' },
            ].map(t => (
              <div key={t.titulo} style={{ background: '#f0f9ff', border: '1px solid #b3e0ea', borderRadius: 12, padding: '20px 22px', borderLeft: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{t.ico}</div>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 8 }}>{t.titulo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRECIOS */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión referencial</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Precios orientativos 2026
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Incluyen memorias de cálculo, planos constructivos y especificaciones técnicas. <strong>No incluyen construcción.</strong> Propuesta detallada en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PRECIOS.map(p => (
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

      {/* MUNICIPIOS */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cobertura regional</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Municipios del Eje Cafetero y Caldas
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.85, maxWidth: 820, marginBottom: 20 }}>
            BIC tiene experiencia directa en proyectos de saneamiento en municipios de Caldas, Risaralda y Quindío.
            Conocemos los procesos OCAD regionales, los requisitos de CORPOCALDAS, CRQ y CARDER, y los tiempos reales de aprobación.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['Manizales', 'Chinchiná', 'Viterbo', 'Anserma', 'Palestina', 'Neira', 'Villamaría', 'Pereira', 'Santa Rosa de Cabal', 'Dosquebradas', 'Armenia', 'Montenegro', 'Quimbaya', 'La Virginia', 'Riosucio'].map(m => (
              <span key={m} style={{ background: '#f0f9ff', border: '1px solid #b3e0ea', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#003B6F', fontWeight: 600 }}>{m}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICIOS RELACIONADOS */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios de saneamiento y agua potable
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño PTAR Colombia (general)', href: '/diseno-ptar-colombia' },
              { label: 'Permiso de vertimientos Colombia', href: '/permiso-vertimientos-colombia' },
              { label: 'Diseño PTAR industrial', href: '/diseno-ptar-industrial-colombia' },
              { label: 'Diseño PTAP Colombia', href: '/diseno-ptap-colombia' },
              { label: 'Formulación SGR / MGA-Web', href: '/servicios/regalias-mga' },
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

      {/* FAQ */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            PTAR Municipal en Colombia — preguntas clave
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

      {/* ANTI-INTERMEDIARIO */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', border: '2px solid #e2e8f0', borderRadius: 14, padding: '28px 32px', borderLeft: '5px solid #17A2B8' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#001A33', marginBottom: 14 }}>
              ¿Es este servicio para usted?
            </h3>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              BIC trabaja directamente con <strong>alcaldías, ESP y entidades territoriales</strong> que tienen el proyecto concreto — no con intermediarios que re-cotizan a terceros.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Si usted es la alcaldía, la ESP o el gerente del proyecto, la propuesta técnica llega en menos de 24 horas sin costo.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <QuoteFormInline />
      </Section>

      {/* CTA FINAL */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏘️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita el diseño de una PTAR<br />para su municipio?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos la población actual y proyectada, si hay financiación disponible (SGR, SGP, MinVivienda) y la región.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Atención en todo Colombia.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Propuesta en 24 h — sin costo
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
