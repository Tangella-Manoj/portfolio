import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 'memoryvault',
    title: 'MemoryVault — Full Stack Platform',
    description: 'Full-stack application with Spring Boot microservices backend, JWT authentication, role-based access control, and a React frontend — built end-to-end using Agile practices.',
    impact: '33 REST API endpoints · 18 unit tests · 27/27 Newman requests & 54/54 assertions passing · GitHub Actions CI/CD · 6 data exchange channels · 3 concurrency bugs resolved via thread-dump analysis during 500-item load test · Automated semantic search via vector embeddings',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'JWT', 'GitHub Actions'],
    githubUrl: 'https://github.com/Tangella-Manoj/memoryvault',
  },
  {
    id: 'loan-management',
    title: 'Loan Management System',
    description: 'Component-based Spring Boot microservices for loan processing, disbursements, and notifications with versioned REST APIs and Dockerized deployment.',
    impact: 'Data exchange interfaces · Versioned REST APIs · Centralized logging · Dockerized deployment pipeline',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'REST APIs', 'JWT'],
    githubUrl: 'https://github.com/Tangella-Manoj',
  },
  {
    id: 'devops-platform',
    title: 'DevOps Automation & Monitoring Platform',
    description: 'Automated CI/CD pipelines for build, test, and deployment with real-time service health and performance monitoring.',
    impact: '100% automated build/test/deploy via GitHub Actions · Real-time Prometheus & Grafana dashboards for service health, performance, and deployment monitoring',
    tags: ['Python', 'GitHub Actions', 'Docker', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/Tangella-Manoj',
  },
];
