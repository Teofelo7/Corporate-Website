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
    primary: 'Kampung Manggis, 89100 Pitas, Sabah',
  },
  {
    iconName: 'phone',
    label: 'Phone',
    primary: '018-2400723',
    secondary: '013-9942430',
  },
  {
    iconName: 'email',
    label: 'Email',
    primary: 'tomborneosb@gmail.com',
  },
]

const REGISTRATION = [
  { label: 'SSM', value: '202401010100 (1555950-T)' },
  { label: 'CIDB G3', value: '0120250226-SB151319' },
  { label: 'Trading Licence', value: 'PTS/2025/2855' },
  { label: 'MOF (PMS)', value: 'KS10307872894222862' },
]

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" eyebrow="Get in Touch" image={IMAGES.hardhat} />

      <section className="py-24 lg:py-32" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <SectionLabel index="01" label="Reach Us" />
              <h2 id="contact-heading" className="font-display text-3xl lg:text-4xl font-bold text-[#18244E] mb-6">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10">
                Thank you for your interest in our services. Contact TOMBORNEO to discuss your project and how our team can assist you in achieving your goals.
              </p>

              <div className="space-y-7">
                {CONTACT_DETAILS.map(({ iconName, label, primary, secondary }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#eff6ff] flex items-center justify-center shrink-0">
                      <Icon name={iconName} className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
                      <div className="text-slate-700 text-sm leading-relaxed">{primary}</div>
                      {secondary && <div className="text-slate-500 text-sm mt-0.5">{secondary}</div>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Company Registration</div>
                <dl className="space-y-3">
                  {REGISTRATION.map(({ label, value }) => (
                    <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 text-sm">
                      <dt className="text-slate-400">{label}</dt>
                      <dd className="text-slate-600 font-medium sm:text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-64 bg-[#18244E] overflow-hidden" aria-label="Office location">
        <img
          src={IMAGES.sabah}
          alt="Solar photovoltaic project reference from the TOMBORNEO company profile"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <Icon name="mapPin" className="w-10 h-10 mb-3 text-[#93c5fd]" />
          <div className="font-display text-2xl font-bold mb-1">Kampung Manggis, Pitas, Sabah</div>
          <div className="text-slate-300 text-sm">TOMBORNEO Sdn. Bhd.</div>
        </div>
      </section>
    </>
  )
}
