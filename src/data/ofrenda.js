// Datos de la página "Ofrenda y Diezmo". Se editan en src/content/ofrenda.json
// (o desde el panel). Si una lista está vacía, ese bloque no se muestra y se invita a escribir por WhatsApp.
import datos from '../content/ofrenda.json'

export const ofrenda = {
  ...datos,
  cuentas: (datos.cuentas || []).filter((c) => c.banco && c.cuenta),
  enLinea: (datos.enLinea || []).filter((m) => m.nombre && m.url),
}
