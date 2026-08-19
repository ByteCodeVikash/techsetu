import React from 'react';
import { Star } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  const isOrangeBadge = course.badge?.toLowerCase() === 'new' || course.badge?.toLowerCase() === 'hot & trending';

  return (
    <div
      onClick={() => onSelect(course)}
      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group h-full"
    >
      <div>
        {/* Thumbnail Banner */}
        <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-95"
            loading="lazy"
          />

          {/* Badge Overlay */}
          {course.badge && (
            <div
              className={`absolute top-2.5 left-2.5 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-xs ${
                isOrangeBadge ? 'bg-amber-500' : 'bg-blue-600'
              }`}
            >
              {course.badge}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-3.5 space-y-1.5">
          {/* Category Tag */}
          <span className="text-[11px] font-semibold text-blue-600 block tracking-tight">
            {course.category}
          </span>

          {/* Title */}
          <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 min-h-[38px] group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-xs pt-0.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-800">{course.rating.toFixed(1)}</span>
            <span className="text-slate-400 text-[11px]">
              ({course.ratingCount > 999 ? `${(course.ratingCount / 1000).toFixed(1)}K` : course.ratingCount})
            </span>
          </div>
        </div>
      </div>

      {/* Price Bar */}
      <div className="px-3.5 pb-3.5 pt-1 flex items-baseline gap-1.5 border-t border-slate-100/60 mt-auto">
        <span className="text-base font-extrabold text-slate-900">₹{course.price.toLocaleString()}</span>
        {course.originalPrice && (
          <span className="text-xs text-slate-400 line-through font-normal">₹{course.originalPrice.toLocaleString()}</span>
        )}
      </div>
    </div>
  );
};
