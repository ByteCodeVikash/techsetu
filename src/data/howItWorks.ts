export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    stepNumber: '01',
    title: 'Choose your course',
    description: 'Browse our curated catalog across Technology, Coding, AI, Marketing, Business, and specialized domains.',
    iconName: 'BookOpen'
  },
  {
    stepNumber: '02',
    title: 'Learn from expert instructors',
    description: 'Gain practical knowledge from veteran practitioners with deep real-world industry experience.',
    iconName: 'Users'
  },
  {
    stepNumber: '03',
    title: 'Attend classes and practice',
    description: 'Participate in live cohorts or self-paced lessons, submit assignments, and build real portfolio projects.',
    iconName: 'Laptop'
  },
  {
    stepNumber: '04',
    title: 'Earn your certificate',
    description: 'Complete capstone evaluations to receive an official, verifiable TechSetu certificate to boost your career.',
    iconName: 'GraduationCap'
  }
];
