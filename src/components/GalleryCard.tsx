import React from 'react'

export default function GalleryCard({ src, label }: { src: string; label?: string }) {
  return (
    <figure className="relative bg-neutral-100 overflow-hidden rounded-md">
      <img
        src={src}
        alt={label ?? 'image'}
        // tailles augmentées : mobile h-72, tablette/md h-96, desktop/lg h-[520px]
        className="w-full h-72 md:h-96 lg:h-[520px] object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        loading="lazy"
      />
      {/* caption bas gauche */}
      <figcaption className="absolute left-3 bottom-3 text-xs text-white bg-black/40 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
          <path d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-medium">{label}</span>
      </figcaption>

      {/* hover overlay + shadow : intensité augmentée pour plus d'impact sur grandes images */}
      <style>{`
        figure:hover img { filter: brightness(1.12); box-shadow: 0 14px 40px rgba(0,0,0,0.18); transform: scale(1.02); }
      `}</style>
    </figure>
  )
}
