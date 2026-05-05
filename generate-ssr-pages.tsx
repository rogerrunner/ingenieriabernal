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

// ─── Importar páginas de servicio ────────────────────────────────────────────
// (imports directos — no lazy — para que renderToStaticMarkup funcione)
import ServicioEstudiosHidrologicos from '@/pages/ServicioEstudiosHidrologicos'
import ServicioModelacionHecRas from '@/pages/ServicioModelacionHecRas'
import ServicioDisenoAcueductos from '@/pages/ServicioDisenoAcueductos'
import ServicioRedesHidrosanitarias from '@/pages/ServicioRedesHidrosanitarias'
import ServicioSistemasContraIncendio from '@/pages/ServicioSistemasContraIncendio'
import ServicioInterventoria from '@/pages/ServicioInterventoria'
import ServicioRegaliasMga from '@/pages/ServicioRegaliasMga'
import ServicioGeotecnia from '@/pages/ServicioGeotecnia'
import ServicioAmbiental from '@/pages/ServicioAmbiental'
import ServicioContraIncendiosNSR10 from '@/pages/ServicioContraIncendiosNSR10'
import IngenieriaHidraulicaColombia from '@/pages/IngenieriaHidraulicaColombia'
import ModelacionHidraulicaColombia from '@/pages/ModelacionHidraulicaColombia'
import GestionRiesgoHidrico from '@/pages/GestionRiesgoHidrico'
import PlanParcialColombia from '@/pages/PlanParcialColombia'
import BocatomasColombia from '@/pages/BocatomasColombia'
import DisenoAlcantarilladoColombia from '@/pages/DisenoAlcantarilladoColombia'

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
