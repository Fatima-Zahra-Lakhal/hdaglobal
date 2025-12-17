import React, { useState, useEffect } from 'react';
import { Hero } from './Hero';
import { Building2, Users, ShieldCheck, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';

// Images
import workImage1 from "../../assets/img1.png";
import workImage2 from "../../assets/img2.png";
import workImage4 from "../../assets/img4.jpeg";
import workImage5 from "../../assets/img5.jpeg";
import workImage6 from "../../assets/img6.jpeg";
import workImage7 from "../../assets/img7.jpeg";
import workImage8 from "../../assets/img8.jpeg";
import workImage9 from "../../assets/img3.jpeg";
import workImage10 from "../../assets/img10.jpeg";
import workImage11 from "../../assets/img11.jpeg";
import workImage12 from "../../assets/img12.jpeg";
import workImage13 from "../../assets/img13.jpeg";
import workImage14 from "../../assets/img14.jpeg";
import workImage15 from "../../assets/img15.jpeg";
import workImage16 from "../../assets/img16.jpeg";
import workImage17 from "../../assets/img17.jpeg";
import workImage18 from "../../assets/img18.jpeg";
import workImage19 from "../../assets/img19.jpeg";
import workImage20 from "../../assets/img20.jpeg";
import workImage21 from "../../assets/img21.jpeg";
import workImage22 from "../../assets/img22.jpeg";
import workImage23 from "../../assets/img23.jpeg";
import workImage24 from "../../assets/img24.jpeg";
import workImage26 from "../../assets/img26.jpeg";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    { icon: Building2, title: 'Expertise TCE', description: "Construction tous corps d'état avec des standards de qualité élevés" },
    { icon: Users, title: 'Équipe Qualifiée', description: 'Professionnels expérimentés et certifiés pour tous vos projets' },
    { icon: ShieldCheck, title: 'Fiabilité', description: 'Respect des délais et engagement qualité sur chaque chantier' },
    { icon: Lightbulb, title: 'Innovation', description: 'Solutions modernes et techniques de construction innovantes' },
  ];

  const galleryImages = [
    workImage1, workImage2, workImage4, workImage5, workImage6,
    workImage7, workImage8, workImage9, workImage10, workImage11,
    workImage12, workImage13, workImage14, workImage15,workImage16,
    workImage17,workImage18,workImage19,workImage20,workImage21,workImage22,
    workImage23,workImage24,workImage26
  ];

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(12);

  // ✅ Ajuster imagesPerPage selon la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setImagesPerPage(1);       // Mobile
      else if (window.innerWidth < 1024) setImagesPerPage(4); // Tablette
      else setImagesPerPage(12);                               // Desktop
    };

    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const handleNextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const startIndex = currentPage * imagesPerPage;
  const currentImages = galleryImages.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div>
      <Hero onNavigate={onNavigate} />

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">
              Pourquoi Choisir H.D.A GLOBAL ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une entreprise marocaine de référence dans le secteur de la construction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center">
                  <Icon className="w-10 h-10 text-[#1e40af] mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1e40af] text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Prêt à Démarrer Votre Projet ?
        </h2>
        <p className="text-blue-100 mb-8">
          HDA GLOBAL accompagne ses clients dans la réalisation de leurs projets
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="bg-white text-[#1e40af] px-8 py-3 rounded-lg font-medium hover:bg-gray-100"
        >
          Demander un Devis
        </button>
      </section>

      {/* Gallery avec Pagination */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1f2937] mb-4">
              Nos Réalisations
            </h2>
            <p className="text-gray-600">
              Découvrez notre équipe en action sur différents chantiers
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {currentImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src={image}
                    alt={`Réalisation ${startIndex + index + 1}`}
                    className="w-full h-[200px] object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>
              ))}
            </div>

            {/* Flèches */}
            <button
              onClick={handlePrevPage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 hover:bg-opacity-80 shadow-md"
            >
              <ArrowLeft className="w-6 h-6 text-[#1e40af]" />
            </button>
            <button
              onClick={handleNextPage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 hover:bg-opacity-80 shadow-md"
            >
              <ArrowRight className="w-6 h-6 text-[#1e40af]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
