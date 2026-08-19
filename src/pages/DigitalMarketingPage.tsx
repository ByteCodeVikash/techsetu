import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { DIGITAL_MARKETING_SERVICES } from '../data/services';

interface DigitalMarketingPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Hero Header with Visual Column */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-7 p-6 sm:p-10 space-y-4 flex flex-col justify-center">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
            MARKETING & GROWTH DIVISION
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Performance Digital Marketing Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Scale customer acquisition with technical SEO audits, Google Search & Performance Max ads, Meta paid campaigns, GA4 conversion analytics, and high-converting marketing funnels.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenInquiry('service', 'Discuss Digital Marketing Project')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
            >
              Request Growth Audit
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 h-64 lg:h-auto relative bg-slate-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
            alt="Digital Marketing Analytics"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Marketing Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DIGITAL_MARKETING_SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onInquire={() => onOpenInquiry('service', `Inquire: ${service.title}`)}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
