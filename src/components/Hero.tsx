'use client';

import { useState } from 'react';
import { useChatContext } from '@/contexts/ChatContext';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    town: '',
    message: ''
  });
  const { initializeChat } = useChatContext();

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

  const stats = [
    { number: '500+', label: 'Clientes', icon: '👥' },
    { number: '4,000+', label: 'Ciclos', icon: '🔄' },
    { number: '0dB', label: 'Silencioso', icon: '🔇' },
    { number: '24/7', label: 'Soporte', icon: '💬' }
  ];

  const features = [
    { title: 'Cero Mantenimiento', icon: '⚙️', color: 'emerald' },
    { title: '100% Portátil', icon: '📱', color: 'sky' },
    { title: 'Garantía 7 Años', icon: '🛡️', color: 'amber' }
  ];

  return (
    <section 
      id="inicio" 
      className="position-relative overflow-hidden" 
      style={{
        minHeight: '100vh',
        paddingTop: '100px',
        paddingBottom: '80px',
        background: `
          linear-gradient(135deg, 
            var(--slate-900) 0%, 
            var(--slate-800) 50%,
            var(--slate-900) 100%
          )
        `
      }}
    >
      {/* Subtle background pattern */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, var(--emerald-500) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, var(--sky-500) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Floating elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
            top: '20%',
            right: '10%',
            animation: 'subtleFloat 8s ease-in-out infinite'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
            bottom: '30%',
            left: '5%',
            animation: 'subtleFloat 6s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="row align-items-center min-vh-75">
          {/* Main Content */}
          <div className="col-lg-7 col-xl-6 text-white mb-5 mb-lg-0">
            {/* Main Heading */}
            <h1 
              className="mb-4"
              style={{
                fontSize: 'clamp(3rem, 7vw, 5rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                fontFamily: 'Space Grotesk, system-ui, sans-serif',
                letterSpacing: '-0.03em'
              }}
            >
              <span style={{ color: '#4b5563', fontWeight: '900' }}>SOLTICE</span>{' '}
              <span style={{ color: '#b4fe00', fontWeight: '900' }}>ENERGY</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="mb-5"
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                color: 'var(--slate-300)',
                lineHeight: '1.6',
                fontWeight: '600',
                maxWidth: '600px'
              }}
            >
              <span style={{ fontWeight: '700' }}>Tu aliado en</span>{' '}
              <span 
                style={{
                  color: '#b4fe00',
                  fontWeight: '700'
                }}
              >
                energía confiable.
              </span>
              {' '}<span style={{ fontWeight: '700' }}>Protegemos lo que más importa con</span>{' '}
              <span style={{ color: '#ffffff', fontWeight: '700' }}>
                soluciones solares diseñadas para tu comodidad y paz mental.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
              <a 
                href="/productos"
                className="btn btn-modern gradient-primary px-4 py-3"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  minWidth: '200px',
                  color: '#000000'
                }}
              >
                Ver Productos
              </a>
              <a 
                href="#contacto"
                className="btn btn-modern text-white px-4 py-3"
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  minWidth: '200px'
                }}
              >
                Consulta Gratis
              </a>
            </div>

            {/* Features */}
            <div className="row g-3 mb-5">
              {features.map((feature, index) => (
                <div key={index} className="col-md-4">
                  <div 
                    className="d-flex align-items-center p-3 rounded-3"
                    style={{
                      background: `rgba(${
                        feature.color === 'emerald' ? '16, 185, 129' :
                        feature.color === 'sky' ? '14, 165, 233' :
                        '245, 158, 11'
                      }, 0.1)`,
                      border: `1px solid rgba(${
                        feature.color === 'emerald' ? '16, 185, 129' :
                        feature.color === 'sky' ? '14, 165, 233' :
                        '245, 158, 11'
                      }, 0.2)`
                    }}
                  >
                    <span className="me-3" style={{ fontSize: '24px' }}>
                      {feature.icon}
                    </span>
                    <span 
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '500',
                        fontSize: '14px'
                      }}
                    >
                      {feature.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="row g-4">
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-lg-3">
                  <div className="text-center">
                    <div 
                      className="mb-1"
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        background: 'linear-gradient(135deg, var(--emerald-500) 0%, var(--sky-500) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {stat.number}
                    </div>
                    <small 
                      style={{
                        color: 'var(--slate-400)',
                        fontSize: '12px',
                        fontWeight: '500',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {stat.label.toUpperCase()}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image and Form */}
          <div className="col-lg-5 col-xl-6">
            <div className="row g-4 align-items-center">
              {/* Hero Image */}
              <div className="col-12 col-md-6 col-lg-12">
                <div className="position-relative">
                  <img 
                    src="/heropic.png" 
                    alt="Soltice Energy Products" 
                    className="img-fluid rounded-4"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '400px',
                      margin: '0 auto',
                      display: 'block',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}
                  />
                  
                  {/* Floating card */}
                  <div 
                    className="position-absolute card-modern p-3"
                    style={{
                      bottom: '20px',
                      right: '20px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      minWidth: '150px'
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <span className="me-2" style={{ fontSize: '20px' }}>⭐</span>
                      <div>
                        <div 
                          style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: 'var(--slate-900)'
                          }}
                        >
                          4.9/5
                        </div>
                        <small style={{ color: 'var(--slate-600)', fontSize: '12px' }}>
                          500+ reseñas
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-12 col-md-6 col-lg-12">
                <div 
                  className="card-modern p-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="text-center mb-3">
                    <h6 
                      className="mb-1"
                      style={{
                        color: '#ffffff',
                        fontWeight: '600',
                        fontSize: '16px'
                      }}
                    >
                      Consulta Gratuita
                    </h6>
                    <p 
                      style={{
                        color: 'var(--slate-400)',
                        fontSize: '14px',
                        margin: 0
                      }}
                    >
                      Respuesta en 24 horas
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre completo"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          color: 'white',
                          fontSize: '14px'
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          color: 'white',
                          fontSize: '14px'
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
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          color: 'white',
                          fontSize: '14px'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-modern gradient-primary w-100 py-3"
                      style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#000000'
                      }}
                    >
                      Solicitar Consulta
                    </button>

                    <div className="text-center mt-3">
                      <small style={{ color: 'var(--slate-400)', fontSize: '12px' }}>
                        ✓ Sin compromiso • ✓ Asesoría personalizada
                      </small>
                    </div>
                  </form>
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