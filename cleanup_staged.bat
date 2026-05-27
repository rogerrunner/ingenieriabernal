@echo off
cd /d "C:\Users\beero\ingenieriabernal_seo"
del /f /q .git\index.lock 2>nul
del /f /q .git\HEAD.lock 2>nul
git reset HEAD
echo.
echo Listo - staged deletions limpiadas.
pause
