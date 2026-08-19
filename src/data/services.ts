import type { ServiceItem } from '../types';

export const IT_SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Custom Web Application Development',
    category: 'it',
    description: 'High-performance React, Next.js, and TypeScript web applications with resilient cloud backends.',
    iconName: 'Globe',
    features: [
      'Modern Single Page & Server-Rendered Web Apps',
      'Pixel-Perfect Responsive UI/UX Design',
      'PostgreSQL & MongoDB Database Integration',
      'Vercel / AWS Cloud Infrastructure Setup'
    ]
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-Commerce Platform Development',
    category: 'it',
    description: 'Custom Shopify, WooCommerce, and headless e-commerce platforms built for conversion and speed.',
    iconName: 'ShoppingBag',
    features: [
      'Custom Storefront & Checkout Customization',
      'Payment Gateway Integration (Razorpay, Stripe)',
      'Inventory & ERP System Syncing',
      'Core Web Vitals Speed Optimization'
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Enterprise Software',
    category: 'it',
    description: 'Bespoke CRM, ERP, internal management tools, and API microservices tailored to your business workflow.',
    iconName: 'Code2',
    features: [
      'Custom Business Process Automation',
      'Role-Based Access Control (RBAC)',
      'REST & GraphQL API Engineering',
      'Legacy System Modernization'
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'iOS & Android App Development',
    category: 'it',
    description: 'Native and cross-platform React Native & Flutter mobile apps with intuitive mobile UX.',
    iconName: 'Smartphone',
    features: [
      'Cross-Platform iOS & Android Codebase',
      'Push Notifications & Offline Support',
      'App Store & Google Play Store Submission',
      'Real-Time Analytics Integration'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Design Systems',
    category: 'it',
    description: 'User-centered product design, interactive Figma prototypes, brand strategy, and design tokens.',
    iconName: 'Palette',
    features: [
      'User Research & Wireframing',
      'Figma Design Tokens & UI Component Libraries',
      'Clickable High-Fidelity Prototypes',
      'Usability Testing & Conversion Optimization'
    ]
  }
];

export const DIGITAL_MARKETING_SERVICES: ServiceItem[] = [
  {
    id: 'seo-audit-growth',
    title: 'Technical SEO & Organic Growth',
    category: 'marketing',
    description: 'Dominate Google search results with technical site audits, keyword strategies, and high-authority link building.',
    iconName: 'Search',
    features: [
      'Comprehensive Technical SEO Site Audit',
      'Keyword Research & Intent Mapping',
      'On-Page Schema & Content Optimization',
      'Ethical Backlink Acquisition'
    ]
  },
  {
    id: 'google-meta-ads',
    title: 'Google & Meta Paid Ad Campaigns',
    category: 'marketing',
    description: 'High-ROI performance marketing across Google Search, Performance Max, Instagram, and Facebook ads.',
    iconName: 'Target',
    features: [
      'Data-Driven Campaign Setup & Audience Targeting',
      'Ad Creative Design & Copywriting A/B Testing',
      'Conversion Tracking & GA4 Attribution',
      'Daily Budget & Bid Management'
    ]
  },
  {
    id: 'social-media-management',
    title: 'Social Media Strategy & Content',
    category: 'marketing',
    description: 'Build brand presence and community engagement across LinkedIn, Instagram, X (Twitter), and YouTube.',
    iconName: 'Share2',
    features: [
      'Content Calendar & Visual Branding',
      'Short-Form Video (Reels/Shorts) Editing',
      'LinkedIn Thought Leadership Strategy',
      'Community Moderation & Engagement'
    ]
  }
];

export const AI_SERVICES: ServiceItem[] = [
  {
    id: 'ai-chatbots-rag',
    title: 'Custom RAG AI Chatbots',
    category: 'ai',
    description: 'Intelligent AI assistants trained on your internal documentation, PDFs, knowledge base, and database tables.',
    iconName: 'Bot',
    features: [
      'Retrieval-Augmented Generation (RAG) Architecture',
      'Enterprise Document & SQL Data Ingestion',
      'Zero-Data-Retention Security Controls',
      'Multi-Channel Deployment (Web, WhatsApp, Slack)'
    ]
  },
  {
    id: 'workflow-automation',
    title: 'AI Workflow & Process Automation',
    category: 'ai',
    description: 'Automate repetitive back-office tasks, invoice parsing, customer onboarding, and data entry using AI agent pipelines.',
    iconName: 'Workflow',
    features: [
      'Custom Autonomous AI Agents',
      'Document OCR & Automated Data Extraction',
      'CRM & Email Automation Trigger Pipelines',
      'Operational Cost Reduction'
    ]
  },
  {
    id: 'llm-fine-tuning',
    title: 'Custom LLM Fine-Tuning & Deployment',
    category: 'ai',
    description: 'Fine-tune open-source models (Llama 3, Mistral) on proprietary enterprise data for private, self-hosted deployment.',
    iconName: 'Cpu',
    features: [
      'Domain-Specific Model Fine-Tuning (LoRA/QLoRA)',
      'Private VPC & On-Premises GPU Deployment',
      'Hallucination Reduction & Guardrails',
      'Ultra-Low Latency Inference Optimization'
    ]
  }
];
