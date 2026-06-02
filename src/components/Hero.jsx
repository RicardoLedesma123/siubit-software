import React from 'react';
import './Hero.css';
import heroImg from '../assets/generated/hero_tech_graphic_1778994578669.png';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Transformamos tus ideas en <br />
            <span className="text-primary">Software de Alto Nivel</span>
          </h1>
          <p className="hero-subtitle">
            Diseñamos y desarrollamos páginas y aplicaciones web a la medida que impulsan el crecimiento de tu negocio. Modernas, rápidas y escalables.
          </p>
          <div className="hero-cta">
            <a href="#contacto" className="btn btn-primary">Empezar ahora</a>
            <a href="#/portafolio" className="btn btn-secondary">Portafolio</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Software de alto nivel" className="hero-image" />
        </div>
      </div>
      <div className="hero-bg-glow"></div>
    </section>
  );
};

export default Hero;
