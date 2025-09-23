'use client';

const ProductsPreview = () => {
  const products = [
    {
      id: 'solar-2500',
      name: 'Batería Portátil 2500W',
      power: '2500W',
      description: 'Ideal para apartamentos y estudios. Energía limpia y silenciosa sin gasolina ni mantenimiento.',
      tagline: 'Silenciosa. Eficiente. Siempre lista.',
      image: '/Solar2500-1.png'
    },
    {
      id: 'solar-3600',
      name: 'Batería Portátil 3600W',
      power: '3600W',
      description: 'Perfecta para hogares que necesitan más capacidad durante apagones largos.',
      tagline: 'Más energía. Más control. Cero ruido.',
      image: '/Solar3600-1.png'
    },
    {
      id: 'solar-6000',
      name: 'Batería Portátil 6000W',
      power: '6000W',
      description: 'La más potente. Salida 110 y 220V para equipos de alto consumo.',
      tagline: 'Sin mantenimiento: Cero gasolina, cero aceite, cero ruido',
      image: '/Solar6000-1.png'
    }
  ];

  return (
    <section 
      id="productos"
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
    >
      {/* Ultra-Enhanced background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-primary rounded-full blur-3xl animate-float transform will-change-transform"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-accent rounded-full blur-3xl animate-float-delayed transform will-change-transform"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-neon rounded-full blur-[120px] opacity-10 animate-pulse-soft"></div>
        
        {/* Additional dynamic elements */}
        <div className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-br from-primary-400/15 to-neon/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-2xl animate-float-delayed"></div>
        
        {/* Particle effects */}
        {[
          { top: 15, left: 20 },
          { top: 70, left: 85 },
          { top: 35, left: 5 },
          { top: 90, left: 45 },
          { top: 25, left: 75 },
          { top: 60, left: 15 },
          { top: 45, left: 90 },
          { top: 80, left: 25 },
          { top: 10, left: 60 },
          { top: 55, left: 40 },
          { top: 85, left: 70 },
          { top: 30, left: 95 },
          { top: 75, left: 10 },
          { top: 50, left: 80 },
          { top: 95, left: 35 }
        ].map((position, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/40 rounded-full animate-float"
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + (i % 5)}s`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(180, 254, 0, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'shimmer 20s linear infinite'
        }}></div>
        
        {/* Diagonal accent pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(180, 254, 0, 0.05) 50%, transparent 55%)`,
          backgroundSize: '150px 150px'
        }}></div>
      </div>
      
      {/* Enhanced floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-6 h-6 border-2 border-primary-400/40 rounded-lg rotate-45 animate-float shadow-glow-primary"></div>
        <div className="absolute bottom-1/3 left-1/6 w-8 h-8 border-2 border-accent-400/40 rounded-full animate-float-delayed shadow-glow-accent"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-neon/30 rounded-full animate-pulse-soft shadow-glow-neon"></div>
        <div className="absolute top-1/5 left-1/3 w-3 h-3 bg-primary-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-1/5 right-1/4 w-5 h-5 border border-neon/40 rounded-xl rotate-12 animate-float-delayed"></div>
        
        {/* Circuit-like patterns */}
        <div className="absolute top-10 left-10 w-16 h-1 bg-gradient-to-r from-transparent via-primary-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-20 right-20 h-16 w-1 bg-gradient-to-b from-transparent via-neon/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="space-y-8">
            {/* Enhanced section badge */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-neon rounded-full"></div>
              <div className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-slate-300 text-sm font-bold tracking-widest uppercase">
                  Productos Destacados
                </span>
              </div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-neon via-primary-400 to-transparent rounded-full"></div>
            </div>
            
            <div className="relative">
              <h2 className="font-heading font-black text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-white">
                Nuestras{' '}
                <span className="text-gradient-neon relative inline-block group">
                  Baterías Solares
                  <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-primary-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </span>
              </h2>
              
              {/* Dynamic background text */}
              <div className="absolute inset-0 font-heading font-black text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-primary-400/5 transform translate-x-1 translate-y-1 -z-10">
                Nuestras Baterías Solares
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
                Tecnología avanzada para{' '}
                <span className="text-white font-semibold">
                  independencia energética total
                </span>
                {' '}con la garantía de{' '}
                <span className="text-neon font-bold">7 años</span>
              </p>
              
              {/* Enhanced stats */}
              <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                  <span>0dB Silencioso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Cero Mantenimiento</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <span>100% Portátil</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-32 h-1 bg-gradient-to-r from-neon to-primary-400 rounded-full animate-shimmer shadow-glow-neon"></div>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-2 h-2 bg-neon/60 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-neon rounded-full animate-shimmer shadow-glow-primary"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-neon/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-primary-400/40 hover:shadow-glow-primary">
                {/* Ultra-Enhanced Product Image Section */}
                <div className="relative h-72 bg-gradient-to-br from-neon/10 via-primary-500/10 to-accent-500/10 flex items-center justify-center overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(rgba(180, 254, 0, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px',
                      animation: 'shimmer 25s linear infinite'
                    }}></div>
                  </div>
                  
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="relative z-10 max-h-60 max-w-[85%] object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 filter group-hover:brightness-110"
                  />
                  
                  {/* Enhanced Power Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-neon to-primary-400 text-dark-900 font-bold px-5 py-3 rounded-xl shadow-glow-neon transition-all duration-300 group-hover:scale-110">
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="font-black">{product.power}</span>
                        </div>
                      </div>
                      {/* Pulsing glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-neon/50 to-primary-400/50 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced overlay with circuit pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[
                      { top: 25, left: 30 },
                      { top: 65, left: 70 },
                      { top: 45, left: 25 },
                      { top: 80, left: 50 },
                      { top: 35, left: 75 }
                    ].map((position, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-neon/60 rounded-full animate-float"
                        style={{
                          top: `${position.top}%`,
                          left: `${position.left}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: '3s'
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  {/* Enhanced Product Name */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-white group-hover:text-neon transition-colors duration-300 leading-tight">
                      {product.name}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-neon to-primary-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
                  </div>

                  {/* Enhanced Description */}
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {product.description}
                  </p>

                  {/* Ultra-Enhanced Tagline */}
                  <div className="relative group/tagline">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-primary-400/20 rounded-xl blur-md opacity-0 group-hover/tagline:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-r from-neon/10 to-primary-400/10 border border-neon/30 rounded-xl p-4 text-center transition-all duration-300 group-hover:border-neon/50 group-hover:bg-neon/20">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
                        <span className="text-neon font-bold text-sm tracking-wide">
                          {product.tagline}
                        </span>
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Key features list */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-400">
                    <div className="flex items-center space-x-2">
                      <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Sin gasolina</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-3 h-3 text-neon" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>100% Silencioso</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-3 h-3 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Portátil</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-3 h-3 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>7 años garantía</span>
                    </div>
                  </div>

                  {/* Ultra-Enhanced Action Button */}
                  <div className="pt-4">
                    <a 
                      href="/productos"
                      className="relative w-full px-6 py-4 bg-gradient-to-r from-neon to-primary-400 text-dark-900 font-bold text-sm rounded-xl overflow-hidden group/button transition-all duration-300 hover:scale-105 hover:shadow-glow-neon transform hover:-translate-y-1 flex items-center justify-center"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Ver Detalles Completos
                        <svg className="w-4 h-4 transform group-hover/button:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      
                      {/* Advanced shimmer effect */}
                      <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-200%] group-hover/button:translate-x-[200%] transition-transform duration-1000"></div>
                      
                      {/* Pulsing glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-neon/50 to-primary-400/50 blur-lg opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ultra-Enhanced Call to Action */}
        <div className="text-center animate-fade-in-up">
          <div className="relative group/cta">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-neon/20 rounded-3xl blur-2xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 max-w-5xl mx-auto overflow-hidden hover:border-primary-400/40 transition-all duration-500">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(180, 254, 0, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                  animation: 'shimmer 30s linear infinite'
                }}></div>
              </div>
              
              <div className="relative p-8 lg:p-16">
                <div className="space-y-10">
                  {/* Enhanced title section */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-neon to-primary-400 rounded-2xl flex items-center justify-center animate-pulse-soft shadow-glow-neon">
                        <svg className="w-8 h-8 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="font-heading font-bold text-3xl lg:text-5xl text-white leading-tight">
                      ¿Quieres ver todas las{' '}
                      <span className="text-gradient-neon relative inline-block group/text">
                        especificaciones
                        <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-primary-400/20 blur-lg opacity-0 group-hover/text:opacity-100 transition-opacity duration-500"></div>
                      </span>
                      ?
                    </h3>
                    
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                      Descubre todas las características técnicas,{' '}
                      <span className="text-white font-semibold">
                        especificaciones detalladas y opciones de cada batería
                      </span>
                      {' '}para encontrar la solución perfecta para tu hogar.
                    </p>
                  </div>
                  
                  {/* Enhanced buttons section */}
                  <div className="space-y-8">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <a 
                        href="/productos"
                        className="relative px-10 py-5 bg-gradient-to-r from-neon to-primary-400 text-dark-900 font-bold text-lg rounded-2xl overflow-hidden group/btn transition-all duration-300 hover:scale-105 hover:shadow-glow-neon transform hover:-translate-y-1"
                      >
                        <span className="relative z-10 flex items-center gap-4">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          Ver Todos los Productos
                          <svg className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        
                        {/* Advanced shimmer effect */}
                        <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                        
                        {/* Pulsing glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-neon/50 to-primary-400/50 blur-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </a>
                      
                      <a 
                        href="#contacto"
                        className="relative px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:bg-white/20 hover:border-primary-400/50 hover:shadow-glow-primary group/btn2 transform hover:-translate-y-1"
                      >
                        <span className="flex items-center gap-4">
                          <svg className="w-6 h-6 transform group-hover/btn2:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          Consulta Personalizada
                          <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                        </span>
                        
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-primary-400/0 group-hover/btn2:border-primary-400/50 transition-all duration-300"></div>
                      </a>
                    </div>
                    
                    {/* Enhanced benefits grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                      <div className="flex items-center justify-center space-x-3 text-slate-300 group/benefit">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-400/20 to-neon/20 rounded-xl flex items-center justify-center group-hover/benefit:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-lg">7 años</div>
                          <div className="text-sm text-slate-400">Garantía completa</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-3 text-slate-300 group/benefit">
                        <div className="w-10 h-10 bg-gradient-to-br from-neon/20 to-accent-400/20 rounded-xl flex items-center justify-center group-hover/benefit:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-neon" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-lg">0 dB</div>
                          <div className="text-sm text-slate-400">Completamente silencioso</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-3 text-slate-300 group/benefit">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-xl flex items-center justify-center group-hover/benefit:scale-110 transition-transform duration-300">
                          <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-lg">Cero</div>
                          <div className="text-sm text-slate-400">Mantenimiento</div>
                        </div>
                      </div>
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

export default ProductsPreview;