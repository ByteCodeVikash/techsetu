import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { PricingCard } from '../components/PricingCard';
import { PRICING_PLANS } from '../data/pricing';
import { FAQS } from '../data/faqs';
import { HelpCircle } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <SectionHeader
        badge="Flexible Subscriptions"
        title="TechSetu Membership Plans"
        subtitle="Gain continuous access to all recorded courses, weekly live cohort sessions, verified certificates, and mentor project reviews."
      />

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map(plan => (
          <PricingCard
            key={plan.id}
            plan={plan}
            onSelectPlan={handleSelect}
          />
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <h3 className="text-xl font-extrabold text-slate-900 text-center">Membership Feature Matrix</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="py-3 px-4 font-bold text-slate-900">Features & Benefits</th>
                <th className="py-3 px-4 font-bold text-slate-700 text-center">Basic (₹499/mo)</th>
                <th className="py-3 px-4 font-bold text-blue-600 text-center bg-blue-50/50">Pro (₹999/mo)</th>
                <th className="py-3 px-4 font-bold text-slate-900 text-center">Premium (₹2,499/mo)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Access to Recorded Courses</td>
                <td className="py-3 px-4 text-center text-slate-600">20+ Courses</td>
                <td className="py-3 px-4 text-center font-bold text-blue-600 bg-blue-50/20">All Courses</td>
                <td className="py-3 px-4 text-center font-bold text-slate-900">All Courses</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Weekly Live Masterclasses</td>
                <td className="py-3 px-4 text-center text-slate-400">&mdash;</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-blue-50/20">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Verified Certificate of Completion</td>
                <td className="py-3 px-4 text-center text-slate-600">Basic PDF</td>
                <td className="py-3 px-4 text-center font-bold text-blue-600 bg-blue-50/20">Verified Credential</td>
                <td className="py-3 px-4 text-center font-bold text-slate-900">Verified Credential</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">Code & Project Portfolio Reviews</td>
                <td className="py-3 px-4 text-center text-slate-400">&mdash;</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-blue-50/20">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Priority Review</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">1-on-1 Monthly Mentor Calls</td>
                <td className="py-3 px-4 text-center text-slate-400">&mdash;</td>
                <td className="py-3 px-4 text-center text-slate-400 bg-blue-50/20">&mdash;</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ 1 Call / Month</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-slate-800">IT & AI Services Consult Discount</td>
                <td className="py-3 px-4 text-center text-slate-400">&mdash;</td>
                <td className="py-3 px-4 text-center text-slate-600 bg-blue-50/20">10% Off Services</td>
                <td className="py-3 px-4 text-center font-bold text-blue-600">Free Discovery Call</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Subscription FAQs */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-900 text-center">Frequently Asked Membership Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {membershipFaqs.map((faq, i) => (
            <div key={i} className="p-5 bg-white rounded-xl border border-slate-200/90 space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                {faq.question}
              </h4>
              <p className="text-xs text-slate-600 pl-6 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
