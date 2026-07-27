import type { Service } from '../types'
import type { IconName } from './Icon'
import Icon from './Icon'

interface ServiceCardProps {
  service: Service
  onClick: () => void
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const { index, title, description, iconName } = service

  return (
    <button
      onClick={onClick}
      className="group flex flex-col text-left h-full w-full bg-white rounded-2xl p-7 border border-slate-100 hover:border-[#18244E]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-5 shrink-0">
        <Icon name={iconName as IconName} className="w-6 h-6 text-[#18244E]" />
      </div>

      {/* Index */}
      <div className="text-xs text-slate-400 font-medium mb-2">{index}</div>

      {/* Title */}
      <h3 className="font-display font-semibold text-[#18244E] text-lg mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>

      {/* Hover CTA */}
      <div className="mt-auto pt-5 flex items-center gap-1 text-[#2563EB] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more
        <Icon name="arrowRight" className="w-4 h-4" />
      </div>
    </button>
  )
}