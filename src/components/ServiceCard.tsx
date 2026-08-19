import React from 'react';
import type { ServiceItem } from '../types';
import {
  Globe, ShoppingBag, Code2, Smartphone, Palette, Search,
  Target, Share2, MessageSquare, FileText, Mail, Bot, Zap, Cpu, Workflow,
  CheckCircle2, ArrowRight
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onInquire: (service: ServiceItem) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  ShoppingBag,
  Code2,
  Smartphone,
  Palette,
  Search,
  Target,
  Share2,
  MessageSquare,
  FileText,
  Mail,
  Bot,
  Zap,
  Cpu,
  Workflow
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onInquire }) => {
  const IconComponent = ICON_MAP[service.iconName] || Code2;

  const categoryColor = {
    it: 'bg-blue-50 text-blue-700 border-blue-200',
    marketing: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    ai: 'bg-purple-50 text-purple-700 border-purple-200'
  }[service.category];

  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl border ${categoryColor}`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
            {service.category === 'it' ? 'Engineering' : service.category === 'marketing' ? 'Growth' : 'AI'}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {service.description}
        </p>

        {/* Feature List */}
        <div className="mt-5 space-y-2">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => onInquire(service)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Discuss Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
