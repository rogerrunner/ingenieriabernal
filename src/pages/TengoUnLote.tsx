import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, tengo un lote y quiero construir. No sé qué estudios de ingeniería necesito. ¿Pueden orientarme?')

const seoConfig = {
  title: 'Tengo un Lote y Quiero Construir — ¿Qué Estudios de Ingeniería Necesito? | BIC',
  description: 'Si tiene un lote en Colombia y quiere construir, BIC le dice exactamente qué estudios técnicos necesita: ronda hídrica, amenaza sísmica, estudio de suelos, hidrosanitario y más. Orientación gratuita en 24 horas. Eje Cafetero y todo Colombia.',
  keywords: [
    'tengo un lote quiero construir Colombia',
    'que estudios necesito para construir',
    'estudios técnicos licencia construcción Colombia',
    'estudio suelos lote Colombia',
    'ronda hídrica lote colombia',
    'qué se necesita para licencia de construcción',
    'estudios previos construcción Colombia',
    'ingeniería para lote Colombia',
    'qué pide la curaduría para construir',
    'permisos para construir Colombia',
    'requisitos técnicos licencia construcción',
    'estudios antes de comprar lote Colombia',
    'ingeniero para proyecto lote Manizales',
    'consultoría técnica lote Colombia',
    'firma ingeniería lote construcción Eje Cafetero',
  ],
  canonical: 'https://ingenieriabernal.co/tengo-un-lote-colombia',
}

const ESTUDIOS = [
  {
    icon: '🗺️',
    tipo: 'Estudio de Ronda Hídrica y Amenaza de Inundación',
    subtitulo: 'El primer estudio que pide la curaduría si hay cauces cerca',
    desc: 'Si el lote tiene una quebrada, río o canal cerca, la curaduría exige demostrar que el predio no está dentro de la ronda hídrica ni en zona de amenaza alta por inundación. BIC delimita la ronda hídrica del cauce vecino, modela el comportamiento hidráulico con HEC-RAS 2D y elabora el mapa de amenaza conforme al Decreto 1807/2014. Este estudio define cuánto del lote es construible y bajo qué condiciones.',
    cuandoEsNecesario: 'Cuando el lote tiene una quebrada, río, zanja o canal a menos de 100 metros.',
    tiempo: '3 a 6 semanas',
  },
  {
    icon: '🏔️',
    tipo: 'Estudio de Suelos (Geotecnia)',
    subtitulo: 'Para saber cómo está el terreno y cómo diseñar la cimentación',
    desc: 'El estudio de suelos determina las características físicas y mecánicas del terreno: tipo de suelo, capacidad portante, nivel freático, presencia de suelos blandos o rellenos. Es indispensable para diseñar la cimentación del edificio de forma correcta. La NSR-10 exige el estudio de suelos para calcular el riesgo sísmico del sitio específico. BIC hace las perforaciones de exploración, los ensayos de laboratorio y el informe técnico de suelos con las recomendaciones de cimentación.',
    cuandoEsNecesario: 'Siempre — para cualquier edificación la curaduría exige el estudio de suelos y la NSR-10 lo obliga.',
    tiempo: '2 a 4 semanas',
  },
  {
    icon: '💧',
    tipo: 'Memorias de Cálculo Hidrosanitarias',
    subtitulo: 'Diseño de agua potable, alcantarillado y sistema contra incendios',
    desc: 'La licencia de construcción siempre exige el diseño de las redes internas de acueducto y alcantarillado del edificio, con memoria de cálculo firmada por especialista COPNIA. BIC diseña la red de agua potable (desde la acometida hasta cada punto de consumo), la red de aguas residuales y la red de aguas lluvias. Si el edificio tiene más de 4 pisos o es de uso comercial, también diseña el sistema contra incendios conforme al NSR-10.',
    cuandoEsNecesario: 'Siempre — para cualquier licencia de construcción en Colombia.',
    tiempo: '2 a 4 semanas',
  },
  {
    icon: '🌿',
    tipo: 'Concepto de Uso del Suelo y Factibilidad de Servicios',
    subtitulo: 'Antes de comprar: verificar qué se puede construir',
    desc: 'Antes de comprar un lote o empezar a diseñar, es fundamental verificar qué permite construir el POT del municipio en esa zona específica: uso residencial, comercial, industrial, densidad máxima, altura máxima, índice de ocupación. También es necesario verificar la disponibilidad de servicios públicos (acueducto, alcantarillado, energía, gas) con las ESP. BIC hace este diagnóstico previo para evitar que un lote que parece perfecto resulte tener restricciones que impiden el proyecto.',
    cuandoEsNecesario: 'Antes de comprar el lote o antes de empezar el diseño arquitectónico.',
    tiempo: '1 a 2 semanas',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico del lote: qué se puede hacer y qué restricciones tiene',
    desc: 'BIC inicia con el diagnóstico del lote: revisión del POT del municipio (qué uso y qué índices de construcción aplican), verificación de si hay cauces cercanos y qué restricciones genera la ronda hídrica, consulta de la disponibilidad de servicios públicos con la ESP local y revisión del estado jurídico del predio (escritura, matrícula, certificado de tradición). Este diagnóstico define exactamente qué estudios técnicos son necesarios para el proyecto específico del cliente — sin pedir estudios que no se necesitan.',
    herramientas: ['Revisión POT municipal (usos del suelo)', 'Consulta de disponibilidad de servicios ESP', 'Cartografía IGAC (cauces y topografía)', 'Revisión de escrituras y tradición del predio'],
    resultado: 'Diagnóstico completo del lote con lista exacta de estudios técnicos requeridos para la licencia',
  },
  {
    paso: '02',
    titulo: 'Estudio de ronda hídrica (si hay cauces cerca)',
    desc: 'Si el diagnóstico detecta cauces cercanos (río, quebrada, zanja), BIC elabora el estudio de ronda hídrica y amenaza de inundación. Se hace el levantamiento topográfico del cauce, el análisis hidrológico de la cuenca, la modelación HEC-RAS 2D y la zonificación de amenaza conforme al Decreto 1807/2014. El informe resultante define cuánto del predio es construible y cuáles son las condiciones técnicas para el diseño del proyecto. Sin este informe, la curaduría no puede tramitar la licencia si hay cauces en el área de influencia.',
    herramientas: ['HEC-HMS + HEC-RAS 2D (hidrología e hidráulica)', 'QGIS (cartografía y mapas de amenaza)', 'Decreto 1807/2014 (zonificación)', 'Levantamiento topográfico del cauce'],
    resultado: 'Mapa de amenaza hídrica + delimitación de ronda + área construible del predio',
  },
  {
    paso: '03',
    titulo: 'Estudio de suelos y geotecnia',
    desc: 'BIC elabora el estudio de suelos del lote: perforaciones de exploración del subsuelo (mínimo 2 perforaciones por lote, más según el tamaño), ensayos de laboratorio de las muestras extraídas (granulometría, límites de Atterberg, compresión simple, SPT), análisis del nivel freático y del potencial de licuación sísmica, y clasificación del sitio conforme a la NSR-10 para el cálculo del espectro sísmico de diseño. El informe de suelos incluye las recomendaciones específicas para el tipo de cimentación: zapatas, pilotes, caissons o losa de fundación.',
    herramientas: ['Ensayo SPT (Standard Penetration Test)', 'Perforaciones con recuperación de muestras', 'Ensayos de laboratorio geotécnico', 'NSR-10 Capítulo A (clasificación sísmica del sitio)'],
    resultado: 'Informe geotécnico con clasificación del suelo, recomendaciones de cimentación y espectro sísmico NSR-10',
  },
  {
    paso: '04',
    titulo: 'Memorias de cálculo hidrosanitarias',
    desc: 'Con los planos arquitectónicos del proyecto (que puede haber elaborado el arquitecto independientemente), BIC diseña todas las redes internas del edificio: red de acueducto (acometida, tanque si aplica, distribución a cada punto de consumo), red de alcantarillado sanitario (ramales, bajantes, colectores) y red de aguas lluvias (bajantes de cubierta, colectores pluviales). Si el proyecto requiere sistema contra incendios, BIC lo diseña también. La memoria de cálculo va firmada por especialista COPNIA.',
    herramientas: ['NTC 1500 y RAS 2017', 'AutoCAD (planos de redes)', 'NSR-10 Capítulo K (contra incendios)', 'Curvas IDF IDEAM (aguas lluvias)'],
    resultado: 'Memorias de cálculo hidrosanitarias y planos constructivos listos para la curaduría',
  },
  {
    paso: '05',
    titulo: 'Acompañamiento en la licencia de construcción',
    desc: 'BIC acompaña al cliente durante el trámite de la licencia de construcción ante la curaduría: respuesta a las glosas técnicas, ajuste de los estudios si la curaduría solicita modificaciones, y aclaración de los documentos técnicos ante los revisores de la curaduría. Este acompañamiento reduce significativamente el número de idas y vueltas con la curaduría y acelera la obtención de la licencia. BIC también puede asesorar sobre las viabilidades de servicios que hay que tramitar ante las ESP antes o durante el proceso de licencia.',
    herramientas: ['Respuesta a glosas técnicas de la curaduría', 'Ajuste de estudios según observaciones', 'Coordinación con el arquitecto del proyecto', 'Gestión de viabilidades ante ESP'],
    resultado: 'Licencia de construcción obtenida con el mínimo de glosas y en el menor tiempo posible',
  },
]

const FAQ = [
  {
    q: '¿Qué estudios necesito antes de comprar un lote para construir en Colombia?',
    a: 'Antes de comprar un lote, lo más importante es verificar: (1) Qué permite el POT del municipio en esa zona — uso del suelo, altura máxima, índice de ocupación y construcción; (2) Si hay cauces cerca que generen restricciones de ronda hídrica; (3) Si el predio está en zona de amenaza sísmica o de movimientos en masa que requiera estudios especiales; (4) La disponibilidad de servicios públicos (acueducto, alcantarillado, energía) con las ESP del municipio; (5) El estado jurídico del predio (libre de hipotecas, sin litigios, sin afectaciones). BIC hace este diagnóstico previo para que no compre un lote que tenga restricciones que le impidan el proyecto que tiene en mente.',
  },
  {
    q: '¿Qué le pide la curaduría cuando va a solicitar la licencia de construcción?',
    a: 'Los requisitos exactos varían por municipio, pero en general la curaduría exige para la licencia de construcción: el formulario de solicitud, los planos arquitectónicos firmados por el arquitecto (planta, cortes, fachadas), el estudio de suelos y geotecnia firmado por el ingeniero geotécnico, el diseño estructural conforme a la NSR-10, las memorias de cálculo hidrosanitarias (agua potable, alcantarillado, aguas lluvias) con firma COPNIA, el diseño del sistema contra incendios si aplica, el paz y salvo de servicios públicos, y si hay cauces cercanos, el estudio de ronda hídrica y amenaza de inundación. BIC elabora todos los estudios técnicos de ingeniería requeridos.',
  },
  {
    q: '¿Cuánto cuestan todos los estudios técnicos de ingeniería para mi lote?',
    a: 'El costo total de los estudios de ingeniería depende del tipo y tamaño del proyecto, el municipio y las condiciones específicas del lote. Para una vivienda unifamiliar en un lote sin cauces vecinos, los estudios técnicos mínimos (suelos y hidrosanitario) oscilan entre $12.000.000 y $25.000.000 COP. Para un edificio multifamiliar de 5 a 10 pisos con todos los estudios (ronda hídrica si aplica, suelos, hidrosanitario, contra incendios), el costo puede estar entre $35.000.000 y $80.000.000 COP. BIC envía una propuesta técnica y económica detallada en menos de 24 horas — sin costo — con base en la descripción del lote y el tipo de proyecto.',
  },
  {
    q: '¿Cuánto tiempo toma tener todos los estudios listos para la curaduría?',
    a: 'El plazo depende de los estudios que se necesiten. El estudio de suelos toma de 2 a 4 semanas (incluyendo la exploración de campo y los ensayos de laboratorio). Las memorias hidrosanitarias toman de 2 a 4 semanas dependiendo del tamaño del proyecto. Si hay cauces y se necesita el estudio de ronda hídrica, puede tomar de 3 a 6 semanas adicionales. BIC puede trabajar varios estudios en paralelo para optimizar el tiempo — en muchos casos todos los estudios están listos en 6 a 10 semanas desde el inicio.',
  },
  {
    q: '¿Qué pasa si el lote está en zona de ladera? ¿Necesito estudios adicionales?',
    a: 'Los lotes en zonas de ladera (muy comunes en el Eje Cafetero, Antioquia y los Andes colombianos) pueden requerir estudios adicionales de amenaza por movimientos en masa (deslizamientos). Muchos POT de municipios en zonas andinas tienen zonificaciones de amenaza por movimientos en masa que restringen el uso del suelo en pendientes pronunciadas. Además, para lotes en ladera, el estudio de suelos es especialmente importante porque los suelos de ladera (llenos antrópicos, residuos de meteorización de rocas volcánicas) tienen comportamientos complejos que el diseño de cimentación debe considerar. BIC evalúa las condiciones específicas del lote en ladera antes de recomendar qué estudios son necesarios.',
  },
  {
    q: '¿Puedo contratar los estudios de BIC sin que BIC haga también el diseño del edificio?',
    a: 'Sí. BIC hace exclusivamente los estudios e ingeniería técnica especializada (hidrología, hidráulica, hidrosanitario, geotecnia cuando aplica) y los entrega al cliente y al arquitecto que diseña el edificio. BIC no hace diseño arquitectónico — es un aliado del arquitecto que complementa los estudios técnicos que la curaduría exige al proyecto. Si el cliente ya tiene su arquitecto, BIC coordina directamente con él para asegurarse de que los estudios técnicos son coherentes con el diseño arquitectónico.',
  },
  {
    q: '¿Qué es el índice de ocupación y el índice de construcción? ¿Por qué importan?',
    a: 'El índice de ocupación (IO) es el porcentaje del área del lote que puede cubrirse con construcción en el nivel del suelo. Por ejemplo, si el IO es 0.70, el 70% del área del lote puede construirse y el 30% debe dejarse libre (antejardín, retiros laterales, zonas verdes). El índice de construcción (IC) es el múltiplo del área del lote que puede construirse en total (sumando todos los pisos). Por ejemplo, si el IC es 3.0 y el lote tiene 200 m², la construcción total puede llegar a 600 m². Estos índices los define el POT del municipio y determinan cuánto y qué tan alto puede construir en el lote. Conocerlos antes de comprar el lote o contratar el diseño arquitectónico es fundamental para no diseñar un proyecto que no sea aprobable.',
  },
  {
    q: '¿BIC trabaja en toda Colombia o solo en el Eje Cafetero?',
    a: 'BIC trabaja en todo Colombia. La firma tiene su base de operaciones en Manizales (Eje Cafetero) pero atiende proyectos en todo el país. Los estudios de diagnóstico del POT, la revisión de cartografía y la consulta a las ESP se puede hacer remotamente para cualquier municipio. Los estudios de campo (topografía, estudio de suelos) se coordinan con profesionales locales certificados cuando el proyecto está fuera del Eje Cafetero. Las memorias de cálculo hidrosanitarias y los estudios de ronda hídrica se elaboran con información digital y se entregan en el formato de la curaduría de cualquier municipio.',
  },
]

const CLIENTES = [
  { tipo: 'Propietarios de lote residencial', desc: 'Personas que compraron o quieren comprar un lote para construir su casa y no saben qué estudios necesitan.' },
  { tipo: 'Inversionistas inmobiliarios', desc: 'Compradores de lotes para desarrollar proyectos multifamiliares o comerciales que necesitan el diagnóstico técnico antes de comprar.' },
  { tipo: 'Propietarios rurales', desc: 'Dueños de fincas y predios rurales que quieren construir infraestructura productiva o vivienda y necesitan orientación.' },
  { tipo: 'Arquitectos y diseñadores', desc: 'Profesionales del diseño que buscan un aliado técnico para los estudios de ingeniería que la curaduría les exige al proyecto.' },
  { tipo: 'Gestores de proyectos inmobiliarios', desc: 'Personas que coordinan el desarrollo del lote para terceros y necesitan organizar los estudios con un solo interlocutor.' },
  { tipo: 'Extranjeros y colombianos en el exterior', desc: 'Personas que compran lote en Colombia desde otro país y necesitan un técnico de confianza que gestione los estudios.' },
]

const NORMATIVA = [
  { codigo: 'Ley 388/1997', descripcion: 'Ley de Ordenamiento Territorial — POT municipal, usos del suelo, índices de ocupación y construcción' },
  { codigo: 'NSR-10', descripcion: 'Norma Sismo Resistente — obligatoria para todo proyecto de construcción; exige estudio de suelos' },
  { codigo: 'Decreto 1807/2014', descripcion: 'Incorporación de la gestión del riesgo en los POT — zonificación de amenaza hídrica para licencias' },
  { codigo: 'Decreto 1077/2015', descripcion: 'DUR Sector Vivienda — requisitos técnicos para licencias de construcción y urbanismo' },
  { codigo: 'NTC 1500', descripcion: 'Código Colombiano de Fontanería — norma base para el diseño hidrosanitario de edificaciones' },
  { codigo: 'RAS 2017', descripcion: 'Reglamento Técnico de Agua y Saneamiento — criterios de diseño para acueducto y alcantarillado' },
]

export default function TengoUnLote() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Tengo un lote · ¿Qué necesito? · Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20 }}>
            Tengo un Lote y Quiero Construir
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            ¿Qué estudios técnicos necesita para la licencia de construcción? BIC le orienta y los elabora
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            Si tiene un lote en Colombia y quiere construir, hay estudios técnicos que la curaduría le va a
            pedir obligatoriamente: estudio de suelos, memorias hidrosanitarias y — si hay cauces cerca —
            estudio de ronda hídrica. BIC le dice exactamente cuáles necesita para su proyecto específico
            y los elabora con firma COPNIA vigente en cualquier municipio del país.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar mi caso por WhatsApp</Btn>
            <Btn variant="outline" href="/memorias-hidrosanitarias-colombia" dark>Memorias hidrosanitarias</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Estudio de suelos','Ronda hídrica','Hidrosanitario','Contra incendios','COPNIA','Curaduría'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+300', label: 'proyectos de construcción asesorados por BIC' },
              { num: '24h', label: 'para decirle qué estudios necesita — sin costo' },
              { num: '100%', label: 'de estudios aprobados por curaduría' },
              { num: 'Nacional', label: 'atendemos lotes en todo Colombia' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESTUDIOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Estudios técnicos de ingeniería</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué estudios puede exigirle la curaduría?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            No todos los lotes necesitan todos los estudios. Depende del municipio, el tipo de proyecto,
            la cercanía a cauces y las características del terreno. BIC le dice cuáles aplican a su caso específico.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {ESTUDIOS.map(e => (
              <div key={e.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{e.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{e.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{e.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{e.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px', marginBottom: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>CUÁNDO SE NECESITA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{e.cuandoEsNecesario}</p>
                </div>
                <p style={{ fontSize: 12, color: '#888', margin: 0 }}>Plazo típico: {e.tiempo}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cómo trabaja BIC con su lote</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Del diagnóstico del lote a la licencia de construcción
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            BIC organiza todos los estudios técnicos que necesita su proyecto como un proceso coordinado,
            para que llegue a la curaduría con todo en regla desde la primera visita.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)', color: '#fff', fontWeight: 900, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />}
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
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>RESULTADO</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA INTERMEDIO ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un lote y quiere saber qué necesita para construir?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC le orienta en 24 horas — sin costo — sobre qué estudios necesita su proyecto específico</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            📱 Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos consulta?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            Dueños de lote que trabajan con BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{ background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: 20, borderLeft: '3px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 28 }}>
            Normativa que rige la construcción en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 16, alignItems: 'center', background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0' }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 13 }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Estudios e ingeniería para su proyecto
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Memorias hidrosanitarias', href: '/memorias-hidrosanitarias-colombia' },
              { label: 'Construir cerca a un río', href: '/construir-cerca-rio-quebrada-colombia' },
              { label: 'Licencia de urbanismo', href: '/licencia-de-urbanismo' },
              { label: 'Ingeniería proyectos urbanísticos', href: '/ingenieria-proyectos-urbanisticos-colombia' },
              { label: 'Me pidieron estudios en la CAR', href: '/me-pidieron-estudios-en-la-car' },
              { label: 'Plan parcial Colombia', href: '/plan-parcial-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{ display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea', borderRadius: 10, padding: '14px 18px', color: '#003B6F', fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4 }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d5eef9')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f0f9ff')}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            Respuestas para dueños de lote que quieren construir
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)', padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏡</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Tiene su lote y quiere saber<br />por dónde empezar?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el municipio, qué quiere construir y si el lote tiene quebradas o cauces cerca.
            BIC le dice en 24 horas exactamente qué estudios necesita y cuánto cuestan.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Especialistas COPNIA vigentes · Atención en todo Colombia
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Consultar por WhatsApp · +57 302 477 8910
            </a>
            <a href="/contacto" style={{ display: 'inline-block', padding: '15px 36px', background: 'transparent', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
