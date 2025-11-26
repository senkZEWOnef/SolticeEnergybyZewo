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
    <section className="relative py-12 md:py-20 border-t border-white/10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/address.jpg" 
          alt="Office background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-700/85 to-black/90"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 tracking-tight">
            Nuestras Oficinas
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Visítanos en cualquiera de nuestras dos ubicaciones para recibir atención personalizada
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {offices.map((office, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 lg:p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-green-400/30">
                <div className="space-y-6">
                  {/* Office Name */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {office.name}
                  </h3>

                  {/* Office Details */}
                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start space-x-3">
                      <svg 
                        className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                      </svg>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-white mb-1">
                          Dirección
                        </p>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-3">
                      <svg 
                        className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 16 16"
                      >
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-white mb-1">
                          Teléfono
                        </p>
                        <a 
                          href={`tel:${office.phone}`}
                          className="text-sm sm:text-base text-green-400 font-semibold hover:text-green-300 transition-colors duration-200"
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
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black px-4 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25"
                  >
                    <svg 
                      className="w-4 h-4 mr-2" 
                      fill="currentColor" 
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