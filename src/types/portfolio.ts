export interface Experience {
  id: string;
  company: string;
  badge: string;
  badgeColor: 'green' | 'blue' | 'gray';
  role: string;
  type: 'Full-time' | 'Internship';
  startDate: string;
  endDate: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
