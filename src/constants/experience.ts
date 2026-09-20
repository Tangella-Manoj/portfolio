import { Experience } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'ezfinanz-fulltime',
    company: 'Ezfinanz',
    badge: 'Production · NBFC',
    badgeColor: 'green',
    role: 'Backend Engineer',
    type: 'Full-time',
    startDate: 'Sep 2025',
    endDate: 'Present',
    bullets: [
      'Engineered asynchronous bulk disbursement pipeline handling 10,000+ daily transactions — reduced p99 latency by 90% (500ms → 50ms) through non-blocking architecture and connection pooling',
      'Refactored legacy batch processing engine with concurrent execution patterns — achieved 96× throughput improvement (8 hrs → < 5 min runtime) processing 50,000+ records daily',
      'Architected end-to-end digital KYC verification system integrating third-party APIs — eliminated 100% manual document review, reducing onboarding time from 2 days to 2 hours',
      'Led incident response for 8+ critical production failures including database deadlocks and memory leaks — implemented monitoring alerts and automated rollback procedures maintaining 99.9% uptime',
    ],
    tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Multithreading', 'REST APIs'],
  },
  {
    id: 'ezfinanz-intern',
    company: 'Ezfinanz',
    badge: 'Internship',
    badgeColor: 'blue',
    role: 'Backend Engineering Intern',
    type: 'Internship',
    startDate: 'Feb 2025',
    endDate: 'Aug 2025',
    bullets: [
      'Built 5+ microservices endpoints for loan origination system — optimized complex SQL joins and implemented caching strategies achieving consistent sub-100ms response times',
      'Participated in complete production deployment lifecycle across 3 major releases — gained hands-on experience with blue-green deployments, smoke testing, and incident response protocols',
    ],
    tags: ['Java', 'Spring Framework', 'SQL', 'Backend Development'],
  },
  {
    id: 'edubot',
    company: 'Edubot Software Services',
    badge: 'Internship',
    badgeColor: 'gray',
    role: 'Full Stack Development Intern',
    type: 'Internship',
    startDate: 'May 2024',
    endDate: 'Jul 2024',
    bullets: [
      'Developed 2 production-ready web modules using Java Servlets and JDBC — implemented MVC architecture with connection pooling and prepared statements for SQL injection prevention',
      'Debugged and resolved 15+ critical defects across authentication, session management, and data validation layers — reduced customer-reported incidents by 40%',
    ],
    tags: ['Java', 'JDBC', 'Servlets', 'HTML', 'CSS', 'JavaScript'],
  },
];
