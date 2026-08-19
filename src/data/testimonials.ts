import type { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rohan Sharma',
    role: 'Software Developer',
    companyOrCollege: 'TechSetu Learner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    feedback: 'TechSetu helped me transition from a beginner to a professional developer. The courses are practical and easy to follow.',
    rating: 5,
    courseOrService: 'Full Stack Web Development'
  },
  {
    id: '2',
    name: 'Priya Mehta',
    role: 'Marketing Manager',
    companyOrCollege: 'Growth Agency Client',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    feedback: 'The digital marketing course helped our business grow 3X in just 4 months.',
    rating: 5,
    courseOrService: 'Digital Marketing Services'
  },
  {
    id: '3',
    name: 'Arvind Patel',
    role: 'Operations Head',
    companyOrCollege: 'Enterprise Client',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    feedback: 'Their AI automation solutions saved us hundreds of hours of manual work.',
    rating: 5,
    courseOrService: 'AI & Automation Services'
  }
];
