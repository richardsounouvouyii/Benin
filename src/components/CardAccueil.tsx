import { Heart } from 'lucide-react'

export type CardAccueilProps = {
    imageSrc: string
    title: string
    description: string
}

export default function CardAccueil({ imageSrc, title, description }: CardAccueilProps) {
    return (
        <article className="group rounded-lg overflow-hidden shadow-lg relative">
            <div className="relative h-154 w-full bg-gray-100">
                <img src={imageSrc} alt={title} className="object-cover w-full h-full block" />

                {/* gradient overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* text overlay (kept visible under hover overlay) */}
                <div className="absolute left-3 right-0 bottom-12 p-4 z-10">
                    <h3
                        className="text-white leading-tight"
                        data-leading-trim="none"
                        style={{
                            fontFamily: 'Mitr, sans-serif',
                            fontWeight: 500,
                            fontStyle: 'normal',
                            fontSize: '26px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                        }}
                    >
                        {title}
                    </h3>

                    <p
                        className="text-white/90 mt-1"
                        data-leading-trim="none"
                        style={{
                            fontFamily: 'Mitr, sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: '20px',
                            lineHeight: '130%',
                            letterSpacing: '0px',
                        }}
                    >
                        {description}
                    </p>
                </div>

                {/* Hover overlay: slides up from bottom to cover the card on hover */}
                <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-[#C20026] z-20 flex flex-col justify-center items-center p-4">
                    <button className="bg-white border border-white/40 text-black px-5  py-2 rounded-md text-2xl font-bold cursor-pointer">
                        Découvrez l'histoire
                    </button>

                    {/* bottom row inside overlay */}
                    <div className="absolute left-8 bottom-12 text-white flex items-center gap-3">
                        <span className="text-2xl font-bold">Avis</span>
                        <span className="text-2xl">98</span>
                    </div>

                    <div className="absolute right-8 bottom-12 text-white flex items-center gap-2">
                        <Heart size={26} className="text-white mb-2" />
                        <span className="text-2xl">986</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
