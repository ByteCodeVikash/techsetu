import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { IT_SERVICES, DIGITAL_MARKETING_SERVICES, AI_SERVICES } from '../data/services';

interface ServicesPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <SectionHeader
        badge="SERVICES"
        title="Technology & Business Services"
        subtitle="Software engineering, digital marketing, and AI automation built for growing businesses."
      />

      {/* IT Services Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-bold text-slate-900">IT & Software Engineering</h2>
            <p className="text-xs text-slate-600">Web applications, mobile apps, and custom software.</p>
          </div>
          <Link to="/services/it" className="text-xs font-semibold text-blue-600 hover:underline">
            View IT Services &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {IT_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} onInquire={() => onOpenInquiry('service', `IT Inquiry: ${service.title}`)} />
          ))}
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Digital Marketing</h2>
            <p className="text-xs text-slate-600">SEO, Google Ads, Meta Ads, and social media growth.</p>
          </div>
          <Link to="/services/digital-marketing" className="text-xs font-semibold text-blue-600 hover:underline">
            View Marketing Services &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DIGITAL_MARKETING_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} onInquire={() => onOpenInquiry('service', `Marketing Inquiry: ${service.title}`)} />
          ))}
        </div>
      </div>

      {/* AI Services Section */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-bold text-slate-900">AI & Automation Services</h2>
            <p className="text-xs text-slate-600">RAG chatbots, document processing, and AI workflows.</p>
          </div>
          <Link to="/services/ai" className="text-xs font-semibold text-blue-600 hover:underline">
            View AI Services &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {AI_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} onInquire={() => onOpenInquiry('service', `AI Inquiry: ${service.title}`)} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-900 rounded-lg p-8 text-center text-white space-y-3">
        <h3 className="text-xl font-bold">Have a custom software or digital requirement?</h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Contact our team to discuss your tech stack, scope, and implementation timeline.
        </p>
        <button
          onClick={() => onOpenInquiry('service', 'General Technical Consultation')}
          className="px-4 py-2 text-xs font-medium text-slate-900 bg-white hover:bg-slate-100 rounded transition-colors"
        >
          Contact Engineering Team
        </button>
      </div>

    </div>
  );
};
