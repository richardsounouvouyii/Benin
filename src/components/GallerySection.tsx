import GalleryCard from './GalleryCard'

export default function GallerySection({
  title,
  description,
  images,
}: {
  title: string
  description?: string
  images: { src: string; label?: string }[]
}) {
  return (
    <section className="mb-12">
      <style>{`
        .gallery-desc {
          font-family: 'Mitr', sans-serif;
          font-weight: 300;
          font-style: normal; /* "Light" correspond à weight 300 */
          font-size: 20px;
          leading-trim: none; /* propriété expérimentale */
          line-height: 140%;
          letter-spacing: 0px;
        }
      `}</style>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-extrabold text-[#E2183A] uppercase mb-2" style={{ fontFamily: 'Mitr, sans-serif' }}>
            {title}
          </h3>
          {description && <p className="gallery-desc text-neutral-800/80 max-w-2xl">{description}</p>}
        </div>
        <button
          type="button"
          className="h-10 px-4 border border-[#E2183A] text-[#E2183A] rounded-md hover:bg-[#E2183A] hover:text-white transition"
        >
          Explorez plus &nbsp;→
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <GalleryCard key={idx} src={img.src} label={img.label ?? title} />
        ))}
      </div>
    </section>
  )
}
