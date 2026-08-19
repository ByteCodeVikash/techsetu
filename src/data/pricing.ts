import type { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic-pass',
    name: 'Basic Access Pass',
    price: '₹499',
    billingPeriod: '/ month',
    description: 'Essential self-paced learning pass for foundational tech & business skills.',
    features: [
      'Access to 20+ Self-Paced Recorded Courses',
      'High-Definition Video Lectures & Quizzes',
      'Downloadable Code Repositories & Study Notes',
      'Standard Community Forum Support'
    ],
    ctaText: 'Start Basic Plan',
    highlighted: false
  },
  {
    id: 'pro-cohort-pass',
    name: 'Pro Cohort Membership',
    price: '₹999',
    billingPeriod: '/ month',
    description: 'Our most popular subscription for active learners seeking live classes and verified certificates.',
    features: [
      'Access to ALL 120+ Recorded & Live Courses',
      'Weekly Interactive Live Masterclasses & Q&A',
      'Official Verified Certificate of Completion',
      'Capstone Code & Portfolio Reviews by Mentors',
      'Dedicated Discord Study Cohorts'
    ],
    ctaText: 'Join Pro Cohort',
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    id: 'premium-career-pass',
    name: 'Premium Career Pass',
    price: '₹2,499',
    billingPeriod: '/ month',
    description: 'Full-suite membership with 1-on-1 mentorship, job placement assistance, and priority support.',
    features: [
      'Everything in Pro Cohort Membership',
      '1-on-1 Monthly Technical Mentor Guidance',
      'Resume & LinkedIn Profile Optimization',
      'Mock Technical Interviews & Referral Network',
      '10% Discount on TechSetu IT & AI Services'
    ],
    ctaText: 'Get Premium Pass',
    highlighted: false
  }
];
