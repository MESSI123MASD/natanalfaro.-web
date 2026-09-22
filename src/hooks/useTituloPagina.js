import { useEffect } from 'react'
import { sitio } from '../data/site'

// Cambia el <title> de la pestaña según la página.
export default function useTituloPagina(titulo) {
  useEffect(() => {
    document.title = titulo ? `${titulo} | ${sitio.nombre}` : `${sitio.nombre} | Casa de Mi Gloria`
  }, [titulo])
}
