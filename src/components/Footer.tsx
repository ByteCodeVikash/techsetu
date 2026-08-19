import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                TS
              </div>
              <span className="text-base font-bold text-slate-900">TechSetu</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Bridge to Future Skills
            </p>
            <p className="text-xs text-slate-500">
              Practical learning and software engineering services for career and business growth.
            </p>
          </div>

          {/* Column 2: Education & Courses */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Education</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/courses" className="hover:text-blue-600 transition-colors">Courses Catalog</Link></li>
              <li><Link to="/courses?category=full-stack" className="hover:text-blue-600 transition-colors">Full Stack Development</Link></li>
              <li><Link to="/courses?category=python-ai" className="hover:text-blue-600 transition-colors">Python & AI Engineering</Link></li>
              <li><Link to="/courses?category=digital-marketing" className="hover:text-blue-600 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/certifications" className="hover:text-blue-600 transition-colors">Certifications</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services/it" className="hover:text-blue-600 transition-colors">IT Services</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-blue-600 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/ai" className="hover:text-blue-600 transition-colors">AI Services</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">All Services Overview</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/membership" className="hover:text-blue-600 transition-colors">Membership</Link></li>
              <li><Link to="/student" className="hover:text-blue-600 transition-colors">Student Login</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TechSetu. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-800 transition-colors">Privacy</Link>
            <Link to="/about" className="hover:text-slate-800 transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-slate-800 transition-colors">Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
