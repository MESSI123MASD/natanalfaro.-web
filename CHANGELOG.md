# Historial de cambios

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y [Versionado Semántico](https://semver.org/lang/es/).

- **MAYOR** (1.0.0 → 2.0.0): rediseño o cambio grande de estructura.
- **MENOR** (0.2.0 → 0.3.0): nueva sección, página o función.
- **PARCHE** (0.2.1 → 0.2.2): arreglos y ajustes pequeños.

Mientras el sitio esté en construcción usamos `0.x`. Al publicarlo en natanalfaro.org será la **1.0.0**.

## [Sin publicar]

## [0.5.0] - 2026-09-24
### Agregado
- Sección **Diseño** en el panel: modo oscuro/claro, 6 paletas aprobadas o colores personalizados, 10 tipos de letra, tamaño de letra, estilo de esquinas, animaciones y secciones visibles (`src/content/tema.json`, `src/lib/tema.js`).
- **Vista previa del borrador**: abrir el sitio con `?vista-previa` muestra el contenido de la rama `borrador` de GitHub al instante, con una barra que indica quién hizo el último cambio. Se mantiene al navegar y se sale con "Salir".
### Cambiado
- Los colores fijos del CSS pasaron a variables del tema; el acento se oscurece solo en modo claro si no se lee bien.
- El encabezado es sólido fuera de la portada.

## [0.4.0] - 2026-09-24
### Agregado
- Panel de edición visual con Pages CMS (`.pages.yml`): textos, fotos, ministerios, eventos, testimonios, Vida Bendecida, ofrenda y contacto se editan desde https://app.pagescms.org, sin tocar código.
- Publicación automática opcional en el hosting (Hostinger u otro) por FTP con GitHub Actions (`.github/workflows/publicar.yml`), activable con la variable `PUBLICAR`.
### Cambiado
- El contenido se movió a `src/content/*.json`. Los textos de la portada y su imagen de fondo ahora también son editables.

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
