import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Code, TrendingUp, Cpu, CheckCircle2, ShieldCheck, Target, Users, Star, Award, Check
} from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { COURSES } from '../data/courses';
import { TESTIMONIALS } from '../data/testimonials';
import type { Course } from '../types';

interface HomePageProps {
  onSelectCourse: (course: Course) => void;
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCourse
}) => {
  // Select featured courses for the education section
  const displayCourses = COURSES.slice(0, 6);
  const displayTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: HERO (With Subtle Background Tint & Visual Composition) */}
      {/* ---------------------------------------------------- */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-20 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/80 border border-blue-200 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-bold text-blue-800 tracking-wide uppercase">
                  TECHSETU
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Bridge to <span className="text-blue-600">Future Skills</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Learn practical skills, build your career and grow your business with technology.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/courses"
                  className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-2xs"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/services"
                  className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors"
                >
                  Explore Services
                </Link>
              </div>

              {/* Mini trust highlights below hero buttons */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>100% Practical</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Expert Mentors</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Verified Certificates</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (High Quality Imagery + Polished Floating Badges) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="TechSetu Engineering and Learning"
                  className="w-full h-[380px] sm:h-[440px] object-cover opacity-95 group-hover:scale-102 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

                {/* Floating Chip 1: Active Cohort */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-200 shadow-md flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900">Live Cohorts Enrolling</div>
                    <div className="text-[10px] text-slate-500 font-medium">React 19 & Python AI</div>
                  </div>
                </div>

                {/* Floating Chip 2: Enterprise IT Services */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-slate-900/90 backdrop-blur-md text-white px-4 py-3 rounded-lg border border-slate-700 shadow-lg flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center font-bold text-sm">
                      TS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">TechSetu Solutions Agency</div>
                      <div className="text-[11px] text-slate-300">Web • Mobile • Marketing • AI</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-blue-400 bg-blue-950/80 px-2 py-1 rounded border border-blue-800">
                    Verified
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: TRUST STRIP */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-medium text-slate-700">
          <div className="flex items-center gap-3 p-2 bg-white rounded border border-slate-200">
            <Users className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Expert-Led Learning</div>
              <div className="text-[11px] text-slate-500">Taught by active practitioners</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 bg-white rounded border border-slate-200">
            <Code className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Practical Projects</div>
              <div className="text-[11px] text-slate-500">Production-ready source code</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 bg-white rounded border border-slate-200">
            <Target className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Industry Skills</div>
              <div className="text-[11px] text-slate-500">Aligned with enterprise hiring</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 bg-white rounded border border-slate-200">
            <Award className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <div className="font-bold text-slate-900">Verified Certificates</div>
              <div className="text-[11px] text-slate-500">Sharable credential verification</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: EDITORIAL OVERVIEW / SERVICES SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading & Explanation */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
              OUR DIVISIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Everything you need to learn and grow
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              TechSetu operates as a unified platform bridging skill development for individuals with end-to-end digital engineering and marketing services for growing businesses.
            </p>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                View Full Service Catalog &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Visual Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Education */}
            <div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all space-y-2.5">
              <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Education & Bootcamps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Practical live cohorts in full-stack web development, Python AI engineering, data analytics, and marketing.
              </p>
              <Link to="/courses" className="text-xs font-semibold text-blue-600 hover:underline inline-block pt-1">
                Browse Courses &rarr;
              </Link>
            </div>

            {/* Card 2: IT Services */}
            <div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all space-y-2.5">
              <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">IT & Software Engineering</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom React & Next.js applications, mobile apps, e-commerce stores, and cloud backend microservices.
              </p>
              <Link to="/services/it" className="text-xs font-semibold text-blue-600 hover:underline inline-block pt-1">
                Explore IT Services &rarr;
              </Link>
            </div>

            {/* Card 3: Digital Marketing */}
            <div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all space-y-2.5">
              <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Digital Marketing & SEO</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Performance SEO, Google Search & Performance Max ads, Meta acquisition funnels, and GA4 analytics.
              </p>
              <Link to="/services/digital-marketing" className="text-xs font-semibold text-blue-600 hover:underline inline-block pt-1">
                Explore Marketing &rarr;
              </Link>
            </div>

            {/* Card 4: AI Services */}
            <div className="p-5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all space-y-2.5">
              <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">AI & Automation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom document RAG chatbots, LangChain workflows, process automation, and private LLM fine-tuning.
              </p>
              <Link to="/services/ai" className="text-xs font-semibold text-blue-600 hover:underline inline-block pt-1">
                Explore AI Solutions &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 4: FEATURED COURSES (Soft Slate-50 Background Rhythm) */}
      {/* ---------------------------------------------------- */}
      <section className="bg-slate-50 py-12 sm:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                ACADEMY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Featured Professional Courses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Hands-on training designed for real engineering skills and career growth.
              </p>
            </div>
            <Link
              to="/courses"
              className="px-4 py-2 text-xs font-semibold text-blue-600 bg-white hover:bg-blue-50 border border-slate-300 rounded transition-colors"
            >
              View All Courses &rarr;
            </Link>
          </div>

          {/* Grid of Courses with Thumbnail Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={onSelectCourse}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 5: IT SERVICES DIVISION (Commercial 2-Column Layout) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xs">
          
          {/* Left Column: Technology Visual Image */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[440px] bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="TechSetu Software Development Team"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                SOFTWARE ENGINEERING
              </span>
              <h3 className="text-lg font-bold">Enterprise Code Quality</h3>
              <p className="text-xs text-slate-300">
                Built with modern React, Next.js, Node.js, and cloud native architecture.
              </p>
            </div>
          </div>

          {/* Right Column: Service Details & Grid */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                IT SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Technology solutions for your business
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                We engineer scalable custom software, web platforms, and mobile applications tailored to your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="font-bold text-slate-900 mb-0.5">Website Development</div>
                <div className="text-[11px] text-slate-600">Fast, responsive React & Next.js applications.</div>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="font-bold text-slate-900 mb-0.5">E-commerce Stores</div>
                <div className="text-[11px] text-slate-600">Custom online shopping platforms & payment gateways.</div>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="font-bold text-slate-900 mb-0.5">Custom Software</div>
                <div className="text-[11px] text-slate-600">CRMs, ERPs, and automated workflow backends.</div>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="font-bold text-slate-900 mb-0.5">Mobile Applications</div>
                <div className="text-[11px] text-slate-600">Cross-platform iOS and Android apps with React Native.</div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Have a technical requirement?</span>
              <Link
                to="/services/it"
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
              >
                Discuss IT Project &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 6: DIGITAL MARKETING + AI (Dual Visual Columns) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              GROWTH & AUTOMATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Digital Marketing & AI Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left Card: Digital Marketing with Visual Banner */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between">
              <div>
                <div className="h-44 relative bg-slate-900 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                    alt="Digital Marketing Analytics"
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    MARKETING & GROWTH
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Performance Digital Marketing</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Data-driven customer acquisition strategies to scale qualified inbound leads and maximize marketing ROI.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Search Engine Optimization (SEO) & Technical Audits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Google Search & Performance Max Campaigns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Meta Paid Acquisition (Facebook & Instagram Ads)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>GA4 Conversion Analytics & Lead Funnels</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Measurable Lead Scaling</span>
                <Link to="/services/digital-marketing" className="text-xs font-bold text-blue-600 hover:underline">
                  View Marketing Services &rarr;
                </Link>
              </div>
            </div>

            {/* Right Card: AI Services with Visual Banner */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs flex flex-col justify-between">
              <div>
                <div className="h-44 relative bg-slate-900 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                    alt="AI Technology & Chatbots"
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    ENTERPRISE AI
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">Custom AI & Workflow Automation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deploy modern artificial intelligence pipelines to automate routine business tasks and document processing.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Custom RAG AI Chatbots (Trained on company docs)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>AI Document Extraction & PDF Processing Pipelines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Fine-tuned Open-Source LLMs for Enterprise</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Private VPC AI Deployments & Zero Data Leakage</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Secure AI Architecture</span>
                <Link to="/services/ai" className="text-xs font-bold text-blue-600 hover:underline">
                  View AI Services &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 7: WHY TECHSETU */}
      {/* ---------------------------------------------------- */}
      <section className="bg-slate-50 py-12 sm:py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              OUR STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Choose TechSetu
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">Practical Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focus on real hands-on code projects, git repositories, and practical exercises.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">Expert Guidance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn directly from experienced software architects and growth practitioners.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <Target className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">Career Focused</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Curricula aligned with current job market requirements in top tech companies.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">Technology Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reliable engineering services to build, scale, and maintain software applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 8: SOCIAL PROOF / TESTIMONIALS */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              What learners & clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayTestimonials.map(item => (
              <div key={item.id} className="p-6 bg-white rounded-xl border border-slate-200 flex flex-col justify-between space-y-4 shadow-2xs">
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{item.feedback}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.name}</div>
                    <div className="text-[11px] text-slate-500">{item.role} &bull; {item.companyOrCollege}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 9: BRANDED FINAL CTA */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-12 text-center space-y-4 border border-slate-800 shadow-xl">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
            GET STARTED TODAY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to take the next step?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Start learning career-ready tech skills or consult with our engineering team for your business project.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              to="/courses"
              className="px-6 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors shadow-2xs"
            >
              Explore Courses
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-semibold text-white border border-slate-700 hover:bg-slate-800 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
