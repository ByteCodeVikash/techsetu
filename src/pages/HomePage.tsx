import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles, ArrowRight, CheckCircle2, BookOpen, Cpu
} from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { CourseCard } from '../components/CourseCard';
import { CategoryCard } from '../components/CategoryCard';
import { ServiceCard } from '../components/ServiceCard';
import { BundleCard } from '../components/BundleCard';
import { PricingCard } from '../components/PricingCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { CertificateMockup } from '../components/CertificateMockup';

import { CATEGORIES } from '../data/categories';
import { COURSES } from '../data/courses';
import { BUNDLES } from '../data/bundles';
import { PRICING_PLANS } from '../data/pricing';
import { IT_SERVICES, DIGITAL_MARKETING_SERVICES, AI_SERVICES } from '../data/services';
import { WHY_TECHSETU } from '../data/whyUs';
import { HOW_IT_WORKS } from '../data/howItWorks';
import { TESTIMONIALS } from '../data/testimonials';
import type { Course } from '../types';

interface HomePageProps {
  onSelectCourse: (course: Course) => void;
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCourse,
  onOpenInquiry
}) => {
  const navigate = useNavigate();
  const featuredCourses = COURSES.filter(c => c.featured);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* SECTION 6: HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-teal-100/20 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Next-Gen EdTech & Technology Agency Platform</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Bridge to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Future Skills</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                TechSetu provides industry-aligned practical learning, professional courses, live cohort masterclasses, verified certifications, and enterprise IT, digital marketing, and AI engineering services.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 transition-all hover:scale-102"
                >
                  Explore Courses <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-2xs transition-all"
                >
                  Explore Services &rarr;
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Expert-Led Learning</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Practical Skills</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Certifications</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Live + Recorded</span>
                </div>
              </div>

            </div>

            {/* Right Column Visual Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                      TS
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">TechSetu Learning Hub</h4>
                      <p className="text-xs text-slate-500">Live Cohort & Active Projects</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200">
                    Live Session Active
                  </span>
                </div>

                {/* Mock Visual Code / Course Window */}
                <div className="bg-slate-900 rounded-xl p-4 text-slate-200 text-xs font-mono space-y-2 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-800">
                    <span>main.tsx — FullStackApp</span>
                    <span className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    </span>
                  </div>
                  <div className="text-blue-400">import <span className="text-purple-400">{"{ TechSetuProvider }"}</span> from <span className="text-emerald-300">'@techsetu/core'</span>;</div>
                  <div className="text-slate-400">// Bridge your knowledge to future engineering skills</div>
                  <div><span className="text-purple-400">const</span> app = <span className="text-yellow-300">initPlatform</span>({`{ liveClasses: true, aiServices: true }`});</div>
                  <div className="text-emerald-400 font-semibold pt-1">✓ Capstone Verification: PASSED</div>
                </div>

                {/* Live Card Overlay */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-blue-600 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">120+ Courses</div>
                      <div className="text-[10px] text-slate-500">Live & Self-Paced</div>
                    </div>
                  </div>

                  <div className="p-3 bg-indigo-50/80 rounded-xl border border-indigo-100 flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-indigo-600 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">IT & AI Agency</div>
                      <div className="text-[10px] text-slate-500">Enterprise Solutions</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 7: EDUCATION SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-950 border border-blue-800 rounded-md">
                Education Ecosystem
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Learn Skills That Move Your Career Forward
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you are looking to master full-stack software development, dive into artificial intelligence, scale performance marketing, or learn business fundamentals, TechSetu offers a structured pathway.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Online Courses
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Live Interactive Classes
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Recorded HD Lectures
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Industry Certifications
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Corporate Training Programs
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-blue-50 rounded-xl transition-colors"
                >
                  Explore Education &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-center">
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700/80">
                <div className="text-3xl font-extrabold text-blue-400">15,000+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Students Enrolled</div>
              </div>
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700/80">
                <div className="text-3xl font-extrabold text-blue-400">94%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Completion & Placement Rate</div>
              </div>
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700/80">
                <div className="text-3xl font-extrabold text-blue-400">50+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Expert Instructors</div>
              </div>
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700/80">
                <div className="text-3xl font-extrabold text-blue-400">4.9 / 5</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Average Student Rating</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 8: COURSE CATEGORIES */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curated Domains"
          title="Browse Course Categories"
          subtitle="Explore practical curricula across technology, coding, artificial intelligence, marketing, business, legal, and specialized fields."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {CATEGORIES.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 9: FEATURED COURSES */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 border border-blue-200/80 rounded-md mb-2">
              Featured Programs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Courses & Cohorts
            </h2>
          </div>
          <Link
            to="/courses"
            className="mt-4 md:mt-0 text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            View All Courses &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 10: CAREER BUNDLES */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Structured Learning Paths"
          title="Career Track Bundles"
          subtitle="Step-by-step career programs designed to take you from foundational concepts to job-ready expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUNDLES.map(bundle => (
            <BundleCard
              key={bundle.id}
              bundle={bundle}
              onExplore={() => navigate(`/courses?bundle=${bundle.id}`)}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 12: IT SERVICES */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 border border-blue-200/80 rounded-md mb-2">
              Engineering Division
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Build Better Digital Products
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              End-to-end IT services from frontend design systems to backend cloud architectures.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('service', 'Discuss IT Services Project')}
            className="mt-4 md:mt-0 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-2xs"
          >
            Discuss Your Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IT_SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onInquire={() => onOpenInquiry('service', `Inquire: ${service.title}`)}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 13: DIGITAL MARKETING */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-emerald-700 uppercase bg-emerald-100 rounded-md">
              Growth & Advertising
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Scale Your Business with Digital Marketing
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We engineer high-ROI growth strategies across SEO, paid acquisition, social media, and lifecycle automation to increase your visibility and customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIGITAL_MARKETING_SERVICES.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onInquire={() => onOpenInquiry('service', `Inquire: ${service.title}`)}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenInquiry('service', 'Digital Marketing Strategy Consultation')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs"
            >
              Grow Your Business &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 14: AI SERVICES */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-indigo-900/60 shadow-xl">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/60 border border-purple-700/80 rounded-md">
              Artificial Intelligence & Automation
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Turn AI Into a Business Advantage
            </h2>
            <p className="text-sm sm:text-base text-indigo-200 leading-relaxed">
              Deploy custom RAG chatbots, automated workflow pipelines, and private fine-tuned language models designed for enterprise operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI_SERVICES.map(service => (
              <div key={service.id} className="bg-slate-900/80 border border-indigo-800/50 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-900/80 text-purple-300 flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-xs text-indigo-200 leading-relaxed">{service.description}</p>
                </div>
                <button
                  onClick={() => onOpenInquiry('service', `AI Solution Consult: ${service.title}`)}
                  className="mt-6 text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1"
                >
                  Explore AI Solution &rarr;
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenInquiry('service', 'AI Solutions Consultation')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-purple-400 hover:bg-purple-300 rounded-xl shadow-md"
            >
              Explore AI Solutions &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 11: MEMBERSHIP SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Simple Subscription"
          title="Flexible Membership Plans"
          subtitle="Gain access to curated courses, live cohort sessions, mentor feedback, and continuous skill updates."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map(plan => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelectPlan={() => navigate('/membership')}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/membership"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline"
          >
            View Detailed Membership Plans & Feature Comparison &rarr;
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 15: WHY TECHSETU */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Differentiators"
          title="Why TechSetu?"
          subtitle="Built for ambitious learners, engineers, and companies seeking trustworthy technology education and execution."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WHY_TECHSETU.map(point => (
            <div key={point.id} className="p-5 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{point.title}</h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 16: HOW IT WORKS */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <SectionHeader
            badge="Learning Workflow"
            title="How TechSetu Works"
            subtitle="Four simple steps from selecting your learning path to earning your industry certificate."
            className="text-white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map(step => (
              <div key={step.stepNumber} className="relative p-6 bg-slate-800/90 rounded-2xl border border-slate-700">
                <div className="text-3xl font-extrabold text-blue-400 mb-2">{step.stepNumber}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 17: TESTIMONIALS */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Social Proof"
          title="Loved by Students & Business Leaders"
          subtitle="Real reviews from learners and partners who switch careers and scale products with TechSetu."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 18: CERTIFICATION */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-blue-50/70 rounded-3xl p-8 sm:p-12 border border-blue-100">
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-md">
              Verified Credential
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Show What You Know
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Students who successfully complete eligible courses receive official TechSetu certificates backed by capstone project verification. Share your achievement on LinkedIn, GitHub, or directly with employers.
            </p>

            <div className="pt-2">
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs"
              >
                Explore Certifications &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <CertificateMockup />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 19: CORPORATE TRAINING */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-teal-400 uppercase bg-teal-950 border border-teal-800 rounded-md">
              Enterprise Upskilling
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Upskill Your Team
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              TechSetu provides customized corporate training programs in Full-Stack Engineering, Generative AI, Performance Digital Marketing, and Business Leadership tailored to your company's technology stack.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry('service', 'Corporate Training Inquiry')}
            className="px-6 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-teal-50 rounded-xl transition-colors shrink-0"
          >
            Talk to Our Team
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 20: FINAL CTA */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-3xl p-10 sm:p-16 text-white shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ready to Build Your Future?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Learn new skills, earn verified certifications, and turn knowledge into real career opportunities and business growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/courses"
              className="px-6 py-3.5 text-sm font-bold text-blue-600 bg-white hover:bg-blue-50 rounded-xl shadow-md transition-all"
            >
              Explore Courses
            </Link>

            <button
              onClick={() => onOpenInquiry('course')}
              className="px-6 py-3.5 text-sm font-bold text-white bg-blue-900/60 hover:bg-blue-900 border border-blue-400/40 rounded-xl transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
