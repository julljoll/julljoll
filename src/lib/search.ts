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
      'Data & AI Analyst specializing in Governed AI (legal, forensics, and compliance). SHA256.US focus areas: mobile devices, digital evidence, electronic documents, and digital forensics.',
    tags: ['Governed AI', 'IBM', 'Oracle', 'Digital Forensics'],
    body: 'Jull Ortiz. Data & AI Analyst, Governed AI, On-Premise AI, IBM, Oracle, Explainable AI (XAI), RAG, Document Intelligence, Data Governance, Chain of Custody, SHA256.US, mobile devices, repair, data extraction, digital evidence, electronic documents, metadata, contracts, digital forensics, legal analysis, compliance and technical documentation.',
    url: '/',
  },
  {
    title: 'Blog',
    description: BLOG_DESCRIPTION,
    tags: [],
    body: 'All blog posts on digital forensics, digital evidence, hash verification, and technical reports.',
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
    tags: ['career', 'education', 'work', 'IBM', 'Oracle', 'AI Governance'],
    body: 'Jull Ortiz. Data & AI Analyst specializing in Governed AI for legal, compliance, and digital forensics. Law degree, UNELLEZ, Barinas (2005-2010); Specialization in Digital Design, Web and Programming, Mentors International / Mentors4EDU (2022-2024), including Web Design and Programming certification (Trujillo, Sept-Dec 2023). SUSCERTE Basic Foundations of Digital Forensics (Feb 2026); IBM SkillsBuild Cybersecurity Fundamentals, User Experience Design Fundamentals, AI Fundamentals, Career Management Essentials; Coursera patent research, Agile project management with Google. Processes on IBM and Oracle ecosystems, Explainable AI (XAI), RAG, Document Intelligence, Chain of Custody, NIST AI RMF, ISO/IEC 27001, ISO/IEC 42001, ISO/IEC 27037, User-Centered Design (UCD), AIDAR model. Experience: Independent Data & AI Analyst (2026-present), Virtual Engine Marketing (2024-2026), SinnerArt (2022-2023).',
    url: '/experience/',
  },
  {
    title: 'Projects',
    description:
      'Projects in Governed AI, Legal-RAG, digital forensics, compliance, traceability, and digital evidence.',
    tags: ['portfolio', 'open source', 'code', 'IBM', 'Oracle'],
    body: 'Compliance Forensic, Ulpiano Chief Compliance Officer, JullBrain Legal-RAG on IBM and Oracle ecosystems, FotoForense PhotoHolmes, and IPED_SHA256.US.',
    url: '/projects/',
  },
];

export const PAGE_SEARCH_ENTRIES_ES: SearchEntry[] = [
  {
    title: 'Inicio',
    description:
      'Data & AI Analyst especializado en Governed AI (legal, forense y compliance). Áreas del proyecto SHA256.US: dispositivos móviles, evidencia digital, documentos electrónicos e informática forense.',
    tags: ['Governed AI', 'IBM', 'Oracle', 'Informática forense'],
    body: 'Jull Ortiz. Data & AI Analyst, IA gobernada, On-Premise AI, IBM, Oracle, Explainable AI (XAI), RAG, inteligencia documental, gobernanza de datos, cadena de custodia, SHA256.US, dispositivos móviles, reparación, extracción de información, evidencia digital, documentos electrónicos, metadatos, contratos, informática forense, análisis técnico-jurídico, cumplimiento y documentación digital.',
    url: '/',
  },
  {
    title: 'Blog',
    description: 'Notas, ideas y cosas que vale la pena compartir',
    tags: [],
    body: 'Todas las publicaciones del blog sobre informática forense, evidencia digital, hash SHA-256 y dictámenes técnicos.',
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
      'Perfil de Jull Ortiz: Data & AI Analyst especializado en Governed AI, formación en Derecho e informática forense, credenciales verificables y diseño de sistemas auditables.',
    tags: ['trayectoria', 'formación', 'trabajo', 'IBM', 'Oracle', 'AI Governance'],
    body: 'Jull Ortiz. Data & AI Analyst especializado en Governed AI para el ámbito legal, forense y de cumplimiento. Licenciatura en Derecho, UNELLEZ, Barinas (2005-2010); Especialidad en Diseño Digital, Web y Programación, Mentors International / Mentors4EDU (2022-2024), incluyendo certificación en Diseño y Programación Web (Trujillo, sept-dic 2023). Fundamentos Básicos de la Informática Forense, SUSCERTE (feb 2026); IBM SkillsBuild: Cybersecurity Fundamentals, User Experience Design Fundamentals, AI Fundamentals, Career Management Essentials; Coursera: búsqueda de patentes, gestión Agile con Google. Procesos sobre ecosistemas de IBM y Oracle, Explainable AI (XAI), RAG, ingesta y estructuración documental, cadena de custodia, NIST AI RMF, ISO/IEC 27001, ISO/IEC 42001, ISO/IEC 27037, diseño centrado en las personas (UCD) y modelo AIDAR. Trayectoria: Data & AI Analyst independiente (2026-actualidad), Virtual Engine Marketing (2024-2026), SinnerArt (2022-2023).',
    url: '/experience/',
  },
  {
    title: 'Proyectos',
    description:
      'Proyectos de Governed AI, Legal-RAG, informática forense, cumplimiento, trazabilidad y evidencia digital.',
    tags: ['portafolio', 'código', 'IBM', 'Oracle'],
    body: 'Compliance Forensic, Ulpiano Chief Compliance Officer, JullBrain Legal-RAG con ecosistemas de IBM y Oracle, FotoForense PhotoHolmes e IPED_SHA256.US.',
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
