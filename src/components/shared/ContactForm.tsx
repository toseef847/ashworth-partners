"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const PRACTICE_AREAS = [
  { value: "", label: "Select a practice area" },
  { value: "commercial-law", label: "Commercial Law" },
  { value: "private-client", label: "Private Client" },
  { value: "employment-law", label: "Employment Law" },
  { value: "dispute-resolution", label: "Dispute Resolution" },
  { value: "other", label: "Other / Not Sure" },
];

const UK_PHONE_RE = /^(\+44|0)[0-9\s]{9,11}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const alertRef = useRef<HTMLDivElement>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!EMAIL_RE.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (form.phone && !UK_PHONE_RE.test(form.phone.replace(/\s/g, ""))) {
      errs.phone = "Please enter a valid UK phone number.";
    }
    if (!form.message.trim()) {
      errs.message = "Please briefly describe how we can help.";
    } else if (form.message.trim().length < 20) {
      errs.message = "Please provide a little more detail (at least 20 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // Bot trap
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => alertRef.current?.focus(), 50);
  };

  if (submitted) {
    return (
      <div
        ref={alertRef}
        role="alert"
        tabIndex={-1}
        className="bg-[#faf9f7] rounded-xl border border-[#c9a84c]/30 p-8 text-center outline-none"
      >
        <CheckCircle
          size={48}
          className="text-[#c9a84c] mx-auto mb-4"
          aria-hidden="true"
        />
        <h3 className="font-display font-semibold text-[#0f172a] text-xl mb-2">
          Thank you for your enquiry
        </h3>
        <p className="text-[#0f172a]/60 text-sm leading-relaxed max-w-sm mx-auto">
          A member of our team will be in touch within one business day. If your
          matter is urgent, please call us directly on{" "}
          <a
            href="tel:+442079460800"
            className="text-[#c9a84c] font-semibold"
          >
            +44 20 7946 0800
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact enquiry form"
      className="space-y-5"
    >
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-name">Company Name</label>
        <input
          type="text"
          id="company-name"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-[#0f172a] mb-1.5"
        >
          Full Name <span aria-hidden="true" className="text-[#c9a84c]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          required
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full px-4 py-3 rounded-lg border text-[#0f172a] text-sm placeholder:text-[#0f172a]/30 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent"
          style={{ borderColor: errors.name ? "#ef4444" : "#0f172a20" }}
          placeholder="e.g. Jane Smith"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[#0f172a] mb-1.5"
        >
          Email Address <span aria-hidden="true" className="text-[#c9a84c]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full px-4 py-3 rounded-lg border text-[#0f172a] text-sm placeholder:text-[#0f172a]/30 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent"
          style={{ borderColor: errors.email ? "#ef4444" : "#0f172a20" }}
          placeholder="jane.smith@example.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-[#0f172a] mb-1.5"
        >
          Phone Number{" "}
          <span className="text-[#0f172a]/40 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
          className="w-full px-4 py-3 rounded-lg border text-[#0f172a] text-sm placeholder:text-[#0f172a]/30 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent"
          style={{ borderColor: errors.phone ? "#ef4444" : "#0f172a20" }}
          placeholder="e.g. 07700 900 123"
        />
        <p id="phone-hint" className="mt-1 text-xs text-[#0f172a]/40">
          UK number preferred
        </p>
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Practice Area */}
      <div>
        <label
          htmlFor="practiceArea"
          className="block text-sm font-semibold text-[#0f172a] mb-1.5"
        >
          Practice Area
        </label>
        <select
          id="practiceArea"
          name="practiceArea"
          value={form.practiceArea}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-[#0f172a]/[0.13] text-[#0f172a] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent appearance-none"
        >
          {PRACTICE_AREAS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[#0f172a] mb-1.5"
        >
          How can we help? <span aria-hidden="true" className="text-[#c9a84c]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className="w-full px-4 py-3 rounded-lg border text-[#0f172a] text-sm placeholder:text-[#0f172a]/30 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent resize-y"
          style={{ borderColor: errors.message ? "#ef4444" : "#0f172a20" }}
          placeholder="Please briefly describe your legal matter..."
        />
        <p id="message-hint" className="mt-1 text-xs text-[#0f172a]/40">
          Do not include confidential information at this stage.
        </p>
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <p className="text-xs text-[#0f172a]/40 leading-relaxed">
        By submitting this form, you consent to Ashworth & Partners Solicitors
        contacting you about your enquiry. We will never share your details with
        third parties. See our{" "}
        <a href="/privacy-policy" className="text-[#c9a84c] underline">
          Privacy Policy
        </a>{" "}
        for details.
      </p>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-md bg-[#c9a84c] text-[#0f172a] font-bold text-sm tracking-wide hover:bg-[#e8c97a] transition-colors focus-visible:outline-2 focus-visible:outline-[#9e7a2e] focus-visible:outline-offset-2"
      >
        <Send size={16} aria-hidden="true" />
        Send Enquiry
      </button>
    </form>
  );
}
