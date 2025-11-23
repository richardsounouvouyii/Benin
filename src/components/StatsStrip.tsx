type StatItem = {
  value: string | number
  suffix?: string
  label: string
}

type StatsStripProps = {
  stats?: StatItem[]
  className?: string
  cardColorClass?: string // permet de changer la couleur si besoin
}

export default function StatsStrip({
  stats = [
    { value: 3000, suffix: '+', label: 'Touristes' },
    { value: 70, suffix: '+', label: 'Guides' },
    { value: 300, suffix: '+', label: 'Sites touristiques' }
  ],
  className = '',
  cardColorClass = 'bg-[#E2183A]'
}: StatsStripProps) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full px-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`${cardColorClass} rounded-sm h-42 flex flex-col items-center justify-center text-white shadow-sm`}
          >
            <div
              className="text-center align-middle"
              data-leading-trim="none"
              style={{
                fontFamily: 'Mitr, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '40px',
                lineHeight: '40px',
                letterSpacing: '0px',
                verticalAlign: 'middle'
              }}
            >
              {s.value}{s.suffix}
            </div>
            <div
              className="mt-2 text-center align-middle"
              data-leading-trim="none"
              style={{
                fontFamily: 'Mitr, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '24px',
                letterSpacing: '0px',
                verticalAlign: 'middle'
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
