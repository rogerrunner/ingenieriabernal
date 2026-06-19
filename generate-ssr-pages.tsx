/**
 * generate-ssr-pages.tsx
 * Post-build SSG: renderiza componentes de páginas de servicio y nacionales
 * con renderToStaticMarkup e inyecta el HTML resultante en dist/{path}/index.html
 *
 * Esto permite que Google indexe el contenido completo de las páginas de servicio
 * sin necesidad de ejecutar JavaScript.
 *
 * Ejecutar con: npx tsx generate-ssr-pages.tsx
 * (después de: vite build && node generate-static.mjs && npx tsx generate-static-content.tsx)
 */

import { renderToStaticMarkup } from 'react-dom/server'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import React from 'react'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, 'dist')

// ─── Importar datos de artículos de blog ─────────────────────────────────────
import articles1 from './src/data/articles1'
import articlesA from './src/data/articlesA'
import articlesB from './src/data/articlesB'
import articlesC from './src/data/articlesC'
import articlesD from './src/data/articlesD'
import articlesE from './src/data/articlesE'
import articlesF from './src/data/articlesF'
import articlesG from './src/data/articlesG'
import articlesH from './src/data/articlesH'
import articlesI from './src/data/articlesI'
import articlesJ from './src/data/articlesJ'
import articlesK from './src/data/articlesK'
import articlesL from './src/data/articlesL'
import articlesM from './src/data/articlesM'
import articlesN from './src/data/articlesN'
import articlesO from './src/data/articlesO'
import articlesP from './src/data/articlesP'
import articlesQ from './src/data/articlesQ'
import articlesR from './src/data/articlesR'
import articlesS from './src/data/articlesS'
import articlesT from './src/data/articlesT'
import articlesU from './src/data/articlesU'
import articlesV from './src/data/articlesV'
import articlesW from './src/data/articlesW'
import articlesX from './src/data/articlesX'

// ─── Importar páginas de servicio ────────────────────────────────────────────
// (imports directos con rutas relativas — tsx no siempre resuelve @ alias)
import ServicioEstudiosHidrologicos from './src/pages/ServicioEstudiosHidrologicos'
import ServicioModelacionHecRas from './src/pages/ServicioModelacionHecRas'
import ServicioDisenoAcueductos from './src/pages/ServicioDisenoAcueductos'
import ServicioRedesHidrosanitarias from './src/pages/ServicioRedesHidrosanitarias'
import ServicioSistemasContraIncendio from './src/pages/ServicioSistemasContraIncendio'
import ServicioInterventoria from './src/pages/ServicioInterventoria'
import ServicioRegaliasMga from './src/pages/ServicioRegaliasMga'
import ServicioGeotecnia from './src/pages/ServicioGeotecnia'
import ServicioAmbiental from './src/pages/ServicioAmbiental'
import ServicioContraIncendiosNSR10 from './src/pages/ServicioContraIncendiosNSR10'
import IngenieriaHidraulicaColombia from './src/pages/IngenieriaHidraulicaColombia'
import ModelacionHidraulicaColombia from './src/pages/ModelacionHidraulicaColombia'
import GestionRiesgoHidrico from './src/pages/GestionRiesgoHidrico'
import PlanParcialColombia from './src/pages/PlanParcialColombia'
import BocatomasColombia from './src/pages/BocatomasColombia'
import DisenoAlcantarilladoColombia from './src/pages/DisenoAlcantarilladoColombia'
// Páginas de servicio adicionales
import DisenoPTAPColombia from './src/pages/DisenoPTAPColombia'
import DisenoPTARColombia from './src/pages/DisenoPTARColombia'
import DisenoPTARManizales from './src/pages/DisenoPTARManizales'
import DisenoPTARMunicipalColombia from './src/pages/DisenoPTARMunicipalColombia'
import DisenoPTARIndustrialColombia from './src/pages/DisenoPTARIndustrialColombia'
import BocatomasEjeCafetero from './src/pages/BocatomasEjeCafetero'
import ConcesionAguasSuperficialesColombia from './src/pages/ConcesionAguasSuperficialesColombia'
import PermisoVertimientosColombia from './src/pages/PermisoVertimientosColombia'
import UrbanizacionColombia from './src/pages/UrbanizacionColombia'
import LicenciaUrbanismo from './src/pages/LicenciaUrbanismo'
import EncauzamientoRios from './src/pages/EncauzamientoRios'
import ConcesionAguasColombia from './src/pages/ConcesionAguasColombia'
import GestionRiesgoTaludes from './src/pages/GestionRiesgoTaludes'
import MemoriasHidrosanitarias from './src/pages/MemoriasHidrosanitarias'
import ServicioAcueductoAlcantarillado from './src/pages/ServicioAcueductoAlcantarillado'
import ServicioPTAPColombia from './src/pages/ServicioPTAPColombia'
import EstudioBasico from './src/pages/servicios/EstudioBasico'
// Páginas regionales
import RegionalMedellin from './src/pages/regional/RegionalMedellin'
import RegionalCali from './src/pages/regional/RegionalCali'
import RegionalPereira from './src/pages/regional/RegionalPereira'
import RegionalArmenia from './src/pages/regional/RegionalArmenia'
import RegionalEjeCafetero from './src/pages/regional/RegionalEjeCafetero'
// Páginas tramite-intent junio 2026
import TramitePermisoVertimientoColombia from './src/pages/TramitePermisoVertimientoColombia'
import ConcesionAguasSuperficialesTramite from './src/pages/ConcesionAguasSuperficialesTramite'
import DisenoAcueductoEntregaESP from './src/pages/DisenoAcueductoEntregaESP'
import EstudioDetalladoInundacionDecreto1807 from './src/pages/EstudioDetalladoInundacionDecreto1807'
import DisenoPTARTramitePermisoVertimiento from './src/pages/DisenoPTARTramitePermisoVertimiento'
import RedesHidrosanitariasLicenciaConstruccion from './src/pages/RedesHidrosanitariasLicenciaConstruccion'

// ─── Mapa de rutas a componentes ─────────────────────────────────────────────
const PAGES: Record<string, React.ComponentType> = {
  // Servicios core (más tráfico SEO)
  'servicios/estudios-hidrologicos': ServicioEstudiosHidrologicos,
  'servicios/modelacion-hec-ras': ServicioModelacionHecRas,
  'servicios/diseno-acueductos': ServicioDisenoAcueductos,
  'servicios/redes-hidrosanitarias': ServicioRedesHidrosanitarias,
  'servicios/sistemas-contra-incendio': ServicioSistemasContraIncendio,
  'servicios/interventoria': ServicioInterventoria,
  'servicios/regalias-mga': ServicioRegaliasMga,
  'servicios/geotecnia': ServicioGeotecnia,
  'servicios/ambiental': ServicioAmbiental,
  'servicios/contra-incendios-nsr10': ServicioContraIncendiosNSR10,
  // Páginas nacionales de alto valor
  'ingenieria-hidraulica-colombia': IngenieriaHidraulicaColombia,
  'modelacion-hidraulica-colombia': ModelacionHidraulicaColombia,
  'gestion-riesgo-hidrico': GestionRiesgoHidrico,
  'plan-parcial-colombia': PlanParcialColombia,
  'bocatomas-colombia': BocatomasColombia,
  'diseno-alcantarillado-colombia': DisenoAlcantarilladoColombia,
  // Páginas de servicio adicionales
  'diseno-ptap-colombia': DisenoPTAPColombia,
  'diseno-ptar-colombia': DisenoPTARColombia,
  'diseno-ptar-manizales': DisenoPTARManizales,
  'diseno-ptar-municipal-colombia': DisenoPTARMunicipalColombia,
  'diseno-ptar-industrial-colombia': DisenoPTARIndustrialColombia,
  'bocatomas-eje-cafetero': BocatomasEjeCafetero,
  'concesion-aguas-superficiales-colombia': ConcesionAguasSuperficialesColombia,
  'permiso-vertimientos-colombia': PermisoVertimientosColombia,
  'urbanizacion-colombia': UrbanizacionColombia,
  'licencia-urbanismo': LicenciaUrbanismo,
  'encauzamiento-rios': EncauzamientoRios,
  'concesion-aguas-colombia': ConcesionAguasColombia,
  'gestion-riesgo-taludes': GestionRiesgoTaludes,
  'memorias-hidrosanitarias': MemoriasHidrosanitarias,
  'servicio-acueducto-alcantarillado': ServicioAcueductoAlcantarillado,
  'servicio-ptap-colombia': ServicioPTAPColombia,
  'servicios/estudio-basico': EstudioBasico,
  // Páginas regionales
  'regional/medellin': RegionalMedellin,
  'regional/cali': RegionalCali,
  'regional/pereira': RegionalPereira,
  'regional/armenia': RegionalArmenia,
  'regional/eje-cafetero': RegionalEjeCafetero,
  // Páginas tramite-intent junio 2026
  'tramitar-permiso-vertimiento-colombia': TramitePermisoVertimientoColombia,
  'concesion-aguas-superficiales-tramite': ConcesionAguasSuperficialesTramite,
  'diseno-acueducto-entrega-esp': DisenoAcueductoEntregaESP,
  'estudio-detallado-inundacion-decreto-1807': EstudioDetalladoInundacionDecreto1807,
  'diseno-ptar-tramite-permiso-vertimiento': DisenoPTARTramitePermisoVertimiento,
  'redes-hidrosanitarias-licencia-construccion': RedesHidrosanitariasLicenciaConstruccion,
}

let injected = 0
let skipped = 0
let errors = 0

console.log(`\n🔄 SSG service pages — ${Object.keys(PAGES).length} páginas...\n`)

for (const [path, Component] of Object.entries(PAGES)) {
  const htmlFile = join(distDir, path, 'index.html')

  if (!existsSync(htmlFile)) {
    console.warn(`  ⚠️  Sin ruta estática: /${path}`)
    skipped++
    continue
  }

  try {
    let html = readFileSync(htmlFile, 'utf-8')

    // Renderizar componente a HTML estático
    let pageHtml: string
    try {
      pageHtml = renderToStaticMarkup(React.createElement(Component))
    } catch (renderErr) {
      console.warn(`  ⚠️  Error render /${path}:`, (renderErr as Error).message?.slice(0, 100))
      skipped++
      continue
    }

    // Envolver en un contenedor semántico con override de opacidad
    // (Section usa opacity:0 inicial por animación — sobrescribir para SSG)
    const staticContent = `<div data-ssr="true" style="opacity:1">
  <style>
    [data-ssr] section[style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }
    [data-ssr] section[style*="opacity:0"] { opacity: 1 !important; transform: none !important; }
  </style>
  ${pageHtml}
</div>`

    // Reemplazar <div id="root">...</div>
    html = html.replace(
      /<div id="root"[^>]*>[\s\S]*?<\/div>/,
      `<div id="root">${staticContent}</div>`
    )

    writeFileSync(htmlFile, html, 'utf-8')
    console.log(`  ✅ /${path}`)
    injected++
  } catch (err) {
    console.error(`  ❌ Error /${path}:`, (err as Error).message?.slice(0, 120))
    errors++
  }
}

console.log(`\n📊 Resultado SSG service pages:`)
console.log(`   ✅ Inyectados: ${injected}`)
console.log(`   ⚠️  Sin ruta:   ${skipped}`)
console.log(`   ❌ Errores:    ${errors}`)

// ─── SSG Blog Articles ────────────────────────────────────────────────────────
type ArticleData = {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}

const BLOG_ARTICLES: Record<string, ArticleData> = {
  ...articles1,
  ...articlesA,
  ...articlesB,
  ...articlesC,
  ...articlesD,
  ...articlesE,
  ...articlesF,
  ...articlesG,
  ...articlesH,
  ...articlesI,
  ...articlesJ,
  ...articlesK,
  ...articlesL,
  ...articlesM,
  ...articlesN,
  ...articlesO,
  ...articlesP,
  ...articlesQ,
  ...articlesR,
  ...articlesS,
  ...articlesT,
  ...articlesU,
  ...articlesV,
  ...articlesW,
  ...articlesX,
}

let blogInjected = 0
let blogSkipped = 0
let blogErrors = 0

console.log(`\n🔄 SSG blog articles — ${Object.keys(BLOG_ARTICLES).length} artículos...\n`)

for (const [slug, article] of Object.entries(BLOG_ARTICLES)) {
  const htmlFile = join(distDir, 'blog', slug, 'index.html')

  if (!existsSync(htmlFile)) {
    console.warn(`  ⚠️  Sin ruta estática: /blog/${slug}`)
    blogSkipped++
    continue
  }

  try {
    let html = readFileSync(htmlFile, 'utf-8')

    let pageHtml: string
    try {
      const children: React.ReactNode[] = [
        React.createElement('h1', { itemProp: 'headline' }, article.title),
        React.createElement('div', { itemProp: 'articleBody' }, article.body),
      ]
      if (article.faqItems?.length) {
        children.push(
          React.createElement('dl', { itemScope: true, itemType: 'https://schema.org/FAQPage' },
            article.faqItems.flatMap((f, i) => [
              React.createElement('dt', { key: `dt-${i}`, itemProp: 'name' }, f.q),
              React.createElement('dd', { key: `dd-${i}`, itemProp: 'acceptedAnswer' }, f.a),
            ])
          )
        )
      }
      pageHtml = renderToStaticMarkup(
        React.createElement('article', {
          'data-ssr': 'true',
          style: { opacity: 1 },
          itemScop