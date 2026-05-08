import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, mi municipio necesita una PTAP. ¿Pueden ayudarnos a diseñarla y gestionar los recursos?')

const seoConfig = {
  title: 'PTAP para Municipios Colombia | Diseño y SGR BIC',
  description: 'Diseño de PTAP para municipios con regalías SGR y IRCA alto en Colombia. RAS 2017, Res. 0330. BIC Eje Cafetero, cobertura nacional. Cotice.',
  keywords: [
    'PTAP municipios Colombia',
    'planta agua potable municipio Colombia',
    'PTAP regalías SGR Colombia',
    'PTAP IRCA Colombia',
    'diseño PTAP rural Colombia',
    'planta potabilizadora municipio',
    'agua potable comunidad rural Colombia',
    'PTAP MGA-Web SGR',
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
    icon: '🏘️',
    titulo: 'PTAP para acueductos comunitarios rurales',
    desc: 'Diseño de plantas de tratamiento para acueductos comunitarios y Juntas de Acción Comunal que atienden entre 50 y 500 viviendas rurales. Tecnologías de bajo costo y fácil operación: filtros lentos, filtros de flujo ascendente y desinfección por cloración. Entrega de planos, memoria de cálculo y manual de operación firmados COPNIA.',
  },
  {
    icon: '🏛️',
    titulo: 'PTAP para cabeceras municipales con IRCA alto',
    desc: 'Diagnóstico del IRCA (Índice de Riesgo de Calidad del Agua) actual y diseño del tren de tratamiento para cumplir la Resolución 2115/2007. Para municipios con IRCA en categoría de riesgo alto o muy alto, BIC diseña la PTAP completa (coagulación, floculación, sedimentación, filtración rápida, desinfección) con financiación SGR o del Ministerio de Vivienda.',
  },
  {
    icon: '💰',
    titulo: 'Formulación MGA-Web para financiación SGR',
    desc: 'BIC elabora el proyecto de PTAP en la Metodología General Ajustada (MGA-Web) del DNP para su presentación ante el OCAD. El expediente incluye diseños firmados COPNIA, análisis de alternativas de tratamiento, estudio de calidad del agua cruda, presupuesto con APU verificable, cronograma de ejecución y plan de mantenimiento.',
  },
  {
    icon: '🔧',
    titulo: 'Supervisión técnica de construcción de PTAP',
    desc: 'Interventoría y supervisión técnica durante la construcción de la PTAP. BIC verifica la correcta ejecución de las unidades de tratamiento conforme a los planos de diseño, realiza pruebas hidráulicas, acompaña la puesta en marcha y capacita al operador del sistema en las rutinas de mantenimiento preventivo.',
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
    q: '¿Qué es el IRCA y por qué importa para diseñar una PTAP?',
    a: 'El IRCA (Índice de Riesgo de Calidad del Agua para Consumo Humano) mide el grado de riesgo del agua que consume la población. Un municipio con IRCA alto o muy alto no está suministrando agua potable segura. Este indicador activa la obligación de diseñar y construir una PTAP y habilita a los municipios para acceder a recursos del SGR, el SGP y el Ministerio de Vivienda. BIC puede consultar el IRCA de cualquier municipio y evaluar qué tipo de tratamiento se requiere.',
  },
  {
    q: '¿Cuánto tiempo tarda el diseño de una PTAP para un municipio pequeño?',
    a: 'El diseño completo de una PTAP para un municipio de nivel bajo o medio (hasta 12,500 hab) toma entre 4 y 8 semanas desde la firma del contrato y la entrega de los análisis de calidad del agua cruda. El tiempo incluye: caracterización de la fuente, diseño de las unidades de tratamiento, ensayo de jarras, planos constructivos, memoria de cálculo, presupuesto APU y, si se requiere, el formulario MGA-Web completo.',
  },
  {
    q: '¿BIC puede diseñar la PTAP y también formular el proyecto para el SGR?',
    a: 'Sí, es precisamente el valor diferencial de BIC: en un solo contrato obtenemos los diseños técnicos firmados COPNIA y formulamos el proyecto en MGA-Web del DNP para la presentación ante el OCAD. Esto evita que el municipio tenga que contratar a una firma de diseño por separado y otra de formulación, reduciendo tiempos y costos. BIC tiene contratos verificables en SECOP I con alcaldías que usaron este servicio integrado.',
  },
]

export default function ServicioPTAPColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-ptap-municipios'
    s.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(s)
    return () => { document.getElementById('schema-ptap-municipios')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Agua potable · Municipios</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            PTAP para Municipios en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Diseño de plantas de tratamiento + formulación SGR para municipios con IRCA alto
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 28, maxWidth: 760 }}>
            BIC diseña plantas de tratamiento de agua potable para municipios colombianos con IRCA alto,
            acueductos comunitarios sin tratamiento y proyectos con financiación de regalías SGR,
            Ministerio de Vivienda o FINDETER. El servicio incluye el diseño técnico firmado COPNIA
            y la formulación del proyecto en MGA-Web del DNP. Cobertura en todo el territorio nacional.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar PTAP para su municipio</Btn>
            <Btn variant="outline" href="/diseno-ptap-colombia" dark>Ver diseño PTAP Colombia</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['IRCA', 'RAS 2017', 'MGA-Web', 'SGR', 'COPNIA', 'Min. Vivienda'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de PTAP</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            ¿Qué tipo de PTAP necesita su municipio?
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

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏛️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Su municipio necesita una PTAP?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Indíquenos el municipio, el caudal requerido y la fuente de financiación disponible.
            BIC le envía propuesta técnica en menos de 24 horas, sin costo.
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
