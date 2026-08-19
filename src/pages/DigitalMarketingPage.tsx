import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { DIGITAL_MARKETING_SERVICES } from '../data/services';

interface DigitalMarketingPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Hero Header */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
          DIGITAL MARKETING
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Digital Marketing Services
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          Performance marketing, search engine optimization, Google Ads, Meta paid acquisition, and content strategy to help your business acquire leads.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onOpenInquiry('service', 'Discuss Digital Marketing')}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
          >
            Request Growth Audit
          </button>
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
