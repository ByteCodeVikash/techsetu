import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { IT_SERVICES } from '../data/services';

interface ITServicesPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const ITServicesPage: React.FC<ITServicesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 sm:p-14 text-white shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="px-3.5 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-950 border border-blue-800 rounded-md">
            IT Engineering Division
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Build Better Digital Products
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            TechSetu provides full-stack software development, custom e-commerce engines, native mobile apps, and enterprise UI/UX design built for modern scale.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenInquiry('service', 'Discuss IT Services Project')}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Engineering Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IT_SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onInquire={() => onOpenInquiry('service', `Inquire: ${service.title}`)}
            />
          ))}
        </div>
      </div>

      {/* Engineering Process */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 space-y-8">
        <SectionHeader
          badge="Development Lifecycle"
          title="How We Engineer Your Solution"
          subtitle="A structured agile process ensuring clear milestones, daily communication, and clean maintainable code."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="text-xl font-bold text-blue-600 mb-1">01. Discovery</div>
            <p className="text-xs text-slate-600">Technical requirements review, scope mapping, database schema design, and architecture blueprinting.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="text-xl font-bold text-blue-600 mb-1">02. Design & UI/UX</div>
            <p className="text-xs text-slate-600">Figma wireframes, component design tokenization, interactive clickable prototypes, and design feedback.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="text-xl font-bold text-blue-600 mb-1">03. Sprint Execution</div>
            <p className="text-xs text-slate-600">Iterative code development in React, Node.js, TypeScript, PostgreSQL, unit testing, and weekly demos.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="text-xl font-bold text-blue-600 mb-1">04. Deployment</div>
            <p className="text-xs text-slate-600">Production release on AWS/Vercel, SSL security, performance tuning, and 90-day post-launch support.</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-blue-600 text-white rounded-3xl p-10 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Architect Your Digital Product?</h2>
        <p className="text-sm text-blue-100 max-w-lg mx-auto">
          Contact our lead software architect for a detailed proposal and technical estimate.
        </p>
        <button
          onClick={() => onOpenInquiry('service', 'IT Project Proposal Request')}
          className="px-6 py-3 text-sm font-bold text-blue-600 bg-white hover:bg-blue-50 rounded-xl shadow-md"
        >
          Request IT Proposal &rarr;
        </button>
      </div>

    </div>
  );
};
