import React from 'react';
import './Industries.css';

const industriesData = [
  { name: 'Manufactura', icon: '🏭' },
  { name: 'Salud', icon: '⚕️' },
  { name: 'Logística', icon: '🚚' },
  { name: 'Comercio B2B', icon: '🏢' },
  { name: 'Servicios', icon: '🤝' }
];

const Industries = () => {
  return (
    <section className="industries">
      <div className="container">
        <div className="industries-header">
          <h2 className="section-title">Soluciones por <span className="text-primary">Industria</span></h2>
          <p className="section-subtitle">Experiencia comprobada adaptando tecnología a sectores específicos.</p>
        </div>
        
        <div className="industries-scroll">
          {industriesData.map((ind, index) => (
            <div key={index} className="industry-item glass">
              <span className="industry-icon">{ind.icon}</span>
              <span className="industry-name">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
