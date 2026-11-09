import type { Locale } from '@/lib/i18n';

export interface FeaturedProject {
  name: string;
  repoSlug: string;
  url: string;
  primary?: boolean;
  role: Record<Locale, string>;
  description: Record<Locale, string>;
  focus: Record<Locale, string[]>;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: 'SHA256.US · Compliance Forensic',
    repoSlug: 'julljoll/Compliace-Forensic-js',
    url: 'https://github.com/julljoll/Compliace-Forensic-js',
    primary: true,
    role: {
      es: 'Proyecto principal · Informática Forense y Cadena de Custodia',
      en: 'Flagship Project · Digital Forensics & Chain of Custody',
    },
    description: {
      es: 'Eje central de SHA256.US enfocado en informática forense y evidencia digital. Organiza casos periciales, guía el proceso completo de cadena de custodia, genera dictámenes técnicos exportables con marcas de tiempo y mantiene un registro de auditoría inmutable encadenado criptográficamente con SHA-256 en operación local (On-Premise).',
      en: 'Core SHA256.US flagship focused on digital forensics and digital evidence. Organizes forensic cases, guides end-to-end chain-of-custody workflows, generates exportable technical reports with timestamps, and maintains an immutable SHA-256 cryptographically linked audit log in local (On-Premise) operation.',
    },
    focus: {
      es: ['Informática forense', 'Evidencia digital', 'Cadena de custodia', 'Integridad SHA-256', 'On-Premise'],
      en: ['Digital forensics', 'Digital evidence', 'Chain of custody', 'SHA-256 integrity', 'On-Premise'],
    },
  },
  {
    name: 'Ulpiano · Chief Compliance Officer',
    repoSlug: 'julljoll/Ulpiano-Chief-Compliance-Officer',
    url: 'https://github.com/julljoll/Ulpiano-Chief-Compliance-Officer',
    role: {
      es: 'Arquitectura de referencia · Gobernanza y Cumplimiento Forense',
      en: 'Reference Architecture · Forensic Governance & Compliance',
    },
    description: {
      es: 'Arquitectura de referencia de gobernanza y cumplimiento que articula ciberseguridad procesal, integridad de la evidencia digital, trazabilidad de cadena de custodia y alineación con estándares internacionales como ISO/IEC 27037, ISO/IEC 27001, ISO/IEC 42001 y NIST AI RMF.',
      en: 'Governance and compliance reference architecture uniting procedural cybersecurity, digital evidence integrity, chain-of-custody traceability, and alignment with international standards including ISO/IEC 27037, ISO/IEC 27001, ISO/IEC 42001, and NIST AI RMF.',
    },
    focus: {
      es: ['Ciberseguridad procesal', 'ISO/IEC 27037 · 27001', 'AI Governance', 'NIST AI RMF'],
      en: ['Procedural cybersecurity', 'ISO/IEC 27037 · 27001', 'AI Governance', 'NIST AI RMF'],
    },
  },
  {
    name: 'JullBrain',
    repoSlug: 'julljoll/JullBrain',
    url: 'https://github.com/julljoll/JullBrain',
    role: {
      es: 'Análisis documental y Legal-RAG · Informática Forense y Derecho',
      en: 'Document Analysis & Legal-RAG · Digital Forensics & Law',
    },
    description: {
      es: 'Proceso de análisis jurídico y forense de ejecución local para transformar expedientes, códigos y normativas en conocimiento auditable. Integra ingesta y estructuración documental (fragmentación con metadatos de página y hash SHA-256), recuperación aumentada con controles de validación sobre ecosistemas de IBM y Oracle, y trazabilidad fuente a afirmación (XAI).',
      en: 'On-premise legal and forensic analysis workflow transforming case files, codes, and regulations into auditable knowledge. Integrates structured document ingestion (chunking with page metadata and SHA-256 hashes), retrieval-augmented generation with validation controls across IBM and Oracle ecosystems, and claim-to-source traceability (XAI).',
    },
    focus: {
      es: ['Informática forense', 'Legal-RAG', 'IBM · Oracle', 'Explainable AI (XAI)'],
      en: ['Digital forensics', 'Legal-RAG', 'IBM · Oracle', 'Explainable AI (XAI)'],
    },
  },
  {
    name: 'FotoForense · PhotoHolmes',
    repoSlug: 'julljoll/FotoForense',
    url: 'https://github.com/julljoll/FotoForense',
    role: {
      es: 'Inspección pericial de imágenes · Evidencia Digital',
      en: 'Forensic Image Inspection · Digital Evidence',
    },
    description: {
      es: 'Repositorio de apoyo al análisis forense de imágenes digitales para detectar posibles manipulaciones o alteraciones, visualizar indicadores técnicos de integridad y estructurar informes preliminares y paquetes de evidencia preservando su huella criptográfica SHA-256. Sus resultados requieren validación de un perito habilitado.',
      en: 'Forensic image analysis support repository for detecting potential digital manipulations or alterations, visualizing technical integrity indicators, and structuring preliminary reports and evidence packages while preserving SHA-256 cryptographic hashes. Results require review by a qualified forensic examiner.',
    },
    focus: {
      es: ['Forense de imágenes', 'Evidencia digital', 'Detección de alteraciones', 'SHA-256'],
      en: ['Image forensics', 'Digital evidence', 'Tampering detection', 'SHA-256'],
    },
  },
  {
    name: 'IPED_SHA256.US',
    repoSlug: 'julljoll/IPED_SHA256.US',
    url: 'https://github.com/julljoll/IPED_SHA256.US',
    role: {
      es: 'Procesamiento e indexación de evidencia · Informática Forense',
      en: 'Evidence Processing & Indexing · Digital Forensics',
    },
    description: {
      es: 'Repositorio integrado en el flujo de SHA256.US para el procesamiento, clasificación e indexación forense de grandes volúmenes de evidencia digital en entorno local. Basado en el procesador de código abierto creado y desarrollado por especialistas en informática forense de la Policía Federal de Brasil.',
      en: 'Repository integrated into the SHA256.US workflow for local forensic processing, classification, and indexing of large volumes of digital evidence. Based on the open-source processor created and developed by digital forensics experts at the Brazilian Federal Police.',
    },
    focus: {
      es: ['Indexación forense', 'Procesamiento de evidencia', 'Auditoría local', 'SHA256.US'],
      en: ['Forensic indexing', 'Evidence processing', 'Local auditing', 'SHA256.US'],
    },
  },
];
