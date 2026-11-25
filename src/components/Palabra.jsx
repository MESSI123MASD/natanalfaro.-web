import { palabra } from '../data/contenido'
import { enIngles } from '../lib/idioma'
import './Palabra.css'

// Palabra para hoy: una frase o versículo que el equipo cambia desde el panel.
export default function Palabra() {
  if (!palabra.texto) return null
  const texto = (enIngles && palabra.texto_en) || palabra.texto
  const cita = (enIngles && palabra.cita_en) || palabra.cita
  const etiqueta = enIngles ? 'A word for today' : palabra.titulo || 'Palabra para hoy'
  return (
    <section className="palabra" aria-label={etiqueta}>
      <div className="contenedor">
        <figure className="palabra__tarjeta revelar">
          <span className="seccion__etiqueta">{etiqueta}</span>
          <blockquote>{texto}</blockquote>
          {cita && <figcaption>{cita}</figcaption>}
        </figure>
      </div>
    </section>
  )
}
