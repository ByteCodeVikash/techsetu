import React from 'react';
import type { Course } from '../types';
import { X, Star, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/80 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold text-blue-700 bg-blue-100/80 rounded-md">
                {course.category}
              </span>
              <span className="px-2.5 py-0.5 text-xs font-medium text-slate-600 bg-slate-200/60 rounded-md">
                {course.format}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {course.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
            <div>
              <div className="text-xs text-slate-500">Rating</div>
              <div className="text-sm font-bold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {course.rating} ({course.ratingCount})
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Learners</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                {course.studentsCount.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Duration</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{course.duration}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Skill Level</div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{course.level}</div>
            </div>
          </div>

          {/* Instructor Bio */}
          <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-12 h-12 rounded-full object-cover border border-blue-200"
            />
            <div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Course Lead</div>
              <div className="text-base font-bold text-slate-900">{course.instructor.name}</div>
              <div className="text-xs text-slate-600">{course.instructor.role}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">Overview</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {course.longDescription || course.description}
            </p>
          </div>

          {/* Skills Acquired */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">Skills You Will Master</h4>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-100 rounded-md border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Curriculum Modules */}
          {course.modules && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">Curriculum Syllabus</h4>
              <div className="space-y-2">
                {course.modules.map((mod, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200/80 bg-white">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trust badge */}
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Includes 100% verified digital completion certificate & live mentor Q&A.</span>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 border-t border-slate-200 bg-white flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 block">Total Investment</span>
            <span className="text-2xl font-extrabold text-slate-900">₹{course.price.toLocaleString()}</span>
            <span className="ml-2 text-xs text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              Enroll Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
