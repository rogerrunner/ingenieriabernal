import { useEffect, useRef, useMemo } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

// ──────────────────────────────────────────────────────────────────
//  WOMPI — reemplaza con tu llave pública real del dashboard
//  commerce.wompi.co → Configuración → Llaves de API → Llave pública
// ──────────────────────────────────────────────────────────────────
const WOMPI_PUBLIC_KEY = 'pub_prod_RaAc9NiLz1B81KcmEatbgWtGG2kFGEO0'

/** Botón de pago Wompi embebido vía widget oficial. */
function WompiButton({ amountCop, reference }: { amountCop: number; reference: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    // limpiar renderizaciones previas (hot-reload)
    container.innerHTML = ''
    const form = document.createElement('form')
    const script = document.createElement('script')
    script.src = 'https://checkout.wompi.co/widget.js'
    script.setAttribute('data-render', 'button')
    script.setAttribute('data-public-key', WOMPI_PUBLIC_KEY)
    script.setAttribute('data-currency', 'COP')
    script.setAttribute('data-amount-in-cents', String(amountCop * 100))
    script.setAttribute('data-reference', reference)
    script.setAttribute('data-redirect-url', 'https://ingenieriabernal.co/servicios/estudio-basico?pago=exitoso')
    form.appendChild(script)
    container.appendChild(form)
    return () => { container.innerHTML = '' }
  }, [amountCop, reference])

  return <div ref={containerRef} />
}

/** Instancia fija para el Estudio Básico a $8.000.000 COP */
function WompiBasicoButton() {
  const reference = useMemo(
    () => `BIC-EB-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
    []
  )
  return <WompiButton amountCop={8_000_000} reference={reference} />
}

const WA = '573024778910'
const MSG_BASICO = encodeURIComponent('Hola, quiero contratar el estudio básico de zonificación de riesgo hídrico desde $8M. ¿Cómo procedemos?')
const MSG_MEDIO  = encodeURIComponent('Hola, quiero contratar el estudio HEC-RAS 2D para plan parcial desde $20M. ¿Cómo procedemos?')

const seoConfig = {
  title: 'Estudio Básico de Riesgo Hídrico desde $8M COP — Propuesta Inmediata | BIC',
  description: 'Zonificación de riesgo hídrico para licencias y POT: desde $8 millones COP. Estudio HEC-RAS 1D, informe COPNIA, mapa de amenaza. BIC — propuesta en 24 horas, sin intermediarios.',
  keywords: [
    'estudio riesgo hídrico precio Colombia',
    'zonificación amenaza inundación precio',
    'estudio básico decreto 1807 costo',
    'estudio hídrico licencia urbanismo precio',
    'cuánto cuesta estudio riesgo hídrico Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/estudio-basico',
}

const PAQUETES = [
  {
    id: 'basico',
    tag: 'Más contratado',
    nombre: 'Estudio Básico',
    subtitulo: 'Zonificación HEC-RAS 1D — POT, licencias simples',
    precio: '$8M – $15M COP',
    plazo: '3 – 5 semanas',
    color: '#17A2B8',
    incluye: [
      'Análisis hidrológico HEC-HMS (caudales Tr 10, 50, 100 años)',
      'Modelo hidráulico HEC-RAS 1D del cauce',
      'Mapa de amenaza alta / media / baja (SIG/shapefile)',
      'Informe técnico firmado COPNIA 17202-313228 CLD',
      'Formato listo para radicación ante CAR o Planeación',
    ],
    aplica: 'Predios POT/EOT, licencias urbanísticas simples, verificación de retiro de cauce',
    msg: MSG_BASICO,
  },
  {
    id: 'decreto1807',
    tag: 'Plan Parcial / Decreto 1807',
    nombre: 'Estudio Detallado',
    subtitulo: 'Zonificación HEC-RAS 2D — planes parciales y urbanizaciones',
    precio: '$20M – $60M COP',
    plazo: '6 – 12 semanas',
    color: '#003B6F',
    incluye: [
      'Todo lo del Estudio Básico',
      'Malla computacional 2D calibrada con eventos históricos',
      'Cartografía 1:2.000 aprobable por CAR y Planeación municipal',
      'Perfiles de lámina de agua y mapas de velocidad',
      'Propuesta de medidas de mitigación (diques, retiros, cotas)',
      'Concepto de aptitud urbanística firmado COPNIA',
    ],
    aplica: 'Planes parciales (Decreto 1807), urbanizaciones en zona de amenaza media-alta, proyectos POMCA',
    msg: MSG_MEDIO,
  },
]

export default function EstudioBasico() {
  useEffect(() => {
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-estudio-basico'
    s.text = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Estudio Básico de Riesgo Hídrico — BIC',
        description: 'Zonificación de amenaza por inundación con HEC-RAS, informe firmado COPNIA para licencias y POT. Desde $8 millones COP.',
        provider: { '@type': 'Organization', name: 'BIC — Bernal Ingeniería Consultores', url: 'https://ingenieriabernal.co' },
        areaServed: { '@type': 'Country', name: 'Colombia' },
        offers: [
          { '@type': 'Offer', name: 'Estudio Básico HEC-RAS 1D', priceCurrency: 'COP', price: '8000000', priceSpecification: { '@type': 'PriceSpecification', minPrice: 8000000, maxPrice: 15000000, priceCurrency: 'COP' } },
          { '@type': 'Offer', name: 'Estudio Detallado HEC-RAS 2D', priceCurrency: 'COP', price: '20000000', priceSpecification: { '@type': 'PriceSpecification', minPrice: 20000000, maxPrice: 60000000, priceCurrency: 'COP' } },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: '¿Cuánto cuesta un estudio básico de riesgo hídrico en Colombia?', acceptedAnswer: { '@type': 'Answer', text: 'Un estudio básico HEC-RAS 1D para licencias y POT cuesta entre $8 y $15 millones COP, con entrega en 3 a 5 semanas. Incluye análisis hidrológico, modelo hidráulico, mapa de amenaza SIG e informe firmado COPNIA.' } },
          { '@type': 'Question', name: '¿Qué diferencia hay entre el estudio básico y el detallado Decreto 1807?', acceptedAnswer: { '@type': 'Answer', text: 'El estudio básico (HEC-RAS 1D) aplica para POT y licencias simples. El estudio detallado (HEC-RAS 2D) es el que exige el Decreto 1807 para planes parciales y urbanizaciones en zona de amenaza.' } },
        ],
      },
    ])
    document.head.appendChild(s)
    return () => { document.getElementById('schema-estudio-basico')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 72,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel light>Precio fijo · Sin intermediarios · Colombia</SectionLabel>
          <ThinLine color="#17A2B8" width={48} mb={20} />
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px,5vw,46px)',
            color: '#fff', fontWeight: 700, lineHeight: 1.18, marginBottom: 20,
          }}>
            Estudio de riesgo hídrico<br />
            <span style={{ color: '#17A2B8' }}>desde $8 millones COP</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", fontSize: 17, color: 'rgba(255,255,255,0.82)',
            maxWidth: 640, lineHeight: 1.7, marginBottom: 32,
          }}>
            Propuesta técnica y económica en <strong style={{ color: '#fff' }}>24 horas</strong>.
            Firma COPNIA 17202-313228 CLD. Informe apto para radicación ante CAR, Planeación
            municipal y curadurías. Sin intermediarios.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${MSG_BASICO}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#25D366', color: '#fff', textDecoration: 'none',
                padding: '14px 28px', borderRadius: 2,
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14,
              }}
            >
              📱 Contratar ahora — WhatsApp
            </a>
            <Btn href="/contacto" variant="outline" dark>✉️ Describir mi proyecto</Btn>
          </div>
        </div>
      </section>

      {/* ── PAQUETES ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Paquetes con precio publicado</SectionLabel>
          <ThinLine color="#17A2B8" width={40} mb={16} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,4vw,32px)', color: '#003B6F', marginBottom: 8 }}>
            Seleccione el estudio que necesita
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, marginBottom: 40, maxWidth: 600 }}>
            Precio fijo por tipo de estudio. Sin letra chica. La propuesta confirma el valor exacto según su predio.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {PAQUETES.map(p => (
              <div key={p.id} style={{
                background: '#fff', borderRadius: 4,
                border: `2px solid ${p.color}22`,
                boxShadow: '0 4px 20px rgba(0,59,111,0.08)',
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ background: p.color, padding: '16px 24px' }}>
                  <Tag style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', marginBottom: 8 }}>
                    {p.tag}
                  </Tag>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#fff', fontWeight: 700 }}>{p.nombre}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>{p.subtitulo}</div>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 26, color: p.color }}>{p.precio}</div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#64748B', marginTop: 2 }}>Plazo estimado: {p.plazo}</div>
                  </div>
                  <ul style={{ margin: '0 0 20px', paddingLeft: 0, listStyle: 'none', flex: 1 }}>
                    {p.incluye.map((item, i) => (
                      <li key={i} style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#334155', padding: '5px 0', borderBottom: '1px solid #F1F5F9', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <span style={{ color: '#17A2B8', flexShrink: 0, marginTop: 2 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div style={{ background: '#F8FAFC', borderRadius: 2, padding: '10px 14px', marginBottom: 20, fontSize: 13, fontFamily: "'Lato', sans-serif", color: '#475569' }}>
                    <strong style={{ color: '#003B6F' }}>Aplica para:</strong> {p.aplica}
                  </div>
                  <a
                    href={`https://wa.me/${WA}?text=${p.msg}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
                      background: '#25D366', color: '#fff', textDecoration: 'none',
                      padding: '13px 20px', borderRadius: 2,
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13,
                    }}
                  >
                    📱 Contratar por WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PAGO EN LÍNEA (WOMPI) ── */}
      <Section bg="#EBF5F9" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel>Pago seguro en línea · Colombia</SectionLabel>
          <ThinLine color="#17A2B8" width={40} mb={16} center />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px,3.5vw,28px)', color: '#003B6F', marginBottom: 12 }}>
            Compra el Estudio Básico ahora desde tu computador
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.7, marginBottom: 8, maxWidth: 540, margin: '0 auto 24px' }}>
            Pago único de <strong style={{ color: '#003B6F' }}>$8.000.000 COP</strong> con tarjeta débito / crédito, PSE o Nequi.
            Recibirás confirmación inmediata y BIC iniciará el estudio dentro de las 24 horas hábiles siguientes.
          </p>
          <div style={{
            background: '#fff', borderRadius: 6,
            border: '2px solid #17A2B822',
            boxShadow: '0 4px 24px rgba(0,59,111,0.10)',
            padding: '32px 28px',
            display: 'inline-block',
            minWidth: 300,
          }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 28, color: '#17A2B8', marginBottom: 4 }}>
              $8.000.000 COP
            </div>
            <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#64748B', marginBottom: 20 }}>
              Estudio Básico HEC-RAS 1D — precio fijo
            </div>
            <WompiBasicoButton />
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: '#94A3B8', marginTop: 16, marginBottom: 0 }}>
              🔒 Procesado por Wompi (Bancolombia) · Pago 100 % seguro
            </p>
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#475569', marginTop: 20, maxWidth: 500, margin: '20px auto 0' }}>
            ¿Necesitas el Estudio Detallado ($20M–$60M) o tienes preguntas?{' '}
            <a href={`https://wa.me/${WA}?text=${MSG_BASICO}`} target="_blank" rel="noopener noreferrer" style={{ color: '#17A2B8', fontWeight: 600 }}>
              Escríbenos por WhatsApp →
            </a>
          </p>
        </div>
      </Section>

      {/* ── QUÉ INCLUYE / PROCESO ── */}
      <Section bg="#fff" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionLabel>Proceso de contratación</SectionLabel>
          <ThinLine color="#17A2B8" width={40} mb={16} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: '#003B6F', marginBottom: 32 }}>
            De propuesta a entregable en 4 pasos
          </h2>
          {[
            { n: '01', t: 'Contacto por WhatsApp o formulario', d: 'Nos envía la ubicación del predio (municipio, vereda o coordenadas) y el tipo de licencia o trámite que necesita.' },
            { n: '02', t: 'Propuesta técnica en 24 horas', d: 'BIC revisa la norma del POT local y la disponibilidad de información hidrológica. Le enviamos propuesta con precio fijo, alcance y cronograma.' },
            { n: '03', t: 'Inicio inmediato tras anticipo', d: 'Con el 50% de anticipo iniciamos la recopilación de datos IDEAM, construcción del modelo hidrológico e hidráulico.' },
            { n: '04', t: 'Entrega firmada COPNIA y lista para radicación', d: 'Informe técnico, mapas SIG y planos firmados COPNIA 17202-313228 CLD. Enviamos en formato digital y físico según lo requiera la entidad.' },
          ].map(step => (
            <div key={step.n} style={{ display: 'flex', gap: 20, marginBottom: 28, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: '50%', background: '#EBF5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#17A2B8', fontSize: 13 }}>
                {step.n}
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 15, marginBottom: 4 }}>{step.t}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6 }}>{step.d}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TRUST / CREDENCIALES ── */}
      <Section bg="#003B6F" style={{ padding: '56px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <ThinLine color="#17A2B8" width={48} mb={20} center />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: '#fff', marginBottom: 16 }}>
            Por qué BIC
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.80)', fontSize: 15, lineHeight: 1.7, maxWidth: 620, margin: '0 auto 32px' }}>
            Firma especializada en hidráulica, sin intermediarios ni subcontratación. Rogerio Bernal Ríos — Especialista en Ingeniería Hidráulica, Universidad Nacional de Colombia. Matrícula COPNIA 17202-313228 CLD activa.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 36 }}>
            {[
              { n: '50+', l: 'Proyectos ejecutados' },
              { n: '24 h', l: 'Tiempo de propuesta' },
              { n: 'COPNIA', l: '17202-313228 CLD' },
              { n: 'UNAL', l: 'Esp. Ing. Hidráulica' },
            ].map(s => (
              <div key={s.n} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 22, color: '#17A2B8' }}>{s.n}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.70)' }}>{s.l}</div>
              </div>
            ))}
          </div>
          <a
            href={`https://wa.me/${WA}?text=${MSG_BASICO}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#25D366', color: '#fff', textDecoration: 'none',
              padding: '14px 32px', borderRadius: 2,
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 14,
            }}
          >
            📱 Solicitar propuesta ahora — sin costo
          </a>
        </div>
      </Section>
    </>
  )
}
