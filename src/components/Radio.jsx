import { radio } from '../data/contenido'
import { t } from '../lib/idioma'
import Icono from './Icono'
import './Radio.css'

// Faro del Espíritu: el programa de radio del pastor
export default function Radio() {
  if (!radio.titulo || !radio.url) return null
  return (
    <section className="radio" aria-label={radio.titulo}>
      <div className="contenedor">
        <div className="radio__tarjeta revelar">
          <div className="radio__ondas" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => <span key={i} style={{ '--i': i }} />)}
          </div>
          <div className="radio__texto">
            <span className="seccion__etiqueta">{t('Programa de radio', 'Radio program')}</span>
            <h2>{radio.titulo}</h2>
            <p>{radio.texto}</p>
            {radio.frecuencia && <p className="radio__frecuencia">{radio.frecuencia}</p>}
          </div>
          <a href={radio.url} target="_blank" rel="noopener noreferrer" className="boton boton--primario radio__boton">
            <Icono nombre="audio" tamano={18} /> {radio.boton || t('Escuchar', 'Listen')}
          </a>
        </div>
      </div>
    </section>
  )
}
