'use client';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{backgroundColor: '#131d3b', color: 'white'}}>
      <div className="container py-5">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-4">
              <div 
                className="d-flex align-items-center justify-content-center me-3 rounded"
                style={{
                  width: '50px', 
                  height: '50px', 
                  background: 'linear-gradient(135deg, #b4fe00 0%, #b43041 100%)'
                }}
              >
                <span className="text-white fw-bold fs-4">⚡</span>
              </div>
              <div>
                <h4 className="mb-0 fw-bold">Soltice Energy</h4>
                <small className="text-muted">Energía Limpia PR</small>
              </div>
            </div>
            
            <p className="text-muted mb-4">
              Líderes en soluciones de energía solar en Puerto Rico. 
              Comprometidos con tu independencia energética y un futuro más sostenible.
            </p>

            {/* Social Media */}
            <h5 className="fw-bold mb-3" style={{fontFamily: 'Rubik, sans-serif'}}>Síguenos</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com/solticeenergypr" className="text-decoration-none">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle shadow"
                  style={{
                    width: '50px', 
                    height: '50px', 
                    background: 'linear-gradient(135deg, #1877F2 0%, #42A5F5 100%)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <span className="text-white" style={{fontSize: '20px'}}>📘</span>
                </div>
              </a>
              <a href="https://instagram.com/solticeenergypr" className="text-decoration-none">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle shadow"
                  style={{
                    width: '50px', 
                    height: '50px', 
                    background: 'linear-gradient(135deg, #E4405F 0%, #FD1D1D 50%, #FCAF45 100%)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <span className="text-white" style={{fontSize: '20px'}}>📷</span>
                </div>
              </a>
              <a href="https://youtube.com/@solticeenergypr" className="text-decoration-none">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle shadow"
                  style={{
                    width: '50px', 
                    height: '50px', 
                    background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <span className="text-white" style={{fontSize: '20px'}}>📺</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4">
            <h5 className="fw-bold mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#inicio" className="text-muted text-decoration-none">Inicio</a></li>
              <li className="mb-2"><a href="#productos" className="text-muted text-decoration-none">Productos</a></li>
              <li className="mb-2"><a href="#servicios" className="text-muted text-decoration-none">Servicios</a></li>
              <li className="mb-2"><a href="#testimonios" className="text-muted text-decoration-none">Testimonios</a></li>
              <li className="mb-2"><a href="#contacto" className="text-muted text-decoration-none">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4">
            <h5 className="fw-bold mb-3">Nuestros Servicios</h5>
            <ul className="list-unstyled">
              <li className="mb-2 text-muted">• Sistemas Solares Residenciales</li>
              <li className="mb-2 text-muted">• Sistemas Solares Comerciales</li>
              <li className="mb-2 text-muted">• Baterías Portátiles</li>
              <li className="mb-2 text-muted">• Instalación Profesional</li>
              <li className="mb-2 text-muted">• Mantenimiento y Soporte</li>
              <li className="mb-2 text-muted">• Consultoría Energética</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-4">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <span className="me-3">📞</span>
                <a href="tel:787-233-9002" className="text-muted text-decoration-none">787-233-9002</a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <span className="me-3">📞</span>
                <a href="tel:787-515-2632" className="text-muted text-decoration-none">787-515-2632</a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <span className="me-3">📧</span>
                <a href="mailto:info@solticeenergypr.org" className="text-muted text-decoration-none">info@solticeenergypr.org</a>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-3">📍</span>
                <span className="text-muted">Puerto Rico</span>
              </div>
            </div>

            {/* Operating Hours */}
            <div 
              className="p-3 rounded"
              style={{backgroundColor: 'rgba(255,255,255,0.05)'}}
            >
              <h6 className="fw-bold mb-2">Horarios de Atención</h6>
              <div className="small text-muted">
                <div>Lun - Vie: 8:00 AM - 6:00 PM</div>
                <div>Sábado: 9:00 AM - 4:00 PM</div>
                <div>Domingo: Solo emergencias</div>
                <div style={{color: '#b4fe00'}}>Emergencias 24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top pt-4 mt-5" style={{borderColor: 'rgba(255,255,255,0.1) !important'}}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="text-center text-md-start mb-3 mb-md-0">
              <p className="text-muted mb-1">© 2024 Soltice Energy PR. Todos los derechos reservados.</p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="#" className="text-muted text-decoration-none small">Política de Privacidad</a>
                <span className="text-muted">•</span>
                <a href="#" className="text-muted text-decoration-none small">Términos de Servicio</a>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <p className="text-muted mb-0 small">
                <span>Hecho con ❤️ en Puerto Rico</span>
              </p>
              
              <button
                onClick={scrollToTop}
                className="btn btn-sm rounded-circle"
                style={{backgroundColor: '#b4fe00', color: '#131d3b', width: '40px', height: '40px'}}
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