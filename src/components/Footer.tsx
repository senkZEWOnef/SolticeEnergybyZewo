'use client';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="position-relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(180, 254, 0, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 107, 122, 0.04) 0%, transparent 50%),
          linear-gradient(135deg, 
            rgba(19, 29, 59, 0.95) 0%, 
            rgba(25, 42, 86, 0.92) 25%,
            rgba(45, 55, 72, 0.94) 50%,
            rgba(25, 42, 86, 0.92) 75%,
            rgba(19, 29, 59, 0.96) 100%
          )
        `,
        padding: '60px 0 40px'
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(180, 254, 0, 0.05) 0%, transparent 70%)',
            top: '10%',
            right: '5%',
            animation: 'floatingSlow 25s ease-in-out infinite'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
            bottom: '15%',
            left: '10%',
            animation: 'floatingMedium 20s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 mb-5">
            <div className="mb-4">
              <img 
                src="/name.png" 
                alt="Soltice Energy" 
                style={{ height: '60px', width: 'auto' }}
              />
            </div>
            <p 
              className="mb-4"
              style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '15px',
                lineHeight: '1.6',
                maxWidth: '320px'
              }}
            >
              Líderes en soluciones de energía solar en Puerto Rico. 
              Ofrecemos baterías portátiles de última generación para garantizar 
              tu independencia energética total.
            </p>
            
            {/* Social Media */}
            <div className="d-flex gap-3 mb-4">
              <a 
                href="https://facebook.com/solticeenergy" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-0 p-2 rounded-circle"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '45px',
                  height: '45px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(24, 119, 242, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '18px' }}>📘</span>
              </a>
              
              <a 
                href="https://instagram.com/solticeenergy" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-0 p-2 rounded-circle"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '45px',
                  height: '45px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(225, 48, 108, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '18px' }}>📸</span>
              </a>
              
              <a 
                href="https://wa.me/17875152632" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-0 p-2 rounded-circle"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '45px',
                  height: '45px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(37, 211, 102, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '18px' }}>💬</span>
              </a>

              <a 
                href="https://youtube.com/@solticeenergypr" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-0 p-2 rounded-circle"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '45px',
                  height: '45px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '18px' }}>📺</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div 
              className="d-inline-flex align-items-center px-3 py-2 rounded-pill"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="me-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{color: '#ffc107', fontSize: '12px'}}>⭐</span>
                ))}
              </div>
              <small style={{color: 'rgba(255, 255, 255, 0.7)', fontWeight: '500', fontSize: '11px'}}>
                500+ Clientes Satisfechos
              </small>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 
              className="fw-bold mb-4"
              style={{
                color: '#ffffff',
                fontSize: '16px',
                fontFamily: 'Rubik, sans-serif'
              }}
            >
              Navegación
            </h6>
            <ul className="list-unstyled">
              {[
                { href: '#inicio', text: 'Inicio' },
                { href: '#sobre-nosotros', text: 'Sobre Nosotros' },
                { href: '#productos', text: 'Productos' },
                { href: '#testimonios', text: 'Testimonios' },
                { href: '#contacto', text: 'Contacto' }
              ].map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.href} 
                    className="text-decoration-none"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#b4fe00';
                      e.currentTarget.style.paddingLeft = '5px';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 
              className="fw-bold mb-4"
              style={{
                color: '#ffffff',
                fontSize: '16px',
                fontFamily: 'Rubik, sans-serif'
              }}
            >
              Nuestros Servicios
            </h6>
            <ul className="list-unstyled">
              {[
                'Baterías 2500W Portátiles',
                'Baterías 3600W Residenciales', 
                'Baterías 6000W Comerciales',
                'Instalación Profesional',
                'Soporte Técnico 24/7',
                'Garantía Extendida'
              ].map((service, index) => (
                <li key={index} className="mb-2 d-flex align-items-start">
                  <div 
                    className="me-2 mt-1"
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                      flexShrink: 0
                    }}
                  />
                  <span 
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      lineHeight: '1.4'
                    }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Location */}
          <div className="col-lg-3 mb-4">
            <h6 
              className="fw-bold mb-4"
              style={{
                color: '#ffffff',
                fontSize: '16px',
                fontFamily: 'Rubik, sans-serif'
              }}
            >
              Contacto Directo
            </h6>
            
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle me-3"
                  style={{
                    width: '35px',
                    height: '35px',
                    background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)'
                  }}
                >
                  <span style={{ fontSize: '16px' }}>📞</span>
                </div>
                <div>
                  <a 
                    href="tel:787-233-9002" 
                    className="text-decoration-none"
                    style={{
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: '16px'
                    }}
                  >
                    787-233-9002
                  </a>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px' }}>
                    Llama para cotización inmediata
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle me-3"
                  style={{
                    width: '35px',
                    height: '35px',
                    background: 'linear-gradient(135deg, #ff6b7a 0%, #ff4757 100%)'
                  }}
                >
                  <span style={{ fontSize: '16px' }}>📧</span>
                </div>
                <div>
                  <a 
                    href="mailto:info@solticeenergypr.org" 
                    className="text-decoration-none"
                    style={{
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}
                  >
                    info@solticeenergypr.org
                  </a>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px' }}>
                    Respuesta en 24 horas
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle me-3"
                  style={{
                    width: '35px',
                    height: '35px',
                    background: 'linear-gradient(135deg, #ffa502 0%, #ff6348 100%)'
                  }}
                >
                  <span style={{ fontSize: '16px' }}>📍</span>
                </div>
                <div>
                  <div 
                    style={{
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}
                  >
                    Puerto Rico
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px' }}>
                    Servicio a toda la isla
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div 
              className="p-3 rounded-3 mb-4"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h6 className="fw-bold mb-2" style={{ color: '#ffffff', fontSize: '14px' }}>
                Horarios de Atención
              </h6>
              <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>
                <div className="mb-1">Lun - Vie: 8:00 AM - 6:00 PM</div>
                <div className="mb-1">Sábado: 9:00 AM - 4:00 PM</div>
                <div className="mb-1">Domingo: Solo emergencias</div>
                <div style={{color: '#b4fe00', fontWeight: '600'}}>Emergencias 24/7</div>
              </div>
            </div>

            {/* Quick CTA */}
            <a 
              href="#inicio"
              className="btn border-0 fw-bold w-100"
              style={{
                background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                color: '#131d3b',
                borderRadius: '10px',
                padding: '10px',
                fontSize: '13px',
                letterSpacing: '0.3px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(180, 254, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              ⚡ Cotización Gratis
            </a>
          </div>
        </div>
        
        {/* Separator */}
        <div 
          className="my-5"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)'
          }}
        />
        
        {/* Bottom Section */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
              &copy; 2024 Soltice Energy PR. Todos los derechos reservados.
            </p>
            <p className="mb-0 mt-1" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px' }}>
              Hecho con ❤️ en Puerto Rico
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex gap-4 justify-content-md-end justify-content-start align-items-center">
              <a 
                href="#" 
                className="text-decoration-none"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#b4fe00'}
                onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                Política de Privacidad
              </a>
              <a 
                href="#" 
                className="text-decoration-none"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '14px',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#b4fe00'}
                onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                Términos de Servicio
              </a>
              
              <button
                onClick={scrollToTop}
                className="btn border-0 rounded-circle"
                style={{
                  background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                  color: '#131d3b',
                  width: '40px',
                  height: '40px',
                  fontSize: '16px',
                  fontWeight: '700',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(180, 254, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                title="Volver arriba"
              >
                ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;