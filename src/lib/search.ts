import { BLOG_DESCRIPTION, EXPERIENCE_DESCRIPTION, PROJECTS_DESCRIPTION, TAGS_DESCRIPTION } from '@/lib/site';

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
      'Meet julljoll and the SHA256.US venture, focused on mobile-device repair, data extraction, and digital evidence analysis.',
    tags: [],
    body: 'julljoll profile and SHA256.US venture. Mobile-device repair, data extraction, digital forensics, electronic documents, legal data analysis, and compliance support.',
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
    title: 'Experience',
    description: EXPERIENCE_DESCRIPTION,
    tags: ['career', 'resume', 'work'],
    body: 'Experience will be added here.',
    url: '/experience/',
  },
  {
    title: 'Projects',
    description: PROJECTS_DESCRIPTION,
    tags: ['portfolio', 'open source', 'code'],
    body: 'Projects will be added here.',
    url: '/projects/',
  },
];

export const PAGE_SEARCH_ENTRIES_ES: SearchEntry[] = [
  {
    title: 'Inicio',
    description:
      'Perfil de julljoll y su emprendimiento SHA256.US: reparación, extracción y análisis forense de dispositivos y evidencia digital.',
    tags: [],
    body: 'Perfil de julljoll y emprendimiento SHA256.US. Reparación y extracción de datos de dispositivos móviles, informática forense, documentos electrónicos, análisis de datos jurídicos y soporte de cumplimiento.',
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
    title: 'Experiencia',
    description: 'Un poco sobre las experiencias detrás de este sitio.',
    tags: ['carrera', 'trabajo'],
    body: 'Aquí aparecerá la experiencia.',
    url: '/experience/',
  },
  {
    title: 'Proyectos',
    description: 'Una colección de proyectos y experimentos.',
    tags: ['portafolio', 'código'],
    body: 'Aquí aparecerán los proyectos.',
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
