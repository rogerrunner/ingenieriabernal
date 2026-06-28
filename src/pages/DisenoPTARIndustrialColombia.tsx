import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito asesoría para el diseño de una PTAR industrial. ¿Pueden orientarme?')

const seoConfig = {
  title: 'Diseño PTAR Industrial Colombia | Tratamiento Aguas Residuales Industrias | BIC',
  description: 'PTAR para industrias, agroindustrias y proyectos en Colombia. Cafeteras, mineras, lácteas, textiles. Caracterización de vertimientos, diseño a medida y permiso ante CAR.',
  keywords: [
    'PTAR industrial Colombia',
    'planta tratamiento aguas residuales industria',
    'PTAR agroindustrial Eje Cafetero',
    'tratamiento aguas residuales cafeteras Colombia',
    'PTAR lácteos Colombia',
    'PTAR porcícola Colombia',
    'permiso vertimientos industria Colombia',
    'caracterización vertimientos industriales Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-ptar-industrial-colombia',
}

const INDUSTRIAS = [
  {
    icon: '☕',
    tipo: 'Beneficiaderos de café',
    desc: 'Aguas de despulpado y lavado con alta carga orgánica (DBO > 5.000 mg/L). BIC diseña el tren completo: trampa de pulpa, UASB, post-tratamiento biológico y manejo de lodos. Cumplimiento de los límites de la Resolución 0631/2015 para el sector agroindustrial.',
    params: 'DBO muy alta · Solidos suspendidos · pH ácido',
  },
  {
    icon: '🥛',
    tipo: 'Industria láctea',
    desc: 'Efluentes con alta carga de grasas, proteínas y lactosa. BIC diseña la trampa de grasas (DAF), el sistema de igualación de caudal, el reactor biológico y el manejo de lodos. Diseños para queserías, pasteurizadoras y plantas de producción de derivados.',
    params: 'Grasas y aceites · Alta DBO · pH variable',
  },
  {
    icon: '🐷',
    tipo: 'Granjas porcícolas',
    desc: 'Aguas con alta carga de sólidos y nitrógeno amoniacal. BIC diseña el sistema de pretratamiento sólidos-líquidos (rejillas, sedimentación), reactor anaerobio UASB, laguna de estabilización y manejo de residuos sólidos orgánicos.',
    params: 'NH3 alto · Sólidos gruesos · Olores',
  },
  {
    icon: '⛏️',
    tipo: 'Minería y proyectos extractivos',
    desc: 'Aguas de proceso minero con metales pesados, sólidos en suspensión y pH extremo. BIC diseña sistemas fisicoquímicos (neutralización, coagulación-floculación, sedimentación) y estanques de retención para control de drenaje ácido de minas.',
    params: 'Metales pesados · pH extremo · Sólidos finos',
  },
  {
    icon: '👕',
    tipo: 'Industria textil y tintorería',
    desc: 'Efluentes con colorantes, tensoactivos y alta DQO. BIC diseña sistemas de tratamiento fisicoquímico con coagulación, oxidación avanzada y tratamiento biológico. Cumplimiento de los parámetros de color y DQO de la Resolución 0631.',
    params: 'Colorantes · Alta DQO · Tensoactivos',
  },
  {
    icon: '🌿',
    tipo: 'Agroindustria general',
    desc: 'Beneficiaderos de caña, plantas de aceite de palma, mataderos, plantas de sacrificio y otras agroindustrias. Caracterización específica del efluente y diseño del sistema de tratamiento a medida según los parámetros reales del proceso.',
    params: 'Variable según proceso · Caracterización específica',
  },
]

const TECNOLOGIAS = [
  { ico: '🔵', nombre: 'DAF (Flotación por Aire Disuelto)', desc: 'Para remoción eficiente de grasas, aceites y sólidos en suspensión en industrias lácteas, cárnicas y textiles. Genera un lodo flotante compacto con menor volumen que la sedimentación convencional.' },
  { ico: '⚗️', nombre: 'Reactor UASB industrial', desc: 'Alta eficiencia en remoción de DBO para efluentes con carga orgánica elevada (> 1.000 mg/L). Genera biogás aprovechable. Estable ante variaciones de carga típicas de la agroindustria.' },
  { ico: '🔄', nombre: 'MBR (Biorreactor de Membrana)', desc: 'Tratamiento biológico de alta eficiencia con filtración por membrana. Efluente de alta calidad para reúso industrial. Huella de área mínima, ideal cuando el espacio es limitado.' },
  { ico: '🌱', nombre: 'Humedales artificiales industriales', desc: 'Post-tratamiento para reducción de nutrientes y pulido del efluente biológico. Aplicado en industrias que requieren vertimiento a fuentes sensibles o zonas de protección ambiental.' },
  { ico: '🧪', nombre: 'Tratamiento fisicoquímico', desc: 'Coagulación, floculación y sedimentación para remoción de sólidos, metales pesados y colorantes. Combinado con oxidación química para efluentes con compuestos refractarios.' },
  { ico: '⚡', nombre: 'Oxidación avanzada (O3, H2O2/UV)', desc: 'Para destrucción de colorantes, compuestos recalcitrantes y desinfección final en industrias textiles, farmacéuticas y de alta exigencia ambiental.' },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Caracterización del vertimiento industrial',
    desc: 'Toma de muestras del efluente en diferentes momentos del proceso productivo para obtener un perfil completo de la carga contaminante: DBO, DQO, SST, grasas y aceites, metales pesados, pH, temperatura y los parámetros específicos del sector industrial.',
    herramientas: ['Muestreo compuesto y puntual', 'Laboratorio acreditado', 'Análisis del proceso productivo', 'Balance de masas del proceso'],
    resultado: 'Caracterización completa del efluente para el diseño',
  },
  {
    paso: '02',
    titulo: 'Análisis de alternativas y selección de tecnología',
    desc: 'BIC evalúa las alternativas tecnológicas considerando la carga contaminante real del efluente, el área disponible, los requerimientos energéticos, el costo de operación y los límites de la Resolución 0631/2015 para el sector industrial específico.',
    herramientas: ['Análisis multicriterio técnico-económico', 'Res. 0631/2015 sector industrial', 'Costos O&M comparativos', 'Huella de carbono'],
    resultado: 'Tecnología seleccionada con justificación técnica',
  },
  {
    paso: '03',
    titulo: 'Diseño hidráulico y de proceso',
    desc: 'Dimensionamiento de cada unidad de tratamiento según los parámetros cinéticos del proceso biológico o fisicoquímico. Diseño del sistema de igualación de caudal, manejo de lodos y disposición final de residuos sólidos. Memorias de cálculo firmadas COPNIA.',
    herramientas: ['AutoCAD Civil 3D', 'Modelación de proceso biológico', 'NSR-10 estructuras', 'Normas sectoriales ANLA/MADS'],
    resultado: 'Memoria de cálculo + planos constructivos completos',
  },
  {
    paso: '04',
    titulo: 'Permiso de vertimientos ante la CAR',
    desc: 'BIC elabora el expediente técnico completo para el permiso de vertimientos: caracterización del cuerpo receptor, modelación de asimilación, memoria descriptiva del proyecto y formularios de la corporación. Acompañamiento hasta la obtención del permiso.',
    herramientas: ['Decreto 1076/2015', 'Res. 0631/2015 sector industrial', 'Formularios SISTEMA', 'Caracterización fuente receptora'],
    resultado: 'Expediente técnico listo para radicar ante la CAR',
  },
]

const FAQ = [
  {
    q: '¿Qué industrias necesitan PTAR en Colombia?',
    a: 'Toda actividad industrial que genere vertimientos a cuerpos de agua o al suelo debe contar con sistema de tratamiento y permiso de vertimientos ante la CAR, según el Decreto 1076/2015 y la Resolución 0631/2015. Esto incluye: beneficiaderos de café y otros frutos, plantas lácteas, granjas porcícolas y avícolas, mataderos, industria textil, minería, plantas de biodiesel, industria de alimentos en general, entre otras. El umbral para exigir el tratamiento lo determina la CAR, pero en la práctica cualquier vertimiento con DBO superior a 200 mg/L o caudal superior a 0,5 L/s es objeto de permiso.',
  },
  {
    q: '¿Cómo se hace la caracterización de vertimientos industriales?',
    a: 'La caracterización de vertimientos industriales requiere la toma de muestras compuestas del efluente durante un ciclo completo de producción — no una sola muestra puntual, que puede no ser representativa. Los parámetros mínimos son: DBO₅, DQO, sólidos suspendidos totales (SST), grasas y aceites, pH, temperatura y los parámetros específicos del sector (metales pesados para minería, colorantes para textiles, nitrógeno amoniacal para porcícolas). BIC coordina con laboratorio acreditado el muestreo y el análisis, y utiliza los resultados como base del diseño de la PTAR.',
  },
  {
    q: '¿Cuánto cuesta una PTAR para una finca cafetera o agroindustria pequeña?',
    a: 'Para un beneficiadero de café de producción media (100 a 500 cargas/año), el diseño completo de la PTAR (incluye trampa de pulpa, UASB o laguna anaerobia, post-tratamiento y permiso de vertimientos) oscila entre $12 y $35 millones COP según el caudal y los entregables requeridos. Para plantas agroindustriales más grandes (lácteas, porcícolas), el rango es de $25 a $80 millones COP. BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo.',
  },
  {
    q: '¿Qué pasa si una industria no tiene permiso de vertimientos en Colombia?',
    a: 'Operar sin permiso de vertimientos es una infracción ambiental sancionada por el Decreto 1076/2015 y el Código Nacional de Recursos Naturales. Las sanciones incluyen: multas diarias de hasta 5.000 salarios mínimos, medidas preventivas de suspensión de la actividad, decomiso de equipos y, en casos graves, penalización penal. Además, la falta de permiso bloquea trámites ante el INVIMA, Cámara de Comercio, acceso a crédito bancario y participación en contratos públicos. BIC acompaña el proceso completo de regularización: caracterización, diseño PTAR y trámite ante la CAR.',
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

export default function DisenoPTARIndustrialColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-ptar-ind-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-ptar-ind-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'PTAR Industrial', item: 'https://ingenieriabernal.co/diseno-ptar-industrial-colombia' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-ptar-ind-faq')?.remove()
      document.getElementById('schema-ptar-ind-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de PTAR Industrial en Colombia | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de PTAR Industrial en Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-ptar-industrial-colombia"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'PTAR finca cafetera o agroindustria pequeña', minPrice: 12000000, maxPrice: 35000000, priceCurrency: 'COP', description: 'Caracterización vertimiento, diseño UASB o laguna, permiso CAR' },
          { name: 'PTAR industria mediana (lácteos, porcícola)', minPrice: 25000000, maxPrice: 80000000, priceCurrency: 'COP', description: 'DAF o UASB con post-tratamiento, manejo de lodos, permiso vertimientos' },
          { name: 'PTAR industria grande o compleja', minPrice: 50000000, maxPrice: 150000000, priceCurrency: 'COP', description: 'MBR, oxidación avanzada o sistemas combinados, EIA simplificado' },
        ]}
      />

      <CTABanner service="Diseño PTAR Industrial — tratamiento aguas residuales para industrias en Colombia" />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Tratamiento industrial · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de PTAR Industrial en Colombia
          </h1>
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Plantas de tratamiento para cafeteras, lácteas, porcícolas, mineras y agroindustrias — con permiso de vertimientos ante la CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC diseña PTAR para efluentes industriales específicos en Colombia. Cada diseño comienza con la caracterización
            real del vertimiento del proceso productivo — no con datos genéricos. Tecnologías: DAF, UASB, MBR, humedales
            y tratamiento fisicoquímico. Memorias firmadas COPNIA y expediente completo para el permiso ante la CAR.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar PTAR industrial</Btn>
            <Btn variant="outline" href="/diseno-ptar-colombia" dark>Ver servicio PTAR general</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Res. 0631/2015', 'DAF · UASB · MBR', 'Permiso CAR', 'Caracterización efluente', 'COPNIA vigente', 'Eje Cafetero'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* GEO FRAGMENT */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña PTAR para industrias y agroindustrias en Colombia: cafeteras, lácteas, porcícolas, mineras y textiles. Caracterización de vertimientos con laboratorio acreditado, diseño a medida con tecnologías DAF, UASB y MBR, y gestión del permiso de vertimientos ante la CAR. Diseños desde $12 millones COP. Firma COPNIA 17202-313228 CLD. Sede Manizales — proyectos en todo Colombia. Propuesta en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Sectores industriales</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Industrias para las que BIC diseña PTAR
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {INDUSTRIAS.map(t => (
              <div key={t.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{t.tipo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>PARÁMETROS CRÍTICOS</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0 }}>{t.params}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TECNOLOGÍAS */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tecnologías industriales</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Tecnologías de tratamiento para efluentes industriales
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
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            De la caracterización del efluente al permiso de vertimientos
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

      {/* CTA INTERMEDIO */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un proyecto de PTAR industrial?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            📱 Propuesta en 24 h — sin costo
          </a>
        </div>
      </section>

      {/* SERVICIOS RELACIONADOS */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios de tratamiento y saneamiento
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño PTAR Colombia (general)', href: '/diseno-ptar-colombia' },
              { label: 'Permiso de vertimientos Colombia', href: '/permiso-vertimientos-colombia' },
              { label: 'Diseño PTAR municipal', href: '/diseno-ptar-municipal-colombia' },
              { label: 'Concesión de aguas Colombia', href: '/concesion-aguas-colombia' },
              { label: 'Ingeniería ambiental Colombia', href: '/servicios/ambiental' },
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
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            PTAR Industrial en Colombia — preguntas clave
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

      {/* ANTI-INTERMEDIARIO */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', border: '2px solid #e2e8f0', borderRadius: 14, padding: '28px 32px', borderLeft: '5px solid #17A2B8' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#001A33', marginBottom: 14 }}>
              ¿Es este servicio para usted?
            </h3>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              BIC trabaja directamente con <strong>industrias, agroindustrias y empresas</strong> que necesitan regularizar sus vertimientos o diseñar una PTAR para un proyecto nuevo — no con intermediarios.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Si usted es el responsable del proyecto o el área ambiental de la empresa, la propuesta técnica llega en menos de 24 horas sin costo.
            </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 10 }}>
            ¿Colega ingeniero buscando precio de referencia o asesoría técnica? No es el canal.
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏭</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita el diseño de una PTAR<br />para su industria en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proceso industrial, el caudal estimado del efluente y la región.
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
