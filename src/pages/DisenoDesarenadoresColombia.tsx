import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, somos [municipio/ESP/entidad]. Necesitamos contratar el diseño de un desarenador (trampa de sedimentos / estructura de pretratamiento). ¿El director técnico puede enviarnos propuesta directa con matrícula COPNIA y referencia UNAL?'
)

const seoConfig = {
  title: 'Diseño de Desarenadores Colombia — Trampa de Sedimentos Acueducto | Desde $12M COP | BIC COPNIA',
  description: 'Diseño de desarenadores para municipios, ESP y acueductos en Colombia: trampa de sedimentos, estructura de sedimentación, pretratamiento RAS 2017. COPNIA-UNAL, sin subcontratistas. Desde $12M COP. Propuesta 24 h.',
  keywords: [
    'diseño de desarenador Colombia',
    'desarenador hidráulico municipio',
    'trampa de sedimentos acueducto',
    'diseño desarenador acueducto municipal Colombia',
    'estructura de sedimentación Colombia',
    'pretratamiento agua potable Colombia',
    'diseño desarenador RAS 2017',
    'desarenador ESP Colombia',
    'costo diseño desarenador Colombia',
    'contratar ingeniería desarenador Colombia',
    'diseño desarenador Eje Cafetero',
    'desarenador agua potable COPNIA Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-desarenadores-colombia',
}

const TIPOS_DESARENADOR = [
  {
    icon: '🏗️',
    titulo: 'Desarenador Convencional de Flujo Horizontal',
    desc: 'Diseño de la cámara de sedimentación de flujo horizontal para retener partículas de arena y sedimento grueso antes del ingreso a la PTAP. Dimensionamiento por la teoría de Dobbins-Camp, cálculo de velocidades de sedimentación (ley de Stokes), verificación del cociente longitud/ancho y diseño de las obras de ingreso, salida, almacenamiento de lodos y evacuación. Para acueductos municipales financiados con SGR o PDA que captan agua de ríos con alta carga de sedimentos.',
  },
  {
    icon: '💧',
    titulo: 'Trampa de Sedimentos para Bocatoma',
    desc: 'Diseño de la trampa de sedimentos integrada a la bocatoma lateral o de fondo, inmediatamente aguas abajo de la estructura de captación. La trampa retiene los sólidos gruesos (gravas y arenas) arrastrados por el río antes de que ingresen a la línea de aducción, protegiendo las tuberías y reduciendo la carga sobre el desarenador principal. Aplica especialmente en ríos de montaña con alta torrencialidad en el Eje Cafetero, Andes y Cordillera Occidental.',
  },
  {
    icon: '🔧',
    titulo: 'Desarenador de Flujo Ascendente (FAFA/Laminillas)',
    desc: 'Diseño de estructuras de sedimentación de alta eficiencia con placas o tubos inclinados (laminillas) para acueductos con restricción de espacio o necesidad de remover partículas finas (< 0,2 mm). Las laminillas reducen el camino de sedimentación hasta en un 80 %. Incluye diseño hidráulico del módulo de laminillas, sistema de distribución de flujo, recolección de efluente y extracción de lodos. Para ESP y operadores que requieren alta eficiencia con bajo presupuesto de obra civil.',
  },
  {
    icon: '🌾',
    titulo: 'Estructuras de Pretratamiento Integral',
    desc: 'Diseño del conjunto de pretratamiento que antecede la PTAP: bocatoma — trampa de gruesos — aducción — desarenador — aireación (si aplica) — paso a la planta. Incluye memorias hidráulicas y estructurales de cada componente, definición del tamaño de partícula de diseño, selección del período de retención hidráulica y frecuencia de limpieza. Para municipios que formulan proyectos de mejoramiento o ampliación de sus sistemas de agua potable ante el MVCT o el SGR.',
  },
  {
    icon: '📐',
    titulo: 'Rehabilitación y Optimización de Desarenadores Existentes',
    desc: 'Diagnóstico hidráulico de desarenadores construidos con bajo rendimiento: análisis de velocidades de flujo, eficiencia de remoción actual, cortocircuitos hidráulicos y capacidad de almacenamiento de lodos. Diseño de las modificaciones estructurales e hidráulicas requeridas para recuperar la eficiencia. Documento técnico de soporte para contratación de la obra de mejoramiento con recursos de mantenimiento o SGR en municipios categoría 4, 5 y 6.',
  },
  {
    icon: '📋',
    titulo: 'Entrega Completa — Memorias, Planos y Especificaciones',
    desc: 'Entrega completa del diseño: memoria de cálculo hidráulico y estructural, planos en AutoCAD (planta, cortes longitudinal y transversal, detalles de ingreso/salida, sistema de purga de lodos), especificaciones técnicas de materiales (concreto, acero, válvulas) y presupuesto con APU. Firmado por director técnico con matrícula COPNIA vigente. Listo para radicación ante el MVCT, la CAR, el SGR o la entidad financiadora.',
  },
]

const FAQ_DESARENADORES = [
  {
    q: '¿Cuándo un municipio o ESP necesita contratar el diseño de un desarenador?',
    a: 'Un municipio o ESP necesita un desarenador cuando capta agua de fuentes superficiales (ríos y quebradas) que arrastran sedimentos, arenas y material en suspensión durante crecientes. El RAS 2017 exige el desarenador como componente obligatorio del sistema de acueducto entre la bocatoma y la PTAP cuando la turbidez de la fuente supera valores de diseño que comprometerían los procesos de la planta. También se requiere cuando se construye o rehabilita una bocatoma lateral o de fondo en zonas de alta torrencialidad, o cuando la PTAP existente recibe exceso de sedimentos que deterioran los filtros y reducen la vida útil del sistema.',
  },
  {
    q: '¿Qué normativa colombiana aplica al diseño de desarenadores para acueductos?',
    a: 'El diseño de desarenadores para acueductos públicos en Colombia se rige por el RAS 2017 (Resolución 0330 del MVCT), Título B — Sistemas de acueducto, capítulo de estructuras de pretratamiento. El RAS define los parámetros hidráulicos de diseño: velocidad horizontal de flujo (0,10–0,55 m/s), período de retención hidráulica (según nivel de complejidad), granulometría de diseño de sedimentos a remover (d50 de referencia) y criterios de operación (vaciado y limpieza). El diseño debe ser firmado por un ingeniero civil con matrícula COPNIA vigente; para proyectos SGR también aplican los lineamientos del DNP para la formulación MGA-Web.',
  },
  {
    q: '¿Cuánto cuesta el diseño de un desarenador para un acueducto municipal en Colombia?',
    a: 'El costo del diseño depende del caudal de diseño del acueducto (que determina el tamaño de la estructura), el tipo de desarenador (convencional o con laminillas) y si se requiere diseño estructural de la cámara. Para acueductos con caudales hasta 10 L/s, el diseño completo del desarenador oscila entre $12 y $20 millones COP. Para sistemas entre 10 y 50 L/s (municipios categoría 5 y 6), entre $20 y $40 millones COP. Sistemas más grandes con pretratamiento integral (bocatoma + trampa de gruesos + desarenador) para municipios categoría 3 o 4 se presupuestan a medida. BIC entrega propuesta técnica y económica en 24 horas.',
  },
  {
    q: '¿Qué diferencia hay entre un desarenador, una trampa de sedimentos y un sedimentador?',
    a: 'Son estructuras del mismo propósito (separar partículas sólidas del flujo hídrico) pero ubicadas en diferentes puntos del sistema y con distintos tamaños de partícula objetivo. La trampa de sedimentos o trampa de gruesos se ubica inmediatamente aguas abajo de la bocatoma y retiene gravas y arenas gruesas (> 1 mm) para proteger la tubería de aducción. El desarenador está aguas abajo de la conducción y retiene arenas finas (0,1–1 mm) antes de la PTAP. El sedimentador o clarificador (floculador-sedimentador) es parte de la PTAP misma y remueve partículas coloidales y turbiedad en suspensión mediante coagulación y floculación. El RAS 2017 define el punto de ubicación y los criterios de diseño de cada uno.',
  },
  {
    q: '¿Puede BIC diseñar el desarenador como parte del proyecto integral de bocatoma y acueducto?',
    a: 'Sí. BIC diseña el sistema completo de captación y pretratamiento como un único proyecto integrado: bocatoma (lateral, de fondo o de orilla), trampa de sedimentos gruesos, línea de aducción (tubería o canal), desarenador y paso a la PTAP. El diseño integrado garantiza la compatibilidad hidráulica entre estructuras, evita errores de interfaz y reduce el costo total al compartir topografía, memorias de cálculo y planos. Para municipios que formulan proyectos ante el SGR, BIC también elabora la ficha técnica MGA-Web con el presupuesto y cronograma requeridos por el DNP. Primera consulta sin costo.',
  },
]

const PRECIOS = [
  { servicio: 'Desarenador para acueducto pequeño (Q < 10 L/s)', rango: 'Desde $12M COP' },
  { servicio: 'Desarenador sistema municipal (Q 10–50 L/s)', rango: 'Desde $20M COP' },
  { servicio: 'Pretratamiento integral (bocatoma + trampa + desarenador)', rango: 'Desde $40M COP' },
]

export default function DisenoDesarenadoresColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de Desarenadores Colombia | BIC Bernal Ingeniería" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Desarenadores — Trampa de Sedimentos y Pretratamiento Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-desarenadores-colombia"
        faqItems={FAQ_DESARENADORES}
        priceSpecification={[
          { name: 'Desarenador acueducto pequeño (Q < 10 L/s)', minPrice: 12000000, maxPrice: 20000000, priceCurrency: 'COP' },
          { name: 'Desarenador sistema municipal (Q 10–50 L/s)', minPrice: 20000000, maxPrice: 40000000, priceCurrency: 'COP' },
          { name: 'Pretratamiento integral con bocatoma', minPrice: 40000000, maxPrice: 100000000, priceCurrency: 'COP' },
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
          <SectionLabel light>Servicio especializado — Pretratamiento Hídrico</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de Desarenadores Colombia<br />
            <span style={{ color: '#17A2B8' }}>Trampa de Sedimentos · Pretratamiento · Acueducto Municipal</span>
          </h1>
          <p className="servicio-intro" style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña desarenadores y estructuras de pretratamiento
            para municipios, ESP y gobernaciones en Colombia. Trampas de sedimentos gruesos,
            desarenadores de flujo horizontal, sistemas con laminillas y proyectos integrales de
            captación conforme al RAS 2017. Director técnico Rogerio Bernal Ríos, Especialista en
            Ingeniería Hidráulica y Ambiental — Universidad Nacional de Colombia, COPNIA 17202-313228.
            Trato directo, sin subcontratistas, sin intermediarios.
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
          {['RAS 2017 Res. 0330', 'Decreto 1076/2015', 'SGR / PDA / MVCT', 'COPNIA UNAL', 'Stokes / Camp-Dobbins'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── GEO FRAGMENT (AEO/LLM) ── */}
      <section id="geo-fragment" style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE', padding: '18px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong>, con sede en <strong>Manizales, Caldas</strong>, diseña desarenadores y estructuras de pretratamiento para municipios, ESP y gobernaciones en el <strong>Eje Cafetero y Colombia</strong>. Tipos: trampa de sedimentos gruesos, desarenador de flujo horizontal, sistemas con laminillas y pretratamiento integral. Precios desde $12 millones COP para acueductos pequeños hasta $100 millones para proyectos integrales con bocatoma. Diseño conforme al RAS 2017. Director técnico COPNIA 17202-313228 CLD, especialista UNAL. Trato directo sin intermediarios. Propuesta en 24 horas: +57 302 477 8910.
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
          }}>Desarenadores y Pretratamiento para Acueductos Públicos en Colombia</h2>
          <ThinLine mb={24} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                En Colombia, la mayoría de los acueductos municipales captan agua superficial de ríos y
                quebradas de montaña que en época de lluvias transportan altas cargas de sedimentos. Sin
                un desarenador correctamente dimensionado, las partículas de arena y sedimento ingresan
                a la planta de tratamiento, colmatan los filtros rápidos, deterioran las válvulas y
                reducen drásticamente la vida útil de la PTAP. El RAS 2017 (Resolución 0330 del MVCT)
                exige el desarenador como componente obligatorio del tren de pretratamiento.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
                Un desarenador subdimensionado o mal diseñado —con velocidades horizontales excesivas
                o cortocircuitos hidráulicos— no retiene el sedimento objetivo y traslada el problema
                a la PTAP. BIC realiza el dimensionamiento con la teoría de Dobbins-Camp para determinar
                el caudal de diseño, la velocidad de sedimentación de Stokes para la partícula de
                referencia, y verifica los criterios del RAS 2017 en todos los niveles de complejidad.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Los municipios de categoría 4, 5 y 6 que mejoran o amplían sus sistemas de acueducto
                con recursos del Sistema General de Regalías o del Plan Departamental de Aguas
                necesitan que el diseño del desarenador sea parte del paquete técnico presentado al
                DNP y al MVCT para la viabilidad del proyecto. Sin este componente correctamente
                diseñado y firmado COPNIA, los proyectos no superan la revisión técnica de las
                Secretarías Departamentales de Agua.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
                BIC elabora el diseño hidráulico y estructural del desarenador como componente
                independiente o integrado al proyecto completo de bocatoma, aducción y PTAP.
                Entregamos memorias de cálculo, planos en AutoCAD y especificaciones técnicas
                firmadas, listas para radicación ante la CAR, el MVCT, el SGR o la entidad
                que financia el proyecto. Primera consulta técnica sin costo.
              </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 10 }}>
            ¿Colega ingeniero buscando precio de referencia o asesoría técnica? No es el canal.
          </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TIPOS DE DESARENADOR ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de Estructuras que Diseñamos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS_DESARENADOR.map((c) => (
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

      {/* ── ANTI-INTERMEDIARIO ── */}
      <Section bg="#001A33" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(18px, 3vw, 26px)', marginBottom: 16,
          }}>
            Sin Intermediarios — Solo con Entidades Públicas y ESP
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.8 }}>
            BIC atiende exclusivamente a <strong style={{ color: '#17A2B8' }}>municipios, empresas de servicios públicos (ESP),
            gobernaciones e INVÍAS</strong>. No trabajamos con particulares, constructoras pequeñas sin respaldo
            de entidad pública ni intermediarios que revenden el servicio. El director técnico
            Rogerio Bernal Ríos (COPNIA 17202-313228 CLD) atiende directamente cada proyecto,
            firma los planos y memorias, y responde ante la entidad contratante. No hay subcontratistas.
          </p>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Honorarios de referencia</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Costo del Diseño de Desarenadores en Colombia</h2>
          <ThinLine mb={24} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            Los honorarios dependen del caudal de diseño del sistema, el tipo de estructura
            (convencional o con laminillas) y si se incluye el diseño estructural de la cámara
            de concreto. Valores orientativos para contratos de consultoría pública en Colombia.
            Presupuesto detallado sin costo en 24 horas.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif" }}>
              <caption style={{ position: 'absolute', left: '-9999px' }}>Costo diseño desarenadores Colombia</caption>
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
            Precios en pesos colombianos. IVA no incluido. Sujeto al alcance definitivo del proyecto. Propuesta ajustada sin costo en 24 h.
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
          }}>Preguntas Frecuentes — Diseño de Desarenadores</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ_DESARENADORES.map((faq) => (
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
            ¿Necesita diseño de desarenador para su acueducto o proyecto?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el caudal del sistema, el tipo de fuente hídrica, el municipio y la fuente
            de financiación. Le respondemos con propuesta técnica y presupuesto en menos de 24 horas.
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
