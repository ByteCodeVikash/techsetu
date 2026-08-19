import React, { useState } from 'react';
import { X } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'course' | 'service';
  titleText?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = 'course',
  titleText
}) => {
  const [type, setType] = useState<'course' | 'service'>(initialType);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setTopic('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50">
      <div className="relative w-full max-w-md bg-white rounded-lg border border-slate-200 overflow-hidden shadow-lg">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">
            {titleText || (type === 'course' ? 'Course Inquiry' : 'Service Consultation')}
          </h3>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-6 text-center space-y-3">
            <h4 className="text-base font-bold text-slate-900">Inquiry Submitted</h4>
            <p className="text-xs text-slate-600">
              Thank you, <span className="font-semibold">{name}</span>. Our team will respond to <span className="font-semibold">{email}</span> soon.
            </p>
            <button
              onClick={handleReset}
              className="w-full py-2 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            {/* Toggle Tabs */}
            <div className="flex bg-slate-100 p-0.5 rounded text-xs font-medium">
              <button
                type="button"
                onClick={() => setType('course')}
                className={`flex-1 py-1.5 rounded transition-all ${
                  type === 'course' ? 'bg-white text-blue-600 shadow-2xs font-semibold' : 'text-slate-600'
                }`}
              >
                Education / Course
              </button>
              <button
                type="button"
                onClick={() => setType('service')}
                className={`flex-1 py-1.5 rounded transition-all ${
                  type === 'service' ? 'bg-white text-blue-600 shadow-2xs font-semibold' : 'text-slate-600'
                }`}
              >
                IT / AI Services
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Aarav Sharma"
                className="w-full px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {type === 'course' ? 'Interested Course' : 'Project Details'}
              </label>
              <textarea
                rows={3}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={type === 'course' ? 'e.g. Full Stack Web Development' : 'Describe your software or AI project...'}
                className="w-full px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors shadow-2xs"
            >
              Submit Inquiry
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
