import type { Locale } from '@/lib/i18n';

interface FeaturedProject {
  name: string;
  url: string;
  description: Record<Locale, string>;
  focus: Record<Locale, string[]>;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: 'SHA256.US · Compliance Forensic',
    url: 'https://github.com/julljoll/Compliace-Forensic-js',
    description: {
      es: 'CMS de cumplimiento forense digital para gestionar casos y evidencias, guiar flujos de cadena de custodia, generar documentos y mantener una auditoría encadenada con SHA-256. El repositorio también describe funcionamiento local sin conexión y sincronización opcional.',
      en: 'A digital-forensics compliance CMS for managing cases and evidence, guiding chain-of-custody workflows, generating documents, and maintaining SHA-256-linked audit records. The repository also describes offline operation with optional synchronization.',
    },
    focus: {
      es: ['Forense digital', 'Compliance', 'SHA-256'],
      en: ['Digital forensics', 'Compliance', 'SHA-256'],
    },
  },
  {
    name: 'Ulpiano · Chief Compliance Officer',
    url: 'https://github.com/julljoll/Ulpiano-Chief-Compliance-Officer',
    description: {
      es: 'Propuesta y arquitectura de referencia para un Chief Compliance Officer que reúne ciberseguridad procesal, integridad digital, cadena de custodia y marcos de cumplimiento.',
      en: 'A proposal and reference architecture for a Chief Compliance Officer platform bringing together procedural cybersecurity, digital integrity, chain of custody, and compliance frameworks.',
    },
    focus: {
      es: ['Arquitectura', 'Integridad digital', 'Compliance'],
      en: ['Architecture', 'Digital integrity', 'Compliance'],
    },
  },
  {
    name: 'JullBrain',
    url: 'https://github.com/julljoll/JullBrain',
    description: {
      es: 'Plataforma Legal-RAG en Python para organizar normativas, códigos y expedientes en conocimiento consultable, con enfoque en informática forense y tecnología como Docling, Granite y OpenSearch.',
      en: 'A Python Legal-RAG platform for organizing regulations, codes, and case files into searchable knowledge, focused on digital forensics and technologies such as Docling, Granite, and OpenSearch.',
    },
    focus: {
      es: ['Legal-RAG', 'Python', 'Informática forense'],
      en: ['Legal-RAG', 'Python', 'Digital forensics'],
    },
  },
  {
    name: 'FotoForense · PhotoHolmes',
    url: 'https://github.com/julljoll/FotoForense',
    description: {
      es: 'Herramienta de apoyo pericial para analizar posibles manipulaciones en imágenes y generar informes preliminares y paquetes de evidencia. Sus resultados requieren validación de un perito habilitado.',
      en: 'Forensic support software for analyzing potential image manipulation and generating preliminary reports and evidence packages. Its results require review by a qualified forensic examiner.',
    },
    focus: {
      es: ['Análisis de imágenes', 'Evidencia digital', 'Python'],
      en: ['Image analysis', 'Digital evidence', 'Python'],
    },
  },
  {
    name: 'IPED_SHA256.US',
    url: 'https://github.com/julljoll/IPED_SHA256.US',
    description: {
      es: 'Repositorio del procesador e indexador forense IPED, software de código abierto para procesar y analizar evidencia digital. IPED fue creado y continúa siendo desarrollado por especialistas de la Policía Federal de Brasil.',
      en: 'Repository for IPED, an open-source forensic processor and indexer for processing and analyzing digital evidence. IPED was created and continues to be developed by experts at the Brazilian Federal Police.',
    },
    focus: {
      es: ['IPED', 'Indexación', 'Evidencia digital'],
      en: ['IPED', 'Indexing', 'Digital evidence'],
    },
  },
];
