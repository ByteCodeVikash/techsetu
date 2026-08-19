import React, { useState } from 'react';
import { X } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50">
      <div className="relative w-full max-w-sm bg-white rounded-lg border border-slate-200 overflow-hidden shadow-lg">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">Portal Login</h3>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Role selector */}
          <div className="grid grid-cols-3 gap-1 bg-slate-100 p-0.5 rounded text-xs font-medium">
            <button
              onClick={() => setRole('student')}
              className={`py-1 rounded transition-all ${
                role === 'student' ? 'bg-white text-blue-600 shadow-2xs font-semibold' : 'text-slate-600'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setRole('teacher')}
              className={`py-1 rounded transition-all ${
                role === 'teacher' ? 'bg-white text-blue-600 shadow-2xs font-semibold' : 'text-slate-600'
              }`}
            >
              Instructor
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`py-1 rounded transition-all ${
                role === 'admin' ? 'bg-white text-blue-600 shadow-2xs font-semibold' : 'text-slate-600'
              }`}
            >
              Admin
            </button>
          </div>

          <div className="space-y-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder={`${role}@techsetu.com`}
                className="w-full px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="w-full px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <button
            onClick={() => {
              alert(`TechSetu ${role.toUpperCase()} portal login structure.`);
              onClose();
            }}
            className="w-full py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
          >
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
};
