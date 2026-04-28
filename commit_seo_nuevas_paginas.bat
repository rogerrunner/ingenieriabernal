@echo off
chcp 65001 >nul
title Commit SEO — Nuevas páginas BIC
cd /d C:\Users\beero\ingenieriabernal_seo

echo.
echo ============================================================
echo   COMMIT SEO — 3 paginas nuevas ingenieriabernal.co
echo ============================================================
echo.

echo [1/4] Eliminando lock file si existe...
if exist .git\index.lock del /f .git\index.lock
echo     OK

echo.
echo [2/4] Agregando archivos nuevos y modificados...
git add src/pages/LicenciaUrbanismo.tsx
git add src/pages/ObrasHidraulicasColombia.tsx
git add src/pages/UrbanizacionColombia.tsx
git add src/App.tsx
git add public/sitemap.xml
echo     OK

echo.
echo [3/4] Creando commit...
git commit -m "feat: 3 nuevas paginas SEO — licencia urbanismo, obras hidraulicas, urbanizaciones Colombia"
echo     OK

echo.
echo [4/4] Push a origin main...
git push origin main

echo.
echo ============================================================
echo   LISTO — Vercel desplegara en 2-3 minutos
echo   Revisa: https://ingenieriabernal.co/licencia-de-urbanismo
echo ============================================================
echo.
pause
