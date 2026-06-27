import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy propietario/empresario y necesito tramitar un permiso de vertimiento en Colombia. Tengo el proyecto activo y quiero cotizar directamente con BIC.')

const seoConfig = {
  title: 'Permiso de Vertimientos Colombia | Trámite CAR CORPOCALDAS CRQ | BIC',
  description: 'Tramitamos permisos de vertimientos ante CORPOCALDAS, CRQ y demás CAR en Colombia. Para urbanizaciones, industrias y proyectos. Incluye diseño de PTAR si aplica. Desde $5M COP.',
  keywords: [
    'permiso vertimientos Colombia',
    'permiso vertimientos CORPOCALDAS',
    'permiso vertimientos industriales',
    'trámite vertimientos CAR',
    'permiso vertimientos urbanización',
    'permiso vertimientos Colombia requisitos',
    'permiso ambiental vertimientos',
    'autorización ambiental vertimientos Colombia',
    'trámite CAR aguas residuales',
    'Decreto 1076 permiso vertimientos',
  ],
  canonical: 'https://ingenieriabernal.co/permiso-vertimientos-colombia',
}

const TIPOS_VERTIMIENTO = [
  {
    icon: '🏘️',
    tipo: 'Vertimientos domésticos — urbanizaciones',
    desc: 'Aguas residuales de conjuntos residenciales, condominios campestres y urbanizaciones sin conexión a alcantarillado público. Requiere diseño de PTAR y permiso de vertimientos. La CAR exige caracterización del efluente y análisis del cuerpo receptor.',
    aplica: 'Constructoras, urbanizadores, conjuntos residenciales rurales.',
  },
  {
    icon: '🏭',
    tipo: 'Vertimientos industriales',
    desc: 'Efluentes de procesos productivos: agroindustria (café, lácteos, caña), industria manufacturera, lavado de vehículos, talleres. Los límites del Decreto 1076/2015 son más estrictos y exigen caracterización específica del agua de proceso.',
    aplica: 'Industria, agroindustria, parques industriales, bodegas logísticas.',
  },
  {
    icon: '🌾',
    tipo: 'Vertimientos agropecuarios',
    desc: 'Aguas de lavado de establos, porquerizas, plantas de beneficio avícola y porquerizas. Los límites para DBO, SST y coliformes son exigidos por la CAR y requieren sistema de tratamiento previo al vertimiento.',
    aplica: 'Granjas avícolas, porcícolas, ganaderas y plantas de sacrificio.',
  },
  {
    icon: '🏗️',
    tipo: 'Vertimientos de campamentos y obras',
    desc: 'Aguas residuales de campamentos temporales en obras de infraestructura, proyectos mineros y construcción. Permiso temporal o definitivo según la duración del proyecto.',
    aplica: 'Constructoras, minería, proyectos de infraestructura vial y energética.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Caracterización del efluente',
    desc: 'Toma de muestras y análisis de laboratorio para determinar los parámetros fisicoquímicos del agua residual a verter: DBO, DQO, SST, pH, coliformes, grasas y aceites, y los parámetros específicos según el tipo de industria definidos en la Resolución 0631/2015.',
    herramientas: ['Lab. acreditado IDEAM', 'Res. 0631/2015', 'Muestreo compuesto 24h', 'Cadena de custodia'],
    resultado: 'Informe de caracterización fisicoquímica del efluente',
  },
  {
    paso: '02',
    titulo: 'Estudio del cuerpo receptor',
    desc: 'Análisis del cuerpo de agua receptor (quebrada, río, laguna o suelo): caudal, calidad actual y capacidad de asimilación. Este estudio determina si el vertimiento es compatible con los usos del agua aguas abajo y es exigido por todas las CAR.',
    herramientas: ['Aforo caudal receptor', 'Muestras calidad agua', 'Decreto 1076/2015', 'Modelo de mezcla'],
    resultado: 'Estudio de dilución y capacidad de asimilación del cuerpo receptor',
  },
  {
    paso: '03',
    titulo: 'Diseño de PTAR (si aplica)',
    desc: 'Si el vertimiento no cumple los límites de la Resolución 0631/2015 sin tratamiento, BIC diseña la PTAR adecuada. Incluye selección tecnológica, memorias de cálculo y planos constructivos firmados por especialista con matrícula COPNIA vigente.',
    herramientas: ['RAS 2017', 'AutoCAD Civil 3D', 'NSR-10', 'COPNIA 17202-313228 CLD'],
    resultado: 'Diseño PTAR completo con memorias y planos constructivos',
  },
  {
    paso: '04',
    titulo: 'Elaboración del expediente',
    desc: 'Preparación de toda la documentación técnica requerida por la CAR: memoria descriptiva del proyecto, coordenadas de descarga, planos de localización, formulario de solicitud y anexos normativos. BIC adapta el expediente a los requerimientos específicos de cada CAR.',
    herramientas: ['Formularios CAR', 'Dec. 1076/2015', 'Guías técnicas CAR', 'Sistema VITAL (CORPOCALDAS)'],
    resultado: 'Expediente técnico completo listo para radicar',
  },
  {
    paso: '05',
    titulo: 'Radicación y seguimiento',
    desc: 'El cliente radica el expediente ante la CAR (o BIC lo acompaña en la radicación). BIC responde las observaciones técnicas de la Corporación, atiende las visitas de campo y acompaña el proceso hasta la expedición de la resolución de permiso.',
    herramientas: ['VITAL / PISCC (según CAR)', 'Comunicaciones técnicas', 'Visitas de campo', 'Respuesta observaciones CAR'],
    resultado: 'Resolución de permiso de vertimientos expedida por la CAR',
  },
]

const CARS = [
  { car: 'CORPOCALDAS', dept: 'Caldas', notas: 'CAR principal de BIC — tramitación directa con profesionales conocidos' },
  { car: 'CRQ', dept: 'Quindío', notas: 'Trámites en Armenia, Montenegro, Calarcá y municipios del Quindío' },
  { car: 'CARDER', dept: 'Risaralda', notas: 'Pereira, Dosquebradas, La Virginia, Quinchía' },
  { car: 'CORNARE', dept: 'Oriente Antioqueño', notas: 'Rionegro, Guarne, La Ceja, Marinilla, San Vicente' },
  { car: 'CORANTIOQUIA', dept: 'Antioquia (centro y occidente)', notas: 'Medellín área metropolitana, Urabá, Bajo Cauca' },
  { car: 'CAR Cundinamarca', dept: 'Cundinamarca', notas: 'Proyectos en Bogotá-región, Sabana Occidente y Norte' },
  { car: 'CDMB', dept: 'Santander', notas: 'Bucaramanga, Floridablanca, Piedecuesta, Girón' },
]

const TIEMPOS = [
  { etapa: 'Caracterización + estudio cuerpo receptor', duracion: '3–5 semanas', nota: 'Incluye tiempos de laboratorio acreditado' },
  { etapa: 'Diseño PTAR (si aplica)', duracion: '4–8 semanas', nota: 'Según complejidad del sistema requerido' },
  { etapa: 'Elaboración expediente técnico', duracion: '2–3 semanas', nota: 'Adaptado a requerimientos de cada CAR' },
  { etapa: 'Revisión y aprobación CAR', duracion: '3–6 meses', nota: 'Variable por CAR — CORPOCALDAS: ~4 meses promedio' },
  { etapa: 'Total típico (con PTAR)', duracion: '6–10 meses', nota: 'Desde inicio hasta resolución de permiso expedida' },
]

const PRECIOS = [
  { servicio: 'Acompañamiento básico (sin PTAR) — expediente y trámite', rango: 'Desde $5M COP' },
  { servicio: 'Expediente técnico completo + radicación + seguimiento CAR', rango: '$8M – $18M COP' },
  { servicio: 'Con diseño de PTAR pequeña (< 0,5 L/s)', rango: '$15M – $25M COP' },
  { servicio: 'Con diseño de PTAR mediana (0,5–5 L/s)', rango: '$25M – $40M COP' },
  { servicio: 'Permiso vertimientos industrial con caracterización completa', rango: '$12M – $35M COP' },
]

const FAQ = [
  {
    q: '¿Cuándo se necesita un permiso de vertimientos en Colombia?',
    a: 'Siempre que se descarguen aguas residuales (domésticas, industriales o agropecuarias) a un cuerpo de agua superficial, subterráneo o al suelo. El Decreto 1076/2015 establece que ningún vertimiento puede hacerse sin permiso previo de la CAR competente. Aplica para urbanizaciones sin alcantarillado público, industrias, granjas y campamentos de obra.',
  },
  {
    q: '¿Cuánto tarda el trámite del permiso de vertimientos ante la CAR?',
    a: 'El tiempo real depende de la CAR, pero el rango típico es de 4 a 8 meses desde la radicación del expediente completo. CORPOCALDAS tiene tiempos de respuesta de aproximadamente 3 a 5 meses en condiciones normales. La etapa más variable es la revisión técnica de la CAR y las observaciones que emite. BIC acompaña todo el proceso respondiendo observaciones y atendiendo visitas.',
  },
  {
    q: '¿Qué documentos pide la CAR para el permiso de vertimientos?',
    a: 'Los documentos básicos exigidos por todas las CAR son: (1) formulario de solicitud diligenciado, (2) caracterización fisicoquímica del efluente por laboratorio acreditado, (3) estudio del cuerpo receptor con análisis de capacidad de asimilación, (4) memoria descriptiva del sistema de tratamiento (si aplica), (5) planos de localización con coordenadas del punto de vertimiento, (6) certificado de matrícula COPNIA del profesional firmante. Algunas CAR tienen requisitos adicionales.',
  },
  {
    q: '¿Se puede obtener el permiso de vertimientos sin construir una PTAR?',
    a: 'En algunos casos sí, cuando el vertimiento ya cumple los límites de la Resolución 0631/2015 sin tratamiento previo (muy poco frecuente en aguas residuales domésticas). En la mayoría de los casos, la CAR exige que el vertimiento pase por un sistema de tratamiento que garantice el cumplimiento de los parámetros antes de la descarga al cuerpo receptor. BIC realiza el análisis para cada caso específico.',
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
  { href: '/diseno-ptar-colombia', title: 'Diseño de PTAR en Colombia — Plantas de Tratamiento de Aguas Residuales' },
  { href: '/diseno-ptar-manizales', title: 'Diseño de PTAR en Manizales y Caldas — Trámite CORPOCALDAS' },
  { href: '/blog/ptar-industrial-colombia', title: 'PTAR Industrial en Colombia: Guía Técnica Completa' },
]

export default function PermisoVertimientosColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-pv-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-pv-breadcrumb'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Permiso de Vertimientos Colombia', item: 'https://ingenieriabernal.co/permiso-vertimientos-colombia' },
      ],
    })
    document.head.appendChild(bc)
    const svc = document.createElement('script')
    svc.type = 'application/ld+json'
    svc.id = 'schema-pv-service'
    svc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Permiso de Vertimientos en Colombia — Trámite ante CAR',
      description: seoConfig.description,
      url: seoConfig.canonical,
      provider: {
        '@type': 'Organization',
        name: 'BIC — Bernal Ingeniería Consultores',
        url: 'https://ingenieriabernal.co',
        telephone: '+573024778910',
        address: { '@type': 'PostalAddress', addressLocality: 'Manizales', addressRegion: 'Caldas', addressCountry: 'CO' },
      },
      areaServed: { '@type': 'Country', name: 'Colombia' },
      serviceType: 'Trámite de Permiso de Vertimientos ante CAR',
    })
    document.head.appendChild(svc)
    return () => {
      document.getElementById('schema-pv-faq')?.remove()
      document.getElementById('schema-pv-breadcrumb')?.remove()
      document.getElementById('schema-pv-service')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Permiso de Vertimientos en Colombia — Trámite ante CAR | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Permiso de Vertimientos en Colombia — Trámite ante CAR"
        serviceDesc={seoConfig.description}
        serviceUrl="/permiso-vertimientos-colombia"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'Acompañamiento básico sin PTAR', minPrice: 5000000, maxPrice: 12000000, priceCurrency: 'COP', description: 'Expediente técnico + radicación + seguimiento ante la CAR' },
          { name: 'Con diseño de PTAR pequeña (< 0,5 L/s)', minPrice: 15000000, maxPrice: 25000000, priceCurrency: 'COP', description: 'Expediente + diseño sistema compacto + trámite CAR' },
          { name: 'Con diseño de PTAR mediana (0,5–5 L/s)', minPrice: 25000000, maxPrice: 40000000, priceCurrency: 'COP', description: 'Diseño completo + permiso vertimientos para municipios o industrias' },
        ]}
      />

      <CTABanner service="Permiso de Vertimientos — trámite ante CAR" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería ambiental · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Permiso de Vertimientos en Colombia — Trámite ante CAR
          </h1>
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Expediente técnico completo y acompañamiento hasta la resolución de la CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores tramita permisos de vertimientos ante CORPOCALDAS, CRQ, CARDER,
            CORNARE, CORANTIOQUIA, CAR Cundinamarca y demás corporaciones autónomas regionales de Colombia.
            Elaboramos el expediente técnico completo, diseñamos la PTAR si aplica, y acompañamos el proceso
            hasta la expedición de la resolución.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar permiso de vertimientos</Btn>
            <Btn variant="outline" href="/diseno-ptar-colombia" dark>Ver diseño de PTAR</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Dec. 1076/2015', 'Res. 0631/2015', 'CORPOCALDAS', 'CRQ · CARDER', 'COPNIA vigente', 'Desde $5M COP'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEO FRAGMENT ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> tramita permisos de vertimientos ante CORPOCALDAS, CRQ, CARDER, CORNARE, CORANTIOQUIA y demás CAR en Colombia conforme al Decreto 1076/2015 y la Resolución 0631/2015. Elaboramos el expediente técnico completo (caracterización, estudio cuerpo receptor, diseño PTAR si aplica) y acompañamos el proceso hasta la resolución. Honorarios desde $5 millones COP. Firma COPNIA 17202-313228 CLD. Sede Manizales — cobertura nacional. Propuesta en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── QUÉ ES ── */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal Colombia</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Qué es el permiso de vertimientos y cuándo se requiere?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 800 }}>
            El <strong>permiso de vertimientos</strong> es la autorización ambiental que otorga la Corporación Autónoma Regional (CAR) para descargar aguas residuales a cuerpos hídricos superficiales, subterráneos o al suelo, una vez verificado que el vertimiento cumple los límites establecidos en la <strong>Resolución 0631/2015 del MADS</strong>.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 800 }}>
            El <strong>Decreto 1076/2015</strong> (DUR Sector Ambiente) establece que ningún vertimiento puede realizarse sin permiso previo de la CAR, bajo pena de sanción administrativa. Aplica para urbanizaciones sin alcantarillado público, industrias, fincas con beneficiadero de café, plantas agroindustriales, campamentos de obra y cualquier proyecto que descargue aguas residuales al ambiente.
          </p>
        </div>
      </Section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de vertimiento</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de vertimiento tiene su proyecto?
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS_VERTIMIENTO.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{t.tipo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>APLICA PARA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.aplica}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso de tramitación</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo tramita BIC el permiso de vertimientos
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

      {/* ── CARS ATENDIDAS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Corporaciones autónomas</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            CAR ante las que tramitamos permisos de vertimientos
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {CARS.map(c => (
              <div key={c.car} style={{
                display: 'grid', gridTemplateColumns: '130px 140px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 13 }}>{c.car}</div>
                <p style={{ color: '#555', fontSize: 12, margin: 0, fontWeight: 600 }}>{c.dept}</p>
                <p style={{ color: '#444', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.notas}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TIEMPOS REALES ── */}
      <Section style={{ background: '#f0f9ff', borderTop: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tiempos reales del trámite</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Cuánto tarda el permiso de vertimientos en Colombia?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24, maxWidth: 780 }}>
            El plazo real depende de la CAR, la complejidad del proyecto y la calidad del expediente radicado. Un expediente incompleto puede sumar meses al trámite. BIC entrega expedientes técnicamente sólidos para minimizar observaciones.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {TIEMPOS.map(t => (
              <div key={t.etapa} style={{
                display: 'grid', gridTemplateColumns: '1fr 140px', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div>
                  <p style={{ color: '#333', fontSize: 14, fontWeight: 600, margin: '0 0 4px' }}>{t.etapa}</p>
                  <p style={{ color: '#777', fontSize: 12, margin: 0 }}>{t.nota}</p>
                </div>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 12px', fontWeight: 700, fontSize: 13, textAlign: 'center' }}>{t.duracion}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión referencial</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Precios orientativos 2026
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Precios incluyen elaboración del expediente técnico, radicación y seguimiento ante la CAR. El diseño de PTAR se cotiza según caudal y tecnología. <strong>No incluyen costos de laboratorio</strong> (análisis fisicoquímicos).
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

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
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
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios de saneamiento y ambiente
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño de PTAR Colombia', href: '/diseno-ptar-colombia' },
              { label: 'Diseño de PTAR Manizales', href: '/diseno-ptar-manizales' },
              { label: 'Concesión de aguas Colombia', href: '/concesion-aguas-colombia' },
              { label: 'Diseño de PTAP Colombia', href: '/diseno-ptap-colombia' },
              { label: 'Diseño alcantarillado Colombia', href: '/diseno-alcantarillado-colombia' },
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
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre el permiso de vertimientos en Colombia
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

      {/* ── ANTI-INTERMEDIARIO ENHANCED ── */}
{/* ── ANTI-INTERMEDIARIO ENHANCED ── */}
      <Section style={{ background: '#001A33', padding: '52px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 26px)', color: '#fff', marginBottom: 16 }}>
            Solo con quien tiene el proyecto activo y el capital para contratar
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.85, maxWidth: 700, margin: '0 auto 12px' }}>
            BIC trabaja directamente con <strong style={{ color: '#17A2B8' }}>industrias, hoteles, haciendas, urbanizaciones y propietarios privados</strong> que requieren el permiso de vertimiento ante la CAR — personas con el sistema de tratamiento o el predio y la decisión de contratar.
            No cotizamos a intermediarios ni atendemos ingenieros que buscan actualizar metodologías o comparar precios para sus propios clientes.
            El Ing. Rogerio Bernal Ríos (COPNIA 17202-313228 CLD) firma el expediente. Si usted decide y tiene el proyecto, la propuesta llega en 24 horas.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>
            ¿Colega ingeniero buscando asesoría técnica o precio de referencia? No es el canal.
          </p>
        </div>
      </Section>

      {/* ── FORMULARIO COTIZACIÓN ── */}
      <Section style={{ background: '#f8f9fa' }}>
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
            ¿Necesita tramitar un permiso<br />de vertimientos ante la CAR?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de vertimiento, la CAR competente y el departamento.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Atención en todo Colombia.
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
