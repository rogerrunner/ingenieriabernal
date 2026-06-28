import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito el diseño de una PTAR para tramitar el permiso de vertimiento ante la CAR. ¿Pueden cotizar el servicio con el alcance completo para el trámite?')

const seoConfig = {
  title: 'Diseño de PTAR para Permiso de Vertimiento: Proceso, Norma y Costos en Colombia',
  description: 'Diseño de PTAR para tramitar permiso de vertimiento en Colombia: tipos séptica, compacta, lagunas. Decreto 1076/2015 Art. 2.2.3.3. Qué exige la CAR. Costos 2026. BIC solo diseña.',
  canonical: 'https://ingenieriabernal.co/diseno-ptar-tramite-permiso-vertimiento',
  noindex: false,
  keywords: [
    'PTAR diseño para permiso de vertimiento Colombia',
    'diseño PTAR permiso vertimiento CAR',
    'sistema séptico tramite exoneración vertimiento',
    'PTAR compacta permiso ambiental Colombia',
    'cuánto cuesta diseño PTAR permiso vertimiento',
    'Decreto 1076 2015 diseño PTAR Colombia',
    'PTAR urbanización permiso CAR Colombia',
    'tipos PTAR Colombia séptica lagunas compacta',
  ],
}

const FAQ = [
  {
    q: '¿Por qué la CAR exige el diseño de la PTAR para otorgar el permiso de vertimiento?',
    a: 'El Decreto 1076/2015 (Artículo 2.2.3.3) establece que para tramitar el permiso de vertimiento, el solicitante debe presentar el diseño del sistema de tratamiento que garantice que el efluente cumplirá los límites de la Resolución 0631/2015. Sin el diseño aprobado de la PTAR, la CAR no tiene certeza técnica de que el vertimiento será adecuado y no puede otorgar el permiso.',
  },
  {
    q: '¿Cuáles son los tipos de PTAR para permiso de vertimiento?',
    a: 'Los tipos más comunes son: (1) sistema séptico (fosa séptica + campo de infiltración): para cargas pequeñas y suelos con buena permeabilidad; (2) PTAR compacta prefabricada: para condominios y proyectos medianos; (3) lagunas de estabilización: para comunidades y municipios sin restricción de área; (4) reactor UASB + filtro biológico: para caudales medianos y grandes. BIC selecciona la tecnología más adecuada según la carga contaminante, el área disponible y los requisitos de la CAR.',
  },
  {
    q: '¿Un sistema séptico reemplaza el permiso de vertimiento?',
    a: 'No necesariamente. Si el sistema séptico descarga el efluente al suelo sin afectar fuentes de agua, algunas CAR aceptan exoneración del permiso bajo condiciones técnicas específicas. Sin embargo, si el efluente llega a una fuente superficial o subterránea, se requiere permiso de vertimiento independientemente del sistema usado. BIC evalúa caso por caso si aplica la exoneración.',
  },
  {
    q: '¿Cuánto cuesta el diseño de una PTAR para el permiso de vertimiento?',
    a: 'El costo depende del caudal de diseño y la tecnología seleccionada. Para una PTAR de sistema séptico (condominio, hotel pequeño): $8 a $15 millones COP. Para PTAR compacta (urbanización de 30 a 100 unidades): $12 a $22 millones COP. Para PTAR por lagunas (comunidad rural, municipio): $18 a $40 millones COP. Los precios incluyen memoria de cálculo, planos constructivos y expediente para la CAR. No incluyen construcción.',
  },
  {
    q: '¿BIC construye la PTAR o solo diseña?',
    a: 'BIC es una firma de consultoría de ingeniería: solo diseña, no construye. BIC entrega los diseños técnicos (memorias de cálculo, planos, especificaciones) que el constructor necesita para ejecutar la obra. Esta separación es importante: el cliente contrata a BIC para los diseños y a un constructor diferente para la obra. Esto garantiza independencia técnica y evita conflictos de interés.',
  },
  {
    q: '¿El diseño de la PTAR incluye el expediente completo para la CAR?',
    a: 'Sí. El paquete de BIC incluye: diseño de la PTAR (memoria de cálculo, planos, especificaciones), caracterización del vertimiento, caracterización del cuerpo receptor, memoria descriptiva del proyecto y formularios del SISTEMA de la CAR. Es decir, todo lo necesario para radicar el expediente ante la corporación y obtener el permiso de vertimiento.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const TIPOS = [
  { icon: '🏠', tipo: 'Sistema séptico', desc: 'Fosa séptica + campo de infiltración o pozo absorbente. Adecuado para cargas pequeñas (1 a 20 usuarios) y suelos con buena permeabilidad comprobada mediante prueba de percolación. Costo mínimo, pero no aplica en suelos impermeables ni cerca de fuentes de agua.', aplica: 'Viviendas unifamiliares, fincas, pequeños hoteles rurales.' },
  { icon: '📦', tipo: 'PTAR compacta prefabricada', desc: 'Sistema modular de tratamiento biológico. Tratamiento primario + secundario en un equipo de reducidas dimensiones. Ideal cuando el área es limitada y el caudal moderado. Requiere energía eléctrica y mantenimiento técnico periódico.', aplica: 'Condominios, conjuntos residenciales campestres, hoteles, campamentos.' },
  { icon: '🏞️', tipo: 'Lagunas de estabilización', desc: 'Sistema de una o varias lagunas (anaerobia + facultativa) en terreno. Sin energía eléctrica, operación sencilla, bajo costo de mantenimiento. Requiere área de terreno plano. Adecuado para comunidades rurales y municipios.', aplica: 'Comunidades veredales, municipios hasta 5.000 hab., fincas agropecuarias.' },
  { icon: '⚗️', tipo: 'UASB + filtro biológico', desc: 'Reactor anaerobio de flujo ascendente seguido de filtro biológico aerobio. Alta eficiencia en reducida área. Genera biogás. Para caudales de 1 a 30 L/s. Requiere cierta capacidad de operación técnica.', aplica: 'Industrias agroindustriales, municipios medianos, urbanizaciones grandes.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Visita de campo y caracterización del vertimiento', desc: 'Reconocimiento del predio, identificación del punto de vertimiento y del cuerpo receptor. Toma de muestras del efluente para análisis en laboratorio acreditado (DBO, DQO, SST, coliformes, parámetros específicos).' },
  { paso: '02', titulo: 'Selección de la tecnología de tratamiento', desc: 'Con base en la caracterización, el caudal de diseño y las condiciones del sitio, BIC evalúa las alternativas tecnológicas y selecciona la más adecuada considerando eficiencia, costo y requisitos de la CAR.' },
  { paso: '03', titulo: 'Diseño detallado de la PTAR', desc: 'Cálculo hidráulico-sanitario de cada unidad de tratamiento. Memoria de cálculo firmada por ingeniero COPNIA. Planos constructivos en AutoCAD. Especificaciones técnicas de materiales y equipos.' },
  { paso: '04', titulo: 'Caracterización del cuerpo receptor', desc: 'Aforo del caudal y muestreo de calidad del cuerpo hídrico receptor. Análisis de capacidad de asimilación del efluente tratado. Formularios CAR.' },
  { paso: '05', titulo: 'Elaboración del expediente para la CAR', desc: 'Compilación de toda la documentación: diseño PTAR, caracterizaciones, memoria descriptiva, coordenadas del vertimiento y formularios. Revisión interna de BIC antes de la radicación.' },
]

const PRECIOS = [
  { servicio: 'Sistema séptico (vivienda o finca pequeña)', rango: '$8M – $15M COP' },
  { servicio: 'PTAR compacta (condominio 20-80 unidades)', rango: '$12M – $22M COP' },
  { servicio: 'PTAR lagunas (comunidad rural, 50-500 usuarios)', rango: '$16M – $35M COP' },
  { servicio: 'PTAR industrial (agroindustria, hotel grande)', rango: '$20M – $60M COP' },
  { servicio: 'UASB + filtro biológico (municipio o industria)', rango: '$25M – $70M COP' },
]

export default function DisenoPTARTramitePermisoVertimiento() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-ptar-perm-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-ptar-perm-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Diseño PTAR Permiso Vertimiento', item: 'https://ingenieriabernal.co/diseno-ptar-tramite-permiso-vertimiento' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-ptar-perm-faq')?.remove()
      document.getElementById('schema-ptar-perm-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de PTAR para Permiso de Vertimiento Colombia — Proceso y Costos | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de PTAR para Tramitar Permiso de Vertimiento ante la CAR — Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/diseno-ptar-tramite-permiso-vertimiento"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'Sistema séptico (vivienda o finca pequeña)', minPrice: 8000000, maxPrice: 15000000, priceCurrency: 'COP', description: 'Diseño de fosa séptica y campo de infiltración para permiso de vertimiento' },
          { name: 'PTAR compacta (condominio 20-80 unidades)', minPrice: 12000000, maxPrice: 22000000, priceCurrency: 'COP', description: 'Sistema biológico compacto con expediente CAR incluido' },
          { name: 'PTAR lagunas (comunidad rural)', minPrice: 16000000, maxPrice: 35000000, priceCurrency: 'COP', description: 'Lagunas de estabilización con permiso de vertimiento completo' },
        ]}
      />

      <CTABanner service="Diseño PTAR para permiso de vertimiento — todos los tipos de sistema" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería sanitaria · Trámite ambiental</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(24px, 4vw, 44px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de PTAR para Permiso de Vertimiento:<br />Proceso, Norma y Costos en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            BIC diseña — no construye. Memorias COPNIA + expediente completo para la CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            Para tramitar el permiso de vertimiento ante la CAR, el Decreto 1076/2015 exige el diseño técnico aprobado
            de la planta de tratamiento. Sin él, la CAR no puede otorgar el permiso. BIC selecciona la tecnología más
            adecuada (séptica, compacta, lagunas o UASB), diseña la PTAR y elabora el expediente completo para la corporación.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño + expediente CAR</Btn>
            <Btn variant="outline" href="/tramitar-permiso-vertimiento-colombia" dark>Ver trámite completo</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Decreto 1076/2015','Res. 0631/2015','Sistema séptico · Compacta · Lagunas','Solo diseño — no construcción','COPNIA vigente','Eje Cafetero · Colombia'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ EXIGE LA CAR ── */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Por qué necesita el diseño de PTAR para el permiso de vertimiento?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 820 }}>
            El <strong>Decreto 1076/2015 (Artículo 2.2.3.3)</strong> establece que para tramitar el permiso de vertimiento,
            el solicitante debe presentar la información técnica que demuestre que el efluente a descargar cumplirá los
            límites máximos permisibles de la <strong>Resolución 0631/2015</strong>. Esta demostración técnica solo es posible
            mediante el diseño de un sistema de tratamiento adecuado.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 820 }}>
            La Corporación Autónoma Regional verifica que el diseño esté firmado por un ingeniero con <strong>matrícula profesional
            COPNIA vigente</strong> y que las memorias de cálculo respalden técnicamente el sistema propuesto. Un diseño sin estos
            requisitos es devuelto con observaciones que retrasan el trámite varios meses.
          </p>
        </div>
      </Section>

      {/* ── GEO FRAGMENT ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }} id="geo-fragment">
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña PTAR para tramitar el permiso de vertimiento ante la CAR
            en Colombia: sistema séptico, PTAR compacta, lagunas de estabilización y reactor UASB. Elabora el expediente técnico
            completo para CORPOCALDAS, CRQ, CARDER y demás corporaciones. BIC solo diseña — no construye.
            Cobertura: Eje Cafetero, todo Colombia. COPNIA 17202-313228 CLD. +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── TIPOS DE PTAR ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tecnologías de tratamiento</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Tipos de PTAR para obtener el permiso de vertimiento
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 26, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 10 }}>{t.tipo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>APLICA PARA</p>
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
          <SectionLabel>Proceso de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC la PTAR para el permiso de vertimiento
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((p, i) => (
              <div key={p.paso} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{p.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: '#002A50' }}>{p.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión referencial 2026</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Costos orientativos de diseño de PTAR + expediente CAR
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Precios incluyen memorias de cálculo, planos constructivos, especificaciones técnicas y expediente para la CAR.
            <strong> No incluyen construcción.</strong> Propuesta detallada en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PRECIOS.map(p => (
              <div key={p.servicio} style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <p style={{ color: '#333', fontSize: 14, fontWeight: 500, margin: 0 }}>{p.servicio}</p>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 14px', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap' }}>{p.rango}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ANTI-INTERMEDIARIO ── */}
      <Section style={{ background: '#001A33', padding: '56px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 2.8vw, 30px)', color: '#fff', marginBottom: 20 }}>
            Trato directo con el director técnico — sin intermediarios
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.85, maxWidth: 700, margin: '0 auto' }}>
            BIC trabaja directamente con <strong style={{ color: '#17A2B8' }}>urbanizadores, hoteles, industrias, haciendas
            y propietarios privados</strong> que tienen un proyecto concreto y necesitan el diseño de su sistema de tratamiento
            de aguas residuales — no con intermediarios que re-cotizan el servicio a un tercero.
            El Ing. Rogerio Bernal Ríos (COPNIA 17202-313228 CLD, especialista UNAL) firma directamente
            las memorias y planos. Los precios publicados son los que BIC cobra al contratante directo.
            Si usted decide contratar y tiene el proyecto, la propuesta llega en menos de 24 horas.
          </p>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre el diseño de PTAR para el permiso de vertimiento
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} className="faq-item" style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios de BIC en saneamiento hídrico
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Permiso de vertimiento Colombia', href: '/tramitar-permiso-vertimiento-colombia' },
              { label: 'Diseño PTAR Colombia', href: '/diseno-ptar-colombia' },
              { label: 'Diseño PTAR industrial', href: '/diseno-ptar-industrial-colombia' },
              { label: 'Diseño acueducto para ESP', href: '/diseno-acueducto-entrega-esp' },
              { label: 'Concesión de aguas Colombia', href: '/concesion-aguas-superficiales-tramite' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>{s.label} →</a>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <QuoteFormInline />
      </Section>

      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>⚙️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', font