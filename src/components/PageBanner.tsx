interface PageBannerProps {
  title: string
  eyebrow: string
  image: string
}

export default function PageBanner({ title, eyebrow, image }: PageBannerProps) {
  return (
    <div className="relative h-72 lg:h-96 overflow-hidden bg-[#18244E]">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#18244E]/90 via-[#18244E]/70 to-transparent" />

      <div className="relative h-full flex flex-col justify-center px-6 lg:px-16 max-w-7xl mx-auto">
        <p className="text-[#93c5fd] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl lg:text-6xl font-bold text-white">
          {title}
        </h1>
        <div className="mt-5 w-16 h-0.5 bg-[#2563EB]" aria-hidden="true" />
      </div>
    </div>
  )
}