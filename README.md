# natanalfaro.org — sitio nuevo (React + CSS + JS)

Sitio oficial del Pastor Natán Alfaro, reconstruido sin WordPress con **Vite + React + React Router** y CSS puro.
Se genera como archivos estáticos y se sube a BanaHosting (cPanel).

## Requisitos

- Node.js 20 o superior (`node -v`)

## Comandos

```bash
npm install        # instalar dependencias (solo la primera vez)
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # genera la carpeta dist/ lista para subir
npm run preview    # prueba local de dist/
```

## Estructura

```text
src/
  data/                 <- TEXTOS Y DATOS: edita aquí, no en los componentes
    site.js             nombre, contacto, redes, menú
    contenido.js        biografía, misión, ministerios, Vida Bendecida, eventos, testimonios
    ofrenda.js          métodos de ofrenda (pendiente de confirmar)
  components/           una carpeta de piezas: Header, Hero, Biografia, Ministerios...
                        cada componente tiene su .jsx y su .css
  pages/                Inicio, Ofrenda, NoEncontrada (404)
  hooks/                useTituloPagina (título de la pestaña)
  styles/global.css     colores, tipografía y estilos base (variables en :root)
public/
  img/                  fotos (ver img/LEEME.txt)
  .htaccess             HTTPS, rutas de React, 410 para URLs viejas de WordPress, seguridad
  robots.txt, sitemap.xml, favicon.svg
```

## Tareas comunes

- **Agregar un evento:** en `src/data/contenido.js`, añade un objeto a `eventos`. Los eventos pasados se ocultan solos.
- **Agregar un testimonio:** añade un objeto a `testimonios`. Si la lista está vacía, la sección no aparece.
- **Cambiar colores:** variables al inicio de `src/styles/global.css`.
- **Nueva página:** crea `src/pages/MiPagina.jsx`, agrégala en `src/App.jsx` y en `navegacion` de `src/data/site.js`. Añádela también a `public/sitemap.xml`.

## Pendientes antes de publicar

- [ ] Copiar las fotos a `public/img/` (lista en `public/img/LEEME.txt`).
- [ ] Revisar con el equipo la biografía y los datos de ministerios.
- [ ] Confirmar métodos de ofrenda en `src/data/ofrenda.js`.
- [ ] Completar las redirecciones 301 en `public/.htaccess` con las URLs del sitio viejo.

## Publicar en BanaHosting

1. `npm run build`
2. En cPanel → Administrador de archivos, abre la carpeta de natanalfaro.org (debe estar **vacía**, sin archivos de WordPress).
3. Comprime el **contenido** de `dist/` en un ZIP, súbelo y extráelo ahí. Activa "Mostrar archivos ocultos" para confirmar que `.htaccess` quedó.
4. Prueba `https://natanalfaro.org` y `https://natanalfaro.org/ofrenda` (recargando la página en esa ruta).

## Versiones

Usamos versionado semántico; el historial está en `CHANGELOG.md` y la versión actual se ve en el pie de página.

Para publicar una versión nueva:

1. Anota los cambios en `CHANGELOG.md` (bajo `[Sin publicar]`, luego muévelos a la versión nueva).
2. Sube el número: `npm version patch` (arreglos), `npm version minor` (secciones nuevas) o `npm version major`.
   Esto cambia `package.json`, crea el commit y la etiqueta `vX.Y.Z` en Git.
