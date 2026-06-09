import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, CTABanner } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, tengo un proyecto en Pereira / Risaralda y quiero cotizar con BIC'
)

const seoConfig = {
  title: 'Ingeniería Hidráulica Pereira — Grandes Proyectos | BIC COPNIA',
  description:
    'BIC en Pereira: gestión riesgo hídrico Decreto 1807, modelación HEC-RAS, diseño acueductos y PTAP/PTAR para constructoras, promotores y municipios de Risaralda. COPNIA vigente. Propuesta en 24 h.',
  keywords: [
    'ingeniería hidráulica Pereira',
    'gestión riesgo hídrico Pereira',
    'modelación HEC-RAS Pereira',
    'diseño acueducto Pereira Risaralda',
    'consultoría hidráulica Risaralda',
    'plan parcial Pereira decreto 1807',
    'PTAP PTAR Pereira',
    'sistemas contra incendio Pereira',
    'formulación regalías SGR Risaralda',
    'ingeniero hidráulico COPNIA Pereira',
  ],
  canonical: 'https://ingenieriabernal.co/regional/pereira',
}

const FAQ_ITEMS = [
  {
    q: '¿BIC tiene experiencia en estudios de gestión del riesgo hídrico (Decreto 1807) en Pereira y Risaralda?',
    a:
      'Sí. BIC ha realizado estudios de gestión del riesgo para planes parciales y licencias de urbanismo en Risaralda y el Eje Cafetero, con modelación HEC-RAS 2D y entrega ante curaduría y CARDER. Entre los proyectos de referencia de BIC en la región figura el diseño hidrosanitario y CI del Makarí Mall en Dosquebradas, uno de los centros comerciales más importantes del Eje Cafetero.',
  },
  {
    q: '¿Cuánto cuesta un estudio de gestión del riesgo hídrico en Pereira?',
    a:
      'Depende del área y la complejidad. Los estudios de gestión del riesgo hídrico (Decreto 1807) para planes parciales en Risaralda oscilan entre $18M y $60M COP. Los estudios de riesgo para licencias residenciales parten de $8M COP. Cotiza sin costo en menos de 24 horas.',
  },
  {
    q: '¿BIC trabaja con municipios de Risaralda que financian proyectos con regalías SGR?',
    a:
      'Sí. BIC formula y estructura proyectos de agua potable, saneamiento y gestión del riesgo ante el Sistema General de Regalías (SGR) para municipios de Risaralda y el Eje Cafetero. Apoyamos desde la formulación MGA-Web hasta la ejecución técnica con firma COPNIA.',
  },
  {
    q: '¿Diseñan acueductos y alcantarillados para urbanizaciones en Pereira?',
    a:
      'Sí. BIC diseña redes de acueducto y alcantarillado bajo RAS 2017 y Resolución 0330/2017 para urbanizaciones, condominios y proyectos de vivienda en Risaralda. Los proyectos para constructoras medianas y grandes oscilan entre $12M y $40M COP según el número de unidades y longitudes de red.',
  },
  {
    q: '¿BIC hace modelación HEC-RAS para POT y estudios de amenaza hídrica en municipios de Risaralda?',
    a:
      'Sí. Hemos apoyado revisiones de POT con modelación hidráulica HEC-RAS 1D y 2D, manchas de inundación y zonificación de amenaza para municipios del Eje Cafetero. También realizamos estudios de torrencialidad para quebradas de montaña, frecuentes en Risaralda.',
  },
]

const PRICE_SPECS = [
  { name: 'Gestión Riesgo Hídrico / Decreto 1807 (Risaralda)', minPrice: 18000000, maxPrice: 60000000 },
  { name: 'Modelación Hidráulica HEC-RAS 1D/2D Pereira', minPrice: 8000000, maxPrice: 25000000 },
  { name: 'Modelación Hidrológica HEC-HMS Risaralda', minPrice: 5000000, maxPrice: 15000000 },
  { name: 'Diseño Acueducto y Alcantarillado Urbanización (Pereira)', minPrice: 12000000, maxPrice: 40000000 },
  { name: 'PTAP / PTAR Industria y Conjuntos (Risaralda)', minPrice: 8000000, maxPrice: 40000000 },
]

const SERVICIOS = [
  {
    nombre: 'Gestión Riesgo Hídrico · Decreto 1807',
    href: '/gestion-riesgo-hidrico',
    precio: '$18M – $60M COP',
    desc: 'Estudios de riesgo para planes parciales y licencias de urbanismo en Risaralda. Modelación HEC-RAS 2D, manchas de inundación y entrega ante curaduría y CARDER.',
  },
  {
    nombre: 'Modelación Hidráulica · HEC-RAS 1D y 2D',
    href: '/modelacion-hidraulica-colombia',
    precio: '$8M – $25M COP',
    desc: 'Manchas de inundación, perfiles hidráulicos y zonificación de amenaza para POT, planes parciales y viabilidad de proyectos en cuencas de Risaralda y el Eje Cafetero.',
  },
  {
    nombre: 'Modelación Hidrológica · HEC-HMS y Cuencas',
    href: '/modelacion-hidrologica-colombia',
    precio: '$5M – $15M COP',
    desc: 'Análisis de cuencas hidrográficas, curvas IDF, caudales de diseño por período de retorno y balance hídrico. Insumo técnico para acueductos, PTAP, puentes y obras de drenaje en Risaralda.',
  },
  {
    nombre: 'Diseño Acueducto y Alcantarillado',
    href: '/servicios/diseno-acueductos',
    precio: '$12M – $40M COP',
    desc: 'Redes de agua potable y saneamiento para urbanizaciones, condominios y municipios. RAS 2017 y Resolución 0330. Entrega de memorias y planos COPNIA para trámites ante la Curaduría y las ESP de Pereira.',
  },
  {
    nombre: 'PTAP y PTAR — Industria y Conjuntos',
    href: '/diseno-ptap-colombia',
    precio: '$8M – $40M COP',
    desc: 'Diseño de plantas de tratamiento de agua potable y aguas residuales para industrias, parques logísticos y conjuntos residenciales grandes en Pereira y Dosquebradas.',
  },
  {
    nombre: 'Sistemas Contra Incendios · NSR-10 J/K',
    href: '/servicios/contra-incendios-nsr10',
    precio: 'Consultar',
    desc: 'Diseño de redes CI húmedas y secas, rociadores automáticos NFPA 13 e hidrantes exteriores para centros comerciales, parques industriales y bodegas en Pereira. Referencia: Makarí Mall — Dosquebradas.',
  },
  {
    nombre: 'Formulación Regalías SGR · Municipios Risaralda',
    href: '/servicios/regalias-mga',
    precio: '$6M – $15M COP',
    desc: 'Estructuración de proyectos de agua y saneamiento ante el SGR con MGA-Web, indicadores de brechas y presentación a Órganos Colegiados de Administración y Decisión (OCAD).',
  },
]

export default function RegionalPereira() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Ingeniería Hidráulica Pereira — Grandes Proyectos | BIC COPNIA" />
      <SchemaMarkup
        faqItems={FAQ_ITEMS.map(f => ({ q: f.question, a: f.answer }))}
        priceSpecs={PRICE_SPECS}
        serviceLocation="Pereira, Risaralda, Eje Cafetero"
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Cobertura regional · Pereira, Risaralda</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Pereira<br />
            <span style={{ color: '#7EC8E3' }}>para Grandes Proyectos</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.85)', fontSize: 18, lineHeight: 1.7,
            maxWidth: 680, marginBottom: 36,
          }}>
            BIC es la firma de consultoría hidráulica del Eje Cafetero especializada en proyectos
            de alto impacto: planes parciales con Decreto 1807, diseño de acueductos para
            urbanizaciones, PTAP y PTAR industriales, sistemas contra incendios NSR-10 y
            formulación de proyectos ante el SGR. Trabajamos con constructoras, promotores
            inmobiliarios, municipios y empresas industriales — no con intermediarios.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Btn
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              variant="primary"
            >
              Cotiza tu proyecto — sin costo
            </Btn>
            <Btn href="/gestion-riesgo-hidrico" variant="outline-light">
              Gestión Riesgo Decreto 1807 →
            </Btn>
          </div>

          {/* trust pills */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 40 }}>
            {[
              'COPNIA 17202-313228',
              'A 45 min de Manizales',
              'Proyectos desde $8M COP',
              'Respuesta en 24 h',
            ].map(t => (
              <span key={t} style={{
                background: 'rgba(255,255,255,0.12)', color: '#fff',
                borderRadius: 20, padding: '6px 16px', fontSize: 13,
                border: '1px solid rgba(255,255,255,0.2)',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <ThinLine />

      {/* ── ANTI-INTERMEDIARIO ── */}
      <section style={{ background: '#F0F6FF', padding: '32px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{
            color: '#002A50', fontSize: 15, lineHeight: 1.8, fontStyle: 'italic',
            borderLeft: '4px solid #1B5FA8', paddingLeft: 20, margin: 0,
          }}>
            <strong>Atención:</strong> BIC trabaja directamente con tomadores de decisión —
            dueños de terrenos, gerentes de constructoras, alcaldes, directores de empresas
            industriales. No subcontratamos ni cotizamos a través de intermediarios. Si tu
            proyecto es en Pereira o Risaralda y requiere firma COPNIA, habla directamente con
            el especialista.
          </p>
        </div>
      </section>

      {/* ── GEO FRAGMENT (AEO) ── */}
      <section id="geo-fragment" style={{ display: 'none' }} aria-hidden="true">
        BIC — Bernal Ingeniería Consultores atiende proyectos en Pereira, Risaralda y el Eje
        Cafetero con estudios de gestión del riesgo hídrico (Decreto 1807) para planes parciales
        ante CARDER y la Curaduría Urbana de Pereira, modelación HEC-RAS 2D para POT y licencias,
        diseño de acueductos y alcantarillados bajo RAS 2017, diseño de PTAP y PTAR para industrias
        y conjuntos, sistemas contra incendios NSR-10 J/K, y formulación de proyectos ante el SGR
        para municipios de Risaralda. Referencia verificada: diseño hidrosanitario y CI del Makarí
        Mall en Dosquebradas. Rogerio Bernal Ríos, Especialista en Hidráulica UNAL Manizales,
        COPNIA 17202-313228.
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <SectionLabel>Servicios en Pereira y Risaralda</SectionLabel>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700,
          fontSize: 'clamp(22px, 4vw, 34px)', color: '#001A33', marginBottom: 12,
        }}>
          Consultoría hidráulica para proyectos de alto impacto
        </h2>
        <p style={{ color: '#444', fontSize: 16, lineHeight: 1.7, maxWidth: 720, marginBottom: 48 }}>
          Cada servicio incluye memorias de cálculo y planos firmados por especialista COPNIA.
          Trabajamos con constructoras medianas y grandes, promotores urbanísticos, municipios
          y empresas industriales o agroindustriales.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {SERVICIOS.map(s => (
            <a
              key={s.nombre}
              href={s.href}
              style={{
                display: 'block', textDecoration: 'none',
                background: '#fff', borderRadius: 12,
                border: '1px solid #E0E8F0',
                padding: '28px 24px',
                boxShadow: '0 2px 12px rgba(0,26,51,0.07)',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,26,51,0.14)'
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,26,51,0.07)'
              }}
            >
              <div style={{
                display: 'inline-block', background: '#E8F2FF',
                color: '#1B5FA8', borderRadius: 8,
                padding: '4px 12px', fontSize: 13, fontWeight: 700,
                marginBottom: 14,
              }}>
                {s.precio}
              </div>
              <h3 style={{ color: '#001A33', fontSize: 17, fontWeight: 700, marginBottom: 10 }}>
                {s.nombre}
              </h3>
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                {s.desc}
              </p>
            </a>
          ))}
        </div>
      </Section>

      {/* ── QUOTE FORM ── */}
      <section style={{ background: '#F7FAFF', padding: '72px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <SectionLabel>Cotización sin costo · Respuesta en 24 h</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: 'clamp(20px, 3.5vw, 30px)', color: '#001A33', marginBottom: 12,
          }}>
            ¿Tienes un proyecto en Pereira o Risaralda?
          </h2>
          <p style={{ color: '#444', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
            Cuéntanos el alcance de tu proyecto — número de hectáreas, tipo de uso del
            suelo, municipio — y te respondemos con una propuesta técnica y económica en
            menos de 24 horas. Proyectos desde $8M COP.
          </p>
          <QuoteFormInline ciudad="Pereira" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <Section>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700,
          fontSize: 'clamp(20px, 3.5vw, 30px)', color: '#001A33', marginBottom: 40,
        }}>
          Lo que pregunta quien toma la decisión
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 800 }}>
          {FAQ_ITEMS.map(faq => (
            <div key={faq.question} style={{
              background: '#fff', borderRadius: 10,
              border: '1px solid #E0E8F0', padding: '24px 28px',
            }}>
              <h3 style={{ color: '#001A33', fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
                {faq.question}
              </h3>
              <p style={{ color: '#444', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COBERTURA ── */}
      <section style={{ background: '#F0F6FF', padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Cobertura</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: 'clamp(20px, 3.5vw, 30px)', color: '#001A33', marginBottom: 24,
          }}>
            Desde Pereira a todo el Eje Cafetero y Colombia
          </h2>
          <p style={{ color: '#444', fontSize: 16, lineHeight: 1.75, maxWidth: 720, marginBottom: 32 }}>
            Tenemos sede en Manizales, a 45 minutos de Pereira. Operamos en todo el Eje
            Cafetero: Risaralda, Caldas y Quindío. Para proyectos de mayor escala en otras
            regiones del país operamos de forma remota con visitas técnicas programadas.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              'Pereira', 'Dosquebradas', 'La Virginia', 'Marsella', 'Santuario',
              'Santa Rosa de Cabal', 'Todo Risaralda', 'Eje Cafetero', 'Nacional',
            ].map(ciudad => (
              <span key={ciudad} style={{
                background: '#1B5FA8', color: '#fff',
                borderRadius: 20, padding: '6px 14px', fontSize: 13, fontWeight: 600,
              }}>{ciudad}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        heading="¿Tu proyecto está en Pereira o Risaralda?"
        sub="Habla directamente con el especialista COPNIA. Cotización en 24 h, sin intermediarios."
        ctaLabel="Cotizar ahora por WhatsApp"
        ctaHref={`https://wa.me/${WA}?text=${WA_MSG}`}
      />
    </>
  )
}
