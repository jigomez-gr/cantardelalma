@echo off
chcp 65001 > nul
echo ===================================================
echo   Subir cambios a GitHub - Cantar del Alma
echo ===================================================
echo.

:: Add all changes
echo [+] Añadiendo cambios a Git...
git add -A

:: Ask user for a commit message
set /p commit_msg="Introduce el mensaje del commit (vacio para mensaje por defecto): "

:: Default message if empty
if "%commit_msg%"=="" (
    set commit_msg=Actualizacion automatica desde subir.bat
)

echo.
echo [+] Creando commit: "%commit_msg%"...
git commit -m "%commit_msg%"

echo.
echo [+] Subiendo cambios a GitHub (rama main)...
git push origin main

echo.
echo ===================================================
echo   ¡Listo! Cambios subidos correctamente.
echo ===================================================
echo.
pause
