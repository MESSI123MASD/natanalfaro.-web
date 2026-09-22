import { useState } from 'react'
import './Imagen.css'

// Muestra una imagen; si todavía no existe en /public/img, dibuja un recuadro
// con las iniciales para que el diseño no se rompa mientras se copian las fotos.
export default function Imagen({ src, alt, className = '' }) {
  const [fallo, setFallo] = useState(!src)

  if (fallo) {
    const iniciales = alt
      .split(' ')
      .filter((p) => p.length > 2)
      .slice(0, 2)
      .map((p) => p[0])
      .join('')
    return (
      <div className={`imagen-reemplazo ${className}`} role="img" aria-label={alt}>
        <span>{iniciales}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFallo(true)}
    />
  )
}
