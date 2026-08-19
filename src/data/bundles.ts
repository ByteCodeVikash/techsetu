import type { Bundle } from '../types';

export const BUNDLES: Bundle[] = [
  {
    id: 'software-engineer-track',
    title: 'Full-Stack Software Engineer Career Path',
    description: 'Complete path covering React, Next.js, Node.js APIs, System Design, and Cloud Architecture.',
    roleTarget: 'Full Stack Engineer',
    includedCoursesCount: 4,
    duration: '6 Months',
    iconName: 'Code',
    popular: true,
    skills: ['React 19', 'Next.js 15', 'Node.js', 'PostgreSQL', 'System Design']
  },
  {
    id: 'ai-engineer-track',
    title: 'Generative AI & Machine Learning Specialist',
    description: 'Master Python, Deep Learning, PyTorch, RAG Pipelines, Vector Databases, and LLM Deployment.',
    roleTarget: 'AI / ML Engineer',
    includedCoursesCount: 5,
    duration: '6 Months',
    iconName: 'Cpu',
    popular: true,
    skills: ['Python 3.12', 'PyTorch', 'RAG Pipelines', 'LangChain', 'Vector DBs']
  },
  {
    id: 'digital-marketer-track',
    title: 'Performance Marketer & Growth Lead',
    description: 'End-to-end growth track covering Technical SEO, Paid Meta Ads, Google Ads, GA4, and Conversion Funnels.',
    roleTarget: 'Growth Manager',
    includedCoursesCount: 4,
    duration: '4 Months',
    iconName: 'TrendingUp',
    popular: false,
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'GA4 Analytics', 'Copywriting']
  },
  {
    id: 'startup-entrepreneur-track',
    title: 'Tech Founder & Business Leader Path',
    description: 'Combines Product Management, Startup Legalities, Financial Modeling, Tech Architecture, and Pitching.',
    roleTarget: 'Startup Founder / PM',
    includedCoursesCount: 4,
    duration: '4 Months',
    iconName: 'Rocket',
    popular: false,
    skills: ['Product Mgmt', 'Financial Modeling', 'Legal', 'Pitch Decks', 'Unit Economics']
  }
];
