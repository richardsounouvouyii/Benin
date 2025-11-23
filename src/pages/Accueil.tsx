import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import heroVideo from '../assets/videos/videos.mp4'
import CardAccueil from '../components/CardAccueil'
import FeatureTextCard from '../components/FeatureTextCard'
import HoverImage from '../components/HoverImage'
import porto from '../assets/images/porto-novo.png'
import ouidah from '../assets/images/ouidah.png'
import pendjari from '../assets/images/pendjari.png'
import maison from '../assets/images/maison.png'
import danse from '../assets/images/danse.png'
//import nonretour from '../assets/images/nonretour.png'
import lac from '../assets/images/lac.png'
import benin from '../assets/images/benin.png'
import StatsStrip from '../components/StatsStrip'
import EventsSection from '../components/EventsSection'
import TestimonialsSection from '../components/TestimonialsSection'

// import maison from '../assets/images/maison.png'
// import danse from '../assets/images/danse.png'
// import nosdanseurs from '../assets/images/nosdanseurs.png'

export default function Home() {
  return (
    <>    <section
      aria-label="Hero"
      style={{ height: 'calc(100vh - 5rem)' }}
      className="relative w-full bg-cover bg-center bg-no-repeat"
    >
      {/* background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Vidéo de présentation"
      />

      {/* overlay for better contrast */}
      <div className="absolute inset-0 bg-black/45" />

      {/* centered content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-6 max-w-3xl">
          <h1 className="hero-title text-white drop-shadow-md">Bénin Aventure</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 hero-subtitle">Là où chaque voyage devient une découverte inoubliable.</p>

          <div className="mt-8">
            <Link
              to="/destinations"
              className="inline-block px-6 py-3 bg-[#C20026] text-white font-semibold  shadow-md hover:bg-white hover:text-[#C20026] transition-colors duration-300"
            >
              Explorez maintenant
            </Link>
          </div>
        </div>
      </div>
    </section>
      <div className="flex flex-col p-6 md:p-32">
        <div className="text-3xl font-bold text-[#E2183A] mb-4">DESTINATIONS POPULAIRES</div>
        <p className="section-text mt-2 mb-6">
          Explorez les joyaux du Bénin avec nos destinations populaires. De la capitale culturelle de Porto-Novo aux rives historiques de Ouidah, plongez-vous dans une diversité captivante de cultures, d'histoires et de paysages. Faites-le savoir au monde entier et laissez-vous captiver par l'exceptionnalisme du Bénin.
        </p>

        {/* Cards grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <CardAccueil
              imageSrc={ouidah}
              title="Porto-Novo"
              description="La capitale culturelle, riche en musées et traditions."
            />

            <CardAccueil
              imageSrc={pendjari}
              title="Ouidah"
              description="Ville historique connue pour ses vestiges et son patrimoine."
            />

            <CardAccueil
              imageSrc={porto}
              title="Parc du Pendjari"
              description="Réserve naturelle offrant safaris et observation d'animaux."
            />

            {/* <CardAccueil
            imageSrc={maison}
            title="Maisons traditionnelles"
            description="Architecture et artisanat local à découvrir." 
          />

          <CardAccueil
            imageSrc={danse}
            title="Danses" 
            description="Spectacles culturels et danses traditionnelles vibrantes." 
          />

          <CardAccueil
            imageSrc={nosdanseurs}
            title="Festivals"
            description="Événements annuels célébrant la culture béninoise." 
          /> */}
          </div>

          {/* CTA below the grid, right-aligned (not overlapping cards) */}
          <div className="mt-9 flex justify-end">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-black hover:underline"
              data-leading-trim="none"
              style={{
                fontFamily: 'Mitr, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0px',
              }}
            >
              Voir toutes les destinations
              <ArrowRight size={25} className='text-[#E2183A]' />
            </Link>
          </div>
        </div>
        <div>
          <h2
            className='text-[#E2183A] pt-42'
            data-leading-trim="none"
            style={{
              fontFamily: 'Mitr, sans-serif',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '36px',
              lineHeight: '100%',
              letterSpacing: '0px',
              textTransform: 'uppercase'
            }}
          >
            Pourquoi choisir Bénin Aventure ?
          </h2>
        </div>
        <div className="section-text mt-6 mb-12">
          <p
            data-leading-trim="none"
            style={{
              fontFamily: 'Mitr, sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: '20px',
              lineHeight: '140%',
              letterSpacing: '0px'
            }}
          >
            nous nous engageons à vous offrir une expérience touristique exceptionnelle et mémorable. Voici pourquoi nous sommes le choix idéal pour explorer le Bénin :
          </p>
        </div>
        {/* Grille maquette supplémentaire */}
        <div className="mt-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Colonne 1 */}
            <div className="flex flex-col gap-6">
              <HoverImage src={lac} alt="Village Lacustre" className="h-90" text="Découvrez l'histoire" />
              <FeatureTextCard
                title="Expérience Locale Authentique"
                description="Plongez-vous dans la culture béninoise avec des guides locaux passionnés et des itinéraires authentiques."
                variant="green"
              />
              <HoverImage src={danse} alt="Danse Traditionnelle" className="h-100" text="Découvrez l'histoire" />
            </div>
            {/* Colonne 2 */}
            <div className="flex flex-col gap-6">
              <HoverImage src={pendjari} alt="Safari Pendjari" className="h-102" text="Découvrez l'histoire" />
              <HoverImage src={maison} alt="Route historique" className="h-72" text="Découvrez l'histoire" />
            </div>
            {/* Colonne 3 */}
            <div className="flex flex-col gap-6">
              <HoverImage src={benin} alt="Art mural" className="h-152" text="Découvrez l'histoire" />
              <FeatureTextCard
                title="Réservations Faciles et Sécurisées"
                description="Profitez de notre système de réservation intuitif et sécurisé pour planifier votre séjour en toute tranquillité."
                variant="pink"
              />
            </div>
          </div>
        </div>
        <div className="pt-20">
          <StatsStrip />
        </div>

      </div>
      <div className="pt-42 mt-33 bg-[#E2183A]" role="region" aria-label="Événements à venir">
        <EventsSection />
      </div>
      <div className="md:p-32 bg-white text-[#E2183A]">
        <TestimonialsSection />
      </div>
   
    </>
  )
}
