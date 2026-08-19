import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-8 ${alignmentClass} ${className}`}>
      {badge && (
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1.5">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
