import { Link } from 'react-router-dom'
import { t } from '../lib/idioma'
import useTituloPagina from '../hooks/useTituloPagina'

export default function NoEncontrada() {
  useTituloPagina(t('Página no encontrada', 'Page not found'))

  return (
    <section className="seccion pagina">
      <div className="contenedor" style={{ textAlign: 'center' }}>
        <h1>{t('Página no encontrada', 'Page not found')}</h1>
        <p>{t('La página que buscas no existe o cambió de lugar.', 'The page you are looking for does not exist or has moved.')}</p>
        <Link to="/" className="boton boton--primario">{t('Volver al inicio', 'Back to home')}</Link>
      </div>
    </section>
  )
}
