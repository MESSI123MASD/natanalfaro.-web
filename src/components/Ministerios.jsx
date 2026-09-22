import { ministerios } from '../data/contenido'
import Imagen from './Imagen'
import './Ministerios.css'

export default function Ministerios() {
  return (
    <section id="ministerios" className="seccion seccion--alt">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <span className="seccion__etiqueta">Ministerios</span>
          <h2>Iglesias, proyectos y programas</h2>
          <p>Cada ministerio nace del sueño de Dios para Nicaragua.</p>
        </div>

        <div className="ministerios__grid">
          {ministerios.map((m) => (
            <article key={m.nombre} className="tarjeta">
              <Imagen src={m.imagen} alt={m.nombre} className="tarjeta__imagen" />
              <div className="tarjeta__cuerpo">
                <h3>{m.nombre}</h3>
                <p>{m.descripcion}</p>
                {m.enlace && (
                  <a href={m.enlace} target="_blank" rel="noopener noreferrer" className="tarjeta__enlace">
                    Conocer más →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
