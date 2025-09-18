'use client';

import { useState, useEffect } from 'react';
import { useChatContext, Product } from '@/contexts/ChatContext';

const ProductManager = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useChatContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    power: '',
    description: '',
    capacity: '',
    outlets: [''],
    cycles: '',
    chargeTime: '',
    display: '',
    usage: '',
    portability: '',
    maintenance: '',
    tagline: '',
    image: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOutletChange = (index: number, value: string) => {
    const newOutlets = [...formData.outlets];
    newOutlets[index] = value;
    setFormData(prev => ({
      ...prev,
      outlets: newOutlets
    }));
  };

  const addOutlet = () => {
    setFormData(prev => ({
      ...prev,
      outlets: [...prev.outlets, '']
    }));
  };

  const removeOutlet = (index: number) => {
    const newOutlets = formData.outlets.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      outlets: newOutlets
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setImagePreview(base64);
        setFormData(prev => ({
          ...prev,
          image: base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      power: '',
      description: '',
      capacity: '',
      outlets: [''],
      cycles: '',
      chargeTime: '',
      display: '',
      usage: '',
      portability: '',
      maintenance: '',
      tagline: '',
      image: ''
    });
    setImagePreview('');
    setIsEditing(false);
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      power: product.power,
      description: product.description,
      capacity: product.specifications.capacity,
      outlets: product.specifications.outlets,
      cycles: product.specifications.cycles,
      chargeTime: product.specifications.chargeTime,
      display: product.specifications.display,
      usage: product.specifications.usage,
      portability: product.specifications.portability,
      maintenance: product.specifications.maintenance,
      tagline: product.tagline,
      image: product.image
    });
    setImagePreview(product.image);
    setEditingProduct(product);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
      name: formData.name,
      power: formData.power,
      description: formData.description,
      specifications: {
        capacity: formData.capacity,
        outlets: formData.outlets.filter(outlet => outlet.trim() !== ''),
        cycles: formData.cycles,
        chargeTime: formData.chargeTime,
        display: formData.display,
        usage: formData.usage,
        portability: formData.portability,
        maintenance: formData.maintenance
      },
      tagline: formData.tagline,
      image: formData.image
    };

    if (isEditing && editingProduct) {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct(productData);
    }

    resetForm();
  };

  const handleDelete = (productId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      deleteProduct(productId);
    }
  };

  return (
    <div 
      className="min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #131d3b 0%, #1a2a4a 50%, #131d3b 100%)'
      }}
    >
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 
              className="mb-1"
              style={{
                background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Rubik, sans-serif'
              }}
            >
              Gestión de Productos
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
              Administra las baterías y especificaciones del catálogo
            </p>
          </div>
          <button
            className="btn border-0 fw-bold"
            style={{
              background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
              color: '#131d3b',
              borderRadius: '10px',
              padding: '10px 20px'
            }}
            onClick={() => setShowForm(true)}
          >
            ➕ Agregar Producto
          </button>
        </div>

        {/* Product Form Modal */}
        {showForm && (
          <div 
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              zIndex: 1050
            }}
          >
            <div 
              className="card border-0"
              style={{
                background: 'rgba(19, 29, 59, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '90%',
                maxWidth: '800px',
                maxHeight: '90vh',
                overflow: 'auto'
              }}
            >
              <div className="card-header border-0 d-flex justify-content-between align-items-center p-4">
                <h5 className="mb-0" style={{ color: '#ffffff' }}>
                  {isEditing ? 'Editar Producto' : 'Agregar Nuevo Producto'}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={resetForm}
                ></button>
              </div>

              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Basic Info */}
                    <div className="col-md-6">
                      <label className="form-label text-white">Nombre del Producto</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-control"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-white">Potencia</label>
                      <input
                        type="text"
                        name="power"
                        value={formData.power}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Ej: 2500W"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                        required
                      />
                    </div>

                    {/* Description */}
                    <div className="col-12">
                      <label className="form-label text-white">Descripción</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="form-control"
                        rows={3}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff',
                          resize: 'none'
                        }}
                        required
                      />
                    </div>

                    {/* Specifications */}
                    <div className="col-md-6">
                      <label className="form-label text-white">Capacidad</label>
                      <input
                        type="text"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Ej: 2,048 watts hora (Wh)"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-white">Ciclos de Uso</label>
                      <input
                        type="text"
                        name="cycles"
                        value={formData.cycles}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Ej: 3,000"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                        required
                      />
                    </div>

                    {/* Outlets */}
                    <div className="col-12">
                      <label className="form-label text-white">Conectores y Puertos</label>
                      {formData.outlets.map((outlet, index) => (
                        <div key={index} className="d-flex gap-2 mb-2">
                          <input
                            type="text"
                            value={outlet}
                            onChange={(e) => handleOutletChange(index, e.target.value)}
                            className="form-control"
                            placeholder="Ej: 4 conectores AC 110 / 120V"
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              borderRadius: '10px',
                              color: '#ffffff'
                            }}
                          />
                          {formData.outlets.length > 1 && (
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeOutlet(index)}
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-light"
                        onClick={addOutlet}
                      >
                        ➕ Agregar Puerto
                      </button>
                    </div>

                    {/* More Specifications */}
                    <div className="col-md-6">
                      <label className="form-label text-white">Tiempo de Carga</label>
                      <input
                        type="text"
                        name="chargeTime"
                        value={formData.chargeTime}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Ej: 1 hora y 30 minutos"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-white">Pantalla Digital</label>
                      <input
                        type="text"
                        name="display"
                        value={formData.display}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Ej: Monitoreo en tiempo real"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label text-white">Uso Recomendado</label>
                      <textarea
                        name="usage"
                        value={formData.usage}
                        onChange={handleInputChange}
                        className="form-control"
                        rows={2}
                        placeholder="Ej: Neveras, microondas, abanicos..."
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff',
                          resize: 'none'
                        }}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-white">Portabilidad</label>
                      <input
                        type="text"
                        name="portability"
                        value={formData.portability}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Ej: No requiere instalación"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-white">Mantenimiento</label>
                      <input
                        type="text"
                        name="maintenance"
                        value={formData.maintenance}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Ej: Cero mantenimiento requerido"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label text-white">Eslogan</label>
                      <input
                        type="text"
                        name="tagline"
                        value={formData.tagline}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Ej: Silenciosa. Eficiente. Siempre lista."
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                        required
                      />
                    </div>

                    {/* Image Upload */}
                    <div className="col-12">
                      <label className="form-label text-white">Imagen del Producto</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="form-control"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: '#ffffff'
                        }}
                      />
                      {imagePreview && (
                        <div className="mt-3 text-center">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            style={{
                              maxHeight: '200px',
                              maxWidth: '100%',
                              objectFit: 'contain',
                              borderRadius: '10px'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex gap-3 justify-content-end mt-4">
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={resetForm}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="btn border-0 fw-bold"
                      style={{
                        background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                        color: '#131d3b',
                        borderRadius: '10px',
                        padding: '10px 20px'
                      }}
                    >
                      {isEditing ? 'Actualizar' : 'Guardar'} Producto
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6">
              <div 
                className="card border-0 h-100"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <div 
                  className="position-relative"
                  style={{
                    height: '200px',
                    background: `linear-gradient(45deg, rgba(180, 254, 0, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20px 20px 0 0'
                  }}
                >
                  <img 
                    src={product.image}
                    alt={product.name}
                    style={{
                      maxHeight: '180px',
                      maxWidth: '90%',
                      objectFit: 'contain'
                    }}
                  />
                  <div 
                    className="position-absolute top-0 end-0 m-3 px-2 py-1 rounded-pill"
                    style={{
                      background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                      color: '#131d3b',
                      fontWeight: '700',
                      fontSize: '12px'
                    }}
                  >
                    {product.power}
                  </div>
                </div>

                <div className="card-body p-3">
                  <h6 
                    className="card-title fw-bold mb-2"
                    style={{ color: '#ffffff', fontSize: '1rem' }}
                  >
                    {product.name}
                  </h6>
                  <p 
                    className="card-text mb-2"
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '12px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {product.description}
                  </p>
                  
                  <div className="d-flex gap-2 mt-3">
                    <button
                      className="btn btn-sm border-0 fw-bold flex-fill"
                      style={{
                        background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                        color: '#131d3b',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                      onClick={() => handleEdit(product)}
                    >
                      ✏️ Editar
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(product.id)}
                      style={{
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-5">
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px' }}>
              No hay productos disponibles. ¡Agrega el primer producto!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManager;