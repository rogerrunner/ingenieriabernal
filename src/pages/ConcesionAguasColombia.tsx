import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito información sobre concesión de aguas en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Concesión de Aguas en Colombia — Trámite ante CAR | BIC Ingeniería',
  description: 'BIC elabora los estudios técnicos para tramitar concesiones de aguas superficiales y subterráneas ante las CAR en Colombia. Decreto 1076/2015. Aforos, hidrología y oferta hídrica. Cotice en 24 horas.',
  keywords: [
    'concesión de aguas Colombia',
    'concesión aguas superficiales Colombia',
    'concesión aguas subterráneas Colombia',
    'trámite concesión aguas CAR Colombia',
    'CORPOCALDAS concesión aguas',
    'CARDER concesión aguas',
    'estudio oferta demanda hídrica Colombia',
    'permiso captación agua Colombia',
    'Decreto 1076 2015 concesión aguas',
    'aforo caudales Colombia concesión',
    'caudal ecológico Colombia',
    'ingeniería hídrica ambiental Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/concesion-aguas-colombia',
}

const TIPOS = [
  {
    icon: '🌊',
    tipo: 'Concesión de Aguas Superficiales',
    desc: 'Autorización para captar agua de ríos, quebradas, arroyos o ciénagas. El trámite se realiza ante la Corporación Autónoma Regional competente según el Decreto 1076/2015. BIC elabora el estudio hidrológico de la fuente, el balance oferta-demanda, el análisis de caudal ecológico y la memoria descriptiva del proyecto de captación.',
    car: ['CORPOCALDAS (Caldas)', 'CARDER (Risaralda)', 'CRQ (Quindío)', 'CDMB (Santander)', 'CAR (Cundinamarca)', 'Demás CAR del país'],
  },
  {
    icon: '⬇️',
    tipo: 'Concesión de Aguas Subterráneas',
    desc: 'Autorización para perforar pozos y captar agua del subsuelo. Requiere estudio hidrogeológico del acuífero, prueba de bombeo, análisis de calidad del agua y evaluación del impacto sobre otros usuarios. BIC realiza el estudio técnico completo e interpreta los ensayos de campo para determinar la capacidad sostenible de extracción.',
    car: ['Toda CAR con acuíferos en su jurisdicción', 'Zonas costeras y valles interandinos', 'Regiones con restricción de agua superficial'],
  },
  {
    icon: '🏗️',
    tipo: 'Permiso de Ocupación de Cauce',
    desc: 'Requerido para construir cualquier estructura dentro del cauce o en la ronda hídrica de un río o quebrada: bocatomas, puentes, boxcúlverts, muros de encauzamiento, obras de protección. BIC elabora la memoria descriptiva, planos y modelación hidráulica exigidos por la CAR para este permiso.',
    car: ['Obligatorio en todo el territorio nacional', 'Articulado con la concesión de aguas', 'Previo a cualquier obra en cauce'],
  },
  {
    icon: '🔄',
    tipo: 'Renovación y Modificación de Concesión',
    desc: 'Las concesiones de aguas tienen vigencia limitada (entre 2 y 10 años según el uso). BIC elabora los estudios técnicos para la renovación, incluyendo la actualización del aforo de caudales, el análisis de cumplimiento de la concesión vigente y las condicionantes ambientales impuestas por la CAR.',
    car: ['Acueductos municipales con concesiones vencidas', 'Sistemas de riego con expansión de área', 'Industrias con cambio en el proceso productivo'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Aforo de caudales y caracterización de la fuente',
    desc: 'Medición del caudal de la fuente hídrica en diferentes períodos del año (temporada seca y lluviosa) para determinar la disponibilidad real de agua. BIC realiza aforos con molinete, velocímetro acústico Doppler o método volumétrico según las condiciones del cauce.',
    herramientas: ['Molinete hidrométrico', 'ADCP (Doppler acústico)', 'Método volumétrico', 'Estaciones IDEAM cercanas'],
    resultado: 'Caudales medios mensuales + caudal mínimo absoluto',
  },
  {
    paso: '02',
    titulo: 'Estudio hidrológico y balance oferta-demanda',
    desc: 'Con base en los aforos y la información hidrológica del IDEAM, se determina la oferta hídrica de la fuente en condiciones de año seco (período de retorno 10 años). Se compara con la demanda del proyecto para verificar que la fuente puede suministrar el caudal solicitado sin comprometer el caudal ecológico.',
    herramientas: ['HEC-HMS (hidrología)', 'Datos IDEAM (climatología)', 'Análisis de frecuencia hidrológica', 'Curvas de duración de caudales'],
    resultado: 'Balance oferta-demanda + viabilidad hidrológica de la concesión',
  },
  {
    paso: '03',
    titulo: 'Cálculo del caudal ecológico',
    desc: 'El Decreto 1076/2015 establece que se debe mantener en el cauce el caudal ecológico necesario para preservar el ecosistema fluvial. BIC calcula el caudal ecológico mediante los métodos aceptados por la CAR (método del porcentaje del caudal medio mensual mínimo) y verifica que el caudal solicitado no supere el 50% del caudal disponible.',
    herramientas: ['Método IDEAM (caudal ecológico)', 'Análisis curva de permanencia', 'Resolución 865/2004 MAVDT', 'Protocolo CAR regional'],
    resultado: 'Caudal ecológico certificado + caudal máximo concesionable',
  },
  {
    paso: '04',
    titulo: 'Elaboración del expediente técnico para la CAR',
    desc: 'BIC elabora el expediente técnico completo para radicar ante la CAR: memoria descriptiva del proyecto, estudio de oferta y demanda hídrica, análisis del caudal ecológico, planos del sistema de captación, localización georreferenciada y formularios de solicitud exigidos por cada Corporación.',
    herramientas: ['AutoCAD (planos)', 'ArcGIS (localización)', 'Formularios SINA', 'Informe técnico firmado COPNIA'],
    resultado: 'Expediente completo listo para radicación ante la CAR',
  },
]

const NORMATIVA = [
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — procedimiento y requisitos para concesiones de aguas superficiales y subterráneas' },
  { codigo: 'Resolución 865/2004', descripcion: 'MAVDT — metodología para el cálculo del índice de escasez y el caudal ecológico en Colombia' },
  { codigo: 'Ley 99/1993', descripcion: 'Ley general ambiental — principios y funciones de las Corporaciones Autónomas Regionales' },
  { codigo: 'Código de Recursos Naturales (Decreto 2811/1974)', descripcion: 'Marco original del régimen de concesiones de aguas en Colombia' },
  { codigo: 'Resoluciones CAR vigentes', descripcion: 'Cada CAR tiene resoluciones específicas sobre criterios técnicos y tarifas para concesiones en su jurisdicción' },
]

const FAQ = [
  {
    q: '¿Cuánto tiempo tarda tramitar una concesión de aguas en Colombia?',
    a: 'El plazo del trámite ante la CAR varía entre 3 y 12 meses según la Corporación, la complejidad del caso y la carga de trabajo de la entidad. CORPOCALDAS y CARDER tienen tiempos típicos de 4-6 meses para concesiones de uso doméstico o agrícola. Para uso industrial o municipal los tiempos pueden ser mayores. BIC puede elaborar los estudios técnicos en 4-8 semanas para que el expediente esté listo para radicar cuanto antes.',
  },
  {
    q: '¿Qué pasa si captamos agua sin concesión?',
    a: 'Captar agua de cualquier fuente pública sin concesión es una infracción ambiental en Colombia, sancionable con multas de hasta 5.000 salarios mínimos mensuales, la demolición de las obras de captación y la suspensión del suministro. Además, si el proyecto es financiado con recursos públicos (SGR, SGP, MinVivienda), la ausencia de concesión impide el desembolso. BIC tramita la concesión antes de iniciar las obras para evitar estas consecuencias.',
  },
  {
    q: '¿Cuánto cuesta elaborar el estudio para una concesión de aguas?',
    a: 'El costo del estudio técnico depende del tipo de fuente (superficial o subterránea), si se requiere campaña de aforos de campo, el uso del agua y los entregables exigidos por la CAR. Para una concesión de aguas superficiales para acueducto o riego de mediana escala, el estudio técnico completo oscila entre $8 y $20 millones COP. BIC envía propuesta detallada en 24 horas.',
  },
  {
    q: '¿La concesión de aguas es necesaria para diseñar una bocatoma?',
    a: 'Sí, y ambos trámites están directamente relacionados. La concesión de aguas autoriza a captar el caudal; el permiso de ocupación de cauce autoriza a construir las obras (bocatoma, barraje). BIC tramita simultáneamente los dos permisos ante la CAR para optimizar el tiempo del proceso. El diseño de la bocatoma es el documento técnico principal para solicitar el permiso de ocupación de cauce.',
  },
  {
    q: '¿BIC gestiona concesiones en toda Colombia?',
    a: 'BIC elabora los estudios técnicos para concesiones ante todas las CAR del país: CORPOCALDAS, CARDER, CRQ, CDMB, CAR Cundinamarca, CORNARE, CORANTIOQUIA, CVC, CRC, CORPONARIÑO, entre otras. La mayor parte del trabajo técnico (hidrología, análisis de oferta-demanda, informes) se realiza desde Manizales con desplazamientos de campo focalizados para los aforos.',
  },
]

const ARTICULOS = [
  { href: '/blog/estudios-car-corpocaldas-colombia', title: 'Estudios ante CAR y CORPOCALDAS en Colombia' },
  { href: '/blog/bocatoma-caudal-riego-colombia', title: 'Bocatoma y Caudal para Riego en Colombia' },
  { href: '/blog/aforo-caudales-colombia', title: 'Aforo de Caudales en Colombia' },
]

export default function ConcesionAguasColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

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
          <SectionLabel light>Permisos ambientales · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Concesión de Aguas en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Estudios técnicos para tramitar concesiones ante las CAR — Decreto 1076/2015
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores elabora los estudios hidrológicos, aforos de caudales
            y análisis de oferta-demanda hídrica requeridos para tramitar concesiones de aguas
            superficiales y subterráneas ante las Corporaciones Autónomas Regionales en Colombia.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar sobre concesión de aguas</Btn>
            <Btn variant="outline" href="/bocatomas-colombia" dark>Ver diseño de bocatomas</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Decreto 1076/2015','Aforo caudales','Oferta hídrica','Caudal ecológico','CORPOCALDAS','CARDER · CRQ'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de permiso</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Tipos de concesión y permisos hídricos en Colombia
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{t.tipo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>CAR COMPETENTES</p>
                  <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                    {t.car.map(c => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo BIC prepara el estudio para su concesión
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#002A50' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3e0ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>ENTREGABLE</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa de concesiones de aguas en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 11,
                }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <section style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1a3c5e', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Artículos relacionados</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ARTICULOS.map(a => (
                <li key={a.href}>
                  <a href={a.href} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', fontSize: 15 }}>→ {a.title}</a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Servicios técnicos para proyectos de agua en Colombia
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Bocatomas y captaciones', href: '/bocatomas-colombia' },
              { label: 'Canales de riego y conducción', href: '/diseno-canal-riego-colombia' },
              { label: 'Modelación hidráulica HEC-RAS', href: '/modelacion-hidraulica-colombia' },
              { label: 'Diseño de PTAP Colombia', href: '/diseno-ptap-colombia' },
              { label: 'Obras hidráulicas Colombia', href: '/obras-hidraulicas-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Preguntas sobre concesiones de aguas en Colombia
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
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
            ¿Necesita tramitar una concesión<br />de aguas en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de fuente, el caudal que necesita y la CAR de su región.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Atención en todo Colombia.
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
              📱 Consultar por WhatsApp · +57 302 477 8910
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
