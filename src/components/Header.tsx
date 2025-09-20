'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/about', label: 'Sobre Nosotros' },
    { href: '/contacto', label: 'Contacto' }
  ];

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
      style={{
        background: isScrolled 
          ? 'rgba(15, 23, 42, 0.95)' 
          : 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(226, 232, 240, 0.1)' 
          : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="container">
        <a 
          className="navbar-brand d-flex align-items-center text-decoration-none" 
          href="#inicio"
          style={{
            height: isScrolled ? '50px' : '60px',
            transition: 'height 0.3s ease'
          }}
        >
          <img 
            src="/name.png" 
            alt="Soltice Energy" 
            style={{
              height: isScrolled ? '200px' : '240px',
              width: 'auto',
              maxWidth: '1000px',
              objectFit: 'contain',
              transition: 'height 0.3s ease'
            }}
          />
        </a>

        <button 
          className="navbar-toggler border-0 d-lg-none"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            padding: '10px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a 
                  className="nav-link px-4 py-2 text-decoration-none position-relative rounded-3" 
                  href={link.href}
                  style={{
                    color: 'rgba(248, 250, 252, 0.9)',
                    fontWeight: '500',
                    fontSize: '15px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '-0.025em',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'rgba(248, 250, 252, 0.9)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-2">
              <a 
                className="btn btn-modern gradient-primary px-4 py-2" 
                href="#contacto"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  color: '#000000'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Consulta Gratis
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;