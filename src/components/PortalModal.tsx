import React, { useState } from 'react';
import { X, Lock, ArrowRight, UserCheck, School, Shield } from 'lucide-react';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: 'student' | 'teacher' | 'admin';
}

export const PortalModal: React.FC<PortalModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'student'
}) => {
  const [role, setRole] = useState<'student' | 'teacher' | 'admin'>(initialRole);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">TechSetu Portal Gateway</h3>
              <p className="text-xs text-slate-500">Access Student & Educator Dashboards</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Role selector */}
          <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setRole('student')}
              className={`py-2 rounded-lg flex items-center justify-center gap-1 transition-all ${
                role === 'student' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" /> Student
            </button>
            <button
              onClick={() => setRole('teacher')}
              className={`py-2 rounded-lg flex items-center justify-center gap-1 transition-all ${
                role === 'teacher' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              <School className="w-3.5 h-3.5" /> Instructor
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`py-2 rounded-lg flex items-center justify-center gap-1 transition-all ${
                role === 'admin' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              <Shield className="w-3.5 h-3.5" /> Admin
            </button>
          </div>

          <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
              {role === 'student' ? 'Student Learning Portal' : role === 'teacher' ? 'Instructor Portal' : 'Enterprise Admin Portal'}
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {role === 'student'
                ? 'Access your enrolled course videos, live cohort links, certificate downloads, and project assignments.'
                : role === 'teacher'
                ? 'Manage class schedules, review student capstone projects, grade submissions, and host live sessions.'
                : 'Manage platform catalog, client IT projects, user permissions, and enterprise analytics.'}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email / Registered ID
              </label>
              <input
                type="email"
                placeholder="student@techsetu.com"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                alert(`TechSetu ${role.toUpperCase()} Dashboard auth is prepared for backend integration. For public website exploration, all public courses & services are available!`);
                onClose();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
            >
              Enter Portal Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
