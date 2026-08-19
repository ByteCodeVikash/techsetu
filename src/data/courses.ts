import type { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'fullstack-web-pro',
    title: 'Full Stack Web Development Masterclass',
    description: 'Build enterprise React 19 apps, Next.js 15, Node.js REST & GraphQL APIs, and deploy on AWS.',
    longDescription: 'Comprehensive 16-week immersive cohort taking you from JavaScript fundamentals to architecting scalable multi-tenant web applications. Covers React hooks, state management, Tailwind CSS, PostgreSQL, Prisma ORM, JWT authentication, and CI/CD automated deployments.',
    categoryId: 'full-stack',
    category: 'Full Stack Development',
    price: 3499,
    originalPrice: 7999,
    rating: 4.9,
    ratingCount: 1240,
    studentsCount: 4820,
    duration: '16 Weeks • Live + Recorded',
    level: 'Beginner to Advanced',
    format: 'Live Cohort',
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
    id: 'python-gen-ai',
    title: 'Python for AI & LLM Engineering',
    description: 'Build custom AI chatbots, RAG pipelines, LangChain applications, and fine-tune open-source LLMs.',
    longDescription: 'Production-ready artificial intelligence course. Master Python 3.12, PyTorch, Vector Databases (Pinecone/Chroma), OpenAI API integration, LangChain, LlamaIndex, and deploying containerized AI microservices.',
    categoryId: 'python-ai',
    category: 'Python & AI Engineering',
    price: 3999,
    originalPrice: 8999,
    rating: 4.95,
    ratingCount: 980,
    studentsCount: 3650,
    duration: '12 Weeks • Live + Projects',
    level: 'Intermediate',
    format: 'Live Cohort',
    badge: 'Hot & Trending',
    featured: true,
    instructor: {
      name: 'Dr. Ananya Sharma',
      role: 'AI Research Scientist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80'
    },
    skills: ['Python 3.12', 'Generative AI', 'RAG Pipelines', 'LangChain', 'Vector DBs', 'PyTorch'],
    modules: [
      'Module 1: Python Advanced Data Structures & Async Asyncio',
      'Module 2: Neural Networks & Deep Learning with PyTorch',
      'Module 3: Retrieval-Augmented Generation (RAG) Architecture',
      'Module 4: LangChain & Multi-Agent Autonomous Workflows',
      'Module 5: LLM Fine-Tuning & Production Guardrails'
    ]
  },
  {
    id: 'digital-marketing-pro',
    title: 'Performance Digital Marketing & SEO Growth',
    description: 'Scale acquisition funnels with Google Ads, Meta Paid Ads, Technical SEO, and conversion optimization.',
    longDescription: 'Data-driven marketing certification. Learn to setup high-converting sales funnels, manage 6-figure monthly ad spend, perform technical SEO site audits, track GTM analytics, and write persuasive ad copy.',
    categoryId: 'digital-marketing',
    category: 'Digital Marketing & Growth',
    price: 2499,
    originalPrice: 5999,
    rating: 4.85,
    ratingCount: 860,
    studentsCount: 2900,
    duration: '10 Weeks • Self-Paced + Live Q&A',
    level: 'All Levels',
    format: 'Hybrid',
    badge: 'High ROI',
    featured: true,
    instructor: {
      name: 'Rohan Mehta',
      role: 'Growth Marketing Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    },
    skills: ['Technical SEO', 'Google Performance Max', 'Meta Ads', 'GA4 Analytics', 'Copywriting'],
    modules: [
      'Module 1: SEO Architecture & On-Page / Off-Page Optimization',
      'Module 2: Google Search Ads & Performance Max Mastery',
      'Module 3: Facebook & Instagram Ads Scaling Funnels',
      'Module 4: Google Analytics 4 (GA4) & Event Tracking',
      'Module 5: Email Automation & Customer Lifecycle Marketing'
    ]
  },
  {
    id: 'data-analytics-bootcamp',
    title: 'Data Analytics & Business Intelligence',
    description: 'Transform raw data into business insights using SQL, Python pandas, Power BI, and Tableau.',
    longDescription: 'Learn to extract, clean, analyze, and visualize complex datasets. Includes real corporate datasets from retail, finance, and healthcare industries.',
    categoryId: 'data-science',
    category: 'Data Science & Machine Learning',
    price: 2999,
    originalPrice: 6999,
    rating: 4.8,
    ratingCount: 740,
    studentsCount: 2410,
    duration: '12 Weeks • Self-Paced',
    level: 'Beginner',
    format: 'Self-Paced',
    badge: 'Career Starter',
    featured: false,
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
    id: 'business-startup-bootcamp',
    title: 'Startup Founder & Business Leadership Playbook',
    description: 'From business idea to product-market fit, unit economics, fundraising pitch decks, and scaling teams.',
    longDescription: 'Practical business management course taught by active entrepreneurs. Covers business modeling, lean launchpads, startup legal structures, financial forecasting, and investor term sheets.',
    categoryId: 'business',
    category: 'Business & Entrepreneurship',
    price: 3199,
    originalPrice: 7499,
    rating: 4.9,
    ratingCount: 520,
    studentsCount: 1850,
    duration: '8 Weeks • Live Cohort',
    level: 'Intermediate',
    format: 'Live Cohort',
    badge: 'Executive',
    featured: true,
    instructor: {
      name: 'Rajesh Singhania',
      role: 'Venture Builder & Angel Investor',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80'
    },
    skills: ['Business Strategy', 'Financial Modeling', 'Pitch Decks', 'Unit Economics', 'Leadership'],
    modules: [
      'Module 1: Validating Business Ideas & Customer Discovery',
      'Module 2: Building Financial Models & Unit Economics',
      'Module 3: Pitch Deck Design & Investor Fundraising',
      'Module 4: Go-To-Market (GTM) Strategy & Scaling'
    ]
  },
  {
    id: 'forex-stock-mastery',
    title: 'Stock Market & Price Action Trading',
    description: 'Master technical analysis, risk management, candlestick patterns, and disciplined option trading.',
    longDescription: 'Comprehensive guide to financial markets. Understand market psychology, risk-to-reward ratios, technical indicators, swing trading strategies, and portfolio hedging.',
    categoryId: 'stock-forex',
    category: 'Stock Market & Forex Trading',
    price: 2799,
    originalPrice: 6499,
    rating: 4.88,
    ratingCount: 1100,
    studentsCount: 3900,
    duration: '8 Weeks • Live + Trading Simulator',
    level: 'Beginner to Intermediate',
    format: 'Live Cohort',
    badge: 'Popular',
    featured: false,
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
