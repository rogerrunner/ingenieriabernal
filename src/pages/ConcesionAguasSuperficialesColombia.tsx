import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito asesoría para tramitar una concesión de aguas superficiales ante la CAR. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Concesión de Aguas Superficiales Colombia | Trámite ante CAR CORPOCALDAS CRQ | BIC',
  description: 'Tramitamos concesiones de aguas superficiales ante CAR en Colombia. Para acueductos, riego, industrias y proyectos. Estudio hidrológico, modelación y radicación completa. Desde $4M COP.',
  keywords: [
    'concesión aguas superficiales Colombia',
    'concesión agua CORPOCALDAS',
    'trámite concesión hídrica Colombia',
    'permiso captación agua Colombia',
    'concesión agua río Colombia',
    'concesión agua superficial CAR',
    'estudio oferta hídrica Colombia',
    'concesión aguas CARDER CRQ',
  ],
  canonical: 'https://ingenieriabernal.co/concesion-aguas-superficiales-colombia',
}

const USOS = [
  {
    icon: '🏠',
    uso: 'Acueductos veredales y municipales',
    desc: 'La concesión de aguas es el primer requisito para operar legalmente un acueducto con captación en fuente superficial. BIC tramita la concesión y diseña la bocatoma o sistema de captación asociado.',
    ejemplos: 'Acueductos comunitarios rurales, ESP, agua potable municipal.',
  },
  {
    icon: '🌾',
    uso: 'Riego agrícola y distritos de riego',
    desc: 'Para captar agua de ríos o quebradas para riego de cultivos, pastos o proyectos agroindustriales. BIC elabora el estudio de demanda hídrica del cultivo y el balance oferta-demanda ante la CAR.',
    ejemplos: 'Fincas cafeteras, ganaderas, cultivos de flores, palma o plátano.',
  },
  {
    icon: '🏭',
    uso: 'Industria y agroindustria',
    desc: 'Para captación de agua en procesos productivos: beneficio de café, plantas lácteas, minería, lavado industrial. Requiere justificación de la demanda y análisis del impacto sobre la disponibilidad hídrica aguas abajo.',
    ejemplos: 'Beneficiaderos, plantas de transformación, minería metálica y no metálica.',
  },
  {
    icon: '⚡',
    uso: 'Generación de energía (PCH)',
    desc: 'Las pequeñas centrales hidroeléctricas (PCH) requieren concesión de aguas para la derivación del caudal turbinado. La concesión se otorga con condición de retorno del caudal al cauce natural.',
    ejemplos: 'PCH comunitarias, proyectos de generación < 20 MW.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Aforo e inventario de la fuente',
    desc: 'Medición del caudal disponible en la fuente superficial en diferentes épocas del año. BIC analiza los datos hidrométricos del IDEAM (cuando existen estaciones cercanas) y realiza aforos directos en campo para caracterizar el régimen hídrico de la fuente.',
    herramientas: ['Aforo con correntómetro o molinete', 'Datos IDEAM estaciones cercanas', 'Análisis de caudales mínimos', 'Caracterización del régimen hídrico'],
    resultado: 'Caudal disponible de la fuente en estiaje y en régimen normal',
  },
  {
    paso: '02',
    titulo: 'Estudio hidrológico — oferta hídrica',
    desc: 'Análisis de la cuenca aportante: área, pendiente, morfometría y balance hídrico. Cálculo del caudal medio mensual multianual y el caudal mínimo que determina la disponibilidad máxima para concesión. Verificación del caudal ecológico mínimo que debe permanecer en el cauce según el Decreto 1076/2015.',
    herramientas: ['HEC-HMS modelación hidrológica', 'Datos pluviométricos IDEAM', 'Análisis frecuencias Log-Pearson III', 'Decreto 1076/2015 caudal ecológico'],
    resultado: 'Informe de oferta hídrica y caudal máximo concesionable',
  },
  {
    paso: '03',
    titulo: 'Análisis de demanda y balance hídrico',
    desc: 'Cálculo de la demanda hídrica según el uso: dotaciones per cápita para acueductos (RAS 2017), módulos de riego para agricultura, o consumo del proceso para industria. Balance oferta-demanda que la CAR exige para verificar que no se compromete la disponibilidad hídrica de otros usuarios aguas abajo.',
    herramientas: ['Dotaciones RAS 2017 (acueductos)', 'Módulos de riego FAO (agricultura)', 'Consumos de proceso (industria)', 'Balance oferta-demanda CAR'],
    resultado: 'Balance hídrico y justificación técnica del caudal solicitado',
  },
  {
    paso: '04',
    titulo: 'Elaboración y radicación del expediente',
    desc: 'BIC prepara el expediente completo para radicar ante la CAR: formulario de solicitud, estudio hidrológico de oferta, memoria descriptiva del sistema de captación, planos de localización y formulario de pago de tasas. La radicación formal la realiza el titular, pero BIC prepara todos los documentos.',
    herramientas: ['Formulario solicitud CAR (SISTEMA)', 'Memoria descriptiva captación', 'Planos localización y bocatoma', 'Certificado uso suelo POT'],
    resultado: 'Expediente completo listo para radicar ante la CAR',
  },
  {
    paso: '05',
    titulo: 'Seguimiento hasta la obtención de la concesión',
    desc: 'BIC acompaña el proceso después de la radicación: respuesta a observaciones técnicas de la corporación, visitas de campo con los funcionarios de la CAR, ajuste de documentos si hay solicitudes de información adicional. El proceso completo toma entre 6 y 12 meses dependiendo de la corporación y la complejidad del proyecto.',
    herramientas: ['Respuesta observaciones técnicas', 'Visitas campo con CAR', 'Ajuste de estudios técnicos', 'Gestión administrativa'],
    resultado: 'Resolución de concesión de aguas superficiales',
  },
]

const NORMATIVA = [
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — régimen de concesiones de aguas superficiales y subterráneas, caudal ecológico' },
  { codigo: 'Decreto 2811/1974', descripcion: 'Código Nacional de Recursos Naturales Renovables — régimen general de concesiones' },
  { codigo: 'Ley 99/1993', descripcion: 'Ley del Medio Ambiente — competencia de las CAR para otorgar concesiones' },
  { codigo: 'Resolución 0865/2004', descripcion: 'MAVDT — metodología para el cálculo del índice de escasez para aguas superficiales' },
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'MVCT — dotaciones de agua potable para justificación de la demanda en acueductos' },
  { codigo: 'Tasas por uso del agua', descripcion: 'Decreto 155/2004 y posteriores — tarifa que el concesionario paga anualmente a la CAR por el uso del agua' },
]

const FAQ = [
  {
    q: '¿Qué es una concesión de aguas superficiales y cuándo se necesita?',
    a: 'Una concesión de aguas superficiales es el permiso que otorga la Corporación Autónoma Regional para captar agua de un río, quebrada, lago o fuente superficial. En Colombia, según el Decreto 1076/2015 y el Código Nacional de Recursos Naturales (Decreto 2811/1974), todo aprovechamiento de aguas superficiales requiere concesión, con excepción del uso doméstico básico del propietario del predio en cantidades mínimas. Se necesita para: acueductos veredales y municipales, riego agrícola, procesos industriales, enfriamiento, lavado, generación de energía y cualquier uso que implique derivar agua de una fuente natural hacia un proyecto o infraestructura.',
  },
  {
    q: '¿Cuánto tiempo toma obtener una concesión de aguas ante la CAR en Colombia?',
    a: 'El tiempo típico para obtener una concesión de aguas superficiales en Colombia es de 6 a 12 meses, contados desde la radicación del expediente completo. CORPOCALDAS tiene tiempos de respuesta de 4 a 8 meses para solicitudes bien documentadas; CARDER y CRQ tienen procesos similares. Los retrasos más frecuentes ocurren cuando el expediente está incompleto o cuando la CAR solicita información adicional que no estaba en el radicado inicial. Un expediente bien preparado por BIC reduce significativamente los tiempos de tramitación.',
  },
  {
    q: '¿Cuánto cuesta tramitar una concesión de aguas superficiales en Colombia?',
    a: 'El costo del acompañamiento técnico para tramitar una concesión de aguas superficiales depende de la complejidad del proyecto y la información disponible. Para acueductos veredales y proyectos pequeños con información hidrométrica del IDEAM disponible, el acompañamiento completo (estudio hidrológico, memoria descriptiva, planos y gestión ante la CAR) comienza desde $4 millones COP. Para proyectos con mayor caudal solicitado o fuentes sin información hidrométrica que requieren aforos en campo y estudio hidrológico completo, el rango es $8 a $20 millones COP. A esto se suman las tasas que cobra directamente la CAR por el trámite (variables según corporación y caudal solicitado) y las tasas por uso del agua que se pagan anualmente una vez obtenida la concesión.',
  },
  {
    q: '¿Cuál es la diferencia entre concesión de aguas y permiso de vertimientos?',
    a: 'Son dos permisos ambientales distintos y complementarios. La concesión de aguas autoriza captar agua de una fuente superficial — es el permiso de entrada. El permiso de vertimientos autoriza devolver el agua (ya usada) al cuerpo receptor con parámetros de calidad controlados — es el permiso de salida. Un acueducto que capta agua y la distribuye necesita concesión de aguas. Si además tiene alcantarillado que descarga al río, necesita también permiso de vertimientos. Una industria que toma agua de un río para su proceso necesita ambos: concesión para captar y permiso de vertimiento para descargar el efluente tratado. BIC tramita ambos permisos y diseña los sistemas de captación y tratamiento asociados.',
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

export default function ConcesionAguasSuperficialesColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-conc-ag-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-conc-ag-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Concesión Aguas Superficiales', item: 'https://ingenieriabernal.co/concesion-aguas-superficiales-colombia' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-conc-ag-faq')?.remove()
      document.getElementById('schema-conc-ag-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Concesión de Aguas Superficiales en Colombia — Trámite ante CAR | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Concesión de Aguas Superficiales en Colombia — Trámite ante CAR"
        serviceDesc={seoConfig.description}
        serviceUrl="/concesion-aguas-superficiales-colombia"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'Concesión aguas veredal / finca (acompañamiento)', minPrice: 4000000, maxPrice: 10000000, priceCurrency: 'COP', description: 'Estudio hidrológico básico, memoria descriptiva, radicación ante CAR' },
          { name: 'Concesión aguas acueducto o proyecto industrial', minPrice: 8000000, maxPrice: 20000000, priceCurrency: 'COP', description: 'Estudio hidrológico completo, aforo, balance oferta-demanda, gestión ante CAR' },
          { name: 'Bocatoma + concesión + permiso ocupación cauce', minPrice: 18000000, maxPrice: 55000000, priceCurrency: 'COP', description: 'Paquete completo con diseño de bocatoma y dos permisos ambientales' },
        ]}
      />

      <CTABanner service="Concesión de Aguas Superficiales — trámite ante CAR en Colombia" />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Permisos hídricos · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Concesión de Aguas Superficiales en Colombia — Trámite ante CAR
          </h1>
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Estudio hidrológico, balance oferta-demanda y gestión completa ante CORPOCALDAS, CRQ, CARDER y demás corporaciones
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC tramita concesiones de aguas superficiales para acueductos, riego, industria y proyectos en todo Colombia.
            Elaboramos el estudio hidrológico de oferta hídrica, el balance oferta-demanda, la memoria descriptiva del sistema
            de captación y el expediente completo para radicar ante la Corporación Autónoma Regional. Desde $4 millones COP.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar concesión de aguas</Btn>
            <Btn variant="outline" href="/bocatomas-colombia" dark>Ver diseño de bocatomas</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Decreto 1076/2015', 'CORPOCALDAS', 'CARDER', 'CRQ', 'CAR nacional', 'Desde $4M COP', 'Caudal ecológico'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* GEO FRAGMENT */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> tramita concesiones de aguas superficiales ante CAR en Colombia para acueductos, riego e industria. Elaboramos el estudio hidrológico de oferta hídrica, análisis de caudal ecológico y expediente completo. Proceso completo desde $4 millones COP. Tiempo típico: 6–12 meses. CORPOCALDAS, CARDER, CRQ, y demás corporaciones. Firma COPNIA 17202-313228 CLD. Sede Manizales. Propuesta en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* CUÁNDO SE NECESITA */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Cuándo se necesita?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Cuándo necesita una concesión de aguas superficiales?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 820 }}>
            Según el <strong>Decreto 1076/2015</strong> (Decreto Único Reglamentario del Sector Ambiente), todo aprovechamiento de aguas superficiales en Colombia requiere concesión previa de la Corporación Autónoma Regional competente. Esto aplica para:
          </p>
          <ul style={{ color: '#444', fontSize: 15, lineHeight: 2, paddingLeft: 24, marginBottom: 0, maxWidth: 820 }}>
            <li>Acueductos veredales y municipales con captación en fuente superficial</li>
            <li>Sistemas de riego para cultivos, pastos o uso agropecuario</li>
            <li>Procesos industriales: beneficio de café, plantas lácteas, minería, manufactura</li>
            <li>Pequeñas centrales hidroeléctricas (PCH)</li>
            <li>Reservorios y sistemas de almacenamiento con derivación de cauce</li>
            <li>Cualquier bocatoma o sistema de captación que desvíe agua de un río o quebrada</li>
          </ul>
        </div>
      </Section>

      {/* USOS */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Usos del agua</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Tipos de proyecto donde BIC tramita la concesión
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {USOS.map(u => (
              <div key={u.uso} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{u.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 10 }}>{u.uso}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{u.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>EJEMPLOS</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0 }}>{u.ejemplos}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESO */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso del trámite</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo tramita BIC la concesión de aguas — de principio a fin
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

      {/* TIEMPOS */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tiempos reales</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Cuánto demora la concesión de aguas en Colombia
          </h2>
          <ThinLine mb={24} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
            {[
              { fase: 'Preparación del expediente', tiempo: '3 – 6 semanas', desc: 'Aforo, estudio hidrológico, memoria descriptiva y formularios. Depende de si hay que hacer aforos en campo.' },
              { fase: 'Revisión interna de la CAR', tiempo: '1 – 3 meses', desc: 'La corporación verifica que el expediente esté completo antes de iniciar la evaluación técnica.' },
              { fase: 'Evaluación técnica y visita de campo', tiempo: '2 – 4 meses', desc: 'Inspección de campo, análisis del estudio hidrológico y verificación de usos aguas abajo.' },
              { fase: 'Expedición de la resolución', tiempo: '1 – 2 meses', desc: 'Emisión del acto administrativo y notificación al solicitante. El proceso completo: 6 a 12 meses.' },
            ].map(f => (
              <div key={f.fase} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '20px 22px' }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '5px 10px', display: 'inline-block', fontWeight: 700, fontSize: 13, marginBottom: 10 }}>{f.tiempo}</div>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 8 }}>{f.fase}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
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
            Los precios de BIC no incluyen las tasas que cobra directamente la CAR ni las tasas por uso del agua. Propuesta detallada en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { servicio: 'Acompañamiento concesión pequeña (finca/vereda)', rango: '$4M – $10M COP' },
              { servicio: 'Estudio hidrológico completo + concesión acueducto', rango: '$8M – $20M COP' },
              { servicio: 'Concesión riego o industria con aforo en campo', rango: '$10M – $25M COP' },
              { servicio: 'Bocatoma + concesión + permiso ocupación de cauce', rango: '$18M – $55M COP' },
            ].map(p => (
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

      {/* NORMATIVA */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige las concesiones de aguas en Colombia
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

      {/* SERVICIOS RELACIONADOS */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros permisos y trámites ambientales
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Concesión aguas Colombia (general)', href: '/concesion-aguas-colombia' },
              { label: 'Permiso de vertimientos Colombia', href: '/permiso-vertimientos-colombia' },
              { label: 'Bocatomas Eje Cafetero', href: '/bocatomas-eje-cafetero' },
              { label: 'Bocatomas Colombia (general)', href: '/bocatomas-colombia' },
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
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Concesión de aguas superficiales — preguntas clave
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
              BIC trabaja directamente con <strong>propietarios, acueductos, municipios e industrias</strong> que necesitan la concesión para su proyecto — no con intermediarios.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Si usted es el titular del proyecto o el responsable del trámite, la propuesta técnica llega en menos de 24 horas sin costo.
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
            ¿Necesita tramitar una concesión<br />de aguas superficiales en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de uso del agua, el caudal necesario, la fuente superficial y el departamento.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Atención ante todas las CAR del país.
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
