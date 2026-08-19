import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Course Thumbnail Image */}
        <div className="relative h-44 overflow-hidden bg-slate-100 border-b border-slate-100">
          {course.image ? (
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-semibold text-xs">
              {course.category}
            </div>
          )}

          {/* Badge Overlay */}
          {course.badge && (
            <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              {course.badge}
            </div>
          )}

          {/* Format Badge */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-semibold px-2 py-0.5 rounded shadow-2xs border border-slate-200">
            {course.format}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-2.5">
          {/* Category */}
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
            {course.category}
          </span>

          {/* Title */}
          <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {course.description}
          </p>

          {/* Instructor & Metadata */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="font-medium text-slate-700">{course.instructor.name}</span>
            </div>
            <span>{course.duration.split('•')[0]}</span>
          </div>
        </div>
      </div>

      {/* Footer: Price & Action */}
      <div className="p-4 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div>
          <span className="text-base font-bold text-slate-900">₹{course.price.toLocaleString()}</span>
          <span className="ml-1.5 text-xs text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
        </div>

        <button
          onClick={() => onSelect(course)}
          className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
        >
          View Course
        </button>
      </div>
    </div>
  );
};
