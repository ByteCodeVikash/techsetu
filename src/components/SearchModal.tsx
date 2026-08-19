import React, { useState, useMemo } from 'react';
import { X, Search, BookOpen, Code, ArrowRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50/80">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, python, AI, IT services, SEO..."
            className="w-full text-base bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400 font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-900 rounded bg-slate-200/60"
          >
            ESC
          </button>
        </div>

        {/* Search Results Content */}
        <div className="p-4 space-y-6 overflow-y-auto flex-1">
          {/* Courses Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Courses ({courseResults.length})
              </span>
              {!query && <span className="text-[11px] text-slate-400 font-normal">Popular</span>}
            </div>

            {courseResults.length === 0 ? (
              <p className="text-xs text-slate-400 italic px-2">No matching courses found.</p>
            ) : (
              <div className="space-y-1.5">
                {courseResults.map(course => (
                  <button
                    key={course.id}
                    onClick={() => {
                      onClose();
                      onSelectCourse(course);
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-100 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {course.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 mt-1">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{course.description}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-900 shrink-0 ml-2">₹{course.price}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Services Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
              <span className="flex items-center gap-1.5">
                <Code className="w-4 h-4 text-emerald-600" />
                Services ({serviceResults.length})
              </span>
            </div>

            {serviceResults.length === 0 ? (
              <p className="text-xs text-slate-400 italic px-2">No matching services found.</p>
            ) : (
              <div className="space-y-1.5">
                {serviceResults.map(service => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onClose();
                      const path = service.category === 'it' ? '/services/it' : service.category === 'marketing' ? '/services/digital-marketing' : '/services/ai';
                      navigate(path);
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-100 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                        {service.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 mt-1">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{service.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-transform ml-2" />
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
