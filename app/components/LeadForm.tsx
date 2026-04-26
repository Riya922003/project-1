'use client';

import Image from 'next/image';
import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name:         string;
  email:        string;
  phone:        string;
  company:      string;
  domain:       string;
  candidates:   string;
  deliveryMode: string;
  location:     string;
}

type SubmitStatus = 'idle' | 'success' | 'error';

// ─── Constants ────────────────────────────────────────────────────────────────

const EMPTY_FORM: FormData = {
  name:         '',
  email:        '',
  phone:        '',
  company:      '',
  domain:       '',
  candidates:   '',
  deliveryMode: '',
  location:     '',
};

const DOMAIN_OPTIONS = [
  { value: 'tech',       label: 'Technology' },
  { value: 'finance',    label: 'Finance'    },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'retail',     label: 'Retail'     },
  { value: 'other',      label: 'Other'      },
] as const;

const DELIVERY_OPTIONS = [
  { value: 'online',  label: 'Online'  },
  { value: 'offline', label: 'Offline' },
  { value: 'hybrid',  label: 'Hybrid'  },
] as const;

const INPUT_CLASS =
  'w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-600 placeholder-gray-400 text-sm bg-transparent';

const SELECT_CLASS =
  'w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-blue-600 appearance-none bg-transparent cursor-pointer text-sm';

// ─── Sub-components ───────────────────────────────────────────────────────────

function ChevronDownIcon() {
  return (
    <svg
      className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function StatusMessage({ status, message }: { status: SubmitStatus; message: string }) {
  if (status === 'idle' || !message) return null;

  return (
    <div
      role="alert"
      className={`mb-4 p-3 rounded-lg text-sm ${
        status === 'success'
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'
      }`}
    >
      {message}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const [formData, setFormData]       = useState<FormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/leads', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your enquiry has been submitted successfully.');
        setFormData(EMPTY_FORM);
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Failed to submit. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden relative flex flex-row max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left — decorative image */}
        <div className="hidden md:block w-[45%] relative min-h-[600px]">
          <Image
            src="/image/business-v2.webp"
            alt="Business professionals discussing corporate training solutions"
            fill
            className="object-cover"
          />
        </div>

        {/* Right — form */}
        <div className="w-full md:w-[55%] p-8 overflow-y-auto relative">

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close enquiry form"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Enquire Now</h2>

          <StatusMessage status={submitStatus} message={submitMessage} />

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
              autoComplete="name"
              className={INPUT_CLASS}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              autoComplete="email"
              className={INPUT_CLASS}
            />

            {/* Phone with country code */}
            <div className="flex items-center gap-3 border-b border-gray-300 py-2">
              <span className="text-lg" aria-label="India flag">🇮🇳</span>
              <span className="text-gray-500 text-sm" aria-label="Country code">▾ +91</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                autoComplete="tel"
                className="flex-1 border-0 focus:outline-none text-sm bg-transparent"
              />
            </div>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
              required
              autoComplete="organization"
              className={INPUT_CLASS}
            />

            {/* Domain select */}
            <div className="relative">
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className={`${SELECT_CLASS} ${formData.domain ? 'text-black' : 'text-gray-400'}`}
              >
                <option value="" className="text-gray-400">Select Domain</option>
                {DOMAIN_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value} className="text-black">{label}</option>
                ))}
              </select>
              <ChevronDownIcon />
            </div>

            <input
              type="number"
              name="candidates"
              value={formData.candidates}
              onChange={handleChange}
              placeholder="Enter No. of candidates"
              min={1}
              className={INPUT_CLASS}
            />

            {/* Delivery mode select */}
            <div className="relative">
              <select
                name="deliveryMode"
                value={formData.deliveryMode}
                onChange={handleChange}
                className={`${SELECT_CLASS} ${formData.deliveryMode ? 'text-black' : 'text-gray-400'}`}
              >
                <option value="" className="text-gray-400">Select Mode of Delivery</option>
                {DELIVERY_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value} className="text-black">{label}</option>
                ))}
              </select>
              <ChevronDownIcon />
            </div>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Gurugram, Delhi, India"
              autoComplete="address-level2"
              className={INPUT_CLASS}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4 disabled:bg-blue-400 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? 'Submitting…' : 'Submit'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}