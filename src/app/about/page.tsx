'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/Chat/ChatWidget';
import AdminWidget from '@/components/AdminWidget';

const AboutPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "María González",
      location: "San Juan, PR",
      rating: 5,
      text: "Desde que instalé mi batería Soltice Energy, no he tenido que preocuparme por los apagones. Es silenciosa y muy fácil de usar. El equipo fue muy profesional durante toda la instalación.",
      product: "Batería 3600W"
    },
    {
      name: "Carlos Rodríguez",
      location: "Bayamón, PR",
      rating: 5,
      text: "Excelente inversión. Mi negocio ya no se ve afectado por los cortes de luz. La batería de 6000W mantiene todo funcionando perfectamente. Muy recomendado.",
      product: "Batería 6000W"
    },
    {
      name: "Ana Martínez",
      location: "Caguas, PR",
      rating: 5,
      text: "El servicio al cliente es excepcional. Me ayudaron a elegir la batería perfecta para mi apartamento. Tres meses después y estoy muy satisfecha con mi compra.",
      product: "Batería 2500W"
    },
    {
      name: "José Rivera",
      location: "Ponce, PR",
      rating: 5,
      text: "Tecnología de vanguardia. Sin ruido, sin gasolina, sin problemas. La batería se carga rápido y dura mucho tiempo. Definitivamente la mejor decisión energética que he tomado.",
      product: "Batería 3600W"
    },
    {
      name: "Carmen Díaz",
      location: "Arecibo, PR",
      rating: 5,
      text: "Como abuela, necesitaba algo confiable para mantener mis medicamentos refrigerados. Esta batería me da la tranquilidad que necesito. Gracias Soltice Energy.",
      product: "Batería 2500W"
    },
    {
      name: "Roberto Torres",
      location: "Mayagüez, PR",
      rating: 5,
      text: "Para mi taller, era esencial tener energía continua. La batería de 6000W ha sido perfecta. Cero mantenimiento y máximo rendimiento. Excelente equipo.",
      product: "Batería 6000W"
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
                className="mb-4"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: '800',
                  lineHeight: '1.1',
                  fontFamily: 'Space Grotesk, system-ui, sans-serif',
                  letterSpacing: '-0.02em',
                  color: '#ffffff'
                }}
              >
                Sobre{' '}
                <span style={{ color: '#4b5563', fontWeight: '900' }}>SOLTICE</span>{' '}
                <span style={{ color: '#b4fe00', fontWeight: '900' }}>ENERGY</span>
              </h1>
              <p 
                className="mb-0"
                style={{ 
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  color: 'var(--slate-300)',
                  fontWeight: '600',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                <span style={{ fontWeight: '700' }}>Innovando el futuro energético de</span>{' '}
                <span style={{ color: '#ffffff', fontWeight: '700' }}>
                  Puerto Rico con soluciones solares inteligentes
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
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
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="pe-lg-4">
                <h2 
                  className="mb-4"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '700',
                    color: '#ffffff',
                    fontFamily: 'Space Grotesk, system-ui, sans-serif'
                  }}
                >
                  Nuestra{' '}
                  <span style={{ color: '#b4fe00' }}>Historia</span>
                </h2>
                <div className="mb-4">
                  <p 
                    style={{
                      fontSize: '18px',
                      color: 'var(--slate-300)',
                      lineHeight: '1.7',
                      fontWeight: '500',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>
                      Soltice Energy nació de la necesidad real de los puertorriqueños
                    </span> de tener energía confiable durante los frecuentes apagones que afectan a la isla.
                  </p>
                  <p 
                    style={{
                      fontSize: '18px',
                      color: 'var(--slate-300)',
                      lineHeight: '1.7',
                      fontWeight: '500',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Fundada por expertos en energía renovable, nuestra misión es simple: 
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>
                      democratizar el acceso a la energía limpia y confiable
                    </span> para cada hogar y negocio en Puerto Rico.
                  </p>
                  <p 
                    style={{
                      fontSize: '18px',
                      color: 'var(--slate-300)',
                      lineHeight: '1.7',
                      fontWeight: '500'
                    }}
                  >
                    Con más de{' '}
                    <span style={{ color: '#b4fe00', fontWeight: '700' }}>500 instalaciones exitosas</span>,
                    nos hemos convertido en el{' '}
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>
                      aliado de confianza para familias y empresas
                    </span> que buscan independencia energética.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="row g-3">
                  <div className="col-4">
                    <div className="text-center">
                      <div 
                        style={{
                          fontSize: '32px',
                          fontWeight: '800',
                          color: '#b4fe00',
                          fontFamily: 'Space Grotesk, system-ui, sans-serif'
                        }}
                      >
                        500+
                      </div>
                      <small style={{ color: 'var(--slate-400)', fontWeight: '600' }}>
                        CLIENTES SATISFECHOS
                      </small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center">
                      <div 
                        style={{
                          fontSize: '32px',
                          fontWeight: '800',
                          color: '#b4fe00',
                          fontFamily: 'Space Grotesk, system-ui, sans-serif'
                        }}
                      >
                        7
                      </div>
                      <small style={{ color: 'var(--slate-400)', fontWeight: '600' }}>
                        AÑOS GARANTÍA
                      </small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="text-center">
                      <div 
                        style={{
                          fontSize: '32px',
                          fontWeight: '800',
                          color: '#b4fe00',
                          fontFamily: 'Space Grotesk, system-ui, sans-serif'
                        }}
                      >
                        24/7
                      </div>
                      <small style={{ color: 'var(--slate-400)', fontWeight: '600' }}>
                        SOPORTE TÉCNICO
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div 
                className="card-modern p-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <img 
                  src="/heropic.png" 
                  alt="Soltice Energy Team" 
                  className="img-fluid rounded-3 mb-4"
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
                <h5 style={{ color: '#ffffff', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Tecnología de Vanguardia
                </h5>
                <p style={{ color: 'var(--slate-300)', fontSize: '14px', lineHeight: '1.6' }}>
                  Nuestras baterías utilizan la tecnología LiFePO4 más avanzada, 
                  garantizando máxima seguridad, durabilidad y eficiencia energética.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Message Section */}
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
            <div className="col-lg-10">
              <div 
                className="card-modern p-5 text-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="mb-4">
                  <div 
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(135deg, #b4fe00 0%, rgba(180, 254, 0, 0.7) 100%)',
                      fontSize: '40px'
                    }}
                  >
                    👨‍💼
                  </div>
                </div>
                
                <h3 
                  className="mb-4"
                  style={{
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '28px',
                    fontFamily: 'Space Grotesk, system-ui, sans-serif'
                  }}
                >
                  Mensaje del{' '}
                  <span style={{ color: '#b4fe00' }}>Fundador</span>
                </h3>
                
                <blockquote className="mb-4">
                  <p 
                    style={{
                      fontSize: '20px',
                      color: 'var(--slate-300)',
                      lineHeight: '1.7',
                      fontWeight: '500',
                      fontStyle: 'italic',
                      marginBottom: '2rem'
                    }}
                  >
                    "Cuando fundé Soltice Energy, mi visión era clara:{' '}
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>
                      ninguna familia en Puerto Rico debería vivir sin energía confiable
                    </span>. 
                    Cada batería que instalamos no es solo un producto, es{' '}
                    <span style={{ color: '#b4fe00', fontWeight: '600' }}>
                      tranquilidad, seguridad y libertad energética
                    </span> para nuestros clientes.
                  </p>
                  <p 
                    style={{
                      fontSize: '20px',
                      color: 'var(--slate-300)',
                      lineHeight: '1.7',
                      fontWeight: '500',
                      fontStyle: 'italic'
                    }}
                  >
                    Nos enorgullece ser parte de la solución energética de Puerto Rico, 
                    y seguiremos innovando para brindar{' '}
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>
                      la mejor tecnología solar del mercado
                    </span>."
                  </p>
                </blockquote>
                
                <div className="text-center">
                  <p className="mb-1" style={{ color: '#b4fe00', fontWeight: '700', fontSize: '18px' }}>
                    [Nombre del Fundador]
                  </p>
                  <p style={{ color: 'var(--slate-400)', fontSize: '16px' }}>
                    Fundador y CEO, Soltice Energy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
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
              Lo que dicen nuestros{' '}
              <span style={{ color: '#b4fe00', fontWeight: '800' }}>
                Clientes
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
              Más de{' '}
              <span style={{ color: '#ffffff', fontWeight: '600' }}>
                500 familias confían en Soltice Energy
              </span>{' '}
              para su independencia energética
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className="card-modern h-100 p-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Stars */}
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#b4fe00', fontSize: '18px' }}>⭐</span>
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <blockquote className="mb-4">
                    <p 
                      style={{
                        color: 'var(--slate-300)',
                        fontSize: '15px',
                        lineHeight: '1.6',
                        fontStyle: 'italic'
                      }}
                    >
                      "{testimonial.text}"
                    </p>
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <p className="mb-1" style={{ color: '#ffffff', fontWeight: '600', fontSize: '16px' }}>
                        {testimonial.name}
                      </p>
                      <p className="mb-0" style={{ color: 'var(--slate-400)', fontSize: '14px' }}>
                        {testimonial.location}
                      </p>
                    </div>
                    <div 
                      className="px-2 py-1 rounded"
                      style={{
                        background: 'rgba(180, 254, 0, 0.1)',
                        border: '1px solid rgba(180, 254, 0, 0.3)'
                      }}
                    >
                      <small style={{ color: '#b4fe00', fontSize: '12px', fontWeight: '600' }}>
                        {testimonial.product}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
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
                ¿Listo para unirte a nuestra familia de clientes satisfechos?
              </h5>
              <p 
                className="mb-3"
                style={{ 
                  color: 'var(--slate-300)',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                Descubre cómo{' '}
                <span style={{ color: '#ffffff', fontWeight: '600' }}>
                  Soltice Energy puede transformar tu experiencia energética
                </span>
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a 
                  href="/contacto"
                  className="btn btn-modern gradient-primary"
                  style={{
                    color: '#000000',
                    padding: '12px 24px',
                    fontSize: '15px',
                    fontWeight: '600',
                    textDecoration: 'none'
                  }}
                >
                  Solicitar Consulta
                </a>
                <a 
                  href="/productos"
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
                  Ver Productos
                </a>
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

export default AboutPage;