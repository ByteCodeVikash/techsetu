import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, Code, BarChart3, Bot, BookOpen, Award, CheckCircle2,
  Users, ShieldCheck, Star, Check, ArrowRight, UserCheck
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
  onSelectCourse,
  onOpenInquiry
}) => {
  const displayCourses = COURSES.slice(0, 6);
  const displayTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-20 bg-gradient-to-b from-slate-50/60 via-blue-50/20 to-white border-b border-slate-200/60 overflow-hidden">
        
        {/* Subtle Decorative Dot Matrix Grid (Top Right) */}
        <div className="absolute top-10 right-12 hidden lg:grid grid-cols-4 gap-2 opacity-30 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 z-10">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-50/80 text-blue-600 border border-blue-100/90 rounded-full text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Trusted by 10K+ Learners</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Bridge to <br className="hidden sm:inline" />
                <span className="text-blue-600">Future Skills</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                Learn practical skills, build your career and grow your business with technology.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/courses"
                  className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-2xs"
                >
                  Explore Courses
                </Link>

                <Link
                  to="/services"
                  className="px-6 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-colors shadow-2xs"
                >
                  Our Services
                </Link>
              </div>

              {/* Bottom Feature Badges */}
              <div className="pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span>Practical Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span>Industry Recognized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span>Certificates</span>
                </div>
              </div>

            </div>

            {/* Right Column Visual (Exact Pixel-Perfect Reference Visual Asset) */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white">
                  <img
                    src="/hero_man_desk.png"
                    alt="TechSetu Professional Learning Platform"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: WHAT WE OFFER (Division Cards) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
            WHAT WE OFFER
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Everything you need to learn and grow
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Education */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-40 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                  alt="Education"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 left-4 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 pt-7 space-y-2">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Education
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Online courses, live classes, recorded lectures and certifications.
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-1">
              <Link to="/courses" className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                <span>Explore Education</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: IT Services */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-40 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="IT Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 left-4 w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <Code className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 pt-7 space-y-2">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  IT Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom software, web, and mobile application development.
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-1">
              <Link to="/services/it" className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                <span>Explore IT Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Digital Marketing */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-40 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                  alt="Digital Marketing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 left-4 w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                  <BarChart3 className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 pt-7 space-y-2">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Digital Marketing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Grow your brand, generate leads and increase your revenue.
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-1">
              <Link to="/services/digital-marketing" className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                <span>Explore Marketing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: AI Services */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="relative h-40 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                  alt="AI Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 left-4 w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
              </div>

              <div className="p-5 pt-7 space-y-2">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  AI Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  AI chatbots, automation and intelligent business solutions.
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-1">
              <Link to="/services/ai" className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                <span>Explore AI Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: FEATURED COURSES */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              FEATURED COURSES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Popular courses to accelerate your career
            </h2>
          </div>
          <Link
            to="/courses"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 4: DUAL COMMERCIAL BANNER CARDS */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: IT SERVICES */}
          <div className="bg-blue-50/50 rounded-2xl p-6 sm:p-8 border border-blue-100/80 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                IT SERVICES
              </span>
              
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                Technology solutions for your business
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We build reliable, scalable and secure digital solutions tailored to your business needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Website Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>E-commerce Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Custom Software</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Mobile App Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>UI/UX Design</span>
                </div>
              </div>
            </div>

            {/* Bottom Visual & CTA */}
            <div className="space-y-4 pt-2">
              <div className="rounded-xl border border-slate-200/80 overflow-hidden shadow-xs h-56 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Software Engineering Team"
                  className="w-full h-full object-cover opacity-95"
                />
              </div>

              <button
                onClick={() => onOpenInquiry('service', 'Discuss IT Services')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
              >
                Discuss Your Project
              </button>
            </div>
          </div>

          {/* Card 2: DIGITAL MARKETING & AI */}
          <div className="bg-emerald-50/40 rounded-2xl p-6 sm:p-8 border border-emerald-100/80 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
                DIGITAL MARKETING & AI
              </span>

              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                Grow your business with our expertise
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Data-driven marketing strategies and AI solutions to help you stay ahead.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 pt-2 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>SEO & Performance Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Social Media Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AI Chatbots & Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AI-Powered Workflows</span>
                </div>
              </div>
            </div>

            {/* Bottom Visual & CTA (Smartphone layout with floating Google/FB/IG icons) */}
            <div className="space-y-4 pt-2">
              <div className="relative rounded-xl border border-slate-200/80 overflow-hidden shadow-xs h-56 bg-slate-50 flex items-center justify-center">
                
                {/* Smartphone screen photo with chart */}
                <div className="relative w-44 h-48 bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden p-2 flex flex-col justify-between">
                  <div className="h-full w-full rounded-lg overflow-hidden bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                      alt="Analytics Mobile Chart"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Social Badges */}
                {/* Google Badge (Left) */}
                <div className="absolute left-6 top-10 w-9 h-9 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center font-bold text-red-500 text-sm">
                  G
                </div>

                {/* Facebook Badge (Right Top) */}
                <div className="absolute right-8 top-8 w-9 h-9 rounded-full bg-blue-600 text-white shadow-md flex items-center justify-center font-bold text-sm">
                  f
                </div>

                {/* Instagram Badge (Right Bottom) */}
                <div className="absolute right-6 bottom-10 w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md flex items-center justify-center font-bold text-xs">
                  IG
                </div>

              </div>

              <button
                onClick={() => onOpenInquiry('service', 'Discuss Marketing & AI')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs"
              >
                Explore Solutions
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 5: STATISTICS STRIP */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-2xs grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">10K+</div>
              <div className="text-xs text-slate-500 font-medium">Happy Learners</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">200+</div>
              <div className="text-xs text-slate-500 font-medium">Expert Instructors</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">100+</div>
              <div className="text-xs text-slate-500 font-medium">Courses</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900">95%</div>
              <div className="text-xs text-slate-500 font-medium">Satisfaction Rate</div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 6: WHAT OUR LEARNERS SAY */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
              WHAT OUR LEARNERS SAY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Real stories from real people
            </h2>
          </div>
          <Link
            to="/about"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            <span>View All Testimonials</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayTestimonials.map(item => (
            <div key={item.id} className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed">
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
                  <div className="text-[11px] text-slate-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 7: READY TO TAKE THE NEXT STEP? (CTA BANNER) */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          
          {/* Left Text & Action Buttons */}
          <div className="space-y-4 max-w-xl z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to take the next step?
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Start learning new skills or talk to us about your technology needs.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/courses"
                className="px-6 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors shadow-2xs"
              >
                Explore Courses
              </Link>

              <Link
                to="/contact"
                className="px-6 py-2.5 text-xs font-semibold text-white border border-white/60 hover:bg-white/10 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Visual Image Cutout */}
          <div className="relative w-full md:w-80 h-56 md:h-64 shrink-0 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Join TechSetu"
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-white/20"
            />
          </div>

        </div>
      </section>

    </div>
  );
};
