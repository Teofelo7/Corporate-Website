import { IMAGES } from '../utils/image'
import type { IconName } from '../components/Icon'
import PageBanner from '../components/PageBanner'
import SectionLabel from '../components/SectionLabel'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'

interface ContactDetail {
  iconName: IconName
  label: string
  primary: string
  secondary?: string
}

const CONTACT_DETAILS: ContactDetail[] = [
  {
    iconName: 'mapPin',
    label: 'Office Address',
    primary: 'No. 12, Jalan Lintas Plaza, Kota Kinabalu, Sabah 88300, Malaysia',
  },
  {
    iconName: 'phone',
    label: 'Phone',
    primary: '+60 88-123 4567',
    secondary: 'Mon–Fri, 8:00am – 5:00pm',
  },
  {
    iconName: 'email',
    label: 'Email',
    primary: 'info@tomborneo.com.my',
    secondary: 'We respond within 1 business day',
  },
]

const REGISTRATION = [
  { label: 'Company No.',  value: 'ROC 1234567-X' },
  { label: 'CIDB Grade',   value: 'G3 — Class A/B' },
  { label: 'SST No.',      value: 'W10-1234-56789012' },
]

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        eyebrow="Get in Touch"
        image={IMAGES.hardhat}
      />

      {/* ── Main contact section ── */}
      <section className="py-24 lg:py-32" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* ── Left: info panel ── */}
            <div className="lg:col-span-2">
              <SectionLabel index="01" label="Reach Us" />
              <h2 id="contact-heading" className="font-display text-3xl lg:text-4xl font-bold text-[#18244E] mb-6">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10">
                Have a project in mind? Want to know more about our services? Our team is ready to assist. Fill in the form or reach us directly.
              </p>

              {/* Contact details */}
              <div className="space-y-7">
                {CONTACT_DETAILS.map(({ iconName, label, primary, secondary }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                      <Icon name={iconName} className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                        {label}
                      </div>
                      <div className="text-slate-700 text-sm leading-relaxed">{primary}</div>
                      {secondary && (
                        <div className="text-slate-400 text-xs mt-0.5">{secondary}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Registration */}
              <div className="mt-10 pt-10 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  Company Registration
                </div>
                <dl className="space-y-2">
                  {REGISTRATION.map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <dt className="text-slate-400">{label}</dt>
                      <dd className="text-slate-600 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location banner ── */}
      <section className="relative h-64 bg-[#18244E] overflow-hidden" aria-label="Office location">
        <img
          src={IMAGES.sabah}
          alt="Kota Kinabalu city, Sabah"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <Icon name="mapPin" className="w-10 h-10 mb-3 text-[#93c5fd]" />
          <div className="font-display text-2xl font-bold mb-1">Kota Kinabalu, Sabah</div>
          <div className="text-slate-300 text-sm">Our headquarters — proudly serving all of Sabah</div>
        </div>
      </section>
    </>
  )
}
