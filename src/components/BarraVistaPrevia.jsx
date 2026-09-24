import { salirDeVistaPrevia } from '../lib/vistaPrevia'
import './BarraVistaPrevia.css'

const formato = new Intl.DateTimeFormat('es-NI', { dateStyle: 'medium', timeStyle: 'short' })

// Franja fija que avisa que se está viendo el borrador (no el sitio publicado)
export default function BarraVistaPrevia() {
  const b = typeof window !== 'undefined' ? window.__BORRADOR__ : null
  if (!b) return null

  return (
    <div className={`vista-previa ${b.error ? 'vista-previa--error' : ''}`} role="status">
      <span className="vista-previa__etiqueta">Vista previa</span>
      <span className="vista-previa__info">
        {b.error
          ? `No se pudo cargar el borrador: ${b.error} Se muestra el sitio publicado.`
          : `Borrador · ${b.mensaje || 'último cambio'}${b.autor ? ` · ${b.autor}` : ''}${
              b.fecha ? ` · ${formato.format(new Date(b.fecha))}` : ''
            }`}
      </span>
      <span className="vista-previa__acciones">
        <button type="button" onClick={() => window.location.reload()}>Actualizar</button>
        <button type="button" onClick={salirDeVistaPrevia}>Salir</button>
      </span>
    </div>
  )
}
