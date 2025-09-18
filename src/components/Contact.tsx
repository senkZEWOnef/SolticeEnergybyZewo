'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Te contactaremos dentro de las próximas 24 horas.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contacto" 
      className="py-5 position-relative"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Background Pattern */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{opacity: 0.03}}>
        <div className="position-absolute" style={{top: '15%', right: '5%', width: '250px', height: '250px', background: 'radial-gradient(circle, #b4fe00 0%, transparent 70%)', borderRadius: '50%'}}></div>
        <div className="position-absolute" style={{bottom: '10%', left: '10%', width: '200px', height: '200px', background: 'radial-gradient(circle, #b43041 0%, transparent 70%)', borderRadius: '50%'}}></div>
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
            📞 Contacto Directo
          </div>
          <h2 className="display-4 fw-bold mb-4" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>
            Comienza tu <span style={{color: '#b4fe00'}}>Independencia</span> Energética
          </h2>
          <p className="lead mb-0" style={{color: '#6c757d', maxWidth: '600px', margin: '0 auto'}}>
            Nuestros expertos están listos para diseñar la solución perfecta para ti
          </p>
        </div>

        {/* Contact Methods */}
        <div className="row g-4 mb-5">
          <div className="col-lg-3 col-md-6">
            <a href="tel:787-233-9002" className="text-decoration-none">
              <div 
                className="card text-center shadow-lg border-0 h-100"
                style={{
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(180, 254, 0, 0.05) 0%, white 100%)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(180, 254, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4">
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle shadow"
                      style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #b4fe00 0%, #a8e600 100%)'}}
                    >
                      <span className="text-white" style={{fontSize: '32px'}}>📞</span>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>Llamada Directa</h5>
                  <p className="text-muted mb-3">Habla con nuestros expertos ahora</p>
                  <p className="fw-bold" style={{color: '#b43041', fontSize: '18px'}}>787-233-9002</p>
                  <small className="text-success">✓ Disponible ahora</small>
                </div>
              </div>
            </a>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <a href="https://wa.me/17875152632" className="text-decoration-none">
              <div 
                className="card text-center shadow-lg border-0 h-100"
                style={{
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.05) 0%, white 100%)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(37, 211, 102, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4">
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle shadow"
                      style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)'}}
                    >
                      <span className="text-white" style={{fontSize: '32px'}}>💬</span>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>WhatsApp</h5>
                  <p className="text-muted mb-3">Mensaje instantáneo 24/7</p>
                  <p className="fw-bold" style={{color: '#b43041', fontSize: '18px'}}>787-515-2632</p>
                  <small className="text-success">✓ Respuesta inmediata</small>
                </div>
              </div>
            </a>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <a href="mailto:info@solticeenergypr.org" className="text-decoration-none">
              <div 
                className="card text-center shadow-lg border-0 h-100"
                style={{
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(19, 29, 59, 0.05) 0%, white 100%)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(19, 29, 59, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4">
                  <div className="mb-3">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle shadow"
                      style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #131d3b 0%, #2c3e50 100%)'}}
                    >
                      <span className="text-white" style={{fontSize: '32px'}}>📧</span>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>Email</h5>
                  <p className="text-muted mb-3">Cotización detallada</p>
                  <p className="fw-bold" style={{color: '#b43041', fontSize: '14px'}}>info@solticeenergypr.org</p>
                  <small className="text-success">✓ Respuesta en 24h</small>
                </div>
              </div>
            </a>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div 
              className="card text-center shadow-lg border-0 h-100"
              style={{
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(180, 65, 65, 0.05) 0%, white 100%)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(180, 65, 65, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
            >
              <div className="card-body p-4">
                <div className="mb-3">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle shadow"
                    style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #b43041 0%, #a02d38 100%)'}}
                  >
                    <span className="text-white" style={{fontSize: '32px'}}>📅</span>
                  </div>
                </div>
                <h5 className="fw-bold mb-3" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>Cita Presencial</h5>
                <p className="text-muted mb-3">Evaluación gratuita en tu hogar</p>
                <p className="fw-bold" style={{color: '#b43041', fontSize: '18px'}}>Disponible 7 días</p>
                <small className="text-success">✓ Sin costo ni compromiso</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-8">
            <div 
              className="card shadow-lg border-0"
              style={{
                borderRadius: '25px',
                background: 'linear-gradient(135deg, white 0%, rgba(248, 249, 250, 0.8) 100%)'
              }}
            >
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #b4fe00 0%, #b43041 100%)'}}
                  >
                    <span className="text-white" style={{fontSize: '32px'}}>📝</span>
                  </div>
                  <h3 className="fw-bold mb-2" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>
                    Solicita tu Cotización Personalizada
                  </h3>
                  <p className="text-muted mb-0">Completa el formulario y recibe tu propuesta en 24 horas</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold" style={{color: '#131d3b'}}>Nombre Completo *</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Ej: Juan Pérez"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{
                            borderRadius: '15px',
                            border: '2px solid #e9ecef',
                            fontSize: '16px',
                            padding: '15px 20px'
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold" style={{color: '#131d3b'}}>Teléfono *</label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          placeholder="787-000-0000"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          style={{
                            borderRadius: '15px',
                            border: '2px solid #e9ecef',
                            fontSize: '16px',
                            padding: '15px 20px'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-bold" style={{color: '#131d3b'}}>Email *</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="tu@email.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: '15px',
                        border: '2px solid #e9ecef',
                        fontSize: '16px',
                        padding: '15px 20px'
                      }}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label fw-bold" style={{color: '#131d3b'}}>Servicio de Interés *</label>
                    <select
                      className="form-select form-select-lg"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: '15px',
                        border: '2px solid #e9ecef',
                        fontSize: '16px',
                        padding: '15px 20px'
                      }}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="residencial">Sistema Solar Residencial</option>
                      <option value="comercial">Sistema Solar Comercial</option>
                      <option value="portatil">Batería Portátil Solar</option>
                      <option value="mantenimiento">Mantenimiento y Reparación</option>
                      <option value="consultoria">Consultoría Energética</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{color: '#131d3b'}}>Mensaje (Opcional)</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Cuéntanos sobre tu consumo energético, presupuesto aproximado, o cualquier pregunta que tengas..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        borderRadius: '15px',
                        border: '2px solid #e9ecef',
                        fontSize: '16px',
                        padding: '15px 20px',
                        resize: 'none'
                      }}
                    />
                  </div>
                  
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-professional btn-lg py-4 border-0 shadow-lg fw-bold"
                      style={{
                        background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                        color: '#131d3b',
                        borderRadius: '15px',
                        fontSize: '18px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(180, 254, 0, 0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                      }}
                    >
                      📤 Enviar Solicitud de Cotización
                    </button>
                  </div>
                </form>
                
                <div className="text-center mt-4 pt-4 border-top">
                  <div className="row g-3">
                    <div className="col-4">
                      <div className="d-flex flex-column align-items-center">
                        <span style={{color: '#b4fe00', fontSize: '20px'}}>✅</span>
                        <small className="text-muted fw-medium">Sin Compromiso</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="d-flex flex-column align-items-center">
                        <span style={{color: '#b4fe00', fontSize: '20px'}}>⏰</span>
                        <small className="text-muted fw-medium">Respuesta 24h</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="d-flex flex-column align-items-center">
                        <span style={{color: '#b4fe00', fontSize: '20px'}}>🔒</span>
                        <small className="text-muted fw-medium">100% Confidencial</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Company Info */}
          <div className="col-lg-4">
            <div 
              className="card shadow-lg border-0 mb-4"
              style={{
                borderRadius: '25px',
                background: 'linear-gradient(135deg, white 0%, rgba(248, 249, 250, 0.8) 100%)'
              }}
            >
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #131d3b 0%, #2c3e50 100%)'}}
                  >
                    <span className="text-white" style={{fontSize: '24px'}}>📍</span>
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>Información de Contacto</h5>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <span className="me-3">📍</span>
                    <div>
                      <strong>Ubicación</strong>
                      <div className="text-muted">Puerto Rico</div>
                      <small className="text-muted">Servicio a toda la isla</small>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <span className="me-3">🕒</span>
                    <div>
                      <strong>Horarios</strong>
                      <div className="text-muted">Lun - Sáb: 8:00 AM - 6:00 PM</div>
                      <small className="text-muted">Emergencias 24/7</small>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <span className="me-3">📞</span>
                    <div>
                      <strong>Teléfonos</strong>
                      <div className="text-muted">787-233-9002 | 787-515-2632</div>
                      <small className="text-muted">Llamadas y WhatsApp</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="card border-0 text-white shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #131d3b 0%, rgba(19, 29, 59, 0.95) 50%, #2c3e50 100%)',
                borderRadius: '25px'
              }}
            >
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #b4fe00 0%, #b43041 100%)'}}
                  >
                    <span className="text-white" style={{fontSize: '24px'}}>⭐</span>
                  </div>
                  <h5 className="fw-bold mb-3" style={{fontFamily: 'Rubik, sans-serif'}}>¿Por qué elegir Soltice Energy?</h5>
                </div>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                      style={{width: '25px', height: '25px', background: '#b4fe00'}}
                    >
                      <span className="text-dark fw-bold" style={{fontSize: '12px'}}>✓</span>
                    </div>
                    <span>Más de 500 clientes satisfechos en PR</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                      style={{width: '25px', height: '25px', background: '#b4fe00'}}
                    >
                      <span className="text-dark fw-bold" style={{fontSize: '12px'}}>✓</span>
                    </div>
                    <span>Garantía extendida hasta 7 años</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                      style={{width: '25px', height: '25px', background: '#b4fe00'}}
                    >
                      <span className="text-dark fw-bold" style={{fontSize: '12px'}}>✓</span>
                    </div>
                    <span>Instalación profesional incluida</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                      style={{width: '25px', height: '25px', background: '#b4fe00'}}
                    >
                      <span className="text-dark fw-bold" style={{fontSize: '12px'}}>✓</span>
                    </div>
                    <span>Soporte técnico 24/7</span>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                      style={{width: '25px', height: '25px', background: '#b4fe00'}}
                    >
                      <span className="text-dark fw-bold" style={{fontSize: '12px'}}>✓</span>
                    </div>
                    <span>Financiamiento disponible</span>
                  </li>
                  <li className="mb-0 d-flex align-items-center">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                      style={{width: '25px', height: '25px', background: '#b4fe00'}}
                    >
                      <span className="text-dark fw-bold" style={{fontSize: '12px'}}>✓</span>
                    </div>
                    <span>Evaluación gratuita sin compromiso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;