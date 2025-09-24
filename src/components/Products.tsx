'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, Star, Search, Filter, Grid, List } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  power: string;
  description: string;
  category: string;
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
  price?: string;
  rating?: number;
  features?: string[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', name: 'Todos los productos' },
    { id: 'batteries', name: 'Baterías Portátiles' },
    { id: 'panels', name: 'Paneles Solares' },
    { id: 'inverters', name: 'Inversores' },
    { id: 'accessories', name: 'Accesorios' }
  ];

  useEffect(() => {
    // Load products with categories
    const defaultProducts: Product[] = [
      {
        id: 'solar-2500',
        name: 'Batería Portátil Soltice Energy – 2500W',
        power: '2500W',
        category: 'batteries',
        price: 'Desde $1,799',
        rating: 4.9,
        description: 'La solución ideal para apartamentos, estudios, campers o como respaldo esencial en tu hogar.',
        specifications: {
          capacity: '2,048 watts hora (Wh)',
          outlets: ['4 conectores AC 110 / 120V', '2 puertos USB', '2 puertos USB-C'],
          cycles: '3,000',
          chargeTime: '1 hora y 30 minutos',
          display: 'Monitoreo en tiempo real',
          usage: 'Neveras, microondas, abanicos, televisores',
          portability: 'No requiere instalación',
          maintenance: 'Cero mantenimiento'
        },
        features: ['Sin gasolina', '100% Silencioso', 'Portátil', '7 años garantía'],
        tagline: 'Silenciosa. Eficiente. Siempre lista.',
        image: '/Solar2500-1.png',
        createdAt: new Date()
      },
      {
        id: 'solar-3600',
        name: 'Batería Portátil Soltice Energy – 3600W',
        power: '3600W',
        category: 'batteries',
        price: 'Desde $2,299',
        rating: 4.9,
        description: 'Potente, confiable y silenciosa. Ideal para hogares que necesitan más capacidad.',
        specifications: {
          capacity: '3,072 watts hora (Wh)',
          outlets: ['3 conectores AC 110 / 120V', '2 transfer switch 30A', '4 USB', '2 USB-C'],
          cycles: '4,000',
          chargeTime: '1 hora y 30 minutos',
          display: 'Monitoreo en tiempo real',
          usage: 'Neveras grandes, microondas, televisores, laptops',
          portability: 'Compacta, fácil de mover',
          maintenance: 'Cero mantenimiento'
        },
        features: ['Sin gasolina', '100% Silencioso', 'Transfer Switch', '7 años garantía'],
        tagline: 'Más energía. Más control. Cero ruido.',
        image: '/Solar3600-1.png',
        createdAt: new Date()
      },
      {
        id: 'solar-6000',
        name: 'Batería Portátil Soltice Energy – 6000W',
        power: '6000W',
        category: 'batteries',
        price: 'Desde $2,899',
        rating: 5.0,
        description: 'La más potente. Salida 110 y 220V para equipos de alto consumo.',
        specifications: {
          capacity: '3,072 watts hora (Wh)',
          outlets: ['3 conectores AC 110 / 220V', '2 transfer switch 30A', '4 USB', '2 USB-C'],
          cycles: '4,000',
          chargeTime: '1 hora y 30 minutos',
          display: 'Monitoreo preciso',
          usage: 'Aires acondicionados, bombas de agua, estufas',
          portability: 'Portátil, sin instalación',
          maintenance: 'Cero gasolina, cero aceite'
        },
        features: ['Doble voltaje 110/220V', '100% Silencioso', 'Máxima potencia', '7 años garantía'],
        tagline: 'Máxima potencia. Cero mantenimiento.',
        image: '/Solar6000-1.png',
        createdAt: new Date()
      }
    ];

    setProducts(defaultProducts);
    setFilteredProducts(defaultProducts);
  }, []);

  // Filter products
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.power.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);

  const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div>
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-contain bg-gray-50 rounded-lg"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.rating})</span>
              </div>
              <span className="text-2xl font-bold text-green-600">{product.price}</span>
            </div>
            
            <p className="text-gray-600 leading-relaxed font-light">{product.description}</p>
            
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 tracking-tight">Especificaciones:</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-medium">Capacidad:</span>
                  <p className="text-gray-600">{product.specifications.capacity}</p>
                </div>
                <div>
                  <span className="font-medium">Ciclos:</span>
                  <p className="text-gray-600">{product.specifications.cycles}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold">
                💬 Chatear
              </button>
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold">
                📞 Llamar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm pt-20 lg:pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 lg:mb-6 tracking-tight">
            Nuestros Productos
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
            Encuentra la solución perfecta de energía solar para tu hogar o negocio
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                  Buscar productos
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 tracking-wide">
                  Categorías
                </label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-green-100 text-green-800 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">
                  {filteredProducts.length} productos encontrados
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredProducts.map(product => (
                <div 
                  key={product.id}
                  className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative bg-gray-50 flex items-center justify-center ${
                    viewMode === 'list' ? 'w-48 h-32' : 'h-48'
                  }`}>
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain p-4"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.power}
                    </div>
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base mb-3 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features?.slice(0, 3).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-green-600">{product.price}</span>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4 font-medium">No se encontraron productos</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <Phone className="w-6 h-6" />
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <Mail className="w-6 h-6" />
        </button>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Products;