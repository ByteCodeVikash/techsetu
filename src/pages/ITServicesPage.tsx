import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { IT_SERVICES } from '../data/services';

interface ITServicesPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const ITServicesPage: React.FC<ITServicesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Hero Header */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
          ENGINEERING
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          IT & Software Services
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          We build custom web applications, e-commerce platforms, mobile apps, and enterprise software designed for reliability and performance.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onOpenInquiry('service', 'Discuss IT Services Project')}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
          >
            Discuss Your Project
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Engineering Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {IT_SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onInquire={() => onOpenInquiry('service', `Inquire: ${service.title}`)}
            />
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-6">
        <SectionHeader
          badge="PROCESS"
          title="Development Lifecycle"
          subtitle="Our structured process ensures clear scope, code quality, and on-time delivery."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-blue-600">01. Discovery</div>
            <p className="text-xs text-slate-600">Requirements analysis, technical architecture design, and project roadmap.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-blue-600">02. UI/UX Design</div>
            <p className="text-xs text-slate-600">Wireframes, user flows, and responsive visual interfaces.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-blue-600">03. Engineering</div>
            <p className="text-xs text-slate-600">Iterative development, API integration, and thorough testing.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-blue-600">04. Deployment</div>
            <p className="text-xs text-slate-600">Production launch, cloud setup, and post-launch support.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
