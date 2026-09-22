// Textos de las secciones del inicio.
// Tomados del sitio anterior (sin el texto de plantilla). REVISAR con el equipo del pastor
// antes de publicar: fechas, cargos y datos familiares pueden haber cambiado.

export const biografia = {
  titulo: 'Soy Natán Alfaro',
  imagen: '/img/natan-y-cristina.png',
  parrafos: [
    'Pastor y fundador, junto a mi esposa Cristina, de la iglesia Casa de Mi Gloria en Managua, Nicaragua. Me gradué en Teología de Southwestern Assemblies of God University (SAGU), en Texas, en 1994.',
    'Dirijo el programa radial Faro del Espíritu y el Centro de Capacitación El Faro. Con Cristina fundamos el ministerio matrimonial Defensores del Pacto y el Congreso Enamorados, y dirigimos el Centro Infantil Acahualinca, Lighthouse Christian Academy, la Escuela de Formación de Obreros y el Centro de Entrenamiento Ministerial Managua.',
    'Somos padres de Alexa Nicole, Emily Briana, Isabela Sophia y Lucas Nathanael.',
  ],
}

export const mision =
  'Apasionados por cumplir el sueño de Dios para Nicaragua, hemos creado iglesias, desarrollado proyectos, ministerios y programas con el objetivo de que cada persona pueda conocer a Jesucristo, encontrar salvación en Él, que su vida sea transformada y alcance el propósito por el cual ha sido diseñada.'

export const ministerios = [
  {
    nombre: 'Casa de Mi Gloria',
    descripcion:
      'Somos una iglesia Cristocéntrica: nos enfocamos en una relación con Dios, no en una religión. Nuestra misión es ser instrumento de Jesús para impactar cada vida y alcanzar cada alma de esta nación.',
    imagen: '/img/ministerios/casa-de-mi-gloria.jpg',
    enlace: 'https://casademigloria.org',
  },
  {
    nombre: 'Faro del Espíritu',
    descripcion:
      'Programa radial cuya base fundamental es la Biblia, con diversidad de temas para alimentar tu vida espiritual.',
    imagen: '/img/ministerios/faro-del-espiritu.jpg',
    enlace: 'https://farodelespiritu.com/',
  },
  {
    nombre: 'Centro de Capacitación El Faro',
    descripcion:
      'Espacio para eventos cristianos con auditorio para 250 personas, salones con aire acondicionado y apartamentos con servicio de lavandería, en una zona céntrica de Managua.',
    imagen: '/img/ministerios/centro-el-faro.jpg',
  },
  {
    nombre: 'Centro de Entrenamiento Ministerial Managua',
    descripcion:
      'Centro integrado con Global University que brinda capacitación teológica para fortalecer tu servicio en la obra del Señor.',
    imagen: '/img/ministerios/centro-entrenamiento.jpg',
  },
  {
    nombre: 'Escuela de Formación de Obreros',
    descripcion:
      'Internado para jóvenes con llamado al servicio de Dios, formados para cumplir la visión de Casa de Mi Gloria de ganar personas para Cristo.',
    imagen: '/img/ministerios/escuela-obreros.jpg',
  },
  {
    nombre: 'Lighthouse Christian Academy',
    descripcion:
      'Academia nacida de la necesidad de formar hombres y mujeres con valores cristianos, con aprendizaje activo, enfoque constructivista y atención individualizada.',
    imagen: '/img/ministerios/lighthouse.jpg',
    enlace: 'https://www.facebook.com/LighthouseChristianAcademy/',
  },
  {
    nombre: 'Centro Infantil Acahualinca',
    descripcion:
      'Brinda educación y alimentación física y espiritual a los niños de Acahualinca, una de las comunidades más pobres de Nicaragua. Cada semana se benefician 200 niños, y tú puedes ser parte.',
    imagen: '/img/ministerios/acahualinca.jpg',
    enlace: 'https://www.facebook.com/ElCentroInfantil/',
  },
  {
    nombre: 'Congreso Enamorados',
    descripcion:
      'Congreso anual para desarrollar matrimonios indestructibles y fortalecer la relación de los cónyuges bajo el modelo bíblico, con Dios en el centro.',
    imagen: '/img/ministerios/congreso-enamorados.jpg',
  },
]

export const vidaBendecida = {
  imagen: '/img/vida-bendecida.jpg',
  intro:
    'Recibe a diario en tu celular reflexiones y consejos a la luz de la Palabra de Dios, de parte del Pastor Natán Alfaro.',
  canales: [
    {
      nombre: 'WhatsApp',
      texto: 'Envía "Vida Bendecida" al +505 8881 8881. Tu número se usará solo para mensajes del pastor.',
      url: 'https://wa.me/50588818881?text=Vida%20Bendecida',
      boton: 'Suscribirme por WhatsApp',
    },
    {
      nombre: 'Telegram',
      texto: 'Únete al canal y recibe cada reflexión en cuanto se publica.',
      url: 'https://t.me/VidaBendecida',
      boton: 'Unirme en Telegram',
    },
    {
      nombre: 'YouTube',
      texto: 'Mensajes, series y planes de lectura de cada año.',
      url: 'https://www.youtube.com/channel/UCtJO0gSt8SCOkijxKb264Cg?sub_confirmation=1',
      boton: 'Suscribirme en YouTube',
    },
  ],
  redes: [
    { nombre: 'Facebook', url: 'https://www.facebook.com/UnaVidaBendecida' },
    { nombre: 'Instagram', url: 'https://www.instagram.com/vida.bendecida/' },
    { nombre: 'X (Twitter)', url: 'https://twitter.com/vida_bendecida' },
  ],
}

// Eventos: agrega uno por objeto. Si la lista está vacía, la sección no se muestra.
// Formato de fecha: 'AAAA-MM-DD'.
export const eventos = [
  // { titulo: 'Congreso Enamorados 2026', fecha: '2026-11-14', lugar: 'Casa de Mi Gloria, Managua', descripcion: '...', enlace: '' },
]

// Testimonios reales (el sitio viejo solo tenía textos de ejemplo).
// Si la lista está vacía, la sección no se muestra.
export const testimonios = [
  // { nombre: 'Nombre Apellido', lugar: 'Managua', texto: '...' },
]
