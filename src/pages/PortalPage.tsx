import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, School, Shield, ArrowLeft } from 'lucide-react';

interface PortalPageProps {
  portalType: 'student' | 'teacher' | 'admin';
}

export const PortalPage: React.FC<PortalPageProps> = ({ portalType }) => {
  const info = {
    student: {
      title: 'Student Learning Portal',
      icon: UserCheck,
      desc: 'Access your enrolled courses, live cohort links, certificate downloads, and project assignments.',
      color: 'bg-blue-600'
    },
    teacher: {
      title: 'Instructor Portal',
      icon: School,
      desc: 'Host live classes, grade student assignments, manage syllabus, and review capstone projects.',
      color: 'bg-emerald-600'
    },
    admin: {
      title: 'TechSetu Admin Console',
      icon: Shield,
      desc: 'Manage course catalog, client IT projects, user permissions, and enterprise analytics.',
      color: 'bg-purple-600'
    }
  }[portalType];

  const IconComponent = info.icon;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center space-y-6">
      <div className={`w-16 h-16 rounded-2xl ${info.color} text-white flex items-center justify-center mx-auto shadow-lg`}>
        <IconComponent className="w-8 h-8" />
      </div>

      <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase text-slate-500 bg-slate-100 rounded-md">
        Portal Gateway Architecture
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{info.title}</h1>
      <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
        {info.desc}
      </p>

      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 max-w-sm mx-auto text-left">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Portal Username / Email
          </label>
          <input
            type="email"
            placeholder={`${portalType}@techsetu.com`}
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Security Key
          </label>
          <input
            type="password"
            placeholder="••••••••••••"
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          onClick={() => alert(`TechSetu ${portalType.toUpperCase()} portal login structure ready for backend API integration!`)}
          className="w-full py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs"
        >
          Sign In to {info.title}
        </button>
      </div>

      <div className="pt-4">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to TechSetu Public Website
        </Link>
      </div>
    </div>
  );
};
