'use client';

import { useState } from 'react';
import { useChatContext } from '@/contexts/ChatContext';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const { initializeChat } = useChatContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-screen bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Solar panels" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                    ⚡ Líder en Energía Solar Puerto Rico
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  Energía Solar
                  <br />
                  <span className="text-green-400">Sin Límites</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-xl">
                  Baterías portátiles de última tecnología. 
                  <strong className="text-white"> Instalación gratuita</strong> y 
                  <strong className="text-green-400"> 7 años de garantía</strong>.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">0dB</div>
                  <div className="text-sm text-gray-300">Silencioso</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">$0</div>
                  <div className="text-sm text-gray-300">Mantenimiento</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-300">Energía</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">7</div>
                  <div className="text-sm text-gray-300">Años Garantía</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-green-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-300 transition-colors duration-200 shadow-xl">
                  CONSULTA GRATUITA
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-200">
                  VER PRODUCTOS
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:ml-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Cotización Inmediata
                  </h2>
                  <p className="text-gray-600">
                    Respuesta en menos de 2 horas
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre completo *"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-gray-900"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Teléfono *"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-gray-900"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-gray-900"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="location"
                      placeholder="Ciudad"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-gray-900"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="¿Cuál es tu consumo eléctrico mensual?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors text-gray-900 resize-none"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg"
                  >
                    OBTENER COTIZACIÓN
                  </button>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Respuesta garantizada
                      </span>
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        100% confidencial
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-green-400 text-black py-4 z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-2xl">📞</span>
              <div>
                <div className="font-bold text-lg">(787) XXX-XXXX</div>
                <div className="text-sm">Disponible 24/7 para emergencias</div>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm font-medium">
              <span>✓ Instalación GRATIS</span>
              <span>✓ Financiamiento 0%</span>
              <span>✓ Garantía 7 años</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;