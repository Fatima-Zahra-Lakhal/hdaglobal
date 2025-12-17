import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="mb-4">H.D.A GLOBAL SARL AU</h3>
            <p className="text-gray-300 text-sm">
              Votre partenaire de confiance en construction TCE, aménagement et services techniques au Maroc.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('accueil')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('apropos')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=11+rue+Ahmed+Sitou+Etage+2+Appt+3+BD+Mohamed+V+20000+Casablanca+Maroc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  11, rue Ahmed Sitou, Etage 2, Appt 3, BD Mohamed V, 20000, Casablanca, Maroc
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#3b82f6] flex-shrink-0" />
                <span className="text-gray-300">+212 661 103 988</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#3b82f6] flex-shrink-0" />
                <span className="text-gray-300">hda.global81@gmail.com</span>
              </div>
            </div>
            
            {/* Social Media */}
          <div className="flex gap-4 mt-6">
             <a href="mailto:hda.global81@gmail.com" className="text-gray-300 hover:text-white transition-colors">
    <Mail className="w-6 h-6" />
  </a><a href="https://www.instagram.com/h.d.a_global/" className="text-gray-300 hover:text-white transition-colors">
    <Instagram className="w-6 h-6" />
  </a>
  <a href="https://www.facebook.com/profile.php?id=61585383477478" className="text-gray-300 hover:text-white transition-colors">
    <Facebook className="w-6 h-6" />
  </a>
   <a href="https://linkedin.com/company/h-d-a-global-sarl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
    <Linkedin className="w-6 h-6" />
</a>
</div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} H.D.A GLOBAL SARL AU. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}