import React from 'react';
import type { Bundle } from '../types';
import { Code, Cpu, TrendingUp, Rocket, ArrowRight, Layers, Clock } from 'lucide-react';

interface BundleCardProps {
  bundle: Bundle;
  onExplore: (bundle: Bundle) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Code,
  Cpu,
  TrendingUp,
  Rocket
};

export const BundleCard: React.FC<BundleCardProps> = ({ bundle, onExplore }) => {
  const IconComponent = ICON_MAP[bundle.iconName] || Code;

  return (
    <div className={`relative bg-white rounded-xl border p-6 flex flex-col justify-between transition-all duration-200 ${
      bundle.popular
        ? 'border-blue-400 shadow-md shadow-blue-500/5 ring-1 ring-blue-300'
        : 'border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300'
    }`}>
      {bundle.popular && (
        <span className="absolute -top-3 right-6 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 rounded-full shadow-xs">
          High Demand Path
        </span>
      )}

      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 leading-snug">{bundle.title}</h3>
            <p className="text-xs font-medium text-blue-600">{bundle.roleTarget}</p>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          {bundle.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1">
            <Layers className="w-4 h-4 text-blue-500" />
            <span>{bundle.includedCoursesCount} Core Courses</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{bundle.duration}</span>
          </div>
        </div>

        {/* Skill tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {bundle.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-[11px] font-semibold text-slate-700 bg-slate-100 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <button
          onClick={() => onExplore(bundle)}
          className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Explore Career Paths <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
