import { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'ezfinanz-se',
    company: 'Ezfinanz — NBFC',
    badge: 'Production · NBFC',
    badgeColor: 'green',
    role: 'Software Engineer',
    type: 'Full-time',
    startDate: 'Sep 2026',
    endDate: 'Present',
    bullets: [
      'Own backend development and production support for personal-loan, disbursement, payout, and asynchronous processing workflows using Java, Spring Boot, RabbitMQ, and MySQL, with focus on reliability, automation, and performance.',
      'Maintain and improve distributed backend workflows with retry mechanisms, background processing, service integration, production debugging, and database optimization to support reliable financial operations.',
    ],
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'MySQL', 'Asynchronous Processing', 'Production Support'],
  },
  {
    id: 'ezfinanz-ase',
    company: 'Ezfinanz — NBFC',
    badge: 'Full-time · NBFC',
    badgeColor: 'green',
    role: 'Associate Software Engineer',
    type: 'Full-time',
    startDate: 'Sep 2025',
    endDate: 'Aug 2026',
    bullets: [
      'Developed and maintained production backend applications using Java and Spring Boot in an Agile environment across requirements, implementation, testing, deployment, maintenance, and production support throughout the SDLC.',
      'Architected an asynchronous bulk disbursement pipeline to resolve workflow bottlenecks, reducing transaction commit latency by 90% (500ms → 50ms) using 2-level approval workflows and distributed locking.',
      'Refactored the penal charge batch scheduler from sequential to parallel multithreaded execution, improving throughput by 75% (8 hours → 2 hours) with zero infrastructure changes; validated with volume and performance testing.',
      'Integrated and stabilized RabbitMQ-based asynchronous processing across 2 loan workflows, adding connection recovery, failure handling, retry mechanisms, alerting, and database fallback for reliable production execution.',
      'Improved personal-loan disbursement and payout workflows by implementing retry and recovery handling, resolving status inconsistencies, and strengthening background processing and transaction handling for production edge cases.',
      'Engineered a digital KYC service with fuzzy name matching against the PAN API, eliminating 100% of manual KYC document handling through workflow automation; resolved 8+ critical production failures via root cause analysis.',
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'RabbitMQ', 'Multithreading', 'REST APIs', 'Agile'],
  },
  {
    id: 'ezfinanz-intern',
    company: 'Ezfinanz — NBFC',
    badge: 'Internship',
    badgeColor: 'blue',
    role: 'Software Engineer Intern',
    type: 'Internship',
    startDate: 'Feb 2025',
    endDate: 'Aug 2025',
    bullets: [
      'Developed backend features for data retrieval, filtering, and reporting workflows using Java and Spring Boot; optimized SQL queries and participated in production support cycles covering issue triage, hotfix deployment, and post-deployment validation.',
    ],
    tags: ['Java', 'Spring Boot', 'SQL', 'Backend Development', 'Production Support'],
  },
];
