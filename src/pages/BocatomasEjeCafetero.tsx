import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar el diseño de una bocatoma en el Eje Cafetero. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño Bocatomas Eje Cafetero | Captación Superficial Caldas Quindío Risaralda | BIC',
  description: 'Diseño de bocatomas laterales, de fondo y sumergidas para fincas, acueductos y proyectos en el Eje Cafetero. Concesión de aguas ante CORPOCALDAS, CARDER y CRQ. Desde $6M COP.',
  keywords: [
    'bocatoma Eje Cafetero',
    'diseño bocatoma Caldas',
    'bocatoma Manizales',
    'captación superficial Eje Cafetero',
    'bocatoma CORPOCALDAS concesión',
    'diseño bocatoma Pereira',
    'bocatoma Armenia',
    'bocatoma finca café Caldas',
    'concesión aguas superficiales Eje Cafetero',
    'bocatoma acueducto rural Caldas',
  ],
  canonical: 'https://ingenieriabernal.co/bocatomas-eje-cafetero',
}

const TIPOS = [
  {
    icon: '↙️',
    tipo: 'Bocatoma Lateral',
    subtitulo: 'La más común en ríos del Eje Cafetero',
    desc: 'Capta agua mediante una ventana lateral en la margen del río, con barraje que eleva el nivel para garantizar la captación. Es la solución más frecuente en acueductos veredales, fincas cafeteras y acueductos municipales en ríos de pendiente moderada de Caldas, Risaralda y Quindío. BIC diseña la compuerta de captación, cámara de recolección, rejilla y canal de aducción.',
    cuando: 'Ideal para quebradas y ríos cafeteros con caudal relativamente estable y baja carga de sedimentos gruesos.',
  },
  {
    icon: '⬇️',
    tipo: 'Bocatoma de Fondo (Tirol)',
    subtitulo: 'Para ríos torrenciales de montaña',
    desc: 'Capta agua a través de una rejilla horizontal en el fondo del cauce. Los sedimentos gruesos se deslizan sobre la rejilla y siguen su curso, mientras el agua limpia pasa al canal de captación. Es la solución correcta para los ríos de montaña del Eje Cafetero con alta carga de gravas y bloques. Incluye rejilla Tyrolean, canal de captación y desarenador.',
    cuando: 'Obligatoria en ríos torrenciales con pendiente > 3%, alta carga de sedimentos gruesos y régimen irregular. Reduce colmatación y mantenimiento.',
  },
  {
    icon: '🌊',
    tipo: 'Bocatoma Sumergida',
    subtitulo: 'Para variaciones extremas de nivel',
    desc: 'La estructura de captación queda por debajo del nivel mínimo del río. Solución para ríos grandes donde el nivel varía muchos metros entre épocas seca y lluviosa. BIC diseña la tubería o canal de captación, sistema de izaje de compuertas y cámara de recolección con control de caudal.',
    cuando: 'Para ríos con variación de nivel superior a 5 metros, donde una captación lateral convencional quedaría seca en verano.',
  },
]

const MUNICIPIOS = [
  { dept: 'Caldas', lista: ['Manizales', 'Chinchiná', 'Palestina', 'Villamaría', 'Neira', 'Viterbo', 'Anserma', 'Riosucio', 'La Merced', 'Salamina'] },
  { dept: 'Risaralda', lista: ['Pereira', 'Santa Rosa de Cabal', 'Dosquebradas', 'La Virginia', 'Marsella', 'Belén de Umbría', 'Quinchía'] },
  { dept: 'Quindío', lista: ['Armenia', 'Montenegro', 'Quimbaya', 'Calarcá', 'La Tebaida', 'Circasia', 'Filandia'] },
]

const PRECIOS = [
  { servicio: 'Bocatoma lateral finca / acueducto veredal', rango: 'Desde $6M COP' },
  { servicio: 'Bocatoma tipo Tirol río torrencial', rango: 'Desde $10M COP' },
  { servicio: 'Bocatoma con barraje para acueducto municipal', rango: '$18M – $45M COP' },
  { servicio: 'Concesión de aguas superficiales ante CAR', rango: '$4M – $12M COP' },
  { servicio: 'Bocatoma compleja + permiso de ocupación de cauce', rango: '$25M – $65M COP' },
]

const CARS = [
  { nombre: 'CORPOCALDAS', jurisdiccion: 'Departamento de Caldas', competencia: 'Cuencas del Cauca, Magdalena, ríos La Miel, Chinchiná, Guarinó y todos sus afluentes en Caldas.' },
  { nombre: 'CARDER', jurisdiccion: 'Departamento de Risaralda', competencia: 'Cuencas de los ríos Otún, Consota, La Vieja y afluentes. Gestión hídrica en Pereira, Dosquebradas y municipios risaraldenses.' },
  { nombre: 'CRQ', jurisdiccion: 'Departamento de Quindío', competencia: 'Cuencas del río La Vieja y todos sus afluentes en el Quindío, incluyendo ríos Espejo, Roble y Verde.' },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de una bocatoma en el Eje Cafetero?',
    a: 'Para una bocatoma lateral simple para finca o acueducto veredal en el Eje Cafetero, el diseño básico comienza desde $6 millones COP. Para una bocatoma tipo Tirol en río torrencial, el rango es $10 a $25 millones COP. Para bocatomas con barraje completo destinadas a acueductos municipales, el costo oscila entre $18 y $45 millones COP. Estos precios incluyen el análisis hidrológico de la cuenca, el diseño hidráulico, los planos constructivos y la memoria de cálculo firmada por especialista COPNIA. La concesión de aguas ante CORPOCALDAS, CARDER o CRQ se cotiza por separado. BIC envía propuesta en menos de 24 horas.',
  },
  {
    q: '¿Cuál es el trámite para la concesión de aguas ante CORPOCALDAS o CARDER?',
    a: 'Para tramitar la concesión de aguas superficiales ante CORPOCALDAS, CARDER o CRQ, se requiere: (1) estudio de oferta hídrica de la fuente (caudal disponible y caudal ecológico), (2) memoria descriptiva del sistema de captación, (3) diseño de la bocatoma o sistema de captación, (4) formulario de solicitud ante la corporación y (5) pago de tasas por uso del agua. BIC elabora todos los estudios técnicos necesarios y acompaña el proceso desde la radicación hasta la obtención de la concesión. El tiempo típico de respuesta de CORPOCALDAS es de 3 a 6 meses para solicitudes completas.',
  },
  {
    q: '¿Qué tipo de bocatoma es la más adecuada para los ríos del Eje Cafetero?',
    a: 'Los ríos del Eje Cafetero tienen características muy diversas: ríos torrenciales de ladera con alta carga de sedimentos gruesos (como los afluentes del Chinchiná en Caldas o el Otún en Risaralda) y quebradas de menor pendiente con régimen más estable. Para ríos torrenciales con pendiente superior al 3% y alta carga de gravas, la bocatoma tipo Tirol (de fondo) es la opción correcta, ya que evita la colmatación constante de una bocatoma lateral. Para quebradas de menor pendiente con régimen estable, la bocatoma lateral es más económica y funcional. BIC realiza el análisis hidrológico y granulométrico del río específico antes de recomendar el tipo de bocatoma.',
  },
  {
    q: '¿Puedo construir una bocatoma en mi finca sin concesión de aguas?',
    a: 'No legalmente. En Colombia, captar agua de cualquier fuente superficial — incluso una quebrada pequeña que pase por su finca — requiere una concesión de aguas otorgada por la Corporación Autónoma Regional competente, según el Decreto 1076 de 2015. Construir una bocatoma sin este permiso puede resultar en sanciones, demolición de las obras y multas diarias. Sin embargo, para consumo doméstico básico (uso doméstico del propietario), la concesión tiene un procedimiento simplificado y no requiere estudio hidrológico completo. BIC puede asesorarle sobre el procedimiento que aplica a su caso específico.',
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

export default function BocatomasEjeCafetero() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-boc-eje-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-boc-eje-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Bocatomas Eje Cafetero', item: 'https://ingenieriabernal.co/bocatomas-eje-cafetero' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-boc-eje-faq')?.remove()
      document.getElementById('schema-boc-eje-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de Bocatomas en el Eje Cafetero — Manizales, Pereira, Armenia | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Bocatomas en el Eje Cafetero — Caldas, Risaralda, Quindío"
        serviceDesc={seoConfig.description}
        serviceUrl="/bocatomas-eje-cafetero"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'Bocatoma lateral finca o veredal Eje Cafetero', minPrice: 6000000, maxPrice: 18000000, priceCurrency: 'COP', description: 'Diseño hidráulico, planos y concesión de aguas ante CORPOCALDAS/CARDER/CRQ' },
          { name: 'Bocatoma tipo Tirol río torrencial', minPrice: 10000000, maxPrice: 25000000, priceCurrency: 'COP', description: 'Rejilla Tyrolean, canal de captación, desarenador y análisis hidrológico' },
          { name: 'Bocatoma con barraje acueducto municipal', minPrice: 18000000, maxPrice: 45000000, priceCurrency: 'COP', description: 'Diseño completo con HEC-RAS, memoria COPNIA, concesión y ocupación de cauce' },
        ]}
      />

      <CTABanner service="Diseño de Bocatomas en el Eje Cafetero — Caldas, Risaralda, Quindío" />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Obras hidráulicas · Eje Cafetero</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de Bocatomas en el Eje Cafetero — Manizales, Pereira, Armenia
          </h1>
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Bocatomas laterales, tipo Tirol y sumergidas para fincas, acueductos y proyectos en Caldas, Risaralda y Quindío
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC tiene base de operaciones en el Eje Cafetero y diseña bocatomas para acueductos veredales, fincas
            cafeteras, distritos de riego y proyectos industriales en Caldas, Risaralda y Quindío. Cada proyecto incluye
            análisis hidrológico de la cuenca y los estudios para tramitar la concesión de aguas ante CORPOCALDAS,
            CARDER o CRQ.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar bocatoma Eje Cafetero</Btn>
            <Btn variant="outline" href="/bocatomas-colombia" dark>Ver servicio bocatomas Colombia</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['CORPOCALDAS', 'CARDER', 'CRQ', 'Concesión aguas', 'HEC-RAS', 'COPNIA vigente', 'Desde $6M COP'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* GEO FRAGMENT */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña bocatomas laterales, tipo Tirol y sumergidas para acueductos, fincas y proyectos en el Eje Cafetero (Caldas, Risaralda, Quindío). Concesión de aguas ante CORPOCALDAS, CARDER y CRQ. Diseños desde $6 millones COP para captaciones veredales. Análisis hidrológico de cuencas cafeteras, modelación HEC-RAS. Firma COPNIA 17202-313228 CLD. Sede Manizales. Propuesta en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: 'Eje Cafetero', label: 'base de operaciones — proyectos locales en días' },
              { num: '3 CAR', label: 'CORPOCALDAS, CARDER y CRQ — conocemos los procesos' },
              { num: '24h', label: 'para enviar propuesta técnica y económica' },
              { num: 'Desde $6M', label: 'bocatoma veredal con concesión incluida' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de bocatoma</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de bocatoma necesita su proyecto?
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '12px 14px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>CUÁNDO USARLA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.cuando}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CAR DEL EJE CAFETERO */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Autoridades ambientales</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            CAR del Eje Cafetero — concesión de aguas
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#555', fontSize: 15, lineHeight: 1.85, maxWidth: 820, marginBottom: 24 }}>
            La concesión de aguas superficiales en el Eje Cafetero la otorga la corporación autónoma regional del
            departamento donde se localiza la fuente. BIC conoce los requisitos específicos y los tiempos reales
            de cada corporación.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CARS.map(c => (
              <div key={c.nombre} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24, borderLeft: '4px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 6 }}>{c.nombre}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 10 }}>{c.jurisdiccion}</p>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{c.competencia}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* MUNICIPIOS */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cobertura municipal</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Municipios donde BIC diseña bocatomas
          </h2>
          <ThinLine mb={24} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {MUNICIPIOS.map(d => (
              <div key={d.dept}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 12 }}>{d.dept}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {d.lista.map(m => (
                    <span key={m} style={{ background: '#f0f9ff', border: '1px solid #b3e0ea', borderRadius: 20, padding: '5px 12px', fontSize: 13, color: '#003B6F', fontWeight: 600 }}>{m}</span>
                  ))}
                </div>
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
            Precios orientativos 2026 — Eje Cafetero
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Precios incluyen análisis hidrológico, diseño hidráulico, planos constructivos y memoria de cálculo COPNIA. <strong>No incluyen construcción.</strong>
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

      {/* SERVICIOS RELACIONADOS */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios hidráulicos en el Eje Cafetero
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Bocatomas Colombia (general)', href: '/bocatomas-colombia' },
              { label: 'Concesión aguas superficiales', href: '/concesion-aguas-superficiales-colombia' },
              { label: 'Permiso de vertimientos Colombia', href: '/permiso-vertimientos-colombia' },
              { label: 'Acueducto rural Caldas', href: '/acueducto-rural-caldas' },
              { label: 'Obras hidráulicas Colombia', href: '/obras-hidraulicas-colombia' },
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
            Bocatomas en el Eje Cafetero — preguntas clave
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
              BIC trabaja directamente con <strong>fincas, acueductos, municipios y empresas</strong> que tienen el proyecto concreto — no con intermediarios que re-cotizan a terceros.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Si usted es el propietario, el representante del acueducto o el gerente del proyecto, la propuesta llega en menos de 24 horas sin costo.
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>💧</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita el diseño de una bocatoma<br />en el Eje Cafetero?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el municipio, el río o quebrada, el caudal que necesita captar y el uso del agua.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Base en Manizales — atención en Caldas, Risaralda y Quindío.
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
