import { Route, Switch, Redirect } from 'wouter'
import { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'wouter'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FloatingQuoteButton from './components/FloatingQuoteButton'
import EstudiosHidraulicosPereira from './pages/EstudiosHidraulicosPereira'
import EstudiosHidraulicosArmenia from './pages/EstudiosHidraulicosArmenia'
import EstudiosHidraulicosIbague from './pages/EstudiosHidraulicosIbague'
import EstudiosHidraulicosLaDorada from './pages/EstudiosHidraulicosLaDorada'
import EstudiosHidraulicosCaliNorteValle from './pages/EstudiosHidraulicosCaliNorteValle'
import EstudiosHidraulicosManizales from './pages/EstudiosHidraulicosManizales'
import EstudiosHidraulicosVillamariaChinchina from './pages/EstudiosHidraulicosVillamariaChinchina'
import EstudiosHidraulicosDosquebradasSantaRosa from './pages/EstudiosHidraulicosDosquebradasSantaRosa'
import EstudiosHidraulicosRiosucioSupiaAnserma from './pages/EstudiosHidraulicosRiosucioSupiaAnserma'
import EstudiosRiesgoHidricoMunicipiosColombia from './pages/EstudiosRiesgoHidricoMunicipiosColombia'
import EstudioDecreto1807LicenciaConstruccion from './pages/EstudioDecreto1807LicenciaConstruccion'
import ConcesionAguasCortolima from './pages/ConcesionAguasCortolima'
import ConcesionAguasCvc from './pages/ConcesionAguasCvc'
import ConcesionAguasCorpocaldas from './pages/ConcesionAguasCorpocaldas'
import ConcesionAguasCarder from './pages/ConcesionAguasCarder'
import PermisoVertimientosCorpocaldas from './pages/PermisoVertimientosCorpocaldas'
import PermisoVertimientosCarder from './pages/PermisoVertimientosCarder'
import PrecioEstudiosHidraulicosColombia from './pages/PrecioEstudiosHidraulicosColombia'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Services = lazy(() => import('./pages/Services'))
const Projects = lazy(() => import('./pages/Projects'))
const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
const Credentials = lazy(() => import('./pages/Credentials'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const CityPage = lazy(() => import('./pages/CityPage'))
const CoverageNational = lazy(() => import('./pages/CoverageNational'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const Bogota = lazy(() => import('./pages/Bogota'))
const Medellin = lazy(() => import('./pages/Medellin'))
const Cali = lazy(() => import('./pages/Cali'))
const ManizalesRegional = lazy(() => import('./pages/Manizales'))
const Bucaramanga = lazy(() => import('./pages/Bucaramanga'))
const Barranquilla = lazy(() => import('./pages/Barranquilla'))
const EjeCafetero = lazy(() => import('./pages/EjeCafetero'))
const Antioquia = lazy(() => import('./pages/Antioquia'))
const ServicioEstudiosHidrologicos = lazy(() => import('./pages/ServicioEstudiosHidrologicos'))
const ServicioTopografia = lazy(() => import('./pages/ServicioTopografia'))
const ServicioModelacionHecRas = lazy(() => import('./pages/ServicioModelacionHecRas'))
const ServicioRedesHidrosanitarias = lazy(() => import('./pages/ServicioRedesHidrosanitarias'))
const ServicioInterventoria = lazy(() => import('./pages/ServicioInterventoria'))
const ServicioRegaliasMga = lazy(() => import('./pages/ServicioRegaliasMga'))
const ConsultoriaMunicipiosSGR = lazy(() => import('./pages/ConsultoriaMunicipiosSGR'))
const ServicioGeotecnia = lazy(() => import('./pages/ServicioGeotecnia'))
const ServicioAmbiental = lazy(() => import('./pages/ServicioAmbiental'))
const IngenieriaHidraulicaColombia = lazy(() => import('./pages/IngenieriaHidraulicaColombia'))
const GestionRiesgoHidrico = lazy(() => import('./pages/GestionRiesgoHidrico'))
const ServicioPermisoVertimiento = lazy(() => import('./pages/ServicioPermisoVertimiento'))
const ServicioRiesgoHidrico1807 = lazy(() => import('./pages/ServicioRiesgoHidrico1807'))
const ServicioConcesionAguas = lazy(() => import('./pages/ServicioConcesionAguas'))
const ServicioDisenoAcueductos = lazy(() => import('./pages/ServicioDisenoAcueductos'))
const ServicioContraIncendiosNSR10 = lazy(() => import('./pages/ServicioContraIncendiosNSR10'))
const RegionalManizales = lazy(() => import('./pages/regional/RegionalManizales'))
const RegionalPereira = lazy(() => import('./pages/regional/RegionalPereira'))
const RegionalArmenia = lazy(() => import('./pages/regional/RegionalArmenia'))
const RegionalBarranquilla = lazy(() => import('./pages/regional/RegionalBarranquilla'))
const RegionalEjeCafetero = lazy(() => import('./pages/regional/RegionalEjeCafetero'))
const RegionalCali = lazy(() => import('./pages/regional/RegionalCali'))
const RegionalMedellin = lazy(() => import('./pages/regional/RegionalMedellin'))
const EstudioInundabilidadManizales = lazy(() => import('./pages/servicios/EstudioInundabilidadManizales'))
const EstudioSuelosManizales = lazy(() => import('./pages/servicios/EstudioSuelosManizales'))
const LicenciaConstruccionManizales = lazy(() => import('./pages/servicios/LicenciaConstruccionManizales'))
const EstudioSuelosPereira = lazy(() => import('./pages/servicios/EstudioSuelosPereira'))
const DisenoHidraulicoManizales = lazy(() => import('./pages/servicios/DisenoHidraulicoManizales'))
const ModelacionHidraulicaManizales = lazy(() => import('./pages/servicios/ModelacionHidraulicaManizales'))
const EstudioHidrologicoManizales = lazy(() => import('./pages/servicios/EstudioHidrologicoManizales'))
const InterventoriaHidraulicaManizales = lazy(() => import('./pages/servicios/InterventoriaHidraulicaManizales'))
const DisenoHidraulicoPereira = lazy(() => import('./pages/servicios/DisenoHidraulicoPereira'))
const EstudioInundabilidadPereira = lazy(() => import('./pages/servicios/EstudioInundabilidadPereira'))
const LicenciaConstruccionPereira = lazy(() => import('./pages/servicios/LicenciaConstruccionPereira'))
const EstudioSuelosEjeCafetero = lazy(() => import('./pages/servicios/EstudioSuelosEjeCafetero'))
const ConsultoriaIngenieriaCivilManizales = lazy(() => import('./pages/servicios/ConsultoriaIngenieriaCivilManizales'))
const GestionRiesgoHidricoManizales = lazy(() => import('./pages/servicios/GestionRiesgoHidricoManizales'))
const DisenoHidraulicoEjeCafetero = lazy(() => import('./pages/servicios/DisenoHidraulicoEjeCafetero'))
const BombeoFincasCafe = lazy(() => import('./pages/servicios/BombeoFincasCafe'))
const AcueductoRuralCaldas = lazy(() => import('./pages/servicios/AcueductoRuralCaldas'))
const ConcesionAguasManizales = lazy(() => import('./pages/servicios/ConcesionAguasManizales'))
const PermisoVertimientosManizales = lazy(() => import('./pages/servicios/PermisoVertimientosManizales'))
const TopografiaManizales = lazy(() => import('./pages/servicios/TopografiaManizales'))
const CiudadBogota = lazy(() => import('./pages/servicios/CiudadBogota'))
const CiudadMedellin = lazy(() => import('./pages/servicios/CiudadMedellin'))
const CiudadCali = lazy(() => import('./pages/servicios/CiudadCali'))
const CiudadIbague = lazy(() => import('./pages/servicios/CiudadIbague'))
const CiudadBucaramanga = lazy(() => import('./pages/servicios/CiudadBucaramanga'))
const LicenciaUrbanismo = lazy(() => import('./pages/LicenciaUrbanismo'))
const ObrasHidraulicasColombia = lazy(() => import('./pages/ObrasHidraulicasColombia'))
const UrbanizacionColombia = lazy(() => import('./pages/UrbanizacionColombia'))
const BocatomasColombia = lazy(() => import('./pages/BocatomasColombia'))
const DisenoCanalesRiego = lazy(() => import('./pages/DisenoCanalesRiego'))
const EncauzamientoRios = lazy(() => import('./pages/EncauzamientoRios'))
const PlanParcialColombia = lazy(() => import('./pages/PlanParcialColombia'))
const IngenieriaHidraulicaManizales = lazy(() => import('./pages/IngenieriaHidraulicaManizales'))
const IngenieroHidraulicoManizales = lazy(() => import('./pages/IngenieroHidraulicoManizales'))
const LandingManizales = lazy(() => import('./pages/LandingManizales'))
const EstudiosTorrencialidad = lazy(() => import('./pages/EstudiosTorrencialidad'))
const ConstruirCercaRioQuebrada = lazy(() => import('./pages/ConstruirCercaRioQuebrada'))
const IngenieriaProyectosUrbanisticos = lazy(() => import('./pages/IngenieriaProyectosUrbanisticos'))
const ObrasCivilesHidraulicas = lazy(() => import('./pages/ObrasCivilesHidraulicas'))
const EstudiosHidrologicosVias = lazy(() => import('./pages/EstudiosHidrologicosVias'))
const MemoriasHidrosanitarias = lazy(() => import('./pages/MemoriasHidrosanitarias'))
const EstudiosRequeridosCAR = lazy(() => import('./pages/EstudiosRequeridosCAR'))
const TengoUnLote = lazy(() => import('./pages/TengoUnLote'))
const GestionRiesgoTaludes = lazy(() => import('./pages/GestionRiesgoTaludes'))
const IngenieriaManizalesNacional = lazy(() => import('./pages/IngenieriaManizalesNacional'))
const ModelacionHidraulicaColombia = lazy(() => import('./pages/ModelacionHidraulicaColombia'))
const ModelacionHidrologicaColombia = lazy(() => import('./pages/ModelacionHidrologicaColombia'))
const DisenoPTARColombia = lazy(() => import('./pages/DisenoPTARColombia'))
const DisenoPTARManizales = lazy(() => import('./pages/DisenoPTARManizales'))
const DisenoPTARMunicipalColombia = lazy(() => import('./pages/DisenoPTARMunicipalColombia'))
const DisenoPTARIndustrialColombia = lazy(() => import('./pages/DisenoPTARIndustrialColombia'))
const EmpresaIndustriaColombia = lazy(() => import('./pages/EmpresaIndustriaColombia'))
const BocatomasEjeCafetero = lazy(() => import('./pages/BocatomasEjeCafetero'))
const ConcesionAguasSuperficialesColombia = lazy(() => import('./pages/ConcesionAguasSuperficialesColombia'))
const PermisoVertimientosColombia = lazy(() => import('./pages/PermisoVertimientosColombia'))
const ConcesionAguasColombia = lazy(() => import('./pages/ConcesionAguasColombia'))
const DisenoPTAPColombia = lazy(() => import('./pages/DisenoPTAPColombia'))
const DisenoAlcantarilladoColombia = lazy(() => import('./pages/DisenoAlcantarilladoColombia'))
const PomcaColombia = lazy(() => import('./pages/PomcaColombia'))
const PlanesMaestrosAcueductoColombia = lazy(() => import('./pages/PlanesMaestrosAcueductoColombia'))
const CalculadoraHidraulica = lazy(() => import('./pages/CalculadoraHidraulica'))
const ServicioModelacionHidraulicaPutumayo = lazy(() => import('./pages/ServicioModelacionHidraulicaPutumayo'))
const ServicioAcueductoQuindio = lazy(() => import('./pages/ServicioAcueductoQuindio'))
const ServicioEstudioSuelosPereira = lazy(() => import('./pages/ServicioEstudioSuelosPereira'))
const ServicioPTAPColombia = lazy(() => import('./pages/ServicioPTAPColombia'))
const ServicioAguasLluviasManizales = lazy(() => import('./pages/ServicioAguasLluviasManizales'))
const HydraulicEngineerEnglish = lazy(() => import('./pages/HydraulicEngineerEnglish'))
const EstudioBasico = lazy(() => import('./pages/servicios/EstudioBasico'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const TramitePermisoVertimientoColombia = lazy(() => import('./pages/TramitePermisoVertimientoColombia'))
const PermisoOcupacionCauceColombia = lazy(() => import('./pages/PermisoOcupacionCauceColombia'))
const ConcesionAguasSuperficialesTramite = lazy(() => import('./pages/ConcesionAguasSuperficialesTramite'))
const DisenoAcueductoEntregaESP = lazy(() => import('./pages/DisenoAcueductoEntregaESP'))
const EstudioDetalladoInundacionDecreto1807 = lazy(() => import('./pages/EstudioDetalladoInundacionDecreto1807'))
const DisenoPTARTramitePermisoVertimiento = lazy(() => import('./pages/DisenoPTARTramitePermisoVertimiento'))
const RedesHidrosanitariasLicenciaConstruccion = lazy(() => import('./pages/RedesHidrosanitariasLicenciaConstruccion'))
const DisenoHidrosanitarioCIEdificio = lazy(() => import('./pages/DisenoHidrosanitarioCIEdificio'))
const LandingViterboCaldas = lazy(() => import('./pages/LandingViterboCaldas'))

function ScrollToTop() {
  const [location] = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location])
  return null
}

const BASE_URL = 'https://ingenieriabernal.co'

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
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
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
          <Route path="/manizales" component={LandingManizales} />

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
          <Route path="/ingenieria-eje-cafetero" component={RegionalEjeCafetero} />
          <Route path="/ingenieria-antioquia" component={Antioquia} />

          {/* ── PÁGINAS DE SERVICIO NACIONALES ── */}
          <Route path="/ingenieria-hidraulica-colombia" component={IngenieriaHidraulicaColombia} />
          <Route path="/gestion-riesgo-hidrico" component={GestionRiesgoHidrico} />
          <Route path="/licencia-de-urbanismo" component={LicenciaUrbanismo} />
          <Route path="/obras-hidraulicas-colombia" component={ObrasHidraulicasColombia} />
          <Route path="/urbanizacion-colombia" component={UrbanizacionColombia} />
          <Route path="/bocatomas-colombia" component={BocatomasColombia} />
          <Route path="/diseno-canal-riego-colombia" component={DisenoCanalesRiego} />
          <Route path="/encauzamiento-rios-colombia" component={EncauzamientoRios} />
          <Route path="/plan-parcial-colombia" component={PlanParcialColombia} />
          <Route path="/ingenieria-hidraulica-manizales" component={IngenieriaHidraulicaManizales} />
          <Route path="/estudios-torrencialidad-colombia" component={EstudiosTorrencialidad} />
          <Route path="/construir-cerca-rio-quebrada-colombia" component={ConstruirCercaRioQuebrada} />
          <Route path="/ingenieria-proyectos-urbanisticos-colombia" component={IngenieriaProyectosUrbanisticos} />
          <Route path="/obras-civiles-hidraulicas-colombia" component={ObrasCivilesHidraulicas} />
          <Route path="/estudios-hidrologicos-vias-colombia" component={EstudiosHidrologicosVias} />
          <Route path="/memorias-hidrosanitarias-colombia" component={MemoriasHidrosanitarias} />
          <Route path="/me-pidieron-estudios-en-la-car" component={EstudiosRequeridosCAR} />
          <Route path="/tengo-un-lote-colombia" component={TengoUnLote} />
          <Route path="/gestion-riesgo-taludes-colombia" component={GestionRiesgoTaludes} />
          <Route path="/ingenieria-hidraulica-colombia-desde-manizales" component={IngenieriaManizalesNacional} />
          <Route path="/modelacion-hidraulica-colombia" component={ModelacionHidraulicaColombia} />
          <Route path="/modelacion-hidrologica-colombia" component={ModelacionHidrologicaColombia} />
          <Route path="/diseno-ptar-colombia" component={DisenoPTARColombia} />
          <Route path="/diseno-ptar-manizales" component={DisenoPTARManizales} />
          <Route path="/diseno-ptar-municipal-colombia" component={DisenoPTARMunicipalColombia} />
          <Route path="/diseno-ptar-industrial-colombia" component={DisenoPTARIndustrialColombia} />
          <Route path="/empresa-industria-colombia" component={EmpresaIndustriaColombia} />
          <Route path="/bocatomas-eje-cafetero" component={BocatomasEjeCafetero} />
          <Route path="/concesion-aguas-superficiales-colombia" component={ConcesionAguasSuperficialesColombia} />
          <Route path="/permiso-vertimientos-colombia" component={PermisoVertimientosColombia} />
          <Route path="/concesion-aguas-colombia" component={ConcesionAguasColombia} />
          <Route path="/diseno-ptap-colombia" component={DisenoPTAPColombia} />
          <Route path="/diseno-alcantarillado-colombia" component={DisenoAlcantarilladoColombia} />
          <Route path="/pomca-colombia" component={PomcaColombia} />
          <Route path="/planes-maestros-acueducto-alcantarillado-colombia" component={PlanesMaestrosAcueductoColombia} />

          {/* ── LANDING PAGES DE SERVICIOS INDIVIDUALES ── */}
          <Route path="/servicios/estudio-inundabilidad-manizales" component={EstudioInundabilidadManizales} />
          <Route path="/servicios/estudios-hidrologicos" component={ServicioEstudiosHidrologicos} />
          <Route path="/servicios/topografia" component={ServicioTopografia} />
          <Route path="/servicios/modelacion-hec-ras" component={ServicioModelacionHecRas} />
          <Route path="/servicios/redes-hidrosanitarias" component={ServicioRedesHidrosanitarias} />
          <Route path="/servicios/interventoria" component={ServicioInterventoria} />
          <Route path="/servicios/regalias-mga" component={ServicioRegaliasMga} />
          <Route path="/consultoria-municipios-sgr" component={ConsultoriaMunicipiosSGR} />
          <Route path="/servicios/geotecnia" component={ServicioGeotecnia} />
          <Route path="/servicios/ambiental" component={ServicioAmbiental} />
          <Route path="/servicios/diseno-acueductos" component={ServicioDisenoAcueductos} />
          <Route path="/servicios/contra-incendios-nsr10" component={ServicioContraIncendiosNSR10} />

          {/* ── PÁGINAS GEOGRÁFICAS TRANSACCIONALES — FONDO DE EMBUDO ── */}
          <Route path="/servicios/modelacion-hidraulica-putumayo" component={ServicioModelacionHidraulicaPutumayo} />
          <Route path="/servicios/diseno-acueducto-quindio" component={ServicioAcueductoQuindio} />
          <Route path="/servicios/estudio-suelos-pereira" component={ServicioEstudioSuelosPereira} />
          <Route path="/servicios/diseno-ptap-colombia" component={ServicioPTAPColombia} />
          <Route path="/servicios/aguas-lluvias-manizales" component={ServicioAguasLluviasManizales} />

          {/* ── LANDING PAGES DE CIUDAD — /servicios/{ciudad} ── */}
          <Route path="/servicios/bogota" component={CiudadBogota} />
          <Route path="/servicios/medellin" component={CiudadMedellin} />
          <Route path="/servicios/cali" component={CiudadCali} />
          <Route path="/servicios/ibague" component={CiudadIbague} />
          <Route path="/servicios/bucaramanga" component={CiudadBucaramanga} />

          {/* ── LANDING PAGES REGIONALES SEO ── */}
          <Route path="/regional/manizales" component={RegionalManizales} />
          <Route path="/regional/pereira" component={RegionalPereira} />
          <Route path="/regional/armenia" component={RegionalArmenia} />
          <Route path="/regional/barranquilla" component={RegionalBarranquilla} />
          <Route path="/regional/eje-cafetero" component={RegionalEjeCafetero} />
          <Route path="/regional/cali" component={RegionalCali} />
          <Route path="/regional/medellin" component={RegionalMedellin} />

          {/* ── LANDING PAGES LOCALES — MANIZALES ── */}
          <Route path="/estudio-de-inundabilidad-manizales" component={EstudioInundabilidadManizales} />
          <Route path="/estudio-de-suelos-manizales" component={EstudioSuelosManizales} />
          <Route path="/licencia-de-construccion-manizales" component={LicenciaConstruccionManizales} />
          <Route path="/estudio-de-suelos-pereira" component={EstudioSuelosPereira} />
          <Route path="/diseno-hidraulico-manizales" component={DisenoHidraulicoManizales} />
          <Route path="/modelacion-hidraulica-manizales" component={ModelacionHidraulicaManizales} />
          <Route path="/estudio-hidrologico-manizales" component={EstudioHidrologicoManizales} />
          <Route path="/interventoria-hidraulica-manizales" component={InterventoriaHidraulicaManizales} />
          <Route path="/diseno-hidraulico-pereira" component={DisenoHidraulicoPereira} />
          <Route path="/estudio-de-inundabilidad-pereira" component={EstudioInundabilidadPereira} />
          <Route path="/licencia-de-construccion-pereira" component={LicenciaConstruccionPereira} />
          <Route path="/estudio-de-suelos-eje-cafetero" component={EstudioSuelosEjeCafetero} />
          <Route path="/consultoria-ingenieria-civil-manizales" component={ConsultoriaIngenieriaCivilManizales} />
          <Route path="/gestion-riesgo-hidrico-manizales" component={GestionRiesgoHidricoManizales} />
          <Route path="/diseno-hidraulico-eje-cafetero" component={DisenoHidraulicoEjeCafetero} />
          <Route path="/acueducto-rural-caldas" component={AcueductoRuralCaldas} />
          <Route path="/bombeo-fincas-cafe" component={BombeoFincasCafe} />
          <Route path="/concesion-aguas-superficiales-manizales" component={ConcesionAguasManizales} />
          <Route path="/permiso-vertimientos-manizales" component={PermisoVertimientosManizales} />
          <Route path="/topografia-manizales" component={TopografiaManizales} />
          <Route path="/ingeniero-hidraulico-manizales" component={IngenieroHidraulicoManizales} />

          <Route path="/calculadora-estudios-hidraulicos" component={CalculadoraHidraulica} />
          <Route path="/hydraulic-engineering-consulting" component={HydraulicEngineerEnglish} />

          {/* ── PÁGINAS GEOGRÁFICAS DE SERVICIO — mayo 2026 ── */}
          <Route path="/modelacion-hidraulica-putumayo" component={ServicioModelacionHidraulicaPutumayo} />
          <Route path="/acueducto-quindio" component={ServicioAcueductoQuindio} />
          <Route path="/geotecnia-pereira" component={ServicioEstudioSuelosPereira} />
          <Route path="/ptap-municipios-colombia" component={ServicioPTAPColombia} />
          <Route path="/aguas-lluvias-manizales" component={ServicioAguasLluviasManizales} />

          <Route path="/servicios/estudio-basico" component={EstudioBasico} />
          <Route path="/proyectos/:id" component={ProjectDetail} />

          {/* ── PÁGINAS TRAMITE-INTENT SEO — junio 2026 ── */}
          <Route path="/permiso-ocupacion-cauce-colombia" component={PermisoOcupacionCauceColombia} />
          <Route path="/tramitar-permiso-vertimiento-colombia" component={TramitePermisoVertimientoColombia} />
          <Route path="/concesion-aguas-superficiales-tramite" component={ConcesionAguasSuperficialesTramite} />
          <Route path="/diseno-acueducto-entrega-esp" component={DisenoAcueductoEntregaESP} />
          <Route path="/estudio-detallado-inundacion-decreto-1807" component={EstudioDetalladoInundacionDecreto1807} />
          <Route path="/diseno-ptar-tramite-permiso-vertimiento" component={DisenoPTARTramitePermisoVertimiento} />
          <Route path="/redes-hidrosanitarias-licencia-construccion" component={RedesHidrosanitariasLicenciaConstruccion} />
          <Route path="/diseno-hidrosanitario-sistema-contra-incendio-edificio-colombia" component={DisenoHidrosanitarioCIEdificio} />

          {/* ── MUNICIPIOS CALDAS — ESCALADO JUNIO 2026 ── */}
          <Route path="/ingenieria-hidraulica-viterbo-caldas" component={LandingViterboCaldas} />

          <Route path="/ingenieria-hidraulica-chinchina">{() => <CityPage
            city="Chinchina" dept="Caldas" pageKey="chinchina"
            intro="Municipio cafetero a 25 km de Manizales con alta actividad agroindustrial y desarrollo residencial activo. Zona de demanda real verificada: propietarios y promotores en Chinchina consultan a BIC en junio 2026. Alta necesidad de estudios de riesgo hidrico para predios en borde de quebrada y disenos hidrosanitarios para bodegas y procesadoras de cafe."
            services={['Estudios riesgo hidrico Decreto 1807 quebradas cafeteras','Diseno hidrosanitario para bodegas y procesadoras','Sistemas contra incendio NSR-10 Titulo K','Diseno acueducto y alcantarillado parcelaciones','Permiso de vertimiento CORPOCALDAS','Gestion del riesgo predios con cauce']}
          />}</Route>

          <Route path="/ingenieria-hidraulica-neira-caldas">{() => <CityPage
            city="Neira" dept="Caldas" pageKey="neira"
            intro="Municipio cafetero en el corredor Manizales-Salamina con desarrollo parcelario activo. Alta demanda de disenos de acueducto rural, PTAP para parcelaciones campestres y estudios de riesgo hidrico para predios con quebradas del piedemonte caldense."
            services={['Diseno acueducto y alcantarillado rural RAS 2017','PTAP parcelaciones campestres','Estudios riesgo hidrico Decreto 1807','Ronda hidrica y delimitacion cauces','Diseno hidrosanitario edificaciones rurales','Formulacion proyectos SGR agua y saneamiento']}
          />}</Route>

          <Route path="/ingenieria-hidraulica-villamaria-caldas">{() => <CityPage
            city="Villamaria" dept="Caldas" pageKey="villamaria"
            intro="Municipio contiguo a Manizales con el mayor crecimiento de licencias de construccion del departamento. El corredor Manizales-Villamaria concentra urbanizaciones cerradas, condominios campestres y conjuntos VIS activos. Todos los proyectos exigen estudio de riesgo hidrico Decreto 1807 y diseno hidrosanitario NSR-10."
            services={['Estudios riesgo hidrico para urbanizaciones y planes parciales','Diseno hidrosanitario y CI edificios multifamiliar','Acueducto y alcantarillado Decreto 1807','Ronda hidrica para predios con cauces','Diseno PTAP condominios campestres','Sistemas CI NSR-10 conjuntos residenciales']}
          />}</Route>

          <Route path="/ingenieria-hidraulica-salamina-caldas">{() => <CityPage
            city="Salamina" dept="Caldas" pageKey="salamina"
            intro="Patrimonio arquitectonico de Colombia con turismo activo y nuevas inversiones hoteleras. El corredor Salamina-La Merced y el turismo rural generan demanda de disenos hidrosanitarios para hoteles, PTAP para condominios y estudios de riesgo hidrico para predios en montana caldense norte."
            services={['Diseno hidrosanitario y CI para hoteles y posadas','PTAP y PTAR para turismo rural','Estudios riesgo hidrico zonas de montana','Acueducto y alcantarillado veredal','Ronda hidrica y permisos CORPOCALDAS','Formulacion proyectos SGR']}
          />}</Route>

          <Route path="/ingenieria-hidraulica-aguadas-caldas">{() => <CityPage
            city="Aguadas" dept="Caldas" pageKey="aguadas"
            intro="Municipio del norte de Caldas con vocacion cafetera y turistica. Aguadas hace parte del Paisaje Cultural Cafetero UNESCO con actividad activa de parcelaciones en montana y fincas en desarrollo agropecuario y ecoturistico. Alta necesidad de disenos de acueducto rural y estudios de riesgo hidrico para cuencas de alta pendiente."
            services={['Diseno acueducto y captaciones ladera RAS 2017','PTAP fincas y parcelaciones cafeteras','Estudios riesgo hidrico cuencas alta pendiente','Ronda hidrica delimitacion quebradas','PTAR turismo rural y agroturismo','Formulacion proyectos SGR norte Caldas']}
          />}</Route>

          {/* ── PÁGINAS TRÁMITE AMBIENTAL — junio 2026 ── */}
          <Route path="/servicios/permiso-de-vertimiento" component={ServicioPermisoVertimiento} />
          <Route path="/servicios/estudio-riesgo-hidrico-decreto-1807" component={ServicioRiesgoHidrico1807} />
          <Route path="/servicios/concesion-de-aguas" component={ServicioConcesionAguas} />

          <Route path="/blog/:slug" component={BlogDetail} />
          <Route path="/estudios-hidraulicos-pereira" component={EstudiosHidraulicosPereira} />
          <Route path="/estudios-hidraulicos-armenia" component={EstudiosHidraulicosArmenia} />
          <Route path="/estudios-hidraulicos-ibague" component={EstudiosHidraulicosIbague} />
          <Route path="/estudios-hidraulicos-la-dorada" component={EstudiosHidraulicosLaDorada} />
          <Route path="/estudios-hidraulicos-cali-norte-valle" component={EstudiosHidraulicosCaliNorteValle} />
          <Route path="/estudios-hidraulicos-manizales" component={EstudiosHidraulicosManizales} />
          <Route path="/estudios-hidraulicos-villamaria-chinchina" component={EstudiosHidraulicosVillamariaChinchina} />
          <Route path="/estudios-hidraulicos-dosquebradas-santa-rosa" component={EstudiosHidraulicosDosquebradasSantaRosa} />
          <Route path="/estudios-hidraulicos-riosucio-supia-anserma" component={EstudiosHidraulicosRiosucioSupiaAnserma} />
          <Route path="/estudios-riesgo-hidrico-municipios-colombia" component={EstudiosRiesgoHidricoMunicipiosColombia} />
          <Route path="/estudio-decreto-1807-licencia-construccion" component={EstudioDecreto1807LicenciaConstruccion} />
          <Route path="/concesion-aguas-cortolima" component={ConcesionAguasCortolima} />
          <Route path="/concesion-aguas-cvc" component={ConcesionAguasCvc} />
          <Route path="/concesion-aguas-corpocaldas" component={ConcesionAguasCorpocaldas} />
          <Route path="/concesion-aguas-carder" component={ConcesionAguasCarder} />
          <Route path="/permiso-vertimientos-corpocaldas" component={PermisoVertimientosCorpocaldas} />
          <Route path="/permiso-vertimientos-carder" component={PermisoVertimientosCarder} />
          <Route path="/precio-estudios-hidraulicos-colombia" component={PrecioEstudiosHidraulicosColombia} />
          <Route component={NotFound} />
        </Switch>
        </Suspense>
      </main>
      <Footer />
      <FloatingQuoteButton />
    </>
  )
}
