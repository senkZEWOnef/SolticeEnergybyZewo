'use client';

import { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    town: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', town: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="inicio" 
      className="position-relative overflow-hidden d-flex align-items-center" 
      style={{
        minHeight: '100vh',
        paddingTop: '0',
        paddingBottom: '0'
      }}
    >
      {/* Epic Storm Background with Parallax */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `
            radial-gradient(circle at 30% 50%, rgba(180, 254, 0, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 20%, rgba(0, 212, 255, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(13, 32, 64, 0.95) 0%, 
              rgba(25, 42, 86, 0.92) 25%,
              rgba(45, 55, 72, 0.94) 50%,
              rgba(25, 42, 86, 0.92) 75%,
              rgba(13, 32, 64, 0.96) 100%
            ),
            url('/hero.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'epicBackgroundShift 25s ease-in-out infinite',
          filter: 'contrast(1.1) brightness(0.9)'
        }}
      />
      
      {/* Dynamic Light Rays */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, rgba(180, 254, 0, 0.03) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 20%, rgba(0, 212, 255, 0.02) 40%, transparent 60%)
          `,
          animation: 'lightRays 30s linear infinite'
        }}
      />
      
      {/* Moving Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(180, 254, 0, 0.1) 0%, transparent 70%)',
            top: '10%',
            right: '5%',
            animation: 'floatingSlow 25s ease-in-out infinite'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(180, 65, 65, 0.1) 0%, transparent 70%)',
            bottom: '15%',
            left: '10%',
            animation: 'floatingMedium 20s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
            top: '50%',
            left: '70%',
            animation: 'floatingFast 18s ease-in-out infinite'
          }}
        />
      </div>
      {/* Background Pattern */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{opacity: 0.1}}>
        <div className="position-absolute" style={{top: '20%', left: '10%', width: '200px', height: '200px', background: 'radial-gradient(circle, #b4fe00 0%, transparent 70%)', borderRadius: '50%'}}></div>
        <div className="position-absolute" style={{top: '60%', right: '15%', width: '150px', height: '150px', background: 'radial-gradient(circle, #b43041 0%, transparent 70%)', borderRadius: '50%'}}></div>
        <div className="position-absolute" style={{bottom: '30%', left: '60%', width: '100px', height: '100px', background: 'radial-gradient(circle, #b4fe00 0%, transparent 70%)', borderRadius: '50%'}}></div>
      </div>

      <div className="container position-relative" style={{zIndex: 20}}>
        <div className="row align-items-center min-vh-100">
          {/* Hero Content */}
          <div className="col-lg-6 col-xl-5 text-white">
            
            {/* Revolutionary Main Heading */}
            <div className="mb-5 position-relative">
              <div 
                className="position-absolute"
                style={{
                  top: '-20px',
                  left: '-20px',
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(180, 254, 0, 0.1) 0%, transparent 70%)',
                  animation: 'float 6s ease-in-out infinite',
                  zIndex: -1
                }}
              />
              <h1 
                className="mb-3 position-relative" 
                style={{
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                  fontWeight: '900',
                  lineHeight: '0.95',
                  fontFamily: 'Rubik, sans-serif',
                  letterSpacing: '-0.03em',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div 
                  style={{
                    color: '#ffffff',
                    marginBottom: '0.2em',
                    position: 'relative',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  Olvídate de
                  <div 
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                      animation: 'shimmer 3s linear infinite',
                      pointerEvents: 'none'
                    }}
                  />
                </div>
                <div 
                  className="position-relative d-inline-block"
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        #ff4757 0%, 
                        #ff6b7a 25%,
                        #ff8e8e 50%,
                        #ffb3b3 75%,
                        #ff4757 100%
                      )
                    `,
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradientPulse 4s ease-in-out infinite',
                    marginBottom: '0.2em',
                    filter: 'drop-shadow(0 0 20px rgba(255, 71, 87, 0.3))'
                  }}
                >
                  APAGONES
                  <div 
                    className="position-absolute"
                    style={{
                      bottom: '-15px',
                      left: '0',
                      width: '100%',
                      height: '8px',
                      background: `
                        linear-gradient(90deg, 
                          #ff4757 0%, 
                          rgba(255, 71, 87, 0.8) 50%, 
                          transparent 100%
                        )
                      `,
                      borderRadius: '4px',
                      boxShadow: '0 0 20px rgba(255, 71, 87, 0.5)',
                      animation: 'underlineGlow 3s ease-in-out infinite'
                    }}
                  />
                  <div 
                    className="position-absolute"
                    style={{
                      top: '50%',
                      right: '-30px',
                      width: '20px',
                      height: '20px',
                      background: 'radial-gradient(circle, #ff4757 0%, transparent 70%)',
                      animation: 'sparkle 2s linear infinite',
                      transform: 'translateY(-50%)'
                    }}
                  />
                </div>
                <div 
                  style={{
                    color: '#ffffff',
                    display: 'inline',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  para{' '}
                </div>
                <span 
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        #b4fe00 0%, 
                        #00d4ff 25%,
                        #b4fe00 50%,
                        #00d4ff 75%,
                        #b4fe00 100%
                      )
                    `,
                    backgroundSize: '300% 300%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'energyPulse 3s ease-in-out infinite',
                    filter: 'drop-shadow(0 0 30px rgba(180, 254, 0, 0.4))',
                    position: 'relative'
                  }}
                >
                  SIEMPRE
                </span>
              </h1>
            </div>
            
            {/* Premium Subheading */}
            <div className="mb-6">
              <p 
                className="mb-4" 
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                  color: '#ffffff',
                  lineHeight: '1.7',
                  fontWeight: '500',
                  maxWidth: '650px',
                  textShadow: '0 2px 12px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.7)'
                }}
              >
                <span 
                  className="position-relative"
                  style={{
                    color: '#ffffff',
                    fontWeight: '700',
                    textShadow: '0 2px 12px rgba(0, 0, 0, 0.9), 0 0 25px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Tecnología solar revolucionaria
                </span>
                {' '}que elimina los apagones de tu vida para siempre.
              </p>
              
            </div>

            {/* Premium Feature Cards */}
            <div className="row g-3 mb-5">
              <div className="col-6 col-lg-3">
                <div 
                  className="p-3 rounded-3 h-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(180, 254, 0, 0.1) 0%, rgba(180, 254, 0, 0.05) 100%)',
                    border: '1px solid rgba(180, 254, 0, 0.2)',
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(180, 254, 0, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-2"
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #b4fe00 0%, #a8e600 100%)'
                      }}
                    >
                      <span style={{fontSize: '16px'}}>🔋</span>
                    </div>
                    <div>
                      <div className="text-white mb-0" style={{fontSize: '13px', fontWeight: '700'}}>4,000+</div>
                      <small style={{color: '#b4fe00', fontSize: '11px', fontWeight: '500'}}>CICLOS</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div 
                  className="p-3 rounded-3 h-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-2"
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)'
                      }}
                    >
                      <span style={{fontSize: '16px'}}>🔇</span>
                    </div>
                    <div>
                      <div className="text-white mb-0" style={{fontSize: '13px', fontWeight: '700'}}>0dB</div>
                      <small style={{color: '#00d4ff', fontSize: '11px', fontWeight: '500'}}>SILENCIOSO</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div 
                  className="p-3 rounded-3 h-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 107, 122, 0.1) 0%, rgba(255, 107, 122, 0.05) 100%)',
                    border: '1px solid rgba(255, 107, 122, 0.2)',
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 122, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-2"
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #ff6b7a 0%, #ff4757 100%)'
                      }}
                    >
                      <span style={{fontSize: '16px'}}>⚙️</span>
                    </div>
                    <div>
                      <div className="text-white mb-0" style={{fontSize: '13px', fontWeight: '700'}}>ZERO</div>
                      <small style={{color: '#ff6b7a', fontSize: '11px', fontWeight: '500'}}>MANTENIMIENTO</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div 
                  className="p-3 rounded-3 h-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 165, 2, 0.1) 0%, rgba(255, 165, 2, 0.05) 100%)',
                    border: '1px solid rgba(255, 165, 2, 0.2)',
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 165, 2, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-2"
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, #ffa502 0%, #ff6348 100%)'
                      }}
                    >
                      <span style={{fontSize: '16px'}}>📱</span>
                    </div>
                    <div>
                      <div className="text-white mb-0" style={{fontSize: '13px', fontWeight: '700'}}>100%</div>
                      <small style={{color: '#ffa502', fontSize: '11px', fontWeight: '500'}}>PORTÁTIL</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            {/* Premium Trust Indicators */}
            <div className="mt-5">
              <div 
                className="d-inline-flex align-items-center px-3 py-2 mb-3 rounded-pill"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="me-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{color: '#ffc107', fontSize: '14px'}}>⭐</span>
                  ))}
                </div>
                <small style={{color: 'rgba(255, 255, 255, 0.8)', fontWeight: '500'}}>
                  Más de 500 clientes satisfechos en Puerto Rico
                </small>
              </div>
              
              <div className="d-flex gap-6 flex-wrap">
                <div className="text-center">
                  <div 
                    className="fw-bold mb-1"
                    style={{
                      fontSize: '24px',
                      background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '800'
                    }}
                  >
                    500+
                  </div>
                  <small style={{color: 'rgba(255, 255, 255, 0.7)', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px'}}>
                    INSTALACIONES
                  </small>
                </div>
                <div className="text-center">
                  <div 
                    className="fw-bold mb-1"
                    style={{
                      fontSize: '24px',
                      background: 'linear-gradient(135deg, #ff6b7a 0%, #ff4757 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '800'
                    }}
                  >
                    7 AÑOS
                  </div>
                  <small style={{color: 'rgba(255, 255, 255, 0.7)', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px'}}>
                    GARANTÍA
                  </small>
                </div>
                <div className="text-center">
                  <div 
                    className="fw-bold mb-1"
                    style={{
                      fontSize: '24px',
                      background: 'linear-gradient(135deg, #ffa502 0%, #ff6348 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '800'
                    }}
                  >
                    24/7
                  </div>
                  <small style={{color: 'rgba(255, 255, 255, 0.7)', fontWeight: '500', fontSize: '12px', letterSpacing: '0.5px'}}>
                    SOPORTE
                  </small>
                </div>
              </div>
            </div>
          </div>
          
          {/* Elegant Lead Capture Form */}
          <div className="col-lg-6 col-xl-6 d-none d-lg-block">
            <div className="d-flex justify-content-end align-items-center h-100">
              <div 
                className="card border-0 shadow-lg"
                style={{
                  background: 'rgba(19, 29, 59, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  width: '350px',
                  maxWidth: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <h5 
                      className="fw-bold mb-2"
                      style={{
                        background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Rubik, sans-serif',
                        fontSize: '18px'
                      }}
                    >
                      Cotización Gratuita
                    </h5>
                    <p style={{color: 'rgba(255, 215, 0, 0.8)', fontSize: '13px'}} className="mb-0">
                      Obtén tu propuesta personalizada
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre completo *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: '10px',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          padding: '12px 16px',
                          fontSize: '14px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffd700',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#b4fe00';
                          e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(180, 254, 0, 0.25)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Teléfono *"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: '10px',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          padding: '12px 16px',
                          fontSize: '14px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffd700',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#b4fe00';
                          e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(180, 254, 0, 0.25)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email (opcional)"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          borderRadius: '10px',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          padding: '12px 16px',
                          fontSize: '14px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffd700',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#b4fe00';
                          e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(180, 254, 0, 0.25)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pueblo (opcional)"
                        name="town"
                        value={formData.town || ''}
                        onChange={handleChange}
                        style={{
                          borderRadius: '10px',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          padding: '12px 16px',
                          fontSize: '14px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffd700',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#b4fe00';
                          e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(180, 254, 0, 0.25)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    </div>

                    <div className="mb-4">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Comentarios adicionales (opcional)"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          borderRadius: '10px',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          padding: '12px 16px',
                          fontSize: '14px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffd700',
                          resize: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#b4fe00';
                          e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(180, 254, 0, 0.25)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 fw-bold border-0"
                      style={{
                        background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                        color: '#131d3b',
                        borderRadius: '12px',
                        padding: '12px',
                        fontSize: '15px',
                        letterSpacing: '0.3px',
                        boxShadow: '0 4px 15px rgba(180, 254, 0, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(180, 254, 0, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(180, 254, 0, 0.3)';
                      }}
                    >
                      Solicitar Cotización
                    </button>

                    <div className="text-center mt-3">
                      <small style={{color: 'rgba(255, 215, 0, 0.7)', fontSize: '11px'}}>
                        ✓ Respuesta en 24 horas • Sin compromiso
                      </small>
                    </div>
                  </form>

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3" style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)'}}>
                    <div className="d-grid gap-2">
                      <a 
                        href="tel:787-233-9002"
                        className="btn fw-bold text-decoration-none border-0"
                        style={{
                          background: 'linear-gradient(135deg, #ff4757 0%, #ff6b7a 100%)',
                          color: 'white',
                          borderRadius: '10px',
                          padding: '10px',
                          fontSize: '14px',
                          letterSpacing: '0.3px',
                          boxShadow: '0 3px 12px rgba(255, 71, 87, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 71, 87, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 3px 12px rgba(255, 71, 87, 0.3)';
                        }}
                      >
                        📞 Llamar Ahora: 787-233-9002
                      </a>
                      
                      <a 
                        href="https://wa.me/17875152632"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn fw-bold text-decoration-none border-2"
                        style={{
                          borderColor: '#25D366',
                          color: '#25D366',
                          backgroundColor: 'rgba(37, 211, 102, 0.1)',
                          borderRadius: '10px',
                          padding: '10px',
                          fontSize: '14px',
                          letterSpacing: '0.3px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = '#25D366';
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.3)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.1)';
                          e.currentTarget.style.color = '#25D366';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        💬 Chat con Servicio al Cliente
                      </a>
                    </div>
                    
                    <div className="text-center mt-3">
                      <small style={{color: 'rgba(255, 215, 0, 0.7)', fontSize: '10px'}}>
                        Atención inmediata disponible
                      </small>
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

export default Hero;