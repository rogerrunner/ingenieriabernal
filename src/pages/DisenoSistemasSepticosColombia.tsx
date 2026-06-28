import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, somos [municipio/ESP/entidad]. Necesitamos contratar el diseño de un sistema séptico o de tratamiento individual (pozo séptico/campo de infiltración/trampa de grasas). ¿El director técnico puede enviarnos propuesta directa con matrícula COPNIA?'
)

const seoConfig = {
  title: 'Contratar Diseño Sistema Séptico Colombia — Pozo Séptico, Campo Infiltración | Desde $4M COP | BIC COPNIA',
  description: 'Diseño de sistemas sépticos para municipios, ESP y promotores en Colombia: pozo séptico, campo de infiltración, trampa de grasas. COPNIA-UNAL, sin subcontratistas. Desde $4M COP. Propuesta 24 h.',
  keywords: [
    'diseño sistema séptico Colombia',
    'diseño pozo séptico Colombia',
    'campo de infiltración diseño Colombia',
    'trampa de grasas diseño Colombia',
    'sistema tratamiento individual Colombia',
    'diseño sistema séptico municipio Colombia',
    'pozo séptico zona rural Colombia',
    'sistema séptico parcelación Colombia',
    'diseño sistema séptico COPNIA Colombia',
    'tratamiento aguas residuales domésticas Colombia',
    'sistema séptico Eje Cafetero Caldas',
    'diseño PTAR individual Colombia',
    'costo diseño sistema séptico Colombia',
    'contratar diseño séptico Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-sistemas-septicos-colombia',
}

const COMPONENTES_SEPTICO = [
  {
    icon: '🏠',
    titulo: 'Pozo Séptico (Tanque Séptico)',
    desc: 'Diseño del tanque de sedimentación y digestión anaeróbica de aguas residuales domésticas. Cálculo de volumen mínimo según el número de usuarios, tiempo de retención hidráulica (TRH), temperatura del sitio y tipo de uso (vivienda, hotel, restaurante). Incluye dimensiones del tanque, materiales, diseño de entrada y salida, y ventilación conforme al RAS 2017 y la Resolución 0330.',
  },
  {
    icon: '🌱',
    titulo: 'Campo de Infiltración (Lecho Filtrante)',
    desc: 'Diseño del sistema de distribución del efluente del pozo séptico en el suelo mediante zanjas de infiltración. Incluye prueba de permeabilidad del suelo (ensayo de percolación o conductividad hidráulica), cálculo del área de infiltración necesaria, diseño de las zanjas y la cama de grava, profundidad de instalación y distancias de protección a fuentes de agua y estructuras. Conforme al RAS 2017 Título E.',
  },
  {
    icon: '🍽️',
    titulo: 'Trampa de Grasas',
    desc: 'Diseño de la trampa de grasas para instalaciones con cocinas industriales, restaurantes, hoteles o cualquier uso con generación significativa de grasas y aceites. Incluye dimensionamiento del compartimento de flotación, cálculo de tiempos de retención, especificaciones de limpieza y mantenimiento. Es el componente que protege el sistema séptico y los campos de infiltración del taponamiento por grasas.',
  },
  {
    icon: '🔬',
    titulo: 'Filtro Anaeróbico de Flujo Ascendente (FAFA)',
    desc: 'Diseño de un FAFA como unidad de postratamiento del efluente del pozo séptico para proyectos donde la calidad del efluente debe cumplir estándares más exigentes (zonas de captación de agua, cercanía a cuerpos de agua o suelos con baja permeabilidad). Incluye diseño del medio de contacto, tasas de carga hidráulica y orgánica, y verificación de remoción de DBO y SST.',
  },
  {
    icon: '📊',
    titulo: 'Análisis de Aptitud del Suelo',
    desc: 'Ensayo de percolación o análisis de conductividad hidráulica del suelo en el sitio del proyecto para determinar si el campo de infiltración es viable. En suelos arcillosos o con nivel freático alto, se evalúan alternativas como camas de infiltración elevadas o sistemas de wetlands artificiales. Informe técnico de aptitud del suelo para la CAR competente.',
  },
  {
    icon: '📋',
    titulo: 'Memorias, Planos y Trámite ante CAR',
    desc: 'Entrega completa del diseño: memoria de cálculo con todos los parámetros de diseño, planos de planta y cortes transversales en AutoCAD, especificaciones técnicas y presupuesto APU. Firmado por director técnico COPNIA para radicación ante la autoridad ambiental (Corpocaldas, CARDER, CVC, etc.) en el trámite del permiso de vertimiento o la concesión de agua.',
  },
]

const FAQ_SEPTICO = [
  {
    q: '¿Cuándo es viable un sistema séptico en lugar de una PTAR colectiva para un municipio o parcelación?',
    a: 'Un sistema séptico (pozo séptico + campo de infiltración) es viable cuando el predio está en zona rural o suburbana sin acceso a la red de alcantarillado municipal, cuando la generación de aguas residuales es menor a 40 m³/día (equivalente a aproximadamente 200 personas), y cuando el suelo tiene permeabilidad adecuada según el ensayo de percolación. Para parcelaciones campestres, hoteles rurales, instituciones educativas rurales y viviendas en zonas sin cobertura de la ESP, el sistema séptico bien diseñado es la solución técnica y económicamente más eficiente. Para municipios con PGIRS, los sistemas sépticos individuales bien gestionados son parte de la solución de saneamiento para las veredas más dispersas.',
  },
  {
    q: '¿Qué normativa colombiana aplica al diseño de sistemas sépticos?',
    a: 'El diseño de sistemas sépticos en Colombia se rige principalmente por el RAS 2017 (Resolución 0330 del MVCT), Título E — Sistemas de Recolección y Evacuación de Aguas Residuales Domésticas y Pluviales, y el Decreto 1076 de 2015 (Sector Ambiente). La autoridad ambiental competente (CAR) exige el permiso de vertimiento para cualquier sistema de tratamiento individual que descargue efluentes al suelo o a cuerpos de agua. El diseño debe estar firmado por un ingeniero con matrícula COPNIA vigente.',
  },
  {
    q: '¿Cuánto cuesta el diseño de un sistema séptico en Colombia?',
    a: 'Para una vivienda rural unifamiliar o una unidad de vivienda campestre, el diseño del sistema séptico (pozo + campo de infiltración) oscila entre $4 y $8 millones COP, incluyendo el ensayo de percolación. Para parcelaciones de 5 a 20 unidades con sistema colectivo, entre $8 y $20 millones. Un sistema para restaurante o hotel rural con trampa de grasas y FAFA puede costar entre $10 y $25 millones según la capacidad. BIC entrega propuesta técnica y presupuesto en menos de 24 horas sin costo.',
  },
]

const PRECIOS = [
  { servicio: 'Sistema séptico residencial unifamiliar (pozo + campo infiltración)', rango: 'Desde $4M COP' },
  { servicio: 'Sistema séptico colectivo parcelación (5–20 unidades)', rango: 'Desde $8M COP' },
  { servicio: 'Trampa de grasas + campo de infiltración (comercial/hotel)', rango: 'Desde $6M COP' },
  { servicio: 'Pozo séptico + FAFA + ensayo de percolación', rango: 'Desde $10M COP' },
]

const NORMATIVA = [
  { norma: 'RAS 2017 Res. 0330', aplica: 'Parámetros de diseño de sistemas de tratamiento individual de aguas residuales (Título E)' },
  { norma: 'Decreto 1076 / 2015', aplica: 'Régimen de permisos ambientales — permiso de vertimientos para sistemas sépticos' },
  { norma: 'NSR-10 Título IS', aplica: 'Normas de instalaciones sanitarias de edificaciones — conexiones a sistemas de tratamiento' },
  { norma: 'Resolución 0631 / 2015', aplica: 'Parámetros de vertimientos al suelo para sistemas de tratamiento individual' },
]

export default function DisenoSistemasSepticosColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño Sistema Séptico Colombia | BIC Bernal Ingeniería" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Sistemas Sépticos Colombia — Pozo Séptico y Campo de Infiltración"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-sistemas-septicos-colombia"
        faqItems={FAQ_SEPTICO}
        priceSpecification={[
          { name: 'Sistema séptico residencial unifamiliar', minPrice: 4000000, maxPrice: 8000000, priceCurrency: 'COP' },
          { name: 'Sistema séptico colectivo parcelación', minPrice: 8000000, maxPrice: 20000000, priceCurrency: 'COP' },
          { name: 'Trampa de grasas + campo de infiltración', minPrice: 6000000, maxPrice: 15000000, priceCurrency: 'COP' },
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
          <SectionLabel light>Servicio especializado — Saneamiento Rural y Suburbano</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de Sistemas Sépticos Colombia<br />
            <span style={{ color: '#17A2B8' }}>Pozo Séptico · Campo de Infiltración · Trampa de Grasas</span>
          </h1>
          <p className="servicio-intro" style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña sistemas sépticos para municipios, ESP, gobernaciones
            y promotores de infraestructura en Colombia. Sistemas para zonas rurales sin alcantarillado:
            pozo séptico, campo de infiltración, trampa de grasas, FAFA y ensayo de percolación. Firmado
            por director técnico Rogerio Bernal Ríos, Especialista UNAL, COPNIA 17202-313228. Trato
            directo con el director técnico — sin subcontratistas, sin intermediarios.
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
          {['RAS 2017 Res. 0330', 'Dec. 1076/2015', 'Res. 0631/2015', 'COPNIA UNAL', 'Permiso vertimiento CAR'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── GEO FRAGMENT (AEO/LLM) ── */}
      <section id="geo-fragment" style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE', padding: '18px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong>, con sede en <strong>Manizales, Caldas</strong>, diseña sistemas sépticos para municipios, ESP y promotores de infraestructura en el <strong>Eje Cafetero y Colombia</strong>. Servicios: pozo séptico, campo de infiltración, trampa de grasas, filtro anaeróbico (FAFA) y ensayo de percolación. Precios desde $4 millones COP para viviendas unifamiliares hasta $25 millones para sistemas colectivos o comerciales. Director técnico COPNIA 17202-313228, Especialista UNAL. Sin subcontratistas, trato directo. Propuesta en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Por qué el diseño profesional es indispensable</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Sistemas Sépticos para Saneamiento Rural en Colombia</h2>
          <ThinLine mb={24} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                En Colombia, más del 30% de la población rural no tiene acceso a sistemas colectivos de
                saneamiento básico. Para estas comunidades — veredas, parcelaciones campestres, fincas
                agroindustriales y zonas de expansión suburbana — el sistema séptico bien diseñado es la
                solución técnica y económicamente más apropiada para el tratamiento de aguas residuales
                domésticas, siempre que el suelo tenga las condiciones de permeabilidad adecuadas.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
                Un diseño empírico o sobredimensionado genera dos problemas: si el campo de infiltración
                es demasiado pequeño, el sistema colapsa en pocos años; si es sobredimensionado, el costo
                de construcción supera innecesariamente el presupuesto del proyecto. El dimensionamiento
                correcto requiere conocer el caudal de aguas residuales generado, la temperatura del sitio
                y la tasa de aplicación hidráulica del suelo medida in situ.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Para municipios de categoría 5 y 6 que gestionan proyectos de saneamiento con recursos
                del SGR o del PDA, el diseño del sistema séptico debe cumplir los lineamientos técnicos
                del RAS 2017 y estar firmado por un ingeniero con tarjeta COPNIA vigente. La autoridad
                ambiental exige que el proyecto cuente con el permiso de vertimientos de la CAR antes
                de construir el sistema, y ese trámite requiere los planos y memorias de diseño.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8 }}>
                BIC Bernal Ingeniería Consultores acompaña el proceso completo: diseño del sistema,
                ensayo de percolación en campo, elaboración de la memoria de cálculo y planos firmados
                COPNIA, y asesoría en el trámite del permiso de vertimiento ante la CAR competente.
                Primera consulta técnica sin costo.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── COMPONENTES ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Componentes del Sistema Séptico que Diseñamos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {COMPONENTES_SEPTICO.map((c) => (
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

      {/* ── NORMATIVA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa Aplicable en Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif" }}>
              <caption style={{ position: 'absolute', left: '-9999px' }}>Normativa sistemas sépticos Colombia</caption>
              <thead>
                <tr style={{ background: '#003B6F', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Norma</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Aplicación</th>
                </tr>
              </thead>
              <tbody>
                {NORMATIVA.map((n, i) => (
                  <tr key={n.norma} style={{ background: i % 2 === 0 ? '#F8FAFC' : '#fff', borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#17A2B8', fontSize: 14, whiteSpace: 'nowrap' }}>{n.norma}</td>
                    <td style={{ padding: '12px 16px', color: '#475569', fontSize: 14 }}>{n.aplica}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Honorarios de referencia</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Costo del Diseño de Sistema Séptico</h2>
          <ThinLine mb={24} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            Los honorarios dependen del tipo y tamaño del sistema, si se requiere ensayo de percolación
            y la complejidad del trámite ante la CAR. Valores orientativos para Colombia. Presupuesto
            detallado sin costo.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif" }}>
              <caption style={{ position: 'absolute', left: '-9999px' }}>Costo diseño sistema séptico Colombia</caption>
              <thead>
                <tr style={{ background: '#003B6F', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Tipo de sistema</th>
                  <th style={{ padding: '12px 16px', textAlign: 'right', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Honorarios</th>
                </tr>
              </thead>
              <tbody>
                {PRECIOS.map((p, i) => (
                  <tr key={p.servicio} style={{ background: i % 2 === 0 ? '#fff' : '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
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
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Preguntas Frecuentes — Sistemas Sépticos en Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ_SEPTICO.map((faq) => (
              <div key={faq.q} className="faq-item" style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4, padding: 28,
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
            ¿Necesita diseño de sistema séptico para su proyecto?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el uso (vivienda, hotel, institución, parcelación), el número de
            usuarios y el municipio. Le respondemos con propuesta técnica y presupuesto en
            menos de 24 horas. Trato directo con el director técnico — sin subcontratistas.
            COPNIA 17202-313228 · Especialista UNAL.
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
