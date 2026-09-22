import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navegacion, sitio } from '../data/site'
import './Header.css'

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const { pathname } = useLocation()

  const cerrar = () => setAbierto(false)

  return (
    <header className="header">
      <div className="contenedor header__barra">
        <Link to="/" className="header__logo" onClick={cerrar}>
          <img
            src="/img/logo.png"
            alt=""
            className="header__logo-img"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <span>{sitio.nombre}</span>
        </Link>

        <button
          className="header__toggle"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setAbierto(!abierto)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="menu-principal" className={`header__nav ${abierto ? 'is-abierto' : ''}`}>
          <ul>
            {navegacion.map((item) => (
              <li key={item.ruta}>
                <Link
                  to={item.ruta}
                  onClick={cerrar}
                  aria-current={pathname === item.ruta ? 'page' : undefined}
                >
                  {item.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
