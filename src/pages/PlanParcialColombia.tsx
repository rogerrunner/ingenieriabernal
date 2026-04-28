import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, tengo un terreno en suelo de expansión urbana y quiero información sobre planes parciales. ¿Pueden asesorarme?')

const seoConfig = {
  title: 'Formulación de Planes Parciales en Colombia — Consultoría Técnica | BIC',
  description: 'BIC formula y tramita planes parciales en Colombia. Suelo de expansión urbana, cargas y beneficios, coordinación POT y curaduría. Para propietarios de terrenos, promotores inmobiliarios y fiduciarias. Cotización sin costo.',
  keywords: [
    'plan parcial Colombia',
    'formulación plan parcial Colombia',
    'consultoría plan parcial Colombia',
    'plan parcial suelo expansión urbana',
    'empresa plan parcial Colombia',
    'plan parcial Ley 388 Colombia',
    'plan parcial Manizales',
    'plan parcial Pereira Colombia',
    'plan parcial Caldas',
    'cargas y beneficios urbanismo Colombia',
    'plan parcial tramitar Colombia',
    'plan parcial ingeniero Colombia',
    'formulador plan parcial Eje Cafetero',
    'qué es un plan parcial Colombia',
    'plan parcial adoptado Colombia',
    'consultor urbanismo plan parcial',
  ],
  canonical: 'https://ingenieriabernal.co/plan-parcial-colombia',
}

const TIPOS_PP = [
  {
    icon: '🏘️',
    tipo: 'Plan Parcial Residencial',
    desc: 'El más frecuente en suelo de expansión. Permite desarrollar vivienda en predios que estaban por fuera del perímetro urbano. BIC formula el plan parcial con el esquema básico de ordenamiento (vías, lotes, cesiones), el modelo de ocupación, el cálculo de cargas y beneficios, los sistemas estructurantes (vías principales, parques, equipamientos) y los usos del suelo detallados. Trabaja en coordinación con el Departamento de Planeación del municipio durante todo el proceso de concertación y adopción.',
    clientes: 'Propietarios de predios en suelo de expansión urbana, constructoras, cooperativas de vivienda',
    ejemplos: ['Urbanizaciones de vivienda VIS y NO VIS', 'Conjuntos cerrados en expansión', 'Loteos para vivienda campestre reglamentada'],
  },
  {
    icon: '🏢',
    tipo: 'Plan Parcial Mixto (Comercio + Vivienda)',
    desc: 'Cuando el POT permite usos mixtos en el suelo de expansión, el plan parcial puede combinar vivienda con usos comerciales, de servicios o institucionales. Este tipo de plan es más complejo en la distribución de cargas porque los usos tienen diferentes impactos en la infraestructura (vías, servicios públicos, equipamientos). BIC hace el análisis de compatibilidad de usos, el cálculo de edificabilidad por cada uso y la distribución equitativa de cargas entre los diferentes propietarios y usos del suelo.',
    clientes: 'Promotores inmobiliarios, desarrolladores de proyectos mixtos, propietarios con suelo en corredor vial',
    ejemplos: ['Centros comerciales en expansión', 'Proyectos de uso mixto residencial-comercial', 'Desarrollos en nodos urbanos'],
  },
  {
    icon: '🏭',
    tipo: 'Plan Parcial Industrial o Logístico',
    desc: 'En municipios con suelo industrial o logístico en expansión, el plan parcial permite desarrollar parques industriales, zonas francas y bodegas. Son planes con cargas de infraestructura muy altas (vías amplias, servicios públicos de gran capacidad) y con requisitos ambientales específicos. BIC coordina con las autoridades ambientales y de planeación para establecer las condiciones de uso y los estándares de manejo ambiental que el plan debe incluir.',
    clientes: 'Inversionistas industriales, zonas francas, empresas con necesidad de expansión',
    ejemplos: ['Parques industriales', 'Centros logísticos y bodegas', 'Zonas de actividad económica'],
  },
  {
    icon: '🌿',
    tipo: 'Plan Parcial en Zona de Expansión con Amenaza',
    desc: 'Muchos suelos de expansión en Colombia tienen restricciones por amenaza de inundación, remoción en masa o cercanía a fuentes hídricas. Un plan parcial en estas zonas debe incluir los estudios detallados de amenaza y riesgo, el mapa de zonificación de riesgo aprobado por la UNGRD o la CAR, y las medidas de gestión del riesgo que el desarrollo debe adoptar (obras de mitigación, retiros, restricciones de uso). BIC integra el componente hidráulico y de gestión del riesgo directamente en la formulación del plan parcial.',
    clientes: 'Propietarios de suelo en zonas con restricciones ambientales o de riesgo, municipios con POT que incluye amenazas',
    ejemplos: ['Suelo en llanura de inundación', 'Predios con restricciones por remoción en masa', 'Zonas con estudios de microzonificación sísmica'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico Técnico del Predio y el POT',
    desc: 'Todo plan parcial empieza con una lectura rigurosa de las condiciones del predio y del POT vigente. BIC analiza el Plan de Ordenamiento Territorial del municipio para establecer si el predio está en suelo de expansión urbana, qué usos permiten las normas, qué cargas aplican (cesiones obligatorias, vías, parques, equipamientos), qué restricciones existen (retiros, amenazas, afectaciones viales) y si el área del predio cumple el mínimo para formular plan parcial. El diagnóstico también revisa si ya existe un plan parcial formulado o adoptado en el área.',
    herramientas: ['POT municipal vigente', 'Plano oficial de clasificación del suelo', 'Cartas de zonificación de amenaza', 'Registro catastral y folio de matrícula'],
    resultado: 'Viabilidad técnica y normativa del plan parcial, mapa de oportunidades y restricciones',
  },
  {
    paso: '02',
    titulo: 'Estudios Técnicos de Soporte',
    desc: 'El plan parcial debe sustentarse en estudios técnicos que demuestren que el desarrollo es viable y que la infraestructura existente puede soportarlo. BIC elabora el estudio de demanda de servicios públicos (capacidad de las redes de acueducto, alcantarillado y energía para soportar el nuevo desarrollo), el estudio de conectividad vial (el sistema vial del plan parcial se conecta adecuadamente con la malla vial urbana existente), el estudio de riesgo (si el predio está en zona de amenaza) y el análisis de capacidad de carga ambiental del área.',
    herramientas: ['Modelación de redes (EPANET, SWMM)', 'Análisis HEC-RAS (zonas inundables)', 'Estudio de suelos geotécnico', 'Análisis vial y de movilidad'],
    resultado: 'Estudios de soporte técnico: servicios públicos, movilidad, riesgo, suelos',
  },
  {
    paso: '03',
    titulo: 'Formulación: Modelo de Ocupación y Cargas y Beneficios',
    desc: 'Esta es la etapa central del plan parcial: BIC define el modelo de ocupación del suelo (qué va dónde, con qué intensidad y qué condiciones), calcula el índice de edificabilidad básico y adicional, determina las cesiones obligatorias (cuántos metros cuadrados de vías, parques y equipamientos debe ceder el plan) y hace el reparto equitativo de cargas y beneficios entre todos los propietarios del área incluida en el plan parcial. Este cálculo determina quién paga qué y qué recibe a cambio — es el núcleo económico del plan parcial.',
    herramientas: ['Cálculo de cargas generales y locales', 'Distribución por área de aporte', 'Cuadro de reparto (Ley 388/97)', 'Plano de zonificación y usos'],
    resultado: 'Documento de formulación: modelo de ocupación, cuadro de áreas, reparto de cargas y beneficios',
  },
  {
    paso: '04',
    titulo: 'Concertación con Planeación y la CAR',
    desc: 'El plan parcial formulado se presenta ante el Departamento de Planeación del municipio para iniciar el proceso de concertación. Esta etapa incluye revisiones técnicas, reuniones con los funcionarios, respuesta a observaciones y ajustes al documento. Si el plan parcial incluye áreas con afectación ambiental (rondas hídricas, zonas de amenaza, humedales), también se concerta con la Corporación Autónoma Regional. BIC acompaña todo el proceso de concertación, responde observaciones técnicas y realiza los ajustes necesarios al documento.',
    herramientas: ['Documento de formulación versión concertación', 'Respuesta técnica a observaciones', 'Reuniones con Planeación municipal', 'Coordicación con la CAR si aplica'],
    resultado: 'Concepto favorable de concertación de Planeación municipal y la CAR',
  },
  {
    paso: '05',
    titulo: 'Adopción: Decreto Municipal y Registro',
    desc: 'Una vez surtida la concertación, el Alcalde expide el Decreto de Adopción del plan parcial, que lo convierte en norma urbanística de obligatorio cumplimiento para el área. BIC elabora el documento técnico final en el formato exigido por la administración para la expedición del decreto y realiza el acompañamiento hasta la notificación y registro del plan parcial adoptado. Con el decreto adoptado, el propietario puede solicitar la licencia de urbanismo ante el curador urbano correspondiente.',
    herramientas: ['Documento técnico final para decreto', 'Planos de adopción', 'Registro ante Planeación', 'Transición a proceso de licencia de urbanismo'],
    resultado: 'Decreto de adopción del plan parcial — habilitado para solicitar licencia de urbanismo',
  },
]

const FAQ = [
  {
    q: '¿Qué es un plan parcial y cuándo es obligatorio en Colombia?',
    a: 'Un plan parcial es el instrumento de planificación urbanística mediante el cual se desarrolla y complementa el Plan de Ordenamiento Territorial (POT) para áreas de suelo de expansión urbana o para macroproyectos en suelo urbano. En Colombia, la Ley 388 de 1997 (artículo 19) establece que en todo el suelo de expansión urbana, el desarrollo de cualquier proyecto de urbanización requiere la formulación y adopción previa de un plan parcial — sin plan parcial adoptado no se puede solicitar licencia de urbanismo. También son obligatorios para los llamados "tratamientos de renovación urbana" que implican cambios estructurales en suelo ya urbanizado.',
  },
  {
    q: '¿Cuánto tiempo tarda la formulación y adopción de un plan parcial en Colombia?',
    a: 'El proceso completo — desde el diagnóstico hasta el decreto de adopción — puede tomar entre 12 y 36 meses dependiendo del municipio, la complejidad del plan y la carga de trabajo de la oficina de Planeación. La formulación técnica del plan por parte de BIC toma típicamente 4 a 6 meses. La concertación con Planeación puede tomar de 6 a 18 meses, y depende en gran medida de la capacidad técnica y operativa de la oficina de planeación del municipio. Municipios con pocas capacidades técnicas o alta demanda de trámites pueden tardar más. BIC diseña la estrategia de concertación para acortar los tiempos.',
  },
  {
    q: '¿Cuánto cuesta la formulación de un plan parcial?',
    a: 'El costo de la consultoría técnica para formular un plan parcial depende del área del predio, la complejidad del POT del municipio, el número de propietarios involucrados (un plan parcial con varios propietarios exige mayor coordinación y el cálculo de reparto es más complejo) y los estudios de soporte requeridos. Para un plan parcial de área media (10 a 50 hectáreas, un solo propietario) el costo de formulación oscila entre $80.000.000 y $200.000.000 COP. Para predios más grandes o con múltiples propietarios el costo es mayor. BIC envía propuesta técnica y económica detallada según las condiciones específicas del proyecto.',
  },
  {
    q: '¿Qué es el reparto equitativo de cargas y beneficios?',
    a: 'Es el principio central de los planes parciales en Colombia (Ley 388/97, artículo 38). La idea es que los beneficios del desarrollo urbano (la mayor valorización del suelo, el aumento de edificabilidad) se distribuyen equitativamente entre todos los propietarios del área del plan parcial, y las cargas (el costo de la infraestructura que el desarrollo debe financiar: vías, parques, redes, equipamientos) también se distribuyen en proporción al beneficio recibido. Esto evita que unos propietarios carguen con toda la infraestructura y otros solo aprovechen la valorización sin contribuir. BIC calcula el reparto con el área de aporte de cada predio y el modelo de edificabilidad aplicado.',
  },
  {
    q: '¿Qué pasa si mi terreno está en suelo de expansión pero no hay plan parcial adoptado en el área?',
    a: 'Si su terreno está en suelo de expansión urbana pero no hay un plan parcial adoptado que lo cobije, usted no puede solicitar licencia de urbanismo directamente. Tiene dos opciones: liderar la formulación de un plan parcial nuevo que incluya su predio (puede ser individual si el terreno tiene el área mínima establecida por el POT, o con otros propietarios vecinos) o esperar a que el municipio formule y adopte un plan parcial de oficio. La primera opción es más rápida y da más control sobre el proceso. BIC asesora en la estrategia correcta según las condiciones del POT del municipio y el tamaño del predio.',
  },
  {
    q: '¿BIC puede formular planes parciales en cualquier municipio de Colombia?',
    a: 'Sí. La Ley 388 de 1997 y el Decreto 1077 de 2015 que regula los planes parciales son nacionales — el marco legal es el mismo en todo el país. BIC tiene experiencia en planes parciales en el Eje Cafetero (Manizales, Pereira, Armenia, municipios de Caldas y Risaralda) y puede formular planes parciales en cualquier municipio colombiano. La formulación técnica se hace de forma remota (el POT y los planos catastrales se obtienen del municipio) y las reuniones de concertación con Planeación se hacen presencialmente cuando el proceso lo requiere.',
  },
  {
    q: '¿La licencia de urbanismo se solicita después del plan parcial?',
    a: 'Exacto, ese es el orden legal: primero el plan parcial adoptado (como decreto del Alcalde), y luego la licencia de urbanismo ante el Curador Urbano competente. El plan parcial define qué se puede hacer (usos, edificabilidad, cesiones) y la licencia de urbanismo autoriza hacerlo en un predio concreto según los parámetros del plan. Desde el plan parcial adoptado hasta la licencia de urbanismo pueden pasar otros 3 a 6 meses, dependiendo de los estudios adicionales que exija el curador y la carga de trabajo de la curaduría. BIC también acompaña el proceso de licencia de urbanismo posterior al plan parcial.',
  },
]

const NORMATIVA = [
  { codigo: 'Ley 388/1997', descripcion: 'Ley de Ordenamiento Territorial — marco legal de los planes parciales en Colombia (Artículo 19)' },
  { codigo: 'Decreto 1077/2015', descripcion: 'Decreto Único Reglamentario Sector Vivienda — regulación de planes parciales (Artículos 2.2.2.1.1 y ss.)' },
  { codigo: 'Ley 902/2004', descripcion: 'Modifica la Ley 388/97 — precisiones sobre planes parciales y licencias en suelo de expansión' },
  { codigo: 'Decreto 1232/2020', descripcion: 'Modifica procedimiento de concertación de planes parciales con la CAR' },
  { codigo: 'POT Municipal', descripcion: 'Plan de Ordenamiento Territorial de cada municipio — norma local de usos, cesiones y edificabilidad' },
  { codigo: 'NSR-10 + RAS 2017', descripcion: 'Normas técnicas para el diseño de infraestructura en el área del plan parcial' },
]

export default function PlanParcialColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1A3A6B 60%, #2E5599 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Urbanismo y desarrollo urbano · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Formulación de Planes Parciales en Colombia
          </h1>
          <p style={{ color: '#90CDF4', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Del suelo bruto al decreto de adopción — consultoría técnica especializada en Ley 388/97
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores formula y tramita planes parciales en Colombia para suelo
            de expansión urbana residencial, mixto e industrial. Nuestro trabajo incluye el diagnóstico
            del POT, los estudios técnicos de soporte (servicios públicos, movilidad, riesgo),
            la formulación del modelo de ocupación y el cálculo de cargas y beneficios,
            el acompañamiento en la concertación con Planeación y la CAR, y el proceso
            hasta el decreto de adopción.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar viabilidad de mi terreno</Btn>
            <Btn variant="outline" href="/licencia-de-urbanismo" dark>Licencia de urbanismo</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Ley 388/97','Suelo de expansión','Cargas y beneficios','Concertación Planeación','Decreto de adopción','Toda Colombia'].map(t => (
              <Tag key={t} style={{ background: 'rgba(144,205,244,0.15)', color: '#90CDF4', border: '1px solid rgba(144,205,244,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVERTENCIA LEGAL VALOR ── */}
      <section style={{ background: '#FFF8E1', borderBottom: '3px solid #F59E0B' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '24px 24px' }}>
          <p style={{ color: '#92400E', fontSize: 15, lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
            <strong>Importante:</strong> En Colombia, el suelo de expansión urbana NO puede desarrollarse sin un plan parcial adoptado previamente por el municipio.
            Intentar solicitar una licencia de urbanismo en suelo de expansión sin plan parcial genera rechazo de plano en la curaduría.
            BIC verifica la viabilidad del plan parcial antes de iniciar cualquier proceso.
          </p>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de plan parcial</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Tipos de plan parcial que formula BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            Cada tipo tiene características técnicas, normativas y de coordinación diferentes. BIC determina
            el tipo de plan parcial correcto según el POT del municipio y las condiciones del predio.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {TIPOS_PP.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, display: 'grid', gridTemplateColumns: '56px 1fr', gap: 20, alignItems: 'start',
              }}>
                <div style={{ fontSize: 36, paddingTop: 4 }}>{t.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: '#1A3A6B', marginBottom: 8 }}>{t.tipo}</h3>
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>{t.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#EEF2FF', borderRadius: 8, padding: '10px 14px' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#3730A3', marginBottom: 4 }}>CLIENTES TÍPICOS</p>
                      <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.5 }}>{t.clientes}</p>
                    </div>
                    <div style={{ background: '#F0FDF4', borderRadius: 8, padding: '10px 14px' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#166534', marginBottom: 4 }}>EJEMPLOS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', fontSize: 13, color: '#444', lineHeight: 1.5 }}>
                        {t.ejemplos.map(e => <li key={e}>{e}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso paso a paso</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Del diagnóstico del terreno al decreto de adopción
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            BIC acompaña el plan parcial en todas sus etapas — no solo la formulación, sino también
            la concertación, las respuestas a observaciones y el proceso hasta el decreto final.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2E75B6, #1A3A6B)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#CBD5E1', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#1A3A6B' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS / INSUMOS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#EEF2FF', borderRadius: 8, padding: '10px 14px', border: '1px solid #C7D2FE' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#3730A3', marginBottom: 6 }}>ENTREGABLE</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(90deg, #1A3A6B, #2E5599)', padding: '36px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un terreno en suelo de expansión urbana?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC verifica la viabilidad del plan parcial sin costo · Primera consulta gratuita</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            📱 Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Normativa que rige los planes parciales en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '140px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{ background: '#1A3A6B', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12 }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            FAQ — Planes parciales en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#1A3A6B', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Licencia de urbanismo Colombia', href: '/licencia-de-urbanismo' },
              { label: 'Urbanización Colombia', href: '/urbanizacion-colombia' },
              { label: 'Gestión del riesgo hídrico', href: '/gestion-riesgo-hidrico' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Redes hidrosanitarias', href: '/servicios/redes-hidrosanitarias' },
              { label: 'Ingeniería hidráulica Colombia', href: '/ingenieria-hidraulica-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#EEF2FF', border: '1px solid #C7D2FE',
                borderRadius: 10, padding: '14px 18px', color: '#1A3A6B',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1A3A6B 100%)',
        padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏙️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Tiene suelo de expansión urbana<br />que quiere desarrollar?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el municipio, el área del predio y si conoce si ya existe un plan parcial
            que lo cobije o si necesita formular uno nuevo.
          </p>
          <p style={{ color: '#90CDF4', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC verifica la viabilidad del plan parcial sin costo · Propuesta de honorarios en 48 horas.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Consultar por WhatsApp · +57 302 477 8910
            </a>
            <a href="/contacto"
              style={{ display: 'inline-block', padding: '15px 36px', background: 'transparent', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
