import { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'ezfinanz-se',
    company: 'Ezfinanz',
    badge: 'Full-time',
    badgeColor: 'green',
    role: 'Software Engineer',
    type: 'Full-time',
    startDate: 'Sep 2026',
    endDate: 'Present',
    bullets: [
      'Design and operate core backend microservices handling high-throughput transactional traffic, event-driven workflows, and partner integrations using Java, Spring Boot, RabbitMQ, and MySQL.',
      'Architect asynchronous message processing pipelines with dead-letter retry queues, distributed locking, and fallback write paths to maintain high availability under traffic surges.',
      'Partner with cross-functional engineering teams to build scalable REST APIs, automated audit logging, and zero-downtime deployment pipelines.',
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'RabbitMQ', 'MySQL', 'Distributed Systems', 'REST APIs'],
  },
  {
    id: 'ezfinanz-ase',
    company: 'Ezfinanz',
    badge: 'Promotion',
    badgeColor: 'green',
    role: 'Associate Software Engineer',
    type: 'Full-time',
    startDate: 'Sep 2025',
    endDate: 'Aug 2026',
    bullets: [
      'Engineered backend services for asynchronous transaction processing, automated verification pipelines, and third-party partner integrations.',
      'Redesigned the transaction execution pipeline using distributed Redis locks and multi-level approvals, eliminating race conditions and slashing commit latency by 90% (500ms → 50ms).',
      'Refactored the core calculation batch engine from a single-threaded bottleneck into chunked parallel worker pools, cutting execution time by 16x (8 hours down to 30 minutes) on existing infrastructure.',
      'Integrated RabbitMQ for asynchronous event streaming across lifecycle stages, implementing automatic connection recovery, failure isolation, and exponential backoff retry policies.',
      'Diagnosed and resolved 8+ high-priority production incidents, resolving database connection pool starvation, transaction isolation deadlocks, and third-party webhook dropouts.',
    ],
    tags: ['Java', 'Spring Boot', 'MySQL', 'RabbitMQ', 'Redis', 'Multithreading', 'REST APIs', 'Docker'],
  },
  {
    id: 'ezfinanz-intern',
    company: 'Ezfinanz',
    badge: 'Internship',
    badgeColor: 'blue',
    role: 'Software Engineer Intern',
    type: 'Internship',
    startDate: 'Feb 2025',
    endDate: 'Aug 2025',
    bullets: [
      'Developed internal REST APIs and operational monitoring tooling using Java and Spring Boot.',
      'Optimized SQL query execution plans and database indexes on high-volume tables, significantly reducing read latency across operational dashboards.',
      'Contributed unit and integration tests, triaged defect reports, and assisted senior engineers during production deployment hotfixes.',
    ],
    tags: ['Java', 'Spring Boot', 'SQL Optimization', 'REST APIs', 'Testing', 'Linux'],
  },
];
