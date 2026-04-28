Set-Location "%USERPROFILE%\ingenieriabernal_seo"
Remove-Item -Force .git\index.lock -ErrorAction SilentlyContinue
Remove-Item -Force .git\HEAD.lock -ErrorAction SilentlyContinue
git push origin main
Write-Host ""
Write-Host "LISTO - Vercel desplegara en 2-3 minutos"
Read-Host "Presiona ENTER para cerrar"
