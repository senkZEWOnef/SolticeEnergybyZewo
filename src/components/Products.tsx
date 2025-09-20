'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  power: string;
  description: string;
  specifications: {
    capacity: string;
    outlets: string[];
    cycles: string;
    chargeTime: string;
    display: string;
    usage: string;
    portability: string;
    maintenance: string;
  };
  tagline: string;
  image: string;
  createdAt: Date;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load products from localStorage or initialize with default products
    const savedProducts = localStorage.getItem('soltice_products');
    
    if (savedProducts) {
      try {
        const parsedProducts = JSON.parse(savedProducts).map((product: any) => ({
          ...product,
          createdAt: new Date(product.createdAt)
        }));
        setProducts(parsedProducts);
      } catch (error) {
        console.error('Error parsing saved products:', error);
        initializeDefaultProducts();
      }
    } else {
      initializeDefaultProducts();
    }
  }, []);

  const initializeDefaultProducts = () => {
    const defaultProducts: Product[] = [
      {
        id: 'solar-2500',
        name: 'Batería Portátil Soltice Energy – 2500 W',
        power: '2500W',
        description: 'La solución ideal para apartamentos, estudios, campers o como respaldo esencial en tu hogar. Esta batería portátil te ofrece energía limpia y silenciosa sin necesidad de gasolina ni mantenimiento. Perfecta para los apagones frecuentes en Puerto Rico.',
        specifications: {
          capacity: '2,048 watts hora (Wh)',
          outlets: ['4 conectores AC 110 / 120V', '2 puertos USB', '2 puertos USB-C'],
          cycles: '3,000',
          chargeTime: '1 hora y 30 minutos',
          display: 'Monitoreo en tiempo real del consumo y carga',
          usage: 'Neveras, microondas, abanicos, televisores, lámparas, lavadoras pequeñas, celulares y más',
          portability: 'No requiere instalación, fácil de transportar',
          maintenance: 'Cero mantenimiento requerido'
        },
        tagline: 'Silenciosa. Eficiente. Siempre lista.',
        image: '/Solar2500-1.png',
        createdAt: new Date()
      },
      {
        id: 'solar-3600',
        name: 'Batería Portátil Soltice Energy – 3600 W',
        power: '3600W',
        description: 'Potente, confiable y silenciosa. Esta batería es ideal para hogares que necesitan más capacidad sin depender de gasolina ni instalaciones complicadas. Mantén tu casa funcionando durante los apagones más largos, con energía limpia y segura.',
        specifications: {
          capacity: '3,072 watts hora (Wh)',
          outlets: [
            '3 conectores AC 110 / 120V',
            '2 conectores para transfer switch de 30 amperes',
            '4 puertos USB',
            '2 puertos USB-C',
            '1 puerto tipo encendedor (12V / 8A)'
          ],
          cycles: '4,000',
          chargeTime: '1 hora y 30 minutos',
          display: 'Monitoreo de consumo y nivel de carga en tiempo real',
          usage: 'Neveras grandes, microondas, televisores, abanicos, lavadoras, laptops, routers, cargadores de celulares y más',
          portability: 'Compacta, fácil de mover, no requiere instalación',
          maintenance: 'Cero mantenimiento requerido'
        },
        tagline: 'Más energía. Más control. Cero ruido.',
        image: '/Solar3600-1.png',
        createdAt: new Date()
      },
      {
        id: 'solar-6000',
        name: 'Batería Portátil Soltice Energy – 6000 W',
        power: '6000W',
        description: 'La opción más potente y versátil de nuestra línea. Esta batería portátil ofrece salida de 110 y 220 voltios, ideal para hogares con equipos de alto consumo. Perfecta para enfrentar apagones prolongados sin ruido, sin gasolina y sin mantenimiento.',
        specifications: {
          capacity: '3,072 watts hora (Wh)',
          outlets: [
            '3 conectores AC 110 / 220V',
            '2 conectores para transfer switch de 30 amperes',
            '4 puertos USB',
            '2 puertos USB-C',
            '1 puerto tipo encendedor (12V / 8A)'
          ],
          cycles: '4,000',
          chargeTime: '1 hora y 30 minutos',
          display: 'Monitoreo preciso de energía y consumo',
          usage: 'Aires acondicionados, calentadores, bombas de agua, estufas eléctricas pequeñas, neveras, microondas, televisores, routers, laptops y más',
          portability: 'Portátil, sin instalación técnica requerida',
          maintenance: 'Cero gasolina, cero aceite, cero ruido'
        },
        tagline: 'Sin mantenimiento: Cero gasolina, cero aceite, cero ruido',
        image: '/Solar6000-1.png',
        createdAt: new Date()
      }
    ];

    setProducts(defaultProducts);
    localStorage.setItem('soltice_products', JSON.stringify(defaultProducts));
  };

  return (
    <section 
      id="productos"
      className="position-relative overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        background: `
          linear-gradient(135deg, 
            var(--slate-900) 0%, 
            var(--slate-800) 50%,
            var(--slate-900) 100%
          )
        `,
        minHeight: '100vh'
      }}
    >
      {/* Same background pattern as Hero */}
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
            Nuestras{' '}
            <span style={{ color: '#b4fe00', fontWeight: '800' }}>
              Baterías Solares
            </span>
          </h2>
          <p 
            className="mb-0"
            style={{ 
              fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
              color: 'var(--slate-300)',
              fontWeight: '500',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Tecnología avanzada para{' '}
            <span style={{ color: '#ffffff', fontWeight: '600' }}>
              independencia energética total
            </span>
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div 
                className="card-modern p-5"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="row g-4 align-items-center">
                  <div className="col-lg-7">
                    <h3 
                      className="mb-4"
                      style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        fontWeight: '700',
                        color: '#ffffff',
                        fontFamily: 'Space Grotesk, system-ui, sans-serif'
                      }}
                    >
                      ¿Por qué elegir{' '}
                      <span style={{ color: '#b4fe00' }}>energía solar?</span>
                    </h3>
                    
                    <p 
                      className="mb-4"
                      style={{
                        fontSize: '16px',
                        color: 'var(--slate-300)',
                        fontWeight: '500',
                        lineHeight: '1.6'
                      }}
                    >
                      Las baterías solares ofrecen una fuente de energía{' '}
                      <span style={{ color: '#ffffff', fontWeight: '600' }}>
                        limpia, silenciosa y confiable
                      </span>, ideal para enfrentar los apagones frecuentes en Puerto Rico.{' '}
                      <span style={{ color: '#ffffff', fontWeight: '600' }}>
                        Almacena energía durante el día para usarla cuando más la necesites.
                      </span>
                    </p>

                    <div className="row g-3">
                      {[
                        { icon: '🔇', text: 'Funcionamiento silencioso' },
                        { icon: '🌱', text: 'Cero emisiones contaminantes' },
                        { icon: '⚙️', text: 'Sin mantenimiento requerido' },
                        { icon: '📱', text: 'Fácil instalación y uso' },
                        { icon: '🔄', text: 'Múltiples métodos de carga' }
                      ].map((benefit, index) => (
                        <div key={index} className="col-md-6">
                          <div className="d-flex align-items-center">
                            <div 
                              className="d-flex align-items-center justify-content-center me-3"
                              style={{
                                width: '40px',
                                height: '40px',
                                background: 'rgba(180, 254, 0, 0.1)',
                                borderRadius: '12px',
                                fontSize: '18px'
                              }}
                            >
                              {benefit.icon}
                            </div>
                            <span 
                              style={{
                                color: 'var(--slate-300)',
                                fontSize: '15px',
                                fontWeight: '500'
                              }}
                            >
                              {benefit.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-lg-5">
                    <div 
                      className="text-center p-4 rounded-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(180, 254, 0, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
                        border: '2px solid rgba(180, 254, 0, 0.2)'
                      }}
                    >
                      <div 
                        className="mb-3"
                        style={{
                          fontSize: 'clamp(3rem, 6vw, 4rem)',
                          fontWeight: '900',
                          color: '#b4fe00',
                          fontFamily: 'Space Grotesk, system-ui, sans-serif',
                          textShadow: '0 0 20px rgba(180, 254, 0, 0.3)'
                        }}
                      >
                        5
                      </div>
                      <h4 
                        className="mb-3"
                        style={{
                          color: '#ffffff',
                          fontWeight: '700',
                          fontSize: '24px'
                        }}
                      >
                        Beneficios que te brinda la{' '}
                        <span style={{ color: '#b4fe00' }}>energía solar</span>
                      </h4>
                      <p 
                        style={{
                          color: 'var(--slate-300)',
                          fontSize: '14px',
                          marginBottom: '0'
                        }}
                      >
                        Energía limpia, confiable y económica para tu hogar o negocio
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div 
                className="card-modern h-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden'
                }}
              >
                {/* Product Image */}
                <div 
                  className="position-relative"
                  style={{
                    height: '250px',
                    background: `linear-gradient(45deg, rgba(180, 254, 0, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src={product.image}
                    alt={product.name}
                    style={{
                      maxHeight: '220px',
                      maxWidth: '90%',
                      objectFit: 'contain'
                    }}
                  />
                  
                  {/* Power Badge */}
                  <div 
                    className="position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill"
                    style={{
                      background: '#b4fe00',
                      color: '#000000',
                      fontWeight: '700',
                      fontSize: '14px'
                    }}
                  >
                    {product.power}
                  </div>
                </div>

                <div className="card-body p-4">
                  {/* Product Name */}
                  <h5 
                    className="card-title fw-bold mb-3"
                    style={{ 
                      color: '#ffffff',
                      fontSize: '1.2rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {product.name}
                  </h5>

                  {/* Description */}
                  <p 
                    className="card-text mb-3"
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Key Specifications */}
                  <div className="mb-3">
                    <h6 
                      className="fw-bold mb-2"
                      style={{ color: '#b4fe00', fontSize: '14px' }}
                    >
                      Especificaciones Clave:
                    </h6>
                    
                    <div className="row g-2 mb-2">
                      <div className="col-6">
                        <small style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          <strong>Capacidad:</strong><br />
                          {product.specifications.capacity}
                        </small>
                      </div>
                      <div className="col-6">
                        <small style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          <strong>Ciclos:</strong><br />
                          {product.specifications.cycles}
                        </small>
                      </div>
                    </div>
                    
                    <div className="row g-2 mb-2">
                      <div className="col-6">
                        <small style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          <strong>Carga:</strong><br />
                          {product.specifications.chargeTime}
                        </small>
                      </div>
                      <div className="col-6">
                        <small style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          <strong>Puertos:</strong><br />
                          {product.specifications.outlets.length} tipos
                        </small>
                      </div>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div 
                    className="text-center p-2 rounded-3 mb-3"
                    style={{
                      background: 'rgba(180, 254, 0, 0.1)',
                      border: '1px solid rgba(180, 254, 0, 0.3)'
                    }}
                  >
                    <small 
                      className="fw-bold"
                      style={{ 
                        color: '#b4fe00',
                        fontSize: '12px'
                      }}
                    >
                      {product.tagline}
                    </small>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-grid gap-2">
                    <button 
                      className="btn btn-modern gradient-primary"
                      style={{
                        color: '#000000',
                        padding: '12px',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}
                    >
                      Solicitar Consulta
                    </button>
                    <button 
                      className="btn btn-outline-light border-2"
                      style={{
                        borderRadius: '12px',
                        padding: '10px',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div 
            className="card-modern mx-auto p-4"
            style={{
              maxWidth: '600px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h5 
              className="mb-3"
              style={{ 
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '20px'
              }}
            >
              ¿Necesitas ayuda para elegir?
            </h5>
            <p 
              className="mb-3"
              style={{ 
                color: 'var(--slate-300)',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              Nuestros expertos te ayudan a seleccionar la{' '}
              <span style={{ color: '#ffffff', fontWeight: '600' }}>
                batería perfecta para tus necesidades específicas
              </span>
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a 
                href="#contacto"
                className="btn btn-modern gradient-primary"
                style={{
                  color: '#000000',
                  padding: '12px 24px',
                  fontSize: '15px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                Consulta Personalizada
              </a>
              <a 
                href="tel:+1234567890"
                className="btn btn-modern text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '12px 24px',
                  fontSize: '15px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                📞 Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;