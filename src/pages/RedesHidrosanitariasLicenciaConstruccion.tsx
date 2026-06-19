import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito las memorias de redes hidrosanitarias NSR-10 para tramitar la licencia de construcción. ¿Pueden cotizar el servicio?')

const seoConfig = {
  title: 'Memorias de Redes Hidrosanitarias NSR-10 para Licencia de Construcción',
  description: 'Memorias de redes hidrosanitarias NSR-10 Capítulos J y K para licencia de construcción en Colombia: cálculo, planos, materiales. Proyectos comerciales, residenciales e industriales. BIC.',
  canonical: 'https://ingenieriabernal.co/redes-hidrosanitarias-licencia-construccion',
  noindex: false,
  keywords: [
    'redes hidrosanitarias licencia construcción NSR-10',
    'memorias hidrosanitarias NSR-10 Capítulo J K',
    'diseño redes hidrosanitarias curaduría Colombia',
    'planos hidrosanitarios licencia construcción',
    'memoria cálculo hidrosanitaria licencia construcción',
    'NSR-10 redes agua potable desagüe Colombia',
    'diseño hidrosanitario edificio comercial Colombia',
    'curación urbanismo hidrosanitarias memorias cálculo',
  ],
}

const FAQ = [
  {
    q: '¿Qué es la memoria de cálculo hidrosanitaria y por qué la exige la curaduría?',
    a: 'La memoria de cálculo hidrosanitaria es el documento técnico que demuestra que las redes de agua potable, aguas residuales y aguas lluvias del edificio cumplen los requisitos del NSR-10 (Capítulos J y K). La curaduría urbana la exige como parte del expediente de licencia de construcción para verificar que el diseño garantiza la correcta dotación de agua a los ocupantes y la evacuación segura de los efluentes. Sin ella, la licencia no puede tramitarse.',
  },
  {
    q: '¿Qué normas aplican para el diseño hidrosanitario en Colombia?',
    a: 'Las normas principales son: NSR-10 Capítulo J (instalaciones hidrosanitarias, gas y protección contra incendios — equipos y tuberías), NSR-10 Capítulo K (instalaciones de acueducto y alcantarillado), RAS 2017 (Resolución 0330) para conexiones a la red pública, y la Norma Técnica Colombiana NTC 1500 (código colombiano de fontanería). El diseñador debe usar el más restrictivo cuando hay conflicto entre normas.',
  },
  {
    q: '¿Qué documentos entrega BIC para la licencia de construcción?',
    a: 'BIC entrega: (1) memoria de cálculo de red de agua fría y caliente (cálculo de presiones, velocidades y diámetros), (2) memoria de cálculo de red de desagüe y ventilación (capacidades hidráulicas y pendientes), (3) memoria de cálculo de red de aguas lluvias (intensidades de diseño, canaletas y bajantes), (4) planos constructivos de todas las redes en planta y corte, (5) especificaciones técnicas de materiales. Documentos firmados por ingeniero con matrícula COPNIA vigente.',
  },
  {
    q: '¿Las memorias hidrosanitarias aplican para edificios comerciales?',
    a: 'Sí. El NSR-10 aplica para todo tipo de edificación: residencial, comercial, industrial, hotelera e institucional. Para edificios comerciales y centros comerciales, la memoria de cálculo hidrosanitaria incluye además el diseño de la red contra incendios (gabinetes, rociadores) conforme al Capítulo J del NSR-10, lo cual también es exigido por la curaduría en edificios de más de 3 pisos.',
  },
  {
    q: '¿BIC diseña también los sistemas contra incendios?',
    a: 'Sí. BIC diseña sistemas contra incendios conforme al NSR-10 Capítulo J y la NFPA 13, 14 y 20. Esto incluye red de gabinetes y mangueras, sistema de rociadores automáticos (sprinklers) y cuarto de bombas. El diseño CI puede contratarse junto con las redes hidrosanitarias para obtener el paquete completo que exige la curaduría.',
  },
  {
    q: '¿Cuánto cuesta el diseño hidrosanitario para licencia de construcción?',
    a: 'El costo depende del área construida, el número de pisos y el uso del edificio. Para una vivienda unifamiliar o bifamiliar: $3 a $6 millones COP. Para un edificio de apartamentos de 5 a 10 pisos: $8 a $18 millones COP. Para un edificio comercial o industrial: $10 a $30 millones COP dependiendo de la complejidad. BIC envía propuesta detallada en menos de 24 horas.',
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
  { ico: '💧', titulo: 'Red de agua fría y caliente', desc: 'Cálculo de caudales de diseño por aparatos (NTC 1500), dimensionamiento de tuberías (diámetros y presiones), verificación de presión mínima en el aparato más desfavorable. Planos de distribución en planta por piso.' },
  { ico: '🌊', titulo: 'Red de desagüe y ventilación', desc: 'Diseño del sistema de evacuación de aguas residuales: ramales de desagüe, bajantes, colectores, ventilación primaria y secundaria. Cálculo de unidades de descarga (UD) según NTC 1500 y NSR-10 Capítulo K.' },
  { ico: '🌧️', titulo: 'Red de aguas lluvias', desc: 'Cálculo de intensidades de diseño (Tr = 5 a 25 años), áreas de aferencia, canaletas, bajantes pluviales y conexión al sistema público de alcantarillado. Verificación de caudal y capacidad de las bajantes.' },
  { ico: '🔥', titulo: 'Sistema contra incendios (NSR-10 Cap. J)', desc: 'Red de gabinetes y mangueras, sistema de rociadores automáticos (sprinklers) y cuarto de bombas. Conforme a NSR-10 Capítulo J y estándares NFPA. Requerido por la curaduría en edificaciones de más de 3 pisos.' },
  { ico: '📐', titulo: 'Planos constructivos', desc: 'Planos de todas las redes en planta, cortes y detalles constructivos. Planos de cuarto de máquinas, tanque de almacenamiento y equipo de bombeo. Formato digital y físico para el expediente de la curaduría.' },
  { ico: '📋', titulo: 'Especificaciones técnicas', desc: 'Especificaciones de materiales: tipos de tuberías (CPVC, PVC, hierro galvanizado, cobre), accesorios, válvulas, aparatos sanitarios y equipos de bombeo. Normas de instalación y pruebas de presión.' },
]

const TIPOS_PROYECTOS = [
  { tipo: 'Viviendas unifamiliares y bifamiliares', desc: 'Diseño hidrosanitario completo (agua fría/caliente, desagüe, lluvias) para casas y proyectos de dos unidades. Paquete básico para curaduría.' },
  { tipo: 'Edificios de apartamentos (5 a 15 pisos)', desc: 'Redes principales y secundarias, ventilación, tanques de almacenamiento y sistema de presurización. Incluye CI si hay más de 3 pisos.' },
  { tipo: 'Edificios comerciales y oficinas', desc: 'Diseño para locales comerciales, centros comerciales, oficinas y consultorios médicos. Incluye redes CI obligatorias.' },
  { tipo: 'Hoteles y edificios de hospedaje', desc: 'Redes de alta carga sanitaria, agua caliente centralizada, reuso de aguas lluvias si aplica, sistemas CI NFPA.' },
  { tipo: 'Bodegas e industria ligera', desc: 'Redes industriales de agua proceso, desagüe industrial con trampa de grasas, red CI para bodegas y naves de producción.' },
  { tipo: 'Instituciones y equipamientos', desc: 'Colegios, hospitales, clínicas y edificios institucionales. Alta dotación per cápita, diseño de cuartos de aseo y sistemas especiales.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Revisión de planos arquitectónicos y premisas de diseño', desc: 'BIC revisa los planos de arquitectura aprobados, identifica los aparatos sanitarios por área y piso, verifica la cota del punto de conexión con la red pública y define los parámetros de diseño (presión disponible, dotaciones).' },
  { paso: '02', titulo: 'Cálculo de la red de agua potable', desc: 'Cálculo de caudales de diseño por el método de aparatos (NTC 1500), dimensionamiento de tuberías, verificación de presiones y selección del sistema de presurización (tanque elevado o equipo presurizador).' },
  { paso: '03', titulo: 'Cálculo de la red de desagüe y ventilación', desc: 'Cálculo de unidades de descarga por aparato, dimensionamiento de ramales y bajantes, diseño del sistema de ventilación para evitar sifonamiento y malos olores.' },
  { paso: '04', titulo: 'Cálculo de la red de aguas lluvias', desc: 'Determinación de la intensidad de diseño, cálculo de caudales por área de aferencia, dimensionamiento de canaletas y bajantes pluviales.' },
  { paso: '05', titulo: 'Elaboración de planos y especificaciones', desc: 'Generación de planos constructivos en AutoCAD para todas las redes. Especificaciones técnicas de materiales. Memoria de cálculo completa firmada por ingeniero COPNIA.' },
]

const PRECIOS = [
  { tipo: 'Vivienda unifamiliar / bifamiliar', rango: '$3M – $6M COP' },
  { tipo: 'Edificio 5–10 pisos (sin CI)', rango: '$8M – $15M COP' },
  { tipo: 'Edificio 5–10 pisos (con CI)', rango: '$14M – $25M COP' },
  { tipo: 'Edificio comercial o industrial', rango: '$10M – $30M COP' },
  { tipo: 'Hotel o edificio institucional', rango: '$12M – $28M COP' },
]

export default function RedesHidrosanitariasLicenciaConstruccion() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-hidro-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-hidro-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Redes Hidrosanitarias Licencia Construcción', item: 'https://ingenieriabernal.co/redes-hidrosanitarias-licencia-construccion' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-hidro-faq')?.remove()
      document.getElementById('schema-hidro-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Memorias de Redes Hidrosanitarias NSR-10 para Licencia de Construcción | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Memorias de Redes Hidrosanitarias NSR-10 para Licencia de Construcción — Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/redes-hidrosanitarias-licencia-construccion"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'Vivienda unifamiliar / bifamiliar', minPrice: 3000000, maxPrice: 6000000, priceCurrency: 'COP', description: 'Memoria hidrosanitaria completa para curaduría' },
          { name: 'Edificio 5-10 pisos sin CI', minPrice: 8000000, maxPrice: 15000000, priceCurrency: 'COP', description: 'Memorias NSR-10 + planos para licencia de construcción' },
          { name: 'Edificio comercial o industrial', minPrice: 10000000, maxPrice: 30000000, priceCurrency: 'COP', description: 'Paquete completo con sistemas contra incendios' },
        ]}
      />

      <CTABanner service="Memorias hidrosanitarias NSR-10 para licencia de construcción — todos los tipos de edificación" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería hidrosanitaria · NSR-10 · Licencias</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(24px, 4vw, 44px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Memorias de Redes Hidrosanitarias NSR-10<br />para Licencia de Construcción
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            El paquete técnico completo que la curaduría necesita para aprobar su edificio
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            La curaduría urbana exige memorias de cálculo hidrosanitario firmadas por ingeniero COPNIA para expedir la licencia
            de construcción. Sin ellas, el trámite queda bloqueado. BIC elabora el paquete completo: agua fría y caliente,
            desagüe y ventilación, aguas lluvias y sistema contra incendios conforme al NSR-10.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar memorias hidrosanitarias</Btn>
            <Btn variant="outline" href="/servicios/redes-hidrosanitarias" dark>Ver servicio completo</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['NSR-10 Cap. J y K','NTC 1500','COPNIA vigente','Residencial · Comercial · Industrial','Sistemas CI NFPA','Eje Cafetero · Colombia'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ EXIGE LA CURADURÍA ── */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Qué exige la curaduría en redes hidrosanitarias?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 820 }}>
            La Ley 400/1997 y el NSR-10 establecen que toda edificación en Colombia que requiera licencia de construcción debe
            presentar memorias de cálculo de instalaciones hidrosanitarias firmadas por un <strong>profesional con matrícula COPNIA vigente</strong>.
            Los <strong>Capítulos J y K del NSR-10</strong> regulan respectivamente las instalaciones hidrosanitarias, gas y CI, y los
            sistemas de agua potable y saneamiento de las edificaciones.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 820 }}>
            La curaduría verifica que los diámetros sean los correctos, que las presiones sean suficientes, que el sistema de
            desagüe y ventilación sea técnicamente adecuado y que los sistemas CI (si aplican) cumplan los estándares NFPA.
            Un expediente con memorias incompletas o sin firma COPNIA es devuelto para corrección, retrasando el inicio de obra.
          </p>
        </div>
      </Section>

      {/* ── GEO FRAGMENT ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }} id="geo-fragment">
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña redes hidrosanitarias para licencia de construcción
            conforme al NSR-10 Capítulos J y K: agua fría y caliente, desagüe y ventilación, aguas lluvias y sistemas contra incendios.
            Proyectos residenciales, comerciales e industriales. Cobertura: Eje Cafetero (Manizales, Pereira, Armenia), todo Colombia.
            COPNIA 17202-313228 CLD. Propuesta en 24 h: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── COMPONENTES ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Entregables del diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué incluye el paquete hidrosanitario de BIC?
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

      {/* ── TIPOS DE PROYECTO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de edificación</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Proyectos en los que BIC diseña redes hidrosanitarias
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {TIPOS_PROYECTOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: '20px 22px', borderLeft: '4px solid #17A2B8',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 8 }}>{t.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo desarrolla BIC el diseño hidrosanitario
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

      {/* ── PRECIOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión referencial 2026</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Costos orientativos por tipo de proyecto
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Precios incluyen memorias de cálculo, planos constructivos y especificaciones técnicas firmadas COPNIA.
            Propuesta detallada en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PRECIOS.map(p => (
              <div key={p.tipo} style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <p style={{ color: '#333', fontSize: 14, fontWeight: 500, margin: 0 }}>{p.tipo}</p>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 14px', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>{p.rango}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre las memorias hidrosanitarias para licencias
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

      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios de BIC en ingeniería de edificaciones
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Servicios contra incendios NSR-10', href: '/servicios/contra-incendios-nsr10' },
              { label: 'Diseño acueducto para ESP', href: '/diseno-acueducto-entrega-esp' },
              { label: 'Permiso de vertimiento Colombia', href: '/tramitar-permiso-vertimiento-colombia' },
              { label: 'Diseño PTAR permiso vertimiento', href: '/diseno-ptar-tramite-permiso-vertimiento' },
              { label: 'Licencia de urbanismo', href: '/licencia-de-urbanismo' },
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔧</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita las memorias hidrosanitarias<br />para la licencia de construcción?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Cuéntenos el tipo de edificación, el número de pisos y si necesita sistemas contra incendios.
            BIC le envía propuesta en menos de 24 horas.
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
