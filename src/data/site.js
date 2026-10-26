// Datos del negocio. Solo información confirmada: lo que esté vacío no se muestra.
export const SITE = {
  name: 'Génesis Cuba',
  tagline: 'Búsquedas genealógicas',
  description:
    'Buscamos en Cuba los documentos de tus antepasados y te los enviamos en PDF a tu correo. Solo pagas después de recibirlos.',

  email: 'genesiscuba@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61566462497212',
  messenger: 'https://www.facebook.com/messages/t/61566462497212',
  whatsapp: '', // PENDIENTE: solo dígitos, con prefijo de país
}

export const STEPS = [
  {
    title: 'Envíanos tu información',
    text: 'Cuéntanos los nombres, fechas, lugares y el documento que estás buscando.',
  },
  {
    title: 'Realizamos la búsqueda en Cuba',
    text: 'Buscamos en el Registro Civil cubano para encontrar la información.',
  },
  {
    title: 'Evaluamos el resultado',
    text: 'Una vez que tenemos la información, valoramos si podemos obtener el documento o no, y te lo decimos.',
  },
  {
    title: 'Recibes el PDF y luego pagas',
    text: 'Te enviamos el documento en PDF a tu correo electrónico. Solo pagas después de recibirlo.',
  },
]

export const GUARANTEES = [
  {
    icon: 'ShieldCheck',
    title: 'Sin pago por adelantado',
    text: 'No cobramos por adelantado. Pagas únicamente después de recibir el documento.',
  },
  {
    icon: 'Search',
    title: 'Investigación experta',
    text: 'Especialistas en genealogía cubana, con experiencia y compromiso.',
  },
  {
    icon: 'Mail',
    title: 'Envío digital',
    text: 'Te enviamos el documento en PDF directamente a tu correo electrónico.',
  },
  {
    icon: 'Lock',
    title: 'Confianza y confidencialidad',
    text: 'Tu información está segura con nosotros. Trabajamos con total discreción.',
  },
]

export const FAQS = [
  {
    question: '¿Tengo que pagar algo antes de la búsqueda?',
    answer: 'No. No cobramos nada por adelantado: pagas solo después de recibir el documento en PDF.',
  },
  {
    question: '¿Qué datos necesitan para buscar?',
    answer:
      'Los nombres de la persona, fechas y lugares aproximados, y qué documento estás buscando. Cuantos más datos nos des, más fácil será encontrarlo.',
  },
  {
    question: '¿Y si no encuentran el documento?',
    answer:
      'Después de buscar evaluamos si podemos obtenerlo y te lo decimos. Como solo se paga al recibir el documento, si no lo conseguimos no pagas nada.',
  },
  {
    question: '¿Cómo recibo el documento?',
    answer: 'En formato PDF, directamente en tu correo electrónico.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Sí. Usamos tu información solo para hacer la búsqueda y la tratamos con total confidencialidad.',
  },
]
