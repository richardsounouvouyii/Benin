import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'

export type EventItem = {
  id: string
  title: string
  description: string
  startDate: string // format: YYYY-MM-DD
  endDate: string   // format: YYYY-MM-DD
  location: string
  image: string
  ctaLabel?: string
  ctaHref?: string
}

function formatDateRange(start: string, end: string): string {
  // Simpliste pour FR: extraire jour + mois (nom en français codé ici)
  const months = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']
  const sd = new Date(start)
  const ed = new Date(end)
  if (isNaN(sd.getTime()) || isNaN(ed.getTime())) return ''
  const startStr = `${sd.getDate()} ${months[sd.getMonth()]}`
  const endStr = `${ed.getDate()} ${months[ed.getMonth()]} ${ed.getFullYear()}`
  return `${startStr} - ${endStr}`
}

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="bg-white w-full max-w-xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col" aria-labelledby={`event-title-${event.id}`}> 
      <div className="w-full h-60 bg-neutral-100 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3
          id={`event-title-${event.id}`}
          className="text-black"
          style={{
            fontFamily: 'Mitr, sans-serif',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '120%',
            letterSpacing: '0px'
          }}
        >
          {event.title}
        </h3>
        <p
          className="text-sm text-black/80"
          style={{
            fontFamily: 'Mitr, sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: '13px',
            lineHeight: '150%',
            letterSpacing: '0px'
          }}
        >
          {event.description}
        </p>
        <div className="flex flex-wrap items-center gap-6 text-xs" style={{ fontFamily: 'Mitr, sans-serif' }}>
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>{formatDateRange(event.startDate, event.endDate)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="pt-2">
          <a
            href={event.ctaHref || '#'}
            className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-[#C20026]"
            style={{ fontFamily: 'Mitr, sans-serif' }}
          >
            {event.ctaLabel || 'En savoir plus'}
            <ArrowRight size={16} className="text-[#C20026]" />
          </a>
        </div>
      </div>
    </article>
  )
}
