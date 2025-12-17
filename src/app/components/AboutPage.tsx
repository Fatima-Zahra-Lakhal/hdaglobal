import React from 'react';
import { Target, Award, TrendingUp, Heart } from 'lucide-react';
import teamImage from '../../assets/img6.jpeg';
import Image from '../../assets/img8.jpeg';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'HDA GLOBAL accompagne ses clients dans la concrétisation de leurs projets de construction avec excellence et professionnalisme.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, en respectant les normes les plus strictes de qualité et de sécurité.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Nous adoptons les techniques et technologies les plus récentes pour garantir des résultats optimaux.'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Notre engagement envers nos clients se traduit par des relations durables basées sur la confiance et la transparence.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Image})`
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="mb-4 text-white">À Propos de Nous</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Une entreprise marocaine de construction au service de vos projets
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-[#1f2937]">H.D.A GLOBAL SARL AU</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  H.D.A GLOBAL SARL AU est une entreprise marocaine spécialisée dans la construction TCE 
                  (Tous Corps d'État), l'aménagement et les divers services techniques.
                </p>
                <p>
                  Forte d'une expertise reconnue dans le secteur du BTP, notre entreprise s'engage à 
                  fournir des services de qualité supérieure en respectant les délais et les budgets convenus.
                </p>
                <p>
                  HDA GLOBAL accompagne ses clients tout au long de leurs projets, de la conception à la 
                  réalisation, en passant par le suivi et la maintenance.
                </p>
                <p>
                  Notre approche professionnelle et notre souci du détail nous permettent de nous démarquer 
                  et de créer des relations durables avec nos clients.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={teamImage}
                alt="Équipe HDA GLOBAL au travail"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1f2937]">Nos Valeurs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des principes fondamentaux qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-[#1e40af] flex-shrink-0" />
                    <div>
                      <h3 className="mb-2 text-[#1f2937]">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-[#1f2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-6 text-white">Notre Expertise</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-12">
              Nous intervenons sur tous types de projets de construction et d'aménagement, 
              qu'il s'agisse de bâtiments neufs, de rénovations, ou de travaux techniques spécialisés.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-[#3b82f6] mb-2">Construction TCE</div>
                <p className="text-gray-400 text-sm">Gros œuvre, second œuvre, finitions</p>
              </div>
              <div>
                <div className="text-[#3b82f6] mb-2">Aménagement</div>
                <p className="text-gray-400 text-sm">Espaces intérieurs et extérieurs</p>
              </div>
              <div>
                <div className="text-[#3b82f6] mb-2">Services Divers</div>
                <p className="text-gray-400 text-sm">Maintenance, rénovation, services techniques</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}