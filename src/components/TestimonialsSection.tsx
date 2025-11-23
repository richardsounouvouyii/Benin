import { useState, useEffect, useRef, useCallback } from 'react'
import { Star } from 'lucide-react'

export type Testimonial = {
  id: string
  name: string
  message: string
  rating: number // 1..5
}

type TestimonialsSectionProps = {
  items?: Testimonial[]
  className?: string
  title?: string
}

export default function TestimonialsSection({
  items = [
    { id: 't1', name: 'Alice M.', message: 'La planification de notre itinéraire personnalisé a été facile et sans stress. Chaque destination recommandée a dépassé nos attentes.', rating: 3 },
    { id: 't2', name: 'Alice A.', message: 'Le parc Pendjari est un incontournable pour les amoureux de la nature. L\'organisation était parfaite, et les guides étaient très compétents.', rating: 3 },
    { id: 't3', name: 'Fabrice K.', message: 'Partir avec cette équipe a été la meilleure décision : sécurité, authenticité et découvertes enrichissantes chaque jour.', rating: 4 },
    { id: 't4', name: 'Sandra T.', message: 'Super accueil et grande réactivité avant le départ. Les activités étaient bien équilibrées.', rating: 5 },
    { id: 't5', name: 'Sandra T.', message: 'Super accueil et grande réactivité avant le départ. Les activitéstaient bien équilibrées.', rating: 5 },
    { id: 't6', name: 'Sandra T.', message: 'Super accueil et grande réactivité avant le départ. Les activitéstaient bien équilibrées.', rating: 5 },
    { id: 't7', name: 'Sandra T.', message: 'Super accueil et grande réactivité avant le départ. Les activitéstaient bien équilibrées.', rating: 2 }
  ],
  className = '',
  title = 'RECOMMANDATIONS DES UTILISATEURS'
}: TestimonialsSectionProps) {
  // Index circulaire: on duplique la liste 3 fois et on commence au centre
  const [index, setIndex] = useState(() => items.length) // commence sur le premier réel du bloc central
  const [enableTransition, setEnableTransition] = useState(true)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const cardWidth = 380
  const gap = 32
  const itemCount = items.length

  // Navigation (on laisse l'index avancer/reculer)
  const next = useCallback(() => setIndex(i => i + 1), [])

  // Auto-défilement activé: la boucle avance automatiquement toutes les 6s
  useEffect(() => {
    const id = setInterval(() => next(), 6000)
    return () => clearInterval(id)
  }, [next])

  // Gestion fin transition pour boucle fluide (bloc centralisé)
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const handleEnd = () => {
      // si on a dépassé le bloc central à droite -> reculer d'un bloc
      if (index >= 2 * itemCount) {
        setEnableTransition(false)
        setIndex(i => i - itemCount)
      } else if (index <= 0) {
        // si on a dépassé à gauche -> avancer d'un bloc
        setEnableTransition(false)
        setIndex(i => i + itemCount)
      }
    }
    track.addEventListener('transitionend', handleEnd)
    return () => track.removeEventListener('transitionend', handleEnd)
  }, [index, itemCount])

  // Réactiver transition après repositionnement instantané
  useEffect(() => {
    if (!enableTransition) {
      const id = requestAnimationFrame(() => setEnableTransition(true))
      return () => cancelAnimationFrame(id)
    }
  }, [enableTransition])

  // Tableau étendu: répéter 3 fois pour éviter de voir la fin
  const extendedItems = [...items, ...items, ...items]
  const translate = -(index * (cardWidth + gap))

  return (
    <section className={`w-full ${className}`} aria-labelledby="user-recos-title">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center justify-between">
          <h2
            id="user-recos-title"
            className="text-[#E2183A]"
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
            {title}
          </h2>
        </div>
        <div className="relative mt-10 overflow-hidden">
          {/* Piste */}
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${translate}px)`,
              transition: enableTransition ? 'transform 0.6s ease' : 'none'
            }}
          >
            {extendedItems.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="bg-[#F5F5F5] border border-neutral-200 shadow-sm flex flex-col justify-between p-8"
                style={{
                  minWidth: `${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                  fontFamily: 'Mitr, sans-serif'
                }}
              >
                <p
                  className="text-neutral-800 mb-6"
                  style={{
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '150%'
                  }}
                >
                  "{t.message}"
                </p>
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: '14px'
                    }}
                    className="text-neutral-900"
                  >
                    {t.name}
                  </span>
                  <span className="flex items-center" aria-label={`Note ${t.rating} sur 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < t.rating ? 'text-[#F6A700] fill-[#F6A700]' : 'text-neutral-300'}
                      />
                    ))}
                  </span>
                </div>
              
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <a
            href="#avis"
            className="inline-block bg-[#E2183A] text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-[#E2183A] transition-colors"
            style={{ fontFamily: 'Mitr, sans-serif' }}
          >
            Laissez un avis
          </a>
        </div>
      </div>
    </section>
  )
}
