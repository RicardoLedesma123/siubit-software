import React, { useState } from 'react';
import './CtaBanner.css';
import DiagnosticModal from './DiagnosticModal';

const CtaBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="cta-banner">
        <div className="container">
          <div className="cta-content glass">
            <div className="cta-text">
              <h2>¿Listo para transformar tu empresa con tecnología?</h2>
              <p>Comienza hoy con la implementación de software a la medida o IA en tu empresa y automatiza el éxito de tus operaciones.</p>
            </div>
            <div className="cta-actions">
              <button onClick={() => setIsModalOpen(true)} className="btn btn-primary cta-btn">
                Solicitar Diagnóstico
              </button>
              <a href="https://wa.me/524492610335" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp cta-btn">
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <DiagnosticModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CtaBanner;
