import React from 'react';
import { SectionHeader } from '../components/SectionHeader';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <SectionHeader
        badge="ABOUT"
        title="About TechSetu"
        subtitle="Bridge to Future Skills"
      />

      {/* Main Content */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 space-y-6">
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
          <h2 className="text-xl font-bold text-slate-900">Connecting Education with Industry Need</h2>
          <p>
            TechSetu was created to bridge the gap between theoretical learning and actual software development in real organizations.
          </p>
          <p>
            We operate as both an educational provider and a technology services provider. Our team builds websites, web applications, mobile software, and AI automations while teaching practical skills to students and professionals.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Practical Skills</h3>
            <p className="text-xs text-slate-600">Focus on real source code, projects, and practical exercises.</p>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Software Services</h3>
            <p className="text-xs text-slate-600">Custom web, mobile, and AI software engineering for businesses.</p>
          </div>

          <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-1">
            <h3 className="text-sm font-bold text-slate-900">Career Focused</h3>
            <p className="text-xs text-slate-600">Curricula built around skills in high demand across technology roles.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
