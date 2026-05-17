import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Desarrollo de Software a la Medida',
    description: 'Sistemas únicos que se adaptan a tus procesos reales. Evoluciona con un software hecho exclusivamente para ti.',
    icon: '💻'
  },
  {
    title: 'Inteligencia Artificial para Empresas',
    description: 'Transforma tu operación con IA que captura, analiza y decide. Desde OCR hasta agentes inteligentes.',
    icon: '🧠'
  },
  {
    title: 'ERP y Sistemas Administrativos',
    description: 'Diseñamos ERPs que se adaptan a ti desde el primer clic. Control total de tu inventario, ventas y operación.',
    icon: '📊'
  }
];

const Services = () => {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2 className="section-title">Nuestros <span className="text-primary">Servicios</span></h2>
        <p className="section-subtitle">Ofrecemos soluciones tecnológicas integrales adaptadas a las necesidades de cada proyecto.</p>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card glass">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
