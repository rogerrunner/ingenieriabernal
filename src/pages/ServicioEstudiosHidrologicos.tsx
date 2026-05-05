import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito un estudio hidrológico. ¿Pueden asesorarme sobre el alcance y el costo?')

const seoConfig = {
  title: 'Estudios Hidrológicos Colombia 2026 — Desde $3.5M | Decreto 1807 y CAR | BIC',
  description: 'Estudios hidrológicos en Colombia desde $3.5M COP: caudales de diseño, Decreto 1807 para licencias de construcción, concesiones CAR, POMCA y proyectos SGR. Firma COPNIA. Propuesta en 24 horas. Todo el país.',
  keywords: [
    'estudio hidrológico Colombia',
    'estudios hidrológicos para CAR Colombia',
    'caudales de diseño Colombia',
    'curvas IDF Colombia IDEAM',
    'estudio hidrológico licencia construcción',
    'estudio hidrológico Decreto 1807',
    'estudio hidrológico obras hidráulicas',
    'análisis de cuencas hidrográficas Colombia',
    'HEC-HMS Colombia ingeniería',
    'empresa estudios hidrológicos Colombia',
    'estudio hidrológico municipios SGR',
    'estudio hidrológico Manizales Caldas',
    'firma hidrología Colombia COPNIA',
    'estudio hidrológico bocatoma acueducto',
    'estudio hidrológico amenaza inundación Colombia',
    'caudal ecológico Colombia estudio',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/estudios-hidrologicos',
}

const TIPOS = [
  {
    icon: '🏗️',
    tipo: 'Estudio Hidrológico para Diseño de Obras',
    subtitulo: 'Bocatomas, canales, encauzamientos, puentes, alcantarillas',
    desc: 'El estudio hidrológico que define los caudales de diseño de una obra hidráulica es el punto de partida de todo proyecto: si los caudales están mal calculados, la obra queda subdimensionada (falla en la primera creciente) o sobredimensionada (costo innecesario). BIC calcula los caudales de diseño para los períodos de retorno que exige la norma (10, 25, 50 y 100 años según el tipo de obra) usando métodos validados: HEC-HMS, método racional modificado, curvas IDF del IDEAM y análisis de frecuencia Log-Pearson III con registros hidrometeorológicos de estaciones cercanas.',
    usos: ['Bocatomas y captaciones de agua', 'Canales de riego y conducción', 'Encauzamientos y rectificación de cauces', 'Puentes y viaductos en zonas fluviales', 'Alcantarillas y pasos de vía', 'Diques y obras de protección contra inundaciones'],
    norma: 'RAS 2017, Resolución 0330/2017, Manual IDEAM',
  },
  {
    icon: '📋',
    tipo: 'Estudio Hidrológico para Licencia de Construcción',
    subtitulo: 'Decreto 1807/2014 — amenaza por inundación y remoción en masa',
    desc: 'El Decreto 1807 de 2014 (hoy Decreto 1077/2015 compilado) exige que en zonas con amenaza alta o media por inundación o movimiento en masa, el curador urbano solo puede expedir la licencia de construcción si el propietario presenta un estudio de detalle que delimite la amenaza y el riesgo en el predio específico. BIC realiza el estudio de amenaza por inundación con levantamiento topográfico, análisis hidrológico de la cuenca y modelación hidráulica del cauce más cercano, para determinar si el predio queda dentro o fuera de la zona inundable para los caudales de diseño.',
    usos: ['Licencias de construcción en zonas con amenaza alta o media', 'Planes parciales en suelo de expansión con restricciones', 'Proyectos en zonas de ladera', 'Predios cerca de ríos, quebradas o llanuras de inundación'],
    norma: 'Decreto 1807/2014, compilado en Decreto 1077/2015',
  },
  {
    icon: '🌿',
    tipo: 'Estudio de Oferta Hídrica y Caudal Ecológico',
    subtitulo: 'Para concesiones de agua y permisos CAR',
    desc: 'Antes de otorgar una concesión de aguas (el permiso para captar agua de un río), la CAR exige un estudio de oferta y demanda hídrica que demuestre que el río tiene suficiente agua para satisfacer la demanda del proyecto sin afectar el caudal ecológico mínimo. BIC calcula el caudal medio mensual del río, el caudal mínimo (Q95%) usando registros del IDEAM, la demanda hídrica del proyecto y el caudal ecológico según el Decreto 1076 de 2015. El estudio es el soporte técnico de la solicitud de concesión ante la CAR.',
    usos: ['Concesión de aguas para bocatomas y acueductos', 'Concesión para distritos de riego', 'Concesión para uso industrial o minero', 'Trámite de permiso de ocupación de cauce'],
    norma: 'Decreto 1076/2015, Resolución 865/2004 MAVDT (caudal ecológico)',
  },
  {
    icon: '🏙️',
    tipo: 'Estudio Hidrológico para POT y Planes de Ordenamiento',
    subtitulo: 'Zonificación de amenaza a escala municipal',
    desc: 'Los Planes de Ordenamiento Territorial (POT, PBOT, EOT) deben incluir la zonificación de amenazas por inundación y movimientos en masa para todo el territorio municipal. Este es un estudio hidrológico de escala regional, que no llega al detalle de predio pero sí determina qué zonas del municipio tienen amenaza alta, media o baja. BIC realiza este estudio usando modelación HEC-RAS 2D en los cauces principales y análisis multicriterio para remoción en masa, con cartografía en QGIS a la escala que exige el Ministerio de Vivienda.',
    usos: ['Formulación o revisión de POT/PBOT/EOT', 'Planes Municipales de Gestión del Riesgo (PMGRD)', 'Estudios base para corporaciones ambientales', 'Zonificación de suelo urbano y de expansión'],
    norma: 'Ley 388/97, Decreto 1807/2014, Guía técnica MinVivienda',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Recopilación de Información Hidrométrica y Cartográfica',
    desc: 'El estudio empieza con la recopilación de toda la información existente sobre el área del proyecto: datos pluviométricos e hidrométricos de las estaciones del IDEAM más cercanas a la cuenca (series históricas de precipitación máxima en 24 horas y caudales medios diarios), cartografía a escala 1:25.000 del IGAC o 1:10.000 si está disponible, modelos digitales de elevación (DEM SRTM de 30m o CartoCiudad de mayor resolución), usos del suelo del SIAC y cualquier estudio hidrológico anterior realizado en el área. La calidad de la información de entrada determina la confiabilidad del estudio.',
    herramientas: ['IDEAM (datos hidrometereológicos)', 'IGAC (cartografía y DEM)', 'SIAC (uso del suelo)', 'ArcGIS / QGIS (análisis espacial)'],
    resultado: 'Base de datos hidroclimática y cartográfica del área del estudio',
  },
  {
    paso: '02',
    titulo: 'Delimitación y Caracterización de la Cuenca',
    desc: 'Con el DEM del área, BIC delimita automáticamente la cuenca hidrográfica que drena hacia el punto de interés del proyecto (la bocatoma, el cruce de la vía, el predio a licenciar). La caracterización morfométrica incluye: área de la cuenca, longitud y pendiente del cauce principal, índice de compacidad (Gravelius), factor de forma (Horton) y cobertura vegetal. Estos parámetros determinan cómo responde la cuenca a la lluvia: qué tan rápido llega el pico de creciente y cuánto dura.',
    herramientas: ['HEC-GeoHMS (delimitación automática)', 'ArcGIS / QGIS (morfometría)', 'DEM SRTM / CartoCiudad', 'Google Earth Engine (cobertura vegetal)'],
    resultado: 'Mapa de cuencas, parámetros morfométricos, coeficientes de escorrentía',
  },
  {
    paso: '03',
    titulo: 'Análisis de Frecuencia y Curvas IDF',
    desc: 'Con las series de precipitación máxima en 24 horas de las estaciones del IDEAM, BIC realiza el análisis de frecuencia estadístico para estimar la precipitación máxima para los períodos de retorno de diseño (10, 25, 50, 100 años). Se ajustan las distribuciones de probabilidad (Gumbel, Log-Pearson III, GEV) usando el método de momentos y máxima verosimilitud, y se selecciona la distribución que mejor se ajusta usando las pruebas de bondad de ajuste Chi-cuadrado y Kolmogorov-Smirnov. Con las precipitaciones máximas se construyen las curvas Intensidad-Duración-Frecuencia (IDF) del área del proyecto.',
    herramientas: ['EasyFit / R / Python (análisis estadístico)', 'Distribuciones Gumbel, LP-III, GEV', 'Pruebas Chi² y K-S', 'IDEAM (series pluviométricas)'],
    resultado: 'Curvas IDF del área del proyecto, precipitaciones de diseño por período de retorno',
  },
  {
    paso: '04',
    titulo: 'Modelación Lluvia-Escorrentía con HEC-HMS',
    desc: 'Con las precipitaciones de diseño y los parámetros de la cuenca, BIC modela la transformación lluvia-escorrentía usando HEC-HMS: el modelo hidrológico calcula el hidrograma de escorrentía superficial en el punto de interés para cada período de retorno. Los métodos aplicados dependen de la disponibilidad de información: método racional modificado (cuencas pequeñas <25 km²), Curva Número CN-SCS o método de Clark para cuencas medianas y grandes. El resultado son los caudales pico de diseño (en m³/s o L/s) y el volumen de escorrentía para cada período de retorno.',
    herramientas: ['HEC-HMS (modelación lluvia-escorrentía)', 'Método racional modificado', 'Curva Número CN-SCS', 'Clark / Snyder (hidrogramas unitarios)'],
    resultado: 'Caudales de diseño para T=10, 25, 50 y 100 años — el insumo central de la obra',
  },
  {
    paso: '05',
    titulo: 'Informe Técnico con Memoria de Cálculo y Cartografía',
    desc: 'BIC entrega el estudio hidrológico completo en un informe técnico con: descripción de la cuenca y la metodología, procesamiento estadístico de la información pluviométrica, parámetros morfométricos de la cuenca, curvas IDF, modelación HEC-HMS con capturas de pantalla del modelo, resultados de caudales por período de retorno, análisis de incertidumbre y recomendaciones técnicas. El informe incluye la cartografía en formato digital (KMZ, shapefile) y está firmado por el especialista en hidrología con tarjeta profesional COPNIA vigente.',
    herramientas: ['Informe técnico completo (firma COPNIA)', 'Cartografía digital (KMZ, shapefile)', 'Archivo HEC-HMS (modelo calibrado)', 'Tablas y gráficas de resultados'],
    resultado: 'Estudio hidrológico completo listo para tramitar ante la CAR, curador o entidad financiadora',
  },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta un estudio hidrológico en Colombia?',
    a: 'El costo depende del tipo de estudio, el área de la cuenca y la disponibilidad de información. Para un estudio hidrológico para diseño de obra (bocatoma, canal, puente) en una cuenca de área media con información suficiente del IDEAM, el costo oscila entre $8.000.000 y $22.000.000 COP. Para un estudio de amenaza por inundación de predio para licencia de construcción (Decreto 1807) el rango es similar: $7.000.000 a $18.000.000 COP. Los estudios de POT a escala municipal tienen costos mayores dependiendo de la extensión del municipio. BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo.',
  },
  {
    q: '¿Cuánto tiempo tarda un estudio hidrológico?',
    a: 'Para un estudio hidrológico de obra (bocatoma, canal, puente) o de licencia de construcción el plazo típico es de 2 a 4 semanas, dependiendo de la disponibilidad de datos del IDEAM en el área del proyecto. Cuencas en zonas con pocas estaciones hidrométricas requieren metodologías alternativas (regionalización hidrológica) que pueden tomar una semana adicional. Para estudios de POT (escala municipal) el plazo es de 6 a 12 semanas. BIC puede hacer entregas parciales — caudales de diseño preliminares — mientras se completa el informe, para no bloquear el inicio del diseño de la obra.',
  },
  {
    q: '¿Para qué sirve un estudio hidrológico ante la CAR?',
    a: 'La Corporación Autónoma Regional exige estudios hidrológicos en tres escenarios principales. Primero: cuando se solicita una concesión de aguas, para demostrar que el río tiene oferta suficiente y calcular el caudal ecológico. Segundo: cuando se solicita un permiso de ocupación de cauce (para construir una bocatoma, un puente o un encauzamiento), para dimensionar la obra con los caudales correctos. Tercero: cuando se presenta un proyecto en zona de amenaza hídrica para obtener el concepto de no interferencia con el régimen hídrico. BIC conoce los requerimientos específicos de CORPOCALDAS, CARDER, CRQ, CVC, CAR Cundinamarca y las principales corporaciones del país.',
  },
  {
    q: '¿Qué diferencia hay entre el estudio hidrológico y la modelación hidráulica?',
    a: 'Son complementarios pero diferentes. El estudio hidrológico responde la pregunta ¿cuánta agua lleva el río? — calcula los caudales de diseño usando datos de lluvia, área de la cuenca y sus características. La modelación hidráulica responde ¿qué pasa con esa agua en el cauce? — simula el comportamiento del flujo en el río para esos caudales: qué nivel alcanza el agua, a qué velocidad va, dónde se desborda, cómo afecta las estructuras. Para diseño de obras importantes y estudios de amenaza por inundación se necesitan ambas. BIC hace los dos estudios y los integra en un solo proceso técnico.',
  },
  {
    q: '¿El estudio hidrológico del Decreto 1807 garantiza que me dan la licencia de construcción?',
    a: 'El estudio hidrológico del Decreto 1807 es un requisito necesario pero no suficiente para la licencia. Lo que hace es determinar si el predio está en zona de amenaza alta, media o baja por inundación. Si el estudio concluye que el predio está fuera de la zona inundable para el período de retorno de diseño, el curador puede licenciar sin restricciones adicionales. Si está en zona de amenaza media, el curador puede licenciar con medidas de mitigación (cotas de piso, estructuras de protección). Si está en amenaza alta, el curador no puede licenciar. BIC hace el diagnóstico previo — visita el predio, revisa la cartografía y evalúa la situación — antes de iniciar el estudio formal, para que no invierta en un estudio cuyo resultado ya es predecible.',
  },
  {
    q: '¿BIC puede hacer estudios hidrológicos en toda Colombia o solo en el Eje Cafetero?',
    a: 'BIC hace estudios hidrológicos en todo el territorio nacional. La mayor parte del trabajo de análisis (obtención de datos del IDEAM, procesamiento estadístico, modelación en HEC-HMS, elaboración del informe) se realiza de forma remota y no requiere visitas presenciales en la mayoría de los casos. Cuando el estudio requiere visita de campo (topografía batimétrica del cauce, aforo del caudal), BIC coordina con profesionales locales certificados. BIC tiene experiencia en cuencas de Caldas, Risaralda, Quindío, Valle del Cauca, Antioquia, Cundinamarca, Tolima, Nariño y Cauca.',
  },
  {
    q: '¿Qué es el período de retorno y cómo sé cuál necesito?',
    a: 'El período de retorno es el tiempo promedio en años que se espera que transcurra entre dos eventos iguales o superiores a un caudal de referencia. Un caudal con período de retorno de 100 años tiene una probabilidad del 1% de ser superado en cualquier año dado. La norma establece el período de retorno de diseño según el tipo de obra o el uso del predio: para bocatomas de acueducto municipal se diseña con T=25 a 50 años según el RAS 2017; para la licencia de construcción en zonas de amenaza el Decreto 1807 exige T=100 años; para alcantarillas de vías secundarias se usa T=10 a 25 años. BIC determina el período de retorno correcto en función de la norma aplicable a su proyecto.',
  },
  {
    q: '¿Qué pasa si no hay estaciones del IDEAM cerca de mi proyecto?',
    a: 'Es un caso frecuente en Colombia, especialmente en municipios rurales de montaña. Cuando no hay estaciones cercanas, BIC aplica métodos de regionalización hidrológica: se identifican estaciones en cuencas vecinas con características morfométricas similares y se transfieren los parámetros hidrológicos usando correlaciones regionales. BIC también usa la información de precipitación de reanálisis climático global (ERA5, CHIRPS) que tiene cobertura en todo el territorio nacional. La fiabilidad del estudio puede ser menor que con datos locales, pero BIC aplica análisis de sensibilidad para cuantificar la incertidumbre del resultado.',
  },
]

const CLIENTES = [
  { tipo: 'Municipios y Secretarías de Planeación', desc: 'POT, PMGRD, proyectos de agua y saneamiento con SGR, estudios para OCAD.' },
  { tipo: 'Constructoras e Inmobiliarios', desc: 'Estudios Dec. 1807 para licencias, planes parciales en zonas con amenaza.' },
  { tipo: 'Empresas de Servicios Públicos (ESP)', desc: 'Concesión de aguas, diseño de bocatomas, ampliación de acueductos.' },
  { tipo: 'INVÍAS y Gobernaciones', desc: 'Hidrología para diseño de puentes, drenaje vial y obras de infraestructura.' },
  { tipo: 'Entidades Ambientales (CAR)', desc: 'Estudios hidrológicos como soporte técnico de permisos y conceptos ambientales.' },
  { tipo: 'Interventores y Revisores', desc: 'Revisión independiente de estudios presentados por terceros, validación de memorias.' },
]

const CASO_ESTUDIO = {
  tag: 'Caso real — Eje Cafetero',
  titulo: 'Plan parcial en zona con amenaza hídrica — 340 viviendas aprobadas',
  contexto: 'Una promotora inmobiliaria adquirió un predio de 22 ha en zona de expansión urbana en el Eje Cafetero. El curador urbano exigió un estudio de detalle Decreto 1807/2014 porque el predio colinda con una quebrada de alto régimen torrencial. Sin el estudio, el plan parcial no podía iniciar trámite.',
  solucion: 'BIC realizó el levantamiento topobatimétrico del cauce (4.2 km), construyó el modelo hidrológico HEC-HMS con datos del IDEAM y el modelo hidráulico HEC-RAS 2D con malla de 5 m para delimitar la mancha de inundación para T=50 y T=100 años. El informe determinó que el 62% del predio quedaba fuera de la zona inundable.',
  metricas: [
    { valor: '22 ha', label: 'área total del predio analizado' },
    { valor: '62%', label: 'del predio fuera de zona inundable' },
    { valor: '3 semanas', label: 'desde contrato hasta entrega del informe' },
    { valor: '340 viviendas', label: 'plan parcial aprobado por el curador' },
  ],
  resultado: 'El curador urbano aprobó el plan parcial con las condiciones del estudio. La promotora diseñó la urbanización respetando la zona de retiro del cauce delimitada por BIC. El informe fue aceptado sin observaciones en primera revisión.',
}

export default function ServicioEstudiosHidrologicos() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Estudios Hidrológicos en Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/estudios-hidrologicos"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'Estudio hidrológico', minPrice: 3500000, maxPrice: 12000000, description: 'Caudales de diseño, curvas IDF, HEC-HMS, Decreto 1807/2014, concesiones CAR' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Hidrología · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Estudios Hidrológicos en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Para permisos CAR, licencias de construcción, diseño de obras y proyectos SGR — firmados por especialista COPNIA
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores realiza estudios hidrológicos en todo Colombia:
            cálculo de caudales de diseño, curvas IDF del IDEAM, modelación HEC-HMS,
            análisis de amenaza por inundación (Decreto 1807) y estudios de oferta hídrica
            para concesiones de agua ante la CAR. Cada estudio viene firmado por el especialista
            en hidrología con tarjeta profesional COPNIA vigente y es válido ante cualquier
            autoridad ambiental, curador urbano o entidad de financiación en Colombia.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar estudio hidrológico</Btn>
            <Btn variant="outline" href="/servicios/modelacion-hec-ras" dark>Modelación HEC-RAS 2D</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Decreto 1807/2014','HEC-HMS','Curvas IDF IDEAM','Caudal ecológico','COPNIA vigente','Todo Colombia'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '28px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
            {[
              { num: '+120', label: 'estudios hidrológicos en Colombia' },
              { num: '4 tipos', label: 'de estudios hidrológicos' },
              { num: '24h', label: 'para enviar propuesta técnica' },
              { num: '100%', label: 'aceptados por CAR y curadores' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '12px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#002A50' }}>{num}</div>
                <div style={{ color: '#555', fontSize: 12, lineHeight: 1.4, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de estudio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de estudio hidrológico necesita?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El tipo de estudio hidrológico depende del propósito: diseñar una obra, obtener un permiso ambiental
            o tramitar una licencia de construcción. BIC determina el alcance correcto según el proyecto.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20,
              }}>
                <div style={{ fontSize: 34, paddingTop: 4 }}>{t.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{t.tipo}</h3>
                  <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 10 }}>{t.subtitulo}</p>
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.78, marginBottom: 14 }}>{t.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>USOS FRECUENTES</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', fontSize: 12, color: '#444', lineHeight: 1.6 }}>
                        {t.usos.map(u => <li key={u}>{u}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#f8f9fa', borderRadius: 8, padding: '10px 14px' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>NORMA APLICABLE</p>
                      <p style={{ fontSize: 13, color: '#444', lineHeight: 1.6, margin: 0 }}>{t.norma}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CASO DE ESTUDIO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 100%)', padding: '52px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(23,162,184,0.2)', border: '1px solid rgba(23,162,184,0.4)', borderRadius: 20, padding: '4px 14px', marginBottom: 16 }}>
            <span style={{ color: '#7FDBEA', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em' }}>{CASO_ESTUDIO.tag}</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(20px, 2.8vw, 30px)', marginBottom: 16, lineHeight: 1.3 }}>
            {CASO_ESTUDIO.titulo}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 28 }}>
            {CASO_ESTUDIO.metricas.map(m => (
              <div key={m.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '14px 12px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 26, color: '#17A2B8', marginBottom: 4 }}>{m.valor}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11, lineHeight: 1.4 }}>{m.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <p style={{ color: '#7FDBEA', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', marginBottom: 8 }}>CONTEXTO</p>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{CASO_ESTUDIO.contexto}</p>
            </div>
            <div>
              <p style={{ color: '#7FDBEA', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', marginBottom: 8 }}>SOLUCIÓN BIC</p>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{CASO_ESTUDIO.solucion}</p>
            </div>
          </div>
          <div style={{ marginTop: 20, background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: 8, padding: '12px 16px' }}>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#25D366' }}>Resultado: </strong>{CASO_ESTUDIO.resultado}
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo realiza BIC un estudio hidrológico
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            De los datos del IDEAM al informe firmado que acepta la CAR. Metodología paso a paso.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
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

      {/* ── CTA BANNER ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '36px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita un estudio hidrológico?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>Propuesta técnica en 24 horas · Primera consulta sin costo · Todo Colombia</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── PRECIOS ── */}
      <section style={{ background: '#f0f9ff', padding: '52px 24px', borderTop: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión referencial</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8, color: '#002A50' }}>
            ¿Cuánto cuesta un estudio hidrológico en Colombia?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 680 }}>
            Rangos referenciales para proyectos estándar. El precio exacto se define según el tipo de estudio, la cuenca y la entidad receptora.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            <div style={{
              background: '#fff', border: '1px solid #b3e0ea', borderLeft: '4px solid #17A2B8',
              borderRadius: 10, padding: '18px 24px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
            }}>
              <div>
                <p style={{ fontWeight: 700, color: '#002A50', fontSize: 15, margin: 0 }}>Estudio hidrológico</p>
                <p style={{ color: '#777', fontSize: 13, margin: '3px 0 0' }}>Diseño de obras, licencias, concesiones CAR, Decreto 1807</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: '#17A2B8', margin: 0 }}>$3.5M – $12M COP</p>
                <p style={{ color: '#888', fontSize: 12, margin: '2px 0 0' }}>según complejidad y área de la cuenca</p>
              </div>
            </div>
          </div>
          <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '14px 18px', marginBottom: 24, border: '1px solid #b3d9ea' }}>
            <p style={{ color: '#333', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              Los precios varían según la complejidad del proyecto, el municipio y los requerimientos de la autoridad ambiental. <strong>Solicita una cotización sin costo.</strong>
            </p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '13px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            📱 Solicitar cotización sin costo
          </a>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Clientes que contratan estudios hidrológicos con BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 24 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{ background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: 20, borderLeft: '3px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
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
            FAQ — Estudios hidrológicos en Colombia
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

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Modelación HEC-RAS 2D', href: '/servicios/modelacion-hec-ras' },
              { label: 'Bocatomas y captaciones', href: '/bocatomas-colombia' },
              { label: 'Encauzamiento de ríos', href: '/encauzamiento-rios-colombia' },
              { label: 'Gestión del riesgo hídrico', href: '/gestion-riesgo-hidrico' },
              { label: 'Diseño de acueductos', href: '/servicios/diseno-acueductos' },
              { label: 'Obras hidráulicas Colombia', href: '/obras-hidraulicas-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos técnicos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { href: '/blog/cuanto-cuesta-estudio-hidrologico', title: '¿Cuánto cuesta un estudio hidrológico en Colombia 2025?' },
              { href: '/blog/estudio-hidrologico-colombia', title: '¿Qué es un estudio hidrológico y cuándo es obligatorio?' },
              { href: '/blog/estudio-hidrologico-decreto-1807', title: 'Estudio hidrológico para el Decreto 1807: qué incluye' },
              { href: '/blog/hec-ras-1d-vs-2d-colombia', title: 'HEC-RAS 1D vs 2D: ¿cuál elegir para su proyecto?' },
            ].map(a => (
              <a key={a.href} href={a.href} style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>{a.title}</span>
                <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section bg="#EFF6FB" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Modelación hidráulica HEC-RAS 2D para manchas de inundación</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/gestion-riesgo-hidrico" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Gestión del riesgo hídrico — estudios Decreto 1807/2014 para POT</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/acueducto-alcantarillado" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de acueducto y alcantarillado conforme RAS 2017</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/regalias-mga" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Formulación de proyectos de agua y saneamiento en MGA-Web SGR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📊</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita un estudio hidrológico<br />aceptado por la CAR en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proyecto, el municipio y el propósito del estudio (obra, licencia, concesión de aguas).
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Cotizar por WhatsApp · +57 302 477 8910
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
