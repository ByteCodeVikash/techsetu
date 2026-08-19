import React from 'react';
import type { Course } from '../types';
import { X, Check } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-lg border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col shadow-lg">
        
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-100 flex items-start justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded">
                {course.category}
              </span>
              <span className="text-[10px] text-slate-500">
                {course.format}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              {course.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 space-y-4 overflow-y-auto flex-1 text-xs text-slate-700">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded border border-slate-200">
            <div>
              <span className="text-[10px] text-slate-500 block">Duration</span>
              <span className="font-bold text-slate-900">{course.duration}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block">Level</span>
              <span className="font-bold text-slate-900">{course.level}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block">Format</span>
              <span className="font-bold text-slate-900">{course.format}</span>
            </div>
          </div>

          {/* Instructor Bio */}
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded border border-slate-200">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
            <div>
              <div className="font-bold text-slate-900">{course.instructor.name}</div>
              <div className="text-[11px] text-slate-600">{course.instructor.role}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Course Overview</h4>
            <p className="leading-relaxed text-slate-600">
              {course.longDescription || course.description}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Skills Covered</h4>
            <div className="flex flex-wrap gap-1.5">
              {course.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[11px] font-medium text-slate-700 bg-slate-100 rounded border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          {course.modules && (
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Syllabus Outline</h4>
              <div className="space-y-1">
                {course.modules.map((mod, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 rounded bg-slate-50 border border-slate-100">
                    <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-800">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 block">Course Fee</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-slate-900">₹{course.price.toLocaleString()}</span>
              <span className="text-xs text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
            >
              Enroll Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
