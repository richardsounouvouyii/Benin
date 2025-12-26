import { useRef } from 'react'
import HebergementCard from './HebergementCard'
import type { HebergementFeature } from './HebergementCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Item = {
  images: string[]
  title: string
  features: HebergementFeature[]
}

export default function HebergementCarousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scrollBy = (dir: 'prev' | 'next') => {
    const el = trackRef.current
    if (!el) return
    const delta = dir === 'next' ? el.clientWidth : -el.clientWidth
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Arrows */}
      <button
        type="button"
        onClick={() => scrollBy('prev')}
        aria-label="Précédent"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white text-black shadow border border-black/10 hover:opacity-90"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollBy('next')}
        aria-label="Suivant"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white text-black shadow border border-black/10 hover:opacity-90"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory whitespace-nowrap px-1"
      >
        <div className="inline-flex gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="snap-start inline-block w-[300px] md:w-[360px] lg:w-[380px]">
              <HebergementCard images={it.images} title={it.title} features={it.features} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
