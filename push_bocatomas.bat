@echo off
cd /d C:\Users\beero\ingenieriabernal_seo
git add src/pages/BocatomasColombia.tsx src/App.tsx public/sitemap.xml
git commit -m "feat: nueva pagina /bocatomas-colombia - diseno bocatomas laterales Tirol fondo Colombia"
git push origin main
echo Listo! Vercel desplegando...
pause
