interface SectionLabelProps {
  index: string
  label: string
}

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
        {index}
      </span>
      <div className="h-px w-8 bg-[#2563EB]" aria-hidden="true" />
      <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] uppercase">
        {label}
      </span>
    </div>
  )
}