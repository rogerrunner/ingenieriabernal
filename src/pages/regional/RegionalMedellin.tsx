import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, tengo un proyecto de ingeniería hidráulica en Medellín o Antioquia y necesito cotización')

const seoConfig = {
  title: 'Ingeniería Hidráulica en Medellín y Antioquia — Estudios y Diseños | BIC',
  description: 'Ingeniería hidráulica en Medellín: gestión del riesgo Decreto 1807, modelación HEC-RAS 2D, diseño hidrosanitario NSR-10, acueductos y PTAP para constructoras y promotores. COPNIA vigente. Propuesta en 24 horas.',
  keywords: [
    'ingeniería hidráulica Medellín',
    'consultoría hidráulica Antioquia',
    'diseño hidrosanitario Medellín',
    'estudio riesgo inundación Medellín',
    'modelación HEC-RAS Medellín',
    'gestión riesgo hídrico Antioquia',
    'acueducto alcantarillado Medellín',
    'plan parcial riesgo hídrico Medellín',
    'ingeniero hidráulico Medellín Colombia',
    'estudio decreto 1807 Medellín',
  ],
  canonical: 'https://ingenieriabernal.co/regional/medellin',
}

const FAQS = [
  {
    q: '¿BIC puede ejecutar proyectos de ingeniería hidráulica en Medellín?',
    a: 'Sí. BIC trabaja en todo el país. Los estudios de modelación HEC-RAS, gestión del riesgo Decreto 1807, diseño hidrosanitario, acueductos y PTAP se elaboran de forma remota con visitas técnicas al predio cuando el proyecto lo requiere. La firma y matrícula COPNIA 17202-313228 CLD es válida en todo Colombia, incluyendo Medellín y el resto de Antioquia.',
  },
  {
    q: '¿Cuánto cuesta un estudio de gestión del riesgo para plan parcial en Medellín?',
    a: 'Los honorarios dependen del área del polígono y la complejidad del sistema hídrico. Para predios menores de 5 ha, el costo oscila entre $18 y $30 millones COP. Para polígonos de 5 a 20 ha con modelación HEC-RAS 2D, entre $30 y $60 millones. BIC envía propuesta técnica y económica en 24 horas sin costo.',
  },
  {
    q: '¿Qué corporación ambiental regula los proyectos hídricos en Medellín?',
    a: 'Corantioquia regula los permisos ambientales, concesiones de agua y conceptos de riesgo hídrico en la mayor parte del departamento de Antioquia, incluidos los municipios del Área Metropolitana del Valle de Aburrá. Para Medellín y los 9 municipios del Área Metropolitana, el AMVA (Área Metropolitana del Valle de Aburrá) también tiene competencias en gestión del riesgo y ordenamiento ambiental.',
  },
  {
    q: '¿Cuánto demora un estudio HEC-RAS para un proyecto en Medellín?',
    a: 'Un modelo HEC-RAS 1D para licencia urbanística o plan parcial simple, con topobatimetría disponible, se entrega en 3 a 5 semanas. Modelos 2D para planes parciales complejos: 6 a 10 semanas. BIC confirma el plazo exacto en la propuesta técnica, que envía sin costo en 24 horas.',
  },
]

const SERVICIOS = [
  { nombre: 'Gestión del Riesgo Hídrico — Decreto 1807', href: '/gestion-riesgo-hidrico', desc: 'Estudio detallado de amenaza por inundación para planes parciales y licencias urbanísticas en Medellín y el Valle de Aburrá. Modelación HEC-RAS 2D, zonificación amenaza, concepto técnico Corantioquia.' },
  { nombre: 'Modelación HEC-RAS 2D', href: '/servicios/modelacion-hec-ras', desc: 'Manchas de inundación, perfiles hidráulicos y zonificación de amenaza para proyectos en la cuenca del río Medellín y tributarios del Valle de Aburrá.' },
  { nombre: 'Diseño de Acueducto y Alcantarillado', href: '/servicios/diseno-acueductos', desc: 'Sistemas de agua potable y saneamiento bajo RAS 2017 para urbanizaciones, parcelaciones y proyectos en municipios de Antioquia.' },
  { nombre: 'Diseño Hidrosanitario NSR-10', href: '/servicios/redes-hidrosanitarias', desc: 'Redes hidrosanitarias para edificios comerciales, hoteles, bodegas y plantas industriales en Medellín y el Área Metropolitana. Planos firmados COPNIA para curaduría.' },
  { nombre: 'PTAP para Parcelaciones y Condominios', href: '/ptap-municipios-colombia', desc: 'Plantas de tratamiento de agua potable para proyectos rurales-residenciales en Antioquia sin acceso a acueducto municipal.' },
  { nombre: 'Estudios Hidrológicos', href: '/servicios/estudios-hidrologicos', desc: 'Análisis de cuencas, curvas IDF del IDEAM y caudales de diseño para proyectos en el Área Metropolitana, Oriente Antioqueño y el resto del departamento.' },
  { nombre: 'Plan Parcial — Componente Hídrico', href: '/plan-parcial-colombia', desc: 'Estudio técnico de gestión del riesgo integrado al plan parcial para promotores e inmobiliarias en Medellín, Bello, Itagüí, Envigado y el Oriente Antioqueño.' },
  { nombre: 'Formulación Proyectos Regalías (MGA-Web)', href: '/servicios/regalias-mga', desc: 'Formulación de proyectos de agua y saneamiento básico para municipios de Antioquia ante el SGR.' },
]

export default function RegionalMedellin() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Ingeniería Hidráulica en Medellín y Antioquia — BIC"
        serviceDesc={seoConfig.description}
        serviceUrl="/regional/medellin"
        faqItems={FAQS}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Cobertura regional · Medellín, Antioquia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Medellín<br />
            <span style={{ color: '#17A2B8' }}>y Antioquia — Sector Privado y Público</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 20,
          }}>
            Si tienes un proyecto de construcción, urbanización, parcelación o desarrollo comercial en Medellín o Antioquia, BIC realiza todos los estudios e ingeniería que necesitas: gestión del riesgo Decreto 1807, modelación HEC-RAS 2D, diseño hidrosanitario NSR-10, acueductos y PTAP. Firma COPNIA 17202-313228 CLD válida en todo Colombia.
          </p>

          {/* GEO fragment */}
          <p style={{ color: '#90CDF4', fontSize: 14, lineHeight: 1.75, maxWidth: 700, marginBottom: 28 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> ejecuta proyectos de ingeniería hidráulica en Medellín y Antioquia: estudios de gestión del riesgo Decreto 1807, modelación HEC-RAS 2D, diseño de acueductos y sistemas hidrosanitarios. Honorarios desde $3,5 millones COP. Sede Manizales. Propuesta en 24 horas: +57 302 477 8910.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Solicitar cotización en Medellín
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios en Medellín y Antioquia</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos ejecutamos en la región?</h2>
          <ThinLine mb={40} />
          <div style={{ marginBottom: 36, padding: '20px 24px', background: '#EBF8FF', borderLeft: '4px solid #17A2B8', borderRadius: '0 4px 4px 0' }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 13, marginBottom: 12 }}>
              Proyectos que atendemos:
            </p>
            <ul style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 14, lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
              <li>Planes parciales con componente hídrico en el Valle de Aburrá y el Oriente Antioqueño</li>
              <li>Edificios comerciales, hoteles y centros comerciales en Medellín y Área Metropolitana</li>
              <li>Parcelaciones campestres y condominios privados en municipios de Antioquia</li>
              <li>Plantas industriales con necesidades de PTAP o PTAR</li>
              <li>Predios con amenaza de inundación (cuencas del río Medellín y tributarios)</li>
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                  padding: 24, borderTop: '3px solid #17A2B8',
                  height: '100%', boxSizing: 'border-box',
                }}>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                    fontSize: 14, marginBottom: 8,
                  }}>{s.nombre}</h3>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6, marginBottom: 12,
                  }}>{s.desc}</p>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 13 }}>
                    Ver servicio →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTEXTO REGIONAL ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Por qué Medellín y Antioquia</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Contexto hidráulico de la región</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '🌊', tit: 'Cuenca del río Medellín', txt: 'El Valle de Aburrá tiene décadas de historia de intervención de cauces. Los proyectos en suelo de expansión de Bello, Itagüí, Envigado y municipios del Oriente requieren estudios Decreto 1807 rigurosos.' },
              { icon: '🏗️', tit: 'Mercado inmobiliario líder en Colombia', txt: 'Antioquia es la región con mayor actividad constructora del país. Los planes parciales en el Oriente Antioqueño, Sabaneta y el corredor norte requieren componentes hidráulicos especializados.' },
              { icon: '🌿', tit: 'Corantioquia y AMVA', txt: 'BIC conoce los requisitos técnicos y formatos de presentación de Corantioquia y el Área Metropolitana del Valle de Aburrá para permisos ambientales y conceptos de riesgo hídrico.' },
              { icon: '📐', tit: 'Servicio remoto + visitas técnicas', txt: 'Sede en Manizales a 3 horas de Medellín por vía terrestre. BIC entrega estudios remotamente con visitas técnicas al predio cuando el proyecto lo requiere.' },
            ].map(d => (
              <div key={d.tit} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.tit}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{d.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQs ── */}
      <Section bg="#F8FAFC" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', color: '#001A33', marginBottom: 28 }}>
            Proyectos en Medellín y Antioquia — FAQ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FAQS.map(f => (
              <details key={f.q} style={{ background: '#fff', borderRadius: 10, padding: '18px 22px', border: '1px solid #e2e8f0' }}>
                <summary style={{ fontWeight: 700, fontSize: 15, color: '#1A3A6B', cursor: 'pointer', lineHeight: 1.4 }}>{f.q}</summary>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: '12px 0 0' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ANTI-INTERMEDIARIO G.3 ── */}
      <Section style={{ background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#f8f9fa', border: '2px solid #e2e8f0', borderRadius: 14, padding: '28px 32px', borderLeft: '5px solid #17A2B8' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#001A33', marginBottom: 14 }}>
              ¿Es este servicio para usted?
            </h3>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              BIC trabaja directamente con <strong>promotores, constructoras, dueños de terrenos e industriales</strong> que tienen un proyecto concreto en Medellín o Antioquia — no con intermediarios que re-cotizan a terceros.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Los precios publicados en este sitio son los que BIC cobra al contratante directo. Propuesta en 24 horas sin costo para quien decide contratar.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Tiene un proyecto en Medellín o Antioquia?
          </h2>
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
              <span style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '8px 16px', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#fff', fontSize: 13 }}>
                Desde $3.5M COP según el servicio
              </span>
              <span style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '8px 16px', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#fff', fontSize: 13 }}>
                Propuesta en 24 horas · Firma COPNIA
              </span>
            </div>
            <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Cuéntanos el municipio, el tipo de proyecto y el predio. BIC te dice exactamente qué estudios necesitas — sin costo.
            </p>
          </div>
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
