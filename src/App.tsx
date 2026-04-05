import { Route, Switch } from 'wouter'
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FloatingQuoteButton from './components/FloatingQuoteButton'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Team from './pages/Team'
import Credentials from './pages/Credentials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import CityPage from './pages/CityPage'
import CoverageNational from './pages/CoverageNational'
import BlogDetail from './pages/BlogDetail'
import NotFound from './pages/NotFound'
import Bogota from './pages/Bogota'
import Medellin from './pages/Medellin'
import Cali from './pages/Cali'
import ManizalesRegional from './pages/Manizales'
import Bucaramanga from './pages/Bucaramanga'
import Barranquilla from './pages/Barranquilla'
import EjeCafetero from './pages/EjeCafetero'
import Antioquia from './pages/Antioquia'
import ServicioEstudiosHidrologicos from './pages/ServicioEstudiosHidrologicos'
import ServicioModelacionHecRas from './pages/ServicioModelacionHecRas'
import ServicioAcueductoAlcantarillado from './pages/ServicioAcueductoAlcantarillado'
import ServicioRedesHidrosanitarias from './pages/ServicioRedesHidrosanitarias'
import ServicioSistemasContraIncendio from './pages/ServicioSistemasContraIncendio'
import ServicioInterventoria from './pages/ServicioInterventoria'
import ServicioRegaliasMga from './pages/ServicioRegaliasMga'
import ServicioGeotecnia from './pages/ServicioGeotecnia'
import ServicioAmbiental from './pages/ServicioAmbiental'

function ScrollToTop() {
  const [location] = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location])
  return null
}

const BASE_URL = 'https://www.ingenieriabernal.co'

function CanonicalManager() {
  const [location] = useLocation()
  useEffect(() => {
    const url = BASE_URL + location
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null
    if (ogUrl) ogUrl.setAttribute('content', url)
  }, [location])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CanonicalManager />
      <Nav />
      <main>
        <Switch>

          {/* ── PÁGINAS PRINCIPALES ── */}
          <Route path="/" component={Home} />
          <Route path="/servicios" component={Services} />
          <Route path="/proyectos" component={Projects} />
          <Route path="/equipo" component={Team} />
          <Route path="/sobre-mi" component={About} />
          <Route path="/credenciales" component={Credentials} />
          <Route path="/blog" component={Blog} />
          <Route path="/contacto" component={Contact} />
          <Route path="/cobertura-nacional" component={CoverageNational} />

          {/* ── BASE: EJE CAFETERO ── */}
          <Route path="/manizales">{() => <CityPage
            city="Manizales" dept="Caldas" pageKey="manizales"
            intro="Ciudad base de BIC. Centro de negocios del Eje Cafetero con proyectos activos en drenaje urbano, hidrosanitarios, sistemas CI e ingeniería de riesgo para planes parciales y POT."
            services={['Diseños hidrosanitarios y CI (NSR-10)','Modelación HEC-RAS 2D','Formulación regalías MGA-Web','Gestión del riesgo POT Manizales','Acueducto y alcantarillado','Supervisión técnica de obra']}
          />}</Route>

          <Route path="/eje-cafetero">{() => <CityPage
            city="Eje Cafetero" dept="Pereira · Armenia · Dosquebradas" pageKey="eje-cafetero"
            intro="Triángulo de Oro con el mayor dinamismo constructivo de Colombia media. BIC ejecutó el diseño hidrosanitario y CI del Makarí Mall en Dosquebradas y tiene presencia verificada en los tres departamentos del Eje."
            services={['Estudios riesgo hídrico planes parciales','Diseño hidrosanitario industrial y comercial','Sistemas contra incendios NSR-10 J/K','Acueducto y alcantarillado — Res. 0330/2017','Gestión del riesgo Decreto 1807/2014','Consultoría integral BIC multidisciplinaria']}
          />}</Route>

          <Route path="/palestina-aerocafe">{() => <CityPage
            city="Palestina — Aerocafé" dept="Caldas" pageKey="palestina-aerocafe"
            intro="Sede del Aeropuerto Internacional del Café con inversión activa superior a $828.000 millones. La mayor obra de infraestructura del Eje Cafetero genera demanda directa en drenaje pluvial, vías de acceso, zonas industriales y gestión del riesgo en el área de influencia."
            services={['Drenaje pluvial infraestructura aeroportuaria','Estudios riesgo hídrico Decreto 1807','Diseño hidrosanitario industrial y logístico','Gestión del riesgo zonas expansión','Acueducto y alcantarillado municipio','Formulación proyectos regalías SGR']}
          />}</Route>

          {/* ── ZONA VITERBO — CLIENTELA DIRECTA ── */}
          <Route path="/viterbo-occidente-caldas">{() => <CityPage
            city="Viterbo y Occidente de Caldas" dept="Caldas" pageKey="viterbo-occidente-caldas"
            intro="Zona de clientela directa de BIC. Rogerio Bernal trabajó como Profesional Universitario en la Alcaldía de Viterbo y ejecutó proyectos en Anserma (Centro Cultural Cacique Ucuzca). La Planta de Tratamiento de Agua Potable del Occidente de Caldas ($15.000 millones activos) genera demanda técnica continua en Viterbo, Anserma, Belalcázar, San José y Risaralda municipio."
            services={['EOT — componente hídrico y riesgo','Diseño acueducto y alcantarillado municipal','Formulación proyectos regalías DNP','Diseños hidrosanitarios institucionales','Sistemas contra incendios NSR-10','Estudios amenaza hídrica y torrencialidad']}
          />}</Route>

          {/* ── ALTO OCCIDENTE CALDAS — MARMATO ── */}
          <Route path="/alto-occidente-caldas">{() => <CityPage
            city="Alto Occidente de Caldas" dept="Riosucio · Supía · Marmato · Filadelfia · La Merced"
            intro="Corredor minero y cafetero del noroccidente de Caldas. El Centro de Desarrollo Minero en Marmato ($21.000 millones) y la vía Salamina–La Merced ($21.000 millones) generan demanda técnica activa en toda la zona. Cero competencia SEO en consultoría especializada."
            services={['Diseño acueducto y alcantarillado','Gestión del riesgo hídrico y minero','Estudios geotécnicos e hidráulicos','Formulación proyectos regalías SGR','Ingeniería ambiental — permisos CAR','Topografía y cartografía SIG']}
          />}</Route>

          {/* ── MAGDALENA MEDIO ── */}
          <Route path="/magdalena-medio">{() => <CityPage
            city="Magdalena Medio" dept="La Dorada · Honda · Puerto Boyacá · Barrancabermeja" pageKey="magdalena-medio"
            intro="Corredor estratégico sobre el río Magdalena. BIC ejecutó proyectos en La Dorada (Palacio de Justicia — Rama Judicial) y formuló proyectos de regalías en Puerto Boyacá (Contrato 621/2021). Zona de inversión permanente en infraestructura logística, energética e hídrica."
            services={['Estudios inundación río Magdalena','Sistemas contra incendios institucionales','Formulación proyectos regalías MGA-Web','Diseño hidrosanitario industrial','Gestión del riesgo hídrico fluvial','Acueducto y alcantarillado']}
          />}</Route>

          {/* ── NORTE TOLIMA ── */}
          <Route path="/norte-tolima">{() => <CityPage
            city="Norte del Tolima" dept="Líbano · Fresno · Mariquita · Herveo · Honda"
            intro="Corredor Caldas–Tolima con inversión activa en infraestructura vial 4G, centros de innovación y obras de acueducto municipales. Zona sin competencia digital en consultoría técnica especializada — cualquier búsqueda sobre ingeniería hidráulica en estos municipios no encuentra resultados locales."
            services={['Diseño acueducto y alcantarillado rural y municipal','Estudios riesgo hídrico','Gestión POT — componente hídrico','Formulación proyectos SGR agua y saneamiento','Diseño hidrosanitario','Residencia y supervisión de obra']}
          />}</Route>

          {/* ── CERRITOS — NORTE VALLE ── */}
          <Route path="/cerritos-norte-valle">{() => <CityPage
            city="Cerritos y Norte del Valle" dept="Risaralda · Valle del Cauca" pageKey="cerritos-norte-valle"
            intro="La zona de mayor desarrollo inmobiliario activo del Eje Cafetero — 22 planes parciales, 47 industrias, hospital de alta complejidad en construcción y doble calzada Cerritos–La Virginia en ejecución. Cada plan parcial exige estudio de riesgo hídrico obligatorio bajo Decreto 1807/2014. Cartago suma nueva sede CVC de 10.000 m²."
            services={['Estudios riesgo hídrico planes parciales obligatorio','Drenaje pluvial zonas industriales','Diseño hidrosanitario edificios y naves','Sistemas contra incendios NSR-10','Acueducto y alcantarillado','Consultoría integral BIC multidisciplinaria']}
          />}</Route>

          {/* ── RIONEGRO — ORIENTE ANTIOQUIA ── */}
          <Route path="/rionegro-oriente-antioquia">{() => <CityPage
            city="Rionegro y Oriente Antioquia" dept="Antioquia" pageKey="rionegro-oriente-antioquia"
            intro="Zona con el mayor dinamismo industrial y residencial de Antioquia fuera de Medellín. Rionegro, Guarne, La Ceja, El Retiro y Marinilla figuran entre los 68 municipios más desarrollados de Colombia según el DNP. El corredor del Aeropuerto José María Córdova concentra parques industriales, centros logísticos y urbanizaciones de alto estrato en expansión permanente."
            services={['Estudios riesgo hídrico planes parciales','Diseño hidrosanitario industrial y residencial','Sistemas contra incendios parques industriales','Gestión del riesgo Decreto 1807','Drenaje pluvial zonas expansión','Consultoría integral BIC']}
          />}</Route>

          {/* ── SABANA OCCIDENTE ── */}
          <Route path="/sabana-occidente">{() => <CityPage
            city="Sabana Occidente" dept="Cundinamarca"
            intro="Mosquera, Facatativá, Madrid, Funza y Bojacá conforman el corredor industrial de mayor densidad de Cundinamarca. Zonas francas, bodegas logísticas y urbanizaciones activas con alta demanda de diseños hidrosanitarios, sistemas CI y estudios de riesgo. Ninguna firma consultora especializada tiene presencia SEO en esta zona."
            services={['Diseño hidrosanitario industrial y bodegas','Sistemas contra incendios zonas francas NSR-10','Estudios riesgo hídrico planes parciales','Drenaje pluvial infraestructura logística','Acueducto y alcantarillado','Ingeniería ambiental — permisos CAR Cundinamarca']}
          />}</Route>

          {/* ── SABANA NORTE ── */}
          <Route path="/sabana-norte">{() => <CityPage
            city="Sabana Norte" dept="Cundinamarca" pageKey="sabana-norte"
            intro="Tocancipá, Zipaquirá, Cajicá, Chía y Sopó concentran el mayor crecimiento industrial y residencial del norte de Bogotá. Tocancipá figura entre los municipios más desarrollados de Colombia según el DNP. Inversión activa de $30.000 millones en infraestructura vía DNP–ENTerritorio. Parques industriales, urbanizaciones y zonas comerciales en expansión constante."
            services={['Estudios riesgo hídrico planes parciales','Diseño hidrosanitario industrial y residencial','Sistemas contra incendios NSR-10','Gestión del riesgo Decreto 1807','Drenaje pluvial zonas expansión industrial','Formulación proyectos regalías SGR']}
          />}</Route>

          {/* ── BOYACÁ CORREDOR ── */}
          <Route path="/boyaca-corredor">{() => <CityPage
            city="Corredor Boyacá" dept="Duitama · Sogamoso · Paipa · Nobsa · Tibasosa"
            intro="Tibasosa, Paipa, Nobsa, Sogamoso y Duitama están entre los municipios más desarrollados de Colombia según el DNP. Corredor acerero y turístico con industria activa, urbanizaciones residenciales y proyectos de infraestructura hídrica permanentes. Cero competencia SEO en consultoría técnica especializada en toda la provincia del Tundama."
            services={['Diseño hidrosanitario industrial siderúrgico','Sistemas contra incendios plantas industriales','Estudios riesgo hídrico municipios','Acueducto y alcantarillado','Gestión del riesgo POT','Formulación proyectos regalías SGR Boyacá']}
          />}</Route>

          {/* ── HUILA ── */}
          <Route path="/huila-neiva">{() => <CityPage
            city="Huila" dept="Neiva · Pitalito · Campoalegre · Garzón"
            intro="Neiva figura entre los municipios más desarrollados de Colombia según el DNP. Capital del Huila con expansión urbana activa y proyectos de regalías petroleras e hidroeléctricas. El corredor Neiva–Pitalito–San Agustín concentra turismo, agroindustria y obras de infraestructura hídrica con financiación permanente."
            services={['Diseño acueducto y alcantarillado','Estudios inundación río Magdalena y afluentes','Formulación proyectos regalías MGA-Web','Diseño hidrosanitario y CI','Gestión del riesgo hídrico POT','Ingeniería ambiental — CORTOLIMA / CAM']}
          />}</Route>

          {/* ── BUCARAMANGA ── */}
          <Route path="/bucaramanga-area">{() => <CityPage
            city="Área Metropolitana de Bucaramanga" dept="Santander"
            intro="Floridablanca es el municipio mejor evaluado de Colombia con 71 puntos según el Índice de Ciudades Modernas del DNP 2025. El área metropolitana de Bucaramanga — Floridablanca, Girón, Piedecuesta — más Barrancabermeja como polo petroquímico concentran una demanda técnica enorme con pocos consultores especializados posicionados digitalmente."
            services={['Diseño hidrosanitario edificios y proyectos comerciales','Sistemas contra incendios NSR-10','Estudios riesgo hídrico planes parciales','Ingeniería ambiental — CDMB / CAS','Diseño acueducto y alcantarillado','Consultoría integral BIC multidisciplinaria']}
          />}</Route>

          {/* ── SANTANDER SUR ── */}
          <Route path="/santander-sur">{() => <CityPage
            city="Santander Sur — Provincia Comunera y Guanentá" dept="Santander"
            intro="Barbosa, Socorro, San Gil, Barichara y Charalá conforman una zona de turismo activo, agroindustria y proyectos viales con $500.000 millones proyectados en infraestructura. Cero firma consultora posicionada digitalmente en ingeniería técnica especializada."
            services={['Estudios riesgo hídrico y torrencialidad','Diseño acueducto y alcantarillado rural','Gestión del riesgo POT municipal','Ingeniería ambiental turismo sostenible','Formulación proyectos regalías SGR','Topografía y cartografía SIG']}
          />}</Route>

          {/* ── ANTIOQUIA SUROESTE ── */}
          <Route path="/antioquia-suroeste">{() => <CityPage
            city="Suroeste Antioqueño" dept="Andes · La Pintada · Jardín · Jericó · Valparaíso"
            intro="Corredor de las autopistas 4G Pacífico 1 y 2 activo. Zona cafetera y minera con proyectos de infraestructura vial, energética e hídrica. Conexión natural con el Eje Cafetero — a 2 horas de Manizales. Cero competencia en consultoría técnica digital para toda la provincia."
            services={['Estudios riesgo hídrico infraestructura vial 4G','Diseño acueducto y alcantarillado','Gestión del riesgo torrencialidad','Ingeniería ambiental minería','Formulación proyectos SGR','Diseño hidrosanitario']}
          />}</Route>

          {/* ── COSTA CARIBE ── */}
          <Route path="/costa-caribe">{() => <CityPage
            city="Costa Caribe" dept="Montería · Sincelejo · Valledupar · Riohacha"
            intro="Región con expansión urbana activa en capitales intermedias. Montería con POT en revisión y zonas de expansión activas. Valledupar con minería carbonífera y regalías. Riohacha con proyectos de agua potable en zonas de alta vulnerabilidad hídrica. BIC opera desde Manizales con desplazamientos según el alcance del proyecto."
            services={['Diseño acueducto y alcantarillado','Estudios riesgo hídrico POT','Formulación proyectos regalías MGA-Web','Diseño hidrosanitario edificaciones','Ingeniería ambiental CAR','Gestión del riesgo inundación']}
          />}</Route>

          {/* ── LLANOS Y ORINOQUÍA ── */}
          <Route path="/llanos-orinoquia">{() => <CityPage
            city="Llanos y Orinoquía" dept="Villavicencio · Yopal · Acacías · Granada · Aguazul"
            intro="Regalías petroleras y gasíferas generan inversión permanente en acueductos rurales, saneamiento básico y gestión del riesgo hídrico en llanura aluvial. Municipios como Tocancipá, Aguazul y Tauramena invierten constantemente en infraestructura. Alta demanda de consultores especializados en formulación MGA-Web para el SGR."
            services={['Formulación proyectos regalías MGA-Web','Diseño acueducto y alcantarillado rural','Estudios inundación llanura aluvial','Gestión del riesgo hídrico','Diseño hidrosanitario','Ingeniería ambiental Corporinoquia']}
          />}</Route>

          {/* ── LANDING PAGES REGIONALES — CAPITALES PRINCIPALES ── */}
          <Route path="/ingenieria-bogota" component={Bogota} />
          <Route path="/ingenieria-medellin" component={Medellin} />
          <Route path="/ingenieria-cali" component={Cali} />
          <Route path="/ingenieria-manizales" component={ManizalesRegional} />
          <Route path="/ingenieria-bucaramanga" component={Bucaramanga} />
          <Route path="/ingenieria-barranquilla" component={Barranquilla} />
          <Route path="/ingenieria-eje-cafetero" component={EjeCafetero} />
          <Route path="/ingenieria-antioquia" component={Antioquia} />

          {/* ── LANDING PAGES DE SERVICIOS INDIVIDUALES ── */}
          <Route path="/servicios/estudios-hidrologicos" component={ServicioEstudiosHidrologicos} />
          <Route path="/servicios/modelacion-hec-ras" component={ServicioModelacionHecRas} />
          <Route path="/servicios/acueducto-alcantarillado" component={ServicioAcueductoAlcantarillado} />
          <Route path="/servicios/redes-hidrosanitarias" component={ServicioRedesHidrosanitarias} />
          <Route path="/servicios/sistemas-contra-incendio" component={ServicioSistemasContraIncendio} />
          <Route path="/servicios/interventoria" component={ServicioInterventoria} />
          <Route path="/servicios/regalias-mga" component={ServicioRegaliasMga} />
          <Route path="/servicios/geotecnia" component={ServicioGeotecnia} />
          <Route path="/servicios/ambiental" component={ServicioAmbiental} />

          <Route path="/blog/:slug" component={BlogDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingQuoteButton />
    </>
  )
}
