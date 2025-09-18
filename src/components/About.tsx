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
      className="position-relative overflow-hidden"
      style={{
        padding: '80px 0',
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
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(180, 254, 0, 0.08) 0%, transparent 70%)',
            top: '-200px',
            right: '-200px',
            animation: 'floatingSlow 30s ease-in-out infinite'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%)',
            bottom: '-150px',
            left: '-150px',
            animation: 'floatingMedium 25s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 107, 122, 0.04) 0%, transparent 70%)',
            top: '40%',
            left: '5%',
            animation: 'floatingFast 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Content */}
      <div className="container position-relative" style={{zIndex: 10, maxWidth: '1400px'}}>
        <div className="row justify-content-center">
          <div className="col-12">
            
            {/* Section Header */}
            <div 
              className={`text-center mb-5 ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out'
              }}
            >
              <div className="d-inline-flex align-items-center mb-3">
                <div 
                  className="me-3"
                  style={{
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #b4fe00 0%, #00d4ff 100%)'
                  }}
                />
                <span 
                  style={{
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                  }}
                >
                  Sobre Nosotros
                </span>
                <div 
                  className="ms-3"
                  style={{
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #00d4ff 0%, #b4fe00 100%)'
                  }}
                />
              </div>
              
              <h2 
                className="mb-4"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  fontFamily: 'Rubik, sans-serif',
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}
              >
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Liderando la
                </span>
                <br />
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    position: 'relative'
                  }}
                >
                  Revolución Energética
                  <div 
                    className="position-absolute"
                    style={{
                      bottom: '-8px',
                      left: '0',
                      width: '100%',
                      height: '6px',
                      background: 'linear-gradient(90deg, #b4fe00 0%, #00d4ff 100%)',
                      borderRadius: '3px',
                      opacity: '0.3'
                    }}
                  />
                </span>
              </h2>
            </div>

            {/* Main Content Grid */}
            <div className="row g-4 align-items-center justify-content-center">
              <div className="col-12">
                <div className="row g-4">
              
                  {/* Mission Statement */}
                  <div className="col-lg-3 col-md-6">
                    <div 
                      className={`${isVisible ? 'animate-fade-in-up' : ''}`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s ease-out 0.2s'
                      }}
                    >
                      <div 
                        className="p-4 rounded-4 h-100"
                        style={{
                          background: `
                            linear-gradient(135deg, 
                              rgba(180, 254, 0, 0.15) 0%, 
                              rgba(180, 254, 0, 0.08) 50%,
                              rgba(255, 255, 255, 0.05) 100%
                            )
                          `,
                          border: '1px solid rgba(180, 254, 0, 0.1)',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.4s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 20px 60px rgba(180, 254, 0, 0.15)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.05)';
                        }}
                      >
                        <div className="mb-3">
                          <div 
                            className="d-inline-flex align-items-center justify-content-center rounded-3"
                            style={{
                              width: '60px',
                              height: '60px',
                              background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                              boxShadow: '0 8px 25px rgba(180, 254, 0, 0.3)'
                            }}
                          >
                            <span style={{fontSize: '28px'}}>⚡</span>
                          </div>
                        </div>
                        
                        <h4 
                          className="mb-3"
                          style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: '20px',
                            fontFamily: 'Rubik, sans-serif'
                          }}
                        >
                          Nuestra Misión
                        </h4>
                        
                        <p 
                          style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '16px',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            marginBottom: '0'
                          }}
                        >
                          Soltice Energy impulsa soluciones de energía limpias, silenciosas y confiables. 
                          Nuestra misión es ofrecer verdadera independencia energética a familias y 
                          comunidades que enfrentan apagones frecuentes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Innovation Commitment */}
                  <div className="col-lg-3 col-md-6">
                    <div 
                      className={`${isVisible ? 'animate-fade-in-up' : ''}`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s ease-out 0.4s'
                      }}
                    >
                      <div 
                        className="p-4 rounded-4 h-100"
                        style={{
                          background: `
                            linear-gradient(135deg, 
                              rgba(0, 212, 255, 0.15) 0%, 
                              rgba(0, 212, 255, 0.08) 50%,
                              rgba(255, 255, 255, 0.05) 100%
                            )
                          `,
                          border: '1px solid rgba(0, 212, 255, 0.1)',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.4s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 212, 255, 0.15)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.05)';
                        }}
                      >
                        <div className="mb-3">
                          <div 
                            className="d-inline-flex align-items-center justify-content-center rounded-3"
                            style={{
                              width: '60px',
                              height: '60px',
                              background: 'linear-gradient(135deg, #00d4ff 0%, #b4fe00 100%)',
                              boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)'
                            }}
                          >
                            <span style={{fontSize: '28px'}}>🚀</span>
                          </div>
                        </div>
                        
                        <h4 
                          className="mb-3"
                          style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: '20px',
                            fontFamily: 'Rubik, sans-serif'
                          }}
                        >
                          Innovación Constante
                        </h4>
                        
                        <p 
                          style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '16px',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            marginBottom: '0'
                          }}
                        >
                          Con un compromiso firme hacia la innovación, desarrollamos sistemas portátiles 
                          fáciles de usar, libres de mantenimiento y que no dependen de la gasolina. 
                          Nuestros equipos están pensados para integrarse a la vida moderna.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Products & Solutions */}
                  <div className="col-lg-3 col-md-6">
                    <div 
                      className={`${isVisible ? 'animate-fade-in-up' : ''}`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s ease-out 0.6s'
                      }}
                    >
                      <div 
                        className="p-4 rounded-4 h-100"
                        style={{
                          background: `
                            linear-gradient(135deg, 
                              rgba(255, 107, 122, 0.15) 0%, 
                              rgba(255, 107, 122, 0.08) 50%,
                              rgba(255, 255, 255, 0.05) 100%
                            )
                          `,
                          border: '1px solid rgba(255, 107, 122, 0.1)',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.4s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 122, 0.15)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.05)';
                        }}
                      >
                        <div className="mb-3">
                          <div 
                            className="d-inline-flex align-items-center justify-content-center rounded-3"
                            style={{
                              width: '60px',
                              height: '60px',
                              background: 'linear-gradient(135deg, #ff6b7a 0%, #ffa502 100%)',
                              boxShadow: '0 8px 25px rgba(255, 107, 122, 0.3)'
                            }}
                          >
                            <span style={{fontSize: '28px'}}>🔋</span>
                          </div>
                        </div>
                        
                        <h4 
                          className="mb-3"
                          style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: '20px',
                            fontFamily: 'Rubik, sans-serif'
                          }}
                        >
                          Soluciones Completas
                        </h4>
                        
                        <p 
                          style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '16px',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            marginBottom: '0'
                          }}
                        >
                          Desde baterías recargables hasta paneles solares de alto rendimiento, 
                          trabajamos para que cada persona tenga electricidad justo cuando más la necesita.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Philosophy */}
                  <div className="col-lg-3 col-md-6">
                    <div 
                      className={`${isVisible ? 'animate-fade-in-up' : ''}`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s ease-out 0.8s'
                      }}
                    >
                      <div 
                        className="p-4 rounded-4 h-100"
                        style={{
                          background: `
                            linear-gradient(135deg, 
                              rgba(255, 165, 2, 0.15) 0%, 
                              rgba(255, 165, 2, 0.08) 50%,
                              rgba(255, 255, 255, 0.05) 100%
                            )
                          `,
                          border: '1px solid rgba(255, 165, 2, 0.1)',
                          backdropFilter: 'blur(20px)',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.4s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 165, 2, 0.15)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.05)';
                        }}
                      >
                        <div className="mb-3">
                          <div 
                            className="d-inline-flex align-items-center justify-content-center rounded-3"
                            style={{
                              width: '60px',
                              height: '60px',
                              background: 'linear-gradient(135deg, #ffa502 0%, #ff6348 100%)',
                              boxShadow: '0 8px 25px rgba(255, 165, 2, 0.3)'
                            }}
                          >
                            <span style={{fontSize: '28px'}}>🌱</span>
                          </div>
                        </div>
                        
                        <h4 
                          className="mb-3"
                          style={{
                            color: '#ffffff',
                            fontWeight: '700',
                            fontSize: '20px',
                            fontFamily: 'Rubik, sans-serif'
                          }}
                        >
                          Nuestra Filosofía
                        </h4>
                        
                        <p 
                          style={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontSize: '16px',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            marginBottom: '0'
                          }}
                        >
                          En Soltice Energy creemos que la energía segura y sostenible debe estar 
                          al alcance de todos, no ser un privilegio. Democratizamos el acceso a 
                          la energía limpia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div 
              className={`text-center mt-5 ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 1s'
              }}
            >
              <div 
                className="p-5 rounded-4"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(19, 29, 59, 0.95) 0%, 
                      rgba(44, 62, 80, 0.9) 100%
                    )
                  `,
                  boxShadow: '0 20px 60px rgba(19, 29, 59, 0.2)'
                }}
              >
                <h3 
                  className="mb-3"
                  style={{
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '24px',
                    fontFamily: 'Rubik, sans-serif'
                  }}
                >
                  ¿Listo para tu{' '}
                  <span 
                    style={{
                      background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Independencia Energética
                  </span>
                  ?
                </h3>
                
                <p 
                  className="mb-4"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '16px',
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}
                >
                  Únete a cientos de familias que ya disfrutan de energía limpia, silenciosa y confiable.
                </p>
                
                <a 
                  href="#inicio"
                  className="btn btn-lg fw-bold border-0 text-decoration-none"
                  style={{
                    background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                    color: '#131d3b',
                    borderRadius: '50px',
                    padding: '15px 40px',
                    fontSize: '16px',
                    letterSpacing: '0.5px',
                    boxShadow: '0 8px 30px rgba(180, 254, 0, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(180, 254, 0, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(180, 254, 0, 0.3)';
                  }}
                >
                  Solicitar Cotización Gratuita
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;