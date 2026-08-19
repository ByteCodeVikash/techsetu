import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Send, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Upper Footer: Brand & Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                TS
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">TechSetu</span>
                <span className="text-[10px] font-semibold tracking-wider text-blue-400 uppercase -mt-1">
                  Bridge to Future Skills
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              TechSetu is a modern EdTech platform and technology agency delivering practical online courses, live cohort classes, verified certifications, and enterprise IT, digital marketing, and AI services.
            </p>

            {/* Social / Connect Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors" title="Global Network">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors" title="Social Channels">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors" title="Community Telegram">
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Education Domains */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Education</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/courses?category=full-stack" className="hover:text-white transition-colors">Full-Stack Development</Link></li>
              <li><Link to="/courses?category=python-ai" className="hover:text-white transition-colors">Python & Generative AI</Link></li>
              <li><Link to="/courses?category=digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/courses?category=data-science" className="hover:text-white transition-colors">Data Science & Analytics</Link></li>
              <li><Link to="/courses?category=maths" className="hover:text-white transition-colors">Mathematics & Science</Link></li>
              <li><Link to="/courses?category=business" className="hover:text-white transition-colors">Business & Leadership</Link></li>
              <li><Link to="/certifications" className="hover:text-white transition-colors flex items-center gap-1">Certifications <ArrowUpRight className="w-3 h-3 text-blue-400" /></Link></li>
            </ul>
          </div>

          {/* Column 3: Tech Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Services Division</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services/it" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/it" className="hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services/it" className="hover:text-white transition-colors">Custom Software & UI/UX</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-white transition-colors">SEO & Paid Ads Growth</Link></li>
              <li><Link to="/services/ai" className="hover:text-white transition-colors">AI Chatbots & Automation</Link></li>
              <li><Link to="/services/ai" className="hover:text-white transition-colors">Enterprise Fine-Tuned Models</Link></li>
            </ul>
          </div>

          {/* Column 4: Portals & Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Portals & Support</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/student" className="hover:text-white transition-colors">Student Learning Portal</Link></li>
              <li><Link to="/teacher" className="hover:text-white transition-colors">Instructor Portal</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin Gateway</Link></li>
              <li><Link to="/membership" className="hover:text-white transition-colors">Membership Plans</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About TechSetu</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright & Verification Notice */}
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>&copy; {new Date().getFullYear()} TechSetu Education & Technology Pvt Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Verification Standard</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
