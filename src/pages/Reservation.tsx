import React, { useState, useEffect } from 'react'
import soleilImg from '../assets/images/soleil.png'
import montagneImg from '../assets/images/afaire.png'
import toffaImg from '../assets/images/un.png' // image promo / piscine
import nonretImg from '../assets/images/mi.png' // miniature / slide supplémentaire
import imagImg from '../assets/images/imag.png'
// HebergementCard est utilisé au sein du carrousel
// import direct non nécessaire ici
import HebergementCard from '../components/HebergementCard'
import type { HebergementFeature } from '../components/HebergementCard'


export default function Reservation() {
  // injecte la police Mitr si nécessaire
  useEffect(() => {
    const id = 'gf-mitr'
    if (!document.getElementById(id)) {
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Mitr:wght@300;500;700&display=swap'
      document.head.appendChild(link)
    }
  }, [])

  // état du formulaire
  const [jours, setJours] = useState('')
  const [date, setDate] = useState('')
  const [personnes, setPersonnes] = useState(1)
  const [hebergement, setHebergement] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: envoyer au backend
    alert(`Réservation: ${jours} jours, ${date}, ${personnes} personnes, hébergement: ${hebergement}`)
  }

  // assignation des images importées
  const images = {
    sun: soleilImg,
    mountains: montagneImg,

  }

  // --- carousel local (3 slides)
  const slides = [
    {
      id: 0,
      img: toffaImg,
      title1: 'MILLENIUM POPO BEACH HOTEL',
      title2: 'GRAND-POPO',
      subtitle: 'Explorez les joyaux du Bénin avec nos destinations populaires.'
    },
    {
      id: 1,
      img: montagneImg,
      title1: 'DÉCOUVREZ LES PLAGES',
      title2: 'ET LES PAYSAGES',
      subtitle: 'Séjours, excursions et expériences locales.'
    },
    {
      id: 2,
      img: nonretImg,
      title1: 'EXPLOREZ OUIDAH',
      title2: 'PATRIMOINE & HÔPITAUX',
      subtitle: 'Balades culturelles et circuits guidés.'
    },
  ]

  const [slideIndex, setSlideIndex] = useState(0)

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex(s => (s + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const goTo = (i: number) => setSlideIndex(i)
  const next = () => setSlideIndex(s => (s + 1) % slides.length)
  const prev = () => setSlideIndex(s => (s - 1 + slides.length) % slides.length)

  return (
    <>
      {/* styles locaux pour labels du formulaire */}
      <style>{`
        .form-label {
          font-family: 'Mitr', sans-serif;
          font-weight: 300;
          font-style: normal; /* "Light" => font-weight:300 */
          font-size: 16px;
          line-height: 18px;
          letter-spacing: -0.1px;
          /* propriété expérimental : leading-trim */
          leading-trim: none;
        }
      `}</style>

      {/* Bandeau héro */}
      <section
        className="relative w-full h-120 overflow-hidden"
        style={{
          background:
            'linear-gradient(90deg, #C20026 0%, #E2183A 60%, #FF566F 100%)'
        }}
      >
        <div className="relative  px-6 md:px-12 pt-24 pb-34 md:pt-28 md:pb-38">
          
          {/* Montagnes de fond */}
          <img
            src={images.mountains}
            alt="Montagnes"
            className="absolute inset-x-0 md:top-1 w-full opacity-70 pointer-events-none"
            loading="lazy"
          />
        </div>
      </section>

      {/* Contenu de page : formulaire remonté sur le hero */}
      <section className="max-w-7xl mx-auto px-8 md:px-12">
        {/* wrapper qui remonte le formulaire sur l'image du haut */}
        <div className="relative transform -translate-y-18 md:-translate-y-6 z-20">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-md shadow-xl p-4 md:p-6 lg:p-8"
            aria-label="Formulaire de réservation"
          >
            {/* Ligne principale : champs + bouton */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Champ: Nombre jours */}
              <div className="flex-1">
                <label className="block text-neutral-600 mb-2 form-label">Nombre jours</label>
                <select
                  value={jours}
                  onChange={e => setJours(e.target.value)}
                  className="w-full h-12 border border-neutral-200 rounded px-3 text-sm focus:outline-none"
                  required
                >
                  <option value="">Entrer le nombre de jours</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="7">7</option>
                </select>
              </div>

              {/* Champ: Date */}
              <div className="flex-1">
                <label className="block text-neutral-600 mb-2 form-label">Date de votre aventure</label>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full h-12 border border-neutral-200 rounded px-3 text-sm focus:outline-none"
                  required
                />
              </div>

              {/* Champ: Nombre de personne */}
              <div className="w-60">
                <label className="block text-neutral-600 mb-2 form-label">Nombre de personne</label>
                <input
                  type="number"
                  min={1}
                  value={personnes}
                  onChange={e => setPersonnes(Number(e.target.value))}
                  className="w-full h-12 border border-neutral-200 rounded px-3 text-sm focus:outline-none"
                  required
                />
              </div>

              {/* Bouton Réserver aligné à droite */}
              <div className="md:ml-4">
                <label className="block text-sm text-transparent mb-2">action</label>
                <button
                  type="submit"
                  className="h-12 px-6 bg-[#E2183A] text-white rounded-md shadow-md hover:opacity-95 transition"
                >
                  Réserver
                </button>
              </div>
            </div>

            {/* Ligne option hébergement */}
            <div className="mt-4 flex items-center gap-3">
              <input
                id="heb"
                type="checkbox"
                checked={hebergement}
                onChange={e => setHebergement(e.target.checked)}
                className="h-4 w-4 text-[#E2183A] border-neutral-300 rounded"
              />
              <label htmlFor="heb" className="text-sm text-neutral-700">Réserver une hébergement</label>
            </div>
          </form>
        </div>
        
      </section>

      {/* Section Itinéraire / carte */}
      <section className="max-w-7xl mx-auto px-8 md:px-12 mb-12">
        <h3 className="text-lg font-semibold mb-4">Itinéraire recommandé</h3>
        <div className="rounded-md overflow-hidden shadow">
          {/* embed simple sans API : adapte la query aux villes souhaitées */}
          <iframe
            title="Itinéraire Cotonou → Ouidah"
            src="https://maps.google.com/maps?q=Cotonou%20Benin%20to%20Ouidah%20Benin&t=&z=10&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 md:h-80 border-0"
            loading="lazy"
          />
        </div>
      </section>
      
      {/* Carousel promo (miniatures à gauche + grande image à droite) */}
      <section className="max-w-7xl mx-auto px-8 md:px-12 mb-20">
        <div className="flex gap-6 items-stretch">
          {/* colonne miniatures */}
          <div className="hidden md:flex flex-col w-28 lg:w-36 gap-4">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goTo(idx)}
                className={`relative rounded-md overflow-hidden border ${idx === slideIndex ? 'border-[#E2183A]' : 'border-transparent'} focus:outline-none`}
                aria-label={`Top ${idx + 1}`}
              >
                <img src={s.img} alt={`Top ${idx + 1}`} className="w-full h-40 object-cover" />
                <span className="absolute left-2 top-2 text-white text-xs bg-black/40 px-2 py-1 rounded">TOP {idx + 1}</span>
                {idx === slideIndex && <span className="absolute inset-0 ring-2 ring-[#E2183A]/40 pointer-events-none" />}
              </button>
            ))}
          </div>

          {/* grande slide */}
          <div className="flex-1 relative rounded-md overflow-hidden">
            <div
              className="w-full h-56 md:h-[360px] lg:h-[420px] bg-center bg-cover transition-all duration-500"
              style={{ backgroundImage: `url(${slides[slideIndex].img})` }}
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* contenu */}
            <div className="absolute inset-0 flex items-center">
              <div className="text-white pl-6 md:pl-12 max-w-3xl">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ fontFamily: 'Mitr, sans-serif' }}>
                  {slides[slideIndex].title1}
                  <br />
                  <span className="block text-xl md:text-3xl font-bold">{slides[slideIndex].title2}</span>
                </h2>
                <p className="mt-3 text-sm md:text-base">{slides[slideIndex].subtitle}</p>
                <div className="mt-6">
                  <button className="px-6 py-3 bg-[#E2183A] text-white rounded-md shadow hover:opacity-95 transition">Réserver</button>
                </div>
              </div>
            </div>

            {/* contrôles flèches */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 md:block hidden"
              aria-label="Précédent"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 md:block hidden"
              aria-label="Suivant"
            >
              ›
            </button>

            {/* indicateurs (dots) */}
            <div className="absolute right-6 bottom-6 z-10 flex gap-3 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-3 h-3 rounded-full ${i === slideIndex ? 'bg-white' : 'bg-white/40'}`}
                  aria-label={`Aller au slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nos tops hébergement de la localité */}
      <section className="max-w-7xl mx-auto px-8 md:px-12 mb-24">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6" style={{ fontFamily: 'Mitr, sans-serif' }}>
          Nos tops hébergement de la localité
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Chambre simple standard',
              features: [
                { type: 'size', text: 'Taille de la chambre : 16 m²/172 ft²' },
                { type: 'shower', text: 'Douche' },
                { type: 'bed', text: '1 lit simple' },
              ] as HebergementFeature[],
            },
            {
              title: 'Chambre simple standard',
              features: [
                { type: 'size', text: 'Taille de la chambre : 16 m²/172 ft²' },
                { type: 'shower', text: 'Douche' },
                { type: 'bed', text: '1 lit simple' },
              ] as HebergementFeature[],
            },
            {
              title: 'Chambre simple standard',
              features: [
                { type: 'size', text: 'Taille de la chambre : 16 m²/172 ft²' },
                { type: 'shower', text: 'Douche' },
                { type: 'bed', text: '1 lit simple' },
              ] as HebergementFeature[],
            },
            
          ].map((card, idx) => (
            <HebergementCard
              key={idx}
              images={[imagImg, imagImg, imagImg]}
              title={card.title}
              features={card.features}
            />
          ))}
        </div>
      </section>
    </>
  )
}
