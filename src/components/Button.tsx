import Icon from './Icon'

type Variant = 'primary' | 'outline' | 'ghost-white' | 'white'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  children: React.ReactNode
  withArrow?: boolean
  className?: string
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#18244E] text-white hover:bg-[#243166] focus-visible:ring-[#18244E]/40',
  outline:
    'border border-slate-200 text-[#18244E] hover:border-[#18244E] hover:bg-slate-50 focus-visible:ring-[#18244E]/20',
  'ghost-white':
    'border-2 border-white/60 text-white hover:border-white hover:bg-white hover:text-[#18244E] focus-visible:ring-white/40',
  white:
    'bg-white text-[#18244E] hover:bg-slate-100 focus-visible:ring-white/40',
}

const sizeClasses: Record<Size, string> = {
  sm:  'px-4 py-2 text-xs',
  md:  'px-6 py-3 text-sm',
  lg:  'px-8 py-4 text-sm',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  children,
  withArrow = false,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
      {withArrow && <Icon name="arrowRight" className="w-4 h-4" />}
    </button>
  )
}