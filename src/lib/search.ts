import { ABOUT_DESCRIPTION, BLOG_DESCRIPTION, TAGS_DESCRIPTION } from '@/lib/site';

export type SearchEntry = {
  title: string;
  description: string;
  tags: string[];
  body: string;
  url: string;
};

export const PAGE_SEARCH_ENTRIES_EN: SearchEntry[] = [
  {
    title: 'Home',
    description:
      'Project areas at SHA256.US: mobile devices, digital evidence, electronic documents, and digital forensics.',
    tags: [],
    body: 'Mobile devices, repair, data extraction, digital evidence, electronic documents, metadata, contracts, digital forensics, legal information analysis, compliance and digital documentation.',
    url: '/',
  },
  {
    title: 'Blog',
    description: BLOG_DESCRIPTION,
    tags: [],
    body: 'All blog posts.',
    url: '/blog/',
  },
  {
    title: 'Tags',
    description: TAGS_DESCRIPTION,
    tags: [],
    body: 'Browse blog posts by tag.',
    url: '/tags/',
  },
  {
    title: 'About me',
    description: ABOUT_DESCRIPTION,
    tags: ['career', 'education', 'work'],
    body: 'Law degree at Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora, Barinas (2005-2010). Design at Mentors4EDU (2022-2024). Graphic design, visual identity, email campaigns, image retouching, video editing, user-centered design, experience research and testing. Forensic qualifications and expert report admissibility depend on local requirements.',
    url: '/experience/',
  },
  {
    title: 'Projects',
    description: 'Projects in digital forensics, compliance, legal analysis, and digital evidence.',
    tags: ['portfolio', 'open source', 'code'],
    body: 'Compliance Forensic, Ulpiano Chief Compliance Officer, JullBrain Legal-RAG, FotoForense PhotoHolmes, and IPED_SHA256.US.',
    url: '/projects/',
  },
];

export const PAGE_SEARCH_ENTRIES_ES: SearchEntry[] = [
  {
    title: 'Inicio',
    description:
      'Áreas del proyecto SHA256.US: dispositivos móviles, evidencia digital, documentos electrónicos e informática forense.',
    tags: [],
    body: 'Dispositivos móviles, reparación, extracción de información, evidencia digital, documentos electrónicos, metadatos, contratos, informática forense, análisis de información legal, cumplimiento y documentación digital.',
    url: '/',
  },
  {
    title: 'Blog',
    description: 'Notas, ideas y cosas que vale la pena compartir',
    tags: [],
    body: 'Todas las publicaciones del blog.',
    url: '/blog/',
  },
  {
    title: 'Etiquetas',
    description: 'Artículos agrupados por etiqueta',
    tags: [],
    body: 'Explora las publicaciones por etiqueta.',
    url: '/tags/',
  },
  {
    title: 'Sobre mí',
    description: 'Formación, trayectoria y competencias que complementan mi trabajo en informática forense.',
    tags: ['trayectoria', 'formación', 'trabajo'],
    body: 'Licenciatura en Derecho en la Universidad Nacional Experimental de los Llanos Occidentales Ezequiel Zamora, Barinas (2005-2010). Diseño en Mentors4EDU (2022-2024). Diseño gráfico, identidad visual, campañas de correo, retoque de imágenes, edición de vídeo, diseño centrado en las personas, investigación y pruebas de experiencia de usuario. La habilitación pericial y admisibilidad de dictámenes dependen de cada jurisdicción.',
    url: '/experience/',
  },
  {
    title: 'Proyectos',
    description: 'Proyectos de informática forense, cumplimiento, análisis legal y evidencia digital.',
    tags: ['portafolio', 'código'],
    body: 'Compliance Forensic, Ulpiano Chief Compliance Officer, JullBrain Legal-RAG, FotoForense PhotoHolmes e IPED_SHA256.US.',
    url: '/projects/',
  },
  {
    title: 'Bienvenida al sitio',
    description: 'Un recorrido breve por este sitio personal y su tema de colores estacionales.',
    tags: ['Guía', 'Astro'],
    body: 'Este sitio está construido con Astro y el tema Astro Seasons. El diseño cambia de paleta según la estación. Puedes elegir colores y cambiar el idioma.',
    url: '/blog/bienvenida/',
  },
];
