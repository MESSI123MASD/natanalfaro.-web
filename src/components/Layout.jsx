import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Al cambiar de ruta: si hay #ancla, baja a esa sección; si no, sube al inicio.
function DesplazamientoAutomatico() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function Layout() {
  return (
    <>
      <a href="#contenido" className="saltar-contenido">Saltar al contenido</a>
      <DesplazamientoAutomatico />
      <Header />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
