type FeatureTextCardProps = {
  title: string
  description: string
  variant?: 'green' | 'pink'
}

export default function FeatureTextCard({ title, description, variant = 'green' }: FeatureTextCardProps) {
  const isGreen = variant === 'green'
  const isPink = variant === 'pink'

  const containerVariantClasses = isGreen
    ? 'bg-[#E9F9EE] border-l-4 border-[#2E9E54] group'
    : 'bg-[#FCE9EF] border-r-4 border-[#E2183A] group'

  const titleColor = isPink ? 'text-[#C20026]' : 'text-black'

  return (
    <div className={`${containerVariantClasses} p-5 flex flex-col justify-start shadow-sm relative overflow-hidden `}> 
      {isGreen && (
        <span
          className="absolute inset-0 bg-[#148C43] w-0 group-hover:w-full transition-all duration-500"
          aria-hidden="true"
        />
      )}
      {isPink && (
        <span
          className="absolute inset-0 bg-[#E2183A] w-0 group-hover:w-full transition-all duration-500 right-0 left-auto"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10">
        <h3
          className={`${titleColor} ${isGreen ? 'group-hover:text-white transition-colors duration-300' : ''} ${isPink ? 'group-hover:text-white transition-colors duration-300' : ''}`}
          data-leading-trim="none"
          style={{
            fontFamily: 'Mitr, sans-serif',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '28px',
            lineHeight: '120%',
            letterSpacing: '0px'
          }}
        >
          {title}
        </h3>
        <p
          className={`mt-3 ${isGreen ? 'group-hover:text-white transition-colors duration-300' : ''} ${isPink ? 'group-hover:text-white transition-colors duration-300' : ''}`}
          data-leading-trim="none"
          style={{
            fontFamily: 'Mitr, sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '150%',
            letterSpacing: '0px'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}