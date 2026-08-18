import { useState } from 'react'
import { SERVICES } from '../data/services'
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const serviceName = SERVICES.find((service) => service.id === form.service)?.title || form.service || 'General Enquiry'
    const subject = `Project Enquiry - ${serviceName}`
    const body = [
      `Name: ${form.name}`,
      `Company / Organisation: ${form.company || '-'}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '-'}`,
      `Service Required: ${serviceName}`,
      '',
      'Project Details:',
      form.message,
    ].join('\n')

    window.location.href = `mailto:tomborneosb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-display text-2xl font-bold text-[#18244E] mb-8">Project Enquiry</h3>

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
            placeholder="Your name"
            className={INPUT_BASE}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-slate-500 mb-1.5">Company / Organisation</label>
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
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 mb-1.5">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className={INPUT_BASE}
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="service" className="block text-xs font-semibold text-slate-500 mb-1.5">Service Required</label>
        <select id="service" name="service" value={form.service} onChange={handleChange} className={INPUT_BASE}>
          <option value="">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
          <option value="Multiple Services">Multiple Services</option>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </div>

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
          placeholder="Describe your project and requirements..."
          className={`${INPUT_BASE} resize-none`}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" withArrow className="w-full">
        Email Project Enquiry
      </Button>

      <p className="text-xs text-slate-400 text-center mt-4">
        This button opens an email addressed to tomborneosb@gmail.com with your enquiry details filled in.
      </p>
    </form>
  )
}
