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
      es: 'CMS de cumplimiento forense digital para gestionar casos y evidencias, guiar flujos de cadena de custodia, generar dictámenes exportables con timestamps y mantener una auditoría inmutable encadenada con SHA-256. Incluye operación local sin conexión (On-Premise) y privacidad de datos por diseño.',
      en: 'Digital-forensics compliance CMS for managing cases and evidence, guiding chain-of-custody workflows, generating exportable reports with timestamps, and maintaining immutable SHA-256-linked audit logs. Built for local offline operation (On-Premise) and data privacy by design.',
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
      es: 'Propuesta y arquitectura de referencia de gobernanza de IA y cumplimiento (Chief Compliance Officer) que integra ciberseguridad procesal, integridad digital, cadena de custodia y alineación con marcos como NIST AI RMF, ISO/IEC 27001, ISO/IEC 42001 e ISO/IEC 27037.',
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
      es: 'Agente y plataforma Legal-RAG local en Python para transformar expedientes y normativas en conocimiento auditable. Integra ingesta estructurada con Docling (chunks con metadatos de página y hash), Data Prep Kit, modelos IBM Granite, BeeAI, filtros anti-alucinación con Granite Guardian y trazabilidad Explainable AI (XAI).',
      en: 'On-premise Python Legal-RAG agent and platform turning case files and regulations into auditable knowledge. Integrates structured document ingestion with Docling (chunks with page metadata and hashes), Data Prep Kit, IBM Granite, BeeAI, Granite Guardian anti-hallucination guardrails, and Explainable AI (XAI) traceability.',
    },
    focus: {
      es: ['Legal-RAG', 'Docling', 'IBM Granite', 'Granite Guardian', 'Explainable AI (XAI)'],
      en: ['Legal-RAG', 'Docling', 'IBM Granite', 'Granite Guardian', 'Explainable AI (XAI)'],
    },
  },
  {
    name: 'FotoForense · PhotoHolmes',
    url: 'https://github.com/julljoll/FotoForense',
    description: {
      es: 'Herramienta de apoyo pericial para analizar posibles manipulaciones en imágenes, explicar indicadores visuales de alteración y generar informes preliminares y paquetes de evidencia con preservación de hash. Sus resultados requieren validación de un perito habilitado.',
      en: 'Forensic support software for analyzing potential image manipulation, surfacing explainable visual alteration indicators, and generating preliminary reports and hash-preserved evidence packages. Results require review by a qualified forensic examiner.',
    },
    focus: {
      es: ['Análisis de imágenes', 'Evidencia digital', 'Python', 'Trazabilidad'],
      en: ['Image analysis', 'Digital evidence', 'Python', 'Traceability'],
    },
  },
  {
    name: 'IPED_SHA256.US',
    url: 'https://github.com/julljoll/IPED_SHA256.US',
    description: {
      es: 'Repositorio relacionado con el procesador e indexador forense IPED, software de código abierto de alto rendimiento para procesar, indexar y auditar grandes volúmenes de evidencia digital de forma local. IPED fue creado y continúa siendo desarrollado por especialistas de la Policía Federal de Brasil.',
      en: 'Repository for the IPED forensic processor and indexer, high-performance open-source software for locally processing, indexing, and auditing large volumes of digital evidence. IPED was created and continues to be developed by experts at the Brazilian Federal Police.',
    },
    focus: {
      es: ['IPED', 'Indexación forense', 'Evidencia digital', 'On-Premise'],
      en: ['IPED', 'Forensic indexing', 'Digital evidence', 'On-Premise'],
    },
  },
];
