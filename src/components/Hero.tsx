'use client';

import { useState } from 'react';
// import { useChatContext } from '@/contexts/ChatContext';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  // const { initializeChat } = useChatContext();

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
          src="/heroNew.jpg" 
          alt="Solar panels" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 flex flex-col pt-24 pb-0 px-4 sm:px-6 lg:px-0">
        <div className="container mx-auto lg:px-12 w-full py-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-start lg:items-center w-full">
            
            {/* Hero Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <img 
                  src="/heropic.png" 
                  alt="Soltice Energy" 
                  className="h-48 sm:h-64 md:h-80 lg:h-[320px] w-auto max-w-full"
                  style={{
                    filter: 'sepia(100%) hue-rotate(70deg) saturate(300%) brightness(1.2)'
                  }}
                />
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-xl font-normal tracking-wide -mt-4">
                  Bienvenido al futuro de la 
                  <span className="text-green-400 font-semibold"> energía renovable</span> en Puerto Rico. 
                  <span className="text-white font-medium">Placas solares, baterías portátiles</span> y 
                  <span className="text-green-400 font-semibold">sistemas completos</span> para tu hogar. 
                  <span className="text-white font-medium">Instalación gratuita</span> y 
                  <span className="text-green-400 font-semibold">7 años de garantía</span>.
                </p>
                
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <button className="bg-green-400 text-black px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-green-300 transition-colors duration-200 shadow-xl min-h-[48px] flex items-center justify-center">
                  CONSULTA GRATUITA
                </button>
                <a href="/productos" className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-200 text-center inline-flex items-center justify-center min-h-[48px]">
                  VER PRODUCTOS
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:ml-auto w-full mt-6 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 max-w-md w-full mx-auto lg:mx-0">
                <div className="text-center mb-3 sm:mb-6">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Cotización Inmediata
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Respuesta en menos de 2 horas
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Nombre completo *"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-gray-900 min-h-[44px] text-base"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="Teléfono *"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-gray-900 min-h-[44px] text-base"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="Email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-gray-900 min-h-[44px] text-base"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="location"
                      placeholder="Ciudad"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-gray-900 min-h-[44px]"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="¿Cuál es tu consumo eléctrico mensual?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-400 focus:outline-none transition-colors text-gray-900 resize-none min-h-[44px]"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg min-h-[48px] flex items-center justify-center"
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
      <div className="bg-green-400 text-black py-4 z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📞</span>
              <div>
                <div className="font-bold text-lg">(787) 520-7505</div>
                <div className="text-sm">Disponible 24/7 para emergencias</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm font-medium">
              <span>✓ Instalación GRATIS</span>
              <span>✓ Financiamiento 0%</span>
              <span>✓ Garantía 7 años</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/soltice.energy/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-green-400 hover:bg-gray-800 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.facebook.com/p/Soltice-Energy-61561365922592/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-green-400 hover:bg-gray-800 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="https://wa.me/17875207505" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-green-400 hover:bg-green-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;