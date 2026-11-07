import type { Locale } from '@/lib/i18n';

interface Certification {
  title: Record<Locale, string>;
  issuer: string;
  date: Record<Locale, string>;
  category: Record<Locale, string>;
  detail?: Record<Locale, string>;
  verificationUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: {
      es: 'Fundamentos Básicos de la Informática Forense',
      en: 'Basic Foundations of Digital Forensics',
    },
    issuer: 'SUSCERTE · Superintendencia de Servicios de Certificación Electrónica',
    date: { es: '3–18 feb 2026', en: 'Feb 3–18, 2026' },
    category: { es: 'Informática forense', en: 'Digital forensics' },
    detail: {
      es: 'Curso autogestionado de 16 horas. Contenido: fundamentos estructurales y marco jurídico.',
      en: 'Self-paced, 16-hour course covering structural fundamentals and legal framework.',
    },
  },
  {
    title: { es: 'Cybersecurity Fundamentals', en: 'Cybersecurity Fundamentals' },
    issuer: 'IBM SkillsBuild',
    date: { es: '12 ago 2026', en: 'Aug 12, 2026' },
    category: { es: 'Ciberseguridad', en: 'Cybersecurity' },
    verificationUrl: 'https://www.credly.com/badges/d427c6ef-e272-47e1-b054-8e293142dc25',
  },
  {
    title: { es: 'User Experience Design Fundamentals', en: 'User Experience Design Fundamentals' },
    issuer: 'IBM SkillsBuild',
    date: { es: '21 feb 2026', en: 'Feb 21, 2026' },
    category: { es: 'Diseño de experiencia', en: 'User experience design' },
    verificationUrl: 'https://www.credly.com/badges/0527bd85-6a24-489f-ae3d-eb0f7e4bf7e9',
  },
  {
    title: {
      es: 'AI Fundamentals: Foundations for Understanding AI',
      en: 'AI Fundamentals: Foundations for Understanding AI',
    },
    issuer: 'IBM SkillsBuild',
    date: { es: '1 nov 2026', en: 'Nov 1, 2026' },
    category: { es: 'Fundamentos de IA', en: 'AI fundamentals' },
    verificationUrl: 'https://www.credly.com/go/tcQbjA1B',
  },
  {
    title: {
      es: 'Patentes: un recorrido desde su significado hasta su búsqueda',
      en: 'Patents: From Meaning to Search',
    },
    issuer: 'Universidad Nacional de Colombia · Coursera',
    date: { es: '12 oct 2025', en: 'Oct 12, 2025' },
    category: { es: 'Investigación jurídica', en: 'Legal research' },
    verificationUrl: 'https://coursera.org/verify/DZ34Y9XNV2ZW',
  },
  {
    title: { es: 'Gestión de proyectos con la metodología Agile', en: 'Agile Project Management' },
    issuer: 'Google · Coursera',
    date: { es: '28 ene 2023', en: 'Jan 28, 2023' },
    category: { es: 'Gestión de proyectos', en: 'Project management' },
    verificationUrl: 'https://coursera.org/verify/G2GXFRD8GYSG',
  },
  {
    title: {
      es: 'Crea diseños y prototipos de alta fidelidad en Figma',
      en: 'Create High-Fidelity Designs and Prototypes in Figma',
    },
    issuer: 'Coursera',
    date: { es: '3 oct 2022', en: 'Oct 3, 2022' },
    category: { es: 'Diseño y prototipado', en: 'Design and prototyping' },
    verificationUrl: 'https://coursera.org/verify/PHPHPXAMMM5J',
  },
  {
    title: {
      es: 'Agile Project: análisis de puntos de contacto para un prototipo en Miro',
      en: 'Agile Project: Product Prototype Touchpoint Analysis in Miro',
    },
    issuer: 'Coursera',
    date: { es: '23 nov 2022', en: 'Nov 23, 2022' },
    category: { es: 'Proyecto de diseño Agile', en: 'Agile design project' },
    verificationUrl: 'https://coursera.org/verify/X6RBRBSK6C5L',
  },
  {
    title: { es: 'Career Management Essentials', en: 'Career Management Essentials' },
    issuer: 'IBM SkillsBuild',
    date: { es: '26 ago 2026', en: 'Aug 26, 2026' },
    category: { es: 'Desarrollo profesional', en: 'Professional development' },
    verificationUrl: 'https://www.credly.com/badges/a2dca596-2edb-41da-886b-46e5a3cfd0ec',
  },
];
