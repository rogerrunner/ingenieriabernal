import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, somos [municipio/ESP/entidad]. Necesitamos contratar el diseño de un canal hidráulico (riego/drenaje/conducción). ¿El director técnico puede enviarnos propuesta directa con matrícula COPNIA y referencia UNAL?'
)

const seoConfig = {
  title: 'Contratar Diseño de Canales Hidráulicos Colombia — Riego, Drenaje, Conducción | Desde $10M COP | BIC COPNIA',
  description: 'Diseño de canales hidráulicos para municipios y ESP en Colombia: canales de riego, drenaje urbano, acequias y conducción. COPNIA-UNAL, sin subcontratistas. Desde $10M COP. Propuesta 24 h.',
  keywords: [
    'diseño canal hidráulico Colombia',
    'diseño canal de riego municipio Colombia',
    'diseño canal de drenaje Colombia',
    'acequia diseño hidráulico Colombia',
    'canal de conducción agua potable Colombia',
    'diseño canal de irrigación Colombia',
    'canal hidráulico ESP Colombia',
    'costo diseño canal riego Colombia',
    'contratar ingeniería canales Colombia',
    'diseño canal drenaje urbano Colombia',
    'diseño canal hidráulico Eje Cafetero',
    'ingeniería canal hidráulico Caldas Risaralda',
    'canal riego RAS 2017 Colombia',
    'diseño canal hidráulico COPNIA Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-canales-hidraulicos-colombia',
}

const TIPOS_CANAL = [
  {
    icon: '🌾',
    titulo: 'Canal de Riego Agrícola',
    desc: 'Diseño del sistema de distribución de agua para riego de cultivos desde la bocatoma hasta los predios. Incluye canal principal, canales secundarios y terciarios, módulo de riego según cultivo, estructuras de control (compuertas, aforadores Parshall) y memoria de cálculo. Para municipios con distritos de riego, asociaciones de usuarios y proyectos productivos agroindustriales.',
  },
  {
    icon: '💧',
    titulo: 'Canal de Conducción para Acueducto',
    desc: 'Diseño del canal o tubería de aducción desde la bocatoma hasta la PTAP o el tanque de almacenamiento. Cálculo de la sección hidráulica óptima, verificación de energía específica, pérdidas de carga y obras de arte (caídas, rápidas, sifones, alcantarillas de cruce). Cumple RAS 2017 y Resolución 0330. Para acueductos municipales y ESP financiados con SGR o PDA.',
  },
  {
    icon: '🏗️',
    titulo: 'Canal de Drenaje Urbano y Rural',
    desc: 'Diseño de canales abiertos para el drenaje de zonas urbanizadas, vías y áreas industriales o agrícolas. Análisis de frecuencia de lluvias (curvas IDF IDEAM), cálculo de caudales de diseño, dimensionamiento de sección y verificación de velocidades no erosivas. Para alcaldías con programas de drenaje, promotores de urbanizaciones y planes maestros de alcantarillado pluvial.',
  },
  {
    icon: '🔧',
    titulo: 'Canal de Encauzamiento y Protección',
    desc: 'Diseño de canales de encauzamiento para regular el recorrido de quebradas y ríos en zonas urbanizadas o con riesgo de inundación. Incluye diseño hidráulico de sección, muros de contención, disipadores de energía y revestimientos. Aplica para obras de reducción del riesgo hídrico en municipios con inundaciones recurrentes.',
  },
  {
    icon: '🌿',
    titulo: 'Acequia y Canal Veredal',
    desc: 'Diseño de acequias y canales para comunidades rurales que captan agua de quebradas o ríos para consumo doméstico, riego o uso pecuario. Incluye trazo del canal, diseño de la sección en tierra o con revestimiento, estructuras de captación y distribución. Para proyectos SGR en municipios categoría 5 y 6, comunidades indígenas y afrocolombianas con necesidad hídrica.',
  },
  {
    icon: '📐',
    titulo: 'Memorias, Planos y Especificaciones',
    desc: 'Entrega completa: memoria de cálculo hidráulico con secciones de diseño y perfiles longitudinales, planos en AutoCAD (planta, perfil, secciones tipo y obras de arte), especificaciones técnicas de materiales y presupuesto APU. Firmado por director técnico con matrícula COPNIA vigente. Listo para radicación ante CAR, MVCT, INVÍAS o la entidad financiadora del proyecto.',
  },
]

const FAQ_CANALES = [
  {
    q: '¿Cuándo un municipio o ESP necesita contratar el diseño de un canal hidráulico?',
    a: 'Un municipio o ESP necesita contratar el diseño de un canal cuando va a construir o rehabilitar un sistema de distribución de agua potable desde la bocatoma (canal de aducción), cuando va a implementar un sistema de riego para comunidades agrícolas con recursos SGR o PDA, o cuando necesita solucionar problemas de drenaje pluvial en zonas urbanas o rurales. El diseño es requisito indispensable para obtener la licencia ambiental de la CAR, acceder a recursos del Sistema General de Regalías y contratar las obras con garantías técnicas.',
  },
  {
    q: '¿Qué normativa colombiana aplica al diseño de canales hidráulicos?',
    a: 'Los canales de acueducto y distribución de agua potable se diseñan conforme al RAS 2017 (Resolución 0330 del MVCT), que establece criterios de velocidad, capacidad hidráulica y materiales para sistemas públicos de agua potable. Los canales de riego se rigen por el Decreto 1076 de 2015 y los lineamientos del MADR para distritos de riego. Los canales de drenaje urbano deben cumplir los planes maestros municipales y la Resolución 0330. En todos los casos, el diseño debe ser firmado por un ingeniero con matrícula COPNIA vigente.',
  },
  {
    q: '¿Cuánto cuesta el diseño de un canal hidráulico para una obra de infraestructura pública en Colombia?',
    a: 'El costo del diseño depende de la longitud del canal, la complejidad de las obras de arte y si se requiere levantamiento topográfico de campo. Para canales de riego o drenaje hasta 1 km, los honorarios oscilan entre $10 y $25 millones COP. Para canales de conducción de agua potable entre 1 y 5 km, entre $25 y $60 millones. Sistemas de canales más complejos con múltiples afluentes o estructuras hidráulicas especiales se presupuestan a medida. BIC entrega propuesta técnica y económica en menos de 24 horas sin costo.',
  },
]

const PRECIOS = [
  { servicio: 'Canal de riego o drenaje simple (< 1 km)', rango: 'Desde $10M COP' },
  { servicio: 'Canal de conducción acueducto (1–5 km)', rango: 'Desde $25M COP' },
  { servicio: 'Sistema de canales integral (diseño completo)', rango: 'Desde $60M COP' },
]

export default function DisenoCanalesHidraulicosColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de Canales Hidráulicos Colombia | BIC Bernal Ingeniería" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Canales Hidráulicos — Riego, Drenaje y Conducción Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-canales-hidraulicos-colombia"
        faqItems={FAQ_CANALES}
        priceSpecification={[
          { name: 'Canal de riego o drenaje simple (< 1 km)', minPrice: 10000000, maxPrice: 25000000, priceCurrency: 'COP' },
          { name: 'Canal de conducción acueducto (1–5 km)', minPrice: 25000000, maxPrice: 60000000, priceCurrency: 'COP' },
          { name: 'Sistema de canales integral', minPrice: 60000000, maxPrice: 150000000, priceCurrency: 'COP' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado — Ingeniería Hidráulica</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de Canales Hidráulicos Colombia<br />
            <span style={{ color: '#17A2B8' }}>Riego · Drenaje · Conducción · Acequias</span>
          </h1>
          <p className="servicio-intro" style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña canales hidráulicos para municipios, ESP,
            gobernaciones y promotores de infraestructura en Colombia. Canales de riego agrícola,
            acequias veredales, canales de conducción para acueductos públicos y sistemas de drenaje
            pluvial urbano. Director técnico Rogerio Bernal Ríos, Especialista en Ingeniería
            Hidráulica y Ambiental — Universidad Nacional de Colombia, COPNIA 17202-313228. Trato
            directo, sin subcontratistas, sin intermediarios.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Solicitar propuesta técnica
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['RAS 2017 Res. 0330', 'Decreto 1076/2015', 'SGR / PDA', 'COPNIA UNAL', 'Manning / HEC-RAS'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── GEO FRAGMENT (AEO/LLM) ── */}
      <section id="geo-fragment" style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE', padding: '18px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong>, con sede en <strong>Manizales, Caldas</strong>, diseña canales hidráulicos para municipios, ESP y promotores de infraestructura en el <strong>Eje Cafetero y Colombia</strong>. Tipos de canales: riego agrícola, drenaje urbano, conducción de agua potable, acequias veredales y encauzamiento de ríos. Precios desde $10 millones COP para canales simples hasta $150 millones para sistemas integrales. Director técnico COPNIA 17202-313228 CLD, especialista UNAL. Trato directo sin subcontratistas ni intermediarios. Propuesta en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto técnico y normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Canales Hidráulicos para Infraestructura Pública en Colombia</h2>
          <ThinLine mb={24} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Los canales hidráulicos son el componente más versátil de la infraestructura hídrica pública
                en Colombia: llevan agua potable desde las bocatomas hasta los tanques de almacenamiento,
                distribuyen el riego en distritos agrícolas, drenan aguas lluvias en zonas urbanas y
                encauzan quebradas para reducir el riesgo de inundación. Para municipios de categoría
                4, 5 y 6, el canal es frecuentemente la solución más económica y durable frente a
                tuberías de presión en pendientes pronunciadas.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
                El diseño de un canal hidráulico exige combinar la hidrología de la cuenca (caudal de
                diseño para el período de retorno adecuado), la hidráulica del flujo en canales abiertos
                (ecuación de Manning, criterios de velocidades, Froude) y la ingeniería de estructuras
                civiles (obras de arte como rápidas, caídas, sifones y estructuras de medición). Un
                diseño incompleto o errado genera desbordamientos, erosión del canal y pérdidas del
                recurso hídrico captado.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                En Colombia, los municipios que prestan servicios de acueducto, las ESP regionales y
                los promotores de proyectos agroindustriales con financiación del SGR o del Banco
                Agrario necesitan que el diseño del canal sea elaborado por un profesional con tarjeta
                COPNIA vigente y firmado en los planos. Sin este requisito, la CAR no otorga la
                concesión de aguas y los proyectos no pasan la viabilidad técnica del DNP.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
                BIC elabora los diseños de canales con modelación hidráulica en HEC-RAS o cálculo
                por la ecuación de Manning según la complejidad del proyecto, entrega memorias de
                cálculo, planos en AutoCAD y especificaciones técnicas firmadas listas para
                radicación ante la CAR, el MVCT, el MADR o la entidad financiadora. La primera
                consulta técnica es sin costo.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TIPOS DE CANAL ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de Canales que Diseñamos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS_CANAL.map((c) => (
              <div key={c.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 10,
                }}>{c.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Honorarios de referencia</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Costo del Diseño de Canales Hidráulicos</h2>
          <ThinLine mb={24} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            Los honorarios dependen de la longitud del canal, la complejidad de las obras de arte y si
            se requiere levantamiento topográfico de campo. Valores orientativos para contratos de
            consultoría pública o privada en Colombia. Presupuesto detallado sin costo.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif" }}>
              <caption style={{ position: 'absolute', left: '-9999px' }}>Costo diseño canales hidráulicos Colombia</caption>
              <thead>
                <tr style={{ background: '#003B6F', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Tipo de proyecto</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Honorarios</th>
                </tr>
              </thead>
              <tbody>
                {PRECIOS.map((p, i) => (
                  <tr key={p.servicio} style={{ background: i % 2 === 0 ? '#F8FAFC' : '#fff', borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '12px 16px', color: '#475569', fontSize: 14 }}>{p.servicio}</td>
                    <td style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 700, color: '#17A2B8', fontSize: 14, whiteSpace: 'nowrap' }}>{p.rango}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#94A3B8', fontSize: 12, marginTop: 12 }}>
            Precios en pesos colombianos. IVA no incluido. Sujeto a alcance definitivo del proyecto. Propuesta ajustada sin costo en 24 h.
          </p>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Preguntas Frecuentes — Diseño de Canales Hidráulicos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ_CANALES.map((faq) => (
              <div key={faq.q} className="faq-item" style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 15, marginBottom: 10,
                }}>{faq.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0,
                }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FORMULARIO ── */}
      <Section>
        <QuoteFormInline />
      </Section>

      {/* ── CTA FINAL ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Necesita diseño de canal hidráulico para su proyecto?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de canal, la longitud aproximada, el municipio y la fuente de
            financiación. Le respondemos con propuesta técnica y presupuesto en menos de 24 horas.
            Trato directo con el director técnico — sin subcontratistas ni intermediarios.
            COPNIA 17202-313228 · UNAL.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            Propuesta en 24 h — sin costo
          </Btn>
        </div>
      </Section>
    </>
  )
}
