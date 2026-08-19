import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { CertificateMockup } from '../components/CertificateMockup';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CertificationsPage: React.FC = () => {
  const [certId, setCertId] = useState('');
  const [verified, setVerified] = useState<boolean | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (certId.trim().toUpperCase().startsWith('TS-')) {
      setVerified(true);
    } else {
      setVerified(true); // Demo mode verification success
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <SectionHeader
        badge="Verified Skill Credentials"
        title="TechSetu Industry Certifications"
        subtitle="Validate your practical skills with shareable, tamper-proof certificates backed by capstone project evaluation."
      />

      {/* Main Certificate Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
        <div className="lg:col-span-6 space-y-6">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 border border-blue-200 rounded-md">
            Digital Certificate Standard
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
            Show What You Know to Employers worldwide
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            TechSetu certificates are not handed out for simple video playback. Learners earn verified credentials after passing practical coding assignments, project reviews, and capstone evaluations.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Unique Verification Hash printable & shareable online</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Direct 1-Click Addition to LinkedIn Certifications</span>
            </div>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Includes Capstone Project & Skill Badges Breakdown</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs"
            >
              Explore Certified Courses &rarr;
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <CertificateMockup />
        </div>
      </div>

      {/* Certificate Verification Lookup tool */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto space-y-6 text-center">
        <div className="w-12 h-12 rounded-2xl bg-blue-600/30 text-blue-400 flex items-center justify-center mx-auto">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold">Online Certificate Verification System</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
          Employers and recruiters can instantly verify the authenticity of any TechSetu credential by entering the Certificate ID below.
        </p>

        <form onSubmit={handleVerify} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
          <input
            type="text"
            value={certId}
            onChange={(e) => {
              setCertId(e.target.value);
              setVerified(null);
            }}
            placeholder="e.g. TS-CERT-2026-8842"
            className="w-full px-4 py-3 text-sm rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-blue-50 rounded-xl shrink-0"
          >
            Verify Credential
          </button>
        </form>

        {verified && (
          <div className="p-4 bg-emerald-950/80 border border-emerald-700/80 text-emerald-300 text-xs rounded-xl max-w-md mx-auto space-y-1 animate-in fade-in">
            <div className="font-bold flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              VERIFIED CREDENTIAL: AUTHENTIC
            </div>
            <div>Issued to Aarav Sharma &bull; Full Stack Web Development Masterclass</div>
          </div>
        )}
      </div>

    </div>
  );
};
