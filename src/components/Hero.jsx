import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Decoración de fondo: brillo dorado y cuadrícula sutil */}
      <div className="hero__fondo" aria-hidden="true">
        <span className="hero__brillo" />
        <span className="hero__rejilla" />
      </div>

      <div className="contenedor hero__contenido">
        <p className="hero__saludo hero__entrada" style={{ '--retraso': '0ms' }}>
          Casa de Mi Gloria · Managua
        </p>

        <h1 className="hero__titulo hero__entrada" style={{ '--retraso': '120ms' }}>
          Hoy es el primer día del resto de tu <span className="hero__resaltado">vida bendecida</span>
        </h1>

        <p className="hero__texto hero__entrada" style={{ '--retraso': '240ms' }}>
          Fundador y pastor principal de Casa de Mi Gloria. Equipando líderes y llevando el
          mensaje de Jesucristo a cada rincón de Nicaragua.
        </p>

        <div className="hero__acciones hero__entrada" style={{ '--retraso': '360ms' }}>
          <a href="#vida-bendecida" className="boton boton--primario">Recibe Vida Bendecida</a>
          <Link to="/ofrenda" className="boton boton--secundario">Ofrenda y diezmo</Link>
        </div>
      </div>

      <a href="#biografia" className="hero__bajar" aria-label="Bajar a la biografía">
        <span />
      </a>
    </section>
  )
}
