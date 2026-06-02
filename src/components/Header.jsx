import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImg from '../assets/SiuBit Software/logo-negativo.png';

const Header = ({ currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <a href="#inicio">
            <img src={logoImg} alt="SiuBit Software" className="header-logo-img" />
          </a>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#inicio" className={currentView === 'landing' ? 'active' : ''}>
                Inicio
              </a>
            </li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#beneficios">Nosotros</a></li>
            <li>
              <a href="#/portafolio" className={currentView === 'portfolio' ? 'active' : ''}>
                Portafolio
              </a>
            </li>
          </ul>
        </nav>
        <a href="#contacto" className="btn btn-primary">Cotizar Proyecto</a>
      </div>
    </header>
  );
};

export default Header;
