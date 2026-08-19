import React from 'react';
import { Link } from 'react-router-dom';

interface PortalPageProps {
  portalType: 'student' | 'teacher' | 'admin';
}

export const PortalPage: React.FC<PortalPageProps> = ({ portalType }) => {
  const info = {
    student: {
      title: 'Student Portal',
      desc: 'Access your enrolled courses, cohort links, certificates, and assignments.'
    },
    teacher: {
      title: 'Instructor Portal',
      desc: 'Manage live classes, grade student assignments, and review projects.'
    },
    admin: {
      title: 'Admin Console',
      desc: 'Manage course catalog, client projects, and platform settings.'
    }
  }[portalType];

  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center space-y-6">
      <div className="w-12 h-12 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-lg mx-auto">
        TS
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">{info.title}</h1>
        <p className="text-xs text-slate-600 leading-relaxed">
          {info.desc}
        </p>
      </div>

      <div className="p-6 bg-white rounded-lg border border-slate-200 space-y-4 text-left">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder={`${portalType}@techsetu.com`}
            className="w-full px-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••••••"
            className="w-full px-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
          />
        </div>

        <button
          onClick={() => alert(`TechSetu ${portalType.toUpperCase()} login integration point.`)}
          className="w-full py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
        >
          Sign In
        </button>
      </div>

      <div>
        <Link to="/" className="text-xs font-semibold text-blue-600 hover:underline">
          &larr; Back to TechSetu Homepage
        </Link>
      </div>
    </div>
  );
};
