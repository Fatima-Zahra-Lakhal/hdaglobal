import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/img3.jpeg';
import '../../styles/Hero.css';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-[600px] overflow-hidden flex items-center justify-center">
      
      {/* Background animé */}
      <div
        className="hero-bg absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="mb-6 text-4xl font-bold">
          Construisons l'avenir ensemble
        </h1>

        <p className="text-xl mb-8 text-gray-100">
          Expertise en construction TCE, aménagement et services techniques au Maroc
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => onNavigate('services')}
            className="bg-[#1e40af] px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-[#1e3a8a]"
          >
            Nos Services <ArrowRight />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#1e40af] px-8 py-3 rounded-lg hover:bg-gray-100"
          >
            Nous Contacter
          </button>
        </div>
      </div>
    </section>
  );
}
