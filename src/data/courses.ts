import type { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'fullstack-web-dev',
    title: 'Full Stack Web Development',
    description: 'Build enterprise React 19 apps, Next.js 15, Node.js REST APIs, and deploy on AWS.',
    longDescription: 'Comprehensive 16-week immersive cohort taking you from JavaScript fundamentals to architecting scalable multi-tenant web applications.',
    categoryId: 'full-stack',
    category: 'Full Stack Development',
    price: 3499,
    originalPrice: 6999,
    rating: 4.7,
    ratingCount: 1200,
    studentsCount: 4820,
    duration: '16 Weeks • Live + Recorded',
    level: 'Beginner to Advanced',
    format: 'Live Cohort',
    image: '/course_thumb_1.png',
    badge: 'Bestseller',
    featured: true,
    instructor: {
      name: 'Vikash Dubey',
      role: 'Lead Full-Stack Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80'
    },
    skills: ['React 19', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
    modules: [
      'Module 1: Modern JavaScript ES6+ & TypeScript Essentials',
      'Module 2: React 19 Architecture & State Management',
      'Module 3: Serverless Backend & Node.js API Microservices',
      'Module 4: PostgreSQL, Database Modeling & Prisma ORM',
      'Module 5: Real-World Capstone App & AWS Cloud Deployment'
    ]
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    description: 'Master Python 3.12, NumPy, pandas, data visualization, and machine learning fundamentals.',
    longDescription: 'Master data analysis, scientific computing, and statistical modeling with Python.',
    categoryId: 'python-ai',
    category: 'Programming',
    price: 3199,
    originalPrice: 6999,
    rating: 4.6,
    ratingCount: 982,
    studentsCount: 3650,
    duration: '12 Weeks • Live + Projects',
    level: 'Intermediate',
    format: 'Live Cohort',
    image: '/course_thumb_2.png',
    featured: true,
    instructor: {
      name: 'Dr. Ananya Sharma',
      role: 'AI Research Scientist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80'
    },
    skills: ['Python 3.12', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'SQL'],
    modules: [
      'Module 1: Python Fundamentals & Data Structures',
      'Module 2: Data Wrangling & Manipulation with Pandas',
      'Module 3: Statistical Analysis & Data Visualization',
      'Module 4: Introduction to Machine Learning Algorithms'
    ]
  },
  {
    id: 'ai-machine-learning',
    title: 'Artificial Intelligence & ML',
    description: 'Build custom AI chatbots, RAG pipelines, LangChain applications, and fine-tune open-source LLMs.',
    longDescription: 'Production-ready artificial intelligence course. Master Python, PyTorch, Vector Databases, OpenAI API, LangChain, and LLMs.',
    categoryId: 'python-ai',
    category: 'AI & Machine Learning',
    price: 4999,
    originalPrice: 8999,
    rating: 4.8,
    ratingCount: 1100,
    studentsCount: 3900,
    duration: '14 Weeks • Live Cohort',
    level: 'Advanced',
    format: 'Live Cohort',
    image: '/course_thumb_3.png',
    featured: true,
    instructor: {
      name: 'Dr. Ananya Sharma',
      role: 'AI Research Scientist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80'
    },
    skills: ['Generative AI', 'RAG Pipelines', 'LangChain', 'Vector DBs', 'PyTorch', 'LLMs'],
    modules: [
      'Module 1: Neural Networks & Deep Learning with PyTorch',
      'Module 2: Retrieval-Augmented Generation (RAG) Architecture',
      'Module 3: LangChain & Multi-Agent Autonomous Workflows',
      'Module 4: LLM Fine-Tuning & Production Guardrails'
    ]
  },
  {
    id: 'digital-marketing-masterclass',
    title: 'Digital Marketing Masterclass',
    description: 'Scale acquisition funnels with Google Ads, Meta Paid Ads, Technical SEO, and conversion optimization.',
    longDescription: 'Data-driven marketing certification. Learn to setup high-converting sales funnels, manage paid ad spend, and perform technical SEO audits.',
    categoryId: 'digital-marketing',
    category: 'Digital Marketing',
    price: 2499,
    originalPrice: 4999,
    rating: 4.5,
    ratingCount: 664,
    studentsCount: 2900,
    duration: '10 Weeks • Self-Paced',
    level: 'All Levels',
    format: 'Hybrid',
    image: '/course_thumb_4.png',
    featured: true,
    instructor: {
      name: 'Rohan Mehta',
      role: 'Growth Marketing Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    },
    skills: ['Technical SEO', 'Google Search Ads', 'Meta Ads', 'GA4 Analytics', 'Copywriting'],
    modules: [
      'Module 1: SEO Architecture & On-Page / Off-Page Optimization',
      'Module 2: Google Search Ads & Performance Max Mastery',
      'Module 3: Facebook & Instagram Ads Scaling Funnels',
      'Module 4: Google Analytics 4 (GA4) & Event Tracking'
    ]
  },
  {
    id: 'data-science-analytics',
    title: 'Data Science & Analytics',
    description: 'Transform raw data into business insights using SQL, Python pandas, Power BI, and Tableau dashboards.',
    longDescription: 'Learn to extract, clean, analyze, and visualize complex datasets. Includes real corporate datasets.',
    categoryId: 'data-science',
    category: 'Data Science',
    price: 3999,
    originalPrice: 6999,
    rating: 4.7,
    ratingCount: 753,
    studentsCount: 2410,
    duration: '12 Weeks • Self-Paced',
    level: 'Beginner',
    format: 'Self-Paced',
    image: '/course_thumb_5.png',
    featured: true,
    instructor: {
      name: 'Neha Kapoor',
      role: 'Senior Data Strategist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80'
    },
    skills: ['SQL', 'Python Pandas', 'Power BI', 'Tableau', 'Excel Dashboards'],
    modules: [
      'Module 1: Advanced SQL Queries & Joins',
      'Module 2: Data Wrangling with Pandas & NumPy',
      'Module 3: Power BI Interactive Business Dashboards',
      'Module 4: Storytelling with Data Visualization'
    ]
  },
  {
    id: 'stock-market-trading',
    title: 'Stock Market & Trading',
    description: 'Master technical analysis, risk management, candlestick patterns, and disciplined option trading.',
    longDescription: 'Comprehensive guide to financial markets. Understand market psychology, risk-to-reward ratios, technical indicators, and swing trading.',
    categoryId: 'stock-forex',
    category: 'Finance',
    price: 2799,
    originalPrice: 4999,
    rating: 4.6,
    ratingCount: 612,
    studentsCount: 3900,
    duration: '8 Weeks • Live Cohort',
    level: 'Beginner to Intermediate',
    format: 'Live Cohort',
    image: '/course_thumb_6.png',
    badge: 'New',
    featured: true,
    instructor: {
      name: 'Karan Verma',
      role: 'Full-Time Derivatives Trader',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80'
    },
    skills: ['Technical Analysis', 'Price Action', 'Options Strategies', 'Risk Management', 'Forex'],
    modules: [
      'Module 1: Market Structure & Support / Resistance',
      'Module 2: Candlestick Patterns & Trendline Breakouts',
      'Module 3: Options Greeks & Hedging Strategies',
      'Module 4: Trading Psychology & Risk Management'
    ]
  }
];
