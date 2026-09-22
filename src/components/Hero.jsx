import { Link } from 'react-router-dom'
import { sitio } from '../data/site'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="contenedor hero__contenido">
        <p className="hero__saludo">Pastor Natán Alfaro</p>
        <h1 className="hero__titulo">{sitio.lema}</h1>
        <p className="hero__texto">
          Fundador y pastor principal de Casa de Mi Gloria. Equipando líderes y llevando el
          mensaje de Jesucristo a cada rincón de Nicaragua.
        </p>
        <div className="hero__acciones">
          <a href="#vida-bendecida" className="boton boton--primario">Recibe Vida Bendecida</a>
          <Link to="/ofrenda" className="boton boton--secundario">Ofrenda y diezmo</Link>
        </div>
      </div>
    </section>
  )
}
