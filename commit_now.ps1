Set-Location "C:\Users\beero\ingenieriabernal_seo"

# Kill old lock
if (Test-Path ".git\index") { Remove-Item -Force ".git\index" -ErrorAction SilentlyContinue }
Remove-Item -Force ".git\index.lock" -ErrorAction SilentlyContinue
Remove-Item -Force ".git\HEAD.lock" -ErrorAction SilentlyContinue

# Unstage dangerous deletions from old abort_rebase
git reset HEAD 2>$null

# Stage all pending SEO changes
git add src/pages/GestionRiesgoHidrico.tsx
git add src/pages/PlanParcialColombia.tsx
git add src/pages/ServicioRedesHidrosanitarias.tsx
git add src/pages/DisenoPTARColombia.tsx
git add src/pages/DisenoPTAPColombia.tsx
git add src/pages/BocatomasColombia.tsx
git add src/pages/ServicioAcueductoAlcantarillado.tsx
git add src/pages/ServicioDisenoAcueductos.tsx
git add src/pages/EncauzamientoRios.tsx
git add src/pages/ServicioRegaliasMga.tsx
git add src/pages/GestionRiesgoTaludes.tsx
git add src/pages/MemoriasHidrosanitarias.tsx
git add PLAN_SEO.md
git add commit_now.ps1
git add cleanup_staged.bat

Write-Host "Git status:"
git status --short

git commit -m "feat: QuoteFormInline en 6 servicios adicionales + PLAN_SEO actualizado"
git push origin main

Write-Host ""
Write-Host "--- LISTO ---"
