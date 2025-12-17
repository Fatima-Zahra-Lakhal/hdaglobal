import React, { useState } from "react";
import emailjs from "emailjs-com";

import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export function ContactPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_8fd2g4s",
    "template_sq3ispr",
    {
      to_email: "hda.global81@gmail.com", // 
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    },
    "3m0kq8Wypp30jEceK"
  )
  .then(() => {
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  })
 .catch((error) => {
  console.error("Erreur envoi email:", error);
  setErrorMessage("Erreur lors de l'envoi du message. Veuillez réessayer.");
  // Masquer l'alerte après 5 secondes
  setTimeout(() => setErrorMessage(null), 5000);
});

};

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1f2937] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-white">Contactez-Nous</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à
            vos questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-[#1f2937]">
                Envoyez-nous un Message
              </h2>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  <p>
                    Merci ! Votre message a été envoyé avec
                    succès. Nous vous contacterons bientôt.
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
                    placeholder="+212 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
                  >
                    <option value="">
                      Sélectionnez un sujet
                    </option>
                    <option value="devis">
                      Demande de devis
                    </option>
                    <option value="info">
                      Demande d'information
                    </option>
                    <option value="projet">
                      Nouveau projet
                    </option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e40af]"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e40af] text-white px-6 py-3 rounded-lg hover:bg-[#1e3a8a] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-[#1f2937]">
                Informations de Contact
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#1e40af] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-1 text-[#1f2937]">
                      Adresse
                    </h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=11+rue+Ahmed+Sitou+Etage+2+Appt+3+BD+Mohamed+V+20000+Casablanca+Maroc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#1e40af] transition-colors"
                    >
                      11, rue Ahmed Sitou, Etage 2, Appt 3, BD
                      Mohamed V, 20000, Casablanca, Maroc
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-6 h-6 text-[#1e40af] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-1 text-[#1f2937]">
                      Téléphone
                    </h3>
                    <p className="text-gray-600">
                      +212 661 103 988
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Mail className="w-6 h-6 text-[#1e40af] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-1 text-[#1f2937]">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      hda.global81@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-6 h-6 text-[#1e40af] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-1 text-[#1f2937]">
                      Horaires
                    </h3>
                    <p className="text-gray-600">
                      Ouvert 24/24
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1e40af] bg-opacity-5 p-6 rounded-lg border border-[#1e40af] border-opacity-20">
                <h3 className="mb-3 text-[#1f2937]">
                  Besoin d'un Devis ?
                </h3>
                <p className="text-white text-sm mb-4">
                  Nous offrons des devis gratuits et détaillés
                  pour tous vos projets de construction.
                  N'hésitez pas à nous contacter pour discuter
                  de vos besoins.
                </p>
                <p className="text-[#1e40af]">
                  Réponse sous 24-48 heures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}