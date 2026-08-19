import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { PricingCard } from '../components/PricingCard';
import { PRICING_PLANS } from '../data/pricing';
import { FAQS } from '../data/faqs';
import type { PricingPlan } from '../types';

interface MembershipPageProps {
  onOpenInquiry: (type?: 'course' | 'service', title?: string) => void;
}

export const MembershipPage: React.FC<MembershipPageProps> = ({ onOpenInquiry }) => {
  const membershipFaqs = FAQS.filter(f => f.category === 'membership' || f.category === 'general');

  const handleSelect = (plan: PricingPlan) => {
    onOpenInquiry('course', `Membership Plan Enrollment: ${plan.name} (${plan.price})`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <SectionHeader
        badge="SUBSCRIPTIONS"
        title="Membership Plans"
        subtitle="Continuous access to recorded courses, live cohort sessions, and verified credentials."
      />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {PRICING_PLANS.map(plan => (
          <PricingCard
            key={plan.id}
            plan={plan}
            onSelectPlan={handleSelect}
          />
        ))}
      </div>

      {/* Matrix */}
      <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
        <h3 className="text-base font-bold text-slate-900">Feature Comparison</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="py-2.5 px-3 font-bold text-slate-900">Feature</th>
                <th className="py-2.5 px-3 font-bold text-slate-700 text-center">Basic</th>
                <th className="py-2.5 px-3 font-bold text-blue-600 text-center">Pro</th>
                <th className="py-2.5 px-3 font-bold text-slate-900 text-center">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2.5 px-3 font-medium text-slate-800">Recorded Courses</td>
                <td className="py-2.5 px-3 text-center text-slate-600">20+ Courses</td>
                <td className="py-2.5 px-3 text-center font-semibold text-blue-600">All Courses</td>
                <td className="py-2.5 px-3 text-center font-semibold text-slate-900">All Courses</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium text-slate-800">Live Masterclasses</td>
                <td className="py-2.5 px-3 text-center text-slate-400">&mdash;</td>
                <td className="py-2.5 px-3 text-center text-blue-600 font-medium">Included</td>
                <td className="py-2.5 px-3 text-center text-blue-600 font-medium">Included</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium text-slate-800">Verified Certificate</td>
                <td className="py-2.5 px-3 text-center text-slate-600">Basic PDF</td>
                <td className="py-2.5 px-3 text-center font-semibold text-blue-600">Verified Credential</td>
                <td className="py-2.5 px-3 text-center font-semibold text-slate-900">Verified Credential</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-medium text-slate-800">Code Reviews</td>
                <td className="py-2.5 px-3 text-center text-slate-400">&mdash;</td>
                <td className="py-2.5 px-3 text-center text-blue-600 font-medium">Included</td>
                <td className="py-2.5 px-3 text-center text-blue-600 font-medium">Priority Review</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900">Membership FAQs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {membershipFaqs.map((faq, i) => (
            <div key={i} className="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
              <h4 className="text-xs font-bold text-slate-900">{faq.question}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
