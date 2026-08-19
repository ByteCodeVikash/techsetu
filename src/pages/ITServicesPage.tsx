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
      
      {/* Hero Header with Visual Column */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-7 p-6 sm:p-10 space-y-4 flex flex-col justify-center">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
            ENGINEERING DIVISION
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            IT & Software Engineering Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            We build custom React & Next.js web applications, e-commerce platforms, cross-platform mobile apps, and enterprise microservices engineered for performance and scalability.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenInquiry('service', 'Discuss IT Services Project')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
            >
              Discuss Your Project
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 h-64 lg:h-auto relative bg-slate-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="Software Development"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
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

      {/* Development Lifecycle */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <SectionHeader
          badge="PROCESS"
          title="Development Lifecycle"
          subtitle="Our structured engineering process ensures clear scope, high code quality, and on-time delivery."
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
            <p className="text-xs text-slate-600">Production launch, cloud setup, and post-launch maintenance.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
