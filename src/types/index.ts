export interface Instructor {
  name: string;
  role: string;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  categoryId: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  ratingCount: number;
  studentsCount: number;
  duration: string;
  level: string;
  format: string;
  badge?: string;
  featured?: boolean;
  instructor: Instructor;
  skills: string[];
  modules?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
  coursesCount: number;
}

export interface Bundle {
  id: string;
  title: string;
  description: string;
  roleTarget: string;
  includedCoursesCount: number;
  duration: string;
  iconName: string;
  popular?: boolean;
  skills: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'it' | 'marketing' | 'ai';
  description: string;
  iconName: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'education' | 'services' | 'certifications' | 'membership' | 'general';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrCollege: string;
  avatar: string;
  feedback: string;
  rating: number;
  courseOrService: string;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
}
