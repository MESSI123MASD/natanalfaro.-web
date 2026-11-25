# Historial de cambios

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y [Versionado Semántico](https://semver.org/lang/es/).

- **MAYOR** (1.0.0 → 2.0.0): rediseño o cambio grande de estructura.
- **MENOR** (0.2.0 → 0.3.0): nueva sección, página o función.
- **PARCHE** (0.2.1 → 0.2.2): arreglos y ajustes pequeños.

Mientras el sitio esté en construcción usamos `0.x`. Al publicarlo en natanalfaro.org será la **1.0.0**.

## [Sin publicar]

## [1.0.1] - 2026-11-25

### Cambiado
- Títulos con Playfair Display (textos siguen en Avenir y detalles en ITC Eras).

## [1.0.0] - 2026-11-25

### Cambiado
- El sitio deja de ser una sola página: Inicio corto + páginas propias para Biografía, Mensajes, Ministerios,
  Invitaciones, Visítanos y Vida Bendecida (enlaces directos para compartir, ej. natanalfaro.org/invitaciones).
- Inicio: portada, redes, palabra para hoy, tarjetas de acceso a cada página, último mensaje y horarios.
- Paleta oficial "Clásica": negro, dorado, beige y gris. El modo claro ahora es beige con títulos negros.
- Tipografía de la marca: Trajan Pro (títulos), Avenir (textos) e ITC Eras (etiquetas, menú y botones).
  Si la fuente original no está disponible se usan alternativas libres parecidas: Cinzel, Nunito Sans y Didact Gothic.
- Pie de página con enlaces a todas las páginas. sitemap.xml actualizado.

## [0.9.0] - 2026-11-25

### Agregado
- Aviso dorado "EN VIVO" arriba de todo: se enciende solo durante los cultos (domingo 8:00, 10:00 y 2:00, hora de Nicaragua) o a mano desde el panel.
- Sección "Visítanos": horarios de culto, dirección, botón "Cómo llegar" y mapa.
- Trayectoria en números con contador animado.
- "Palabra para hoy": frase o versículo editable desde el panel.
- Faro del Espíritu: tarjeta del programa de radio con botón para escuchar.
- Matrimonios: Congreso Enamorados y Defensores del Pacto, con fecha opcional y botón de WhatsApp.
- Versión en inglés: botón ES/EN en el menú (enlace directo con ?lang=en). Traducciones en src/content/en.json.

### Cambiado
- Menú: se quita "Inicio" (el nombre lleva al inicio) y se agrega "Visítanos".

## [0.8.0] - 2026-11-25

### Agregado
- Sección "Invitaciones y agenda": tipos de invitación y formulario que envía la solicitud por WhatsApp o correo.
- Botón "Invitaciones y agenda" en la portada y enlace "Invitaciones" en el menú.
- Panel: textos, WhatsApp, correo y tipos de invitación editables; opción para ocultar la sección.
- `netlify.toml` para publicar la copia de prueba en Netlify (sin indexar en Google).

### Quitado
- Lighthouse Christian Academy y Escuela de Formación de Obreros (ministerios y biografía).
- Botón "Ofrenda y diezmo" de la portada (sigue en el menú).

## [0.7.0] - 2026-11-16

### Agregado
- Botón sol/luna en el menú: cada visitante elige ver el sitio oscuro o claro; se recuerda en su navegador.
- Panel → Diseño: opción para mostrar u ocultar ese botón.

### Arreglado
- Los teléfonos con "modo oscuro forzado" (Samsung, Chrome, WhatsApp) ya no cambian el dorado a café/rojizo.
- La frase de la portada usa color sólido para que ningún navegador la altere.

## [0.6.0] - 2026-11-16
### Agregado
- Portada nueva con foto, nombre del pastor, frase destacada y accesos directos a sus redes principales.
- Sección "Sígueme en redes" con todas las redes y sus usuarios.
- Botón flotante "Redes" que aparece al bajar, para llegar a sus redes desde cualquier parte de la página.
- Sección "Mensajes" con sus últimos videos de YouTube (se cargan solo al pulsar reproducir).
- Íconos para redes, editables desde el panel (campo "Ícono" y "Acceso rápido").
- Foto oficial del pastor en la portada y de Natán y Cristina Alfaro en la biografía.
### Cambiado
- Información actualizada desde su página de Facebook (noviembre de 2026): descripción, Pastor Principal desde 2010, redes y contacto.
- Ministerios como tarjetas de texto mientras no haya fotos reales.

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
