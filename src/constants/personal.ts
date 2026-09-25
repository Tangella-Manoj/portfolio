import { SocialLink, Stat } from '../types/portfolio';

export const personalInfo = {
  name: 'Manoj Tangella',
  firstName: 'Manoj',
  lastName: 'Tangella',
  title: 'Software Engineer',
  tagline: 'Software engineer specializing in backend systems, distributed architecture, performance optimization, and building production-grade services that operate reliably at scale.',
  email: 'tangellamanoj9@gmail.com',
  location: 'Hyderabad',
  openTo: 'Bengaluru / Remote',
  resumeUrl: 'https://drive.google.com/file/d/1xLNJiNBKq0__3vIZJcpFMxtPqyBc_Z1r/view?usp=drive_link',

  education: {
    degree: 'B.Tech CSE',
    institution: 'RGUKT Nuzvid',
    cgpa: '8.9',
    display: 'B.Tech CSE — RGUKT Nuzvid | CGPA 8.9',
  },

  experience: '1+ yr full-time',
  specialization: 'Backend · Distributed Systems',
  techStack: 'Java · Spring Boot · Apache Kafka',

  leetcode: {
    solved: 300,
    rating: 1446,
  },

  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manoj-tangella/',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Tangella-Manoj',
      icon: 'github',
    },
    {
      name: 'Email',
      url: 'mailto:tangellamanoj9@gmail.com',
      icon: 'mail',
    },
  ] as SocialLink[],

  stats: [
    { value: 90, suffix: '%', label: 'Latency ↓' },
    { value: 94, suffix: '%', label: 'Batch Speedup' },
    { value: 300, suffix: '+', label: 'Problems Solved' },
  ] as Stat[],
};
