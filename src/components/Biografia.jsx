import { biografia, mision } from '../data/contenido'
import Imagen from './Imagen'
import './Biografia.css'

export default function Biografia() {
  return (
    <section id="biografia" className="seccion">
      <div className="contenedor biografia">
        <div className="biografia__marco revelar">
          <Imagen src={biografia.imagen} alt="Natán y Cristina Alfaro" className="biografia__imagen" />
        </div>

        <div className="revelar" style={{ '--retraso': '120ms' }}>
          <span className="seccion__etiqueta">Biografía</span>
          <h2>{biografia.titulo}</h2>
          {biografia.parrafos.map((p) => (
            <p key={p.slice(0, 20)} className="biografia__texto">{p}</p>
          ))}
        </div>
      </div>

      <div className="contenedor">
        <blockquote className="mision revelar">
          <span className="mision__comillas" aria-hidden="true">“</span>
          {mision}
        </blockquote>
      </div>
    </section>
  )
}
