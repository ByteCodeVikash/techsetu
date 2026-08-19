import React from 'react';
import type { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-slate-200" />
        </div>

        <p className="text-sm text-slate-700 italic leading-relaxed">
          "{testimonial.feedback}"
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover border border-slate-200"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-900">{testimonial.name}</h4>
          <p className="text-xs text-slate-500">{testimonial.role} &bull; <span className="text-slate-700">{testimonial.companyOrCollege}</span></p>
          <p className="text-[11px] font-semibold text-blue-600 mt-0.5">{testimonial.courseOrService}</p>
        </div>
      </div>
    </div>
  );
};
