'use client';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 border-t border-white/10 overflow-hidden">
      {/* Ultra-Enhanced background patterns */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-0 w-96 h-96 bg-glow-primary rounded-full blur-3xl animate-float transform will-change-transform"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-glow-accent rounded-full blur-3xl animate-float-delayed transform will-change-transform"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-glow-neon rounded-full blur-[100px] opacity-5 animate-pulse-soft"></div>
        
        {/* Footer-themed particle effects */}
        {[
          { top: 5, left: 15 },
          { top: 85, left: 80 },
          { top: 25, left: 5 },
          { top: 65, left: 90 },
          { top: 45, left: 25 },
          { top: 90, left: 45 },
          { top: 15, left: 70 },
          { top: 75, left: 15 },
          { top: 35, left: 85 },
          { top: 55, left: 35 },
          { top: 80, left: 60 },
          { top: 20, left: 40 },
          { top: 95, left: 20 },
          { top: 40, left: 75 },
          { top: 70, left: 10 },
          { top: 10, left: 65 },
          { top: 60, left: 50 },
          { top: 30, left: 95 },
          { top: 85, left: 30 },
          { top: 50, left: 5 },
          { top: 15, left: 85 },
          { top: 75, left: 55 },
          { top: 40, left: 15 },
          { top: 90, left: 75 },
          { top: 25, left: 60 }
        ].map((position, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/20 rounded-full animate-float"
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 8)}s`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(180, 254, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'shimmer 40s linear infinite'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        {/* Ultra-Enhanced Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Enhanced Logo & Contact */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="relative group">
              <a href="/" className="block transition-all duration-300 hover:scale-105">
                <img 
                  src="/name.png" 
                  alt="Soltice Energy" 
                  className="h-20 w-auto object-contain filter hover:brightness-110 transition-all duration-300"
                  style={{ maxWidth: '280px' }}
                />
              </a>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon/10 to-primary-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
            
            <div className="space-y-6">
              {/* Enhanced phone contact */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-primary-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a 
                  href="tel:787-XXX-XXXX" 
                  className="relative flex items-center space-x-4 text-white hover:text-neon transition-colors duration-300 p-4 rounded-xl border border-white/10 hover:border-neon/30 bg-white/5 hover:bg-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-neon to-primary-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow-neon">
                    <svg className="w-6 h-6 text-dark-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg">(787) XXX-XXXX</div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Llámanos ahora - Respuesta inmediata</div>
                  </div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                </a>
              </div>
              
              {/* Enhanced email contact */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a 
                  href="mailto:info@solticeenergy.com" 
                  className="relative flex items-center space-x-4 text-slate-300 hover:text-white transition-colors duration-300 p-4 rounded-xl border border-white/10 hover:border-primary-400/30 bg-white/5 hover:bg-white/10"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg">info@solticeenergy.com</div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">Escríbenos - Respuesta en 24h</div>
                  </div>
                  <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Ultra-Enhanced Navigation Links */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl text-white relative">
                Enlaces Rápidos
                <div className="w-16 h-0.5 bg-gradient-to-r from-neon to-primary-400 rounded-full mt-2"></div>
              </h3>
              
              <div className="space-y-3">
                {[
                  { href: '/productos', label: 'Productos', icon: '🔋' },
                  { href: '/about', label: 'Sobre Nosotros', icon: '🏢' },
                  { href: '/contacto', label: 'Contacto', icon: '📞' },
                  { href: '#inicio', label: 'Inicio', icon: '🏠' }
                ].map((link, index) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    className="group flex items-center space-x-3 text-slate-300 hover:text-neon font-medium transition-all duration-300 hover:translate-x-3 p-2 rounded-lg hover:bg-white/5"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="flex-1">{link.label}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Enhanced business hours */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-neon/10 rounded-xl blur-md opacity-50"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="font-heading font-bold text-lg text-white mb-4 flex items-center space-x-2">
                  <span className="text-xl">🕐</span>
                  <span>Horarios de Atención</span>
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Lunes - Viernes</span>
                    <span className="font-semibold text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Sábados</span>
                    <span className="font-semibold text-white">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Domingos</span>
                    <span className="font-medium">Cerrado</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex items-center space-x-2 text-xs text-slate-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Disponible ahora</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ultra-Enhanced Social Links & Newsletter */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-2xl text-white relative">
                Síguenos
                <div className="w-16 h-0.5 bg-gradient-to-r from-neon to-primary-400 rounded-full mt-2"></div>
              </h3>
              
              {/* Enhanced social media links */}
              <div className="flex space-x-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a 
                    href="https://facebook.com/solticeenergy" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 border border-white/20 hover:border-blue-600/50"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a 
                    href="https://instagram.com/solticeenergy" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-110 border border-white/20 hover:border-purple-500/50"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a 
                    href="https://wa.me/1787XXXXXXX" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-slate-300 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 border border-white/20 hover:border-green-500/50"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Ultra-enhanced newsletter signup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon/10 to-primary-400/10 rounded-xl blur-md opacity-50"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse-soft">
                      <svg className="w-6 h-6 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-heading font-bold text-lg text-white mb-2">
                      Newsletter Exclusivo
                    </h4>
                    <p className="text-sm text-slate-400">
                      Ofertas especiales y noticias sobre energía solar
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="relative group">
                      <input 
                        type="email" 
                        placeholder="tu@email.com"
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:bg-white/20 focus:border-primary-400 focus:ring-4 focus:ring-primary-400/30 transition-all duration-200 pr-16"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-neon to-primary-400 rounded-lg flex items-center justify-center text-dark-900 hover:scale-110 transition-transform duration-300 shadow-glow-neon">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                        <span>Sin spam garantizado</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-neon rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <span>Cancela cuando quieras</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-300 text-sm font-medium">
                &copy; 2024{' '}
                <span className="font-heading font-bold text-slate-400">SOLTICE</span>{' '}
                <span className="font-heading font-bold text-gradient-neon">ENERGY</span>.{' '}
                Todos los derechos reservados.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Transformando el futuro energético de Puerto Rico 🇵🇷
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>🌱</span>
                <span>Energía limpia para todos</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-br from-neon to-primary-400 rounded-xl flex items-center justify-center text-dark-900 hover:scale-110 hover:shadow-glow-neon transition-all duration-300 group"
                title="Volver arriba"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;