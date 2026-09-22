import { Link } from 'react-router-dom'
import useTituloPagina from '../hooks/useTituloPagina'

export default function NoEncontrada() {
  useTituloPagina('Página no encontrada')

  return (
    <section className="seccion">
      <div className="contenedor" style={{ textAlign: 'center' }}>
        <h1>Página no encontrada</h1>
        <p>La página que buscas no existe o cambió de lugar.</p>
        <Link to="/" className="boton boton--primario">Volver al inicio</Link>
      </div>
    </section>
  )
}
