'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/Chat/ChatWidget';
import AdminWidget from '@/components/AdminWidget';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: '',
    message: '',
    preferredContact: 'phone',
    batteryInterest: '',
    urgency: 'normal'
  });

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
      preferredContact: 'phone',
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
      description: 'Lunes a Viernes: 8:00 AM - 6:00 PM\nSábados: 9:00 AM - 2:00 PM',
      action: 'tel:+1787-XXX-XXXX',
      actionText: '(787) XXX-XXXX'
    },
    {
      icon: '📧',
      title: 'Email',
      description: 'Respuesta garantizada en 24 horas\nSoporte técnico y ventas',
      action: 'mailto:info@solticeenergy.com',
      actionText: 'info@solticeenergy.com'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Chat directo con nuestros expertos\nRespuesta inmediata',
      action: 'https://wa.me/1787XXXXXXX',
      actionText: 'Chatear Ahora'
    },
    {
      icon: '📍',
      title: 'Visítanos',
      description: 'Centro de experiencia y showroom\nVe nuestros productos en acción',
      action: 'https://maps.google.com',
      actionText: 'Ver Ubicación'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="position-relative overflow-hidden"
          style={{
            minHeight: '60vh',
            paddingTop: '120px',
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
          {/* Background pattern */}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, var(--emerald-500) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, var(--sky-500) 0%, transparent 50%)
              `
            }}
          />
          
          <div className="container position-relative" style={{ zIndex: 10 }}>
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h1 
                  className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
                  style={{
                    lineHeight: '1.1',
                    color: '#ffffff'
                  }}
                >
                  <span style={{ color: '#4b5563', fontWeight: '900' }}>CONTACTA</span>{' '}
                  <span style={{ color: '#b4fe00', fontWeight: '900' }}>CON NOSOTROS</span>
                </h1>
                <p 
                  className="mb-0 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light"
                  style={{
                    color: 'var(--slate-300)',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}
                >
                  <span style={{ fontWeight: '700' }}>Estamos aquí para ayudarte</span>{' '}
                  <span style={{ color: '#ffffff', fontWeight: '700' }}>
                    a encontrar la solución energética perfecta
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section 
          className="position-relative overflow-hidden"
          style={{
            padding: '80px 0',
            background: `
              linear-gradient(135deg, 
                var(--slate-800) 0%, 
                var(--slate-900) 50%,
                var(--slate-800) 100%
              )
            `
          }}
        >
          <div className="container">
            <div className="text-center mb-5">
              <h2 
                className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
                style={{
                  color: '#ffffff'
                }}
              >
                Múltiples formas de{' '}
                <span style={{ color: '#b4fe00' }}>conectar</span>
              </h2>
              <p 
                className="text-base sm:text-lg leading-relaxed font-medium"
                style={{
                  color: 'var(--slate-300)',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                Elige el método de contacto que más te convenga.{' '}
                <span style={{ color: '#ffffff', fontWeight: '600' }}>
                  Estamos disponibles cuando nos necesites.
                </span>
              </p>
            </div>

            <div className="row g-4 mb-5">
              {contactMethods.map((method, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div 
                    className="card-modern h-100 p-4 text-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="mb-3">
                      <div 
                        className="mx-auto d-flex align-items-center justify-content-center"
                        style={{
                          width: '60px',
                          height: '60px',
                          background: 'linear-gradient(135deg, #b4fe00 0%, rgba(180, 254, 0, 0.7) 100%)',
                          borderRadius: '16px',
                          fontSize: '24px'
                        }}
                      >
                        {method.icon}
                      </div>
                    </div>
                    
                    <h5 
                      className="mb-3 text-lg font-bold tracking-tight"
                      style={{
                        color: '#ffffff'
                      }}
                    >
                      {method.title}
                    </h5>
                    
                    <p 
                      className="mb-3 text-sm leading-relaxed font-light"
                      style={{
                        color: 'var(--slate-300)',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {method.description}
                    </p>
                    
                    <a 
                      href={method.action}
                      className="btn btn-modern gradient-primary w-100"
                      style={{
                        color: '#000000',
                        padding: '10px',
                        fontSize: '14px',
                        fontWeight: '600',
                        textDecoration: 'none'
                      }}
                    >
                      {method.actionText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section 
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
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div 
                  className="card-modern p-5"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="text-center mb-4">
                    <h3 
                      className="mb-3 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight"
                      style={{
                        color: '#ffffff'
                      }}
                    >
                      Solicita tu{' '}
                      <span style={{ color: '#b4fe00' }}>Consulta Personalizada</span>
                    </h3>
                    <p 
                      className="text-sm sm:text-base leading-relaxed font-medium"
                      style={{
                        color: 'var(--slate-300)'
                      }}
                    >
                      Completa este formulario y nuestros expertos se pondrán en contacto contigo{' '}
                      <span style={{ color: '#ffffff', fontWeight: '600' }}>
                        para diseñar la solución energética perfecta
                      </span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* Required Fields */}
                      <div className="col-md-6">
                        <label 
                          htmlFor="name" 
                          className="form-label text-sm font-semibold tracking-wide"
                          style={{ color: '#ffffff' }}
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
                          className="form-label text-sm font-semibold tracking-wide"
                          style={{ color: '#ffffff' }}
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
                          className="text-sm font-medium tracking-wide"
                          style={{ color: 'var(--slate-300)' }}
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
                          htmlFor="company" 
                          className="form-label"
                          className="text-sm font-medium tracking-wide"
                          style={{ color: 'var(--slate-300)' }}
                        >
                          Empresa/Negocio (opcional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="form-control"
                          value={formData.company}
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
                          className="text-sm font-medium tracking-wide"
                          style={{ color: 'var(--slate-300)' }}
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
                          className="text-sm font-medium tracking-wide"
                          style={{ color: 'var(--slate-300)' }}
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
                          <option value="multiple" style={{ background: 'var(--slate-800)', color: 'white' }}>
                            Múltiples baterías
                          </option>
                          <option value="unsure" style={{ background: 'var(--slate-800)', color: 'white' }}>
                            No estoy seguro
                          </option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label 
                          htmlFor="preferredContact" 
                          className="form-label"
                          className="text-sm font-medium tracking-wide"
                          style={{ color: 'var(--slate-300)' }}
                        >
                          Método de Contacto Preferido
                        </label>
                        <div className="d-flex gap-3 flex-wrap">
                          {['phone', 'email', 'whatsapp'].map((method) => (
                            <div key={method} className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="preferredContact"
                                id={method}
                                value={method}
                                checked={formData.preferredContact === method}
                                onChange={handleChange}
                                style={{
                                  backgroundColor: formData.preferredContact === method ? '#b4fe00' : 'rgba(255, 255, 255, 0.1)',
                                  borderColor: '#b4fe00'
                                }}
                              />
                              <label 
                                className="form-check-label" 
                                htmlFor={method}
                                style={{ color: 'var(--slate-300)', fontSize: '14px', marginLeft: '0.5rem' }}
                              >
                                {method === 'phone' ? 'Teléfono' : method === 'email' ? 'Email' : 'WhatsApp'}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-12">
                        <label 
                          htmlFor="urgency" 
                          className="form-label"
                          className="text-sm font-medium tracking-wide"
                          style={{ color: 'var(--slate-300)' }}
                        >
                          Urgencia de la Consulta
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
                          className="text-sm font-medium tracking-wide"
                          style={{ color: 'var(--slate-300)' }}
                        >
                          Mensaje Adicional (opcional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Cuéntanos sobre tu situación actual, necesidades específicas, o cualquier pregunta que tengas..."
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
                          className="btn btn-modern gradient-primary px-5 py-3"
                          style={{
                            color: '#000000',
                            fontSize: '16px',
                            fontWeight: '600',
                            minWidth: '200px'
                          }}
                        >
                          Enviar Consulta
                        </button>
                        
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
          </div>
        </section>

        {/* Additional Info Section */}
        <section 
          className="position-relative overflow-hidden"
          style={{
            padding: '80px 0',
            background: `
              linear-gradient(135deg, 
                var(--slate-800) 0%, 
                var(--slate-900) 50%,
                var(--slate-800) 100%
              )
            `
          }}
        >
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <div 
                  className="card-modern h-100 p-4 text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h5 
                    className="mb-3 text-lg font-bold tracking-tight"
                    style={{
                      color: '#b4fe00'
                    }}
                  >
                    🚀 Respuesta Rápida
                  </h5>
                  <p 
                    className="text-sm leading-relaxed font-light"
                    style={{
                      color: 'var(--slate-300)'
                    }}
                  >
                    Nuestro equipo se compromete a responder todas las consultas en menos de 24 horas, 
                    garantizando atención personalizada y profesional.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div 
                  className="card-modern h-100 p-4 text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h5 
                    className="mb-3 text-lg font-bold tracking-tight"
                    style={{
                      color: '#b4fe00'
                    }}
                  >
                    📋 Consulta Gratuita
                  </h5>
                  <p 
                    className="text-sm leading-relaxed font-light"
                    style={{
                      color: 'var(--slate-300)'
                    }}
                  >
                    Evaluación completa de tus necesidades energéticas sin costo alguno. 
                    Diseñamos la solución perfecta para tu hogar o negocio.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div 
                  className="card-modern h-100 p-4 text-center"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h5 
                    className="mb-3 text-lg font-bold tracking-tight"
                    style={{
                      color: '#b4fe00'
                    }}
                  >
                    🛡️ Sin Compromiso
                  </h5>
                  <p 
                    className="text-sm leading-relaxed font-light"
                    style={{
                      color: 'var(--slate-300)'
                    }}
                  >
                    Recibe información detallada y asesoría experta sin presión de compra. 
                    Toma la decisión que mejor convenga a tu situación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
      <AdminWidget />
    </>
  );
};

export default ContactPage;