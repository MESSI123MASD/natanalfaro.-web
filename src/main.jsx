import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import { leer } from './lib/contenido'
import { aplicarTema } from './lib/tema'
import { vistaPreviaActiva, cargarBorrador } from './lib/vistaPrevia'

async function iniciar() {
  // Vista previa: antes de dibujar, trae el contenido de la rama "borrador" de GitHub
  if (vistaPreviaActiva()) {
    try {
      window.__BORRADOR__ = await cargarBorrador()
    } catch (error) {
      window.__BORRADOR__ = { error: error.message, contenido: {} }
    }
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex'
    document.head.appendChild(robots)
  }

  aplicarTema(leer('tema'))

  // App se importa después, para que todos los datos ya lean el contenido correcto
  const { default: App } = await import('./App.jsx')
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  )
}

iniciar()
