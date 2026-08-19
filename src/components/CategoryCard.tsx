import React from 'react';
import type { Category } from '../types';
import { Link } from 'react-router-dom';
import {
  Code, Terminal, Cpu, Calculator, Atom, TrendingUp,
  Megaphone, Scale, Building2, LineChart, Briefcase, ChevronRight
} from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Code,
  Terminal,
  Cpu,
  Calculator,
  Atom,
  TrendingUp,
  Megaphone,
  Scale,
  Building2,
  LineChart,
  Briefcase
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const IconComponent = ICON_MAP[category.iconName] || Code;

  return (
    <Link
      to={`/courses?category=${category.id}`}
      className="group p-5 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
            {category.coursesCount} Courses
          </span>
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>

        <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
        <span>Explore Domain</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
