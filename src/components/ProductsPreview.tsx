'use client';

const ProductsPreview = () => {
  const products = [
    {
      id: 'solar-2500',
      name: 'Batería Portátil 2500W',
      power: '2500W',
      description: 'Ideal para apartamentos y estudios. Energía limpia y silenciosa sin gasolina ni mantenimiento.',
      tagline: 'Silenciosa. Eficiente. Siempre lista.',
      image: '/Solar2500-1.png'
    },
    {
      id: 'solar-3600',
      name: 'Batería Portátil 3600W',
      power: '3600W',
      description: 'Perfecta para hogares que necesitan más capacidad durante apagones largos.',
      tagline: 'Más energía. Más control. Cero ruido.',
      image: '/Solar3600-1.png'
    },
    {
      id: 'solar-6000',
      name: 'Batería Portátil 6000W',
      power: '6000W',
      description: 'La más potente. Salida 110 y 220V para equipos de alto consumo.',
      tagline: 'Sin mantenimiento: Cero gasolina, cero aceite, cero ruido',
      image: '/Solar6000-1.png'
    }
  ];

  return (
    <section 
      id="productos"
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

        <div className="row g-4 mb-5">
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
                    height: '200px',
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
                      maxHeight: '170px',
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
                      fontSize: '1.1rem',
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

                  {/* Action Button */}
                  <div className="d-grid">
                    <a 
                      href="/productos"
                      className="btn btn-modern gradient-primary"
                      style={{
                        color: '#000000',
                        padding: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        textDecoration: 'none'
                      }}
                    >
                      Ver Detalles Completos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Visit Full Page */}
        <div className="text-center">
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
              ¿Quieres ver todas las especificaciones?
            </h5>
            <p 
              className="mb-3"
              style={{ 
                color: 'var(--slate-300)',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              Descubre todas las características técnicas,{' '}
              <span style={{ color: '#ffffff', fontWeight: '600' }}>
                especificaciones detalladas y opciones de cada batería
              </span>
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a 
                href="/productos"
                className="btn btn-modern gradient-primary"
                style={{
                  color: '#000000',
                  padding: '12px 24px',
                  fontSize: '15px',
                  fontWeight: '600',
                  textDecoration: 'none'
                }}
              >
                Ver Todos los Productos
              </a>
              <a 
                href="#contacto"
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
                Consulta Personalizada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;