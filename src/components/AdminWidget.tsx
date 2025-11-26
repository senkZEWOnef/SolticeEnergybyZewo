'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleAdminAccess = () => {
    router.push('/admin');
  };

  return (
    <>
      {/* Admin Access Button */}
      <div
        className="position-fixed"
        style={{
          bottom: '20px',
          left: '20px',
          zIndex: 1000
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className="btn border-0 shadow-lg d-flex align-items-center justify-content-center"
          style={{
            width: isHovered ? 'auto' : '50px',
            height: '50px',
            borderRadius: '25px',
            background: 'linear-gradient(135deg, #131d3b 0%, #2c3e50 100%)',
            color: '#ffffff',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            padding: isHovered ? '0 20px 0 15px' : '0'
          }}
          onClick={handleAdminAccess}
          title="Acceso Administrativo"
        >
          <span style={{ fontSize: '20px', marginRight: isHovered ? '8px' : '0' }}>
            ⚙️
          </span>
          {isHovered && (
            <span 
              style={{ 
                fontSize: '14px', 
                fontWeight: '600',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            >
              Admin
            </span>
          )}
        </button>
      </div>

      {/* Quick Admin Panel */}
      {isVisible && (
        <div
          className="position-fixed"
          style={{
            bottom: '80px',
            left: '20px',
            zIndex: 999
          }}
        >
          <div
            className="card border-0 shadow-lg"
            style={{
              background: 'rgba(19, 29, 59, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              minWidth: '200px'
            }}
          >
            <div className="card-body p-3">
              <h6 className="card-title mb-3 text-white">
                Acceso Rápido
              </h6>
              
              <div className="d-grid gap-2">
                <button
                  className="btn btn-sm border-0 text-start"
                  style={{
                    background: 'rgba(180, 254, 0, 0.1)',
                    color: '#b4fe00',
                    borderRadius: '8px',
                    fontSize: '12px',
                    padding: '8px 12px'
                  }}
                  onClick={handleAdminAccess}
                >
                  💬 Dashboard Chats
                </button>
                
                <button
                  className="btn btn-sm border-0 text-start"
                  style={{
                    background: 'rgba(0, 212, 255, 0.1)',
                    color: '#00d4ff',
                    borderRadius: '8px',
                    fontSize: '12px',
                    padding: '8px 12px'
                  }}
                  onClick={() => {
                    router.push('/admin');
                    // Could set a URL parameter to open products tab directly
                  }}
                >
                  🔋 Gestión Productos
                </button>
                
                <button
                  className="btn btn-sm border-0 text-start"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    borderRadius: '8px',
                    fontSize: '12px',
                    padding: '8px 12px'
                  }}
                  onClick={() => {
                    const savedAdminName = localStorage.getItem('soltice_admin_name');
                    if (savedAdminName) {
                      localStorage.removeItem('soltice_admin_name');
                      window.location.reload();
                    }
                  }}
                >
                  🚪 Cerrar Sesión
                </button>
              </div>
            </div>
            
            <div 
              className="position-absolute top-0 end-0 m-2"
              style={{ cursor: 'pointer' }}
              onClick={() => setIsVisible(false)}
            >
              <span className="text-white-50" style={{ fontSize: '12px' }}>✕</span>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Quick Panel */}
      <div
        className="position-fixed"
        style={{
          bottom: '80px',
          left: '75px',
          zIndex: 1000
        }}
      >
        <button
          className="btn border-0 shadow-sm"
          style={{
            width: '35px',
            height: '35px',
            borderRadius: '17px',
            background: isVisible 
              ? 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)'
              : 'rgba(255, 255, 255, 0.9)',
            color: isVisible ? '#131d3b' : '#131d3b',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setIsVisible(!isVisible)}
          title={isVisible ? 'Ocultar panel' : 'Mostrar opciones rápidas'}
        >
          {isVisible ? '📌' : '⚡'}
        </button>
      </div>
    </>
  );
};

export default AdminWidget;