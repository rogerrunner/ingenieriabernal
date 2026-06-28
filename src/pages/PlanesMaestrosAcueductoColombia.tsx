import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, somos [municipio/ESP/gobernación]. Necesitamos contratar la elaboración o actualización de un Plan Maestro de Acueducto y Alcantarillado (PMAA) — Ley 142 / RAS 2017. ¿El director técnico puede enviarnos propuesta directa con matrícula COPNIA y referencia UNAL? Somos entidad pública, no intermediario.'
)

const seoConfig = {
  noindex: true,
  title: 'Contratar Plan Maestro Acueducto Alcantarillado Colombia — PMAA Ley 142 | Desde $25M COP | BIC COPNIA',
  description:
    'Elaboración y actualización de PMAA para municipios y ESP en Colombia. Ley 142/1994, RAS 2017, EPANET, SewerGEMS. COPNIA-UNAL, sin subcontratistas, trato directo. Desde $25M COP. Propuesta sin costo.',
  keywords: [
    'plan maestro acueducto alcantarillado Colombia',
    'PMAA municipio Colombia',
    'plan maestro acueducto Colombia',
    'plan maestro alcantarillado Colombia',
    'plan maestro agua potable alcantarillado Ley 142',
    'diseño acueducto municipal RAS 2017',
    'diseño alcantarillado municipal Colombia',
    'actualización plan maestro acueducto',
    'modelación EPANET acueducto municipal',
    'modelación SewerGEMS alcantarillado',
    'plan maestro ESP Colombia',
    'consultoría acueducto municipio Colombia COPNIA',
    'plan maestro acueducto Caldas Risaralda Quindío',
    'plan maestro acueducto Eje Cafetero',
    'BIC Bernal Ingeniería plan maestro',
  ],
  canonical: 'https://ingenieriabernal.co/planes-maestros-acueducto-alcantarillado-colombia',
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BIC — Bernal Ingeniería Consultores',
  description:
    'Consultoría especializada en Planes Maestros de Acueducto y Alcantarillado para municipios y ESP en Colombia.',
  url: 'https://ingenieriabernal.co/planes-maestros-acueducto-alcantarillado-colombia',
  telephone: '+573024778910',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manizales',
    addressRegion: 'Caldas',
    addressCountry: 'CO',
  },
  areaServed: { '@type': 'Country', name: 'Colombia' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Plan Maestro de Acueducto y Alcantarillado',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'PMAA Municipio categoría 5 / 6 (< 10.000 hab)',
          description: 'Plan Maestro de Acueducto y Alcantarillado para municipios pequeños',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'PMAA Municipio categoría 3 / 4 (10.000 – 100.000 hab)',
          description: 'Plan Maestro con modelación EPANET y SewerGEMS para municipios intermedios',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Actualización PMAA existente',
          description: 'Revisión y actualización de un Plan Maestro anterior con nuevas proyecciones de población y demanda',
        },
      },
    ],
  },
}

const COMPONENTES = [
  {
    icon: '📊',
    titulo: 'Diagnóstico del Sistema Existente',
    desc: 'Levantamiento en campo e inventario georeferenciado de la infraestructura existente: redes de distribución, conducción, plantas de tratamiento, estructuras hidráulicas y equipos de bombeo. Evaluación del estado físico, hidráulico y sanitario con calificación de deficiencias críticas, moderadas y menores.',
  },
  {
    icon: '👥',
    titulo: 'Proyección de Población y Demanda',
    desc: 'Estudio demográfico con proyecciones a 5, 10, 15 y 25 años según metodología DANE y DNP (métodos aritmético, geométrico y exponencial). Cálculo de dotaciones brutas y netas por sector, estimación de caudales de diseño mínimo, medio diario, máximo diario y máximo horario según RAS 2017 Título A.',
  },
  {
    icon: '🔧',
    titulo: 'Modelación Hidráulica de Redes — EPANET',
    desc: 'Modelación del sistema de acueducto con EPANET 2.2: calibración con mediciones de presión y caudal en campo, simulación de escenarios de demanda máxima, falla de componentes y escenarios futuros de expansión. Identificación de cuellos de botella, zonas de baja presión y sectores hidráulicos.',
  },
  {
    icon: '🌧️',
    titulo: 'Modelación de Alcantarillado — SewerGEMS / SWMM',
    desc: 'Modelación del sistema de alcantarillado sanitario y pluvial con SewerGEMS o SWMM. Análisis de capacidad hidráulica de colectores, identificación de puntos de desbordamiento, cálculo de curvas de frecuencia de inundación y simulación de rehabilitación de redes. Separación de sistemas combinados.',
  },
  {
    icon: '📐',
    titulo: 'Plan de Obras y Presupuesto',
    desc: 'Definición del programa de inversiones a corto (1–5 años), mediano (5–15 años) y largo plazo (15–25 años). Presupuesto detallado por componente con APU actualizados a precios de mercado, cronograma de ejecución y priorización técnico-económica de proyectos según impacto en la cobertura y continuidad del servicio.',
  },
  {
    icon: '💧',
    titulo: 'Diseños Conceptuales y Definitivos',
    desc: 'Diseño conceptual y/o definitivo de los componentes identificados en el plan: captaciones, PTAP, redes matrices y secundarias de distribución, tanques de almacenamiento, estaciones de bombeo, colectores principales, emisarios y PTAR. Memorias de cálculo firmadas por Ingeniero COPNIA.',
  },
  {
    icon: '🌿',
    titulo: 'PUEAA — Uso Eficiente y Ahorro del Agua',
    desc: 'Elaboración del Programa de Uso Eficiente y Ahorro del Agua conforme a la Ley 373/1997. Análisis de pérdidas técnicas y comerciales (IANC), balance hídrico y propuesta de acciones de reducción de agua no contabilizada (ANC) — exigido por el MVCT para acceso a recursos del PDA.',
  },
  {
    icon: '📑',
    titulo: 'Aprestamiento para Financiación PDA / SGR',
    desc: 'Estructuración técnica del PMAA para acceso a recursos del Plan Departamental de Agua (PDA), Sistema General de Regalías (SGR) y créditos del Findeter / BID. Formulación MGA Web de los proyectos prioritarios, matrices de indicadores BPIN y fichas EBI para radicación ante el DNP.',
  },
]

const PARA_QUIEN = [
  {
    tipo: 'Alcaldías y Oficinas de Servicios Públicos',
    desc: 'Para municipios que prestan directamente el servicio de acueducto y alcantarillado o que deben actualizar su PMAA como requisito del PDA departamental. Indispensable para presentar proyectos al Ministerio de Vivienda (MVCT) y al DNP para el acceso a recursos SGP-Agua Potable.',
  },
  {
    tipo: 'Empresas de Servicios Públicos — ESP',
    desc: 'Para operadores especializados (ESP municipales o regionales) que requieren la actualización del PMAA vigente para cumplir compromisos con la SSPD, obtener ampliación de concesiones de agua y sustentar tarifas ante la CRA. El PMAA es el instrumento de planeación técnico por excelencia de una ESP.',
  },
  {
    tipo: 'Gobernaciones y Secretarías de Agua',
    desc: 'Para entidades departamentales que consolidan un Plan Departamental de Agua (PDA) y requieren PMAA municipales articulados al plan regional. También para estructurar proyectos regionales de acueductos de segundo nivel (macro-acueductos) que abastecen varios municipios.',
  },
  {
    tipo: 'Concesionarios y Operadores Privados',
    desc: 'Para empresas que gestionan contratos de operación y/o concesión de sistemas de acueducto y alcantarillado en municipios y que deben presentar el PMAA como anexo técnico del contrato o como instrumento para negociar inversiones con el ente territorial concedente.',
  },
]

const NORMATIVA = [
  {
    norma: 'Ley 142 de 1994',
    desc: 'Régimen de servicios públicos domiciliarios. Define la obligatoriedad de prestar los servicios de acueducto y alcantarillado, el marco tarifario de la CRA y los derechos y deberes de las ESP. El PMAA es el soporte técnico de la planeación de la ESP.',
  },
  {
    norma: 'RAS 2017 — Resolución 0330',
    desc: 'Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico. Define los parámetros de diseño de acueductos y alcantarillados: dotaciones, períodos de diseño, criterios de selección de tecnología, parámetros hidráulicos y criterios de calidad del agua. Marco de referencia obligatorio para cualquier diseño.',
  },
  {
    norma: 'Ley 373 de 1997',
    desc: 'Programa de Uso Eficiente y Ahorro del Agua (PUEAA). Toda entidad que utilice agua para la prestación de un servicio público debe elaborar y actualizar el PUEAA. Exigido por el MVCT como requisito para acceder a recursos del PDA.',
  },
  {
    norma: 'Decreto 1077 de 2015 (DUR Sector Vivienda)',
    desc: 'Compila las normas del sector vivienda, ciudad y territorio. Contiene las disposiciones sobre planes de gestión y resultados (PGR) de las ESP, metodologías tarifarias y requisitos del PMAA como insumo de la planeación sectorial.',
  },
  {
    norma: 'Ley 1450 de 2011 — PDA',
    desc: 'Plan Nacional de Desarrollo que impulsa los Planes Departamentales de Agua como instrumento de financiación y asistencia técnica. Los municipios con PDA requieren PMAA articulados al plan departamental para acceder a sus recursos.',
  },
  {
    norma: 'Manual de Agua Potable OPS/OMS',
    desc: 'Guía técnica de referencia internacional para diseño de sistemas de abastecimiento de agua en poblaciones pequeñas e intermedias de América Latina. Complementa el RAS 2017 en aspectos de ingeniería rural y tecnologías alternativas.',
  },
]

const PRECIOS = [
  { servicio: 'PMAA municipio < 5.000 hab (cat. 6)', rango: '$45M – $80M COP' },
  { servicio: 'PMAA municipio 5.000 – 20.000 hab (cat. 5/4)', rango: '$80M – $150M COP' },
  { servicio: 'PMAA municipio 20.000 – 100.000 hab (cat. 4/3)', rango: '$150M – $300M COP' },
  { servicio: 'Actualización PMAA existente', rango: '$30M – $70M COP' },
  { servicio: 'PUEAA + balance hídrico', rango: '$15M – $35M COP' },
  { servicio: 'Modelación EPANET / SewerGEMS (módulo aislado)', rango: '$20M – $50M COP' },
]

const FAQS = [
  {
    q: '¿Cada cuánto debe actualizarse un Plan Maestro de Acueducto y Alcantarillado?',
    a: 'El RAS 2017 y las guías del MVCT recomiendan una revisión general cada 5 años y una actualización completa al alcanzar el 75 % del horizonte de diseño proyectado, o cuando se produzcan cambios significativos en la población, en las fuentes de abastecimiento o en la infraestructura del sistema. Muchos municipios colombianos tienen PMAA con más de 15 años de vigencia, lo que genera desajustes entre la planeación y la realidad del servicio.',
  },
  {
    q: '¿El PMAA es obligatorio para acceder a recursos del SGR o del MVCT?',
    a: 'Sí. El Departamento Nacional de Planeación (DNP) y el Ministerio de Vivienda, Ciudad y Territorio (MVCT) exigen un PMAA vigente y aprobado como requisito para la elegibilidad de proyectos de agua potable y saneamiento financiados con recursos del SGR (Fondo de Desarrollo Regional, Fondo de Ciencia y Tecnología), SGP (componente agua potable) y recursos del PDA. Sin PMAA actualizado, los proyectos de inversión no pasan la viabilidad técnica.',
  },
  {
    q: '¿Cuánto tiempo tarda la elaboración de un PMAA?',
    a: 'Para municipios pequeños (< 10.000 hab) el plazo típico es de 4 a 6 meses contando levantamiento de información, trabajo de campo, modelación y elaboración del documento final. Para municipios medianos (10.000 – 50.000 hab), entre 6 y 9 meses. Municipios grandes o sistemas complejos con múltiples zonas de presión pueden requerir hasta 12 meses. BIC trabaja con cronogramas detallados y entregables parciales para que la entidad contratante pueda hacer seguimiento continuo.',
  },
  {
    q: '¿Qué información debe suministrar el municipio o la ESP para iniciar el PMAA?',
    a: 'Catastro de redes existentes (planos en DWG o shapefiles), datos históricos de consumo y facturación, aforos de caudales en la captación y en red, registros de calidad del agua, concesión de agua otorgada por la CAR, población del último censo DANE y catastro predial actualizado. Si el municipio no tiene esta información, BIC puede realizar el levantamiento en campo como componente adicional del contrato.',
  },
  {
    q: '¿BIC puede gestionar la aprobación del PMAA ante el MVCT y el PDA departamental?',
    a: 'Sí. Como parte del alcance del contrato podemos acompañar la presentación del PMAA ante la Secretaría Departamental de Agua o Saneamiento, el MVCT y el PDA. Esto incluye la preparación de los documentos técnicos de soporte, la asistencia a comités técnicos y la atención de observaciones hasta obtener la viabilidad técnica del plan.',
  },
  {
    q: '¿Se pueden formular los proyectos del PMAA en la MGA para radicación ante el DNP?',
    a: 'Sí. BIC cuenta con experiencia en formulación y estructuración de proyectos en la MGA Web del DNP, incluyendo la elaboración de estudios de preinversión (estudios y diseños, factibilidad), matrices de indicadores BPIN y fichas EBI. Este servicio puede incluirse en el alcance del PMAA o contratarse de forma independiente para proyectos ya diseñados.',
  },
]

export default function PlanesMaestrosAcueductoColombia() {
  useEffect(() => {
    document.title = seoConfig.title
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Plan Maestro de Acueducto y Alcantarillado (PMAA) — Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/planes-maestros-acueducto-alcantarillado-colombia"
        faqItems={FAQS.map(f => ({ q: f.q, a: f.a }))}
        priceSpecification={[
          { name: 'PMAA municipio < 5.000 hab', minPrice: 25000000, maxPrice: 80000000, priceCurrency: 'COP' },
          { name: 'PMAA municipio 5.000 – 100.000 hab', minPrice: 80000000, maxPrice: 300000000, priceCurrency: 'COP' },
          { name: 'Actualización PMAA existente', minPrice: 25000000, maxPrice: 70000000, priceCurrency: 'COP' },
        ]}
      />
      <SpeakableSchema name="Plan Maestro Acueducto Alcantarillado Colombia | BIC" />

      <BlueprintBg>
        {/* ── HERO ── */}
        <Section id="pmaa-intro" className="pt-20 pb-12 text-center max-w-4xl mx-auto px-4">
          <SectionLabel>Acueducto · Alcantarillado · Ley 142</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
            Plan Maestro de Acueducto<br className="hidden md:block" /> y Alcantarillado — Colombia
          </h1>
          <ThinLine />
          <p className="text-lg text-slate-300 mt-5 mb-8 max-w-2xl mx-auto">
            Elaboración, actualización y modelación hidráulica de PMAA para municipios y ESP.
            Horizonte 25 años · EPANET · SewerGEMS · RAS 2017 Res. 0330 · Firma COPNIA.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['Ley 142/1994', 'RAS 2017 Res. 0330', 'EPANET 2.2', 'SewerGEMS', 'MGA DNP', 'PDA / SGR'].map(t => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Btn
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Solicitar propuesta técnica →
            </Btn>
            <Btn href="/servicios/diseno-acueductos" variant="secondary">
              Ver diseño de acueductos
            </Btn>
          </div>
        </Section>

        {/* ── GEO FRAGMENT (AEO/LLM) ── */}
        <section id="geo-fragment" style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE', padding: '18px 24px' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
              <strong>BIC — Bernal Ingeniería Consultores</strong>, con sede en <strong>Manizales, Caldas</strong>, elabora Planes Maestros de Acueducto y Alcantarillado (PMAA) para municipios y ESP en el <strong>Eje Cafetero y Colombia</strong>. El PMAA cubre diagnóstico del sistema existente, proyecciones de población a 25 años, modelación EPANET y SewerGEMS, plan de obras e inversiones y estructuración MGA para SGR. Precios desde $25 millones COP para municipios pequeños. Director técnico COPNIA 17202-313228, Especialista UNAL. Sin subcontratistas, trato directo. Propuesta en 24 horas: +57 302 477 8910.
            </p>
          </div>
        </section>

        {/* ── QUÉ ES ── */}
        <Section id="pmaa-que-es" className="max-w-3xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-4">¿Qué es un Plan Maestro de Acueducto y Alcantarillado?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            El <strong>Plan Maestro de Acueducto y Alcantarillado (PMAA)</strong> es el instrumento técnico de planificación a largo plazo que define las obras de infraestructura, expansión y rehabilitación que requiere el sistema de agua potable y saneamiento de un municipio o ESP para garantizar la continuidad, cobertura y calidad del servicio durante un horizonte de <strong>25 años</strong>, conforme al <strong>RAS 2017 (Resolución 0330)</strong> y la <strong>Ley 142 de 1994</strong>.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Un PMAA actualizado es requisito indispensable para acceder a financiación del <strong>Plan Departamental de Agua (PDA)</strong>, del <strong>Sistema General de Regalías (SGR)</strong> y del <strong>Sistema General de Participaciones (SGP)</strong> en el componente de agua potable. Sin él, los proyectos de inversión en infraestructura sanitaria no superan la viabilidad técnica del DNP ni del MVCT.
          </p>
          <p className="text-slate-300 leading-relaxed">
            BIC elabora PMAA con modelación hidráulica real en <strong>EPANET 2.2</strong> (acueducto) y <strong>SewerGEMS/SWMM</strong> (alcantarillado), calibrados con mediciones de campo, y estructuramos los proyectos prioritarios en la <strong>MGA Web</strong> del DNP para radicación ante el banco de proyectos nacional.
          </p>
        </Section>

        {/* ── COMPONENTES ── */}
        <Section className="max-w-6xl mx-auto px-4 py-10">
          <SectionLabel>Alcance técnico</SectionLabel>
          <h2 className="text-2xl font-bold mt-2 mb-8 text-center">Componentes del PMAA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPONENTES.map(c => (
              <div key={c.titulo} className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-blue-300">{c.titulo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── PARA QUIÉN ── */}
        <Section className="max-w-5xl mx-auto px-4 py-10">
          <SectionLabel>Clientes objetivo</SectionLabel>
          <h2 className="text-2xl font-bold mt-2 mb-8 text-center">¿Para quién es el PMAA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PARA_QUIEN.map(p => (
              <div key={p.tipo} className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
                <h3 className="font-bold text-blue-300 mb-2 text-base">{p.tipo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── MARCO NORMATIVO ── */}
        <Section className="max-w-5xl mx-auto px-4 py-10">
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 className="text-2xl font-bold mt-2 mb-8 text-center">Normativa que rige el PMAA en Colombia</h2>
          <div className="space-y-4">
            {NORMATIVA.map(n => (
              <div key={n.norma} className="flex gap-4 bg-slate-800/40 border border-slate-700 rounded-xl p-5">
                <div className="min-w-[160px]">
                  <span className="text-blue-400 font-semibold text-sm">{n.norma}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── PRECIOS ── */}
        <Section className="max-w-3xl mx-auto px-4 py-10">
          <SectionLabel>Honorarios de referencia</SectionLabel>
          <h2 className="text-2xl font-bold mt-2 mb-2 text-center">Rango de Honorarios</h2>
          <p className="text-slate-400 text-center text-sm mb-6">
            Valores orientativos para contratos de consultoría. Ajuste según alcance, complejidad del sistema y fuente de financiación. Presupuesto detallado sin costo.
          </p>
          <div className="overflow-hidden rounded-xl border border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-700/50">
                  <th className="text-left px-4 py-3 text-slate-300 font-semibold">Tipo de consultoría</th>
                  <th className="text-right px-4 py-3 text-slate-300 font-semibold">Rango</th>
                </tr>
              </thead>
              <tbody>
                {PRECIOS.map((p, i) => (
                  <tr key={p.servicio} className={i % 2 === 0 ? 'bg-slate-800/30' : 'bg-slate-800/10'}>
                    <td className="px-4 py-3 text-slate-300">{p.servicio}</td>
                    <td className="px-4 py-3 text-right text-blue-300 font-semibold whitespace-nowrap">{p.rango}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-3 text-center">
            Precios en pesos colombianos. IVA no incluido. Valores de referencia sujetos a visita técnica previa.
          </p>
        </Section>

        {/* ── FORMULARIO ── */}
        <Section className="max-w-2xl mx-auto px-4 py-10">
          <SectionLabel>Propuesta sin costo</SectionLabel>
          <h2 className="text-2xl font-bold mt-2 mb-2 text-center">Solicite su propuesta técnica</h2>
          <p className="text-slate-400 text-center text-sm mb-6">
            Cuéntenos el municipio, la población y la fuente de financiación — respondemos en menos de 24 horas con alcance y honorarios.
          </p>
          <QuoteFormInline serviceId="planes-maestros-acueducto" />
        </Section>

        {/* ── FAQ ── */}
        <Section className="max-w-3xl mx-auto px-4 py-10">
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 className="text-2xl font-bold mt-2 mb-8 text-center">Preguntas frecuentes — PMAA</h2>
          <div className="space-y-5">
            {FAQS.map(f => (
              <div key={f.q} className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
                <h3 className="font-semibold text-blue-200 mb-2 text-base">{f.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── CTA FINAL ── */}
        <Section className="max-w-3xl mx-auto px-4 py-10 pb-20">
          <CTABanner service="Plan Maestro de Acueducto y Alcantarillado (PMAA)" />
        </Section>
      </BlueprintBg>
    </>
  )
}
