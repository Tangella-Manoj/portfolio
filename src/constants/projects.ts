export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: 'dlmp',
    title: 'DLMP — Distributed Platform Architecture',
    badge: 'Distributed Systems · SAGA',
    description: 'Event-driven microservices platform coordinating distributed transactions across 5 isolated databases using Apache Kafka and SAGA orchestration without distributed locks.',
    highlights: [
      'Implemented SAGA Orchestration with automated compensating rollbacks to guarantee eventual consistency across 5 isolated service databases.',
      'Employed the Transactional Outbox pattern with Redis idempotency keys to ensure zero-loss and zero-duplicate event delivery to Kafka brokers.',
      'Enforced double-entry ledger balance invariance across multi-step transaction lifecycles.',
    ],
    metrics: [
      { label: 'Architecture', value: '6 Services' },
      { label: 'Event Bus', value: 'Kafka Outbox' },
      { label: 'Consistency', value: 'SAGA Rollback' },
      { label: 'Latency', value: 'Sub-50ms p99' },
    ],
    tags: ['Spring Boot', 'Apache Kafka', 'Microservices', 'SAGA Pattern', 'Transactional Outbox', 'Redis', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/Tangella-Manoj/distributed-loan-management-platform',
  },
  {
    id: 'memoryvault',
    title: 'MemoryVault — Contextual Intelligence & Search Platform',
    badge: 'Backend Architecture · Vector Search',
    description: 'Contextual intelligence platform and browser extension that ingests web documentation, parses DOM content, and resurfaces technical context via sub-80ms vector search.',
    highlights: [
      'Engineered 33 REST endpoints across Spring Boot with automated Newman CI/CD test validation (54/54 passed assertions).',
      'Developed a Chrome extension using background service workers for non-blocking asynchronous DOM capture and payload compression.',
      'Integrated vector similarity search to retrieve relevant engineering references based on conceptual semantics rather than keyword queries.',
    ],
    metrics: [
      { label: 'REST APIs', value: '33 Endpoints' },
      { label: 'CI/CD Tests', value: '54/54 Passed' },
      { label: 'Query Latency', value: 'Sub-80ms' },
      { label: 'Live Hosted', value: 'stacknode.dev' },
    ],
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Chrome Extension', 'Vector Search', 'Docker', 'CI/CD', 'MySQL'],
    githubUrl: 'https://github.com/Tangella-Manoj/memoryvault',
    liveUrl: 'https://memoryvault.stacknode.dev',
  },
  {
    id: 'forge-ai',
    title: 'Forge AI — Java AST Architecture & Dependency Scanner',
    badge: 'Developer Tooling · Static Analysis',
    description: 'Static analysis CLI tool that parses Java AST syntax trees to map package dependencies, detect circular couplings, and compute refactoring blast radius before merge.',
    highlights: [
      'Implemented AST syntax traversal to construct directional dependency matrices across Java packages and modules.',
      'Structured using Clean Architecture and Domain-Driven Design (DDD) to keep the core evaluation engine strictly decoupled from CLI adapters.',
      'Calculated blast-radius impact scores to alert teams when proposed pull requests breach layer boundaries or introduce circular couplings.',
    ],
    metrics: [
      { label: 'Engine', value: 'AST Traversal' },
      { label: 'Design', value: 'Clean Arch / DDD' },
      { label: 'Analysis', value: 'Cycle Detection' },
      { label: 'Interface', value: 'CLI Tool' },
    ],
    tags: ['Java', 'Clean Architecture', 'Domain-Driven Design', 'AST Parsing', 'Dependency Analysis', 'CLI'],
    githubUrl: 'https://github.com/Tangella-Manoj/forge-ai',
  },
  {
    id: 'devops-telemetry',
    title: 'DevOps Automation & Production Telemetry Pipeline',
    badge: 'Infrastructure & Observability',
    description: 'Containerized observability stack scraping JVM runtime metrics, connection pool saturation, and request histograms into real-time Grafana dashboards.',
    highlights: [
      'Automated multi-stage container builds in GitHub Actions with dependency layer caching, significantly reducing deployment duration.',
      'Scraped JVM garbage collection pauses, HikariCP connection pool health, and HTTP p99 latency distributions into Prometheus.',
      'Constructed Grafana alert dashboards to monitor connection pool saturation and isolate service degradation before user timeouts occur.',
    ],
    metrics: [
      { label: 'CI/CD', value: 'GitHub Actions' },
      { label: 'Containers', value: 'Multi-Stage' },
      { label: 'Scraper', value: 'Prometheus' },
      { label: 'Dashboards', value: 'Grafana p99' },
    ],
    tags: ['Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'CI/CD', 'Linux / Bash'],
    githubUrl: 'https://github.com/Tangella-Manoj',
  },
];

// Backward-compatible exports
export const caseStudies = projectsList;
export const projects = projectsList.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.description,
  impact: p.description,
  tags: p.tags,
  githubUrl: p.githubUrl,
  liveUrl: p.liveUrl,
}));
