import EventCard, { type EventItem } from './EventCard'
import { ArrowRight } from 'lucide-react'
import danse from '../assets/images/danse.png'
import maison from '../assets/images/maison.png'

export type EventsSectionProps = {
  events?: EventItem[]
  className?: string
}

export default function EventsSection({
  events = [
    {
      id: 'vodoun-1',
      title: 'Festival International du Vodoun',
      description: 'Plongez dans les traditions ancestrales avec des danses, des rituels et des célébrations vibrantes. Une expérience culturelle...',
      startDate: '2025-01-10',
      endDate: '2025-01-12',
      location: 'Ouidah',
      image: danse,
      ctaLabel: 'En savoir plus'
    },
    {
      id: 'vodoun-2',
      title: 'Festival International du Vodoun',
      description: 'Plongez dans les traditions ancestrales avec des danses, des rituels et des célébrations vibrantes. Une expérience culturelle...',
      startDate: '2025-01-10',
      endDate: '2025-01-12',
      location: 'Ouidah',
      image: maison,
      ctaLabel: 'En savoir plus'
    }
  ],
  className = ''
}: EventsSectionProps) {
  return (
    <section className={`w-full  flex flex-col items-center ${className}`} aria-labelledby="events-title">
      <div className="w-full max-w-6xl px-4">
        <h2
          id="events-title"
          className="text-white"
          style={{
            fontFamily: 'Mitr, sans-serif',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0px',
            textTransform: 'uppercase'
          }}
        >
          Événements à venir
        </h2>
        <p
          className="mt-6 text-white/90 max-w-2xl"
          style={{
            fontFamily: 'Mitr, sans-serif',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: '14px',
            lineHeight: '150%',
            letterSpacing: '0px'
          }}
        >
          Ne manquez pas les événements culturels et festivals vibrants du Bénin. Découvrez ce qui se passe prochainement et plongez dans l'ambiance festive et authentique du pays.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map(ev => <EventCard key={ev.id} event={ev} />)}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/destinations"
            className="inline-flex items-center gap-2 px-5 py-3 border border-white text-white hover:bg-white hover:text-[#C20026] transition-colors duration-300"
            style={{ fontFamily: 'Mitr, sans-serif', fontWeight: 500, fontSize: '14px' }}
          >
            Voir toutes les destinations
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
