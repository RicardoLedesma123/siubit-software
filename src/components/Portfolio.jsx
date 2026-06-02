import React, { useState } from 'react';
import './Portfolio.css';
import gymImg from '../assets/generated/portfolio_gym.png';
import cabinsImg from '../assets/generated/portfolio_cabins.png';
import litfitImg from '../assets/generated/portfolio_litfit.png';
import earlytiesImg from '../assets/generated/portfolio_earlyties.png';
import atmporalImg from '../assets/generated/portfolio_atmporal.png';
import { FiArrowUpRight, FiArrowLeft } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: 'Volcano Gym',
    url: 'https://landing-page-gym-xi.vercel.app/',
    description: 'Landing page corporativa y de captación de prospectos diseñada para un gimnasio moderno. Cuenta con optimización de conversiones, llamado a la acción enfocado a ventas, diseño oscuro de alto contraste y animaciones dinámicas.',
    category: 'landings',
    tags: ['React', 'Vite', 'CSS3', 'Performance', 'Captación'],
    image: gymImg
  },
  {
    id: 2,
    title: 'Huitzilcalli Cabañas',
    url: 'https://huitzilcalli.com',
    description: 'Plataforma oficial de reservas y turismo para un hotel de cabañas boutique rodeado de naturaleza en Aguascalientes. Incluye galerías multimedia, descripción detallada de amenidades e integración directa con canales de reservaciones.',
    category: 'plataformas',
    tags: ['HTML5', 'CSS3', 'SEO', 'Reservas', 'Turismo'],
    image: cabinsImg
  },
  {
    id: 3,
    title: 'LITFIT México',
    url: 'https://litfitmexico.com/',
    description: 'Tienda en línea (E-commerce) moderna enfocada en la distribución de suplementos alimenticios y nutrición deportiva. Desarrollada para proporcionar una navegación rápida, carga instantánea de productos y una experiencia de compra fluida.',
    category: 'ecommerce',
    tags: ['React', 'E-commerce', 'UX/UI', 'Nutrición'],
    image: litfitImg
  },
  {
    id: 4,
    title: 'Early Ties',
    url: 'https://earlyties.com',
    description: 'Sitio corporativo y educativo para un centro especializado en desarrollo infantil y estimulación acuática. Diseñado con tonos suaves y amigables, transmitiendo confianza y facilitando el contacto para clases de matronatación.',
    category: 'landings',
    tags: ['WordPress', 'Elementor', 'SEO', 'Infantil', 'Responsive'],
    image: earlytiesImg
  },
  {
    id: 5,
    title: 'Atmporal',
    url: 'https://atmporal.mx',
    description: 'Boutique virtual de alta gama especializada en moda y accesorios de lujo con un enfoque estético minimalista. Cuenta con pasarelas de pago integradas y una galería limpia para destacar los detalles de cada producto.',
    category: 'ecommerce',
    tags: ['Shopify', 'Liquid', 'E-commerce', 'Moda Lujo', 'Minimalista'],
    image: atmporalImg
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio-section">
      <div className="container">
        
        {/* Botón superior de retroceso */}
        <div className="portfolio-back-wrapper">
          <a href="#inicio" className="btn-back">
            <FiArrowLeft size={18} />
            <span>Regresar al inicio</span>
          </a>
        </div>

        {/* Título de la página */}
        <div className="portfolio-header text-center">
          <span className="subtitle-brand">Casos de Éxito</span>
          <h1 className="portfolio-title">
            Proyectos que Hemos <span className="text-primary">Construido</span>
          </h1>
          <p className="portfolio-subtitle">
            Diseñamos y desarrollamos soluciones web a la medida que potencian marcas, impulsan ventas y optimizan operaciones. Explora el trabajo realizado para nuestros clientes.
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="portfolio-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ecommerce' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ecommerce')}
          >
            E-commerce
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'landings' ? 'active' : ''}`}
            onClick={() => setActiveFilter('landings')}
          >
            Landings & Sitios Web
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'plataformas' ? 'active' : ''}`}
            onClick={() => setActiveFilter('plataformas')}
          >
            Plataformas
          </button>
        </div>

        {/* Grid de proyectos */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-overlay"
                  >
                    <FiArrowUpRight size={24} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category-badge">{project.category === 'ecommerce' ? 'E-commerce' : project.category === 'landings' ? 'Landing Page' : 'Plataforma'}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-project-visit"
                >
                  <span>Visitar sitio</span>
                  <FiArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Botón inferior de retorno */}
        <div className="portfolio-footer-cta text-center">
          <p>¿Tienes una idea en mente para tu próximo proyecto?</p>
          <div className="portfolio-cta-buttons">
            <a href="#contacto" className="btn btn-primary">Empieza tu proyecto ahora</a>
            <a href="#inicio" className="btn btn-secondary">Ir a Inicio</a>
          </div>
        </div>

      </div>
      <div className="portfolio-bg-glow-1"></div>
      <div className="portfolio-bg-glow-2"></div>
    </section>
  );
};

export default Portfolio;
