'use client';

import { useState } from 'react';

const Products = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', product: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const products = [
    {
      name: 'Sistema Solar Hogar',
      price: 'Desde $2,999',
      features: ['Batería de litio 3000W', 'Panel solar de 400W', 'Inversor puro sinusoidal', 'Instalación incluida'],
      badge: 'Residencial',
      highlight: true
    },
    {
      name: 'Sistema Solar Comercial',
      price: 'Desde $8,999',
      features: ['Batería de litio 8000W', 'Múltiples paneles solares', 'Sistema de backup automático', 'Mantenimiento incluido'],
      badge: 'Comercial',
      highlight: false
    },
    {
      name: 'Batería Portátil Solar',
      price: 'Desde $899',
      features: ['4,000 ciclos de vida', '0 mantenimiento', '100% silencioso', 'Carga solar + AC'],
      badge: 'Más Popular',
      highlight: true
    }
  ];

  return (
    <section 
      id="productos" 
      className="py-5 position-relative"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Background Pattern */}
      <div className="position-absolute w-100 h-100 top-0 start-0" style={{opacity: 0.03}}>
        <div className="position-absolute" style={{top: '10%', left: '5%', width: '200px', height: '200px', background: 'radial-gradient(circle, #b4fe00 0%, transparent 70%)', borderRadius: '50%'}}></div>
        <div className="position-absolute" style={{top: '40%', right: '10%', width: '150px', height: '150px', background: 'radial-gradient(circle, #b43041 0%, transparent 70%)', borderRadius: '50%'}}></div>
        <div className="position-absolute" style={{bottom: '20%', left: '40%', width: '100px', height: '100px', background: 'radial-gradient(circle, #131d3b 0%, transparent 70%)', borderRadius: '50%'}}></div>
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
            🔋 Productos Premium
          </div>
          <h2 className="display-4 fw-bold mb-4" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>
            Soluciones de <span style={{color: '#b4fe00'}}>Energía Solar</span>
          </h2>
          <p className="lead mb-0" style={{color: '#6c757d', maxWidth: '600px', margin: '0 auto'}}>
            Sistemas diseñados para eliminar los apagones de tu vida para siempre
          </p>
        </div>

        <div className="row g-4 mb-5">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className={`card h-100 shadow-lg border-0 position-relative ${product.highlight ? 'border-warning' : ''}`}
                style={{
                  transform: product.highlight ? 'scale(1.05)' : 'scale(1)',
                  zIndex: product.highlight ? 2 : 1,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: product.highlight 
                    ? 'linear-gradient(135deg, rgba(180, 254, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)'
                    : 'white'
                }}
              >
                {product.highlight && (
                  <div 
                    className="position-absolute top-0 end-0 px-4 py-2 text-white fw-bold"
                    style={{
                      background: 'linear-gradient(135deg, #b4fe00 0%, #b43041 100%)',
                      borderBottomLeftRadius: '15px',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    ⭐ Recomendado
                  </div>
                )}
                
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span 
                      className="badge px-3 py-2 fw-bold"
                      style={{
                        backgroundColor: product.highlight ? '#b4fe00' : 'rgba(180, 254, 0, 0.1)', 
                        color: product.highlight ? '#131d3b' : '#b4fe00',
                        borderRadius: '10px',
                        fontSize: '12px'
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>
                  
                  <h4 className="card-title fw-bold mb-3" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>
                    {product.name}
                  </h4>
                  
                  <div className="mb-4">
                    <h3 className="fw-bold mb-1" style={{color: '#b43041', fontFamily: 'Rubik, sans-serif'}}>
                      {product.price}
                    </h3>
                    <small className="text-muted">Instalación incluida</small>
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="mb-3 d-flex align-items-start">
                        <div 
                          className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                          style={{width: '20px', height: '20px', backgroundColor: '#b4fe00'}}
                        >
                          <span className="text-white" style={{fontSize: '10px', fontWeight: 'bold'}}>✓</span>
                        </div>
                        <span className="text-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="card-footer bg-transparent border-0 p-4 pt-0">
                  <button 
                    className="btn btn-professional w-100 fw-bold py-3 border-0 shadow"
                    style={{
                      background: product.highlight 
                        ? 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)'
                        : 'linear-gradient(135deg, #131d3b 0%, #2c3e50 100%)',
                      color: product.highlight ? '#131d3b' : 'white',
                      borderRadius: '15px',
                      fontSize: '16px',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(180, 254, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    }}
                  >
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Capture Form */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div 
              className="card shadow-lg border-0"
              style={{
                borderRadius: '25px',
                background: 'linear-gradient(135deg, rgba(19, 29, 59, 0.95) 0%, rgba(44, 62, 80, 0.95) 100%)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-white mb-3" style={{fontFamily: 'Rubik, sans-serif'}}>
                    🔋 Cotización Personalizada Gratis
                  </h3>
                  <p className="text-white-50 mb-0">
                    Recibe tu propuesta de sistema solar en menos de 24 horas
                  </p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Nombre completo *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(180, 254, 0, 0.3)',
                          color: 'white',
                          borderRadius: '15px'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        placeholder="Teléfono *"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(180, 254, 0, 0.3)',
                          color: 'white',
                          borderRadius: '15px'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email *"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(180, 254, 0, 0.3)',
                          color: 'white',
                          borderRadius: '15px'
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-select form-select-lg"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(180, 254, 0, 0.3)',
                          color: 'white',
                          borderRadius: '15px'
                        }}
                      >
                        <option value="" style={{color: '#131d3b'}}>Producto de interés *</option>
                        <option value="hogar" style={{color: '#131d3b'}}>Sistema Solar Hogar</option>
                        <option value="comercial" style={{color: '#131d3b'}}>Sistema Solar Comercial</option>
                        <option value="portatil" style={{color: '#131d3b'}}>Batería Portátil Solar</option>
                        <option value="consultoria" style={{color: '#131d3b'}}>Consultoría Energética</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Cuéntanos sobre tu consumo energético actual..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          border: '2px solid rgba(180, 254, 0, 0.3)',
                          color: 'white',
                          borderRadius: '15px',
                          resize: 'none'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-professional btn-lg px-5 py-3 border-0 shadow-lg fw-bold"
                      style={{
                        background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                        color: '#131d3b',
                        borderRadius: '15px',
                        fontSize: '18px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        minWidth: '300px'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(180, 254, 0, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
                      }}
                    >
                      💡 Obtener Cotización Gratis
                    </button>
                  </div>
                  
                  <div className="text-center mt-3">
                    <small className="text-white-50">
                      ✅ Sin compromiso • ✅ Respuesta en 24 horas • ✅ 100% confidencial
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center">
          <div 
            className="mb-4 px-4 py-2 d-inline-block rounded-pill"
            style={{
              background: 'rgba(180, 65, 65, 0.1)',
              border: '2px solid #b43041',
              color: '#b43041',
              fontSize: '14px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            🛠️ Servicios Incluidos
          </div>
          
          <h3 className="fw-bold mb-5" style={{color: '#131d3b', fontFamily: 'Rubik, sans-serif'}}>
            ¿Por Qué Elegir <span style={{color: '#b4fe00'}}>Soltice Energy</span>?
          </h3>
          
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div 
                className="card h-100 border-0 shadow text-center"
                style={{
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(180, 254, 0, 0.05) 0%, white 100%)'
                }}
              >
                <div className="card-body p-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #b4fe00 0%, #a8e600 100%)'}}
                  >
                    <span className="text-white fw-bold" style={{fontSize: '30px'}}>🔧</span>
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#131d3b'}}>Instalación Profesional</h5>
                  <p className="text-muted mb-0">Equipo certificado instala tu sistema en un solo día</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div 
                className="card h-100 border-0 shadow text-center"
                style={{
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(180, 65, 65, 0.05) 0%, white 100%)'
                }}
              >
                <div className="card-body p-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #b43041 0%, #a02d38 100%)'}}
                  >
                    <span className="text-white fw-bold" style={{fontSize: '30px'}}>🛡️</span>
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#131d3b'}}>Garantía Extendida</h5>
                  <p className="text-muted mb-0">Hasta 7 años de garantía en todos nuestros productos</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div 
                className="card h-100 border-0 shadow text-center"
                style={{
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(19, 29, 59, 0.05) 0%, white 100%)'
                }}
              >
                <div className="card-body p-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #131d3b 0%, #2c3e50 100%)'}}
                  >
                    <span className="text-white fw-bold" style={{fontSize: '30px'}}>📞</span>
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#131d3b'}}>Soporte 24/7</h5>
                  <p className="text-muted mb-0">Asistencia técnica disponible cuando la necesites</p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div 
                className="card h-100 border-0 shadow text-center"
                style={{
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, white 100%)'
                }}
              >
                <div className="card-body p-4">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)'}}
                  >
                    <span className="text-white fw-bold" style={{fontSize: '30px'}}>⚡</span>
                  </div>
                  <h5 className="fw-bold mb-3" style={{color: '#131d3b'}}>Instalación Rápida</h5>
                  <p className="text-muted mb-0">Sistema funcionando el mismo día de la instalación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;