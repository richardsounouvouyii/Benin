
type Item = {
  id: number | string
  title: string
  location?: string
  src?: string
}

export default function DestinationCard({
  item,
  featured = false,
  background = false,
}: {
  item: Item
  featured?: boolean
  background?: boolean
}) {
  return (
    // mettre 'group' sur l'article quand on souhaite hover (on évite pour le featured background)
    <article
      className={`bg-white shadow-sm overflow-hidden flex flex-col ${featured ? 'h-full' : ''} ${!(featured && background) ? 'group' : ''}`}>
      {/* styles locaux pour les titres (Mitr) */}
      <style>{`
        .dest-title {
          font-family: 'Mitr', sans-serif;
          font-weight: 500;
          font-style: normal; /* "Medium" se traduit par font-weight:500 */
          font-size: 18px;
          line-height: 100%;
          letter-spacing: 0px;
          /* propriété expérimentale / pas universellement supportée : */
          leading-trim: none;
        }
        .dest-subtitle {
          font-family: 'Mitr', sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 14px;
          line-height: 100%;
          letter-spacing: 0px;
          leading-trim: none;
          color: #475569; /* text-neutral-600 approximé */
        }
      `}</style>
      {/* image en arrière-plan seulement si background === true */}
      {featured && background ? (
        <div
          className="bg-neutral-100 relative w-full md:h-[1100px] bg-center bg-cover"
          style={{ backgroundImage: `url(${item.src ?? '/images/placeholder.jpg'})` }}
          role="img"
          aria-label={item.title}
        >
          {/* overlay léger pour contraste (optionnel) */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" aria-hidden="true" />
        </div>
      ) : (
        // conteneur image normal : overflow-hidden pour éviter débordement, ajout d'un léger scale au hover via group-hover
        <div className="bg-neutral-100 overflow-hidden filter transition duration-300 ease-in-out group-hover:shadow-lg group-hover:brightness-110 cursor-pointer">
          <img
            src={item.src ?? '/images/placeholder.jpg'}
            alt={item.title}
            // allow slight grow on hover (group-hover:scale-105). Default scale-100.
            className="w-full aspect-square object-cover transform transition-transform duration-300 scale-100 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      {/*
        Si c'est featured on n'affiche ni le titre ni la localisation
      */}
      {!featured && (
        // Le bloc titre réagit au hover via 'group' appliqué sur l'article : légère montée et augmentation de taille
        <div className="p-4 transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="mb-1 transition-all duration-300 dest-title">{item.title}</h3>
          {item.location && <p className="transition-all duration-300 dest-subtitle">de {item.location}</p>}
        </div>
      )}
    </article>
  )
}
