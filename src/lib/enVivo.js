// ¿Está el pastor en vivo ahora? Según el panel: "encendido", "apagado" o "automatico"
// (automático = durante los horarios de culto, en hora de Nicaragua).
const DIAS = { domingo: 0, lunes: 1, martes: 2, miercoles: 3, jueves: 4, viernes: 5, sabado: 6 }
const sinAcentos = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

// "8:00 am" -> minutos desde la medianoche
export function aMinutos(hora) {
  const m = sinAcentos(hora).match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm|md|m)?/)
  if (!m) return null
  let h = Number(m[1]) % 12
  if (m[3] === 'pm') h += 12
  if (m[3] === 'md' || m[3] === 'm') h = 12
  if (!m[3] && Number(m[1]) >= 12) h = Number(m[1])
  return h * 60 + Number(m[2] || 0)
}

export function estaEnVivo(iglesia, ahora = new Date()) {
  const vivo = iglesia?.en_vivo || {}
  if (vivo.modo === 'encendido') return true
  if (vivo.modo !== 'automatico') return false

  // Nicaragua está en UTC-6 todo el año (sin horario de verano)
  const ni = new Date(ahora.getTime() - 6 * 60 * 60 * 1000)
  const dia = ni.getUTCDay()
  const minutos = ni.getUTCHours() * 60 + ni.getUTCMinutes()
  const duracion = Number(vivo.duracion_minutos) || 100

  return (iglesia.horarios || []).some((h) => {
    if (DIAS[sinAcentos(h.dia).trim()] !== dia) return false
    return (h.horas || []).some((hora) => {
      const inicio = aMinutos(hora)
      return inicio !== null && minutos >= inicio - 5 && minutos <= inicio + duracion
    })
  })
}
