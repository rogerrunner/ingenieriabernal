import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');
const indexPath = join(distDir, 'index.html');

if (!existsSync(indexPath)) {
  console.error('ERROR: dist/index.html no encontrado. Ejecuta vite build primero.');
  process.exit(1);
}

const baseHtml = readFileSync(indexPath, 'utf-8');

const routes = [
  // Páginas principales
  { path: 'servicios', title: 'Servicios de Ingeniería Hidráulica — BIC Bernal Ingeniería | Manizales', desc: 'Hidrosanitario, CI NSR-10, HEC-RAS 2D, acueducto, alcantarillado, gestión del riesgo, regalías MGA-Web. BIC — Manizales, Eje Cafetero, Colombia.', url: 'https://www.ingenieriabernal.co/servicios' },
  { path: 'proyectos', title: 'Proyectos Ejecutados — BIC Bernal Ingeniería | Caldas y Colombia', desc: 'Portafolio verificado: Palacio de Justicia La Dorada, Makarí Mall Dosquebradas, EPANET Manizales, torrencialidad Eje Cafetero. BIC — más de 10 años de experiencia.', url: 'https://www.ingenieriabernal.co/proyectos' },
  { path: 'equipo', title: 'Equipo Consultor — BIC Bernal Ingeniería Consultores | Manizales', desc: 'Rogerio Bernal Ríos, Ing. Civil Esp. Hidráulica UNAL, COPNIA 17202-313228. Equipo multidisciplinario: hidráulica, geotecnia, arquitectura, ambiental.', url: 'https://www.ingenieriabernal.co/equipo' },
  { path: 'blog', title: 'Blog Ingeniería Hidráulica Colombia — Artículos Técnicos BIC', desc: 'Artículos técnicos: HEC-RAS 2D, NSR-10 sistemas CI, costos obras 2026, regalías MGA-Web, normativa hídrica colombiana. Por Rogerio Bernal Ríos.', url: 'https://www.ingenieriabernal.co/blog' },
  { path: 'contacto', title: 'Contacto — BIC Bernal Ingeniería Consultores | Manizales, Colombia', desc: 'Contáctenos para proyectos de ingeniería hidráulica, hidrosanitaria y gestión del riesgo. Manizales, Eje Cafetero, Colombia.', url: 'https://www.ingenieriabernal.co/contacto' },

  // Landing pages ciudades / regiones
  { path: 'ingenieria-hidraulica-manizales', title: 'Ingeniería Hidráulica Manizales — BIC Bernal Ingeniería Consultores', desc: 'Consultoría hidráulica, hidrosanitaria y gestión del riesgo en Manizales y Caldas. EPANET, HEC-RAS 2D, NSR-10. Más de 10 años de experiencia local.', url: 'https://www.ingenieriabernal.co/ingenieria-hidraulica-manizales' },
  { path: 'ingenieria-hidraulica-eje-cafetero', title: 'Ingeniería Hidráulica Eje Cafetero — BIC Bernal Ingeniería', desc: 'Proyectos hidráulicos en Manizales, Pereira, Armenia y toda la región cafetera. Modelación HEC-RAS, torrencialidad, acueductos rurales.', url: 'https://www.ingenieriabernal.co/ingenieria-hidraulica-eje-cafetero' },
  { path: 'ingenieria-hidraulica-bogota', title: 'Ingeniería Hidráulica Bogotá — BIC Bernal Ingeniería Consultores', desc: 'Consultoría hidráulica y estructural para proyectos en Bogotá D.C. Diseño hidrosanitario NSR-10, memorias de cálculo, revisión de proyectos.', url: 'https://www.ingenieriabernal.co/ingenieria-hidraulica-bogota' },
  { path: 'ingenieria-hidraulica-medellin', title: 'Ingeniería Hidráulica Medellín — BIC Bernal Ingeniería Consultores', desc: 'Servicios de ingeniería hidráulica e hidrosanitaria en Medellín y Área Metropolitana. Antioquia. Diseño, modelación y consultoría técnica.', url: 'https://www.ingenieriabernal.co/ingenieria-hidraulica-medellin' },
  { path: 'ingenieria-hidraulica-pereira', title: 'Ingeniería Hidráulica Pereira — BIC Bernal Ingeniería Consultores', desc: 'Consultoría hidráulica en Pereira y Risaralda. Modelación HEC-RAS, estudios hidrológicos, diseño hidrosanitario NSR-10.', url: 'https://www.ingenieriabernal.co/ingenieria-hidraulica-pereira' },
  { path: 'ingenieria-hidraulica-armenia', title: 'Ingeniería Hidráulica Armenia — BIC Bernal Ingeniería Consultores', desc: 'Proyectos de ingeniería hidráulica en Armenia y Quindío. Estudios de inundación, modelación hidráulica y diseño hidrosanitario.', url: 'https://www.ingenieriabernal.co/ingenieria-hidraulica-armenia' },
  { path: 'ingenieria-hidraulica-cali', title: 'Ingeniería Hidráulica Cali — BIC Bernal Ingeniería Consultores', desc: 'Consultoría en ingeniería hidráulica para proyectos en Cali y Valle del Cauca. Modelación hidrodinámica, gestión del riesgo hídrico.', url: 'https://www.ingenieriabernal.co/ingenieria-hidraulica-cali' },
  { path: 'ingenieria-hidraulica-colombia', title: 'Ingeniería Hidráulica Colombia — BIC Bernal Ingeniería Consultores', desc: 'Consultoría nacional en ingeniería hidráulica: acueductos, alcantarillados, inundaciones, torrencialidad y regalías MGA-Web. BIC — Colombia.', url: 'https://www.ingenieriabernal.co/ingenieria-hidraulica-colombia' },

  // Servicios específicos
  { path: 'hec-ras-modelacion-hidraulica', title: 'Modelación HEC-RAS 2D Colombia — BIC Bernal Ingeniería Consultores', desc: 'Modelación hidráulica con HEC-RAS 2D para estudios de inundación, torrencialidad y planes de ordenamiento. Expertos certificados en Colombia.', url: 'https://www.ingenieriabernal.co/hec-ras-modelacion-hidraulica' },
  { path: 'diseno-hidrosanitario-nsr10', title: 'Diseño Hidrosanitario NSR-10 — BIC Bernal Ingeniería | Colombia', desc: 'Diseño de sistemas CI (contraincendio), hidrosanitarios y memorias de cálculo bajo NSR-10 Título I. Edificios, hospitales, centros comerciales.', url: 'https://www.ingenieriabernal.co/diseno-hidrosanitario-nsr10' },
  { path: 'estudios-inundacion-colombia', title: 'Estudios de Inundación Colombia — BIC Bernal Ingeniería Consultores', desc: 'Estudios de amenaza y riesgo de inundación para POT, licencias ambientales y seguros. Metodología IDEAM, modelación 2D. Cobertura nacional.', url: 'https://www.ingenieriabernal.co/estudios-inundacion-colombia' },
  { path: 'acueductos-alcantarillados', title: 'Diseño Acueductos y Alcantarillados — BIC Bernal Ingeniería Colombia', desc: 'Diseño y optimización de sistemas de acueducto y alcantarillado bajo RAS 2000. Modelos EPANET, WaterGEMS. Zonas urbanas y rurales de Colombia.', url: 'https://www.ingenieriabernal.co/acueductos-alcantarillados' },
  { path: 'regalias-mga-web', title: 'Proyectos Regalías MGA-Web — BIC Bernal Ingeniería | Colombia', desc: 'Formulación y estructuración de proyectos de inversión MGA-Web para el Sistema General de Regalías (SGR). Alcaldías, gobernaciones, entidades públicas.', url: 'https://www.ingenieriabernal.co/regalias-mga-web' },
  { path: 'gestion-riesgo-hidrico', title: 'Gestión del Riesgo Hídrico Colombia — BIC Bernal Ingeniería', desc: 'Planes municipales de gestión del riesgo hídrico, mapas de amenaza, PMGRD. Integración con POT y POMCA. Experiencia Eje Cafetero y Colombia.', url: 'https://www.ingenieriabernal.co/gestion-riesgo-hidrico' },

  // Servicios específicos (sub-páginas)
  { path: 'servicios/estudios-hidrologicos', title: 'Estudios Hidrológicos Colombia | BIC Bernal Ingeniería Consultores', desc: 'Estudios hidrológicos para municipios, constructoras y entidades públicas en Colombia. Análisis de cuencas, curvas IDF, caudales de diseño, periodos de retorno. Director PhD. +30 años experiencia. Eje Cafetero.', url: 'https://www.ingenieriabernal.co/servicios/estudios-hidrologicos' },
  { path: 'servicios/modelacion-hec-ras', title: 'Modelación Hidráulica HEC-RAS 2D Colombia | BIC Bernal Ingeniería Consultores', desc: 'Modelación hidráulica HEC-RAS 1D y 2D para municipios, constructoras y entidades en Colombia. Manchas de inundación, amenaza hídrica Decreto 1807/2014. Director PhD. +30 años. Eje Cafetero.', url: 'https://www.ingenieriabernal.co/servicios/modelacion-hec-ras' },
  { path: 'servicios/acueducto-alcantarillado', title: 'Diseño Acueducto y Alcantarillado Colombia | BIC Bernal Ingeniería Consultores', desc: 'Diseño de acueductos y alcantarillados para municipios y constructoras en Colombia. RAS 2017, Resolución 0330/2017. Redes de distribución, colectores, PTAP, PTAR. Director PhD. +30 años.', url: 'https://www.ingenieriabernal.co/servicios/acueducto-alcantarillado' },
  { path: 'servicios/redes-hidrosanitarias', title: 'Redes Hidrosanitarias para Edificaciones | BIC Bernal Ingeniería Consultores', desc: 'Diseño de redes hidrosanitarias para edificios residenciales, comerciales e industriales en Colombia. Agua fría, agua caliente, aguas residuales, aguas lluvias. NSR-10, RAS 2017. Director PhD.', url: 'https://www.ingenieriabernal.co/servicios/redes-hidrosanitarias' },
  { path: 'servicios/sistemas-contra-incendio', title: 'Sistemas Contra Incendio NSR-10 Colombia | BIC Bernal Ingeniería Consultores', desc: 'Diseño de sistemas contra incendio NSR-10 Títulos J y K para edificios, centros comerciales, plantas industriales y bodegas en Colombia. NFPA, rociadores, hidrantes. Director PhD. +30 años.', url: 'https://www.ingenieriabernal.co/servicios/sistemas-contra-incendio' },
  { path: 'servicios/interventoria', title: 'Interventoría Técnica Hidráulica Colombia | BIC Bernal Ingeniería Consultores', desc: 'Interventoría técnica de obras hidráulicas, acueductos, alcantarillados y redes hidrosanitarias para municipios, gobernaciones y entidades públicas en Colombia. Director PhD. +30 años.', url: 'https://www.ingenieriabernal.co/servicios/interventoria' },
  { path: 'servicios/regalias-mga', title: 'Formulación Proyectos Regalías MGA-Web Colombia | BIC Bernal Ingeniería Consultores', desc: 'Formulación de proyectos de inversión para el Sistema General de Regalías (SGR) en MGA-Web. Agua potable, saneamiento básico, gestión del riesgo. Director PhD. +30 años. Eje Cafetero.', url: 'https://www.ingenieriabernal.co/servicios/regalias-mga' },
  { path: 'servicios/geotecnia', title: 'Estudios Geotécnicos y de Suelos Colombia | BIC Bernal Ingeniería Consultores', desc: 'Estudios geotécnicos y de suelos para constructoras, municipios y entidades públicas en Colombia. Capacidad portante, estabilidad de taludes, NSR-10 Título H. Director PhD. +30 años.', url: 'https://www.ingenieriabernal.co/servicios/geotecnia' },
  { path: 'servicios/ambiental', title: 'Estudios Ambientales e IRCA Colombia | BIC Bernal Ingeniería Consultores', desc: 'Estudios ambientales, cálculo IRCA, permisos de vertimientos, concesiones de agua y trámites ante CAR para proyectos hídricos en Colombia. Director PhD. +30 años. Eje Cafetero.', url: 'https://www.ingenieriabernal.co/servicios/ambiental' },

  // Páginas regionales SEO
  { path: 'regional/manizales', title: 'Ingeniería Hidráulica Manizales | BIC Bernal Ingeniería Consultores', desc: 'BIC tiene su sede en Manizales. Estudios hidrológicos, diseño de acueductos, alcantarillados y modelación HEC-RAS para alcaldías, constructoras y ESP en Caldas y Eje Cafetero.', url: 'https://www.ingenieriabernal.co/regional/manizales' },
  { path: 'regional/pereira', title: 'Ingeniería Hidráulica Pereira | BIC Bernal Ingeniería Consultores', desc: 'Consultoría en ingeniería hidráulica y sanitaria en Pereira y Risaralda. Diseño de acueductos, redes contra incendio y modelaciones HEC-RAS para sector público y privado.', url: 'https://www.ingenieriabernal.co/regional/pereira' },
  { path: 'regional/armenia', title: 'Ingeniería Hidráulica Armenia | BIC Bernal Ingeniería Consultores', desc: 'Consultoría hidráulica en Armenia y Quindío. Estudios hidráulicos, formulación de proyectos de regalías (MGA-Web) y diseño de redes hidrosanitarias con cumplimiento RAS 2000.', url: 'https://www.ingenieriabernal.co/regional/armenia' },
  { path: 'regional/eje-cafetero', title: 'Consultoría Hidráulica Eje Cafetero | BIC Bernal Ingeniería Consultores', desc: 'BIC opera en todo el Eje Cafetero — Caldas, Risaralda y Quindío. Consultoría integral en ingeniería hidráulica, sanitaria y ambiental para infraestructura pública y privada.', url: 'https://www.ingenieriabernal.co/regional/eje-cafetero' },

  // Landing pages locales — Manizales
  { path: 'estudio-de-inundabilidad-manizales', title: 'Estudio de Inundabilidad en Manizales | BIC Ingeniería', desc: 'Estudios de inundabilidad en Manizales con modelación HEC-RAS 2D. Requerido por Corpocaldas, POMCA y POT. Solicite cotización: +57 302 477 8910', url: 'https://www.ingenieriabernal.co/estudio-de-inundabilidad-manizales/' },
  { path: 'estudio-de-suelos-manizales', title: 'Estudio de Suelos en Manizales | BIC Ingeniería', desc: 'Realizamos estudios de suelos en Manizales según NSR-10. Informe geotécnico completo para licencia de construcción. Solicite cotización: +57 302 477 8910', url: 'https://www.ingenieriabernal.co/estudio-de-suelos-manizales/' },
  { path: 'licencia-de-construccion-manizales', title: 'Licencia de Construcción Manizales: Documentos Técnicos | BIC', desc: 'BIC prepara todos los estudios técnicos para su licencia de construcción en Manizales: suelos, estructural y planos. +57 302 477 8910', url: 'https://www.ingenieriabernal.co/licencia-de-construccion-manizales/' },
  { path: 'estudio-de-suelos-pereira', title: 'Estudio de Suelos en Pereira | BIC Ingeniería', desc: 'Realizamos estudios de suelos en Pereira según NSR-10. Informe geotécnico completo para licencia de construcción en Risaralda. +57 302 477 8910', url: 'https://www.ingenieriabernal.co/estudio-de-suelos-pereira/' },
  { path: 'diseno-hidraulico-manizales', title: 'Diseño Hidráulico en Manizales | BIC Ingeniería', desc: 'Diseño hidráulico en Manizales: redes de acueducto, alcantarillado, canales y estructuras. BIC cumple RAS 2000 y normativa vigente. +57 302 477 8910', url: 'https://www.ingenieriabernal.co/diseno-hidraulico-manizales/' },
  { path: 'modelacion-hidraulica-manizales', title: 'Modelación Hidráulica en Manizales | BIC Ingeniería', desc: 'Modelación hidráulica 1D y 2D en Manizales con HEC-RAS. Análisis de inundaciones, socavación y diseño de obras. +57 302 477 8910', url: 'https://www.ingenieriabernal.co/modelacion-hidraulica-manizales/' },
  { path: 'estudio-hidrologico-manizales', title: 'Estudio Hidrológico en Manizales | BIC Ingeniería', desc: 'Estudios hidrológicos en Manizales: caudales de diseño, curvas IDF, períodos de retorno. Cumplimiento RAS 2000 y EIA. +57 302 477 8910', url: 'https://www.ingenieriabernal.co/estudio-hidrologico-manizales/' },
  { path: 'interventoria-hidraulica-manizales', title: 'Interventoría Hidráulica en Manizales | BIC Ingeniería', desc: 'Interventoría técnica de obras hidráulicas en Manizales y Caldas. Acueductos, alcantarillados, canales. RAS 2000. +57 302 477 8910', url: 'https://www.ingenieriabernal.co/interventoria-hidraulica-manizales/' },
  { path: 'diseno-hidraulico-pereira', title: 'Diseño Hidráulico en Pereira | BIC Ingeniería', desc: 'Diseño hidráulico en Pereira: redes de acueducto, alcantarillado, canales. Cumplimos RAS 2000 y normativa CARDER. +57 302 477 8910', url: 'https://www.ingenieriabernal.co/diseno-hidraulico-pereira/' },

  // Blog posts
  { path: 'blog/hec-ras-2d-guia-colombia', title: 'Guía HEC-RAS 2D en Colombia 2026 — BIC Bernal Ingeniería', desc: 'Cómo usar HEC-RAS 2D para estudios de inundación en Colombia: configuración, datos LIDAR, validación y entrega a IDEAM o CAR. Paso a paso.', url: 'https://www.ingenieriabernal.co/blog/hec-ras-2d-guia-colombia' },
  { path: 'blog/nsr10-sistemas-ci-edificios', title: 'NSR-10 Sistemas CI: Diseño Contraincendio Edificios Colombia — BIC', desc: 'Requisitos NSR-10 Título I para sistemas contraincendio en edificios de Colombia: rociadores, gabinetes, BIE, siamesas. Tabla de aplicación por uso.', url: 'https://www.ingenieriabernal.co/blog/nsr10-sistemas-ci-edificios' },
  { path: 'blog/costos-obras-hidraulicas-2026', title: 'Costos Obras Hidráulicas Colombia 2026 — BIC Bernal Ingeniería', desc: 'Referencia de costos unitarios para obras hidráulicas en Colombia 2026: tubería, excavación, concreto, equipos hidromecánicos. Fuentes: INVIAS, DNP.', url: 'https://www.ingenieriabernal.co/blog/costos-obras-hidraulicas-2026' },
  { path: 'blog/mga-web-proyectos-regalias', title: 'MGA-Web: Cómo Formular Proyectos de Regalías en Colombia — BIC', desc: 'Guía práctica para formular proyectos en MGA-Web para el SGR: pasos, errores comunes, indicadores de agua y saneamiento. Actualizado 2026.', url: 'https://www.ingenieriabernal.co/blog/mga-web-proyectos-regalias' },
  { path: 'blog/epanet-diseno-acueductos', title: 'EPANET para Diseño de Acueductos Colombia — Tutorial BIC', desc: 'Tutorial EPANET para diseño y modelación de acueductos en Colombia: datos de entrada, calibración, análisis de presiones y caudales. Casos reales.', url: 'https://www.ingenieriabernal.co/blog/epanet-diseno-acueductos' },
  { path: 'blog/torrencialidad-eje-cafetero', title: 'Torrencialidad Eje Cafetero: Amenaza y Gestión del Riesgo — BIC', desc: 'Análisis de torrencialidad en el Eje Cafetero: metodología, modelación con FLO-2D y HEC-RAS, integración con POMCA y POT municipal.', url: 'https://www.ingenieriabernal.co/blog/torrencialidad-eje-cafetero' },
];

function injectMeta(html, r) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${r.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${r.desc}"`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${r.url}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${r.url}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${r.title}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${r.desc}"`)
    .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${r.title}"`)
    .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${r.desc}"`);
}

for (const route of routes) {
  const html = injectMeta(baseHtml, route);
  const dir = join(distDir, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf-8');
  console.log(`  ✅ /${route.path}`);
}

console.log(`\n✅ Pre-rendering completo: ${routes.length} rutas generadas.`);
