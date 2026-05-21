import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, tengo una parcelación o condominio rural y necesito el diseño de la PTAP para el acueducto privado. ¿Pueden asesorarme?')

const seoConfig = {
  title: 'Diseño de PTAP para Acueductos Privados — Parcelaciones y Condominios | BIC',
  description: 'BIC diseña plantas de tratamiento de agua potable (PTAP) para acueductos privados de parcelaciones, condominios y proyectos rurales-residenciales en Colombia. RAS 2017. Firmado COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: [
    'PTAP acueducto privado Colombia',
    'diseño PTAP parcelación Colombia',
    'planta agua potable condominio rural Colombia',
    'PTAP proyecto residencial rural RAS 2017',
    'acueducto privado parcelación Colombia diseño',
    'PTAP municipios Colombia',
    'planta agua potable municipio Colombia',
    'diseño PTAP rural Colombia',
    'planta potabilizadora municipio',
    'agua potable comunidad rural Colombia',
    'planta tratamiento agua potable pequeño municipio',
    'PTAP veredal Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/ptap-municipios-colombia',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Diseño de PTAP para Municipios en Colombia',
  description: 'Diseño de plantas de tratamiento de agua potable para municipios con regalías SGR e IRCA alto en Colombia. RAS 2017, Res. 0330/2017.',
  url: 'https://ingenieriabernal.co/ptap-municipios-colombia',
  serviceType: 'Diseño de Plantas de Tratamiento de Agua Potable',
  areaServed: ['Colombia', 'Caldas', 'Risaralda', 'Quindío', 'Boyacá', 'Nariño', 'Cauca', 'Putumayo'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bernal Ingeniería Consultores — BIC',
    url: 'https://ingenieriabernal.co',
    telephone: '+573024778910',
  },
}

const TIPOS = [
  {
    icon: '🏡',
    titulo: 'PTAP para parcelaciones y condominios privados',
    desc: 'El caso más frecuente en proyectos rurales-residenciales de gran escala: la parcelación o condominio de más de 20 viviendas necesita su propio sistema de agua potable cuando no hay acueducto municipal disponible. BIC diseña la PTAP completa conforme al RAS 2017 — captación, planta de tratamiento y red de distribución — con planos constructivos, memoria de cálculo y manual de operación firmados COPNIA. El diseño incluye la concesión de aguas ante la CAR.',
  },
  {
    icon: '🏗️',
    titulo: 'PTAP para proyectos urbanísticos privados con fuente propia',
    desc: 'Urbanizaciones y loteos en zona rural o periurbana donde la ESP no cubre el predio. BIC dimensiona la PTAP según el número de viviendas proyectadas, el horizonte de diseño de 25 años y la calidad del agua cruda de la fuente. Tecnología seleccionada según turbidez, color y parámetros fisicoquímicos: filtración lenta, floculación-sedimentación o planta compacta modular.',
  },
  {
    icon: '🏘️',
    titulo: 'PTAP para acueductos comunitarios rurales',
    desc: 'Diseño de plantas de tratamiento para acueductos comunitarios y Juntas de Acción Comunal que atienden entre 50 y 500 viviendas rurales. Tecnologías de bajo costo y fácil operación: filtros lentos, filtros de flujo ascendente y desinfección por cloración. Entrega de planos, memoria de cálculo y manual de operación firmados COPNIA.',
  },
  {
    icon: '🏛️',
    titulo: 'PTAP para cabeceras municipales con IRCA alto',
    desc: 'Diagnóstico del IRCA (Índice de Riesgo de Calidad del Agua) actual y diseño del tren de tratamiento para cumplir la Resolución 2115/2007. Para municipios con IRCA en categoría de riesgo alto o muy alto, BIC diseña la PTAP completa (coagulación, floculación, sedimentación, filtración rápida, desinfección) con financiación SGR o del Ministerio de Vivienda.',
  },
]

const FINANCIACION = [
  { fuente: 'SGR — Regalías', desc: 'Sistema General de Regalías para municipios productores o de impacto. BIC formula el proyecto en MGA-Web y acompaña la presentación ante el OCAD.' },
  { fuente: 'Ministerio de Vivienda', desc: 'Recursos del Viceministerio de Agua y Saneamiento para municipios con IRCA alto o sistemas sin tratamiento.' },
  { fuente: 'SGP — Agua Potable', desc: 'Sistema General de Participaciones — destinación específica para agua potable en municipios menores de 25.000 habitantes.' },
  { fuente: 'FINDETER', desc: 'Crédito blando para ESP municipales con proyectos de mejoramiento de calidad del agua. BIC apoya los estudios técnicos requeridos.' },
]

const FAQ = [
  {
    q: '¿Mi parcelación o condominio necesita PTAP propia si no hay acueducto municipal?',
    a: 'Sí, si el predio no está dentro del área de servicio de una Empresa Prestadora (ESP) del servicio de acueducto, o si la ESP no tiene la capacidad de extensión, el promotor debe diseñar y construir el acueducto privado con su propia PTAP. La Ley 142 de 1994 y el RAS 2017 regulan este tipo de sistema. BIC diseña la PTAP, la red de distribución y tramita la concesión de aguas ante la CAR en un solo proceso integrado.',
  },
  {
    q: '¿Cuánto tiempo tarda el diseño de la PTAP para una parcelación?',
    a: 'Para una parcelación o condominio de 20 a 50 viviendas, el diseño completo toma entre 4 y 6 semanas desde la entrega del análisis de calidad del agua cruda y los datos básicos del proyecto (número de viviendas, localización). El tiempo incluye: caracterización de la fuente, diseño del tren de tratamiento con ensayo de jarras, planos constructivos, memoria de cálculo RAS 2017 y manual de operación. BIC puede adelantar la concesión de aguas en paralelo.',
  },
  {
    q: '¿Qué fuentes de agua se pueden usar para el acueducto privado de una parcelación?',
    a: 'Las más frecuentes en Colombia son: toma de río o quebrada (bocatoma de fondo o lateral), manantial (nacimiento de agua), pozo profundo o aljibes. Cada fuente requiere una concesión de aguas diferente ante la CAR. La calidad del agua cruda determina el tipo de tratamiento necesario: una fuente de montaña limpia puede requerir solo filtración y cloración; un río con turbidez alta en invierno puede necesitar planta de tratamiento completa. BIC evalúa la fuente antes de diseñar.',
  },
  {
    q: '¿BIC puede diseñar la PTAP y también formular el proyecto para el SGR (para municipios)?',
    a: 'Sí. Para municipios con IRCA alto, BIC diseña la PTAP completa firmada COPNIA y formula el proyecto en MGA-Web del DNP para presentación ante el OCAD. Esto evita contratar firma de diseño y formuladora por separado. BIC tiene contratos verificables en SECOP I con alcaldías que usaron este servicio integrado.',
  },
]

export default function ServicioPTAPColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de PTAP para Acueductos Privados — Parcelaciones y Municipios Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/ptap-municipios-colombia"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'PTAP para parcelación pequeña (20–50 viviendas)', minPrice: 8000000, maxPrice: 18000000, priceCurrency: 'COP', description: 'Incluye diseño del tren de tratamiento, planos constructivos, memoria RAS 2017, manual de operación y firma COPNIA' },
          { name: 'PTAP para condominio o urbanización (50–200 viviendas)', minPrice: 18000000, maxPrice: 35000000, priceCurrency: 'COP', description: 'Caracterización de fuente, diseño completo, concesión de aguas CAR y coordinación con ESP' },
          { name: 'PTAP municipal con formulación SGR (MGA-Web)', minPrice: 30000000, maxPrice: 70000000, priceCurrency: 'COP', description: 'Diseño firmado COPNIA + formulación en MGA-Web DNP para presentación ante OCAD' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Agua potable · Acueductos privados · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de PTAP para Acueductos Privados<br />
            <span style={{ color: '#17A2B8' }}>Parcelaciones, Condominios y Proyectos Rurales</span>
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Si tu parcelación o condominio no tiene acceso al acueducto municipal, necesita su propio sistema de agua potable — BIC lo diseña conforme al RAS 2017
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 28, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña plantas de tratamiento de agua potable (PTAP) para acueductos privados de parcelaciones, condominios y proyectos rurales-residenciales en Colombia. El diseño incluye la caracterización de la fuente, el tren de tratamiento dimensionado según la calidad del agua cruda, los planos constructivos, la memoria de cálculo y el manual de operación — todo firmado por especialista con COPNIA 17202-313228 CLD y 10 años de experiencia. También diseñamos para municipios con IRCA alto y formulamos proyectos en MGA-Web SGR.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar PTAP para mi proyecto</Btn>
            <Btn variant="outline" href="/diseno-ptap-colombia" dark>Ver diseño PTAP Colombia</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Acueducto privado', 'RAS 2017', 'Parcelaciones', 'Condominios', 'COPNIA 17202-313228', 'Todo Colombia'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEO FRAGMENT (AI citation target) ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña plantas de tratamiento de agua potable (PTAP) para acueductos privados de parcelaciones, condominios y proyectos rurales en Colombia, conforme al RAS 2017 y Resolución 2115/2007. También diseña PTAP municipales y formula proyectos en MGA-Web para financiación SGR. Honorarios de referencia: desde $8 millones COP para parcelaciones pequeñas (20–50 viviendas) hasta $70 millones para proyectos municipales con formulación OCAD. Firma COPNIA 17202-313228 CLD. Sede Manizales — proyectos en todo Colombia. Propuesta en 24 horas sin costo: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de PTAP</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Tipos de PTAP que diseña BIC — privadas y municipales
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {TIPOS.map(t => (
              <div key={t.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: 24, borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 8 }}>{t.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ENTREGABLES PTAP PRIVADA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Qué entrega BIC?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 24 }}>
            Entregables del diseño de PTAP para acueducto privado
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
            {[
              { item: 'Estudio de calidad del agua cruda', detail: 'Análisis fisicoquímico y microbiológico de la fuente de captación. Determinación del tren de tratamiento requerido según RAS 2017 y Decreto 1575/2007.' },
              { item: 'Diseño del tren de tratamiento', detail: 'Dimensionamiento hidráulico de cada unidad: coagulación, floculación, sedimentación, filtración y desinfección. Cálculo de dosificación de reactivos.' },
              { item: 'Planos constructivos en AutoCAD', detail: 'Planos de planta, cortes, detalles estructurales e hidráulicos de cada unidad. Perfil hidráulico del sistema desde captación hasta red de distribución.' },
              { item: 'Memoria de cálculo firmada COPNIA', detail: 'Documento técnico completo con toda la metodología de diseño conforme al RAS 2017 Título C. Firmado y sellado con matrícula COPNIA 17202-313228 CLD vigente.' },
              { item: 'Manual de operación y mantenimiento', detail: 'Guía de operación para el operador del sistema: rutinas de mantenimiento preventivo, dosis de reactivos, control de calidad del agua tratada.' },
              { item: 'Estudio de concesión de aguas', detail: 'Soporte hidrológico para la solicitud de concesión ante la CAR: oferta hídrica, caudal ecológico y caudal concesionado según el Decreto 1076/2015.' },
            ].map((e, i) => (
              <div key={e.item} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: '16px 20px', display: 'grid', gridTemplateColumns: '36px 1fr', gap: 14, alignItems: 'start' }}>
                <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)', color: '#fff', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, color: '#002A50', margin: '0 0 4px' }}>{e.item}</p>
                  <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: '#e6f7ff', borderRadius: 10, padding: '16px 20px', border: '1px solid #b3e0ea' }}>
            <p style={{ color: '#003B6F', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              <strong>Inversión orientativa:</strong> PTAP para parcelación de 20–50 viviendas: <strong>$18M – $35M COP</strong> · Plazo: 4 a 6 semanas. PTAP para 50–200 viviendas: <strong>$30M – $60M COP</strong> · Plazo: 6 a 10 semanas. BIC envía propuesta técnica y económica detallada en 24 horas sin costo. COPNIA 17202-313228 CLD — 10 años en consultoría hidráulica.
            </p>
          </div>
        </div>
      </Section>

      {/* ── FINANCIACIÓN ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Fuentes de financiación</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 12 }}>
            ¿Cómo puede financiar la PTAP su municipio?
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FINANCIACION.map(f => (
              <div key={f.fuente} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12,
                }}>{f.fuente}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8 }}>
            PTAP para municipios — lo que más preguntan
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TAMBIÉN DISPONIBLE EN ── */}
      <Section style={{ background: '#eef6fb' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 14 }}>
            Ver también
          </p>
          <a href="/diseno-ptap-colombia" style={{
            display: 'inline-block', background: '#fff', border: '1px solid #b3d4e8',
            borderRadius: 8, padding: '14px 20px', color: '#003B6F',
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
          }}>
            Diseño técnico de PTAP Colombia — componentes y proceso →
          </a>
        </div>
      </Section>

      {/* ── ANTI-INTERMEDIARIO G.3 ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', border: '2px solid #e2e8f0', borderRadius: 14, padding: '28px 32px', borderLeft: '5px solid #17A2B8' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#002A50', marginBottom: 14 }}>
              ¿Es este servicio para usted?
            </h3>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              BIC trabaja directamente con <strong>promotores de parcelaciones, constructoras, alcaldías y empresas</strong> que necesitan el diseño de la PTAP para avanzar su proyecto — no con intermediarios que re-cotizan a terceros.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              Los precios publicados en este sitio son los que BIC cobra al contratante directo. Si usted es quien decide contratar y tiene el proyecto, la propuesta llega en menos de 24 horas.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Si está averiguando precios para re-cotizar a un tercero, este servicio probablemente no es el correcto para esa gestión. BIC prioriza relaciones directas con el decisor del proyecto.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💧</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Tu proyecto necesita acueducto privado con PTAP?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Cuéntanos el número de viviendas proyectadas, la ubicación del predio y la fuente de agua disponible. BIC te envía propuesta técnica y económica en menos de 24 horas, sin costo. COPNIA 17202-313228 CLD — 10 años en consultoría hidráulica.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              }}
            >
              📱 Cotizar por WhatsApp · +57 302 477 8910
            </a>
            <a
              href="/contacto"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: 'transparent', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
