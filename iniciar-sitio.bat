@echo off
title Sitio del Pastor Natan Alfaro
cd /d "%~dp0"
echo.
echo  Iniciando el sitio... (no cierres las ventanas que se abren)
echo.
if not exist node_modules (
  echo  Instalando dependencias por primera vez...
  call npm install
)
start "SITIO - no cerrar" cmd /k "npm run dev"
timeout /t 6 /nobreak >nul
start "LINK PARA COMPARTIR - no cerrar" cmd /k "npx --yes cloudflared tunnel --url http://localhost:5173"
echo.
echo  Listo. En la ventana "LINK PARA COMPARTIR" busca la linea que termina en .trycloudflare.com
echo  Ese es el link para abrir en el celular o compartir.
echo  Para apagar todo, cierra las dos ventanas.
echo.
pause
