import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { ServicesPage } from './pages/ServicesPage';
import { ITServicesPage } from './pages/ITServicesPage';
import { DigitalMarketingPage } from './pages/DigitalMarketingPage';
import { AIServicesPage } from './pages/AIServicesPage';
import { MembershipPage } from './pages/MembershipPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PortalPage } from './pages/PortalPage';

import { CourseDetailModal } from './components/CourseDetailModal';
import { InquiryModal } from './components/InquiryModal';
import { SearchModal } from './components/SearchModal';
import { PortalModal } from './components/PortalModal';
import type { Course } from './types';

export function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<'course' | 'service'>('course');
  const [inquiryTitle, setInquiryTitle] = useState<string | undefined>(undefined);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const [portalRole, setPortalRole] = useState<'student' | 'teacher' | 'admin'>('student');

  const handleOpenInquiry = (type: 'course' | 'service' = 'course', title?: string) => {
    setInquiryType(type);
    setInquiryTitle(title);
    setInquiryModalOpen(true);
  };

  const handleOpenPortal = (role: 'student' | 'teacher' | 'admin') => {
    setPortalRole(role);
    setPortalModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
        
        {/* Navbar Header */}
        <Navbar
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenInquiry={handleOpenInquiry}
          onOpenPortal={handleOpenPortal}
        />

        {/* Main Route View */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onSelectCourse={(course) => setSelectedCourse(course)}
                  onOpenInquiry={handleOpenInquiry}
                />
              }
            />

            <Route
              path="/courses"
              element={
                <CoursesPage
                  onSelectCourse={(course) => setSelectedCourse(course)}
                />
              }
            />

            <Route path="/services" element={<ServicesPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/services/it" element={<ITServicesPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/services/ai" element={<AIServicesPage onOpenInquiry={handleOpenInquiry} />} />

            <Route path="/membership" element={<MembershipPage onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Portal Gateways */}
            <Route path="/student" element={<PortalPage portalType="student" />} />
            <Route path="/teacher" element={<PortalPage portalType="teacher" />} />
            <Route path="/admin" element={<PortalPage portalType="admin" />} />
          </Routes>
        </main>

        {/* Universal Footer */}
        <Footer />

        {/* Interactive Modals */}
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={(course) => handleOpenInquiry('course', `Enrollment Request: ${course.title}`)}
        />

        <InquiryModal
          isOpen={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
          initialType={inquiryType}
          titleText={inquiryTitle}
        />

        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
          onSelectCourse={(course) => setSelectedCourse(course)}
        />

        <PortalModal
          isOpen={portalModalOpen}
          onClose={() => setPortalModalOpen(false)}
          initialRole={portalRole}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
