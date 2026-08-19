import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { AI_SERVICES } from '../data/services';

interface AIServicesPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const AIServicesPage: React.FC<AIServicesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Hero Header with Visual Column */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-7 p-6 sm:p-10 space-y-4 flex flex-col justify-center">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
            ARTIFICIAL INTELLIGENCE DIVISION
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI & Workflow Automation Solutions
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Deploy RAG chatbots trained on company documents, automated PDF data extraction pipelines, fine-tuned open-source LLMs, and autonomous workflow agents with zero data leak privacy.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenInquiry('service', 'Discuss AI Solutions')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
            >
              Schedule AI Consultation
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 h-64 lg:h-auto relative bg-slate-900 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
            alt="AI Technology Automation"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">AI & Automation Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {AI_SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onInquire={() => onOpenInquiry('service', `Inquire: ${service.title}`)}
            />
          ))}
        </div>
      </div>

      {/* Security Note */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-2">
        <h3 className="text-sm font-bold text-slate-900">Enterprise Data Security & Privacy</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          All custom AI systems deployed by TechSetu operate with strict SOC2/GDPR compliance options, isolated private VPC hosting, and zero third-party model training on your internal corporate datasets.
        </p>
      </div>

    </div>
  );
};
