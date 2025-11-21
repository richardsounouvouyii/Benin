type HoverImageProps = {
  src: string
  alt: string
  className?: string
  text?: string
}

export default function HoverImage({ src, alt, className = '', text = 'Découvrez l\'histoire' }: HoverImageProps) {
  return (
    <div className={`relative group overflow-hidden ${className}`}> 
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-[#E2183A] transition-all duration-500 flex items-center justify-center px-4">
        <span
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold text-center"
          style={{ fontFamily: 'Mitr, sans-serif' }}
        >
          {text}
        </span>
      </div>
    </div>
  )
}
