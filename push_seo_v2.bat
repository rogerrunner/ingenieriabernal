@echo off
cd /d %USERPROFILE%\ingenieriabernal_seo
del /f .git\index.lock 2>nul
del /f .git\HEAD.lock 2>nul
git push origin main
echo.
echo LISTO - Vercel desplegara en 2-3 minutos
echo Revisa: https://ingenieriabernal.co/licencia-de-urbanismo
pause
