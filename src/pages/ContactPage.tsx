import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { FAQS } from '../data/faqs';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <SectionHeader
        badge="CONTACT"
        title="Contact Us"
        subtitle="Get in touch with our team regarding courses, cohorts, or custom software projects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 text-white rounded-lg p-6 space-y-5">
            <h3 className="text-base font-bold">Contact Details</h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-300">Email</div>
                  <div className="text-white">contact@techsetu.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-300">Phone</div>
                  <div className="text-white">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-300">Office</div>
                  <div className="text-white">TechSetu Engineering Office, Sector 62, Noida, UP</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 bg-white rounded-lg border border-slate-200 p-6">
          {sent ? (
            <div className="py-8 text-center space-y-3">
              <h3 className="text-lg font-bold text-slate-900">Message Received</h3>
              <p className="text-xs text-slate-600">
                Thank you for reaching out. We will get back to you at <span className="font-semibold">{email}</span>.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setName('');
                  setEmail('');
                  setSubject('');
                  setMessage('');
                }}
                className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 rounded hover:bg-blue-100"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 mb-2">Send Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject or topic"
                  className="w-full px-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  className="w-full px-3 py-2 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-bold text-slate-900">Frequently Asked Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq, i) => (
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
