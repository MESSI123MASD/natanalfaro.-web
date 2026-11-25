import { useEffect, useRef, useState } from 'react'
import { trayectoria } from '../data/contenido'
import './Trayectoria.css'

// Cuenta de 0 al número cuando la cifra aparece en pantalla
function Contador({ valor, prefijo }) {
  const ref = useRef(null)
  const final = Number(valor) || 0
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !('IntersectionObserver' in window) || sinMovimiento) {
      setN(final)
      return
    }
    let cuadro
    const obs = new IntersectionObserver(([entrada]) => {
      if (!entrada.isIntersecting) return
      obs.disconnect()
      const inicio = performance.now()
      const duracion = 1600
      const paso = (ahora) => {
        const avance = Math.min((ahora - inicio) / duracion, 1)
        setN(Math.round(final * (1 - Math.pow(1 - avance, 3))))
        if (avance < 1) cuadro = requestAnimationFrame(paso)
      }
      cuadro = requestAnimationFrame(paso)
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => {
      obs.disconnect()
      cancelAnimationFrame(cuadro)
    }
  }, [final])

  return (
    <span ref={ref} className="cifra__numero">
      {prefijo}
      {n.toLocaleString('es-NI')}
    </span>
  )
}

export default function Trayectoria() {
  if (trayectoria.length === 0) return null
  return (
    <section className="trayectoria" aria-label="Trayectoria">
      <div className="contenedor">
        <ul className="trayectoria__lista">
          {trayectoria.map((d, i) => (
            <li key={d.texto} className="cifra revelar" style={{ '--retraso': `${i * 90}ms` }}>
              <Contador valor={d.numero} prefijo={d.prefijo} />
              <span className="cifra__texto">{d.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
