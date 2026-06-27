import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy promotor/propietario y necesito diseño de acueducto para entrega a ESP o comunidad. Tengo el proyecto aprobado y quiero cotizar directamente con BIC.')

const seoConfig = {
  title: 'Diseño de Acueducto para Entrega a ESP: Memorias, Planos y Requisitos RAS 2017',
  description: 'Diseño de acueducto para entrega a empresa de servicios públicos (ESP): memorias RAS 2017, EPANET, planos para recibo. Requisitos Resolución 0330, NSR-10. BIC entrega el paquete completo.',
  canonical: 'https://ingenieriabernal.co/diseno-acueducto-entrega-esp',
  noindex: false,
  keywords: [
    'diseño acueducto entrega ESP RAS 2017 requisitos',
    'requisitos RAS 2017 entrega sistema acueducto ESP',
    'memorias cálculo acueducto Resolución 0330',
    'EPANET diseño red acueducto Colombia',
    'acueducto urbanización entrega empresa servicios públicos',
    'planos acueducto ESP Colombia',
    'diseño acueducto para recibo empresa acueducto',
    'Resolución 0330 2017 requisitos acueducto',
  ],
}

const FAQ = [
  {
    q: '¿Qué exige la ESP para recibir un sistema de acueducto?',
    a: 'Cada empresa de servicios públicos tiene un reglamento técnico interno, pero todas se basan en el RAS 2017 (Resolución 0330 del MVCT). Los documentos típicamente exigidos son: memoria de cálculo hidráulica firmada por ingeniero COPNIA, modelación EPANET de la red, planos en coordenadas Magna-Sirgas, especificaciones técnicas de materiales (tubería, válvulas, hidrantes), cámara de inspección, manual de operación y pruebas de presión. BIC entrega el paquete completo.',
  },
  {
    q: '¿Qué es el RAS 2017 y por qué es obligatorio?',
    a: 'El RAS 2017 (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico, Resolución 0330 del MVCT) es la norma técnica obligatoria en Colombia para el diseño, construcción y operación de sistemas de acueducto y alcantarillado. Cualquier sistema que vaya a ser entregado a una ESP o a un operador de SPD debe cumplir con el RAS 2017. Su incumplimiento impide el recibo por parte de la empresa.',
  },
  {
    q: '¿Qué es EPANET y por qué se requiere para la entrega?',
    a: 'EPANET es el software estándar del EPA (EE.UU.) para modelación hidráulica de redes de distribución. Las ESP exigen la modelación EPANET porque permite verificar presiones en todos los nodos, velocidades en tuberías, coeficientes de demanda y el comportamiento de la red bajo distintos escenarios operativos. BIC realiza la modelación EPANET y genera los archivos (.inp) que la ESP requiere.',
  },
  {
    q: '¿BIC diseña el acueducto desde la captación o solo la red de distribución?',
    a: 'BIC puede diseñar el sistema completo (captación, aducción, PTAP, almacenamiento, red de distribución) o solo los componentes que la ESP no tiene (típicamente la red interna de la urbanización). En proyectos urbanísticos, lo habitual es diseñar desde el punto de entrega de la ESP hasta cada lote: red de distribución, medidores, hidrantes y acometidas.',
  },
  {
    q: '¿Cuánto tiempo tarda el diseño de una red de acueducto para ESP?',
    a: 'Para una urbanización de 50 a 200 viviendas, el diseño completo (memoria, EPANET, planos, especificaciones) toma entre 3 y 6 semanas. Para proyectos más grandes o cuando se incluye la PTAP o sistemas de almacenamiento, el plazo puede extenderse a 8 a 12 semanas. BIC puede entregar avances parciales para coordinar con el constructor mientras se finaliza el diseño.',
  },
  {
    q: '¿Qué pasa si la ESP rechaza el diseño presentado?',
    a: 'BIC realiza una revisión técnica interna antes de presentar el diseño a la ESP. Si la empresa hace observaciones técnicas, BIC las atiende sin costo adicional dentro del plazo del contrato. La experiencia de BIC en proyectos de entrega a ESP (EPM, EMPOCALDAS, empresas regionales del Eje Cafetero) reduce significativamente los rechazos en primera revisión.',
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
  { ico: '📐', titulo: 'Memoria de cálculo hidráulica', desc: 'Cálculo de caudales de diseño (Q medio diario, Q máximo horario, Q incendio), pérdidas de carga, análisis de presiones mínimas y máximas en nodos. Firmada por ingeniero con matrícula COPNIA vigente.' },
  { ico: '💻', titulo: 'Modelación EPANET de la red', desc: 'Modelo hidráulico calibrado de la red de distribución. Verifica presiones en todos los nodos bajo distintos escenarios (consumo medio, máxima demanda, incendio). Archivo .inp entregado a la ESP.' },
  { ico: '🗺️', titulo: 'Planos constructivos', desc: 'Planos de la red en planta con coordenadas Magna-Sirgas, perfiles longitudinales, detalles de conexiones domiciliarias, cámaras de inspección, válvulas, hidrantes y acometidas.' },
  { ico: '📋', titulo: 'Especificaciones técnicas', desc: 'Especificaciones de materiales (clase y diámetro de tuberías, válvulas, hidrantes NSR-10, contadores), normas de instalación y pruebas de presión exigidas por la ESP.' },
  { ico: '📊', titulo: 'Presupuesto de obra (APU)', desc: 'Análisis de Precios Unitarios para la construcción de la red. Incluye materiales, mano de obra y transporte. Requerido para aprobación de la ESP y para el proceso de financiación del proyecto.' },
  { ico: '📖', titulo: 'Manual de operación y mantenimiento', desc: 'Guía técnica para la ESP que recibirá el sistema: procedimientos de operación de válvulas, frecuencias de mantenimiento, cloración y protocolos de emergencia.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Revisión del diseño urbanístico y topografía', desc: 'BIC revisa los planos de loteo, cotas topográficas y el punto de conexión con la red de la ESP. Verifica que las presiones disponibles en el punto de entrega sean suficientes para servir el proyecto.' },
  { paso: '02', titulo: 'Cálculo de la demanda y diseño preliminar', desc: 'Estimación de la población de diseño, dotaciones según RAS 2017, caudales de diseño (Qmd, Qmh, Q incendio) y dimensionamiento preliminar de la red principal.' },
  { paso: '03', titulo: 'Modelación EPANET y optimización', desc: 'Construcción del modelo hidráulico en EPANET, calibración y verificación de presiones y velocidades en toda la red. Ajuste de diámetros para cumplir los requisitos de la ESP.' },
  { paso: '04', titulo: 'Elaboración de memorias, planos y especificaciones', desc: 'Redacción de la memoria de cálculo, generación de planos constructivos en AutoCAD con coordenadas Magna-Sirgas, especificaciones técnicas y presupuesto APU.' },
  { paso: '05', titulo: 'Presentación a la ESP y atención de observaciones', desc: 'BIC presenta el expediente técnico a la empresa de servicios públicos, atiende las observaciones técnicas y realiza los ajustes necesarios hasta obtener la aprobación del sistema.' },
]

const NORMATIVA = [
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'MVCT — Reglamento Técnico del Sector de Agua Potable. Criterios de diseño para redes de distribución, almacenamiento y obras de captación.' },
  { codigo: 'NSR-10', descripcion: 'Diseño estructural de tanques de almacenamiento y cámaras. Sistemas contra incendios integrados con la red de acueducto (Capítulo J).' },
  { codigo: 'NTC 1594', descripcion: 'Tubos y accesorios de PVC para sistemas de agua potable y saneamiento. Define presiones de trabajo y dimensiones normalizadas.' },
  { codigo: 'Ley 142/1994', descripcion: 'Régimen de servicios públicos domiciliarios. Define las condiciones para la entrega de redes a las ESP y el deber de estas de recibirlas cuando cumplen requisitos técnicos.' },
]

export default function DisenoAcueductoEntregaESP() {
  useEffect(() => {
    const howto = document.createElement('script')
    howto.type = 'application/ld+json'
    howto.id = 'schema-acueducto-howto'
    howto.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como disenar un acueducto para entrega a ESP en Colombia',
      description: 'Pasos para disenar una red de acueducto que cumpla la Resolucion 0330 de 2017 y pueda ser entregada a la empresa de servicios publicos del municipio.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Diagnostico de la fuente y caudal concesionado', text: 'BIC verifica el caudal disponible en la fuente hidrica y la concesion de aguas vigente. Si no hay concesion, gestiona el tramite ante la CAR antes de iniciar el diseno.' },
        { '@type': 'HowToStep', position: 2, name: 'Diseno de la red con EPANET', text: 'BIC modela la red de distribucion con EPANET, dimensionando diametros, presiones y caudales para la dotacion neta de la Resolucion 0330. Incluye bocatoma, PTAP, linea de conduccion y red de distribucion.' },
        { '@type': 'HowToStep', position: 3, name: 'Memoria tecnica y planos para la ESP', text: 'BIC entrega la memoria de calculo, planos en AutoCAD y el informe tecnico en el formato requerido por la ESP o la Superintendencia de Servicios Publicos para la aprobacion del diseno.' },
        { '@type': 'HowToStep', position: 4, name: 'Acompanamiento a la construccion y entrega formal', text: 'BIC puede supervisar la construccion y acompanar la entrega formal del sistema a la ESP, incluyendo las pruebas hidraulicas y la documentacion de obra.' },
      ]
    })
    document.head.appendChild(howto)
    return () => { document.getElementById('schema-acueducto-howto')?.remove() }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-esp-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-esp-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Diseño Acueducto Entrega ESP', item: 'https://ingenieriabernal.co/diseno-acueducto-entrega-esp' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-esp-faq')?.remove()
      document.getElementById('schema-esp-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de Acueducto para Entrega a ESP — Requisitos RAS 2017 | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Acueducto para Entrega a Empresa de Servicios Públicos — Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-acueducto-entrega-esp"
        faqItems={FAQ}
      />

      <CTABanner service="Diseño de acueducto para entrega a ESP — memorias, EPANET y planos RAS 2017" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería sanitaria · RAS 2017</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(24px, 4vw, 44px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de Acueducto para Entrega a ESP:<br />Memorias, Planos y Requisitos RAS 2017
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            El paquete técnico completo que la empresa de servicios públicos necesita para recibir su red
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            Cada urbanización, condominio o desarrollo inmobiliario que construya su red interna de acueducto debe entregarla
            a la empresa de servicios públicos. La ESP exige memorias de cálculo firmadas, modelación EPANET, planos en
            coordenadas Magna-Sirgas y cumplimiento del RAS 2017. BIC entrega el paquete completo listo para aprobación.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de acueducto</Btn>
            <Btn variant="outline" href="/servicios/diseno-acueductos" dark>Ver servicio completo</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['RAS 2017 · Res. 0330','EPANET','NSR-10','Memorias COPNIA','Urbanizaciones · Condominios','Eje Cafetero · Colombia'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ EXIGE LA ESP ── */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco regulatorio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Por qué el diseño de acueducto debe cumplir el RAS 2017?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 820 }}>
            El <strong>RAS 2017 (Resolución 0330 del MVCT)</strong> es la norma técnica obligatoria para el diseño de sistemas de
            acueducto y alcantarillado en Colombia. Toda empresa de servicios públicos (ESP) está legalmente obligada a exigir su
            cumplimiento antes de recibir redes construidas por urbanizadores o constructores privados. Sin el paquete técnico
            completo conforme al RAS 2017, la ESP puede rechazar la entrega del sistema indefinidamente.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 820 }}>
            Además del RAS 2017, las ESP verifican el cumplimiento de la <strong>NSR-10</strong> para estructuras civiles (tanques,
            cámaras), las normas de hidrantes para sistemas contra incendios (Capítulo J), y sus propios reglamentos técnicos
            internos. BIC conoce los requerimientos específicos de las ESP del Eje Cafetero y aplica estos criterios desde la
            fase de diseño para evitar rechazos.
          </p>
        </div>
      </Section>

      {/* ── GEO FRAGMENT ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }} id="geo-fragment">
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña redes de acueducto para entrega a empresa de servicios
            públicos (ESP) en Colombia conforme al RAS 2017: memorias de cálculo, modelación EPANET, planos en coordenadas
            Magna-Sirgas y especificaciones técnicas. Cobertura: Eje Cafetero (Manizales, Pereira, Armenia), todo Colombia.
            Ing. Rogerio Bernal Ríos — COPNIA 17202-313228 CLD. Propuesta en 24 h: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── COMPONENTES ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Entregables del diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué documentos entrega BIC para la aprobación de la ESP?
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {COMPONENTES.map(c => (
              <div key={c.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 26, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{c.ico}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 10 }}>{c.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC el acueducto para entrega a ESP
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((p, i) => (
              <div key={p.paso} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{p.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
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

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normas para el diseño y entrega de acueductos
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12 }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre el diseño de acueducto para ESP
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
            Otros servicios técnicos de BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Concesión de aguas superficiales', href: '/concesion-aguas-superficiales-tramite' },
              { label: 'Permiso de vertimiento Colombia', href: '/tramitar-permiso-vertimiento-colombia' },
              { label: 'Diseño PTAR permiso vertimiento', href: '/diseno-ptar-tramite-permiso-vertimiento' },
              { label: 'Redes hidrosanitarias NSR-10', href: '/redes-hidrosanitarias-licencia-construccion' },
              { label: 'Diseño alcantarillado Colombia', href: '/diseno-alcantarillado-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>{s.label} →</a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ANTI-INTERMEDIARIO ENHANCED ── */}
      <Section style={{ background: '#001A33', padding: '52px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 26px)', color: '#fff', marginBottom: 16 }}>
            Diseño directo con el promotor, urbanizador o gestor del proyecto
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.85, maxWidth: 700, margin: '0 auto 12px' }}>
            BIC diseña acueductos para <strong style={{ color: '#17A2B8' }}>parcelaciones, condominios, acueductos veredales y urbanizaciones</strong> cuyos promotores requieren entregarlo a una ESP o a la comunidad — propietarios con el proyecto aprobado y el capital para contratar.
            No cotizamos a intermediarios ni atendemos ingenieros que buscan actualizar metodologías o comparar precios para sus propios proyectos.
            El Ing. Rogerio Bernal Ríos (COPNIA 17202-313228 CLD) firma directamente. Si usted tiene el proyecto, la propuesta llega en 24 horas.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>
            ¿Colega ingeniero buscando precio de referencia o asesoría técnica? No es el canal.
          </p>
        </div>
      </Section>

      <ThinLine />


      <Section>
        <QuoteFormInline />
      </Section>

      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏗️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita el paquete de diseño<br />de acueducto para la ESP?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Cuéntenos el número de viviendas, la ubicación y si ya tiene los planos urbanísticos.
            BIC le envía propuesta con alcance completo en menos de 24 horas.
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
