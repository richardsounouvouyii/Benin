import  { useEffect } from 'react'
import DestinationGrid from '../components/DestinationGrid'
import toffaImg from '../assets/images/toffa.png'
import gbezoImg from '../assets/images/nonret.png'
import behanzinImg from '../assets/images/amaz.png'
import amazonImg from '../assets/images/amazon.png'
// Images supplémentaires pour les sections
import ouidahImg from '../assets/images/ouidah.png'
import nonretourImg from '../assets/images/nonretour.png'
import amImg from '../assets/images/am.png'
import ils from '../assets/images/ils.png'
import portoNovoImg from '../assets/images/porto-novo.png'
import maisonImg from '../assets/images/maison.png'
import benin from '../assets/images/benin.png'
import route from '../assets/images/route.png'
import GallerySection from '../components/GallerySection'

export default function Destinations() {
  useEffect(() => {
    const id = 'gf-permanent-marker'
    if (!document.getElementById(id)) {
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'
      document.head.appendChild(link)
    }
    // Charger la police Mitr (utilisée pour les descriptions)
    const mitrId = 'gf-mitr'
    if (!document.getElementById(mitrId)) {
      const link2 = document.createElement('link')
      link2.id = mitrId
      link2.rel = 'stylesheet'
      link2.href = 'https://fonts.googleapis.com/css2?family=Mitr:wght@300;400;500;600;700&display=swap'
      document.head.appendChild(link2)
    }
  }, [])

  const rois = [
    { id: 1, title: 'TOFFA 1er', location: 'Porto-Novo', src: toffaImg },
    { id: 2, title: 'Porte du non retour', location: 'Ouidah', src: gbezoImg },
    { id: 3, title: 'Amazon', location: 'Cotonou', src: behanzinImg },
  ]

  const amazon = { id: 'a', title: 'Amazon', location: 'Cotonou', src: amazonImg }

  // Jeux d'images pour les galeries
  const galerieOuidah = [
    { src: ouidahImg, label: 'Ouidah' },
    { src: ils, label: 'Ouidah' },
    { src: nonretourImg, label: 'Ouidah' },
  ]

  const galerieCotonou = [
    { src: benin, label: 'Cotonou' },
    { src: amImg, label: 'Cotonou' },
    { src: route, label: 'Cotonou' },
  ]

  const galeriePortoNovo = [
    { src: toffaImg, label: 'Porto-Novo' },
    { src: portoNovoImg, label: 'Porto-Novo' },
    { src: maisonImg, label: 'Porto-Novo' },
  ]

  return (
    <section className="px-40 py-12">
      {/* Injecte les styles spécifiques au titre */}
      <style>{`
        .pm-title {
          font-family: 'Permanent Marker', cursive;
          font-weight: 400;
          font-style: normal;
          font-size: 80px;
          line-height: 100%;
          letter-spacing: 0%;
          /* propriété expérimentale / pas universellement supportée : */
          leading-trim: none;
        }
        /* Ajustement responsive si nécessaire */
        @media (max-width: 768px) {
          .pm-title { font-size: 48px; }
        }
      `}</style>

      {/* Titre */}
      <h2 className="font-black tracking-wide pt-22 pm-title">
        LES BONS COINS
      </h2>

      <div className="mb-17">
        <p className="text-neutral-800/80  max-w-2xl">
          Plongez-vous dans une diversité captivante de cultures, d'histoires et de paysages
        </p>
      </div>

      {/* Grille principale (trois rois + carte Amazon) */}
      <DestinationGrid items={rois} featuredItem={amazon} />
      {/* Séparateur visuel */}
      <div className="my-14 h-px" />


      {/* Séparateur visuel */}
      <div className="" />

     

      {/* Galeries réutilisables (GallerySection appelle GalleryCard en interne) */}
      <GallerySection
        title="OUIDAH"
        description="Découvrez quelques vues emblématiques d'Ouidah."
        images={galerieOuidah}
      />

      <GallerySection
        title="COTONOU"
        description="Quelques images de la capitale économique."
        images={galerieCotonou}
      />

      <GallerySection
        title="PORTO–NOVO"
        description="Patrimoine et culture de la capitale."
        images={galeriePortoNovo}
      />

   
    
    </section>
  )
}