import { ministerios } from '../data/contenido'
import Imagen from './Imagen'
import './Ministerios.css'

export default function Ministerios() {
  return (
    <section id="ministerios" className="seccion seccion--alt">
      <div className="contenedor">
        <div className="seccion__encabezado revelar">
          <span className="seccion__etiqueta">Ministerios</span>
          <h2>Iglesias, proyectos y programas</h2>
          <p>Cada ministerio nace del sueño de Dios para Nicaragua.</p>
        </div>

        <div className="ministerios__grid">
          {ministerios.map((m, i) => (
            <article
              key={m.nombre}
              className="tarjeta revelar"
              style={{ '--retraso': `${(i % 3) * 90}ms` }}
            >
              <div className="tarjeta__media">
                <Imagen src={m.imagen} alt={m.nombre} className="tarjeta__imagen" />
              </div>
              <div className="tarjeta__cuerpo">
                <span className="tarjeta__numero">{String(i + 1).padStart(2, '0')}</span>
                <h3>{m.nombre}</h3>
                <p>{m.descripcion}</p>
                {m.enlace && (
                  <a href={m.enlace} target="_blank" rel="noopener noreferrer" className="tarjeta__enlace">
                    Conocer más <span aria-hidden="true">→</span>
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
