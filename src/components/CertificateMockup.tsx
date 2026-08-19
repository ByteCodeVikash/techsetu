import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

interface CertificateMockupProps {
  studentName?: string;
  courseTitle?: string;
  issueDate?: string;
  certificateId?: string;
}

export const CertificateMockup: React.FC<CertificateMockupProps> = ({
  studentName = "Aarav Sharma",
  courseTitle = "Full Stack Web Development Masterclass",
  issueDate = "August 2026",
  certificateId = "TS-CERT-2026-8842"
}) => {
  return (
    <div className="relative w-full max-w-xl mx-auto bg-white rounded-2xl border-4 border-slate-900/10 p-6 sm:p-8 shadow-2xl overflow-hidden font-serif">
      {/* Decorative Corner Accents */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-blue-600"></div>
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-blue-600"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-blue-600"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-blue-600"></div>

      {/* Background Watermark Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <div className="text-9xl font-extrabold text-blue-900 select-none">TS</div>
      </div>

      <div className="relative z-10 text-center space-y-4">
        {/* Certificate Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 font-sans">
          <div className="flex items-center gap-2 text-left">
            <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              TS
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">TechSetu</div>
              <div className="text-[10px] text-slate-500">Bridge to Future Skills</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200 text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Credential
          </div>
        </div>

        {/* Title */}
        <div className="pt-2">
          <h4 className="text-xs sm:text-sm font-sans uppercase tracking-[0.2em] font-semibold text-slate-500">
            Certificate of Accomplishment
          </h4>
          <p className="text-xs font-sans text-slate-500 mt-1">This is to certify that</p>
        </div>

        {/* Recipient */}
        <div className="py-1">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wide font-serif underline decoration-blue-500/40 underline-offset-4">
            {studentName}
          </h3>
        </div>

        {/* Achievement */}
        <p className="text-xs sm:text-sm font-sans text-slate-600 max-w-md mx-auto leading-relaxed">
          has successfully completed all lectures, practical evaluations, and capstone project requirements for
        </p>

        <div className="px-4 py-2 bg-blue-50/60 rounded-lg border border-blue-100/80 inline-block">
          <h4 className="text-sm sm:text-base font-bold font-sans text-blue-900">
            {courseTitle}
          </h4>
        </div>

        {/* Signatures & Seal */}
        <div className="pt-6 grid grid-cols-3 items-end text-center font-sans text-xs border-t border-slate-200/80">
          <div>
            <div className="font-serif italic text-sm text-slate-800 font-bold">Vikash Dubey</div>
            <div className="text-[10px] text-slate-500 border-t border-slate-300 pt-1 mt-1">
              Director of Engineering
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-900 flex items-center justify-center shadow-md border-2 border-white">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-[9px] uppercase font-bold text-slate-400 mt-1">Official Seal</span>
          </div>

          <div>
            <div className="text-[10px] font-mono text-slate-600">{certificateId}</div>
            <div className="text-[10px] text-slate-500 border-t border-slate-300 pt-1 mt-1">
              Issued {issueDate}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
