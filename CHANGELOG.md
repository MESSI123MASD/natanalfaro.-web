# Historial de cambios

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y [Versionado Semántico](https://semver.org/lang/es/).

- **MAYOR** (1.0.0 → 2.0.0): rediseño o cambio grande de estructura.
- **MENOR** (0.2.0 → 0.3.0): nueva sección, página o función.
- **PARCHE** (0.2.1 → 0.2.2): arreglos y ajustes pequeños.

Mientras el sitio esté en construcción usamos `0.x`. Al publicarlo en natanalfaro.org será la **1.0.0**.

## [Sin publicar]

## [0.3.1] - 2026-09-22
### Corregido
- En teléfonos con "modo oscuro forzado" (Chrome Android, Samsung Internet) el dorado se veía café/rojizo. Se declara `color-scheme: only dark` para que el navegador no altere los colores.

## [0.3.0] - 2026-09-22
### Cambiado
- Rediseño completo en modo oscuro y minimalista: fondo negro, un solo acento dorado (se eliminó el azul marino).
- Portada a pantalla completa con brillo dorado animado, cuadrícula sutil, título con destello y entrada escalonada.
- Header transparente que se vuelve "vidrio oscuro" con desenfoque al hacer scroll; subrayado animado en el menú.
- Tarjetas de ministerios numeradas, con zoom suave de imagen y borde dorado al pasar el mouse.
- Nueva tipografía de la misión como cita destacada; pie de página rediseñado.
### Agregado
- Aparición suave de secciones al hacer scroll (`useRevelar`), desactivada si el usuario pide "reducir movimiento".
- Brillo que cruza los botones principales e indicador animado para bajar desde la portada.

## [0.2.2] - 2026-09-22
### Agregado
- Número de versión visible en el pie de página.
- `CHANGELOG.md` con el historial del proyecto.
### Cambiado
- Vite escucha en IPv4 e IPv6 y acepta túneles temporales de Cloudflare (`*.trycloudflare.com`) para compartir vistas previas.

## [0.2.1] - 2026-09-22
### Corregido
- La página ya no se desplaza de lado a lado en teléfonos.

## [0.2.0] - 2026-09-22
### Cambiado
- Versión responsiva para teléfono: botones y enlaces con área táctil de 44–48px, botones a ancho completo en pantallas angostas, imágenes de ministerios en 16:9.
- Menú móvil: se cierra con Escape, al tocar fuera y al girar a escritorio; bloquea el scroll del fondo.
- Color de la barra del navegador (`theme-color`).

## [0.1.0] - 2026-09-22
### Agregado
- Proyecto base con Vite + React + React Router y CSS puro.
- Inicio: portada, biografía, misión, 8 ministerios, Vida Bendecida, eventos y testimonios (ocultos si no hay datos).
- Página de Ofrenda y Diezmo y página 404.
- Textos separados del código en `src/data/`.
- SEO básico, Open Graph, `robots.txt`, `sitemap.xml` y `.htaccess` para BanaHosting.
