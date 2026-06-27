import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizacion para estudios hidraulicos o hidrologicos en Colombia. Pueden enviarme una propuesta?')

const seoConfig = {
  title: 'Precio Estudios Hidraulicos Colombia 2026 — Cotizacion en 24h | BIC',
  description: 'Precios reales de estudios hidraulicos e hidrologicos en Colombia: Decreto 1807, HEC-RAS 2D, concesion de aguas, permiso de vertimientos. Desde $3.5M COP. Propuesta en 24 horas.',
  keywords: [
    'precio estudios hidraulicos Colombia',
    'costo estudio hidrologico Colombia',
    'cuanto cuesta estudio Decreto 1807',
    'precio estudio HEC-RAS Colombia',
    'costo concesion aguas superficiales',
    'precio permiso vertimientos Colombia',
    'cotizacion estudios hidraulicos',
    'tarifas ingenieria hidraulica Colombia',
    'precio estudio riesgo hidrico Colombia',
    'costo modelacion hidraulica HEC-RAS',
  ],
  canonical: 'https://ingenieriabernal.co/precio-estudios-hidraulicos-colombia',
}

const SERVICIOS = [
  { nombre: 'Estudio Hidrologico (curvas IDF, caudales de diseno)', desde: 3500000, hasta: 12000000, desc: 'Analisis de precipitacion, curvas IDF, modelacion HEC-HMS, caudales para TR 2-100 anos. Informe tecnico y memorias de calculo.', usos: 'Licencias de construccion, puentes, alcantarillados, POT municipal.', plazo: '2-4 semanas' },
  { nombre: 'Modelacion Hidraulica HEC-RAS 2D (llanura de inundacion)', desde: 5000000, hasta: 18000000, desc: 'Modelacion 1D o 2D con HEC-RAS. Perfiles hidraulicos TR 10, 50 y 100 anos. Mapas de amenaza, profundidad y velocidad.', usos: 'Decreto 1807, planes parciales, licencias urbanisticas, POT.', plazo: '3-6 semanas' },
  { nombre: 'Estudio Decreto 1807 para Licencia de Construccion', desde: 6000000, hasta: 22000000, desc: 'Estudio detallado de inundacion y/o movimientos en masa segun Decreto 1807/2014. Apto para tramitar licencia urbanistica ante la curaduria.', usos: 'Urbanizaciones, parcelaciones, edificios en zonas con afectacion hidrica.', plazo: '3-8 semanas' },
  { nombre: 'Concesion de Aguas Superficiales ante CAR', desde: 4000000, hasta: 20000000, desc: 'Estudio hidrologico, memoria descriptiva, aforo si aplica y radicacion completa ante CORPOCALDAS, CARDER, CRQ, CORTOLIMA u otra CAR.', usos: 'Acueductos veredales, riego, industria, PCH.', plazo: '4-8 semanas (radicacion); CAR: 6-12 meses adicionales' },
  { nombre: 'Permiso de Vertimientos ante CAR', desde: 5000000, hasta: 40000000, desc: 'Expediente tecnico, PSMV si aplica, diseno de PTAR si se requiere y gestion ante la autoridad ambiental.', usos: 'Urbanizaciones, industrias, municipios con vertimientos a cuerpos de agua.', plazo: '6-12 semanas (expediente); CAR: 6-18 meses adicionales' },
  { nombre: 'Diseno de PTAR (Planta de Tratamiento Aguas Residuales)', desde: 8000000, hasta: 55000000, desc: 'Diseno conceptual y basico de PTAR para caudales 0.1-30 L/s. Memoria de diseno, planos, calculos y lista de equipos.', usos: 'Urbanizaciones, proyectos industriales, municipios rurales.', plazo: '4-10 semanas' },
  { nombre: 'Diseno de Acueducto Rural o Veredal', desde: 6000000, hasta: 25000000, desc: 'Diseno de sistema de captacion, conduccion, tratamiento y distribucion segun RAS 2017. Planos y presupuesto.', usos: 'Comunidades rurales, acueductos comunitarios, proyectos SGR.', plazo: '4-8 semanas' },
  { nombre: 'Estudios para Municipios — Gestion del Riesgo Hidrico', desde: 15000000, hasta: 80000000, desc: 'Estudios basicos y detallados de inundacion y torrencialidad para revision de POT, Decreto 1807 y Ley 1523. Cartografia SIG.', usos: 'Alcaldias, entidades descentralizadas, Corporaciones Autonomas Regionales.', plazo: '8-20 semanas' },
  { nombre: 'Redes Hidrosanitarias para Licencia de Construccion', desde: 3000000, hasta: 15000000, desc: 'Diseno de redes de agua potable, aguas residuales, aguas lluvias y sistema contra incendio segun RAS 2017 y NSR-10.', usos: 'Edificios, urbanizaciones, proyectos comerciales e industriales.', plazo: '2-5 semanas' },
]

const FACTORES = [
  { factor: 'Area de la cuenca o el proyecto', impacto: 'A mayor area, mayor tiempo de modelacion y costo de procesamiento de datos.' },
  { factor: 'Disponibilidad de informacion hidrometrica', impacto: 'Sin estaciones del IDEAM cerca, se requieren aforos en campo que incrementan el costo.' },
  { factor: 'Resolucion del DEM (topografia)', impacto: 'Proyectos sin topografia de detalle requieren levantamiento adicional (dron, Lidar).' },
  { factor: 'Numero de periodos de retorno solicitados', impacto: 'La mayoria incluye TR 10, 50 y 100 anos; algunos requieren TR 2, 5 y 500.' },
  { factor: 'CAR que recibe el tramite', impacto: 'Cada corporacion tiene formatos y requisitos propios; algunas exigen informacion adicional.' },
  { factor: 'Urgencia del proyecto', impacto: 'Proyectos con fecha limite de radicacion pueden requerir dedicacion exclusiva del equipo.' },
  { factor: 'Complejidad geomorfologica', impacto: 'Cuencas con confluencias, embalses o estructuras de control aumentan la complejidad.' },
  { factor: 'Alcance del informe final', impacto: 'Estudios para POT municipal incluyen cartografia SIG y sintesis diagnostica que los encarecen.' },
]

const FAQ = [
  { q: 'Cuanto cuesta un estudio Decreto 1807 en Colombia?', a: 'El costo de un estudio Decreto 1807 para licencia de construccion varia entre $6 y $22 millones COP dependiendo del tamano del predio y la complejidad de la cuenca. Para predios pequenos: $6-$10 millones. Para proyectos urbanisticos con multiples cuencas: $12-$22 millones. BIC entrega propuesta en 24 horas.' },
  { q: 'Cuanto vale un estudio hidrologico con HEC-HMS en Colombia?', a: 'Un estudio hidrologico con modelacion HEC-HMS para caudales de diseno cuesta entre $3.5 y $12 millones COP. Cuencas pequenas con informacion disponible: $3.5-$6 millones. Cuencas medianas o sin informacion local: $6-$12 millones.' },
  { q: 'Cuanto cuesta una concesion de aguas superficiales en Colombia?', a: 'El acompanamiento tecnico para tramitar una concesion de aguas cuesta $4 a $20 millones COP. Proyectos pequenos con informacion disponible: $4-$10 millones. Proyectos con aforos en campo y balance completo: $10-$20 millones. Las tasas de la CAR se suman aparte.' },
  { q: 'Cuanto cuesta un permiso de vertimientos en Colombia?', a: 'El permiso de vertimientos tiene un costo entre $5 y $40 millones COP. Sin diseno de PTAR: $5-$12 millones. Con diseno de PTAR pequena (menos de 0.5 L/s): $15-$25 millones. Para PTAR medianas (0.5-5 L/s): $25-$40 millones.' },
  { q: 'En cuanto tiempo recibo una propuesta de BIC?', a: 'BIC entrega propuesta economica detallada en maximo 24 horas habiles desde que recibe la informacion del proyecto. La propuesta incluye alcance, entregables, plazo y valor total. Sin costo.' },
  { q: 'Quien puede firmar estudios hidraulicos en Colombia?', a: 'Los estudios de ingenieria hidraulica deben ser firmados por un Ingeniero Civil o Agricola con tarjeta COPNIA vigente. BIC cuenta con el registro COPNIA 17202-313228 CLD para firma de estudios Decreto 1807, modelaciones HEC-RAS, disenos de acueductos y PTARs.' },
  { q: 'Los estudios de BIC son aceptados por todas las CAR de Colombia?', a: 'Si. BIC ha presentado estudios ante CORPOCALDAS, CARDER, CRQ, CORTOLIMA y otras CAR con resultados aprobados. Si la CAR solicita ajustes, BIC los atiende sin costo adicional.' },
  { q: 'Se puede contratar a BIC desde cualquier ciudad de Colombia?', a: 'Si. BIC trabaja de forma remota en todo el territorio nacional. Visita de campo en radio 200 km desde Manizales. Tambien tenemos proyectos en Ecuador y Mexico.' },
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

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como obtener una cotizacion de estudios hidraulicos en Colombia',
  description: 'Proceso para recibir propuesta economica de BIC en maximo 24 horas.',
  totalTime: 'PT24H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Identifica el estudio requerido', text: 'Define si necesitas Decreto 1807, concesion de aguas, permiso de vertimientos o modelacion HEC-RAS.' },
    { '@type': 'HowToStep', position: 2, name: 'Envia informacion del proyecto', text: 'Comparte ubicacion, uso del proyecto y entidad que exige el estudio.' },
    { '@type': 'HowToStep', position: 3, name: 'Recibe propuesta en 24 horas', text: 'BIC envia propuesta con alcance, entregables, plazo y valor total en maximo 24 horas habiles.' },
    { '@type': 'HowToStep', position: 4, name: 'Firma contrato y comenzamos', text: 'Anticipo del 50%. BIC inicia de inmediato. El restante se paga a la entrega del informe.' },
  ],
}

const fmtCOP = (n: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n)

export default function PrecioEstudiosHidraulicosColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const sf = document.createElement('script')
    sf.type = 'application/ld+json'; sf.id = 'schema-precio-faq'
    sf.textContent = JSON.stringify(FAQ_SCHEMA); document.head.appendChild(sf)
    const sh = document.createElement('script')
    sh.type = 'application/ld+json'; sh.id = 'schema-precio-howto'
    sh.textContent = JSON.stringify(HOWTO_SCHEMA); document.head.appendChild(sh)
    const sb = document.createElement('script')
    sb.type = 'application/ld+json'; sb.id = 'schema-precio-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Precios Estudios Hidraulicos', item: 'https://ingenieriabernal.co/precio-estudios-hidraulicos-colombia' },
      ],
    }); document.head.appendChild(sb)
    return () => {
      document.getElementById('schema-precio-faq')?.remove()
      document.getElementById('schema-precio-howto')?.remove()
      document.getElementById('schema-precio-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Precio Estudios Hidraulicos Colombia 2026 — Cotizacion en 24h | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Estudios Hidraulicos e Hidrologicos en Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/precio-estudios-hidraulicos-colombia"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'Estudio Hidrologico HEC-HMS', minPrice: 3500000, maxPrice: 12000000, priceCurrency: 'COP', description: 'Curvas IDF, caudales de diseno, informe tecnico' },
          { name: 'Modelacion Hidraulica HEC-RAS 2D', minPrice: 5000000, maxPrice: 18000000, priceCurrency: 'COP', description: 'Llanura de inundacion, perfiles hidraulicos, mapas de amenaza' },
          { name: 'Estudio Decreto 1807 para Licencia', minPrice: 6000000, maxPrice: 22000000, priceCurrency: 'COP', description: 'Estudio detallado de inundacion para licencia urbanistica' },
          { name: 'Concesion de Aguas Superficiales', minPrice: 4000000, maxPrice: 20000000, priceCurrency: 'COP', description: 'Tramite completo ante CORPOCALDAS, CARDER, CRQ u otra CAR' },
          { name: 'Permiso de Vertimientos', minPrice: 5000000, maxPrice: 40000000, priceCurrency: 'COP', description: 'Expediente tecnico, PSMV y gestion ante CAR' },
        ]}
      />
      <CTABanner service="Estudios Hidraulicos e Hidrologicos en Colombia" />

      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Precios y Cotizacion</SectionLabel>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 46px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Precio Estudios Hidraulicos<br />Colombia 2026
          </h1>
          <p style={{ fontSize: 18, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 24, maxWidth: 700 }}>
            Los estudios hidraulicos e hidrologicos en Colombia cuestan entre{' '}
            <strong style={{ color: '#60A5FA' }}>$3.5 y $80 millones COP</strong> segun el tipo de estudio,
            el tamano de la cuenca y la entidad que los exige. BIC — Bernal Ingenieria Consultores,
            COPNIA 17202-313228 CLD — entrega propuesta en{' '}
            <strong style={{ color: '#60A5FA' }}>maximo 24 horas</strong> sin costo.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
            {['Propuesta en 24 horas', 'COPNIA 17202-313228 CLD', 'Sin intermediarios'].map(tag => (
              <div key={tag} style={{ background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: 12, padding: '12px 20px', color: '#93C5FD', fontSize: 15, fontWeight: 600 }}>{tag}</div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              Pedir cotizacion por WhatsApp
            </a>
            <a href="/contacto" style={{ display: 'inline-block', background: 'transparent', color: '#60A5FA', border: '2px solid #60A5FA', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>

      <ThinLine />

      <Section>
        <SectionLabel>Tabla de Precios 2026</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 800, marginBottom: 12 }}>Precios por tipo de estudio</h2>
        <p style={{ fontSize: 17, color: '#64748B', marginBottom: 40, maxWidth: 680 }}>
          Rangos basados en proyectos reales ejecutados por BIC entre 2021 y 2025.
        </p>
        <div style={{ display: 'grid', gap: 20 }}>
          {SERVICIOS.map((s, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 16, padding: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1E293B', margin: 0 }}>{s.nombre}</h3>
                <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 8, padding: '6px 16px', whiteSpace: 'nowrap' }}>
                  <span style={{ fontSize: 13, color: '#3B82F6', fontWeight: 600 }}>{fmtCOP(s.desde)} - {fmtCOP(s.hasta)}</span>
                </div>
              </div>
              <p style={{ fontSize: 15, color: '#475569', marginBottom: 10, lineHeight: 1.6 }}>{s.desc}</p>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 13, color: '#64748B' }}><strong>Usos:</strong> {s.usos}</span>
                <span style={{ fontSize: 13, color: '#64748B' }}><strong>Plazo:</strong> {s.plazo}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, color: '#94A3B8', marginTop: 20, fontStyle: 'italic' }}>
          * Precios en COP sin IVA. No incluyen tasas de la CAR ni topografia de detalle cuando se requieran como item separado.
        </p>
      </Section>

      <ThinLine />

      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Que afecta el costo</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 12 }}>Factores que determinan el precio final</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginTop: 32 }}>
          {FACTORES.map((f, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 22, border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ width: 28, height: 28, background: '#003B6F', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1E293B', margin: 0 }}>{f.factor}</h3>
              </div>
              <p style={{ fontSize: 14, color: '#64748B', margin: 0, lineHeight: 1.6 }}>{f.impacto}</p>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      <Section>
        <SectionLabel>Como cotizar</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 12 }}>Como obtener su propuesta en 24 horas</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginTop: 32, marginBottom: 40 }}>
          {[
            { n: '01', titulo: 'Cuentenos que necesita', txt: 'Tipo de estudio, municipio y entidad que lo exige (curaduria, CAR, municipio).' },
            { n: '02', titulo: 'Recibe propuesta en 24h', txt: 'Propuesta con alcance completo, entregables, plazo y valor. Sin costo.' },
            { n: '03', titulo: 'Firma y empezamos', txt: 'Anticipo del 50%. BIC inicia inmediatamente. Resto al entregar el informe.' },
            { n: '04', titulo: 'Ajustes incluidos', txt: 'Si la CAR o curaduria piden ajustes, BIC los atiende sin costo adicional.' },
          ].map((s) => (
            <div key={s.n} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#BFDBFE', lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#1E293B' }}>{s.titulo}</h3>
              <p style={{ fontSize: 14, color: '#64748B', margin: 0, lineHeight: 1.65 }}>{s.txt}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 32px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            WhatsApp — Cotizacion sin compromiso
          </a>
        </div>
      </Section>

      <ThinLine />

      <Section style={{ background: '#001A33', color: '#fff' }}>
        <SectionLabel color="#60A5FA">Por que BIC</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 36, color: '#fff' }}>Lo que hace diferente la propuesta de BIC</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {[
            { titulo: 'COPNIA 17202-313228 CLD', txt: 'Estudios firmados por el ingeniero responsable con tarjeta COPNIA vigente. Sin intermediarios.' },
            { titulo: 'Propuesta en 24 horas', txt: 'El promotor con licencia trabada no puede esperar. BIC cotiza el mismo dia habil.' },
            { titulo: 'HEC-RAS 2D aprobado por CAR', txt: 'Modelacion que cumple los terminos de referencia de CORPOCALDAS, CARDER, CORTOLIMA y otras CAR.' },
            { titulo: 'Proyectos entregados y aprobados', txt: 'Mas de 60 estudios: Tesalia, Viterbo, Manizales, Belalcazar, Ecuador y Mexico.' },
            { titulo: 'Trato directo con el ingeniero', txt: 'El cliente habla directamente con Rogerio Bernal, el ingeniero que firma los estudios.' },
            { titulo: 'Cobertura nacional e internacional', txt: 'Radio 200 km desde Manizales + servicio remoto en Colombia, Ecuador y Mexico.' },
          ].map((d) => (
            <div key={d.titulo} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#E2E8F0', marginBottom: 8 }}>{d.titulo}</h3>
              <p style={{ fontSize: 14, color: '#94A3B8', margin: 0, lineHeight: 1.65 }}>{d.txt}</p>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      <Section>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 36 }}>Preguntas sobre precios y cotizaciones</h2>
        <div style={{ display: 'grid', gap: 16, maxWidth: 820, margin: '0 auto' }}>
          {FAQ.map((item) => (
            <div key={item.q} style={{ background: '#F8FAFC', borderRadius: 12, padding: 26, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 10 }}>{item.q}</h3>
              <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      <Section>
        <SectionLabel>Cotizacion sin costo</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite su propuesta ahora</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>
          Respuesta garantizada en maximo 24 horas habiles. Sin compromiso.
        </p>
        <QuoteFormInline />
      </Section>

      <Section style={{ background: '#F8FAFC' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Paginas relacionadas</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
          {[
            { href: '/concesion-aguas-superficiales-colombia', titulo: 'Concesion de Aguas Superficiales en Colombia' },
            { href: '/permiso-vertimientos-colombia', titulo: 'Permiso de Vertimientos en Colombia' },
            { href: '/gestion-riesgo-hidrico', titulo: 'Gestion del Riesgo Hidrico — Decreto 1807' },
            { href: '/modelacion-hidraulica-colombia', titulo: 'Modelacion Hidraulica HEC-RAS en Colombia' },
            { href: '/diseno-ptar-colombia', titulo: 'Diseno de PTAR en Colombia' },
            { href: '/calculadora-estudios-hidraulicos', titulo: 'Calculadora de Estudios Hidraulicos' },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '14px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>
              {l.titulo}
            </a>
          ))}
        </div>
      </Section>
    </>
  )
}
