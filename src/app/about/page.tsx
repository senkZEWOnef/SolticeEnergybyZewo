'use client';

// import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/Chat/ChatWidget';
import AdminWidget from '@/components/AdminWidget';

const AboutPage = () => {

  const testimonials = [
    {
      name: "María González",
      location: "San Juan, PR",
      rating: 5,
      text: "Desde que instalé mi batería Soltice Energy, no he tenido que preocuparme por los apagones. Es silenciosa y muy fácil de usar. El equipo fue muy profesional durante toda la instalación.",
      product: "Batería 3600W"
    },
    {
      name: "Carlos Rodríguez",
      location: "Bayamón, PR", 
      rating: 5,
      text: "Excelente inversión. Mi negocio ya no se ve afectado por los cortes de luz. La batería de 6000W mantiene todo funcionando perfectamente. Muy recomendado.",
      product: "Batería 6000W"
    },
    {
      name: "Ana Martínez",
      location: "Caguas, PR",
      rating: 5,
      text: "El servicio al cliente es excepcional. Me ayudaron a elegir la batería perfecta para mi apartamento. Tres meses después y estoy muy satisfecha con mi compra.",
      product: "Batería 2500W"
    },
    {
      name: "José Rivera",
      location: "Ponce, PR",
      rating: 5,
      text: "Tecnología de vanguardia. Sin ruido, sin gasolina, sin problemas. La batería se carga rápido y dura mucho tiempo. Definitivamente la mejor decisión energética que he tomado.",
      product: "Batería 3600W"
    },
    {
      name: "Carmen Díaz",
      location: "Arecibo, PR",
      rating: 5,
      text: "Como abuela, necesitaba algo confiable para mantener mis medicamentos refrigerados. Esta batería me da la tranquilidad que necesito. Gracias Soltice Energy.",
      product: "Batería 2500W"
    },
    {
      name: "Roberto Torres",
      location: "Mayagüez, PR",
      rating: 5,
      text: "Para mi taller, era esencial tener energía continua. La batería de 6000W ha sido perfecta. Cero mantenimiento y máximo rendimiento. Excelente equipo.",
      product: "Batería 6000W"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        
        {/* Hero Section - Modern & Bright */}
        <section className="relative overflow-hidden py-20 lg:py-32 pt-24 lg:pt-32">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/perla.jpg" 
              alt="Puerto Rico landscape" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80"></div>
          </div>
          
          {/* Modern Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse-soft"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-400/10 backdrop-blur-sm border border-green-400/20 text-green-400 text-sm font-semibold tracking-wide">
                  💫 SOBRE NOSOTROS
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 mb-6 tracking-tight">
                Transformando Puerto Rico
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                Innovando el futuro energético con
                <span className="text-green-500 font-semibold"> soluciones solares inteligentes</span>
              </p>
            </div>
          </div>
        </section>

        {/* Founder Vision Section - Modern Card Style */}
        <section className="relative py-20 bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="group relative bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden border border-gray-200/50 p-8 lg:p-12">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Founder Avatar */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full text-4xl lg:text-5xl mb-6 shadow-lg">
                    👨‍💼
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                    Nuestra Visión en{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">Soltice</span>
                  </h2>
                </div>
                
                <div className="text-left space-y-6 lg:space-y-8">
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    En Soltice Energy, soñamos con un Puerto Rico donde cada hogar tenga acceso a{' '}
                    <span className="text-gray-900 font-semibold">
                      energía renovable, confiable y libre de combustibles fósiles
                    </span>. Queremos empoderar a las familias con soluciones que les brinden{' '}
                    <span className="text-green-600 font-semibold">
                      tranquilidad, seguridad y autonomía energética
                    </span> en cualquier situación.
                  </p>
                  
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    Nuestra visión es{' '}
                    <span className="text-gray-900 font-semibold">
                      liderar la transformación hacia un futuro más limpio y resiliente
                    </span>, reduciendo la dependencia del sistema eléctrico tradicional y aportando a una mejor calidad de vida en toda la isla.
                  </p>
                  
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    A través de innovación constante y un compromiso genuino con nuestra comunidad, buscamos que cada producto de Soltice Energy represente{' '}
                    <span className="text-green-600 font-semibold">
                      confianza, durabilidad y accesibilidad
                    </span>. No se trata solo de sistemas solares, sino de{' '}
                    <span className="text-gray-900 font-semibold">
                      ofrecer soluciones reales ante un problema urgente en el país
                    </span>.
                  </p>
                  
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    Imaginamos un futuro donde los apagones ya no sean una amenaza, sino una oportunidad para demostrar que{' '}
                    <span className="text-green-600 font-semibold">
                      la energía puede ser limpia, y al alcance de todos
                    </span>. En Soltice Energy, estamos construyendo ese futuro,{' '}
                    <span className="text-gray-900 font-semibold">
                      un hogar a la vez
                    </span>.
                  </p>
                </div>
                
                <div className="text-center mt-8 pt-8 border-t border-gray-200">
                  <p className="text-xl font-bold text-green-600 mb-2">
                    [Nombre del Fundador]
                  </p>
                  <p className="text-gray-500 font-medium">
                    Fundador y CEO, Soltice Energy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Mission Section - Two Column Modern Layout */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/pr.jpg" 
              alt="Puerto Rico background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-white/85"></div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-400/10 backdrop-blur-sm border border-blue-400/20 text-blue-600 text-sm font-semibold tracking-wide">
                      🇵🇷 COMPROMETIDOS CON PR
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                    Comprometidos con{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Puerto Rico</span>
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    En Soltice Energy entendemos los desafíos únicos que enfrenta Puerto Rico con su infraestructura energética. Por eso, estamos{' '}
                    <span className="text-gray-900 font-semibold">
                      firmes en nuestro compromiso de ofrecer soluciones de energía renovable
                    </span> que realmente marquen la diferencia en la vida de las familias puertorriqueñas.
                  </p>
                  
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    Creemos firmemente que{' '}
                    <span className="text-green-600 font-bold">la energía renovable es la clave para la recuperación y prosperidad</span> de Puerto Rico. No es solo una alternativa, es{' '}
                    <span className="text-gray-900 font-semibold">
                      la solución que puede liberar a la isla de la dependencia energética
                    </span> y brindar estabilidad ante cualquier adversidad.
                  </p>
                  
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    Cada sistema que instalamos es un paso hacia{' '}
                    <span className="text-green-600 font-bold">un Puerto Rico más resiliente, sostenible y próspero</span>. Estamos aquí para acompañar a nuestra isla en esta transformación energética, porque{' '}
                    <span className="text-gray-900 font-semibold">
                      el futuro de Puerto Rico es renovable
                    </span>.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-black text-green-500 mb-2">500+</div>
                    <div className="text-sm text-gray-600 font-semibold tracking-wide">FAMILIAS EMPODERADAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-black text-green-500 mb-2">0%</div>
                    <div className="text-sm text-gray-600 font-semibold tracking-wide">COMBUSTIBLES FÓSILES</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-black text-green-500 mb-2">100%</div>
                    <div className="text-sm text-gray-600 font-semibold tracking-wide">ENERGÍA LIMPIA</div>
                  </div>
                </div>
              </div>
              
              {/* Right Contact Form */}
              <div className="relative">
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                      ¡Conecta con Nosotros!
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Recibe información personalizada sobre energía solar
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Nombre completo *"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors text-gray-900 font-medium"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Número de teléfono *"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors text-gray-900 font-medium"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25"
                    >
                      📞 Solicitar Información
                    </button>
                  </form>

                  {/* Social Media Widgets */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-600 font-semibold mb-4">
                      Síguenos en nuestras redes sociales
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="https://facebook.com/solticeenergy" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      
                      <a 
                        href="https://instagram.com/solticeenergy" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      
                      <a 
                        href="https://wa.me/1787XXXXXXX" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews Section - Modern Grid */}
        <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 text-yellow-600 text-sm font-semibold tracking-wide">
                  ⭐ TESTIMONIOS
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 mb-6 tracking-tight">
                Lo que dicen nuestros{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">Clientes</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Más de{' '}
                <span className="text-green-600 font-semibold">
                  500 familias confían en Soltice Energy
                </span>{' '}
                para su independencia energética
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="group relative backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 p-6 lg:p-8"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="/card.jpg" 
                      alt="Card background" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95"></div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content (relative to appear above background) */}
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">⭐</span>
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    <blockquote className="mb-6">
                      <p className="text-gray-900 leading-relaxed font-semibold italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </blockquote>
                    
                    {/* Customer Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-black text-gray-900 text-lg mb-1">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-700 text-sm font-bold">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="bg-green-500/20 border border-green-500/40 px-3 py-1 rounded-full">
                        <span className="text-green-700 text-xs font-bold">
                          {testimonial.product}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto">
              <div className="group relative bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden border border-gray-200/50 p-8 lg:p-12 text-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                  ¿Listo para unirte a nuestra familia de clientes satisfechos?
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                  Descubre cómo{' '}
                  <span className="text-gray-900 font-semibold">
                    Soltice Energy puede transformar tu experiencia energética
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contacto"
                    className="inline-flex items-center bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25"
                  >
                    <span className="mr-2">📞</span>
                    Solicitar Consulta
                  </a>
                  <a 
                    href="/productos"
                    className="inline-flex items-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2">⚡</span>
                    Ver Productos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ChatWidget />
      <AdminWidget />
    </>
  );
};

export default AboutPage;