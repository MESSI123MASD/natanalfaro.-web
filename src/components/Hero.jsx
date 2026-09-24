import { Link } from 'react-router-dom'
import { portada } from '../data/contenido'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      {/* Decoración de fondo: brillo dorado y cuadrícula sutil */}
      <div
        className="hero__fondo"
        aria-hidden="true"
        style={portada.imagen_fondo ? { '--hero-imagen': `url("${portada.imagen_fondo}")` } : undefined}
      >
        <span className="hero__brillo" />
        <span className="hero__rejilla" />
      </div>

      <div className="contenedor hero__contenido">
        <p className="hero__saludo hero__entrada" style={{ '--retraso': '0ms' }}>
          {portada.etiqueta}
        </p>

        <h1 className="hero__titulo hero__entrada" style={{ '--retraso': '120ms' }}>
          {portada.titulo} <span className="hero__resaltado">{portada.titulo_resaltado}</span>
        </h1>

        <p className="hero__texto hero__entrada" style={{ '--retraso': '240ms' }}>
          {portada.texto}
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
