import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar un diseño de acueducto rural o veredal en Caldas. ¿Pueden enviarme una propuesta técnica?')

const seoConfig = {
  title: 'Acueducto Rural y Veredal en Caldas | Fincas Cafeteras | BIC',
  description: 'Diseño de acueducto rural y veredal en Caldas: Viterbo, Anserma, Riosucio, Supía, La Merced, Marmato. Captación, conducción, PTAP, tanques. RAS 2017. COPNIA. Propuesta en 24 h.',
  keywords: [
    'acueducto rural Caldas',
    'diseño acueducto veredal Caldas',
    'acueducto finca café Caldas',
    'sistema agua potable finca cafetera',
    'diseño acueducto Viterbo Caldas',
    'diseño acueducto Anserma Caldas',
    'diseño acueducto Riosucio Caldas',
    'diseño acueducto Supia Caldas',
    'acueducto veredal occidente Caldas',
    'diseño acueducto La Merced Caldas',
    'diseño acueducto Marmato Caldas',
    'diseño acueducto rural Colombia RAS 2017',
    'sistema abastecimiento agua rural',
    'captacion agua finca Caldas',
    'PTAP rural Caldas',
  ],
  canonical: 'https://ingenieriabernal.co/acueducto-rural-caldas',
}

const SERVICIOS = [
  {
    icon: '🌊',
    titulo: 'Captación de fuentes superficiales y subterráneas',
    desc: 'Diseño de bocatomas laterales y de fondo, azudes, rejillas sumergidas y captaciones de manantial para fincas cafeteras y comunidades rurales. Cálculo de caudal de diseño con aforos, curvas de duración y análisis de disponibilidad hídrica conforme al RAS 2017 Título B.',
  },
  {
    icon: '🚰',
    titulo: 'Líneas de conducción y aducción',
    desc: 'Diseño hidráulico de tuberías a presión y en gravedad para conducir el agua desde la captación hasta el sistema de tratamiento y almacenamiento. Cálculo de pérdidas de carga, selección de diámetros, materiales (PVC, HDPE, acero) y obras de arte (cámaras quiebragradientes, ventosas, válvulas).',
  },
  {
    icon: '🏭',
    titulo: 'Plantas de tratamiento de agua potable (PTAP) rurales',
    desc: 'Diseño de PTAP compactas para fincas cafeteras y acueductos veredales: floculación, sedimentación, filtración lenta o rápida en arena, desinfección con cloro o UV. Dimensionamiento para caudales desde 0.5 L/s hasta 20 L/s bajo los parámetros de calidad de la Resolución 2115/2007.',
  },
  {
    icon: '💧',
    titulo: 'Tanques de almacenamiento y regulación',
    desc: 'Diseño estructural e hidráulico de tanques de almacenamiento en concreto y plástico reforzado para sistemas de acueducto rural. Cálculo del volumen de regulación, cálculo del volumen de reserva para incendio (cuando aplica) y verificación de presiones en la red de distribución.',
  },
  {
    icon: '🔧',
    titulo: 'Redes de distribución intradomiciliaria',
    desc: 'Trazado y dimensionamiento de la red de distribución de agua potable en fincas y comunidades: ramales principales, secundarios y acometidas. Modelación en EPANET para garantizar presiones mínimas de 10 m.c.a. y velocidades de autopurga conforme al RAS 2017.',
  },
  {
    icon: '📋',
    titulo: 'Permisos y concesiones de agua (CORPOCALDAS)',
    desc: 'Elaboración del estudio hidrológico y la memoria técnica requeridos por CORPOCALDAS para tramitar la concesión de aguas superficiales o subterráneas. Gestión del expediente ante la autoridad ambiental para fincas cafeteras en el occidente y centro de Caldas.',
  },
]

const MUNICIPIOS = [
  { nombre: 'Viterbo', desc: 'Occidente de Caldas. Acueductos para fincas cafeteras, sistemas comunitarios y proyectos agroindustriales.' },
  { nombre: 'Anserma', desc: 'Centro-occidente de Caldas. Diseños para acueductos veredales y sistemas de riego en zonas cafeteras.' },
  { nombre: 'Riosucio', desc: 'Acueductos rurales en zona indígena y campesina. Captaciones de quebradas y diseño de PTAP de bajo costo.' },
  { nombre: 'Supía', desc: 'Sistemas de abastecimiento para cabeceras corregimentales y fincas en la cuenca del río Supía.' },
  { nombre: 'La Merced', desc: 'Acueductos veredales para comunidades rurales con fuentes de alta montaña en la cordillera Occidental.' },
  { nombre: 'Marmato', desc: 'Sistemas de agua potable en zona minera y cafetera. Captaciones de corrientes de montaña.' },
  { nombre: 'San José · Risaralda (municipio)', desc: 'Occidente de Caldas. Diseños hidrosanitarios para fincas y comunidades en el corredor cafetero.' },
  { nombre: 'Chinchiná · Villamaría', desc: 'Centro de Caldas. Acueductos para urbanizaciones rurales y zonas de expansión del área metropolitana de Manizales.' },
]

const FAQ = [
  {
    q: '¿Qué normativa rige el diseño de acueductos rurales en Colombia?',
    a: 'El Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS), actualizado por la Resolución 0330/2017 del Ministerio de Vivienda, es la norma principal. Para zonas rurales dispersas, el nivel de complejidad del sistema es "bajo" o "medio-bajo", lo cual simplifica algunos requisitos técnicos pero mantiene las exigencias de calidad del agua (Resolución 2115/2007). CORPOCALDAS exige además un estudio hidrológico para la concesión de aguas.',
  },
  {
    q: '¿Qué capacidad de agua necesita una finca cafetera en Caldas?',
    a: 'Depende del tamaño de la finca, el número de trabajadores y las actividades productivas. Una finca de 10 hectáreas de café con beneficiadero húmedo puede requerir entre 2 y 5 L/s en época de cosecha. BIC calcula la demanda hídrica real de cada finca incluyendo uso doméstico, riego, lavado de café y consumo de animales, para dimensionar correctamente la captación y el sistema de almacenamiento.',
  },
  {
    q: '¿Cuánto cuesta diseñar un acueducto rural en Caldas?',
    a: 'El costo depende de la extensión de la red, el número de usuarios o predios a servir, la fuente de abastecimiento y si se requiere o no una PTAP. Un diseño básico para una finca familiar (captación + conducción + tanque + red interna) puede costar entre $3 y $8 millones de pesos. Un acueducto veredal para 50-100 familias entre $15 y $40 millones. Enviamos propuesta detallada en 24 horas.',
  },
  {
    q: '¿Puede BIC tramitar la concesión de aguas ante CORPOCALDAS?',
    a: 'Sí. BIC elabora el estudio hidrológico e hidráulico requerido por CORPOCALDAS para la solicitud de concesión de aguas superficiales o subterráneas, incluyendo el cálculo de caudales de la fuente, el análisis de disponibilidad hídrica y la descripción del sistema de aprovechamiento. El trámite ante la Corporación lo gestiona directamente el propietario del predio, pero BIC provee toda la documentación técnica necesaria.',
  },
]

const FAQ_SCHEMA = [
  {q: "¿BIC diseña acueductos rurales en Caldas?",
   a: "Sí. BIC diseña acueductos rurales en Caldas para comunidades veredales, ESP municipales y operadores rurales: bocatoma o captación, línea de conducción, planta de tratamiento compacta (PTAP), tanque de almacenamiento y red de distribución. Todos los diseños bajo RAS 2017, con memorias de cálculo y planos para contratación de obra. Firma COPNIA 17202-313228 CLD. Cobertura: todos los municipios de Caldas."},
  {q: "¿BIC tiene experiencia en proyectos de acueducto con cofinanciación del SGR en Caldas?",
   a: "Sí. BIC ha participado en la formulación y estructuración de proyectos de agua potable y saneamiento básico para el Sistema General de Regalías (SGR) en municipios de Caldas, incluyendo la elaboración de los estudios técnicos requeridos por el OCAD departamental y el acompañamiento en la radicación y sustentación del proyecto."},
  {q: "¿Cuánto cuesta el diseño de un acueducto rural en Caldas?",
   a: "El costo del diseño de un acueducto rural en Caldas depende del número de usuarios y la longitud de las redes: acueducto veredal hasta 50 usuarios (2-5 km de red): $6M–$15M COP; acueducto de 50-200 usuarios (5-15 km de red): $12M–$28M COP; acueducto mayor con PTAP y red extensa: $20M–$50M COP. BIC puede incluir el diseño de la PTAP y el trámite de concesión de aguas ante Corpocaldas en el mismo contrato."},
]

export default function AcueductoRuralCaldas() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup type="service" faqItems={FAQ_SCHEMA} serviceName="Diseño Acueductos Rurales Caldas — BIC" serviceUrl="/servicios/acueducto-rural-caldas" />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado · Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Acueducto Rural y Veredal en Caldas<br />
            <span style={{ color: '#17A2B8' }}>Fincas Cafeteras · Comunidades Rurales</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña sistemas de acueducto rural y veredal
            en Caldas: captación, conducción, planta de tratamiento (PTAP), tanques y red de
            distribución. Atendemos Viterbo, Anserma, Riosucio, Supía, La Merced, Marmato,
            Chinchiná, Villamaría y todos los municipios del occidente y centro de Caldas.
            Cumplimiento de la Resolución 0330/2017 (RAS 2017). COPNIA.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Propuesta en 24 h — sin costo
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* TAGS */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Zona:</span>
          {['Viterbo', 'Anserma', 'Riosucio', 'Supía', 'La Merced', 'Marmato', 'Chinchiná', 'Caldas'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Diseño de acueducto rural en Caldas</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS.map((s) => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 10,
                }}>{s.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* MUNICIPIOS */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Cobertura</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Municipios de Caldas que atendemos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {MUNICIPIOS.map((m) => (
              <div key={m.nombre} style={{
                padding: 20, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 6,
                }}>{m.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.55,
                }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Acueducto rural en Caldas</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{
                background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: '24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10,
                }}>{item.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7,
                  margin: 0,
                }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LINKS */}
      <Section bg="#EFF6FB" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/diseno-hidraulico-eje-cafetero" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño Hidráulico Eje Cafetero — Manizales, Viterbo, Anserma, Caldas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/bombeo-fincas-cafe" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Sistemas de Bombeo para Fincas Cafeteras — Caldas · Eje Cafetero</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/viterbo-occidente-caldas" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Ingeniería Hidráulica en Viterbo y Occidente de Caldas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver página →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Su finca o comunidad necesita acueducto rural en Caldas?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Comparta la ubicación, el número de usuarios o hectáreas, y la fuente de
            abastecimiento disponible. Le enviamos propuesta técnica en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Propuesta en 24 h — sin costo
          </Btn>
        </div>
      </Section>
    </>
  )
}
