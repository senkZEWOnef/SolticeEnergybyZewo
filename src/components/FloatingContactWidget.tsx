'use client';

import { Phone, MessageCircle, Mail } from 'lucide-react';

const FloatingContactWidget = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/17875207505" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="WhatsApp - Chatear ahora"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp
        </span>
      </a>

      {/* Phone Button */}
      <a 
        href="tel:7875207505"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="Llamar - (787) 520-7505"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          (787) 520-7505
        </span>
      </a>

      {/* Email Button */}
      <a 
        href="mailto:info@solticeenergy.com"
        className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        title="Email - info@solticeenergy.com"
      >
        <Mail className="w-6 h-6" />
        <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Email
        </span>
      </a>
    </div>
  );
};

export default FloatingContactWidget;