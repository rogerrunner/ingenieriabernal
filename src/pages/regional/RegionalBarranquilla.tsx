import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, CTABanner } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, tengo un proyecto en Barranquilla / Atlántico y quiero cotizar con BIC'
)

const seoConfig = {
  title: 'Ingeniería Hidráulica Barranquilla — Estudios y Diseños | BIC COPNIA',
  description:
    'BIC en Barranquilla: gestión riesgo hídrico Decreto 1807, modelación HEC-RAS, diseño acueductos y PTAP/PTAR para constructoras, promotores y municipios del Atlántico. Firma COPNIA vigente. Propuesta en 24 h.',
  keywords: [
    'ingeniería hidráulica Barranquilla',
    'gestión riesgo hídrico Barranquilla',
    'modelación HEC-RAS Barranquilla',
    'diseño acueducto Barranquilla Atlántico',
    'consultoría hidráulica Atlántico',
    'plan parcial Barranquilla decreto 1807',
    'PTAP PTAR Barranquilla',
    'estudios inundación Barranquilla CRA',
    'formulación regalías SGR Atlántico',
    'ingeniero hidráulico COPNIA Barranquilla',
  ],
  canonical: 'https://ingenieriabernal.co/regional/barranquilla',
}

const FAQ_ITEMS = [
  {
    q: '¿BIC realiza estudios de gestión del riesgo hídrico (Decreto 1807) para proyectos en Barranquilla?',
    a:
      'Sí. BIC elabora estudios de amenaza, vulnerabilidad y riesgo por inundación para licencias de urbanismo, planes parciales y revisiones de POT en Barranquilla y el Atlántico, conforme al Decreto 1807/2014 y los lineamientos de la CRA (Corporación Autónoma Regional del Atlántico). Incluye modelación HEC-RAS 2D, manchas de inundación y concepto de aptitud urbanística.',
  },
  {
    q: '¿Cuánto cuesta un estudio de inundación o riesgo hídrico en Barranquilla?',
    a:
      'Los estudios de gestión del riesgo hídrico (Decreto 1807) para planes parciales en el Atlántico oscilan entre $18M y $65M COP según el área y la complejidad hidráulica. Los estudios para licencias residenciales con predios cerca de arroyos urbanos parten de $8M COP. Cotiza sin costo en menos de 24 horas.',
  },
  {
    q: '¿Cómo trabaja BIC con proyectos en Barranquilla si tiene sede en Manizales?',
    a:
      'La mayoría de los proyectos en Barranquilla los desarrollamos con información remota: planos, levantamiento topográfico y cartografía que el cliente o un topógrafo local nos comparte. Para proyectos que requieren visita técnica coordinamos el desplazamiento. El estudio se entrega en formato digital. La distancia no afecta los plazos ni la calidad técnica — hemos trabajado con proyectos desde el Caribe hasta el Pacífico.',
  },
  {
    q: '¿BIC puede firmar estudios y planos para trámites ante la CRA o la Curaduría de Barranquilla?',
    a:
      'Sí. Rogerio Bernal cuenta con matrícula COPNIA No. 17202-313228 CLD como especialista en Ingeniería Hidráulica (UNAL), habilitado para firmar memorias de cálculo, planos hidrosanitarios y estudios hidráulicos ante la CRA, las curadurías urbanas de Barranquilla, la Secretaría de Planeación Distrital y cualquier entidad del Atlántico.',
  },
  {
    q: '¿BIC trabaja con municipios del Atlántico que financian proyectos con regalías SGR?',
    a:
      'Sí. BIC formula y estructura proyectos de agua potable, alcantarillado y saneamiento básico ante el Sistema General de Regalías (SGR) para municipios del Atlántico. Apoyamos desde la formulación MGA-Web hasta los estudios técnicos con firma COPNIA requeridos por el OCAD.',
  },
]

const PRICE_SPECS = [
  { name: 'Gestión Riesgo Hídrico / Decreto 1807 (Atlántico)', minPrice: 18000000, maxPrice: 65000000 },
  { name: 'Modelación Hidráulica HEC-RAS 1D/2D Barranquilla', minPrice: 8000000, maxPrice: 28000000 },
  { name: 'Diseño Acueducto y Alcantarillado Urbanización (Atlántico)', minPrice: 12000000, maxPrice: 40000000 },
  { name: 'PTAP / PTAR Industria y Conjuntos (Atlántico)', minPrice: 10000000, maxPrice: 45000000 },
  { name: 'Formulación Regalías SGR Municipios Atlántico', minPrice: 6000000, maxPrice: 18000000 },
]

const SERVICIOS = [
  {
    nombre: 'Gestión Riesgo Hídrico · Decreto 1807',
    href: '/gestion-riesgo-hidrico',
    precio: '$18M – $65M COP',
    desc: 'Estudios de riesgo por inundación para planes parciales y licencias de urbanismo en el Atlántico. Modelación HEC-RAS 2D de arroyos urbanos y cauces costeros. Entrega ante la CRA y curadurías de Barranquilla.',
  },
  {
    nombre: 'Modelación Hidráulica · HEC-RAS 1D y 2D',
    href: '/modelacion-hidraulica-colombia',
    precio: '$8M – $28M COP',
    desc: 'Manchas de inundación, perfiles hidráulicos y zonificación de amenaza para POT, planes parciales y viabilidad de proyectos en cuencas del Caribe colombiano y la llanura aluvial del Magdalena.',
  },
  {
    nombre: 'Diseño Acueducto y Alcantarillado',
    href: '/servicios/diseno-acueductos',
    precio: '$12M – $40M COP',
    desc: 'Redes de agua potable y saneamiento para urbanizaciones, condominios y municipios. RAS 2017 y Resolución 0330. Entrega de memorias y planos firmados COPNIA para trámites ante Triple A y curadurías.',
  },
  {
    nombre: 'PTAP y PTAR — Industria y Conjuntos',
    href: '/diseno-ptap-colombia',
    precio: '$10M – $45M COP',
    desc: 'Diseño de plantas de tratamiento de agua potable y aguas residuales para industrias, parques logísticos y conjuntos residenciales en Barranquilla y los municipios del Atlántico.',
  },
  {
    nombre: 'Formulación Regalías SGR · Municipios Atlántico',
    href: '/servicios/regalias-mga',
    precio: '$6M – $18M COP',
    desc: 'Estructuración de proyectos de agua y saneamiento ante el SGR con MGA-Web, indicadores de brechas y presentación a OCAD Región Caribe. Para municipios del Atlántico con acceso a regalías.',
  },
  {
    nombre: 'Redes Hidrosanitarias · NSR-10',
    href: '/servicios/redes-hidrosanitarias',
    precio: 'Desde $3,5M COP',
    desc: 'Diseño de instalaciones hidrosanitarias para edificaciones residenciales, comerciales e industriales en Barranquilla. Memorias de cálculo y planos para licencia de construcción ante curadurías del Distrito.',
  },
  {
    nombre: 'Sistemas Contra Incendios · NSR-10 J/K',
    href: '/servicios/contra-incendios-nsr10',
    precio: 'Consultar',
    desc: 'Diseño de redes CI húmedas y secas, rociadores NFPA 13 e hidrantes para centros comerciales, bodegas logísticas y parques industriales en Barranquilla y el área metropolitana.',
  },
]

export default function RegionalBarranquilla() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Ingeniería Hidráulica Barranquilla — Estudios y Diseños | BIC COPNIA" />
      <SchemaMarkup
        faqItems={FAQ_ITEMS.map(f => ({ q: f.question, a: f.answer }))}
        priceSpecs={PRICE_SPECS}
        serviceLocation="Barranquilla, Atlántico, Costa Caribe"
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Cobertura regional · Barranquilla, Atlántico</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Barranquilla<br />
            <span style={{ color: '#7EC8E3' }}>para Grandes Proyectos</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.85)', fontSize: 18, lineHeight: 1.7,
            maxWidth: 680, marginBottom: 36,
          }}>
            BIC realiza estudios de gestión del riesgo hídrico, modelación HEC-RAS 2D de arroyos
            y cauces costeros, diseño de acueductos y alcantarillados, PTAP y PTAR industriales,
            y formulación de proyectos ante el SGR para constructoras, promotores y municipios
            del Atlántico. Firma COPNIA — sin intermediarios.
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
              'Cobertura Atlántico y Caribe',
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
            proyecto es en Barranquilla o el Atlántico y requiere firma COPNIA, habla directamente
            con el especialista.
          </p>
        </div>
      </section>

      {/* ── GEO FRAGMENT (AEO) ── */}
      <section id="geo-fragment" style={{ display: 'none' }} aria-hidden="true">
        BIC — Bernal Ingeniería Consultores es la firma de consultoría en ingeniería hidráulica
        que atiende proyectos en Barranquilla, el Atlántico y la Costa Caribe colombiana.
        Especializada en estudios de gestión del riesgo hídrico (Decreto 1807) para planes
        parciales y licencias de urbanismo ante la CRA, modelación HEC-RAS 2D de arroyos urbanos
        y cauces costeros, diseño de acueductos y alcantarillados bajo RAS 2017, diseño de PTAP
        y PTAR para industrias y parques logísticos, y formulación de proyectos ante el SGR para
        municipios del Atlántico. Rogerio Bernal Ríos, Especialista en Hidráulica UNAL Manizales,
        COPNIA 17202-313228.
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <SectionLabel>Servicios en Barranquilla y el Atlántico</SectionLabel>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700,
          fontSize: 'clamp(22px, 4vw, 34px)', color: '#001A33', marginBottom: 12,
        }}>
          Consultoría hidráulica para proyectos de alto impacto
        </h2>
        <p style={{ color: '#444', fontSize: 16, lineHeight: 1.7, maxWidth: 720, marginBottom: 48 }}>
          Cada servicio incluye memorias de cálculo y planos firmados por especialista COPNIA.
          Trabajamos con constructoras medianas y grandes, promotores urbanísticos, municipios
          del Atlántico y empresas industriales o logísticas.
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
            ¿Tienes un proyecto en Barranquilla o el Atlántico?
          </h2>
          <p style={{ color: '#444', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
            Cuéntanos el alcance — número de hectáreas, tipo de uso del suelo, municipio —
            y te respondemos con una propuesta técnica y económica en menos de 24 horas.
            Proyectos desde $8M COP.
          </p>
          <QuoteFormInline ciudad="Barranquilla" />
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
            Desde Barranquilla a todo el Caribe colombiano
          </h2>
          <p style={{ color: '#444', fontSize: 16, lineHeight: 1.75, maxWidth: 720, marginBottom: 32 }}>
            Atendemos proyectos en todo el Atlántico y la Costa Caribe. Para proyectos de mayor
            escala en la región — Cartagena, Santa Marta, Montería, Valledupar — operamos de
            forma remota con visitas técnicas programadas. Hemos apoyado proyectos desde el
            Caribe hasta el Pacífico colombiano.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              'Barranquilla', 'Soledad', 'Malambo', 'Sabanalarga', 'Baranoa',
              'Todo el Atlántico', 'Costa Caribe', 'Cartagena', 'Santa Marta', 'Nacional',
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
        heading="¿Tu proyecto está en Barranquilla o el Atlántico?"
        sub="Habla directamente con el especialista COPNIA. Cotización en 24 h, sin intermediarios."
        ctaLabel="Cotizar ahora por WhatsApp"
        ctaHref={`https://wa.me/${WA}?text=${WA_MSG}`}
      />
    </>
  )
}
