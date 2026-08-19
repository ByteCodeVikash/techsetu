import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { DIGITAL_MARKETING_SERVICES } from '../data/services';

interface DigitalMarketingPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-xl">
        <div className="max-w-3xl space-y-4">
          <span className="px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-950 border border-emerald-800 rounded-md">
            Growth & Marketing Division
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Data-Driven Digital Marketing
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 leading-relaxed">
            Acquire leads, scale revenue, and increase customer lifetime value across SEO, Google Search Ads, Meta performance campaigns, and email automation.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenInquiry('service', 'Grow Your Business - Marketing Audit')}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-md font-bold"
            >
              Grow Your Business
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900">Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIGITAL_MARKETING_SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onInquire={() => onOpenInquiry('service', `Inquire: ${service.title}`)}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-emerald-600 text-white rounded-3xl p-10 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Scale Your Acquisition Funnel?</h2>
        <p className="text-sm text-emerald-100 max-w-lg mx-auto">
          Get a complimentary SEO audit & paid advertising review from TechSetu growth leads.
        </p>
        <button
          onClick={() => onOpenInquiry('service', 'Request Free Marketing Audit')}
          className="px-6 py-3 text-sm font-bold text-emerald-950 bg-white hover:bg-emerald-50 rounded-xl shadow-md"
        >
          Request Growth Audit &rarr;
        </button>
      </div>

    </div>
  );
};
