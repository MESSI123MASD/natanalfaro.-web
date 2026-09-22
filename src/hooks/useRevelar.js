import { useEffect } from 'react'

// Hace aparecer suavemente los elementos con la clase "revelar" cuando entran en pantalla.
// Se vuelve a ejecutar al cambiar de página (dependencia: la ruta).
export default function useRevelar(ruta) {
  useEffect(() => {
    const elementos = document.querySelectorAll('.revelar:not(.es-visible)')

    // Navegadores sin soporte o usuarios con "reducir movimiento": mostrar todo de una vez
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('IntersectionObserver' in window) || sinMovimiento) {
      elementos.forEach((el) => el.classList.add('es-visible'))
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('es-visible')
            observador.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elementos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [ruta])
}
