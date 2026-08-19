import React from 'react';
import type { Course } from '../types';
import { Star, Users, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Card Header Tag & Category */}
        <div className="p-5 pb-3">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-md border border-blue-100">
              {course.category}
            </span>
            {course.badge && (
              <span className="px-2.5 py-0.5 text-xs font-bold text-amber-700 bg-amber-50 rounded-md border border-amber-200/80">
                {course.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
            {course.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Course Info Specs */}
        <div className="px-5 py-2.5 bg-slate-50/70 border-y border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-1.5 font-medium text-amber-600">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-900">{course.rating}</span>
            <span className="text-slate-400">({course.ratingCount})</span>
          </div>

          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span>{course.studentsCount.toLocaleString()} enrolled</span>
          </div>

          <div className="flex items-center gap-1 hidden sm:flex">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="p-5 pt-3 flex items-center gap-3">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-9 h-9 rounded-full object-cover border border-slate-200"
          />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-900">{course.instructor.name}</span>
            <span className="text-[11px] text-slate-500">{course.instructor.role}</span>
          </div>
        </div>
      </div>

      {/* Footer Pricing & CTA */}
      <div className="px-5 pb-5 pt-1 flex items-center justify-between border-t border-slate-100">
        <div>
          <span className="text-xl font-extrabold text-slate-900">₹{course.price.toLocaleString()}</span>
          <span className="ml-1.5 text-xs text-slate-400 line-through">₹{course.originalPrice.toLocaleString()}</span>
        </div>

        <button
          onClick={() => onSelect(course)}
          className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded-lg transition-colors border border-blue-200/80 hover:border-blue-600"
        >
          View Course
        </button>
      </div>
    </div>
  );
};
