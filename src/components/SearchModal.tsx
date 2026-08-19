import React, { useState, useMemo } from 'react';
import { X, Search } from 'lucide-react';
import { COURSES } from '../data/courses';
import { IT_SERVICES, DIGITAL_MARKETING_SERVICES, AI_SERVICES } from '../data/services';
import { useNavigate } from 'react-router-dom';
import type { Course } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCourse
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const allServices = useMemo(() => [
    ...IT_SERVICES,
    ...DIGITAL_MARKETING_SERVICES,
    ...AI_SERVICES
  ], []);

  const courseResults = useMemo(() => {
    if (!query.trim()) return COURSES.slice(0, 3);
    return COURSES.filter(
      c => c.title.toLowerCase().includes(query.toLowerCase()) ||
           c.category.toLowerCase().includes(query.toLowerCase()) ||
           c.skills.some(s => s.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  const serviceResults = useMemo(() => {
    if (!query.trim()) return allServices.slice(0, 3);
    return allServices.filter(
      s => s.title.toLowerCase().includes(query.toLowerCase()) ||
           s.description.toLowerCase().includes(query.toLowerCase()) ||
           s.features.some(f => f.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, allServices]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 p-4 bg-slate-900/50">
      <div className="relative w-full max-w-xl bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] shadow-lg">
        
        {/* Search Bar Input */}
        <div className="p-3 border-b border-slate-200 flex items-center gap-2 bg-slate-50">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, python, AI, IT services..."
            className="w-full text-xs bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-0.5 text-[10px] font-semibold text-slate-500 rounded bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="p-3 space-y-4 overflow-y-auto flex-1 text-xs">
          {/* Courses */}
          <div>
            <div className="font-bold text-slate-500 uppercase tracking-wider mb-2 text-[10px]">
              Courses ({courseResults.length})
            </div>
            {courseResults.length === 0 ? (
              <p className="text-slate-400 italic">No courses found.</p>
            ) : (
              <div className="space-y-1">
                {courseResults.map(course => (
                  <button
                    key={course.id}
                    onClick={() => {
                      onClose();
                      onSelectCourse(course);
                    }}
                    className="w-full text-left p-2 rounded hover:bg-slate-100 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold text-slate-900">{course.title}</div>
                      <div className="text-[11px] text-slate-500">{course.category} &bull; {course.duration}</div>
                    </div>
                    <span className="font-bold text-blue-600">₹{course.price}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <div className="font-bold text-slate-500 uppercase tracking-wider mb-2 text-[10px]">
              Services ({serviceResults.length})
            </div>
            {serviceResults.length === 0 ? (
              <p className="text-slate-400 italic">No services found.</p>
            ) : (
              <div className="space-y-1">
                {serviceResults.map(service => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onClose();
                      const path = service.category === 'it' ? '/services/it' : service.category === 'marketing' ? '/services/digital-marketing' : '/services/ai';
                      navigate(path);
                    }}
                    className="w-full text-left p-2 rounded hover:bg-slate-100 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold text-slate-900">{service.title}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">{service.description}</div>
                    </div>
                    <span className="text-[11px] text-blue-600 font-semibold">View &rarr;</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
