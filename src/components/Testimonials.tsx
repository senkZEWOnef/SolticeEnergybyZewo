'use client';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      location: 'San Juan, PR',
      text: 'Desde que instalé el sistema de Soltice Energy, no he vuelto a preocuparme por los apagones. La instalación fue rápida y el equipo muy profesional.',
      service: 'Sistema Solar Hogar'
    },
    {
      name: 'Carlos Ruiz',
      location: 'Bayamón, PR',
      text: 'Mi negocio ya no se ve afectado por los cortes de luz. El sistema comercial me ha ahorrado miles de dólares en pérdidas por apagones.',
      service: 'Sistema Solar Comercial'
    },
    {
      name: 'Ana Rodríguez',
      location: 'Ponce, PR',
      text: 'El sistema portátil es perfecto para nuestras salidas familiares. Calidad excepcional y el servicio al cliente es increíble.',
      service: 'Sistema Portátil'
    }
  ];

  return (
    <section 
      id="testimonios" 
      className="py-5 position-relative"
      style={{
        background: 'linear-gradient(135deg, #131d3b 0%, rgba(19, 29, 59, 0.95) 50%, #2c3e50 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden">
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(180, 254, 0, 0.08) 0%, transparent 70%)',
            top: '20%',
            right: '10%',
            animation: 'floatingSlow 30s ease-in-out infinite'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(180, 65, 65, 0.06) 0%, transparent 70%)',
            bottom: '20%',
            left: '5%',
            animation: 'floatingMedium 25s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container position-relative" style={{zIndex: 10}}>
        <div className="text-center mb-5">
          <div 
            className="d-inline-block mb-4 px-4 py-2 rounded-pill"
            style={{
              background: 'rgba(180, 254, 0, 0.15)',
              border: '2px solid #b4fe00',
              color: '#b4fe00',
              fontSize: '14px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            ⭐ Testimonios Reales
          </div>
          <h2 className="display-4 fw-bold text-white mb-4" style={{fontFamily: 'Rubik, sans-serif'}}>
            Lo que Dicen <span style={{color: '#b4fe00'}}>Nuestros Clientes</span>
          </h2>
          <p className="lead text-white-50 mb-0" style={{maxWidth: '700px', margin: '0 auto'}}>
            Más de 500 familias y negocios en Puerto Rico ya disfrutan de independencia energética
          </p>
        </div>

        {/* Stats */}
        <div className="row text-center mb-5">
          <div className="col-lg-3 col-md-6 mb-4">
            <div 
              className="card border-0 shadow-lg h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px'
              }}
            >
              <div className="card-body p-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{width: '70px', height: '70px', background: 'linear-gradient(135deg, #b4fe00 0%, #a8e600 100%)'}}
                >
                  <span className="text-white" style={{fontSize: '30px'}}>😊</span>
                </div>
                <h3 className="fw-bold text-white mb-2" style={{fontFamily: 'Rubik, sans-serif'}}>500+</h3>
                <p className="text-white-50 mb-0">Clientes Satisfechos</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div 
              className="card border-0 shadow-lg h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px'
              }}
            >
              <div className="card-body p-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{width: '70px', height: '70px', background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)'}}
                >
                  <span className="text-white" style={{fontSize: '30px'}}>⚡</span>
                </div>
                <h3 className="fw-bold text-white mb-2" style={{fontFamily: 'Rubik, sans-serif'}}>95%</h3>
                <p className="text-white-50 mb-0">Reducción en Apagones</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div 
              className="card border-0 shadow-lg h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px'
              }}
            >
              <div className="card-body p-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{width: '70px', height: '70px', background: 'linear-gradient(135deg, #b43041 0%, #a02d38 100%)'}}
                >
                  <span className="text-white" style={{fontSize: '30px'}}>🏆</span>
                </div>
                <h3 className="fw-bold text-white mb-2" style={{fontFamily: 'Rubik, sans-serif'}}>7 años</h3>
                <p className="text-white-50 mb-0">Garantía Máxima</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div 
              className="card border-0 shadow-lg h-100"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px'
              }}
            >
              <div className="card-body p-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{width: '70px', height: '70px', background: 'linear-gradient(135deg, #ffa502 0%, #ff6348 100%)'}}
                >
                  <span className="text-white" style={{fontSize: '30px'}}>🛠️</span>
                </div>
                <h3 className="fw-bold text-white mb-2" style={{fontFamily: 'Rubik, sans-serif'}}>24/7</h3>
                <p className="text-white-50 mb-0">Soporte Técnico</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4">
              <div 
                className="card h-100 border-0 shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '25px',
                  transform: 'translateY(0)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(180, 254, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4">
                  {/* Quote Icon */}
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle"
                      style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #b4fe00 0%, #b43041 100%)'}}
                    >
                      <span className="text-white fw-bold" style={{fontSize: '24px'}}>&ldquo;</span>
                    </div>
                  </div>
                  
                  {/* Stars */}
                  <div className="mb-3">
                    <div style={{color: '#ffc107', fontSize: '18px'}}>
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="mb-4">
                    <p className="text-dark fst-italic" style={{fontSize: '16px', lineHeight: '1.6'}}>
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white fw-bold shadow"
                      style={{
                        width: '60px', 
                        height: '60px', 
                        background: 'linear-gradient(135deg, #131d3b 0%, #2c3e50 100%)',
                        fontSize: '18px'
                      }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>
                        {testimonial.name}
                      </h6>
                      <div className="d-flex align-items-center mb-1">
                        <span className="me-2" style={{color: '#b43041'}}>📍</span>
                        <small className="text-muted fw-medium">{testimonial.location}</small>
                      </div>
                      <div 
                        className="px-2 py-1 rounded-pill d-inline-block"
                        style={{background: 'rgba(180, 254, 0, 0.1)', fontSize: '12px'}}
                      >
                        <small className="fw-bold" style={{color: '#b4fe00'}}>{testimonial.service}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-5">
          <div 
            className="card border-0 shadow-lg d-inline-block"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: '25px',
              maxWidth: '600px'
            }}
          >
            <div className="card-body p-5">
              <h4 className="fw-bold text-white mb-3" style={{fontFamily: 'Rubik, sans-serif'}}>
                ¿Listo para Unirte a Ellos?
              </h4>
              <p className="text-white-50 mb-4">
                Únete a cientos de puertorriqueños que ya disfrutan de energía independiente
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a 
                  href="tel:787-233-9002"
                  className="btn btn-professional btn-lg px-4 py-3 text-decoration-none border-0 shadow fw-bold"
                  style={{
                    background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                    color: '#131d3b',
                    borderRadius: '15px',
                    fontSize: '16px'
                  }}
                >
                  📞 Llamar Ahora
                </a>
                <a 
                  href="https://wa.me/17875152632"
                  className="btn btn-professional btn-lg px-4 py-3 text-decoration-none border-2 shadow fw-bold"
                  style={{
                    borderColor: '#b4fe00',
                    color: '#b4fe00',
                    backgroundColor: 'rgba(180, 254, 0, 0.15)',
                    borderRadius: '15px',
                    fontSize: '16px'
                  }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;