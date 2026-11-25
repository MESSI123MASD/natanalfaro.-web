import './BotonModo.css'
import { cambiarIdioma, enIngles } from '../lib/idioma'

// ES / EN: cambia el idioma del sitio
export default function BotonIdioma() {
  return (
    <button
      type="button"
      className="boton-modo boton-idioma"
      onClick={() => cambiarIdioma(enIngles ? 'es' : 'en')}
      aria-label={enIngles ? 'Ver en español' : 'View in English'}
      title={enIngles ? 'Español' : 'English'}
      lang={enIngles ? 'es' : 'en'}
    >
      {enIngles ? 'ES' : 'EN'}
    </button>
  )
}
