import { useEffect } from 'react'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section } from '../components/ui'

const DEPARTMENTS = [
  {
    dept: 'Nariño', cities: 'Pasto, Ipiales, Tumaco', 
    context: 'Zona fronteriza con Ecuador. Proyectos de acueducto rural, gestión del riesgo volcánico e hídrico activos permanentemente.',
    icon: '🏔️'
  },
  {
    dept: 'Cauca', cities: 'Popayán, Santander de Quilichao, Puerto Tejada',
    context: 'Corredor Panamericano con expansión industrial y urbana. Proyectos de saneamiento básico y estudios de riesgo en municipios en crecimiento.',
    icon: '🌿'
  },
  {
    dept: 'Valle del Cauca', cities: 'Palmira, Tuluá, Buga, Buenaventura',
    context: 'Agroindustria azucarera y logística portuaria. Alta demanda de diseños hidrosanitarios industriales y sistemas contra incendios para bodegas y plantas.',
    icon: '🏭'
  },
  {
    dept: 'Chocó', cities: 'Quibdó, Itsmina, Tadó',
    context: 'Región con déficit crítico de infraestructura hídrica. Proyectos de agua potable y saneamiento financiados por regalías mineras y cooperación internacional.',
    icon: '💧'
  },
  {
    dept: 'Córdoba', cities: 'Montería, Montelíbano, Tierralta',
    context: 'Ganadería, minería de níquel y expansión urbana de Montería. Planes de ordenamiento territorial con estudios de riesgo hídrico obligatorios.',
    icon: '🌾'
  },
  {
    dept: 'Sucre', cities: 'Sincelejo, Corozal, Sampués',
    context: 'Zona de expansión residencial y agroindustrial. Proyectos de acueducto y alcantarillado financiados por el Sistema General de Regalías.',
    icon: '🏗️'
  },
  {
    dept: 'Bolívar', cities: 'Cartagena (área metropolitana), Magangué, El Carmen',
    context: 'Periferia de Cartagena con planes parciales activos. Proyectos portuarios e industriales con alta demanda de estudios hidrosanitarios y contra incendios.',
    icon: '⚓'
  },
  {
    dept: 'Atlántico', cities: 'Soledad, Malambo, Sabanalarga',
    context: 'Municipios satélite de Barranquilla con crecimiento acelerado. Planes parciales, zonas francas y proyectos logísticos con necesidad de diseños integrales.',
    icon: '🌊'
  },
  {
    dept: 'Magdalena', cities: 'Santa Marta, Ciénaga, Fundación',
    context: 'Turismo y agroindustria bananera. BIC ejecutó residencia de obra en zona industrial de Santa Marta. Experiencia verificable en el departamento.',
    icon: '🏖️'
  },
  {
    dept: 'Cesar', cities: 'Valledupar, Aguachica, La Jagua',
    context: 'Minería carbonífera y agroindustria. Proyectos de saneamiento básico y sistemas hídricos con financiación de regalías del carbón.',
    icon: '⛏️'
  },
  {
    dept: 'Guajira', cities: 'Riohacha, Maicao, Uribia',
    context: 'Minería de carbón y energías renovables. Proyectos de agua potable en zonas de alta vulnerabilidad hídrica con financiación internacional.',
    icon: '☀️'
  },
  {
    dept: 'Norte de Santander', cities: 'Cúcuta, Villa del Rosario, Los Patios',
    context: 'Zona fronteriza con Venezuela en recuperación económica activa. Alta demanda de infraestructura hídrica y saneamiento en municipios del área metropolitana.',
    icon: '🔄'
  },
  {
    dept: 'Arauca', cities: 'Arauca, Saravena, Tame',
    context: 'Regalías petroleras = inversión constante en acueductos rurales y saneamiento básico. Formulación de proyectos MGA-Web con alta demanda de consultores especializados.',
    icon: '🛢️'
  },
  {
    dept: 'Casanare', cities: 'Yopal, Aguazul, Tauramena',
    context: 'Boom petrolero sostenido. Municipios con regalías activas invierten permanentemente en acueducto, alcantarillado y gestión del riesgo hídrico en llanura aluvial.',
    icon: '🛢️'
  },
  {
    dept: 'Meta', cities: 'Acacías, Granada, Puerto López',
    context: 'Agroindustria y petróleo. Urbanización rápida de municipios con necesidad urgente de sistemas hídricos y estudios de riesgo para nuevos desarrollos.',
    icon: '🌴'
  },
  {
    dept: 'Putumayo', cities: 'Mocoa, Puerto Asís, Sibundoy',
    context: 'Zona de inversión post-desastre (Mocoa 2017). Proyectos de gestión del riesgo hídrico y sistemas de alerta temprana con financiación nacional e internacional.',
    icon: '🌧️'
  },
  {
    dept: 'Caquetá', cities: 'Florencia, San Vicente del Caguán',
    context: 'Post-conflicto con inversión activa. Proyectos de acueducto rural y saneamiento básico financiados por el Fondo Colombia en Paz y SGR.',
    icon: '🌳'
  },
  {
    dept: 'Vichada / Guainía / Vaupés', cities: 'Puerto Carreño, Inírida, Mitú',
    context: 'Departamentos con proyectos de agua potable rurales financiados por cooperación internacional. Demanda técnica especializada con muy pocos consultores disponibles.',
    icon: '🗺️'
  },
  {
    dept: 'Amazonas / San Andrés', cities: 'Leticia, San Andrés',
    context: 'Infraestructura hídrica en zonas insulares y amazónicas. Proyectos de abastecimiento de agua con desafíos técnicos únicos y financiación especial.',
    icon: '🌺'
  },
  {
    dept: 'Cundinamarca — municipios interiores', cities: 'Girardot, La Mesa, Fusagasugá, Villeta, Ubaté',
    context: 'Municipios de descanso y turismo rural en expansión. Proyectos de acueducto, alcantarillado y diseños hidrosanitarios para urbanizaciones turísticas y residenciales.',
    icon: '🏡'
  },
]

const SERVICES_NATIONAL = [
  { icon: '💧', label: 'Acueducto y alcantarillado municipal' },
  { icon: '🌊', label: 'Estudios de inundación y riesgo hídrico' },
  { icon: '🏗️', label: 'Diseño hidrosanitario y contra incendios' },
  { icon: '📋', label: 'Formulación proyectos regalías MGA-Web' },
  { icon: '🗺️', label: 'Ordenamiento territorial — componente hídrico' },
  { icon: '⛏️', label: 'Geotecnia e ingeniería ambiental' },
  { icon: '🏛️', label: 'Arquitectura y estudios estructurales' },
  { icon: '📐', label: 'Topografía y cartografía SIG' },
]

export default function CoverageNational() {
  useEffect(() => {
    document.title = 'Cobertura Nacional — BIC Bernal Ingeniería Consultores | Colombia'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content',
      'BIC — Bernal Ingeniería Consultores opera en todo Colombia: Nariño, Cauca, Valle, Chocó, Córdoba, Bolívar, Atlántico, Magdalena, Cesar, Santander, Arauca, Casanare, Meta, Putumayo, Caquetá, Cundinamarca y más. Consultoría integral hidráulica, geotecnia, arquitectura, ambiental y estructural.'
    )
  }, [])

  return (
    <>
      {/* HERO */}
      <section style={{ background: '#003B6F', padding: '120px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 860 }}>
          <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', marginBottom: 16 }}>
            🇨🇴 Cobertura Nacional
          </Tag>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 50px)', lineHeight: 1.15, marginBottom: 20 }}>
            Consultoría de Ingeniería<br />
            <span style={{ color: '#17A2B8' }}>en Todo Colombia</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: 660, lineHeight: 1.85, marginBottom: 12 }}>
            BIC — Bernal Ingeniería Consultores opera sin fronteras geográficas. A diferencia de las constructoras, 
            una firma consultora especializada trabaja donde el proyecto lo requiere — desde la Guajira hasta el Amazonas, 
            desde los Llanos hasta el Pacífico.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, maxWidth: 620, lineHeight: 1.75, marginBottom: 28 }}>
            Director: Rogerio Bernal Ríos · UNAL · COPNIA 17202-313228 · Experiencia en Colombia, Ecuador y México
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Btn href="https://wa.me/573024778910?text=Hola%2C%20tengo%20un%20proyecto%20y%20quiero%20consultar%20con%20BIC">
              📱 Consultar desde cualquier ciudad
            </Btn>
            <Btn href="/equipo" variant="outline" dark>Ver equipo BIC →</Btn>
          </div>
        </div>
      </section>

      {/* SERVICIOS DISPONIBLES */}
      <Section bg="#F8FAFC" style={{ padding: '56px 40px' }}>
        <div className="container">
          <SectionLabel>Servicios a nivel nacional</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(20px, 3vw, 28px)', margin: '1.2rem 0 2rem' }}>
            ¿Qué puede resolver BIC en tu departamento?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {SERVICES_NATIONAL.map(s => (
              <div key={s.label} style={{ padding: '16px 20px', background: '#fff', border: '1px solid #deedf5', borderRadius: 8, display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
                <span style={{ fontSize: 14, color: '#2C3E50', fontWeight: 500 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DEPARTAMENTOS */}
      <Section bg="#fff" style={{ padding: '60px 40px' }}>
        <div className="container">
          <SectionLabel>Cobertura por departamento</SectionLabel>
          <ThinLine />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 'clamp(20px, 3vw, 28px)', margin: '1.2rem 0 0.6rem' }}>
            Presencia técnica en 32 departamentos
          </h2>
          <p style={{ color: '#475569', fontSize: 15, lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 680 }}>
            Cada región de Colombia tiene retos técnicos únicos — suelos, hidrología, normativa local, entidades. 
            BIC aporta experiencia nacional e internacional para adaptarse a cada contexto.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.2rem' }}>
            {DEPARTMENTS.map(d => (
              <div key={d.dept} style={{
                padding: '1.4rem 1.6rem', background: '#fafcff',
                border: '1px solid #e0edf5', borderRadius: 10,
                transition: 'box-shadow 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,59,111,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{d.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#003B6F', margin: '0 0 2px' }}>
                      {d.dept}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#17A2B8', margin: 0, fontWeight: 600 }}>{d.cities}</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.83rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>{d.context}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* POR QUÉ UN CONSULTOR NO TIENE LÍMITES */}
      <Section bg="#f0f7fa" style={{ padding: '56px 40px' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionLabel>La ventaja del consultor vs la constructora</SectionLabel>
          <ThinLine />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', marginTop: '1.5rem' }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.8rem', border: '1px solid #deedf5' }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", color: '#475569', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Constructora local
              </h3>
              {['Opera en radio de 50–100 km', 'Ejecuta obras propias', 'No puede ser consultor imparcial', 'Capacidad limitada por obra en curso', 'Conflicto de interés en supervisión'].map(t => (
                <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                  <span style={{ color: '#dc3545', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>✗</span>
                  <span style={{ fontSize: '0.88rem', color: '#475569' }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#003B6F', borderRadius: 12, padding: '1.8rem' }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", color: '#17A2B8', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                BIC — Firma Consultora
              </h3>
              {['Opera en todo Colombia y Latinoamérica', 'Independiente: diseña, asesora, supervisa', 'Sin conflicto de interés — solo técnica', 'Capacidad para múltiples proyectos simultáneos', 'Equipo multidisciplinario bajo una sola dirección'].map(t => (
                <div key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                  <span style={{ color: '#17A2B8', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.82)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="#003B6F" style={{ padding: '56px 40px', textAlign: 'center' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 660 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 12 }}>
            ¿Tu proyecto está en cualquier lugar de Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, marginBottom: 28, lineHeight: 1.8 }}>
            Cuéntanos dónde y en qué consiste. BIC evalúa la viabilidad técnica y logística sin costo — 
            respuesta en menos de 24 horas hábiles.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
            <Btn href="https://wa.me/573024778910?text=Hola%2C%20tengo%20un%20proyecto%20y%20quiero%20consultar%20con%20BIC">
              📱 WhatsApp — respuesta en menos de 2h
            </Btn>
            <Btn href="/contacto" variant="outline" dark>Formulario de contacto</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['32 departamentos', 'BIC — Equipo Multidisciplinario', 'COPNIA 17202-313228', '10+ años', 'Colombia · Ecuador · México'].map(b => (
              <Tag key={b} style={{ fontSize: 11 }}>{b}</Tag>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
