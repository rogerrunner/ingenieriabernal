import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar el diseño de una PTAR en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño de PTAR en Colombia — Plantas de Tratamiento Aguas Residuales | BIC',
  description: 'BIC diseña plantas de tratamiento de aguas residuales (PTAR) municipales e industriales en Colombia. RAS 2017, PSMV, vertimientos CAR. Memoria de cálculo COPNIA. Cotice en 24 horas.',
  keywords: [
    'diseño PTAR Colombia',
    'planta tratamiento aguas residuales Colombia',
    'PTAR municipal Colombia',
    'PTAR industrial Colombia',
    'diseño PTAR Manizales',
    'diseño PTAR Eje Cafetero',
    'planta tratamiento aguas residuales RAS 2017',
    'PSMV plan saneamiento manejo vertimientos',
    'permiso vertimientos CAR Colombia',
    'ingeniería sanitaria Colombia',
    'PTAR aguas residuales domésticas',
    'consultor diseño PTAR Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-ptar-colombia',
}

const TIPOS = [
  {
    icon: '🏭',
    tipo: 'PTAR Municipal',
    desc: 'Tratamiento de aguas residuales domésticas para municipios y centros poblados. Diseño de sistemas de tratamiento primario, secundario y terciario según la carga contaminante y los límites de vertimiento exigidos por la CAR. Tecnologías aplicadas: lagunas de estabilización, reactores UASB, filtros percoladores, lodos activados y humedales artificiales.',
    aplica: 'Alcaldías, ESP acueducto/alcantarillado, asociaciones comunitarias de acueducto.',
  },
  {
    icon: '🏗️',
    tipo: 'PTAR Industrial',
    desc: 'Sistemas de tratamiento para efluentes industriales con cargas específicas: aguas de proceso agroindustrial (café, caña, lácteos), aguas de lavado industrial, lixiviados y aguas con alta carga de grasas o sólidos. El diseño incluye sistemas de pretratamiento, tratamiento fisicoquímico y biológico, con verificación de cumplimiento de los límites de vertimiento del Decreto 1076/2015.',
    aplica: 'Industria agroindustrial, parques industriales, bodegas y centros logísticos.',
  },
  {
    icon: '🏘️',
    tipo: 'PTAR para Urbanizaciones',
    desc: 'Plantas de tratamiento para proyectos urbanísticos que no tienen posibilidad de conexión a la red de alcantarillado público. El diseño incluye análisis de alternativas tecnológicas, cálculo de la carga doméstica, selección del sistema de tratamiento y diseño de la disposición final del efluente (riego, infiltración o descarga a cuerpo de agua).',
    aplica: 'Constructoras, urbanizadores, campamentos, conjuntos residenciales rurales.',
  },
  {
    icon: '🔄',
    tipo: 'Rehabilitación de PTAR Existente',
    desc: 'Diagnóstico técnico y rediseño de plantas que no cumplen con los parámetros de vertimiento, presentan problemas de olores, colmatación de lechos o insuficiencia de caudal. BIC realiza el diagnóstico en campo, identificación de la causa de la falla y propuesta técnica de rehabilitación con presupuesto.',
    aplica: 'Municipios, ESP y empresas con PTAR en operación deficiente.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Caracterización del agua residual y análisis de caudal',
    desc: 'Se determinan los caudales de diseño (caudal medio diario, caudal máximo horario) y la carga contaminante (DBO, DQO, SST, coliformes) mediante aforo de caudales y toma de muestras de laboratorio. Esta información es la base para seleccionar la tecnología de tratamiento adecuada.',
    herramientas: ['Aforo de caudales en campo', 'Análisis de laboratorio acreditado', 'Estimación poblacional DANE', 'Dotaciones RAS 2017'],
    resultado: 'Caudales de diseño + caracterización fisicoquímica del afluente',
  },
  {
    paso: '02',
    titulo: 'Selección de tecnología y análisis de alternativas',
    desc: 'BIC evalúa al menos dos alternativas tecnológicas considerando eficiencia de remoción, costos de construcción y operación, disponibilidad de área, requerimientos de energía y capacidad operativa del municipio o empresa. Se selecciona la alternativa óptima con criterios técnicos, económicos y de sostenibilidad.',
    herramientas: ['Análisis multicriterio', 'Costos comparativos O&M', 'Normativa MVCT (RAS 2017)', 'Guías técnicas MADS'],
    resultado: 'Alternativa seleccionada y justificada técnicamente',
  },
  {
    paso: '03',
    titulo: 'Diseño hidráulico y estructural de la PTAR',
    desc: 'Diseño detallado de cada unidad de tratamiento: dimensiones hidráulicas, tiempos de retención, cargas superficiales, estructuras de entrada y salida. Para sistemas biológicos se calculan los parámetros cinéticos y la carga orgánica superficial. Se generan memorias de cálculo completas firmadas por especialista COPNIA.',
    herramientas: ['AutoCAD Civil 3D (planos)', 'Modelación hidráulica unidades', 'NSR-10 (estructuras)', 'RAS 2017 (criterios de diseño)'],
    resultado: 'Memoria de cálculo + planos constructivos de cada unidad',
  },
  {
    paso: '04',
    titulo: 'Trámite de permiso de vertimiento ante la CAR',
    desc: 'BIC elabora los estudios técnicos requeridos por la Corporación Autónoma Regional para tramitar el permiso de vertimiento: caracterización del cuerpo receptor, análisis de capacidad de asimilación, estudio de impacto ambiental simplificado y memoria descriptiva del proyecto. Acompañamos el proceso hasta la obtención del permiso.',
    herramientas: ['Caracterización cuerpo receptor', 'Decreto 1076/2015 (permiso vertimiento)', 'Resoluciones CAR vigentes', 'Formularios SISTEMA'],
    resultado: 'Expediente técnico completo para radicar ante la CAR',
  },
]

const NORMATIVA = [
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'Reglamento Técnico del Sector de Agua Potable — criterios de diseño para PTAR municipales' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — régimen de permisos de vertimiento y estándares de calidad del efluente' },
  { codigo: 'Resolución 0631/2015', descripcion: 'MADS — parámetros y valores límite para vertimientos puntuales a cuerpos de agua' },
  { codigo: 'NSR-10', descripcion: 'Diseño estructural de tanques, reactores y estructuras de concreto de la PTAR' },
  { codigo: 'NTC 813', descripcion: 'Calidad del agua — parámetros fisicoquímicos y microbiológicos para monitoreo' },
  { codigo: 'PSMV', descripcion: 'Plan de Saneamiento y Manejo de Vertimientos — instrumento de planificación para municipios' },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de una PTAR en Colombia?',
    a: 'El costo depende del caudal de diseño, la tecnología seleccionada, si existe información de campo disponible y los entregables requeridos. Para una PTAR municipal de 2 a 10 L/s (1.000 a 5.000 habitantes), el diseño completo con alternativas tecnológicas, memorias de cálculo y planos oscila entre $18 y $45 millones COP. Para plantas industriales el rango varía según la complejidad del efluente. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Qué tecnología de tratamiento es mejor para un municipio pequeño?',
    a: 'Para municipios menores a 5.000 habitantes en Colombia, las lagunas de estabilización (laguna anaerobia + laguna facultativa) son generalmente la opción más adecuada porque tienen costos de construcción moderados, operación simple y no requieren energía eléctrica. Para municipios con restricción de área, los sistemas compactos como el UASB + filtro biológico son una buena alternativa. BIC realiza el análisis de alternativas para cada caso específico considerando el área disponible, el presupuesto y la capacidad de operación del acueducto.',
  },
  {
    q: '¿Se puede financiar una PTAR con recursos del SGR?',
    a: 'Sí, es uno de los usos más frecuentes de las regalías en el sector de agua potable y saneamiento básico. Los proyectos de PTAR pueden financiarse con recursos del SGR (fondo de CTel, OCAD regional o OCAD paz), con SGP (Sistema General de Participaciones) y con recursos del Ministerio de Vivienda (programas de saneamiento). BIC puede formular el proyecto completo en MGA-Web del DNP con diseños técnicos, presupuesto APU y todos los módulos requeridos.',
  },
  {
    q: '¿Cuánto tiempo toma diseñar una PTAR?',
    a: 'El plazo típico es de 8 a 16 semanas para una PTAR municipal estándar: 2-3 semanas para caracterización del agua residual y análisis de alternativas, 4-6 semanas para el diseño detallado y 2-4 semanas para el expediente de permiso ambiental. Para plantas industriales con efluentes complejos el plazo puede ser mayor por los tiempos de laboratorio.',
  },
  {
    q: '¿BIC tramita el permiso de vertimiento ante la CAR?',
    a: 'BIC elabora toda la documentación técnica requerida para el permiso de vertimiento: caracterización del efluente, análisis del cuerpo receptor, memoria descriptiva y formularios. El radicado formal lo realiza el cliente, pero BIC acompaña el proceso respondiendo las observaciones técnicas de la Corporación Autónoma Regional hasta la expedición del permiso.',
  },
]

const ARTICULOS = [
  { href: '/blog/ptar-industrial-colombia', title: 'PTAR Industrial en Colombia: Guía Técnica Completa' },
  { href: '/blog/estudio-hidrologico-colombia', title: 'Estudio Hidrológico en Colombia: Requisitos y Proceso' },
  { href: '/blog/que-necesito-para-urbanizar-un-lote-colombia', title: '¿Qué necesito para urbanizar un lote en Colombia?' },
]

export default function DisenoPTARColombia() {
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
          <SectionLabel light>Ingeniería sanitaria · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de PTAR en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Plantas de tratamiento de aguas residuales municipales e industriales con permiso CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña plantas de tratamiento de aguas residuales en Colombia
            conforme al RAS 2017, la Resolución 0631/2015 y el Decreto 1076/2015. Entregamos memorias
            de cálculo firmadas, planos constructivos y el expediente técnico para tramitar el permiso
            de vertimiento ante la CAR.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de PTAR</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['RAS 2017','Res. 0631/2015','PSMV','Permiso CAR','COPNIA vigente','UASB · Lagunas'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de PTAR</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de PTAR necesita su proyecto?
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
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>APLICA PARA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.aplica}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC una PTAR en Colombia
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
            Normativa que rige el diseño de PTAR en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12,
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

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre el diseño de PTAR en Colombia
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
            ¿Necesita el diseño de una PTAR<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de aguas residuales, el caudal estimado y la región.
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
