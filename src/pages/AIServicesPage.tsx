import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { AI_SERVICES } from '../data/services';
import { ShieldCheck } from 'lucide-react';

interface AIServicesPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const AIServicesPage: React.FC<AIServicesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white shadow-xl border border-purple-800/40">
        <div className="max-w-3xl space-y-4">
          <span className="px-3.5 py-1 text-xs font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/60 border border-purple-700/80 rounded-md">
            AI Engineering & Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Turn AI Into a Business Advantage
          </h1>
          <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
            Deploy RAG knowledge chatbots, automated cross-platform workflows, document intelligence, and private fine-tuned LLMs built for enterprise security.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenInquiry('service', 'Discuss AI Solutions')}
              className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-purple-300 hover:bg-purple-200 rounded-xl shadow-md font-bold"
            >
              Explore AI Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900">AI Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onInquire={() => onOpenInquiry('service', `Inquire: ${service.title}`)}
            />
          ))}
        </div>
      </div>

      {/* AI Architecture Guarantee */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-purple-600" />
          Enterprise Privacy & Security Commitment
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Your corporate data stays completely private. All custom LLMs and RAG pipelines developed by TechSetu operate with strict zero-data-retention guarantees, private VPC deployments, and local model quantization options.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-slate-900 text-white rounded-3xl p-10 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Automate Your Workflows with AI?</h2>
        <p className="text-sm text-slate-300 max-w-lg mx-auto">
          Schedule a 30-minute AI architectural audit with our machine learning engineering leads.
        </p>
        <button
          onClick={() => onOpenInquiry('service', 'Request AI Audit')}
          className="px-6 py-3 text-sm font-bold text-slate-900 bg-purple-400 hover:bg-purple-300 rounded-xl shadow-md"
        >
          Book AI Architectural Review &rarr;
        </button>
      </div>

    </div>
  );
};
