import { ofrenda } from '../data/ofrenda'
import { contacto } from '../data/site'
import useTituloPagina from '../hooks/useTituloPagina'
import { t } from '../lib/idioma'
import './Ofrenda.css'

export default function Ofrenda() {
  useTituloPagina(ofrenda.titulo)
  const sinMetodos = ofrenda.cuentas.length === 0 && ofrenda.enLinea.length === 0

  return (
    <section className="seccion pagina">
      <div className="contenedor ofrenda revelar">
        <span className="seccion__etiqueta">{t('Sembrar en la obra', "Sow into God's work")}</span>
        <h1>{ofrenda.titulo}</h1>
        <p className="ofrenda__intro">{ofrenda.intro}</p>

        <blockquote className="ofrenda__versiculo">
          “{ofrenda.versiculo.texto}” <cite>{ofrenda.versiculo.cita}</cite>
        </blockquote>

        {ofrenda.enLinea.length > 0 && (
          <div className="ofrenda__bloque">
            <h2>{t('En línea', 'Online')}</h2>
            <div className="ofrenda__botones">
              {ofrenda.enLinea.map((m) => (
                <a key={m.nombre} href={m.url} target="_blank" rel="noopener noreferrer" className="boton boton--primario">
                  {t('Ofrendar con', 'Give with')} {m.nombre}
                </a>
              ))}
            </div>
          </div>
        )}

        {ofrenda.cuentas.length > 0 && (
          <div className="ofrenda__bloque">
            <h2>{t('Transferencia bancaria', 'Bank transfer')}</h2>
            <div className="ofrenda__cuentas">
              {ofrenda.cuentas.map((c) => (
                <dl key={c.banco + c.cuenta} className="cuenta">
                  <dt>{t('Banco', 'Bank')}</dt><dd>{c.banco}</dd>
                  <dt>{t('Titular', 'Account holder')}</dt><dd>{c.titular}</dd>
                  <dt>{t('Cuenta', 'Account')}</dt><dd>{c.cuenta}</dd>
                  <dt>{t('Moneda', 'Currency')}</dt><dd>{c.moneda}</dd>
                </dl>
              ))}
            </div>
          </div>
        )}

        <div className="ofrenda__bloque ofrenda__ayuda">
          <h2>{sinMetodos ? t('¿Cómo ofrendar?', 'How to give') : t('¿Tienes dudas?', 'Questions?')}</h2>
          <p>
            {sinMetodos
              ? t('Escríbenos y con gusto te compartimos las opciones disponibles para ofrendar.', 'Write to us and we will gladly share the available ways to give.')
              : t('Escríbenos y te ayudamos con tu ofrenda.', 'Write to us and we will help you with your offering.')}
          </p>
          <a
            href={`${contacto.whatsapp}?text=${encodeURIComponent(t('Hola, quiero información para ofrendar', 'Hello, I would like information about giving'))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="boton boton--primario"
          >
            {t('Escribir por WhatsApp', 'Message on WhatsApp')}
          </a>
        </div>
      </div>
    </section>
  )
}
