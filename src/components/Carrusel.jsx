import { useCallback, useEffect, useRef, useState } from 'react'
import { galeria } from '../data/contenido'
import { t } from '../lib/idioma'
import Icono from './Icono'
import './Carrusel.css'

const DURACION = 6000 // milisegundos por foto

// Carrusel de fotos: transición suave con zoom lento (efecto cine), barras de progreso,
// flechas, deslizar con el dedo y teclado. Se pausa al pasar el mouse o si no está en pantalla.
export default function Carrusel() {
  const fotos = galeria.fotos
  const total = fotos.length
  const [actual, setActual] = useState(0)
  const [pausado, setPausado] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const toque = useRef(null)

  const ir = useCallback((n) => setActual(((n % total) + total) % total), [total])

  // Solo avanza cuando el carrusel está en pantalla
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setVisible(true)
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const sinMovimiento = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const corriendo = visible && !pausado && !sinMovimiento && total > 1

  useEffect(() => {
    if (!corriendo) return
    const id = setTimeout(() => ir(actual + 1), DURACION)
    return () => clearTimeout(id)
  }, [actual, corriendo, ir])

  if (total === 0) return null

  const alSoltar = (e) => {
    if (toque.current === null) return
    const dx = e.changedTouches[0].clientX - toque.current
    if (Math.abs(dx) > 40) ir(actual + (dx < 0 ? 1 : -1))
    toque.current = null
  }

  return (
    <section className="carrusel-seccion" aria-label={galeria.titulo || t('Galería', 'Gallery')}>
      <div className="contenedor revelar">
        <div
          ref={ref}
          className={`carrusel ${corriendo ? 'is-corriendo' : ''}`}
          style={{ '--duracion': `${DURACION}ms` }}
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onTouchStart={(e) => (toque.current = e.touches[0].clientX)}
          onTouchEnd={alSoltar}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') ir(actual + 1)
            if (e.key === 'ArrowLeft') ir(actual - 1)
          }}
          tabIndex={0}
          role="region"
          aria-roledescription="carrusel"
        >
          {fotos.map((f, i) => (
            <figure
              key={f.imagen}
              className={`carrusel__foto ${i === actual ? 'is-activa' : ''}`}
              aria-hidden={i !== actual}
            >
              <img
                src={f.imagen}
                alt={f.texto || ''}
                loading={i === 0 ? 'eager' : 'lazy'}
                style={f.posicion ? { objectPosition: f.posicion } : undefined}
              />
              {f.texto && (
                <figcaption>
                  <span className="carrusel__numero">{String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
                  <span className="carrusel__texto">{f.texto}</span>
                </figcaption>
              )}
            </figure>
          ))}

          <span className="carrusel__etiqueta">{galeria.titulo || t('Galería', 'Gallery')}</span>

          {total > 1 && (
            <>
              <button type="button" className="carrusel__flecha carrusel__flecha--atras" onClick={() => ir(actual - 1)} aria-label={t('Foto anterior', 'Previous photo')}>
                <Icono nombre="flecha" tamano={20} />
              </button>
              <button type="button" className="carrusel__flecha carrusel__flecha--adelante" onClick={() => ir(actual + 1)} aria-label={t('Foto siguiente', 'Next photo')}>
                <Icono nombre="flecha" tamano={20} />
              </button>

              <div className="carrusel__barras">
                {fotos.map((f, i) => (
                  <button
                    key={f.imagen}
                    type="button"
                    className={`carrusel__barra ${i === actual ? 'is-activa' : ''} ${i < actual ? 'is-vista' : ''}`}
                    onClick={() => ir(i)}
                    aria-label={`${t('Ver foto', 'Show photo')} ${i + 1}`}
                    aria-current={i === actual}
                  >
                    <span key={i === actual ? `a${actual}` : i} />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
