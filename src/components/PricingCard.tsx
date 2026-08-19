import React from 'react';
import type { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelectPlan }) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 flex flex-col justify-between border ${
        plan.highlighted ? 'border-blue-600 shadow-xs' : 'border-slate-200'
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
          {plan.badge && (
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              {plan.badge}
            </span>
          )}
        </div>

        <p className="mt-1 text-xs text-slate-600">
          {plan.description}
        </p>

        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
          <span className="text-xs text-slate-500">{plan.billingPeriod}</span>
        </div>

        <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button
          onClick={() => onSelectPlan(plan)}
          className={`w-full py-2 px-4 text-xs font-medium rounded transition-colors ${
            plan.highlighted
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
          }`}
        >
          {plan.ctaText}
        </button>
      </div>
    </div>
  );
};
