import { useState, useMemo } from 'react'
import { useEffect } from 'react'
import SchemaMarkup from '@/components/SchemaMarkup'

const WA = '573024778910'

const DEPARTAMENTOS = [
  'Amazonas','Antioquia','Arauca','Atlántico','Bolívar','Boyacá','Caldas',
  'Caquetá','Casanare','Cauca','Cesar','Chocó','Córdoba','Cundinamarca',
  'Guainía','Guaviare','Huila','La Guajira','Magdalena','Meta','Nariño',
  'Norte de Santander','Putumayo','Quindío','Risaralda','San Andrés y Providencia',
  'Santander','Sucre','Tolima','Valle del Cauca','Vaupés','Vichada',
]

type Estudio = 'hidrologico' | 'hec-ras' | 'acueducto' | 'ptar' | 'ptap' | 'otro'
type Area = 'lt50' | '50-200' | '200-1000' | 'gt1000'
type Complejidad = 'basico' | 'intermedio' | 'avanzado'

interface PriceMatrix {
  [key: string]: { [key: string]: [number, number] }
}

// Base price ranges in millions COP [min, max] indexed by complejidad
const BASE: PriceMatrix = {
  hidrologico: { basico: [3.5, 6],   intermedio: [6, 9],    avanzado: [9, 12]   },
  'hec-ras':   { basico: [5, 9],    intermedio: [9, 13],   avanzado: [13, 18]  },
  acueducto:   { basico: [6, 11],   intermedio: [11, 18],  avanzado: [18, 25]  },
  ptar:        { basico: [8, 15],   intermedio: [15, 25],  avanzado: [25, 35]  },
  ptap:        { basico: [10, 20],  intermedio: [20, 30],  avanzado: [30, 40]  },
  otro:        { basico: [4, 8],    intermedio: [8, 14],   avanzado: [14, 22]  },
}

// Area multipliers
const AREA_MUL: Record<Area, number> = {
  'lt50': 1.0,
  '50-200': 1.3,
  '200-1000': 1.7,
  'gt1000': 2.2,
}

// Weeks ranges
const WEEKS: Record<Complejidad, Record<Area, [number, number]>> = {
  basico:     { 'lt50': [2,3],  '50-200': [3,4],   '200-1000': [4,6],   'gt1000': [6,8]   },
  intermedio: { 'lt50': [3,5],  '50-200': [5,7],   '200-1000': [7,9],   'gt1000': [9,12]  },
  avanzado:   { 'lt50': [5,8],  '50-200': [8,11],  '200-1000': [11,14], 'gt1000': [14,20] },
}

const ENTREGABLES: Record<Estudio, string[]> = {
  hidrologico: [
    'Delimitación y caracterización morfométrica de la cuenca',
    'Análisis de frecuencia de precipitación (Log-Pearson III)',
    'Curvas IDF (IDEAM) y caudales de diseño HEC-HMS',
    'Memoria de cálculo firmada por Ingeniero COPNIA',
    'Mapas hidrológicos en QGIS/AutoCAD',
  ],
  'hec-ras': [
    'Modelo hidráulico HEC-RAS 1D/2D calibrado',
    'Manchas de inundación para tr 10, 25, 50 y 100 años',
    'Mapas de amenaza hídrica según Decreto 1807/2014',
    'Memoria de cálculo y archivo .prj del modelo',
    'Informe técnico firmado COPNIA para radicación ante CAR o curaduría',
  ],
  acueducto: [
    'Estudio de demanda y proyección de población (RAS 2017)',
    'Diseño hidráulico en EPANET (redes de distribución)',
    'Diseño de captación, conducción y almacenamiento',
    'Planos constructivos en AutoCAD',
    'Especificaciones técnicas y presupuesto de obra',
  ],
  ptar: [
    'Caracterización de aguas residuales y caudales de diseño',
    'Selección y dimensionamiento del tren de tratamiento',
    'Diseño civil, hidráulico y eléctrico de la planta',
    'Planos constructivos y memorias de cálculo COPNIA',
    'Tramitación del permiso de vertimiento ante la CAR',
  ],
  ptap: [
    'Análisis de calidad de la fuente (fisicoquímico y microbiológico)',
    'Diseño del tren de tratamiento (coagulación, floculación, filtración, desinfección)',
    'Cálculo de dosificación de químicos y capacidad de almacenamiento',
    'Planos constructivos y memorias COPNIA',
    'Manual de operación y mantenimiento',
  ],
  otro: [
    'Diagnóstico técnico del proyecto',
    'Memoria de cálculo hidráulico firmada COPNIA',
    'Planos en AutoCAD según el alcance',
    'Informe técnico con entregables acordados',
  ],
}

const NOMBRES_ESTUDIO: Record<Estudio, string> = {
  hidrologico: 'Estudio hidrológico',
  'hec-ras': 'Modelación HEC-RAS',
  acueducto: 'Diseño de acueducto',
  ptar: 'Diseño de PTAR',
  ptap: 'Diseño de PTAP',
  otro: 'Estudio / otro',
}

function formatCOP(millions: number): string {
  const val = Math.round(millions * 1_000_000)
  return '$' + val.toLocaleString('es-CO')
}

export default function CalculadoraHidraulica() {
  const [estudio, setEstudio] = useState<Estudio | ''>('')
  const [area, setArea] = useState<Area | ''>('')
  const [complejidad, setComplejidad] = useState<Complejidad | ''>('')
  const [depto, setDepto] = useState('')
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    document.title = 'Calculadora de Costos — Estudios Hidráulicos | Ingeniería Bernal'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Estime el costo de su estudio hidráulico en Colombia en segundos. Ingrese tipo de estudio, área y complejidad para obtener un rango de precios en COP y tiempo de entrega.')
  }, [])

  const result = useMemo(() => {
    if (!estudio || !area || !complejidad) return null
    const base = BASE[estudio][complejidad]
    const mul = AREA_MUL[area as Area]
    const min = base[0] * mul
    const max = base[1] * mul
    const weeks = WEEKS[complejidad as Complejidad][area as Area]
    return { min, max, weeks, entregables: ENTREGABLES[estudio] }
  }, [estudio, area, complejidad])

  function handleCalcular() {
    if (estudio && area && complejidad) setShowResult(true)
  }

  function buildWaMsg() {
    const parts = [
      'Hola, usé la calculadora de BIC y quiero una cotización detallada.',
      estudio ? `Estudio: ${NOMBRES_ESTUDIO[estudio]}` : '',
      area ? `Área: ${area === 'lt50' ? '< 50 km²' : area === '50-200' ? '50–200 km²' : area === '200-1000' ? '200–1000 km²' : '> 1000 km²'}` : '',
      complejidad ? `Complejidad: ${complejidad.charAt(0).toUpperCase() + complejidad.slice(1)}` : '',
      depto ? `Departamento: ${depto}` : '',
    ].filter(Boolean).join('\n')
    return encodeURIComponent(parts)
  }

  const allFilled = estudio && area && complejidad

  return (
    <>
      <SchemaMarkup
        type="service"
        serviceName="Calculadora de Costos — Estudios Hidráulicos"
        serviceDesc="Herramienta interactiva para estimar el costo de estudios hidráulicos en Colombia: estudios hidrológicos, modelación HEC-RAS, diseño de acueductos, PTAR y PTAP."
        serviceUrl="/calculadora-estudios-hidraulicos"
      />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #002A50 0%, #003B6F 60%, #004F96 100%)',
        padding: 'clamp(48px, 8vw, 96px) 24px 56px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 39px,#fff 39px,#fff 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#fff 39px,#fff 40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <span style={{ display: 'inline-block', background: '#17A2B8', color: '#fff', fontSize: 12, fontFamily: 'Montserrat,sans-serif', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 2, marginBottom: 20 }}>
            Herramienta gratuita
          </span>
          <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(28px,5vw,48px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, margin: '0 0 16px' }}>
            Calculadora de Costos<br />Estudios Hidráulicos
          </h1>
          <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, margin: '0 auto', maxWidth: 580 }}>
            Estime el rango de inversión para su proyecto en Colombia. Seleccione el tipo de estudio, área y complejidad para obtener una referencia de precios y plazos de entrega en segundos.
          </p>
        </div>
      </section>

      {/* Calculator card */}
      <section style={{ background: '#F1F5F9', padding: 'clamp(32px,6vw,72px) 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 4px 32px rgba(0,59,111,0.10)', overflow: 'hidden' }}>

            {/* Form header */}
            <div style={{ background: '#003B6F', padding: '20px 32px' }}>
              <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Configure su estudio
              </h2>
            </div>

            <div style={{ padding: 'clamp(24px,4vw,40px) clamp(20px,4vw,40px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>

                {/* Tipo de estudio */}
                <div>
                  <label style={labelStyle}>Tipo de estudio *</label>
                  <select
                    value={estudio}
                    onChange={e => { setEstudio(e.target.value as Estudio); setShowResult(false) }}
                    style={selectStyle}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="hidrologico">Estudio hidrológico</option>
                    <option value="hec-ras">Modelación HEC-RAS</option>
                    <option value="acueducto">Diseño acueducto</option>
                    <option value="ptar">Diseño PTAR</option>
                    <option value="ptap">Diseño PTAP</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Área */}
                <div>
                  <label style={labelStyle}>Área de la cuenca / proyecto *</label>
                  <select
                    value={area}
                    onChange={e => { setArea(e.target.value as Area); setShowResult(false) }}
                    style={selectStyle}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="lt50">{'< 50 km²'}</option>
                    <option value="50-200">50 – 200 km²</option>
                    <option value="200-1000">200 – 1000 km²</option>
                    <option value="gt1000">{'> 1000 km²'}</option>
                  </select>
                </div>

                {/* Complejidad */}
                <div>
                  <label style={labelStyle}>Complejidad *</label>
                  <select
                    value={complejidad}
                    onChange={e => { setComplejidad(e.target.value as Complejidad); setShowResult(false) }}
                    style={selectStyle}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="basico">Básico</option>
                    <option value="intermedio">Intermedio</option>
                    <option value="avanzado">Avanzado</option>
                  </select>
                </div>

                {/* Departamento */}
                <div>
                  <label style={labelStyle}>Municipio / Departamento</label>
                  <select
                    value={depto}
                    onChange={e => setDepto(e.target.value)}
                    style={selectStyle}
                  >
                    <option value="">Seleccionar...</option>
                    {DEPARTAMENTOS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>

              {/* Complejidad guide */}
              <div style={{ marginTop: 20, padding: '12px 16px', background: '#EBF5F9', borderRadius: 4, borderLeft: '3px solid #17A2B8' }}>
                <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 13, color: '#475569', margin: 0, lineHeight: 1.6 }}>
                  <strong style={{ color: '#003B6F' }}>Básico:</strong> un cauce principal, sin topografía, sin permisos CAR. &nbsp;
                  <strong style={{ color: '#003B6F' }}>Intermedio:</strong> 2–4 cauces, levantamiento topográfico, informe para curaduría. &nbsp;
                  <strong style={{ color: '#003B6F' }}>Avanzado:</strong> modelo 2D, múltiples escenarios, trámite ante autoridad ambiental.
                </p>
              </div>

              <button
                onClick={handleCalcular}
                disabled={!allFilled}
                style={{
                  marginTop: 28,
                  background: allFilled ? '#17A2B8' : '#94A3B8',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  padding: '14px 36px',
                  fontFamily: 'Montserrat,sans-serif',
                  fontWeight: 800,
                  fontSize: 14,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: allFilled ? 'pointer' : 'not-allowed',
                  transition: 'background 0.2s',
                }}
              >
                Calcular estimado
              </button>
            </div>

            {/* Result panel */}
            {showResult && result && (
              <div style={{ borderTop: '2px solid #E2E8F0', background: '#F8FAFC', padding: 'clamp(24px,4vw,40px) clamp(20px,4vw,40px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 32 }}>

                  {/* Price */}
                  <div style={resultCardStyle}>
                    <p style={resultLabelStyle}>Rango estimado</p>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: 700, color: '#003B6F', margin: 0, lineHeight: 1.1 }}>
                      {formatCOP(result.min)}
                    </p>
                    <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 15, color: '#475569', margin: '4px 0 0', lineHeight: 1.2 }}>
                      — {formatCOP(result.max)}
                    </p>
                    <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 12, color: '#94A3B8', marginTop: 6 }}>COP (sin IVA)</p>
                  </div>

                  {/* Delivery */}
                  <div style={resultCardStyle}>
                    <p style={resultLabelStyle}>Plazo de entrega</p>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(22px,3.5vw,32px)', fontWeight: 700, color: '#003B6F', margin: 0, lineHeight: 1.1 }}>
                      {result.weeks[0]}–{result.weeks[1]}
                    </p>
                    <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 15, color: '#475569', margin: '4px 0 0' }}>semanas</p>
                    <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 12, color: '#94A3B8', marginTop: 6 }}>desde firma del contrato</p>
                  </div>

                  {/* Firm */}
                  <div style={resultCardStyle}>
                    <p style={resultLabelStyle}>Firma consultora</p>
                    <p style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 15, fontWeight: 700, color: '#003B6F', margin: 0 }}>BIC Bernal</p>
                    <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 13, color: '#475569', margin: '4px 0 0', lineHeight: 1.5 }}>COPNIA 17202-313228<br />Ing. UNAL Manizales</p>
                    <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 12, color: '#17A2B8', marginTop: 6, fontWeight: 700 }}>Respuesta en 24 h</p>
                  </div>
                </div>

                {/* Entregables */}
                <div style={{ marginBottom: 28 }}>
                  <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#003B6F', marginBottom: 12 }}>
                    Qué incluye este estudio
                  </h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px 24px' }}>
                    {result.entregables.map((item, i) => (
                      <li key={i} style={{ fontFamily: 'Lato,sans-serif', fontSize: 14, color: '#475569', paddingLeft: 20, position: 'relative', lineHeight: 1.5 }}>
                        <span style={{ position: 'absolute', left: 0, top: 2, color: '#17A2B8', fontWeight: 700 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disclaimer */}
                <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 12, color: '#94A3B8', lineHeight: 1.6, marginBottom: 24, padding: '10px 14px', background: '#fff', borderRadius: 4, border: '1px solid #E2E8F0' }}>
                  * Este estimado es orientativo. El precio final depende del levantamiento topográfico requerido, el acceso al área, la disponibilidad de información hidrometeorológica y los trámites ante autoridades ambientales. BIC emite propuesta técnica formal sin costo en menos de 24 horas hábiles.
                </p>

                {/* CTA */}
                <a
                  href={`https://wa.me/${WA}?text=${buildWaMsg()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    background: '#25D366',
                    color: '#fff',
                    borderRadius: 4,
                    padding: '14px 28px',
                    fontFamily: 'Montserrat,sans-serif',
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.30)',
                    transition: 'transform 0.18s, box-shadow 0.18s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 24px rgba(37,211,102,0.40)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = ''; (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(37,211,102,0.30)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Solicitar cotización detallada
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ / info strip */}
      <section style={{ background: '#fff', padding: 'clamp(40px,6vw,72px) 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(22px,3.5vw,34px)', fontWeight: 700, color: '#003B6F', marginBottom: 36, textAlign: 'center' }}>
            Preguntas frecuentes sobre costos
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderLeft: '3px solid #17A2B8', paddingLeft: 18 }}>
                <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: 700, fontSize: 14, color: '#003B6F', marginBottom: 8 }}>{f.q}</h3>
                <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 14, color: '#475569', lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'linear-gradient(135deg, #002A50 0%, #003B6F 100%)', padding: 'clamp(40px,6vw,72px) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 'clamp(22px,3.5vw,34px)', fontWeight: 700, color: '#fff', marginBottom: 14 }}>
            ¿Necesita una propuesta técnica formal?
          </h2>
          <p style={{ fontFamily: 'Lato,sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.80)', lineHeight: 1.6, marginBottom: 28 }}>
            BIC emite propuestas técnicas con alcance detallado, cronograma y precio fijo en menos de 24 horas hábiles. Primera consulta sin costo.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, quiero una propuesta técnica formal para un estudio hidráulico.')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#25D366', color: '#fff', borderRadius: 4, padding: '14px 32px', fontFamily: 'Montserrat,sans-serif', fontWeight: 800, fontSize: 14, letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Hablar con un ingeniero
          </a>
        </div>
      </section>
    </>
  )
}

const FAQ = [
  {
    q: '¿El estimado incluye visita al sitio?',
    a: 'No. El estimado base cubre el trabajo de gabinete (análisis, modelación, memorias e informe). Las visitas de campo se cotizan por separado según la distancia y los días requeridos.',
  },
  {
    q: '¿Los precios incluyen IVA?',
    a: 'Los rangos mostrados son antes de IVA. La tarifa del 19% aplica según la naturaleza del contrato (persona natural vs. persona jurídica y el tipo de cliente).',
  },
  {
    q: '¿Qué define la complejidad del estudio?',
    a: 'La complejidad aumenta con el número de cauces a modelar, la necesidad de levantamiento topográfico propio, los trámites ante autoridades ambientales y la cantidad de escenarios de simulación requeridos.',
  },
  {
    q: '¿Cuánto tiempo toma recibir la propuesta formal?',
    a: 'BIC envía propuesta técnica con alcance detallado, cronograma y precio fijo en menos de 24 horas hábiles después de la consulta inicial, sin costo.',
  },
  {
    q: '¿Trabajan en todo Colombia?',
    a: 'Sí. BIC opera desde Manizales en modalidad remota para proyectos en cualquier municipio de Colombia. Los desplazamientos al sitio se coordinan según el alcance.',
  },
  {
    q: '¿La firma está habilitada ante el COPNIA?',
    a: 'Sí. El director técnico Rogerio Bernal Ríos tiene tarjeta profesional COPNIA 17202-313228, activa y al día. Todos los documentos técnicos van firmados y sellados.',
  },
]

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'Montserrat,sans-serif',
  fontWeight: 700,
  fontSize: 11.5,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#003B6F',
  marginBottom: 8,
}

const selectStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  fontFamily: 'Lato,sans-serif',
  fontSize: 14,
  color: '#0F172A',
  background: '#fff',
  border: '1.5px solid #CBD5E1',
  borderRadius: 4,
  appearance: 'none',
  WebkitAppearance: 'none',
  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%2317A2B8\' stroke-width=\'2\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  cursor: 'pointer',
}

const resultCardStyle: React.CSSProperties = {
  background: '#fff',
  border: '1.5px solid #E2E8F0',
  borderRadius: 6,
  padding: '18px 20px',
  borderTop: '3px solid #17A2B8',
}

const resultLabelStyle: React.CSSProperties = {
  fontFamily: 'Montserrat,sans-serif',
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: '0.10em',
  textTransform: 'uppercase',
  color: '#94A3B8',
  marginBottom: 8,
}
