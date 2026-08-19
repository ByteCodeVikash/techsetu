import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Sparkles, Code, TrendingUp, Cpu, BookOpen, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenInquiry: (initialType?: 'course' | 'service') => void;
  onOpenPortal: (portalType: 'student' | 'teacher' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenInquiry,
  onOpenPortal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="text-xl font-extrabold tracking-tight">T</span>
              <span className="text-xs text-blue-200 -ml-0.5">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Tech<span className="text-blue-600">Setu</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                Bridge to Future Skills
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/courses"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === '/courses'
                  ? 'text-blue-600 bg-blue-50/80'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Education & Courses
            </Link>

            {/* Services Dropdown */}
            <div className="relative group" onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1.5 ${
                  location.pathname.startsWith('/services')
                    ? 'text-blue-600 bg-blue-50/80'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180 duration-200" />
              </button>

              {/* Flyout Menu */}
              {servicesDropdownOpen && (
                <div
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <Link
                    to="/services/it"
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50/70 transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover/item:text-blue-600">IT Services</div>
                      <div className="text-xs text-slate-500">Web, Mobile Apps & Software</div>
                    </div>
                  </Link>

                  <Link
                    to="/services/digital-marketing"
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50/70 transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover/item:text-blue-600">Digital Marketing</div>
                      <div className="text-xs text-slate-500">SEO, Ads & Social Growth</div>
                    </div>
                  </Link>

                  <Link
                    to="/services/ai"
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50/70 transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-purple-100 text-purple-700 group-hover/item:bg-purple-600 group-hover/item:text-white transition-colors">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover/item:text-blue-600">AI Services</div>
                      <div className="text-xs text-slate-500">Chatbots, LLMs & Workflows</div>
                    </div>
                  </Link>

                  <div className="border-t border-slate-100 my-1 pt-1">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Explore All Services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/membership"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === '/membership'
                  ? 'text-blue-600 bg-blue-50/80'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Membership
            </Link>

            <Link
              to="/certifications"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === '/certifications'
                  ? 'text-blue-600 bg-blue-50/80'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Certifications
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === '/about'
                  ? 'text-blue-600 bg-blue-50/80'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === '/contact'
                  ? 'text-blue-600 bg-blue-50/80'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Search courses & services (Ctrl+K)"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Login Gateway Button */}
            <button
              onClick={() => onOpenPortal('student')}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Login
            </button>

            {/* Get Started CTA */}
            <button
              onClick={() => onOpenInquiry('course')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Get Started
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/courses"
              className="flex items-center gap-3 px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              <BookOpen className="w-5 h-5 text-blue-600" />
              Education & Courses
            </Link>

            <div className="pl-3 py-1 space-y-1 border-l-2 border-slate-100 ml-3">
              <span className="text-xs uppercase font-bold text-slate-400 px-3">Services</span>
              <Link
                to="/services/it"
                className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                <Code className="w-4 h-4 text-blue-600" /> IT Services
              </Link>
              <Link
                to="/services/digital-marketing"
                className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                <TrendingUp className="w-4 h-4 text-emerald-600" /> Digital Marketing
              </Link>
              <Link
                to="/services/ai"
                className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                <Cpu className="w-4 h-4 text-purple-600" /> AI Services
              </Link>
            </div>

            <Link
              to="/membership"
              className="flex items-center gap-3 px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Membership Plans
            </Link>

            <Link
              to="/certifications"
              className="flex items-center gap-3 px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              Certifications
            </Link>

            <Link
              to="/about"
              className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              About TechSetu
            </Link>

            <Link
              to="/contact"
              className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal('student');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Student / Partner Login
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('course');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm"
            >
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
