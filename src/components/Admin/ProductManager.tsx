'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Product, ProductFormData } from '@/types/products';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Search, 
  Filter,
  Package,
  DollarSign,
  Star,
  Eye,
  EyeOff,
  Save,
  X
} from 'lucide-react';

const ProductManager = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    power: '',
    description: '',
    category: 'batteries',
    price: '',
    rating: 5,
    tagline: '',
    image: '',
    features: [],
    stock: 0,
    dimensions: '',
    weight: '',
    warranty: '',
    certifications: [],
    specifications: {
      capacity: '',
      outlets: '',
      cycles: '',
      chargeTime: '',
      display: '',
      usage: '',
      portability: '',
      maintenance: ''
    }
  });

  const [newFeature, setNewFeature] = useState('');
  const [newCertification, setNewCertification] = useState('');

  // Load products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('soltice_products');
    if (savedProducts) {
      const parsed = JSON.parse(savedProducts).map((p: Product) => ({
        ...p,
        createdAt: new Date(p.createdAt),
        updatedAt: p.updatedAt ? new Date(p.updatedAt) : undefined
      }));
      setProducts(parsed);
    } else {
      // Initialize with sample products if none exist
      const sampleProducts: Product[] = [
        {
          id: 'sample-1',
          name: 'PowerStation Pro 2000',
          power: '2000W',
          description: 'Estación de energía portátil de alta capacidad ideal para hogares y empresas.',
          category: 'batteries',
          price: '$1,299',
          rating: 4.8,
          tagline: 'Energía confiable donde la necesites',
          image: '/products/battery1.jpg',
          features: ['Carga rápida', 'Pantalla LCD', 'Múltiples puertos'],
          specifications: {
            capacity: '2048Wh',
            outlets: ['4x AC', '2x USB-C', '4x USB-A'],
            cycles: '3500+ ciclos',
            chargeTime: '2 horas',
            display: 'LCD táctil',
            usage: 'Interior/Exterior',
            portability: '22kg',
            maintenance: 'Libre de mantenimiento'
          },
          createdAt: new Date(),
          createdBy: 'system',
          isActive: true,
          stock: 15,
          dimensions: '40x28x31cm',
          weight: '22kg',
          warranty: '5 años',
          certifications: ['UL', 'FCC', 'CE']
        }
      ];
      setProducts(sampleProducts);
      localStorage.setItem('soltice_products', JSON.stringify(sampleProducts));
    }
  }, []);

  // Filter products
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, categoryFilter]);

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      power: '',
      description: '',
      category: 'batteries',
      price: '',
      rating: 5,
      tagline: '',
      image: '',
      features: [],
      stock: 0,
      dimensions: '',
      weight: '',
      warranty: '',
      certifications: [],
      specifications: {
        capacity: '',
        outlets: '',
        cycles: '',
        chargeTime: '',
        display: '',
        usage: '',
        portability: '',
        maintenance: ''
      }
    });
    setNewFeature('');
    setNewCertification('');
  };

  const handleAddProduct = () => {
    if (!user) return;

    const newProduct: Product = {
      id: Date.now().toString(),
      ...formData,
      specifications: {
        ...formData.specifications,
        outlets: formData.specifications.outlets.split(',').map(o => o.trim()).filter(o => o)
      },
      createdAt: new Date(),
      createdBy: user.id,
      isActive: true
    };

    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('soltice_products', JSON.stringify(updatedProducts));
    
    showMessage('success', 'Producto agregado exitosamente');
    setShowAddForm(false);
    resetForm();
  };

  const handleEditProduct = () => {
    if (!editingProduct || !user) return;

    const updatedProduct: Product = {
      ...editingProduct,
      ...formData,
      specifications: {
        ...formData.specifications,
        outlets: formData.specifications.outlets.split(',').map(o => o.trim()).filter(o => o)
      },
      updatedAt: new Date()
    };

    const updatedProducts = products.map(p => 
      p.id === editingProduct.id ? updatedProduct : p
    );
    
    setProducts(updatedProducts);
    localStorage.setItem('soltice_products', JSON.stringify(updatedProducts));
    
    showMessage('success', 'Producto actualizado exitosamente');
    setEditingProduct(null);
    resetForm();
  };

  const handleDeleteProduct = (productId: string, productName: string) => {
    if (!confirm(`¿Estás seguro que deseas eliminar "${productName}"?`)) return;

    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem('soltice_products', JSON.stringify(updatedProducts));
    
    showMessage('success', 'Producto eliminado exitosamente');
  };

  const toggleProductStatus = (productId: string) => {
    const updatedProducts = products.map(p =>
      p.id === productId ? { ...p, isActive: !p.isActive } : p
    );
    
    setProducts(updatedProducts);
    localStorage.setItem('soltice_products', JSON.stringify(updatedProducts));
    
    showMessage('success', 'Estado del producto actualizado');
  };

  const startEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      power: product.power,
      description: product.description,
      category: product.category,
      price: product.price,
      rating: product.rating || 5,
      tagline: product.tagline,
      image: product.image,
      features: [...product.features],
      stock: product.stock || 0,
      dimensions: product.dimensions || '',
      weight: product.weight || '',
      warranty: product.warranty || '',
      certifications: [...(product.certifications || [])],
      specifications: {
        ...product.specifications,
        outlets: Array.isArray(product.specifications.outlets) 
          ? product.specifications.outlets.join(', ')
          : product.specifications.outlets
      }
    });
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const addCertification = () => {
    if (newCertification.trim()) {
      setFormData(prev => ({
        ...prev,
        certifications: [...prev.certifications, newCertification.trim()]
      }));
      setNewCertification('');
    }
  };

  const removeCertification = (index: number) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Gestión de Productos</h2>
          <p className="text-gray-400">Administra los productos de la tienda</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          <span>Nuevo Producto</span>
        </button>
      </div>

      {/* Success/Error Message */}
      {message && (
        <div className={`p-4 rounded-xl border ${
          message.type === 'success' 
            ? 'bg-green-500/20 border-green-500/30 text-green-400' 
            : 'bg-red-500/20 border-red-500/30 text-red-400'
        }`}>
          <p className="font-medium">{message.text}</p>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="all" className="bg-slate-800">Todas las categorías</option>
              <option value="batteries" className="bg-slate-800">Baterías</option>
              <option value="panels" className="bg-slate-800">Paneles</option>
              <option value="inverters" className="bg-slate-800">Inversores</option>
              <option value="accessories" className="bg-slate-800">Accesorios</option>
            </select>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400">{products.filter(p => p.isActive).length}</p>
              <p className="text-xs text-gray-400">Activos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-400">{products.filter(p => !p.isActive).length}</p>
              <p className="text-xs text-gray-400">Inactivos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Package className="w-5 h-5 mr-2 text-blue-400" />
            Productos ({filteredProducts.length})
          </h3>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="p-8 text-center">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-medium">No se encontraron productos</p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="p-6 hover:bg-white/5 transition-all duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                      <Package className="w-8 h-8 text-black" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-bold text-white">{product.name}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.isActive 
                            ? 'bg-green-400/20 text-green-400' 
                            : 'bg-red-400/20 text-red-400'
                        }`}>
                          {product.isActive ? 'Activo' : 'Inactivo'}
                        </span>
                        <span className="px-2 py-1 bg-blue-400/20 text-blue-400 rounded-full text-xs font-medium">
                          {product.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3">{product.description}</p>
                      
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-medium">{product.price}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-400 font-medium">{product.rating || 'N/A'}</span>
                        </div>
                        <span className="text-gray-400">Stock: {product.stock || 0}</span>
                        <span className="text-gray-400">
                          Creado: {product.createdAt.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => toggleProductStatus(product.id)}
                      className={`p-2 rounded-xl transition-all duration-200 ${
                        product.isActive
                          ? 'bg-green-400/20 text-green-400 hover:bg-green-400/30'
                          : 'bg-gray-400/20 text-gray-400 hover:bg-gray-400/30'
                      }`}
                      title={product.isActive ? 'Desactivar' : 'Activar'}
                    >
                      {product.isActive ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>

                    <button
                      onClick={() => startEdit(product)}
                      className="p-2 bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 rounded-xl transition-all duration-200"
                      title="Editar"
                    >
                      <Edit3 className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => handleDeleteProduct(product.id, product.name)}
                      className="p-2 bg-red-400/20 text-red-400 hover:bg-red-400/30 rounded-xl transition-all duration-200"
                      title="Eliminar"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add/Edit Product Modal */}
      {(showAddForm || editingProduct) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                {editingProduct ? 'Editar Producto' : 'Agregar Nuevo Producto'}
              </h3>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setEditingProduct(null);
                  resetForm();
                }}
                className="p-2 bg-red-400/20 text-red-400 hover:bg-red-400/30 rounded-xl transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                editingProduct ? handleEditProduct() : handleAddProduct();
              }}
              className="space-y-6"
            >
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Potencia</label>
                  <input
                    type="text"
                    value={formData.power}
                    onChange={(e) => setFormData(prev => ({ ...prev, power: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Categoría</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as Product['category'] }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  >
                    <option value="batteries" className="bg-slate-800">Baterías</option>
                    <option value="panels" className="bg-slate-800">Paneles</option>
                    <option value="inverters" className="bg-slate-800">Inversores</option>
                    <option value="accessories" className="bg-slate-800">Accesorios</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Precio</label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="$1,299"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Descripción</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tagline</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData(prev => ({ ...prev, tagline: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Energía confiable donde la necesites"
                  required
                />
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Stock</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.stock}
                    onChange={(e) => setFormData(prev => ({ ...prev, stock: parseInt(e.target.value) || 0 }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Imagen URL</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="/products/battery1.jpg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Dimensiones</label>
                  <input
                    type="text"
                    value={formData.dimensions}
                    onChange={(e) => setFormData(prev => ({ ...prev, dimensions: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="40x28x31cm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Peso</label>
                  <input
                    type="text"
                    value={formData.weight}
                    onChange={(e) => setFormData(prev => ({ ...prev, weight: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="22kg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Garantía</label>
                  <input
                    type="text"
                    value={formData.warranty}
                    onChange={(e) => setFormData(prev => ({ ...prev, warranty: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="5 años"
                  />
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Características</label>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Agregar característica"
                    />
                    <button
                      type="button"
                      onClick={addFeature}
                      className="px-4 py-2 bg-green-400/20 text-green-400 hover:bg-green-400/30 rounded-xl transition-all duration-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.features.map((feature, index) => (
                      <span
                        key={index}
                        className="flex items-center space-x-2 px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm"
                      >
                        <span>{feature}</span>
                        <button
                          type="button"
                          onClick={() => removeFeature(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Certificaciones</label>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newCertification}
                      onChange={(e) => setNewCertification(e.target.value)}
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                      placeholder="Agregar certificación"
                    />
                    <button
                      type="button"
                      onClick={addCertification}
                      className="px-4 py-2 bg-green-400/20 text-green-400 hover:bg-green-400/30 rounded-xl transition-all duration-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="flex items-center space-x-2 px-3 py-1 bg-orange-400/20 text-orange-400 rounded-full text-sm"
                      >
                        <span>{cert}</span>
                        <button
                          type="button"
                          onClick={() => removeCertification(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-4">Especificaciones</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Capacidad</label>
                    <input
                      type="text"
                      value={formData.specifications.capacity}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        specifications: { ...prev.specifications, capacity: e.target.value }
                      }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
                      placeholder="2048Wh"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Salidas (separadas por coma)</label>
                    <input
                      type="text"
                      value={formData.specifications.outlets}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        specifications: { ...prev.specifications, outlets: e.target.value }
                      }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
                      placeholder="4x AC, 2x USB-C, 4x USB-A"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Ciclos</label>
                    <input
                      type="text"
                      value={formData.specifications.cycles}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        specifications: { ...prev.specifications, cycles: e.target.value }
                      }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
                      placeholder="3500+ ciclos"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Tiempo de carga</label>
                    <input
                      type="text"
                      value={formData.specifications.chargeTime}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        specifications: { ...prev.specifications, chargeTime: e.target.value }
                      }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
                      placeholder="2 horas"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Display</label>
                    <input
                      type="text"
                      value={formData.specifications.display}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        specifications: { ...prev.specifications, display: e.target.value }
                      }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
                      placeholder="LCD táctil"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Uso</label>
                    <input
                      type="text"
                      value={formData.specifications.usage}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        specifications: { ...prev.specifications, usage: e.target.value }
                      }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
                      placeholder="Interior/Exterior"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Portabilidad</label>
                    <input
                      type="text"
                      value={formData.specifications.portability}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        specifications: { ...prev.specifications, portability: e.target.value }
                      }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
                      placeholder="22kg"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Mantenimiento</label>
                    <input
                      type="text"
                      value={formData.specifications.maintenance}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        specifications: { ...prev.specifications, maintenance: e.target.value }
                      }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
                      placeholder="Libre de mantenimiento"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black rounded-xl font-bold transition-all duration-300"
                >
                  <Save className="w-5 h-5" />
                  <span>{editingProduct ? 'Actualizar Producto' : 'Crear Producto'}</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingProduct(null);
                    resetForm();
                  }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium border border-white/20 transition-all duration-300"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManager;