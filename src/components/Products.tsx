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
      className="position-relative overflow-hidden"
      style={{
        padding: '40px 0',
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
        `,
        minHeight: '100vh'
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 
            className="display-4 fw-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Rubik, sans-serif'
            }}
          >
            Nuestras Baterías Solares
          </h2>
          <p 
            className="lead mb-0"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            Tecnología avanzada para independencia energética total
          </p>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div 
                className="card border-0 h-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(180, 254, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
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
                      background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                      color: '#131d3b',
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
                      className="btn border-0 fw-bold"
                      style={{
                        background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                        color: '#131d3b',
                        borderRadius: '10px',
                        padding: '12px',
                        fontSize: '14px'
                      }}
                    >
                      Ver Detalles Completos
                    </button>
                    <button 
                      className="btn btn-outline-light border-2"
                      style={{
                        borderRadius: '10px',
                        padding: '10px',
                        fontSize: '14px'
                      }}
                    >
                      Solicitar Cotización
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
            className="card border-0 mx-auto"
            style={{
              maxWidth: '600px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="card-body p-4">
              <h5 
                className="card-title fw-bold mb-3"
                style={{ color: '#ffffff' }}
              >
                ¿Necesitas ayuda para elegir?
              </h5>
              <p 
                className="card-text mb-3"
                style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}
              >
                Nuestros expertos te ayudan a seleccionar la batería perfecta para tus necesidades específicas
              </p>
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                <button 
                  className="btn border-0 fw-bold"
                  style={{
                    background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                    color: '#131d3b',
                    borderRadius: '10px',
                    padding: '10px 20px',
                    fontSize: '14px'
                  }}
                >
                  📞 Llamar Ahora
                </button>
                <button 
                  className="btn btn-outline-light"
                  style={{
                    borderRadius: '10px',
                    padding: '10px 20px',
                    fontSize: '14px'
                  }}
                >
                  💬 Chat en Vivo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;