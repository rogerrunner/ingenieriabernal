@echo off
cd /d C:\Users\beero\ingenieriabernal_seo
del /f .git\index.lock 2>nul
git add src/pages/LicenciaUrbanismo.tsx
git add src/pages/ObrasHidraulicasColombia.tsx
git add src/pages/UrbanizacionColombia.tsx
git add src/App.tsx
git add public/sitemap.xml
git commit -m "feat: 3 nuevas paginas SEO - licencia urbanismo, obras hidraulicas, urbanizaciones Colombia"
git push origin main
pause
