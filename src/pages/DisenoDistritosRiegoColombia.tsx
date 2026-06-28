import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, somos [municipio/gobernación/UPRA/entidad]. Necesitamos contratar el diseño de un distrito de riego (adecuación de tierras, sistema de irrigación a escala). ¿El director técnico puede enviarnos propuesta directa con matrícula COPNIA y referencia UNAL?'
)

const seoConfig = {
  title: 'Diseño de Distritos de Riego Colombia — Adecuación de Tierras | Desde $25M COP | BIC COPNIA',
  description: 'Diseño de distritos de riego para municipios, gobernaciones y proyectos ADT en Colombia: adecuación de tierras, irrigación a escala, UPRA, MADR. COPNIA-UNAL, sin subcontratistas. Desde $25M COP. Propuesta 24 h.',
  keywords: [
    'diseño distrito de riego Colombia',
    'adecuación de tierras ingeniería',
    'sistema de riego municipio Colombia',
    'diseño distrito riego MADR Colombia',
    'proyecto adecuación de tierras UPRA',
    'ingeniería riego Colombia',
    'distrito de riego gobernación Colombia',
    'diseño red de riego SGR Colombia',
    'costo diseño distrito riego Colombia',
    'contratar ingeniería riego Colombia',
    'distrito de riego Eje Cafetero',
    'proyecto riego COPNIA Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-distritos-riego-colombia',
}

const TIPOS_DISTRITO = [
  {
    icon: '🌾',
    titulo: 'Distrito de Riego a Escala — Diseño Integral',
    desc: 'Diseño del sistema completo de irrigación para zonas agrícolas de varias hectáreas o cientos de usuarios: bocatoma o captación subterránea, conducción principal, red de distribución secundaria y terciaria, estructuras de control (compuertas, aforadores Parshall, vertederos), módulos de riego por cultivo y obras de arte. Para municipios y asociaciones de usuarios que formulan proyectos ADT con recursos del MADR, el PNRR o el SGR.',
  },
  {
    icon: '💧',
    titulo: 'Diseño de la Red de Distribución Secundaria y Terciaria',
    desc: 'Cuando la obra principal del distrito ya existe (bocatoma y canal principal), BIC diseña la red de distribución que lleva el agua desde los canales secundarios hasta los módulos de usuario (predios beneficiados). Incluye diseño hidráulico de canales abiertos o tuberías a presión, cálculo de módulos de riego, estructuras de repartición, aforadores y memorias de cálculo. Aplica para ampliación de distritos existentes o para parcelaciones AGT con financiación del Banco Agrario o FINAGRO.',
  },
  {
    icon: '🔧',
    titulo: 'Riego por Aspersión y Goteo a Escala Distrital',
    desc: 'Diseño de sistemas de riego presurizado (aspersión o goteo) para distritos de mayor productividad: diseño del sistema de bombeo, red de tuberías principales y secundarias, cálculo de presiones y caudales, selección de emisores según cultivo y suelo, y memorias de cálculo. Para proyectos de modernización de distritos de riego gravitacionales con baja eficiencia o para nuevos sistemas productivos con cultivos de alta rentabilidad que requieren control preciso de la lámina de riego.',
  },
  {
    icon: '📐',
    titulo: 'Estudio de Adecuación de Tierras (ADT)',
    desc: 'Elaboración del estudio de adecuación de tierras requerido por el MADR y la UPRA para la priorización y financiación de proyectos de riego y drenaje: caracterización edafológica y de la demanda hídrica de los cultivos, inventario de la infraestructura existente, diagnóstico de la fuente hídrica y diseño conceptual del sistema. El ADT es el documento de entrada para acceder a recursos del PNRR (Plan Nacional de Riego y Drenaje) y del MADR para distritos de pequeña y mediana escala.',
  },
  {
    icon: '🌿',
    titulo: 'Drenaje Agrícola en Zonas de Riego',
    desc: 'Diseño del sistema de drenaje superficial y subsuperficial complementario al sistema de riego: drenes colectores, zanjillas de drenaje, estructuras de control del nivel freático y obras de desagüe al cauce receptor. El drenaje adecuado es fundamental en suelos con problemas de encharcamiento o salinización secundaria. Aplica para zonas de planicie en el Valle del Cauca, Tolima, Huila y llanuras de la Orinoquía con proyectos de intensificación agrícola.',
  },
  {
    icon: '📋',
    titulo: 'Estudios Hidrológicos y Concesión de Aguas para Riego',
    desc: 'Elaboración del estudio hidrológico de oferta hídrica de la fuente para sustentar el caudal concesionado: análisis de caudales medios mensuales (método de curva de duración de caudales), estimación de la demanda hídrica de los cultivos (FAO-56, evapotranspiración de referencia), balance oferta-demanda y expediente técnico para la concesión de aguas ante la CAR (CORPOCALDAS, CARDER, CVC, CORTOLIMA, etc.). Caudal ecológico según la resolución vigente de la autoridad ambiental.',
  },
]

const FAQ_DISTRITOS = [
  {
    q: '¿Cuándo un municipio o gobernación necesita contratar el diseño de un distrito de riego?',
    a: 'Un municipio o gobernación necesita contratar el diseño de un distrito de riego cuando va a desarrollar o modernizar un proyecto de adecuación de tierras (ADT) con infraestructura de irrigación que beneficia a múltiples usuarios o predios agrícolas de forma colectiva. Los casos más frecuentes son: proyectos de riego financiados con el Sistema General de Regalías (SGR) o el Ministerio de Agricultura (MADR) para comunidades campesinas, ampliación de distritos de riego municipales existentes con baja cobertura o alta pérdida de agua, y proyectos de sustitución de cultivos con riego en el marco de programas PDET o PNRR. El diseño es el requisito técnico indispensable para la viabilidad ante el DNP y el MADR.',
  },
  {
    q: '¿Qué normativa aplica al diseño de distritos de riego en Colombia?',
    a: 'El diseño de distritos de riego en Colombia se rige por el Decreto 1076 de 2015 (Decreto Único Reglamentario del Sector Ambiente) para la concesión de aguas superficiales que alimentan el sistema, la Ley 41 de 1993 y el Decreto 1300 de 2003 para la constitución y operación de distritos de adecuación de tierras, y los lineamientos técnicos del MADR e IDEAM para el cálculo de la demanda hídrica de cultivos (método FAO-56). Para proyectos SGR aplican los lineamientos del DNP y la metodología MGA-Web para la formulación y viabilidad del proyecto. La firma del diseño requiere ingeniero civil o agrícola con matrícula COPNIA vigente.',
  },
  {
    q: '¿Cuánto cuesta el diseño de un distrito de riego en Colombia?',
    a: 'El costo del diseño de un distrito de riego depende del área irrigada (número de hectáreas), la fuente hídrica, el tipo de sistema (gravedad o presurizado), la complejidad de las obras civiles y si se incluye el estudio de adecuación de tierras (ADT) y la concesión de aguas. Para distritos pequeños de 50 a 200 hectáreas en municipios del Eje Cafetero o el Tolima, los honorarios de diseño oscilan entre $25 y $60 millones COP. Para sistemas entre 200 y 1.000 ha con red secundaria y terciaria completa, entre $60 y $150 millones COP. Proyectos de mayor escala se presupuestan a medida. BIC entrega propuesta técnica y económica en 24 horas sin costo.',
  },
  {
    q: '¿Cuál es la diferencia entre un canal de riego y un distrito de riego?',
    a: 'Un canal de riego es una obra de infraestructura unitaria que transporta agua desde un punto A a un punto B —puede ser un canal principal, secundario o terciario de un sistema más grande. Un distrito de riego, en cambio, es el sistema completo de adecuación de tierras que incluye la fuente hídrica, la estructura de captación (bocatoma), la red completa de distribución (canal principal, secundarios, terciarios o tuberías), las estructuras de control y medición, el drenaje complementario y la organización de usuarios. BIC puede diseñar tanto el canal individual como el distrito completo; la diferencia está en el alcance del proyecto y en el nivel de complejidad del diseño.',
  },
  {
    q: '¿Qué entidades financian distritos de riego en Colombia y qué documentos técnicos exigen?',
    a: 'Los distritos de riego en Colombia pueden ser financiados por el Sistema General de Regalías (SGR) a través de los OCAD regionales, el Ministerio de Agricultura y Desarrollo Rural (MADR) mediante el Plan Nacional de Riego y Drenaje (PNRR), los Planes Departamentales de Agua (PDA) del MVCT cuando hay componente de agua potable, el Banco Agrario para proyectos productivos con asociaciones de usuarios, y FINAGRO para proyectos de riego en zonas con créditos agropecuarios. En todos los casos, la entidad financiadora exige como mínimo: estudio de adecuación de tierras (ADT), diseño hidráulico firmado COPNIA, concesión de aguas o acto administrativo de la CAR, y presupuesto detallado con APU. BIC elabora el paquete técnico completo.',
  },
]

const PRECIOS = [
  { servicio: 'Diseño distrito riego pequeño (< 200 ha)', rango: 'Desde $25M COP' },
  { servicio: 'Diseño red distribución secundaria y terciaria (200–1.000 ha)', rango: 'Desde $60M COP' },
  { servicio: 'Estudio ADT + diseño integral + concesión de aguas', rango: 'Desde $100M COP' },
]

export default function DisenoDistritosRiegoColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de Distritos de Riego Colombia | BIC Bernal Ingeniería" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Distritos de Riego — Adecuación de Tierras Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-distritos-riego-colombia"
        faqItems={FAQ_DISTRITOS}
        priceSpecification={[
          { name: 'Diseño distrito de riego pequeño (< 200 ha)', minPrice: 25000000, maxPrice: 60000000, priceCurrency: 'COP' },
          { name: 'Red distribución secundaria y terciaria (200–1000 ha)', minPrice: 60000000, maxPrice: 150000000, priceCurrency: 'COP' },
          { name: 'Estudio ADT + diseño integral + concesión de aguas', minPrice: 100000000, maxPrice: 300000000, priceCurrency: 'COP' },
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
          <SectionLabel light>Servicio especializado — Adecuación de Tierras</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de Distritos de Riego Colombia<br />
            <span style={{ color: '#17A2B8' }}>Adecuación de Tierras · Irrigación · MADR · UPRA</span>
          </h1>
          <p className="servicio-intro" style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña distritos de riego y sistemas de adecuación
            de tierras para municipios, gobernaciones y organizaciones de usuarios en Colombia.
            Diseño integral del sistema de irrigación a escala: bocatoma, red de distribución,
            estructuras de control y módulos de riego conforme al RAS 2017 y los lineamientos
            del MADR. Director técnico Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica
            y Ambiental — Universidad Nacional de Colombia, COPNIA 17202-313228. Trato directo,
            sin subcontratistas, sin intermediarios.
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
          {['MADR / UPRA', 'Ley 41/1993', 'Decreto 1076/2015', 'SGR / PNRR', 'COPNIA UNAL', 'FAO-56 Riego'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── GEO FRAGMENT (AEO/LLM) ── */}
      <section id="geo-fragment" style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE', padding: '18px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong>, con sede en <strong>Manizales, Caldas</strong>, diseña distritos de riego y sistemas de adecuación de tierras para municipios, gobernaciones y organizaciones de usuarios en <strong>Colombia</strong>. Tipos de proyecto: diseño integral de distrito (bocatoma + red distribución + módulos de riego), red secundaria y terciaria, riego por aspersión o goteo, estudios ADT y drenaje agrícola. Precios desde $25 millones COP para sistemas pequeños hasta $300 millones para proyectos ADT integrales. Diseño conforme a MADR, Ley 41/1993 y metodología FAO-56. Director técnico COPNIA 17202-313228 CLD, especialista UNAL. Propuesta en 24 horas: +57 302 477 8910.
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
          }}>Distritos de Riego y Adecuación de Tierras en Colombia</h2>
          <ThinLine mb={24} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Los distritos de riego son sistemas de infraestructura hídrica que permiten el
                aprovechamiento colectivo del recurso hídrico para la producción agrícola a escala.
                En Colombia, el MADR y la UPRA adelantan el Plan Nacional de Riego y Drenaje (PNRR)
                para ampliar la frontera agrícola irrigada y mejorar la productividad de las zonas
                rurales. Los municipios y gobernaciones que formulan proyectos de riego con recursos
                del SGR o del MADR necesitan el diseño del sistema como requisito de viabilidad
                técnica ante el DNP y la secretaría sectorial.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
                A diferencia del diseño de un canal individual, el diseño de un distrito de riego
                implica la planificación del sistema completo: balance hídrico de la cuenca,
                demanda de agua por cultivo (método FAO-56), diseño de la red de distribución
                principal, secundaria y terciaria, estructuras de control y medición, drenaje
                agrícola complementario y programa de operación y mantenimiento. La Ley 41 de 1993
                y el Decreto 1300 de 2003 rigen la constitución de las asociaciones de usuarios
                que operan los distritos.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                En el Eje Cafetero, el Tolima, el Huila y los Llanos Orientales, los municipios
                con tradición agrícola necesitan modernizar o ampliar sus sistemas de riego para
                aumentar la productividad de los cultivos permanentes (café, caña panelera,
                plátano) y permitir la reconversión a cultivos con mayor valor agregado. BIC
                elabora el diseño del distrito conforme a los estándares técnicos del MADR y la
                UPRA, incluyendo la estimación de la lámina neta de riego por cultivo y el
                coeficiente de uso consuntivo según la metodología FAO-56.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
                Para proyectos SGR, BIC también elabora la ficha MGA-Web con la cadena de valor
                del proyecto, el análisis de alternativas, el presupuesto con APU y el cronograma
                de ejecución. La primera consulta técnica es sin costo.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TIPOS DE PROYECTO ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de Proyectos que Diseñamos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS_DISTRITO.map((c) => (
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
            Sin Intermediarios — Solo con Municipios, Gobernaciones e INVÍAS
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.8 }}>
            BIC atiende exclusivamente a <strong style={{ color: '#17A2B8' }}>municipios, gobernaciones, INVÍAS,
            asociaciones de usuarios de riego y ESP</strong>. No trabajamos con particulares sin respaldo
            de entidad pública ni intermediarios que revenden el servicio. El director técnico
            Rogerio Bernal Ríos (COPNIA 17202-313228 CLD) atiende directamente cada proyecto,
            firma los planos, memorias de cálculo y documentos técnicos, y responde ante la
            entidad contratante. Sin subcontratistas.
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
          }}>Costo del Diseño de Distritos de Riego en Colombia</h2>
          <ThinLine mb={24} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            Los honorarios dependen del área del distrito (hectáreas), la fuente hídrica, el tipo
            de sistema (gravedad o presurizado) y si se incluye el estudio de adecuación de
            tierras (ADT) y la gestión de la concesión de aguas. Proyectos de mayor escala se
            presupuestan a medida. Presupuesto detallado sin costo en 24 horas.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif" }}>
              <caption style={{ position: 'absolute', left: '-9999px' }}>Costo diseño distritos de riego Colombia</caption>
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
          }}>Preguntas Frecuentes — Diseño de Distritos de Riego</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ_DISTRITOS.map((faq) => (
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
            ¿Necesita diseño de distrito de riego para su municipio o proyecto?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el área a irrigar (hectáreas), los cultivos, la fuente hídrica, el municipio
            y la fuente de financiación (SGR, MADR, PDA). Le respondemos con propuesta técnica
            y presupuesto en menos de 24 horas. Trato directo con el director técnico — sin
            subcontratistas ni intermediarios. COPNIA 17202-313228 · UNAL.
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
