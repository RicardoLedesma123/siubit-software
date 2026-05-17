import React from 'react';
import './Solutions.css';

import imgPortal from '../assets/generated/solution_portal_1778994589793.png';
import imgERP from '../assets/generated/solution_erp_1778994604345.png';
import imgMedical from '../assets/generated/solution_medical_1778994621225.png';

const solutionsData = [
  {
    title: 'Portal de Proveedores',
    description: 'Facturas, estatus, incidencias y pagos en un solo lugar. Reduce la carga administrativa.',
    category: 'Operación',
    image: imgPortal
  },
  {
    title: 'ERP para Comercializadoras',
    description: 'Control total de inventario, ventas y logística con analítica para mejores decisiones.',
    category: 'ERP',
    image: imgERP
  },
  {
    title: 'Sistema de Citas Médicas',
    description: 'Agenda por especialista, disponibilidad en tiempo real y recordatorios automatizados.',
    category: 'Salud',
    image: imgMedical
  }
];

const Solutions = () => {
  return (
    <section id="soluciones" className="solutions">
      <div className="container">
        <div className="solutions-header">
          <h2 className="section-title">Soluciones <span className="text-primary">Destacadas</span></h2>
          <p className="section-subtitle">Implementamos plataformas probadas para acelerar tus resultados, con personalización total.</p>
        </div>
        
        <div className="solutions-grid">
          {solutionsData.map((sol, index) => (
            <div key={index} className="solution-card glass">
              <div className="solution-img-wrapper">
                <img src={sol.image} alt={sol.title} className="solution-img" />
              </div>
              <div className="solution-content">
                <span className="solution-category">{sol.category}</span>
                <h3 className="solution-title">{sol.title}</h3>
                <p className="solution-description">{sol.description}</p>
                <a href="#contacto" className="solution-link">Saber más &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
