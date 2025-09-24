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
      title: 'Llamar',
      action: 'tel:+1787-XXX-XXXX',
      actionText: '(787) XXX-XXXX',
      bgColor: 'from-blue-500 to-blue-600'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      action: 'https://wa.me/1787XXXXXXX',
      actionText: 'Chat',
      bgColor: 'from-green-500 to-green-600'
    },
    {
      icon: '📧',
      title: 'Email',
      action: 'mailto:info@solticeenergy.com',
      actionText: 'Escribir',
      bgColor: 'from-red-500 to-red-600'
    },
    {
      icon: '📘',
      title: 'Facebook',
      action: 'https://facebook.com/solticeenergy',
      actionText: 'Seguir',
      bgColor: 'from-blue-600 to-blue-700'
    },
    {
      icon: '📷',
      title: 'Instagram',
      action: 'https://instagram.com/solticeenergy',
      actionText: 'Ver',
      bgColor: 'from-pink-500 to-purple-600'
    },
    {
      icon: '💬',
      title: 'Chat Web',
      action: '#',
      actionText: 'Abrir',
      bgColor: 'from-emerald-500 to-emerald-600',
      onClick: () => initializeChat()
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
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/consulta.jpg" 
          alt="Solar consultation background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/80 to-black/90"></div>
      </div>
      
      {/* Ultra-Enhanced background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-primary rounded-full blur-3xl animate-float transform will-change-transform"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-accent rounded-full blur-3xl animate-float-delayed transform will-change-transform"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-neon rounded-full blur-[120px] opacity-10 animate-pulse-soft"></div>
        
        {/* Additional dynamic elements */}
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-primary-400/10 to-neon/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-accent-400/15 to-primary-400/15 rounded-full blur-2xl animate-float-delayed"></div>
        
        {/* Contact-themed particle effects */}
        {[
          { top: 10, left: 20 },
          { top: 75, left: 85 },
          { top: 40, left: 5 },
          { top: 85, left: 50 },
          { top: 15, left: 75 },
          { top: 60, left: 10 },
          { top: 30, left: 90 },
          { top: 90, left: 25 },
          { top: 5, left: 60 },
          { top: 70, left: 35 },
          { top: 45, left: 85 },
          { top: 25, left: 15 },
          { top: 80, left: 70 },
          { top: 55, left: 40 },
          { top: 35, left: 95 },
          { top: 95, left: 45 },
          { top: 20, left: 80 },
          { top: 65, left: 25 },
          { top: 50, left: 5 },
          { top: 85, left: 65 }
        ].map((position, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full animate-float"
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + (i % 6)}s`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(180, 254, 0, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
          animation: 'shimmer 22s linear infinite'
        }}></div>
        
        {/* Communication-themed patterns */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(180, 254, 0, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      {/* Enhanced floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-6 h-6 border-2 border-primary-400/40 rounded-lg rotate-45 animate-float shadow-glow-primary"></div>
        <div className="absolute bottom-1/3 left-1/6 w-8 h-8 border-2 border-accent-400/40 rounded-full animate-float-delayed shadow-glow-accent"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-neon/30 rounded-full animate-pulse-soft shadow-glow-neon"></div>
        <div className="absolute top-1/6 left-1/4 w-3 h-3 bg-primary-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-1/6 right-1/3 w-5 h-5 border border-neon/40 rounded-xl rotate-12 animate-float-delayed"></div>
        
        {/* Communication icons floating */}
        <div className="absolute top-12 left-12 text-primary-400/20 text-2xl animate-float">📞</div>
        <div className="absolute bottom-12 right-12 text-neon/20 text-2xl animate-float-delayed">💬</div>
        <div className="absolute top-1/3 right-20 text-accent-400/20 text-xl animate-pulse-soft">📧</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Ultra-Enhanced Contact Form */}
        <div className="max-w-5xl mx-auto mb-16 lg:mb-20">
          <div className="relative group">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-neon/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/20 overflow-hidden animate-fade-in-up hover:border-primary-400/40 transition-all duration-500">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(180, 254, 0, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '60px 60px',
                  animation: 'shimmer 35s linear infinite'
                }}></div>
              </div>
              
              <div className="relative p-6 sm:p-8 lg:p-16">
                <div className="text-center mb-8 lg:mb-12">
                  {/* Enhanced form header */}
                  <div className="flex items-center justify-center mb-6 lg:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-neon to-primary-400 rounded-2xl flex items-center justify-center animate-pulse-soft shadow-glow-neon">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-5xl text-white mb-4 lg:mb-6 leading-tight">
                    Solicita tu{' '}
                    <span className="text-gradient-neon relative inline-block group/text">
                      Consulta Personalizada
                      <div className="absolute inset-0 bg-gradient-to-r from-neon/20 to-primary-400/20 blur-lg opacity-0 group-hover/text:opacity-100 transition-opacity duration-500"></div>
                    </span>
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                    Completa este formulario y{' '}
                    <span className="text-white font-semibold">
                      nuestros expertos diseñarán la solución perfecta para ti
                    </span>
                    {' '}en menos de 24 horas.
                  </p>
                  
                  {/* Form benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 lg:mt-8 px-4">
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-slate-400">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                      <span>Asesoría especializada</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-slate-400">
                      <div className="w-2 h-2 bg-neon rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span>Cotización personalizada</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-slate-400">
                      <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                      <span>Respuesta garantizada</span>
                    </div>
                  </div>
                </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Required Fields */}
                <div className="space-y-2">
                  <label 
                    htmlFor="name" 
                    className="block text-white font-semibold text-sm"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-modern"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    htmlFor="phone" 
                    className="block text-white font-semibold text-sm"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="input-modern"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(787) 123-4567"
                  />
                </div>

                {/* Optional Fields */}
                <div className="space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block text-slate-300 font-medium text-sm"
                  >
                    Email (opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-modern"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    htmlFor="location" 
                    className="block text-slate-300 font-medium text-sm"
                  >
                    Ubicación/Ciudad
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="input-modern"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="San Juan, PR"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    htmlFor="batteryInterest" 
                    className="block text-slate-300 font-medium text-sm"
                  >
                    Batería de Interés
                  </label>
                  <select
                    id="batteryInterest"
                    name="batteryInterest"
                    className="input-modern"
                    value={formData.batteryInterest}
                    onChange={handleChange}
                  >
                    <option value="" className="bg-dark-800 text-white">
                      Seleccionar...
                    </option>
                    <option value="2500W" className="bg-dark-800 text-white">
                      Batería 2500W - Residencial
                    </option>
                    <option value="3600W" className="bg-dark-800 text-white">
                      Batería 3600W - Hogar/Negocio
                    </option>
                    <option value="6000W" className="bg-dark-800 text-white">
                      Batería 6000W - Comercial/Industrial
                    </option>
                    <option value="unsure" className="bg-dark-800 text-white">
                      No estoy seguro
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label 
                    htmlFor="urgency" 
                    className="block text-slate-300 font-medium text-sm"
                  >
                    Urgencia
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    className="input-modern"
                    value={formData.urgency}
                    onChange={handleChange}
                  >
                    <option value="normal" className="bg-dark-800 text-white">
                      Normal (24-48 horas)
                    </option>
                    <option value="urgent" className="bg-dark-800 text-white">
                      Urgente (mismo día)
                    </option>
                    <option value="planning" className="bg-dark-800 text-white">
                      Planificando (próximas semanas)
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="message" 
                  className="block text-slate-300 font-medium text-sm"
                >
                  Mensaje Adicional (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="input-modern"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu situación actual o necesidades específicas..."
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="submit"
                    className="btn-modern btn-neon text-lg px-8 py-4 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Enviar Consulta
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </button>
                  
                  <a 
                    href="/contacto"
                    className="btn-modern btn-ghost text-lg px-8 py-4 group"
                  >
                    <span className="flex items-center gap-3">
                      Más Opciones
                      <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-6 text-slate-400 text-sm">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Respuesta garantizada
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Sin compromiso
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Consulta gratuita
                  </span>
                </div>
              </div>
            </form>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Client Reviews Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-3xl lg:text-4xl text-white">
              Lo que dicen nuestros{' '}
              <span className="text-gradient-neon">clientes</span>
            </h4>
            <p className="text-slate-400 text-lg">
              Más de 500 familias confían en Soltice Energy
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-neon to-primary-400 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-glass p-6 h-full animate-fade-in-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                {/* Enhanced Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-neon text-lg group-hover:scale-110 transition-transform">⭐</span>
                  ))}
                </div>
                
                {/* Review Text */}
                <blockquote className="text-slate-300 text-sm leading-relaxed italic font-medium">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Customer Info */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-semibold text-sm mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-400 text-xs mb-2">
                    {testimonial.location}
                  </p>
                  <span className="inline-block bg-gradient-to-r from-neon/20 to-primary-400/20 border border-neon/30 rounded-full px-3 py-1 text-neon text-xs font-medium">
                    {testimonial.product}
                  </span>
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