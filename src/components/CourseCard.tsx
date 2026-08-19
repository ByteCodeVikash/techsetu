import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden">
      <div>
        {/* Simple Course Banner Image Placeholder / Graphic */}
        <div className="h-36 bg-slate-100 border-b border-slate-100 flex items-center justify-center p-4 text-center">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {course.category}
          </span>
        </div>

        <div className="p-4 space-y-2">
          {/* Category Tag */}
          <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block">
            {course.category}
          </span>

          {/* Course Title */}
          <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2">
            {course.title}
          </h3>

          {/* Simple 1-line description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {course.description}
          </p>
        </div>
      </div>

      {/* Footer: Price & Action */}
      <div className="p-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-base font-bold text-slate-900">₹{course.price.toLocaleString()}</span>
          <span className="ml-1.5 text-xs text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
        </div>

        <button
          onClick={() => onSelect(course)}
          className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded transition-colors"
        >
          View Course
        </button>
      </div>
    </div>
  );
};
