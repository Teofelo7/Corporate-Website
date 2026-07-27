import { useState } from 'react'
import { SERVICES } from '../data/services'
import Icon from './Icon'
import Button from './Button'

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

const INITIAL_FORM: FormState = {
  name: '', company: '', email: '', phone: '', service: '', message: '',
}

const INPUT_BASE =
  'w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB]'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  function handleReset() {
    setSubmitted(false)
    setForm(INITIAL_FORM)
  }

  if (submitted) {
    return (
      <div className="text-center py-20 px-6">
        <div className="w-16 h-16 bg-[#eff6ff] rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="check" className="w-8 h-8 text-[#2563EB]" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#18244E] mb-3">
          Message Received
        </h3>
        <p className="text-slate-500 max-w-sm mx-auto mb-8">
          Thank you for your enquiry. Our team will review your message and respond within one business day.
        </p>
        <button
          onClick={handleReset}
          className="text-sm text-[#2563EB] font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-display text-2xl font-bold text-[#18244E] mb-8">
        Project Enquiry
      </h3>

      {/* Row 1 */}
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-500 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name as per IC / Passport"
            className={INPUT_BASE}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-slate-500 mb-1.5">
            Company / Organisation
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            className={INPUT_BASE}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-500 mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={INPUT_BASE}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+60 12-345 6789"
            className={INPUT_BASE}
          />
        </div>
      </div>

      {/* Service select */}
      <div className="mb-5">
        <label htmlFor="service" className="block text-xs font-semibold text-slate-500 mb-1.5">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={INPUT_BASE}
        >
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="multiple">Multiple Services</option>
          <option value="general">General Enquiry</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-7">
        <label htmlFor="message" className="block text-xs font-semibold text-slate-500 mb-1.5">
          Project Details <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Describe your project — location, scope, timeline, and any specific requirements..."
          className={`${INPUT_BASE} resize-none`}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={loading}
        withArrow={!loading}
        className="w-full"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          'Submit Enquiry'
        )}
      </Button>

      <p className="text-xs text-slate-400 text-center mt-4">
        We respond within 1 business day. Your information is kept confidential.
      </p>
    </form>
  )
}