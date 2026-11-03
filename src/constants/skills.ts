import { SkillGroup } from '../types/portfolio';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Core Languages',
    skills: ['Java', 'SQL', 'Python', 'C', 'TypeScript / JavaScript'],
  },
  {
    category: 'Frameworks & Architecture',
    skills: ['Spring Boot', 'REST APIs', 'Microservices Architecture', 'Spring Security', 'Hibernate ORM', 'JPA'],
  },
  {
    category: 'Distributed Systems & Concurrency',
    skills: ['Multithreading', 'Apache Kafka', 'RabbitMQ', 'Redis Mutex', 'SAGA Pattern', 'Idempotency'],
  },
  {
    category: 'Databases & Storage',
    skills: ['MySQL InnoDB', 'PostgreSQL', 'Index Tuning', 'ACID Transactions', 'Query Profiling', 'HikariCP'],
  },
  {
    category: 'DevOps & Cloud Delivery',
    skills: ['Docker', 'GitHub Actions CI/CD', 'Prometheus & Grafana', 'Linux / Bash Scripting', 'Multi-Stage Builds'],
  },
  {
    category: 'Software Craftsmanship',
    skills: ['Clean Architecture', 'System Design', 'Domain-Driven Design (DDD)', 'Unit Testing', 'Production RCA & Hotfixes'],
  },
];
