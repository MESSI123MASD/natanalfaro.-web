import { portada } from '../data/contenido'
import { redesDestacadas } from '../data/site'
import Icono from './Icono'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__fondo" aria-hidden="true">
        <span className="hero__brillo" />
        <span className="hero__rejilla" />
      </div>

      <div className="contenedor hero__grid">
        <div className="hero__contenido">
          <p className="hero__saludo hero__entrada" style={{ '--retraso': '0ms' }}>
            {portada.etiqueta}
          </p>

          <h1 className="hero__titulo hero__entrada" style={{ '--retraso': '100ms' }}>
            {portada.nombre}
          </h1>

          {portada.frase && (
            <p className="hero__frase hero__entrada" style={{ '--retraso': '200ms' }}>
              {portada.frase}
            </p>
          )}

          <p className="hero__texto hero__entrada" style={{ '--retraso': '300ms' }}>
            {portada.texto}
          </p>

          {/* Acceso inmediato a sus redes: lo más importante para el pastor */}
          {redesDestacadas.length > 0 && (
            <ul className="hero__redes hero__entrada" style={{ '--retraso': '400ms' }} aria-label="Redes sociales">
              {redesDestacadas.map((r) => (
                <li key={r.nombre}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="hero__red">
                    <Icono nombre={r.icono} tamano={20} />
                    <span>{r.nombre}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="hero__acciones hero__entrada" style={{ '--retraso': '500ms' }}>
            <a href="#vida-bendecida" className="boton boton--primario">Recibe Vida Bendecida</a>
            <a href="#invitaciones" className="boton boton--secundario">
              <Icono nombre="calendario" tamano={18} /> Invitaciones y agenda
            </a>
          </div>
        </div>

        {portada.foto && (
          <div className="hero__foto hero__entrada" style={{ '--retraso': '150ms' }}>
            <div className="hero__marco">
              <img src={portada.foto} alt={`${portada.nombre}`} width="900" height="900" fetchpriority="high" />
            </div>
          </div>
        )}
      </div>

      <a href="#redes" className="hero__bajar" aria-label="Bajar">
        <span />
      </a>
    </section>
  )
}
