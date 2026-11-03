import { SocialLink, Stat } from '../types/portfolio';

export const personalInfo = {
  name: 'Manoj Tangella',
  firstName: 'Manoj',
  lastName: 'Tangella',
  title: 'Backend Software Engineer',
  tagline: 'Backend Software Engineer building distributed systems, high-throughput microservices, and transactional architectures with Java, Spring Boot, Apache Kafka, RabbitMQ, and MySQL.',
  email: 'tangellamanoj9@gmail.com',
  location: 'Hyderabad, India',
  resumeUrl: 'https://drive.google.com/file/d/1xLNJiNBKq0__3vIZJcpFMxtPqyBc_Z1r/view?usp=drive_link',

  education: {
    degree: 'B.Tech CSE',
    institution: 'RGUKT Nuzvid',
    cgpa: '8.9',
    display: 'B.Tech CSE — RGUKT Nuzvid | CGPA 8.9',
  },

  experience: '1+ yr production',
  specialization: 'Distributed Systems · Backend Architecture',
  techStack: 'Java · Spring Boot · Apache Kafka · MySQL',

  leetcode: {
    username: 'Manoj_Tangella',
    url: 'https://leetcode.com/u/Manoj_Tangella/',
    solved: 324,
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
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Manoj_Tangella/',
      icon: 'code',
    },
    {
      name: 'Email',
      url: 'mailto:tangellamanoj9@gmail.com',
      icon: 'mail',
    },
  ] as SocialLink[],

  stats: [
    { value: 50, suffix: 'ms', label: 'p99 Commit Latency' },
    { value: 16, suffix: 'x', label: 'Batch Speedup' },
    { value: 300, suffix: '+', label: 'LeetCode Solved' },
    { value: 1, suffix: '+ Yrs', label: 'Production Systems' },
  ] as Stat[],
};
