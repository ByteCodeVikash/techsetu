import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { AI_SERVICES } from '../data/services';

interface AIServicesPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const AIServicesPage: React.FC<AIServicesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Hero Header */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 space-y-4">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
          ARTIFICIAL INTELLIGENCE
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          AI & Workflow Automation
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
          RAG knowledge chatbots, document processing pipelines, fine-tuned open-source LLMs, and automated workflow integration for business efficiency.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onOpenInquiry('service', 'Discuss AI Solutions')}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
          >
            Schedule AI Consultation
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">AI Services</h2>
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
      <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 space-y-2">
        <h3 className="text-sm font-bold text-slate-900">Data Privacy & Security</h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          All custom AI solutions developed by TechSetu operate with strict privacy boundaries, private VPC deployment options, and local model quantization to protect business data.
        </p>
      </div>

    </div>
  );
};
