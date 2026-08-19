import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenInquiry: (initialType?: 'course' | 'service') => void;
  onOpenPortal: (portalType: 'student' | 'teacher' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenInquiry,
  onOpenPortal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Left: Brand Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-base">
              TS
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 leading-none">
                TechSetu
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide mt-0.5">
                Bridge to Future Skills
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/courses"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/courses'
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Education
            </Link>

            <Link
              to="/services/it"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/services/it'
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              IT Services
            </Link>

            <Link
              to="/services/digital-marketing"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/services/digital-marketing'
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Digital Marketing
            </Link>

            <Link
              to="/services/ai"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/services/ai'
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              AI Services
            </Link>
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/courses"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Courses
            </Link>

            <button
              onClick={() => onOpenPortal('student')}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Login
            </button>

            <button
              onClick={() => onOpenInquiry('course')}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-2xs"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Simple Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/courses"
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Education
            </Link>
            <Link
              to="/services/it"
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              IT Services
            </Link>
            <Link
              to="/services/digital-marketing"
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Digital Marketing
            </Link>
            <Link
              to="/services/ai"
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              AI Services
            </Link>
            <Link
              to="/about"
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-md"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal('student');
              }}
              className="w-full py-2 text-center text-sm font-medium text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('course');
              }}
              className="w-full py-2 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-2xs"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
