import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'loan-management',
    title: 'Distributed Loan Management Platform',
    description: 'Enterprise-grade microservices architecture for financial workflows',
    impact: '4 independent Spring Boot services with JWT authentication, containerized deployment, and RESTful API design',
    tags: ['Java', 'Spring Boot', 'Docker', 'REST APIs', 'JWT', 'MySQL'],
    githubUrl: 'https://github.com/Tangella-Manoj',
  },
  {
    id: 'event-processing',
    title: 'Real-Time Event Processing Pipeline',
    description: 'High-throughput distributed streaming platform with Apache Kafka',
    impact: 'Processes 10,000+ events/minute with fault-tolerant delivery and horizontal scaling via consumer groups',
    tags: ['Java', 'Apache Kafka', 'Spring Boot', 'Docker', 'MySQL'],
    githubUrl: 'https://github.com/Tangella-Manoj',
  },
  {
    id: 'devops-platform',
    title: 'CI/CD Automation & Observability Platform',
    description: 'Complete DevOps pipeline with automated deployment and monitoring',
    impact: '100% automated build/test/deploy workflow with real-time metrics dashboards using Prometheus and Grafana',
    tags: ['GitHub Actions', 'Docker', 'Prometheus', 'Grafana', 'Python', 'Bash'],
    githubUrl: 'https://github.com/Tangella-Manoj',
  },
];
