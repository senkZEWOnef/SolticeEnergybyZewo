'use client';

import Link from 'next/link';

const ProductsPreview = () => {
  const products = [
    {
      id: 'solar-2500',
      name: 'Sistema Solar 2500W',
      power: '2500W',
      description: 'Ideal para apartamentos y estudios',
      image: '/Solar2500-1.png'
    },
    {
      id: 'solar-3600',
      name: 'Sistema Solar 3600W',
      power: '3600W',
      description: 'Perfecto para hogares medianos',
      image: '/Solar3600-1.png'
    },
    {
      id: 'solar-6000',
      name: 'Sistema Solar 6000W',
      power: '6000W',
      description: 'Máxima potencia para hogares grandes',
      image: '/Solar6000-1.png'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4 lg:mb-6">
            <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-green-400/10 backdrop-blur-sm border border-green-400/20 text-green-400 text-xs sm:text-sm font-medium tracking-wide">
              ⚡ PRODUCTOS DESTACADOS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-white mb-4 lg:mb-6 tracking-tight px-4">
            Sistemas de Energía Solar
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Tecnología de vanguardia para 
            <span className="text-green-400 font-semibold"> independencia energética</span> total
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 lg:mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden border border-gray-700/50 hover:border-green-400/30 transform hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-green-400/10 via-gray-800/30 to-black/20 h-56 flex items-center justify-center p-6">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="max-h-44 max-w-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 right-6 bg-gradient-to-r from-green-400 to-green-500 text-black px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                  {product.power}
                </div>
                
                {/* Index Badge */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-green-400 font-bold text-sm border border-green-400/30">
                  {index + 1}
                </div>
              </div>
              
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed font-light text-lg">
                  {product.description}
                </p>
                <Link
                  href="/productos"
                  className="inline-flex items-center bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25 group"
                >
                  Ver detalles
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/productos"
            className="inline-flex items-center bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 hover:from-green-500 hover:via-green-600 hover:to-emerald-700 text-black px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-2xl hover:shadow-green-400/30 group"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Ver Catálogo Completo
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;