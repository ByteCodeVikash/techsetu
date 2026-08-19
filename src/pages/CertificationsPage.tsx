import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { CertificateMockup } from '../components/CertificateMockup';

export const CertificationsPage: React.FC = () => {
  const [certId, setCertId] = useState('');
  const [verified, setVerified] = useState<boolean | null>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setVerified(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <SectionHeader
        badge="CERTIFICATIONS"
        title="Verified Skill Credentials"
        subtitle="Validate your practical skills with shareable certificates backed by capstone project evaluation."
      />

      {/* Main Certificate Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-lg p-6 sm:p-10 border border-slate-200">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 leading-tight">
            Earn Industry Credentials
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            TechSetu certificates are awarded to learners upon completion of course modules, practical assignments, and capstone evaluations.
          </p>

          <ul className="space-y-2 text-xs text-slate-700 pt-1">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Unique Verification Hash printable & shareable online</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Add directly to LinkedIn Certifications</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>Includes Capstone Project & Skill Breakdown</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-6">
          <CertificateMockup />
        </div>
      </div>

      {/* Verification Lookup */}
      <div className="bg-slate-900 text-white rounded-lg p-6 sm:p-8 max-w-2xl mx-auto space-y-4 text-center">
        <h3 className="text-lg font-bold">Certificate Verification</h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto">
          Enter the Certificate ID below to verify the authenticity of a TechSetu credential.
        </p>

        <form onSubmit={handleVerify} className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
          <input
            type="text"
            value={certId}
            onChange={(e) => {
              setCertId(e.target.value);
              setVerified(null);
            }}
            placeholder="e.g. TS-CERT-2026-8842"
            className="w-full px-3 py-2 text-xs rounded bg-slate-800 border border-slate-700 text-white focus:outline-none font-mono"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-900 bg-white hover:bg-slate-100 rounded shrink-0"
          >
            Verify ID
          </button>
        </form>

        {verified && (
          <div className="p-3 bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs rounded max-w-md mx-auto">
            <span className="font-bold">VERIFIED:</span> Authentic Credential (Issued to Aarav Sharma)
          </div>
        )}
      </div>

    </div>
  );
};
