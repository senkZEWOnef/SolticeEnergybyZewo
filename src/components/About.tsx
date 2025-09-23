'use client';

import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('sobre-nosotros');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="sobre-nosotros" 
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-glow-primary opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-glow-accent opacity-15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-glow-neon opacity-10 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          {/* Section Header */}
          <div 
            className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
            style={{
              transition: 'all 0.8s ease-out'
            }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-neon rounded-full"></div>
              <span className="text-dark-600 text-sm font-bold tracking-widest uppercase">
                Sobre Nosotros
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-neon to-primary-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-heading font-black text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
                <span className="text-dark-700">Liderando la</span>
                <br />
                <span className="text-gradient-neon relative">
                  Revolución Energética
                  <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-neon/30 to-primary-400/30 rounded-full"></div>
                </span>
              </h2>
              
              <p className="text-xl text-dark-500 max-w-3xl mx-auto leading-relaxed font-medium">
                Transformamos la manera en que las familias acceden a energía limpia, confiable y sostenible
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
              
          {/* Mission Statement */}
          <div 
            className={`card-modern group ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
            style={{
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            <div className="p-8 h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neon to-primary-400 rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-neon transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">⚡</span>
                </div>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-dark-800 mb-4 group-hover:text-dark-900 transition-colors">
                Nuestra Misión
              </h3>
              
              <p className="text-dark-600 leading-relaxed font-medium">
                Soltice Energy impulsa soluciones de energía limpias, silenciosas y confiables. 
                Nuestra misión es ofrecer verdadera independencia energética a familias y 
                comunidades que enfrentan apagones frecuentes.
              </p>
            </div>
          </div>

          {/* Innovation Commitment */}
          <div 
            className={`card-modern group ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
            style={{
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            <div className="p-8 h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-glow-accent group-hover:shadow-glow-accent transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-dark-800 mb-4 group-hover:text-dark-900 transition-colors">
                Innovación Constante
              </h3>
              
              <p className="text-dark-600 leading-relaxed font-medium">
                Con un compromiso firme hacia la innovación, desarrollamos sistemas portátiles 
                fáciles de usar, libres de mantenimiento y que no dependen de la gasolina. 
                Nuestros equipos están pensados para integrarse a la vida moderna.
              </p>
            </div>
          </div>

          {/* Products & Solutions */}
          <div 
            className={`card-modern group ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
            style={{
              transition: 'all 0.8s ease-out 0.6s'
            }}
          >
            <div className="p-8 h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-500 rounded-2xl flex items-center justify-center shadow-hard group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">🔋</span>
                </div>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-dark-800 mb-4 group-hover:text-dark-900 transition-colors">
                Soluciones Completas
              </h3>
              
              <p className="text-dark-600 leading-relaxed font-medium">
                Desde baterías recargables hasta paneles solares de alto rendimiento, 
                trabajamos para que cada persona tenga electricidad justo cuando más la necesita.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div 
            className={`card-modern group ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
            style={{
              transition: 'all 0.8s ease-out 0.8s'
            }}
          >
            <div className="p-8 h-full">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-primary transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">🌱</span>
                </div>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-dark-800 mb-4 group-hover:text-dark-900 transition-colors">
                Nuestra Filosofía
              </h3>
              
              <p className="text-dark-600 leading-relaxed font-medium">
                En Soltice Energy creemos que la energía segura y sostenible debe estar 
                al alcance de todos, no ser un privilegio. Democratizamos el acceso a 
                la energía limpia.
              </p>
            </div>
          </div>
        </div>

        {/* Ultra-Enhanced Call to Action */}
        <div 
          className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
          style={{
            transition: 'all 0.8s ease-out 1s'
          }}
        >
          <div className="relative group">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-neon/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 rounded-3xl border border-white/10 overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(180, 254, 0, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                  animation: 'shimmer 30s linear infinite'
                }}></div>
              </div>
              
              <div className="relative p-12 text-white">
                <div className="space-y-8 max-w-4xl mx-auto">
                  {/* Enhanced title with animation */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-neon to-primary-400 rounded-2xl flex items-center justify-center animate-pulse-soft shadow-glow-neon">
                        <svg className="w-8 h-8 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="font-heading font-bold text-3xl lg:text-5xl leading-tight">
                      ¿Listo para tu{' '}
                      <span className="text-gradient-neon relative inline-block group/text">
                        Independencia Energética
                        <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-primary-400/20 blur-lg opacity-0 group-hover/text:opacity-100 transition-opacity duration-500"></div>
                      </span>
                      ?
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                      Únete a{' '}
                      <span className="text-neon font-bold">cientos de familias</span>{' '}
                      que ya disfrutan de energía limpia, silenciosa y confiable.
                    </p>
                    
                    {/* Enhanced stats display */}
                    <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-neon">500+</div>
                        <div className="text-sm text-slate-400">Familias</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-400">0dB</div>
                        <div className="text-sm text-slate-400">Silencioso</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent-400">7 años</div>
                        <div className="text-sm text-slate-400">Garantía</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <a 
                      href="#contacto"
                      className="relative inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-neon to-primary-400 text-dark-900 font-bold text-xl rounded-2xl overflow-hidden group/btn transition-all duration-300 hover:scale-105 hover:shadow-glow-neon transform hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Solicitar Cotización Gratuita
                        <svg className="w-6 h-6 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      
                      {/* Advanced shimmer effect */}
                      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                      
                      {/* Pulsing glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-neon/50 to-primary-400/50 blur-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </a>
                  </div>
                  
                  {/* Enhanced benefits display */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                    <div className="flex items-center justify-center space-x-3 text-slate-300">
                      <div className="w-8 h-8 bg-primary-400/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">Consulta gratuita</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-slate-300">
                      <div className="w-8 h-8 bg-neon/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-neon" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">Sin compromiso</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-slate-300">
                      <div className="w-8 h-8 bg-accent-400/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">Respuesta en 24h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;