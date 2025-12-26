import DestinationCard from './DestinationCard'

type Item = { id: number | string; title: string; location?: string; src?: string }

export default function DestinationGrid({
  items,
  featuredItem,
}: {
  items: Item[]
  featuredItem?: Item
}) {
  return (
    <div className="grid gap-10 md:grid-cols-5 items-start">
      {/* Colonne rois (3/5) */}
      <div className="md:col-span-3 flex flex-col gap-8 z-0">
        {/* trois cartes sur la même ligne en desktop */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {items.map(i => (
            <DestinationCard key={i.id} item={i} />
          ))}
        </div>
      </div>

      {/* Colonne Amazon (2/5) - plus large, remontée seulement en desktop */}
      <div className="md:col-span-2 md:-mt-73 md:z-30">
        {featuredItem ? (
          <DestinationCard
            item={featuredItem}
            featured={true}
            background={true} // <-- uniquement amazon aura background-image
          />
        ) : null}
      </div>
    </div>
  )
}
