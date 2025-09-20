'use client';

import { useState } from 'react';
import { useChatContext } from '@/contexts/ChatContext';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: '',
    message: '',
    batteryInterest: '',
    urgency: 'normal'
  });

  const { initializeChat } = useChatContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      location: '',
      message: '',
      batteryInterest: '',
      urgency: 'normal'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Llámanos',
      description: 'Respuesta inmediata',
      action: 'tel:+1787-XXX-XXXX',
      actionText: '(787) XXX-XXXX'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Chat directo',
      action: 'https://wa.me/1787XXXXXXX',
      actionText: 'Chatear'
    },
    {
      icon: '📧',
      title: 'Email',
      description: '24h respuesta',
      action: 'mailto:info@solticeenergy.com',
      actionText: 'Escribir'
    }
  ];

  const testimonials = [
    {
      name: "María González",
      location: "San Juan, PR",
      rating: 5,
      text: "Desde que instalé mi batería Soltice Energy, no he tenido que preocuparme por los apagones. Es silenciosa y muy fácil de usar.",
      product: "Batería 3600W"
    },
    {
      name: "Carlos Rodríguez",
      location: "Bayamón, PR",
      rating: 5,
      text: "Excelente inversión. Mi negocio ya no se ve afectado por los cortes de luz. Muy recomendado.",
      product: "Batería 6000W"
    },
    {
      name: "Ana Martínez",
      location: "Caguas, PR",
      rating: 5,
      text: "El servicio al cliente es excepcional. Me ayudaron a elegir la batería perfecta para mi apartamento.",
      product: "Batería 2500W"
    },
    {
      name: "José Rivera",
      location: "Ponce, PR",
      rating: 5,
      text: "Sin ruido, sin gasolina, sin problemas. Definitivamente la mejor decisión energética que he tomado.",
      product: "Batería 3600W"
    }
  ];

  return (
    <section 
      id="contacto"
      className="position-relative overflow-hidden"
      style={{
        padding: '80px 0',
        background: `
          linear-gradient(135deg, 
            var(--slate-900) 0%, 
            var(--slate-800) 50%,
            var(--slate-900) 100%
          )
        `
      }}
    >
      {/* Same background pattern as other sections */}
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
            top: '10%',
            right: '20%',
            animation: 'subtleFloat 8s ease-in-out infinite'
          }}
        />
        <div 
          className="position-absolute rounded-circle"
          style={{
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
            bottom: '20%',
            left: '15%',
            animation: 'subtleFloat 6s ease-in-out infinite reverse'
          }}
        />
      </div>

      <div className="container position-relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 
            className="mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              fontFamily: 'Space Grotesk, system-ui, sans-serif',
              letterSpacing: '-0.02em',
              color: '#ffffff'
            }}
          >
            ¿Listo para tu{' '}
            <span style={{ color: '#b4fe00', fontWeight: '800' }}>
              independencia energética?
            </span>
          </h2>
          <p 
            className="mb-0"
            style={{ 
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              color: 'var(--slate-300)',
              fontWeight: '500',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            <span style={{ fontWeight: '700' }}>Contáctanos hoy</span>{' '}
            <span style={{ color: '#ffffff', fontWeight: '600' }}>
              y descubre cómo nuestras baterías solares pueden transformar tu experiencia energética
            </span>
          </p>
        </div>

        {/* Contact Methods */}
        <div className="row g-4 mb-5 justify-content-center">
          {contactMethods.map((method, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <a 
                href={method.action}
                className="text-decoration-none d-block"
              >
                <div 
                  className="card-modern h-100 p-3 text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = '#b4fe00';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div className="mb-2">
                    <div 
                      className="mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #b4fe00 0%, rgba(180, 254, 0, 0.7) 100%)',
                        borderRadius: '12px',
                        fontSize: '20px'
                      }}
                    >
                      {method.icon}
                    </div>
                  </div>
                  
                  <h6 
                    className="mb-1"
                    style={{
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: '16px'
                    }}
                  >
                    {method.title}
                  </h6>
                  
                  <p 
                    className="mb-2"
                    style={{
                      color: 'var(--slate-400)',
                      fontSize: '12px'
                    }}
                  >
                    {method.description}
                  </p>
                  
                  <small 
                    style={{
                      color: '#b4fe00',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}
                  >
                    {method.actionText}
                  </small>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Main Contact Form */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div 
              className="card-modern p-4"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="text-center mb-4">
                <h3 
                  className="mb-3"
                  style={{
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '24px',
                    fontFamily: 'Space Grotesk, system-ui, sans-serif'
                  }}
                >
                  Solicita tu{' '}
                  <span style={{ color: '#b4fe00' }}>Consulta Personalizada</span>
                </h3>
                <p 
                  style={{
                    color: 'var(--slate-300)',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}
                >
                  Completa este formulario y{' '}
                  <span style={{ color: '#ffffff', fontWeight: '600' }}>
                    nuestros expertos diseñarán la solución perfecta para ti
                  </span>
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Required Fields */}
                  <div className="col-md-6">
                    <label 
                      htmlFor="name" 
                      className="form-label"
                      style={{ color: '#ffffff', fontWeight: '600', fontSize: '14px' }}
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
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

                  <div className="col-md-6">
                    <label 
                      htmlFor="phone" 
                      className="form-label"
                      style={{ color: '#ffffff', fontWeight: '600', fontSize: '14px' }}
                    >
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
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

                  {/* Optional Fields */}
                  <div className="col-md-6">
                    <label 
                      htmlFor="email" 
                      className="form-label"
                      style={{ color: 'var(--slate-300)', fontWeight: '500', fontSize: '14px' }}
                    >
                      Email (opcional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
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

                  <div className="col-md-6">
                    <label 
                      htmlFor="location" 
                      className="form-label"
                      style={{ color: 'var(--slate-300)', fontWeight: '500', fontSize: '14px' }}
                    >
                      Ubicación/Ciudad
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="form-control"
                      value={formData.location}
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

                  <div className="col-md-6">
                    <label 
                      htmlFor="batteryInterest" 
                      className="form-label"
                      style={{ color: 'var(--slate-300)', fontWeight: '500', fontSize: '14px' }}
                    >
                      Batería de Interés
                    </label>
                    <select
                      id="batteryInterest"
                      name="batteryInterest"
                      className="form-control"
                      value={formData.batteryInterest}
                      onChange={handleChange}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        color: 'white',
                        fontSize: '14px'
                      }}
                    >
                      <option value="" style={{ background: 'var(--slate-800)', color: 'white' }}>
                        Seleccionar...
                      </option>
                      <option value="2500W" style={{ background: 'var(--slate-800)', color: 'white' }}>
                        Batería 2500W - Residencial
                      </option>
                      <option value="3600W" style={{ background: 'var(--slate-800)', color: 'white' }}>
                        Batería 3600W - Hogar/Negocio
                      </option>
                      <option value="6000W" style={{ background: 'var(--slate-800)', color: 'white' }}>
                        Batería 6000W - Comercial/Industrial
                      </option>
                      <option value="unsure" style={{ background: 'var(--slate-800)', color: 'white' }}>
                        No estoy seguro
                      </option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label 
                      htmlFor="urgency" 
                      className="form-label"
                      style={{ color: 'var(--slate-300)', fontWeight: '500', fontSize: '14px' }}
                    >
                      Urgencia
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      className="form-control"
                      value={formData.urgency}
                      onChange={handleChange}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        color: 'white',
                        fontSize: '14px'
                      }}
                    >
                      <option value="normal" style={{ background: 'var(--slate-800)', color: 'white' }}>
                        Normal (24-48 horas)
                      </option>
                      <option value="urgent" style={{ background: 'var(--slate-800)', color: 'white' }}>
                        Urgente (mismo día)
                      </option>
                      <option value="planning" style={{ background: 'var(--slate-800)', color: 'white' }}>
                        Planificando (próximas semanas)
                      </option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label 
                      htmlFor="message" 
                      className="form-label"
                      style={{ color: 'var(--slate-300)', fontWeight: '500', fontSize: '14px' }}
                    >
                      Mensaje Adicional (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu situación actual o necesidades específicas..."
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        color: 'white',
                        fontSize: '14px',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-modern gradient-primary px-5 py-3 me-3"
                      style={{
                        color: '#000000',
                        fontSize: '16px',
                        fontWeight: '600',
                        minWidth: '200px'
                      }}
                    >
                      Enviar Consulta
                    </button>
                    
                    <a 
                      href="/contacto"
                      className="btn btn-modern text-white px-4 py-3"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        fontSize: '15px',
                        fontWeight: '600',
                        textDecoration: 'none'
                      }}
                    >
                      Más Opciones
                    </a>
                    
                    <div className="mt-3">
                      <small style={{ color: 'var(--slate-400)', fontSize: '12px' }}>
                        ✓ Respuesta garantizada • ✓ Sin compromiso • ✓ Consulta gratuita
                      </small>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Client Reviews Section */}
        <div className="text-center mb-4">
          <h4 
            className="mb-3"
            style={{
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '24px',
              fontFamily: 'Space Grotesk, system-ui, sans-serif'
            }}
          >
            Lo que dicen nuestros{' '}
            <span style={{ color: '#b4fe00' }}>clientes</span>
          </h4>
          <p 
            style={{
              color: 'var(--slate-400)',
              fontSize: '14px'
            }}
          >
            Más de 500 familias confían en Soltice Energy
          </p>
        </div>

        {/* Testimonials Grid - Smaller */}
        <div className="row g-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div 
                className="card-modern h-100 p-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Stars */}
                <div className="mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#b4fe00', fontSize: '14px' }}>⭐</span>
                  ))}
                </div>
                
                {/* Review Text */}
                <blockquote className="mb-3">
                  <p 
                    style={{
                      color: 'var(--slate-300)',
                      fontSize: '13px',
                      lineHeight: '1.5',
                      fontStyle: 'italic'
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                </blockquote>
                
                {/* Customer Info */}
                <div>
                  <p className="mb-1" style={{ color: '#ffffff', fontWeight: '600', fontSize: '14px' }}>
                    {testimonial.name}
                  </p>
                  <p className="mb-0" style={{ color: 'var(--slate-400)', fontSize: '12px' }}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;