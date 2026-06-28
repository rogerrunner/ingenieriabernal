import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy promotor/constructor y necesito diseño de redes hidrosanitarias y contra incendios NSR-10 para mi proyecto. Quiero cotizar directamente con el ingeniero que firma.')

const seoConfig = {
  title: 'Diseño Hidrosanitario Edificio Colombia — RAS 2000 Título D · NSR-10 J/K | BIC',
  description: 'Diseño hidrosanitario completo (agua potable, aguas residuales, aguas lluvias) y sistema contra incendio NSR-10 Título K para edificios en Colombia. Memorias de cálculo y planos firmados COPNIA para licencia de construcción.',
  canonical: 'https://ingenieriabernal.co/diseno-hidrosanitario-sistema-contra-incendio-edificio-colombia',
  noindex: false,
  keywords: [
    'diseño hidrosanitario edificio Colombia',
    'sistema contra incendio edificio NSR-10',
    'NSR-10 Título J K edificio Colombia',
    'diseño redes hidrosanitarias edificio multifamiliar',
    'sistema contra incendio NFPA 13 Colombia',
    'planos hidrosanitarios licencia construcción edificio',
    'diseño hidráulico edificio Manizales Caldas',
    'contra incendio NSR-10 Título K edificio Colombia',
    'memoria hidráulica edificio Colombia firma COPNIA',
    'diseño hidrosanitario y CI edificio BIC',
  ],
}

const FAQ = [
  {
    q: '¿Qué incluye el diseño hidrosanitario y CI de un edificio para la licencia de construcción?',
    a: 'El diseño incluye: (1) red de agua potable (AP) — cálculo de caudales de diseño, diámetros, presiones y velocidades, tanque de almacenamiento y bomba de presurización; (2) red de aguas residuales domésticas (AR) — ramales, colectores, ventilaciones y conexión al colector público; (3) red de aguas lluvias (AL) — canales, bajantes y sumideros; y (4) sistema contra incendio (CI) según NSR-10 Título K y NFPA 13 — gabinetes de manguera, rociadores automáticos, tanque de reserva CI, bomba principal y bomba jockey. BIC entrega planos firmados COPNIA y memoria de cálculo completa.',
  },
  {
    q: '¿Cuándo es obligatorio el sistema contra incendio (CI) en un edificio en Colombia?',
    a: 'Según NSR-10 Título K, el sistema CI es obligatorio cuando el edificio supera 1.000 m² de área construida total, tiene más de 100 ocupantes simultáneos, o alberga usos de alto riesgo (bodegas, industrias, cocinas industriales, hospitales, auditorios). Para edificios de vivienda multifamiliar de más de 5 pisos, la curaduría generalmente exige al menos gabinetes de manguera. BIC evalúa el sistema requerido para cada proyecto.',
  },
  {
    q: '¿Qué normativa aplica al diseño hidrosanitario de un edificio en Colombia?',
    a: 'El diseño de instalaciones hidráulicas y sanitarias se rige por NSR-10 Título J (instalaciones hidráulicas, sanitarias y de gas en edificaciones), RAS 2017 — Resolución 0330 MVCT (criterios hidráulicos), normas ICONTEC (NTC 1500, NTC 4113), y el reglamento de la empresa de servicios públicos local (EAAB en Bogotá, EPM en Medellín, Aguas de Manizales, etc.). El sistema CI aplica NSR-10 Título K y estándares NFPA 13, NFPA 14 y NFPA 20.',
  },
  {
    q: '¿Cuánto tiempo tarda BIC en entregar el diseño hidrosanitario y CI de un edificio?',
    a: 'Para un edificio residencial multifamiliar de 5 a 15 pisos: 15 a 25 días hábiles desde la recepción de los planos arquitectónicos definitivos en AutoCAD. Proyectos más complejos (uso mixto, industrial o con sistemas CI de rociadores automáticos) pueden requerir 25 a 40 días. BIC agiliza el proceso cuando hay restricciones de tiempo en la licencia.',
  },
  {
    q: '¿Qué información necesita BIC para iniciar el diseño hidrosanitario de mi edificio?',
    a: 'BIC necesita: (1) planos arquitectónicos en AutoCAD con plantas de todos los niveles, cortes y fachadas, indicando cotas de nivel y ubicación de baños, cocinas y área de máquinas; (2) número de unidades y uso por nivel; (3) información del sistema de acueducto local (presión de red disponible, diámetro de la acometida); (4) para CI: concepto de bomberos o requisito específico de la curaduría. Con esta información BIC prepara la propuesta técnica y económica en 24 horas.',
  },
  {
    q: '¿BIC firma los planos con matrícula COPNIA vigente para presentar ante la curaduría?',
    a: 'Sí. Rogerio Bernal Ríos, director de BIC, cuenta con matrícula profesional COPNIA 17202-313228 CLD vigente. Todos los planos hidrosanitarios y de CI son firmados y sellados por el ingeniero responsable del diseño, cumpliendo el requisito de la curaduría urbana para el trámite de la licencia de construcción.',
  },
  {
    q: '¿BIC puede coordinar el diseño hidrosanitario con el diseño estructural y arquitectónico?',
    a: 'Sí. BIC coordina con el calculista estructural para la ubicación de ductos, pasos de losa y reservas de espacio. Entregamos el diseño en DWG compatible con AutoCAD, permitiendo la superposición de planos. Si el proyecto requiere coordinación BIM (Revit MEP), BIC puede adaptarse según los requerimientos del proyecto.',
  },
]

const REDES = [
  { titulo: 'Red de Agua Potable (AP)', desc: 'Cálculo de caudales de diseño conforme a la dotación NSR-10/RAS 2017, dimensionamiento de tuberías, presiones, velocidades, tanque de almacenamiento, bomba de presurización y acometida al sistema público.' },
  { titulo: 'Red de Aguas Residuales (AR)', desc: 'Ramales de desagüe, colectores, bajantes, ventilaciones primarias y secundarias, trampas de grasa (donde aplique) y conexión al colector público o a PTAR si el predio no tiene alcantarillado.' },
  { titulo: 'Red de Aguas Lluvias (AL)', desc: 'Canaletas, bajantes, sumideros y conexión al sistema de drenaje pluvial, cumpliendo las condiciones de la empresa de acueducto y el plan de ordenamiento territorial del municipio.' },
  { titulo: 'Sistema Contra Incendio (CI) — NSR-10 Título K', desc: 'Gabinetes de manguera, rociadores automáticos (cuando aplica), tanque de reserva CI, bomba principal, bomba jockey, red de tuberías y accesorios. Diseño conforme a NFPA 13, NFPA 14 y NFPA 20.' },
]

export default function DisenoHidrosanitarioCIEdificio() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const howto = document.createElement('script')
    howto.type = 'application/ld+json'
    howto.id = 'schema-hidrosanitario-howto'
    howto.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como disenar las redes hidrosanitarias y sistema contra incendio de un edificio en Colombia',
      description: 'Pasos para el diseno de instalaciones hidraulicas, sanitarias y contra incendio conforme a la NSR-10 Titulos J y K para edificios residenciales, comerciales e industriales en Colombia.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Revision de la arquitectura y la norma aplicable', text: 'BIC revisa los planos arquitectonicos y determina la norma aplicable: NSR-10 Titulo J (hidrosanitario), Titulo K (contra incendio), NTC 1500 (codigo de fontaneria), NTC 2301 (hidrantes) y NFPA 13 (rociadores). Define el uso del edificio y el riesgo de incendio.' },
        { '@type': 'HowToStep', position: 2, name: 'Diseno de la red hidraulica y sanitaria', text: 'BIC dimensiona la red de agua fria y caliente, los colectores sanitarios y pluviales, las trampas de grasa y el punto de conexion a la red publica. Calculo de presiones, velocidades y caudales por aparato segun dotacion NSR-10 J.' },
        { '@type': 'HowToStep', position: 3, name: 'Diseno del sistema contra incendio', text: 'BIC diseña la red de gabinetes BIE, los rociadores automaticos NFPA 13 (si aplica), la reserva de agua contra incendio y la bomba CI. Memoria de calculo con caudal y presion en el punto mas desfavorable.' },
        { '@type': 'HowToStep', position: 4, name: 'Planos y memorias para licencia de construccion', text: 'BIC entrega planos de cada piso, isometricos de la red y memorias de calculo firmadas COPNIA, listos para radicacion ante la Curaduria urbana. Acompaña las observaciones tecnicas sin costo adicional.' },
      ]
    })
    document.head.appendChild(howto)
    return () => { document.getElementById('schema-hidrosanitario-howto')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño Hidrosanitario y Sistema Contra Incendio para Edificios en Colombia | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño Hidrosanitario y Sistema Contra Incendio para Edificios — NSR-10 J/K"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-hidrosanitario-sistema-contra-incendio-edificio-colombia"
        faqItems={FAQ}
        priceSpecification={[{ name: 'Diseño hidrosanitario y CI edificio', minPrice: 4500000, maxPrice: 25000000, priceCurrency: 'COP' }]}
      />

      <CTABanner service="Diseño hidrosanitario y sistema contra incendio para edificio — NSR-10 Títulos J y K, firma COPNIA, planos AutoCAD" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>NSR-10 Título J · Título K · NFPA 13</SectionLabel>
          <h1 id="hero-title" style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(24px, 4vw, 44px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño Hidrosanitario y Sistema Contra Incendio<br />para Edificios en Colombia
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: 17, lineHeight: 1.7, maxWidth: 680, marginBottom: 32 }}>
            BIC diseña las instalaciones hidrosanitarias (AP, AR, AL) y el sistema contra incendio (CI) de su edificio, cumpliendo NSR-10 Títulos J y K. Memorias de cálculo y planos firmados COPNIA para la curaduría.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} variant="primary">
              Cotizar diseño hidrosanitario + CI
            </Btn>
            <Btn href="/contacto" variant="outline" dark>Ver portafolio de proyectos</Btn>
          </div>
        </div>
      </section>

      {/* ── REDES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '64px 24px' }}>
          <SectionLabel>¿Qué diseña BIC para su edificio?</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 32 }}>
            {REDES.map(({ titulo, desc }) => (
              <div key={titulo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', marginBottom: 8, fontSize: 15 }}>{titulo}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── ENTREGABLES ── */}
      <Section bg="#f8fafc">
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px' }}>
          <SectionLabel>Entregables BIC</SectionLabel>
          <ul style={{ marginTop: 24, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Planos de cada red (AP, AR, AL, CI) en AutoCAD DWG — plantas, isométricas y detalles',
              'Memoria de cálculo hidráulico con hojas de cálculo y justificación normativa NSR-10',
              'Especificaciones técnicas de materiales y equipos (bombas, válvulas, medidores)',
              'Firma y sello COPNIA 17202-313228 CLD en todos los planos entregados',
              'Carta de entrega para radicación ante la curaduría urbana',
              'Acompañamiento en preguntas técnicas durante el trámite de la licencia',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#334155' }}>
                <span style={{ color: '#16a34a', fontWeight: 700, marginTop: 2 }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <ThinLine />

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '64px 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>
            {FAQ.map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', marginBottom: 8, fontSize: 15 }}>{q}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.8, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── FORM ── */}
      {/* ── ANTI-INTERMEDIARIO ENHANCED ── */}
      <Section style={{ background: '#001A33', padding: '48px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(17px, 2.3vw, 24px)', color: '#fff', marginBottom: 14 }}>
            El ingeniero que firma trabaja directo con el promotor o constructor
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.80)', fontSize: 14, lineHeight: 1.8, maxWidth: 680, margin: '0 auto 10px' }}>
            BIC diseña redes hidrosanitarias y CI para <strong style={{ color: '#17A2B8' }}>constructoras, promotores, propietarios de edificios y desarrolladores</strong> que necesitan los planos para licencia o entrega ESP — no con intermediarios que re-cotizan el diseño ni con ingenieros que buscan actualizar conocimientos.
            Si usted tiene el proyecto activo y decide contratar, la propuesta llega en 24 horas.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.30)', fontSize: 11 }}>
            ¿Colega buscando precio de referencia? No es el canal.
          </p>
        </div>
      </Section>

      <ThinLine />


      <Section bg="#f8fafc">
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px' }}>
          <SectionLabel>Solicite cotización</SectionLabel>
          <p style={{ textAlign: 'center', color: '#475569', fontSize: 15, marginBottom: 32, maxWidth: 560, margin: '16px auto 32px' }}>
            BIC trabaja con constructores, arquitectos y propietarios en todo Colombia. Respuesta en menos de 24 horas.
          </p>
          <QuoteFormInline serviceId="hidrosanitario" />
        </div>
      </Section>
    </>
  )
}
