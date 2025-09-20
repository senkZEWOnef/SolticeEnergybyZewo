'use client';

const OfficesSection = () => {
  const offices = [
    {
      name: "Oficina en Mayagüez",
      address: "52 C. Comercio, Mayagüez, 00682",
      phone: "787-515-2632",
      mapUrl: "https://maps.google.com/?q=52+C.+Comercio,+Mayagüez,+00682"
    },
    {
      name: "Oficina en Vega Alta", 
      address: "52 C. Comercio, Vega Alta, 00692",
      phone: "787-233-9002",
      mapUrl: "https://maps.google.com/?q=52+C.+Comercio,+Vega+Alta,+00692"
    }
  ];

  return (
    <section 
      className="position-relative py-5"
      style={{
        background: `
          linear-gradient(135deg, 
            var(--slate-900) 0%, 
            var(--slate-800) 50%,
            var(--slate-900) 100%
          )
        `,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 
            className="fw-bold mb-3"
            style={{
              color: '#ffffff',
              fontSize: '36px',
              fontFamily: 'Space Grotesk, system-ui, sans-serif',
              letterSpacing: '-0.025em'
            }}
          >
            Nuestras Oficinas
          </h2>
          <p 
            className="mb-0"
            style={{
              color: '#cbd5e1',
              fontSize: '18px',
              fontFamily: 'Inter, system-ui, sans-serif',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Visítanos en cualquiera de nuestras dos ubicaciones para recibir atención personalizada
          </p>
        </div>

        {/* Offices Grid */}
        <div className="row g-4">
          {offices.map((office, index) => (
            <div key={index} className="col-lg-6">
              <div 
                className="card h-100 border-0 shadow-sm position-relative"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div className="card-body p-4">
                  {/* Office Name */}
                  <h3 
                    className="card-title fw-bold mb-4"
                    style={{
                      color: '#ffffff',
                      fontSize: '24px',
                      fontFamily: 'Space Grotesk, system-ui, sans-serif',
                      letterSpacing: '-0.025em'
                    }}
                  >
                    {office.name}
                  </h3>

                  {/* Office Details */}
                  <div className="mb-4">
                    {/* Address */}
                    <div className="d-flex align-items-start mb-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        fill="var(--emerald-500)" 
                        className="bi bi-geo-alt-fill me-3 mt-1 flex-shrink-0" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                      </svg>
                      <div>
                        <p 
                          className="mb-1 fw-semibold"
                          style={{
                            color: '#ffffff',
                            fontSize: '16px',
                            fontFamily: 'Inter, system-ui, sans-serif'
                          }}
                        >
                          Dirección
                        </p>
                        <p 
                          className="mb-0"
                          style={{
                            color: '#cbd5e1',
                            fontSize: '15px',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            lineHeight: '1.5'
                          }}
                        >
                          {office.address}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="d-flex align-items-center mb-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        fill="var(--emerald-500)" 
                        className="bi bi-telephone-fill me-3 flex-shrink-0" 
                        viewBox="0 0 16 16"
                      >
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg>
                      <div>
                        <p 
                          className="mb-1 fw-semibold"
                          style={{
                            color: '#ffffff',
                            fontSize: '16px',
                            fontFamily: 'Inter, system-ui, sans-serif'
                          }}
                        >
                          Teléfono
                        </p>
                        <a 
                          href={`tel:${office.phone}`}
                          className="text-decoration-none"
                          style={{
                            color: '#b4fe00',
                            fontSize: '15px',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontWeight: '600'
                          }}
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Map Button */}
                  <a 
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-modern gradient-primary d-flex align-items-center justify-content-center w-100"
                    style={{
                      color: '#000000',
                      fontSize: '15px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      padding: '12px 20px',
                      fontFamily: 'Space Grotesk, system-ui, sans-serif',
                      letterSpacing: '-0.025em',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      fill="currentColor" 
                      className="bi bi-map me-2" 
                      viewBox="0 0 16 16"
                    >
                      <path fillRule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                    </svg>
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;