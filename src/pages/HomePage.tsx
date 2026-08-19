import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Code, TrendingUp, Cpu, CheckCircle2, ShieldCheck, Target, Users
} from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { COURSES } from '../data/courses';
import type { Course } from '../types';

interface HomePageProps {
  onSelectCourse: (course: Course) => void;
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCourse
}) => {
  // Select 6 core courses for the education section
  const displayCourses = COURSES.slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: HERO */}
      {/* ---------------------------------------------------- */}
      <section className="pt-10 sm:pt-16 pb-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                TECHSETU
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Bridge to <span className="text-blue-600">Future Skills</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Learn practical skills, build your career and grow your business with TechSetu.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/courses"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-2xs"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/services"
                  className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right Visual Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-lg p-6 sm:p-8 border border-slate-200 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                  <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    TS
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">TechSetu Learning & Services</h3>
                    <p className="text-xs text-slate-500">Education + IT & AI Agency</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200">
                    <span className="font-medium text-slate-800">Online Courses & Cohorts</span>
                    <span className="text-blue-600 font-semibold">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200">
                    <span className="font-medium text-slate-800">IT & Mobile Engineering</span>
                    <span className="text-blue-600 font-semibold">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200">
                    <span className="font-medium text-slate-800">AI Chatbots & Automation</span>
                    <span className="text-blue-600 font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: WHAT WE OFFER */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Everything you need to learn and grow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">Education</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Practical courses and live cohorts in software development, AI, data science, and business.
              </p>
              <Link to="/courses" className="text-xs font-semibold text-blue-600 hover:underline inline-block pt-1">
                Explore Courses &rarr;
              </Link>
            </div>

            {/* Item 2 */}
            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <Code className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">IT Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom web applications, e-commerce stores, mobile apps, and enterprise software engineering.
              </p>
              <Link to="/services/it" className="text-xs font-semibold text-blue-600 hover:underline inline-block pt-1">
                View IT Services &rarr;
              </Link>
            </div>

            {/* Item 3 */}
            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">Digital Marketing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                SEO audits, Google Ads, Meta paid acquisition, and performance marketing to scale leads.
              </p>
              <Link to="/services/digital-marketing" className="text-xs font-semibold text-blue-600 hover:underline inline-block pt-1">
                View Marketing &rarr;
              </Link>
            </div>

            {/* Item 4 */}
            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">AI Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                RAG chatbots, document automation, fine-tuned models, and AI workflow integration.
              </p>
              <Link to="/services/ai" className="text-xs font-semibold text-blue-600 hover:underline inline-block pt-1">
                View AI Services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: EDUCATION / COURSES */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                COURSES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Learn. Practice. Grow.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Hands-on courses designed for real skills and career advancement.
              </p>
            </div>
            <Link
              to="/courses"
              className="mt-3 sm:mt-0 text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              View All Courses &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      {/* SECTION 4: IT SERVICES */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              ENGINEERING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Technology services for your business
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              End-to-end software development and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900">Website Development</h3>
              <p className="text-xs text-slate-600">Fast, responsive React & Next.js websites built for performance.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900">E-commerce Development</h3>
              <p className="text-xs text-slate-600">Custom online stores with payment gateways and order management.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900">Custom Software</h3>
              <p className="text-xs text-slate-600">Bespoke CRMs, internal tools, and microservices for your workflow.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900">Mobile Apps</h3>
              <p className="text-xs text-slate-600">Cross-platform iOS and Android apps using React Native and Flutter.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1.5">
              <h3 className="text-sm font-bold text-slate-900">UI/UX Design</h3>
              <p className="text-xs text-slate-600">Clean user interface design, wireframes, and design token systems.</p>
            </div>

            <div className="p-4 bg-blue-50/60 rounded border border-blue-100 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Custom Technical Requirement?</h3>
                <p className="text-xs text-slate-600 mt-1">Talk to our engineering leads for a project review.</p>
              </div>
              <Link to="/contact" className="mt-3 text-xs font-semibold text-blue-600 hover:underline">
                Get a Quote &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 5: DIGITAL MARKETING + AI (COMBINED) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              GROWTH & AUTOMATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Digital Marketing & AI Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Left: Digital Marketing */}
            <div className="space-y-3 pr-0 md:pr-6 pb-6 md:pb-0">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                Digital Marketing
              </h3>
              <p className="text-xs text-slate-600">
                Data-driven strategies to acquire leads and scale customer reach.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Search Engine Optimization (SEO) & Technical Audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Google Search & Performance Max Campaigns</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Meta Paid Acquisition (Facebook & Instagram Ads)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Social Media Strategy & Content Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Email Automation & Funnel Optimization</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link to="/services/digital-marketing" className="text-xs font-semibold text-blue-600 hover:underline">
                  Learn about Marketing &rarr;
                </Link>
              </div>
            </div>

            {/* Right: AI Services */}
            <div className="space-y-3 pt-6 md:pt-0 pl-0 md:pl-6">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                AI Services
              </h3>
              <p className="text-xs text-slate-600">
                Integrate modern AI into your operational business workflows.
              </p>

              <ul className="space-y-2 text-xs text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Custom RAG AI Chatbots (Trained on internal documents)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>AI Workflow & Document Automation Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Fine-tuned Open-Source LLMs for Enterprise</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Private VPC AI Deployments & Zero Data Leak Security</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link to="/services/ai" className="text-xs font-semibold text-blue-600 hover:underline">
                  Learn about AI Solutions &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 6: WHY TECHSETU */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              VALUES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why TechSetu
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Practical Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focus on real hands-on projects, source code, and practical exercises.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Expert Guidance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn directly from experienced software engineers and industry practitioners.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <Target className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Career Focused</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Curricula aligned with actual requirements in corporate engineering roles.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border border-slate-200 space-y-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">Technology Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Professional engineering services to build and scale modern software applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 7: FINAL CTA */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-lg p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to take the next step?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Start learning new skills or talk to us about your technology needs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/courses"
              className="px-5 py-2.5 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors"
            >
              Explore Courses
            </Link>

            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-medium text-white border border-slate-700 hover:bg-slate-800 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
