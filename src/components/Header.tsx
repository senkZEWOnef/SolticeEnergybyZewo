'use client';

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark fixed-top" 
      style={{
        background: 'rgba(19, 29, 59, 0.98)', 
        backdropFilter: 'blur(40px)',
        boxShadow: '0 2px 40px rgba(0, 0, 0, 0.15)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '15px 0',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <a className="navbar-brand text-decoration-none" href="#inicio">
          <h3 
            className="mb-0 fw-bold"
            style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #b4fe00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.5px'
            }}
          >
            Soltice Energy
          </h3>
        </a>

        <button 
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(180, 254, 0, 0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
            <li className="nav-item">
              <a 
                className="nav-link fw-medium px-4 py-2 text-decoration-none position-relative" 
                href="#inicio"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  transition: 'all 0.3s ease',
                  borderRadius: '25px',
                  fontSize: '15px',
                  fontWeight: '500',
                  letterSpacing: '0.3px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(180, 254, 0, 0.15)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-medium px-4 py-2 text-decoration-none position-relative" 
                href="#productos"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  transition: 'all 0.3s ease',
                  borderRadius: '25px',
                  fontSize: '15px',
                  fontWeight: '500',
                  letterSpacing: '0.3px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(180, 254, 0, 0.15)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-medium px-4 py-2 text-decoration-none position-relative" 
                href="#testimonios"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  transition: 'all 0.3s ease',
                  borderRadius: '25px',
                  fontSize: '15px',
                  fontWeight: '500',
                  letterSpacing: '0.3px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(180, 254, 0, 0.15)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Testimonios
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-medium px-4 py-2 text-decoration-none position-relative" 
                href="#contacto"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  transition: 'all 0.3s ease',
                  borderRadius: '25px',
                  fontSize: '15px',
                  fontWeight: '500',
                  letterSpacing: '0.3px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(180, 254, 0, 0.15)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Contacto
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;