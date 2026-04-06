import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import prerender from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/servicios',
        '/proyectos',
        '/equipo',
        '/sobre-mi',
        '/credenciales',
        '/blog',
        '/contacto',
        '/cobertura-nacional',
        '/manizales',
        '/eje-cafetero',
        '/palestina-aerocafe',
        '/viterbo-occidente-caldas',
        '/alto-occidente-caldas',
        '/magdalena-medio',
        '/norte-tolima',
        '/cerritos-norte-valle',
        '/rionegro-oriente-antioquia',
        '/sabana-occidente',
        '/sabana-norte',
        '/boyaca-corredor',
        '/huila-neiva',
        '/bucaramanga-area',
        '/santander-sur',
        '/antioquia-suroeste',
        '/costa-caribe',
        '/llanos-orinoquia',
        '/ingenieria-bogota',
        '/ingenieria-medellin',
        '/ingenieria-cali',
        '/ingenieria-manizales',
        '/ingenieria-bucaramanga',
        '/ingenieria-barranquilla',
        '/ingenieria-eje-cafetero',
        '/ingenieria-antioquia',
        '/blog/costos-obras-hidraulicas-colombia-2026',
        '/blog/cambios-normativos-ingenieria-hidraulica-2026',
        '/blog/hec-ras-2d-colombia',
        '/blog/proyectos-regalias-agua-saneamiento',
        '/blog/nsr-10-sistemas-contra-incendios',
        '/servicios/estudios-hidrologicos',
        '/servicios/modelacion-hec-ras',
        '/servicios/acueducto-alcantarillado',
        '/servicios/redes-hidrosanitarias',
        '/servicios/sistemas-contra-incendio',
        '/servicios/interventoria',
        '/servicios/regalias-mga',
        '/servicios/geotecnia',
        '/servicios/ambiental',
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['wouter'],
        },
      },
    },
  },
})
