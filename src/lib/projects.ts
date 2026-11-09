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
      es: 'Sistema de gestión de cumplimiento forense digital para organizar casos y evidencias, guiar procesos de cadena de custodia, generar dictámenes exportables con marcas de tiempo y mantener una auditoría inmutable encadenada con SHA-256. Diseñado para operación local sin conexión (On-Premise) y privacidad de datos por diseño.',
      en: 'Digital-forensics compliance system for managing cases and evidence, guiding chain-of-custody workflows, generating exportable reports with timestamps, and maintaining immutable SHA-256-linked audit logs. Built for local offline operation (On-Premise) and data privacy by design.',
    },
    focus: {
      es: ['Chain of Custody', 'Compliance', 'SHA-256', 'On-Premise', 'Digital Forensics'],
      en: ['Chain of Custody', 'Compliance', 'SHA-256', 'On-Premise', 'Digital Forensics'],
    },
  },
  {
    name: 'Ulpiano · Chief Compliance Officer',
    url: 'https://github.com/julljoll/Ulpiano-Chief-Compliance-Officer',
    description: {
      es: 'Propuesta y arquitectura de referencia de gobernanza de IA y cumplimiento (Chief Compliance Officer) que integra ciberseguridad procesal, integridad digital, cadena de custodia y alineación con estándares como NIST AI RMF, ISO/IEC 27001, ISO/IEC 42001 e ISO/IEC 27037.',
      en: 'Reference architecture and governance framework for a Chief Compliance Officer platform integrating procedural cybersecurity, digital integrity, chain of custody, and alignment with NIST AI RMF, ISO/IEC 27001, ISO/IEC 42001, and ISO/IEC 27037.',
    },
    focus: {
      es: ['AI Governance', 'NIST AI RMF', 'ISO 27001 · 42001', 'Integridad digital'],
      en: ['AI Governance', 'NIST AI RMF', 'ISO 27001 · 42001', 'Digital integrity'],
    },
  },
  {
    name: 'JullBrain',
    url: 'https://github.com/julljoll/JullBrain',
    description: {
      es: 'Agente y arquitectura Legal-RAG de ejecución local para transformar expedientes y normativas en conocimiento auditable. Integra procesos de ingesta y estructuración documental (fragmentación con metadatos de página y hash SHA-256), recuperación aumentada, controles de validación contra alucinaciones y sesgos sobre ecosistemas de IBM y Oracle, y trazabilidad Explainable AI (XAI).',
      en: 'On-premise Legal-RAG agent and architecture turning case files and regulations into auditable knowledge. Integrates structured document ingestion workflows (chunking with page metadata and SHA-256 hashes), retrieval-augmented generation, anti-hallucination and bias validation guardrails across IBM and Oracle ecosystems, and Explainable AI (XAI) traceability.',
    },
    focus: {
      es: ['Legal-RAG', 'IBM', 'Oracle', 'Document Intelligence', 'Explainable AI (XAI)'],
      en: ['Legal-RAG', 'IBM', 'Oracle', 'Document Intelligence', 'Explainable AI (XAI)'],
    },
  },
  {
    name: 'FotoForense · PhotoHolmes',
    url: 'https://github.com/julljoll/FotoForense',
    description: {
      es: 'Proceso de apoyo pericial para analizar posibles manipulaciones en imágenes, explicar indicadores visuales de alteración y generar informes preliminares y paquetes de evidencia con preservación de hash. Sus resultados requieren validación de un perito habilitado.',
      en: 'Forensic support workflow for analyzing potential image manipulation, surfacing explainable visual alteration indicators, and generating preliminary reports and hash-preserved evidence packages. Results require review by a qualified forensic examiner.',
    },
    focus: {
      es: ['Análisis de imágenes', 'Evidencia digital', 'Integridad SHA-256', 'Trazabilidad'],
      en: ['Image analysis', 'Digital evidence', 'SHA-256 integrity', 'Traceability'],
    },
  },
  {
    name: 'IPED_SHA256.US',
    url: 'https://github.com/julljoll/IPED_SHA256.US',
    description: {
      es: 'Repositorio relacionado con el procesamiento e indexación forense de código abierto de alto rendimiento para clasificar, indexar y auditar grandes volúmenes de evidencia digital de forma local. Basado en el procesador desarrollado por especialistas de la Policía Federal de Brasil.',
      en: 'Repository for high-performance open-source forensic processing and indexing workflows to locally classify, index, and audit large volumes of digital evidence, based on the processor developed by experts at the Brazilian Federal Police.',
    },
    focus: {
      es: ['Indexación forense', 'Evidencia digital', 'Auditoría local', 'On-Premise'],
      en: ['Forensic indexing', 'Digital evidence', 'Local auditing', 'On-Premise'],
    },
  },
];
