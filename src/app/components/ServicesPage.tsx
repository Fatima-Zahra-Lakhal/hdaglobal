import React from 'react';
import { Building2, HardHat, Paintbrush, Wrench, House, Warehouse } from 'lucide-react';
import workImage1 from  "../../assets/img1.png";
import workImage2 from "../../assets/img2.png";

export function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Construction TCE',
      description: 'Réalisation de projets de construction tous corps d\'état',
      details: [
        'Gros œuvre et structure',
        'Second œuvre (plomberie, électricité, climatisation)',
        'Finitions et revêtements',
        'Coordination de tous les corps de métier'
      ]
    },
    {
      icon: HardHat,
      title: 'Travaux de Génie Civil',
      description: 'Expertise en travaux de génie civil et infrastructure',
      details: [
        'Terrassement et fondations',
        'Travaux de voirie',
        'Réseaux divers (VRD)',
        'Ouvrages en béton armé'
      ]
    },
    {
      icon: House,
      title: 'Aménagement Intérieur',
      description: 'Conception et réalisation d\'espaces fonctionnels et esthétiques',
      details: [
        'Aménagement de bureaux',
        'Agencement commercial',
        'Rénovation d\'intérieurs',
        'Menuiserie et décoration'
      ]
    },
    {
      icon: Paintbrush,
      title: 'Travaux de Finition',
      description: 'Finitions de haute qualité pour sublimer vos projets',
      details: [
        'Peinture et revêtements muraux',
        'Carrelage et faïence',
        'Sols techniques et parquets',
        'Plafonds suspendus'
      ]
    },
    {
      icon: Warehouse,
      title: 'Bâtiments Industriels',
      description: 'Construction et aménagement de locaux industriels',
      details: [
        'Hangars et entrepôts',
        'Ateliers de production',
        'Plateformes logistiques',
        'Installations techniques'
      ]
    },
    {
      icon: Wrench,
      title: 'Services Techniques',
      description: 'Maintenance et services complémentaires',
      details: [
        'Maintenance préventive et curative',
        'Dépannages et réparations',
        'Modernisation d\'installations',
        'Audit et conseil technique'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1634586648651-f1fb9ec10d90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHJlbm92YXRpb258ZW58MXx8fHwxNzY1OTc3MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="mb-4 text-white">Nos Services</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos projets de construction
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1f2937]">Une Gamme Complète de Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              H.D.A GLOBAL met son expertise au service de vos projets, quelle que soit leur envergure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-10 h-10 text-[#1e40af] mb-4" />
                  <h3 className="mb-2 text-[#1f2937]">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <span className="text-[#1e40af] mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[#1f2937]">Notre Processus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir la réussite de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Analyse de vos besoins et définition du projet'
              },
              {
                step: '02',
                title: 'Planification',
                description: 'Étude technique et établissement du devis'
              },
              {
                step: '03',
                title: 'Réalisation',
                description: 'Exécution des travaux selon les normes'
              },
              {
                step: '04',
                title: 'Livraison',
                description: 'Contrôle qualité et remise du projet'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1e40af] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span>{item.step}</span>
                </div>
                <h3 className="mb-2 text-[#1f2937]">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e40af]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Besoin d'un Devis ?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous pour discuter de votre projet et obtenir une estimation gratuite
          </p>
          <button className="bg-white text-[#1e40af] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Demander un Devis Gratuit
          </button>
        </div>
      </section>

      {/* Team in Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#1f2937]">Notre Équipe en Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des professionnels qualifiés et équipés pour garantir la qualité et la sécurité sur tous nos chantiers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={workImage1}
                alt="Équipe HDA GLOBAL - Travaux en hauteur"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6 bg-gray-50">
                <h3 className="mb-2 text-[#1f2937]">Installation Électrique</h3>
                <p className="text-gray-600 text-sm">
                  Nos équipes interviennent avec professionnalisme sur tous types d'installations électriques
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={workImage2}
                alt="Équipe HDA GLOBAL - Installation sécurité incendie"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6 bg-gray-50">
                <h3 className="mb-2 text-[#1f2937]">Sécurité Incendie</h3>
                <p className="text-gray-600 text-sm">
                  Installation et maintenance des systèmes de sécurité incendie conformes aux normes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}