import { BedSingle, ShowerHead, Ruler } from 'lucide-react'
import { useState } from 'react'

type FeatureType = 'size' | 'shower' | 'bed' | 'custom'

export type HebergementFeature = {
  type: FeatureType
  text: string
}

export default function HebergementCard({
  image,
  images,
  title,
  features,
  onReserve,
}: {
  image?: string
  images?: string[]
  title: string
  features: HebergementFeature[]
  onReserve?: () => void
}) {
  const gallery = (images && images.length > 0) ? images : (image ? [image] : [])
  const [index] = useState(0)
  const renderIcon = (t: FeatureType) => {
    switch (t) {
      case 'size':
        return <Ruler className="w-4 h-4" />
      case 'shower':
        return <ShowerHead className="w-4 h-4" />
      case 'bed':
        return <BedSingle className="w-4 h-4" />
      default:
        return <span className="w-4 h-4 inline-block" aria-hidden="true">•</span>
    }
  }

  return (
    <article className="rounded-md overflow-hidden shadow-md bg-white flex flex-col">
      <figure className="relative">
        {gallery.length > 0 && (
          <img src={gallery[index]} alt={title} className="w-full h-56 md:h-72 object-cover" loading="lazy" />
        )}
        {/* flèches retirées selon la demande */}
        {/* points d'indicateur supprimés */}
      </figure>

      <div className="bg-white text-black p-4">
        <style>{`
          .heb-desc { font-family: 'Mitr', sans-serif; font-weight: 300; font-style: normal; font-size: 14px; line-height: 140%; letter-spacing: 0px; leading-trim: none; }
        `}</style>
        <h4 className="text-sm md:text-base font-semibold mb-3" style={{ fontFamily: 'Mitr, sans-serif' }}>{title}</h4>
        <ul className="space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 heb-desc">
              <span className="text-black/70">{renderIcon(f.type)}</span>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 pb-4 bg-white">
        <button
          type="button"
          onClick={onReserve}
          className="w-full h-12 bg-[#E2183A] text-white rounded-md hover:opacity-95 transition"
        >
          Réserver
        </button>
      </div>
    </article>
  )
}
