import React from 'react';
import type { PricingPlan } from '../types';
import { Check, Sparkles } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPlan;
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelectPlan }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
        plan.highlighted
          ? 'border-2 border-blue-600 shadow-xl shadow-blue-500/10 scale-102 z-10'
          : 'border border-slate-200/90 shadow-sm hover:shadow-md'
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 rounded-full shadow-xs flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          {plan.badge}
        </span>
      )}

      <div>
        <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 min-h-[40px] leading-relaxed">
          {plan.description}
        </p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">{plan.price}</span>
          <span className="text-xs sm:text-sm text-slate-500 font-medium">{plan.billingPeriod}</span>
        </div>

        <div className="mt-6 space-y-3 pt-6 border-t border-slate-100">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${
                plan.highlighted ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
              }`}>
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4">
        <button
          onClick={() => onSelectPlan(plan)}
          className={`w-full py-3 px-4 text-sm font-semibold rounded-xl transition-all shadow-xs ${
            plan.highlighted
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20'
              : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
          }`}
        >
          {plan.ctaText}
        </button>
      </div>
    </div>
  );
};
