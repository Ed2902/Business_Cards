const cards = [
  // === GREENWAY: Gian Carlo ===
  {
    slug: 'gian-carlo-avendano',
    person: {
      name: 'Gian Carlo Avendaño',
      title: 'Líder de Innovación',
      company: 'GreenWay International',
      avatarUrl: null,
    },
    brand: {
      logoUrl: './Green.png',
      theme: 'greenway',
      gradient: 'brand-135',
    },
    about:
      'Impulsamos comercio seguro con soluciones de brokeraje, análisis de mercados e innovación tecnológica. Desarrollamos estrategias digitales y herramientas que optimizan la conexión entre empresas y mercados internacionales, fortaleciendo la eficiencia, la sostenibilidad y el crecimiento global.',
    contact: {
      phone: '+1 (786) 661-0046',
      email: 'gcavendano@fastwaysas.com',
      whatsapp: '+1 786 661 0046',
      greeting:
        '¡Hola Gian Carlo! Quiero conocer las soluciones de brokeraje, análisis de mercados y tecnología de GreenWay.',
    },
    socials: {
      web: 'https://www.greenwayinter.com/',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram: 'https://www.instagram.com/greenwayllc/',
      linkedin: 'https://es.linkedin.com/company/fastway-sas',
    },
  },

  // === GREENWAY: Gina ===
  {
    slug: 'gina-sanchez',
    person: {
      name: 'Gina Sánchez',
      title: 'Gerente General',
      company: 'GreenWay International',
      avatarUrl: null,
    },
    brand: {
      logoUrl: './Green.png',
      theme: 'greenway',
      gradient: 'brand-90',
    },
    about:
      'Lideramos operaciones internacionales confiables y sostenibles, integrando brokeraje, análisis de mercados y tecnología aplicada. A través de innovación, inteligencia comercial y soluciones digitales, conectamos empresas con nuevas oportunidades globales de manera ágil y segura.',
    contact: {
      phone: '+57 318 212 3378',
      email: 'gsanchez@fastwaysas.com',
      whatsapp: '+57 318 212 3378',
      greeting:
        'Hola Gina, me interesa conocer las soluciones tecnológicas y de brokeraje de GreenWay para expansión internacional.',
    },
    socials: {
      web: 'https://www.greenwayinter.com/',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram: 'https://www.instagram.com/greenwayllc/',
      linkedin: 'https://es.linkedin.com/company/fastway-sas',
    },
  },

  // ================= FASTWAY =================

  {
    slug: 'gian-carlo-avendano-fastway',
    person: {
      name: 'Gian Carlo Avendaño',
      title: 'Líder de Innovación',
      company: 'Fast Way Logistic SAS, BIC',
      avatarUrl: null,
    },
    brand: {
      logoUrl: './Fastway.png',
      theme: 'fastway',
    },
    about:
      'Somos una empresa dedicada a la logística y al comercio internacional. Diseñamos soluciones integrales para pequeños y medianos empresarios que quieren incursionar en mercados internacionales, expandir y escalar sus negocios, transportar eficientemente sus mercancías y establecer sistemas de distribución efectivos, con un enfoque consultivo y personalizado.',
    contact: {
      phone: '+1 (786) 661-0046',
      email: 'gcavendano@fastwaysas.com',
      whatsapp: '+1 786 661 0046',
      greeting:
        '¡Hola Gian Carlo! Busco asesoría en logística internacional y comercio exterior con Fastway para expandir mi negocio.',
    },
    socials: {
      web: 'https://www.fastwaysas.com/es',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram: 'https://www.instagram.com/fastwaybic/',
      linkedin: 'https://www.linkedin.com/company/fastway-sas/',
    },
  },

  {
    slug: 'gina-sanchez-fastway',
    person: {
      name: 'Gina Sánchez',
      title: 'Gerente General',
      company: 'Fast Way Logistic SAS, BIC',
      avatarUrl: null,
    },
    brand: {
      logoUrl: './Fastway.png',
      theme: 'fastway',
    },
    about:
      'Gestionamos logística internacional, logística nacional y comercio exterior, integrando además soluciones de logística circular. optimizando la cadena de valor de importaciones y exportaciones.',
    contact: {
      phone: '+57 318 212 3378',
      email: 'gsanchez@fastwaysas.com',
      whatsapp: '+57 318 212 3378',
      greeting:
        'Hola Gina, quiero conocer cómo Fastway puede apoyar la logística internacional y la logística circular de mi empresa.',
    },
    socials: {
      web: 'https://www.fastwaysas.com/es',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram: 'https://www.instagram.com/fastwaybic/',
      linkedin: 'https://www.linkedin.com/company/fastway-sas/',
    },
  },

  // ================= GROUP =================

  {
    slug: 'gina-sanchez-group',
    person: {
      name: 'Gina Sánchez',
      title: 'Gerente General',
      company: '',
      avatarUrl: './Gina.png',
    },
    brand: {
      logoUrl: './Fastway.png',
      theme: 'group',
      supportLogos: [{ url: './Green.png' }, { url: './Harvest.webp' }],
    },
    about:
      'Somos un grupo de empresas que impulsa el desarrollo del bienestar integrando soluciones tecnológicas, comerciales y sostenibles, con servicios de logística internacional y economía circular.',
    contact: {
      phone: '+57 318 212 3378',
      email: 'gsanchez@fastwaysas.com',
      whatsapp: '+57 318 212 3378',
      greeting:
        'Hola Gina, quiero conocer las soluciones y oportunidades que ofrece el Group.',
    },
    socials: {
      web: 'https://www.fastwaysas.com/',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram: 'https://www.instagram.com/fastwaybic/',
      linkedin: 'https://www.linkedin.com/company/fastway-sas/',
    },
  },

  {
    slug: 'eliana-puentes-group',
    person: {
      name: 'Eliana Puentes Perilla',
      title: 'Asistente de gerencia',
      company: '',
      avatarUrl: './Eliana.png',
    },
    brand: {
      logoUrl: './Fastway.png',
      theme: 'group',
      supportLogos: [
        { url: './Green.png', href: 'https://www.greenwayinter.com/' },
        { url: './Harvest.webp', href: 'https://metalharvest.io/' },
      ],
    },
    about:
      'Somos un grupo de empresas que impulsa el desarrollo del bienestar integrando soluciones tecnológicas, comerciales y sostenibles, con servicios de logística internacional y economía circular.',
    contact: {
      phone: '+57 320 321 4083',
      email: 'asistentecomercial@fastwaysas.com',
      whatsapp: '+57 320 321 4083',
      greeting:
        'Hola Eliana, deseo recibir información sobre los servicios y soluciones del grupo.',
    },
    socials: {
      web: 'https://www.fastwaysas.com/',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram: 'https://www.instagram.com/fastwaybic/',
      linkedin: 'https://www.linkedin.com/company/fastway-sas/',
    },
  },

  {
    slug: 'karen-gonzalez-group',
    person: {
      name: 'Karen Julieth Gonzalez Valencia',
      title: 'Analista agenciamiento de carga',
      company: '',
      avatarUrl: './karen.png',
    },
    brand: {
      logoUrl: './Fastway.png',
      theme: 'group',
      supportLogos: [
        { url: './Green.png', href: 'https://www.greenwayinter.com/' },
        { url: './Harvest.webp', href: 'https://metalharvest.io/' },
      ],
    },
    about:
      'Somos un grupo de empresas que impulsa el desarrollo del bienestar integrando soluciones tecnológicas, comerciales y sostenibles, con servicios de logística internacional y economía circular.',
    contact: {
      phone: '+57 314 300 2760',
      email: 'Insales2@fastwaysas.com',
      whatsapp: '+57 314 300 2760',
      greeting:
        'Hola Karen, deseo recibir información sobre los servicios y soluciones del grupo.',
    },
    socials: {
      web: 'https://www.fastwaysas.com/',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram: 'https://www.instagram.com/fastwaybic',
      linkedin: 'https://www.linkedin.com/company/fastway-sas/',
    },
  },

  {
    slug: 'andres-barrera-group',
    person: {
      name: 'Andres Felipe Barrera Rodriguez',
      title: 'Líder de Proyectos',
      company: '',
      avatarUrl: './AndresBarrera.png',
    },
    brand: {
      logoUrl: './Fastway.png',
      theme: 'group',
      supportLogos: [
        { url: './Green.png', href: 'https://www.greenwayinter.com/' },
        { url: './Harvest.webp', href: 'https://metalharvest.io/' },
      ],
    },
    about:
      'Somos un grupo de empresas que impulsa el desarrollo del bienestar integrando soluciones tecnológicas, comerciales y sostenibles, con servicios de logística internacional y economía circular.',
    contact: {
      phone: '+573028583784',
      email: 'proyectos@fastwaysas.com',
      whatsapp: '+573028583784',
      greeting:
        'Hola Andrés, deseo recibir información sobre los productos y soluciones para mi empresa.',
    },
    socials: {
      web: 'https://www.fastwaysas.com/',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram: 'https://www.instagram.com/fastwaybic',
      linkedin: 'https://www.linkedin.com/company/fastway-sas/',
    },
  },

  // === GROUP: Claudia Morales ===
  {
    slug: 'claudia-morales-group',
    person: {
      name: 'Claudia Morales',
      title: 'Ejecutiva comercial',
      company: '',
      avatarUrl: './claudia.webp',
    },
    brand: {
      logoUrl: './Fastway.png',
      theme: 'group',
      supportLogos: [
        { url: './Green.png', href: 'https://www.greenwayinter.com/' },
        { url: './Harvest.webp', href: 'https://metalharvest.io/' },
      ],
    },
    about:
      'Acompaño a los clientes desde la necesidad hasta la solución, construyendo relaciones de confianza y aportando valor para lograr negocios sostenibles.',
    contact: {
      phone: '+57 310 781 1985',
      email: 'ejecutivacomercial@fastwaysas.com',
      whatsapp: '+57 310 781 1985',
      greeting:
        'Hola Claudia, me gustaría recibir asesoría comercial y conocer las soluciones del grupo.',
    },
    socials: {
      web: 'https://www.fastwaysas.com/',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram: 'https://www.instagram.com/fastwaybic/',
      linkedin: 'https://www.linkedin.com/company/fastway-sas/',
    },
  },
]

export function getCards() {
  return cards
}

export function getCardBySlug(slug) {
  return cards.find(c => c.slug === slug)
}
