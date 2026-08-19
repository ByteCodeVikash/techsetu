import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { IT_SERVICES, DIGITAL_MARKETING_SERVICES, AI_SERVICES } from '../data/services';
import { Code, TrendingUp, Cpu } from 'lucide-react';

interface ServicesPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <SectionHeader
        badge="Technology & Growth Division"
        title="Engineering, Marketing & AI Services"
        subtitle="TechSetu designs, develops, scales, and automates modern digital products for startups and enterprises."
      />

      {/* IT Services Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">IT & Software Engineering Services</h2>
              <p className="text-xs text-slate-500">Web applications, mobile apps, e-commerce, and cloud backend engineering</p>
            </div>
          </div>
          <Link to="/services/it" className="text-xs font-bold text-blue-600 hover:underline hidden sm:block">
            View Dedicated IT Page &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IT_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} onInquire={() => onOpenInquiry('service', `IT Inquiry: ${service.title}`)} />
          ))}
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Digital Marketing & Growth</h2>
              <p className="text-xs text-slate-500">SEO auditing, Google Ads, Meta Ads, social media management, and CRO</p>
            </div>
          </div>
          <Link to="/services/digital-marketing" className="text-xs font-bold text-emerald-600 hover:underline hidden sm:block">
            View Marketing Page &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIGITAL_MARKETING_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} onInquire={() => onOpenInquiry('service', `Marketing Inquiry: ${service.title}`)} />
          ))}
        </div>
      </div>

      {/* AI Services Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Artificial Intelligence & Workflow Automation</h2>
              <p className="text-xs text-slate-500">RAG chatbots, custom fine-tuned LLMs, and enterprise automated workflows</p>
            </div>
          </div>
          <Link to="/services/ai" className="text-xs font-bold text-purple-600 hover:underline hidden sm:block">
            View Dedicated AI Page &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} onInquire={() => onOpenInquiry('service', `AI Inquiry: ${service.title}`)} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-900 rounded-3xl p-8 text-center text-white space-y-4">
        <h3 className="text-2xl font-bold">Have a Custom Technical Requirement?</h3>
        <p className="text-sm text-slate-300 max-w-lg mx-auto">
          Our technical architects are available for a 30-minute discovery consultation to map your architecture, timeline, and deliverables.
        </p>
        <button
          onClick={() => onOpenInquiry('service', 'General Technical Consultation')}
          className="px-6 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl"
        >
          Discuss Your Project Now &rarr;
        </button>
      </div>

    </div>
  );
};
