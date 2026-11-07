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
    body: 'Jull Ortiz. Law degree, UNELLEZ, Barinas (2005-2010); design, Mentors4EDU (2022-2024). SUSCERTE Basic Foundations of Digital Forensics, 16 hours (Feb 2026); IBM SkillsBuild Cybersecurity Fundamentals, User Experience Design Fundamentals, AI Fundamentals, Career Management Essentials; Coursera patent research, Agile project management with Google, Figma high-fidelity prototyping, Miro Agile prototype analysis. User-Centered Design (UCD), AIDAR model, Figma, Klaviyo, social content, conversion landing pages, email marketing, image retouching, video editing. Graphic designer: SinnerArt (2022-2023), Virtual Engine Marketing (2024-2026). Forensic qualifications and expert report admissibility depend on local requirements.',
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
    description:
      'Perfil de Jull Ortiz: formación en Derecho e informática forense, credenciales verificables y experiencia en diseño digital.',
    tags: ['trayectoria', 'formación', 'trabajo'],
    body: 'Jull Ortiz. Licenciatura en Derecho, UNELLEZ, Barinas (2005-2010); Diseño, Mentors4EDU (2022-2024). Fundamentos Básicos de la Informática Forense, SUSCERTE, 16 horas (feb 2026); IBM SkillsBuild: Cybersecurity Fundamentals, User Experience Design Fundamentals, AI Fundamentals, Career Management Essentials; Coursera: búsqueda de patentes, gestión Agile con Google, prototipos de alta fidelidad en Figma, análisis de prototipos Agile en Miro. Diseño centrado en las personas (UCD), modelo AIDAR, Figma, Klaviyo, contenido para redes sociales, landing pages, email marketing, retoque de imágenes y edición de vídeo. Diseñador gráfico: SinnerArt (2022-2023), Virtual Engine Marketing (2024-2026). La formación no habilita por sí sola para ejercer como perito y la admisibilidad depende de cada jurisdicción.',
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
