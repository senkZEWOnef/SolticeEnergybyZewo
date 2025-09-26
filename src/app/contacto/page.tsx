'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/Chat/ChatWidget';
import AdminWidget from '@/components/AdminWidget';
import FloatingContactWidget from '@/components/FloatingContactWidget';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

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
      icon: Phone,
      title: 'Llámanos',
      description: 'Lunes a Viernes: 8:00 AM - 6:00 PM\nSábados: 9:00 AM - 2:00 PM',
      action: 'tel:+17875207505',
      actionText: '(787) 520-7505',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Respuesta garantizada en 24 horas\nSoporte técnico y ventas',
      action: 'mailto:info@solticeenergy.com',
      actionText: 'info@solticeenergy.com',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat directo con nuestros expertos\nRespuesta inmediata',
      action: 'https://wa.me/17875207505',
      actionText: 'Chatear Ahora',
      color: 'emerald'
    },
    {
      icon: MapPin,
      title: 'Visítanos',
      description: 'Centro de experiencia y showroom\nVe nuestros productos en acción',
      action: 'https://maps.google.com',
      actionText: 'Ver Ubicación',
      color: 'purple'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/p/Soltice-Energy-61561365922592/', color: 'blue' },
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/soltice.energy/', color: 'pink' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'sky' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'indigo' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden pt-20 lg:pt-24 py-16 lg:py-20">
          <div className="absolute inset-0">
            <img 
              src="/perla.jpg" 
              alt="Contact background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/90"></div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  Conecta
                </span>{' '}
                <span className="text-gray-900">con Nosotros</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
                Estamos aquí para ayudarte a encontrar la{' '}
                <span className="font-bold text-green-600">solución energética perfecta</span>{' '}
                para tu hogar o negocio
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 font-medium">Consulta Gratuita</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 font-medium">Respuesta en 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Múltiples Formas de{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  Contactarnos
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Elige el método que más te convenga. Estamos disponibles cuando nos necesites
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colorClasses = {
                  green: 'from-green-400 to-green-500 hover:from-green-500 hover:to-green-600',
                  blue: 'from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600',
                  emerald: 'from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600',
                  purple: 'from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600'
                };

                return (
                  <div key={index} className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${colorClasses[method.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
                      {method.description}
                    </p>
                    
                    <a 
                      href={method.action}
                      className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${colorClasses[method.color as keyof typeof colorClasses]} text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                    >
                      {method.actionText}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Social Media Links */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Síguenos en Redes Sociales</h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  const colorClasses = {
                    blue: 'bg-blue-500 hover:bg-blue-600',
                    pink: 'bg-pink-500 hover:bg-pink-600',
                    sky: 'bg-sky-500 hover:bg-sky-600',
                    indigo: 'bg-indigo-500 hover:bg-indigo-600'
                  };

                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-14 h-14 ${colorClasses[social.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg min-h-[56px] min-w-[56px]`}
                      title={social.name}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-2xl shadow-gray-200/50">
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Solicita tu{' '}
                    <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                      Consulta Personalizada
                    </span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Completa este formulario y nuestros expertos se pondrán en contacto contigo 
                    para diseñar la solución energética perfecta
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Required Fields Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-base font-bold text-gray-900 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 min-h-[44px] text-base"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-base font-bold text-gray-900 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 min-h-[44px] text-base"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(787) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  {/* Optional Fields Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email (opcional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 min-h-[44px] text-base"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa/Negocio (opcional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 min-h-[44px]"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Ubicación/Ciudad
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 min-h-[44px]"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="San Juan, PR"
                      />
                    </div>

                    <div>
                      <label htmlFor="batteryInterest" className="block text-sm font-medium text-gray-700 mb-2">
                        Batería de Interés
                      </label>
                      <select
                        id="batteryInterest"
                        name="batteryInterest"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 min-h-[44px]"
                        value={formData.batteryInterest}
                        onChange={handleChange}
                      >
                        <option value="">Seleccionar...</option>
                        <option value="2500W">Batería 2500W - Residencial</option>
                        <option value="3600W">Batería 3600W - Hogar/Negocio</option>
                        <option value="6000W">Batería 6000W - Comercial/Industrial</option>
                        <option value="multiple">Múltiples baterías</option>
                        <option value="unsure">No estoy seguro</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Método de Contacto Preferido
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: 'phone', label: 'Teléfono', icon: Phone },
                        { value: 'email', label: 'Email', icon: Mail },
                        { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle }
                      ].map((method) => {
                        const Icon = method.icon;
                        return (
                          <label key={method.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value={method.value}
                              checked={formData.preferredContact === method.value}
                              onChange={handleChange}
                              className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-400"
                            />
                            <div className="flex items-center space-x-2">
                              <Icon className="w-4 h-4 text-gray-600" />
                              <span className="text-gray-700 font-medium">{method.label}</span>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgencia de la Consulta
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 min-h-[44px]"
                      value={formData.urgency}
                      onChange={handleChange}
                    >
                      <option value="normal">Normal (24-48 horas)</option>
                      <option value="urgent">Urgente (mismo día)</option>
                      <option value="planning">Planificando (próximas semanas)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje Adicional (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 resize-vertical"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu situación actual, necesidades específicas, o cualquier pregunta que tengas..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Consulta
                    </button>
                    
                    <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Respuesta garantizada</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Sin compromiso</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Consulta gratuita</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Respuesta Rápida
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro equipo se compromete a responder todas las consultas en menos de 24 horas, 
                  garantizando atención personalizada y profesional.
                </p>
              </div>
              
              <div className="text-center bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Consulta Gratuita
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Evaluación completa de tus necesidades energéticas sin costo alguno. 
                  Diseñamos la solución perfecta para tu hogar o negocio.
                </p>
              </div>
              
              <div className="text-center bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Sin Compromiso
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recibe información detallada y asesoría experta sin presión de compra. 
                  Toma la decisión que mejor convenga a tu situación.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
      <AdminWidget />
      <FloatingContactWidget />
    </>
  );
};

export default ContactPage;