import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ShieldCheck, Code, Cpu } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <SectionHeader
        badge="About TechSetu"
        title="Bridge to Future Skills"
        subtitle="TechSetu connects ambitious learners and forward-thinking businesses with future-proof education and production technology engineering."
      />

      {/* Story & Positioning */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200">
        <div className="lg:col-span-7 space-y-4">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 border border-blue-200 rounded-md">
            Our Mission & Vision
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            Connecting Education with Enterprise Reality
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded with the belief that technology learning should match the exact demands of modern engineering teams, TechSetu operates at the intersection of education, IT consulting, and artificial intelligence solutions.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            We don't just teach code or marketing strategy; our active engineering teams build real production software and AI systems for client organizations, ensuring our course curricula are always updated with real-world practices.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div>
              <div className="text-2xl font-extrabold text-blue-600">100%</div>
              <div className="text-xs text-slate-500 font-medium">Industry Aligned Curricula</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-blue-600">50+</div>
              <div className="text-xs text-slate-500 font-medium">Enterprise Tech Services Delivered</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4 bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">Core Pillars</h3>
          
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-start gap-3">
              <Code className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">Hands-on Engineering</div>
                <div className="text-xs text-slate-500">Every lesson includes source code and practical assignments.</div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-start gap-3">
              <Cpu className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">AI Innovation</div>
                <div className="text-xs text-slate-500">Integrating artificial intelligence into both learning and business workflows.</div>
              </div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">Trust & Quality</div>
                <div className="text-xs text-slate-500">No fluff or template code. Only production-ready standards.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
