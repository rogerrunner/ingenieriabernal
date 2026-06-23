import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito un estudio o diseño de ingeniería hidráulica en Viterbo Caldas. ¿Pueden cotizar?')

const seoConfig = {
  title: 'Ingeniero Hidráulico en Viterbo Caldas — Estudios y Diseños | BIC',
  description: 'BIC — ingeniería hidráulica en Viterbo y Occidente de Caldas. Gestión del riesgo Decreto 1807, diseño acueductos rurales, PTAP, ronda hídrica, redes hidrosanitarias. Rogerio Bernal Ríos, ex funcionario Alcaldía de Viterbo, COPNIA 17202-313228 CLD.',
  canonical: 'https://ingenieriabernal.co/ingenieria-hidraulica-viterbo-caldas',
  noindex: false,
  keywords: [
    'ingeniero hidráulico Viterbo Caldas',
    'ingeniería hidráulica Viterbo',
    'consultoría hidráulica occidente Caldas',
    'estudio gestión del riesgo Viterbo Caldas',
    'diseño acueducto Viterbo Caldas',
    'PTAP Viterbo Anserma Belalcázar',
    'estudio Decreto 1807 occidente Caldas',
    'ronda hídrica Viterbo Caldas',
    'diseño hidrosanitario Viterbo Caldas',
    'ingeniería hidráulica Anserma Caldas',
    'BIC ingeniería Viterbo Caldas',
  ],
}

const SERVICIOS = [
  {
    nombre: 'Gestión del riesgo hídrico — Decreto 1807/2014',
    href: '/gestion-riesgo-hidrico',
    desc: 'Estudios de amenaza y vulnerabilidad por inundación para licencias de urbanismo y POT en Viterbo y municipios del Occidente de Caldas. Modelación hidráulica, cartografía de riesgo, concepto de aptitud ante CORPOCALDAS.',
  },
  {
    nombre: 'Diseño de acueducto y alcantarillado rural',
    href: '/servicios/diseno-acueductos',
    desc: 'Diseño de sistemas de acueducto veredal y municipal conforme al RAS 2017. Captaciones, líneas de aducción y conducción, tanques, redes de distribución y alcantarillado sanitario. Memorias y planos para CORPOCALDAS y AGR.',
  },
  {
    nombre: 'PTAP — Planta de tratamiento agua potable',
    href: '/ptap-municipios-colombia',
    desc: 'Diseño de plantas potabilizadoras para condominios campestres, parcelaciones y acueductos veredales en el Occidente de Caldas. Selección tecnológica, memorias de cálculo, APU y apoyo en la gestión ante CORPOCALDAS.',
  },
  {
    nombre: 'Ronda hídrica y delimitación de cauces',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Delimitación técnica de ronda hídrica y ZMPA para predios con quebradas y ríos en Viterbo, Anserma, Belalcázar y San José. Insumo obligatorio para licencias en predios con cauces y para EOT municipal.',
  },
  {
    nombre: 'PTAR — tratamiento aguas residuales',
    href: '/diseno-ptar-colombia',
    desc: 'Diseño de sistemas de tratamiento de aguas residuales para industria, hoteles y parcelaciones. Tramitación del permiso de vertimiento ante CORPOCALDAS y cumplimiento Resolución 0631/2015 MADS.',
  },
  {
    nombre: 'Formulación proyectos SGR — MGA-Web',
    href: '/servicios/regalias-mga',
    desc: 'Formulación y radicación de proyectos de agua potable y saneamiento básico en MGA-Web para municipios del Occidente de Caldas. Conocimiento directo de los organismos de control y el sistema del DNP.',
  },
]

const FAQS = [
  {
    q: '¿Hay un ingeniero hidráulico en Viterbo Caldas disponible para proyectos locales?',
    a: 'Sí. Rogerio Bernal Ríos, director de BIC, es ingeniero civil egresado de la Universidad Nacional de Colombia y ex Profesional Universitario de la Alcaldía Municipal de Viterbo. Conoce de primera mano las condiciones hidrológicas locales, los predios con riesgo hídrico en la cabecera, y los procedimientos específicos de CORPOCALDAS para la Cuenca del Río Risaralda. BIC atiende proyectos en Viterbo, Anserma, Belalcázar, San José, La Merced y municipios vecinos del Occidente de Caldas.',
  },
  {
    q: '¿Qué estudios exige CORPOCALDAS para proyectos en el Occidente de Caldas?',
    a: 'CORPOCALDAS exige para predios con cauces: (1) delimitación de ronda hídrica y ZMPA conforme al Decreto 2245/2017; (2) estudio de amenaza por inundación o torrencialidad (Decreto 1807/2014 y Decreto 1640/2012); (3) permiso de vertimiento para sistemas que generen aguas residuales industriales o con cargas especiales. BIC conoce los tiempos, formatos y requisitos específicos de la subdirección de CORPOCALDAS que atiende el Occidente.',
  },
  {
    q: '¿Cuánto cuesta un estudio de gestión del riesgo hídrico en Viterbo Caldas?',
    a: 'Para predios rurales o de borde urbano en Viterbo y municipios vecinos del Occidente de Caldas, los estudios de gestión del riesgo hídrico de BIC van desde $12 hasta $35 millones COP según complejidad y área. Los estudios básicos para licencias de construcción rural pueden estar entre $12 y $18 millones. Los estudios detallados con HEC-RAS 2D para planes parciales o EOT van de $25 a $45 millones. Cotización sin costo en 24 horas.',
  },
  {
    q: '¿BIC puede diseñar acueductos rurales en el Occidente de Caldas?',
    a: 'Sí. BIC diseña sistemas de acueducto veredal conforme al RAS 2017 para comunidades rurales y parcelaciones campestres. Tenemos experiencia en predios del piedemonte cafetero donde la fuente es quebrada y la topografía exige diseño cuidadoso de presiones y cotas. Los entregables incluyen memorias de cálculo, planos constructivos y apoyo en la radicación ante la Agencia de Gestión Reglamentaria (AGR) de CORPOCALDAS.',
  },
  {
    q: '¿BIC puede ayudar a una alcaldía del Occidente de Caldas con proyectos de regalías?',
    a: 'Sí. BIC formuló proyectos de regalías (SGR) en agua y saneamiento para municipios de Caldas y Boyacá con registro en MGA-Web. Conocemos los requisitos del DNP, los plazos del OCAD y la documentación exigida por el Ministerio de Vivienda. El trabajo previo en la Alcaldía de Viterbo nos da contexto directo sobre los procesos de gestión pública local en el Occidente de Caldas.',
  },
]

export default function LandingViterboCaldas() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Ingeniero Hidráulico en Viterbo Caldas — BIC Bernal Ingeniería Consultores" />
      <SchemaMarkup
        type="service"
        serviceName="Ingeniería Hidráulica en Viterbo y Occidente de Caldas — BIC"
        serviceDesc="Consultoría hidráulica en Viterbo Caldas: gestión del riesgo Decreto 1807, acueductos rurales, PTAP, ronda hídrica. Rogerio Bernal Ríos, ex funcionario Alcaldía de Viterbo."
        serviceUrl="/ingenieria-hidraulica-viterbo-caldas"
        faqItems={FAQS}
        priceSpecification={[
          { name: 'Estudio gestión del riesgo hídrico Viterbo Caldas', minPrice: 12000000, maxPrice: 35000000, priceCurrency: 'COP' },
          { name: 'Diseño acueducto rural Occidente Caldas', minPrice: 8000000, maxPrice: 30000000, priceCurrency: 'COP' },
        ]}
      />

      <CTABanner service="Ingeniería hidráulica en Viterbo y Occidente de Caldas — Rogerio Bernal Ríos, ex Alcaldía de Viterbo, COPNIA 17202-313228 CLD" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>COPNIA 17202-313228 CLD · Viterbo · Occidente de Caldas</SectionLabel>
          <h1 id="hero-title" style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniero Hidráulico en Viterbo Caldas<br />
            <span style={{ color: '#17A2B8' }}>— Bernal Ingeniería Consultores</span>
          </h1>
          <p id="geo-fragment" style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 20,
          }}>
            BIC es dirigida por el Ing. Rogerio Bernal Ríos (COPNIA 17202-313228 CLD), nacido en Viterbo y
            ex Profesional Universitario de la Alcaldía Municipal de Viterbo. Conocemos las cuencas locales,
            las condiciones de CORPOCALDAS en el Occidente y los proyectos estratégicos de la subregión.
            Gestión del riesgo Decreto 1807, diseño de acueductos rurales, PTAP, ronda hídrica y proyectos SGR.
          </p>
          <div style={{
            display: 'inline-block', background: 'rgba(23,162,184,0.15)',
            border: '1px solid rgba(23,162,184,0.4)', borderRadius: 4,
            padding: '8px 16px', marginBottom: 28,
          }}>
            <span style={{ fontFamily: "'Lato', sans-serif", color: '#7DD3FC', fontSize: 13 }}>
              Ingeniero nativo de Viterbo · Conoce el territorio · Cotización en 24 h
            </span>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Cotizar proyecto en Viterbo Caldas
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios BIC en Viterbo y Occidente de Caldas</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 32 }}>
            {SERVICIOS.map(s => (
              <a key={s.nombre} href={s.href} style={{
                display: 'block', background: '#fff', border: '1px solid #e2e8f0',
                borderRadius: 8, padding: '20px 22px', textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 14, marginBottom: 8 }}>{s.nombre}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── CONEXIÓN LOCAL ── */}
      <Section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <SectionLabel>Por qué BIC en el Occidente de Caldas</SectionLabel>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { t: 'Conoce el territorio', d: 'Rogerio Bernal Ríos nació y trabajó en Viterbo. Conoce las cuencas del Río Risaralda, las Qda La Pava, Qda El Sinaí y los predios problemáticos del piedemonte cafetero occidental.' },
              { t: 'Experiencia en Alcaldía local', d: 'Trabajó como Profesional Universitario en la Alcaldía de Viterbo. Conoce los procesos de contratación, los funcionarios de planeación y los trámites ante CORPOCALDAS en el Occidente.' },
              { t: 'Proyectos en la subregión', d: 'BIC ha ejecutado estudios en Anserma (Centro Cultural Cacique Ucuzca) y tiene contactos técnicos en municipios vecinos. No es una firma que llega fría: llega con contexto.' },
              { t: 'COPNIA vigente nacional', d: 'La matrícula profesional COPNIA 17202-313228 CLD habilita para firmar estudios y diseños en todo Colombia. Los entregables de BIC son aceptados por CORPOCALDAS, curadurías y entidades financieras.' },
            ].map(({ t, d }) => (
              <div key={t} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '18px 20px' }}>
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, marginBottom: 8 }}>{t}</h4>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── FAQ ── */}
      <Section bg="#f8fafc" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 28 }}>
            {FAQS.map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 15, marginBottom: 8 }}>{q}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.8, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ThinLine />

      {/* ── FORM ── */}
      <Section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <SectionLabel>Cotice su proyecto en Viterbo o el Occidente de Caldas</SectionLabel>
          <p style={{ textAlign: 'center', color: '#475569', fontSize: 15, margin: '16px auto 32px', maxWidth: 560 }}>
            BIC responde en menos de 24 horas. Sin intermediarios — trabaja directamente con el ingeniero responsable del estudio.
          </p>
          <QuoteFormInline serviceId="decreto1807" />
        </div>
      </Section>
    </>
  )
}
