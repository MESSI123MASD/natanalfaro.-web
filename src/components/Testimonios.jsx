import { testimonios } from '../data/contenido'
import { t } from '../lib/idioma'
import './Testimonios.css'

export default function Testimonios() {
  if (testimonios.length === 0) return null

  return (
    <section id="testimonios" className="seccion seccion--alt">
      <div className="contenedor">
        <div className="seccion__encabezado revelar">
          <span className="seccion__etiqueta">{t('Testimonios', 'Testimonies')}</span>
          <h2>{t('Vidas transformadas', 'Changed lives')}</h2>
        </div>

        <div className="testimonios">
          {testimonios.map((t) => (
            <figure key={t.nombre} className="testimonio revelar">
              <blockquote>{t.texto}</blockquote>
              <figcaption>
                <strong>{t.nombre}</strong>
                {t.lugar && <span> · {t.lugar}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
